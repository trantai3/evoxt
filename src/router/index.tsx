import { LayoutMain } from "@/layouts/LayoutMain";
import Clone from "@/pages/Clone";
import Firewall from "@/pages/Firewall";
import IpManagement from "@/pages/IpManagement";
import MainPage from "@/pages/MainPage";
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
    ],
  },
];

const router = createBrowserRouter(rootRoute);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
