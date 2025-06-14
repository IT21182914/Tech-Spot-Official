import React, { Suspense, useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaDirections,
  FaPhone,
  FaClock,
  FaWhatsapp,
  FaRoute,
  FaParking,
  FaStore,
  FaShieldAlt,
  FaAward,
  FaCrown,
  FaCompass,
} from "react-icons/fa";
import {
  MdVerified,
  MdLocationOn,
  MdAccessTime,
  MdLocalShipping,
  MdSecurity,
  MdHighQuality,
  MdStars,
} from "react-icons/md";
import {
  BsStars,
  BsLightning,
  BsDiamond,
  BsShieldCheck,
  BsClockHistory,
  BsGeoAlt,
} from "react-icons/bs";
import { HiLocationMarker, HiPhone, HiClock } from "react-icons/hi";

// Performance-optimized Map component with lazy loading
const Map = React.lazy(() =>
  import("./Map").catch(() => ({
    default: () => (
      <div className="w-full h-full bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-xl rounded-3xl flex items-center justify-center border border-white/20">
        <div className="text-center p-8">
          <FaMapMarkerAlt className="text-6xl text-blue-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Interactive Map</h3>
          <p className="text-gray-300">Loading premium map experience...</p>
        </div>
      </div>
    ),
  }))
);

// Premium Loading Component
const PremiumLoader = ({ size = "large", text = "Loading..." }) => (
  <div className="flex flex-col items-center justify-center p-8">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      className={`${
        size === "large" ? "w-16 h-16" : "w-8 h-8"
      } border-4 border-blue-500/30 border-t-blue-500 rounded-full mb-4`}
    />
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-blue-400 font-semibold text-sm text-center"
    >
      {text}
    </motion.div>
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2"
    />
  </div>
);

