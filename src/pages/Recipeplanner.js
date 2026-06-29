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


//       console.log("API RESPONSE:", response.data);


//       let data = response.data;


//       // handle string json response
//       if (typeof data === "string") {
//         try {
//           data = data
//             .replace(/```json/g, "")
//             .replace(/```/g, "")
//             .trim();

//           data = JSON.parse(data);

//         } catch (e) {
//           console.log("JSON ERROR", e);
//         }
//       }


//       // Your API returns array directly
//       if (Array.isArray(data)) {

//         setRecipes(data);

//       } 
//       else if (Array.isArray(data.recipes)) {

//         setRecipes(data.recipes);

//       }
//       else {

//         setError("No recipes found");

//       }


//     } catch (err) {

//       console.log(err);

//       if (err.response) {
//         setError(
//           err.response.data?.message ||
//           "Server Error"
//         );
//       } else {
//         setError("Unable to connect server");
//       }

//     }


//     setLoading(false);
//   };

// const hanpersonalise=async()=>{


// }
//   return (

//     <div
//       style={{
//         maxWidth:"1200px",
//         margin:"20px auto",
//         padding:"20px",
//         fontFamily:"Arial"
//       }}
//     >


//   <div
//   style={{
//     textAlign: "center",
//     marginBottom: "40px",
//   }}
// >
//   <h1
//     style={{
//       fontSize: "42px",
//       color: "#2E7D32",
//       marginBottom: "10px",
//     }}
//   >
//     🍽 Weekly Recipe Planner
//   </h1>

//   <p
//     style={{
//       color: "#666",
//       fontSize: "18px",
//     }}
//   >
//     AI Generated Healthy Weekly Meal Plan
//   </p>
// </div>



//       <div
//        style={{
//     flex:1,
//     padding:"14px",
//     borderRadius:"12px",
//     border:"1px solid #ddd",
//     fontSize:"16px",
//     outline:"none"
// }}
//       >
        


//         <input
//           placeholder=" Search based on Ingredient"
//           value={ingredient}
//           onChange={(e)=>setIngredient(e.target.value)}
//          style={{
//     flex:1,
//     padding:"14px",
//     borderRadius:"12px",
//     border:"1px solid #ddd",
//     fontSize:"16px",
//     outline:"none"
// }}
//         />



//         <select
//           value={group}
//           onChange={(e)=>setGroup(e.target.value)}
//           style={{
//     flex:1,
//     padding:"14px",
//     borderRadius:"12px",
//     border:"1px solid #ddd",
//     fontSize:"16px",
//     outline:"none"
// }}
//         >
//           <option value="all">
//             All
//           </option>

//           <option value="kids">
//             Kids
//           </option>

//           <option value="adult">
//             Adult
//           </option>

//           <option value="elderly">
//             Elderly
//           </option>

//           <option value="diabetic">
//             Diabetic
//           </option>

//           <option value="budgetfriendly">
//             Budget Friendly
//           </option>

//         </select>

// <button onClick={handlepersonalise}>
// personalise
// </button>

//         <select
//           value={cuisine}
//           onChange={(e)=>setCuisine(e.target.value)}
//           style={{
//     flex:1,
//     padding:"14px",
//     borderRadius:"12px",
//     border:"1px solid #ddd",
//     fontSize:"16px",
//     outline:"none"
// }}
//         >

//           <option value="balanced">
//             Balanced
//           </option>

//           <option value="northindian">
//             North Indian
//           </option>

//           <option value="southindian">
//             South Indian
//           </option>

//           <option value="italian">
//             Italian
//           </option>

//           <option value="chinese">
//             Chinese
//           </option>

//           <option value="mexican">
//             Mexican
//           </option>

//         </select>



//         <button
//           onClick={handlerecipegenerate}
//           disabled={loading}
//           style={{
//     flex:1,
//     padding:"14px",
//     borderRadius:"12px",
//     border:"1px solid #ddd",
//     fontSize:"16px",
//     outline:"none"
// }}
//         >

//           {
//             loading
//             ? "Generating..."
//             : "Generate Recipes"
//           }

//         </button>


//       </div>




