import React, { memo } from "react";
import Answer from "./Answer";

const PollList = ({ poll, handleClick }) => {
  return (
    <>
      <p>Would You Rather</p>
      <div className="answers">
        <Answer
          value="optionOne"
          content={poll?.optionOne?.text}
          handleClick={handleClick}
        />
        <Answer
          value="optionTwo"
          content={poll?.optionTwo?.text}
          handleClick={handleClick}
        />
      </div>
    </>
  );
};

export default memo(PollList);
