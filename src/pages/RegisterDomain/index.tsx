import "../../css/RegisterDomain/style.scss";
import { ReactComponent as Icon1 } from "../.,/../../assets/icons/RegisterDomain/icon1.svg";
import { ReactComponent as Icon2 } from "../.,/../../assets/icons/RegisterDomain/icon2.svg";
import { ReactComponent as Icon3 } from "../.,/../../assets/icons/RegisterDomain/icon3.svg";
import { ReactComponent as Icon4 } from "../.,/../../assets/icons/RegisterDomain/icon4.svg";
import { ReactComponent as Icon5 } from "../.,/../../assets/icons/RegisterDomain/icon5.svg";
import icon6 from "../.,/../../assets/icons/RegisterDomain/icon6.png";
import { ReactComponent as Icon7 } from "../.,/../../assets/icons/RegisterDomain/icon7.svg";

const featuredList = [
  <Icon1 className="  " />,
  <Icon2 className="icon" />,
  <Icon3 className="icon" />,
  <Icon4 className="icon" />,
  <Icon5 className="icon" />,
  icon6,
  <Icon7 className="icon" />,
];
const RegisterDomain = () => {
  return (
    <div className="registerDomainPage">
      <div className="container">
        <h1>Register a Domain</h1>
        <p className="find-text">
          Find your perfect domain. Enter your name or keywords below to check
          availability.
        </p>
        <div className="search">
          <input type="text" placeholder="Search for a domain name" />
          <button>Search</button>
        </div>
        <p className="infor">
          500,000+ Domains are getting registered everyday on average. Grab your
          domain name before it got snatched by someone else!
        </p>
        <p className="featuredTitle">Featured TLDs</p>
        <div className="featuredList">
          {featuredList.map((e, index) => (
            <div className="img" key={index}>
              {index === 5 ? (
                <>{typeof e === "string" && <img className="icon" src={e} />}</>
              ) : (
                <>{e}</>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RegisterDomain;
