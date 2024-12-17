import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
  const [showLogin, setShowLogin] = useState(true);

  useEffect(() => {
    const form = document.querySelector("form");
    if (form) form.focus();
  }, [showLogin]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
        role="form"
        aria-labelledby="auth-form"
      >
        {showLogin ? (
          <Login toggleForm={() => setShowLogin(false)} />
        ) : (
          <Register toggleForm={() => setShowLogin(true)} />
        )}
      </div>
    </div>
  );
};
const Login = ({ toggleForm }) => {
  const [_, setCookies] = useCookies(["access_token"]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); 

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isValidEmail(username)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters.");
      return;
    }

    try {
      const result = await axios.post(
        "https://recipe-wnrc.onrender.com/auth/login",
        {
          username,
          password,
        }
      );

      setCookies("access_token", result.data.token);
      window.localStorage.setItem("userID", result.data.userID);
      navigate("/");
    } catch (error) {
      console.error(error);
      setErrorMessage("Failed to login. Please check your credentials.");
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="auth-container">
      <form
        onSubmit={handleSubmit}
        className="space-y-4"
        aria-labelledby="login-form"
        tabIndex={-1}
      >
        <h2
          id="login-form"
          className="text-2xl font-semibold text-center text-gray-800"
        >
          Login
        </h2>

       
        {errorMessage && (
          <div className="text-red-500 text-center mb-4">{errorMessage}</div>
        )}

        <div className="form-group">
          <label
            htmlFor="username"
            className="text-sm font-medium text-gray-700"
          >
            Username (Email):
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            aria-describedby="username-helper"
          />
          <p id="username-helper" className="sr-only">
            Please enter your username (email)
          </p>
        </div>

        <div className="form-group">
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-700"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            aria-describedby="password-helper"
          />
          <p id="password-helper" className="sr-only">
            Please enter your password
          </p>
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
          aria-label="Login"
        >
          Login
        </button>
      </form>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          Don't have an account?{" "}
          <button
            onClick={toggleForm}
            className="text-blue-500 hover:text-blue-700 font-semibold"
            aria-label="Switch to Register Form"
          >
            Sign up now
          </button>
        </p>
      </div>
    </div>
  );
};

const Register = ({ toggleForm }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); 

  const [_, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Email validation
    if (!isEmailValid(username)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    // Password validation
    if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters.");
      return;
    }

    try {
      await axios.post("https://recipe-wnrc.onrender.com/auth/register", {
        username,
        password,
      });
      alert("Registration Completed! Now login.");
      toggleForm();
    } catch (error) {
      console.error(error);
      setErrorMessage("Failed to register. Please try again later.");
    }
  };

  return (
    <div className="auth-container">
      <form
        onSubmit={handleSubmit}
        className="space-y-4"
        aria-labelledby="register-form"
      >
        <h2
          id="register-form"
          className="text-2xl font-semibold text-center text-gray-800"
        >
          Register
        </h2>

       
        {errorMessage && (
          <div className="text-red-500 text-center mb-4">{errorMessage}</div>
        )}

        <div className="form-group">
          <label
            htmlFor="username"
            className="text-sm font-medium text-gray-700"
          >
            Username (Email):
          </label>
          <input
            type="email"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            aria-describedby="email-helper"
          />
          <p id="email-helper" className="sr-only">
            Please enter your email address
          </p>
        </div>

        <div className="form-group">
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-700"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            aria-describedby="password-helper"
          />
          <p id="password-helper" className="sr-only">
            Please enter your password
          </p>
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
          aria-label="Register"
        >
          Register
        </button>
      </form>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <button
            onClick={toggleForm}
            className="text-blue-500 hover:text-blue-700 font-semibold"
            aria-label="Switch to Login Form"
          >
            Login now
          </button>
        </p>
      </div>
    </div>
  );
};
