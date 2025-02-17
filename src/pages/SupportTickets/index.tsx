import { Link } from "react-router-dom";
import "../../css/SupportTickets/style.scss";
import { CiSearch } from "react-icons/ci";
const thead = ["Department", "[Urgency] Subject", "Status", "Last Updated"];
const SupportTickets = () => {
  return (
    <div className="supportTicketsPage">
      <div className="container">
        <h1>Tickets</h1>
        <div className="button">
          <button>
            <Link to="/deploy/submitticket">Open a New Ticket</Link>
          </button>
        </div>
        <div className="overflowX">
          <div className="table">
            <div className="table-search">
              <label>
                <CiSearch className="iconSearch" />
                <input
                  type="search"
                  placeholder="Type something to start searching"
                />
              </label>
            </div>
            <div className="table-list">
              <table>
                <thead>
                  <tr>
                    {thead.map((e, index) => (
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
        </div>
      </div>
    </div>
  );
};

export default SupportTickets;
