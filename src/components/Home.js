import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCurrentQuestions, getCurrentUsers } from "../redux/actions";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";

function Home(props) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!props.auth.user) navigate("/login");
  }, [navigate, props.auth]);

  useEffect(() => {
    props.dispatch(getCurrentQuestions());
    if (props.auth.users.length === 0) {
      props.dispatch(getCurrentUsers());
    }
  }, [props]);
  
  return (
    <div className="app">
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default connect((state) => state)(Home);