//       {
//         error &&
//         <h3 style={{color:"red"}}>
//           {error}
//         </h3>
//       }





//       <div
//         style={{
//           display:"grid",
//           gridTemplateColumns:
//           "repeat(auto-fit,minmax(350px,1fr))",
//           gap:"20px"
//         }}
//       >



//       {
//         recipes.map((day,index)=>(


//           <div
//             key={index}
//            style={{
//     background:"#fff",
//     borderRadius:"20px",
//     overflow:"hidden",
//     boxShadow:"0 10px 30px rgba(0,0,0,.08)",
//     transition:"0.3s",
//     padding:"25px"
// }}
//           >


//             <h2>
//               📅 {day.day}
//             </h2>




//             {
//               ["breakfast","lunch","dinner"]
//               .map((meal)=>(


//                 <div key={meal}>


//                   <h3>
//                     🍴 {meal.toUpperCase()}
//                   </h3>



//                   <h4>
//                     {
//                       day[meal]?.title ||
//                       "No title"
//                     }
//                   </h4>




//                   <p>

//                     <b>
//                       Calories:
//                     </b>

//                     {" "}

//                     {
//                       day[meal]?.calories ||
//                       "N/A"
//                     }

//                   </p>





//                   <b>
//                     Ingredients
//                   </b>


//                   <ul>

//                     {
//                       day[meal]?.ingredients?.map(
//                         (item,i)=>(

//                           <li key={i}>
//                             {item}
//                           </li>

//                         )
//                       )
//                     }

//                   </ul>





//                   <b>
//                     Instructions
//                   </b>


//                   <p>
//                     {
//                       day[meal]?.instructions ||
//                       "No instructions"
//                     }
//                   </p>






//                   <b>
//                     Nutrition
//                   </b>


//                   <ul>

//                   {
//                     day[meal]?.nutritionalinfo?.map(
//                       (item,i)=>(

//                         <li key={i}>
//                           {item}
//                         </li>

//                       )
//                     )
//                   }

//                   </ul>


//                   <hr/>


//                 </div>


//               ))
//             }



//           </div>


//         ))
//       }



//       </div>


//     </div>

//   );

// };


// export default Recipeplanner;





import React, { useState } from "react";
import axios from "axios";

