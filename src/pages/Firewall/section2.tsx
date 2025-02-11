import "../../css/Firewall/Section2/style.scss";
import img from "../../assets/images/Firewall/Section2/img.svg";
import icon1 from "../../assets/icons/Firewall/Section2/icon1.svg";
import icon2 from "../../assets/icons/Firewall/Section2/icon2.svg";
import icon3 from "../../assets/icons/Firewall/Section2/icon3.svg";
const section2 = [
  {
    img: icon1,
    title: "Easy",
    content: (
      <p className="feature-content">
        Easily configure your firewall settings through your VM control panel.
        Alter firewall rules without any command line.
      </p>
    ),
  },
  {
    img: icon2,
    title: "Port Security",
    content: (
      <p className="feature-content">
        Only open certain port to go through firewall
      </p>
    ),
  },
  {
    img: icon3,
    title: "Specific IP",
    content: (
      <p className="feature-content">
        Only allow specific IP that you want to go through firewall
      </p>
    ),
  },
];
const Section2 = () => {
  return (
    <div className="firewallPage">
      <div className="section__2">
        <div className="container">
          <div className="section__2-top">
            <div className="img">
              <img src={img} />
            </div>
            <p className="section__2-title">
              Control Firewall Rules on your Evoxt's VM Control Panel.
            </p>
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
