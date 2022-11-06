import { Fragment } from "react";
import { connect } from "react-redux";
import Panel from "./Panel";

const Question = (props) => {
  return (
    <Fragment>
      <Panel title="New questions" questions={props.questions} />
      {/* <Panel title="Done" /> */}
    </Fragment>
  );
};

export default connect((state) => state.question)(Question);
