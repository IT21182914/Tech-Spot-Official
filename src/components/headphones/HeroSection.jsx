// src/components/headphones/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaHeadphones,
  FaCheckCircle,
  FaVolumeUp,
  FaMicrophone,
  FaMusic,
} from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { HiOutlineSparkles } from "react-icons/hi";
import { MdVerified, MdTrendingUp } from "react-icons/md";

const PremiumButton = ({ text, href, type = "default" }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    console.log("Button clicked, navigating to:", href);
    navigate(href);
  };

  return (
    <button
      onClick={handleClick}
      className={`relative z-10 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] ${
        type === "review"
          ? "bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white shadow-lg hover:shadow-emerald-500/25"
          : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-purple-500/25"
      }`}
    >
      <BsStars className="text-sm" />
      {text}
    </button>
  );
};

const HeroSection = ({
  activeCategory,
  setActiveCategory,
  categories,
  viewCount,
}) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-slate-950 via-purple-900 to-black">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
        />

        {/* Floating Audio Wave Elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: [0.3, 0.7, 0.3],
              y: [-20, -40, -20],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            className="absolute"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
          >
            <FaMusic className="text-purple-400/40 text-2xl" />
          </motion.div>
        ))}
      </div>

      {/* Live Activity Indicator */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute top-8 right-8 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-md border border-green-500/30 rounded-2xl px-4 py-3 hidden sm:block"
      >
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-green-400 rounded-full"
            />
            <span className="text-green-400 text-sm font-medium">Live</span>
          </div>
          <div className="text-white/80 text-sm">
            <span className="font-semibold text-white">{viewCount}</span>{" "}
            viewing
          </div>
          <div className="flex items-center gap-1">
            <MdVerified className="text-blue-400 text-sm" />
            <span className="text-xs sm:text-sm font-medium text-blue-400">
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
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-2 sm:mb-4">
          PREMIUM
        </h1>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
          Audio Collection
        </h2>
        <p className="text-base sm:text-xl text-gray-300 max-w-xs sm:max-w-2xl mx-auto leading-relaxed">
          Experience crystal-clear sound with our exclusive collection of
          headphones, earbuds, and audio accessories
        </p>
      </motion.div>

      {/* Heading with Review Buttons */}
      <div className="relative z-20 mb-8 sm:mb-16">
        {/* Mobile Layout */}
        <div className="flex flex-col items-center gap-3 sm:hidden">
          <h1 className="text-2xl font-bold text-center text-white order-first">
            Audio Devices
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
        <div className="hidden sm:flex items-center justify-center gap-8">
          <PremiumButton
            text="What customers say about us"
            href="/testimonials"
            type="review"
          />
          <h1 className="text-3xl lg:text-4xl font-bold text-center text-white">
            Audio Devices
          </h1>
          <PremiumButton
            text="පාරිභෝගිකයන් අපි ගැන කියන දේ"
            href="/testimonials"
            type="review"
          />
        </div>
      </div>

      {/* Category Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-wrap justify-center gap-3 mb-8 px-4"
      >
        {categories.map((category, index) => (
          <motion.button
            key={category}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(category)}
            className={`relative px-6 py-3 rounded-2xl font-semibold text-sm transition-all duration-300 ${
              activeCategory === category
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl"
                : "bg-white/10 backdrop-blur-md text-white hover:bg-white/20 border border-white/20"
            }`}
          >
            {activeCategory === category && (
              <motion.div
                layoutId="categoryHighlight"
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl"
                style={{ zIndex: -1 }}
              />
            )}
            <div className="flex items-center gap-2">
              {category === "All" && <FaHeadphones />}
              {category === "Earbuds" && <FaMicrophone />}
              {category === "Over-Ear" && <FaHeadphones />}
              {category === "Gaming" && <FaVolumeUp />}
              {category === "Premium" && <HiOutlineSparkles />}
              {category}
            </div>

            {activeCategory === category && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1"
              >
                <div className="bg-yellow-400 text-black rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  ✓
                </div>
              </motion.div>
            )}
          </motion.button>
        ))}
      </motion.div>

      {/* Trust Indicators */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400"
      >
        <div className="flex items-center gap-2">
          <FaCheckCircle className="text-green-400" />
          <span>Authentic Products</span>
        </div>
        <div className="flex items-center gap-2">
          <MdTrendingUp className="text-blue-400" />
          <span>Latest Models</span>
        </div>
        <div className="flex items-center gap-2">
          <BsStars className="text-purple-400" />
          <span>Premium Quality</span>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
