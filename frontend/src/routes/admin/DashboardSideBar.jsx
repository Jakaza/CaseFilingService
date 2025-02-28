import React from "react";
import {
  FaTachometerAlt,
  FaUserPlus,
  FaClipboardList,
  FaBuilding,
  FaEye,
  FaUsers,
  FaEdit,
} from "react-icons/fa";

function DashboardSideBar({ activeItem, setActiveItem }) {
  return (
    <div className="bg-blue-800 fixed  text-white w-64 min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-8">SAPS Admin</h1>
      <ul>
        <li className="mb-4">
          <button
            onClick={() => setActiveItem("dashboard")}
            className={`flex items-center w-full p-2 rounded ${
              activeItem === "dashboard" ? "bg-blue-600" : "hover:bg-blue-700"
            }`}
          >
            <FaTachometerAlt className="mr-2" /> Dashboard
          </button>
        </li>
        <li className="mb-4">
          <button
            onClick={() => setActiveItem("addOfficer")}
            className={`flex items-center w-full p-2 rounded ${
              activeItem === "addOfficer" ? "bg-blue-600" : "hover:bg-blue-700"
            }`}
          >
            <FaUserPlus className="mr-2" /> Add New Officer
          </button>
        </li>
        <li className="mb-4">
          <button
            onClick={() => setActiveItem("officers")}
            className={`flex items-center w-full p-2 rounded ${
              activeItem === "officers" ? "bg-blue-600" : "hover:bg-blue-700"
            }`}
          >
            <FaClipboardList className="mr-2" /> List Of Officers
          </button>
        </li>
        <li className="mb-4">
          <button
            onClick={() => setActiveItem("addStation")}
            className={`flex items-center w-full p-2 rounded ${
              activeItem === "addStation" ? "bg-blue-600" : "hover:bg-blue-700"
            }`}
          >
            <FaBuilding className="mr-2" /> Police Stations
          </button>
        </li>
        <li className="mb-4">
          <button
            onClick={() => setActiveItem("manageCasses")}
            className={`flex items-center w-full p-2 rounded ${
              activeItem === "manageCasses"
                ? "bg-blue-600"
                : "hover:bg-blue-700"
            }`}
          >
            <FaEye className="mr-2" /> Manage Casses
          </button>
        </li>

        <li className="mb-4">
          <button
            onClick={() => setActiveItem("manageUsers")}
            className={`flex items-center w-full p-2 rounded ${
              activeItem === "manageUsers" ? "bg-blue-600" : "hover:bg-blue-700"
            }`}
          >
            <FaUsers className="mr-2" /> Manage Users
          </button>
        </li>
      </ul>
    </div>
  );
}

export default DashboardSideBar;
