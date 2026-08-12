import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
        {
            index:true,
            loader: () => fetch("/trendingApp.json"),
            Component:Home
        },
        {
         path:'/apps',
         loader: () => fetch("/apps.json"),
         Component:Apps
        },
        {
          path:'/installation',
          Component:Installation
        }
    ]
  },
  
]);

export { router };
