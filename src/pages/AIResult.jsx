import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { useNavigate } from "react-router-dom";

function AIResult() {
  const navigate = useNavigate();

  const recipe = {
    title: "Spicy Thai Basil Noodles",
    description:
      "A delicious and easy Thai-inspired noodle dish with fresh basil, vegetables, and a spicy sauce.",
    ingredients: [
      { name: "Rice noodles", amount: "200g" },
      { name: "Fresh Thai basil", amount: "1 cup" },
      { name: "Bell peppers", amount: "2 medium" },
      { name: "Garlic cloves", amount: "4 cloves" },
      { name: "Soy sauce", amount: "3 tbsp" },
      { name: "Oyster sauce", amount: "2 tbsp" },
      { name: "Chili flakes", amount: "1 tsp" },
      { name: "Sesame oil", amount: "1 tbsp" },
    ],
    steps: [
      "Cook rice noodles according to package instructions. Drain and set aside.",
      "Heat sesame oil in a large wok or pan over high heat.",
      "Add minced garlic and stir-fry for 30 seconds until fragrant.",
      "Add sliced bell peppers and cook for 2–3 minutes until slightly softened.",
      "Toss in the cooked noodles, soy sauce, oyster sauce, and chili flakes. Mix well.",
      "Add fresh Thai basil leaves. Stir-fry for another minute.",
      "Serve hot and enjoy your delicious meal!",
    ],
    time: "25 min",
    cost: "$8.50",
    servings: 2,
    nutrition: {
      calories: 425,
      protein: "12g",
      carbs: "68g",
      fat: "11g",
    },
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
    <div className="flex flex-col min-h-screen">
      <Header />

      <main
        className="flex-1 py-9 px-10 pb-20"
        style={{
          backgroundColor: "#FFF9F0",
          backgroundImage: `
            radial-gradient(ellipse 50% 40% at 95% 5%, rgba(251,146,60,0.10) 0%, transparent 65%),
            radial-gradient(ellipse 40% 35% at 5% 90%, rgba(245,158,11,0.08) 0%, transparent 60%)
          `,
        }}
      >
        <div className="max-w-[1100px] mx-auto">
          <div className="flex justify-between items-center mb-7">
            <div className="flex items-center gap-2">
              <span className="text-[13px] text-[#bbb]">Recipe Generator</span>
              <span className="text-[13px] text-[#ddd]">›</span>
              <h2 className="text-[22px] font-bold text-[#1a1a1a] m-0">
                Your Generated Recipe
              </h2>
            </div>
            <div className="flex gap-2.5">
              <button
                className="py-2 px-5 rounded-full text-sm font-medium cursor-pointer transition-all bg-white border-[1.5px] border-[#f59e0b] text-[#f59e0b] hover:bg-[#f59e0b] hover:text-white"
                onClick={saveRecipe}
              >
                🤍 Save
              </button>
              <button
                className="py-2 px-5 rounded-full text-sm font-medium cursor-pointer transition-all bg-white border-[1.5px] border-[#e5e5e5] text-[#666] hover:border-[#ccc] hover:text-[#333]"
                onClick={() => navigate("/generate")}
              >
                ↺ Regenerate
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-[22px] items-start">
            <aside className="bg-white rounded-[18px] p-6 border border-[#f0ece6] shadow-[0_2px_12px_rgba(0,0,0,0.04)] sticky top-6">
              <h3 className="text-[15px] font-bold text-[#f59e0b] m-0 mb-4">
                🧺 Ingredients
              </h3>
              <ul className="list-none p-0 m-0">
                {recipe.ingredients.map((item, i) => (
                  <li
                    key={i}
                    className="flex justify-between items-center py-2 border-b border-[#faf7f3] text-[13.5px] last:border-b-0"
                  >
                    <span className="font-medium text-[#333]">{item.name}</span>
                    <span className="text-[#aaa] text-[12.5px]">{item.amount}</span>
                  </li>
                ))}
              </ul>
              <div className="h-px bg-[#f5f0ea] my-4" />
              <p className="text-[13px] text-[#888] m-0 mb-2.5">🛒 Get ingredients:</p>
              <div className="flex flex-col gap-2.5">
                <button
                  className="py-2.5 px-3 rounded-full border-none cursor-pointer text-[13.5px] font-semibold text-white transition-all hover:opacity-90 hover:-translate-y-0.5 bg-[#2563eb]"
                  onClick={handleWalmart}
                >
                  🛒 Buy at Walmart
                </button>
                <button
                  className="py-2.5 px-3 rounded-full border-none cursor-pointer text-[13.5px] font-semibold text-white transition-all hover:opacity-90 hover:-translate-y-0.5 bg-[#1e3a8a]"
                  onClick={handleKroger}
                >
                  🛒 Buy at Kroger
                </button>
              </div>
            </aside>

            <div className="flex flex-col gap-5">
              <div className="bg-white rounded-[18px] p-7 border border-[#f0ece6] shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                <div className="flex justify-between items-start mb-6 gap-4">
                  <div>
                    <h3 className="text-[22px] font-bold text-[#1a1a1a] m-0 mb-2">
                      {recipe.title}
                    </h3>
                    <p className="text-sm text-[#888] m-0 leading-[1.55]">
                      {recipe.description}
                    </p>
                  </div>
                  <span className="bg-[rgba(245,158,11,0.10)] text-[#f59e0b] text-xs font-semibold py-1 px-3 rounded-full whitespace-nowrap self-start">
                    🌶️ Spicy
                  </span>
                </div>
                <div className="flex items-center bg-[#fdf9f3] rounded-[14px] py-5 border border-[#f5ede0]">
                  <div className="flex-1 flex flex-col items-center gap-1 text-center">
                    <div className="text-[22px] leading-none mb-0.5">⏱</div>
                    <span className="text-[10px] font-bold tracking-wider text-[#bbb] uppercase">
                      TIME
                    </span>
                    <span className="text-[17px] font-bold text-[#f59e0b]">
                      {recipe.time}
                    </span>
                  </div>
                  <div className="w-px h-10 bg-[#ecdfc8] shrink-0" />
                  <div className="flex-1 flex flex-col items-center gap-1 text-center">
                    <div className="text-[22px] leading-none mb-0.5">💰</div>
                    <span className="text-[10px] font-bold tracking-wider text-[#bbb] uppercase">
                      COST
                    </span>
                    <span className="text-[17px] font-bold text-[#f59e0b]">
                      {recipe.cost}
                    </span>
                  </div>
                  <div className="w-px h-10 bg-[#ecdfc8] shrink-0" />
                  <div className="flex-1 flex flex-col items-center gap-1 text-center">
                    <div className="text-[22px] leading-none mb-0.5">🍽</div>
                    <span className="text-[10px] font-bold tracking-wider text-[#bbb] uppercase">
                      SERVINGS
                    </span>
                    <span className="text-[17px] font-bold text-[#f59e0b]">
                      {recipe.servings} people
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[18px] p-7 border border-[#f0ece6] shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                <h3 className="text-base font-bold text-[#1a1a1a] m-0 mb-5">
                  👨‍🍳 Cooking Steps
                </h3>
                <ol className="list-none p-0 m-0 flex flex-col gap-3.5">
                  {recipe.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3.5 text-sm text-[#444] leading-[1.6]">
                      <span
                        className="min-w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0 shadow-[0_2px_6px_rgba(245,158,11,0.30)]"
                        style={{
                          background: "linear-gradient(135deg, #f59e0b, #fb923c)",
                        }}
                      >
                        {i + 1}
                      </span>
                      <span className="pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-white rounded-[18px] p-7 border border-[#f0ece6] shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                <h3 className="text-base font-bold text-[#1a1a1a] m-0 mb-1">
                  📊 Nutrition Information
                </h3>
                <p className="text-xs text-[#bbb] m-0 mb-4">Per serving · estimated</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                  <div className="rounded-[14px] py-4 px-3 text-center flex flex-col gap-1 bg-[#fff3e0]">
                    <strong className="text-2xl font-extrabold leading-none text-[#f57c00]">
                      {recipe.nutrition.calories}
                    </strong>
                    <span className="text-xs font-medium text-[#e65100]">Calories</span>
                  </div>
                  <div className="rounded-[14px] py-4 px-3 text-center flex flex-col gap-1 bg-[#e8f5e9]">
                    <strong className="text-2xl font-extrabold leading-none text-[#388e3c]">
                      {recipe.nutrition.protein}
                    </strong>
                    <span className="text-xs font-medium text-[#2e7d32]">Protein</span>
                  </div>
                  <div className="rounded-[14px] py-4 px-3 text-center flex flex-col gap-1 bg-[#e3f2fd]">
                    <strong className="text-2xl font-extrabold leading-none text-[#1976d2]">
                      {recipe.nutrition.carbs}
                    </strong>
                    <span className="text-xs font-medium text-[#1565c0]">Carbs</span>
                  </div>
                  <div className="rounded-[14px] py-4 px-3 text-center flex flex-col gap-1 bg-[#fce4ec]">
                    <strong className="text-2xl font-extrabold leading-none text-[#d81b60]">
                      {recipe.nutrition.fat}
                    </strong>
                    <span className="text-xs font-medium text-[#ad1457]">Fat</span>
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
