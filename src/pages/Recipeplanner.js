// import React, { useState } from "react";
// import axios from "axios";

// const Recipeplanner = () => {

//   const [ingredient, setIngredient] = useState("");
//   const [group, setGroup] = useState("all");
//   const [loading, setLoading] = useState(false);
//   const [recipes, setRecipes] = useState([]);
//   const [error, setError] = useState("");


//   const handlerecipegenerate = async () => {

//     try {

//       setLoading(true);
//       setError("");


//       const response = await axios.get(
//         "http://localhost:5000/generaterecipe",
//         {
//           params:{
//             ingredient,
//             group
//           }
//         }
//       );


//       console.log(
//         "API Response:",
//         response.data
//       );


//       let result = response.data;



//       // Convert string JSON from Ollama
//       if(typeof result === "string"){

//         result = result
//         .replace(/```json/g,"")
//         .replace(/```/g,"")
//         .trim();


//         result = JSON.parse(result);

//       }



//       if(Array.isArray(result)){

//         setRecipes(result);

//       }
//       else if(
//         result &&
//         Array.isArray(result.recipes)
//       ){

//         setRecipes(result.recipes);

//       }
//       else{

//         setRecipes([]);

//       }



//     }
//     catch(err){

//       console.log(
//         "API ERROR",
//         err
//       );

//       setError(
//         "Failed to generate recipes"
//       );

//       setRecipes([]);

//     }
//     finally{

//       setLoading(false);

//     }

//   };



//   return (

//     <div
//       style={{
//         maxWidth:"1200px",
//         margin:"auto",
//         padding:"20px",
//         fontFamily:"Arial"
//       }}
//     >


//       <h1>
//         🍽 Weekly Recipe Planner
//       </h1>



//       <div
//         style={{
//           display:"flex",
//           gap:"10px",
//           marginBottom:"20px",
//           flexWrap:"wrap"
//         }}
//       >


//         <input

//           type="text"

//           placeholder="Search ingredient"

//           value={ingredient}

//           onChange={
//             e=>setIngredient(e.target.value)
//           }

//           style={{
//             flex:1,
//             padding:"12px",
//             minWidth:"250px"
//           }}

//         />



//         <select

//           value={group}

//           onChange={
//             e=>setGroup(e.target.value)
//           }

//           style={{
//             padding:"12px"
//           }}

//         >

//           <option value="all">
//             All
//           </option>

//           <option value="kids">
//             Kids
//           </option>

//           <option value="adult">
//             Adults
//           </option>

//           <option value="elderly">
//             Elderly
//           </option>

//           <option value="diabetic">
//             Diabetic
//           </option>

//           <option value="budgetfriendly">
//             budgetfriendly
//           </option>

//         </select>

// <input type="check" name="cusinetype">

// <option value={northindian}>northindian</option>


// <option value={northindian}>northindian</option>
// <option value={northindian}>italian</option>
// <option value={northindian}>chinease</option>
// <option value={northindian}>balanced</option>
// </input>

//         <button

//           onClick={handlerecipegenerate}

//           disabled={loading}

//           style={{
//             padding:"12px 20px",
//             background:"#27ae60",
//             color:"white",
//             border:"none",
//             borderRadius:"8px"
//           }}

//         >

//         {
//           loading
//           ? "Generating..."
//           : "Generate Recipes"
//         }


//         </button>


//       </div>




//       {
//         error &&

//         <div
//           style={{
//             color:"red"
//           }}
//         >
//           {error}
//         </div>

//       }





//       {
//         !loading &&
//         recipes.length===0 &&

//         <h3>
//           No recipes generated
//         </h3>

//       }






//       <div

//         style={{

//           display:"grid",

//           gridTemplateColumns:
//           "repeat(auto-fit,minmax(320px,1fr))",

//           gap:"20px"

//         }}

//       >




//       {

//       recipes.map(
//         (recipe,index)=>(



