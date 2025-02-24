import "../../../css/LayoutMain/Header/style.scss";
import { ReactComponent as Icon } from "../../../assets/icons/HeaderLayoutMain/icon.svg";
import { ReactComponent as Logo } from "../../../assets/images/HeaderLayoutMain/logo.svg";
import { FaAngleDown } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const Header = () => {
  const [isClickSubMenu, setIsClickSubMenu] = useState(false);
  const [isBars, setIsBars] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    if (window.innerWidth < 768) {
      setIsClickSubMenu(false);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="header">
        <div className="header__one">
          <Link className="header__login" to="/login">
            Login
          </Link>
          <div className="header__register">
            <Link to="/deploy/dashboard">Register</Link>
          </div>
          <Link className="header__environment" to="/climate-stripe">
            We care about the Environment
          </Link>
          <Icon className="icon-environment" />
        </div>
        <div className="header__two">
          <div className="header__container">
            <a href="/">
              <Logo className="logo" />
            </a>
            <div
              onClick={() => setIsBars(!isBars)}
              className={`iconBar ${screenWidth < 768 ? "iconBarMaxWidth768" : "iconBarMinWidth768"}`}
            >
              <FaBars />
            </div>
            {screenWidth > 767 && (
              <div className="header__right header__right-minwidth767">
                <Link className="deploy" to="#">
                  <div
                    onClick={() => setIsClickSubMenu(!isClickSubMenu)}
                    className="deploy-menu"
                  >
                    Deploy
                    <FaAngleDown className="icon-down" />
                  </div>
                  <div className="submenu">
                    <ul>
                      <li>
                        <Link to="/deploy">Cloud Virtual Machines</Link>
                      </li>
                      <li>
                        <Link to="/malaysia-dedicated-server">
                          Dedicated Servers
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {screenWidth < 768 && isClickSubMenu && (
                    <div className="submenubars submenubars-maxwidth768">
                      <ul>
                        <li>
                          <Link to="/deploy">Cloud Virtual Machines</Link>
                        </li>
                        <li>
                          <Link to="/malaysia-dedicated-server">
                            Dedicated Servers
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </Link>
                <Link className="elementMenu" to="/status">
                  Status
                </Link>
                <Link className="elementMenu" to="/pricing">
                  Pricing
                </Link>
                <Link className="elementMenu" to="/deploy/supporttickets">
                  Contact Us
                </Link>
              </div>
            )}
            {isBars && (
              <div className="header__right header__right-bars">
                <a className="deploy" href="#">
                  <div
                    onClick={() => setIsClickSubMenu(!isClickSubMenu)}
                    className="deploy-menu"
                  >
                    Deploy
                    <FaAngleDown className="" />
                  </div>
                  <div className="submenu">
                    <ul>
                      <li>
                        <Link to="/deploy">Cloud Virtual Machines</Link>
                      </li>
                      <li>
                        <Link to="/malaysia-dedicated-server">
                          Dedicated Servers
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {isClickSubMenu && (
                    <div className="submenubars submenubars-clickSub">
                      <ul>
                        <li>
                          <Link to="/deploy">Cloud Virtual Machines</Link>
                        </li>
                        <li>
                          <Link to="/malaysia-dedicated-server">
                            Dedicated Servers
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </a>
                <Link className="elementMenu" to="/status">
                  Status
                </Link>
                <Link className="elementMenu" to="/pricing">
                  Pricing
                </Link>
                <Link className="elementMenu" to="/deploy/supporttickets">
                  Contact Us
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
