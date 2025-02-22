import "../../css/LoginPage/style.scss";
import { ReactComponent as LoginImg } from "../../assets/images/LoginPage/Content/LoginPage.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
const Login = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="overflow-x">
      <div className="loginPage">
        <div className="loginPage-container">
          <Link className="img-link" to="/">
            <LoginImg className="img" />
          </Link>
          <div className="loginpanel">
            <div className="row">
              <label className="title">Email Address</label>
              <input
                type="email"
                name="username"
                placeholder="Email Address"
                value="abc123@gmail.com"
                autoFocus
              />
            </div>
            <div className="row">
              <div className="password">
                <label className="title">Password</label>
                <span>Forgot Password?</span>
              </div>
              <input type="password" name="username" value="12312312312" />
            </div>
            <div className="remember-me" onClick={() => setChecked(!checked)}>
              <input
                checked={checked}
                onChange={() => setChecked(!checked)}
                type="checkbox"
              />
              <span>Remember Me</span>
            </div>
            <div className="button">
              <button>
                <Link to="/login">Login</Link>
              </button>
            </div>
            <Link className="register" to="/register">
              Not Registered Yet?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
