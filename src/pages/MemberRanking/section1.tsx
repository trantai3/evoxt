import "../../css/MemberRanking/Section1/style.scss";
const section1 = [
  {
    membership: "None",
    minumum: "-",
    benefits: (
      <ul>
        <li>1 Emergency Ticket Allowance/Month</li>
      </ul>
    ),
  },
  {
    membership: "Bronze Member",
    minumum: "$50+",
    benefits: (
      <ul>
        <li>2 Emergency Ticket Allowance/Month</li>
      </ul>
    ),
  },
  {
    membership: "Silver Member",
    minumum: "$250+",
    benefits: (
      <ul>
        <li>3 Emergency Ticket Allowance/Month</li>
      </ul>
    ),
  },
  {
    membership: "Gold Member",
    minumum: "$500+",
    benefits: (
      <ul>
        <li>5 Emergency Ticket Allowance/Month</li>
        <li>Exclusive Customized OS Template for easy deployment</li>
      </ul>
    ),
  },
  {
    membership: "Platinum",
    minumum: "$1,000+",
    benefits: (
      <ul>
        <li>7 Emergency Ticket Allowance/Month</li>
        <li>Exclusive Customized OS Template for easy deployment</li>
        <li>Automated IP Address Change Feature ( Coming Soon )</li>
      </ul>
    ),
  },
  {
    membership: "Diamond Member",
    minumum: "$10,000+",
    benefits: (
      <ul>
        <li>10 Emergency Ticket Allowance/Month</li>
        <li>Exclusive Customized OS Template for easy deployment</li>
        <li>Automated IP Address Change Feature ( Coming Soon )</li>
        <li>
          Options to rent up to 254 IP addresses to assign to your servers
        </li>
      </ul>
    ),
  },
];
const Section1 = () => {
  return (
    <div className="memberRankingPage">
      <div className="section__1">
        <div className="container">
          <div className="wrap">
            <h1>Membership Ranking</h1>
            <div className="overflow-x">
              <table>
                <thead>
                  <tr>
                    <th>Membership Level</th>
                    <th>Minumum Monthly Recurring Spend</th>
                    <th className="benefits">Benefits</th>
                  </tr>
                </thead>
                <tbody>
                  {section1.map((e, index) => (
                    <tr key={index}>
                      <td className={`member-${index}`}>{e.membership}</td>
                      <td className="minumum">{e.minumum}</td>
                      <td className="benefits">{e.benefits}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
