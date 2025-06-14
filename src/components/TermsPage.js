import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaShieldAlt,
  FaExchangeAlt,
  FaCreditCard,
  FaTruck,
  FaCheckCircle,
  FaExclamationTriangle,
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaLock,
  FaFileContract,
  FaGavel,
  FaUserShield,
  FaInfoCircle,
  FaQuestionCircle,
  FaArrowRight,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import {
  MdVerified,
  MdSecurity,
  MdPolicy,
  MdGavel,
  MdPrivacyTip,
  MdContactSupport,
} from "react-icons/md";
import {
  BsStars,
  BsShieldCheck,
  BsCheckCircle,
  BsExclamationTriangle,
  BsInfoCircle,
} from "react-icons/bs";

const TermsPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getCurrentDate = () => {
    const now = new Date();
    return now.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    });
  };

  const termsConditions = [
    {
      title: "Purchase Agreement",
      content:
        "By purchasing any smartphone from Tech Spot, you enter into a legally binding contract with us. These terms and conditions govern your purchase and use of our products and services.",
    },
    {
      title: "Product Authenticity and Condition",
      content:
        "All smartphones sold by Tech Spot are brand new, authentic, and original products sourced directly from authorized distributors or manufacturers. We guarantee that no refurbished, used, or counterfeit products are sold through our store.",
    },
    {
      title: "Pricing and Currency",
      content:
        "All prices are listed in Sri Lankan Rupees (LKR) and are inclusive of applicable taxes unless otherwise stated. Prices are subject to change without prior notice due to market fluctuations, currency variations, or supplier price changes.",
    },
    {
      title: "Payment Terms",
      content:
        "Payment must be made in full before product delivery. We accept cash payments at our store, bank transfers, and mobile payments. For bank transfers, customers must provide payment confirmation via WhatsApp (+94 72 604 8468) with the transfer receipt.",
    },
    {
      title: "Order Processing and Confirmation",
      content:
        "Orders are processed only after full payment confirmation. Processing time is typically 24-48 hours during business days. Customers will receive order confirmation and tracking information via WhatsApp or SMS.",
    },
    {
      title: "Delivery and Shipping",
      content:
        "We provide island-wide delivery across Sri Lanka through reputable courier services. Standard delivery takes 2-5 business days depending on location. Delivery charges apply based on location and are communicated at the time of purchase. Remote areas may incur additional charges.",
    },
    {
      title: "Risk of Loss and Damage During Transit",
      content:
        "Risk of loss or damage passes to the customer once the product is handed over to the courier service. Tech Spot is not liable for any damage, loss, or delay caused by the courier service during transit.",
    },
    {
      title: "Product Inspection and Acceptance",
      content:
        "Customers have 24 hours from delivery to inspect the product and report any physical damage or defects. Failure to report issues within this timeframe constitutes acceptance of the product in its delivered condition.",
    },
    {
      title: "Return and Exchange Policy",
      content:
        "Returns are accepted only for manufacturing defects or DOA (Dead on Arrival) products within 7 days of delivery. Products must be in original packaging with all accessories and documentation. No returns are accepted for change of mind, buyer's remorse, or compatibility issues.",
    },
    {
      title: "Warranty Terms",
      content:
        "All smartphones come with manufacturer's warranty as specified by the brand. Warranty periods and terms vary by manufacturer. Physical damage, water damage, or unauthorized repairs void the warranty. Warranty claims must be processed through Tech Spot during the warranty period.",
    },
    {
      title: "Limitation of Liability",
      content:
        "Tech Spot's liability is limited to the purchase price of the product. We are not liable for any indirect, incidental, special, or consequential damages arising from the use or inability to use the product.",
    },
    {
      title: "Data Privacy and Protection",
      content:
        "Customer personal information collected during purchase is used solely for order processing, delivery, and customer service. We do not share customer data with third parties except for delivery and payment processing purposes.",
    },
    {
      title: "Force Majeure",
      content:
        "Tech Spot is not liable for delays or failure to perform due to circumstances beyond our reasonable control, including but not limited to natural disasters, government actions, strikes, or supply chain disruptions.",
    },
    {
      title: "Dispute Resolution",
      content:
        "Any disputes arising from purchases will be resolved through good faith negotiation. If unresolved, disputes will be subject to the jurisdiction of Sri Lankan courts and governed by the laws of Sri Lanka.",
    },
    {
      title: "Modification of Terms",
      content:
        "These terms and conditions may be updated or modified at any time without prior notice. Continued purchases after modifications constitute acceptance of the updated terms.",
    },
    {
      title: "Contact Information for Support",
      content:
        "For any questions, concerns, or support regarding your purchase, contact us via WhatsApp (+94 72 604 8468), visit our store at Palliyawaththa Road, Tissamaharama, or call us during business hours (8:00 AM - 8:00 PM daily).",
    },
  ];

  const contactInfo = [
    {
      icon: <FaWhatsapp className="text-xl" />,
      title: "WhatsApp",
      value: "+94 72 604 8468",
      color: "from-green-500 to-emerald-500",
      action: "https://wa.me/94726048468",
    },
    {
      icon: <FaPhone className="text-xl" />,
      title: "Phone",
      value: "+94 72 604 8468",
      color: "from-blue-500 to-cyan-500",
      action: "tel:+94726048468",
    },
    {
      icon: <FaMapMarkerAlt className="text-xl" />,
      title: "Location",
      value: "Palliyawaththa Road, Tissamaharama",
      color: "from-purple-500 to-indigo-500",
      action: "/location",
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

      <div className="relative z-10 py-20 px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <BsStars className="text-yellow-400 text-2xl" />
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent font-bold text-lg">
              TERMS & CONDITIONS
            </span>
            <BsStars className="text-yellow-400 text-2xl" />
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8">
            <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Terms &
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Conditions
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Welcome to{" "}
            <span className="font-bold text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Tech Spot
            </span>
            ! By purchasing smartphones and services from us, you agree to the
            following terms and conditions.
          </motion.p>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            <div className="flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 px-4 py-2 rounded-full border border-green-500/30">
              <MdVerified className="text-green-400" />
              <span className="text-green-400 font-semibold">
                Verified Business
              </span>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 px-4 py-2 rounded-full border border-blue-500/30">
              <BsShieldCheck className="text-blue-400" />
              <span className="text-blue-400 font-semibold">
                Secure Transactions
              </span>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 px-4 py-2 rounded-full border border-purple-500/30">
              <FaFileContract className="text-purple-400" />
              <span className="text-purple-400 font-semibold">
                Legal Compliance
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Terms Content */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-8 lg:p-12 mb-12"
          >
            <div className="space-y-8">
              {termsConditions.map((term, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-white/10 pb-6 last:border-b-0 last:pb-0"
                >
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {index + 1}
                    </span>
                    {term.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg pl-11">
                    {term.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-black mb-4">
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                Need Clarification?
              </span>
            </h3>
            <p className="text-xl text-gray-400">
              Contact us for any questions regarding these terms and conditions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.action}
                target={contact.action.startsWith("http") ? "_blank" : "_self"}
                rel={
                  contact.action.startsWith("http") ? "noopener noreferrer" : ""
                }
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 p-6 text-center hover:border-white/40 transition-all duration-300 no-underline group"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300`}
                >
                  {contact.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {contact.title}
                </h3>
                <p className="text-gray-400">{contact.value}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="max-w-4xl mx-auto mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
            <FaInfoCircle className="text-blue-400 text-3xl mx-auto mb-4" />
            <p className="text-gray-400 leading-relaxed">
              <strong className="text-white">Last Updated:</strong>{" "}
              {getCurrentDate()}
              <br />
              These terms and conditions are subject to change without prior
              notice. Please check this page regularly for updates. For
              immediate assistance regarding your smartphone purchase, please
              contact our customer service team.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsPage;
