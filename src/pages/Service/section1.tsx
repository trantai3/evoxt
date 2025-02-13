import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import "../../css/ServicePage/Section1/style.scss";
const thead = ["Product/Service", "Pricing", "Next Due Date", "Status"];
const tbody = [
  {
    productOrService: (
      <p className="productOrService">
        <strong>VM-12 | United States - CA</strong>
        <br />
        <span>tai-kgvs-01.evoxt.com</span>
      </p>
    ),
    price: (
      <p className="price">
        <span>$60.95 USD</span>
        <br />
        <span>Monthly</span>
      </p>
    ),
    dueDate: <span className="dueDate">13/12/2024</span>,
    status: <span className="status">Cancelled</span>,
  },
  {
    productOrService: (
      <p className="productOrService">
        <strong>VM-12 | United States - CA</strong>
        <br />
        <span>tai-kgvs-02.evoxt.com</span>
      </p>
    ),
    price: (
      <p className="price">
        <span>$60.95 USD</span>
        <br />
        <span>Monthly</span>
      </p>
    ),
    dueDate: <span className="dueDate">13/12/2024</span>,
    status: <span className="status">Cancelled</span>,
  },
  {
    productOrService: (
      <p className="productOrService">
        <strong>VM-12 | United States - CA</strong>
        <br />
        <span>tai-kgvs-03.evoxt.com</span>
      </p>
    ),
    price: (
      <p className="price">
        <span>$60.95 USD</span>
        <br />
        <span>Monthly</span>
      </p>
    ),
    dueDate: <span className="dueDate">13/12/2024</span>,
    status: <span className="status">Cancelled</span>,
  },
  {
    productOrService: (
      <p className="productOrService">
        <strong>VM-12 | United States - CA</strong>
        <br />
        <span>tai-kgvs-04.evoxt.com</span>
      </p>
    ),
    price: (
      <p className="price">
        <span>$60.95 USD</span>
        <br />
        <span>Monthly</span>
      </p>
    ),
    dueDate: <span className="dueDate">13/12/2024</span>,
    status: <span className="status">Cancelled</span>,
  },
  {
    productOrService: (
      <p className="productOrService">
        <strong>VM-12 | United States - CA</strong>
        <br />
        <span>tai-kgvs-05.evoxt.com</span>
      </p>
    ),
    price: (
      <p className="price">
        <span>$60.95 USD</span>
        <br />
        <span>Monthly</span>
      </p>
    ),
    dueDate: <span className="dueDate">13/12/2024</span>,
    status: <span className="status">Cancelled</span>,
  },
  {
    productOrService: (
      <p className="productOrService">
        <strong>VM-12 | United States - CA</strong>
        <br />
        <span>tai-kgvs-06.evoxt.com</span>
      </p>
    ),
    price: (
      <p className="price">
        <span>$60.95 USD</span>
        <br />
        <span>Monthly</span>
      </p>
    ),
    dueDate: <span className="dueDate">13/12/2024</span>,
    status: <span className="status">Cancelled</span>,
  },
  {
    productOrService: (
      <p className="productOrService">
        <strong>VM-12 | United States - CA</strong>
        <br />
        <span>tai-kgvs-07.evoxt.com</span>
      </p>
    ),
    price: (
      <p className="price">
        <span>$60.95 USD</span>
        <br />
        <span>Monthly</span>
      </p>
    ),
    dueDate: <span className="dueDate">13/12/2024</span>,
    status: <span className="status">Cancelled</span>,
  },
  {
    productOrService: (
      <p className="productOrService">
        <strong>VM-12 | United States - CA</strong>
        <br />
        <span>tai-kgvs-08.evoxt.com</span>
      </p>
    ),
    price: (
      <p className="price">
        <span>$60.95 USD</span>
        <br />
        <span>Monthly</span>
      </p>
    ),
    dueDate: <span className="dueDate">13/12/2024</span>,
    status: <span className="status">Cancelled</span>,
  },
  {
    productOrService: (
      <p className="productOrService">
        <strong>VM-12 | United States - CA</strong>
        <br />
        <span>tai-kgvs-09.evoxt.com</span>
      </p>
    ),
    price: (
      <p className="price">
        <span>$60.95 USD</span>
        <br />
        <span>Monthly</span>
      </p>
    ),
    dueDate: <span className="dueDate">13/12/2024</span>,
    status: <span className="status">Cancelled</span>,
  },
  {
    productOrService: (
      <p className="productOrService">
        <strong>VM-12 | United States - CA</strong>
        <br />
        <span>tai-kgvs-10.evoxt.com</span>
      </p>
    ),
    price: (
      <p className="price">
        <span>$60.95 USD</span>
        <br />
        <span>Monthly</span>
      </p>
    ),
    dueDate: <span className="dueDate">13/12/2024</span>,
    status: <span className="status">Cancelled</span>,
  },
];
const Section1 = () => {
  return (
    <div className="servicePage">
      <div className="section__1">
        <div className="container">
          <h1>Services</h1>
          <div className="button">
            <button>
              <Link to="/deploy">Deploy a Virtual Machine</Link>
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
                    {tbody.map((e, index) => (
                      <tr key={index}>
                        <td>{e.productOrService}</td>
                        <td>{e.price}</td>
                        <td>{e.dueDate}</td>
                        <td>{e.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
