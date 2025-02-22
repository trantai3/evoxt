import { useState } from "react";
import "../../css/Affiliate/style.scss";
import { CiSearch } from "react-icons/ci";
import img1 from "../../assets/images/GraphicAssets/728x90.png";
import img2 from "../../assets/images/GraphicAssets/300x250.png";
import img3 from "../../assets/images/GraphicAssets/300x600.png";
import img4 from "../../assets/images/GraphicAssets/160x600.png";
const affiliate = [
  "Dashboard",
  "Coupons",
  "Referrals",
  "Link Insights",
  "Credited Commission",
  "Reports",
  "Estimator",
  "Graphic Assets",
  "Tips",
];
const linkSights = ["Link", "Count", ""];
const commissiton = ["Date", "Referral ID", "Invoice ID", "Amount"];
const reportsThead = ["Date", "Description", "Amount"];
const reportsTbody = [
  {
    date: "",
    description: "No commission received on 2025-02",
    amount: "",
  },
  {
    date: "",
    description: "Total commission earnings on 2025-02",
    amount: "$0 USD",
  },
];

const estimator = [
  {
    class: "clicks",
    title: "Number of active referral services",
    content: "0",
  },
  {
    class: "signups",
    title: "Estimated Monthly Earnings",
    content: "$0 USD",
  },
  {
    class: "conversion",
    title: "Estimated Yearly Earnings",
    content: "0%",
  },
  {
    class: "commissions",
    title: "Total Current Affiliate Earnings",
    content: "$0.00 USD",
  },
];

const dashboardInner = [
  {
    class: "clicks",
    title: "Referral Link Clicks",
    content: "0",
  },
  {
    class: "signups",
    title: "Referral Link Signups",
    content: "0",
  },
  {
    class: "conversion",
    title: "Referral Link Conversion",
    content: "0%",
  },
  {
    class: "commissions",
    title: "Commissions",
    content: "$0.00 USD",
  },
];
const dashboardPrice = [
  {
    title: "Commissions Pending Maturation:",
    content: "$0.00 USD",
  },
  {
    title: "Available Commissions Balance:",
    content: "$0.00 USD",
  },
  { title: "Total Amount Withdrawn:", content: "$0.00 USD " },
];

