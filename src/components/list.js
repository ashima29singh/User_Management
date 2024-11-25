// import * as React from 'react';
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import React, { useState, useEffect } from "react";
import UserItem from "./useritem";
import UserModal from "./AddUserModal";


const rows = [
  {
    name: "Clementina DuBuque",
    username: "Jon",
    role: "Admin",
    email: "Sincere@april.biz",
    phone: "3468953657",
  },
  {
    name: "Leanne Graham",
    username: "Bret",
    role: "Admin",
    email: "Sincere@april.biz",
    phone: "98384735436",
  },
  {
    name: "Ervin Howell",
    username: "Antonette",
    role: "User",
    email: "Sincere@april.biz",
    phone: "6774837657",
  },
  {
    name: "Clementine Bauch",
    username: "Samantha",
    role: "Viewer",
    email: "Sincere@april.biz",
    phone: "25675490875",
  },
  {
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    role: "User",
    email: "Sincere@april.biz",
    phone: "9864326560",
  },
  {
    name: "Glenna Reichert",
    username: "Delphine",
    role: "Viewer",
    email: "Sincere@april.biz",
    phone: "8976543201",
  },
];

export default function DataGridDemo() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const updateNews = async () => {
  //   try {
  //     const url = `https://jsonplaceholder.typicode.com/users`;
  //     const response = await fetch(url);
  //     if (!response.ok) throw new Error("Failed to fetch data");
  //     const parsedData = await response.json();
  //     setRows(parsedData); // Set the rows with fetched data
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };
  //   useEffect(() => {
  //     updateNews();
  //   }, []);
  // console.log(rows);

  return (
    <div className="row px-8 py-4">
      <div>
        <h1 className="text-2xl font-bold">User Management</h1>
        <h3 className="text-gray-500">
          Manage your team members and account here.
        </h3>
      </div>
      <br />
      <div className="flex justify-between items-center p-4 pl-0">
        <div>
          <span className="text-l font-bold ">All Users </span>
          <span className="text-l text-gray-500">{rows.length}</span>
        </div>
        <button className="flex items-center px-4 py-2 bg-black text-white rounded" onClick={() => setIsModalOpen(true)}>
          <span className="text-xl font-bold mr-2">+</span>
          <span>Add User</span>
        </button>
      </div>
      <UserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      ></UserModal>
      <div className="grid grid-cols-12 font-bold gap-4 mt-8 mb-4 ">
        <h1 className="col-span-5">Name</h1>
        <h1 className="col-span-2">Username</h1>
        <h1 className="col-span-2">Role</h1>
        <h1 className="col-span-2">Phone</h1>
      </div>
      <hr className="border border-gray-200"></hr>
      {rows.map((element) => {
        return (
          <div className="col-md-4" key={element.username}>
            <UserItem
              name={element.name}
              username={element.username}
              email={element.email}
              role={element.role}
              phone={element.phone}
            />
          </div>
        );
      })}
    </div>
  );
}
