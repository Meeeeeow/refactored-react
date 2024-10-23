import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";
import Users from "./Users";
import Appointments from "./Appointments";
import Notification from "./Notification";

const Dashboard = () => {
  const { currentUser, username } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("users");

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div>
      <nav className="bg-gray-800 text-white p-4 flex justify-between">
        <div>
          <button
            className={`mr-4 ${activeTab === "users" ? "font-bold" : ""}`}
            onClick={() => setActiveTab("users")}
          >
            Users
          </button>
          <button
            className={`mr-4 ${
              activeTab === "appointments" ? "font-bold" : ""
            }`}
            onClick={() => setActiveTab("appointments")}
          >
            Appointments
          </button>
          <button
            className={`mr-4 ${
              activeTab === "notifications" ? "font-bold" : ""
            }`}
            onClick={() => setActiveTab("notifications")}
          >
            Notifications
          </button>
        </div>
        <div>
          {currentUser ? (
            <span className="mr-4">Welcome, {username || "User"}!</span>
          ) : (
            <span className="mr-4">Welcome! Please log in.</span>
          )}
          {currentUser && (
            <button
              onClick={handleLogout}
              className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
            >
              Logout
            </button>
          )}
        </div>
      </nav>

      <div className="p-4">
        {activeTab === "users" && <Users />}
        {activeTab === "appointments" && <Appointments />}
        {activeTab === "notifications" && <Notification />}
      </div>
    </div>
  );
};

export default Dashboard;
