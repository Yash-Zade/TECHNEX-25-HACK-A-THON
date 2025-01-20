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
import MentorDashboard from "./components/mentor/MentorDashboard.jsx";
import MentorProfile from "./components/mentor/MentorProfile.jsx";
import MentorSearchPage from "./components/mentor/MentorSearchPage.jsx";
import ChatInteractions from "./components/ChatInteractions/ChatInteractions.jsx";
import JobPostingForm from "./components/Jobs/PostForm.jsx";
import StartupListingMagazine from "./components/StartUp/StartupSearch.jsx";
import AdminDashboard from "./components/Admin/AdminDashboard.jsx";
import Startup from "./components/StartUp/Startup.jsx";
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
          path: "/mentor-profile/:mentorId",
          element: (
              <MentorProfile />
          ),
        },
        {
          path: "/MentorDashboard/:mentorId",
          element: (
              <MentorDashboard />
          ),
        },
        {
          path:"/profile",
          element:<UserProfile/>
        },
        {
          path:"/mentors",
          element:<MentorSearchPage/>
        },
        {
          path:"/chat",
          element:<ChatInteractions/>
        },
        {
          path:"/apply/:jobId",
          element:<JobPostingForm/>
        },
        {
          path:"/startups",
          element:<StartupListingMagazine/>
        },
        {
          path:"/AdminDashboard",
          element:<AdminDashboard/>
        },
        {
          path:"/startupDetails",
          element:<Startup/>
        }

    ]
  },
  

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);