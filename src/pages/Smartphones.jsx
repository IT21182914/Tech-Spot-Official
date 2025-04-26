import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MdPhoneIphone } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { allPhones } from "../data";
import { applestockList } from "../data/appleStockList";

const WHATSAPP_NUMBER = "94726048468";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
const waLink = (msg) => `${WHATSAPP_URL}?text=${encodeURIComponent(msg)}`;

const Smartphones = () => {
  const [activeCategory, setActiveCategory] = useState("Apple");
  const [searchTerm, setSearchTerm] = useState("");
  const [copiedText, setCopiedText] = useState("");

  const scrollRef = useRef(null);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop += 2;
        if (
          scrollRef.current.scrollTop + scrollRef.current.clientHeight >=
          scrollRef.current.scrollHeight
        ) {
          scrollRef.current.scrollTop = 0;
        }
      }
    }, 30);
    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  const pauseAutoScroll = () => {
    clearInterval(intervalRef.current);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollTop += 2;
          if (
            scrollRef.current.scrollTop + scrollRef.current.clientHeight >=
            scrollRef.current.scrollHeight
          ) {
            scrollRef.current.scrollTop = 0;
          }
        }
      }, 30);
    }, 60000);
  };

  const phones = allPhones[activeCategory].filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const whatsappLink = (phone) =>
    waLink(`Hi Tech Spot! I'm interested in buying the ${phone.name}.`);

  const ReviewButton = ({ text }) => (
    <a
      href="/testimonials"
      className="relative inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-semibold text-black overflow-hidden group"
    >
      <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-200 rounded-full filter blur-sm opacity-75 group-hover:opacity-90 animate-pulse" />
      <span className="absolute inset-0 rounded-full ring ring-transparent group-hover:ring-yellow-300 transition duration-300" />
      <span className="relative z-10 drop-shadow-sm whitespace-nowrap">
        {text}
      </span>
    </a>
  );

  const TermsButton = ({ text }) => (
    <a
      href="/terms"
      className="relative inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-semibold text-black overflow-hidden group"
    >
      <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full filter blur-sm opacity-75 group-hover:opacity-90 animate-pulse" />
      <span className="absolute inset-0 rounded-full ring ring-transparent group-hover:ring-blue-300 transition duration-300" />
      <span className="relative z-10 drop-shadow-sm whitespace-nowrap">
        {text}
      </span>
    </a>
  );

  return (
    <div className="bg-black text-white min-h-screen py-12 px-6">
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:items-center mb-10">
        <ReviewButton text="What customers say about us" />
        <h1 className="text-3xl sm:text-4xl font-bold text-center">
          Smartphones
        </h1>
        <ReviewButton text="පාරිභෝගිකයන් අපි ගැන කියන දේ" />
      </div>

      <div className="max-w-md mx-auto mb-6">
        <input
          type="text"
          placeholder="Search by model name…"
          className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10">
        {Object.keys(allPhones).map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setSearchTerm("");
            }}
            className={`px-4 py-2 rounded-full border transition duration-300 ${
              activeCategory === cat
                ? "bg-blue-500 text-white border-blue-500"
                : "text-gray-400 border-gray-600 hover:bg-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {phones.length === 0 ? (
          <p className="text-center text-gray-500 col-span-full">
            No smartphones found.
          </p>
        ) : (
          phones.map((phone, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 flex flex-col"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={phone.image}
                alt={phone.name}
                className="w-full h-72 object-contain p-1 transition-transform duration-300 hover:scale-105"
              />
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold">{phone.name}</h3>
                <p className="text-gray-400 text-sm mt-1">{phone.specs}</p>
                {phone.price && (
                  <p className="text-blue-400 font-medium mt-1">
                    {phone.price}
                  </p>
                )}

                <a
                  href={whatsappLink(phone)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block text-center px-3 py-1.5 bg-green-500 rounded-lg text-sm font-semibold hover:bg-green-600 transition duration-300"
                >
                  Order via WhatsApp
                </a>
              </div>
            </motion.div>
          ))
        )}
      </motion.div>

      {/* Available Models Section */}
      <div className="max-w-3xl mx-auto mt-16 bg-white text-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 relative">
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
            {applestockList.map((item, idx) => {
              const [modelName] = item.split("–");
              return (
                <li
                  key={idx}
                  className="bg-gray-100 px-3 py-2 rounded text-gray-800 shadow-sm flex justify-between items-center gap-3"
                >
                  <span
                    className="flex-1 break-words cursor-pointer"
                    onClick={() => {
                      navigator.clipboard.writeText(modelName.trim());
                      setCopiedText(`Copied: ${modelName.trim()}`);
                      setTimeout(() => setCopiedText(""), 2500);
                    }}
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
            })}
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
              මිල ගණන් වෙනස් විය හැකි බැවින් නවතම මිල විමසීමට WhatsApp හරහා අප
              වෙත සම්බන්ධ වන්න.
            </p>
          </div>
        </div>
      </div>

      {/* 🆕 Perfect Terms and Conditions Button at the very bottom */}
      <div className="flex justify-center mt-16 mb-10">
        <TermsButton text="Terms & Conditions" />
      </div>
    </div>
  );
};

export default Smartphones;
