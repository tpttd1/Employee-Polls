import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/actions";
import LeaderBoard from "../Leaderboard";
import New from "../New";
import Question from "../Question";
import TabsContent from "./TabsContent";
import TabsItem from "./TabsItem";

const Dashboard = (props) => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState(0);

  const handleClick = (index) => {
    if (index === 0) navigate("/");
    if (index === 1) navigate("/leaderboard");
    if (index === 2) navigate("/add");
    setSelectedTab(index);
  };

  const onLogout = () => {
    props.dispatch(loginUser(null));
  };

  const tabsList = [
    { id: 1, title: "Home" },
    { id: 2, title: "Leaderboard" },
    { id: 3, title: "New" },
  ];

  useEffect(() => {
    const { pathname } = window.location;
    if (pathname === "/leaderboard") setSelectedTab(1);
    if (pathname === "/add") setSelectedTab(2);
    if (pathname === "/" || pathname.includes("questions")) setSelectedTab(0);
  }, []);

  return (
    <div className="dashboard">
      <ul className="wrapper-tabs">
        <div className="list-tabs">
          {tabsList.map((item, index) => (
            <TabsItem
              key={item.id}
              className={selectedTab === index ? "active" : ""}
              handleClick={() => handleClick(index)}
            >
              {item.title}
            </TabsItem>
          ))}
        </div>
        <div className="user-information">
          <div className="user-avatar">
            <img src="logo192.png" alt="" className="user-avatar__img" />
            <span>
              {props.auth.user?.name || props.auth.user?.username || "Unknown"}
            </span>
          </div>
          <div id="logout" onClick={onLogout}>
            Logout
          </div>
        </div>
      </ul>
      <div className="wrapper-tabs__content">
        <TabsContent tabId="0" activeTab={selectedTab}>
          <Question />
        </TabsContent>
        <TabsContent tabId="1" activeTab={selectedTab}>
          <LeaderBoard />
        </TabsContent>
        <TabsContent tabId="2" activeTab={selectedTab}>
          <New author={props.auth.user} update={props} />
        </TabsContent>
      </div>
    </div>
  );
};

export default connect((state) => state)(Dashboard);
