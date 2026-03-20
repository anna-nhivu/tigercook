import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/favorite.css";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Demo recipes shown when localStorage is empty
const DEMO_RECIPES = [
  {
    title: "Spicy Thai Basil Noodles",
    description: "A bold Thai-inspired noodle dish with fresh basil and chili.",
    time: "25 min",
    cost: "$8.50",
    servings: 2,
    tag: "🌶️ Spicy",
    nutrition: { calories: 425, protein: "12g" }
  },
  {
    title: "Asian Rice Bowl",
    description: "Light and satisfying rice bowl with seasoned vegetables.",
    time: "20 min",
    cost: "$7.00",
    servings: 2,
    tag: "🥗 Healthy",
    nutrition: { calories: 380, protein: "10g" }
  },
  {
    title: "Healthy Pasta",
    description: "Simple creamy pasta with garlic, olive oil, and parmesan.",
    time: "20 min",
    cost: "$9.00",
    servings: 3,
    tag: "🍝 Comfort",
    nutrition: { calories: 510, protein: "18g" }
  }
];

function Favorite() {

  const [favorites, setFavorites] = useState([]);
  const [removing, setRemoving]   = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    // Show demo data if nothing saved yet
    setFavorites(stored.length > 0 ? stored : DEMO_RECIPES);
  }, []);

  const removeRecipe = (indexToRemove) => {
    setRemoving(indexToRemove);
    setTimeout(() => {
      const updated = favorites.filter((_, i) => i !== indexToRemove);
      setFavorites(updated);
      localStorage.setItem("favorites", JSON.stringify(updated));
      setRemoving(null);
    }, 300);
  };

  return (
    <div>
      <Header />

      <main className="favorite-page">
        <div className="favorite-container">

          {/* Header */}
          <div className="favorite-header">
            <div>
              <h2>Favorite Recipes ❤️</h2>
              <p>Your saved recipes for quick access</p>
            </div>
            <div className="fav-count-badge">
              {favorites.length} saved
            </div>
          </div>

          {favorites.length === 0 ? (

            /* Empty state */
            <div className="empty-state">
              <div className="empty-icon-wrap">🍽️</div>
              <h3>Nothing saved yet</h3>
              <p>Generate a recipe and hit Save to see it here!</p>
              <button
                className="go-generate-btn"
                onClick={() => navigate("/generate")}
              >
                Generate a Recipe →
              </button>
            </div>

          ) : (

            <div className="favorites-grid">
              {favorites.map((recipe, index) => (

                <div
                  className={`favorite-card ${removing === index ? "removing" : ""}`}
                  key={index}
                >

                  {/* Tag pill */}
                  {recipe.tag && (
                    <span className="card-tag">{recipe.tag}</span>
                  )}

                  {/* Remove button */}
                  <button
                    className="heart-btn"
                    onClick={() => removeRecipe(index)}
                    title="Remove from favorites"
                  >
                    ❤️
                  </button>

                  {/* Title + description */}
                  <h3 className="card-title">{recipe.title}</h3>
                  {recipe.description && (
                    <p className="card-desc">{recipe.description}</p>
                  )}

                  {/* Divider */}
                  <div className="card-divider" />

                  {/* Meta row */}
                  <div className="card-meta">
                    <span title="Cook time">⏱ {recipe.time}</span>
                    <span title="Cost">💲{recipe.cost?.replace("$","")}</span>
                    <span title="Servings">🍽 {recipe.servings}</span>
                  </div>

                  {/* Nutrition pills */}
                  {recipe.nutrition && (
                    <div className="card-nutrition">
                      <span className="pill calories">
                        🔥 {recipe.nutrition.calories} cal
                      </span>
                      <span className="pill protein">
                        💪 {recipe.nutrition.protein} protein
                      </span>
                    </div>
                  )}

                  {/* View button */}
                  <button
                    className="view-btn"
                    onClick={() => navigate("/ai-result")}
                  >
                    View Recipe →
                  </button>

                </div>

              ))}
            </div>

          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Favorite;