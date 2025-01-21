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
import AnonymousForum from "./components/AnonymousForum/AnonymousForum.jsx";
import AdminDashboard from "./components/Admin/AdminDashboard.jsx";
import Startup from "./components/StartUp/Startup.jsx";
import AddStartup from "./components/StartUp/AddStartup.jsx";
import Protected from "./components/Auth/Protected.jsx";
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
          element:(
            // <Protected>
            <EmployerDashboard/>
            // </Protected>
            )
        },
        {
          path:"/employerprofile",
          element:
            (
            // <Protected>
              <EmployerProfile/>
            // </Protected>
            )
          },
        {
          path: "/jobs",
          element: <JobBoard/>,
        },
        {
          path:"/jobs/:jobId",
          element:
          (
            // <Protected>
              <JobDetails/>
            // </Protected>
          )
          },
        {
          path: "/mentor-profile/:mentorId",
          element: (
            // <Protected>
              <MentorProfile />
            // </Protected>
          ),
        },
        {
          path: "/MentorDashboard/:mentorId",
          element: (
            // <Protected>
              <MentorDashboard />
            // </Protected>
          ),
        },
        {
          path:"/profile",
          element:(
          // <Protected>
            <UserProfile/>
          // </Protected>
          )
          },
        {
          path:"/mentors",
          element:<MentorSearchPage/>
        },
        {
          path:"/chat",
          element:(
            // <Protected>
              <ChatInteractions/>
            // </Protected>
          )
        },
        {
          path:"/apply/:jobId",
          element:(
            // <Protected>
              <JobPostingForm/>
            // </Protected>
          )
          },
        {
          path:"/startups",
          element:(
              <StartupListingMagazine/>
            )
        },
        {
          path:"/forum",
          element:
          (
          // <Protected>
            <AnonymousForum/>
          // </Protected>
          )
        },
        {
          path:"/AdminDashboard",
          element:(
              // <Protected>
                <AdminDashboard/>
              // </Protected>
              )
        },
        {
          path:"/startupDetails",
          element:
          (
          // <Protected>
            <Startup/>
          // </Protected>
          )
        },
        {
          path:"/addStartup",
          element:(
            // <Protected>
              <AddStartup/>
            // </Protected>
            )
        },

    ]

  },
  

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);