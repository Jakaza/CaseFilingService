import React, { useContext } from 'react'
import {AuthContext} from "./../../context/AuthContext"
import { Link } from "react-router-dom";

function Navbar() {

    const { currentUser } = useContext(AuthContext);

  return (
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
          <Link to="/contact" className="hover:text-yellow-300">
              Contact Us
            </Link>
          </li>


          {currentUser ? (
      <div className="user">
      
        <span>{currentUser.firstname}</span>
        <Link to="/profile" className="profile">
        
          <span> - Profile</span>
        </Link>
      </div>
    ) : (
      <li>
      <Link to="/login" className="hover:text-yellow-300">
        Sign In
      </Link>
     </li>
    )}

        </ul>
      </nav>
    </div>
  </header>
  )
}

export default Navbar