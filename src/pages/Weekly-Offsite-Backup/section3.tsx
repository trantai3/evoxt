import "../../css/Weekly/Section3/style.scss";
import img from "../../assets/images/Clone/Section3/img.gif";
const Section3 = () => {
  return (
    <div className="weeklyPage">
      <div className="section__3">
        <div className="container">
          <h3>Restore backup in several clicks</h3>
          <div className="img">
            <img src={img} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
