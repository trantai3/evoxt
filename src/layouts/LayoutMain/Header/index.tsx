import "../../../css/LayoutMain/Header/style.scss";
import icon from "../../../assets/icons/HeaderLayoutMain/icon.svg";
import logo from "../../../assets/images/HeaderLayoutMain/logo.svg";
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
      <div className="header flex flex-col">
        <div className="header__one flex justify-end items-center p-[10px] text-white">
          <a
            className="header__login underline-none text-[14px] px-[10px] py-0"
            href="https://console.evoxt.com/login"
          >
            Login
          </a>
          <div className="header__register rounded-[50px]">
            <Link
              to="/deploy/dashboard"
              className="underline-none text-[12px] px-[10px] py-0"
            >
              Register
            </Link>
          </div>
          <a
            className="header__environment ml-[20px] underline-none text-[14px] px-[10px] py-0"
            href="https://climate.stripe.com/tzMi7z"
          >
            We care about the Environment
          </a>
          <img
            src={icon}
            className="w-[30px] mr-[10px] h-auto max-w-full"
          ></img>
        </div>
        <div className="header__two text-white text-center py-[20px] px-[40px]">
          <div className="header__container flex flex-wrap justify-between items-center">
            <a href="/#">
              <img src={logo} className="max-w-[230px] h-auto" alt="" />
            </a>
            <div
              onClick={() => setIsBars(!isBars)}
              className={`iconBar ${screenWidth < 768 ? "block" : "hidden"}`}
            >
              <FaBars />
            </div>
            {screenWidth > 767 && (
              <div className="header__right md:gap-[40px] 2xl:gap-[60px] flex justify-between">
                <Link className="text-[15px] deploy font-medium" to="#">
                  <div
                    onClick={() => setIsClickSubMenu(!isClickSubMenu)}
                    className="deploy-menu py-[20px] px-[10px] relative flex items-center	"
                  >
                    Deploy
                    <FaAngleDown className="ml-[15px]" />
                  </div>
                  <div className="submenu hidden absolute text-left py-[10px]">
                    <ul className="bg-[#0F1E53]">
                      <li className="py-[8px] px-[10px]">
                        <Link className="text-[14px]" to="/deploy">
                          Cloud Virtual Machines
                        </Link>
                      </li>
                      <li className="py-[8px] px-[10px]">
                        <Link
                          className="text-[14px]"
                          to="/malaysia-dedicated-server"
                        >
                          Dedicated Servers
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {screenWidth < 768 && isClickSubMenu && (
                    <div className="submenubars text-left py-[10px] border-b border-[#000]">
                      <ul className="bg-[#0F1E53]">
                        <li className="py-[8px] px-[10px]">
                          <Link className="text-[14px]" to="/deploy">
                            Cloud Virtual Machines
                          </Link>
                        </li>
                        <li className="py-[8px] px-[10px]">
                          <Link
                            className="text-[14px]"
                            to="/malaysia-dedicated-server"
                          >
                            Dedicated Servers
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </Link>
                <Link
                  className="elementMenu py-[20px] text-[15px] font-medium"
                  to="/status"
                >
                  Status
                </Link>
                <Link
                  className="elementMenu py-[20px] text-[15px] font-medium"
                  to="/pricing"
                >
                  Pricing
                </Link>
                <Link
                  className="elementMenu py-[20px] text-[15px] font-medium"
                  to="/support/submitticket"
                >
                  Contact Us
                </Link>
              </div>
            )}
            {isBars && (
              <div className="header__right md:gap-[40px] 2xl:gap-[60px] !flex justify-between">
                <a className="text-[15px] deploy font-medium" href="#">
                  <div
                    onClick={() => setIsClickSubMenu(!isClickSubMenu)}
                    className="deploy-menu py-[20px] px-[10px] relative flex items-center	"
                  >
                    Deploy
                    <FaAngleDown className="ml-[15px]" />
                  </div>
                  <div className="submenu hidden absolute text-left py-[10px]">
                    <ul className="bg-[#0F1E53]">
                      <li className="py-[8px] px-[10px]">
                        <Link className="text-[14px]" to="/deploy">
                          Cloud Virtual Machines
                        </Link>
                      </li>
                      <li className="py-[8px] px-[10px]">
                        <Link
                          className="text-[14px]"
                          to="/malaysia-dedicated-server"
                        >
                          Dedicated Servers
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {isClickSubMenu && (
                    <div className="submenubars text-left py-[10px] border-b border-[#000]">
                      <ul className="bg-[#0F1E53]">
                        <li className="py-[8px] px-[10px]">
                          <Link className="text-[14px]" to="/deploy">
                            Cloud Virtual Machines
                          </Link>
                        </li>
                        <li className="py-[8px] px-[10px]">
                          <Link
                            className="text-[14px]"
                            to="/malaysia-dedicated-server"
                          >
                            Dedicated Servers
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </a>
                <Link
                  className="elementMenu px-[10px] py-[20px] text-[15px] font-medium"
                  to="/status"
                >
                  Status
                </Link>
                <Link
                  className="elementMenu px-[10px] py-[20px] text-[15px] font-medium"
                  to="/pricing"
                >
                  Pricing
                </Link>
                <Link
                  className="elementMenu px-[10px] py-[20px] text-[15px] font-medium"
                  to="/support/submitticket"
                >
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
