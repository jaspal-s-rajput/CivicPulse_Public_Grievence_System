import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./pages/Citizen_panel/ProtectedRoute.jsx";
import "leaflet/dist/leaflet.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// AUTH PAGES
import LoginPage from "./pages/Authentication/LoginPage.jsx";
import RegisterPage from "./pages/Authentication/RegisterPage.jsx";
import AdminSignup from "./pages/Authentication/AdminSignup.jsx";
import ForgotPassword from "./pages/Authentication/ForgotPassword.jsx";

// PUBLIC PAGES
import PublicLayout from "./pages/Public_pages/PublicLayout.jsx";
import Home from "./pages/Public_pages/Home.jsx";
import About from "./pages/Public_pages/About.jsx";
import FAQ from "./pages/Public_pages/Faq.jsx";
import KeepYourselfAware from "./pages/Public_pages/KeepYourselfAware.jsx";
import MakeInIndia from "./pages/Public_pages/MakeInIndia.jsx";

// DASHBOARDS
import UserDashboard from "./pages/Citizen_panel/Dashboard/UserDashboard.jsx";
import OfficerDashboard from "./pages/Officer_panel/Dashboard.jsx";
import AdminDashboard from "./pages/Admin_panel/AdminDashboard.jsx";

function App() {
  return (
    <div className="app">
      <ToastContainer
        position="top-center"
        autoClose={4000}
        theme="colored"
      />

      <Routes>

        {/* 🌐 PUBLIC ROUTES (NO LOGIN REQUIRED) */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/aware" element={<KeepYourselfAware />} />
          <Route path="/make-in-india" element={<MakeInIndia />} />
        </Route>

        {/* 🔐 AUTH ROUTES */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/adminsignup" element={<AdminSignup />} />
        <Route path="/forgot-password/:role" element={<ForgotPassword />} />

        {/* 🧑 USER DASHBOARD */}
        <Route
          path="/user-dashboard"
          element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          }
        />

        {/* 👮 OFFICER DASHBOARD */}
        <Route
          path="/officer-dashboard"
          element={
            <ProtectedRoute>
              <OfficerDashboard />
            </ProtectedRoute>
          }
        />

        {/* 🛠️ ADMIN DASHBOARD */}
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

      </Routes>
    </div>
  );
}

export default App;
