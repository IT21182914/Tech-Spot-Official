import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MdPhoneIphone } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiCopy } from "react-icons/bi";

const allPhones = {
  Apple: [
    {
      name: "iPhone 14 (128GB)",
      specs: "128GB ROM",
      image: "/images/iPhones/Iphone 14 128GB.jpg",
    },
    {
      name: "iPhone 16 (128GB)",
      specs: "128GB ROM",
      image: "/images/iPhones/Iphone 16 128 GB.jpg",
    },
    {
      name: "iPhone 16 (128GB Blue)",
      specs: "128GB ROM | Blue",
      image: "/images/iPhones/Iphone 16 128 GB Blue.jpg",
    },
    {
      name: "iPhone 16 Pro (256GB)",
      specs: "256GB ROM",
      image: "/images/iPhones/Iphone 16 Pro 256 GB.jpg",
    },
    {
      name: "iPhone 16 Pro Max (256GB)",
      specs: "256GB ROM | Max Edition",
      image: "/images/iPhones/Iphone 16 Pro Max 256 GB.jpg",
    },
  ],
  Samsung: [
    {
      name: "Galaxy S23 Ultra",
      specs: "12GB RAM | 256GB ROM",
      image:
        "https://cdn.pixabay.com/photo/2022/03/12/09/23/smartphone-7063761_640.jpg",
    },
  ],
  Xiaomi: [
    {
      name: "Redmi Note 12",
      specs: "6GB RAM | 128GB ROM",
      image:
        "https://cdn.pixabay.com/photo/2022/05/03/19/18/smartphone-7171749_640.jpg",
    },
  ],
  Vivo: [],
  Huawei: [],
  "Samsung Tablets": [],
  Honor: [],
  "Google Pixel": [],
  Oppo: [],
  Realme: [],
  Infinix: [],
};

const applestockList = [
  "iPhone 13 128GB Midnight – Rs. 163,000",
  "iPhone 13 128GB Blue – Rs. 164,000",
  "iPhone 13 128GB Starlight – Rs. 164,000",
  "iPhone 14 128GB Starlight – Rs. 194,000",
  "iPhone 14 128GB Blue – Rs. 194,000",
  "iPhone 14 128GB Midnight – Rs. 195,000",
  "iPhone 15 128GB Green – Rs. 217,000",
  "iPhone 15 128GB Blue – Rs. 218,000",
  "iPhone 15 128GB Black – Rs. 220,000",
  "iPhone 15 128GB Pink – Rs. 220,000",
  "iPhone 15 128GB Green (ZPA) – Rs. 222,000",
  "iPhone 15 128GB Blue (ZPA) – Rs. 222,000",
  "iPhone 15 128GB Green (TRC) – Rs. 228,000",
  "iPhone 15 128GB Pink (TRC) – Rs. 228,000",
  "iPhone 15 256GB Blue – Rs. 256,000",
  "iPhone 15 256GB Black – Rs. 257,000",
  "iPhone 16 128GB Pink – Rs. 240,000",
  "iPhone 16 128GB White – Rs. 240,000",
  "iPhone 16 128GB Ultramarine – Rs. 240,000",
  "iPhone 16 128GB Teal – Rs. 241,000",
  "iPhone 16 128GB Black – Rs. 242,000",
  "iPhone 16 128GB Teal (XA) – Rs. 243,500",
  "iPhone 16 128GB White (XA) – Rs. 243,500",
  "iPhone 16 128GB Ultramarine (XA) – Rs. 243,500",
  "iPhone 16 256GB Black – Rs. 276,000",
  "iPhone 16 256GB Teal – Rs. 276,000",
  "iPhone 16 256GB Ultramarine – Rs. 277,000",
  "iPhone 16 256GB White – Rs. 278,000",
  "iPhone 16 Pro 128GB Black – Rs. 329,000",
  "iPhone 16 Pro 128GB Desert – Rs. 331,000",
  "iPhone 16 Pro 128GB Natural – Rs. 332,000",
  "iPhone 16 Pro 128GB White – Rs. 333,000",
  "iPhone 16 Pro 256GB Desert – Rs. 358,000",
  "iPhone 16 Pro 256GB Black – Rs. 359,000",
  "iPhone 16 Pro 256GB White – Rs. 363,000",
  "iPhone 16 Pro Max 256GB Desert – Rs. 379,000",
  "iPhone 16 Pro Max 256GB Natural – Rs. 385,000",
  "iPhone 16 Pro Max 256GB White – Rs. 388,000",
  "iPhone 16 Pro Max 512GB Natural – Rs. 449,000",
  "iPhone 16 Pro Max 512GB Desert – Rs. 449,000",
  "iPhone 16 Pro Max 512GB White – Rs. 454,000",
  "iPhone 16 Pro Max 1TB Desert – Rs. 497,000",
];