// Enhanced Contact Card Component
const ContactCard = ({ icon, title, content, action, gradient, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ delay, type: "spring", bounce: 0.3 }}
    whileHover={{ y: -5, scale: 1.02 }}
    className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-6 shadow-xl hover:shadow-2xl transition-all duration-500 group"
  >
    <div className="flex items-center gap-4 mb-4">
      <div
        className={`w-14 h-14 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
      >
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed">{content}</p>
      </div>
    </div>
    {action && <div className="mt-4">{action}</div>}
  </motion.div>
);

// Business Hours Component
const BusinessHours = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const hours = useMemo(
    () => [
      { day: "Monday", hours: "9:00 AM - 8:00 PM", isToday: false },
      { day: "Tuesday", hours: "9:00 AM - 8:00 PM", isToday: false },
      { day: "Wednesday", hours: "9:00 AM - 8:00 PM", isToday: false },
      { day: "Thursday", hours: "9:00 AM - 8:00 PM", isToday: false },
      { day: "Friday", hours: "9:00 AM - 8:00 PM", isToday: false },
      { day: "Saturday", hours: "9:00 AM - 8:00 PM", isToday: false },
      { day: "Sunday", hours: "10:00 AM - 6:00 PM", isToday: false },
    ],
    []
  );

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);

      const currentHour = now.getHours();
      const currentDay = now.getDay();

      // Check if store is open (simplified logic)
      if (currentDay === 0) {
        // Sunday
        setIsOpen(currentHour >= 10 && currentHour < 18);
      } else {
        // Monday-Saturday
        setIsOpen(currentHour >= 9 && currentHour < 20);
      }
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-6 shadow-xl"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
          <BsClockHistory className="text-xl text-white" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">Business Hours</h3>
          <div className="flex items-center gap-2">
            <div
              className={`w-2 h-2 rounded-full ${
                isOpen ? "bg-green-400" : "bg-red-400"
              } animate-pulse`}
            />
            <span
              className={`text-sm font-medium ${
                isOpen ? "text-green-400" : "text-red-400"
              }`}
            >
              {isOpen ? "Open Now" : "Closed"}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        {hours.map((schedule, index) => (
          <div
            key={schedule.day}
            className="flex justify-between items-center py-2 border-b border-white/10 last:border-0"
          >
            <span
              className={`text-sm ${
                schedule.isToday
                  ? "text-blue-400 font-semibold"
                  : "text-gray-300"
              }`}
            >
              {schedule.day}
            </span>
            <span
              className={`text-sm ${
                schedule.isToday
                  ? "text-blue-400 font-semibold"
                  : "text-gray-400"
              }`}
            >
              {schedule.hours}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

// Quick Actions Component
const QuickActions = () => {
  const whatsappNumber = "94726048468";
  const address = "Palliyawaththa Road, Tissamaharama, Sri Lanka";
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=6.28268,81.2878`;

  const actions = [
    {
      icon: <FaWhatsapp className="text-xl" />,
      label: "WhatsApp Us",
      action: () =>
        window.open(
          `https://wa.me/${whatsappNumber}?text=Hi Tech Spot! I'd like to visit your store.`,
          "_blank"
        ),
      gradient: "from-green-500 to-emerald-600",
      hoverGradient: "from-green-600 to-emerald-700",
    },
    {
      icon: <FaDirections className="text-xl" />,
      label: "Get Directions",
      action: () => window.open(googleMapsUrl, "_blank"),
      gradient: "from-blue-500 to-cyan-600",
      hoverGradient: "from-blue-600 to-cyan-700",
    },
    {
      icon: <FaPhone className="text-xl" />,
      label: "Call Store",
      action: () => window.open(`tel:+${whatsappNumber}`, "_blank"),
      gradient: "from-purple-500 to-indigo-600",
      hoverGradient: "from-purple-600 to-indigo-700",
    },
    {
      icon: <FaMapMarkerAlt className="text-xl" />,
      label: "Share Location",
      action: () => {
        if (navigator.share) {
          navigator.share({
            title: "Tech Spot Location",
            text: address,
            url: googleMapsUrl,
          });
        } else {
          navigator.clipboard.writeText(`${address} - ${googleMapsUrl}`);
        }
      },
      gradient: "from-orange-500 to-red-600",
      hoverGradient: "from-orange-600 to-red-700",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="grid grid-cols-2 lg:grid-cols-4 gap-4"
    >
      {actions.map((action, index) => (
        <motion.button
          key={action.label}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={action.action}
          className={`relative bg-gradient-to-r ${action.gradient} hover:${action.hoverGradient} text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden group`}
        >
          <div className="flex flex-col items-center gap-2 relative z-10">
            {action.icon}
            <span className="text-sm font-semibold">{action.label}</span>
          </div>

          {/* Glow effect */}
          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
        </motion.button>
      ))}
    </motion.div>
  );
};

// Trust Badges Component
const TrustBadges = () => {
  const badges = [
    {
      icon: <MdVerified className="text-2xl" />,
      title: "Verified Business",
      description: "Google verified location",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <BsShieldCheck className="text-2xl" />,
      title: "Secure Location",
      description: "Safe & secure premises",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <FaParking className="text-2xl" />,
      title: "Free Parking",
      description: "Convenient parking available",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      icon: <MdHighQuality className="text-2xl" />,
      title: "Premium Service",
      description: "Expert customer support",
      gradient: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.0 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {badges.map((badge, index) => (
        <motion.div
          key={badge.title}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1 + index * 0.1 }}
          whileHover={{ y: -5, scale: 1.02 }}
          className="text-center p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500"
        >
          <div
            className={`w-16 h-16 bg-gradient-to-br ${badge.gradient} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
          >
            {badge.icon}
          </div>
          <h3 className="text-lg font-bold text-white mb-2">{badge.title}</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            {badge.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};

// Main Location Component
const Location = () => {
  const [viewCount, setViewCount] = useState(1247);
  const mapRef = useRef(null);
  const [isMapVisible, setIsMapVisible] = useState(false);

  // Performance optimization - only load map when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsMapVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (mapRef.current) observer.observe(mapRef.current);
    return () => observer.disconnect();
  }, []);

  // Live view counter
  useEffect(() => {
    const interval = setInterval(() => {
      setViewCount((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black relative">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative z-10 py-12 px-4 lg:px-20">
        {/* Live Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-8"
        >
          {/* <div className="bg-black/50 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-3 flex items-center gap-6">
            <div className="flex items-center gap-2 text-green-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium">
                {viewCount} people viewing location
              </span>
            </div>
            <div className="flex items-center gap-2 text-blue-400">
              <MdVerified />
              <span className="text-sm font-medium">
                Verified Store Location
              </span>
            </div>
          </div> */}
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl lg:text-7xl font-black mb-6"
          >
            <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              FIND US
            </span>
            <br />
            <span className="text-white text-4xl lg:text-5xl">
              AT TECH SPOT
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="flex items-center gap-3 text-xl text-gray-300">
              <BsGeoAlt className="text-blue-400" />
              <span>Palliyawaththa Road, Tissamaharama, Sri Lanka</span>
            </div>
            <p className="text-gray-400 max-w-2xl leading-relaxed">
              Visit our premium showroom for the best mobile shopping
              experience. Expert staff, authentic products, and unbeatable
              service await you.
            </p>
          </motion.div>
        </motion.div>

        {/* Interactive Map Section */}
        <motion.div
          ref={mapRef}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="w-full max-w-7xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden shadow-2xl">
            <div className="p-6 border-b border-white/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                    <FaCompass className="text-xl text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      Interactive Store Map
                    </h2>
                    <p className="text-gray-300 text-sm">
                      Explore our location in 3D
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400 text-sm font-medium">
                    Live Location
                  </span>
                </div>
              </div>
            </div>

            <div className="h-80 lg:h-[500px] relative">
              <Suspense
                fallback={
                  <PremiumLoader text="Loading premium map experience..." />
                }
              >
                {isMapVisible && <Map />}
              </Suspense>
            </div>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <div className="max-w-6xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-3xl font-bold text-white text-center mb-8"
          >
            Quick Actions
          </motion.h2>
          <QuickActions />
        </div>

        {/* Contact Information Grid */}
        <div className="max-w-7xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Store Information
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Details */}
            <div className="space-y-6">
              <ContactCard
                icon={<HiLocationMarker className="text-xl text-white" />}
                title="Store Address"
                content="Palliyawaththa Road, Tissamaharama, Southern Province, Sri Lanka"
                gradient="from-blue-500 to-cyan-500"
                delay={0.9}
                action={
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() =>
                      navigator.clipboard.writeText(
                        "Palliyawaththa Road, Tissamaharama, Sri Lanka"
                      )
                    }
                    className="text-blue-400 text-sm hover:text-blue-300 transition-colors"
                  >
                    Click to copy address
                  </motion.button>
                }
              />

              <ContactCard
                icon={<HiPhone className="text-xl text-white" />}
                title="Contact Number"
                content="+94 72 604 8468"
                gradient="from-green-500 to-emerald-500"
                delay={1.0}
                action={
                  <div className="flex gap-3">
                    <motion.a
                      href="tel:+94726048468"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                    >
                      Call Now
                    </motion.a>
                    <motion.a
                      href="https://wa.me/94726048468"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition-colors flex items-center gap-1"
                    >
                      <FaWhatsapp />
                      WhatsApp
                    </motion.a>
                  </div>
                }
              />
            </div>

            {/* Business Hours */}
            <div>
              <BusinessHours />
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="max-w-7xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Why Visit Tech Spot?
          </motion.h2>
          <TrustBadges />
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Visit Us?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience premium mobile shopping at Tech Spot. Our expert team is
            ready to help you find the perfect device.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href={`https://www.google.com/maps/dir/?api=1&destination=6.28268,81.2878`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <FaDirections className="text-xl" />
              <span className="text-lg">Get Directions</span>
            </motion.a>

            <motion.a
              href="https://wa.me/94726048468?text=Hi Tech Spot! I'd like to visit your store today."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <FaWhatsapp className="text-xl" />
              <span className="text-lg">Message Us</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Location;
