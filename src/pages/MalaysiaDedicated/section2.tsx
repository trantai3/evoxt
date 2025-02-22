import "../../css/MalaysiaDedicated/Section2/style.scss";
import { ReactComponent as ImgAmd } from "../../assets/images/Malaysia/Section2/amd.svg";
import { ReactComponent as ImgIntel } from "../../assets/images/Malaysia/Section2/intel.svg";
import { Link } from "react-router-dom";
const thead = [
  "Brand",
  "Processor",
  "Memory",
  "Storage",
  "Network",
  "Price(USD/month)",
];
const tbodyAmd = [
  {
    brand: <ImgAmd className="imgamd" />,
    processor: (
      <p>
        7800x3D – 8 Cores <br />
        Up to 5.0 GHz
      </p>
    ),
    memory: "32 GB DDR5 ECC",
    storage: "2x U.2 NVMe 0.96 TB",
    network: "1 Gbps w/ 20TB",
    price: "$219",
  },
  {
    brand: <ImgAmd className="imgamd" />,
    processor: (
      <p>
        7900x3D – 12 Cores
        <br />
        Up to 5.6 GHz
      </p>
    ),
    memory: "64 GB DDR5 ECC",
    storage: "2x U.2 NVMe 1.92 TB",
    network: "1 Gbps w/ 20TB",
    price: "$249",
  },
  {
    brand: <ImgAmd className="imgamd" />,
    processor: (
      <p>
        7950x3D – 16 Cores
        <br />
        Up to 5.7 GHz
      </p>
    ),
    memory: "128 GB DDR5 ECC",
    storage: "2x U.2 NVMe 3.84 TB",
    network: "1 Gbps w/ 20TB",
    price: "$279",
  },
];

const tbodyIntel = [
  {
    brand: <ImgIntel className="imgintel" />,
    processor: (
      <p>
        13600K – 14 Cores
        <br />
        Up to 5.3 GHz
      </p>
    ),
    memory: "32 GB DDR5 ECC",
    storage: "2x U.2 NVMe 0.96 TB",
    network: "1 Gbps w/ 20TB",
    price: "$259",
  },
  {
    brand: <ImgIntel className="imgintel" />,
    processor: (
      <p>
        13700K – 16 Cores
        <br />
        Up to 5.4 GHz
      </p>
    ),
    memory: "64 GB DDR5 ECC",
    storage: "2x U.2 NVMe 1.92 TB",
    network: "1 Gbps w/ 20TB",
    price: "$289",
  },
  {
    brand: <ImgIntel className="imgintel" />,
    processor: (
      <p>
        13900K – 24 Cores
        <br />
        Up to 5.8 GHz
      </p>
    ),
    memory: "128 GB DDR5 ECC",
    storage: "2x U.2 NVMe 3.84 TB",
    network: "1 Gbps w/ 20TB",
    price: "$329",
  },
];
const Section2 = () => {
  return (
    <div className="section2Malaysia">
      <div className="container">
        <p className="title">Located in AIMS KL 2, Malaysia</p>
        <p className="subTitle">
          All servers are paired with server grade hardware (Motherboard, U.2.
          NVMe, ECC Memory and Redundant Power Supplies)
        </p>
        <div className="overflow-x">
          <div className="amd">
            <h4>AMD</h4>
          </div>
          <table>
            <thead>
              <tr>
                {thead.map((e, index) => (
                  <th key={index}>{e}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tbodyAmd.map((e, index) => (
                <tr key={index}>
                  <td className="img">{e.brand}</td>
                  <td>{e.processor}</td>
                  <td>{e.memory}</td>
                  <td>{e.storage}</td>
                  <td>{e.network}</td>
                  <td>{e.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="contact">
            Custom Configuration needed?
            <Link to="/deploy/supporttickets"> Contact us</Link>
          </p>
        </div>
        <div className="overflow-x">
          <div className="intel">
            <h4>Intel</h4>
          </div>
          <table>
            <thead>
              <tr>
                {thead.map((e, index) => (
                  <th key={index}>{e}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tbodyIntel.map((e, index) => (
                <tr key={index}>
                  <td className="img">{e.brand}</td>
                  <td>{e.processor}</td>
                  <td>{e.memory}</td>
                  <td>{e.storage}</td>
                  <td>{e.network}</td>
                  <td>{e.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="contact">
            Custom Configuration needed?
            <Link to="/deploy/supporttickets"> Contact us</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
