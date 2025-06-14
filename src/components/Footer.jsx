import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaAward,
  FaCrown,
  FaHeart,
  FaStar,
  FaTrophy,
  FaCheckCircle,
  FaArrowUp,
} from "react-icons/fa";
import {
  MdVerified,
  MdSecurity,
  MdHighQuality,
  MdTrendingUp,
  MdStars,
  MdDiamond,
} from "react-icons/md";
import {
  BsStars,
  BsLightning,
  BsDiamond,
  BsShieldCheck,
  BsAward,
  BsTelephone,
} from "react-icons/bs";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [stats, setStats] = useState({
    customers: 15000,
    reviews: 4.9,
    years: 5,
  });

  // Scroll to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const footer = document.getElementById("premium-footer");
    if (footer) observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  // Live stats animation
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setStats((prev) => ({
          ...prev,
          customers: prev.customers + Math.floor(Math.random() * 3) + 1,
        }));
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Social media links with enhanced data
  const socialLinks = [
    {
      icon: <FaFacebookF className="text-xl" />,
      href: "https://www.facebook.com/profile.php?id=61558973124367",
      label: "Facebook",
      color: "from-blue-600 to-blue-500",
      hoverColor: "from-blue-500 to-blue-400",
      followers: "12.5K+",
    },
    {
      icon: <FaInstagram className="text-xl" />,
      href: "https://www.instagram.com/tech_spot_99/",
      label: "Instagram",
      color: "from-pink-600 via-purple-600 to-orange-500",
      hoverColor: "from-pink-500 via-purple-500 to-orange-400",
      followers: "8.2K+",
    },
    {
      icon: <FaTwitter className="text-xl" />,
      href: "https://x.com/techspot99",
      label: "Twitter",
      color: "from-blue-500 to-cyan-400",
      hoverColor: "from-blue-400 to-cyan-300",
      followers: "5.8K+",
    },
    {
      icon: <FaWhatsapp className="text-xl" />,
      href: "https://wa.me/94726048468",
      label: "WhatsApp",
      color: "from-green-600 to-emerald-500",
      hoverColor: "from-green-500 to-emerald-400",
      followers: "24/7",
    },
  ];

  // Navigation links organized by category
  const navigationSections = [
    {
      title: "Products",
      links: [
        { href: "/smartphones", label: "Smartphones" },
        { href: "/shop", label: "Accessories" },
        { href: "/tablets", label: "Tablets" },
        { href: "/smartwatches", label: "Smart Watches" },
      ],
    },
    {
      title: "Services",
      links: [
        { href: "/repair", label: "Phone Repair" },
        { href: "/warranty", label: "Warranty" },
        { href: "/support", label: "Tech Support" },
        { href: "/trade-in", label: "Trade-in" },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "/about", label: "About Us" },
        { href: "/location", label: "Visit Store" },
        { href: "/careers", label: "Careers" },
        { href: "/blog", label: "Tech Blog" },
      ],
    },
    {
      title: "Support",
      links: [
        { href: "/contact", label: "Contact" },
        { href: "/faq", label: "FAQ" },
        { href: "/help", label: "Help Center" },
        { href: "/terms", label: "Terms" },
      ],
    },
  ];

  // Trust indicators
  const trustBadges = [
    {
      icon: <MdVerified className="text-lg" />,
      text: "Verified Business",
      color: "text-blue-400",
    },
    {
      icon: <BsShieldCheck className="text-lg" />,
      text: "Secure Shopping",
      color: "text-green-400",
    },
    {
      icon: <FaAward className="text-lg" />,
      text: "Award Winning",
      color: "text-yellow-400",
    },
    {
      icon: <MdHighQuality className="text-lg" />,
      text: "Premium Quality",
      color: "text-purple-400",
    },
  ];

  return (
    <>
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300"
          >
            <FaArrowUp className="text-xl" />
          </motion.button>
        )}
      </AnimatePresence>

      <footer
        id="premium-footer"
        className="relative bg-gradient-to-b from-slate-950 via-gray-900 to-black text-gray-300 overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-2000" />
        </div>

        <div className="relative z-10">
          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="border-b border-gray-800 py-16"
          >
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-12">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 }}
                  className="text-4xl lg:text-5xl font-black mb-4"
                >
                  <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                    TRUSTED BY THOUSANDS
                  </span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                  className="text-xl text-gray-400 max-w-2xl mx-auto"
                >
                  Sri Lanka's premier mobile technology destination
                </motion.p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 }}
                  className="text-center p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20"
                >
                  <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    {stats.customers.toLocaleString()}+
                  </div>
                  <div className="text-gray-300 font-semibold mb-2">
                    Happy Customers
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <FaHeart className="text-red-400 text-sm" />
                    <span className="text-gray-400 text-sm">
                      Satisfied customers
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 }}
                  className="text-center p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20"
                >
                  <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2">
                    {stats.reviews}★
                  </div>
                  <div className="text-gray-300 font-semibold mb-2">
                    Customer Rating
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <FaStar className="text-yellow-400 text-sm" />
                    <span className="text-gray-400 text-sm">
                      Google Reviews
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.0 }}
                  className="text-center p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20"
                >
                  <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                    {stats.years}+
                  </div>
                  <div className="text-gray-300 font-semibold mb-2">
                    Years Experience
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <FaTrophy className="text-yellow-400 text-sm" />
                    <span className="text-gray-400 text-sm">
                      Industry leader
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Main Footer Content */}
          <div className="py-16">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
                {/* Brand Section */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 }}
                  className="lg:col-span-2 space-y-6 text-center lg:text-left"
                >
                  <div className="flex items-center gap-3 justify-center lg:justify-start">
                    <div className="relative">
                      <img
                        src="/images/Logo.png"
                        alt="Tech Spot Logo"
                        className="h-12 w-12 rounded-2xl shadow-xl"
                      />
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-30 blur"></div>
                    </div>
                    <div>
                      <h1 className="text-3xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        Tech Spot
                      </h1>
                      <div className="flex items-center gap-2 mt-1 justify-center lg:justify-start">
                        <MdVerified className="text-blue-400 text-sm" />
                        <span className="text-blue-400 text-sm font-medium">
                          Verified Store
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-400 leading-relaxed">
                    Sri Lanka's most trusted mobile technology destination. We
                    offer premium smartphones, accessories, and expert services
                    with unmatched quality and customer satisfaction.
                  </p>

                  {/* Contact Info */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 justify-center lg:justify-start">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                        <HiPhone className="text-white text-lg" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">
                          +94 72 604 8468
                        </div>
                        <div className="text-gray-400 text-sm">
                          24/7 Customer Support
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 justify-center lg:justify-start">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                        <HiLocationMarker className="text-white text-lg" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">
                          Tissamaharama Store
                        </div>
                        <div className="text-gray-400 text-sm">
                          Palliyawaththa Road, Sri Lanka
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Trust Badges */}
                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                    {trustBadges.map((badge, index) => (
                      <motion.div
                        key={badge.text}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="flex items-center gap-2 bg-gradient-to-r from-gray-800 to-gray-700 px-3 py-2 rounded-full border border-gray-600"
                      >
                        <span className={badge.color}>{badge.icon}</span>
                        <span className="text-gray-300 text-xs font-medium">
                          {badge.text}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Navigation Sections */}
                <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center lg:text-left">
                  {navigationSections.map((section, sectionIndex) => (
                    <motion.div
                      key={section.title}
                      initial={{ opacity: 0, y: 30 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 + sectionIndex * 0.1 }}
                      className="space-y-4"
                    >
                      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 justify-center lg:justify-start">
                        <BsStars className="text-blue-400" />
                        {section.title}
                      </h3>
                      <ul className="space-y-3">
                        {section.links.map((link, linkIndex) => (
                          <li key={link.label}>
                            <motion.a
                              href={link.href}
                              whileHover={{ x: 5 }}
                              className="text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-2 group justify-center lg:justify-start"
                            >
                              <div className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                              {link.label}
                            </motion.a>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Social Media & Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="border-t border-gray-800 py-12"
          >
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Stay Connected
                </h3>
                <p className="text-gray-400">
                  Follow us for latest updates and exclusive offers
                </p>
              </div>

              <div className="flex justify-center space-x-4 mb-8">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1.0 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative group w-14 h-14 bg-gradient-to-r ${social.color} hover:${social.hoverColor} rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl`}
                  >
                    {social.icon}

                    {/* Tooltip */}
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="text-xs font-semibold">
                        {social.label}
                      </div>
                      <div className="text-xs text-gray-300">
                        {social.followers}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Newsletter Signup */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2 }}
                className="max-w-md mx-auto"
              >
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email for exclusive deals..."
                    className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg"
                  >
                    Subscribe
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Copyright Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 1.4 }}
            className="border-t border-gray-800 py-8"
          >
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-4 text-sm text-gray-500 text-center md:text-left">
                  <span>
                    &copy; {currentYear} Tech Spot. All rights reserved.
                  </span>
                  <div className="hidden md:flex items-center gap-4">
                    <a
                      href="/privacy"
                      className="hover:text-white transition-colors"
                    >
                      Privacy Policy
                    </a>
                    <a
                      href="/terms"
                      className="hover:text-white transition-colors"
                    >
                      Terms of Service
                    </a>
                    <a
                      href="/cookies"
                      className="hover:text-white transition-colors"
                    >
                      Cookie Policy
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>Made with</span>
                  <FaHeart className="text-red-400 text-xs animate-pulse" />
                  <span>in Sri Lanka</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
