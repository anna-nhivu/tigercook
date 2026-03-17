import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/dashboard.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  return (
    <div>

      <Header />

      <main className="dashboard-body">

        <div className="welcome-card">

          <h1>Welcome to TigerCook! 👋</h1>

          <p>
            Your AI-powered recipe companion for college students.
            Generate delicious meals that match your budget,
            dietary preferences, and cooking time.
          </p>

          <button onClick={() => navigate("/generate")}>
            Generate Your First Recipe →
          </button>

        </div>

      </main>

      <Footer />

    </div>
  );
}

export default Dashboard;