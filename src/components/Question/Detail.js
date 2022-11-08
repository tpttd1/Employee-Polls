import React, { useEffect, useMemo, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCurrentQuestions, saveQuestionAnswer } from "../../redux/actions";
import DetailVoted from "./DetailVoted";
import PollList from "./PollList";

const Detail = (props) => {
  const navigate = useNavigate();
  const [poll, setPoll] = useState(null);

  const {
    auth: { user, users },
    question: { questions },
  } = props;

  const pathname = window.location.pathname;
  const questionID = pathname.substring(11, pathname.length);

  const avatar = useMemo(() => {
    return users.find((u) => u.id === poll?.author);
  }, [poll?.author, users]);

  const handleClick = (content) => {
    const answer = { authedUser: user.id, qid: questionID, answer: content };
    props.dispatch(saveQuestionAnswer(answer));
    window.alert("Success");
    props.dispatch(getCurrentQuestions());
    navigate("/");
  };

  useEffect(() => {
    const question = questions.find((q) => q.id === questionID);
    if (questions.length === 0 || !question) navigate("/error");
    setPoll(question);
  }, [navigate, questionID, questions]);

  const hasDone = useMemo(() => {
    if (!poll) return 0;
    if (poll.optionOne.votes.includes(user.id)) return 1;
    if (poll.optionTwo.votes.includes(user.id)) return 2;
    return 0;
  }, [poll, user?.id]);

  return (
    <div id="wrapper-new">
      <h1>{poll?.author}</h1>
      <div className="img-avatar">
        <img
          src={avatar?.avatarURL || "/login-icon.png"}
          alt="Avatar"
          className="avatar"
        />
      </div>
      {hasDone ? (
        <DetailVoted poll={poll} count={users.length} type={hasDone} />
      ) : (
        <PollList poll={poll} handleClick={handleClick} />
      )}
    </div>
  );
};

export default connect((state) => state)(Detail);
