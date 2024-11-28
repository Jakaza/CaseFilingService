import React, { useState } from "react";

function HomeDashboard() {
  const [officers, setOfficers] = useState([
    { id: 1, name: "Jakaza Chauke", badge: "B001", cases: [] },
    { id: 2, name: "Defence Ndzhobela", badge: "B002", cases: [] },
  ]);

  const [cases, setCases] = useState([
    { id: "C001", description: "Theft at Main St", status: "Open" },
    { id: "C002", description: "Vandalism in Central Park", status: "Open" },
  ]);

  const [stations, setStations] = useState([
    {
      id: 1,
      name: "Central Police Station",
      address: "123 Main St, City Center",
      phone: "011-555-0101",
    },
  ]);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Total Officers</h3>
          <p className="text-3xl font-bold">{officers.length}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Open Cases</h3>
          <p className="text-3xl font-bold">
            {cases.filter((c) => c.status === "Open").length}
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Police Stations</h3>
          <p className="text-3xl font-bold">{stations.length}</p>
        </div>
      </div>
    </div>
  );
}

export default HomeDashboard;
