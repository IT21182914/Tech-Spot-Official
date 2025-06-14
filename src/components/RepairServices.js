import React, { useState, useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import {
  Pagination,
  Autoplay,
  EffectCoverflow,
  Navigation,
} from "swiper/modules";
import {
  FaMicrochip,
  FaMobile,
  FaBatteryHalf,
  FaUnlock,
  FaTools,
  FaWrench,
  FaCamera,
  FaVolumeUp,
  FaShieldAlt,
  FaClock,
  FaCheckCircle,
  FaStar,
  FaWhatsapp,
  FaPhone,
  FaCalendarAlt,
  FaAward,
  FaCertificate,
  FaBolt,
  FaHeart,
  FaThumbsUp,
} from "react-icons/fa";
import {
  MdVerified,
  MdHighQuality,
  MdSpeed,
  MdSecurity,
  MdPrecisionManufacturing,
  MdEngineering,
  MdDisplaySettings,
  MdBatteryChargingFull,
} from "react-icons/md";
import {
  BsStars,
  BsLightning,
  BsDiamond,
  BsShieldCheck,
  BsTools,
  BsGear,
  BsClock,
  BsCheckCircle,
} from "react-icons/bs";
import { HiSparkles, HiChip } from "react-icons/hi";

const RepairServices = () => {
  const [activeService, setActiveService] = useState(null);
  const [completedRepairs, setCompletedRepairs] = useState(12847);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Performance: Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Live counter animation
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCompletedRepairs((prev) => prev + Math.floor(Math.random() * 3) + 1);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  // Enhanced services with professional details
  const services = [
    {
      name: "Chip Level Repair",
      icon: <HiChip className="text-3xl" />,
      description: "Advanced motherboard and IC repairs",
      price: "From LKR 3,500",
      duration: "2-3 Days",
      warranty: "90 Days",
      difficulty: "Expert",
      gradient: "from-blue-600 to-cyan-500",
      features: [
        "Micro-soldering",
        "Component replacement",
        "Logic board repair",
      ],
    },
    {
      name: "Screen Replacement",
      icon: <MdDisplaySettings className="text-3xl" />,
      description: "Original quality display replacements",
      price: "From LKR 8,500",
      duration: "Same Day",
      warranty: "180 Days",
      difficulty: "Standard",
      gradient: "from-purple-600 to-pink-500",
      features: ["Original parts", "Touch calibration", "Color accuracy test"],
    },
    {
      name: "Battery Replacement",
      icon: <MdBatteryChargingFull className="text-3xl" />,
      description: "High-capacity genuine batteries",
      price: "From LKR 4,500",
      duration: "30 Minutes",
      warranty: "365 Days",
      difficulty: "Quick",
      gradient: "from-green-600 to-emerald-500",
      features: [
        "Genuine batteries",
        "Health monitoring",
        "Fast charging support",
      ],
    },
    {
      name: "Unlocking Services",
      icon: <FaUnlock className="text-3xl" />,
      description: "Network and software unlocking",
      price: "From LKR 2,500",
      duration: "1-2 Hours",
      warranty: "Lifetime",
      difficulty: "Standard",
      gradient: "from-yellow-600 to-orange-500",
      features: ["All networks", "Safe unlocking", "No data loss"],
    },
    {
      name: "Software Solutions",
      icon: <BsGear className="text-3xl" />,
      description: "iOS & Android software repairs",
      price: "From LKR 1,500",
      duration: "1-2 Hours",
      warranty: "30 Days",
      difficulty: "Standard",
      gradient: "from-indigo-600 to-purple-500",
      features: ["Boot loop fix", "OS restoration", "Data recovery"],
    },
    {
      name: "Hardware Repairs",
      icon: <MdEngineering className="text-3xl" />,
      description: "Precision hardware diagnostics",
      price: "From LKR 2,000",
      duration: "1-3 Days",
      warranty: "120 Days",
      difficulty: "Professional",
      gradient: "from-red-600 to-pink-500",
      features: ["Full diagnostics", "Component testing", "Quality assurance"],
    },
    {
      name: "Camera Repair",
      icon: <FaCamera className="text-3xl" />,
      description: "Camera module replacements",
      price: "From LKR 6,500",
      duration: "Same Day",
      warranty: "180 Days",
      difficulty: "Standard",
      gradient: "from-teal-600 to-cyan-500",
      features: ["Focus calibration", "Image stabilization", "Lens cleaning"],
    },
    {
      name: "Audio Solutions",
      icon: <FaVolumeUp className="text-3xl" />,
      description: "Speaker and microphone repairs",
      price: "From LKR 3,000",
      duration: "Same Day",
      warranty: "120 Days",
      difficulty: "Standard",
      gradient: "from-orange-600 to-red-500",
      features: [
        "Crystal clear audio",
        "Noise cancellation",
        "Volume optimization",
      ],
    },
  ];

  // Enhanced before/after showcase
  const beforeAfterImages = [
    {
      before: "/images/iphoneSEBefore.jpg",
      after: "/images/iphoneSEAfter.png",
      title: "iPhone SE Complete Restoration",
      description: "Screen replacement and internal cleaning",
      repairTime: "Same Day",
      satisfaction: "100%",
    },
    {
      before: "/images/AllPhonesBefore.jpg",
      after: "/images/AllPhonesAfter.jpg",
      title: "Multi-Device Repair Workshop",
      description: "Various smartphone repairs completed",
      repairTime: "1-3 Days",
      satisfaction: "100%",
    },
  ];

  // Trust indicators
  const trustStats = [
    {
      number: completedRepairs.toLocaleString(),
      label: "Repairs Completed",
      icon: <BsCheckCircle className="text-2xl text-green-400" />,
      suffix: "+",
    },
    {
      number: "4.9",
      label: "Customer Rating",
      icon: <FaStar className="text-2xl text-yellow-400" />,
      suffix: "★",
    },
    {
      number: "98",
      label: "Success Rate",
      icon: <FaThumbsUp className="text-2xl text-blue-400" />,
      suffix: "%",
    },
    {
      number: "24",
      label: "Hour Service",
      icon: <BsClock className="text-2xl text-purple-400" />,
      suffix: "/7",
    },
  ];

  // Service quality features
  const qualityFeatures = [
    {
      icon: <MdVerified className="text-2xl" />,
      title: "Certified Technicians",
      description: "Expert repair specialists with years of experience",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <BsShieldCheck className="text-2xl" />,
      title: "Warranty Protection",
      description: "Up to 365 days warranty on all repairs",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <MdHighQuality className="text-2xl" />,
      title: "Original Parts",
      description: "Genuine and high-quality replacement components",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      icon: <MdSpeed className="text-2xl" />,
      title: "Fast Turnaround",
      description: "Most repairs completed same day or within 24 hours",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const ServiceCard = ({ service, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.1, type: "spring", bounce: 0.3 }}
      whileHover={{ y: -10, scale: 1.02 }}
      onHoverStart={() => setActiveService(index)}
      onHoverEnd={() => setActiveService(null)}
      className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden shadow-2xl hover:shadow-blue-500/25 transition-all duration-500"
    >
      {/* Glow effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
      />

      {/* Difficulty badge */}
      <div className="absolute top-4 right-4 z-20">
        <div
          className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${service.gradient} text-white shadow-lg`}
        >
          {service.difficulty}
        </div>
      </div>

      <div className="p-6 relative z-10">
        {/* Icon container */}
        <div
          className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
        >
          <div className="text-white">{service.icon}</div>
        </div>

        {/* Service info */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {service.name}
        </h3>

        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
          {service.description}
        </p>

        {/* Service details */}
        <div className="space-y-3 mb-6">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-400">Price:</span>
            <span className="text-green-400 font-semibold">
              {service.price}
            </span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-400">Duration:</span>
            <span className="text-blue-400 font-semibold">
              {service.duration}
            </span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-400">Warranty:</span>
            <span className="text-purple-400 font-semibold">
              {service.warranty}
            </span>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-2 mb-6">
          {service.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm">
              <BsCheckCircle className="text-green-400 text-xs" />
              <span className="text-gray-300">{feature}</span>
            </div>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-2">
          <motion.a
            href={`https://wa.me/94726048468?text=Hi! I need ${service.name} service. Can you provide more details?`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className={`flex-1 bg-gradient-to-r ${service.gradient} hover:shadow-xl text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm`}
          >
            <FaWhatsapp />
            Book Now
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-gray-700 hover:bg-gray-600 text-white rounded-xl transition-all duration-300 flex items-center justify-center"
          >
            <FaPhone className="text-sm" />
          </motion.button>
        </div>
      </div>

      {/* Hover overlay */}
      <AnimatePresence>
        {activeService === index && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-3xl"
          />
        )}
      </AnimatePresence>
    </motion.div>
  );

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black text-white relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
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
                  Expert repair service available
                </span>
              </div>
              <div className="flex items-center gap-2 text-blue-400">
                <MdVerified />
                <span className="text-sm font-medium">
                  Certified repair center
                </span>
              </div>
            </div>
          </motion.div>

          {/* Main heading with TypeAnimation */}
          <div className="mb-8">
            <TypeAnimation
              sequence={[
                "Broken Phone?",
                2000,
                "We Fix It Today!",
                2000,
                "Expert Repair Service",
                2000,
                "Your Device Deserves Care",
                2000,
              ]}
              wrapper="h1"
              className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
              repeat={Infinity}
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Professional device repair services with genuine parts, expert
            technicians, and comprehensive warranty protection. Your
            satisfaction is guaranteed.
          </motion.p>

          {/* Trust statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16"
          >
            {trustStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="text-center p-4 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20"
              >
                <div className="flex justify-center mb-2">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-black text-white mb-1">
                  {stat.number}
                  {stat.suffix}
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Before/After Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="max-w-6xl mx-auto mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                AMAZING TRANSFORMATIONS
              </span>
            </h2>
            <p className="text-gray-300 text-lg">
              See the incredible results of our expert repair work
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden shadow-2xl">
            <Swiper
              modules={[Pagination, Autoplay, EffectCoverflow, Navigation]}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView="auto"
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              autoplay={{ delay: 6000, disableOnInteraction: false }}
              pagination={{ clickable: true, dynamicBullets: true }}
              className="py-12"
            >
              {beforeAfterImages.map((imageSet, index) => (
                <SwiperSlide key={index} className="max-w-4xl">
                  <div className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8">
                      {/* Before */}
                      <motion.div
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="relative mb-4">
                          <img
                            src={imageSet.before}
                            alt="Before Repair"
                            className="w-full max-w-xs h-auto object-contain rounded-2xl shadow-xl"
                          />
                          <div className="absolute -top-3 -left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                            BEFORE
                          </div>
                        </div>
                        <div className="text-center">
                          <p className="text-red-400 font-bold text-lg mb-1">
                            Damaged
                          </p>
                          <p className="text-gray-400 text-sm">
                            Needs professional repair
                          </p>
                        </div>
                      </motion.div>

                      {/* Transformation Icon */}
                      <motion.div
                        className="flex flex-col items-center justify-center"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 1, duration: 1, type: "spring" }}
                      >
                        <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mb-4 shadow-2xl">
                          <BsLightning className="text-white text-3xl" />
                        </div>
                        <div className="text-center">
                          <p className="text-blue-400 font-bold text-lg">
                            TRANSFORMATION
                          </p>
                          <p className="text-gray-400 text-sm">
                            {imageSet.repairTime}
                          </p>
                        </div>
                      </motion.div>

                      {/* After */}
                      <motion.div
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.5 }}
                      >
                        <div className="relative mb-4">
                          <img
                            src={imageSet.after}
                            alt="After Repair"
                            className="w-full max-w-xs h-auto object-contain rounded-2xl shadow-xl"
                          />
                          <div className="absolute -top-3 -right-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                            AFTER
                          </div>
                        </div>
                        <div className="text-center">
                          <p className="text-green-400 font-bold text-lg mb-1">
                            Perfect!
                          </p>
                          <p className="text-gray-400 text-sm">
                            {imageSet.satisfaction} satisfaction
                          </p>
                        </div>
                      </motion.div>
                    </div>

                    <div className="text-center mt-8">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {imageSet.title}
                      </h3>
                      <p className="text-gray-300">{imageSet.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="max-w-7xl mx-auto mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                EXPERT REPAIR SERVICES
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Professional repair solutions for all your mobile device needs
              with industry-leading warranty and support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.name} service={service} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Quality Features */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="max-w-7xl mx-auto mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Tech Spot?
            </h2>
            <p className="text-gray-300 text-lg">
              Industry-leading quality and service standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="text-center p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                >
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.0 }}
          className="text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Fix Your Device?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
            Get your device back to perfect condition with our expert repair
            services. Contact us today for a free diagnosis and quote.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="https://wa.me/94726048468?text=Hi Tech Spot! I need device repair service. Can you help me?"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <FaWhatsapp className="text-2xl" />
              <span className="text-lg">Get Free Quote</span>
            </motion.a>

            <motion.a
              href="tel:+94726048468"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <FaPhone className="text-xl" />
              <span className="text-lg">Call Now</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RepairServices;

