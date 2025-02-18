import "../../../css/Status/HeaderStatus/style.scss";
import icon from "../../../assets/icons/Status/icon.webp";
import { GoBell } from "react-icons/go";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="headerLayoutStatus">
      <div className="container">
        <div className="content">
          <div className="img">
            <Link to="/">
              <img src={icon} />
            </Link>
          </div>
          <div className="bell">
            <GoBell className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
