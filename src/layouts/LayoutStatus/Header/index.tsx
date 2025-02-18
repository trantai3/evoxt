import "../../../css/Status/HeaderStatus/style.scss";
import icon from "../../../assets/icons/Status/icon.webp";
import { GoBell } from "react-icons/go";
const Header = () => {
  return (
    <div className="headerLayoutStatus">
      <div className="container">
        <div className="content">
          <div className="img">
            <img src={icon} />
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
