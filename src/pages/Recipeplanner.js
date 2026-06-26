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

    try {

      setLoading(true);
      setError("");


      const response = await axios.get(
        "https://recipe-wnrc.onrender.com/recipes/generaterecipe",
        {
          params:{
            ingredient,
            group,
            cuisine
          }
        }
      );


      let result = response.data;


      if(typeof result === "string"){

        result = result
        .replace(/```json/g,"")
        .replace(/```/g,"")
        .trim();

        result = JSON.parse(result);
      }



      if(Array.isArray(result)){

        setRecipes(result);

      }
      else if(result && Array.isArray(result.recipes)){

        setRecipes(result.recipes);

      }
      else{

        setRecipes([]);

      }


    }
    catch(err){

      console.log(err);

      setError("Failed to generate recipes");
      setRecipes([]);

    }
    finally{

      setLoading(false);

    }

  };



return (

<div
style={{
maxWidth:"1200px",
margin:"auto",
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
marginBottom:"20px",
flexWrap:"wrap"
}}
>



<input

type="text"

placeholder="Search ingredient"

value={ingredient}

onChange={
e=>setIngredient(e.target.value)
}

style={{
padding:"12px",
flex:1,
minWidth:"250px"
}}

/>



<select

value={group}

onChange={
e=>setGroup(e.target.value)
}

style={{
padding:"12px"
}}

>

<option value="all">
All
</option>

<option value="kids">
Kids
</option>

<option value="adult">
Adults
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

onChange={
e=>setCuisine(e.target.value)
}

style={{
padding:"12px"
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


<option value="mexican">
Mexican
</option>


</select>





<button

onClick={handlerecipegenerate}

disabled={loading}

style={{
padding:"12px 20px",
background:"#27ae60",
color:"white",
border:"none",
borderRadius:"8px"
}}

>

{
loading
?
"Generating..."
:
"Generate Recipes"
}

</button>


</div>




{
error &&

<p style={{color:"red"}}>
{error}
</p>

}




<div

style={{
display:"grid",
gridTemplateColumns:
"repeat(auto-fit,minmax(320px,1fr))",
gap:"20px"
}}

>


{

recipes.map((recipe,index)=>(


<div

key={index}

style={{

background:"#fff",
padding:"20px",
borderRadius:"12px",
boxShadow:"0 3px 10px #ccc"

}}

>


<h2>
{recipe.title || "Recipe"}
</h2>


<p>

<b>Category:</b>

{" "}

{recipe.category || "General"}

</p>



<p>

<b>Calories:</b>

{" "}

{recipe.calories || "N/A"}

kcal

</p>



<h3>
Ingredients
</h3>


<ul>

{
recipe.ingredients?.map(
(item,i)=>
<li key={i}>
{item}
</li>
)
}

</ul>



<h3>
Instructions
</h3>


<p>

{recipe.instructions || "No instructions"}

</p>



<h3>
Nutrition
</h3>


<ul>

{
recipe.nutritionalinfo?.map(
(item,i)=>
<li key={i}>
{item}
</li>
)
}

</ul>



{
recipe.estimatedCost &&

<p>

<b>
Cost:
</b>

{" "}

{recipe.estimatedCost}

</p>

}



</div>


))


}


</div>



</div>


);

};


export default Recipeplanner;