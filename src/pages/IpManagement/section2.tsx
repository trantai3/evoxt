import "../../css/IpManagement/Section2/style.scss";
import { ReactComponent as Img } from "../../assets/images/IpManagement/Section2/img.svg";
import { ReactComponent as Icon1 } from "../../assets/icons/IpManagement/Section2/icon1.svg";
import { ReactComponent as Icon2 } from "../../assets/icons/IpManagement/Section2/icon2.svg";
import { ReactComponent as Icon3 } from "../../assets/icons/IpManagement/Section2/icon3.svg";
import { ReactComponent as Icon4 } from "../../assets/icons/IpManagement/Section2/icon4.svg";
import { ReactComponent as Icon5 } from "../../assets/icons/IpManagement/Section2/icon5.svg";
import { ReactComponent as Icon6 } from "../../assets/icons/IpManagement/Section2/icon6.svg";

const section2 = [
  {
    img: <Icon1 className="icon" />,
    title: "Easy",
    content: <p className="feature-content">Swap IP Address between VMs</p>,
  },
  {
    img: <Icon2 className="icon" />,
    title: "Configuration",
    content: (
      <p className="feature-content">
        No further system configuration needed, everything can be done on panel
      </p>
    ),
  },
  {
    img: <Icon3 className="icon" />,
    title: "Assign & Reassign",
    content: (
      <p className="feature-content">Easily Assign or Reassign IP address</p>
    ),
  },
  {
    img: <Icon4 className="icon" />,
    title: "Primary IP",
    content: (
      <p className="feature-content">
        Set as Primary IP address or Remove IP address to reassign to a
        different server
      </p>
    ),
  },
  {
    img: <Icon5 className="icon" />,
    title: "Automatic",
    content: (
      <p className="feature-content">
        Automatic Extra IP assignment, no wait time needed{" "}
      </p>
    ),
  },
  {
    img: <Icon6 className="icon" />,
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
              <Img className="img-main" />
            </div>
            <p className="section__2-title">
              Control Firewall Rules on your Evoxt's VM Control Panel.
            </p>
            <p className="section__2-features">
              {section2.map((e, index) => (
                <div className="feature" key={index}>
                  <div className="feature-img">{e.img}</div>
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
