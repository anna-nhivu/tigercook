import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/generate.css";

export default function GenerateRecipe() {
  const navigate = useNavigate();
  const [budget, setBudget] = useState(10);
  const [portion, setPortion] = useState(2);
  const [cookingTime, setCookingTime] = useState(30);
  const [selectedDiet, setSelectedDiet] = useState("any");
  const [selectedCuisine, setSelectedCuisine] = useState("any");
  const [customDiet, setCustomDiet] = useState("");
  const [customCuisine, setCustomCuisine] = useState("");

  const dietOptions = [
    { value: "any", label: "None", emoji: "🍽️" },
    { value: "vegetarian", label: "Vegetarian", emoji: "🥗" },
    { value: "vegan", label: "Vegan", emoji: "🌱" },
    { value: "glutenfree", label: "Gluten-Free", emoji: "🌾" },
    { value: "other", label: "Other", emoji: "✏️" },
  ];

  const cuisineOptions = [
    { value: "any", label: "Any", emoji: "🌍" },
    { value: "asian", label: "Asian", emoji: "🍜" },
    { value: "italian", label: "Italian", emoji: "🍝" },
    { value: "mexican", label: "Mexican", emoji: "🌮" },
    { value: "other", label: "Other", emoji: "✏️" },
  ];

  const handleGenerate = () => {
    navigate("/ai-result");
  };

  return (
    <div>
      <Header />

      <main className="generate-body">
        <div className="generate-container">

          <div className="generate-heading">
            <h1>AI Recipe Generator ✨</h1>
            <p>Tell us your preferences and we'll create the perfect recipe</p>
          </div>

          <div className="generate-card">

            {/* Budget */}
            <div className="generate-field">
              <div className="generate-field-header">
                <div className="generate-field-label">
                  <div className="generate-icon green">💲</div>
                  <label>Budget</label>
                </div>
                <div className="generate-value">${budget}</div>
              </div>
              <input
                type="range"
                min={5} max={50} step={1}
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="generate-slider"
              />
            </div>

            {/* Servings */}
            <div className="generate-field">
              <div className="generate-field-header">
                <div className="generate-field-label">
                  <div className="generate-icon orange">👥</div>
                  <label>Servings</label>
                </div>
                <div className="generate-value">{portion} people</div>
              </div>
              <input
                type="range"
                min={1} max={8} step={1}
                value={portion}
                onChange={(e) => setPortion(Number(e.target.value))}
                className="generate-slider"
              />
            </div>

            {/* Cooking Time */}
            <div className="generate-field">
              <div className="generate-field-header">
                <div className="generate-field-label">
                  <div className="generate-icon blue">⏱️</div>
                  <label>Cooking Time</label>
                </div>
                <div className="generate-value">{cookingTime} min</div>
              </div>
              <input
                type="range"
                min={10} max={120} step={5}
                value={cookingTime}
                onChange={(e) => setCookingTime(Number(e.target.value))}
                className="generate-slider"
              />
            </div>

            {/* Diet Preference */}
            <div className="generate-field">
              <div className="generate-field-label">
                <div className="generate-icon green">🌿</div>
                <label>Diet Preference</label>
              </div>
              <div className="generate-options">
                {dietOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setSelectedDiet(option.value);
                      if (option.value !== "other") setCustomDiet("");
                    }}
                    className={`generate-option-btn ${selectedDiet === option.value ? "active" : ""}`}
                  >
                    <span className="option-emoji">{option.emoji}</span>
                    <span className="option-label">{option.label}</span>
                  </button>
                ))}
              </div>
              {selectedDiet === "other" && (
                <input
                  type="text"
                  placeholder="Enter your diet preference..."
                  value={customDiet}
                  onChange={(e) => setCustomDiet(e.target.value)}
                  className="generate-input"
                />
              )}
            </div>

            {/* Cuisine Type */}
            <div className="generate-field">
              <div className="generate-field-label">
                <div className="generate-icon purple">🌐</div>
                <label>Cuisine Type</label>
              </div>
              <div className="generate-options">
                {cuisineOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setSelectedCuisine(option.value);
                      if (option.value !== "other") setCustomCuisine("");
                    }}
                    className={`generate-option-btn ${selectedCuisine === option.value ? "active" : ""}`}
                  >
                    <span className="option-emoji">{option.emoji}</span>
                    <span className="option-label">{option.label}</span>
                  </button>
                ))}
              </div>
              {selectedCuisine === "other" && (
                <input
                  type="text"
                  placeholder="Enter your cuisine type..."
                  value={customCuisine}
                  onChange={(e) => setCustomCuisine(e.target.value)}
                  className="generate-input"
                />
              )}
            </div>

            {/* Generate Button */}
            <button className="generate-btn" onClick={handleGenerate}>
              ✨ Generate Recipe with AI
            </button>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}