//         <div

//           key={index}

//           style={{

//             background:"#fff",

//             padding:"20px",

//             borderRadius:"12px",

//             boxShadow:
//             "0 3px 10px #ccc"

//           }}

//         >



//           <h2>

//             {recipe.title || "Recipe"}

//           </h2>




//           <p>

//           <b>
//           Category:
//           </b>

//           {" "}

//           {recipe.category || "General"}

//           </p>




//           <p>

//           <b>
//           Calories:
//           </b>

//           {" "}

//           {recipe.calories || "N/A"}

//           kcal

//           </p>





//           <h3>
//             Ingredients
//           </h3>



//           <ul>


//           {

//           Array.isArray(recipe.ingredients)

//           &&

//           recipe.ingredients.map(

//             (item,i)=>(

//               <li key={i}>
//                 {item}
//               </li>

//             )

//           )

//           }


//           </ul>






//           <h3>
//             Instructions
//           </h3>


//           <p>

//           {recipe.instructions ||
//           "No instructions"}

//           </p>





//           <h3>
//             Nutritional Info
//           </h3>



//           <ul>


//           {

//           Array.isArray(
//             recipe.nutritionalinfo
//           )

//           &&

//           recipe.nutritionalinfo.map(

//             (item,i)=>(

//               <li key={i}>
//                 {item}
//               </li>

//             )

//           )

//           }


//           </ul>





//         </div>



//         )

//       )

//       }



//       </div>



//     </div>

//   );

// };


// export default Recipeplanner;




// import React, { useState } from "react";
// import axios from "axios";

// const Recipeplanner = () => {
//   const [ingredient, setIngredient] = useState("");
//   const [group, setGroup] = useState("all");
//   const [cuisine, setCuisine] = useState("balanced");

//   const [loading, setLoading] = useState(false);
//   const [recipes, setRecipes] = useState([]);
//   const [error, setError] = useState("");

//   const handlerecipegenerate = async () => {
//     setLoading(true);
//     setError("");
//     setRecipes([]);

//     try {
//       const response = await axios.get(
//         "https://recipe-wnrc.onrender.com/recipes/generaterecipe",
//         {
//           params: {
//             ingredient,
//             group,
//             cuisine,
//           },
//         }
//       );

//       console.log("API Response:", response.data);

//       let result = response.data;

//       // If backend returns JSON as string
//       if (typeof result === "string") {
//         try {
//           result = result
//             .replace(/```json/g, "")
//             .replace(/```/g, "")
//             .trim();

//           result = JSON.parse(result);
//         } catch (e) {
//           console.log("JSON Parse Error:", e);
//         }
//       }

//       if (Array.isArray(result)) {
//         setRecipes(result);
//       } else if (result.recipes && Array.isArray(result.recipes)) {
//         setRecipes(result.recipes);
//       } else if (result.data && Array.isArray(result.data)) {
//         setRecipes(result.data);
//       } else {
//         console.log("Unexpected Response:", result);
//         setRecipes([]);
//       }
//     } catch (err) {
//       console.log(err);

//       if (err.response) {
//         console.log("Server Error:", err.response.data);
//         setError(err.response.data.message || "Server Error");
//       } else {
//         setError("Failed to generate recipes");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div
//       style={{
//         maxWidth: "1200px",
//         margin: "auto",
//         padding: "20px",
//         fontFamily: "Arial",
//       }}
//     >
//       <h1>🍽 Weekly Recipe Planner</h1>

//       <div
//         style={{
//           display: "flex",
//           gap: "10px",
//           marginBottom: "20px",
//           flexWrap: "wrap",
//         }}
//       >
//         <input
//           type="text"
//           placeholder="Search ingredient"
//           value={ingredient}
//           onChange={(e) => setIngredient(e.target.value)}
//           style={{
//             padding: "12px",
//             flex: 1,
//             minWidth: "250px",
//           }}
//         />

