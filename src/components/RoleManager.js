import React from "react";
import { FaUserShield, FaUser, FaEye } from "react-icons/fa";

const RolePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center mb-8">Role Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Admin Role */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-lg text-center">
          <div className="flex justify-center mb-4">
            <FaUserShield className="text-blue-500 text-4xl" />
          </div>
          <h2 className="text-xl font-bold text-blue-600">Admin</h2>
          <p className="text-gray-600 mb-4">Has full access to manage the system and users.</p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Manage Admin
          </button>
        </div>

        {/* User Role */}
        <div className="bg-green-50 p-6 rounded-lg shadow-lg text-center">
          <div className="flex justify-center mb-4">
            <FaUser className="text-green-500 text-4xl" />
          </div>
          <h2 className="text-xl font-bold text-green-600">User</h2>
          <p className="text-gray-600 mb-4">Can view and interact with available features.</p>
          <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            Manage User
          </button>
        </div>

        {/* Viewer Role */}
        <div className="bg-purple-50 p-6 rounded-lg shadow-lg text-center">
          <div className="flex justify-center mb-4">
            <FaEye className="text-purple-500 text-4xl" />
          </div>
          <h2 className="text-xl font-bold text-purple-600">Viewer</h2>
          <p className="text-gray-600 mb-4">Read-only access to view content and reports.</p>
          <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
            Manage Viewer
          </button>
        </div>

      </div>
    </div>
  );
};

export default RolePage;
