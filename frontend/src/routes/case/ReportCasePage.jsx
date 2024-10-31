import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaMicrophone as Mic,
  FaKeyboard as Keyboard,
  FaChevronDown as ChevronDown,
} from "react-icons/fa";

import { FaChevronRight, FaPhoneSquareAlt } from "react-icons/fa";
// import { FaMicrophone } from "react-icons/fa";

const Button = ({ children, className, ...props }) => (
  <button className={`px-4 py-2 rounded font-semibold ${className}`} {...props}>
    {children}
  </button>
);

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
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          {children}
          <div className="items-center px-4 py-3">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Close
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
  const [isRecording, setIsRecording] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Case Report:", {
      reportMethod,
      language,
      caseType,
      caseDetails,
    });
    // Here you would typically send the data to your backend
  };

  const handleVoiceRecord = () => {
    setIsRecording(!isRecording);
    // Simulate voice recording logic
    if (isRecording) {
      setCaseDetails(
        "Voice recording completed. (This is a placeholder for actual voice data)"
      );
      setIsModalOpen(false);
    }
  };

  const handleReportMethodSelect = (method) => {
    setReportMethod(method);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 mainContainer">
      <header className="bg-blue-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <img src="./../../assets/saps_banner-removebg-preview.png" alt="" />
            <h1 className="text-2xl font-bold">Police Department</h1>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:text-blue-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-200">
                  Contact
                </a>
              </li>
              <li>
                {" "}
                <Link to="login" className="hover:text-blue-200">
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
          <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
              <div className="px-4 py-5 sm:px-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">
                  Report a Case
                </h2>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Please provide details about the incident.
                </p>
              </div>
              <div className="border-t border-gray-200">
                <form onSubmit={handleSubmit} className="px-4 py-5 sm:p-6">
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
                        <Mic className="mr-2" />
                        Voice
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
                        <Keyboard className="mr-2" />
                        Typing
                      </button>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="language"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Language
                    </label>
                    <div className="relative">
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
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="caseType"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Case Type
                    </label>
                    <div className="relative">
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
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </div>
                  </div>

                  {caseDetails && (
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Case Details
                      </label>
                      <p className="text-sm text-gray-600">{caseDetails}</p>
                    </div>
                  )}

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
                  isRecording
                    ? "bg-red-500 text-white"
                    : "bg-blue-500 text-white"
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
                className="shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Please describe the incident in detail..."
              />
            </Modal>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">
            Recent Updates
          </h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>New online reporting system launched for minor incidents</li>
            <li>Community outreach program scheduled for next month</li>
            <li>Annual crime statistics report now available</li>
          </ul>
        </section>
      </main>

      <footer className="bg-blue-900 text-white mt-12 py-6">
        <div className="container mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} City Police Department. All rights
            reserved.
          </p>
          <p className="mt-2">For emergencies, always dial 911</p>
        </div>
      </footer>
    </div>
  );
};

export default ReportCasePage;
