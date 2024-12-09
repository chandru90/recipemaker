import React from "react";
import { Redirect, useNavigate } from "react-router-dom";
import { useGetUserID } from "./hooks/useGetUserID";
const ProtectedRoute = ({ element, ...rest }) => {
  const userID = useGetUserID();
  const navigate = useNavigate();

  if (!userID) {
    alert("Please log in to access this page.");
    navigate("/auth");
    return null;
  }

  return element;
};

export default ProtectedRoute;
