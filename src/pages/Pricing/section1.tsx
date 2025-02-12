import "../../css/Pricing/Section1/style.scss";
const theadTable = [
  "Plan",
  "CPU",
  "RAM",
  "Storage",
  "Monthly Transfer",
  "Backup",
  "Price",
];
const tbodyCountryTop = [
  {
    plan: "VM-0.5",
    cpu: "1 core (Up to 6.0 GHz)",
    ram: "512 MB",
    storage: "5 GB",
    monthly: "500 GB",
    backup: "Weekly",
    price: "$2.99 / month",
  },
  {
    plan: "VM-0.75",
    cpu: "1 core (Up to 6.0 GHz)",
    ram: "1 GB",
    storage: "10 GB",
    monthly: "750 GB",
    backup: "Weekly",
    price: "$4.99 / month",
  },
  {
    plan: "VM-1",
    cpu: "1 core (Up to 6.0 GHz)",
    ram: "2 GB",
    storage: "20 GB",
    monthly: "1000 GB",
    backup: "Weekly",
    price: "$5.99 / month",
  },
  {
    plan: "VM-1.5",
    cpu: "2 cores (Up to 6.0 GHz)",
    ram: "2 GB",
    storage: "20 GB",
    monthly: "1500 GB",
    backup: "Weekly",
    price: "$6.95 / month",
  },
  {
    plan: "VM-2",
    cpu: "2 cores (Up to 6.0 GHz)",
    ram: "4 GB",
    storage: "30 GB",
    monthly: "2000 GB",
    backup: "Weekly",
    price: "$11.99 / month",
  },
  {
    plan: "VM-3",
    cpu: "4 cores (Up to 6.0 GHz)",
    ram: "4 GB",
    storage: "30 GB",
    monthly: "3000 GB",
    backup: "Weekly",
    price: "$14.99 / month",
  },
  {
    plan: "VM-4",
    cpu: "4 cores (Up to 6.0 GHz)",
    ram: "8 GB",
    storage: "60 GB",
    monthly: "4000 GB",
    backup: "Weekly",
    price: "$23.99 / month",
  },
  {
    plan: "VM-6",
    cpu: "8 cores (Up to 6.0 GHz)",
    ram: "8 GB",
    storage: "60 GB",
    monthly: "5000 GB",
    backup: "Weekly",
    price: "$29.99 / month",
  },
  {
    plan: "VM-8",
    cpu: "8 cores (Up to 6.0 GHz)",
    ram: "16 GB",
    storage: "80 GB",
    monthly: "6000 GB",
    backup: "Weekly",
    price: "$47.99 / month",
  },
  {
    plan: "VM-12",
    cpu: "16 cores (Up to 6.0 GHz)",
    ram: "16 GB",
    storage: "80 GB",
    monthly: "8000 GB",
    backup: "Weekly",
    price: "$60.95 / month",
  },
  {
    plan: "VM-16",
    cpu: "16 cores (Up to 6.0 GHz)",
    ram: "32 GB",
    storage: "100 GB",
    monthly: "10 TB",
    backup: "Weekly",
    price: "$95.99 / month",
  },
];

const tbodyCountryBottom = [
  {
    plan: "VM-0.5",
    cpu: "1 core (Up to 6.0 GHz)",
    ram: "512 MB",
    storage: "5 GB",
    monthly: "500 GB",
    backup: "Weekly",
    price: "$2.99 / month",
  },
  {
    plan: "VM-0.75",
    cpu: "1 core (Up to 6.0 GHz)",
    ram: "1 GB",
    storage: "10 GB",
    monthly: "750 GB",
    backup: "Weekly",
    price: "$4.99 / month",
  },
  {
    plan: "VM-0.75",
    cpu: "1 core (Up to 6.0 GHz)",
    ram: "1 GB",
    storage: "10 GB",
    monthly: "750 GB",
    backup: "Weekly",
    price: "$4.99 / month",
  },
  {
    plan: "VM-0.75",
    cpu: "1 core (Up to 6.0 GHz)",
    ram: "1 GB",
    storage: "10 GB",
    monthly: "750 GB",
    backup: "Weekly",
    price: "$4.99 / month",
  },
  {
    plan: "VM-0.75",
    cpu: "1 core (Up to 6.0 GHz)",
    ram: "1 GB",
    storage: "10 GB",
    monthly: "750 GB",
    backup: "Weekly",
    price: "$4.99 / month",
  },
  {
    plan: "VM-0.75",
    cpu: "1 core (Up to 6.0 GHz)",
    ram: "1 GB",
    storage: "10 GB",
    monthly: "750 GB",
    backup: "Weekly",
    price: "$4.99 / month",
  },
  {
    plan: "VM-0.75",
    cpu: "1 core (Up to 6.0 GHz)",
    ram: "1 GB",
    storage: "10 GB",
    monthly: "750 GB",
    backup: "Weekly",
    price: "$4.99 / month",
  },
  {
    plan: "VM-0.75",
    cpu: "1 core (Up to 6.0 GHz)",
    ram: "1 GB",
    storage: "10 GB",
    monthly: "750 GB",
    backup: "Weekly",
    price: "$4.99 / month",
  },
  {
    plan: "VM-0.75",
    cpu: "1 core (Up to 6.0 GHz)",
    ram: "1 GB",
    storage: "10 GB",
    monthly: "750 GB",
    backup: "Weekly",
    price: "$4.99 / month",
  },
  {
    plan: "VM-0.75",
    cpu: "1 core (Up to 6.0 GHz)",
    ram: "1 GB",
    storage: "10 GB",
    monthly: "750 GB",
    backup: "Weekly",
    price: "$4.99 / month",
  },
  {
    plan: "VM-0.75",
    cpu: "1 core (Up to 6.0 GHz)",
    ram: "1 GB",
    storage: "10 GB",
    monthly: "750 GB",
    backup: "Weekly",
    price: "$4.99 / month",
  },
];

