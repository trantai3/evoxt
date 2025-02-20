import "../../css/MainPage/Section1/style.scss";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import img from "../../../src/assets/images/MainPage/Section1/img.png";
const Section1 = () => {
  return (
    <div className="MainPage__Section1">
      <div className="content">
        <div className="content-left">
          <div className="heading1">
            <FaChevronRight /> High CPU Frequence
          </div>
          <div className="heading2">Virtual Machines.</div>
          <h3 className="subheading">
            {" "}
            Industry Leading Single Core CPU Performance, up to 6.0 GHz Turbo
            Clock*
          </h3>
          <p className="disclaimer-heading">
            {" "}
            *Some legacy models are on 3.5 GHz+ Base Clock, if you are assigned
            3.5GHz+ and are dissatisfied, please contact us.
          </p>
          <Link className="deploy-button" to="/deploy">
            Deploy a cloud virtual machine now
          </Link>
        </div>
        <div className="content-right">
          <img src={img} />
        </div>
      </div>
    </div>
  );
};

export default Section1;
