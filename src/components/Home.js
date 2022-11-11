import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCurrentQuestions, getCurrentUsers } from "../redux/actions";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";

function Home(props) {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState(0);
  const path = window.location.pathname;

  useEffect(() => {
    if (!props.auth.user) navigate("/login");
  }, [navigate, props.auth]);

  useEffect(() => {
    if (props.question.questions.length === 0) {
      props.dispatch(getCurrentQuestions());
    }
    if (props.auth.users.length === 0) {
      props.dispatch(getCurrentUsers());
    }
  }, [props]);

  useEffect(() => {
    const { pathname } = window.location;
    if (pathname === "/leaderboard") setSelectedTab(1);
    if (pathname === "/add") setSelectedTab(2);
    if (pathname === "/" || pathname.includes("questions")) setSelectedTab(0);
  }, [path]);
  
  return (
    <div className="app">
      <Navbar />
      <Dashboard selectedTab={selectedTab} />
    </div>
  );
}

export default connect((state) => state)(Home);
