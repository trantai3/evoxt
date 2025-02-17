import "../../css/PaymentMethod/style.scss";
const thead = ["Name", "Description", "Status", "Actions"];
const PaymentMethod = () => {
  return (
    <div className="paymentMethodPage">
      <div className="container">
        <h1>Manage Credit Cards</h1>
        <div className="overflow-x">
          <table>
            <thead>
              <tr>
                {thead.map((e, index) => (
                  <th key={index}>{e}</th>
                ))}
              </tr>
            </thead>
          </table>
          <p>No payment methods have been created yet</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
