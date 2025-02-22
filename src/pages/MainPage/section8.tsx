import "../../css/MainPage/Section8/style.scss";
import { ReactComponent as ImgMap } from "../../assets/images/MainPage/Section8/img.svg";
import img1 from "../../assets/images/MainPage/Section8/img1.png";
import img2 from "../../assets/images/MainPage/Section8/img2.jpg";
import img3 from "../../assets/images/MainPage/Section8/img3.jpg";
import img4 from "../../assets/images/MainPage/Section8/img6.png";
import img5 from "../../assets/images/MainPage/Section8/img1.png";
import img6 from "../../assets/images/MainPage/Section8/img2.jpg";
import img7 from "../../assets/images/MainPage/Section8/img3.jpg";
import img8 from "../../assets/images/MainPage/Section8/img6.png";
import img9 from "../../assets/images/MainPage/Section8/img1.png";
import img10 from "../../assets/images/MainPage/Section8/img2.jpg";
import img11 from "../../assets/images/MainPage/Section8/img3.jpg";
import img12 from "../../assets/images/MainPage/Section8/img6.png";
import img13 from "../../assets/images/MainPage/Section8/img1.png";

import React from "react";
const section8 = [
  {
    plusIcon: "plusLosAngle",
    imgClass: "imgLosAngle",
    img: img1,
    content:
      "Connected to most Tier 1 ISPs available, optimized routing to Asia with a direct link to China Unicom and many APAC ISPs.",
  },
  {
    plusIcon: "plusMontreal",
    imgClass: "imgMontreal",
    img: img2,
    content:
      "Connected to most Tier 1 ISPs available, optimized routing to Asia with a direct link to China Unicom and many APAC ISPs.",
  },
  {
    plusIcon: "plusNewYork",
    imgClass: "imgNewYork",
    img: img3,
    content:
      "Connected to most Tier 1 ISPs available, optimized routing to Asia with a direct link to China Unicom and many APAC ISPs.",
  },
  {
    plusIcon: "plusLondon",
    imgClass: "imgLondon",
    img: img4,
    content:
      "Connected to most Tier 1 ISPs available, optimized routing to Asia with a direct link to China Unicom and many APAC ISPs.",
  },
  {
    plusIcon: "plusNether",
    imgClass: "imgNether",
    img: img5,
    content:
      "Connected to most Tier 1 ISPs available, optimized routing to Asia with a direct link to China Unicom and many APAC ISPs.",
  },
  {
    plusIcon: "plusGermany",
    imgClass: "imgGermany",
    img: img6,
    content:
      "Connected to most Tier 1 ISPs available, optimized routing to Asia with a direct link to China Unicom and many APAC ISPs.",
  },
  {
    plusIcon: "plusPoland",
    imgClass: "imgPoland",
    img: img7,
    content:
      "Connected to most Tier 1 ISPs available, optimized routing to Asia with a direct link to China Unicom and many APAC ISPs.",
  },
  {
    plusIcon: "plusMalaysia",
    imgClass: "imgMalaysia",
    img: img8,
    content:
      "Connected to most Tier 1 ISPs available, optimized routing to Asia with a direct link to China Unicom and many APAC ISPs.",
  },
  {
    plusIcon: "plusJakarta",
    imgClass: "imgJakarta",
    img: img9,
    content:
      "Connected to most Tier 1 ISPs available, optimized routing to Asia with a direct link to China Unicom and many APAC ISPs.",
  },
  {
    plusIcon: "plusSydney",
    imgClass: "imgSydney",
    img: img10,
    content:
      "Connected to most Tier 1 ISPs available, optimized routing to Asia with a direct link to China Unicom and many APAC ISPs.",
  },
  {
    plusIcon: "plusHongKong",
    imgClass: "imgHongKong",
    img: img11,
    content:
      "Connected to most Tier 1 ISPs available, optimized routing to Asia with a direct link to China Unicom and many APAC ISPs.",
  },
  {
    plusIcon: "plusOsaka",
    imgClass: "imgOsaka",
    img: img12,
    content:
      "Connected to most Tier 1 ISPs available, optimized routing to Asia with a direct link to China Unicom and many APAC ISPs.",
  },
  {
    plusIcon: "plusTokyo",
    imgClass: "imgTokyo",
    img: img13,
    content:
      "Connected to most Tier 1 ISPs available, optimized routing to Asia with a direct link to China Unicom and many APAC ISPs.",
  },
];
const Section8 = () => {
  return (
    <div className="mainPage">
      <div className="section__8">
        <div className="container">
          <p className="section__8-heading">Available Globally</p>
          <p className="section__8-subheading">
            High CPU Frequency Virtual Machines from 13 different regions across
            the world.
          </p>
          <div className="section__8-main">
            {section8.map((e, index) => (
              <React.Fragment key={index}>
                <span className={`loc_info ${e.plusIcon}`}>+</span>
                <div className={`loc_info_display ${e.imgClass}`}>
                  <div>
                    <div className="loc_info_display_header_img">
                      <img src={e.img} />
                    </div>
                  </div>
                  <div className="loc_info_display_text">
                    <p className="loc_info_display_text_long">
                      Connected to most Tier 1 ISPs available, optimized routing
                      to Asia with a direct link to China Unicom and many APAC
                      ISPs.
                    </p>
                  </div>
                </div>
              </React.Fragment>
            ))}
            <ImgMap className="imgMap" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section8;
