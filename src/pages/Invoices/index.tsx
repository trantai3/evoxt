import "../../css/Invoices/style.scss";
import { ReactComponent as Icon } from "../../assets/icons/Invoices/icon.svg";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
const thead = ["Invoice #", "Invoice Date", "Due Date", "Total", "Status"];
const tbody = [
  {
    invoice: "546490",
    invoiceDate: "13/12/2024",
    dueDate: "13/12/2024",
    total: "$3047.50 USD",
    status: "Cancelled",
  },
  {
    invoice: "547378",
    invoiceDate: "14/12/2024",
    dueDate: "14/12/2024",
    total: "$121.90 USD",
    status: "Cancelled",
  },
  {
    invoice: "547379",
    invoiceDate: "14/12/2024",
    dueDate: "14/12/2024",
    total: "$609.50 USD",
    status: "Cancelled",
  },
  {
    invoice: "551581",
    invoiceDate: "18/12/2024",
    dueDate: "18/12/2024",
    total: "$10.00 USD",
    status: "Cancelled",
  },
  {
    invoice: "551601",
    invoiceDate: "18/12/2024",
    dueDate: "18/12/2024",
    total: "$3047.50 USD",
    status: "Cancelled",
  },
  {
    invoice: "546490",
    invoiceDate: "18/12/2024",
    dueDate: "18/12/2024",
    total: "$11.00 USD",
    status: "Cancelled",
  },
];
const Invoices = () => {
  return (
    <div className="invoicesPage">
      <div className="container">
        <h1>Invoices</h1>
        <div className="alert">
          <div>
            <Icon className="icon" />
          </div>
          <div className="alert-text">
            Need to pay for multiple invoices at once? Take advantage of Evoxt's
            credit system.
            <br />
            Top up to your Evoxt account and all your services will be
            automatically paid for on the next daily cron.
            <br />
            Need to make automatic payments?
            <Link to="">Click here for guide</Link>
          </div>
        </div>
        <div className="overflow-x">
          <div className="table">
            <label tabIndex={0}>
              <CiSearch className="searchIcon" />
              <input
                type="search"
                placeholder="Type something to start searching"
              />
            </label>
            <table>
              <thead>
                <tr>
                  {thead.map((e, index) => (
                    <th key={index}>{e}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tbody.map((e, index) => (
                  <tr key={index}>
                    <td>{e.invoice}</td>
                    <td>{e.invoiceDate}</td>
                    <td>{e.dueDate}</td>
                    <td>{e.total}</td>
                    <td>{e.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoices;
