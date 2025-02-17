import { CiSearch } from "react-icons/ci";
import "../../css/EmailHistory/style.scss";
const thead = ["Date Sent", "Message Subject", ""];
const tbody = [
  {
    dateSent: "15/02/2025 (22:33)",
    message:
      "Important Notice: Overdue Invoice Payment Reminder for Invoice 605855",
  },
  {
    dateSent: "15/02/2025 (22:33)",
    message:
      "Important Notice: Overdue Invoice Payment Reminder for Invoice 605855",
  },
  {
    dateSent: "15/02/2025 (22:33)",
    message:
      "Important Notice: Overdue Invoice Payment Reminder for Invoice 605855",
  },
  {
    dateSent: "14/02/2025 (16:45)",
    message: "Invoice Generated | Due Date: 14/02/2025",
  },
  {
    dateSent: "14/02/2025 (16:45)",
    message: "Invoice Generated | Due Date: 14/02/2025",
  },
  {
    dateSent: "14/02/2025 (16:45)",
    message: "Invoice Generated | Due Date: 14/02/2025",
  },
  {
    dateSent: "21/01/2025 (16:54)",
    message: "Wishing You a Happy Chinese Snake New Year ",
  },
];
const EmailHistory = () => {
  return (
    <div className="emailHistoryPage">
      <div className="container">
        <h1>Email History</h1>
        <div className="overflow-x">
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
                  {tbody.map((e, index) => (
                    <tr key={index}>
                      <td>{e.dateSent}</td>
                      <td>{e.message}</td>
                      <td>
                        <button>View Message</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailHistory;
