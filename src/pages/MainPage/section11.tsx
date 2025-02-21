import { Link } from "react-router-dom";
import "../../css/MainPage/Section11/style.scss";
const Section11 = () => {
  return (
    <div className="mainPage">
      <div className="section__11">
        <div className="container">
          <div className="section__11-heading">Ready to get started?</div>
          <div className="section__11-subheading">
            Create an account with Evoxt now or Contact us to learn more.
          </div>
          <div className="section__11-buttons-wrapper">
            <Link to="/deploy/dashboard">
              <div className="button button-account">Create Account</div>
            </Link>
            <Link to="/deploy/submitticket">
              <div className="button button-contact">Contact Us</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section11;
