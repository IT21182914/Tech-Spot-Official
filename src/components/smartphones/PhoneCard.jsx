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
        scale: 1.03,
        y: -10,
        rotateX: 5,
        rotateY: 5,
        transition: { duration: 0.3 },
      }}
      onHoverStart={() => setHoveredCard(index)}
      onHoverEnd={() => setHoveredCard(null)}
      className="group relative bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 flex flex-col"
    >
      {/* Enhanced Card Container */}
      <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-500">
        {/* Badge Container */}
        <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
          {enhancedPhone.isNew && (
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              className="bg-gradient-to-r from-green-400 to-emerald-500 text-black px-3 py-1 rounded-full text-xs font-black flex items-center gap-1 shadow-lg"
            >
              <BsStars className="text-xs" />
              NEW
            </motion.div>
          )}
          {enhancedPhone.isBestseller && (
            <motion.div
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-black flex items-center gap-1 shadow-lg"
            >
              <FaTrophy className="text-xs" />
              BESTSELLER
            </motion.div>
          )}
          {enhancedPhone.isHot && (
            <motion.div
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-black flex items-center gap-1 shadow-lg"
            >
              <FaFire className="text-xs" />
              HOT
            </motion.div>
          )}
          {enhancedPhone.discount && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-3 py-1 rounded-full text-xs font-black flex items-center gap-1 shadow-lg animate-pulse"
            >
              <BsLightning className="text-xs" />
              {enhancedPhone.discount}
            </motion.div>
          )}
        </div>

        {/* Favorite Button */}
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => toggleFavorite(index)}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-xl flex items-center justify-center border border-gray-600 hover:border-red-400 transition-all duration-300"
        >
          {favorites.has(index) ? (
            <MdFavorite className="text-red-500 text-xl" />
          ) : (
            <MdFavoriteBorder className="text-gray-300 text-xl" />
          )}
        </motion.button>

        {/* Image Container */}
        <div className="relative overflow-hidden">
          <motion.img
            src={phone.image}
            alt={phone.name}
            className="w-full h-72 object-contain p-1 transition-transform duration-300 hover:scale-105"
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ duration: 0.4 }}
          />

          {/* Hover Overlay */}
          <AnimatePresence>
            {hoveredCard === index && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center"
              >
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  className="bg-white/90 backdrop-blur-xl rounded-2xl px-4 py-2 flex items-center gap-2"
                >
                  <AiOutlineEye className="text-gray-800 text-lg" />
                  <span className="text-gray-800 font-semibold">
                    Quick View
                  </span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Content */}
        <div className="p-4 flex-1 flex flex-col space-y-3">
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <MdStar
                  key={i}
                  className={`text-sm ${
                    i < Math.floor(enhancedPhone.rating)
                      ? "text-yellow-400"
                      : "text-gray-600"
                  }`}
                />
              ))}
            </div>
            <span className="text-yellow-400 font-semibold text-sm">
              {enhancedPhone.rating}
            </span>
            <span className="text-gray-500 text-xs">
              ({Math.floor(Math.random() * 200) + 50})
            </span>
          </div>

          <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
            {phone.name}
          </h3>

          <p className="text-gray-400 text-sm mt-1 leading-relaxed">
            {phone.specs}
          </p>

          {/* Price Section */}
          <div className="space-y-2">
            {phone.originalPrice && (
              <p className="text-gray-500 text-sm line-through">
                {phone.originalPrice}
              </p>
            )}
            {phone.price && (
              <p className="text-blue-400 font-medium mt-1 text-lg bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {phone.price}
              </p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 mt-auto">
            <motion.a
              href={whatsappLink(phone)}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              <FaWhatsapp className="text-lg" />
              Order Now
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-8 bg-gray-700 hover:bg-blue-600 text-white rounded-lg transition-all duration-300 flex items-center justify-center"
            >
              <MdShoppingCart className="text-base" />
            </motion.button>
          </div>
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
    </motion.div>
  );
};

export default PhoneCard;
