import React, { useState } from 'react'
import { FaTachometerAlt , FaUserPlus , FaClipboardList , FaBars , FaSearch, FaBuilding ,FaMapMarkerAlt ,FaPhone, FaChevronDown, FaChevronRight  } from "react-icons/fa";

function AssignCase() {

    const [cases, setCases] = useState([
        { id: 'C001', description: 'Theft at Main St', status: 'Open' },
        { id: 'C002', description: 'Vandalism in Central Park', status: 'Open' },
      ]);
    const [officers, setOfficers] = useState([
        { id: 1, name: 'Jakaza Chauke', badge: 'B001', cases: [] },
        { id: 2, name: 'Defence Ndzhobela', badge: 'B002', cases: [] },
      ]);
    const [selectedCase, setSelectedCase] = useState('');
    const [selectedOfficer, setSelectedOfficer] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const handleAssignCase = (e) => {
        e.preventDefault();
        if (selectedCase && selectedOfficer) {
          const updatedOfficers = officers.map(officer => 
            officer.id === parseInt(selectedOfficer) 
              ? { ...officer, cases: [...officer.cases, selectedCase] }
              : officer
          );
          const updatedCases = cases.map(case_ => 
            case_.id === selectedCase 
              ? { ...case_, status: 'Assigned' }
              : case_
          );
          setOfficers(updatedOfficers);
          setCases(updatedCases);
          setSelectedCase('');
          setSelectedOfficer('');
        }
      };


        
    const filteredOfficers = officers.filter(officer => 
        officer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        officer.badge.toLowerCase().includes(searchTerm.toLowerCase())
      );


  return (
    <div>
                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                  <h2 className="text-2xl font-semibold mb-4 flex items-center">
                    <FaClipboardList className="mr-2" /> Assign Case
                  </h2>
                  <form onSubmit={handleAssignCase} className="space-y-4">
                    <div>
                      <label htmlFor="caseSelect" className="block text-sm font-medium text-gray-700">Select Case</label>
                      <select
                        id="caseSelect"
                        value={selectedCase}
                        onChange={(e) => setSelectedCase(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        required
                      >
                        <option value="">Select a case</option>
                        {cases.filter(case_ => case_.status === 'Open').map(case_ => (
                          <option key={case_.id} value={case_.id}>{case_.id} - {case_.description}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="officerSelect" className="block text-sm font-medium text-gray-700">Select Officer</label>
                      <select
                        id="officerSelect"
                        value={selectedOfficer}
                        onChange={(e) => setSelectedOfficer(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        required
                      >
                        <option value="">Select an officer</option>
                        {officers.map(officer => (
                          <option key={officer.id} value={officer.id}>{officer.name} ({officer.badge})</option>
                        ))}
                      </select>
                    </div>
                    <button type="submit" className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                      Assign Case
                    </button>
                  </form>
                </div>
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
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Badge</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assigned Cases</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredOfficers.map(officer => (
                        <tr key={officer.id}>
                          <td className="px-6 py-4 whitespace-nowrap">{officer.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{officer.badge}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{officer.cases.join(', ') || 'None'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
  )
}

export default AssignCase