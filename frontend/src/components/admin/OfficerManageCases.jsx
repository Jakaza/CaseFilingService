import React, { useState } from "react";
import { FaSearch, FaFilter, FaEdit } from "react-icons/fa";

function OfficerManageCases() {
  const [officers, setOfficers] = useState([
    {
      id: 1,
      name: "John Doe",
      badge: "B001",
      cases: ["C001", "C002"],
      role: "Officer",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      badge: "B002",
      cases: ["C003"],
      role: "Supervisor",
      status: "Active",
    },
    {
      id: 3,
      name: "Mike Johnson",
      badge: "B003",
      cases: ["C004"],
      role: "Officer",
      status: "Active",
    },
  ]);
  const [cases, setCases] = useState([
    {
      id: "C001",
      description: "Theft at Main St",
      status: "Open",
      dateReported: "2023-05-15",
      assignedOfficer: "John Doe",
    },
    {
      id: "C002",
      description: "Vandalism in Central Park",
      status: "In Progress",
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
      status: "Open",
      dateReported: "2023-05-18",
      assignedOfficer: "Mike Johnson",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [caseFilter, setCaseFilter] = useState("all");
  const [loggedInOfficer, setLoggedInOfficer] = useState(officers[0]); // Simulating a logged-in officer

  const handleUpdateCaseStatus = (caseId, newStatus) => {
    setCases(
      cases.map((case_) =>
        case_.id === caseId ? { ...case_, status: newStatus } : case_
      )
    );
  };

  const filteredCases = cases
    .filter((case_) => {
      if (caseFilter === "all") return true;
      if (caseFilter === "open") return case_.status === "Open";
      if (caseFilter === "inProgress") return case_.status === "In Progress";
      if (caseFilter === "closed") return case_.status === "Closed";
      return true;
    })
    .filter(
      (case_) =>
        case_.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        case_.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        case_.assignedOfficer.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <FaEdit className="mr-2" /> Update Case Status
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
            <option value="inProgress">In Progress Cases</option>
            <option value="closed">Closed Cases</option>
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
      <div className="overflow-x-auto">
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
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredCases
              .filter((case_) => case_.assignedOfficer === loggedInOfficer.name)
              .map((case_) => (
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
                          : case_.status === "In Progress"
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
                    {case_.assignedOfficer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <select
                      value={case_.status}
                      onChange={(e) =>
                        handleUpdateCaseStatus(case_.id, e.target.value)
                      }
                      className="p-2 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    >
                      <option value="Open">Open</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Closed">Closed</option>
                    </select>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OfficerManageCases;