// import React from "react";
// import { TypeAnimation } from "react-type-animation";
// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
// import { Pagination, Autoplay } from "swiper/modules";

// const RepairServices = () => {
//   const services = [
//     { name: "Chip Level Repair", icon: "💻" },
//     { name: "Screen Replacement", icon: "📱" },
//     { name: "Battery Replacement", icon: "🔋" },
//     { name: "Unlocking Services", icon: "🔓" },
//     { name: "Software Issues", icon: "🛠️" },
//     { name: "Hardware Repairs", icon: "🔧" },
//     { name: "Camera Repair", icon: "📷" },
//     { name: "Speaker Repair", icon: "🔊" },
//   ];

//   const beforeAfterImages = [
//     {
//       before: "/images/iphoneSEBefore.jpg",
//       after: "/images/iphoneSEAfter.png",
//     },
//     {
//       before: "/images/AllPhonesBefore.jpg",
//       after: "/images/AllPhonesAfter.jpg",
//     },
//   ];

//   return (
//     <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white py-16 px-4">

//       <div className="text-center mb-12">
//         <TypeAnimation
//           sequence={[
//             "Broken Phone?",
//             2000,
//             "Let Us Fix It Today!",
//             2000,
//             "Your Trusted Repair Experts.",
//             2000,
//           ]}
//           wrapper="h1"
//           className="text-4xl md:text-5xl font-bold mb-6"
//           repeat={Infinity}
//         />
//         <motion.p
//           className="text-lg md:text-xl text-gray-300"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           Our repair services ensure your devices are back to perfect condition.
//         </motion.p>
//       </div>

