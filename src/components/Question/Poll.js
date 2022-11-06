import React from "react";
import { useNavigate } from "react-router-dom";

const convertTime = (unix_timestamp) => {
  const date = new Date(unix_timestamp);
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  const hours = date.getHours();
  let minutes = date.getMinutes();
  if (minutes < 10) minutes = `0${minutes}`;
  return `${hours}:${minutes} | ${month}/${day}/${year}`;
};

const Poll = (props) => {
  const navigate = useNavigate();

  const { id, author, timestamp } = props.question;
  const getTime = convertTime(timestamp);

  const handleShow = () => {
    navigate(`/questions/${id}`);
  };

  return (
    <div className="wrapper-poll">
      <div>{author}</div>
      <p>{getTime}</p>
      <div className="wrapper-btn-show">
        <button className="btn-show" onClick={handleShow}>
          Show
        </button>
      </div>
    </div>
  );
};

export default Poll;
