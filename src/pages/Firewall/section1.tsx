import { ReactComponent as Img } from "../../assets/images/Firewall/Section1/img.svg";
import "../../css/Firewall/Section1/style.scss";
const Section1 = () => {
  return (
    <div className="firewallPage">
      <div className="section__1">
        <div className="container">
          <div className="banner">
            <Img className="img" />
            <div className="text-banner">
              <h1>Firewall</h1>
              <p>
                Manage your IP address easily with Evoxt's IP address management
                system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
