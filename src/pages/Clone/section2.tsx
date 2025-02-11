import "../../css/Clone/Section2/style.scss";
import img from "../../assets/images/Clone/Section2/img.svg";
import icon1 from "../../assets/icons/Clone/icon1.svg";
import icon2 from "../../assets/icons/Clone/icon2.svg";
import icon3 from "../../assets/icons/Clone/icon3.svg";
const section2 = [
  {
    img: icon1,
    title: "Easy",
    content: (
      <p className="feature-content">
        Clone your servers in one click. No drive copying, no moving files, no
        SCP.
        <br />
        Just one click.
      </p>
    ),
  },
  {
    img: icon2,
    title: "Exact Copy",
    content: (
      <p className="feature-content">
        Same exact copy. Evoxt don't just copy the files, the entire virtual
        machine image is copied over, the settings are copied over as well.
      </p>
    ),
  },
  {
    img: icon3,
    title: "Automatic",
    content: (
      <p className="feature-content">
        This is completely automatic, you don't need to contact our support team
        to get this done.
      </p>
    ),
  },
];
const Section2 = () => {
  return (
    <div className="clonePage">
      <div className="section__2">
        <div className="container">
          <div className="section__2-top">
            <div className="img">
              <img src={img} />
            </div>
            <p className="section__2-title">
              Clone your virtual machines easily, skip the setup
            </p>
            <p className="section__2-features">
              {section2.map((e, index) => (
                <div className="feature" key={index}>
                  <div className="feature-img">
                    <img src={e.img} />
                  </div>
                  <div className="feature-text">
                    <p className="feature-title">{e.title}</p>
                    {e.content}
                  </div>
                </div>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
