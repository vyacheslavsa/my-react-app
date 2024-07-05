import { Navigate, createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Dashboard from "../pages/Dashboard";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/dashboard" replace={true} />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace={true} />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/settings",
        element: <div>Settings</div>,
      },
      {
        path: "/about",
        element: <div>About</div>,
      },
    ],
  },
]);
