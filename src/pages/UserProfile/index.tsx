import "../../css/UserProfile/style.scss";
const UserProfile = () => {
  return (
    <div className="userProfilePage">
      <div className="container">
        <h1>Your Profile</h1>
        <div className="table">
          <h3>Change your current user profile details here.</h3>
          <h3>Profile</h3>
          <div className="row">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" value="Tai" />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" />
            </div>
          </div>
          <div className="button">
            <button className="save-changes">Save Changes</button>
            <button className="cancel">Cancel</button>
          </div>
          <h3>Change Email Address</h3>
          <div className="row row-email">
            <div className="form-group">
              <label>Email Address</label>
              <input type="text" value="trantai09032003@gmail.com" />
            </div>
          </div>
          <div className="button">
            <button className="save-changes">Save Changes</button>
            <button className="cancel">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
