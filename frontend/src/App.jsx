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
          path: "/register",
          element: <RegisterPage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/track-case",
          element: <TrackCasePage />,
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
          path: "/open-case",
          element: <ReportCasePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
