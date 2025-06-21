// src/components/smartphones/TrustIndicators.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaTrophy } from "react-icons/fa";
import { BsLightning } from "react-icons/bs";
import PremiumButton from "../common/PremiumButton";

const TrustIndicators = () => {
  return (
    <>
      {/* Trust Indicators */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
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

        <div className="text-center p-6 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-xl rounded-3xl border border-yellow-500/20">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaTrophy className="text-2xl text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Best Prices</h3>
          <p className="text-gray-300 text-sm">
            Guaranteed lowest prices with exclusive deals and discounts
          </p>
        </div>
      </motion.div>

      {/* Terms Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="flex justify-center mt-16 mb-10"
      >
        <PremiumButton text="Terms & Conditions" href="/terms" type="terms" />
      </motion.div>
    </>
  );
};

export default TrustIndicators;
