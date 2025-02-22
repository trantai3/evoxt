import "../../css/MainPage/Section5/style.scss";
import { ReactComponent as Icon1 } from "../../assets/icons/MainPage/Section5/icon1.svg";
import { ReactComponent as Icon2 } from "../../assets/icons/MainPage/Section5/icon2.svg";
import { ReactComponent as Icon3 } from "../../assets/icons/MainPage/Section5/icon3.svg";
import { ReactComponent as Icon4 } from "../../assets/icons/MainPage/Section5/icon4.svg";
import { ReactComponent as Icon5 } from "../../assets/icons/MainPage/Section5/icon5.svg";
import { ReactComponent as Icon6 } from "../../assets/icons/MainPage/Section5/icon6.svg";
import { ReactComponent as Icon7 } from "../../assets/icons/MainPage/Section5/icon7.svg";
import { ReactComponent as Icon8 } from "../../assets/icons/MainPage/Section5/icon8.svg";
import img1 from "../../assets/images/MainPage/Section5/img1.png";
import img2 from "../../assets/images/MainPage/Section5/img2.png";
import img3 from "../../assets/images/MainPage/Section5/img3.png";
import img4 from "../../assets/images/MainPage/Section5/img4.png";
import img5 from "../../assets/images/MainPage/Section5/img5.png";
import img6 from "../../assets/images/MainPage/Section5/img6.png";
import img7 from "../../assets/images/MainPage/Section5/img7.png";
import img8 from "../../assets/images/MainPage/Section5/img8.png";

import { useState } from "react";
import { Link } from "react-router-dom";

const section5Tab = [
  { icon: <Icon1 className="icon" />, title: "Monitoring" },
  { icon: <Icon2 className="icon" />, title: "IP Management" },
  { icon: <Icon3 className="icon" />, title: "Firewall" },
  { icon: <Icon4 className="icon" />, title: "Cloning" },
  { icon: <Icon5 className="icon" />, title: "Sub Accounts" },
  { icon: <Icon6 className="icon" />, title: "Backups" },
  { icon: <Icon7 className="icon" />, title: "VNC" },
  { icon: <Icon8 className="icon" />, title: "API" },
];
const section5Content = [
  {
    tabClick: "Monitoring",
    title: "Monitoring",
    content:
      "Collect and monitor information, status and performance of your virtual machines with Evoxt's virtual machine control panel.",
    img: img1,
  },
  {
    tabClick: "IP Management",
    title: "IP Address Management",
    content:
      "Easily swap and reassign IP addresses between servers. <br/> Migrate your production servers and manage your failover clusters with ease. <br/> Order additional Floating IP Addresses to cater for your growing business.",
    img: img2,
  },
  {
    tabClick: "Firewall",
    title: "Firewall",
    content:
      "Easily secure your virtual machine with Evoxt's firewall system. <br/> Set firewall rules without even needing to connect to your virtual machine.",
    img: img3,
  },
  {
    tabClick: "Cloning",
    title: "Cloning",
    content:
      "Easily clone your virtual machines without having to re-setup and reconfigure every time.",
    img: img4,
  },
  {
    tabClick: "Sub Accounts",
    title: "Sub Accounts",
    content:
      "Require access to be given for each Administrator, Technical Team, Billing Team, Support Team? We've got that covered for you.",
    img: img5,
  },
  {
    tabClick: "Backups",
    title: "Backups",
    content:
      "All virtual machines with Evoxt come with automatic weekly offsite backup. <br /> At zero cost. <br /> Stay protected even during the most catastrophic situation.",
    img: img6,
  },
  {
    tabClick: "VNC",
    title: "VNC",
    content:
      "Control your virtual machines at anytime anywhere with your browser, securely.",
    img: img7,
  },
  {
    tabClick: "API",
    title: "API",
    content:
      "Control, edit, configure your virtual machines without even needing to log in to Evoxt.",
    img: img8,
  },
];
const Section5 = () => {
  const [isTab, setTab] = useState("Monitoring");
  return (
    <div className="mainPage">
      <div className="section__5">
        <div className="container">
          <p className="section__5-heading">Virtual Machine Management</p>
          <p className="section__5-subheading">
            Save time managing your virtual machines with Evoxt. Spend time on
            the right thing.
          </p>
          <div className="scrollX">
            <div className="tab">
              {section5Tab.map((e, index) => (
                <div
                  onClick={() => setTab(e.title)}
                  key={index}
                  className={`tablinks ${e.title === isTab ? "active" : ""}`}
                >
                  <div>{e.icon}</div>
                  <span>{e.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="section__5-content">
            {section5Content.map(
              (e, index) =>
                isTab === e.tabClick && (
                  <div className="wrapper" key={index}>
                    <div className="wrapper-left">
                      <h3 className="wrapper-heading">{e.title}</h3>
                      <p
                        className="wrapper-content"
                        dangerouslySetInnerHTML={{ __html: e.content }}
                      />
                      {(e.tabClick === "IP Management" ||
                        e.tabClick === "Firewall") && (
                        <div className="listButtons">
                          <Link
                            to={`${e.tabClick === "IP Management" ? "/ip-management" : "/firewall"}`}
                          >
                            <button className="readmoreButton">
                              Read More
                            </button>
                          </Link>
                          <Link to="/why-choose-evoxt">
                            <button className="docButton">Documentation</button>
                          </Link>
                        </div>
                      )}
                      {(e.tabClick === "Cloning" ||
                        e.tabClick === "Backups") && (
                        <div className="listButtons">
                          <Link
                            to={`${e.tabClick === "Cloning" ? "/clone" : "/weekly-offsite-backup"}`}
                          >
                            <button className="readmoreButton">
                              Read More
                            </button>
                          </Link>
                        </div>
                      )}
                      {e.tabClick === "API" && (
                        <div>
                          <Link to="/status">
                            <button className="gotodocButton">
                              Go to Documentation
                            </button>
                          </Link>
                        </div>
                      )}
                    </div>
                    <div className="wrapper-right">
                      <img src={e.img} alt="img" />
                    </div>
                  </div>
                ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
