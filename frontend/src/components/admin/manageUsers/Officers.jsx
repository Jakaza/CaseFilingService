import React, { useEffect, useState } from "react";
import { FaUserTie, FaUserSlash, FaUserCheck, FaBan } from "react-icons/fa";
import apiRequest from "../../../lib/apiRequest";

function Officers() {
  const [officers, setOfficers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await apiRequest.get("/officer/all");
        setOfficers(response.data.officers);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const handleSuspendOfficer = (officerId) => {
    setOfficers(
      officers.map((officer) =>
        officer.id === officerId
          ? { ...officer, status: officer.status === "Active" ? "Suspended" : "Active" }
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

  const handleBlockOfficer = (officerId) => {
    setOfficers(
      officers.map((officer) =>
        officer.id === officerId ? { ...officer, isBlocked: !officer.isBlocked } : officer
      )
    );
  };

  const filteredOfficers = officers.filter(
    (officer) =>
      officer.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      officer.badgeNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="overflow-x-auto">
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
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredOfficers.map((officer) => (
              <tr key={officer.badgeNumber}>
                <td className="px-6 py-4 whitespace-nowrap">{officer.firstname}</td>
                <td className="px-6 py-4 whitespace-nowrap">{officer.badgeNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap">{officer.role}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex gap-2">
                 
                 
                <button
  onClick={() => handleBlockOfficer(officer.id)}
  className={`px-2 py-1 flex items-center gap-1 rounded ${
    officer.isBlocked ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
  }`}
>
  <FaBan /> {officer.isBlocked ? "Unblock" : "Block"}
</button>

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
