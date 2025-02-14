import "../../css/OrderId/style.scss";
const OrderId = () => {
  return (
    <div className="orderIdPage">
      <div className="container">
        <h1>Order Floating IP Address</h1>
        <p className="orderChoose">
          Which server do you need the additional IP for?
        </p>
        <select>
          <option value="1">--</option>
        </select>
        <p className="quantity">Quantity</p>
        <div className="quantityChoose">
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <p>(Max 5 Floating IPs per server)</p>
        </div>
        <button>Continue</button>
      </div>
    </div>
  );
};

export default OrderId;
