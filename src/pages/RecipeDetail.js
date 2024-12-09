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
        setRecipe(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchRecipe();
  }, [recipeID]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div
      className="recipe-detail bg-cover bg-center p-8 bg-opacity-30"
      style={{ backgroundImage: 'url("/your-background-image.jpg")' }}
    >
      <div className="bg-black bg-opacity-60 rounded-lg p-8">
        <h1 className="text-5xl font-bold text-center text-white mb-8">
          {recipe.name}
        </h1>

        {recipe.imageUrl && (
          <img
            src={recipe.imageUrl}
            alt={recipe.name}
            className="w-full h-96 object-cover rounded-lg mb-8"
          />
        )}

        <div className="instructions text-white text-lg max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
          <p className="text-md text-gray-200 leading-relaxed">
            {recipe.instructions}
          </p>
        </div>

        <div className="text-center mt-6 mb-8">
          <p className="text-sm text-gray-400">
            Cooking Time: {recipe.cookingTime} minutes
          </p>
        </div>
      </div>

      <div className="fixed top-1/4 right-4 bg-white p-6 rounded-lg shadow-lg max-w-xs w-72">
        <h2 className="text-2xl font-semibold text-center mb-4">Ingredients</h2>
        <div className="space-y-3">
          {recipe.ingredients.map((ingredient, index) => (
            <div
              key={index}
              className="bg-blue-500 text-white p-2 rounded-lg shadow-sm hover:shadow-md transition duration-200"
            >
              <p className="text-sm text-center">{ingredient}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
