import { Link } from "react-router-dom";
import img from "../../assets/images/Malaysia/Section1/img.png";
import "../../css/MalaysiaDedicated/Section1/style.scss";
const Section1 = () => {
  return (
    <div className="section1Malaysia">
      <div className="container">
        <div className="banner">
          <div className="banner-left">
            <p className="banner-left-title">Dedicated Server Malaysia</p>
            <p className="banner-left-text">
              Workstation Performance and server grade reliabilty at Low Prices
            </p>
            <button>
              <Link to="">Deploy a Dedicated Server</Link>
            </button>
          </div>
          <div className="banner-right">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
