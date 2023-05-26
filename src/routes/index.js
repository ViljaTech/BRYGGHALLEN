import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../pages/home/Home";
import LandingPage from "../pages/landingpage/LandingPage";

function AppRoutes() {
  return useRoutes([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ]);
}

export default AppRoutes;
