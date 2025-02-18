import "../../css/Status/Section1Status/style.scss";
const Section1 = () => {
  return (
    <div className="section1Status">
      <div className="container">
        <div className="card">
          <div className="systems-left">
            <div className="systems-dot" />
            <div className="systems-title">
              All systems <strong>operational</strong>
            </div>
          </div>
          <div className="systems-downtime">
            <a href="">Latest downtime</a>
            <span>detected 2 days ago.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
