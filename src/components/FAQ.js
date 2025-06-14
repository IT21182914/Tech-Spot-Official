import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaQuestionCircle,
  FaTools,
  FaMapMarkerAlt,
  FaClock,
  FaPhone,
  FaShieldAlt,
  FaSearch,
  FaChevronDown,
  FaChevronUp,
  FaLightbulb,
  FaHeadset,
  FaWhatsapp,
  FaFacebook,
  FaEnvelope,
  FaMobileAlt,
  FaWrench,
  FaDollarSign,
  FaTruck,
  FaCheckCircle,
  FaInfoCircle,
} from "react-icons/fa";
import {
  MdVerified,
  MdSecurity,
  MdSupport,
  MdHelp,
  MdContactSupport,
  MdQuestionAnswer,
} from "react-icons/md";
import {
  BsStars,
  BsLightning,
  BsDiamond,
  BsShieldCheck,
  BsQuestionCircle,
  BsChatDots,
  BsHeadset,
} from "react-icons/bs";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const faqs = [
    {
      id: 1,
      category: "Services",
      question: "What services does Tech Spot offer?",
      answer:
        "We provide comprehensive mobile phone repair services, premium mobile accessories, smartphone sales, and professional technical support. Our certified technicians handle everything from screen replacements to complex motherboard repairs, ensuring your device gets the expert care it deserves.",
      icon: <FaTools className="text-lg" />,
      color: "from-blue-500 to-cyan-500",
      popular: true,
    },
    {
      id: 2,
      category: "Location",
      question: "Where is Tech Spot located?",
      answer:
        "We are conveniently located on Palliyawaththa Road, Tissamaharama, Sri Lanka. Our store is easily accessible with ample parking space and is situated in the heart of the commercial district for your convenience.",
      icon: <FaMapMarkerAlt className="text-lg" />,
      color: "from-green-500 to-emerald-500",
      popular: true,
    },
    {
      id: 3,
      category: "Hours",
      question: "What are your working hours?",
      answer:
        "We're open 7 days a week to serve you better! Monday through Saturday: 8:00 AM to 8:00 PM, Sunday: 9:00 AM to 6:00 PM. We also offer emergency repair services for urgent cases - just give us a call!",
      icon: <FaClock className="text-lg" />,
      color: "from-purple-500 to-indigo-500",
      popular: false,
    },
    {
      id: 4,
      category: "Contact",
      question: "How can I contact Tech Spot?",
      answer:
        "You can reach us through multiple channels: WhatsApp (+94 72 604 8468), Facebook (@techspot99), Instagram (@tech_spot_99), or call us directly. We also have a contact form on our website for detailed inquiries.",
      icon: <FaPhone className="text-lg" />,
      color: "from-yellow-500 to-orange-500",
      popular: true,
    },
    {
      id: 5,
      category: "Warranty",
      question: "Do you provide a warranty for repairs?",
      answer:
        "Absolutely! We offer a comprehensive warranty on all our repair services. Screen repairs come with a 6-month warranty, battery replacements with 1-year warranty, and other repairs typically have 3-6 months warranty depending on the type of service.",
      icon: <FaShieldAlt className="text-lg" />,
      color: "from-red-500 to-pink-500",
      popular: true,
    },
    {
      id: 6,
      category: "Repairs",
      question: "How long does a typical repair take?",
      answer:
        "Most common repairs like screen replacements are completed within 30-60 minutes. Complex repairs may take 1-3 hours, while motherboard repairs might require 1-2 days. We always provide an estimated timeframe before starting any work.",
      icon: <FaWrench className="text-lg" />,
      color: "from-teal-500 to-cyan-500",
      popular: false,
    },
    {
      id: 7,
      category: "Pricing",
      question: "Do you provide free estimates?",
      answer:
        "Yes! We offer completely free diagnostics and estimates for all repair services. Our technicians will examine your device, identify the issues, and provide you with a detailed quote before any work begins - no hidden fees or surprises.",
      icon: <FaDollarSign className="text-lg" />,
      color: "from-emerald-500 to-green-500",
      popular: false,
    },
    {
      id: 8,
      category: "Services",
      question: "Do you repair all smartphone brands?",
      answer:
        "We specialize in repairing all major smartphone brands including iPhone, Samsung, Huawei, Xiaomi, OnePlus, Google Pixel, and many others. Our technicians are trained on the latest models and use genuine or high-quality replacement parts.",
      icon: <FaMobileAlt className="text-lg" />,
      color: "from-indigo-500 to-purple-500",
      popular: false,
    },
    {
      id: 9,
      category: "Services",
      question: "Do you offer pickup and delivery services?",
      answer:
        "Yes! For customers in Tissamaharama and surrounding areas, we offer convenient pickup and delivery services for repairs. Contact us to schedule a pickup, and we'll handle the rest while keeping you updated throughout the process.",
      icon: <FaTruck className="text-lg" />,
      color: "from-orange-500 to-red-500",
      popular: false,
    },
    {
      id: 10,
      category: "Products",
      question: "Do you sell original accessories?",
      answer:
        "Absolutely! We stock genuine accessories from major brands as well as high-quality third-party alternatives. All our products come with manufacturer warranties and our quality guarantee. We carefully select only the best accessories for our customers.",
      icon: <FaCheckCircle className="text-lg" />,
      color: "from-cyan-500 to-blue-500",
      popular: false,
    },
  ];

  const categories = [
    "All",
    "Services",
    "Location",
    "Hours",
    "Contact",
    "Warranty",
    "Repairs",
    "Pricing",
    "Products",
  ];

  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const popularFAQs = faqs.filter((faq) => faq.popular);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const contactMethods = [
    {
      icon: <FaWhatsapp className="text-2xl" />,
      title: "WhatsApp",
      description: "+94 72 604 8468",
      color: "from-green-500 to-emerald-500",
      action: "https://wa.me/94726048468",
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Phone Call",
      description: "Direct Support",
      color: "from-blue-500 to-cyan-500",
      action: "tel:+94726048468",
    },
    {
      icon: <FaFacebook className="text-2xl" />,
      title: "Facebook",
      description: "Message Us",
      color: "from-blue-600 to-indigo-600",
      action: "https://www.facebook.com/profile.php?id=61558973124367",
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email",
      description: "Send Inquiry",
      color: "from-purple-500 to-pink-500",
      action: "/contact",
    },
  ];

  return (
    <div className="relative bg-gradient-to-b from-slate-950 via-gray-900 to-black text-gray-300 min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="py-20 px-6 text-center"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <BsStars className="text-yellow-400 text-2xl" />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent font-bold text-lg">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <BsStars className="text-yellow-400 text-2xl" />
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8">
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                Got Questions?
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                We Have Answers!
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Find everything you need to know about Tech Spot's services,
              policies, and how we can help with your mobile technology needs.
            </motion.p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="relative max-w-2xl mx-auto mb-8"
            >
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 pl-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
              <FaSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl"
                      : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Popular Questions Section */}
        {selectedCategory === "All" && searchTerm === "" && (
          <section className="py-12 px-6">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl lg:text-4xl font-black mb-4">
                  <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                    Most Popular Questions
                  </span>
                </h2>
                <p className="text-gray-400 text-lg">
                  The questions our customers ask most frequently
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {popularFAQs.map((faq, index) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 p-6 hover:border-white/40 transition-all duration-300 cursor-pointer"
                    onClick={() => {
                      const mainIndex = filteredFAQs.findIndex(
                        (f) => f.id === faq.id
                      );
                      toggleFAQ(mainIndex);
                      document
                        .getElementById(`faq-${faq.id}`)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${faq.color} rounded-xl flex items-center justify-center mb-4 text-white`}
                    >
                      {faq.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2">
                      {faq.answer}
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-blue-400 text-sm font-semibold">
                        {faq.category}
                      </span>
                      <FaChevronDown className="text-gray-400" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Main FAQ Section */}
        <section className="py-12 px-6">
          <div className="max-w-5xl mx-auto">
            {/* Results Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center justify-between mb-8"
            >
              <p className="text-gray-400">
                Showing{" "}
                <span className="text-white font-semibold">
                  {filteredFAQs.length}
                </span>{" "}
                question{filteredFAQs.length !== 1 ? "s" : ""}
                {selectedCategory !== "All" && (
                  <span>
                    {" "}
                    in{" "}
                    <span className="text-blue-400 font-semibold">
                      {selectedCategory}
                    </span>
                  </span>
                )}
              </p>
            </motion.div>

            {/* FAQ List */}
            <div className="space-y-6">
              <AnimatePresence>
                {filteredFAQs.map((faq, index) => (
                  <motion.div
                    key={faq.id}
                    id={`faq-${faq.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.05 }}
                    className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border transition-all duration-500 overflow-hidden ${
                      activeIndex === index
                        ? "border-blue-500 shadow-2xl shadow-blue-500/20"
                        : "border-white/20 hover:border-white/40"
                    }`}
                  >
                    <motion.div
                      className="p-6 cursor-pointer"
                      onClick={() => toggleFAQ(index)}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex items-start gap-4 flex-1">
                          <div
                            className={`w-12 h-12 bg-gradient-to-r ${faq.color} rounded-xl flex items-center justify-center text-white flex-shrink-0`}
                          >
                            {faq.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-lg md:text-xl font-bold text-white">
                                {faq.question}
                              </h3>
                              {faq.popular && (
                                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                                  Popular
                                </span>
                              )}
                            </div>
                            <span className="text-blue-400 text-sm font-semibold">
                              {faq.category}
                            </span>
                          </div>
                        </div>

                        <motion.div
                          animate={{ rotate: activeIndex === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-gray-400 hover:text-white transition-colors flex-shrink-0"
                        >
                          <FaChevronDown className="text-xl" />
                        </motion.div>
                      </div>
                    </motion.div>

                    <AnimatePresence>
                      {activeIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="border-t border-white/20"
                        >
                          <div className="p-6 pt-4">
                            <p className="text-gray-300 leading-relaxed text-lg">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* No Results */}
            {filteredFAQs.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <div className="text-6xl mb-4">🤔</div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  No questions found
                </h3>
                <p className="text-gray-400 mb-6">
                  We couldn't find any questions matching your search. Try
                  different keywords or browse all categories.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl transition-all duration-300"
                >
                  Clear Search
                </motion.button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Contact Support Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-transparent to-black/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <BsHeadset className="text-blue-400 text-2xl" />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-bold text-lg">
                  NEED MORE HELP?
                </span>
                <BsHeadset className="text-blue-400 text-2xl" />
              </div>

              <h2 className="text-4xl lg:text-5xl font-black mb-6">
                <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                  Still Have Questions?
                </span>
              </h2>

              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
                Can't find what you're looking for? Our friendly support team is
                here to help you with any questions or concerns.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.action}
                  target={method.action.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    method.action.startsWith("http")
                      ? "noopener noreferrer"
                      : ""
                  }
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 p-6 text-center hover:border-white/40 transition-all duration-300 no-underline group"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-400">{method.description}</p>
                </motion.a>
              ))}
            </div>

            {/* Additional Support Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-8 mt-12 text-center"
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <BsChatDots className="text-green-400 text-2xl" />
                <h3 className="text-2xl font-bold text-white">
                  24/7 Support Available
                </h3>
              </div>
              <p className="text-gray-400 text-lg mb-6">
                Our support team is available around the clock to help you with
                urgent repair needs and technical questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center gap-2 text-gray-400">
                  <MdVerified className="text-green-400" />
                  <span>Certified Technicians</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <BsShieldCheck className="text-blue-400" />
                  <span>Warranty Guaranteed</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <BsStars className="text-yellow-400" />
                  <span>5-Star Service</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FAQ;
