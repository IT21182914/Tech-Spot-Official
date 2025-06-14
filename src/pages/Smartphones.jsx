import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MdPhoneIphone,
  MdFavorite,
  MdFavoriteBorder,
  MdShoppingCart,
  MdStar,
  MdVerified,
} from "react-icons/md";
import { AiOutlineInfoCircle, AiOutlineEye } from "react-icons/ai";
import {
  FaWhatsapp,
  FaFire,
  FaTrophy,
  FaShieldAlt,
  FaCrown,
} from "react-icons/fa";
import { BsLightning, BsStars } from "react-icons/bs";
import { allPhones } from "../data";
import { appleStockList } from "../data/appleStockList";
import { samsungStockList } from "../data/samsungStockList";
import { xiaomiStockList } from "../data/xiaomiStockList";
import { vivoStockList } from "../data/vivoStockList";
import { realmeStockList } from "../data/realmeStockList";
import { infinixStockList } from "../data/infinixStockList";
import { oppoStockList } from "../data/oppoStockList";
import { huaweiStockList } from "../data/huaweiStockList";
import { pixelStockList } from "../data/pixelStockList";
import { honorStockList } from "../data/honorStockList";
import { samsungTabletsStockList } from "../data/samsungTabletsStockList";

const WHATSAPP_NUMBER = "94726048468";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
const waLink = (msg) => `${WHATSAPP_URL}?text=${encodeURIComponent(msg)}`;

