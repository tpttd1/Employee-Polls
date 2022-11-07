import React, { useMemo } from "react";
import { connect } from "react-redux";

const LeaderBoard = (props) => {
  const {
    auth,
    question: { questions },
  } = props;

  const rankPoll = useMemo(() => {
    auth.users.sort((a, b) => {
      return (
        b.questions?.length +
        Object.keys(b.answers)?.length -
        (a.questions?.length + Object.keys(a.answers).length)
      );
    });
    return auth.users;
  }, [auth, questions.length]);

  return (
    <table id="wrapper-leaderboard">
      <thead>
        <tr>
          <th className="board-user">Users</th>
          <th className="board-answered">Answered</th>
          <th className="board-created">Created</th>
        </tr>
      </thead>
      <tbody>
        {rankPoll.map((item) => {
          return (
            <tr key={item.id}>
              <td className="board-user">
                <div className="board-user__content">
                  <img
                    width="40"
                    src={item?.avatarURL || "logo192.png"}
                    alt=""
                  />
                  <div className="board-info">
                    <div className="board-user-name">{item.name}</div>
                    <div className="board-user-id">{item.id}</div>
                  </div>
                </div>
              </td>
              <td className="board-answered">
                {Object.keys(item.answers).length || 0}
              </td>
              <td className="board-created">{item.questions?.length || 0}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default connect((state) => state)(LeaderBoard);
