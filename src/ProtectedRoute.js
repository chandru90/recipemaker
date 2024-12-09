import React from "react";
import { Redirect, useNavigate } from "react-router-dom";
import { useGetUserID } from "./hooks/useGetUserID"; // Assuming you have this hook for getting user ID

const ProtectedRoute = ({ element, ...rest }) => {
  const userID = useGetUserID(); // Get user ID (or authentication status)
  const navigate = useNavigate(); // Get navigate function for redirect

  // If there's no user ID (i.e., the user is not logged in), show an alert and redirect to login
  if (!userID) {
    alert("Please log in to access this page.");
    navigate("/auth"); // Redirect to login page
    return null; // Don't render the protected component
  }

  // If the user is logged in, render the protected route component
  return element;
};

export default ProtectedRoute;
