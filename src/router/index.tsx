import LayoutDeploy from "@/layouts/LayoutDeploy";
import { LayoutMain } from "@/layouts/LayoutMain";
import AboutUs from "@/pages/AboutUs";
import Clone from "@/pages/Clone";
import Dashboard from "@/pages/Dashboard";
import Firewall from "@/pages/Firewall";
import IpManagement from "@/pages/IpManagement";
import MainPage from "@/pages/MainPage";
import MemberRanking from "@/pages/MemberRanking";
import Pricing from "@/pages/Pricing";
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
    children: [{ index: true, element: <Dashboard /> }],
  },
];

const router = createBrowserRouter(rootRoute);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
