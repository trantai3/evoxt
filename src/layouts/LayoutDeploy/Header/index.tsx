import { ReactComponent as ImgFlag } from "../../../assets/images/Dashboard/flag.svg";
import { bars } from "@/components/Recoil/atom/app";
import { IoIosArrowDown } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import "../../../css/LayoutDeploy/Header/style.scss";
import { Link, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
const Header = () => {
  const location = useLocation();
  const [isBars, setBars] = useRecoilState(bars);
  return (
    <div className="headerLayoutDeploy">
      <div className={`section__1 ${isBars === true ? "closeBars" : ""}`}>
        {location.pathname !== "/deploy/dashboard" && isBars === false && (
          <div onClick={() => setBars(!isBars)} className="section__1-left">
            <FaBars className="iconBars" />
          </div>
        )}
        <div className="section__1-right">
          <div className="chooseLanguage">
            <div className="flag">
              <ImgFlag className="img" />
            </div>
            <p className="language">English</p>
            <span>
              <IoIosArrowDown />
            </span>
          </div>
          <div className="addservicebutton">
            <button type="button">
              <Link to="/malaysia-dedicated-server">+</Link>
            </button>
          </div>
          <div className="logout">
            <Link to="/login">Logout</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
