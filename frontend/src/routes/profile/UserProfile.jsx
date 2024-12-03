import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";

function UserProfile() {
  const [userDetails, setUserDetails] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+27 71 234 5678",
    address: "123 Main Street, Pretoria, South Africa",
  });

  const { updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [editing, setEditing] = useState(false);
  const [updatedDetails, setUpdatedDetails] = useState({ ...userDetails });

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    setUserDetails(updatedDetails);
    setEditing(false);
  };

  const handleCancel = () => {
    setUpdatedDetails(userDetails);
    setEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null);
      localStorage.removeItem("user"); 
      navigate("/login"); 
      
    } catch (error) {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto mt-8 px-4">
        {/* User Info */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">User Profile</h2>
          {editing ? (
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={updatedDetails.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={updatedDetails.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={updatedDetails.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={updatedDetails.address}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="flex space-x-4 mt-4">
                <button
                  onClick={handleSave}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-semibold"
                >
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 font-semibold"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <p>
                <strong>Name:</strong> {userDetails.name}
              </p>
              <p>
                <strong>Email:</strong> {userDetails.email}
              </p>
              <p>
                <strong>Phone:</strong> {userDetails.phone}
              </p>
              <p>
                <strong>Address:</strong> {userDetails.address}
              </p>
              <button
                onClick={handleEdit}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-semibold mt-4"
              >
                Edit Details
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 font-semibold mt-4 ml-4"
              >
                Logout
              </button>
            </div>
          )}
        </section>

        {/* Actions */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ActionCard
            title="Open Case"
            description="Report a new case and provide details."
            link="/open-case"
          />
          <ActionCard
            title="Track Your Case"
            description="View the status of your open cases."
            link="/track-case"
          />
          <ActionCard
            title="File a Report"
            description="Report an incident or situation."
            link="/file-report"
          />
          <ActionCard
            title="File Complaints"
            description="Submit complaints regarding services."
            link="/file-complaint"
          />
          <ActionCard
            title="View Old Cases"
            description="See all previously closed cases."
            link="/view-cases"
          />
        </section>
      </main>

      <footer className="bg-blue-900 text-white mt-12 py-6">
        <div className="container mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} SAPS Case Report System. All
            rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function ActionCard({ title, description, link }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-blue-900 mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <a
        href={link}
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-semibold"
      >
        Go
      </a>
    </div>
  );
}

export default UserProfile;
