import img1 from "../../assets/images/Malaysia/Section3/img1.png";
import img2 from "../../assets/images/Malaysia/Section3/img2.png";
import img3 from "../../assets/images/Malaysia/Section3/img3.png";
import img4 from "../../assets/images/Malaysia/Section3/img4.png";
import img5 from "../../assets/images/Malaysia/Section3/img5.png";
import "../../css/MalaysiaDedicated/Section3/style.scss";
const section3 = [
  {
    title: <p className="title">Direct access to hardware</p>,
    description: (
      <p className="desc">
        Been wanting to run Android Emulator on VMs but kept failing? Been
        trying to create VMs with Evoxt VM but kept failing?
      </p>
    ),
    img: img1,
  },
  {
    title: <p className="title">Craving More Performance?</p>,
    description: (
      <p className="desc">
        Unmatched Performance! Say goodbye to shared resources and bottlenecks,
        and hello to a server exclusively dedicated to your needs. Enjoy the
        full power, speed, and control you deserve.
      </p>
    ),
    img: img2,
  },
  {
    title: <p className="title">Dedicated Server Control Panel</p>,
    description: (
      <p className="desc">
        Easy to control, Power off and control your dedicated server through VNC
        without needing help from us
      </p>
    ),
    img: img3,
  },
  {
    title: <p className="title">Custom Built Servers</p>,
    description: (
      <p className="desc">
        Your Unique Server, Your Way! Need a 7.68 GB NVMe? We've got you.
        Craving extra RAM? We've got you. Want that special OS installed? We've
        got you. Welcome to the world of truly custom-built servers
      </p>
    ),
    img: img4,
  },
  {
    title: <p className="title">Security Standards</p>,
    description: (
      <p className="desc">
        Unparalleled security standards for your Peace of Mind
        <ul>
          <li>ISO/IEC 27001 Information Security Management System</li>
          <li>ISO/IEC 20000-1 Quality Management System</li>
          <li>ISO 9001 Information Technology Service Management</li>
          <li>ANSI/TIA-942-B Rated 3 Site/Facilities Certification</li>
          <li>Payment Card Industry Data Security Standard (PCI DSS)</li>
          <li>
            Monetary Authority of Singapore (MAS) Threat, Vulnerability and Risk
            Assessment (TVRA) compliant
          </li>
          <li>
            Bank Negara Malaysia (BNM) Data Centre Risk Assessment (DCRA)
            compliant
          </li>
        </ul>
      </p>
    ),
    img: img5,
  },
];

const Section3 = () => {
  return (
    <div className="section3Malaysia">
      <div className="container">
        <div className="content">
          {section3.map((e, index) => (
            <div key={index} className={`wrap wrap-${index}`}>
              <div className="wrap-left">
                {e.title}
                {e.description}
              </div>
              <div className="wrap-right">
                <img src={e.img} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section3;
