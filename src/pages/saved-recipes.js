import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";
import { Link } from "react-router-dom";

export const SavedRecipes = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const userID = useGetUserID();

  useEffect(() => {
    if (!userID) {
      console.log("User ID is not available");
      return;
    }

    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(
          `https://recipe-wnrc.onrender.com/recipes/savedRecipes/${userID}`
        );

        console.log("savedrecipes", response.data.savedRecipes);

        if (response.data && response.data.savedRecipes) {
          const recipeDetailsPromises = response.data.savedRecipes.map(
            (recipeId) =>
              axios.get(`https://recipe-wnrc.onrender.com/recipes/${recipeId}`)
          );

          const recipeDetailsResponses = await Promise.all(
            recipeDetailsPromises
          );
          console.log("new", recipeDetailsResponses);

          const fetchedRecipes = recipeDetailsResponses.map((res) => res.data);
          setSavedRecipes(fetchedRecipes);
        } else {
          console.log("No saved recipes found in the response.");
        }
      } catch (err) {
        console.log("Error fetching saved recipes:", err);
        setError("Failed to load saved recipes.");
      } finally {
        setLoading(false);
      }
    };

    if (userID) {
      fetchSavedRecipes();
    }
  }, [userID]);

  if (loading) {
    return <p className="text-center text-xl text-gray-600">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-xl text-red-600">{error}</p>;
  }

  return (
    <div className="saverecipe p-8 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-8">Saved Recipes</h1>

      {savedRecipes.length === 0 ? (
        <p className="text-center text-xl text-gray-600">
          No saved recipes found.
        </p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {savedRecipes.map((recipe) => (
            <li
              key={recipe._id || recipe.name}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Link to={`/recipe/${recipe._id}`} className="block">
                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-blue-500 text-center">
                    {recipe.name}
                  </h2>
                </div>

                <div className="mb-4">
                  {recipe.imageUrl && (
                    <img
                      src={recipe.imageUrl}
                      alt={recipe.name}
                      className="w-full h-32 object-cover rounded-lg mb-2"
                    />
                  )}
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-700 text-center">
                    {recipe.instructions.slice(0, 100)}...
                  </p>
                </div>

                <p className="text-xs text-gray-600 text-center">
                  Cooking Time: {recipe.cookingTime} min
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
