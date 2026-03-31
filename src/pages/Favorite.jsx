import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Trash2 } from "lucide-react";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase.js";
import { useAuth } from "../hooks/useAuth.js";
import { getUserRecipes } from "../utils/getUserRecipes.js";

function recipeForResultView(recipe) {
  return {
    title: recipe.title,
    description: recipe.description,
    ingredients: recipe.ingredients,
    steps: recipe.steps,
    time: recipe.time,
    cost: recipe.cost,
    servings: recipe.servings,
    tag: recipe.tag,
    nutrition: recipe.nutrition,
  };
}

function Favorite() {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [removing, setRemoving] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    let cancelled = false;

    (async () => {
      if (!user?.uid) {
        setFavorites([]);
        setLoading(false);
        return;
      }
      setLoading(true);
      const list = await getUserRecipes(user.uid);
      if (!cancelled) {
        setFavorites(list);
        setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [user?.uid]);

  const removeRecipe = async (recipeId) => {
    const ok = window.confirm(
      "Delete this recipe from your saved list? This cannot be undone.",
    );
    if (!ok) return;

    setRemoving(recipeId);
    try {
      await deleteDoc(doc(db, "recipes", recipeId));
      setFavorites((prev) => prev.filter((r) => r.id !== recipeId));
    } catch (err) {
      console.error("Failed to remove recipe:", err);
      alert("Could not remove this recipe. Please try again.");
    } finally {
      setRemoving(null);
    }
  };

  const openRecipe = (recipe) => {
    localStorage.setItem("currentRecipe", JSON.stringify(recipeForResultView(recipe)));
    localStorage.setItem("currentRecipeSavedToFirestore", "true")
    navigate("/ai-result", {
      state: {from: "favorite"}
    });
  };

  const costDisplay = (cost) => {
    if (cost == null) return "—";
    if (typeof cost === "number") return String(cost);
    return String(cost).replace("$", "");
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
              <p className="text-sm text-[#999] m-0">
                Recipes you saved to your account (same as Firestore)
              </p>
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

          {loading ? (
            <div className="flex items-center justify-center py-24 gap-3 text-gray-500 text-sm">
              <div className="h-9 w-9 animate-spin rounded-full border-4 border-[#FFF0E0] border-t-[#f59e0b]" />
              Loading your recipes…
            </div>
          ) : favorites.length === 0 ? (
            <div className="text-center py-20 px-5">
              <div className="text-[52px] mb-4">🍽️</div>
              <h3 className="text-xl font-bold text-[#333] m-0 mb-2">Nothing saved yet</h3>
              <p className="text-sm text-[#aaa] m-0 mb-7">
                Generate a recipe and tap Save on the result page to see it here.
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
              {favorites.map((recipe) => (
                <div
                  key={recipe.id}
                  className={`bg-white rounded-[18px] p-5 pt-[22px] pb-[18px] border border-[#f0ece6] relative flex flex-col gap-0 shadow-[0_2px_12px_rgba(0,0,0,0.05)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(245,158,11,0.13),0_2px_8px_rgba(0,0,0,0.06)] ${
                    removing === recipe.id ? "opacity-0 scale-95" : ""
                  }`}
                >
                  {recipe.tag && (
                    <span className="inline-block text-[11px] font-semibold text-[#f59e0b] bg-[rgba(245,158,11,0.10)] rounded-full py-0.5 px-2.5 mb-3 w-fit">
                      {recipe.tag}
                    </span>
                  )}
                  <button
                    type="button"
                    className="absolute top-4 right-4 flex items-center justify-center w-9 h-9 rounded-xl border border-[#fde8d4] bg-[#fffaf5] text-[#dc2626] hover:bg-[#fef2f2] hover:border-[#fecaca] transition-colors disabled:opacity-50"
                    onClick={() => removeRecipe(recipe.id)}
                    disabled={removing === recipe.id}
                    title="Delete recipe"
                  >
                    <Trash2 className="w-4 h-4" strokeWidth={2.25} />
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
                    <span title="Cook time">⏱ {recipe.time ?? "—"}</span>
                    <span title="Cost">💲{costDisplay(recipe.cost)}</span>
                    <span title="Servings">🍽 {recipe.servings ?? "—"}</span>
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
                  <div className="mt-auto flex flex-col sm:flex-row gap-2.5">
                    <button
                      type="button"
                      className="flex-1 py-2.5 px-4 rounded-full border-[1.5px] border-[#f0ece6] bg-white text-[#f59e0b] text-[13px] font-semibold cursor-pointer text-center transition-all hover:bg-gradient-to-r hover:from-[#f59e0b] hover:to-[#fb923c] hover:border-transparent hover:text-white hover:-translate-y-0.5"
                      onClick={() => openRecipe(recipe)}
                    >
                      View Recipe →
                    </button>
                    <button
                      type="button"
                      className="py-2.5 px-4 rounded-full border-[1.5px] border-[#fecaca] bg-white text-[#dc2626] text-[13px] font-semibold cursor-pointer transition-all hover:bg-[#fef2f2] disabled:opacity-50"
                      onClick={() => removeRecipe(recipe.id)}
                      disabled={removing === recipe.id}
                    >
                      {removing === recipe.id ? "Deleting…" : "Delete"}
                    </button>
                  </div>
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
