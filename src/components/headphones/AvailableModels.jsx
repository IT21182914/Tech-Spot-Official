// src/components/headphones/AvailableModels.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaHeadphones } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const AvailableModels = ({
  availableModels,
  activeCategory,
  scrollRef,
  pauseAutoScroll,
  copiedText,
  setCopiedText,
  waLink,
}) => {
  const handleCopyModel = (modelName) => {
    navigator.clipboard.writeText(modelName.trim());
    setCopiedText(`Copied: ${modelName.trim()}`);
    setTimeout(() => setCopiedText(""), 2500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="max-w-4xl mx-auto mt-20 bg-gradient-to-br from-white to-gray-50 text-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-100 relative backdrop-blur-sm"
    >
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-xl shadow-lg">
          <FaHeadphones className="text-2xl text-white" />
        </div>
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          Available Audio Products
        </h2>
      </div>

      <div className="text-center mb-6 bg-purple-50 border border-purple-200 rounded-xl p-4">
        <p className="text-sm font-medium text-purple-700 flex items-center justify-center gap-2">
          <span className="bg-purple-100 px-2 py-1 rounded-full text-xs">
            💡
          </span>
          Tap any model to copy • Quick order via WhatsApp
        </p>
      </div>

      <div
        ref={scrollRef}
        onScroll={pauseAutoScroll}
        className="h-72 overflow-y-auto scroll-smooth pr-2 custom-scrollbar"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#cbd5e1 #f1f5f9",
        }}
      >
        <ul className="space-y-3">
          {availableModels.length > 0 ? (
            availableModels.map((item, idx) => {
              const [modelName] = item.split("–");
              return (
                <li
                  key={idx}
                  className="group bg-white hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 border border-gray-200 hover:border-purple-300 px-4 py-4 rounded-xl text-gray-800 shadow-sm hover:shadow-md transition-all duration-300 flex justify-between items-center gap-4"
                >
                  <span
                    className="flex-1 break-words cursor-pointer font-medium text-sm md:text-base group-hover:text-purple-700 transition-colors duration-200"
                    onClick={() => handleCopyModel(modelName)}
                  >
                    {item}
                  </span>

                  <a
                    href={waLink(
                      `Hi Tech Spot! I'm interested in buying the ${modelName.trim()}.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-xl w-10 h-10 min-w-[2.5rem] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    aria-label="Order via WhatsApp"
                  >
                    <FaWhatsapp className="text-lg" />
                  </a>
                </li>
              );
            })
          ) : (
            <div className="text-center py-12">
              <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaHeadphones className="text-2xl text-gray-400" />
              </div>
              <p className="text-gray-500 font-medium">No stock list found</p>
              <p className="text-gray-400 text-sm mt-1">
                Please check back later
              </p>
            </div>
          )}
        </ul>
      </div>

      {copiedText && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: -10 }}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-4 rounded-2xl shadow-2xl z-50 text-center font-medium border border-purple-500"
        >
          <div className="flex items-center gap-2">
            <span className="text-lg">✓</span>
            {copiedText}
          </div>
        </motion.div>
      )}

      <div className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6">
        <div className="flex flex-col space-y-4">
          <div className="flex items-start gap-3">
            <div className="bg-amber-100 p-2 rounded-xl flex-shrink-0">
              <AiOutlineInfoCircle className="text-amber-600 text-lg" />
            </div>
            <div className="flex-1">
              <p className="text-amber-800 font-medium text-sm leading-relaxed">
                Prices may change. Contact us on WhatsApp for the latest price
                and delivery details. For terms and conditions{" "}
                <Link
                  to="/terms"
                  className="text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-2 font-semibold transition-all duration-200 hover:decoration-blue-800"
                >
                  click here
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="bg-amber-100 p-2 rounded-xl flex-shrink-0">
              <AiOutlineInfoCircle className="text-amber-600 text-lg" />
            </div>
            <div className="flex-1">
              <p className="text-amber-800 font-medium text-sm leading-relaxed">
                මිල ගණන් වෙනස් විය හැකි බැවින් නවතම මිල විමසීමට WhatsApp හරහා අප
                වෙත සම්බන්ධ වන්න. කොන්දේසි පිළිබඳ දැනගැනීම සඳහා{" "}
                <Link
                  to="/terms"
                  className="text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-2 font-semibold transition-all duration-200 hover:decoration-blue-800"
                >
                  මෙතන Click කරන්න
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AvailableModels;
