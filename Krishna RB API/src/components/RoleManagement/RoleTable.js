import React, { useState, useEffect } from "react";
import RoleForm from "./RoleForm";

function RoleTable() {
  const [roles, setRoles] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingRole, setEditingRole] = useState(null);
  const [error, setError] = useState("");

  // Load roles from localStorage
  useEffect(() => {
    const savedRoles = JSON.parse(localStorage.getItem("roles")) || [];
    setRoles(savedRoles);
  }, []);

  // Save roles to localStorage
  useEffect(() => {
    localStorage.setItem("roles", JSON.stringify(roles));
  }, [roles]);

  // Handle Add/Edit Role
  const handleSaveRole = (role) => {
    if (!role.name || role.permissions.length === 0) {
      setError("Role name and permissions are required.");
      return;
    }

    if (editingRole) {
      setRoles((prev) =>
        prev.map((r) => (r.id === editingRole.id ? { ...role, id: r.id } : r))
      );
      setEditingRole(null);
    } else {
      setRoles((prev) => [...prev, { ...role, id: Date.now() }]);
    }
    setShowForm(false);
    setError(""); // Clear error on successful save
  };

  // Handle Delete Role
  const handleDelete = (id) => {
    const newRoles = roles.filter((r) => r.id !== id);
    setRoles(newRoles);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg p-6">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-700">Role Management</h2>
          <button
            className="bg-gradient-to-br from-green-500 to-teal-500 text-white font-semibold px-5 py-2 rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
            onClick={() => setShowForm(true)}
          >
            {editingRole ? "Edit Role" : "Add Role"}
          </button>
        </div>

        {/* Error Display */}
        {error && (
          <div className="bg-red-500 text-white p-3 mb-4 rounded">
            <strong>Error:</strong> {error}
          </div>
        )}

        {/* Roles Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full bg-gray-50 shadow-md rounded-lg">
            <thead className="bg-gradient-to-br from-green-500 to-teal-500 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Role Name</th>
                <th className="px-4 py-3 text-left">Permissions</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {roles.map((role, index) => (
                <tr
                  key={role.id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } hover:bg-gray-200 transition duration-200`}
                >
                  <td className="px-4 py-3 border">{role.name}</td>
                  <td className="px-4 py-3 border">{role.permissions.join(", ")}</td>
                  <td className="px-4 py-3 border flex gap-2">
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                      onClick={() => {
                        setEditingRole(role);
                        setShowForm(true);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                      onClick={() => handleDelete(role.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Role Form */}
        {showForm && (
          <RoleForm
            onClose={() => {
              setEditingRole(null);
              setShowForm(false);
            }}
            onAdd={handleSaveRole}
            role={editingRole}
          />
        )}
      </div>
    </div>
  );
}

export default RoleTable;
