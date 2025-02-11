import { LayoutMain } from "@/layouts/LayoutMain";
import Clone from "@/pages/Clone";
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
    ],
  },
];

const router = createBrowserRouter(rootRoute);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
