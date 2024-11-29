import React from 'react'
import Navbar from "../../components/navbar/Navbar";

function TermsAndConditions() {
    return (
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <main className="container mx-auto mt-8 px-4">
            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-blue-900 mb-4 text-center">
                Terms and Conditions
              </h2>
              <div className="text-gray-700 text-lg leading-relaxed space-y-6">
                <p>
                  Welcome to the SAPS Case Tracking System. By using this website,
                  you agree to comply with and be bound by the following terms and
                  conditions. Please read them carefully before using the website.
                </p>
    
                <h3 className="text-2xl font-semibold text-blue-800">
                  1. Acceptance of Terms
                </h3>
                <p>
                  By accessing or using the SAPS Case Tracking System, you agree to
                  be legally bound by these terms and conditions. If you do not
                  agree, please refrain from using this platform.
                </p>
    
                <h3 className="text-2xl font-semibold text-blue-800">
                  2. Privacy Policy
                </h3>
                <p>
                  Your privacy is important to us. By using this system, you consent
                  to the collection, storage, and use of your personal information
                  as outlined in our Privacy Policy.
                </p>
    
                <h3 className="text-2xl font-semibold text-blue-800">
                  3. User Responsibilities
                </h3>
                <p>
                  You are responsible for ensuring that all information submitted on
                  this platform is accurate and truthful. Any misuse of the system
                  is strictly prohibited.
                </p>
    
                <h3 className="text-2xl font-semibold text-blue-800">
                  4. Case Reporting and Tracking
                </h3>
                <p>
                  This platform is designed for reporting and tracking cases with
                  SAPS. Submitting false or misleading information is punishable
                  under South African law.
                </p>
    
                <h3 className="text-2xl font-semibold text-blue-800">
                  5. Limitation of Liability
                </h3>
                <p>
                  The SAPS Case Tracking System is provided "as is" without any
                  guarantees or warranties. The SAPS is not liable for any damages
                  arising from the use of this platform.
                </p>
    
                <h3 className="text-2xl font-semibold text-blue-800">
                  6. Changes to Terms
                </h3>
                <p>
                  These terms and conditions may be updated at any time without
                  prior notice. Please check this page regularly to stay informed of
                  any changes.
                </p>
    
                <h3 className="text-2xl font-semibold text-blue-800">
                  7. Governing Law
                </h3>
                <p>
                  These terms are governed by the laws of South Africa. Any disputes
                  arising from the use of this platform will be subject to South
                  African jurisdiction.
                </p>
              </div>
            </section>
    
            <section className="text-center mt-8">
              <p className="text-gray-600">
                If you have any questions or concerns, please contact us at
                support@saps-case-tracking.com.
              </p>
            </section>
          </main>
    
          <footer className="bg-blue-900 text-white mt-12 py-6">
            <div className="container mx-auto text-center">
              <p>
                &copy; {new Date().getFullYear()} SAPS Case Tracking System. All
                rights reserved.
              </p>
              <p className="mt-2">For emergencies, always dial 10 111.</p>
            </div>
          </footer>
        </div>
      );
}

export default TermsAndConditions