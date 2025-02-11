import "../../css/IpManagement/Section2/style.scss";
import img from "../../assets/images/IpManagement/Section2/img.svg";
import icon1 from "../../assets/icons/IpManagement/Section2/icon1.svg";
import icon2 from "../../assets/icons/IpManagement/Section2/icon2.svg";
import icon3 from "../../assets/icons/IpManagement/Section2/icon3.svg";
import icon4 from "../../assets/icons/IpManagement/Section2/icon4.svg";
import icon5 from "../../assets/icons/IpManagement/Section2/icon5.svg";
import icon6 from "../../assets/icons/IpManagement/Section2/icon6.svg";

const section2 = [
  {
    img: icon1,
    title: "Easy",
    content: <p className="feature-content">Swap IP Address between VMs</p>,
  },
  {
    img: icon2,
    title: "Configuration",
    content: (
      <p className="feature-content">
        No further system configuration needed, everything can be done on panel
      </p>
    ),
  },
  {
    img: icon3,
    title: "Assign & Reassign",
    content: (
      <p className="feature-content">Easily Assign or Reassign IP address</p>
    ),
  },
  {
    img: icon4,
    title: "Primary IP",
    content: (
      <p className="feature-content">
        Set as Primary IP address or Remove IP address to reassign to a
        different server
      </p>
    ),
  },
  {
    img: icon5,
    title: "Automatic",
    content: (
      <p className="feature-content">
        Automatic Extra IP assignment, no wait time needed{" "}
      </p>
    ),
  },
  {
    img: icon6,
    title: "Downtime",
    content: <p className="feature-content">Minimal Downtime</p>,
  },
];
const Section2 = () => {
  return (
    <div className="ipmanaPage">
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
