import "../../css/API/rateTime/style.scss";
const RateTime = () => {
  return (
    <div className="ratetime">
      <div className="ratetime-left">
        <div id="side-43" className="ratetime-infor">
          <h2>Rate Limit</h2>
          <p>
            Rate limiting controls the number of API calls that can be made
            within a specified time period. If this limit is exceeded, further
            requests will be throttled, and a <code>429 Too Many Requests</code>
            error will be returned.
          </p>
        </div>
      </div>
      <div className="ratetime-right"></div>
    </div>
  );
};

export default RateTime;
