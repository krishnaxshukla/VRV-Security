import React, { useState } from "react";

function RoleForm({ onClose, onAdd }) {
  const [name, setName] = useState("");
  const [permissions, setPermissions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Role name is required!");
      return;
    }
    onAdd({ id: Date.now(), name, permissions });
    onClose();
  };

  const handlePermissionChange = (e) => {
    const value = e.target.value;
    setPermissions((prev) =>
      prev.includes(value) ? prev.filter((p) => p !== value) : [...prev, value]
    );
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-gradient-to-br from-purple-500 via-indigo-500 to-teal-500 rounded-lg p-8 shadow-xl w-full max-w-lg">
        <h3 className="text-3xl font-semibold text-white mb-6 text-center">Add New Role</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-white font-semibold mb-2">Role Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none transition duration-300"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter role name"
            />
          </div>
          <div className="mb-6">
            <label className="block text-white font-semibold mb-2">Permissions</label>
            <div className="flex flex-wrap gap-4">
              {["Read", "Write", "Delete"].map((perm) => (
                <label
                  key={perm}
                  className="flex items-center space-x-3 cursor-pointer text-white hover:text-gray-200"
                >
                  <input
                    type="checkbox"
                    value={perm}
                    onChange={handlePermissionChange}
                    className="w-5 h-5 text-green-500 focus:ring-0"
                  />
                  <span>{perm}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="flex justify-end space-x-6">
            <button
              type="button"
              className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition duration-200"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-gradient-to-br from-green-400 to-teal-500 text-white px-6 py-3 rounded-lg hover:scale-105 transition duration-200"
            >
              Save Role
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RoleForm;
