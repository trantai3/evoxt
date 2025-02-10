import "../../css/MainPage/Section9/style.scss";
const section9 = [
  {
    title: "99.99% Uptime",
    content: "Our servers are guaranteed to have at least 99.99% uptime.",
  },
  {
    title: "Weekly Automatic Offsite Backup",
    content:
      "Your virtual machine are backed up automatically every week to protect against disastrous situation.",
  },
  {
    title: "Scale",
    content:
      "Deploy the smallest virtual machine and easily scale in a few clicks when needed.",
  },
  {
    title: "Privacy",
    content:
      "We value your privacy. We will protect your privacy as much as we can. We usually don't require any other details except your name which is used to identify you.",
  },
  {
    title: "Enterprise Grade Hardware",
    content:
      "We use enterprise grade hardware for increased performance and reliability.",
  },
  {
    title: "KVM",
    content:
      "We use KVM hypervisors so you get the best performance and security.",
  },
  {
    title: "Speedy Deployment",
    content: "Ready to connect and use within 2.5 minutes.",
  },
  {
    title: "Transparent Pricing",
    content:
      "If you order a $2.99 plan. You will pay $2.99. We don't charge any extra bandwidth fees or any CPU burst fees",
  },
  {
    title: "Cryptocurrency Friendly",
    content:
      "What's the point of being privacy focused when if don't accept Cryptocurrencies? Evoxt accept major Cryptocurrencies such as Bitcoins, Litecoin and Ethereum",
  },
  {
    title: "IPv6 Ready",
    content: "Future proof, all VMs have an IPv6 address included",
  },
  {
    title: "Private IP Address",
    content:
      "Build your infrastructure on Evoxt. Communicate between VMs without any extra bandwidth charges",
  },
  {
    title: "Rescue Mode",
    content:
      "Your VM is now stuck in boot? One click to boot into rescue mode to perform repair/ data migration.",
  },
];
const Section9 = () => {
  return (
    <div className="mainPage">
      <div className="section__9">
        <div className="container">
          <div className="section__9-heading">Additional Features</div>
          <div className="section__9-subheading">
            Extra features that you will love.
          </div>
          <div className="section__9-main">
            {section9.map((e, index) => (
              <div className="wrapper" key={index}>
                <p className="wrapper-heading">{e.title}</p>
                <p className="wrapper-text">{e.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section9;
