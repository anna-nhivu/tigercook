import "../styles/header.css";

import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Header() {

  const navigate = useNavigate();
  const location = useLocation();
  const { loggedIn, logout } = useContext(AuthContext);

  // Helper: add "active" class to the current page's button
  const isActive = (path) => location.pathname === path ? "active" : "";

  return (
    <header className="header">

      {/* Logo */}
      <div
        className="header-logo"
        onClick={() => navigate("/dashboard")}
      >
        <div className="logo-icon">🍳</div>
        <h2>TigerCook</h2>
      </div>

      {/* Nav */}
      <nav>

        <button
          className={isActive("/dashboard")}
          onClick={() => navigate("/dashboard")}
        >
          <span className="nav-icon">🏠</span>
          Dashboard
        </button>

        <button
          className={isActive("/generate")}
          onClick={() => navigate("/generate")}
        >
          <span className="nav-icon">✨</span>
          Recipe Generator
        </button>

        <button className={isActive("/explore")}>
          <span className="nav-icon">🧭</span>
          Explore Recipes
        </button>

        <button
          className={isActive("/favorite")}
          onClick={() => navigate("/favorite")}
        >
          <span className="nav-icon">🤍</span>
          Favorites
        </button>

        {loggedIn ? (
          <button onClick={() => {
            logout();
            navigate("/dashboard");
          }}>
            <span className="nav-icon">👤</span>
            Logout
          </button>
        ) : (
          <button
            className={isActive("/login")}
            onClick={() => navigate("/login")}
          >
            <span className="nav-icon">👤</span>
            Login
          </button>
        )}

      </nav>

    </header>
  );
}

export default Header;