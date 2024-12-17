import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar";
import { Auth } from "./pages/auth";
import { CreateRecipe } from "./pages/create-recipe";
import { Home } from "./pages/home";
import { SavedRecipes } from "./pages/saved-recipes";
import { RecipeDetail } from "./pages/RecipeDetail";
import ProtectedRoute from "./ProtectedRoute";
function App() {
  return (
    <div className="App">
      <div className="bg-container">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
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
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
