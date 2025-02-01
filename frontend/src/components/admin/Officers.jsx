import React, { useEffect, useState } from "react";
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
import apiRequest from "../../lib/apiRequest";

function Officers() {
  const [cases, setCases] = useState([
    { id: "C001", description: "Theft at Main St", status: "Open" },
    { id: "C002", description: "Vandalism in Central Park", status: "Open" },
  ]);
  const [officers, setOfficers] = useState([]);

  const [selectedCase, setSelectedCase] = useState("");
  const [selectedOfficer, setSelectedOfficer] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await apiRequest.get("/officer/all");
        const data = res.data.officers;
        console.log(res.data.officers);
        setOfficers(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const handleAssignCase = (e) => {
    e.preventDefault();
    if (selectedCase && selectedOfficer) {
      const updatedOfficers = officers.map((officer) =>
        officer.id === parseInt(selectedOfficer)
          ? { ...officer, cases: [...officer.cases, selectedCase] }
          : officer
      );
      const updatedCases = cases.map((case_) =>
        case_.id === selectedCase ? { ...case_, status: "Assigned" } : case_
      );
      setOfficers(updatedOfficers);
      setCases(updatedCases);
      setSelectedCase("");
      setSelectedOfficer("");
    }
  };

  const filteredOfficers = officers.filter(
    (officer) =>
      officer.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      officer.badgeNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Officer List</h2>
        <div className="mb-4 flex items-center">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search officers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Surname
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Badge
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rank
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Province
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                #No Assigned Cases
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredOfficers.map((officer) => (
              <tr key={officer.badgeNumber}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {officer.firstname}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {officer.surname}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {officer.badgeNumber}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{officer.rank}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {officer.province}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {officer?.cases?.length}
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
