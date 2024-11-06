import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./dashboard.css"
import { FaTachometerAlt , FaUserPlus , FaClipboardList , FaBars , FaSearch, FaBuilding ,FaMapMarkerAlt ,FaPhone, FaChevronDown, FaChevronRight  } from "react-icons/fa";

import { policeStationsData } from "./../../lib/policeStationsData.js";
import AddNewOfficer from '../../components/admin/AddNewOfficer.jsx';

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
        <li className="mb-4">
        <button
          onClick={() => setActiveItem('addStation')}
          className={`flex items-center w-full p-2 rounded ${activeItem === 'addStation' ? 'bg-blue-600' : 'hover:bg-blue-700'}`}
        >
          <FaBuilding className="mr-2" /> Add Police Station
        </button>
      </li>
      </ul>
    </div>
  );


function Dashboard() {
    const [activeItem, setActiveItem] = useState('dashboard');
    const [officers, setOfficers] = useState([
      { id: 1, name: 'Jakaza Chauke', badge: 'B001', cases: [] },
      { id: 2, name: 'Defence Ndzhobela', badge: 'B002', cases: [] },
    ]);
    const [cases, setCases] = useState([
      { id: 'C001', description: 'Theft at Main St', status: 'Open' },
      { id: 'C002', description: 'Vandalism in Central Park', status: 'Open' },
    ]);
    const [stations, setStations] = useState([
      { id: 1, name: 'Central Police Station', address: '123 Main St, City Center', phone: '011-555-0101' },
    ]);

    const provinces = ['Gauteng', 'Western Cape', 'KwaZulu-Natal', 'Eastern Cape', 'Mpumalanga', 'Limpopo', 'North West', 'Free State', 'Northern Cape'];

    const [newOfficer, setNewOfficer] = useState({ name: '', badge: '' });
    const [newStation, setNewStation] = useState({ name: '', address: '', phone: '' });
    const [selectedCase, setSelectedCase] = useState('');
    const [selectedOfficer, setSelectedOfficer] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const [selectedProvince, setSelectedProvince] = useState('');

    const [expandedProvinces, setExpandedProvinces] = useState([]);
    const [expandedTownships, setExpandedTownships] = useState([]);
  
    // ... (previous handler functions remain unchanged)
  
    const toggleProvince = (province) => {
      setExpandedProvinces(prev =>
        prev.includes(province)
          ? prev.filter(p => p !== province)
          : [...prev, province]
      );
    };
  
    const toggleTownship = (township) => {
      setExpandedTownships(prev =>
        prev.includes(township)
          ? prev.filter(t => t !== township)
          : [...prev, township]
      );
    };
  
  
    const handleAddOfficer = (e) => {
      e.preventDefault();
      if (newOfficer.name && newOfficer.badge) {
        setOfficers([...officers, { ...newOfficer, id: officers.length + 1, cases: [] }]);
        setNewOfficer({ name: '', badge: '' });
      }
    };
  
    const handleAddStation = (e) => {
      e.preventDefault();
      if (newStation.name && newStation.address && newStation.phone) {
        setStations([...stations, { ...newStation, id: stations.length + 1 }]);
        setNewStation({ name: '', address: '', phone: '' });
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-2">Total Officers</h3>
                    <p className="text-3xl font-bold">{officers.length}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-2">Open Cases</h3>
                    <p className="text-3xl font-bold">{cases.filter(c => c.status === 'Open').length}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-2">Police Stations</h3>
                    <p className="text-3xl font-bold">{stations.length}</p>
                  </div>
                </div>
              </div>
            )}
            {activeItem === 'addOfficer' && (
             <AddNewOfficer/>
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
            {activeItem === 'addStation' && (
              <div className="bg-white p-6  rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4 flex items-center">
                  <FaBuilding className="mr-2" /> Add New Police Station
                </h2>
                <form onSubmit={handleAddStation} className="space-y-4">
            


                  <div>
                    <label htmlFor="provinceSelect" className="block text-sm font-medium text-gray-700">Select Province</label>
                    <select
                      id="provinceSelect"
                      value={selectedProvince}
                      onChange={(e) => setSelectedProvince(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      required
                    >
                      <option value="">Select a province</option>
                      {provinces.map(province => (
                        <option key={province} value={province}>{province}</option>
                      ))}
                    </select>
                  </div>
        
                <div>
                    <label htmlFor="stationName" className="block text-sm font-medium text-gray-700">Station Name</label>
                    <input
                      type="text"
                      id="stationName"
                      value={newStation.name}
                      onChange={(e) => setNewStation({...newStation, name: e.target.value})}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="stationAddress" className="block text-sm font-medium text-gray-700">Township</label>
                    <input
                      type="text"
                      id="stationAddress"
                      value={newStation.address}
                      onChange={(e) => setNewStation({...newStation, address:  e.target.value})}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      required
                    />
                  </div>
                  <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Add Police Station
                  </button>
                </form>
                <div className="mt-8 scrollable-section police-scroll-section">
              <h3 className="text-xl font-semibold mb-4">Existing Police Stations</h3>
              <div className="space-y-4 " >
                {Object.entries(policeStationsData).map(([province, data]) => (
                  <div key={province} className="border border-gray-200 rounded-md">
                    <button
                      onClick={() => toggleProvince(province)}
                      className="flex items-center justify-between w-full text-left font-semibold p-3 bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <span>{province}</span>
                      {expandedProvinces.includes(province) ? <FaChevronDown /> : <FaChevronRight />}
                    </button>
                    {expandedProvinces.includes(province) && (
                      <div className="p-3">
                        {Object.entries(data.townships).map(([township, stations]) => (
                          <div key={township} className="mb-2 border-t border-gray-200 pt-2">
                            <button
                              onClick={() => toggleTownship(township)}
                              className="flex items-center justify-between w-full text-left font-medium p-2 hover:bg-gray-50 transition-colors rounded"
                            >
                              <span>{township}</span>
                              {expandedTownships.includes(township) ? <FaChevronDown /> : <FaChevronRight />}
                            </button>
                            {expandedTownships.includes(township) && (
                              <ul className="ml-4 mt-1 space-y-1">
                                {stations.map((station) => (
                                  <li key={station} className="text-sm text-gray-600 flex items-center">
                                    <FaMapMarkerAlt className="mr-2 text-blue-500" />
                                    {station}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              </div>
              </div>
            )}
          </main>
        </div>
      </div>
    );
}

export default Dashboard