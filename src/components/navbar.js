import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/auth");
  };

  return (
    <div className="bg-gray-800 text-white px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-500 to-pink-600 hover:animate-pulse hover:text-blue-300 transition duration-300 ease-in-out transform hover:scale-110"
        >
          SavorySecrets
        </Link>

        <div className="flex space-x-6">
          <Link
            to="/"
            className="text-sm text-gray-300 hover:text-white transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/create-recipe"
            className="text-sm text-gray-300 hover:text-white transition duration-200"
          >
            Create Recipe
          </Link>
          <Link
            to="/saved-recipes"
            className="text-sm text-gray-300 hover:text-white transition duration-200"
          >
            Saved Recipes
          </Link>

          {!cookies.access_token ? (
            <Link
              to="/auth"
              className="text-sm text-gray-300 hover:text-white transition duration-200"
            >
              Login/Register
            </Link>
          ) : (
            <div className="flex items-center space-x-4">
              <button
                onClick={logout}
                className="text-sm text-red-500 hover:text-red-700 transition duration-200 focus:outline-none"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
