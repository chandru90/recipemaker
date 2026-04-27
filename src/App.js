import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";


import { Home } from "./pages/home";

function App() {
  return (
    <div className="App">
      <div className="bg-container">
        <Router>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
