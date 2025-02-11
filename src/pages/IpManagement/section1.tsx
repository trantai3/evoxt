import img from "../../assets/images/IpManagement/Section1/img.svg";
import "../../css/IpManagement/Section1/style.scss";
const Section1 = () => {
  return (
    <div className="ipmanaPage">
      <div className="section__1">
        <div className="container">
          <div className="banner">
            <img src={img} />
            <div className="text-banner">
              <h1>IP Address Management</h1>
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
