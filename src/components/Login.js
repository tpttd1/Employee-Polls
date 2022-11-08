import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCurrentUsers, loginUser } from "../redux/actions";

function Login(props) {
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");
    const user = { username, password };
    props.dispatch(loginUser(user));
    navigate("/");
  };

  const onChange = (e) => {
    const id = e.target.value;
    if (id !== "none") {
      const user = props.auth.users.find((u) => u.id === id);
      props.dispatch(loginUser(user));
      navigate("/");
    }
  };

  useEffect(() => {
    if (props.auth.users.length === 0) {
      props.dispatch(getCurrentUsers());
    }
  }, []);

  return (
    <div className="login-page">
      <div id="wrapper-login-as">
        <p id="title-login-as">Login as</p>
        <select onChange={onChange} id="select-user">
          <option className="item-user" value="none">
            Select an user
          </option>
          {props.auth.users.map((user) => {
            return (
              <option key={user.id} className="item-user" value={user.id}>
                {user.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default connect((state) => state)(Login);