const Smartphones = () => {
  const [activeCategory, setActiveCategory] = useState("Apple");
  const [searchTerm, setSearchTerm] = useState("");
  const [copiedText, setCopiedText] = useState("");
  const [favorites, setFavorites] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);
  const [viewCount, setViewCount] = useState(0);

  const scrollRef = useRef(null);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Simulate live view counter
    const viewInterval = setInterval(() => {
      setViewCount((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 3000);

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
      clearInterval(viewInterval);
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

  const stockLists = {
    Apple: appleStockList,
    Samsung: samsungStockList,
    Xiaomi: xiaomiStockList,
    Vivo: vivoStockList,
    Realme: realmeStockList,
    Infinix: infinixStockList,
    "Samsung Tablets": samsungTabletsStockList,
    Oppo: oppoStockList,
    Huawei: huaweiStockList,
    "Google Pixel": pixelStockList,
    Honor: honorStockList,
  };

  const phones = allPhones[activeCategory]
    ? allPhones[activeCategory].filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const availableModels = stockLists[activeCategory] || [];

  const whatsappLink = (phone) =>
    waLink(`Hi Tech Spot! I'm interested in buying the ${phone.name}.`);

  const toggleFavorite = (phoneIndex) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(phoneIndex)) {
      newFavorites.delete(phoneIndex);
    } else {
      newFavorites.add(phoneIndex);
    }
    setFavorites(newFavorites);
  };

  const enhancePhoneData = (phone, index) => {
    // Add premium features to existing phone data
    const enhanced = { ...phone };

    // Add missing properties if they don't exist
    if (!enhanced.rating) {
      enhanced.rating = (4.5 + Math.random() * 0.4).toFixed(1);
    }

    // Add badges based on index and name patterns
    if (phone.name.includes("Pro") || phone.name.includes("Ultra")) {
      enhanced.isBestseller = true;
    }

    if (phone.name.includes("15") || phone.name.includes("24")) {
      enhanced.isNew = true;
    }

    if (index % 3 === 0) {
      enhanced.isHot = true;
    }

    if (index % 4 === 0) {
      enhanced.discount = `${10 + Math.floor(Math.random() * 10)}% OFF`;
    }

    return enhanced;
  };

  const PremiumButton = ({
    text,
    href,
    gradient = "from-yellow-400 via-amber-300 to-yellow-200",
  }) => (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="relative inline-flex items-center justify-center px-6 py-3 rounded-2xl text-sm font-bold text-black overflow-hidden group shadow-xl"
    >
      <span
        className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-2xl filter blur-sm opacity-90 group-hover:opacity-100 animate-pulse`}
      />
      <span className="absolute inset-0 rounded-2xl ring-2 ring-transparent group-hover:ring-yellow-300 transition duration-300" />
      <BsStars className="relative z-10 mr-2 text-lg" />
      <span className="relative z-10 drop-shadow-sm whitespace-nowrap">
        {text}
      </span>
    </motion.a>
  );

  console.log(PremiumButton);

  const ReviewButton = ({ text }) => (
    <motion.a
      href="/testimonials"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="relative inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-semibold text-black overflow-hidden group"
    >
      <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-200 rounded-full filter blur-sm opacity-75 group-hover:opacity-90 animate-pulse" />
      <span className="absolute inset-0 rounded-full ring ring-transparent group-hover:ring-yellow-300 transition duration-300" />
      <span className="relative z-10 drop-shadow-sm whitespace-nowrap">
        {text}
      </span>
    </motion.a>
  );

  const TermsButton = ({ text }) => (
    <motion.a
      href="/terms"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="relative inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-semibold text-black overflow-hidden group"
    >
      <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full filter blur-sm opacity-75 group-hover:opacity-90 animate-pulse" />
      <span className="absolute inset-0 rounded-full ring ring-transparent group-hover:ring-blue-300 transition duration-300" />
      <span className="relative z-10 drop-shadow-sm whitespace-nowrap">
        {text}
      </span>
    </motion.a>
  );

  return (
    <div className="bg-gradient-to-br from-slate-950 via-gray-900 to-black min-h-screen">
      {/* Hero Section with Floating Elements */}
      <div className="relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-500 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 py-12 px-6">
          {/* Top Bar with Live Stats */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-8"
          >
            <div className="bg-black/50 backdrop-blur-xl border border-gray-700 rounded-2xl px-6 py-3 flex items-center gap-6">
              <div className="flex items-center gap-2 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">
                  {247 + viewCount} people viewing
                </span>
              </div>
              <div className="flex items-center gap-2 text-yellow-400">
                <FaFire className="text-sm" />
                <span className="text-sm font-medium">Hot Deals Today</span>
              </div>
              <div className="flex items-center gap-2 text-purple-400">
                <MdVerified className="text-sm" />
                <span className="text-sm font-medium">Verified Store</span>
              </div>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <h1 className="text-6xl sm:text-7xl font-black bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-4">
              PREMIUM
            </h1>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Smartphones Collection
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Discover the most exclusive collection of flagship smartphones
              with unbeatable prices and authentic warranty
            </p>
          </motion.div>

          {/* Heading with Review Buttons */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:items-center mb-16">
            <ReviewButton text="What customers say about us" />
            <h1 className="text-3xl sm:text-4xl font-bold text-center text-white">
              Smartphones
            </h1>
            <ReviewButton text="පාරිභෝගිකයන් අපි ගැන කියන දේ" />
          </div>
        </div>
      </div>

      <div className="px-6 pb-12">
        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search by model name…"
              className="w-full px-6 py-4 rounded-2xl bg-gray-800/50 backdrop-blur-xl text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg shadow-2xl"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <BsLightning className="text-yellow-400 text-xl" />
            </div>
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-16"
        >
          {Object.keys(allPhones).map((cat, index) => (
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
              className={`relative px-4 py-2 rounded-full border transition-all duration-300 font-bold overflow-hidden group ${
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
                <FaCrown className="relative z-10 inline-block ml-2 text-yellow-300" />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Phones Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
          >
            {phones.length === 0 ? (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-gray-500 col-span-full text-xl py-20"
              >
                No smartphones found.
              </motion.p>
            ) : (
              phones.map((phone, idx) => {
                const enhancedPhone = enhancePhoneData(phone, idx);
                return (
                  <motion.div
                    key={`${activeCategory}-${idx}`}
                    layout
                    initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: idx * 0.1,
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
                    onHoverStart={() => setHoveredCard(idx)}
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
                        onClick={() => toggleFavorite(idx)}
                        className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-xl flex items-center justify-center border border-gray-600 hover:border-red-400 transition-all duration-300"
                      >
                        {favorites.has(idx) ? (
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
                          {hoveredCard === idx && (
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
              })
            )}
          </motion.div>
        </AnimatePresence>

        {/* Available Models Section */}
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
                })
              ) : (
                <p className="text-center text-gray-500">
                  No stock list found.
                </p>
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
                Prices may change. Contact us on WhatsApp for the latest price
                and delivery details.
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
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          <div className="text-center p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl rounded-3xl border border-green-500/20">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaShieldAlt className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              100% Authentic
            </h3>
            <p className="text-gray-300 text-sm">
              All products come with official warranty and authenticity
              guarantee
            </p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-xl rounded-3xl border border-blue-500/20">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <BsLightning className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Fast Delivery</h3>
            <p className="text-gray-300 text-sm">
              Island-wide delivery within 24-48 hours with secure packaging
            </p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-xl rounded-3xl border border-yellow-500/20">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaTrophy className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Best Prices</h3>
            <p className="text-gray-300 text-sm">
              Guaranteed lowest prices with exclusive deals and discounts
            </p>
          </div>
        </motion.div>

        {/* Terms Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center mt-16 mb-10"
        >
          <TermsButton text="Terms & Conditions" />
        </motion.div>
      </div>
    </div>
  );
};

export default Smartphones;
