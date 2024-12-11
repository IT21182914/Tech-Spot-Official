import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-400 py-8 px-4">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <div className="flex justify-center items-center gap-2">
          <img
            src="/images/Logo.png"
            alt="Tech Spot Logo"
            className="h-8 w-8"
          />
          <h1 className="text-2xl font-bold text-white">Tech Spot</h1>
        </div>

        <div className="flex justify-center space-x-6 text-2xl">
          <a
            href="https://www.facebook.com/profile.php?id=61558973124367"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400 transition duration-300"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/tech_spot_99/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-400 transition duration-300"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/techspot99"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition duration-300"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://wa.me/94726048468"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-400 transition duration-300"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>

        <div className="flex justify-center space-x-6 text-sm md:text-base">
          <a href="#about" className="hover:text-white transition duration-300">
            About Us
          </a>
          <a
            href="/repair"
            className="hover:text-white transition duration-300"
          >
            Services
          </a>
          <a
            href="/contact"
            className="hover:text-white transition duration-300"
          >
            Contact
          </a>
          <a href="#faq" className="hover:text-white transition duration-300">
            FAQ
          </a>
        </div>

        <p className="text-sm text-gray-500">
          &copy; {currentYear} Tech Spot. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
