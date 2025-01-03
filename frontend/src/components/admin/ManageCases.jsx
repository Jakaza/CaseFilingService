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
  const [view, setView] = useState(false);
  const [fullDetails, setFullDetails] = useState({});
  const [officers, setOfficers] = useState([
    { id: 1, name: "John Doe", badge: "B001", cases: [] },
    { id: 2, name: "Jane Smith", badge: "B002", cases: [] },
  ]);
  const [selectedOfficer, setSelectedOfficer] = useState("");

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

  const handleCloseView = (caseID = "") => {
    if (caseID != null) {
      // Set Case Details Here and view
      setView(true);
    } else {
      setView(false);
    }
  };

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
      {view ? (
        <>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <FaEye className="mr-2" /> Full Case Details
            </h2>
            <button
              onClick={() => handleCloseView(null)}
              className="rounded text-white p-1 bg-blue-600 hover:bg-blue-700"
            >
              Close
            </button>
          </div>
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center">
              <p>
                Status : <strong>In Progress</strong>{" "}
              </p>
            </div>
          </div>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Case ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date Reported
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Province
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td>C1282UD</td>
                <td>Joseph Hlungwane</td>
                <td>21-Dec-2024</td>
                <td>071 1770 423</td>
                <td>JakazaJJ@gmail.com</td>
                <td>Limpopo</td>
              </tr>
            </tbody>
          </table>

          <h4 className="text-2xl mt-4 font-semibold mb-4 flex items-center">
            Statement
          </h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi sint
            accusantium unde aperiam similique aliquam eveniet odit. Hic
            pariatur doloribus quidem possimus! Earum exercitationem ipsam quia,
            dolor quasi reprehenderit ut.
          </p>

          <br />
          <hr />

          <>
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <FaClipboardList className="mr-2" /> Assign Case
            </h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="officerSelect"
                  className="block text-sm font-medium text-gray-700"
                >
                  Select Officer
                </label>
                <select
                  id="officerSelect"
                  value={selectedOfficer}
                  onChange={(e) => setSelectedOfficer(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  required
                >
                  <option value="">Select an officer</option>
                  {officers.map((officer) => (
                    <option key={officer.id} value={officer.id}>
                      {officer.name} ({officer.badge})
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              >
                Assign Case
              </button>
            </form>
          </>
        </>
      ) : (
        <>
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
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
                  {/* <td className="px-6 py-4 whitespace-nowrap">
                {case_.status != "Assigned" ? (
                  <button className="flex items-center w-full p-2 rounded text-white bg-blue-600 hover:bg-blue-700">
                    Assign Officer
                  </button>
                ) : (
                  <button disabled>Already Assigned</button>
                )}
              </td> */}

                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleCloseView(case_.id)}
                      className="flex items-center w-full p-2 rounded text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Full Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default ManageCases;
