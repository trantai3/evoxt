import imgFlag from "../../assets/images/Dashboard/flag.svg";
import { IoIosArrowDown } from "react-icons/io";
import "../../css/Dashboard/Section1/style.scss";
const Section1 = () => {
  return (
    <div className="dashboardPage">
      <div className="section__1">
        <div className="chooseLanguage">
          <div className="flag">
            <img src={imgFlag} />
          </div>
          <p className="language">English</p>
          <span>
            <IoIosArrowDown />
          </span>
        </div>
        <div className="addservicebutton">
          <button type="button">+</button>
        </div>
        <div className="logout">Logout</div>
      </div>
    </div>
  );
};

export default Section1;
