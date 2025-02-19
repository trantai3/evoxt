import { Link } from "react-router-dom";
import "../../css/MalaysiaDedicated/Section4/style.scss";
const Section4 = () => {
  return (
    <div className="section4Malaysia">
      <div className="container">
        <div className="content">
          <p className="title">Any other requirements?</p>
          <button>
            <Link to="/deploy/submitticket">Contact us our Sales Team</Link>
          </button>
          <p className="desc">
            Please let us know, we will try our best to make it happen for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section4;
