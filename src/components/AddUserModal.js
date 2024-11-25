import React, { useState } from "react";

const UserModal = ({
  isOpen,
  onClose,
  namee,
  username,
  role,
  email,
  phone,
  isEditPage,
}) => {
  const [name, setName] = useState(namee || "");
  const [userName, setUserName] = useState(username || "");
  const [roleValue, setRoleValue] = useState(role || "");
  const [emailValue, setEmailValue] = useState(email || "");
  const [phoneValue, setPhoneValue] = useState(phone || "");
  if (!isOpen) return null;

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRoleValue(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhoneValue(e.target.value);
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
        <div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={handleNameChange}
              placeholder="Enter your name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="userName"
            >
              Username
            </label>
            <input
              type="text"
              name="userName"
              id="userName"
              value={userName}
              onChange={handleUserNameChange}
              placeholder="Enter your user name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="role"
            >
              Role
            </label>
            <select
              name="role"
              id="role"
              value={roleValue}
              onChange={handleRoleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="" disabled>
                Select your role
              </option>
              <option value="Admin">Admin</option>
              <option value="Viewer">Viewer</option>
              <option value="User">Manager</option>
              <option value="User">Approver</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              value={emailValue}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={phoneValue}
              onChange={handlePhoneChange}
              placeholder="Enter your phone"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
        </div>

        <div className="flex items-center justify-between mt-10">
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={onClose}
            >
              {isEditPage ? "Edit User" : "Add User"}
            </button>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className=" text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
