import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const RecipeDetail = () => {
  const [recipe, setRecipe] = useState(null);
  const { recipeID } = useParams();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(
          `https://recipe-wnrc.onrender.com/recipes/${recipeID}`
        );
        console.log(response.data)
        setRecipe(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchRecipe();
  }, [recipeID]);

  
  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: 'url("/mealrecipe.png")' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-10 text-white">

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
          {recipe.name}
        </h1>

        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-40">

          {/* Image */}
          <div>
            {recipe.imageUrl ? (
              <img
                src={recipe.imageUrl}
                alt={recipe.name}
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            ) : (
              <div className="w-full h-80 bg-gray-300 flex items-center justify-center rounded-xl">
                No Image
              </div>
            )}

            <p className="text-center text-gray-300 mt-3">
              Cooking Time: {recipe.cookingTime || "N/A"} mins
            </p>
          </div>

          {/* Ingredients */}
          <div className="bg-white/95 text-gray-800 rounded-xl p-6 shadow-lg w-72">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Ingredients
            </h2>

            {recipe.ingredients?.length > 0 ? (
              <ul className="list-disc list-inside space-y-2">
                {recipe.ingredients.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-center text-gray-500">
                No ingredients available
              </p>
            )}
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-10 bg-white/95 text-gray-800 rounded-xl p-6 shadow-lg max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Instructions
          </h2>

          {Array.isArray(recipe.instructions) &&
          recipe.instructions.length > 0 ? (
            <ol className="list-decimal list-inside space-y-2">
              {recipe.instructions.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          ) : typeof recipe.instructions === "string" &&
            recipe.instructions.trim() !== "" ? (
            <p className="text-center">{recipe.instructions}</p>
          ) : (
            <p className="text-center text-gray-500">
              No instructions available
            </p>
          )}
        </div>
      </div>
    </div>
  );
};