import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppliedJobs from "./pages/AppliedJobs";
import Blog from "./pages/Blog";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import Statistics from "./pages/Statistics";
import "./index.css";
import { LoadAllData, loadSingleData } from "./utils/dataLoader";
import App from "./App";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: LoadAllData,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/appliedjobs",
        element: <AppliedJobs />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/jobdetails/:jobId",
        element: <JobDetails />,
        loader: loadSingleData,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
