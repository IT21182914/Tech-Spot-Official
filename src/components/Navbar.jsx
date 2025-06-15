import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaShoppingBag,
  FaMapMarkerAlt,
  FaTools,
  FaStar,
  FaPhone,
  FaInfoCircle,
  FaWhatsapp,
  FaShieldAlt,
  FaCrown,
  FaBolt,
} from "react-icons/fa";
import { MdSmartphone, MdVerified, MdSecurity } from "react-icons/md";
import { BsStars, BsLightning, BsDiamond, BsShieldCheck } from "react-icons/bs";
import { HiSparkles } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");

  // Simulate location for demo
  useEffect(() => {
    setCurrentPath(window.location.pathname || "/");
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const isActive = (path) => currentPath === path;

  // Enhanced navigation items with icons and descriptions
  const navigationItems = [
    {
      path: "/",
      label: "Home",
      icon: <FaHome className="text-lg" />,
      description: "Welcome to Tech Spot",
      gradient: "from-blue-500 to-cyan-500",
      specialColor: null,
    },
    {
      path: "/smartphones",
      label: "Smartphones",
      icon: <MdSmartphone className="text-lg" />,
      description: "Premium mobile devices",
      gradient: "from-yellow-500 to-orange-500",
      specialColor: "text-yellow-400",
      badge: "HOT",
    },
    {
      path: "/shop",
      label: "Products",
      icon: <FaShoppingBag className="text-lg" />,
      description: "Mobile accessories & more",
      gradient: "from-purple-500 to-indigo-500",
      specialColor: null,
    },
    {
      path: "/location",
      label: "Visit Store",
      icon: <FaMapMarkerAlt className="text-lg" />,
      description: "Find our location",
      gradient: "from-green-500 to-emerald-500",
      specialColor: null,
    },
    {
      path: "/repair",
      label: "Repair Services",
      icon: <FaTools className="text-lg" />,
      description: "Expert device repairs",
      gradient: "from-red-500 to-pink-500",
      specialColor: null,
      badge: "24/7",
    },
    {
      path: "/reviews",
      label: "Reviews",
      icon: <FaStar className="text-lg" />,
      description: "Customer testimonials",
      gradient: "from-yellow-500 to-amber-500",
      specialColor: null,
    },
    {
      path: "/contact",
      label: "Contact",
      icon: <FaPhone className="text-lg" />,
      description: "Get in touch",
      gradient: "from-blue-500 to-purple-500",
      specialColor: null,
    },
    {
      path: "/about",
      label: "About Us",
      icon: <FaInfoCircle className="text-lg" />,
      description: "Our story & mission",
      gradient: "from-gray-500 to-gray-700",
      specialColor: null,
    },
  ];

  // Mobile menu variants - updated for better performance
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const mobileItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-2xl"
            : "bg-black/50 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex justify-between items-center py-3 lg:py-4">
            {/* Logo Section */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="relative">
                <div className="h-10 w-10 lg:h-12 lg:w-12 rounded-2xl shadow-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">T</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-30 blur animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-xl lg:text-2xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Tech Spot
                </h1>
                <div className="flex items-center gap-1">
                  <MdVerified className="text-blue-400 text-sm" />
                  <span className="text-blue-400 text-xs font-medium">
                    Verified
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center space-x-1">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <a
                    href={item.path}
                    className={`relative px-4 py-2 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                      isActive(item.path)
                        ? `bg-gradient-to-r ${item.gradient} text-white shadow-xl`
                        : item.specialColor
                        ? `${item.specialColor} hover:text-white`
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {item.icon}
                    <span className="text-sm">{item.label}</span>

                    {/* Badge */}
                    {item.badge && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold animate-pulse">
                        {item.badge}
                      </span>
                    )}

                    {/* Active indicator */}
                    {isActive(item.path) && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-white/20 rounded-xl"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                  </a>

                  {/* Hover tooltip */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-black/90 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                    {item.description}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Actions & Mobile Menu */}
            <div className="flex items-center gap-3">
              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="xl:hidden w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg"
              >
                <motion.div
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMenuOpen ? (
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay - Fixed positioning for full screen */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 xl:hidden"
          >
            {/* Background overlay */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu content */}
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="absolute top-16 left-0 right-0 bottom-0 bg-black/95 backdrop-blur-xl border-t border-white/10 overflow-y-auto"
            >
              <div className="px-4 py-6 min-h-full">
                {/* Mobile Search */}
                <motion.div variants={mobileItemVariants} className="mb-6">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search anything..."
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <BsLightning className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </motion.div>

                {/* Navigation Items */}
                <div className="space-y-2 mb-8">
                  {navigationItems.map((item, index) => (
                    <motion.div key={item.path} variants={mobileItemVariants}>
                      <a
                        href={item.path}
                        className={`relative flex items-center gap-4 p-3 rounded-xl transition-all duration-300 ${
                          isActive(item.path)
                            ? `bg-gradient-to-r ${item.gradient} text-white shadow-xl`
                            : "text-gray-300 hover:bg-white/10 hover:text-white active:bg-white/20"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            isActive(item.path) ? "bg-white/20" : "bg-white/10"
                          }`}
                        >
                          {item.icon}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="font-semibold">{item.label}</div>
                          <div className="text-sm opacity-70 truncate">
                            {item.description}
                          </div>
                        </div>

                        {/* Badge */}
                        {item.badge && (
                          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold flex-shrink-0">
                            {item.badge}
                          </span>
                        )}

                        {/* Arrow indicator */}
                        <svg
                          className="w-4 h-4 opacity-50 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </a>
                    </motion.div>
                  ))}
                </div>

                {/* Quick Actions */}
                <motion.div variants={mobileItemVariants} className="mb-6">
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href="tel:+94726048468"
                      className="flex items-center justify-center gap-2 p-3 bg-green-600 hover:bg-green-700 rounded-xl text-white font-semibold transition-colors"
                    >
                      <FaPhone className="text-sm" />
                      <span className="text-sm">Call Now</span>
                    </a>
                    <a
                      href="https://wa.me/94726048468"
                      className="flex items-center justify-center gap-2 p-3 bg-green-500 hover:bg-green-600 rounded-xl text-white font-semibold transition-colors"
                    >
                      <FaWhatsapp className="text-sm" />
                      <span className="text-sm">WhatsApp</span>
                    </a>
                  </div>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  variants={mobileItemVariants}
                  className="pt-6 border-t border-white/10 text-center pb-8"
                >
                  <div className="flex items-center justify-center gap-2 text-gray-400 text-sm mb-2">
                    <BsShieldCheck className="text-green-400" />
                    <span>Verified Business • Trusted Service</span>
                  </div>
                  <div className="text-gray-500 text-xs">
                    24/7 Customer Support • +94 72 604 8468
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dynamic spacer that accounts for navbar height */}
      <div className="h-16 lg:h-20"></div>
    </>
  );
};

export default Navbar;
