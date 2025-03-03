import "../../css/API/viewPlanList/style.scss";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
const tabsList = ["200", "400", "401"];
const ViewPlanList = () => {
  const [dropdownsMethod, setDropdownsMethod] = useState({
    deployServer: false,
  });
  const toggleDropdownMethod = (menu: "deployServer") => {
    setDropdownsMethod((pre) => ({
      ...pre,
      [menu]: !pre[menu],
    }));
  };
  const [isTab, setTab] = useState("200");
  return (
    <div className="viewplanlist">
      <div className="viewplanlist-left">
        <div id="side-12" className="viewplanlist-infor">
          <h2>List all servers</h2>
          <p>
            List all servers that are currently in <strong>Active</strong> and
            <strong> Suspended </strong> state in your Evoxt account
          </p>
          <h5>query Parameters</h5>
          <table>
            <tbody>
              <tr>
                <td className="td-left">
                  <span className="icon"></span>
                  <span className="td-name">username</span>
                  <div className="td-required">required</div>
                </td>
                <td className="td-right">
                  <div className="td-right-string">string</div>
                  <div className="td-right-title">
                    Your username for authentication
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <h3 className="response">Responses</h3>
          <div className="success-responses">
            <strong>200</strong>
            <span>Success</span>
          </div>
          <div className="invalid-response">
            <strong>400</strong>
            <span>Invalid</span>
          </div>
          <div className="unauthorized-response">
            <strong>401</strong>
            <span>Unauthorized</span>
          </div>
        </div>
      </div>
      <div className="viewplanlist-right">
        <div className="viewplanlist-api">
          <div className="viewplanlist-api-method">
            <button onClick={() => toggleDropdownMethod("deployServer")}>
              <div className="link-method">
                <span className="post method">get</span>
                <span className="link">/listservers</span>
              </div>
              {dropdownsMethod.deployServer === true ? (
                <FaChevronUp className="icon" />
              ) : (
                <FaChevronDown className="icon" />
              )}
            </button>
            {dropdownsMethod.deployServer === true && (
              <div className="sub-button">
                <div className="link">https://api.evoxt.com/listservers</div>
              </div>
            )}
            <h3>Response samples</h3>
            <div className="tabsList">
              {tabsList.map((e, index) => (
                <div
                  onClick={() => setTab(e)}
                  tabIndex={0}
                  key={index}
                  className={`tab tab-${e} ${e === isTab ? "tab-active" : ""}`}
                >
                  {e}
                </div>
              ))}
            </div>
            <div className="overflow-x">
              <div className="return-api">
                <div className="return-api-top">
                  <span>Content type</span>
                  <div className="app-json">application/json</div>
                </div>
                <div className="return-api-bottom">
                  {isTab === "200" && (
                    <code>
                      <span>{"{"}</span>
                      <ul>
                        <li>
                          <div>
                            - "2912":
                            <span>{"{"}</span> <br />
                            "id": <span className="blue">2912</span>,
                            <br /> "regdate":
                            <span className="green">"2021-04-01"</span>, <br />
                            "name"
                            <span className="green">
                              "VM-1 | United Kingdom",
                            </span>
                            <br />
                            "label"
                            <span className="green">"Nginx",</span>
                            <br />
                            <span>{"},"}</span>
                          </div>
                        </li>
                        <li>
                          <div>
                            - "2915":
                            <span>{"{"}</span> <br />
                            "id": <span className="blue">2915</span>,
                            <br /> "regdate":
                            <span className="green">"2021-04-01"</span>, <br />
                            "name"
                            <span className="green">
                              "VM-1 | United Kingdom",
                            </span>
                            <br />
                            "label"
                            <span className="green">"Nginx",</span>
                            <br />
                            <span>{"}"}</span>
                          </div>
                        </li>
                      </ul>
                      <span>{"}"}</span>
                    </code>
                  )}
                  {isTab === "400" && (
                    <code>
                      <span>{"{"}</span>
                      <ul>
                        <li>
                          <div>
                            "error":
                            <span className="green">"Missing Parameters"</span>
                          </div>
                        </li>
                      </ul>
                      <span>{"}"}</span>
                    </code>
                  )}
                  {isTab === "401" && (
                    <code>
                      <span>{"{"}</span>
                      <ul>
                        <li>
                          <div>
                            "error":
                            <span className="green">"Unauthorized"</span>
                          </div>
                        </li>
                      </ul>
                      <span>{"}"}</span>
                    </code>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPlanList;
