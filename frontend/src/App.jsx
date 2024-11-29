import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./routes/home/homePage";
import RegisterPage from "./routes/auth/registerPage";
import LoginPage from "./routes/auth/LoginPage";
import ReportCasePage from "./routes/case/ReportCasePage";
import TrackCasePage from "./routes/case/TrackCasePage";
import TermsAndConditions from "./routes/policy/TermsAndConditions";
import PasswordResetPage from "./routes/auth/PasswordResetPage";
import Dashboard from "./routes/admin/Dashboard";
import { Layout, RequireAuth } from "./routes/layout/Layout";
import ContactUs from "./routes/policy/ContactUs";
import UserProfile from "./routes/profile/UserProfile";
import FileReportPage from "./routes/case/FileReportPage";
import FileComplaintsPage from "./routes/case/FileComplaintsPage";
import ViewCasesPage from "./routes/case/ViewCasesPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/terms",
          element:<TermsAndConditions />,
        },
        {
          path: "/contact",
          element:<ContactUs />,
        },
        {
          path: "/register",
          element: <RegisterPage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/password-reset",
          element: <PasswordResetPage />,
        },
        {
          path: "/admin",
          element: <Dashboard />,
        },
      ],
    },

    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element:<UserProfile />,
        },
        {
          path: "/open-case",
          element: <ReportCasePage />,
        },
        {
          path: "/track-case",
          element: <TrackCasePage />,
        },
        {
          path: "/file-report",
          element: <FileReportPage />,
        },
        {
          path: "/file-complaint",
          element: <FileComplaintsPage />,
        },
        {
          path: "/view-cases",
          element: <ViewCasesPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
