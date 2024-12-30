import React, { useState } from "react";

import {
  FaTachometerAlt,
  FaUserPlus,
  FaClipboardList,
  FaBars,
  FaSearch,
  FaBuilding,
  FaMapMarkerAlt,
  FaPhone,
  FaChevronDown,
  FaChevronRight,
} from "react-icons/fa";

import { policeStationsData } from "./../../lib/policeStationsData.js";

function AddNewOfficer() {
  const [newOfficer, setNewOfficer] = useState({
    firstname: "",
    surname: "",
    email: "",
    phone: "",
    rank: "",
    role: "",
    province: "",
    township: "",
  });

  const provinces = Object.keys(policeStationsData);

  const ranks = [
    "Constable",
    "Lance Corporal",
    "Corporal",
    "Sergeant",
    "Senior Sergeant",
    "Warrant Officer",
    "Lieutenant",
    "Captain",
    "Senior Captain",
    "Lieutenant Colonel",
    "Colonel",
    "Brigadier",
    "Brigadier General",
    "Major General",
    "Lieutenant General",
    "General",
  ];

  const roles = ["Officer", "supervisor"];

  const handleAddOfficer = (e) => {
    e.preventDefault();

    console.log(newOfficer);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <FaUserPlus className="mr-2" /> Add New Officer
      </h2>
      <form onSubmit={handleAddOfficer} className="space-y-4">
        <div>
          <label
            htmlFor="officerName"
            className="block text-sm font-medium text-gray-700"
          >
            Name *
          </label>
          <input
            type="text"
            id="firstname"
            value={newOfficer.firstname}
            onChange={(e) =>
              setNewOfficer({ ...newOfficer, firstname: e.target.value })
            }
            className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            required
          />
        </div>

        <div>
          <label
            htmlFor="officerName"
            className="block text-sm font-medium text-gray-700"
          >
            Surname *
          </label>
          <input
            type="text"
            id="surname"
            value={newOfficer.surname}
            onChange={(e) =>
              setNewOfficer({ ...newOfficer, surname: e.target.value })
            }
            className="mt-1 block w-full p-1 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            required
          />
        </div>

        <div>
          <label
            htmlFor="officerName"
            className="block text-sm font-medium text-gray-700"
          >
            Email *
          </label>
          <input
            type="text"
            id="email"
            value={newOfficer.email}
            onChange={(e) =>
              setNewOfficer({ ...newOfficer, email: e.target.value })
            }
            className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            required
          />
        </div>

        <div>
          <label
            htmlFor="officerName"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number *
          </label>
          <input
            type="text"
            id="phone"
            value={newOfficer.phone}
            onChange={(e) =>
              setNewOfficer({ ...newOfficer, phone: e.target.value })
            }
            placeholder="e.g. 071 1770 423"
            className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            required
          />
        </div>

        <div>
          <label
            htmlFor="role"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Role
          </label>
          <select
            id="role"
            value={newOfficer.role}
            onChange={(e) =>
              setNewOfficer((prev) => ({
                ...prev,
                role: e.target.value,
              }))
            }
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          >
            <option value="">Select SAPS Role</option>
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="rank"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Rank
          </label>
          <select
            id="rank"
            value={newOfficer.rank}
            onChange={(e) =>
              setNewOfficer((prev) => ({
                ...prev,
                rank: e.target.value,
              }))
            }
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          >
            <option value="">Select SAPS Ranks</option>
            {ranks.map((rank) => (
              <option key={rank} value={rank}>
                {rank}
              </option>
            ))}
          </select>
        </div>
        <div>
          {/* Province Selection */}
          <div className="mb-4">
            <label
              htmlFor="province"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Province *
            </label>
            <select
              id="province"
              value={newOfficer.province}
              onChange={(e) =>
                setNewOfficer((prev) => ({
                  ...prev,
                  province: e.target.value,
                }))
              }
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            >
              <option value="">Select Province</option>
              {provinces.map((province) => (
                <option key={province} value={province}>
                  {province}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          {/* Township Selection (conditionally rendered) */}
          {newOfficer.province && (
            <div className="mb-4">
              <label
                htmlFor="township"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Township *
              </label>
              <select
                id="township"
                value={newOfficer.township}
                onChange={(e) =>
                  setNewOfficer((prev) => ({
                    ...prev,
                    township: e.target.value,
                  }))
                }
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              >
                <option value="">Select Township</option>
                {Object.keys(
                  policeStationsData[newOfficer.province].townships
                ).map((township) => (
                  <option key={township} value={township}>
                    {township}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Add Officer
        </button>
      </form>
    </div>
  );
}

export default AddNewOfficer;
