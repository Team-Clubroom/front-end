import React from "react";
// import { useAuth } from "../context/auth.context";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes() {
  // const currentUser = useAuth();

  // return currentUser ? <Outlet /> : <Navigate to={"/home"} />;

  return <Navigate to={""} />;
}

export default PrivateRoutes;
