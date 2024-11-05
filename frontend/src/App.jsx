import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./routes/home/homePage";
import RegisterPage from "./routes/auth/registerPage";
import LoginPage from "./routes/auth/LoginPage";
import ReportCasePage from "./routes/case/ReportCasePage";
import TrackCasePage from "./routes/case/TrackCasePage";
import PasswordResetPage from "./routes/auth/PasswordResetPage";
import Dashboard from "./routes/admin/Dashboard";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
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
      path: "/open-case",
      element: <ReportCasePage />,
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
    // {
    //   path: "/",
    //   element: <RequireAuth />,
    //   children: [
    //     {
    //       path: "/profile",
    //       element: <ProfilePage />,
    //       loader: profilePageLoader
    //     },
    //     {
    //       path: "/profile/:chatId",
    //       element: <ProfilePage />,
    //       loader: profilePageLoader
    //     },
    //     {
    //       path: "/profile/update",
    //       element: <ProfileUpdatePage />,
    //     },
    //     {
    //       path: "/add",
    //       element: <NewPostPage />,
    //     },
    //   ],
    // },
  ]);

  return <RouterProvider router={router} />;

  return (
    <>
      <HomePage />
    </>
  );
}

export default App;
