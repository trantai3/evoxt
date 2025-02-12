import Footer from "./footer";
import Section1 from "./section1";
import Section2 from "./section2";
import "../../css/Dashboard/style.scss";
const Dashboard = () => {
  return (
    <div className="dashBoardWrap">
      <Section1 />
      <Section2 />
      <Footer />
    </div>
  );
};

export default Dashboard;
