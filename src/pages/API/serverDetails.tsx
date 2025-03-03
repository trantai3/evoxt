import "../../css/API/serverDetail/style.scss";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
const tabsList = ["200", "400", "401"];
const ServerDetails = () => {
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
    <div className="serverdetails">
      <div className="serverdetails-left">
        <div id="side-13" className="serverdetails-infor">
          <h2>Get a Server Details</h2>
          <p>Get a specific server's information.</p>
          <h5>query Parameters</h5>
          <table>
            <tbody>
              <tr>
                <td className="td-first td-left">
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
              <tr>
                <td className="td-left">
                  <span className="icon"></span>
                  <span className="td-name">serviceid</span>
                  <div className="td-required">required</div>
                </td>
                <td className="td-right">
                  <div className="td-right-string">int</div>
                  <div className="td-right-title">
                    Service ID of the server (Required if Server IP is not
                    provided)
                  </div>
                </td>
              </tr>
              <tr>
                <td className="td-left">
                  <span className="icon"></span>
                  <span className="td-name">serviceid</span>
                </td>
                <td className="td-right">
                  <div className="td-right-string">string</div>
                  <div className="td-right-title">
                    Primary IP address of the server (Required if Service ID is
                    not provided)
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
      <div className="serverdetails-right">
        <div className="serverdetails-api">
          <div className="serverdetails-api-method">
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
                            "id": <span className="blue">3879</span>,
                            <br /> "hostname":
                            <span className="green">"BackupTEST1"</span>,
                            <br /> "name":
                            <span className="green">
                              "VM-0.5 | United States"
                            </span>
                            <br /> "label":
                            <span className="green">"BackupTEST1"</span>,
                            <br /> "username":
                            <span className="green">"root"</span>,
                            <br /> "password":
                            <span className="green">"xxxxxxxxx"</span>,
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

export default ServerDetails;
