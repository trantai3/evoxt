import LayoutDeploy from "@/layouts/LayoutDeploy";
import { LayoutMain } from "@/layouts/LayoutMain";
import LayoutStatus from "@/layouts/LayoutStatus";
import AboutUs from "@/pages/AboutUs";
import AccountContact from "@/pages/AccountContact";
import AccountUser from "@/pages/AccountUser";
import AddFunds from "@/pages/AddFunds";
import Affiliate from "@/pages/Affiliate";
import ApiCredentials from "@/pages/APICredentials";
import AutoRenew from "@/pages/AutoRenew";
import ClientArea from "@/pages/ClientArea";
import Clone from "@/pages/Clone";
import CpuVsNumber from "@/pages/CpuVsNumber";
import Dashboard from "@/pages/Dashboard";
import Deploy from "@/pages/Deploy";
import DeployDedicatedServer from "@/pages/DeployDedicatedServer";
import EmailHistory from "@/pages/EmailHistory";
import Firewall from "@/pages/Firewall";
import Invoices from "@/pages/Invoices";
import IpManagement from "@/pages/IpManagement";
import KeysManagement from "@/pages/KeyManagements";
import MainPage from "@/pages/MainPage";
import MemberRanking from "@/pages/MemberRanking";
import OrderId from "@/pages/OrderId";
import PaymentMethod from "@/pages/PaymentMethods";
import PopularAppsAndWeb from "@/pages/PopularAppsAndWeb";
import Pricing from "@/pages/Pricing";
import RefundRequest from "@/pages/RefundRequest";
import RefundRequestHistory from "@/pages/RefundRequestHistory";
import RegisterDomain from "@/pages/RegisterDomain";
import Reseller from "@/pages/Reseller";
import Service from "@/pages/Service";
import Status from "@/pages/Status";
import Submitticket from "@/pages/Submitticket";
import SupportTickets from "@/pages/SupportTickets";
import TermOfService from "@/pages/TermOfService";
import UserPassword from "@/pages/UserPassword";
import UserProfile from "@/pages/UserProfile";
import UserSecurity from "@/pages/UserSecurity";
import WeeklyOffsiteBackup from "@/pages/Weekly-Offsite-Backup";
import WindowOrLinux from "@/pages/WindowOrLinux";
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
      {
        path: "clientarea",
        element: <ClientArea />,
      },
    ],
  },
  {
    path: "/account",
    element: <LayoutDeploy />,
    children: [
      { path: "users", element: <AccountUser /> },
      {
        path: "paymentmethods",
        element: <PaymentMethod />,
      },
      {
        path: "contacts",
        element: <AccountContact />,
      },
    ],
  },
  {
    path: "/autorenewal_config",
    element: <LayoutDeploy />,
    children: [{ path: "", element: <AutoRenew /> }],
  },
  {
    path: "/user",
    element: <LayoutDeploy />,
    children: [
      { path: "profile", element: <UserProfile /> },
      { path: "password", element: <UserPassword /> },
      { path: "security", element: <UserSecurity /> },
    ],
  },
  {
    path: "/keysmanagement",
    element: <LayoutDeploy />,
    children: [{ path: "", element: <KeysManagement /> }],
  },
  {
    path: "/clientarea-email-history",
    element: <LayoutDeploy />,
    children: [{ path: "", element: <EmailHistory /> }],
  },
  {
    path: "/apicredentials",
    element: <LayoutDeploy />,
    children: [{ path: "", element: <ApiCredentials /> }],
  },
  {
    path: "/affiliates",
    element: <LayoutDeploy />,
    children: [{ path: "", element: <Affiliate /> }],
  },
  {
    path: "/reseller",
    element: <LayoutDeploy />,
    children: [{ path: "", element: <Reseller /> }],
  },
  {
    path: "/status",
    element: <LayoutStatus />,
    children: [{ path: "", element: <Status /> }],
  },
  {
    path: "/cpu-clock-speed-vs-number-of-cpu-cores",
    element: <LayoutMain />,
    children: [{ path: "", element: <CpuVsNumber /> }],
  },
  {
    path: "/windows-server-or-linux-server",
    element: <LayoutMain />,
    children: [{ path: "", element: <WindowOrLinux /> }],
  },
  {
    path: "/popular-web-apps-and-websites-to-deploy",
    element: <LayoutMain />,
    children: [{ path: "", element: <PopularAppsAndWeb /> }],
  },
];

const router = createBrowserRouter(rootRoute);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
