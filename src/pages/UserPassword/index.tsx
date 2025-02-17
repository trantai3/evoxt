import "../../css/UserPassword/style.scss";
const UserPassword = () => {
  return (
    <div className="userPasswordPage">
      <div className="container">
        <h1>Change User Password</h1>
        <div className="table">
          <h3>Change your current user password here.</h3>
          <div className="table-content">
            <div className="password-create">
              <div className="row">
                <label>Existing Password</label>
                <input type="text" />
              </div>
              <div className="row">
                <label>New Password</label>
                <input type="text" />
              </div>
              <div className="row">
                <label>Confirm New Password</label>
                <input type="text" />
              </div>
              <div className="button">
                <button className="save-changes">Save Changes</button>
                <button className="cancel">Cancel</button>
              </div>
            </div>
            <div className="password-generate">Generate Password</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPassword;
