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

// USER DASHBOARD
import UserDashboard from "./pages/Citizen_panel/Dashboard/UserDashboard.jsx";

// OFFICER DASHBOARD
import OfficerDashboard from "./pages/Officer_panel/Dashboard.jsx";

// ADMIN DASHBOARD
import AdminDashboard from "./pages/Admin_panel/AdminDashboard.jsx";

function App() {
  return (
    <div className="app">
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />

      <Routes>
        {/* AUTH ROUTES */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/adminsignup" element={<AdminSignup />} />
        <Route path="/forgot-password/:role" element={<ForgotPassword />} />

        {/* USER DASHBOARD */}
        <Route
          path="/user-dashboard"
          element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          }
        />

        {/* OFFICER DASHBOARD */}
        <Route
          path="/officer-dashboard"
          element={
            <ProtectedRoute>
              <OfficerDashboard />
            </ProtectedRoute>
          }
        />

        {/* ADMIN DASHBOARD */}
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