import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./dashboard.css"
import { FaTachometerAlt , FaUserPlus , FaClipboardList , FaBars , FaSearch  } from "react-icons/fa";

const Sidebar = ({ activeItem, setActiveItem }) => (
    <div className="bg-blue-800 text-white w-64 min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-8">SAPS Admin</h1>
      <ul>
        <li className="mb-4">
          <button
            onClick={() => setActiveItem('dashboard')}
            className={`flex items-center w-full p-2 rounded ${activeItem === 'dashboard' ? 'bg-blue-600' : 'hover:bg-blue-700'}`}
          >
            <FaTachometerAlt className="mr-2" /> Dashboard
          </button>
        </li>
        <li className="mb-4">
          <button
            onClick={() => setActiveItem('addOfficer')}
            className={`flex items-center w-full p-2 rounded ${activeItem === 'addOfficer' ? 'bg-blue-600' : 'hover:bg-blue-700'}`}
          >
            <FaUserPlus className="mr-2" /> Add New Officer
          </button>
        </li>
        <li className="mb-4">
          <button
            onClick={() => setActiveItem('assignCase')}
            className={`flex items-center w-full p-2 rounded ${activeItem === 'assignCase' ? 'bg-blue-600' : 'hover:bg-blue-700'}`}
          >
            <FaClipboardList  className="mr-2" /> Assign Case
          </button>
        </li>
      </ul>
    </div>
  );


function Dashboard() {
    const [activeItem, setActiveItem] = useState('dashboard');
    const [officers, setOfficers] = useState([
      { id: 1, name: 'John Doe', badge: 'B001', cases: [] },
      { id: 2, name: 'Jane Smith', badge: 'B002', cases: [] },
    ]);
    const [cases, setCases] = useState([
      { id: 'C001', description: 'Theft at Main St', status: 'Open' },
      { id: 'C002', description: 'Vandalism in Central Park', status: 'Open' },
    ]);
    const [newOfficer, setNewOfficer] = useState({ name: '', badge: '' });
    const [selectedCase, setSelectedCase] = useState('');
    const [selectedOfficer, setSelectedOfficer] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
    const handleAddOfficer = (e) => {
      e.preventDefault();
      if (newOfficer.name && newOfficer.badge) {
        setOfficers([...officers, { ...newOfficer, id: officers.length + 1, cases: [] }]);
        setNewOfficer({ name: '', badge: '' });
      }
    };
  
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
      <div className="flex min-h-screen bg-gray-100">
        <div className={`md:block ${isSidebarOpen ? 'block' : 'hidden'}`}>
          <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
        </div>
        <div className="flex-1">
          <header className="bg-white shadow-md p-4 flex justify-between items-center">
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden">
              <FaBars />
            </button>
            <h1 className="text-2xl font-bold text-blue-800">SAPS Admin Dashboard</h1>
          </header>
          <main className="p-8">
            {activeItem === 'dashboard' && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">Dashboard Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-2">Total Officers</h3>
                    <p className="text-3xl font-bold">{officers.length}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-2">Open Cases</h3>
                    <p className="text-3xl font-bold">{cases.filter(c => c.status === 'Open').length}</p>
                  </div>
                </div>
              </div>
            )}
            {activeItem === 'addOfficer' && (
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4 flex items-center">
                  <FaUserPlus className="mr-2" /> Add New Officer
                </h2>
                <form onSubmit={handleAddOfficer} className="space-y-4">
                  <div>
                    <label htmlFor="officerName" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      id="officerName"
                      value={newOfficer.name}
                      onChange={(e) => setNewOfficer({...newOfficer, name: e.target.value})}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="officerBadge" className="block text-sm font-medium text-gray-700">Badge Number</label>
                    <input
                      type="text"
                      id="officerBadge"
                      value={newOfficer.badge}
                      onChange={(e) => setNewOfficer({...newOfficer, badge: e.target.value})}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      required
                    />
                  </div>
                  <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Add Officer
                  </button>
                </form>
              </div>
            )}
            {activeItem === 'assignCase' && (
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
            )}
          </main>
        </div>
      </div>
    );
}

export default Dashboard