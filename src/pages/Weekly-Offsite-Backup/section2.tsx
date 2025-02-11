import "../../css/Weekly/Section2/style.scss";
import img from "../../assets/images/Weekly/Section2/img.svg";
import icon1 from "../../assets/icons/Weekly/Section2/icon1.svg";
import icon2 from "../../assets/icons/Weekly/Section2/icon2.svg";
import icon3 from "../../assets/icons/Weekly/Section2/icon3.svg";
import icon4 from "../../assets/icons/Weekly/Section2/icon4.svg";
const section2 = [
  {
    img: icon1,
    title: "Easy",
    content: <p className="feature-content">No configuration needed</p>,
  },
  {
    img: icon2,
    title: "Exact Copy",
    content: (
      <p className="feature-content">Automatically backup on every Saturday</p>
    ),
  },
  {
    img: icon3,
    title: "Automatic",
    content: <p className="feature-content">Restore backup in one click</p>,
  },
  {
    img: icon4,
    title: "Disaster proof",
    content: (
      <p className="feature-content">
        100% offsite. Your backup are not stored in any of Evoxt's servers or
        located in any of Evoxt's infrastructure.
      </p>
    ),
  },
];
const Section2 = () => {
  return (
    <div className="weeklyPage">
      <div className="section__2">
        <div className="container">
          <div className="section__2-top">
            <div className="img">
              <img src={img} />
            </div>
            <p className="section__2-title">Stay prepared at all times.</p>
            <p className="section__2-features">
              {section2.map((e, index) => (
                <div className="feature" key={index}>
                  <div className="feature-img">
                    <img src={e.img} />
                  </div>
                  <div className="feature-text">
                    <p className="feature-title">{e.title}</p>
                    {e.content}
                  </div>
                </div>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
