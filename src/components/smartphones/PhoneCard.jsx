// src/components/smartphones/PhoneCard.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MdFavorite,
  MdFavoriteBorder,
  MdShoppingCart,
  MdStar,
} from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";
import { FaWhatsapp, FaFire, FaTrophy } from "react-icons/fa";
import { BsLightning, BsStars } from "react-icons/bs";
import { enhancePhoneData } from "../../utils/phoneUtils";

const PhoneCard = ({
  phone,
  index,
  activeCategory,
  favorites,
  toggleFavorite,
  hoveredCard,
  setHoveredCard,
  whatsappLink,
}) => {
  const enhancedPhone = enhancePhoneData(phone, index);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        bounce: 0.3,
      }}
      whileHover={{
        scale: 1.02,
        y: -8,
        transition: { duration: 0.4, ease: "easeOut" },
      }}
      onHoverStart={() => setHoveredCard(index)}
      onHoverEnd={() => setHoveredCard(null)}
      className="group relative flex flex-col"
    >
      {/* Custom CSS for animations */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes border-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          @keyframes border-spin-reverse {
            from { transform: rotate(360deg); }
            to { transform: rotate(0deg); }
          }
          
          .border-animation-1 {
            animation: border-spin 8s linear infinite;
          }
          
          .border-animation-2 {
            animation: border-spin-reverse 6s linear infinite;
          }
        `,
        }}
      />

      {/* Animated Border Container */}
      <div className="relative bg-gradient-to-br from-slate-900/95 to-gray-900/95 backdrop-blur-2xl rounded-2xl overflow-hidden shadow-2xl transition-all duration-500">
        {/* Primary Running Border */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div
            className="absolute inset-0 rounded-2xl border-animation-1"
            style={{
              background: `conic-gradient(from 0deg, transparent 0deg, #3b82f6 60deg, #8b5cf6 120deg, #06b6d4 180deg, #3b82f6 240deg, transparent 300deg, transparent 360deg)`,
              padding: "2px",
            }}
          >
            <div className="bg-slate-900 rounded-2xl h-full w-full"></div>
          </div>
        </div>

        {/* Secondary Running Border */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div
            className="absolute inset-0 rounded-2xl border-animation-2"
            style={{
              background: `conic-gradient(from 180deg, transparent 0deg, #f59e0b 80deg, #ef4444 160deg, #8b5cf6 240deg, #06b6d4 320deg, transparent 360deg)`,
              padding: "1px",
            }}
          >
            <div className="bg-transparent rounded-2xl h-full w-full"></div>
          </div>
        </div>

        {/* Card Content Container */}
        <div className="relative bg-gradient-to-br from-slate-900/98 to-gray-900/98 rounded-2xl backdrop-blur-xl border border-gray-700/50 group-hover:border-transparent transition-all duration-500 overflow-hidden">
          {/* Premium Glass Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-black/[0.02] pointer-events-none"></div>

          {/* Shimmer Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/[0.03] to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out"></div>
          </div>

          {/* Badge Container - Enhanced */}
          <div className="absolute top-4 left-4 z-30 flex flex-col gap-2">
            {enhancedPhone.isNew && (
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-600 text-white px-3 py-1.5 rounded-full text-xs font-black flex items-center gap-1 shadow-xl backdrop-blur-sm border border-emerald-300/30"
              >
                <BsStars className="text-xs animate-pulse" />
                NEW
              </motion.div>
            )}
            {enhancedPhone.isBestseller && (
              <motion.div
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 text-white px-3 py-1.5 rounded-full text-xs font-black flex items-center gap-1 shadow-xl backdrop-blur-sm border border-yellow-300/30"
              >
                <FaTrophy className="text-xs animate-bounce" />
                BESTSELLER
              </motion.div>
            )}
            {enhancedPhone.isHot && (
              <motion.div
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-r from-red-500 via-pink-500 to-red-600 text-white px-3 py-1.5 rounded-full text-xs font-black flex items-center gap-1 shadow-xl backdrop-blur-sm border border-red-300/30"
              >
                <FaFire className="text-xs animate-pulse" />
                HOT
              </motion.div>
            )}
            {enhancedPhone.discount && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6 }}
                className="bg-gradient-to-r from-violet-500 via-purple-600 to-indigo-600 text-white px-3 py-1.5 rounded-full text-xs font-black flex items-center gap-1 shadow-xl backdrop-blur-sm border border-purple-300/30 animate-pulse"
              >
                <BsLightning className="text-xs" />
                {enhancedPhone.discount}
              </motion.div>
            )}
          </div>

          {/* Favorite Button - Enhanced */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => toggleFavorite(index)}
            className="absolute top-4 right-4 z-30 w-11 h-11 rounded-full bg-black/30 backdrop-blur-xl flex items-center justify-center border border-gray-600/50 hover:border-red-400/70 transition-all duration-300 shadow-lg group/fav"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500/10 to-pink-500/10 opacity-0 group-hover/fav:opacity-100 transition-opacity duration-300"></div>
            {favorites.has(index) ? (
              <MdFavorite className="text-red-500 text-xl relative z-10 drop-shadow-lg" />
            ) : (
              <MdFavoriteBorder className="text-gray-300 text-xl relative z-10 group-hover/fav:text-red-400 transition-colors duration-300" />
            )}
          </motion.button>

          {/* Image Container - Enhanced */}
          <div className="relative overflow-hidden bg-gradient-to-br from-gray-800/20 to-gray-900/40 rounded-t-2xl">
            {/* Image Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <motion.img
              src={phone.image}
              alt={phone.name}
              className="w-full h-72 object-contain p-6 transition-all duration-500 group-hover:scale-105 relative z-10"
              whileHover={{
                scale: 1.08,
                rotate: [0, 1, -1, 0],
                transition: { duration: 0.6, ease: "easeInOut" },
              }}
            />

            {/* Premium Hover Overlay */}
            <AnimatePresence>
              {hoveredCard === index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent backdrop-blur-[1px] flex items-center justify-center"
                >
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.5, opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="bg-white/95 backdrop-blur-xl rounded-2xl px-6 py-3 flex items-center gap-3 shadow-2xl border border-gray-200/50"
                  >
                    <AiOutlineEye className="text-gray-800 text-xl" />
                    <span className="text-gray-800 font-semibold text-sm">
                      Quick View
                    </span>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Content - Enhanced */}
          <div className="p-6 flex-1 flex flex-col space-y-4 relative z-10">
            {/* Rating Section - Enhanced */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.1 * i, duration: 0.3 }}
                    >
                      <MdStar
                        className={`text-sm ${
                          i < Math.floor(enhancedPhone.rating)
                            ? "text-yellow-400 drop-shadow-sm"
                            : "text-gray-600"
                        }`}
                      />
                    </motion.div>
                  ))}
                </div>
                <span className="text-yellow-400 font-semibold text-sm bg-yellow-400/10 px-2 py-1 rounded-full">
                  {enhancedPhone.rating}
                </span>
              </div>
              <span className="text-gray-500 text-xs bg-gray-800/50 px-2 py-1 rounded-full">
                ({Math.floor(Math.random() * 200) + 50} reviews)
              </span>
            </div>

            {/* Product Name - Enhanced */}
            <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300 leading-tight">
              {phone.name}
            </h3>

            {/* Specs - Enhanced */}
            <p className="text-gray-400 text-sm leading-relaxed bg-gray-800/30 p-3 rounded-xl border border-gray-700/50">
              {phone.specs}
            </p>

            {/* Price Section - Enhanced */}
            <div className="space-y-2 py-2">
              {phone.originalPrice && (
                <p className="text-gray-500 text-sm line-through bg-gray-800/30 px-2 py-1 rounded-lg inline-block">
                  {phone.originalPrice}
                </p>
              )}
              {phone.price && (
                <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-sm">
                  {phone.price}
                </p>
              )}
            </div>

            {/* Action Buttons - Enhanced */}
            <div className="flex gap-3 pt-4 mt-auto">
              <motion.a
                href={whatsappLink(phone)}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 hover:from-green-600 hover:via-emerald-600 hover:to-green-700 text-white font-bold py-3.5 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl relative overflow-hidden group/btn"
              >
                {/* Button Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover/btn:translate-x-[200%] transition-transform duration-700"></div>
                <FaWhatsapp className="text-lg relative z-10" />
                <span className="relative z-10">Order Now</span>
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-blue-600 hover:to-purple-600 text-white rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl border border-gray-600/50 hover:border-transparent"
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

export default PhoneCard;
