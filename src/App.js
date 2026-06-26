import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar";
import { Auth } from "./pages/auth";
import { CreateRecipe } from "./pages/create-recipe";
import { Home } from "./pages/home";
import { SavedRecipes } from "./pages/saved-recipes";
import { RecipeDetail } from "./pages/RecipeDetail";
import ProtectedRoute from "./ProtectedRoute";
import Recipeplanner from "./pages/Recipeplanner";
import FoodStory from "./pages/FoodStory";

function App() {
  return (
    <div className="App">
      <div className="bg-container">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
             <Route path="/generaterecipe" element={<Recipeplanner />} />
             <Route path="/foodstory" element={<FoodStory />}/>
            <Route path="/auth" element={<Auth />} />

            <Route
              path="/create-recipe"
              element={<ProtectedRoute element={<CreateRecipe />} />}
            />
            <Route
              path="/saved-recipes"
              element={<ProtectedRoute element={<SavedRecipes />} />}
            />
            <Route path="/recipe/:recipeID" element={<RecipeDetail />} />
            <Route
              path="/saved-recipes"
              element={<ProtectedRoute element={<SavedRecipes />} />}
            />

             
            <Route path="/generaterecipe" element={<Recipeplanner />} />
          </Routes>

        </Router>
      </div>
    </div>
  );
}

export default App;
