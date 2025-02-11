import "../../css/Clone/Section3/style.scss";
import img from "../../assets/images/Clone/Section3/img.gif";
const Section3 = () => {
  return (
    <div className="clonePage">
      <div className="section__3">
        <div className="container">
          <h3>Cloning servers as easy as 1, 2, 3 !</h3>
          <div className="img">
            <img src={img} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
