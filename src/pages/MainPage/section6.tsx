import "../../css/MainPage/Section6/style.scss";
import img1 from "../../assets/images/MainPage/Section6/img1.png";
import img2 from "../../assets/images/MainPage/Section6/img2.png";
import img3 from "../../assets/images/MainPage/Section6/img3.png";
import { useState, useEffect } from "react";
const imgs = [
  { label: "Dashboard", img: img1 },
  { label: "Server Deployment", img: img2 },
  { label: "VM Control Panel", img: img3 },
];
const Section6 = () => {
  const [tab, setTab] = useState("Dashboard");
  useEffect(() => {
    const interval = setInterval(() => {
      setTab((prevTab) => {
        const currentIndex = imgs.findIndex((e) => e.label === prevTab);
        const nextIndex = (currentIndex + 1) % imgs.length;
        return imgs[nextIndex].label;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="mainPage">
      <div className="section__6">
        <div className="container">
          <p className="section__6-heading">Easy to use intuitive interfaces</p>
          <p className="section__6-subheading">
            Save even more time with intuitive and easy-to-use interface, no
            more fiddling around.
          </p>
          <div className="carousels">
            {imgs.map(
              (e, index) =>
                tab === e.label && (
                  <div key={index} className="carousel">
                    <img src={e.img} />
                    <label>{e.label}</label>
                  </div>
                ),
            )}
          </div>
          <div className="swipers">
            {imgs.map((e, index) => (
              <span
                className={`${e.label === tab ? "swiper-active" : ""}`}
                onClick={() => setTab(e.label)}
                key={index}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
