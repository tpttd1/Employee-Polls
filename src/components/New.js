import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentQuestions, saveQuestion } from "../redux/actions";

const New = (props) => {
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const optionOneText = formData.get("optionOneText");
    const optionTwoText = formData.get("optionTwoText");
    const newQuestion = {
      optionOneText,
      optionTwoText,
      author: props.author?.id || props.author?.username,
    };
    props.update.dispatch(saveQuestion(newQuestion));
    props.update.dispatch(getCurrentQuestions());
    window.alert("Created");
    e.target.reset();
    navigate("/");
  };

  return (
    <div id="wrapper-new">
      <h1>Would You Rather</h1>
      <p>Create your own poll</p>
      <form className="form-create-poll" onSubmit={onSubmit}>
        <div className="form-input">
          <label htmlFor="optionOneText">First Option</label>
          <input
            type="text"
            placeholder="Option One"
            name="optionOneText"
            minLength={3}
            className="input input-option"
            required
          />
          <label htmlFor="optionTwoText">Second Option</label>
          <input
            type="text"
            placeholder="Option Two"
            name="optionTwoText"
            minLength={6}
            className="input input-option"
            required
          />
          <button id="btn-login" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default memo(New);
