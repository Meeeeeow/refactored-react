import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const role = localStorage.getItem("role");
  return isLoggedIn && role ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
