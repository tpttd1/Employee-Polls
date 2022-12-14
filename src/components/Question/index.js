import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import Panel from "./Panel";

const Question = (props) => {
  const [newQuestions, setNewQuestions] = useState([]);
  const [doneQuestions, setDoneQuestions] = useState([]);
  const [showAnswered, setShowAnswered] = useState(false);

  const {
    auth: { user },
    question: { questions },
  } = props;

  useEffect(() => {
    if (user) {
      const newPoll = [];
      const donePoll = [];

      const answers = user?.answers ? Object.keys(user.answers) : [];
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

  useEffect(() => {
    const voted = localStorage.getItem('voted');
    if (voted) {
      setShowAnswered(true);
      localStorage.removeItem('voted');
    }
  }, []);

  return (
    <Fragment>
      <div id="wrapper-btn-show">
        <button
          data-testid="btn-show-done"
          className="btn-show-answer"
          onClick={() => setShowAnswered(false)}
        >
          Show Unanswered
        </button>
        <button
          data-testid="btn-show-answer"
          className="btn-show-answer"
          onClick={() => setShowAnswered(true)}
        >
          Show Answered
        </button>
      </div>
      {showAnswered ? (
        <Panel title="Done" questions={doneQuestions} />
      ) : (
        <Panel title="New questions" questions={newQuestions} />
      )}
    </Fragment>
  );
};

export default connect((state) => state)(Question);
