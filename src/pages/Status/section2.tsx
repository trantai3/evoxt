import { FaArrowRight, FaRegCalendar } from "react-icons/fa";
import "../../css/Status/Section2Status/style.scss";
const servers = [
  {
    name: "API Server",
    uptime: "100.00%",
    status: "Operational",
    bars: 92,
    issueIndex: null,
  },
  {
    name: "API Server 2",
    uptime: "99.961%",
    status: "Operational",
    bars: 92,
    issueIndex: 80,
  },
  {
    name: "Evot-UK-29",
    uptime: "100.00%",
    status: "Operational",
    bars: 92,
    issueIndex: null,
  },
  {
    name: "Evoxt Console",
    uptime: "100.00%",
    status: "Operational",
    bars: 92,
    issueIndex: null,
  },
  {
    name: "Evoxt-CA-MTL-1",
    uptime: "100.00%",
    status: "Operational",
    bars: 92,
    issueIndex: null,
  },
  {
    name: "Evoxt-DE-1",
    uptime: "100.00%",
    status: "Operational",
    bars: 92,
    issueIndex: null,
  },
  {
    name: "Evoxt-DE-10",
    uptime: "100.00%",
    status: "Operational",
    bars: 92,
    issueIndex: null,
  },
  {
    name: "Evoxt-DE-1",
    uptime: "100.00%",
    status: "Operational",
    bars: 92,
    issueIndex: null,
  },
  {
    name: "Evoxt-DE-11",
    uptime: "100.00%",
    status: "Operational",
    bars: 92,
    issueIndex: null,
  },
  {
    name: "Evoxt-DE-2",
    uptime: "100.00%",
    status: "Operational",
    bars: 92,
    issueIndex: null,
  },
];
const Section2 = () => {
  return (
    <div className="section2Status">
      <div className="container">
        <div className="header">
          <h2>
            Uptime <small>Last 90 days</small>
          </h2>
          <div className="calendar">
            <FaRegCalendar className="icon" />
            <span>Calendar view</span>
          </div>
        </div>
        <div className="card">
          {servers.map((server, index) => (
            <div key={index} className="api">
              <div className="api-title">
                <div className="api-title-left">
                  <span className="name">{server.name}</span>
                  <FaArrowRight className="icon" />
                  <span className="space">|</span>
                  <span className="time">{server.uptime}</span>
                </div>
                <div className="api-title-right">
                  <span className="status-icon" />
                  <span className="status-title">{server.status}</span>
                </div>
              </div>
              <div className="bars">
                {Array.from({ length: server.bars }).map((_, i) => (
                  <div
                    key={i}
                    className={`bar ${
                      i === server.issueIndex ? "bar-orange" : "bar-green"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section2;
