import "../../css/MainPage/Section2/style.scss";
import { ReactComponent as Icon1 } from "../../assets/icons/Section2/icon1.svg";
import { ReactComponent as Icon2 } from "../../assets/icons/Section2/icon2.svg";
import { ReactComponent as Icon3 } from "../../assets/icons/Section2/icon3.svg";
import { ReactComponent as Icon4 } from "../../assets/icons/Section2/icon4.svg";
import { ReactComponent as Icon5 } from "../../assets/icons/Section2/icon5.svg";
const section2 = [
  { icon: <Icon1 className="icon" />, content: "6.0 GHz" },
  { icon: <Icon2 className="icon" />, content: "2.4 GHz" },
  { icon: <Icon3 className="icon" />, content: "2.3 GHz" },
  { icon: <Icon4 className="icon" />, content: "2.3 GHz" },
  { icon: <Icon5 className="icon" />, content: "2.2 GHz" },
];
const Section2 = () => {
  return (
    <div className="mainPage">
      <div className="section__2">
        <div className="container">
          <div className="section__2--heading">
            Industry Leading Single Core Performance
          </div>
          <div className="section__2--subheading">
            Take a look at how our CPU compare to others.
          </div>
          <div className="section__2--table">
            {section2.map((e, index) => (
              <div key={index} className="table__row">
                {e.icon}
                <div className="row__container">
                  <div className={`row__infor row__infor-${index}`}>
                    <p className="content">{e.content}</p>
                  </div>
                </div>
              </div>
            ))}
            <p className="section__2--notice">
              The data are collected from 2020. This might differ in the future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
