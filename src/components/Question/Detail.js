import React, { useEffect, useMemo, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCurrentQuestions, loginUser, saveQuestionAnswer } from "../../redux/actions";
import Navbar from "../Navbar";
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
    user.answers[questionID] = content;
    props.dispatch(loginUser(user));
    props.dispatch(getCurrentQuestions());
    localStorage.setItem("voted", "true");
    window.alert("Success");
    navigate("/");
  };

  useEffect(() => {
    const question = questions.find((q) => q.id === questionID);
    if (questions.length === 0 || !question) navigate("/login");
    setPoll(question);
  }, [navigate, questionID, questions]);

  const hasDone = useMemo(() => {
    if (!poll) return 0;
    if (poll.optionOne.votes.includes(user.id)) return 1;
    if (poll.optionTwo.votes.includes(user.id)) return 2;
    return 0;
  }, [poll, user?.id]);

  return (
    <>
      <Navbar />
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
          <DetailVoted poll={poll} type={hasDone} />
        ) : (
          <PollList poll={poll} handleClick={handleClick} />
        )}
      </div>
    </>
  );
};

export default connect((state) => state)(Detail);
