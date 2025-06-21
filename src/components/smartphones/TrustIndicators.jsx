// src/components/smartphones/TrustIndicators.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt } from "react-icons/fa";
import { BsLightning } from "react-icons/bs";

const TermsButton = ({ text }) => (
  <motion.a
    href="/terms"
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.98 }}
    className="relative inline-flex items-center justify-center px-12 py-3 rounded-full text-lg font-bold text-black overflow-hidden group"
  >
    <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full filter blur-sm opacity-75 group-hover:opacity-90 animate-pulse" />
    <span className="absolute inset-0 rounded-full ring ring-transparent group-hover:ring-blue-300 transition duration-300" />
    <span className="relative z-10 drop-shadow-sm whitespace-nowrap">
      {text}
    </span>
  </motion.a>
);

const TrustIndicators = () => {
  return (
    <>
      {/* Trust Indicators */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
      >
        <div className="text-center p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl rounded-3xl border border-green-500/20">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaShieldAlt className="text-2xl text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">100% Authentic</h3>
          <p className="text-gray-300 text-sm">
            All products come with official warranty and authenticity guarantee
          </p>
        </div>

        <div className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-xl rounded-3xl border border-blue-500/20">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <BsLightning className="text-2xl text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Fast Delivery</h3>
          <p className="text-gray-300 text-sm">
            Island-wide delivery within 24-48 hours with secure packaging
          </p>
        </div>
      </motion.div>

      {/* Terms Button - Beautiful Blue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="flex justify-center mt-16 mb-10"
      >
        <TermsButton text="Terms & Conditions" />
      </motion.div>
    </>
  );
};

export default TrustIndicators;
