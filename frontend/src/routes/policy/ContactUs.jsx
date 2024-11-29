import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function ContactUs() {
    return (
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <main className="container mx-auto mt-8 px-4">
            <section className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Contact Us
              </h2>
              <p className="text-xl text-gray-700">
                Have questions or need assistance? Reach out to us!
              </p>
            </section>
    
            <section className="grid md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                  Send Us a Message
                </h3>
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Write your message here"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-semibold"
                  >
                    Send Message
                  </button>
                </form>
              </div>
    
              {/* Contact Information */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                  Get in Touch
                </h3>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-center space-x-4">
                    <FaPhoneAlt className="text-blue-600" />
                    <span>Head Office: +27 (0) 12 393 1000</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <FaEnvelope className="text-blue-600" />
                    <span>Email: support@saps.gov.za</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <FaMapMarkerAlt className="text-blue-600" />
                    <span>
                      SAPS Head Office<br />
                      Wachthuis Building<br />
                      231 Pretorius Street, Pretoria<br />
                      Private Bag X94, Pretoria, 0001
                    </span>
                  </div>
                  <div className="text-gray-700 mt-4">
                    <p>GPS Coordinates: S25.74790 E28.18901</p>
                  </div>
                  <hr className="my-4" />
                  <p className="text-sm text-gray-500">
                    The South African Police Service is committed to creating a safe and secure environment for all people in South Africa. Your feedback is welcome and important to us.
                  </p>
                  <p className="text-sm text-gray-500 mt-4">
                    <strong>Important:</strong> This page is not for emergencies or reporting crimes.
                  </p>
                  <ul className="text-sm text-gray-500 mt-2 list-disc list-inside">
                    <li>
                      For emergencies or to report a crime, call <strong>10111</strong> or contact your nearest Police Station.
                    </li>
                    <li>
                      To report a crime anonymously, contact Crime Stop at <strong>08600 10111</strong>.
                    </li>
                    <li>
                      To register a complaint on SAPS service delivery, call <strong>0800 333 177</strong>, fax <strong>012 393 5452</strong>, or email: <a href="mailto:servicecomplaints@saps.gov.za" className="text-blue-500">servicecomplaints@saps.gov.za</a>.
                    </li>
                  </ul>
                  <p className="text-sm text-gray-500 mt-4">
                    For general enquiries, suggestions, and/or compliments, feel free to contact us at SAPS Corporate Communications.
                  </p>
                </div>
              </div>
            </section>
          </main>
    
          <footer className="bg-blue-900 text-white mt-12 py-6">
            <div className="container mx-auto text-center">
              <p>
                &copy; {new Date().getFullYear()} SAPS Case Report System. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      );
}

export default ContactUs