import "../../css/MainPage/Section10/style.scss";
import icon from "../../assets/icons/MainPage/Section10/icon.svg";
import { IoSearch } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";
const section10 = [
  "Why choose Evoxt?",
  "How to run Android Emulator on VPS",
  "How to use Evoxt's VNC",
  "Disable IPv6 on Windows Server",
  "How to increase Windows VPS size after VPS plan upgrade",
];
const Section10 = () => {
  return (
    <div className="mainPage">
      <div className="section__10">
        <div className="container">
          <div className="section__10-heading">Ready to take the plunge?</div>
          <div className="section__10-subheading">
            Feeling stuck or not sure where to begin? Dive into our
            easy-to-follow docs and guides!
          </div>
          <div className="search">
            <input placeholder="Search..." />
            <IoSearch className="icon" />
          </div>
          <div className="popular-searches">
            <div className="terminal">
              <div className="terminal-header">
                <div className="button button-red" />
                <div className="button button-yellow" />
                <div className="button button-green" />
              </div>
              <div className="terminal-content">
                <p className="command-line">
                  evoxt@localhost:~$Top 5 Popular Guides
                </p>
                <ul className="result-ul">
                  {section10.map((e, index) => (
                    <li key={index}>
                      <span>
                        <FaChevronRight />
                      </span>
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="go-to-categories">
            <div className="section-10-items-documentation-inner">
              <img src={icon} />
            </div>
            <p className="documentation-text">
              Ready to explore? Click here for a treasure trove of guides and
              docs!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section10;
