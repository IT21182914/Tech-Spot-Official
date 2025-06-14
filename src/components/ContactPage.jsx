import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaWhatsapp,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaEnvelope,
  FaShieldAlt,
  FaStar,
  FaCheckCircle,
  FaHeadset,
  FaAward,
  FaCertificate,
  FaHandshake,
  FaHeart,
} from "react-icons/fa";
import {
  MdVerified,
  MdSecurity,
  MdHighQuality,
  MdAccessTime,
  MdLocationOn,
  MdEmail,
  MdSupport,
  MdStars,
} from "react-icons/md";
import {
  BsStars,
  BsLightning,
  BsDiamond,
  BsShieldCheck,
  BsTelephone,
  BsGeoAlt,
  BsClock,
  BsChat,
} from "react-icons/bs";
import { HiLocationMarker, HiPhone, HiMail, HiClock } from "react-icons/hi";

const ContactPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [responseCount, setResponseCount] = useState(1247);
  const sectionRef = useRef(null);

  // Contact information
  const contactNumbers = ["+94 72 604 8468", "+94 72 921 2698"];
  const whatsappNumber = "+94726048468";
  const facebookURL = "https://web.facebook.com/profile.php?id=61558973124367";
  const email = "info@techspot.lk";
  const address = "Palliyawaththa Road, Tissamaharama, Sri Lanka";

  // Performance: Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Live response counter
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setResponseCount((prev) => prev + Math.floor(Math.random() * 3) + 1);
      }, 8000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  // Update current time
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  // Check if store is open
  const isStoreOpen = () => {
    const hour = currentTime.getHours();
    const day = currentTime.getDay();
    return day === 0 ? hour >= 10 && hour < 18 : hour >= 9 && hour < 20;
  };

  // Enhanced contact methods
  const contactMethods = [
    {
      id: "whatsapp",
      title: "WhatsApp Chat",
      subtitle: "Instant messaging support",
      icon: <FaWhatsapp className="text-3xl" />,
      color: "text-green-400",
      gradient: "from-green-500 to-emerald-500",
      info: whatsappNumber,
      action: `https://wa.me/${whatsappNumber.replace(
        "+",
        ""
      )}?text=Hi Tech Spot! I need assistance with`,
      availability: "24/7 Available",
      responseTime: "< 5 minutes",
      popular: true,
      description: "Get instant responses via WhatsApp chat",
    },
    {
      id: "phone",
      title: "Direct Call",
      subtitle: "Speak with our experts",
      icon: <BsTelephone className="text-3xl" />,
      color: "text-blue-400",
      gradient: "from-blue-500 to-cyan-500",
      info: contactNumbers,
      action: `tel:${contactNumbers[0].replace(/\s/g, "")}`,
      availability: isStoreOpen() ? "Open Now" : "Closed",
      responseTime: "Immediate",
      popular: false,
      description: "Direct phone support from our team",
    },
    {
      id: "facebook",
      title: "Facebook Page",
      subtitle: "Social media support",
      icon: <FaFacebookF className="text-3xl" />,
      color: "text-blue-500",
      gradient: "from-blue-600 to-indigo-600",
      info: "Tech Spot Official",
      action: facebookURL,
      availability: "24/7 Available",
      responseTime: "< 30 minutes",
      popular: false,
      description: "Connect with us on Facebook",
    },
    {
      id: "email",
      title: "Email Support",
      subtitle: "Detailed inquiries",
      icon: <HiMail className="text-3xl" />,
      color: "text-purple-400",
      gradient: "from-purple-500 to-indigo-500",
      info: email,
      action: `mailto:${email}?subject=Inquiry from Website`,
      availability: "Business Hours",
      responseTime: "< 2 hours",
      popular: false,
      description: "Send us detailed inquiries via email",
    },
    {
      id: "visit",
      title: "Visit Our Store",
      subtitle: "In-person consultation",
      icon: <HiLocationMarker className="text-3xl" />,
      color: "text-orange-400",
      gradient: "from-orange-500 to-red-500",
      info: address,
      action: `https://www.google.com/maps/dir/?api=1&destination=6.28268,81.2878`,
      availability: isStoreOpen() ? "Open Now" : "Closed",
      responseTime: "Walk-in",
      popular: false,
      description: "Visit our physical store for hands-on service",
    },
    {
      id: "support",
      title: "24/7 Support",
      subtitle: "Emergency assistance",
      icon: <FaHeadset className="text-3xl" />,
      color: "text-yellow-400",
      gradient: "from-yellow-500 to-orange-500",
      info: "Round-the-clock support",
      action: `https://wa.me/${whatsappNumber.replace(
        "+",
        ""
      )}?text=URGENT: I need immediate technical support`,
      availability: "Always Available",
      responseTime: "< 3 minutes",
      popular: true,
      description: "Emergency technical support anytime",
    },
  ];

  // Trust indicators
  const trustIndicators = [
    {
      icon: <FaCheckCircle className="text-2xl text-green-400" />,
      title: "Verified Business",
      description: "Google verified local business",
    },
    {
      icon: <FaStar className="text-2xl text-yellow-400" />,
      title: "4.9★ Rating",
      description: "Based on 500+ reviews",
    },
    {
      icon: <BsClock className="text-2xl text-blue-400" />,
      title: "Fast Response",
      description: "Average 5 minute reply time",
    },
    {
      icon: <FaShieldAlt className="text-2xl text-purple-400" />,
      title: "Secure Communication",
      description: "Your privacy is protected",
    },
  ];

  // Business hours
  const businessHours = [
    { day: "Monday - Saturday", hours: "9:00 AM - 8:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 6:00 PM" },
    { day: "Emergency Support", hours: "24/7 Available" },
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black text-white relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative z-10 py-16 px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          {/* Live stats bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex justify-center mb-8"
          >
            <div className="bg-black/50 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-3 flex items-center gap-6">
              <div className="flex items-center gap-2 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium">
                  {responseCount}+ happy customers served
                </span>
              </div>
              <div className="flex items-center gap-2 text-blue-400">
                <MdVerified />
                <span className="text-sm font-medium">
                  Award-winning customer service
                </span>
              </div>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-black mb-6"
          >
            <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              GET IN TOUCH
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            We're Here to Help You
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Multiple ways to reach our expert team. From instant WhatsApp
            support to in-person consultations, we're committed to providing
            exceptional customer service every step of the way.
          </motion.p>
        </motion.div>

        {/* Contact Methods Grid - SUPER SIMPLE VERSION */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <div
                key={method.id}
                className="bg-gray-800 rounded-3xl p-6 border border-gray-700 hover:border-blue-500 transition-colors duration-300"
              >
                {/* Popular badge */}
                {method.popular && (
                  <div className="mb-4">
                    <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                      ⭐ POPULAR
                    </span>
                  </div>
                )}

                {/* Status indicator */}
                <div className="mb-4 flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      method.availability.includes("Available") ||
                      method.availability.includes("Open")
                        ? "bg-green-400"
                        : "bg-red-400"
                    }`}
                  />
                  <span
                    className={`text-xs font-medium ${
                      method.availability.includes("Available") ||
                      method.availability.includes("Open")
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {method.availability}
                  </span>
                </div>

                {/* Icon */}
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${method.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                >
                  <div className="text-white">{method.icon}</div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 text-center">
                  {method.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 text-center">
                  {method.subtitle}
                </p>

                {/* Contact info */}
                <div className="mb-4 text-center">
                  {Array.isArray(method.info) ? (
                    method.info.map((info, idx) => (
                      <p key={idx} className="text-white font-semibold text-sm">
                        {info}
                      </p>
                    ))
                  ) : (
                    <p className="text-white font-semibold text-sm break-words">
                      {method.info}
                    </p>
                  )}
                </div>

                {/* Response time */}
                <div className="flex justify-between items-center text-xs mb-4">
                  <span className="text-gray-400">Response Time:</span>
                  <span className="text-green-400 font-semibold">
                    {method.responseTime}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-xs mb-6 leading-relaxed text-center">
                  {method.description}
                </p>

                {/* SIMPLE BUTTON - NO MOTION OR COMPLEX STYLES */}
                <a
                  href={method.action}
                  target={
                    method.id === "visit" || method.id === "facebook"
                      ? "_blank"
                      : "_self"
                  }
                  rel={
                    method.id === "visit" || method.id === "facebook"
                      ? "noopener noreferrer"
                      : ""
                  }
                  className={`
                    display: block;
                    width: 100%;
                    padding: 12px 16px;
                    background: linear-gradient(to right, ${method.gradient
                      .replace("from-", "")
                      .replace(" to-", ", ")});
                    color: white;
                    font-weight: bold;
                    text-align: center;
                    text-decoration: none;
                    border-radius: 12px;
                    border: none;
                    cursor: pointer;
                    transition: all 0.2s ease;
                  `}
                  style={{
                    display: "block",
                    width: "100%",
                    padding: "12px 16px",
                    background: `linear-gradient(to right, ${
                      method.gradient === "from-green-500 to-emerald-500"
                        ? "#10b981, #059669"
                        : method.gradient === "from-blue-500 to-cyan-500"
                        ? "#3b82f6, #06b6d4"
                        : method.gradient === "from-blue-600 to-indigo-600"
                        ? "#2563eb, #4f46e5"
                        : method.gradient === "from-purple-500 to-indigo-500"
                        ? "#8b5cf6, #6366f1"
                        : method.gradient === "from-orange-500 to-red-500"
                        ? "#f97316, #ef4444"
                        : "#eab308, #f97316"
                    })`,
                    color: "white",
                    fontWeight: "bold",
                    textAlign: "center",
                    textDecoration: "none",
                    borderRadius: "12px",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = "scale(1.05)";
                    e.target.style.filter = "brightness(1.1)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = "scale(1)";
                    e.target.style.filter = "brightness(1)";
                  }}
                >
                  {method.id === "whatsapp"
                    ? "Start Chat"
                    : method.id === "phone"
                    ? "Call Now"
                    : method.id === "facebook"
                    ? "Visit Page"
                    : method.id === "email"
                    ? "Send Email"
                    : method.id === "visit"
                    ? "Get Directions"
                    : "Get Support"}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Support?
            </h2>
            <p className="text-gray-300 text-lg">
              Excellence in customer service is our promise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustIndicators.map((indicator, index) => (
              <div
                key={indicator.title}
                className="text-center p-6 bg-gray-800 rounded-3xl border border-gray-700"
              >
                <div className="flex justify-center mb-4">{indicator.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {indicator.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {indicator.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Business Hours & Location */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Business Hours */}
            <div className="bg-gray-800 rounded-3xl border border-gray-700 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center">
                  <HiClock className="text-xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Business Hours
                  </h3>
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        isStoreOpen() ? "bg-green-400" : "bg-red-400"
                      }`}
                    />
                    <span
                      className={`text-sm font-medium ${
                        isStoreOpen() ? "text-green-400" : "text-red-400"
                      }`}
                    >
                      {isStoreOpen() ? "Open Now" : "Closed"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {businessHours.map((schedule, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 border-b border-gray-700 last:border-0"
                  >
                    <span className="text-gray-300 font-medium">
                      {schedule.day}
                    </span>
                    <span className="text-white font-semibold">
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-gray-800 rounded-3xl border border-gray-700 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center">
                  <FaHandshake className="text-xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Quick Contact
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Get immediate assistance
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <a
                  href={`https://wa.me/${whatsappNumber.replace(
                    "+",
                    ""
                  )}?text=Hi Tech Spot! I need immediate assistance.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-green-500 rounded-2xl text-white hover:bg-green-600 transition-colors duration-300 cursor-pointer"
                  style={{ textDecoration: "none" }}
                >
                  <FaWhatsapp className="text-2xl" />
                  <div>
                    <div className="font-bold">WhatsApp Now</div>
                    <div className="text-sm opacity-90">
                      Instant response guaranteed
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${contactNumbers[0].replace(/\s/g, "")}`}
                  className="flex items-center gap-4 p-4 bg-blue-500 rounded-2xl text-white hover:bg-blue-600 transition-colors duration-300 cursor-pointer"
                  style={{ textDecoration: "none" }}
                >
                  <FaPhone className="text-2xl" />
                  <div>
                    <div className="font-bold">Call Direct</div>
                    <div className="text-sm opacity-90">
                      {contactNumbers[0]}
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
            Our expert team is standing by to provide you with exceptional
            service and support. Reach out today and experience the Tech Spot
            difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`https://wa.me/${whatsappNumber.replace(
                "+",
                ""
              )}?text=Hi Tech Spot! I'm interested in your services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-2xl transition-colors duration-300 cursor-pointer"
              style={{ textDecoration: "none" }}
            >
              <FaWhatsapp className="text-2xl" />
              <span className="text-lg">Start Conversation</span>
            </a>

            <a
              href={`tel:${contactNumbers[0].replace(/\s/g, "")}`}
              className="inline-flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-2xl transition-colors duration-300 cursor-pointer"
              style={{ textDecoration: "none" }}
            >
              <FaPhone className="text-xl" />
              <span className="text-lg">Call Expert</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
