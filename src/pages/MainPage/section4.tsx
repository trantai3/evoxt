import "../../css/MainPage/Section4/style.scss";
import icon1 from "../../assets/icons/MainPage/Section4/icon1.svg";
import icon2 from "../../assets/icons/MainPage/Section4/icon2.svg";
import icon3 from "../../assets/icons/MainPage/Section4/icon3.svg";
import { useState } from "react";
const section4Tab = [
  {
    icon: icon1,
    title: "CPU",
  },
  {
    icon: icon2,
    title: "Memory",
  },
  {
    icon: icon3,
    title: "Disk",
  },
];
const Section4 = () => {
  const [isTab, setTab] = useState("CPU");
  return (
    <div className="mainPage">
      <div className="section__4">
        <div className="container">
          <p className="section__4-heading">High performance, low price</p>
          <p className="section__4-subheading">
            Industry leading performance bundled with low prices.
          </p>
          <div className="tab">
            {section4Tab.map((e, index) => (
              <div
                onClick={() => setTab(e.title)}
                key={index}
                className={`tabLinks ${isTab === e.title ? "active" : ""}`}
              >
                <div>
                  <img src={e.icon} />
                </div>
                <span>{e.title}</span>
              </div>
            ))}
          </div>
          {isTab === "CPU" && (
            <p className="titleBenchMark">VM-1 Plan CPU Benchmark</p>
          )}
          {isTab === "Memory" && (
            <p className="titleBenchMark">VM-1 Plan Memory Benchmark</p>
          )}
          {isTab === "Disk" && (
            <p className="titleBenchMark">VM-1 Plan Disk Benchmark</p>
          )}
          <p className="benchmark"></p>
          <p className="benchmark-notice">
            **These benchmark scores are for reference only and may differ
            slightly depending on the system and configurations.
          </p>
          <button>Benchmark</button>
        </div>
      </div>
    </div>
  );
};
export default Section4;
