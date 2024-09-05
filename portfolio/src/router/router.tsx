import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Detail } from "../pages/Detail";
import { DefaultLayout } from "../layout/DefaultLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "detail/:id",
        element: <Detail />,
      },
    ],
  },
]);
