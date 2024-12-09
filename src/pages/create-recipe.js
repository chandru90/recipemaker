import React, { useState } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const CreateRecipe = () => {
  const userID = useGetUserID();
  const [cookies, _] = useCookies(["access_token"]);
  const [recipe, setRecipe] = useState({
    name: "",
    description: "",
    ingredients: [],
    instructions: "",
    image: null,
    cookingTime: 0,
    userOwner: userID,
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleIngredientChange = (event, index) => {
    const { value } = event.target;
    const ingredients = [...recipe.ingredients];
    ingredients[index] = value;
    setRecipe({ ...recipe, ingredients });
  };

  const handleAddIngredient = () => {
    const ingredients = [...recipe.ingredients, ""];
    setRecipe({ ...recipe, ingredients });
  };

  const handleImageChange = (event) => {
    setRecipe({ ...recipe, image: event.target.files[0] });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", recipe.name);
    formData.append("description", recipe.description);
    formData.append("ingredients", JSON.stringify(recipe.ingredients));
    formData.append("instructions", recipe.instructions);
    formData.append("image", recipe.image);
    formData.append("cookingTime", recipe.cookingTime);
    formData.append("userOwner", recipe.userOwner);

    try {
      await axios.post("https://recipe-wnrc.onrender.com/recipes", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: cookies.access_token,
        },
      });

      alert("Recipe Created");
      navigate("/");
    } catch (error) {
      console.error(
        "Error creating recipe:",
        error.response?.data || error.message
      );
      alert("Error creating recipe. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-xl">
        <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-6">
          Create a New Recipe
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-medium text-gray-700"
            >
              Recipe Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={recipe.name}
              onChange={handleChange}
              className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-lg font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={recipe.description}
              onChange={handleChange}
              rows="4"
              className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">
              Ingredients
            </label>
            {recipe.ingredients.map((ingredient, index) => (
              <div key={index} className="flex space-x-2">
                <input
                  type="text"
                  name="ingredients"
                  value={ingredient}
                  onChange={(event) => handleIngredientChange(event, index)}
                  className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder={`Ingredient ${index + 1}`}
                  required
                />
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddIngredient}
              className="mt-3 text-sm text-indigo-600 hover:underline"
            >
              Add Ingredient
            </button>
          </div>

          <div>
            <label
              htmlFor="instructions"
              className="block text-lg font-medium text-gray-700"
            >
              Instructions
            </label>
            <textarea
              id="instructions"
              name="instructions"
              value={recipe.instructions}
              onChange={handleChange}
              rows="6"
              className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="image"
              className="block text-lg font-medium text-gray-700"
            >
              Recipe Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleImageChange}
              className="mt-2 block w-full p-3 text-sm text-gray-500 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="cookingTime"
              className="block text-lg font-medium text-gray-700"
            >
              Cooking Time (minutes)
            </label>
            <input
              type="number"
              id="cookingTime"
              name="cookingTime"
              value={recipe.cookingTime}
              onChange={handleChange}
              className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 mt-4 bg-indigo-600 text-white font-semibold text-lg rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Create Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
