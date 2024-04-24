import React from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "./sideBar";

const Dashboard = () => {
  const role = localStorage.getItem("role");
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("role");
    navigate("/");
  };

  return (
    <div className="flex flex-col w-full h-screen">
      <div className="bg-gray-200 py-4 ">
        <div className=" px-4  flex justify-between items-center">
          <h3 className="text-lg font-semibold">Navigation Bar</h3>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="flex flex-1">
        <SideBar role={role} />

        <div className="flex-1 p-4">
          <div className="bg-white rounded-md shadow-md p-4">Welcome</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
