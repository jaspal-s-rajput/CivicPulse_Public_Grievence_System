import { NavLink, useNavigate } from "react-router-dom";
import { Moon, Sun, LogIn } from "lucide-react";
import { useThemePreference } from "../hooks/useThemePreference";
import logoImg from "../assets/india-silver-map.png";
import "./PublicLayout.css";

export default function PublicNavbar() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useThemePreference();

  return (
    <header className="app-header premium-navbar">
      {/* ===== BRAND ===== */}
      <div
        className="logo-group premium-brand"
        role="button"
        tabIndex={0}
        onClick={() => navigate("/")}
        onKeyDown={(e) => e.key === "Enter" && navigate("/")}
      >
        <img src={logoImg} alt="CivicPulse India Logo" />
        <p className="logo-title">CivicPulse India</p>
      </div>

      {/* ===== NAV LINKS ===== */}
      <nav className="nav-glow" aria-label="Primary Navigation">
        <NavLink to="/" end className="nav-item">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-item">
          About
        </NavLink>
        <NavLink to="/faq" className="nav-item">
          FAQ
        </NavLink>
        <NavLink to="/aware" className="nav-item">
          Awareness
        </NavLink>
        <NavLink to="/make-in-india" className="nav-item">
          Make in India
        </NavLink>
      </nav>

      {/* ===== ACTIONS ===== */}
      <div className="nav-actions">
        {/* SINGLE LOGIN / REGISTER BUTTON */}
        <button
          className="nav-auth-btn"
          onClick={() => navigate("/login")}
        >
          <LogIn size={16} />
          Login / Register
        </button>

        {/* THEME TOGGLE */}
        <button
          className="theme-toggle nav-theme"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun /> : <Moon />}
        </button>
      </div>
    </header>
  );
}
