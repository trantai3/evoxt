import "../../css/AutoRenew/style.scss";
const AutoRenew = () => {
  return (
    <div className="autoRenewPage">
      <div className="container">
        <h1>Auto Renewal Configuration</h1>
        <div className="renewalAction">
          <strong>Auto Renewal Default Action:</strong>
          <input type="checkbox" checked />
        </div>
        <p>
          The default autorenewal setting for newly deployed VMs is 'ON,'
          meaning your VM will be automatically configured for renewal at the
          time of deployment. As a result, your Evoxt account credit will be
          charged automatically during the next invoice cycle for the renewal.
        </p>
        <p>
          If you prefer not to have automatic renewals, you can uncheck this
          option to set the default to 'OFF.' With this setting, newly deployed
          VMs will not renew automatically, and you will need to pay the invoice
          manually to continue the service.
        </p>
        <button>Save</button>
        <p>
          **Please note that if the autorenewal option is set to 'off' by
          default, our system may classify your service as 'Non-Renewal' when it
          comes due. This could result in the premature termination of your
          service.
        </p>
      </div>
    </div>
  );
};

export default AutoRenew;
