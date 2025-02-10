import { useState } from "react";
import icon1 from "../../assets/icons/MainPage/Section3/icon1Head.svg";
import icon2 from "../../assets/icons/MainPage/Section3/icon2Head.svg";
import icon1OS from "../../assets/icons/MainPage/Section3/icon1OS.svg";
import icon2OS from "../../assets/icons/MainPage/Section3/icon2OS.svg";
import icon3OS from "../../assets/icons/MainPage/Section3/icon3OS.svg";
import icon4OS from "../../assets/icons/MainPage/Section3/icon4OS.svg";
import icon5OS from "../../assets/icons/MainPage/Section3/icon5OS.svg";
import icon1CA from "../../assets/icons/MainPage/Section3/icon1CA.svg";
import icon2CA from "../../assets/icons/MainPage/Section3/icon2CA.svg";
import icon3CA from "../../assets/icons/MainPage/Section3/icon3CA.svg";
import icon4CA from "../../assets/icons/MainPage/Section3/icon4CA.svg";
import icon5CA from "../../assets/icons/MainPage/Section3/icon5CA.svg";
import icon6CA from "../../assets/icons/MainPage/Section3/icon6CA.svg";
import icon7CA from "../../assets/icons/MainPage/Section3/icon7CA.svg";
import icon8CA from "../../assets/icons/MainPage/Section3/icon8CA.svg";
import icon9CA from "../../assets/icons/MainPage/Section3/icon9CA.svg";
import icon10CA from "../../assets/icons/MainPage/Section3/icon10CA.svg";
import icon11CA from "../../assets/icons/MainPage/Section3/icon11CA.svg";
import icon12CA from "../../assets/icons/MainPage/Section3/icon12CA.svg";
import icon13CA from "../../assets/icons/MainPage/Section3/icon13CA.svg";
import icon14CA from "../../assets/icons/MainPage/Section3/icon14CA.svg";
import icon15CA from "../../assets/icons/MainPage/Section3/icon15CA.png";
import icon16CA from "../../assets/icons/MainPage/Section3/icon16CA.png";
import icon17CA from "../../assets/icons/MainPage/Section3/icon17CA.svg";

import "../../css/MainPage/Section3/style.scss";
import { Link } from "react-router-dom";
const section2Header = [
  { icon: icon1, title: "Operating Systems" },
  { icon: icon2, title: "1-Click Apps" },
];
const section2ca = [
  {
    img: icon1CA,
    title: "WordPress (Litespeed)",
    content: "The world's most popular website builder, but faster",
    moreInfo: "More Information",
  },
  {
    img: icon2CA,
    title: "Magento",
    content: "A very powerful ecommerce system",
    moreInfo: "More Information",
  },
  {
    img: icon3CA,
    title: "Drupal",
    content: "Open-source web content management framework",
    moreInfo: "More Information",
  },
  {
    img: icon4CA,
    title: "LAMP",
    content: "Linux, Apache, MySQL & PHP",
    moreInfo: "More Information",
  },
  {
    img: icon5CA,
    title: "LEMP",
    content: "Linux, NGINX, MySQL & PHP",
    moreInfo: "More Information",
  },
  {
    img: icon6CA,
    title: "OpenLiteSpeed",
    content: "High-performance, open source HTTP server",
    moreInfo: "More Information",
  },
  {
    img: icon7CA,
    title: "Joomla",
    content: "Free and open-source content management system",
    moreInfo: "More Information",
  },
  {
    img: icon8CA,
    title: "Prestashop",
    content: "eCommerce website builder for your online business",
    moreInfo: "More Information",
  },
  {
    img: icon9CA,
    title: "Chevereto",
    content: "Self-hosted image hosting",
    moreInfo: "More Information",
  },
  {
    img: icon10CA,
    title: "Nextcloud",
    content: "Open-source file hosting application",
    moreInfo: "More Information",
  },
  {
    img: icon11CA,
    title: "Docker",
    content: "Open source containerization platform",
    moreInfo: "More Information",
  },
  {
    img: icon12CA,
    title: "Gitlab",
    content: "Web-based DevOps lifecycle tool",
    moreInfo: "More Information",
  },
  {
    img: icon13CA,
    title: "CyberPanel",
    content: "Web hosting control panel powered by OpenLiteSpeed",
    moreInfo: "More Information",
  },
  {
    img: icon14CA,
    title: "CPanel",
    content: "Industry-leading web hosting platform for over 20 years",
    moreInfo: "More Information",
  },
  {
    img: icon15CA,
    title: "VestaCP",
    content: "Open source hosting control panel",
    moreInfo: "More Information",
  },
  {
    img: icon16CA,
    title: "HestiaCP",
    content: "Open source web hosting control panel",
    moreInfo: "More Information",
  },
  {
    img: icon17CA,
    title: "Minecraft",
    content: "Build everything from the simplest to grandest",
    moreInfo: "More Information",
  },
];
const section2OS = [icon1OS, icon2OS, icon3OS, icon4OS, icon5OS];
const Section3 = () => {
  const [isClick, setClick] = useState("Operating Systems");
  return (
    <div className="mainPage">
      <div className="section__3">
        <div className="container">
          <div className="tab">
            {section2Header.map((e, index) => (
              <div
                onClick={() => setClick(e.title)}
                className={`tablinks ${e.title === isClick ? "active" : ""}`}
                key={index}
              >
                <img className="w-[25px] h-[25px]" src={e.icon} />
                <span>{e.title}</span>
              </div>
            ))}
          </div>
          <p className="section__3-heading">
            Wide selection of operating system
          </p>
          <p className="section__3-subHeading">
            Choose the operating system that you want to work on.
          </p>
          {isClick === "Operating Systems" && (
            <div className="section__3-os">
              {section2OS.map((e, index) => (
                <div key={index}>
                  <img src={e} />
                </div>
              ))}
            </div>
          )}
          {isClick === "1-Click Apps" && (
            <div className="section__3-ca">
              {section2ca.map((e, index) => (
                <div className={`wrapper wrapper-${index}`}>
                  <div className="logo-space-apps">
                    <div>
                      <img src={e.img} />
                    </div>
                    <div className="logo-space-apps-desc">
                      <p className="logo-space-title">{e.title}</p>
                      <p className="logo-space-desc">{e.content}</p>
                    </div>
                  </div>
                  <p className="moreInfo">{e.moreInfo}</p>
                </div>
              ))}
              <Link className="visit" to="">
                Visit here for full 1-click apps list
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Section3;
