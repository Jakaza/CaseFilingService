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

const provinces = [
  "Gauteng",
  "Western Cape",
  "KwaZulu-Natal",
  "Eastern Cape",
  "Mpumalanga",
  "Limpopo",
  "North West",
  "Free State",
  "Northern Cape",
];

function AddStation() {
  const [newStation, setNewStation] = useState({
    name: "",
    address: "",
    phone: "",
  });
  const [selectedProvince, setSelectedProvince] = useState("");

  const [expandedProvinces, setExpandedProvinces] = useState([]);
  const [expandedTownships, setExpandedTownships] = useState([]);

  const handleAddStation = (e) => {
    e.preventDefault();
    if (newStation.name && newStation.address && newStation.phone) {
      setStations([...stations, { ...newStation, id: stations.length + 1 }]);
      setNewStation({ name: "", address: "", phone: "" });
    }
  };

  const toggleProvince = (province) => {
    setExpandedProvinces((prev) =>
      prev.includes(province)
        ? prev.filter((p) => p !== province)
        : [...prev, province]
    );
  };

  const toggleTownship = (township) => {
    setExpandedTownships((prev) =>
      prev.includes(township)
        ? prev.filter((t) => t !== township)
        : [...prev, township]
    );
  };

  return (
    <div className="bg-white p-6  rounded-lg shadow-md">
      {/* <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <FaBuilding className="mr-2" /> Add New Police Station
      </h2>
      <form onSubmit={handleAddStation} className="space-y-4">
        <div>
          <label
            htmlFor="provinceSelect"
            className="block text-sm font-medium text-gray-700"
          >
            Select Province
          </label>
          <select
            id="provinceSelect"
            value={selectedProvince}
            onChange={(e) => setSelectedProvince(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            required
          >
            <option value="">Select a province</option>
            {provinces.map((province) => (
              <option key={province} value={province}>
                {province}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="stationName"
            className="block text-sm font-medium text-gray-700"
          >
            Station Name
          </label>
          <input
            type="text"
            id="stationName"
            value={newStation.name}
            onChange={(e) =>
              setNewStation({ ...newStation, name: e.target.value })
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label
            htmlFor="stationAddress"
            className="block text-sm font-medium text-gray-700"
          >
            Township
          </label>
          <input
            type="text"
            id="stationAddress"
            value={newStation.address}
            onChange={(e) =>
              setNewStation({ ...newStation, address: e.target.value })
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Add Police Station
        </button>
      </form> */}
      <div className="mt-8 scrollable-section police-scroll-section">
        <h3 className="text-xl font-semibold mb-4">Existing Police Stations</h3>
        <div className="space-y-4 ">
          {Object.entries(policeStationsData).map(([province, data]) => (
            <div key={province} className="border border-gray-200 rounded-md">
              <button
                onClick={() => toggleProvince(province)}
                className="flex items-center justify-between w-full text-left font-semibold p-3 bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <span>{province}</span>
                {expandedProvinces.includes(province) ? (
                  <FaChevronDown />
                ) : (
                  <FaChevronRight />
                )}
              </button>
              {expandedProvinces.includes(province) && (
                <div className="p-3">
                  {Object.entries(data.townships).map(
                    ([township, stations]) => (
                      <div
                        key={township}
                        className="mb-2 border-t border-gray-200 pt-2"
                      >
                        <button
                          onClick={() => toggleTownship(township)}
                          className="flex items-center justify-between w-full text-left font-medium p-2 hover:bg-gray-50 transition-colors rounded"
                        >
                          <span>{township}</span>
                          {expandedTownships.includes(township) ? (
                            <FaChevronDown />
                          ) : (
                            <FaChevronRight />
                          )}
                        </button>
                        {expandedTownships.includes(township) && (
                          <ul className="ml-4 mt-1 space-y-1">
                            {stations.map((station) => (
                              <li
                                key={station}
                                className="text-sm text-gray-600 flex items-center"
                              >
                                <FaMapMarkerAlt className="mr-2 text-blue-500" />
                                {station}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AddStation;
