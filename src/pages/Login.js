import "../styles/login.css";

import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function Login() {

  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");

  const navigate    = useNavigate();
  const { login }   = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    // Accept any non-empty email + password for now
    // TODO: replace with real auth when backend is ready
    if (email.trim() !== "" && password.trim() !== "") {
      login();
      navigate("/dashboard");
    } else {
      alert("Please enter your email and password.");
    }
  };

  return (
    <div className="login-page">

      <div className="login-card">

        {/* Chef hat logo icon */}
        <div className="login-logo-icon">👨‍🍳</div>

        <h1>TigerCook</h1>
        <p>Sign in to start cooking!</p>

        <form onSubmit={handleLogin}>

          <label>Email</label>
          <div className="input-group">
            <span className="icon">✉️</span>
            <input
              type="email"
              placeholder="your.email@college.edu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <label>Password</label>
          <div className="input-group">
            <span className="icon">🔒</span>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

        </form>

        {/* Divider */}
        <div className="divider">or</div>

        {/* Sign up */}
        <button
          className="signup-btn"
          onClick={() => navigate("/signup")}
        >
          Sign up
        </button>

      </div>

    </div>
  );
}

export default Login;