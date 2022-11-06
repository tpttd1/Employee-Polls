import React, { memo } from "react";
import Poll from "./Poll";

const Panel = (props) => {
  const { title, questions } = props;
  return (
    <div className="wrapper-panel">
      <div className="title-panel">{title}</div>
      <div className="content-panel">
        {questions.map((item, index) => {
          return <Poll key={index} question={item} />;
        })}
      </div>
    </div>
  );
};

export default memo(Panel);
