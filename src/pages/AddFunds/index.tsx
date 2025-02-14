import { useState } from "react";
import "../../css/AddFunds/style.scss";
import icon1 from "../../assets/icons/AddFunds/icon1.png";
import icon2 from "../../assets/icons/AddFunds/icon2.svg";
const tabs = ["Add Funds", "Credit History"];
const creditDebit = [
  {
    img: icon1,
    imgTitle: "Credit Card/ Debit Card",
    title: "Automatic Top-up",
    auto: (
      <p className="auto">
        Automatically Top-up <strong>$50</strong>
      </p>
    ),
    infor: (
      <p className="infor">
        When account credits fall below <strong>$10</strong>
      </p>
    ),
    clickhere: "Add a payment method",
    clickhereInfor: "to proceed with Automatic Top Up",
    success: "Last successful top-up: N/A",
  },
];
const paypal = [
  {
    img: icon2,
    imgTitle: "PayPal",
    title: "Automatic Top-up",
    auto: (
      <p className="auto">
        Automatically Top-up <strong>$10</strong>
      </p>
    ),
    infor: <p className="infor">Every 1 Month(s)</p>,
    clickhere: "Click Here",
    clickhereInfor: "to proceed with Automatic Top Up",
    success: "Last successful top-up: N/A",
  },
];
const creditHistory = ["ID", "Date", "Description", "Amount"];
const AddFunds = () => {
  const [isTab, setTab] = useState("Add Funds");
  const [value, setValue] = useState("10");
  return (
    <div className="addFundsPage">
      <div className="container">
        <h1>Account Credits</h1>
        <div className="table">
          <div className="tabs">
            {tabs.map((e, index) => (
              <p
                onClick={() => setTab(e)}
                className={`tab ${isTab === e ? "tab-active" : ""}`}
                key={index}
              >
                {e}
              </p>
            ))}
          </div>
          {isTab === "Add Funds" && (
            <>
              <p className="account-balance">
                Your account credit balance is <strong>$0.00</strong>
              </p>
              <div className="account-value">
                <div className="account-amount">
                  <p className="title">Amount</p>
                  <div className="amount">
                    <p className="dollarsign">$</p>
                    <input
                      type="text"
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                    />
                  </div>
                </div>
                <div className="payment-method">
                  <label>Payment Method:</label>
                  <select>
                    <option value={1}>Bitcoin</option>
                    <option value={2}>Credit Card / Debit Card</option>
                    <option value={3}>Alipay</option>
                    <option value={4}>Alipay_Backup</option>
                    <option value={5}>USDt Payment</option>
                    <option value={6}>PayPal</option>
                    <option value={7}>Credit Card/ Debit Card</option>
                  </select>
                  <button>Add Funds</button>
                </div>
              </div>
              <div className="payment-choose">
                {creditDebit.map((e, index) => (
                  <div key={index} className="credit-debit">
                    <h3>
                      <img src={e.img} />
                      {e.imgTitle}
                    </h3>
                    <div className="credit-debit-table">
                      <p className="credit-debit-table-title">
                        Automatic Top-up
                      </p>
                      {e.auto}
                      {e.infor}
                      <div className="selectedpayment">
                        <p>
                          <strong>{e.clickhere}</strong>
                          {e.clickhereInfor}
                        </p>
                      </div>
                      <div className="success">
                        <p>{e.success}</p>
                        <button>Edit</button>
                      </div>
                    </div>
                  </div>
                ))}
                {paypal.map((e, index) => (
                  <div key={index} className="paypal">
                    <h3>
                      <img src={e.img} />
                      {e.imgTitle}
                    </h3>
                    <div className="paypal-table">
                      <p className="paypal-table-title">Automatic Top-up</p>
                      {e.auto}
                      {e.infor}
                      <div className="selectedpayment">
                        <p>
                          <strong>{e.clickhere}</strong>
                          {e.clickhereInfor}
                        </p>
                      </div>
                      <div className="success">
                        <p>{e.success}</p>
                        <button>Edit</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="faq-content">
                <p className="faq">Why can't I top up a higher amount?</p>
                <p className="faqanswer">
                  The limit is set to reduce potential fraud. Contact us if you
                  would like to top up an amount that is higher than the limit
                </p>
                <p className="faq">I want to pay with other payment methods</p>
                <p className="faqanswer">
                  At this moment, Evoxt only accepts Cryptocurrencies, PayPal,
                  Credit Card and Debit Card. We might accept wire transfers in
                  the future, contact us if you would like to request for a
                  specific payment method to be added.
                </p>
              </div>
              <p className="notice">* All deposits are non-refundable.</p>
            </>
          )}
          {isTab === "Credit History" && (
            <div className="overflow-x">
              <table>
                <thead>
                  <tr>
                    {creditHistory.map((e, index) => (
                      <th key={index}>{e}</th>
                    ))}
                  </tr>
                </thead>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddFunds;
