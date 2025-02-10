import "../../css/MainPage/Section7/style.scss";
import icon1 from "../../assets/icons/MainPage/Section7/icon1.svg";
import icon2 from "../../assets/icons/MainPage/Section7/icon2.svg";
import icon3 from "../../assets/icons/MainPage/Section7/icon3.svg";

const section7 = [
  {
    title: "Isolated",
    icon: icon1,
    content1:
      "Isolated virtual machine environment prevents unauthorized access to your server.",
    content2:
      "Your data will remain in your own secure, isolated environment and nowhere else.",
  },
  {
    title: "Firewall",
    icon: icon2,
    content1:
      "Enterprise-level layer 3 security firewall that you can easily tweak and set up with a few clicks.",
    content2: "Better DDoS protection with layer 3 firewall.",
  },
  {
    title: "Backups",
    icon: icon3,
    content1:
      "Automatic backups of your server's data will be taken to secure your server further.",
    content2:
      "All our servers include free weekly backups that you can easily restore in a few clicks.",
  },
];
const Section7 = () => {
  return (
    <div className="mainPage">
      <div className="section__7">
        <div className="container">
          <p className="section__7-heading">Security</p>
          <p className="section__7-subheading">
            Multiple Layers of enterprise-level security.
            <br />
            Your server is protected with us.
          </p>
          <div className="section__7-main">
            {section7.map((e, index) => (
              <div key={index} className="wrapper">
                <div className="title">
                  <h3>{e.title}</h3>
                  <div>
                    <img src={e.icon} />
                  </div>
                </div>
                <div className="content">
                  <p>{e.content1}</p>
                  <br />
                  <p>{e.content2}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section7;
