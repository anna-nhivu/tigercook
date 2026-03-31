import { useEffect, useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";
import { getUserRecipes } from "../utils/getUserRecipes.js";

function formatRecipeDate(createdAt) {
  if (!createdAt) return "—";
  const d = createdAt.toDate ? createdAt.toDate() : new Date(createdAt);
  if (Number.isNaN(d.getTime())) return "—";
  return d.toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

function formatCost(cost) {
  if (cost == null) return "—";
  if (typeof cost === "number") return `$${cost}`;
  return String(cost);
}

function Dashboard() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const displayName = user?.displayName?.trim() || "Chef";

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main
        className="flex-1 flex justify-center items-center relative overflow-hidden min-h-[calc(100vh-110px)] pb-20"
        style={{
          backgroundColor: "#FFF9F0",
          backgroundImage: `
            radial-gradient(ellipse 60% 50% at 15% 20%, rgba(251, 146, 60, 0.13) 0%, transparent 70%),
            radial-gradient(ellipse 50% 45% at 85% 75%, rgba(245, 158, 11, 0.10) 0%, transparent 65%),
            radial-gradient(ellipse 40% 35% at 70% 10%, rgba(253, 186, 116, 0.08) 0%, transparent 60%)
          `,
        }}
      >
        <div className="absolute w-[400px] h-[400px] rounded-full bg-[rgba(251,146,60,0.08)] -top-[100px] -right-[80px] blur-[60px] pointer-events-none" />
        <div className="absolute w-[300px] h-[300px] rounded-full bg-[rgba(245,158,11,0.07)] -bottom-[80px] -left-[60px] blur-[50px] pointer-events-none" />

        <div
          className="w-[680px] py-[50px] px-[50px] pb-11 text-left relative overflow-hidden z-10"
          style={{
            background: "linear-gradient(135deg, #f59e0b 0%, #fb923c 60%, #f97316 100%)",
            boxShadow: "0 20px 60px rgba(245, 158, 11, 0.30), 0 4px 16px rgba(245, 158, 11, 0.20), inset 0 1px 0 rgba(255,255,255,0.15)",
            borderRadius: "24px",
            color: "white",
          }}
        >
          <div className="absolute w-[320px] h-[320px] rounded-full bg-white/10 -top-20 -right-16 pointer-events-none" />
          <div className="absolute w-[180px] h-[180px] rounded-full bg-white/5 -bottom-12 right-20 pointer-events-none" />

          <h1 className="text-[34px] font-bold m-0 mb-4 leading-tight relative z-10">
            Welcome to TigerCook! 👋
          </h1>
          <p className="text-[15px] m-0 mb-7 leading-[1.65] opacity-90 max-w-[500px] relative z-10">
            Your AI-powered recipe companion for college students.
            Generate delicious meals that match your budget,
            dietary preferences, and cooking time.
          </p>
          <button
            onClick={() => navigate("/generate")}
            className="py-3 px-6 rounded-full border-2 border-white/80 bg-white/15 backdrop-blur-sm text-white cursor-pointer font-semibold text-[15px] tracking-wide relative z-10 transition-all hover:bg-white hover:text-[#f59e0b] hover:border-white hover:-translate-y-0.5 active:translate-y-0"
          >
            Generate Your First Recipe →
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Dashboard;
