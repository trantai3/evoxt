import "../../css/ClientArea/style.scss";
import flag from "../../assets/icons/ClientArea/flagvn.webp";
const emailPreferences = [
  "General Emails - All account related emails",
  "Invoice Emails - New Invoices, Reminders, & Overdue Notices",
  "Support Emails - Receive a CC of all Support Ticket Communications",
  "Product Emails - Welcome Emails, Suspensions & Other Lifecycle Notifications",
  "Domain Emails - Registration/Transfer Confirmation & Renewal Notices",
  "Affiliate Emails - Receive Affiliate Notifications",
];
const ClientArea = () => {
  return (
    <div className="clientareaPage">
      <div className="container">
        <h1>Tickets</h1>
        <div className="table">
          <h3>Change your Evoxt account's information here.</h3>
          <div className="row">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" value="Tai" />
            </div>
            <div className="form-group">
              <label>Address 1</label>
              <input type="text" />
            </div>
          </div>
          <div className="row">
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Address 2</label>
              <input type="text" />
            </div>
          </div>
          <div className="row">
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Address 2</label>
              <input type="text" />
            </div>
          </div>
          <div className="row">
            <div className="form-group">
              <label>Company Name</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>City</label>
              <input type="text" />
            </div>
          </div>
          <div className="row">
            <div className="form-group">
              <label>Email Address</label>
              <input type="text" placeholder="trantai09032003@gmail.com" />
            </div>
            <div className="form-group">
              <label>State/Region</label>
              <input type="text" />
            </div>
          </div>
          <div className="row">
            <div className="form-group">
              <label>Payment Method</label>
              <select>
                <option value="none">Use Default (Set Per Order)</option>
                <option value="btcpay">Bitcoin Payment</option>
                <option value="stripe">Credit Card / Debit Card</option>
                <option value="evoxtcredits">Evoxt Account Credits</option>
                <option value="rzr_alipay">Alipay</option>
                <option value="alipay">Alipay_Backup</option>
                <option value="usdtevoxt">USDt Payment</option>
                <option value="paypalevoxt">PayPal</option>
                <option value="stripeevoxt">Credit Card/ Debit Card</option>
              </select>
            </div>
            <div className="form-group">
              <label>Zip Code</label>
              <input type="text" />
            </div>
          </div>
          <div className="row">
            <div className="form-group">
              <label>Default Billing Contact</label>
              <select>
                <option value="0">Use Default Contact (Details Above)</option>
              </select>
            </div>
            <div className="form-group">
              <label>Country</label>
              <select>
                <option value="1">VietNam</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="form-group"></div>
            <div className="form-group">
              <label>Phone Number</label>
              <div className="phone">
                <div className="flag">
                  <img src={flag} />
                  <p className="phone-number">+84</p>
                </div>
                <input placeholder="91 234 56 78" />
              </div>
            </div>
          </div>
          <p className="email-preferences">Email Preferences</p>
          <div className="controls">
            {emailPreferences.map((e, index) => (
              <div className="check" key={index}>
                <input checked type="checkbox" />
                <p>{e}</p>
              </div>
            ))}
          </div>
          <div className="button">
            <button className="save-changes">Save Changes</button>
            <button className="cancel">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientArea;
