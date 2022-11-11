import React from "react";

const DetailVoted = ({ poll, type }) => {
  const optionOneVotes = poll?.optionOne?.votes?.length || 0;
  const optionTwoVotes = poll?.optionTwo?.votes?.length || 0;
  return (
    <table id="wrapper-voted">
      <thead>
        <tr>
          <th className="voted-title"></th>
          <th className="voted-title">{poll?.optionOne?.text}</th>
          <th className="voted-title">{poll?.optionTwo?.text}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="voted-detail">Percent</td>
          <td className={`voted-detail ${type === 1 ? "active" : ""}`}>
            {(
              (optionOneVotes / (optionOneVotes + optionTwoVotes)) *
              100
            ).toFixed(2)}{" "}
            %
          </td>
          <td className={`voted-detail ${type === 1 ? "" : "active"}`}>
            {(
              (optionTwoVotes / (optionOneVotes + optionTwoVotes)) *
              100
            ).toFixed(2)}{" "}
            %
          </td>
        </tr>
        <tr>
          <td className="voted-detail">Count</td>
          <td className={`voted-detail ${type === 1 ? "active" : ""}`}>
            {optionOneVotes}
          </td>
          <td className={`voted-detail ${type === 1 ? "" : "active"}`}>
            {optionTwoVotes}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default DetailVoted;
