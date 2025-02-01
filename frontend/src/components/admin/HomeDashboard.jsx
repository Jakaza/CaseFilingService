import React, { useEffect, useState } from "react";
import apiRequest from "../../lib/apiRequest";

function HomeDashboard() {
  const [officers, setOfficers] = useState(0);

  const [cases, setCases] = useState(0);


  useEffect(() => {
    async function fetchData() {
      try {
        const res = await apiRequest.get("/case/view-cases");
        const offres = await apiRequest.get("/officer/all");
        const offData = offres.data.officers;
        setOfficers(offData);
        const data = await res.data.response.cases;

        setCases(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);



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
            {cases.length}
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Police Stations</h3>
          <p className="text-3xl font-bold">23</p>
        </div>
      </div>
    </div>
  );
}

export default HomeDashboard;
