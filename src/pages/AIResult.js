import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/airesult.css";

import { useNavigate } from "react-router-dom";

function AIResult() {

  const navigate = useNavigate();

  const recipe = {
    title: "Spicy Thai Basil Noodles",
    description:
      "A delicious and easy Thai-inspired noodle dish with fresh basil, vegetables, and a spicy sauce.",

    ingredients: [
      { name: "Rice noodles",    amount: "200g"    },
      { name: "Fresh Thai basil", amount: "1 cup"  },
      { name: "Bell peppers",    amount: "2 medium"},
      { name: "Garlic cloves",   amount: "4 cloves"},
      { name: "Soy sauce",       amount: "3 tbsp"  },
      { name: "Oyster sauce",    amount: "2 tbsp"  },
      { name: "Chili flakes",    amount: "1 tsp"   },
      { name: "Sesame oil",      amount: "1 tbsp"  }
    ],

    steps: [
      "Cook rice noodles according to package instructions. Drain and set aside.",
      "Heat sesame oil in a large wok or pan over high heat.",
      "Add minced garlic and stir-fry for 30 seconds until fragrant.",
      "Add sliced bell peppers and cook for 2–3 minutes until slightly softened.",
      "Toss in the cooked noodles, soy sauce, oyster sauce, and chili flakes. Mix well.",
      "Add fresh Thai basil leaves. Stir-fry for another minute.",
      "Serve hot and enjoy your delicious meal!"
    ],

    time:     "25 min",
    cost:     "$8.50",
    servings: 2,

    nutrition: {
      calories: 425,
      protein:  "12g",
      carbs:    "68g",
      fat:      "11g"
    }
  };

  const saveRecipe = () => {
    const existing = JSON.parse(localStorage.getItem("favorites")) || [];
    existing.push(recipe);
    localStorage.setItem("favorites", JSON.stringify(existing));
    alert("Recipe saved to favorites! ❤️");
  };

  const handleWalmart = () =>
    window.open("https://www.walmart.com/search?q=rice+noodles+thai+basil", "_blank");

  const handleKroger = () =>
    window.open("https://www.kroger.com/search?query=rice+noodles+thai+basil", "_blank");

  return (
    <div className="ai-wrapper">

      <Header />

      <main className="ai-page">
        <div className="ai-container">

          {/* ── Top bar ── */}
          <div className="ai-top">
            <div className="ai-top-left">
              <span className="ai-breadcrumb">Recipe Generator</span>
              <span className="ai-breadcrumb-sep">›</span>
              <h2>Your Generated Recipe</h2>
            </div>
            <div className="ai-buttons">
              <button className="btn-save"       onClick={saveRecipe}>
                🤍 Save
              </button>
              <button className="btn-regenerate" onClick={() => navigate("/generate")}>
                ↺ Regenerate
              </button>
            </div>
          </div>

          {/* ── Main grid ── */}
          <div className="ai-content">

            {/* ── LEFT: Ingredients ── */}
            <aside className="ingredients-card">

              <h3>🧺 Ingredients</h3>

              <ul>
                {recipe.ingredients.map((item, i) => (
                  <li key={i}>
                    <span className="ing-name">{item.name}</span>
                    <span className="ing-amount">{item.amount}</span>
                  </li>
                ))}
              </ul>

              <div className="grocery-divider" />

              <p className="grocery-label">🛒 Get ingredients:</p>

              <div className="grocery-buttons">
                <button className="walmart" onClick={handleWalmart}>
                  🛒 Buy at Walmart
                </button>
                <button className="kroger" onClick={handleKroger}>
                  🛒 Buy at Kroger
                </button>
              </div>

            </aside>

            {/* ── RIGHT ── */}
            <div className="ai-right">

              {/* Recipe info */}
              <div className="recipe-card">

                <div className="recipe-card-top">
                  <div>
                    <h3>{recipe.title}</h3>
                    <p className="recipe-desc">{recipe.description}</p>
                  </div>
                  <span className="recipe-badge">🌶️ Spicy</span>
                </div>

                {/* Meta — now with generous spacing */}
                <div className="recipe-meta">

                  <div className="meta-item">
                    <div className="meta-icon-wrap">⏱</div>
                    <span className="meta-label">TIME</span>
                    <span className="meta-value">{recipe.time}</span>
                  </div>

                  <div className="meta-divider" />

                  <div className="meta-item">
                    <div className="meta-icon-wrap">💰</div>
                    <span className="meta-label">COST</span>
                    <span className="meta-value">{recipe.cost}</span>
                  </div>

                  <div className="meta-divider" />

                  <div className="meta-item">
                    <div className="meta-icon-wrap">🍽</div>
                    <span className="meta-label">SERVINGS</span>
                    <span className="meta-value">{recipe.servings} people</span>
                  </div>

                </div>

              </div>

              {/* Cooking steps */}
              <div className="steps-card">

                <h3>👨‍🍳 Cooking Steps</h3>

                <ol className="steps-list">
                  {recipe.steps.map((step, i) => (
                    <li key={i}>
                      <span className="step-num">{i + 1}</span>
                      <span className="step-text">{step}</span>
                    </li>
                  ))}
                </ol>

              </div>

              {/* Nutrition */}
              <div className="nutrition-card">

                <h3>📊 Nutrition Information</h3>
                <p className="nutrition-sub">Per serving · estimated</p>

                <div className="nutrition-grid">

                  <div className="nutrition-box calories">
                    <strong>{recipe.nutrition.calories}</strong>
                    <span>Calories</span>
                  </div>

                  <div className="nutrition-box protein">
                    <strong>{recipe.nutrition.protein}</strong>
                    <span>Protein</span>
                  </div>

                  <div className="nutrition-box carbs">
                    <strong>{recipe.nutrition.carbs}</strong>
                    <span>Carbs</span>
                  </div>

                  <div className="nutrition-box fat">
                    <strong>{recipe.nutrition.fat}</strong>
                    <span>Fat</span>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>
      </main>

      <Footer />

    </div>
  );
}

export default AIResult;