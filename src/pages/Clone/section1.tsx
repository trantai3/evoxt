import img from "../../assets/images/Clone/Section1/img1.svg";
import "../../css/Clone/Section1/style.scss";
const Section1 = () => {
  return (
    <div className="clonePage">
      <div className="section__1">
        <div className="container">
          <div className="banner">
            <img src={img} />
            <div className="text-banner">
              <h1>Clone Servers</h1>
              <p>
                Save the hassle! Easily clone your virtual machines in 1-click
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
