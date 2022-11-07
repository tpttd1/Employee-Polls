import React from "react";

const DetailVoted = ({ poll, count, type }) => {
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
            {((poll?.optionOne?.votes?.length / count) * 100).toFixed(2)} %
          </td>
          <td className={`voted-detail ${type === 1 ? "" : "active"}`}>
            {((poll?.optionTwo?.votes?.length / count) * 100).toFixed(2)} %
          </td>
        </tr>
        <tr>
          <td className="voted-detail">Count</td>
          <td className={`voted-detail ${type === 1 ? "active" : ""}`}>
            {poll?.optionOne?.votes?.length}
          </td>
          <td className={`voted-detail ${type === 1 ? "" : "active"}`}>
            {poll?.optionTwo?.votes?.length}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default DetailVoted;
