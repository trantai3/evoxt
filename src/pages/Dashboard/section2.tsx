import { Link } from "react-router-dom";
import "../../css/Dashboard/Section2/style.scss";
import { useState } from "react";
const tabs = ["Virtual Machines", "Bare Metals", "Floating IPs", "Domains"];
const Section2 = () => {
  const [isTab, setTab] = useState("Virtual Machines");
  return (
    <div className="dashboardPage">
      <div className="section__2">
        <h1>Dashboard</h1>
        <div className="ticketinvoice">
          <div className="ticket">
            <div className="ticket-head">
              <h3>Recent Tickets</h3>
              <Link to="">View all tickets</Link>
            </div>
            <div className="ticket-box">You don't have any active tickets.</div>
          </div>
          <div className="invoices">
            <div className="invoices-head">
              <h3>Overdue/ Unpaid Invoices</h3>
              <Link to="">View all invoices</Link>
            </div>
            <div className="invoices-box">
              You don't have any unpaid invoices.
            </div>
          </div>
        </div>
        <div className="overflow-x">
          <div className="tabs">
            {tabs.map((e, index) => (
              <button
                onClick={() => setTab(e)}
                className={`tab ${e === isTab ? "tab-active" : ""}`}
                key={index}
              >
                {e}
              </button>
            ))}
          </div>
        </div>
        <div className="overflow-x">
          {isTab === "Virtual Machines" && (
            <div className="vms">
              <div className="vmw-wrap">
                <p className="vmw-title">No Virtual Machines Available</p>
                <p className="vmw-subtitle">
                  You currently don't have any virtual machines with Evoxt.
                </p>
                <Link className="vmw-deploy" to="/deploy">
                  Deploy a Virtual Machine
                </Link>
              </div>
            </div>
          )}
        </div>
        <div className="overflow-x">
          {isTab === "Bare Metals" && (
            <div className="vms">
              <div className="vmw-wrap">
                <p className="vmw-title">No Bare Metal Servers Available</p>
                <p className="vmw-subtitle">
                  You currently don't have any Bare Metal servers with Evoxt.
                </p>
                <Link className="vmw-deploy" to="/deploy">
                  Deploy a Bare Metal Server
                </Link>
              </div>
            </div>
          )}
        </div>
        <div className="overflow-x">
          {isTab === "Floating IPs" && (
            <div className="vms">
              <div className="vmw-wrap">
                <p className="vmw-title">No Floating IPs Available</p>
                <p className="vmw-subtitle">
                  You currently don't have any Floating IPs with Evoxt.
                </p>
                <Link className="vmw-deploy" to="/deploy">
                  Deploy a Floating IP
                </Link>
              </div>
            </div>
          )}
        </div>
        <div className="overflow-x">
          {isTab === "Domains" && (
            <div className="vms">
              <div className="vmw-wrap">
                <p className="vmw-title">No Domains Available</p>
                <p className="vmw-subtitle">
                  You currently don't have any domains with Evoxt.
                </p>
                <Link className="vmw-deploy" to="/deploy">
                  Register a Domain
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Section2;
