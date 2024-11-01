import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaMicrophone as Mic,
  FaKeyboard as Keyboard,
  FaChevronDown as ChevronDown,
} from "react-icons/fa";

// Sample police stations data
import { policeStationsData } from "./../../lib/policeStationsData.js";

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) onClose();
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-20 mx-auto p-5 border h-3/4 w-5/6 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          {children}

          {/* {caseDetails && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Case Details
              </label>
              <p className="text-sm text-gray-600">{caseDetails}</p>
            </div>
          )} */}

          <div className="items-center flex px-4 py-3">
            <button
              onClick={onClose}
              className="px-4 py-2 mr-5 bg-blue-500 text-white text-base font-medium rounded-md w-auto shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Save
            </button>

            <button
              onClick={onClose}
              className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-auto shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ReportCasePage = () => {
  const [reportMethod, setReportMethod] = useState("");
  const [language, setLanguage] = useState("");
  const [caseType, setCaseType] = useState("");
  const [caseDetails, setCaseDetails] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedTownship, setSelectedTownship] = useState("");
  const [selectedStation, setSelectedStation] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const provinces = Object.keys(policeStationsData);
  const languages = [
    "English",
    "Afrikaans",
    "Zulu",
    "Xhosa",
    "Sotho",
    "Tswana",
  ];
  const caseTypes = [
    "Assault",
    "Theft",
    "Burglary",
    "Fraud",
    "Domestic Violence",
    "Other",
  ];

  const handleVoiceRecord = () => {
    setIsRecording(!isRecording);
    if (isRecording) {
      setCaseDetails(
        "Voice recording completed. (This is a placeholder for actual voice data)"
      );
      setIsModalOpen(false);
    }
  };

  const handleReportMethodSelect = (method) => {
    setReportMethod(method);
  };

  const handleStart = () => {
    setIsModalOpen(true);
  };

  const handleProvinceChange = (e) => {
    setSelectedProvince(e.target.value);
    setSelectedTownship(""); // Reset township and station when province changes
    setSelectedStation("");
  };

  const handleTownshipChange = (e) => {
    setSelectedTownship(e.target.value);
    setSelectedStation(""); // Reset station when township changes
  };

  return (
    <div className="min-h-screen bg-gray-100 mainContainer">
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

      <main className="container mx-auto mt-8 px-4">
        <section className="text-center mb-10">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Choose Your Reporting Method and Provide Details to Get Started
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Please select whether you'd like to report by typing or using voice
            recording.
          </p>
        </section>

        <section className="mb-12">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleStart();
              }}
              className="px-4 py-5 sm:p-6"
            >
              {/* Reporting Method Selection */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Reporting Method
                </label>
                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => handleReportMethodSelect("voice")}
                    className={`flex items-center justify-center px-4 py-2 border rounded-md ${
                      reportMethod === "voice"
                        ? "bg-blue-500 text-white"
                        : "bg-white text-gray-700"
                    }`}
                  >
                    <Mic className="mr-2" /> Voice
                  </button>
                  <button
                    type="button"
                    onClick={() => handleReportMethodSelect("typing")}
                    className={`flex items-center justify-center px-4 py-2 border rounded-md ${
                      reportMethod === "typing"
                        ? "bg-blue-500 text-white"
                        : "bg-white text-gray-700"
                    }`}
                  >
                    <Keyboard className="mr-2" /> Typing
                  </button>
                </div>
              </div>

              {/* Province Selection */}
              <div className="mb-4">
                <label
                  htmlFor="province"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Province
                </label>
                <select
                  id="province"
                  value={selectedProvince}
                  onChange={handleProvinceChange}
                  className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                >
                  <option value="">Select Province</option>
                  {provinces.map((province) => (
                    <option key={province} value={province}>
                      {province}
                    </option>
                  ))}
                </select>
              </div>

              {/* Township Selection (conditionally rendered) */}
              {selectedProvince && (
                <div className="mb-4">
                  <label
                    htmlFor="township"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Township
                  </label>
                  <select
                    id="township"
                    value={selectedTownship}
                    onChange={handleTownshipChange}
                    className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                  >
                    <option value="">Select Township</option>
                    {Object.keys(
                      policeStationsData[selectedProvince].townships
                    ).map((township) => (
                      <option key={township} value={township}>
                        {township}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Police Station Selection (conditionally rendered) */}
              {selectedTownship && (
                <div className="mb-4">
                  <label
                    htmlFor="station"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Police Station
                  </label>
                  <select
                    id="station"
                    value={selectedStation}
                    onChange={(e) => setSelectedStation(e.target.value)}
                    className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                  >
                    <option value="">Select Police Station</option>
                    {policeStationsData[selectedProvince].townships[
                      selectedTownship
                    ].map((station) => (
                      <option key={station} value={station}>
                        {station}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Language Selection */}
              <div className="mb-4">
                <label
                  htmlFor="language"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Language
                </label>
                <select
                  id="language"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                >
                  <option value="">Select Language</option>
                  {languages.map((lang) => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </div>

              {/* Case Type Selection */}
              <div className="mb-4">
                <label
                  htmlFor="caseType"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Case Type
                </label>
                <select
                  id="caseType"
                  value={caseType}
                  onChange={(e) => setCaseType(e.target.value)}
                  className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                >
                  <option value="">Select Case Type</option>
                  {caseTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Start
                </button>
              </div>
            </form>
          </div>

          <Modal
            isOpen={isModalOpen && reportMethod === "voice"}
            onClose={() => setIsModalOpen(false)}
          >
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              Voice Recording
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Please speak clearly to record your case details.
            </p>
            <button
              onClick={handleVoiceRecord}
              className={`w-full flex items-center justify-center px-4 py-2 border rounded-md ${
                isRecording ? "bg-red-500 text-white" : "bg-blue-500 text-white"
              }`}
            >
              <Mic className="mr-2" />
              {isRecording ? "Stop Recording" : "Start Recording"}
            </button>
          </Modal>

          <Modal
            isOpen={isModalOpen && reportMethod === "typing"}
            onClose={() => setIsModalOpen(false)}
          >
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              Type Your Case Details
            </h3>
            <textarea
              rows={6}
              value={caseDetails}
              onChange={(e) => setCaseDetails(e.target.value)}
              className="shadow-sm p-5 focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full text-xl border-gray-300 rounded-md"
              placeholder="Please describe the incident in detail..."
            />
          </Modal>
        </section>
      </main>

      <footer className="bg-blue-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>© 2024 Police Department. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ReportCasePage;
