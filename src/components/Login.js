import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../redux/actions";

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

  return (
    <div className="login-page">
      <form className="form-login" onSubmit={onSubmit}>
        <div className="img-container">
          <img src="login-icon.png" alt="Avatar" className="avatar" />
        </div>
        <div className="form-input">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Enter username"
            name="username"
            minLength={3}
            className="input input-username"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            minLength={6}
            className="input input-password"
            required
          />
          <button id="btn-login" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default connect((state) => state)(Login);
