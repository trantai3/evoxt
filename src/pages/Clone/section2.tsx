import "../../css/Clone/Section2/style.scss";
import { ReactComponent as Img } from "../../assets/images/Clone/Section2/img.svg";
import { ReactComponent as Icon1 } from "../../assets/icons/Clone/icon1.svg";
import { ReactComponent as Icon2 } from "../../assets/icons/Clone/icon2.svg";
import { ReactComponent as Icon3 } from "../../assets/icons/Clone/icon3.svg";
const section2 = [
  {
    img: <Icon1 className="icon" />,
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
    img: <Icon2 className="icon" />,
    title: "Exact Copy",
    content: (
      <p className="feature-content">
        Same exact copy. Evoxt don't just copy the files, the entire virtual
        machine image is copied over, the settings are copied over as well.
      </p>
    ),
  },
  {
    img: <Icon3 className="icon" />,
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
              <Img className="imgSection2" />
            </div>
            <p className="section__2-title">
              Clone your virtual machines easily, skip the setup
            </p>
            <p className="section__2-features">
              {section2.map((e, index) => (
                <div className="feature" key={index}>
                  <div className="feature-img">{e.img}</div>
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
