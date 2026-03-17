import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Favorite from "./pages/Favorite";
import AIResult from "./pages/AIResult";
import GenerateRecipe from "./pages/GenerateRecipe";

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

      </Routes>

    </Router>
  );
}

export default App;