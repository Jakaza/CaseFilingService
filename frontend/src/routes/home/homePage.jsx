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
        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Welcome to Our Online Case Filing Service
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Report incidents, file complaints, and track your cases online.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg">
            <Link to="open-case">Open a New Case</Link>
            <FaChevronRight className="inline-block ml-2 h-4 w-4" />
          </Button>
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
              For emergencies, always call 911. For non-emergencies, call (555)
              123-4567.
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
          <p className="mt-2">For emergencies, always dial 911</p>
        </div>
      </footer>
    </div>
  );
}

export default homePage;
