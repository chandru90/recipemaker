import React, { useEffect, useState, useCallback } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";
import { Link } from "react-router-dom";

export const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [error, setError] = useState(null);

  const userID = useGetUserID();

  const fetchRecipes = useCallback(async () => {
    const cachedRecipes = localStorage.getItem("recipes");
    if (cachedRecipes) {
      setRecipes(JSON.parse(cachedRecipes));
    } else {
      try {
        const response = await axios.get(
          "https://recipe-wnrc.onrender.com/recipes"
        );
        localStorage.setItem("recipes", JSON.stringify(response.data));
        setRecipes(response.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load recipes. Please try again later.");
      }
    }
  }, []);

  const fetchSavedRecipes = useCallback(async () => {
    if (userID) {
      try {
        const response = await axios.get(
          `https://recipe-wnrc.onrender.com/recipes/savedRecipes/${userID}`
        );
        setSavedRecipes(response.data.savedRecipes);
      } catch (err) {
        console.error(err);
        setError("Failed to load saved recipes. Please try again later.");
      }
    }
  }, [userID]);

  useEffect(() => {
    fetchRecipes();
    fetchSavedRecipes();
  }, [fetchRecipes, fetchSavedRecipes]);

  const saveRecipe = async (recipeID) => {
    if (!userID) {
      alert("Please log in to save the recipe.");
      return;
    }

    try {
      const response = await axios.put(
        "https://recipe-wnrc.onrender.com/recipes",
        {
          recipeID,
          userID,
        }
      );
      setSavedRecipes(response.data.savedRecipes);
    } catch (err) {
      console.error(err);
      setError("Failed to save the recipe. Please try again later.");
    }
  };

  const isRecipeSaved = (id) => savedRecipes.includes(id);

  return (
    <div
      className="home bg-cover bg-center bg-opacity-40"
      style={{
        backgroundImage: `url("istockphoto-1307964333-1024x1024.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#f0f0f0",
        transition: "background-image 0.5s ease-in-out",
      }}
    >
      <div className="bg-black bg-opacity-50 min-h-screen flex justify-center items-center p-4">
        <div className="max-w-6xl w-full text-white">
          <h1 className="text-4xl font-bold text-center mb-8">Recipes</h1>

          {error && (
            <div className="text-red-500 text-center mb-4">
              <p>{error}</p>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {recipes.map((recipe) => (
              <div
                key={recipe._id}
                className="bg-white bg-opacity-90 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <Link to={`/recipe/${recipe._id}`} className="block">
                  <div className="flex flex-col items-center mb-6">
                    <h2 className="text-4xl lg:text-3xl font-semibold text-center mb-4 text-blue-500 hover:text-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg font-serif tracking-wider">
                      {recipe.name}
                    </h2>

                    {/* Optimized Image */}
                    {recipe.imageUrl && (
                      <div
                        className="image-container"
                        style={{
                          width: "160px",
                          height: "160px",
                          position: "relative",
                          backgroundColor: "#f0f0f0",
                        }}
                      >
                        <img
                          src={recipe.imageUrl}
                          alt={recipe.name}
                          className="w-full h-full object-cover rounded-lg mb-6"
                          loading="lazy"
                          style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "8px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    )}

                    <p className="text-sm text-gray-600 mb-4 text-center">
                      {recipe.description}
                    </p>
                    <p className="text-sm text-gray-600 mb-4 text-center">
                      Cooking Time: {recipe.cookingTime} minutes
                    </p>
                  </div>
                </Link>

                <button
                  onClick={() => saveRecipe(recipe._id)}
                  disabled={!userID || isRecipeSaved(recipe._id)}
                  className={`px-6 py-3 text-white font-semibold rounded-lg ${
                    !userID || isRecipeSaved(recipe._id)
                      ? "bg-gray-500"
                      : "bg-blue-500 hover:bg-blue-600"
                  } transition duration-300`}
                >
                  {!userID
                    ? "Save"
                    : isRecipeSaved(recipe._id)
                    ? "Saved"
                    : "Save"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
