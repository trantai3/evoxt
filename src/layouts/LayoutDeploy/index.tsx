import { Layout } from "antd";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import SideNav from "./SideNav";
const LayoutDeploy = () => {
  return (
    <Layout>
      <Layout>
        <Header />
        <SideNav />
        <Content />
        <Footer />
      </Layout>
    </Layout>
  );
};

export default LayoutDeploy;
