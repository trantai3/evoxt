import { ReactComponent as Img } from "../../assets/images/Weekly/Section1/img.svg";
import "../../css/Weekly/Section1/style.scss";
const Section1 = () => {
  return (
    <div className="weeklyPage">
      <div className="section__1">
        <div className="container">
          <div className="banner">
            <Img className="img" />
            <div className="text-banner">
              <h1>Weekly Offsite Backup</h1>
              <p>
                Virtual machine backups are performed automatically every week
                and uploaded to offsite servers to ensure that all your data
                with Evoxt are guarded safely and securely.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
