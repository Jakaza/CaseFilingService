import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaCheckCircle,
  FaSpinner,
  FaExclamationTriangle,
} from "react-icons/fa";
import Navbar from "../../components/navbar/Navbar";
import apiRequest from "../../lib/apiRequest";


const Modal = ({ isOpen , onClose, children , onSend }) => {
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

          <div className="items-center flex px-4 py-3">
              <button
                 onClick={onSend}
              className="px-4 py-2 mr-5 bg-blue-500 text-white text-base font-medium rounded-md w-auto shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Send
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


function TrackCasePage() {
  const [submitted, setSubmitted] = useState(false);
  const [cases, setCases] = useState([]);
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredCase, setFilteredCase] = useState(null)
  const [reasonSchema, setReasonSchema] = useState({
    "reason": "",
    "additionalComments": "",
    "caseId": ""
  })

  const [isModalOpen, setIsModalOpen] = useState(false);

  const viewModelToCloseCase = () => {
    setIsModalOpen(true);
  };

  useEffect(()=>{
    async function fetchData() {
      try {
        const res = await apiRequest.get("/case/view-case");
        const data = await res.data.response.cases;
        setCases(data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])

  const handleSearchChange = (e) =>{
    setSearchQuery(e.target.value)
  }

  // useEffect(()=> {

  // }, [filteredCase])

  const handleCaseCloseRequest = async (e) =>{
    if(reasonSchema.reason.trim() != null || reasonSchema.reason.trim() != ''){
    try {
      const res = await apiRequest.post("/case/close-request" , reasonSchema);
      console.log(res);
      setIsModalOpen(false)
      setFilteredCase(null)
    } catch (error) {
      console.log(error);
    }
    }else{
      console.log("Type Reason Why Closing This");
      
    }
    

  }

  const handleSearch = (e) => {
    e.preventDefault();
    const caseResult = cases.find((caseItem)=>
      Object.keys(caseItem).includes(searchQuery)
    )
    if(caseResult){
      setReasonSchema((prev)=> ({
        ...prev,
        caseId: caseResult[searchQuery].caseId
      }))
      setFilteredCase(caseResult[searchQuery]);
      console.log(caseResult[searchQuery]);
    }else{
      setFilteredCase(null)
    }
  }



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
     <Navbar />

      <main className="container mx-auto mt-8 px-4 flex-grow">
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            Track Your Case
          </h2>
          <form onSubmit={handleSearch} className="flex items-center mb-4">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
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

          {filteredCase ? (
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                Case Status: {filteredCase.status}{" "}
                {getStatusIcon(filteredCase.status)}
              </h3>
              <p>
                <strong>Case Type:</strong> {filteredCase.caseType}
              </p>
              <p>
                <strong>Open Date:</strong> {filteredCase.caseDate}
              </p>
              <p>
                <strong>Address : </strong> {filteredCase.province}, {filteredCase.township}
              </p>
              <p>
                <strong>Police Station : </strong> {filteredCase.policeStation}
              </p>
              <p>
                <strong>Description:</strong> {filteredCase.caseDescription}
              </p>

            {filteredCase.closureRequested == false ? (
                <button
                onClick={viewModelToCloseCase}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-semibold mt-4"
              >
                Send Request To Close This Case
              </button>
            ): (
              <p>Request To Close The Case : <span className="bg-blue-600 px-2 py-1 text-white font-semibold rounded">Pending</span> </p>
            )}

   
              <p>
                {/* <strong>Assigned Officer:</strong> {caseDetails.assignedOfficer} */}
              </p>
              {/* {caseDetails.nextStep && (
                <p>
                  <strong>Next Step:</strong> {caseDetails.nextStep}
                </p>
              )}
              {caseDetails.resolution && (
                <p>
                  <strong>Resolution:</strong> {caseDetails.resolution}
                </p>
              )} */}

              {filteredCase.isOfficerAssigned ? (
                 <h4 className="font-semibold mt-4">Contact Details:</h4>
              ):(
                <>
                 <h4 className="font-semibold mt-4">No Officer Assiged To Your Case Yet.</h4>
                 <p>For emmigency call 10111 or Visit Your Nearest Police Station</p>
                </>
             
             )}

             
              {/* <p>
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
              </p> */}
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

        <Modal
            isOpen={isModalOpen }
            onClose={() => setIsModalOpen(false)}
            onSend={handleCaseCloseRequest}
          >
  
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                  Type Your Reason To Close The Case
              </h3>

  
              <textarea
              rows={1}
              value={reasonSchema.reason}
              onChange={(e) => setReasonSchema((prev)=>({
                ...prev,
                reason: e.target.value
              }))}
              className="shadow-sm p-5 focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full text-xl border-gray-300 rounded-md"
              placeholder="Why Closing The Case "
            />
  
              <textarea
              rows={4}
              value={reasonSchema.additionalComments}
              onChange={(e) => setReasonSchema((prev)=>({
                ...prev,
                additionalComments: e.target.value
              }))}
              className="shadow-sm p-5 focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full text-xl border-gray-300 rounded-md"
              placeholder="Additional "
            />
  

          </Modal>

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
