import "../../css/AcceptableUsePolicy/style.scss";
const AcceptableUsePolicy = () => {
  return (
    <div className="acceptableUsePolicyPage">
      <div className="container">
        <div className="wrap">
          <h1>Acceptable Use Policy</h1>
          <br />
          <br />
          <p>
            By using our service, you agree to follow our policies below. We may
            modify this Policy at any time. By using our services, you agree to
            the latest version of this Policy. If you violate the Policy or
            authorize or help others to do so, we may suspend or terminate your
            use of the Services.
          </p>
          <br />
          <br />
          <p>
            <strong>Prohibited Usage</strong>
            <br />
            Our servers cannot be used for anything that is deemed illegal by
            the law.
            <br />
            This includes:
            <ul>
              <li>Carrying DDOS/ brute force attacks</li>
              <li>
                Running/ hosting any botnet related commands and control servers
              </li>
              <li>IP spoofing</li>
              <li>Port scanning (Zmap included)</li>
              <li>
                Sending unsolicited emails or malware distribution ( Email
                abuse, spam included )
              </li>
              <li>Hosting phishing websites</li>
            </ul>
            Contact us if you have any questions/ or queries about the content
            that you wish to host with Evoxt.
            <br />
            <br />
            If any of your services are found to be breaking the above terms,
            they will be terminated.
          </p>
          <br />
          <br />
          <p>
            <strong>Torrenting</strong>
            <br />
            It is allowed to do torrenting with our servers. However, please
            take note that there is monthly bandwidth in place to prevent
            possible hogging/abusive usage.
            <br />
            It is suggested to put a speed limit on your torrent client.
          </p>
          <br />
          <br />
          <p>
            <strong>Email Abuse</strong>
            <br />
            Mailing port (25) are blocked by default to prevent any possible
            abusive actions. In cases where the customer required the port to be
            opened, justifications are required. We have the right to refuse
            your request or block ports if they are deemed unnecessary or the
            justification submitted does not match your actions.
            <br />
            Mass mailing is not accepted on Evoxt. You will not distribute,
            publish, send, or facilitate sending unsolicited mass e-mail or
            other messages, promotions, advertising, or solicitations (spams),
            including commercial advertising and informational announcements.
            You will not alter or change mail headers or assume a sender’s
            identity without the sender’s explicit permission.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AcceptableUsePolicy;
