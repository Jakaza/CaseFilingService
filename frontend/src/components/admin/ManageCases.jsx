import React, { useState } from "react";
import {
  FaUserPlus,
  FaClipboardList,
  FaSearch,
  FaTachometerAlt,
  FaBars,
  FaBuilding,
  FaMapMarkerAlt,
  FaPhone,
  FaChevronDown,
  FaChevronRight,
  FaEye,
  FaFilter,
} from "react-icons/fa";
import { policeStationsData } from "./../../lib/policeStationsData.js";

function ManageCases() {
  const [officers, setOfficers] = useState([
    { id: 1, name: "John Doe", badge: "B001", cases: [] },
    { id: 2, name: "Jane Smith", badge: "B002", cases: [] },
  ]);
  const [cases, setCases] = useState([
    {
      id: "C001",
      description: "Theft at Main St",
      status: "Open",
      dateReported: "2023-05-15",
      assignedOfficer: null,
    },
    {
      id: "C002",
      description: "Vandalism in Central Park",
      status: "Assigned",
      dateReported: "2023-05-16",
      assignedOfficer: "John Doe",
    },
    {
      id: "C003",
      description: "Domestic dispute on Elm St",
      status: "In Progress",
      dateReported: "2023-05-17",
      assignedOfficer: "Jane Smith",
    },
    {
      id: "C004",
      description: "Missing person report",
      status: "notAssigned",
      dateReported: "2023-05-18",
      assignedOfficer: null,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [caseFilter, setCaseFilter] = useState("all");

  const filteredCases = cases.filter((case_) => {
    if (caseFilter === "all") return true;
    if (caseFilter === "open") return case_.status === "Open";
    if (caseFilter === "assigned") return case_.status === "Assigned";
    if (caseFilter === "notAssigned") return case_.status === "notAssigned";
    if (caseFilter === "inProgress") return case_.status === "In Progress";
    return true;
  });
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <FaEye className="mr-2" /> View Reported Cases
      </h2>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center">
          <FaFilter className="text-gray-400 mr-2" />
          <select
            value={caseFilter}
            onChange={(e) => setCaseFilter(e.target.value)}
            className="p-2 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          >
            <option value="all">All Cases</option>
            <option value="open">Open Cases</option>
            <option value="assigned">Assigned Cases</option>
            <option value="notAssigned">Not Assigned Cases</option>
            <option value="inProgress">In Progress Cases</option>
          </select>
        </div>
        <div className="flex items-center">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search cases..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Case ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date Reported
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Assigned Officer
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredCases.map((case_) => (
            <tr key={case_.id}>
              <td className="px-6 py-4 whitespace-nowrap">{case_.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {case_.description}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    case_.status === "Open"
                      ? "bg-yellow-100 text-yellow-800"
                      : case_.status === "Assigned"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {case_.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {case_.dateReported}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {case_.assignedOfficer || "Not Assigned"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageCases;
