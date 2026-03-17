import { createBrowserRouter } from "react-router";
import SignUp from "./pages/SignUp";
import RecipeGenerator from "./pages/RecipeGenerator";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: SignUp,
  },
  {
    path: "/signup",
    Component: SignUp,
  },
  {
    path: "/generator",
    Component: RecipeGenerator,
  },
  {
    path: "/explore",
    Component: Explore,
  },
  {
    path: "/profile",
    Component: Profile,
  },
]);
