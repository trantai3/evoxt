import { Layout } from "antd";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

export const LayoutMain = () => {
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
