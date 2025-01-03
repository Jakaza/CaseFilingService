import React, { useState } from "react";
import "./dashboard.css";
import { FaBars } from "react-icons/fa";

import AddNewOfficer from "../../components/admin/AddNewOfficer.jsx";
import AddStation from "../../components/admin/AddStation.jsx";
import HomeDashboard from "../../components/admin/HomeDashboard.jsx";
import DashboardSideBar from "./DashboardSideBar.jsx";
import ManageCases from "../../components/admin/ManageCases.jsx";
import ManageUsers from "../../components/admin/ManageUsers.jsx";
import OfficerManageCases from "../../components/admin/OfficerManageCases.jsx";
import Officers from "../../components/admin/Officers.jsx";

function Dashboard() {
  const [activeItem, setActiveItem] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className={`md:block ${isSidebarOpen ? "block" : "hidden"}`}>
        <DashboardSideBar
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
      </div>
      <div className="flex-1 ml-64">
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="md:hidden"
          >
            <FaBars />
          </button>
          <h1 className="text-2xl font-bold text-blue-800">
            SAPS Admin Dashboard
          </h1>
        </header>
        <main className="p-8">
          {activeItem === "dashboard" && <HomeDashboard />}
          {activeItem === "addOfficer" && <AddNewOfficer />}
          {activeItem === "officers" && <Officers />}
          {activeItem === "addStation" && <AddStation />}
          {activeItem === "manageCasses" && <ManageCases />}
          {activeItem === "manageUsers" && <ManageUsers />}
          {activeItem === "updateCaseStatus" && <OfficerManageCases />}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