//         <select
//           value={group}
//           onChange={(e) => setGroup(e.target.value)}
//           style={{ padding: "12px" }}
//         >
//           <option value="all">All</option>
//           <option value="kids">Kids</option>
//           <option value="adult">Adults</option>
//           <option value="elderly">Elderly</option>
//           <option value="diabetic">Diabetic</option>
//           <option value="budgetfriendly">Budget Friendly</option>
//         </select>

//         <select
//           value={cuisine}
//           onChange={(e) => setCuisine(e.target.value)}
//           style={{ padding: "12px" }}
//         >
//           <option value="balanced">Balanced</option>
//           <option value="northindian">North Indian</option>
//           <option value="southindian">South Indian</option>
//           <option value="italian">Italian</option>
//           <option value="chinese">Chinese</option>
//           <option value="mexican">Mexican</option>
//         </select>

//         <button
//           onClick={handlerecipegenerate}
//           disabled={loading}
//           style={{
//             padding: "12px 20px",
//             background: "#27ae60",
//             color: "#fff",
//             border: "none",
//             borderRadius: "8px",
//             cursor: "pointer",
//           }}
//         >
//           {loading ? "Generating..." : "Generate Recipes"}
//         </button>
//       </div>

//       {error && (
//         <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>
//       )}

//       {!loading && recipes.length === 0 && !error && (
//         <p>No recipes found.</p>
//       )}

//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
//           gap: "20px",
//         }}
//       >
//         {recipes.map((recipe, index) => (
//           <div
//             key={index}
//             style={{
//               background: "#fff",
//               padding: "20px",
//               borderRadius: "12px",
//               boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
//             }}
//           >
//             <h2>{recipe.title || "Recipe"}</h2>

//             <p>
//               <strong>Category:</strong>{" "}
//               {recipe.category || "General"}
//             </p>

//             <p>
//               <strong>Calories:</strong>{" "}
//               {recipe.calories || "N/A"} kcal
//             </p>

//             <h3>Ingredients</h3>

//             {Array.isArray(recipe.ingredients) ? (
//               <ul>
//                 {recipe.ingredients.map((item, i) => (
//                   <li key={i}>{item}</li>
//                 ))}
//               </ul>
//             ) : (
//               <p>{recipe.ingredients || "No ingredients"}</p>
//             )}

//             <h3>Instructions</h3>

//             <p>{recipe.instructions || "No instructions available"}</p>

//             <h3>Nutrition</h3>

//             {Array.isArray(recipe.nutritionalinfo) ? (
//               <ul>
//                 {recipe.nutritionalinfo.map((item, i) => (
//                   <li key={i}>{item}</li>
//                 ))}
//               </ul>
//             ) : (
//               <p>{recipe.nutritionalinfo || "No nutrition data"}</p>
//             )}

//             {recipe.estimatedCost && (
//               <p>
//                 <strong>Estimated Cost:</strong>{" "}
//                 {recipe.estimatedCost}
//               </p>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Recipeplanner;



import React, { useState } from "react";
import axios from "axios";

