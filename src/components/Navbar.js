import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../redux/actions";
import TabsItem from "./Dashboard/TabsItem";

const Navbar = (props) => {
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
    navigate("/login");
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
          <img src="/logo192.png" alt="" className="user-avatar__img" />
          <span>
            {props?.auth?.user?.name || "Unknown"}
          </span>
        </div>
        <div id="logout" onClick={onLogout}>
          Logout
        </div>
      </div>
    </ul>
  );
};

export default connect((state) => state)(Navbar);
