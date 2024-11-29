import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";

function FileComplaintsPage() {
  const [formData, setFormData] = useState({
    complaintType: "",
    description: "",
    attachment: null,
    isAnonymous: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, attachment: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Complaint Submitted:", formData);

    setSubmitted(true);
    setFormData({
      complaintType: "",
      description: "",
      attachment: null,
      isAnonymous: false,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto mt-8 px-4">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">File a Complaint</h2>
          <p className="text-gray-700 mb-4">
            Report complaints about service delivery, officer conduct, or other concerns. You may choose to submit anonymously.
          </p>

          {submitted && (
            <div className="bg-green-100 text-green-700 p-3 rounded-md mb-4">
              <strong>Thank you:</strong> Your complaint has been submitted successfully.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Complaint Type */}
            <div>
              <label htmlFor="complaintType" className="block font-medium text-gray-700">
                Complaint Type
              </label>
              <select
                id="complaintType"
                name="complaintType"
                value={formData.complaintType}
                onChange={handleChange}
                required
                className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="" disabled>
                  Select a type
                </option>
                <option value="Service Delivery">Service Delivery</option>
                <option value="Officer Conduct">Officer Conduct</option>
                <option value="Delays">Delays</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="4"
                className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Provide details of your complaint"
              ></textarea>
            </div>

            {/* Anonymous Reporting */}
            <div className="flex items-center">
              <input
                id="isAnonymous"
                name="isAnonymous"
                type="checkbox"
                checked={formData.isAnonymous}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label htmlFor="isAnonymous" className="ml-2 text-gray-700">
                Report anonymously
              </label>
            </div>

            {/* File Attachment */}
            <div>
              <label htmlFor="attachment" className="block font-medium text-gray-700">
                Attachment (optional)
              </label>
              <input
                type="file"
                id="attachment"
                name="attachment"
                onChange={handleFileChange}
                className="mt-1 block w-full"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Submit Complaint
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default FileComplaintsPage;