const theadAvailable = ["Upgrades", "Price", "How to Order"];
const tbodyAvailable = [
  {
    upgrade: "Extra IP Address",
    price: "1 IP Address – $3/month",
    order: "Click here",
  },
  {
    upgrade: "Extra CPU Cores",
    price: "1 vCore – $3/month",
    order: "VM Control Panel > Upgrade Tab",
  },
  {
    upgrade: "Extra RAM",
    price: "1 GB – $2/month",
    order: "VM Control Panel > Upgrade Tab",
  },
  {
    upgrade: "Monthly Transfer",
    price: "1 TB – $3/month | 1 TB – $9/month (Premium Network)",
    order: "VM Control Panel > Upgrade Tab",
  },
  {
    upgrade: "Paid Backup Plan",
    price: "Depends on VM storage size",
    order: "VM Control Panel > Upgrade Tab",
  },
];
const Section1 = () => {
  return (
    <div className="pricingPage">
      <div className="section__1">
        <div className="container">
          <div className="wrap">
            <h1>Pricing</h1>
            <h4>High CPU Frequency at Low CPU Frequency Prices</h4>
            <p>
              Industry Leading Single Core CPU Performance. Virtual machines
              with 3.5 GHz+ CPU Frequency, bundled with low prices that no other
              companies can compete.
            </p>
            <p className="country">
              United States, United Kingdom, Canada, Germany, Poland, Amsterdam,
              Japan (Tokyo), Malaysia and Australia
            </p>
            <div className="overflow-x">
              <table>
                <thead>
                  <tr>
                    {theadTable.map((e, index) => (
                      <th key={index}>{e}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tbodyCountryTop.map((e, index) => (
                    <tr key={index}>
                      <td>{e.plan}</td>
                      <td>{e.cpu}</td>
                      <td>{e.ram}</td>
                      <td>{e.storage}</td>
                      <td>{e.monthly}</td>
                      <td>{e.backup}</td>
                      <td>{e.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <span>**Note: All regions are on 1 Gigabit port.</span>
            </div>
            <p className="country">
              Hong Kong, Japan (Osaka) and Malaysia (Premium)
            </p>
            <div className="overflow-x">
              <table>
                <thead>
                  <tr>
                    {theadTable.map((e, index) => (
                      <th key={index}>{e}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tbodyCountryBottom.map((e, index) => (
                    <tr key={index}>
                      <td>{e.plan}</td>
                      <td>{e.cpu}</td>
                      <td>{e.ram}</td>
                      <td>{e.storage}</td>
                      <td>{e.monthly}</td>
                      <td>{e.backup}</td>
                      <td>{e.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h2>Available Upgrades</h2>
            <div className="overflow-x">
              <table>
                <thead>
                  <tr>
                    {theadAvailable.map((e, index) => (
                      <th key={index}>{e}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tbodyAvailable.map((e, index) => (
                    <tr key={index}>
                      <td>{e.upgrade}</td>
                      <td>{e.price}</td>
                      <td>{e.order}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h2>Frequently Asked Questions</h2>
            <span>
              1. What payment method Evoxt currently accepts?
              <br />
              We currently accept Credit Cards/ Debit Cards, PayPal, Bitcoin,
              and USDt Tron.
              <br />
              2. What plan should I choose?
              <br />
              Go with the smallest plan if you are unsure what plan to choose.
              You can always scale up if needed.
              <br />
              3. Can I prepay for the VM?
              <br />
              Yes, Evoxt offers billing plans from a month to up to 3 years
              plans. You can also top up the funds into your Evoxt account
              credits, and the system will automatically apply the credits to
              any new invoices generated.
              <br />
              4. CPU Clock Speed vs Number of CPU Cores?
              <br />
              Read Article
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
