import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaShoppingBag,
  FaMapMarkerAlt,
  FaTools,
  FaStar,
  FaPhone,
  FaInfoCircle,
} from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-black text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src="/images/Logo.png"
            alt="Tech Spot Logo"
            className="h-10 w-10 lg:h-12 lg:w-12"
          />
          <h1 className="text-xl lg:text-2xl font-bold">Tech Spot</h1>
        </div>

        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              to="/"
              className={`transition duration-300 font-semibold ${
                isActive("/") ? "text-blue-500" : "hover:text-blue-500"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/smartphones"
              className={`transition duration-300 font-semibold ${
                isActive("/smartphones")
                  ? "text-blue-500"
                  : "text-yellow-400 hover:text-yellow-300"
              }`}
            >
              Smartphones
            </Link>
          </li>

          <li>
            <Link
              to="/shop"
              className={`transition duration-300 font-semibold ${
                isActive("/shop") ? "text-blue-500" : "hover:text-blue-500"
              }`}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/location"
              className={`transition duration-300 font-semibold ${
                isActive("/location") ? "text-blue-500" : "hover:text-blue-500"
              }`}
            >
              Location
            </Link>
          </li>
          <li>
            <Link
              to="/repair"
              className={`transition duration-300 font-semibold ${
                isActive("/repair") ? "text-blue-500" : "hover:text-blue-500"
              }`}
            >
              Repair Services
            </Link>
          </li>
          <li>
            <Link
              to="/reviews"
              className={`transition duration-300 font-semibold ${
                isActive("/reviews") ? "text-blue-500" : "hover:text-blue-500"
              }`}
            >
              Reviews
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`transition duration-300 font-semibold ${
                isActive("/contact") ? "text-blue-500" : "hover:text-blue-500"
              }`}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`transition duration-300 font-semibold ${
                isActive("/about") ? "text-blue-500" : "hover:text-blue-500"
              }`}
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
        <div className="md:hidden bg-black bg-opacity-90 backdrop-blur-lg border-t border-gray-700">
          <ul className="flex flex-col items-center space-y-4 py-6">
            <li>
              <Link
                to="/"
                className={`text-lg font-medium transition duration-300 flex items-center gap-2 ${
                  isActive("/") ? "text-blue-500" : "hover:text-blue-500"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <FaHome />
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/smartphones"
                className={`text-lg font-medium transition duration-300 flex items-center gap-2 ${
                  isActive("/smartphones")
                    ? "text-blue-500"
                    : "text-[#FFD700] hover:text-yellow-500"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <FaShoppingBag />
                Smartphones
              </Link>
            </li>

            <li>
              <Link
                to="/shop"
                className={`text-lg font-medium transition duration-300 flex items-center gap-2 ${
                  isActive("/shop") ? "text-blue-500" : "hover:text-blue-500"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <FaShoppingBag />
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/location"
                className={`text-lg font-medium transition duration-300 flex items-center gap-2 ${
                  isActive("/location")
                    ? "text-blue-500"
                    : "hover:text-blue-500"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <FaMapMarkerAlt />
                Location
              </Link>
            </li>
            <li>
              <Link
                to="/repair"
                className={`text-lg font-medium transition duration-300 flex items-center gap-2 ${
                  isActive("/repair") ? "text-blue-500" : "hover:text-blue-500"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <FaTools />
                Repair Services
              </Link>
            </li>
            <li>
              <Link
                to="/reviews"
                className={`text-lg font-medium transition duration-300 flex items-center gap-2 ${
                  isActive("/reviews") ? "text-blue-500" : "hover:text-blue-500"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <FaStar />
                Reviews
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`text-lg font-medium transition duration-300 flex items-center gap-2 ${
                  isActive("/contact") ? "text-blue-500" : "hover:text-blue-500"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <FaPhone />
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`text-lg font-medium transition duration-300 flex items-center gap-2 ${
                  isActive("/about") ? "text-blue-500" : "hover:text-blue-500"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <FaInfoCircle />
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
