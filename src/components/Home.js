import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCurrentQuestions, getCurrentUsers } from "../redux/actions";
import Dashboard from "./Dashboard";

function Home(props) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!props.auth.user) navigate("/login");
  }, [navigate, props.auth]);

  useEffect(() => {
    props.dispatch(getCurrentQuestions());
    props.dispatch(getCurrentUsers());
  }, []);

  return (
    <div className="app">
      <Dashboard />
    </div>
  );
}

export default connect((state) => state)(Home);
