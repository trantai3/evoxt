import "../../css/DeployDedicatedServer/style.scss";
import icon from "../../assets/icons/DeployDedicatedServer/icon.svg";
const thead = [
  "CPU",
  "RAM",
  "Disk",
  "Region",
  "Setup Time",
  "Monthly Traffic",
  "Price",
  "",
];
const tbody = [
  {
    cpu: "AMD Ryzen 7800x3D",
    ram: "64 GB",
    disk: "2x 1.6 TB",
    region: icon,
    setupTime: "<24 hours",
    mothly: "1 Gbps @ 20 TB",
    price: "$189",
  },
  {
    cpu: "Intel i9-13900KF",
    ram: "128 GB",
    disk: "2x 3.84 TB",
    region: icon,
    setupTime: "<24 hours",
    mothly: "10 Gbps @ 20 TB",
    price: "$279 ",
  },
  {
    cpu: "AMD Ryzen 7950x3D",
    ram: "128 GB",
    disk: "2x 3.84 TB",
    region: icon,
    setupTime: "<24 hours",
    mothly: "1 Gbps @ 20 TB",
    price: "$279",
  },
  {
    cpu: "AMD Ryzen 7950x3D",
    ram: "128 GB",
    disk: "2x 3.84 TB",
    region: icon,
    setupTime: "<24 hours",
    mothly: "1 Gbps @ 20 TB",
    price: "$279 ",
  },
  {
    cpu: "AMD Ryzen 7950x3D",
    ram: "128 GB",
    disk: "2x 3.84 TB",
    region: icon,
    setupTime: "<24 hours",
    mothly: "1 Gbps @ 20 TB",
    price: "$279 ",
  },
  {
    cpu: "AMD Ryzen 7950x3D",
    ram: "128 GB",
    disk: "2x 3.84 TB",
    region: icon,
    setupTime: "<24 hours",
    mothly: "1 Gbps @ 20 TB",
    price: "$279 ",
  },
];
const DeployDedicatedServer = () => {
  return (
    <div className="deployDedicatedPage">
      <div className="container">
        <h1>Deploy Preconfigured Dedicated Server</h1>
        <h3>Current Available Config</h3>
        <p className="subTitle">
          All configs listed here does not require a contract.
        </p>
        <div className="overflow-x">
          <table>
            <thead>
              <tr>
                {thead.map((e, index) => (
                  <th key={index}>{e}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tbody.map((e, index) => (
                <tr key={index}>
                  <td>{e.cpu}</td>
                  <td>{e.ram}</td>
                  <td>{e.disk}</td>
                  <td>
                    <div>
                      <img src={e.region} />
                    </div>
                  </td>
                  <td>{e.setupTime}</td>
                  <td>{e.mothly}</td>
                  <td>{e.price}</td>
                  <td className="deploy">
                    <button>Deploy</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DeployDedicatedServer;
