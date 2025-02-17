import "../../css/UserSecurity/style.scss";
import icon from "../../assets/icons/UserSecurity/icon.svg";
const UserSecurity = () => {
  return (
    <div className="userSecurityPage">
      <div className="container">
        <h1>Security Settings</h1>
        <div className="table">
          <h2>Two-Factor Authentication</h2>
          <p className="authentications-infor">
            Two-factor authentication is currently <strong>disabled</strong>
          </p>
          <div className="alert-warning">
            <div className="img">
              <img src={icon} />
            </div>
            <p>
              We recommend enabling two-factor authentication to provide an
              extra layer of security to your account.
            </p>
          </div>
          <button>Click here to Enable</button>
        </div>
      </div>
    </div>
  );
};

export default UserSecurity;
