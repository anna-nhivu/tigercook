import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DEMO_RECIPES = [
  {
    title: "Spicy Thai Basil Noodles",
    description: "A bold Thai-inspired noodle dish with fresh basil and chili.",
    time: "25 min",
    cost: "$8.50",
    servings: 2,
    tag: "🌶️ Spicy",
    nutrition: { calories: 425, protein: "12g" },
  },
  {
    title: "Asian Rice Bowl",
    description: "Light and satisfying rice bowl with seasoned vegetables.",
    time: "20 min",
    cost: "$7.00",
    servings: 2,
    tag: "🥗 Healthy",
    nutrition: { calories: 380, protein: "10g" },
  },
  {
    title: "Healthy Pasta",
    description: "Simple creamy pasta with garlic, olive oil, and parmesan.",
    time: "20 min",
    cost: "$9.00",
    servings: 3,
    tag: "🍝 Comfort",
    nutrition: { calories: 510, protein: "18g" },
  },
];

function Favorite() {
  const [favorites, setFavorites] = useState([]);
  const [removing, setRemoving] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
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
    <div className="flex flex-col min-h-screen">
      <Header />

      <main
        className="flex-1 py-10 px-10 min-h-[calc(100vh-110px)] pb-20"
        style={{
          backgroundColor: "#FFF9F0",
          backgroundImage: `
            radial-gradient(ellipse 50% 40% at 95% 10%, rgba(251,146,60,0.10) 0%, transparent 65%),
            radial-gradient(ellipse 40% 35% at 5% 85%, rgba(245,158,11,0.08) 0%, transparent 60%)
          `,
        }}
      >
        <div className="max-w-[1100px] mx-auto">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-[28px] font-bold text-[#1a1a1a] m-0 mb-1.5">
                Favorite Recipes ❤️
              </h2>
              <p className="text-sm text-[#999] m-0">Your saved recipes for quick access</p>
            </div>
            <div
              className="text-[13px] font-semibold py-1.5 px-4 rounded-full text-white whitespace-nowrap self-center"
              style={{
                background: "linear-gradient(135deg, #f59e0b, #fb923c)",
                boxShadow: "0 3px 10px rgba(245,158,11,0.30)",
              }}
            >
              {favorites.length} saved
            </div>
          </div>

          {favorites.length === 0 ? (
            <div className="text-center py-20 px-5">
              <div className="text-[52px] mb-4">🍽️</div>
              <h3 className="text-xl font-bold text-[#333] m-0 mb-2">Nothing saved yet</h3>
              <p className="text-sm text-[#aaa] m-0 mb-7">
                Generate a recipe and hit Save to see it here!
              </p>
              <button
                onClick={() => navigate("/generate")}
                className="py-3.5 px-7 rounded-full border-none text-white text-[15px] font-semibold cursor-pointer shadow-[0_4px_16px_rgba(245,158,11,0.30)] transition-all hover:opacity-90 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #f59e0b, #fb923c)",
                }}
              >
                Generate a Recipe →
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[22px]">
              {favorites.map((recipe, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-[18px] p-5 pt-[22px] pb-[18px] border border-[#f0ece6] relative flex flex-col gap-0 shadow-[0_2px_12px_rgba(0,0,0,0.05)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(245,158,11,0.13),0_2px_8px_rgba(0,0,0,0.06)] ${
                    removing === index ? "opacity-0 scale-95" : ""
                  }`}
                >
                  {recipe.tag && (
                    <span className="inline-block text-[11px] font-semibold text-[#f59e0b] bg-[rgba(245,158,11,0.10)] rounded-full py-0.5 px-2.5 mb-3 w-fit">
                      {recipe.tag}
                    </span>
                  )}
                  <button
                    className="absolute top-4 right-4 bg-none border-none cursor-pointer text-lg p-0 leading-none transition-transform hover:scale-125"
                    onClick={() => removeRecipe(index)}
                    title="Remove from favorites"
                  >
                    ❤️
                  </button>
                  <h3 className="text-base font-bold text-[#1a1a1a] m-0 mb-2 pr-8 leading-snug">
                    {recipe.title}
                  </h3>
                  {recipe.description && (
                    <p className="text-[13px] text-[#888] m-0 mb-3.5 leading-[1.5] line-clamp-2">
                      {recipe.description}
                    </p>
                  )}
                  <div className="h-px bg-[#f5f0ea] mb-3.5" />
                  <div className="flex gap-4 text-[13px] text-[#666] mb-3 flex-wrap">
                    <span title="Cook time">⏱ {recipe.time}</span>
                    <span title="Cost">💲{recipe.cost?.replace("$", "")}</span>
                    <span title="Servings">🍽 {recipe.servings}</span>
                  </div>
                  {recipe.nutrition && (
                    <div className="flex gap-2 flex-wrap mb-4">
                      <span className="text-xs font-medium py-1 px-2.5 rounded-full bg-[#fff3e0] text-[#e65100]">
                        🔥 {recipe.nutrition.calories} cal
                      </span>
                      <span className="text-xs font-medium py-1 px-2.5 rounded-full bg-[#e8f5e9] text-[#2e7d32]">
                        💪 {recipe.nutrition.protein} protein
                      </span>
                    </div>
                  )}
                  <button
                    className="mt-auto py-2.5 px-4 rounded-full border-[1.5px] border-[#f0ece6] bg-white text-[#f59e0b] text-[13px] font-semibold cursor-pointer text-center transition-all hover:bg-gradient-to-r hover:from-[#f59e0b] hover:to-[#fb923c] hover:border-transparent hover:text-white hover:-translate-y-0.5"
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
