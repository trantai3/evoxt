import "../../css/MainPage/Section6/style.scss";
import img1 from "../../assets/images/MainPage/Section6/img1.png";
import img2 from "../../assets/images/MainPage/Section6/img2.png";
import img3 from "../../assets/images/MainPage/Section6/img3.png";
import { Carousel } from "antd";
const imgs = [
  { label: "Dashboard", img: img1 },
  { label: "Server Deployment", img: img2 },
  { label: "VM Control Panel", img: img3 },
];
const Section6: React.FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  return (
    <div className="mainPage">
      <div className="section__6">
        <div className="container">
          <p className="section__6-heading">Easy to use intuitive interfaces</p>
          <p className="section__6-subheading">
            Save even more time with intuitive and easy-to-use interface, no
            more fiddling around.
          </p>
          <Carousel afterChange={onChange}>
            {imgs.map((e, index) => (
              <div className="carouselImg" key={index}>
                <img src={e.img} />
                <p className="slider-description">{e.label}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Section6;