//       <div className="max-w-4xl mx-auto mb-16">
//         <Swiper
//           modules={[Pagination, Autoplay]}
//           spaceBetween={30}
//           slidesPerView={1}
//           autoplay={{ delay: 6000 }}
//           pagination={{ clickable: true }}
//           className="rounded-lg overflow-hidden"
//         >
//           {beforeAfterImages.map((imageSet, index) => (
//             <SwiperSlide key={index}>
//               <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">

//                 <motion.div
//                   className="flex flex-col items-center"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.5, duration: 1 }}
//                 >
//                   <img
//                     src={imageSet.before}
//                     alt="Before Repair"
//                     className="w-full max-w-xs md:max-w-sm h-auto object-contain"
//                   />
//                   <p className="mt-2 text-lg font-bold text-green-400">
//                     Before
//                   </p>
//                 </motion.div>

//                 <motion.div
//                   className="flex justify-center items-center text-green-500 text-6xl"
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1, rotate: 360 }}
//                   transition={{ delay: 2, duration: 1 }}
//                 >
//                   ♻️
//                 </motion.div>

//                 <motion.div
//                   className="flex flex-col items-center"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 3, duration: 1 }}
//                 >
//                   <img
//                     src={imageSet.after}
//                     alt="After Repair"
//                     className="w-full max-w-xs md:max-w-sm h-auto object-contain"
//                   />
//                   <p className="mt-2 text-lg font-bold text-blue-400">After</p>
//                 </motion.div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
//           Our Services
//         </h2>
//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={{
//             hidden: { opacity: 0 },
//             visible: {
//               opacity: 1,
//               transition: {
//                 staggerChildren: 0.2,
//               },
//             },
//           }}
//         >
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-center"
//               variants={{
//                 hidden: { opacity: 0, y: 50 },
//                 visible: { opacity: 1, y: 0 },
//               }}
//             >
//               <div className="text-5xl md:text-6xl mb-4">{service.icon}</div>
//               <h3 className="text-lg md:text-xl font-semibold">
//                 {service.name}
//               </h3>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default RepairServices;
