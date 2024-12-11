import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src="/images/Logo.png"
            alt="Tech Spot Logo"
            className="h-14 w-14 lg:h-20 lg:w-20"
          />
          <h1 className="text-2xl lg:text-3xl fascinate-inline-regular">
            Tech Spot
          </h1>
        </div>

        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              to="/"
              className="hover:text-blue-500 transition duration-300 font-semibold"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/shop"
              className="hover:text-blue-500 transition duration-300 font-semibold"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/location"
              className="hover:text-blue-500 transition duration-300 font-semibold"
            >
              Location
            </Link>
          </li>
          <li>
            <Link
              to="/repair"
              className="hover:text-blue-500 transition duration-300 font-semibold"
            >
              Repair Services
            </Link>
          </li>
          <li>
            <Link
              to="/reviews"
              className="hover:text-blue-500 transition duration-300 font-semibold"
            >
              Reviews
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-blue-500 transition duration-300 font-semibold"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-blue-500 transition duration-300 font-semibold"
            >
              About Us
            </Link>
          </li>
        </ul>

        <div
          className="md:hidden flex items-center cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-700">
          <ul className="flex flex-col items-center space-y-4 py-6">
            <li>
              <Link
                to="/"
                className="text-lg font-medium hover:text-blue-500 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="text-lg font-medium hover:text-blue-500 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/location"
                className="text-lg font-medium hover:text-blue-500 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Location
              </Link>
            </li>
            <li>
              <Link
                to="/repair"
                className="text-lg font-medium hover:text-blue-500 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Repair Services
              </Link>
            </li>
            <li>
              <Link
                to="/reviews"
                className="text-lg font-medium hover:text-blue-500 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Reviews
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-lg font-medium hover:text-blue-500 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-lg font-medium hover:text-blue-500 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
