import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout/Layout.jsx";// Import the custom Layout component
import Signup from "./components/Auth/Signup.jsx";
import Login from "./components/Auth/Login.jsx";
import Home from "./components/Home/Home.jsx";
import EmployerDashboard from "./components/Employer/EmployerDashboard.jsx";
import EmployerProfile from "./components/Employer/EmployerProfile.jsx";
import JobBoard from "./components/Jobs/JobBoard.jsx";
import JobDetails from "./components/Jobs/JobDetails.jsx";
import UserProfile from "./components/UserProfile/ProfileCard.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },{
        path: "/login",
        element: <Login />
        },
        {
          path:"/signup",
          element: <Signup />
        },
        {
          path:"/employerdashboard",
          element:<EmployerDashboard/>
        },
        {
          path:"/employerprofile",
          element:<EmployerProfile/>
        },
        {
          path: "/jobs",
          element: <JobBoard/>,
        },
        {
          path:"/jobs/:jobId",
          element:<JobDetails/>
        },
        {
          path: "/profile",
          element: <UserProfile />
        }
    ]
  },
  

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);