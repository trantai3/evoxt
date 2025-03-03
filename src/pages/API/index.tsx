import "../../css/API/style.scss";
import { ReactComponent as ImgSideNav } from "../../assets/images/API/imgSideNav.svg";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

import { useEffect, useState } from "react";
import { sectionSidebar } from "@/components/Recoil/atom/api";
import imgAuthen from "../../assets/images/API/imgAuthen.png";
import imgGenerateKey from "../../assets/images/API/imgGenerate-api-key.png";
import imgPostman from "../../assets/images/API/imgPostman.png";
import imgInsomia from "../../assets/images/API/imgInsomia.png";
import ViewApplication from "./viewApplicationt";
import ViewPlanList from "./viewPlanList";
import ServerDetails from "./serverDetails";
import ServerStatus from "./serverStatus";
import ServerFirewall from "./serverFirewall";
import EnableFirewall from "./enableFirewall";
import AddFirewallRule from "./addFirewallRule";
import DeleteFirewallRule from "./deleteFirewallRule";
import DisableFirewall from "./disableFirewall";
import ServerBackup from "./getServerBackup";
import RestoreBackup from "./restoreBackup";
import ServerPowerControl from "./serverPowerControl";
import ChangeServerLabel from "./changeServerLabel";
import ChangeServerPassword from "./changeServerPassword";
import ChangeServerHostname from "./changeServerHostname";
import ReinstallServer from "./reinstallServer";
import UpgradeServer from "./upgradeServer";
import GetServerInvoices from "./getServerInvoices";
import GetInvoices from "./getInvoices";
import GetInvoicesDetail from "./getInvoicesDetail";
import PayInvoice from "./payInvoice";
import RenewService from "./renewService";
import GetAccountCredits from "./getAccountCredits";
import SubmitCancellationRequest from "./submitCancellationRequest";
import WithdrawCancellationRequest from "./withdrawCancellationRequest";
import OpenTicket from "./openTicket";
import AddTicketReply from "./addTicketReply";
import GetATicket from "./getATicket";
import GetTickets from "./getTickets";
import RateTime from "./rateLimit";
import { useRecoilState } from "recoil";
const tabsList = ["200", "400", "401"];
const sidebar = [
  { title: "Introduction", id: "side-1" },
  { title: "gettingStarted", id: "side-2" },
  { title: "Sign up for an account", id: "side-3" },
  { title: "Authentication", id: "side-4" },
  { title: "Tools", id: "side-5" },
  { title: "deploy", id: "side-6" },
  { title: "Deploy a server", id: "side-7" },
  { title: "View Application List", id: "side-8" },
  { title: "View Operating System List", id: "side-9" },
  { title: "View Plan List", id: "side-10" },
  { title: "servers", id: "side-11" },
  { title: "List all servers", id: "side-12" },
  { title: "Get a Server Details", id: "side-13" },
  { title: "Get a Server Status", id: "side-14" },
  { title: "Get a Server VNC information", id: "side-15" },
  { title: "Get a Server Firewall information", id: "side-16" },
  { title: "Enable firewall", id: "side-17" },
  { title: "Add firewall rules", id: "side-18" },
  { title: "Delete firewall rules", id: "side-19" },
  { title: "Disable firewall", id: "side-20" },
  { title: "Get a Server Backup", id: "side-21" },
  { title: "Restore Server Backup", id: "side-22" },
  { title: "Server Power Control", id: "side-23" },
  { title: "Change Server Label", id: "side-24" },
  { title: "Change Server Password", id: "side-25" },
  { title: "Change Server Hostname", id: "side-26" },
  { title: "Reinstall Server", id: "side-27" },
  { title: "Upgrade Server", id: "side-28" },
  { title: "billing", id: "side-29" },
  { title: "Get Server Invoices", id: "side-30" },
  { title: "Get Invoices", id: "side-31" },
  { title: "Get an Invoice Details", id: "side-32" },
  { title: "Pay Invoice", id: "side-33" },
  { title: "Renew Service", id: "side-34" },
  { title: "Get Account Credits", id: "side-35" },
  { title: "Submit Cancellation Request", id: "side-36" },
  { title: "Withdraw Cancellation Request", id: "side-37" },
  { title: "support", id: "side-38" },
  { title: "Open Ticket", id: "side-39" },
  { title: "Add Ticket Reply", id: "side-40" },
  { title: "Get a Ticket", id: "side-41" },
  { title: "Get Tickets", id: "side-42" },
  { title: "Rate Limit", id: "side-43" },
];
const API = () => {
  const [dropdowns, setDropdowns] = useState({
    gettingStarted: false,
    deploy: false,
    servers: false,
    billing: false,
    support: false,
  });
  const toggleDropdown = (
    menu: "gettingStarted" | "deploy" | "servers" | "billing" | "support",
  ) => {
    setDropdowns((pre) => ({
      ...pre,
      [menu]: !pre[menu],
    }));
  };
  const [dropdownsMethod, setDropdownsMethod] = useState({
    deployServer: false,
  });
  const toggleDropdownMethod = (menu: "deployServer") => {
    setDropdownsMethod((pre) => ({
      ...pre,
      [menu]: !pre[menu],
    }));
  };
  const [isSection, setSection] = useRecoilState(sectionSidebar);
  useEffect(() => {
    const handleScroll = () => {
      let scrollPosition = window.scrollY;
      sidebar.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition + 100) {
          setSection(section.title);

          setDropdowns((pre) => {
            if (!pre[section.title as keyof typeof dropdowns]) {
              return {
                ...pre,
                [section.title]: true,
              };
            }
            return pre;
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isTab, setTab] = useState("200");
  return (
    <div className="api">
      <div className="sidenav">
        <Link to="/">
          <ImgSideNav className="imgSideNav" />
        </Link>
        <div className="search">
          <CiSearch className="search-icon" />
          <input type="text" placeholder="Search..." />
        </div>
        <a
          onClick={() => setSection("Introduction")}
          href="#side-1"
          className={`section ${isSection === "Introduction" ? "section-active" : ""}`}
        >
          <p>Introduction</p>
        </a>
        <a
          onClick={() => {
            toggleDropdown("gettingStarted");
            setSection("gettingStarted");
          }}
          href="#side-2"
          className={`section ${isSection === "gettingStarted" ? "section-active" : ""}`}
        >
          <p>
            Getting Started
            {dropdowns.gettingStarted === true ? (
              <FaChevronDown />
            ) : (
              <FaChevronRight />
            )}
          </p>
        </a>
        {dropdowns.gettingStarted === true && (
          <div className="dropdown">
            <a
              href="#side-3"
              onClick={() => setSection("Sign up for an account")}
              className={`${isSection === "Sign up for an account" ? "section-active" : ""}`}
            >
              Sign up for an account
            </a>
            <a
              href="#side-4"
              onClick={() => setSection("Authentication")}
              className={`${isSection === "Authentication" ? "section-active" : ""}`}
            >
              Authentication
            </a>
            <a
              href="#side-5"
              onClick={() => setSection("Tools")}
              className={`${isSection === "Tools" ? "section-active" : ""}`}
            >
              Tools
            </a>
          </div>
        )}
        <a
          href="#side-6"
          onClick={() => {
            toggleDropdown("deploy");
            setSection("deploy");
          }}
          className={`section ${isSection === "deploy" ? "section-active" : ""}`}
        >
          <p>
            Deploy
            {dropdowns.deploy === true ? <FaChevronDown /> : <FaChevronRight />}
          </p>
        </a>
        {dropdowns.deploy === true && (
          <div className="dropdown">
            <a
              href="#side-7"
              onClick={() => {
                setSection("Deploy a server");
              }}
              className={`${isSection === "Deploy a server" ? "section-active" : ""}`}
            >
              <span className="post">post</span>
              Deploy a server
            </a>
            <a
              href="#side-8"
              onClick={() => {
                setSection("View Application List");
              }}
              className={`${isSection === "View Application List" ? "section-active" : ""}`}
            >
              <span className="get">get</span>
              View Application List
            </a>
            <a
              href="#side-9"
              onClick={() => {
                setSection("View Operating System List");
              }}
              className={`${isSection === "View Operating System List" ? "section-active" : ""}`}
            >
              <span className="get">get</span>
              View Application List
            </a>
            <a
              href="#side-10"
              onClick={() => {
                setSection("View Plan List");
              }}
              className={`${isSection === "View Plan List" ? "section-active" : ""}`}
            >
              <span className="get">get</span>
              View Plan List
            </a>
          </div>
        )}
        <a
          href="#side-11"
          onClick={() => {
            toggleDropdown("servers");
            setSection("servers");
          }}
          className={`section ${isSection === "servers" ? "section-active" : ""}`}
        >
          <p>
            Servers
            {dropdowns.servers === true ? (
              <FaChevronDown />
            ) : (
              <FaChevronRight />
            )}
          </p>
        </a>
        {dropdowns.servers === true && (
          <div className="dropdown">
            <a
              href="#side-12"
              onClick={() => {
                setSection("List all servers");
              }}
              className={`${isSection === "List all servers" ? "section-active" : ""}`}
            >
              <span className="get">get</span>
              List all servers
            </a>
            <a
              href="#side-13"
              onClick={() => {
                setSection("Get a Server Details");
              }}
              className={`${isSection === "Get a Server Details" ? "section-active" : ""}`}
            >
              <span className="get">get</span>
              Get a Server Details
            </a>
            <a
              href="#side-14"
              onClick={() => {
                setSection("Get a Server VNC information");
              }}
              className={`${isSection === "Get a Server VNC information" ? "section-active" : ""}`}
            >
              <span className="get">get</span>
              Get a Server Status
            </a>
            <a
              href="#side-15"
              onClick={() => {
                setSection("Get a Server Status");
              }}
              className={`${isSection === "Get a Server Status" ? "section-active" : ""}`}
            >
              <span className="get">get</span>
              Get a Server VNC information
            </a>
            <a
              href="#side-16"
              onClick={() => {
                setSection("Get a Server Firewall information");
              }}
              className={`${isSection === "Get a Server Firewall information" ? "section-active" : ""}`}
            >
              <span className="get">get</span>
              Get a Server Firewall information
            </a>
            <a
              href="#side-17"
              onClick={() => {
                setSection("Enable firewall");
              }}
              className={`${isSection === "Enable firewall" ? "section-active" : ""}`}
            >
              <span className="post">post</span>
              Enable firewall
            </a>
            <a
              href="#side-18"
              onClick={() => {
                setSection("Add firewall rules");
              }}
              className={`${isSection === "Add firewall rules" ? "section-active" : ""}`}
            >
              <span className="post">post</span>
              Add firewall rules
            </a>
            <a
              href="#side-19"
              onClick={() => {
                setSection("Delete firewall rules");
              }}
              className={`${isSection === "Delete firewall rules" ? "section-active" : ""}`}
            >
              <span className="post">post</span>
              Disable firewall
            </a>
            <a
              href="#side-20"
              onClick={() => {
                setSection("Disable firewall");
              }}
              className={`${isSection === "Disable firewall" ? "section-active" : ""}`}
            >
              <span className="post">post</span>
              Get a Server Backup
            </a>
            <a
              href="#side-21"
              onClick={() => {
                setSection("Restore Server Backup");
              }}
              className={`${isSection === "Restore Server Backup" ? "section-active" : ""}`}
            >
              <span className="get">get</span>
              Restore Server Backup
            </a>
            <a
              href="#side-22"
              onClick={() => {
                setSection("Server Power Control");
              }}
              className={`${isSection === "Server Power Control" ? "section-active" : ""}`}
            >
              <span className="post">post</span>
              Server Power Control
            </a>
            <a
              href="#side-23"
              onClick={() => {
                setSection("Change Server Label");
              }}
              className={`${isSection === "Change Server Label" ? "section-active" : ""}`}
            >
              <span className="post">post</span>
              Change Server Label
            </a>
            <a
              href="#side-24"
              onClick={() => {
                setSection("Change Server Password");
              }}
              className={`${isSection === "Change Server Password" ? "section-active" : ""}`}
            >
              <span className="post">post</span>
              Change Server Password
            </a>
            <a
              href="#side-25"
              onClick={() => {
                setSection("Change Server Hostname");
              }}
              className={`${isSection === "Change Server Hostname" ? "section-active" : ""}`}
            >
              <span className="post">post</span>
              Change Server Hostname
            </a>
            <a
              href="#side-26"
              onClick={() => {
                setSection("Reinstall Server");
              }}
              className={`${isSection === "Reinstall Server" ? "section-active" : ""}`}
            >
              <span className="post">post</span>
              Reinstall Server
            </a>
            <a
              href="#side-27"
              onClick={() => {
                setSection("Upgrade Server");
              }}
              className={`${isSection === "Upgrade Server" ? "section-active" : ""}`}
            >
              <span className="post">post</span>
              Upgrade Server
            </a>
          </div>
        )}
        <a
          href="#side-29"
          onClick={() => {
            toggleDropdown("billing");
            setSection("billing");
          }}
          className={`section ${isSection === "billing" ? "section-active" : ""}`}
        >
          <p>
            Billing
            {dropdowns.billing === true ? (
              <FaChevronDown />
            ) : (
              <FaChevronRight />
            )}
          </p>
        </a>
        {dropdowns.billing === true && (
          <div className="dropdown">
            <a
              href="#side-30"
              onClick={() => {
                setSection("Get Server Invoices");
              }}
              className={`section ${isSection === "Get Server Invoices" ? "section-active" : ""}`}
            >
              <span className="get">get</span>
              Get Server Invoices
            </a>
            <a
              href="#side-31"
              onClick={() => {
                setSection("Get Invoices");
              }}
              className={`section ${isSection === "Get Invoices" ? "section-active" : ""}`}
            >
              <span className="get">get</span>
              Get Invoices
            </a>
            <a
              href="#side-32"
              onClick={() => {
                setSection("Get an Invoice Details");
              }}
              className={`section ${isSection === "Get an Invoice Details" ? "section-active" : ""}`}
            >
              <span className="get">get</span>
              Get an Invoice Details
            </a>
            <a
              href="#side-33"
              onClick={() => {
                setSection("Pay Invoice");
              }}
              className={`section ${isSection === "Pay Invoice" ? "section-active" : ""}`}
            >
              <span className="post">post</span>
              Pay Invoice
            </a>
            <a
              href="#side-34"
              onClick={() => {
                setSection("Renew Service");
              }}
              className={`section ${isSection === "Renew Service" ? "section-active" : ""}`}
            >
              <span className="post">post</span>
              Renew Service
            </a>
            <a
              href="#side-35"
              onClick={() => {
                setSection("Get Account Credits");
              }}
              className={`section ${isSection === "Get Account Credits" ? "section-active" : ""}`}
            >
              <span className="get">get</span>
              Get Account Credits
            </a>
            <a
              href="#side-36"
              onClick={() => {
                setSection("Submit Cancellation Request");
              }}
              className={`section ${isSection === "Submit Cancellation Request" ? "section-active" : ""}`}
            >
              <span className="post">post</span>
              Submit Cancellation Request
            </a>
            <a
              href="#side-37"
              onClick={() => {
                setSection("Withdraw Cancellation Request");
              }}
              className={`section ${isSection === "Withdraw Cancellation Request" ? "section-active" : ""}`}
            >
              <span className="post">post</span>
              Withdraw Cancellation Request
            </a>
          </div>
        )}
        <a
          onClick={() => {
            toggleDropdown("support");
            setSection("support");
          }}
          href="side-38"
          className={`section ${isSection === "support" ? "section-active" : ""}`}
        >
          <p>
            Support
            {dropdowns.support === true ? (
              <FaChevronDown />
            ) : (
              <FaChevronRight />
            )}
          </p>
        </a>
        {dropdowns.support === true && (
          <div className="dropdown">
            <a
              onClick={() => {
                setSection("Open Ticket");
              }}
              href="side-39"
              className={`section ${isSection === "Open Ticket" ? "section-active" : ""}`}
            >
              <span className="post">post</span>
              Open Ticket
            </a>
            <a
              onClick={() => {
                setSection("Add Ticket Reply");
              }}
              href="side-40"
              className={`section ${isSection === "Add Ticket Reply" ? "section-active" : ""}`}
            >
              <span className="post">post</span>
              Add Ticket Reply
            </a>
            <a
              onClick={() => {
                setSection("Get a Ticket");
              }}
              href="side-41"
              className={`section ${isSection === "Get a Ticket" ? "section-active" : ""}`}
            >
              <span className="get">get</span>
              Get a Ticket
            </a>
            <a
              onClick={() => {
                setSection("Get Tickets");
              }}
              href="side-42"
              className={`section ${isSection === "Get Tickets" ? "section-active" : ""}`}
            >
              <span className="get">get</span>
              Get Tickets
            </a>
          </div>
        )}
        <div className="section">
          <a
            onClick={() => {
              setSection("Rate Limit");
            }}
            href="side-43"
            className={`section ${isSection === "Rate Limit" ? "section-active" : ""}`}
          >
            Rate Limit
          </a>
        </div>
      </div>
      <div className="api-main">
        <div className="intro-getting">
          <div className="intro-getting-left">
            <div className="evoxt">
              <h1>Evoxt API (1.0)</h1>
              <p className="download">
                Download OpenAPI specification:
                <span>Download</span>
              </p>
              <p className="email">
                E-mail:{" "}
                <a className="emailLink" href="mailto:support@evoxt.com">
                  support@evoxt.com{" "}
                </a>
                |{" "}
                <Link className="term" to="/terms-of-service">
                  Terms of Service
                </Link>
              </p>
            </div>
            <div id="side-1" className="introduction">
              <h2>Introduction</h2>
              <p>
                Welcome to Evoxt API Documentation. Evoxt provides you with a
                suite of APIs to allow you to seemlessly control your servers
                with Evoxt. This webpage provides you with comprehensive
                documentation for all our API. Do not hestitate to contact us if
                there are any questions.
              </p>
            </div>
            <div id="side-2" className="gettingstart">
              <h2>Getting Started</h2>
              <p>
                Start working with Evoxt API. We have a comprehensive API
                documentation waiting for you to experiment and work with!
              </p>
            </div>
            <div id="side-3" className="sign-up">
              <h2>Sign up for an account</h2>
              <p>
                To work with Evoxt API. You will first need to sign up for an
                account. You can sign up for an Evoxt account here [Sign up
                ](https: //console.evoxt.com/register.php).
              </p>
            </div>
            <div id="side-4" className="authentication">
              <h2>Authentication</h2>
              <p>
                Get your API credentials on
                https://console.evoxt.com/apicredentials.php
              </p>
              <div className="generateKey">
                <img src={imgGenerateKey} />
              </div>
              <p>Generate an API Key</p>
              <img src={imgAuthen} />
              <p>
                You will need to copy the Public Key and Private Key for HTTP
                basic authentication.
              </p>
              <p>
                Simply encode API public key and private key and build
                Authorization{" "}
                <code>
                  $auth_token = base64_encode($publickey. ':' . $privatekey);.
                </code>
              </p>
              <p>
                Your header will look something like this{" "}
                <code>
                  Authorization: Basic
                  cnlTM2pqa0ZGRUo4Mng0WFZ4MG5JTVl1SFV0clpMVlJ5b1FMZ3RpamlwaW06dk5oY2NOVHRhQzUwbVUwVWJLYlM5UW9YUEtQak56NWRhSnpCOHNORmZZQXdFQXVFRjd4b3B5MkU5bHh2RkdYQg==.
                </code>
              </p>
              <p>
                This will be required as an authentication method for all Evoxt
                API. You also need to pass <code>username</code> in the
                parameter and set the IP address on the API credentials page.
              </p>
            </div>
            <div id="side-5" className="tools">
              <h2>Tools</h2>
              <p>
                These are the two tools that we recommend for developers to work
                with our API. They both have a very friendly GUI tools to test
                our API.
                <br />
                [Postman ](https: //
                <a href="http://www.postman.com/">www.postman.com/</a>)
                <img className="imgPost" src={imgPostman} />
                <p className="insomia">
                  <a href="https://insomnia.rest/">Insomnia</a>
                </p>
                <img className="imgInsomia" src={imgInsomia} />
              </p>
            </div>
            <div id="side-6" className="deploy">
              <h2>Deploy</h2>
              <p>This is the request library for deployment.</p>
            </div>
          </div>
          <div className="intro-getting-right" />
        </div>
        <div className="deploy-server">
          <div className="deploy-server-left">
            <div className="deploy-server-infor">
              <h2 id="side-7">Deploy a server</h2>
              <p>
                Deploy a server using your Evoxt account credit. Invoice number
                will be returned on success request. To complete the deployment,
                you will have to pay the returned invoice id using
                <a href="#payinvoice"> Pay Invoice</a>
              </p>
              <h5>
                Request Body schema:
                <span>application/x-www-form-urlencoded</span>
              </h5>
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
                      <span className="td-name">username</span>
                      <div className="td-required">required</div>
                    </td>
                    <td className="td-right">
                      <div className="td-right-string">string</div>
                      <div className="td-right-title">
                        Choose a server region. Regions currently available are
                        <strong>
                          {" "}
                          us-ca, us-ny, uk, de, hk, my, jp-osa and jp-tyo
                        </strong>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="td-left">
                      <span className="icon"></span>
                      <span className="td-name">application</span>
                      <div className="td-required">required</div>
                    </td>
                    <td className="td-right">
                      <div className="td-right-string">string</div>
                      <div className="td-right-title">
                        Get application list on View Application List. Required
                        if operating system parameter is empty.
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="td-left">
                      <span className="icon"></span>
                      <span className="td-name">plan</span>
                      <div className="td-required">required</div>
                    </td>
                    <td className="td-right">
                      <div className="td-right-string">string</div>
                      <div className="td-right-title">
                        Get plan list on View Plan List.
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="td-left">
                      <span className="icon"></span>
                      <span className="td-name">hostname</span>
                    </td>
                    <td className="td-right">
                      <div className="td-right-string">string</div>
                      <div className="td-right-title">
                        Format xxxx.xxx (Example: evoxt.com). Default :
                        evoxt.com. If the ( dot ) part is not included, we will
                        add .evoxt to the end of the submitted hostname.
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="td-left">
                      <span className="icon"></span>
                      <span className="td-name">quantity</span>
                    </td>
                    <td className="td-right">
                      <div className="td-right-string">integer</div>
                      <div className="td-right-title">
                        Default : 1. State if more than 1 server is needed.
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="td-left">
                      <span className="icon"></span>
                      <span className="td-name">billingcycle</span>
                    </td>
                    <td className="td-right">
                      <div className="td-right-string">string</div>
                      <div className="td-right-title">
                        Choose a billing cycle. Default: Monthly. Options
                        available : 'monthly' , 'quarterly' , 'semiannually' ,
                        'annually'
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="td-left">
                      <span className="icon"></span>
                      <span className="td-name">promocode</span>
                    </td>
                    <td className="td-right">
                      <div className="td-right-string">string</div>
                      <div className="td-right-title">Use a promocode</div>
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
          <div className="deploy-server-right">
            <div className="deploy-api">
              <div className="deploy-api-method">
                <button onClick={() => toggleDropdownMethod("deployServer")}>
                  <div className="link-method">
                    <span className="post method">post</span>
                    <span className="link">/deploy</span>
                  </div>
                  {dropdownsMethod.deployServer === true ? (
                    <FaChevronUp className="icon" />
                  ) : (
                    <FaChevronDown className="icon" />
                  )}
                </button>
                {dropdownsMethod.deployServer === true && (
                  <div className="sub-button">
                    <div className="link">https://api.evoxt.com/deploy</div>
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
                                "serviceids":
                                <span className="green">
                                  "4718,4719,4720,4721,4722,4723,4724,4725,4726,4727,4728,4729,4730,4731,4732,4733,4734,4735,4736,4737,4738,4739,4740,4741,4742",
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
                                <span className="green">
                                  "Missing Parameters"
                                </span>
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
        <ViewApplication />
        <ViewPlanList />
        <ServerDetails />
        <ServerStatus />
        <ServerFirewall />
        <EnableFirewall />
        <AddFirewallRule />
        <DeleteFirewallRule />
        <DisableFirewall />
        <ServerBackup />
        <RestoreBackup />
        <ServerPowerControl />
        <ChangeServerLabel />
        <ChangeServerPassword />
        <ChangeServerHostname />
        <ReinstallServer />
        <UpgradeServer />
        <GetServerInvoices />
        <GetInvoices />
        <GetInvoicesDetail />
        <PayInvoice />
        <RenewService />
        <GetAccountCredits />
        <SubmitCancellationRequest />
        <WithdrawCancellationRequest />
        <OpenTicket />
        <AddTicketReply />
        <GetATicket />
        <GetTickets />
        <RateTime />
      </div>
    </div>
  );
};

export default API;
