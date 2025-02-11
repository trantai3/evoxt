import "../../css/Firewall/Section3/style.scss";
import img from "../../assets/images/Firewall/Section3/img.gif";
const Section3 = () => {
  return (
    <div className="firewallPage">
      <div className="section__3">
        <div className="container">
          <h3>Quick and easy firewall configuration.</h3>
          <div className="img">
            <img src={img} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
