import { FaMapPin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import "../../../css/MainPage/Footer/style.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Icon } from "../../../assets/icons/MainPage/Footer/icon.svg";
import { ReactComponent as Flag } from "../../../assets/icons/MainPage/Footer/flat.svg";
import { ReactComponent as Climate } from "../../../assets/icons/MainPage/Footer/climate.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

const features = [
  { title: "API Documentation", link: "/status" },
  { title: "Clone Servers", link: "/clone" },
  { title: "Firewall", link: "/firewall" },
  { title: "IP Address Management", link: "/ip-management" },
  { title: "Offsite Weekly Automatic Backup", link: "/weekly-offsite-backup" },
];
const company = [
  { title: "About Us", link: "/about-us" },
  { title: "Why Choose Evoxt", link: "/why-choose-evoxt" },
  { title: "Terms of Service", link: "/terms-of-service" },
  {
    title: "Acceptable Use Policy",
    link: "/acceptable-use-policy",
  },
  { title: "Privacy Policy", link: "/privacy-policy" },
];
const support = [
  { title: "Email us", link: "mailto:support@evoxt.com" },
  { title: "Tickets", link: "/deploy/supporttickets" },
  { title: "Open Ticket", link: "/deploy/submitticket" },
];
const pricing = [
  { title: "Pricing", link: "/pricing" },
  {
    title: "Membership Ranking",
    link: "/membership-ranking",
  },
];
const community = [{ title: "Telegram Channel", link: "https://t.me/evoxt" }];
const popular = [
  {
    title: "CPU Clock Speed vs Number of CPU Cores",
    link: "/cpu-clock-speed-vs-number-of-cpu-cores",
  },
  {
    title: "Windows server or Linux server?",
    link: "/windows-server-or-linux-server",
  },
  {
    title: "Popular Web Apps and Websites to deploy",
    link: "/popular-web-apps-and-websites-to-deploy",
  },
];
const footer = [
  {
    icon: <FaMapPin className="icon" />,
    title: "Website",
    content: "https://evoxt.com",
  },
  {
    icon: <FaTelegram className="icon" />,
    title: "Telegram",
    content: "@Evoxt",
  },
  {
    icon: <FaEnvelope className="icon" />,
    title: "Email",
    content: "support@evoxt.com",
  },
];
const medias = [
  {
    icon: <FaFacebookF className="icon" />,
    link: "https://facebook.com/evoxtofficial",
  },
  {
    icon: <FaTwitter className="icon" />,
    link: "https://twitter.com/Evoxtcom",
  },
  { icon: <FaTelegram className="icon" />, link: "https://t.me/evoxt" },
];
const Footer = () => {
  return (
    <div className="mainPage">
      <div className="footer">
        <div className="container">
          <div className="footer-feature-inner">
            {footer.map((e, index) => (
              <div className="feature-top-item" key={index}>
                <div className="media">
                  <div className="media-left">
                    <span>{e.icon}</span>
                  </div>
                  <div className="media-right">
                    <span className="title">{e.title}</span>
                    <span className="content">{e.content}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="footer-main">
            <div className="footer-main-left">
              <div className="footer-main-left-top">
                <div className="footer-main-inner footer-features">
                  <div className="footer-heading">Features</div>
                  <ul className="footer-menu">
                    {features.map((e, index) => (
                      <li key={index}>
                        <Link to={e.link}>{e.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="footer-main-inner footer-company">
                  <div className="footer-heading">Company</div>
                  <ul className="footer-menu">
                    {company.map((e, index) => (
                      <li key={index}>
                        <Link to={e.link}>{e.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="footer-main-inner footer-support">
                  <div className="footer-heading">Support</div>
                  <ul className="footer-menu">
                    {support.map((e, index) => (
                      <li key={index}>
                        <Link to={e.link}>{e.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="footer-main-left-bottom">
                <div className="footer-main-inner footer-pricing">
                  <div className="footer-heading">Pricing</div>
                  <ul className="footer-menu">
                    {pricing.map((e, index) => (
                      <li key={index}>
                        <Link to={e.link}>{e.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="footer-main-inner footer-community">
                  <div className="footer-heading">Community</div>
                  <ul className="footer-menu">
                    {community.map((e, index) => (
                      <li key={index}>
                        <Link to={e.link}>{e.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="footer-main-inner footer-popular">
                  <div className="footer-heading">Popular</div>
                  <ul className="footer-menu">
                    {popular.map((e, index) => (
                      <li key={index}>
                        <Link to={e.link}>{e.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-main-right">
              <div className="icon">
                <Icon className="icon-main" />
              </div>
              <span className="copyright">
                ©2025 Evoxt - All rights reserved
              </span>
              <span className="address">
                Evoxt Sdn Bhd (1512671-D)
                <br />
                Level 07-10, Mercu Aspire,
                <br />
                KL Eco City,
                <br />
                Pantai Baru, Jalan Bangsar,
                <br />
                59200 Kuala Lumpur
                <br />
                Malaysia
              </span>
              <p className="social">Connect with us</p>
              <div className="media">
                {medias.map((e, index) => (
                  <a key={index} href={e.link}>
                    {e.icon}
                  </a>
                ))}
              </div>
              <div className="selected-language">
                <div className="flat">
                  <Flag className="flat-img" />
                </div>
                <span>English</span>
                <span className="icon">
                  <MdKeyboardArrowDown />
                </span>
              </div>
              <div className="climate-member">
                <Link to="/climate-stripe">
                  <span>Stripe Climate member</span>
                  <div>
                    <Climate className="climateImg" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
