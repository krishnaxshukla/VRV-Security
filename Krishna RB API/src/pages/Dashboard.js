import React, { useState } from "react";
import UserTable from "../components/UserManagement/UserTable";
import RoleTable from "../components/RoleManagement/RoleTable";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("users");

  return (
    <div className="dashboard min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="flex justify-center bg-black via-yellow-500 to-yellow-600 py-4 shadow-lg rounded-lg">
        <button
          className={`mx-4 px-6 py-3 rounded-md font-semibold text-lg transition-colors duration-300 ${
            activeTab === "users"
              ? "bg-yellow-500 text-white shadow-lg"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900"
          }`}
          onClick={() => setActiveTab("users")}
        >
          User Management
        </button>
        <button
          className={`mx-4 px-6 py-3 rounded-md font-semibold text-lg transition-colors duration-300 ${
            activeTab === "roles"
              ? "bg-green-500 text-white shadow-lg"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900"
          }`}
          onClick={() => setActiveTab("roles")}
        >
          Role Management
        </button>
      </nav>

      {/* Content Section */}
      <div className="dashboard-content p-6 mt-8 bg-white rounded-lg shadow-md">
        {activeTab === "users" ? (
          <UserTable />
        ) : (
          <RoleTable />
        )}
      </div>
    </div>
  );
}

export default Dashboard;
