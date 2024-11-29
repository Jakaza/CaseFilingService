import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";

function FileReportPage() {
  const [formData, setFormData] = useState({
    reportType: "",
    description: "",
    attachment: null,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, attachment: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulated submission
    console.log("Form Data Submitted:", formData);
    setSubmitted(true);
    setFormData({ reportType: "", description: "", attachment: null });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto mt-8 px-4">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">File a Report</h2>
          <p className="text-gray-700 mb-6">
            Use this form to submit a report. Please provide as much detail as
            possible to assist in the investigation.
          </p>

          {submitted && (
            <div className="bg-green-100 text-green-700 p-4 rounded-md mb-6">
              <strong>Success:</strong> Your report has been submitted
              successfully!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Report Type */}
            <div>
              <label
                htmlFor="reportType"
                className="block text-sm font-medium text-gray-700"
              >
                Report Type
              </label>
              <select
                id="reportType"
                name="reportType"
                value={formData.reportType}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="" disabled>
                  Select report type
                </option>
                <option value="Theft">Theft</option>
                <option value="Accident">Accident</option>
                <option value="Fraud">Fraud</option>
                <option value="Harassment">Harassment</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="5"
                className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Provide a detailed description of the incident"
              ></textarea>
            </div>

            {/* File Attachment */}
            <div>
              <label
                htmlFor="attachment"
                className="block text-sm font-medium text-gray-700"
              >
                Attachment (optional)
              </label>
              <input
                type="file"
                id="attachment"
                name="attachment"
                onChange={handleFileChange}
                className="mt-1 block w-full text-gray-600"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-semibold"
              >
                Submit Report
              </button>
            </div>
          </form>
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

export default FileReportPage;
