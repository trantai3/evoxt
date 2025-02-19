import "../../css/MalaysiaDedicated/Section5/style.scss";
const section5 = [
  {
    title: "Q: Can I overclock my server?",
    content:
      "A: Unfortunately, overclocking is not allowed on our dedicated servers due to the potential for instability and rapid hardware degradation.",
  },
  {
    title: "Q: I need a custom partition.",
    content:
      "A: Please inform us of your partition requirements, and we can usually configure them for you. Alternatively, we can also assist in mounting the ISO for your own installation.",
  },
  {
    title: "Q: I require more storage.",
    content:
      "A: Please let us know your storage needs, and we can install additional storage as long as the motherboard supports it.",
  },
  {
    title: "Q: Are there any contracts?",
    content:
      "A: This depends on the server you select, if you choose from our available offerings, there will be no contracts on this. But if you need a custom solution, a contract will be required.",
  },
  {
    title: "Q: What Operating Systems can be installed?",
    content:
      "A: You have the flexibility to install any operating system of your preference.",
  },
  {
    title: "Q: I need more IP addresses.",
    content:
      "A: Certainly, please specify the number of IP addresses you require and provide a justification for your request.",
  },
  {
    title: "Q: I require more bandwidth.",
    content:
      "A: Typically, the setup process takes approximately <24 hours, depending on the complexity of your configuration and customization.",
  },
];
const Section5 = () => {
  return (
    <div className="section5Malaysia">
      <div className="container">
        <h3>FAQs:</h3>
        <ul>
          {section5.map((e, index) => (
            <li key={index}>
              <strong>{e.title}</strong>
              <p>{e.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Section5;
