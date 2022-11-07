import React from "react";

const Answer = ({ value, content, handleClick, percent, disabled = false }) => {
  return (
    <div className="wrapper-answer">
      <div className="answer-content">{content}</div>
      <div
        className={`btn-submit-answer ${disabled ? "disabled" : ""}`}
        onClick={() => handleClick(value)}
      >
        Click
      </div>
    </div>
  );
};

export default Answer;
