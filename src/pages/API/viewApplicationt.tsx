import "../../css/API/viewApplication/style.scss";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
const tabsList = ["200", "400", "401"];
const ViewApplication = () => {
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
    <div className="viewapp">
      <div className="viewapp-left">
        <div id="side-9" className="viewapp-infor">
          <h2>View Operating System List</h2>
          <p>View applications that can be installed.</p>
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
      <div className="viewapp-right">
        <div className="viewapp-api">
          <div className="viewapp-api-method">
            <button onClick={() => toggleDropdownMethod("deployServer")}>
              <div className="link-method">
                <span className="post method">get</span>
                <span className="link">/viewappslist</span>
              </div>
              {dropdownsMethod.deployServer === true ? (
                <FaChevronUp className="icon" />
              ) : (
                <FaChevronDown className="icon" />
              )}
            </button>
            {dropdownsMethod.deployServer === true && (
              <div className="sub-button">
                <div className="link">https://api.evoxt.com/viewappslist</div>
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
                            "result":
                            <span className="green">"success"</span>
                          </div>
                        </li>
                        <li>
                          <div>
                            "oslist":
                            <span className="green">
                              [
                              <br /> "windows-server-2016-datacenter-latest",
                              <br />
                              "almalinux-8.3-x86_64",
                              <br /> "rocky-8.4-x86_64",
                              <br />
                              "centos-8-x86_64",
                              <br />
                              "centos-7.9-x86_64",
                              <br />
                              "debian-10-x86_64",
                              <br />
                              "debian-11-x86_64",
                              <br />
                              "fedora-32-x86_64",
                              <br />
                              "suse-15.1-x86_64",
                              <br />
                              "ubuntu-18.04-x86_64",
                              <br />
                              "ubuntu-19.04-x86_64",
                              <br />
                              "ubuntu-20.04-x86_64"
                              <br />]
                            </span>
                          </div>
                        </li>
                        <li>
                          <div>
                            "invoiceid":
                            <span className="blue">10189</span>
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

export default ViewApplication;