const Recipeplanner = () => {
  const [ingredient, setIngredient] = useState("");
  const [group, setGroup] = useState("all");
  const [cuisine, setCuisine] = useState("balanced");

  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState("");

  const handlerecipegenerate = async () => {
    setLoading(true);
    setError("");
    setRecipes([]);

    try {
      const response = await axios.get(
        "https://recipe-wnrc.onrender.com/recipes/generaterecipe",
        {
          params: {
            ingredient,
            group,
            cuisine,
          },
        }
      );


      console.log("API RESPONSE:", response.data);


      let data = response.data;


      // handle string json response
      if (typeof data === "string") {
        try {
          data = data
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();

          data = JSON.parse(data);

        } catch (e) {
          console.log("JSON ERROR", e);
        }
      }


      // Your API returns array directly
      if (Array.isArray(data)) {

        setRecipes(data);

      } 
      else if (Array.isArray(data.recipes)) {

        setRecipes(data.recipes);

      }
      else {

        setError("No recipes found");

      }


    } catch (err) {

      console.log(err);

      if (err.response) {
        setError(
          err.response.data?.message ||
          "Server Error"
        );
      } else {
        setError("Unable to connect server");
      }

    }


    setLoading(false);
  };



  return (

    <div
      style={{
        maxWidth:"1200px",
        margin:"20px auto",
        padding:"20px",
        fontFamily:"Arial"
      }}
    >


      <h1>
        🍽 Weekly Recipe Planner
      </h1>



      <div
        style={{
          display:"flex",
          gap:"10px",
          flexWrap:"wrap",
          marginBottom:"20px"
        }}
      >


        <input
          placeholder="Ingredient"
          value={ingredient}
          onChange={(e)=>setIngredient(e.target.value)}
          style={{
            padding:"10px",
            flex:1
          }}
        />



        <select
          value={group}
          onChange={(e)=>setGroup(e.target.value)}
        >
          <option value="all">
            All
          </option>

          <option value="kids">
            Kids
          </option>

          <option value="adult">
            Adult
          </option>

          <option value="elderly">
            Elderly
          </option>

          <option value="diabetic">
            Diabetic
          </option>

          <option value="budgetfriendly">
            Budget Friendly
          </option>

        </select>



        <select
          value={cuisine}
          onChange={(e)=>setCuisine(e.target.value)}
        >

          <option value="balanced">
            Balanced
          </option>

          <option value="northindian">
            North Indian
          </option>

          <option value="southindian">
            South Indian
          </option>

          <option value="italian">
            Italian
          </option>

          <option value="chinese">
            Chinese
          </option>

          <option value="mexican">
            Mexican
          </option>

        </select>



        <button
          onClick={handlerecipegenerate}
          disabled={loading}
        >

          {
            loading
            ? "Generating..."
            : "Generate Recipes"
          }

        </button>


      </div>




      {
        error &&
        <h3 style={{color:"red"}}>
          {error}
        </h3>
      }





      <div
        style={{
          display:"grid",
          gridTemplateColumns:
          "repeat(auto-fit,minmax(350px,1fr))",
          gap:"20px"
        }}
      >



      {
        recipes.map((day,index)=>(


          <div
            key={index}
            style={{
              border:"1px solid #ddd",
              borderRadius:"12px",
              padding:"20px",
              background:"#fff",
              boxShadow:
              "0 3px 10px rgba(0,0,0,.15)"
            }}
          >


            <h2>
              📅 {day.day}
            </h2>




            {
              ["breakfast","lunch","dinner"]
              .map((meal)=>(


                <div key={meal}>


                  <h3>
                    🍴 {meal.toUpperCase()}
                  </h3>



                  <h4>
                    {
                      day[meal]?.title ||
                      "No title"
                    }
                  </h4>




                  <p>

                    <b>
                      Calories:
                    </b>

                    {" "}

                    {
                      day[meal]?.calories ||
                      "N/A"
                    }

                  </p>





                  <b>
                    Ingredients
                  </b>


                  <ul>

                    {
                      day[meal]?.ingredients?.map(
                        (item,i)=>(

                          <li key={i}>
                            {item}
                          </li>

                        )
                      )
                    }

                  </ul>





                  <b>
                    Instructions
                  </b>


                  <p>
                    {
                      day[meal]?.instructions ||
                      "No instructions"
                    }
                  </p>






                  <b>
                    Nutrition
                  </b>


                  <ul>

                  {
                    day[meal]?.nutritionalinfo?.map(
                      (item,i)=>(

                        <li key={i}>
                          {item}
                        </li>

                      )
                    )
                  }

                  </ul>


                  <hr/>


                </div>


              ))
            }



          </div>


        ))
      }



      </div>


    </div>

  );

};


export default Recipeplanner;