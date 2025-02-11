import "../../css/IpManagement/Section3/style.scss";
import img from "../../assets/images/IpManagement/Section3/img.gif";
const Section3 = () => {
  return (
    <div className="ipmanaPage">
      <div className="section__3">
        <div className="container">
          <h3>IP Management at its Finest.</h3>
          <div className="img">
            <img src={img} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
