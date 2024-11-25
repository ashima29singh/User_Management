import React from "react";
import { FaUserShield, FaUser, FaEye } from "react-icons/fa";

const roles = [
  {
    name: "Admin",
    permissions: ["View", "Add Roles", "Add User"],
  },
  {
    name: "Approver",
    permissions: ["View", "Approve"],
  },
  {
    name: "Viewer",
    permissions: ["View"],
  },
  {
    name: "Manager",
    permissions: ["View", "Add Roles"],
  },
];

const RolePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div>
        <h1 className="text-2xl font-bold">Roles Management</h1>
        <h3 className="text-gray-500">
          Manage your roles and permissions here.
        </h3>
      </div>
      <br />
      <div className="flex justify-between items-center p-4 pl-0">
        <div>
          <span className="text-l font-bold ">All Roles </span>
          <span className="text-l text-gray-500">{roles.length}</span>
        </div>
        <button className="flex items-center px-4 py-2 bg-black text-white rounded">
          <span className="text-xl font-bold mr-2">+</span>
          <span>Add Role</span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {roles.map((element) => {
          return (
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <FaUser className="text-gray-500 text-xl" />
              </div>
              <h2 className="text-xl font-bold text-gray-600 my-4">
                {element.name}
              </h2>
              <p className="h-10 text-gray-600 mb-4">
                {" "}
                Has{" "}
                <span className="font-semibold">
                  {element.permissions.join(", ")}
                </span>{" "}
                permissions.
              </p>
              <button className="mt-2 px-4 py-2 bg-black text-white rounded">
                Manage {element.name}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RolePage;
