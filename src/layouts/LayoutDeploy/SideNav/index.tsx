import "../../../css/SideNavLayoutDeploy/SideNav/style.scss";
import { bars } from "@/components/Recoil/atom/app";
import iconMain from "../../../assets/icons/Dashboard/icon.svg";
import { ReactComponent as IconDashboard } from "../../../assets/icons/Dashboard/iconDashboard.svg";
import { ReactComponent as IconService } from "../../../assets/icons/Dashboard/iconService.svg";
import { ReactComponent as IconDeploy } from "../../../assets/icons/Dashboard/iconDeploy.svg";
import { ReactComponent as IconAffiliate } from "../../../assets/icons/Dashboard/iconAffiliate.svg";
import { ReactComponent as IconReseller } from "../../../assets/icons/Dashboard/iconReseller.svg";
import { IoIosClose } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FaFileAlt } from "react-icons/fa";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
const SideNav = () => {
  const [dropdowns, setDropdowns] = useState({
    service: false,
    deploy: false,
    billing: false,
    support: false,
    account: false,
  });
  const toggleDropdown = (
    menu: "service" | "deploy" | "billing" | "support" | "account",
  ) => {
    setDropdowns((pre) => ({
      ...pre,
      [menu]: !pre[menu],
    }));
  };
  const [isClose, setClose] = useState(false);
  const [isBars, setIsBars] = useRecoilState(bars);
  const handleClick = () => {
    setClose(false);
    setIsBars(false);
  };
  const location = useLocation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleClickLink = () => {
    if (windowWidth < 1025) {
      setClose(false);
      setIsBars(false);
    }
  };
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (location.pathname === "/deploy") {
      setClose(true);
    }
  }, [location.pathname]);
  return isClose === true || isBars === true ? (
    <div
      className={`sideNavLayoutDeploy ${isClose === true ? "openSideNav" : ""}`}
    >
      <button onClick={() => handleClick()} className="close">
        <IoIosClose />
      </button>
      <Link className="img" to="/deploy/dashboard">
        <img className="iconMain" src={iconMain} alt="" />
      </Link>
      <p className="username">Tai</p>
      <p className="email">trantai09032003@gmail.com</p>
      <p className="pointlabel">Membership Point(s)</p>
      <p className="point">0</p>
      <p className="membershiplevellabel">Membership Level</p>
      <p className="membershipsvg">
        <Link to="/membership-ranking" target="blank">
          None
        </Link>
      </p>
      <p className="customer_since">Customer Since</p>
      <p className="customer_since_sub">2024-12-12</p>
      <div className="credits">
        <p className="creditavailable">Available Credit</p>
        <p className="credit">
          <p className="price">
            <Link to="">$0.00</Link>
          </p>
          <p className="topup">
            <Link to="">Topup</Link>
          </p>
        </p>
      </div>
      <div className="dashboard">
        <div>
          <IconDashboard className="icon-element" />
        </div>
        <Link to="/deploy/dashboard">
          <p>Dashboard</p>
        </Link>
      </div>
      <div
        onClick={() => {
          toggleDropdown("service");
        }}
        className="service"
      >
        <div>
          <IconService className="icon-element" />
        </div>
        <p>Service</p>
        <span className="icon">
          <IoIosArrowDown />
        </span>
      </div>
      {dropdowns.service === true && (
        <div className="dropdown">
          <p onClick={() => handleClickLink()} className="dropdown-text">
            <Link to="/deploy/service">Service</Link>
          </p>
        </div>
      )}
      <div onClick={() => toggleDropdown("deploy")} className="deploy">
        <div>
          <IconDeploy className="icon-element" />
        </div>
        <p>Deploy</p>
        <span className="icon">
          <IoIosArrowDown />
        </span>
      </div>
      {dropdowns.deploy === true && (
        <div className="dropdown">
          <p onClick={() => handleClickLink()} className="dropdown-text">
            <Link to="/deploy">Deploy a Virtual Machine</Link>
          </p>
          <p onClick={() => handleClickLink()} className="dropdown-text">
            <Link to="/deploy/dedicated-server">Deploy a Dedicated Server</Link>
          </p>
          <p onClick={() => handleClickLink()} className="dropdown-text">
            <Link to="/deploy/order-id">Order Extra IP Address</Link>
          </p>
          <p onClick={() => handleClickLink()} className="dropdown-text">
            <Link to="/deploy/register-domain">Register a Domain</Link>
          </p>
        </div>
      )}
      <div onClick={() => toggleDropdown("billing")} className="billing">
        <div>
          <FaFileAlt className="icon-billing" />
        </div>
        <p>Billing</p>
        <span className="icon">
          <IoIosArrowDown />
        </span>
      </div>
      {dropdowns.billing === true && (
        <div className="dropdown">
          <p onClick={() => handleClickLink()} className="dropdown-text">
            <Link to="/deploy/invoices">Invoices</Link>
          </p>
          <p onClick={() => handleClickLink()} className="dropdown-text">
            <Link to="/deploy/addfunds">Add Funds</Link>
          </p>
          <p onClick={() => handleClickLink()} className="dropdown-text">
            <Link to="/deploy/refund">Refund Request</Link>
          </p>
          <p onClick={() => handleClickLink()} className="dropdown-text">
            <Link to="/deploy/refundrequesthistory">
              Refund Request History
            </Link>
          </p>
        </div>
      )}
      <div onClick={() => toggleDropdown("support")} className="support">
        <div>
          <FaRegQuestionCircle className="icon-support" />
        </div>
        <p>Support</p>
        <span className="icon">
          <IoIosArrowDown />
        </span>
      </div>
      {dropdowns.support === true && (
        <div className="dropdown">
          <p onClick={() => handleClickLink()} className="dropdown-text">
            <Link to="/deploy/submitticket">Open Ticket</Link>
          </p>
          <p onClick={() => handleClickLink()} className="dropdown-text">
            <Link to="/deploy/supporttickets">Tickets</Link>
          </p>
        </div>
      )}
      <div onClick={() => toggleDropdown("account")} className="user">
        <div>
          <FaUser className="icon-user" />
        </div>
        <p>Account</p>
        <span className="icon">
          <IoIosArrowDown />
        </span>
      </div>
      {dropdowns.account === true && (
        <div className="dropdown">
          <p onClick={() => handleClickLink()} className="dropdown-text">
            <Link to="/deploy/clientarea">Evoxt Account Details</Link>
          </p>
          <p onClick={() => handleClickLink()} className="dropdown-text">
            <Link to="/user/profile">User Profile</Link>
          </p>
          <p onClick={() => handleClickLink()} className="dropdown-text">
            <Link to="/user/password">Change User Password</Link>
          </p>
          <p onClick={() => handleClickLink()} className="dropdown-text">
            <Link to="/user/security">User Security Settings</Link>
          </p>
          <p onClick={() => handleClickLink()} className="dropdown-text">
            <Link to="/account/users">Manage Users</Link>
          </p>
          <p onClick={() => handleClickLink()} className="dropdown-text">
            <Link to="/keysmanagement">Keys Management</Link>
          </p>
          <p onClick={() => handleClickLink()} className="dropdown-text">
            <Link to="/autorenewal_config">Auto Renewal Configuration</Link>
          </p>
          <p onClick={() => handleClickLink()} className="dropdown-text">
            <Link to="/account/paymentmethods">
              Manage Credit Cards **New**
            </Link>
          </p>
          <p onClick={() => handleClickLink()} className="dropdown-text">
            <Link to="/account/contacts">Email Contacts</Link>
          </p>
          <p onClick={() => handleClickLink()} className="dropdown-text">
            <Link to="/clientarea-email-history">Email History</Link>
          </p>
          <p onClick={() => handleClickLink()} className="dropdown-text">
            <Link to="/apicredentials">API Credentials</Link>
          </p>
        </div>
      )}
      <div className="affiliate">
        <div>
          <IconAffiliate className="icon-element" />
        </div>
        <p onClick={() => handleClickLink()}>
          <Link to="/affiliates">Affiliates</Link>
        </p>
      </div>
      <div className="reseller">
        <div>
          <IconReseller className="icon-element" />
        </div>
        <p onClick={() => handleClickLink()}>
          <Link to="/reseller">Become a Reseller</Link>
        </p>
      </div>
      <p className="telegramChannel">
        <a href="https://t.me/evoxt">Follow our Telegram channel</a>
      </p>
      <p className="discordGroup">
        <a href="https://t.me/evoxt">*New* Discord Group</a>
      </p>
    </div>
  ) : (
    <>
      {location.pathname === "/deploy/dashboard" && (
        <div
          onClick={() => setClose(!isClose)}
          className={`opensidebar ${isClose === false ? "closeSideNav" : ""}`}
        >
          Open Sidebar
        </div>
      )}
    </>
  );
};

export default SideNav;
