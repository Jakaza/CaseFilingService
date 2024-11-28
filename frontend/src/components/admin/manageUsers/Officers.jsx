import React, { useState } from "react";
import { FaUserTie, FaUserSlash, FaUserCheck } from "react-icons/fa";

function Officers() {
  const [officers, setOfficers] = useState([
    {
      id: 1,
      name: "John Doe",
      badge: "B001",
      cases: [],
      role: "Officer",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      badge: "B002",
      cases: [],
      role: "Supervisor",
      status: "Active",
    },
    {
      id: 3,
      name: "Mike Johnson",
      badge: "B003",
      cases: [],
      role: "Officer",
      status: "Suspended",
    },
    {
      id: 11,
      name: "John Doe",
      badge: "B001",
      cases: [],
      role: "Officer",
      status: "Active",
    },
    {
      id: 21,
      name: "Jane Smith",
      badge: "B002",
      cases: [],
      role: "Supervisor",
      status: "Active",
    },
    {
      id: 31,
      name: "Mike Johnson",
      badge: "B003",
      cases: [],
      role: "Officer",
      status: "Suspended",
    },
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
      status: "Open",
      dateReported: "2023-05-18",
      assignedOfficer: null,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSuspendOfficer = (officerId) => {
    setOfficers(
      officers.map((officer) =>
        officer.id === officerId
          ? {
              ...officer,
              status: officer.status === "Active" ? "Suspended" : "Active",
            }
          : officer
      )
    );
  };

  const handlePromoteOfficer = (officerId) => {
    setOfficers(
      officers.map((officer) =>
        officer.id === officerId ? { ...officer, role: "Supervisor" } : officer
      )
    );
  };

  const filteredOfficers = officers.filter(
    (officer) =>
      officer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      officer.badge.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="overflow-x-auto ">
      <div className="max-h-80 overflow-y-auto custom-scroll">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Badge
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredOfficers.map((officer) => (
              <tr key={officer.id}>
                <td className="px-6 py-4 whitespace-nowrap">{officer.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{officer.badge}</td>
                <td className="px-6 py-4 whitespace-nowrap">{officer.role}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      officer.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {officer.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => handleSuspendOfficer(officer.id)}
                    className={`text-blue-600 hover:text-blue-900 mr-2 ${
                      officer.status === "Active"
                        ? "bg-red-100"
                        : "bg-green-100"
                    } px-2 py-1 rounded`}
                  >
                    {officer.status === "Active" ? (
                      <FaUserSlash />
                    ) : (
                      <FaUserCheck />
                    )}
                  </button>
                  {officer.role === "Officer" && (
                    <button
                      onClick={() => handlePromoteOfficer(officer.id)}
                      className="text-green-600 hover:text-green-900 bg-green-100 px-2 py-1 rounded"
                    >
                      <FaUserTie />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Officers;
