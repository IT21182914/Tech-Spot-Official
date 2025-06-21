// src/components/smartphones/AvailableModels.jsx
import React from "react";
import { motion } from "framer-motion";
import { MdPhoneIphone } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

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
      className="max-w-3xl mx-auto mt-16 bg-white text-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 relative"
    >
      <div className="flex items-center justify-center gap-2 mb-4">
        <MdPhoneIphone className="text-xl text-blue-600" />
        <h2 className="text-2xl font-bold text-center">Available Models</h2>
      </div>

      <p className="text-center text-xs sm:text-sm mb-4 text-blue-500">
        👉 Tap model to copy | Quick order on WhatsApp
      </p>

      <div
        ref={scrollRef}
        onScroll={pauseAutoScroll}
        className="h-64 overflow-y-auto scroll-smooth pr-2"
      >
        <ul className="space-y-2 text-sm md:text-base">
          {availableModels.length > 0 ? (
            availableModels.map((item, idx) => {
              const [modelName] = item.split("–");
              return (
                <li
                  key={idx}
                  className="bg-gray-100 px-3 py-2 rounded text-gray-800 shadow-sm flex justify-between items-center gap-3"
                >
                  <span
                    className="flex-1 break-words cursor-pointer"
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
                    className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-full w-8 h-8 min-w-[2rem] transition duration-300"
                    aria-label="Order via WhatsApp"
                  >
                    <FaWhatsapp className="text-base" />
                  </a>
                </li>
              );
            })
          ) : (
            <p className="text-center text-gray-500">No stock list found.</p>
          )}
        </ul>
      </div>

      {copiedText && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-100 text-blue-800 px-5 py-3 rounded-lg shadow-lg z-50 text-center"
        >
          {copiedText}
        </motion.div>
      )}

      <div className="mt-6 flex flex-col items-center text-yellow-600 text-xs sm:text-sm font-medium space-y-2">
        <div className="flex items-start w-full max-w-md">
          <AiOutlineInfoCircle className="flex-shrink-0 mt-1 text-lg" />
          <p className="ml-2 leading-relaxed">
            Prices may change. Contact us on WhatsApp for the latest price and
            delivery details.
          </p>
        </div>

        <div className="flex items-start w-full max-w-md">
          <AiOutlineInfoCircle className="flex-shrink-0 mt-1 text-lg" />
          <p className="ml-2 leading-relaxed">
            මිල ගණන් වෙනස් විය හැකි බැවින් නවතම මිල විමසීමට WhatsApp හරහා අප වෙත
            සම්බන්ධ වන්න.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AvailableModels;
