import { Link } from "react-router-dom";
import "../../../css/LayoutAuth/Header/style.scss";
const Header = () => {
  return (
    <div className="headerLayoutAuth">
      <div className="tabs-link">
        <button>
          <Link to="/login">Login</Link>
        </button>
        <button>
          <Link to="/register">Register</Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
