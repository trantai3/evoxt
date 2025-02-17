import "../../css/Submitticket/style.scss";
const Submitticket = () => {
  return (
    <div className="submitticketPage">
      <div className="container">
        <h1>Submit Ticket</h1>
        <div className="table">
          <div className="row row1">
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" value="Tai" disabled />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="text"
                name="name"
                value="trantai09032003@gmail.com"
                disabled
              />
            </div>
          </div>
          <div className="row row2">
            <label>Subject</label>
            <input type="text" placeholder="Subject" />
          </div>
          <div className="row row3">
            <div className="form-group">
              <label>Department</label>
              <select>
                <option value="1">Sales</option>
                <option value="2" selected>
                  Support
                </option>
                <option value="3">Billing</option>
                <option value="4">Bug Report</option>
              </select>
            </div>
            <div className="form-group">
              <label>Priority</label>
              <select>
                <option value="1">
                  Emergency (0/ 1 emergency tickets allowed)
                </option>
                <option value="2" selected>
                  Medium
                </option>
                <option value="3">Low</option>
              </select>
            </div>
          </div>
          <div className="row row4">
            <label>Service IP Address</label>
            <input type="text" placeholder="Service IP Address" />
          </div>
          <div className="row row5">
            <label>Message</label>
            <textarea rows={6} />
          </div>
          <div className="row row6">
            <div className="form-group">
              <label>Attachments</label>
              <div className="choose">
                <input type="file" />
                <button>+ Add More</button>
              </div>
            </div>
          </div>
          <div className="noticed">
            <p>Allowed File Extensions: .jpg, .gif, .jpeg, .png, .txt, .pdf</p>
          </div>
          <div className="submit">
            <button className="submit">Submit</button>
            <button className="cancel">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Submitticket;
