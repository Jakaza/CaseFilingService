import React, { useState } from "react";
import Users from "./manageUsers/Users.jsx";
import Officers from "./manageUsers/Officers.jsx";
import { FaUsers } from "react-icons/fa";

function ManageUsers() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <FaUsers className="mr-2" /> Manage Users
      </h2>

      <Users />

      <h3 className="text-xl font-semibold mt-8 mb-4">
        Manage Officers and Supervisors
      </h3>
      <Officers />
    </div>
  );
}

export default ManageUsers;
