import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();

  const isActive = (path) => (location.pathname === path ? "active" : "");

  return (
    <header className="flex justify-between items-center h-14 px-10 bg-white border-b border-[#efefef] shadow-[0_1px_6px_rgba(0,0,0,0.04)]">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => navigate("/dashboard")}
      >
        <div className="w-8 h-8 bg-gradient-to-br from-[#f59e0b] to-[#fb923c] rounded-lg flex items-center justify-center text-[17px] leading-none shrink-0">
          🍳
        </div>
        <h2 className="text-lg font-bold m-0 text-[#1a1a1a]">TigerCook</h2>
      </div>

      <nav className="flex items-center gap-1">
        <button
          className={`flex items-center gap-1.5 bg-none border-none cursor-pointer text-sm py-1.5 px-3 rounded-[20px] font-medium transition-all hover:text-[#f59e0b] hover:bg-[rgba(245,158,11,0.07)] ${isActive("/dashboard") ? "bg-[#f59e0b] text-white hover:bg-[#e08e00] hover:text-white" : "text-[#555]"}`}
          onClick={() => navigate("/dashboard")}
        >
          <span className="text-[15px] leading-none">🏠</span>
          Dashboard
        </button>
        <button
          className={`flex items-center gap-1.5 bg-none border-none cursor-pointer text-sm py-1.5 px-3 rounded-[20px] font-medium transition-all hover:text-[#f59e0b] hover:bg-[rgba(245,158,11,0.07)] ${isActive("/generate") ? "bg-[#f59e0b] text-white hover:bg-[#e08e00] hover:text-white" : "text-[#555]"}`}
          onClick={() => navigate("/generate")}
        >
          <span className="text-[15px] leading-none">✨</span>
          Recipe Generator
        </button>
        <button
          className={`flex items-center gap-1.5 bg-none border-none cursor-pointer text-sm py-1.5 px-3 rounded-[20px] font-medium transition-all hover:text-[#f59e0b] hover:bg-[rgba(245,158,11,0.07)] ${isActive("/explore") ? "bg-[#f59e0b] text-white hover:bg-[#e08e00] hover:text-white" : "text-[#555]"}`}
          onClick={() => navigate("/explore")}
        >
          <span className="text-[15px] leading-none">🧭</span>
          Explore Recipes
        </button>
        <button
          className={`flex items-center gap-1.5 bg-none border-none cursor-pointer text-sm py-1.5 px-3 rounded-[20px] font-medium transition-all hover:text-[#f59e0b] hover:bg-[rgba(245,158,11,0.07)] ${isActive("/favorite") ? "bg-[#f59e0b] text-white hover:bg-[#e08e00] hover:text-white" : "text-[#555]"}`}
          onClick={() => navigate("/favorite")}
        >
          <span className="text-[15px] leading-none">🤍</span>
          Favorites
        </button>
        <button
          className={`flex items-center gap-1.5 bg-none border-none cursor-pointer text-sm py-1.5 px-3 rounded-[20px] font-medium hover:text-[#f59e0b] hover:bg-[rgba(245,158,11,0.07)] ${isActive("/profile") ? "bg-[#f59e0b] text-white hover:bg-[#e08e00] hover:text-white" : "text-[#555]"}`}
          onClick={() => navigate("/profile")}
        >
          <span className="text-[15px] leading-none">👤</span>
          Profile
        </button>
      </nav>
    </header>
  );
}

export default Header;
