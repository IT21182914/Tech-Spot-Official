import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const AboutUs = () => {
  const features = [
    "🔧 Repair Services",
    "📱 Mobile Accessories",
    "📍 Trusted Location",
    "⭐ Customer Satisfaction",
  ];

  return (
    <section className="bg-gradient-to-b from-black to-gray-900 text-white min-h-screen py-16 px-6">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center">
        <TypeAnimation
          sequence={[
            "Welcome to Tech Spot!",
            2000,
            "Your Trusted Mobile Shop.",
            2000,
            "Where Quality Meets Convenience.",
            2000,
          ]}
          wrapper="h1"
          className="text-4xl md:text-5xl font-bold mb-8"
          repeat={Infinity}
        />
        <p className="text-lg md:text-xl text-gray-400 mb-12">
          At Tech Spot, we are passionate about delivering exceptional service,
          top-notch products, and reliable repairs to keep you connected.
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="rounded-lg overflow-hidden shadow-lg"
        >
          <LazyLoadImage
            src="/images/TechSpot.jpg"
            alt="Tech Spot"
            className="w-full h-auto object-cover"
            effect="blur"
            placeholderSrc="/images/TechSpot-placeholder.jpg"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Tech Spot started with a simple mission: to provide a one-stop
            solution for all your mobile needs. From premium mobile accessories
            to professional repair services, we are committed to quality,
            innovation, and customer satisfaction.
          </p>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Located in Tissamaharama, we pride ourselves on being a trusted
            local business that combines modern solutions with a friendly,
            personalized approach. With years of experience, our team ensures
            that every customer leaves happy and connected.
          </p>
          <div className="flex justify-center">
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto mt-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">What We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <p className="text-xl font-semibold text-white">{feature}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Vision and Mission Section */}
      <div className="max-w-6xl mx-auto mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-400 leading-relaxed">
              To become the leading provider of mobile accessories and repair
              services in Sri Lanka, known for innovation, quality, and
              reliability.
            </p>
          </motion.div>
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed">
              To deliver exceptional customer service, high-quality products,
              and reliable repair solutions that enhance our customers’ digital
              lives.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
