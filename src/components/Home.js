import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { _getQuestions, _getUsers } from "../data/_DATA";
import { storeQuestions, storeUsers } from "../redux/actions";
import Dashboard from "./Dashboard";

function Home(props) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!props.auth.user) navigate("/login");
  }, [navigate, props.auth]);

  useEffect(() => {
    _getQuestions().then((data) => {
      const questions = Object.values(data);
      questions.sort((a, b) => {
        return b.timestamp - a.timestamp;
      });
      props.dispatch(storeQuestions(questions));
    });
    _getUsers().then((data) => {
      props.dispatch(storeUsers(Object.values(data)));
    });
  }, []);

  return (
    <div className="app">
      <Dashboard />
    </div>
  );
}

export default connect((state) => state)(Home);