const Smartphones = () => {
  const [activeCategory, setActiveCategory] = useState("Apple");
  const [searchTerm, setSearchTerm] = useState("");
  const [copiedText, setCopiedText] = useState("");
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    startAutoScroll();
    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  const startAutoScroll = () => {
    intervalRef.current = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop += 1;
        if (
          scrollRef.current.scrollTop + scrollRef.current.clientHeight >=
          scrollRef.current.scrollHeight
        ) {
          scrollRef.current.scrollTop = 0;
        }
      }
    }, 80);
  };

  const pauseAutoScroll = () => {
    clearInterval(intervalRef.current);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      startAutoScroll();
    }, 60000);
  };

  const phones = allPhones[activeCategory].filter((phone) =>
    phone.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-black text-white min-h-screen py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-8">Smartphones</h1>

      <div className="max-w-md mx-auto mb-6">
        <input
          type="text"
          placeholder="Search by model name..."
          className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {Object.keys(allPhones).map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category);
              setSearchTerm("");
            }}
            className={`px-4 py-2 rounded-full border transition duration-300 ${
              activeCategory === category
                ? "bg-blue-500 text-white border-blue-500"
                : "text-gray-400 border-gray-600 hover:bg-gray-700"
            }`}
          >
            {category}
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
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={phone.image}
                alt={phone.name}
                className="w-full h-72 object-contain p-1 transition-transform duration-300 hover:scale-105"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white">
                  {phone.name}
                </h3>
                <p className="text-gray-400 text-sm mt-1">{phone.specs}</p>
              </div>
            </motion.div>
          ))
        )}
      </motion.div>

      {/* 📋 Available Models with Copy & Toast */}
      <div className="max-w-3xl mx-auto mt-16 bg-white text-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 relative">
        <div className="flex items-center justify-center gap-2 mb-4">
          <MdPhoneIphone className="text-xl text-blue-600" />
          <h2 className="text-2xl font-bold text-center">Available Models</h2>
        </div>

        <p className="text-center text-sm mb-4 text-blue-500">
          👉 Click and copy the model name, then message on WhatsApp for quick
          response
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
                  className="bg-gray-100 px-4 py-2 rounded text-gray-800 shadow-sm hover:bg-gray-200 transition cursor-pointer flex justify-between items-start sm:items-center gap-2"
                  onClick={() => {
                    navigator.clipboard.writeText(modelName.trim());
                    setCopiedText(`Copied: ${modelName.trim()}`);
                    setTimeout(() => setCopiedText(""), 2500);
                  }}
                >
                  <span className="break-words text-sm sm:text-base">
                    {item}
                  </span>
                  <BiCopy className="text-blue-500 text-lg min-w-5" />
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
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-100 text-blue-800 px-5 py-3 rounded-lg shadow-lg z-50 text-center text-sm sm:text-base"
          >
            {copiedText}
          </motion.div>
        )}

        <div className="mt-6 flex flex-col items-center text-yellow-600 text-sm font-medium space-y-2">
          <div className="flex items-start w-full max-w-md">
            <AiOutlineInfoCircle className="flex-shrink-0 mt-1 text-lg" />
            <p className="ml-2 leading-relaxed">
              Prices may change. Contact seller for the latest information.
            </p>
          </div>

          <div className="flex items-start w-full max-w-md">
            <AiOutlineInfoCircle className="flex-shrink-0 mt-1 text-lg" />
            <p className="ml-2 leading-relaxed">
              මිල ගණන් වෙනස් වී තිබිය හැකි බැවින් අපගේ සේවා නිළධාරියෙකු හා
              සම්බන්ධ වී ඔබට නවතම මිල ගණන් විමසා දැනගත හැක.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Smartphones;
