// src/components/smartphones/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaFire, FaCrown } from "react-icons/fa";
import { BsLightning } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import PremiumButton from "../common/PremiumButton";

const HeroSection = ({
  searchTerm,
  setSearchTerm,
  viewCount,
  activeCategory,
  setActiveCategory,
  categories,
}) => {
  return (
    <div className="relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-5 w-48 h-48 sm:top-20 sm:left-10 sm:w-72 sm:h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-20 right-5 w-56 h-56 sm:top-40 sm:right-20 sm:w-96 sm:h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-52 h-52 sm:bottom-20 sm:left-1/3 sm:w-80 sm:h-80 bg-pink-500 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 py-6 sm:py-12 px-3 sm:px-6">
        {/* Top Bar with Live Stats */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-6 sm:mb-8"
        >
          <div className="bg-black/50 backdrop-blur-xl border border-gray-700 rounded-xl sm:rounded-2xl px-3 py-2 sm:px-6 sm:py-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6 w-full max-w-md sm:max-w-none sm:w-auto">
            <div className="flex items-center justify-center gap-2 text-green-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm font-medium">
                {247 + viewCount} people viewing
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 text-yellow-400">
              <FaFire className="text-xs sm:text-sm" />
              <span className="text-xs sm:text-sm font-medium">
                Hot Deals Today
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 text-purple-400">
              <MdVerified className="text-xs sm:text-sm" />
              <span className="text-xs sm:text-sm font-medium">
                Verified Store
              </span>
            </div>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8 sm:mb-12 px-2"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-2 sm:mb-4">
            PREMIUM
          </h1>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Smartphones Collection
          </h2>
          <p className="text-base sm:text-xl text-gray-300 max-w-xs sm:max-w-2xl mx-auto leading-relaxed">
            Discover the most exclusive collection of flagship smartphones with
            unbeatable prices and authentic warranty
          </p>
        </motion.div>

        {/* Heading with Review Buttons */}
        <div className="mb-8 sm:mb-16">
          {/* Mobile Layout */}
          <div className="flex flex-col items-center gap-3 sm:hidden">
            <h1 className="text-2xl font-bold text-center text-white order-first">
              Smartphones
            </h1>
            <div className="flex flex-col gap-2 w-full max-w-sm">
              <PremiumButton
                text="What customers say about us"
                href="/testimonials"
                type="review"
              />
              <PremiumButton
                text="පාරිභෝගිකයන් අපි ගැන කියන දේ"
                href="/testimonials"
                type="review"
              />
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden sm:flex flex-col items-center gap-4 lg:flex-row lg:justify-between lg:items-center">
            <PremiumButton
              text="What customers say about us"
              href="/testimonials"
              type="review"
            />
            <h1 className="text-3xl lg:text-4xl font-bold text-center text-white">
              Smartphones
            </h1>
            <PremiumButton
              text="පාරිභෝගිකයන් අපි ගැන කියන දේ"
              href="/testimonials"
              type="review"
            />
          </div>
        </div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xs sm:max-w-2xl mx-auto mb-8 sm:mb-12 px-2"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search by model name…"
              className="w-full px-4 py-3 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl bg-gray-800/50 backdrop-blur-xl text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base sm:text-lg shadow-2xl"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2">
              <BsLightning className="text-yellow-400 text-lg sm:text-xl" />
            </div>
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 sm:mb-16 px-2"
        >
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4">
            {categories.map((cat, index) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => {
                  setActiveCategory(cat);
                  setSearchTerm("");
                }}
                className={`relative px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border transition-all duration-300 font-bold overflow-hidden group text-sm sm:text-base ${
                  activeCategory === cat
                    ? "bg-blue-500 text-white border-blue-500 shadow-2xl"
                    : "text-gray-400 border-gray-600 hover:bg-gray-700 backdrop-blur-xl"
                }`}
              >
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
                {activeCategory === cat && (
                  <FaCrown className="relative z-10 inline-block ml-1 sm:ml-2 text-yellow-300 text-xs sm:text-sm" />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
