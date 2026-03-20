import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login.jsx";
import SignUp from "../pages/SignUp.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import GenerateRecipe from "../pages/GenerateRecipe.jsx";
import AIResult from "../pages/AIResult.jsx";
import Explore from "../pages/Explore.jsx";
import Favorite from "../pages/Favorite.jsx";
import Profile from "../pages/Profile.jsx";

export const router = createBrowserRouter([
  { path: "/", Component: Login },
  { path: "/login", Component: Login },
  { path: "/signup", Component: SignUp },
  { path: "/dashboard", Component: Dashboard },
  { path: "/generate", Component: GenerateRecipe },
  { path: "/ai-result", Component: AIResult },
  { path: "/explore", Component: Explore },
  { path: "/favorite", Component: Favorite },
  { path: "/profile", Component: Profile },
]);
