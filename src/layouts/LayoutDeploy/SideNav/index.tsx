import "../../../css/SideNavLayoutDeploy/SideNav/style.scss";
import { bars } from "@/components/Recoil/atom/app";
import iconMain from "../../../assets/icons/Dashboard/icon.svg";
import iconDashboard from "../../../assets/icons/Dashboard/iconDashboard.svg";
import iconService from "../../../assets/icons/Dashboard/iconService.svg";
import iconDeploy from "../../../assets/icons/Dashboard/iconDeploy.svg";
import iconAffilate from "../../../assets/icons/Dashboard/iconAffiliate.svg";
import iconReseller from "../../../assets/icons/Dashboard/iconReseller.svg";
import { IoIosClose } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FaFileAlt } from "react-icons/fa";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
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
    menu: "service" | "deploy" | "billing" | "support" | "account"
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
  return isClose === true || isBars === true ? (
    <div
      className={`sideNavLayoutDeploy ${isClose === true ? "openSideNav" : ""}`}
    >
      <button onClick={() => handleClick()} className="close">
        <IoIosClose />
      </button>
      <Link className="img" to="/dashboard">
        <img src={iconMain} />
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
          <img src={iconDashboard} alt="" />
        </div>
        <Link to="/deploy/dashboard">
          <p>Dashboard</p>
        </Link>
      </div>
      <div onClick={() => toggleDropdown("service")} className="service">
        <div>
          <img src={iconService} alt="" />
        </div>
        <p>Service</p>
        <span className="icon">
          <IoIosArrowDown />
        </span>
      </div>
      {dropdowns.service === true && (
        <div className="dropdown">
          <p className="dropdown-text">
            <Link to="/deploy/service">Service</Link>
          </p>
        </div>
      )}
      <div onClick={() => toggleDropdown("deploy")} className="deploy">
        <div>
          <img src={iconDeploy} alt="" />
        </div>
        <p>Deploy</p>
        <span className="icon">
          <IoIosArrowDown />
        </span>
      </div>
      {dropdowns.deploy === true && (
        <div className="dropdown">
          <p className="dropdown-text">
            <Link to="/deploy">Deploy a Virtual Machine</Link>
          </p>
          <p className="dropdown-text">
            <Link to="/deploy/dedicated-server">Deploy a Dedicated Server</Link>
          </p>
          <p className="dropdown-text">
            <Link to="/deploy/order-id">Order Extra IP Address</Link>
          </p>
          <p className="dropdown-text">
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
          <p className="dropdown-text">
            <Link to="/deploy/invoices">Invoices</Link>
          </p>
          <p className="dropdown-text">
            <Link to="/deploy/addfunds">Add Funds</Link>
          </p>
          <p className="dropdown-text">
            <Link to="/deploy/refund">Refund Request</Link>
          </p>
          <p className="dropdown-text">
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
          <p className="dropdown-text">
            <Link to="/deploy/submitticket">Open Ticket</Link>
          </p>
          <p className="dropdown-text">
            <Link to="">Tickets</Link>
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
          <p className="dropdown-text">
            <Link to="">Evoxt Account Details</Link>
          </p>
          <p className="dropdown-text">
            <Link to="">User Profile</Link>
          </p>
          <p className="dropdown-text">
            <Link to="">Change User Password</Link>
          </p>
          <p className="dropdown-text">
            <Link to="">User Security Settings</Link>
          </p>
          <p className="dropdown-text">
            <Link to="">Manage Users</Link>
          </p>
          <p className="dropdown-text">
            <Link to="">Keys Management</Link>
          </p>
          <p className="dropdown-text">
            <Link to="">Auto Renewal Configuration</Link>
          </p>
          <p className="dropdown-text">
            <Link to="">Manage Credit Cards **New**</Link>
          </p>
          <p className="dropdown-text">
            <Link to="">Email Contacts</Link>
          </p>
          <p className="dropdown-text">
            <Link to="">Email History</Link>
          </p>
          <p className="dropdown-text">
            <Link to="">API Credentials</Link>
          </p>
        </div>
      )}
      <div className="affiliate">
        <div>
          <img src={iconAffilate} alt="" />
        </div>
        <p>Affiliate</p>
      </div>
      <div className="reseller">
        <div>
          <img src={iconReseller} alt="" />
        </div>
        <p>Become a Reseller</p>
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
