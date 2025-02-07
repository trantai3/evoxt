import {
  RouteObject,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const rootRoute: RouteObject[] = [
  {
    path: "/",
  },
];

const router = createBrowserRouter(rootRoute);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
