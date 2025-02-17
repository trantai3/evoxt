import { Link } from "react-router-dom";
import { FaRegCopy } from "react-icons/fa6";
import "../../css/APICredentials/style.scss";
const ApiCredentials = () => {
  return (
    <div className="apiCredentialsPage">
      <div className="container">
        <h1>API Credentials</h1>
        <p>
          For API documentation, please visit <Link to="">here</Link>
        </p>
        <div className="button">
          <button>Regenerate API Keys</button>
        </div>
        <p className="apitext">Public Key</p>
        <div className="apidiv">
          <input
            type="text"
            value="C7act0icI0hy3CdyTxdubHfCFZM15BkCVes0MAGQQXTS"
          />
          <FaRegCopy className="icon" />
          <p>Copy</p>
        </div>
        <p className="apitext">Private Key</p>
        <div className="apidiv">
          <input
            type="text"
            value="JpnQ2raHkyoDz95gA80DCGv6TO6Vt1jzikThdGmw0CXz3FTVUDrfKYrxcQeBJr4G"
          />
          <FaRegCopy className="icon" />
          <p>Copy</p>
        </div>
        <div className="update">
          <div className="username">
            <p className="apitext">Username</p>
            <input type="text" value="evoxt39935" />
            <div>
              <button>Update</button>
            </div>
          </div>
          <div className="authorize">
            <p className="apitext">
              Authorize IP address to use the API <br />( List of IP address,
              separate with line break )
            </p>
            <textarea rows={4} placeholder="192.168.0.1" />
            <div>
              <button>Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiCredentials;
