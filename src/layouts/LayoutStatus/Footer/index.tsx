import "../../../css/Status/FooterStatus/style.scss";
import { RiFullscreenExitLine } from "react-icons/ri";
import { CiBellOff } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="footerLayoutStatus">
      <div className="container">
        <div className="footer">
          <div className="footer-left">
            <div className="fullscreen">
              <RiFullscreenExitLine className="icon-full" />
              Fullscreen mode
            </div>
            <div className="alert">
              <CiBellOff className="icon-belloff" />
              Alert sound off
            </div>
          </div>
          <div className="footer-right">
            <p>Unsubscribe</p>
            <p className="policy">Privacy policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
