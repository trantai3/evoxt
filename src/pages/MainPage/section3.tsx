import { useState } from "react";
import { ReactComponent as Icon1Head } from "../../assets/icons/MainPage/Section3/icon1Head.svg";
import { ReactComponent as ICon2Head } from "../../assets/icons/MainPage/Section3/icon2Head.svg";
import { ReactComponent as Icon1Os } from "../../assets/icons/MainPage/Section3/icon1OS.svg";
import { ReactComponent as Icon2Os } from "../../assets/icons/MainPage/Section3/icon2OS.svg";
import { ReactComponent as Icon3Os } from "../../assets/icons/MainPage/Section3/icon3OS.svg";
import { ReactComponent as Icon4Os } from "../../assets/icons/MainPage/Section3/icon4OS.svg";
import { ReactComponent as Icon5Os } from "../../assets/icons/MainPage/Section3/icon5OS.svg";
import { ReactComponent as Icon1Ca } from "../../assets/icons/MainPage/Section3/icon1CA.svg";
import { ReactComponent as Icon2Ca } from "../../assets/icons/MainPage/Section3/icon2CA.svg";
import { ReactComponent as Icon3Ca } from "../../assets/icons/MainPage/Section3/icon3CA.svg";
import { ReactComponent as Icon4Ca } from "../../assets/icons/MainPage/Section3/icon4CA.svg";
import { ReactComponent as Icon5Ca } from "../../assets/icons/MainPage/Section3/icon5CA.svg";
import { ReactComponent as Icon6Ca } from "../../assets/icons/MainPage/Section3/icon6CA.svg";
import { ReactComponent as Icon7Ca } from "../../assets/icons/MainPage/Section3/icon7CA.svg";
import { ReactComponent as Icon8Ca } from "../../assets/icons/MainPage/Section3/icon8CA.svg";
import { ReactComponent as Icon9Ca } from "../../assets/icons/MainPage/Section3/icon9CA.svg";
import { ReactComponent as Icon10Ca } from "../../assets/icons/MainPage/Section3/icon10CA.svg";
import { ReactComponent as Icon11Ca } from "../../assets/icons/MainPage/Section3/icon11CA.svg";
import { ReactComponent as Icon12Ca } from "../../assets/icons/MainPage/Section3/icon12CA.svg";
import { ReactComponent as Icon13Ca } from "../../assets/icons/MainPage/Section3/icon13CA.svg";
import { ReactComponent as Icon14Ca } from "../../assets/icons/MainPage/Section3/icon14CA.svg";
import icon15CA from "../../assets/icons/MainPage/Section3/icon15CA.png";
import icon16CA from "../../assets/icons/MainPage/Section3/icon16CA.png";
import { ReactComponent as Icon17Ca } from "../../assets/icons/MainPage/Section3/icon17CA.svg";
import "../../css/MainPage/Section3/style.scss";
import { Link } from "react-router-dom";
const section2Header = [
  { icon: <Icon1Head className="iconhead" />, title: "Operating Systems" },
  { icon: <ICon2Head className="iconhead" />, title: "1-Click Apps" },
];
const section2ca = [
  {
    img: <Icon1Ca className="iconca" />,
    title: "WordPress (Litespeed)",
    content: "The world's most popular website builder, but faster",
    moreInfo: "More Information",
  },
  {
    img: <Icon2Ca className="iconca" />,
    title: "Magento",
    content: "A very powerful ecommerce system",
    moreInfo: "More Information",
  },
  {
    img: <Icon3Ca className="iconca" />,
    title: "Drupal",
    content: "Open-source web content management framework",
    moreInfo: "More Information",
  },
  {
    img: <Icon4Ca className="iconca" />,
    title: "LAMP",
    content: "Linux, Apache, MySQL & PHP",
    moreInfo: "More Information",
  },
  {
    img: <Icon5Ca className="iconca" />,
    title: "LEMP",
    content: "Linux, NGINX, MySQL & PHP",
    moreInfo: "More Information",
  },
  {
    img: <Icon6Ca className="iconca" />,
    title: "OpenLiteSpeed",
    content: "High-performance, open source HTTP server",
    moreInfo: "More Information",
  },
  {
    img: <Icon7Ca className="iconca" />,
    title: "Joomla",
    content: "Free and open-source content management system",
    moreInfo: "More Information",
  },
  {
    img: <Icon8Ca className="iconca" />,
    title: "Prestashop",
    content: "eCommerce website builder for your online business",
    moreInfo: "More Information",
  },
  {
    img: <Icon9Ca className="iconca" />,
    title: "Chevereto",
    content: "Self-hosted image hosting",
    moreInfo: "More Information",
  },
  {
    img: <Icon10Ca className="iconca" />,
    title: "Nextcloud",
    content: "Open-source file hosting application",
    moreInfo: "More Information",
  },
  {
    img: <Icon11Ca className="iconca" />,
    title: "Docker",
    content: "Open source containerization platform",
    moreInfo: "More Information",
  },
  {
    img: <Icon12Ca className="iconca" />,
    title: "Gitlab",
    content: "Web-based DevOps lifecycle tool",
    moreInfo: "More Information",
  },
  {
    img: <Icon13Ca className="iconca" />,
    title: "CyberPanel",
    content: "Web hosting control panel powered by OpenLiteSpeed",
    moreInfo: "More Information",
  },
  {
    img: <Icon14Ca className="iconca" />,
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
    img: <Icon17Ca className="iconca" />,
    title: "Minecraft",
    content: "Build everything from the simplest to grandest",
    moreInfo: "More Information",
  },
];
const section2OS = [
  <Icon1Os className="iconos" />,
  <Icon2Os className="iconos" />,
  <Icon3Os className="iconos" />,
  <Icon4Os className="iconos" />,
  <Icon5Os className="iconos" />,
];
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
                {e.icon}
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
                <div key={index}>{e}</div>
              ))}
            </div>
          )}
          {isClick === "1-Click Apps" && (
            <div className="section__3-ca">
              {section2ca.map((e, index) => (
                <div className={`wrapper wrapper-${index}`}>
                  <div className="logo-space-apps">
                    {index === 14 || index === 15 ? (
                      typeof e.img === "string" ? (
                        <img className="iconca" src={e.img} />
                      ) : (
                        e.img
                      )
                    ) : (
                      <div>{e.img}</div>
                    )}

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
