import React, { useState } from "react";
import { FaEllipsisVertical } from "react-icons/fa6";
import UserModal from "./AddUserModal";

const UserItem = (props) => {
  let { name, username, email, phone, role } = props;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getColor = (role) => {
    if (role === "Admin") {
      return "bg-blue-100 text-blue-600";
    } else if (role === "Viewer") {
      return "bg-green-100 text-green-600";
    } else if (role === "Manager") {
      return "bg-purple-100 text-purple-600";
    } else {
      return "bg-pink-100 text-pink-600";
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="grid grid-cols-12 gap-4 mt-4 mb-4 items-center">
        <div className="col-span-5 flex items-center">
          <img
            className="w-12 h-12 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTdmrjoiXGVFEcd1cX9Arb1itXTr2u8EKNpw&s"
          />
          <div className="ml-5">
            <h1 className="font-bold">{name}</h1>
            <h1 className="text-gray-500">{email}</h1>
          </div>
        </div>

        <h1 className="col-span-2 text-gray-500">{username}</h1>

        <div className="col-span-2">
          <div
            className={`inline-flex items-center px-4 py-1 text-sm rounded-full font-semibold ${getColor(
              role
            )}`}
          >
            {role}
          </div>
        </div>
        <h1 className="col-span-2 text-gray-500">{phone}</h1>

        <div
          className="col-span-1 p-0 rounded hover:bg-gray-100 relative"
          onClick={toggleDropdown}
        >
          {/* Icon Button */}
          <button className="p-2 rounded hover:bg-gray-100">
            <FaEllipsisVertical className="text-gray-500" />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg z-10">
              <ul className="py-1">
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => setIsModalOpen(true)}
                >
                  Edit
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => console.log("Delete User clicked")}
                >
                  Delete
                </li>
              </ul>
            </div>
          )}
        </div>

        <UserModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          namee={name}
          username={username}
          email={email}
          role={role}
          phone={phone}
          isEditPage={true}
        ></UserModal>
      </div>
      <hr className="border border-gray-200"></hr>
    </>
  );
};

export default UserItem;
