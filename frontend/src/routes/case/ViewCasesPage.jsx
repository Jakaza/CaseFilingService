import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";

function ViewCasesPage() {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);

  // Sample data representing case history
  const sampleCases = [
    {
      _id: "1",
      caseTitle: "Theft at Business Premises",
      caseDescription: "Theft of goods worth R50,000 from a local store.",
      caseType: "Criminal",
      status: "Closed",
      caseDate: "2024-06-15T14:00:00Z",
      assignedOfficer: { name: "Officer John Doe" },
      officerComments: "Suspect apprehended. Case closed.",
      courtDetails: "Court date: 2024-08-01, Pretoria High Court.",
      caseDocuments: [
        {
          documentUrl: "https://example.com/document1",
          description: "Evidence Document 1",
        },
        {
          documentUrl: "https://example.com/document2",
          description: "Evidence Document 2",
        },
      ],
      isClosed: true,
      closureRequested: true,
      closureApproval: true,
      closureReason: {
        reason: "Case resolved with the arrest of the suspect.",
        additionalComments: "No further investigation needed.",
      },
    },
    {
      _id: "2",
      caseTitle: "Family Dispute Over Inheritance",
      caseDescription: "Dispute over family inheritance between siblings.",
      caseType: "Family",
      status: "In Progress",
      caseDate: "2024-07-01T10:30:00Z",
      assignedOfficer: { name: "Officer Jane Smith" },
      officerComments: "Investigation ongoing, awaiting legal advice.",
      courtDetails: "Court date: 2024-09-15, Pretoria Family Court.",
      caseDocuments: [
        {
          documentUrl: "https://example.com/document3",
          description: "Inheritance Will Document",
        },
      ],
      isClosed: false,
      closureRequested: false,
      closureApproval: false,
    },
    {
      _id: "3",
      caseTitle: "Civil Lawsuit for Damages",
      caseDescription: "Lawsuit for damages caused by a car accident.",
      caseType: "Civil",
      status: "Open",
      caseDate: "2024-08-05T08:15:00Z",
      assignedOfficer: { name: "Officer Michael Brown" },
      officerComments: "Case is being reviewed for further investigation.",
      courtDetails: "Court date: Pending.",
      caseDocuments: [
        {
          documentUrl: "https://example.com/document4",
          description: "Accident Report Document",
        },
      ],
      isClosed: false,
      closureRequested: false,
      closureApproval: false,
    },
  ];

  useEffect(() => {
    // Simulating data fetch with the sample data
    setTimeout(() => {
      setCases(sampleCases);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto mt-8 px-4">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Case History</h2>
          
          {loading ? (
            <p className="text-center text-gray-700">Loading cases...</p>
          ) : (
            <div>
              {cases.length === 0 ? (
                <p className="text-center text-gray-700">No cases found.</p>
              ) : (
                cases.map((caseItem, index) => (
                  <div
                    key={caseItem._id}
                    className="case-box mb-6 p-4 rounded-lg shadow-lg border border-gray-200"
                  >
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-blue-700">
                        Case #{index + 1}: {caseItem.caseTitle}
                      </h3>
                      <p className="text-gray-600">{caseItem.caseDescription}</p>
                      <p className="text-gray-500">Case Type: {caseItem.caseType}</p>
                      <p className="text-gray-500">Status: {caseItem.status}</p>
                      <p className="text-gray-500">Case Date: {new Date(caseItem.caseDate).toLocaleDateString()}</p>
                    </div>
                    
                    {caseItem.assignedOfficer && (
                      <div className="mt-4">
                        <h4 className="font-semibold text-gray-700">Assigned Officer:</h4>
                        <p>{caseItem.assignedOfficer.name}</p>
                      </div>
                    )}
                    
                    {caseItem.officerComments && (
                      <div className="mt-4">
                        <h4 className="font-semibold text-gray-700">Officer's Comments:</h4>
                        <p>{caseItem.officerComments}</p>
                      </div>
                    )}
                    
                    {caseItem.courtDetails && (
                      <div className="mt-4">
                        <h4 className="font-semibold text-gray-700">Court Details:</h4>
                        <p>{caseItem.courtDetails}</p>
                      </div>
                    )}

                    {/* Case Documents */}
                    {caseItem.caseDocuments && caseItem.caseDocuments.length > 0 && (
                      <div className="mt-4">
                        <h4 className="font-semibold text-gray-700">Documents:</h4>
                        {caseItem.caseDocuments.map((doc, index) => (
                          <div key={index} className="mb-2">
                            <a href={doc.documentUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                              {doc.description || "View Document"}
                            </a>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Case Closure */}
                    {caseItem.isClosed && (
                      <div className="mt-4 bg-gray-100 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-700">Case Closed:</h4>
                        <p>Status: Closed</p>
                        <p>Closure Requested: {caseItem.closureRequested ? "Yes" : "No"}</p>
                        <p>Closure Approval: {caseItem.closureApproval ? "Approved" : "Pending"}</p>

                        {caseItem.closureRequested && !caseItem.closureApproval && (
                          <div>
                            <h5 className="font-semibold text-gray-700">Reason for Closure Request:</h5>
                            {caseItem.closureReason ? (
                              <p>{caseItem.closureReason.reason}</p>
                            ) : (
                              <p>No reason provided</p>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default ViewCasesPage;
