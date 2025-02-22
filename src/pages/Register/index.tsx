import { Link } from "react-router-dom";
import "../../css/RegisterPage/style.scss";
import { ReactComponent as RegisterImg } from "../../assets/images/LoginPage/Content/LoginPage.svg";
const Register = () => {
  return (
    <div>
      <div className="overflow-x">
        <div className="registerPage">
          <div className="registerPage-container">
            <Link className="img-link" to="/">
              <RegisterImg className="img" />
            </Link>
            <div className="register-panel">
              <div className="row">
                <label className="title">Email Address</label>
                <input
                  type="text"
                  name="firstname"
                  placeholder="Fist Name"
                  autoFocus
                />
              </div>
              <div className="row">
                <label className="title">Email Address</label>
                <input
                  type="text"
                  name="emailaddress"
                  placeholder="Email Address"
                />
              </div>
              <div className="row">
                <label className="title">Password</label>
                <input type="password" name="password" placeholder="Password" />
              </div>
              <div className="row">
                <label className="title">Confirm Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Confirm Password"
                />
              </div>
              <span className="attention">
                Password Strength: Enter a Password
              </span>
              <div className="button">
                <button className="register">
                  <Link to="/login">Register</Link>
                </button>
              </div>
            </div>
            <span className="term-privacy">
              By signing up you agree to our
              <Link to="/terms-of-service"> terms of service </Link>
              and our <Link to="/privacy-policy"> privacy policy.</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
