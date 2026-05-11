import React, { useEffect, useState, useCallback } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";
import { Link } from "react-router-dom";

export const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); 

  const userID = useGetUserID();

  const fetchRecipes = useCallback(async () => {
    
    try {
      const response = await axios.get(
        "https://recipe-wnrc.onrender.com/recipes"
      );
      localStorage.setItem("recipes", JSON.stringify(response.data));
      setRecipes(response.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError("Failed to load recipes. Please try again later.");
      setLoading(false);
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
    className="min-h-screen bg-cover bg-center relative"
    style={{ backgroundImage: `url("mealrecipe.png")` }}
  >
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/60" />

    {/* Content */}
    <div className="relative z-10 max-w-7xl mx-auto px-4 py-10 text-white">
      
      {/* Header */}
      <h1 className="text-5xl font-bold text-center mb-10 tracking-wide">
        Recipes
      </h1>

      {/* Error */}
      {error && (
        <div className="text-red-400 text-center mb-6">
          {error}
        </div>
      )}

      {/* Loading */}
      {loading ? (
        <div className="flex flex-col items-center mt-20">
          <div className="loader" />
          <p className="mt-4 text-white/80">Loading recipes...</p>
        </div>
      ) : (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {recipes.map((recipe) => (
            <div
              key={recipe._id}
              className="bg-white/95 text-gray-800 rounded-2xl shadow-lg overflow-hidden hover:scale-[1.03] transition-transform duration-300"
            >
              <Link to={`/recipe/${recipe._id}`} className="block">
                
                {/* Image */}
                {recipe.imageUrl && (
                  <div className="h-40 w-full overflow-hidden">
                    <img
                      src={recipe.imageUrl}
                      alt={recipe.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-5 text-center">
                  <h2 className="text-xl font-bold text-blue-600 mb-2">
                    {recipe.name}
                  </h2>

                  <p className="text-sm text-gray-600 mb-2">
                    {recipe.description}
                  </p>

                  <p className="text-xs text-gray-500">
                    Cooking Time: {recipe.cookingTime} mins
                  </p>
                </div>
              </Link>

              {/* Button */}
              <div className="p-4 pt-0">
                <button
                  onClick={() => saveRecipe(recipe._id)}
                  disabled={!userID || isRecipeSaved(recipe._id)}
                  className={`w-full py-2 rounded-lg font-semibold transition ${
                    !userID || isRecipeSaved(recipe._id)
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-500 hover:bg-blue-600 text-white"
                  }`}
                >
                  {!userID
                    ? "Save"
                    : isRecipeSaved(recipe._id)
                    ? "Saved"
                    : "Save"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);
};
