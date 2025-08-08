// src/components/headphones/AudioCard.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MdFavorite,
  MdShoppingCart,
  MdStar,
  MdLocalShipping,
  MdSecurity,
  MdFlashOn,
} from "react-icons/md";
import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { FaWhatsapp, FaFire, FaTrophy, FaShieldAlt } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { HiOutlineSparkles } from "react-icons/hi";

const AudioCard = ({
  item,
  index,
  activeCategory,
  favorites,
  toggleFavorite,
  hoveredCard,
  setHoveredCard,
  whatsappLink,
}) => {
  // Enhanced audio device data with dynamic properties
  const enhancedItem = {
    ...item,
    isNew: item.name.includes("Pro") || item.name.includes("Premium"),
    isBestseller: index % 4 === 0,
    isHot: item.trending || index % 3 === 0,
    discount: item.originalPrice
      ? `${Math.round(
          ((parseFloat(item.originalPrice.replace(/[^\d]/g, "")) -
            parseFloat(item.price.replace(/[^\d]/g, ""))) /
            parseFloat(item.originalPrice.replace(/[^\d]/g, ""))) *
            100
        )}% OFF`
      : null,
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      onHoverStart={() => setHoveredCard(index)}
      onHoverEnd={() => setHoveredCard(null)}
      onTapStart={() => setHoveredCard(index)}
      onTap={() => setHoveredCard(index)}
      onTouchStart={() => setHoveredCard(index)}
      className="group relative flex flex-col cursor-pointer h-full touch-manipulation"
    >
      {/* Modern Ecommerce Card Container */}
      <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg transition-all duration-500 h-full flex flex-col border border-gray-100">
        {/* Sale Badge */}
        {enhancedItem.discount && (
          <div className="absolute top-4 left-4 z-20">
            <motion.div
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg"
            >
              <MdFlashOn className="text-sm" />
              {enhancedItem.discount}
            </motion.div>
          </div>
        )}

        {/* Status Badges */}
        <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
          {enhancedItem.isNew && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="bg-gradient-to-r from-emerald-400 to-green-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md"
            >
              <HiOutlineSparkles className="text-xs" />
              NEW
            </motion.div>
          )}
          {enhancedItem.isBestseller && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="bg-gradient-to-r from-amber-400 to-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md"
            >
              <FaTrophy className="text-xs" />
              BESTSELLER
            </motion.div>
          )}
          {enhancedItem.isHot && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md"
            >
              <FaFire className="text-xs animate-pulse" />
              TRENDING
            </motion.div>
          )}
        </div>

        {/* Heart/Favorite Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => toggleFavorite(index)}
          className="absolute top-4 right-4 z-30 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-gray-200 transition-all duration-300 group/heart"
        >
          <AnimatePresence mode="wait">
            {favorites.has(index) ? (
              <motion.div
                key="filled"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                <MdFavorite className="text-red-500 text-lg" />
              </motion.div>
            ) : (
              <motion.div
                key="outline"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                <AiOutlineHeart className="text-gray-600 text-lg group-hover/heart:text-red-500 transition-colors" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Product Image Section */}
        <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-t-3xl transition-all duration-500">
          {/* Image */}
          <motion.img
            src={item.image}
            alt={item.name}
            className="w-full h-64 object-contain transition-all duration-500"
          />

          {/* Hover Effects */}
          <AnimatePresence>
            {hoveredCard === index && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="absolute inset-4 bg-gradient-to-t from-black/20 to-transparent rounded-2xl flex items-center justify-center"
              >
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  className="bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-xl"
                >
                  <AiOutlineEye className="text-2xl text-gray-700" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Limited Stock Indicator */}
          <AnimatePresence>
            {hoveredCard === index && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="flex items-center gap-1 relative z-10"
              >
                <motion.span
                  className="text-xs bg-red-500 text-white px-2 py-1 rounded-full font-bold"
                  animate={{
                    scale: [1, 1.1, 1],
                    boxShadow: [
                      "0 0 0 0 rgba(239, 68, 68, 0.7)",
                      "0 0 0 6px rgba(239, 68, 68, 0)",
                      "0 0 0 0 rgba(239, 68, 68, 0)",
                    ],
                  }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  LIMITED
                </motion.span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Shine Effect */}
          {hoveredCard === index && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          )}
        </div>

        {/* Product Information */}
        <div className="p-6 flex-1 flex flex-col bg-white">
          {/* Brand & Rating */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
              {item.category || activeCategory}
            </span>
            <div className="flex items-center gap-1">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <MdStar
                    key={i}
                    className={`text-sm ${
                      i < Math.floor(item.rating || 4.5)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600 ml-1">
                ({item.rating || 4.5})
              </span>
            </div>
          </div>

          {/* Product Name */}
          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 transition-colors">
            {item.name}
          </h3>

          {/* Product Features */}
          <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
            {item.specs}
          </p>

          {/* Trust Indicators */}
          <div className="flex items-center gap-4 mb-4 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <MdSecurity className="text-green-500" />
              <span>Warranty</span>
            </div>
            <div className="flex items-center gap-1">
              <MdLocalShipping className="text-blue-500" />
              <span>Free Delivery</span>
            </div>
            <div className="flex items-center gap-1">
              <FaShieldAlt className="text-purple-500" />
              <span>Authentic</span>
            </div>
          </div>

          {/* Price Section */}
          <div className="mb-6">
            {item.originalPrice && (
              <p className="text-sm text-gray-500 line-through mb-1">
                {item.originalPrice}
              </p>
            )}
            {item.price && (
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-gray-900">
                  {item.price}
                </span>
                {enhancedItem.discount && (
                  <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
                    Save {enhancedItem.discount}
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="mt-auto space-y-3">
            {/* Primary CTA Button */}
            <motion.a
              href={whatsappLink(item)}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              <FaWhatsapp className="text-lg" />
              Order via WhatsApp
            </motion.a>

            {/* Secondary Actions */}
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <BsCart3 className="text-lg" />
                Add to Cart
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-xl transition-all duration-300 flex items-center justify-center"
              >
                <MdShoppingCart className="text-lg" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AudioCard;
