import React, { useState } from "react";
import { motion } from "framer-motion";
import SmartphoneHeader from "../components/SmartphoneHeader";
import CategoryFilter from "../components/CategoryFilter";
import SmartphonesCard from "../components/SmartPhonesCard";
import StockScroller from "../components/StockScroller";
import { stockLists } from "../data/stockLists";

const WHATSAPP_URL = "https://wa.me/94726048468";
const waLink = (msg) => `${WHATSAPP_URL}?text=${encodeURIComponent(msg)}`;

/* ---------- products object (same structure as before) ---------- */
const products = {
  Apple: [
    {
      name: "iPhone 14 (128GB)",
      specs: "128GB ROM",
      image: "/images/iPhones/Iphone 14 128GB.jpg",
      price: "Rs. 194,000",
    },
    {
      name: "iPhone 16 (128GB)",
      specs: "128GB ROM",
      image: "/images/iPhones/Iphone 16 128 GB.jpg",
      price: "Rs. 240,000",
    },
    {
      name: "iPhone 16 (128GB Blue)",
      specs: "128GB ROM | Blue",
      image: "/images/iPhones/Iphone 16 128 GB Blue.jpg",
      price: "Rs. 240,000",
    },
    {
      name: "iPhone 16 Pro (256GB)",
      specs: "256GB ROM",
      image: "/images/iPhones/Iphone 16 Pro 256 GB.jpg",
      price: "Rs. 363,000",
    },
    {
      name: "iPhone 16 Pro Max (256GB)",
      specs: "256GB ROM | Max Edition",
      image: "/images/iPhones/Iphone 16 Pro Max 256 GB.jpg",
      price: "Rs. 388,000",
    },
  ],
  Samsung: [
    {
      name: "Galaxy S23 Ultra",
      specs: "12GB RAM | 256GB ROM",
      image:
        "https://cdn.pixabay.com/photo/2022/03/12/09/23/smartphone-7063761_640.jpg",
      price: "Rs. 395,000",
    },
  ],
  Xiaomi: [
    {
      name: "Redmi Note 12",
      specs: "6GB RAM | 128GB ROM",
      image:
        "https://cdn.pixabay.com/photo/2022/05/03/19/18/smartphone-7171749_640.jpg",
      price: "Rs. 79,900",
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
  const [brand, setBrand] = useState("Apple");
  const [query, setQuery] = useState("");

  const list = products[brand].filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="bg-black text-white min-h-screen py-12 px-6">
      <SmartphoneHeader />

      {/* search */}
      <div className="max-w-md mx-auto mb-6">
        <input
          type="text"
          placeholder="Search by model name…"
          className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <CategoryFilter
        categories={Object.keys(products)}
        active={brand}
        onSelect={(c) => {
          setBrand(c);
          setQuery("");
        }}
      />

      {/* products grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {list.length === 0 ? (
          <p className="text-center text-gray-500 col-span-full">
            No smartphones found.
          </p>
        ) : (
          list.map((phone, i) => (
            <SmartphonesCard
              key={i}
              phone={phone}
              link={waLink(
                `Hi Tech Spot! I'm interested in buying the ${phone.name}.`
              )}
            />
          ))
        )}
      </motion.div>

      {/* Stock scroller for active brand */}
      {stockLists[brand]?.length > 0 && (
        <StockScroller list={stockLists[brand]} />
      )}
    </div>
  );
};

export default Smartphones;
