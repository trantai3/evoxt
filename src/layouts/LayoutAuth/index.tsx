import { Layout } from "antd";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import "../../css/LayoutAuth/style.scss";

export const LayoutAuth = () => {
  return (
    <Layout>
      <Layout className="layoutAuth">
        <Header />
        <Content />
        <Footer />
      </Layout>
    </Layout>
  );
};

export default LayoutAuth;
