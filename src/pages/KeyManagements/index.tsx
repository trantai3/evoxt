import "../../css/KeysManagement/style.scss";
const KeysManagement = () => {
  return (
    <div className="keysManagementPage">
      <div className="container">
        <h1>Keys Management</h1>
        <div className="button">
          <button>Add SSH Key</button>
        </div>
        <table>
          <thead>
            <tr>
              <th className="ssh">SSH Key</th>
              <th className="label">Label</th>
              <th>Date Created</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default KeysManagement;
