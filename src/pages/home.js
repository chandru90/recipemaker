import React, { useEffect, useState, useCallback } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";
import { Link } from "react-router-dom";

export const Home = () => {
  // const [recipes, setRecipes] = useState([]);
  // const [savedRecipes, setSavedRecipes] = useState([]);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(true); 

  // const userID = useGetUserID();

  // const fetchRecipes = useCallback(async () => {
    
  //   try {
  //     const response = await axios.get(
  //       "https://recipe-wnrc.onrender.com/recipes"
  //     );
  //     localStorage.setItem("recipes", JSON.stringify(response.data));
  //     setRecipes(response.data);
  //     setLoading(false);
  //   } catch (err) {
  //     console.error(err);
  //     setError("Failed to load recipes. Please try again later.");
  //     setLoading(false);
  //   }
  // }, []);

  // const fetchSavedRecipes = useCallback(async () => {
  //   if (userID) {
  //     try {
  //       const response = await axios.get(
  //         `https://recipe-wnrc.onrender.com/recipes/savedRecipes/${userID}`
  //       );
  //       setSavedRecipes(response.data.savedRecipes);
  //     } catch (err) {
  //       console.error(err);
  //       setError("Failed to load saved recipes. Please try again later.");
  //     }
  //   }
  // }, [userID]);

  // useEffect(() => {
  //   fetchRecipes();
  //   fetchSavedRecipes();
  // }, [fetchRecipes, fetchSavedRecipes]);

  // const saveRecipe = async (recipeID) => {
  //   if (!userID) {
  //     alert("Please log in to save the recipe.");
  //     return;
  //   }

  //   try {
  //     const response = await axios.put(
  //       "https://recipe-wnrc.onrender.com/recipes",
  //       {
  //         recipeID,
  //         userID,
  //       }
  //     );
  //     setSavedRecipes(response.data.savedRecipes);
  //   } catch (err) {
  //     console.error(err);
  //     setError("Failed to save the recipe. Please try again later.");
  //   }
  // };

  // const isRecipeSaved = (id) => savedRecipes.includes(id);
// return (
//   // <div
//   //   className="min-h-screen bg-cover bg-center relative"
//   //   style={{ backgroundImage: `url("mealrecipe.jpg")` }}
//   // >
//   //   {/* Dark overlay */}
//   //   <div className="absolute inset-0 bg-black/60" />

//   //   {/* Content */}
//   //   <div className="relative z-10 max-w-7xl mx-auto px-4 py-10 text-white">
      
//   //     {/* Header */}
//   //     <h1 className="text-5xl font-bold text-center mb-10 tracking-wide">
//   //       Recipes
//   //     </h1>

//   //     {/* Error */}
//   //     {error && (
//   //       <div className="text-red-400 text-center mb-6">
//   //         {error}
//   //       </div>
//   //     )}

//   //     {/* Loading */}
//   //     {loading ? (
//   //       <div className="flex flex-col items-center mt-20">
//   //         <div className="loader" />
//   //         <p className="mt-4 text-white/80">Loading recipes...</p>
//   //       </div>
//   //     ) : (
//   //       <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//   //         {recipes.map((recipe) => (
//   //           <div
//   //             key={recipe._id}
//   //             className="bg-white/95 text-gray-800 rounded-2xl shadow-lg overflow-hidden hover:scale-[1.03] transition-transform duration-300"
//   //           >
//   //             <Link to={`/recipe/${recipe._id}`} className="block">
                
//   //               {/* Image */}
//   //               {recipe.imageUrl && (
//   //                 <div className="h-40 w-full overflow-hidden">
//   //                   <img
//   //                     src={recipe.imageUrl}
//   //                     alt={recipe.name}
//   //                     loading="lazy"
//   //                   />
//   //                 </div>
//   //               )}

//   //               {/* Content */}
//   //               <div className="p-5 text-center">
//   //                 <h2 className="text-xl font-bold text-blue-600 mb-2">
//   //                   {recipe.name}
//   //                 </h2>

//   //                 <p className="text-sm text-gray-600 mb-2">
//   //                   {recipe.description}
//   //                 </p>

//   //                 <p className="text-xs text-gray-500">
//   //                   Cooking Time: {recipe.cookingTime} mins
//   //                 </p>
//   //               </div>
//   //             </Link>

//   //             {/* Button */}
//   //             <div className="p-4 pt-0">
//   //               <button
//   //                 onClick={() => saveRecipe(recipe._id)}
//   //                 disabled={!userID || isRecipeSaved(recipe._id)}
//   //                 className={`w-full py-2 rounded-lg font-semibold transition ${
//   //                   !userID || isRecipeSaved(recipe._id)
//   //                     ? "bg-gray-400 cursor-not-allowed"
//   //                     : "bg-blue-500 hover:bg-blue-600 text-white"
//   //                 }`}
//   //               >
//   //                 {!userID
//   //                   ? "Save"
//   //                   : isRecipeSaved(recipe._id)
//   //                   ? "Saved"
//   //                   : "Save"}
//   //               </button>
//   //             </div>
//   //           </div>
//   //         ))}
//   //       </div>
//   //     )}
//   //   </div>
//   // </div>

// <div className="flex flex-col gap-10">
//   <div className="bg-green-700 mt-12 rounded-lg ml-8 mr-8">
//     <div className="flex flex-col md:flex-row items-center">

//       {/* Image */}
//      <div className="md:w-[40%] w-[60%]  flex justify-center items-center">
//   {/* <img
//     src="sampimg.webp"
//     alt="Healthy Food"
//     className="w-[60%] h-80 rounded-lg object-cover
//              animate-float transition-transform duration-500
//              hover:scale-110"
//   />
// </div> */}
// <img
//   src="sampimg.webp"
//   alt="Healthy Food"
//   className="w-[60%] h-80 rounded-lg object-cover
//              opacity-0
//              animate-[zoomIn_1s_ease-out_forwards]
//              hover:scale-110 transition-transform duration-500"/>

//       {/* Content */}
//       <div className="md:w-[60%] w-full p-8 text-white">
//         <p className="text-lg leading-8  mt-12">
//           <strong>Discover Delicious Recipes & Eat Healthier</strong>
         

//           Cook smarter, eat better, and achieve your nutrition goals with our
//           all-in-one Recipe & Nutrition platform. Explore thousands of delicious
//           recipes, create and save your own favorites, and receive personalized
//           meal recommendations based on your daily nutritional needs.
          

//           Whether you're looking for quick meals, healthy recipes, or balanced
//           meal plans, our platform helps you make every meal both nutritious and
//           enjoyable.
//           <br /><br />

//           ✔ Explore Healthy Recipes <br />
//           ✔ Create & Share Your Own Dishes <br />
//           ✔ Track Nutritional Information <br />
//           ✔ Plan Balanced Meals with Smart Recipe Recommendations
//           <br /><br />

//           <strong>Start Your Healthy Cooking Journey Today!</strong>
//         </p>
//       </div>

//     </div>
//   </div>
// </div>



// );
// };
return (
  <div className="flex flex-col gap-10">
    <div className="bg-green-800 mt-4 rounded-lg mx-8 shadow-xl gap-10">
      <div className="flex flex-col md:flex-row items-center">

        {/* Image */}
        <div className="md:w-[45%] w-full flex justify-center items-center p-6 gap-10">
          <img
            src="samplintroimg.jpg"
            alt="Healthy Food"
            className="w-[60%] h-80 rounded-2xl object-cover
                       shadow-2xl
                       animate-float
                       animate-zoomIn
                       transition-all duration-500
                       hover:scale-110 hover:rotate-2"
          />
        </div>

        {/* Content */}
        <div className="md:w-[55%] w-full p-8 text-white">
          <h1 className="text-4xl font-bold mb-6">
            Discover Delicious Recipes & Eat Healthier
          </h1>

          <p className="text-lg leading-8">
            Cook smarter, eat better, and achieve your nutrition goals with our
            all-in-one Recipe & Nutrition platform.

    

            Explore thousands of delicious recipes, create and save your own
            favorites, and receive personalized meal recommendations based on
            your daily nutritional needs.


            Whether you're looking for quick meals, healthy recipes, or balanced
            meal plans, our platform helps you make every meal both nutritious
            and enjoyable.

          

            ✔ Explore Healthy Recipes
            <br />
            ✔ Create & Share Your Own Dishes
            <br />
            ✔ Track Nutritional Information
            <br />
            ✔ Plan Balanced Meals with Smart Recipe Recommendations

            <br />
            <br />

            <span className="font-bold text-yellow-300">
              Start Your Healthy Cooking Journey Today!
            </span>
          </p>
        </div>

      </div>
  
    </div>
        <div className=" mt-10 text-white text-lg leading-8 ml-10 mr-4 bg-green-900">

  <h1 className="text-4xl ">  Why Nutrition Matters</h1>
<p>



Good nutrition is the foundation of a healthy lifestyle. Eating a balanced diet provides your body with the essential nutrients it needs to produce energy, support growth, strengthen immunity, and maintain overall well-being. Choosing meals with the right balance of proteins, carbohydrates, healthy fats, vitamins, and minerals can help improve physical health, mental focus, and long-term wellness.

How Recipe Planning Helps

Recipe planning makes healthy eating easier by helping you organize your meals in advance. Instead of deciding what to cook every day, you can create balanced meal plans that match your nutritional needs and health goals. It also helps save time, reduce food waste, manage grocery shopping efficiently, and maintain portion control. With personalized recipe recommendations, meal planning becomes simple, convenient, and enjoyable.

Benefits of Healthy Meal Planning


<br/><br/><br/>
<br/>

</p>


</div>
<div>
  <div>
<p className=" mt-6 text-white text-lg leading-8 bg-green-900 ml-10 mr-10">
🥗 Balanced Nutrition
Choose recipes that provide the right mix of essential nutrients for a healthier lifestyle.
<br/>
⏱️ Save Time
Plan your meals in advance and reduce the stress of deciding what to cook every day.
<br/>
🛒 Reduce Food Waste
Buy only the ingredients you need and make better use of your groceries.
<br/>
❤️ Support Your Health Goals
Whether your goal is weight management, muscle building, or simply eating healthier, planned meals help you stay on track.
<br/>
🍽️ Enjoy Variety
Explore new recipes and create diverse, nutritious meals without repeating the same dishes.
<br/>
📊 Track Nutritional Intake
Monitor calories, protein, carbohydrates, fats, and other nutrients to make informed food choices.
</p>
</div>
</div>

  </div>
);
}