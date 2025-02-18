import { Layout } from "antd";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

const LayoutStatus = () => {
  return (
    <Layout>
      <Layout>
        <Header />
        <Content />
        <Footer />
      </Layout>
    </Layout>
  );
};

export default LayoutStatus;
