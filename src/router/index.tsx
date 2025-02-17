import LayoutDeploy from "@/layouts/LayoutDeploy";
import { LayoutMain } from "@/layouts/LayoutMain";
import AboutUs from "@/pages/AboutUs";
import AddFunds from "@/pages/AddFunds";
import Clone from "@/pages/Clone";
import Dashboard from "@/pages/Dashboard";
import Deploy from "@/pages/Deploy";
import DeployDedicatedServer from "@/pages/DeployDedicatedServer";
import Firewall from "@/pages/Firewall";
import Invoices from "@/pages/Invoices";
import IpManagement from "@/pages/IpManagement";
import MainPage from "@/pages/MainPage";
import MemberRanking from "@/pages/MemberRanking";
import OrderId from "@/pages/OrderId";
import Pricing from "@/pages/Pricing";
import RefundRequest from "@/pages/RefundRequest";
import RefundRequestHistory from "@/pages/RefundRequestHistory";
import RegisterDomain from "@/pages/RegisterDomain";
import Service from "@/pages/Service";
import Submitticket from "@/pages/Submitticket";
import SupportTickets from "@/pages/SupportTickets";
import TermOfService from "@/pages/TermOfService";
import WeeklyOffsiteBackup from "@/pages/Weekly-Offsite-Backup";
import {
  RouteObject,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const rootRoute: RouteObject[] = [
  {
    path: "/",
    element: <LayoutMain />,
    children: [
      { index: true, element: <MainPage /> },
      { path: "clone", element: <Clone /> },
      { path: "firewall", element: <Firewall /> },
      { path: "ip-management", element: <IpManagement /> },
      { path: "weekly-offsite-backup", element: <WeeklyOffsiteBackup /> },
      { path: "membership-ranking", element: <MemberRanking /> },
      { path: "pricing", element: <Pricing /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "terms-of-service", element: <TermOfService /> },
    ],
  },
  {
    path: "/deploy",
    element: <LayoutDeploy />,
    children: [
      { index: true, path: "dashboard", element: <Dashboard /> },
      { path: "service", element: <Service /> },
      { path: "", element: <Deploy /> },
      { path: "dedicated-server", element: <DeployDedicatedServer /> },
      { path: "order-id", element: <OrderId /> },
      { path: "register-domain", element: <RegisterDomain /> },
      { path: "invoices", element: <Invoices /> },
      { path: "addfunds", element: <AddFunds /> },
      { path: "refund", element: <RefundRequest /> },
      { path: "refundrequesthistory", element: <RefundRequestHistory /> },
      { path: "submitticket", element: <Submitticket /> },
      {
        path: "supporttickets",
        element: <SupportTickets />,
      },
    ],
  },
];

const router = createBrowserRouter(rootRoute);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
