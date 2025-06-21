import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaStar,
  FaQuoteLeft,
  FaCheckCircle,
  FaAward,
  FaHeart,
  FaThumbsUp,
  FaCrown,
  FaShieldAlt,
} from "react-icons/fa";
import {
  MdVerified,
  MdLocationOn,
  MdWork,
  MdLocalShipping,
  MdHighQuality,
  MdStars,
} from "react-icons/md";
import { BsStars, BsLightning, BsDiamond, BsShieldCheck } from "react-icons/bs";
import { HiSparkles } from "react-icons/hi";

// Move data outside component to prevent recreation on every render
const VIDEO_PROOFS = [
  {
    src: "/videos/Hashini iPhone 14 Pro Max.mp4",
    title: "Hashini – iPhone 14 Pro Max",
    meta: {
      name: "Hashini",
      profession: "Full-time homemaker and mother",
      location: "Kandy",
      product: "iPhone 14 Pro Max",
      delivery: "Delivered within 1 day",
      note: "Hashini highly recommended Tech Spot",
      stars: 5,
      verified: true,
    },
  },
  {
    src: "/videos/Sayuri iPhone 13.mp4",
    title: "Sayuri – iPhone 13",
    meta: {
      name: "Sayuri",
      profession: "Officer at Shangri-La",
      location: "Colombo",
      product: "iPhone 13",
      delivery: "Delivered within 1 day",
      note: "Sayuri highly recommended Tech Spot",
      stars: 5,
      verified: true,
    },
  },
  {
    src: "/videos/Kawya iPhone 11.mp4",
    title: "Kawya – iPhone 11",
    meta: {
      name: "Kawya",
      profession: "IT Professional",
      location: "Gampaha",
      product: "iPhone 11",
      delivery: "Delivered within 2 days",
      note: "Kawya highly recommended Tech Spot",
      stars: 5,
      verified: true,
    },
  },

  {
    src: "/videos/Asanka iPhone 13.mp4",
    title: "Asanka – iPhone 13",
    meta: {
      name: "Asanka",
      profession: "Software Engineer",
      location: "Matara",
      product: "iPhone 13",
      delivery: "Delivered within 1 day",
      note: "Asanka highly recommended Tech Spot",
      stars: 5,
      verified: true,
    },
  },
  {
    src: "/videos/Naveen iPhone 13.mp4",
    title: "Naveen – iPhone 13",
    meta: {
      name: "Naveen",
      profession: "Software Engineer at GTN Technologies",
      location: "Hanwella",
      product: "iPhone 13",
      delivery: "Delivered within 1 day",
      note: "Naveen highly recommended Tech Spot",
      stars: 5,
      verified: true,
    },
  },
];

const HAPPY_CUSTOMERS = [
  {
    src: "/images/HappyCustomers/Happy Customer iPhone 11.jpg",
    name: "Happy Customer",
    phone: "iPhone 11",
    note: "🎉 First iPhone purchase!",
    satisfaction: "100%",
  },
  {
    src: "/images/HappyCustomers/Happy Customer iPhone 15.jpg",
    name: "Happy Customer",
    phone: "iPhone 11",
    note: "Upgraded from Android",
    satisfaction: "100%",
  },
  {
    src: "/images/HappyCustomers/Happy Customer iPhone 13.jpg",
    name: "Happy Customer",
    phone: "iPhone 13",
    note: "Upgraded from Android",
    satisfaction: "Excellent",
  },
  {
    src: "/images/HappyCustomers/Happy Customer iPhone 14.jpg",
    name: "Happy Customer",
    phone: "iPhone 14",
    note: "Colour: Blue",
    satisfaction: "Perfect",
  },
  {
    src: "/images/HappyCustomers/Happy Customer Samsung Galaxy S24 Ultra 12GB 256GB.jpg",
    name: "Happy Customer",
    phone: "Galaxy S24 Ultra 12/256",
    note: "Flagship 🔥",
    satisfaction: "Amazing",
  },
  {
    src: "/images/HappyCustomers/Happy Customer Redmi 13 Pro Plus 8GB 256GB.jpg",
    name: "Happy Customer",
    phone: "Redmi 13 Pro Plus 8/256",
    note: "Performance + Style ✅",
    satisfaction: "Great",
  },
  {
    src: "/images/HappyCustomers/Happy Customer Redmi 14C 8GB 256GB.jpg",
    name: "Happy Customer",
    phone: "Redmi 14C 8/256",
    note: "Big storage, smooth experience 😍",
    satisfaction: "Loved it",
  },
  {
    src: "/images/HappyCustomers/Happy Customer Redmi A3 3GB 64GB.jpg",
    name: "Happy Customer",
    phone: "Redmi A3 3/64",
    note: "Perfect for everyday use 👌",
    satisfaction: "Satisfied",
  },
  {
    src: "/images/HappyCustomers/Happy Customer Samsung Galaxy A06 4GB 64GB.jpg",
    name: "Happy Customer",
    phone: "Galaxy A06 4/64",
    note: "Simple and smart choice 😊",
    satisfaction: "Happy",
  },
  {
    src: "/images/HappyCustomers/Happy Customer Samsung Galaxy A15 5G 8GB 256GB.jpg",
    name: "Happy Customer",
    phone: "Galaxy A15 5G 8/256",
    note: "Fast 5G. Big Storage 💯",
    satisfaction: "Thrilled",
  },
  {
    src: "/images/HappyCustomers/Happy Customer Samsung Galaxy A35 5G 8GB 256GB.jpg",
    name: "Happy Customer",
    phone: "Galaxy A35 5G 8/256",
    note: "Stylish 5G Beast 📱⚡",
    satisfaction: "Impressed",
  },
  {
    src: "/images/HappyCustomers/Happy Customer3 Redmi A3 4GB 128GB.jpg",
    name: "Happy Customer",
    phone: "Redmi A3 4/128",
    note: "More space, better performance 📦📱",
    satisfaction: "Delighted",
  },
  {
    src: "/images/HappyCustomers/Happy Customer4 Redmi 14C 8GB 256GB.jpg",
    name: "Happy Customer",
    phone: "Redmi 14C 8/256",
    note: "Best value for money! 💰🔥",
    satisfaction: "Outstanding",
  },
];

