import "../../css/Firewall/Section5/style.scss";
const Section5 = () => {
  return (
    <div className="firewallPage">
      <div className="section__5">
        <div className="container">
          <h3>FAQ</h3>
          <ul>
            <li>
              Is this for Inbound Firewall Rules or Outbound Firewall rules?
            </li>
            – This is only for Inbound Firewall Rules.
            <li>How can I manage Outbound Firewall Rules?</li>– Our Firewall
            Rules doesn't support any Outbound rules as the traffic is from your
            VM. We don't see a reason to provide the firewall settings to block
            the traffic you sent.
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Section5;
