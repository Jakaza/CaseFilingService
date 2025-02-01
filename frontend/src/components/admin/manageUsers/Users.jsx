import React, { useEffect, useState } from "react";
import {
  FaSearch,
  FaFilter,
  FaBan,
  FaUnlock,
  FaMoneyBill,
} from "react-icons/fa";
import apiRequest from "../../../lib/apiRequest";

function Users() {
  const [users, setUsers] = useState([]);
  const [officers, setOfficers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [userFilter, setUserFilter] = useState("all");
  const [fineAmount, setFineAmount] = useState("");

  useEffect(() => {

    async function fetchData() {
      try {
        let offres = await apiRequest.get("/officer/all");
        let users = await apiRequest.get(`/user/users`);
        offres = offres.data.officers;
        users = users.data.users;

        setOfficers(officers);
        setUsers(users)
        
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();

  }, []);




  const handleBlockUser = (userId) => {
    setUsers(
      users.map((user) =>
        user.id === userId
          ? { ...user, status: user.status === "Active" ? "Blocked" : "Active" }
          : user
      )
    );
  };
  const handleFineUser = (userId) => {
    if (fineAmount) {
      alert(`User ${userId} has been fined R${fineAmount}`);
      setFineAmount("");
    } else {
      alert("Please enter a fine amount");
    }
  };

  const filteredUsers = users
    .filter((user) => {
      if (userFilter === "all") return true;
      if (userFilter === "active") return user.status === "Active";
      if (userFilter === "blocked") return user.status === "Blocked";
      return true;
    })
    .filter(
      (user) =>
        user.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center">
          <FaFilter className="text-gray-400 mr-2" />
          <select
            value={userFilter}
            onChange={(e) => setUserFilter(e.target.value)}
            className="p-2 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          >
            <option value="all">All Users</option>
            <option value="active">Active Users</option>
            <option value="blocked">Blocked Users</option>
          </select>
        </div>
        <div className="flex items-center">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <div className="max-h-80 overflow-y-auto custom-scroll">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user.identity}>
                  <td className="px-6 py-4 whitespace-nowrap">{user.firstname}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                     
                <button
  onClick={() => handleBlockUser(user.identity)}
  className={`px-2 py-1 flex items-center gap-1 rounded ${
    user.isBlocked ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
  }`}
>
  <FaBan /> {user.isBlocked ? "Unblock" : "Block"}
</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
     
    </>
  );
}

export default Users;