const Recipeplanner = () => {

  const [ingredient,setIngredient] = useState("");
  const [group,setGroup] = useState("all");
  const [cuisine,setCuisine] = useState("balanced");

  const [loading,setLoading] = useState(false);
  const [recipes,setRecipes] = useState([]);
  const [error,setError] = useState("");

  // Personalise toggle
  const [showPersonalise,setShowPersonalise] = useState(false);


  // Personalise data
  const [preferences,setPreferences] = useState({
    habits:"",
    foods:"",
    restrictions:"",
    goal:"",
    age:"",
    weight:""
  });



  const handleChange=(e)=>{

    setPreferences({
      ...preferences,
      [e.target.name]:e.target.value
    });

  };



  // const savePreferences=()=>{

  //   localStorage.setItem(
  //     "preferences",
  //     JSON.stringify(preferences)
  //   );

  //   alert("Preferences Saved");

  // };




  const handlerecipegenerate = async()=>{

    setLoading(true);
    setError("");
    setRecipes([]);


    try{


      const saved =
      JSON.parse(
        localStorage.getItem("preferences")
      ) || {};



      const response = await axios.get(
        "https://recipe-wnrc.onrender.com/recipes/generaterecipe",
   
        {
          params:{
            ingredient,
            group,
            cuisine,
         
            ...saved
          }
        }
      );



      let data=response.data;


      if(typeof data==="string"){

        data=data
        .replace(/```json/g,"")
        .replace(/```/g,"")
        .trim();

        data=JSON.parse(data);

      }



      if(Array.isArray(data))
      {
        setRecipes(data);
      }

      else if(Array.isArray(data.recipes))
      {
        setRecipes(data.recipes);
      }

      else
      {
        setError("No recipes found");
      }



    }
    catch(err){

      console.log(err);
      setError("Unable to connect server");

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


<div
style={{
textAlign:"center",
marginBottom:"30px"
}}
>

<h1
style={{
color:"#2E7D32",
fontSize:"42px"
}}
>
🍽 Weekly Recipe Planner
</h1>


<p>
AI Generated Healthy Weekly Meal Plan
</p>

</div>





{/* PERSONALISE BUTTON */}







{/* PERSONALISE FORM */}


{
showPersonalise &&


<div

style={{
maxWidth:"600px",
margin:"20px auto",
padding:"20px",
border:"1px solid #ddd",
borderRadius:"10px",
boxShadow:"0 2px 8px rgba(0,0,0,.1)",
background:"#fff"
}}

>


<h2>
Personalise Your Meal Plan
</h2>



<label>
Eating Habits
</label>

<input

name="habits"

value={preferences.habits}

onChange={handleChange}

placeholder="Enter eating habits"

style={{
width:"100%",
padding:"10px",
margin:"8px 0"
}}

/>




<label>
Favourite Foods
</label>


<textarea

name="foods"

value={preferences.foods}

onChange={handleChange}

placeholder="Favourite foods"

rows="3"

style={{
width:"100%",
padding:"10px",
margin:"8px 0"
}}

/>




<label>
Dietary Restrictions
</label>


<textarea

name="restrictions"

value={preferences.restrictions}

onChange={handleChange}

placeholder="Any restrictions"

rows="3"

style={{
width:"100%",
padding:"10px",
margin:"8px 0"
}}

/>




<label>
Weight Goal
</label>


<textarea

name="goal"

value={preferences.goal}

onChange={handleChange}

placeholder="Weight gain / loss"

rows="3"

style={{
width:"100%",
padding:"10px",
margin:"8px 0"
}}

/>





<label>
Age
</label>


<input

type="number"

name="age"

value={preferences.age}

onChange={handleChange}

style={{
width:"100%",
padding:"10px",
margin:"8px 0"
}}

/>




<label>
Weight KG
</label>


<input

type="number"

name="weight"

value={preferences.weight}

onChange={handleChange}

style={{
width:"100%",
padding:"10px",
margin:"8px 0"
}}

/>




<button

onClick={savePreferences}

style={{
padding:"12px 25px",
background:"#16a34a",
color:"white",
border:"none",
borderRadius:"8px",
cursor:"pointer"
}}

>

Save Preferences

</button>


</div>


}







{/* SEARCH */}



<div

style={{
display:"flex",
gap:"10px",
marginBottom:"30px"
}}

>


<input

placeholder="Search ingredient"

value={ingredient}

onChange={(e)=>setIngredient(e.target.value)}

style={{
flex:1,
padding:"14px",
borderRadius:"12px",
border:"1px solid #ddd"
}}

/>




<select

value={group}

onChange={(e)=>setGroup(e.target.value)}

style={{
padding:"14px"
}}

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

</select>






<select

value={cuisine}

onChange={(e)=>setCuisine(e.target.value)}

style={{
padding:"14px"
}}

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

</select>







<button

onClick={handlerecipegenerate}

style={{
padding:"14px",
background:"#2E7D32",
color:"white",
border:"none",
borderRadius:"10px"
}}

>

{
loading
?
"Generating..."
:
"Generate"
}

</button>
{/* <button

onClick={()=>setShowPersonalise(!showPersonalise)}

style={{
padding:"14px 25px",
background:"#16a34a",
color:"white",
border:"none",
borderRadius:"10px",
cursor:"pointer",
marginBottom:"20px"
}}

>

{
showPersonalise
?
"Close Personalise"
:
"Personalise"
}


</button> */}


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
padding:"25px",
borderRadius:"20px",
boxShadow:"0 10px 30px #ddd"
}}

>


<h2>
📅 {day.day}
</h2>




{
["breakfast","lunch","dinner"]
.map(meal=>(


<div key={meal}>


<h3>
🍴 {meal}
</h3>


<h4>
{day[meal]?.title}
</h4>


<p>
Calories:
{" "}
{day[meal]?.calories}
</p>


<b>
Ingredients
</b>


<ul>

{
day[meal]?.ingredients?.map((x,i)=>
<li key={i}>{x}</li>
)
}

</ul>



<b>
Instructions
</b>

<p>
{day[meal]?.instructions}
</p>



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