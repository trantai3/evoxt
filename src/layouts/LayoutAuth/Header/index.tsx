import { Link } from "react-router-dom";
import "../../../css/LayoutAuth/Header/style.scss";
const Header = () => {
  return (
    <div className="headerLayoutAuth">
      <div className="tabs-link">
        <Link to="/login">
          <button>Login</button>
        </Link>

        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
