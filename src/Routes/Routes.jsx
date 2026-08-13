import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";
import AppDetails from "../Pages/AppDetails/AppDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => fetch("/apps.json"),
        Component: Home,
      },
      {
        path: "/apps",
        loader: () => fetch("/apps.json"),
        Component: Apps,
      },
      {
        path: "/installation",
        Component: Installation,
      },
      {
        path: "/appDetails/:id",
        loader: async ({params})=>{
        const res = await fetch("/apps.json");
        const apps = await res.json();

        return apps.find((app)=>app.id === Number(params.id))

        },
        Component: AppDetails,
      },
    ],
  },
]);

export { router };
