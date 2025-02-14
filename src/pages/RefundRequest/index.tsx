import "../../css/RefundRequest/style.scss";
const RefundRequest = () => {
  return (
    <div className="refundRequestPage">
      <div className="container">
        <h1>Refund Request</h1>
        <div className="table">
          <p className="title">Select a service that you need a refund for</p>
          <select>
            <option value={1}>None</option>
          </select>
          <p className="infor">
            If you need to reinstall, migrate to another region, downgrade or
            upgrade, redeploy/etc. Please open a ticket to request for help.
            <br />
            Please use this channel exclusively to request a refund.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefundRequest;
