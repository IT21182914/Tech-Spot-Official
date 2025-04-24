import React, { useState } from "react";
import { motion } from "framer-motion";

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

const Smartphones = () => {
  const [activeCategory, setActiveCategory] = useState("Apple");
  const [searchTerm, setSearchTerm] = useState("");

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
                className="w-full h-52 object-cover"
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
    </div>
  );
};

export default Smartphones;
