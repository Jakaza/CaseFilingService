import React, { useState } from "react";
import {
  FaSearch,
  FaFilter,
  FaBan,
  FaUnlock,
  FaMoneyBill,
} from "react-icons/fa";

function Users() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@example.com",
      status: "Active",
    },
    {
      id: 2,
      name: "Bob Williams",
      email: "bob@example.com",
      status: "Blocked",
    },
    {
      id: 3,
      name: "Charlie Brown",
      email: "charlie@example.com",
      status: "Active",
    },
    {
      id: 12,
      name: "Bob Williams",
      email: "bob@example.com",
      status: "Blocked",
    },
    {
      id: 13,
      name: "Charlie Brown",
      email: "charlie@example.com",
      status: "Active",
    },
    {
      id: 21,
      name: "Bob Williams",
      email: "bob@example.com",
      status: "Blocked",
    },
    {
      id: 31,
      name: "Charlie Brown",
      email: "charlie@example.com",
      status: "Active",
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [userFilter, setUserFilter] = useState("all");
  const [fineAmount, setFineAmount] = useState("");
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
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
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
                      onClick={() => handleBlockUser(user.id)}
                      className={`text-blue-600 hover:text-blue-900 mr-2 ${
                        user.status === "Active" ? "bg-red-100" : "bg-green-100"
                      } px-2 py-1 rounded`}
                    >
                      {user.status === "Active" ? <FaBan /> : <FaUnlock />}
                    </button>
                    <button
                      onClick={() => handleFineUser(user.id)}
                      className="text-yellow-600 hover:text-yellow-900 bg-yellow-100 px-2 py-1 rounded"
                    >
                      <FaMoneyBill />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold mb-2">Issue Fine</h3>
        <div className="flex items-center">
          <input
            type="number"
            placeholder="Fine amount"
            value={fineAmount}
            onChange={(e) => setFineAmount(e.target.value)}
            className="p-2 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 mr-2"
          />
          <button
            onClick={() => handleFineUser(selectedUser)}
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
          >
            Issue Fine
          </button>
        </div>
      </div>
    </>
  );
}

export default Users;
