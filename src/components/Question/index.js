import { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import Panel from "./Panel";

const Question = (props) => {
  const [newQuestions, setNewQuestions] = useState([]);
  const [doneQuestions, setDoneQuestions] = useState([]);

  const {
    auth: { user },
    question: { questions },
  } = props;

  useEffect(() => {
    if (user) {
      const newPoll = [];
      const donePoll = [];

      const answers = Object.keys(user?.answers);
      questions.forEach((question) => {
        if (answers.includes(question.id)) {
          donePoll.push(question);
        } else {
          newPoll.push(question);
        }
      });
      setNewQuestions(newPoll);
      setDoneQuestions(donePoll);
    }
  }, [questions, user]);

  return (
    <Fragment>
      <Panel title="New questions" questions={newQuestions} />
      <Panel title="Done" questions={doneQuestions} />
    </Fragment>
  );
};

export default connect((state) => state)(Question);
