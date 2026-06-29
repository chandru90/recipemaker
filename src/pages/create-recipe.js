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

//     <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10">
//       {/* <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-xl"> */}

// <div
//   className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat w-[70%]"

// >
//   <div className="bg-white/70 black/50 rounded-lg shadow-lg p-8 w-full max-w-6xl "  style={{ backgroundImage: "url('menu.png')" }}>
    
//         <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-6 ">
//           Create a New Recipe
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-6">

//           <div className="bg-white/90 ">
//             <label
//               htmlFor="name"
//               className="block text-lg font-medium text-gray-700"
//             >
//               Recipe Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={recipe.name}
//               onChange={handleChange}
//               className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 "
//               required
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="description"
//               className="block text-lg font-medium text-gray-700"
//             >
//               Description
//             </label>
//             <textarea
//               id="description"
//               name="description"
//               value={recipe.description}
//               onChange={handleChange}
//               rows="4"
//               className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//               required
//             ></textarea>
//           </div>

//           <div>
//             <label className="block text-lg font-medium text-gray-700">
//               Ingredients
//             </label>
//             {recipe.ingredients.map((ingredient, index) => (
//               <div key={index} className="flex space-x-2">
//                 <input
//                   type="text"
//                   name="ingredients"
//                   value={ingredient}
//                   onChange={(event) => handleIngredientChange(event, index)}
//                   className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//                   placeholder={`Ingredient ${index + 1}`}
//                   required
//                 />
//               </div>
//             ))}
//             <button
//               type="button"
//               onClick={handleAddIngredient}
//               className="mt-3 text-sm text-indigo-600 hover:underline"
//             >
//               Add Ingredient
//             </button>
//           </div>

//           <div>
//             <label
//               htmlFor="instructions"
//               className="block text-lg font-medium text-gray-700"
//             >
//               Instructions
//             </label>
//             <textarea
//               id="instructions"
//               name="instructions"
//               value={recipe.instructions}
//               onChange={handleChange}
//               rows="6"
//               className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//               required
//             ></textarea>
//           </div>

//           <div>
//             <label
//               htmlFor="image"
//               className="block text-lg font-medium text-gray-700"
//             >
//               Recipe Image
//             </label>
//             <input
//               type="file"
//               id="image"
//               name="image"
//               onChange={handleImageChange}
//               className="mt-2 block w-full p-3 text-sm text-gray-500 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="cookingTime"
//               className="block text-lg font-medium text-gray-700"
//             >
//               Cooking Time (minutes)
//             </label>
//             <input
//               type="number"
//               id="cookingTime"
//               name="cookingTime"
//               value={recipe.cookingTime}
//               onChange={handleChange}
//               className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//               required
//             />
//           </div>

//           <div>
//             <button
//               type="submit"
//               className="w-full py-3 mt-4 bg-indigo-600 text-white font-semibold text-lg rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             >
//               Create Recipe
//             </button>
//           </div>
//         </form>
//   </div>





//       </div>
      
//     </div>

return (
  // <div
  //   className="min-h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat py-10"
  //   style={{ backgroundImage: "url('/menu.png')" }}
  // >
  //   <div className="w-full max-w-4xl bg-white/80 backdrop-blur-md rounded-xl shadow-2xl p-8">
  <div
  className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
  style={{ backgroundImage: "url('/menu.png')" }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-white/70" >


      <form onSubmit={handleSubmit} className="space-y-6 mt-10">
        {/* Recipe Name */}
        <div className="flex flex-row">
          <label
            htmlFor="name"
            className="block text-2xl font-medium text-gray-700 ml-72 mt-4"
          >
            Recipe Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={recipe.name}
            onChange={handleChange}
            className="mt-2 block w-96 ml-10 p-3 bg-white  text-black border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        {/* Description */}
        <div className="flex flex-row ml-72">
          <label
            htmlFor="description"
            className="block text-2xl font-medium text-gray-700   mt-16"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={recipe.description}
            onChange={handleChange}
            rows={4}
            className="mt-2 block ml-16 w-96 p-3 bg-white text-black border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          ></textarea>
        </div>

        {/* Ingredients */}
        <div className="flex flex-row ml-32">
          <label className="block text-2xl font-medium text-gray-700  ml-40">
            Ingredients
          </label>

          {recipe.ingredients.map((ingredient, index) => (
            <div key={index} className="mt-2">
              <input
                type="text"
                name="ingredients"
                value={ingredient}
                onChange={(event) => handleIngredientChange(event, index)}
                placeholder={`Ingredient ${index + 1}`}
                className="block w-full p-3 bg-white text-black border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
          ))}

          <button
            type="button"
            onClick={handleAddIngredient}
            className="mt-3 text-white  bg-gray-700 rounded-md hover:text-indigo-800 font-medium  ml-40 p-3"
          >
            + Add Ingredient
          </button>
        </div>

        {/* Instructions */}
        <div className="flex flex-row ml-32 ">
          <label
            htmlFor="instructions"
            className="block text-2xl font-medium text-gray-700  ml-40 mt-20"
          >
            Instructions
          </label>
          <textarea
            id="instructions"
            name="instructions"
            value={recipe.instructions}
            onChange={handleChange}
            rows={6}
            className="mt-2  ml-16 block w-96 p-3 bg-white text-black border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          ></textarea>
        </div>

        {/* Image Upload */}
        <div className="flex flex-row">
          <label
            htmlFor="image"
            className="block text-2xl font-medium text-gray-700  ml-72 mt-4"
          >
            Recipe Image
          </label>

          <input
            type="file"
            id="image"
            name="image"
            onChange={handleImageChange}
            className="mt-2 ml-12 block w-96 p-3 bg-white text-black border border-gray-300 rounded-md shadow-sm file:bg-gray-700 file:text-white file:border-0 file:px-4 file:py-2 file:rounded-md file:cursor-pointer"
          />
        </div>

        {/* Cooking Time */}
        <div className="flex flex-row ml-20 ">
          <label
            htmlFor="cookingTime"
            className="block text-2xl font-medium text-gray-700  ml-28  mt-4"
          >
            Cooking Time (minutes)
          </label>

          <input
            type="number"
            id="cookingTime"
            name="cookingTime"
            value={recipe.cookingTime}
            onChange={handleChange}
            className="mt-2 block w-80 ml-8 p-3 bg-white text-black border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-80 py-3 bg-gray-600 text-white text-lg font-semibold rounded-md hover:bg-gray-700 transition duration-300"
        >
          Create Recipe
        </button>
      </form>
    </div>
  </div>
);
  
};
