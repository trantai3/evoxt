import "../../css/AccountContact/style.scss";
import flag from "../../assets/icons/ClientArea/flagvn.webp";
const emailPreferences = [
  "General Emails - General Announcements & Password Reminders",
  "Invoice Emails - Invoices & Billing Reminders",
  "Support Emails - Receive a copy of all support ticket communications created by the parent account holder",
  "Product Emails - Order Details, Welcome Emails, etc...",
  "Domain Emails - Renewal Notices, Registration Confirmations, etc...",
];
const AccountContact = () => {
  return (
    <div className="accountContactPage">
      <div className="container">
        <h1>Add Contact</h1>
        <div className="table">
          <div className="alert">
            <label>Choose Contact</label>
            <select>
              <option value="0">Add New Contact</option>
            </select>
            <button>Go</button>
          </div>
          <div className="row">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" />
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
              <label>Phone Number</label>
              <div className="phone">
                <div className="flag">
                  <img src={flag} />
                  <p className="phone-number">+84</p>
                </div>
                <input placeholder="91 234 56 78" />
              </div>
            </div>
            <div className="form-group">
              <label>Zip Code</label>
              <input type="text" />
            </div>
          </div>
          <div className="row">
            <div className="form-group"></div>
            <div className="form-group">
              <label>Country</label>
              <select>
                <option value="1">VietNam</option>
              </select>
            </div>
          </div>
          <h3>Email Preferences</h3>
          <div className="controls">
            {emailPreferences.map((e, index) => (
              <div key={index} className="choose">
                <input type="checkbox" />
                <label>{e}</label>
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

export default AccountContact;
