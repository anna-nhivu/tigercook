import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login"; 
import Dashboard from "./pages/Dashboard";
import Favorite from "./pages/Favorite";
import AIResult from "./pages/AIResult";
import GenerateRecipe from "./pages/GenerateRecipe";

import Signup from "./pages/SignUp";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>

      <Routes>

        <Route path="/" element={<Dashboard />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/login" element={<Login />} />

        <Route path="/favorite" element={<Favorite />} />

        <Route path="/ai-result" element={<AIResult />} />

        <Route path="/generate" element={<GenerateRecipe />} />

        
        <Route path="/signup"  element={<Signup />} />

        <Route path="/explore" element={<Explore />} />
        
        <Route path="/profile" element={<Profile />} />

      </Routes>

    </Router>
  );
}

export default App;