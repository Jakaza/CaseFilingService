import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaCheckCircle,
  FaSpinner,
  FaExclamationTriangle,
} from "react-icons/fa";

function TrackCasePage() {
  const [caseNumber, setCaseNumber] = useState("");
  const [caseDetails, setCaseDetails] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const sampleCases = {
    CASE001: {
      status: "In Progress",
      lastUpdate: "2023-05-15",
      description: "Theft of personal property",
      assignedOfficer: "Officer J. Smith",
      officerContact: {
        phone: "123-456-7890",
        email: "officer.smith@saps.com",
      },
      nextStep: "Witness interview scheduled for 2023-05-20",
    },
    CASE002: {
      status: "Closed",
      lastUpdate: "2023-05-10",
      description: "Noise complaint",
      assignedOfficer: "Officer M. Johnson",
      officerContact: {
        phone: "987-654-3210",
        email: "officer.johnson@saps.com",
      },
      resolution: "Warning issued to offending party",
    },
    CASE003: {
      status: "Under Review",
      lastUpdate: "2023-05-18",
      description: "Vandalism of public property",
      assignedOfficer: "Detective A. Williams",
      officerContact: {
        phone: "555-123-4567",
        email: "detective.williams@saps.com",
      },
      nextStep: "Awaiting forensic analysis results",
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCaseDetails(sampleCases[caseNumber] || null);
    setSubmitted(true);
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "In Progress":
        return <FaSpinner className="text-yellow-500 animate-spin" />;
      case "Closed":
        return <FaCheckCircle className="text-green-500" />;
      case "Under Review":
        return <FaExclamationTriangle className="text-orange-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-blue-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="/saps_banner-removebg-preview.png"
              alt="SAPS Logo"
              className="h-12 mr-4"
            />
            <h1 className="text-2xl font-bold text-yellow-400">
              <Link to="/">SAPS DEPARTMENT</Link>
            </h1>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="hover:text-yellow-300">
                  Home
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">
                  Contact
                </a>
              </li>
              <li>
                <Link to="/login" className="hover:text-yellow-300">
                  Sign In
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto mt-8 px-4 flex-grow">
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            Track Your Case
          </h2>
          <form onSubmit={handleSubmit} className="flex items-center mb-4">
            <input
              type="text"
              value={caseNumber}
              onChange={(e) => setCaseNumber(e.target.value.toUpperCase())}
              placeholder="Enter Case Number"
              className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <FaSearch />
            </button>
          </form>

          {caseDetails ? (
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                Case Status: {caseDetails.status}{" "}
                {getStatusIcon(caseDetails.status)}
              </h3>
              <p>
                <strong>Last Updated:</strong> {caseDetails.lastUpdate}
              </p>
              <p>
                <strong>Description:</strong> {caseDetails.description}
              </p>
              <p>
                <strong>Assigned Officer:</strong> {caseDetails.assignedOfficer}
              </p>
              {caseDetails.nextStep && (
                <p>
                  <strong>Next Step:</strong> {caseDetails.nextStep}
                </p>
              )}
              {caseDetails.resolution && (
                <p>
                  <strong>Resolution:</strong> {caseDetails.resolution}
                </p>
              )}
              <h4 className="font-semibold mt-4">Contact Details:</h4>
              <p>
                <strong>Phone:</strong> {caseDetails.officerContact.phone}
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href={`mailto:${caseDetails.officerContact.email}`}
                  className="text-blue-600"
                >
                  {caseDetails.officerContact.email}
                </a>
              </p>
            </div>
          ) : (
            submitted &&
            caseNumber && (
              <p className="text-red-500">
                No case found with the provided number. Please check and try
                again.
              </p>
            )
          )}
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">
            Case Tracking Updates
          </h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              All cases are now tracked electronically for faster processing.
            </li>
            <li>
              New policy implemented for regular updates on ongoing
              investigations.
            </li>
            <li>
              Victims can now receive SMS notifications on case status changes.
            </li>
            <li>
              Enhanced collaboration with local community leaders for case
              resolution.
            </li>
          </ul>
        </section>
      </main>

      <footer className="bg-blue-900 text-white mt-12 py-6">
        <div className="container mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} City Police Department. All rights
            reserved.
          </p>
          <p className="mt-2">For emergencies, always dial 10 111</p>
        </div>
      </footer>
    </div>
  );
}

export default TrackCasePage;
