import React from "react";
import "./homePage.css";
// import { ChevronRight } from 'react-icons/md';
import { FaChevronRight, FaPhoneSquareAlt } from "react-icons/fa";
import { FaFileShield } from "react-icons/fa6";
import { FiFileText } from "react-icons/fi";
import { Link } from "react-router-dom";
// import { FileText, Phone, Shield } from 'react-icons/lu';

const Button = ({ children, className, ...props }) => (
  <button className={`px-4 py-2 rounded font-semibold ${className}`} {...props}>
    {children}
  </button>
);

const Card = ({ children }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">{children}</div>
);

const CardHeader = ({ children }) => <div className="mb-4">{children}</div>;

const CardTitle = ({ children, className }) => (
  <h3 className={`text-xl font-semibold ${className}`}>{children}</h3>
);

const CardContent = ({ children }) => <div>{children}</div>;

function homePage() {
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
        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Welcome to Our Online Case Filing Service
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Report incidents, file complaints, and track your cases online.
          </p>
          <div className="flex flex-col space-y-4 items-center">
            <Button className="bg-blue-600 text-yellow-200 hover:bg-blue-700 text-white text-lg max-w-xs">
              <Link to="open-case" className="flex items-center justify-center">
                Open a New Case
                <FaChevronRight className="inline-block ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button className="bg-yellow-400 text-white hover:bg-yellow-200 text-lg max-w-xs">
              <Link
                to="track-case"
                className="flex items-center justify-center"
              >
                Track Your Case
                <FaChevronRight className="inline-block ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-blue-800">
                <FiFileText className="mr-2" />
                File a Report
              </CardTitle>
            </CardHeader>
            <CardContent>
              Easily submit detailed reports for various incidents online.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-blue-800">
                <FaFileShield className="mr-2" />
                Track Your Case
              </CardTitle>
            </CardHeader>
            <CardContent>
              Stay updated on the progress of your filed cases.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-blue-800">
                <FaPhoneSquareAlt className="mr-2" />
                Emergency Contact
              </CardTitle>
            </CardHeader>
            <CardContent>
              For emergencies, always call 10 111. For non-emergencies, call
              012-7301319.
            </CardContent>
          </Card>
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
          <p className="mt-2">For emergencies, always dial 10 111</p>
        </div>
      </footer>
    </div>
  );
}

export default homePage;
