import imgSection1 from "../../assets/images/Climate-Stripe/Section1/img.png";
import { ReactComponent as Img1Section5 } from "../../assets/images/Climate-Stripe/Section5/img1.svg";
import { ReactComponent as Img2Section5 } from "../../assets/images/Climate-Stripe/Section5/img2.svg";
import { FaCirclePlay } from "react-icons/fa6";
import { ReactComponent as ImgSection6 } from "../../assets/images/Climate-Stripe/Section6/chart1.svg";
import "../../css/Climate/style.scss";
import { Link } from "react-router-dom";
const section5 = [
  {
    img: <Img1Section5 className="img" />,
    infor:
      "Climeworks uses renewable geothermal energy and waste heat to capture CO₂ directly from the air, concentrate it, and permanently sequester it underground in basaltic rock formations with Carbfix. Climeworks will remove 322 tons of CO₂ on behalf of Stripe Climate businesses.",
    click: "Play",
    linkVideo:
      "https://d37ugbyn3rpeym.cloudfront.net/videos/climate/climeworks-v4-060421-trimmed.mp4",
  },
  {
    img: <Img2Section5 className="img" />,
    infor:
      "Charm Industrial has created a novel carbon removal pathway that converts biomass into bio-oil and then injects it deep underground for permanent geologic storage. Stripe Climate was Charm’s first customer. In 2021, Charm removed 416 tons of CO₂ on behalf of Stripe Climate businesses.",
    click: "Play",
    linkVideo:
      "https://d37ugbyn3rpeym.cloudfront.net/videos/climate/charm-v3-061821-trimmed.mp4",
  },
];
const ClimateStripe = () => {
  return (
    <div className="climateStripePage">
      <div className="header">
        <div>
          <img src={imgSection1} />
        </div>
      </div>
      <div className="section1">
        At Evoxt, we contribute 0.5% of our revenue <br /> to carbon removal
      </div>
      <div className="section2">
        <div className="media-backgroundMask">
          <div className="infor">
            <div className="infor-detail">
              Removing CO₂ from the atmosphere is critical to counteract climate
              change, but the technology is <br /> currently lagging behind. A
              fraction of every purchase from Evoxt helps new carbon removal
              <br />
              technologies scale.
            </div>
          </div>
        </div>
      </div>
      <div className="section3">
        <div className="section3-inner">
          <p className="section3-inner-title">Why we contribute</p>
          <p className="section3-inner-content">
            At Evoxt, we believe businesses can play a critically important role
            in helping fight climate change. We’re <br /> proud to fund
            next-generation carbon removal.
          </p>
        </div>
      </div>
      <div className="section4">
        <div className="container">
          <p className="section4-title">
            Evoxt is part of Stripe Climate, a coalition of businesses
            accelerating carbon <br /> removal
          </p>
          <p className="section4-detail">
            No company can stop climate change by itself. Stripe Climate
            aggregates funds from forward-thinking businesses around the world
            to <br /> increase demand for carbon removal. Stripe Climate works
            with Frontier, Stripes in-house team of science and commercial
            experts, to <br /> purchase permanent carbon removal.
          </p>
          <div className="section4-infor">
            <div className="businesses">
              <span className="value">25,000+</span>
              <span className="label">businesses</span>
            </div>
            <div className="countries">
              <span className="value">39</span>
              <span className="label">countries</span>
            </div>
          </div>
        </div>
      </div>
      <div className="section5">
        <div className="container">
          <div className="section5-title">Select projects</div>
          <div className="section5-details">
            We support a portfolio of emerging technologies that remove CO₂ from
            the <br /> atmosphere
          </div>
          <p className="details">
            Stripe Climate works with a multidisciplinary group of scientific
            experts to find and evaluate the most promising carbon removal
            <br />
            technologies. Below are two examples from our broader portfolio.
          </p>
          <div className="article">
            {section5.map((e, index) => (
              <div key={index} className={`wrap wrap-${index}`}>
                <div className="wrap-left">
                  <div className="wrap-left-img">{e.img}</div>
                  <div className="wrap-left-infor">{e.infor}</div>
                  <div className="wrap-left-click">
                    <button>
                      <FaCirclePlay className="icon" />
                      {e.click}
                    </button>
                  </div>
                </div>
                <div className="wrap-right">
                  <video autoPlay muted loop playsInline>
                    <source src={e.linkVideo} />
                  </video>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="section6">
        <div className="container">
          <div className="section6-title">Why it works</div>
          <div className="section6-details">
            Early customers can help new technologies get down the cost curve
            and <br /> scale up
          </div>
          <div className="details">
            Most new technology is expensive at first. Early adopters like Evoxt
            help promising new carbon removal technologies lower their costs
            <br /> and scale up quickly.
          </div>
          <figure className="chart__figure">
            <div className="chart__overlay">
              <div className="chart__axisLabel chart__axisLabel--y">
                Unit Price
              </div>
              <div className="chart__axisLabel chart__axisLabel--x">Time</div>
              <div className="chart__lineLabel chart__lineLabel--solarPanels">
                Solar panels
              </div>
              <div className="chart__lineLabel chart__lineLabel--hardDrives">
                Hard drives
              </div>
              <div className="chart__lineLabel chart__lineLabel--dnaSequencing">
                DNA sequencing
              </div>
              <div className="chart__lineLabel chart__lineLabel--carbonRemoval">
                <span className="text--highlight">Carbon removal</span> has the
                potential to follow a similar trajectory with the help of early
                adopters
              </div>
            </div>
            <ImgSection6 className="img" />
          </figure>
        </div>
      </div>
      <div className="section7">
        <div className="section7-footer">
          <p className="section7-footer-text">
            Join us in scaling carbon removal
          </p>
          <div className="button">
            <button>
              <Link to="/">Back to Evoxt</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClimateStripe;
