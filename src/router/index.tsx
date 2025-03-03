// Layout
import { Suspense, lazy } from "react";
import LayoutDeploy from "@/layouts/LayoutDeploy";
import { LayoutMain } from "@/layouts/LayoutMain";
import LayoutStatus from "@/layouts/LayoutStatus";
// Page
const AboutUs = lazy(() => import("@/pages/AboutUs"));
const AcceptableUsePolicy = lazy(() => import("@/pages/AcceptableUsePolicy"));
const AccountContact = lazy(() => import("@/pages/AccountContact"));
const AccountUser = lazy(() => import("@/pages/AccountUser"));
const AddFunds = lazy(() => import("@/pages/AddFunds"));
const Affiliate = lazy(() => import("@/pages/Affiliate"));
const ApiCredentials = lazy(() => import("@/pages/APICredentials"));
const AutoRenew = lazy(() => import("@/pages/AutoRenew"));
const ClientArea = lazy(() => import("@/pages/ClientArea"));
const Clone = lazy(() => import("@/pages/Clone"));
const CpuVsNumber = lazy(() => import("@/pages/CpuVsNumber"));
const Dashboard = lazy(() => import("@/pages/Dashboard"));
const Deploy = lazy(() => import("@/pages/Deploy"));
const DeployDedicatedServer = lazy(
  () => import("@/pages/DeployDedicatedServer"),
);
const EmailHistory = lazy(() => import("@/pages/EmailHistory"));
const Firewall = lazy(() => import("@/pages/Firewall"));
const Invoices = lazy(() => import("@/pages/Invoices"));
const IpManagement = lazy(() => import("@/pages/IpManagement"));
const KeysManagement = lazy(() => import("@/pages/KeyManagements"));
const MainPage = lazy(() => import("@/pages/MainPage"));
const MalaysiaDedicated = lazy(() => import("@/pages/MalaysiaDedicated"));
const MemberRanking = lazy(() => import("@/pages/MemberRanking"));
const OrderId = lazy(() => import("@/pages/OrderId"));
const PaymentMethod = lazy(() => import("@/pages/PaymentMethods"));
const PopularAppsAndWeb = lazy(() => import("@/pages/PopularAppsAndWeb"));
const Pricing = lazy(() => import("@/pages/Pricing"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const RefundRequest = lazy(() => import("@/pages/RefundRequest"));
const RefundRequestHistory = lazy(() => import("@/pages/RefundRequestHistory"));
const RegisterDomain = lazy(() => import("@/pages/RegisterDomain"));
const Reseller = lazy(() => import("@/pages/Reseller"));
const Service = lazy(() => import("@/pages/Service"));
const Status = lazy(() => import("@/pages/Status"));
const Submitticket = lazy(() => import("@/pages/Submitticket"));
const SupportTickets = lazy(() => import("@/pages/SupportTickets"));
const TermOfService = lazy(() => import("@/pages/TermOfService"));
const UserPassword = lazy(() => import("@/pages/UserPassword"));
const UserProfile = lazy(() => import("@/pages/UserProfile"));
const UserSecurity = lazy(() => import("@/pages/UserSecurity"));
const WeeklyOffsiteBackup = lazy(() => import("@/pages/Weekly-Offsite-Backup"));
const WhyChooseEvoxt = lazy(() => import("@/pages/WhyChooseEvoxt"));
const WindowOrLinux = lazy(() => import("@/pages/WindowOrLinux"));
const Login = lazy(() => import("@/pages/Login"));
const Register = lazy(() => import("@/pages/Register"));
const ClimateStripe = lazy(() => import("@/pages/ClimateStripe"));
const API = lazy(() => import("@/pages/API"));
import {
  RouteObject,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LayoutAuth from "@/layouts/LayoutAuth";

const rootRoute: RouteObject[] = [
  {
    path: "/",
    element: <LayoutMain />,
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <MainPage />
          </Suspense>
        ),
      },
      {
        path: "clone",
        element: (
          <Suspense>
            <Clone />
          </Suspense>
        ),
      },
      {
        path: "firewall",
        element: (
          <Suspense>
            <Firewall />
          </Suspense>
        ),
      },
      {
        path: "ip-management",
        element: (
          <Suspense>
            <IpManagement />
          </Suspense>
        ),
      },
      {
        path: "weekly-offsite-backup",
        element: (
          <Suspense>
            <WeeklyOffsiteBackup />
          </Suspense>
        ),
      },
      {
        path: "membership-ranking",
        element: (
          <Suspense>
            <MemberRanking />
          </Suspense>
        ),
      },
      {
        path: "pricing",
        element: (
          <Suspense>
            <Pricing />
          </Suspense>
        ),
      },
      {
        path: "about-us",
        element: (
          <Suspense>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "terms-of-service",
        element: (
          <Suspense>
            <TermOfService />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/deploy",
    element: <LayoutDeploy />,
    children: [
      {
        index: true,
        path: "dashboard",
        element: (
          <Suspense>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: "service",
        element: (
          <Suspense>
            <Service />
          </Suspense>
        ),
      },
      {
        path: "",
        element: (
          <Suspense>
            <Deploy />
          </Suspense>
        ),
      },
      {
        path: "dedicated-server",
        element: (
          <Suspense>
            <DeployDedicatedServer />
          </Suspense>
        ),
      },
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
      {
        path: "users",
        element: (
          <Suspense>
            <AccountUser />
          </Suspense>
        ),
      },
      {
        path: "paymentmethods",
        element: (
          <Suspense>
            <PaymentMethod />
          </Suspense>
        ),
      },
      {
        path: "contacts",
        element: (
          <Suspense>
            <AccountContact />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/autorenewal_config",
    element: <LayoutDeploy />,
    children: [
      {
        path: "",
        element: (
          <Suspense>
            <AutoRenew />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/user",
    element: <LayoutDeploy />,
    children: [
      {
        path: "profile",
        element: (
          <Suspense>
            <UserProfile />
          </Suspense>
        ),
      },
      {
        path: "password",
        element: (
          <Suspense>
            <UserPassword />
          </Suspense>
        ),
      },
      {
        path: "security",
        element: (
          <Suspense>
            <UserSecurity />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/keysmanagement",
    element: <LayoutDeploy />,
    children: [
      {
        path: "",
        element: (
          <Suspense>
            <KeysManagement />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/clientarea-email-history",
    element: <LayoutDeploy />,
    children: [
      {
        path: "",
        element: (
          <Suspense>
            <EmailHistory />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/apicredentials",
    element: <LayoutDeploy />,
    children: [
      {
        path: "",
        element: (
          <Suspense>
            <ApiCredentials />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/affiliates",
    element: <LayoutDeploy />,
    children: [
      {
        path: "",
        element: (
          <Suspense>
            <Affiliate />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/reseller",
    element: <LayoutDeploy />,
    children: [
      {
        path: "",
        element: (
          <Suspense>
            <Reseller />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/status",
    element: <LayoutStatus />,
    children: [
      {
        path: "",
        element: (
          <Suspense>
            <Status />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/cpu-clock-speed-vs-number-of-cpu-cores",
    element: <LayoutMain />,
    children: [
      {
        path: "",
        element: (
          <Suspense>
            <CpuVsNumber />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/windows-server-or-linux-server",
    element: <LayoutMain />,
    children: [
      {
        path: "",
        element: (
          <Suspense>
            <WindowOrLinux />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/popular-web-apps-and-websites-to-deploy",
    element: <LayoutMain />,
    children: [
      {
        path: "",
        element: (
          <Suspense>
            <PopularAppsAndWeb />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/malaysia-dedicated-server",
    element: <LayoutMain />,
    children: [
      {
        path: "",
        element: (
          <Suspense>
            <MalaysiaDedicated />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/why-choose-evoxt",
    element: <LayoutMain />,
    children: [
      {
        path: "",
        element: (
          <Suspense>
            <WhyChooseEvoxt />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/acceptable-use-policy",
    element: <LayoutMain />,
    children: [
      {
        path: "",
        element: (
          <Suspense>
            <AcceptableUsePolicy />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/privacy-policy",
    element: <LayoutMain />,
    children: [
      {
        path: "",
        element: (
          <Suspense>
            <PrivacyPolicy />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <LayoutAuth />,
    children: [
      {
        path: "",
        element: (
          <Suspense>
            <Login />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/register",
    element: <LayoutAuth />,
    children: [
      {
        path: "",
        element: (
          <Suspense>
            <Register />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/climate-stripe",
    element: (
      <Suspense>
        <ClimateStripe />
      </Suspense>
    ),
  },
  {
    path: "/api",
    element: (
      <Suspense>
        <API />
      </Suspense>
    ),
  },
];

const router = createBrowserRouter(rootRoute);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
