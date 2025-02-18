import "../../css/Reseller/style.scss";
const Reseller = () => {
  return (
    <div className="resellerPage">
      <div className="container">
        <h1 className="sign-up">Join us as a reseller</h1>
        <div className="main-content">
          <div className="reseller-header">
            <h1>Sign up for a premium reseller plan</h1>
            <p>
              $9.99 per month to unlock exclusive benefits and take your
              business to the next level.
            </p>
          </div>
          <div className="cards">
            <div className="card">
              <h2>Benefits</h2>
              <ul>
                <li className="first">Exclusive Tools</li>
                <ul>
                  <li className="second">Extend service due date by one day</li>
                  <li className="second">
                    Reset virtual machine (VM) bandwidth
                  </li>
                  <li className="second">
                    Transfer unused service days to another VM
                  </li>
                  <li className="second">Change IP address easily</li>
                  <li className="second">Invoice Reporting</li>
                  <li className="second">And much more..</li>
                </ul>
                <li className="first">5% Reseller Discount</li>
                <li className="first">Priority Support</li>
              </ul>
            </div>
            <div className="card">
              <h2>Requirements</h2>
              <ul>
                <li className="first">Registered Business</li>
                <li className="first">Defined Selling Strategy</li>
                <li className="first">
                  $9.99 Monthly Fees **Waived with $500 monthly recurring
                  spending on Evoxt
                </li>
                <li className="first">Active Domain **if applicable</li>
                <li className="first">
                  Have at least $100 in Evoxt account credits during sign up
                </li>
              </ul>
            </div>
          </div>
          <div className="button">
            <button>Sign Up Now</button>
          </div>
          <p className="noticed">
            **You don't need to sign up for Reseller Premium to resell Evoxt's
            VMs. This package is simply an optional upgrade that offers
            additional features and more options for your reselling business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reseller;