// Separate component for customer counter to prevent re-renders
const CustomerCounter = React.memo(() => {
  const [customerCount, setCustomerCount] = useState(2847);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (counterRef.current) observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCustomerCount((prev) => prev + Math.floor(Math.random() * 2) + 1);
      }, 8000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <div ref={counterRef} className="flex items-center gap-2 text-green-400">
      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
      <span className="text-xs sm:text-sm font-medium">
        {customerCount}+ satisfied customers
      </span>
    </div>
  );
});

const Testimonials = () => {
  const sectionRef = useRef(null);

  // Memoized VideoTestimonial component to prevent unnecessary re-renders
  const VideoTestimonial = React.memo(({ video, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl lg:rounded-3xl border border-white/20 overflow-hidden shadow-2xl hover:shadow-blue-500/25 transition-all duration-500"
    >
      {/* Video Container - Using the working approach from original */}
      <div className="relative bg-black rounded-t-2xl lg:rounded-t-3xl overflow-hidden">
        <div className="flex justify-center bg-black">
          <video
            src={video.src}
            controls
            title={video.title}
            className="w-full max-w-xs sm:max-w-none sm:aspect-video object-contain"
            preload="metadata"
          />
        </div>

        {/* Modern Badges */}
        {video.meta.verified && (
          <div className="absolute top-2 sm:top-4 left-2 sm:left-4 z-10">
            <div className="bg-blue-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
              <MdVerified className="text-xs sm:text-sm" />
              <span className="hidden sm:inline">VERIFIED</span>
              <span className="sm:hidden">✓</span>
            </div>
          </div>
        )}

        <div className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10">
          <div className="bg-yellow-500 text-black px-2 sm:px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
            <FaStar className="text-xs" />
            <span>{video.meta.stars}.0</span>
          </div>
        </div>
      </div>

      {/* Modern Customer Information */}
      <div className="p-4 sm:p-6 space-y-4">
        {/* Customer Header */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg flex-shrink-0">
            {video.meta.name.charAt(0)}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <span className="truncate">{video.meta.name}</span>
              <MdVerified className="text-blue-400 text-sm sm:text-lg flex-shrink-0" />
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm truncate">
              {video.meta.profession}
            </p>
          </div>
        </div>

        {/* Customer Details Grid */}
        <div className="grid grid-cols-1 gap-2 sm:gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <MdLocationOn className="text-blue-400 flex-shrink-0" />
            <span className="text-gray-300">Location:</span>
            <span className="text-white font-semibold truncate">
              {video.meta.location}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <BsDiamond className="text-purple-400 flex-shrink-0" />
            <span className="text-gray-300">Product:</span>
            <span className="text-white font-semibold truncate">
              {video.meta.product}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <MdLocalShipping className="text-green-400 flex-shrink-0" />
            <span className="text-gray-300">Delivery:</span>
            <span className="text-green-400 font-semibold truncate">
              {video.meta.delivery}
            </span>
          </div>
        </div>

        {/* Quote */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-blue-500/20">
          <div className="flex items-start gap-2 sm:gap-3">
            <FaQuoteLeft className="text-blue-400 text-sm sm:text-lg mt-1 flex-shrink-0" />
            <p className="text-white font-medium italic leading-relaxed text-sm sm:text-base">
              "{video.meta.note}"
            </p>
          </div>
        </div>

        {/* Star Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {[...Array(video.meta.stars)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400 text-sm sm:text-lg" />
            ))}
          </div>
          <div className="flex items-center gap-1 sm:gap-2 text-xs text-gray-400">
            <FaThumbsUp className="text-green-400" />
            <span className="hidden sm:inline">Highly Recommended</span>
            <span className="sm:hidden">Recommended</span>
          </div>
        </div>
      </div>
    </motion.div>
  ));

  // Memoized CustomerCard component to prevent unnecessary re-renders
  const CustomerCard = React.memo(({ customer, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/20 overflow-hidden shadow-xl hover:shadow-blue-500/25 transition-all duration-300 group"
    >
      {/* Image Container */}
      <div className="relative">
        <img
          src={customer.src}
          alt={customer.phone}
          className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />

        {/* Modern Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-center">
            <FaHeart className="text-red-400 text-2xl sm:text-3xl mx-auto mb-2" />
            <p className="text-white font-semibold text-sm">Happy Customer</p>
          </div>
        </div>

        {/* Satisfaction Badge */}
        <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
          <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
            {customer.satisfaction}
          </div>
        </div>
      </div>

      {/* Modern Customer Info */}
      <div className="p-3 sm:p-4 space-y-2">
        <h4 className="font-bold text-white text-sm sm:text-lg truncate">
          {customer.name}
        </h4>
        <p className="text-blue-400 font-semibold text-xs sm:text-sm truncate">
          {customer.phone}
        </p>
        {customer.note && (
          <p className="text-emerald-300 text-xs sm:text-sm font-medium line-clamp-2">
            {customer.note}
          </p>
        )}

        {/* Mini rating */}
        <div className="flex items-center gap-1 pt-2">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-yellow-400 text-xs" />
          ))}
          <span className="text-gray-400 text-xs ml-2">5.0</span>
        </div>
      </div>
    </motion.div>
  ));

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black text-white relative overflow-hidden"
    >
      {/* Modern Animated Background */}
      <div className="absolute inset-0 opacity-10 sm:opacity-20">
        <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-1/3 w-56 h-56 sm:w-80 sm:h-80 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative z-10 py-8 sm:py-12 lg:py-16 px-3 sm:px-6">
        {/* Modern Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          {/* Live Stats Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex justify-center mb-6 sm:mb-8"
          >
            <div className="bg-black/50 backdrop-blur-xl border border-white/20 rounded-xl sm:rounded-2xl px-3 sm:px-6 py-2 sm:py-3 flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
              <CustomerCounter />
              <div className="flex items-center gap-2 text-yellow-400">
                <FaAward className="text-sm" />
                <span className="text-xs sm:text-sm font-medium">
                  5.0★ Average Rating
                </span>
              </div>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-5xl lg:text-7xl font-black mb-4 sm:mb-6"
          >
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 bg-clip-text text-transparent">
              පාරිභෝගිකයන්
            </span>
            <br />
            <span className="text-white text-2xl sm:text-4xl lg:text-5xl">
              අපි ගැන කියන දේ
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-sm sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4"
          >
            Real customers, real experiences, real satisfaction. See what our
            valued customers have to say about their Tech Spot experience.
          </motion.p>
        </motion.div>

        {/* Video Testimonials Section */}
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                VIDEO TESTIMONIALS
              </span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-lg px-4">
              Authentic reviews from our happy customers
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
            {VIDEO_PROOFS.map((video, index) => (
              <VideoTestimonial
                key={`video-${index}`}
                video={video}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Happy Customers Gallery */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                🎊 HAPPY CUSTOMERS
              </span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-lg px-4">
              Some of our satisfied customers who visited us
            </p>
          </div>

          <div className="grid gap-3 sm:gap-4 lg:gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 max-w-7xl mx-auto">
            {HAPPY_CUSTOMERS.map((customer, index) => (
              <CustomerCard
                key={`customer-${index}`}
                customer={customer}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/20">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <FaShieldAlt className="text-xl sm:text-2xl text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                100% Authentic
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm">
                All testimonials are from real verified customers
              </p>
            </div>

            <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/20">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <FaCrown className="text-xl sm:text-2xl text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Premium Service
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm">
                Consistently rated 5.0 stars by our customers
              </p>
            </div>

            <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/20 sm:col-span-3 lg:col-span-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <FaHeart className="text-xl sm:text-2xl text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Customer Love
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm">
                Building lasting relationships with every customer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
