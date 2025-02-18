import { FaArrowRight, FaRegArrowAltCircleDown } from "react-icons/fa";
import "../../css/Status/Section3Status/style.scss";
const logs = [
  {
    date: "January 6, 2025",
    server: "Evoxt-US-CA-66",
    status: "down",
    duration: "2 minutes",
    outages: 1,
    details: "Updated on 12:08 GMT+08:00",
  },
  {
    date: "January 4, 2025",
    server: "Evoxt-MY-9",
    status: "down",
    duration: "7 minutes",
    outages: 2,
    details: "Updated on 19:37 GMT+08:00",
  },
  {
    date: "January 4, 2025",
    server: "Evoxt-MY-10",
    status: "down",
    duration: "7 minutes",
    outages: 2,
    details: "Updated on 19:37 GMT+08:00",
  },
  {
    date: "January 4, 2025",
    server: "Evoxt-MY-14",
    status: "down",
    duration: "7 minutes",
    outages: 2,
    details: "Updated on 19:37 GMT+08:00",
  },
  {
    date: "January 4, 2025",
    server: "Evoxt-MY-14",
    status: "down",
    duration: "8 minutes",
    outages: 2,
    details: "Updated on 19:37 GMT+08:00",
  },
  {
    date: "January 4, 2025",
    server: "Evoxt-MY-14",
    status: "down",
    duration: "2 minutes",
    outages: 2,
    details: "Updated on 19:37 GMT+08:00",
  },
  {
    date: "January 4, 2025",
    server: "Evoxt-MY-14",
    status: "down",
    duration: "4 minutes",
    outages: 2,
    details: "Updated on 19:37 GMT+08:00",
  },
  {
    date: "January 4, 2025",
    server: "Evoxt-MY-14",
    status: "down",
    duration: "7 minutes",
    outages: 2,
    details: "Updated on 19:37 GMT+08:00",
  },
  {
    date: "January 4, 2025",
    server: "Evoxt-MY-18",
    status: "down",
    duration: "3 minutes",
    outages: 2,
    details: "Updated on 19:37 GMT+08:00",
  },
  {
    date: "January 4, 2025",
    server: "Evoxt-MY-1",
    status: "down",
    duration: "5 minutes",
    outages: 2,
    details: "Updated on 19:37 GMT+08:00",
  },
];
const Section3 = () => {
  return (
    <div className="section3Status">
      <div className="container">
        <div className="header">
          <h2>
            Status updates
            <small>Last 7 days</small>
          </h2>
        </div>
        <div className="logs">
          {logs.map((log, index) => (
            <div key={index} className="log">
              <p className="date">{log.date}</p>
              <div className="log-content">
                <FaRegArrowAltCircleDown className="icon" />
                <div className="log-text">
                  <p className="log-server-status">
                    {log.server} was {log.status}
                    <span className="log-duration">
                      for {log.duration} in total
                    </span>
                  </p>
                  <p className="log-outages">
                    {log.outages > 1
                      ? `There were ${log.outages} outages during the day.`
                      : `There was ${log.outages} outage during this day.`}
                  </p>
                  <div className="log-details">
                    <a href="#">See details</a>
                    <FaArrowRight className="icon-right" />
                    <span className="space">|</span>
                    <p>{log.details}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <p className="status-update">Status update history</p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
