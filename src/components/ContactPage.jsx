import React from "react";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { motion } from "framer-motion";

const ContactPage = () => {
  const contactNumbers = ["0726048468", "0729212698"];
  const whatsappNumber = "+94726048468";
  const facebookURL = "https://web.facebook.com/profile.php?id=61558973124367";

  const cardVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h2>

        <motion.p
          className="text-base md:text-lg text-gray-300 mb-12"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          We're here to assist you! Get in touch with us via WhatsApp, Facebook,
          or call us directly.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* WhatsApp Section */}
          <motion.div
            className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300"
            variants={cardVariants}
            initial="initial"
            animate="animate"
          >
            <a
              href={`https://wa.me/${whatsappNumber.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-400 transition duration-300"
            >
              <motion.div
                className="text-5xl md:text-6xl mb-4"
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 10px rgba(0, 255, 0, 0.8)",
                }}
              >
                <FaWhatsapp />
              </motion.div>
            </a>
            <h3 className="text-lg md:text-xl font-semibold mb-1 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              WhatsApp
            </h3>
            <p className="text-sm md:text-base text-gray-400">
              {whatsappNumber}
            </p>
          </motion.div>

          {/* Facebook Section */}
          <motion.div
            className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300"
            variants={cardVariants}
            initial="initial"
            animate="animate"
          >
            <a
              href={facebookURL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 transition duration-300"
            >
              <motion.div
                className="text-5xl md:text-6xl mb-4"
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 10px rgba(0, 0, 255, 0.8)",
                }}
              >
                <FaFacebookF />
              </motion.div>
            </a>
            <h3 className="text-lg md:text-xl font-semibold mb-1 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Facebook
            </h3>
            <p className="text-sm md:text-base text-gray-400">Visit our page</p>
          </motion.div>

          {/* Call Us Section */}
          <motion.div
            className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300"
            variants={cardVariants}
            initial="initial"
            animate="animate"
          >
            <a
              href={`tel:${contactNumbers[0]}`}
              className="text-yellow-500 hover:text-yellow-400 transition duration-300"
            >
              <motion.div
                className="text-5xl md:text-6xl mb-4"
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 10px rgba(255, 255, 0, 0.8)",
                }}
              >
                <FiPhoneCall />
              </motion.div>
            </a>
            <h3 className="text-lg md:text-xl font-semibold mb-1 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Call Us
            </h3>
            <div className="space-y-1 text-sm md:text-base text-gray-400">
              {contactNumbers.map((number, index) => (
                <p key={index}>{number}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
