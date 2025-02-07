import { LayoutMain } from "@/layouts/LayoutMain";
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
    children: [{ index: true, element: <MainPage /> }],
  },
];

const router = createBrowserRouter(rootRoute);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
