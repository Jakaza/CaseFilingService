import React, { useState, useEffect, useContext } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import {
  FaMicrophone as Mic,
  FaKeyboard as Keyboard,
  FaChevronDown as ChevronDown,
} from "react-icons/fa";
import { useReactMediaRecorder } from "react-media-recorder";

import { policeStationsData } from "./../../lib/policeStationsData.js";
import Navbar from "../../components/navbar/Navbar.jsx";
import { useNavigate } from "react-router";
import apiRequest from "../../lib/apiRequest.js";

const Modal = ({ isOpen, onSave, onClose, children }) => {
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
        <div className="mt-3 text-center">{children}</div>
      </div>
    </div>
  );
};

const ReportCasePage = () => {
  // const { updateUser, currentUser } = useContext(AuthContext);
  // const navigate = useNavigate();

  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");

  const [isEditable, setIsEditable] = useState(true);
  const [caseTitle, setCaseTitle] = useState("Reported Incident");
  const [language, setLanguage] = useState("");
  const [caseType, setCaseType] = useState("");
  const [caseDetails, setCaseDetails] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedTownship, setSelectedTownship] = useState("");
  const [selectedStation, setSelectedStation] = useState("");
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
    "Robbery",
    "Rape",
    "Hate Crime",
    "Corruption",
    "Drunk Driving",
    "Murder",
    "Child Abuse",
    "Traffic Offense",
    "Civil Dispute",
    "Environmental Crime",
    "Other",
  ];

  useEffect(() => {
    setErrorMessage("");
  }, [language, caseType, selectedProvince, selectedTownship, selectedStation]);

  const handleSave = () => {
    setIsEditable(false);
  };
  const handleClose = () => {
    console.log("Close Clicked");
  };

  const handleEdit = () => {
    setIsEditable(true);
  };

  const handleSubmitCase = async () => {
    try {
      const caseData = {
        caseTitle: caseTitle, // Modify as per your needs or provide an input field for it
        caseDescription: caseDetails,
        caseType,
        province: selectedProvince,
        township: selectedTownship,
        station: selectedStation,
        language,
      };
      const res = await apiRequest.post("/case/open", caseData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(res.data.response.success);

      if (res.data.response.success) {
        MySwal.fire({
          title: <strong>Success!</strong>,
          html: <p>{res.data.response.message}</p>,
          icon: "success",
        }).then(() => {
          navigate("/track-case");
        });
      }

      // console.log(response.data);
    } catch (error) {
      console.error("Error creating case:", error);
      setErrorMessage("There was an error while submitting your case.");
    }
  };

  const handleStart = () => {
    if (
      !selectedProvince ||
      !selectedTownship ||
      !selectedStation ||
      !language ||
      !caseType
    ) {
      setErrorMessage("Please select all required fields before proceeding.");
      return;
    }

    setIsModalOpen(true); // Open the modal only if all fields are selected
    setErrorMessage(""); // Clear error message if validation is successful
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
      <Navbar />

      <main className="container mx-auto mt-8 px-4">
        <section className="text-center mb-10">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Select the Location of Your Incident
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Choose your incident's location and the nearest police station to
            begin reporting your case.
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
              {errorMessage && (
                <div className="text-red-500 text-center text-sm mt-2">
                  {errorMessage}
                  <br />
                  <br />
                </div>
              )}

              <div className="mb-4">
                <label
                  htmlFor="caseTitle"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Case Title
                </label>
                <input
                  type="text"
                  id="caseTitle"
                  value={caseTitle}
                  onChange={(e) => setCaseTitle(e.target.value)}
                  className="block w-full px-4 py-2 border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                  placeholder="Enter case title"
                />
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

          {/* Modal for Case Preview and Submit */}
          <Modal isOpen={isModalOpen}>
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              {isEditable
                ? "Edit Your Case Details"
                : "Preview Your Case Details"}
            </h3>

            {isEditable ? (
              // Editable Mode
              <textarea
                rows={6}
                value={caseDetails}
                onChange={(e) => setCaseDetails(e.target.value)}
                className="shadow-sm p-5 focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full text-xl border-gray-300 rounded-md"
                placeholder="Please describe the incident in detail..."
              />
            ) : (
              // Preview Mode
              <div className="case-details-preview">
                <h4>Case Title: {caseTitle}</h4>
                <p>
                  <strong>Case Type:</strong> {caseType}
                </p>
                <p>
                  <strong>Language:</strong> {language}
                </p>
                <p>
                  <strong>Province:</strong> {selectedProvince}
                </p>
                <p>
                  <strong>Township:</strong> {selectedTownship}
                </p>
                <p>
                  <strong>Police Station:</strong> {selectedStation}
                </p>
                <p>
                  <strong>Case Description:</strong> {caseDetails}
                </p>
              </div>
            )}

            <div className="flex justify-between mt-4">
              {!isEditable ? (
                <>
                  <button
                    onClick={handleSubmitCase}
                    className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-300"
                  >
                    Submit Case
                  </button>

                  <button
                    onClick={handleEdit}
                    className="px-4 py-2 bg-yellow-500 text-white font-medium rounded-md shadow-sm hover:bg-yellow-700 focus:ring-2 focus:ring-yellow-300"
                  >
                    Edit
                  </button>
                </>
              ) : (
                <div className="items-center flex px-4 py-3">
                  <button
                    onClick={handleSave}
                    className="px-4 py-2 mr-5 bg-blue-500 text-white text-base font-medium rounded-md w-auto shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    Save
                  </button>

                  <button
                    onClick={handleClose}
                    className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-auto shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
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
