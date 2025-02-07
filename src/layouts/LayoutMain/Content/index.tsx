import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import ProgressBar from "@/components/ProgessBar";

const { Content } = Layout;

const ContentComponent = () => {
  return (
    <Content>
      <ProgressBar>
        <Outlet />
      </ProgressBar>
    </Content>
  );
};

export default ContentComponent;