const referralsHead = [
  "Signup Date",
  "Product/Service",
  "Amount",
  "Commission",
  "Status",
];
const Affiliate = () => {
  const [isTab, setTab] = useState("Dashboard");
  return (
    <div className="affiliatePage">
      <div className="container">
        <h1>Affiliate</h1>
        <div className="overflow-x">
          <div className="tabs">
            {affiliate.map((e, index) => (
              <button
                className={`${isTab === e ? "tab-active" : ""}`}
                onClick={() => setTab(e)}
                key={index}
              >
                {e}
              </button>
            ))}
          </div>
        </div>
        {isTab === "Dashboard" && (
          <div className="dashboard">
            <h2>Dashboard</h2>
            <div className="row">
              {dashboardInner.map((e, index) => (
                <div key={index} className={`dashboard-inner ${e.class}`}>
                  <p>{e.title}</p>
                  <span>{e.content}</span>
                </div>
              ))}
            </div>
            <h3>Your Unique Referral Link</h3>
            <span className="referral-link">
              https://console.evoxt.com/aff.php?aff=1878
            </span>
            <p className="referral-infor">
              When your referral uses this link to signup, the order that your
              referral make will be automatically registered as your referral
              purchase.
            </p>
            <div className="referral-detail">
              {dashboardPrice.map((e, index) => (
                <div key={index} className="referral-row">
                  <span>{e.title}</span>
                  <strong>{e.content}</strong>
                </div>
              ))}
            </div>
            <div className="button">
              <button>Request Withdrawal</button>
            </div>
            <p className="text-muted">
              You will be able to request a withdrawal as soon as your balance
              reaches the minimum required amount of $0.01 USD.
            </p>
          </div>
        )}
        {isTab === "Coupons" && (
          <div className="coupons">
            <h2>Coupons</h2>
            <p className="couponaff-outer">
              Generate a discount code to send to your referrals.
            </p>
            <div className="form">
              <p className="form-title">AFF1878-</p>
              <input className="form-content" />
            </div>
            <div className="button">
              <button>Generate</button>
            </div>
            <p className="discount-infor">
              This discount code will provide your referral with 5% discounts.
            </p>
            <p className="noticed">
              When your referral uses this coupon code, the order that has this
              coupon code applied will be automatically registered as your
              referral purchase.
            </p>
          </div>
        )}
        {isTab === "Referrals" && (
          <div className="referrals">
            <h2>Referrals</h2>
            <div className="overflow-x">
              <p className="dataTable-infor">Showing 0 to 0 of 0 entries</p>
              <div className="search-right">
                <div className="search">
                  <CiSearch className="icon" />
                  <input type="text" />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    {referralsHead.map((e, index) => (
                      <th key={index}>{e}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>No Records Found</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
        {isTab === "Link Insights" && (
          <div className="link-insights">
            <h2>Link Insights</h2>
            <div className="overflow-x">
              <div className="search-right">
                <div className="search">
                  <CiSearch className="icon" />
                  <input type="text" />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    {linkSights.map((e, index) => (
                      <th key={index}>{e}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>No Records Found</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
        {isTab === "Credited Commission" && (
          <div className="commission">
            <h2>Credited Commission</h2>
            <div className="overflow-x">
              <p className="dataTable-infor">Showing 0 to 0 of 0 entries</p>
              <div className="search-right">
                <div className="search">
                  <CiSearch className="icon" />
                  <input type="text" />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    {commissiton.map((e, index) => (
                      <th key={index}>{e}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>No data available in table</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
        {isTab === "Reports" && (
          <div className="reports">
            <h2>Current Month Earnings Report</h2>
            <div className="overflow-x">
              <table>
                <thead>
                  <tr>
                    {reportsThead.map((e, index) => (
                      <th key={index}>{e}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {reportsTbody.map((e, index) => (
                    <tr key={index}>
                      <td>{e.date}</td>
                      <td>{e.description}</td>
                      <td>{e.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        {isTab === "Estimator" && (
          <div className="estimator">
            <h2>Earning Forecast</h2>
            <div className="row">
              {estimator.map((e, index) => (
                <div key={index} className={`dashboard-inner ${e.class}`}>
                  <p>{e.title}</p>
                  <span>{e.content}</span>
                </div>
              ))}
            </div>
            <p className="noticed">
              Note: These numbers are calculated based on current active
              referral services, this number might increase or decrease in the
              future.
            </p>
          </div>
        )}
        {isTab === "Graphic Assets" && (
          <div className="graphic-assets">
            <h2>Graphic Assets</h2>
            <p className="noticed">
              Below are all the banner images that you can use to get referrals
              or display, Right Click and Save Image As if you wish to download
              it.
              <br />
              **Note: If images are not showing, please disable AdBlock.
            </p>
            <div className="img728x90">
              <h3>728x90</h3>
              <img src={img1} />
              <p>
                Image Url:
                <a href="https://console.evoxt.com/affiliates-assets/english/728x90.png">
                  https://console.evoxt.com/affiliates-assets/english/728x90.png
                </a>
              </p>
            </div>
            <div className="img300x250">
              <h3>300x250</h3>
              <img src={img2} />
              <p>
                Image Url:
                <a href="https://console.evoxt.com/affiliates-assets/english/300x250.png">
                  https://console.evoxt.com/affiliates-assets/english/300x250.png
                </a>
              </p>
            </div>
            <div className="img300x600">
              <h3>300x600</h3>
              <img src={img3} />
              <p>
                Image Url:
                <a href="https://console.evoxt.com/affiliates-assets/english/300x600.png">
                  https://console.evoxt.com/affiliates-assets/english/300x600.png
                </a>
              </p>
            </div>
            <div className="img160x600">
              <h3>160x600</h3>
              <img src={img4} />
              <p>
                Image Url:
                <a href="https://console.evoxt.com/affiliates-assets/english/160x600.png">
                  https://console.evoxt.com/affiliates-assets/english/160x600.png
                </a>
              </p>
            </div>
          </div>
        )}
        {isTab === "Tips" && (
          <div className="tips">
            <h2>Tips</h2>
            <p className="subtitle">How to get more affiliates</p>
            <ul>
              Lessons that we learned from our top affiliates
              <li>
                Share your referral links <br />
                Simple, the more you share, the better the chances people click
                on your link.
              </li>
              <li>
                Share your coupon code
                <br />
                Your coupon code offers a big discount. So, there is no reason
                for them to not use your coupon code. Moreover, when they use
                your coupon code, they will be registered under you as an
                affiliate, even if they did not click your affiliate links.
              </li>
              <li>
                Provide value
                <br />
                Write guides, make tutorials, record videos or even write blog
                posts. By providing value, this will build trust between you and
                your referral and eventually make them stick to you for a long
                time.
                <br />
                Ps: Do not forget to include your referral link on your guides,
                tutorials, videos or blog posts.
              </li>
              <li>
                Bundle
                <br />
                Releasing a bot, script, software, templates? Bundle a referral
                link with your releases.
              </li>
              <li>
                Friends
                <br />
                Share your referral links with your friends that are in need.
                They probably wouldn't mind signing up under your referral and
                getting you some commissions in the process
              </li>
              <li>
                Honesty
                <br />
                Tell them your experience, honesty always goes a long way.
                Remember our referral system pays for a lifetime. 1 happy
                referral will earn you 12x 10% a year.
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Affiliate;
