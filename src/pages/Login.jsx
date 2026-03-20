import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
import Header from "../components/Header.jsx";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email.trim() !== "" && password.trim() !== "") {
      login();
      navigate("/dashboard");
    } else {
      alert("Please enter your email and password.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
    <div
      className="flex-1 flex justify-center items-center relative overflow-hidden"
      style={{
        backgroundColor: "#fdf6f0",
        backgroundImage: `
          radial-gradient(ellipse 55% 50% at 5% 10%, rgba(251, 146, 60, 0.35) 0%, transparent 65%),
          radial-gradient(ellipse 45% 40% at 95% 90%, rgba(52, 211, 153, 0.22) 0%, transparent 60%),
          radial-gradient(ellipse 35% 30% at 90% 5%, rgba(253, 186, 116, 0.18) 0%, transparent 55%),
          radial-gradient(ellipse 30% 25% at 10% 90%, rgba(110, 231, 183, 0.12) 0%, transparent 50%)
        `,
      }}
    >
      <div className="absolute w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(251,146,60,0.22)_0%,transparent_70%)] -top-[120px] -left-[100px] blur-[40px] pointer-events-none" />
      <div className="absolute w-[320px] h-[320px] rounded-full bg-[radial-gradient(circle,rgba(52,211,153,0.18)_0%,transparent_70%)] -bottom-20 -right-20 blur-[35px] pointer-events-none" />

      <div
        className="w-[400px] py-11 px-10 pb-9 bg-white rounded-[24px] text-center relative z-10"
        style={{
          boxShadow: "0 20px 60px rgba(0,0,0,0.07), 0 4px 16px rgba(0,0,0,0.04)",
        }}
      >
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-[26px] mx-auto mb-4"
          style={{
            background: "linear-gradient(135deg, #f59e0b, #fb923c)",
            boxShadow: "0 4px 14px rgba(245, 158, 11, 0.35)",
          }}
        >
          👨‍🍳
        </div>

        <h1 className="text-[26px] font-bold m-0 mb-1.5 text-[#1a1a1a]">TigerCook</h1>
        <p className="text-sm text-[#888] m-0 mb-7">Sign in to start cooking!</p>

        <form onSubmit={handleLogin} className="flex flex-col text-left w-full">
          <label className="text-[13px] font-medium text-[#444] mb-1.5">Email</label>
          <div className="relative mb-5">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-base leading-none pointer-events-none">
              ✉️
            </span>
            <input
              type="email"
              placeholder="your.email@college.edu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-3 px-3 pl-[42px] rounded-xl border-[1.5px] border-[#ebebeb] bg-[#fafafa] text-sm text-[#333] box-border transition-all focus:outline-none focus:border-[#f59e0b] focus:bg-white focus:shadow-[0_0_0_3px_rgba(245,158,11,0.12)]"
            />
          </div>

          <label className="text-[13px] font-medium text-[#444] mb-1.5">Password</label>
          <div className="relative mb-5">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-base leading-none pointer-events-none">
              🔒
            </span>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-3 px-3 pl-[42px] rounded-xl border-[1.5px] border-[#ebebeb] bg-[#fafafa] text-sm text-[#333] box-border transition-all focus:outline-none focus:border-[#f59e0b] focus:bg-white focus:shadow-[0_0_0_3px_rgba(245,158,11,0.12)]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 mt-1.5 border-none rounded-full text-white text-base font-semibold tracking-wide cursor-pointer transition-all hover:opacity-90 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(245,158,11,0.4)] active:translate-y-0"
            style={{
              background: "linear-gradient(135deg, #f59e0b, #fb923c)",
              boxShadow: "0 4px 16px rgba(245, 158, 11, 0.35)",
            }}
          >
            Login
          </button>
        </form>

        <div className="flex items-center gap-3 my-5 text-[#ccc] text-[13px]">
          <div className="flex-1 h-px bg-[#ebebeb]" />
          <span>or</span>
          <div className="flex-1 h-px bg-[#ebebeb]" />
        </div>

        <button
          className="w-full py-3 border-[1.5px] border-[#ebebeb] rounded-full bg-white text-[#555] text-[15px] font-medium cursor-pointer transition-all hover:border-[#f59e0b] hover:text-[#f59e0b] hover:bg-[rgba(245,158,11,0.04)] hover:-translate-y-0.5 active:translate-y-0"
          onClick={() => navigate("/signup")}
        >
          Sign up
        </button>
      </div>
    </div>
    </div>
  );
}

export default Login;
