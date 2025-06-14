import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaStar,
  FaQuoteLeft,
  FaQuoteRight,
  FaHeart,
  FaThumbsUp,
  FaVerified,
  FaAward,
  FaShieldAlt,
} from "react-icons/fa";
import {
  MdVerified,
  MdStars,
  MdTrendingUp,
  MdHighQuality,
} from "react-icons/md";
import {
  BsStars,
  BsLightning,
  BsDiamond,
  BsShieldCheck,
  BsHeart,
  BsHeartFill,
} from "react-icons/bs";

const reviews = [
  {
    image: "/images/Asanka.png",
    name: "Asanka Perera",
    location: "Colombo",
    rating: 5,
    review:
      "Outstanding service and premium quality products! Tech Spot exceeded my expectations with their professional approach and genuine care for customers.",
    product: "iPhone 15 Pro Max",
    date: "2 weeks ago",
    verified: true,
    badge: "Top Reviewer",
  },
  {
    image: "/images/Aadham.png",
    name: "Aadham Silva",
    location: "Kandy",
    rating: 5,
    review:
      "Incredible experience from start to finish. The team's expertise and attention to detail made my purchase seamless and enjoyable.",
    product: "Samsung Galaxy S24 Ultra",
    date: "1 month ago",
    verified: true,
    badge: "Verified Purchase",
  },
  {
    image: "/images/Achintha.png",
    name: "Achintha Fernando",
    location: "Galle",
    rating: 5,
    review:
      "Tech Spot's customer service is unmatched. They went above and beyond to ensure I got exactly what I needed. Highly recommended!",
    product: "OnePlus 12",
    date: "3 weeks ago",
    verified: true,
    badge: "Premium Customer",
  },
  {
    image: "/images/Naveen.png",
    name: "Naveen Wickramasinghe",
    location: "Negombo",
    rating: 5,
    review:
      "Professional, reliable, and trustworthy. Tech Spot has become my go-to destination for all mobile technology needs.",
    product: "Google Pixel 8 Pro",
    date: "1 week ago",
    verified: true,
    badge: "Loyal Customer",
  },
  {
    image: "/images/Thilina.png",
    name: "Thilina Rajapaksa",
    location: "Matara",
    rating: 5,
    review:
      "Exceptional quality and service! The expertise of the Tech Spot team is evident in every interaction. Couldn't be happier!",
    product: "Xiaomi 14 Ultra",
    date: "2 months ago",
    verified: true,
    badge: "Tech Expert",
  },
  {
    image: "/images/Dinuka.png",
    name: "Dinuka Mendis",
    location: "Jaffna",
    rating: 5,
    review:
      "From consultation to delivery, everything was perfect. Tech Spot truly understands customer satisfaction and delivers excellence.",

    date: "5 days ago",
    verified: true,
    badge: "Happy Customer",
  },
  {
    image: "/images/Bathiya.png",
    name: "Bathiya Seneviratne",
    location: "Anuradhapura",
    rating: 5,
    review:
      "Outstanding service quality and genuine care for customers. Tech Spot has set a new standard for mobile technology retail.",
    product: "Samsung Galaxy Z Fold 5",
    date: "3 days ago",
    verified: true,
    badge: "VIP Customer",
  },
  {
    image: "/images/Chameera.png",
    name: "Chameera Gunasekara",
    location: "Kurunegala",
    rating: 5,
    review:
      "Premium experience with unbeatable service. Tech Spot's attention to detail and customer care is truly remarkable!",
    product: "Nothing Phone 2",
    date: "1 week ago",
    verified: true,
    badge: "Satisfied Customer",
  },
];

const CustomerReviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [liked, setLiked] = useState(new Set());
  const [currentReview, setCurrentReview] = useState(reviews[0]);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Update current review when active index changes
  useEffect(() => {
    setCurrentReview(reviews[activeIndex]);
  }, [activeIndex]);

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const element = document.getElementById("customer-reviews");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleLike = (index) => {
    setLiked((prev) => {
      const newLiked = new Set(prev);
      if (newLiked.has(index)) {
        newLiked.delete(index);
      } else {
        newLiked.add(index);
      }
      return newLiked;
    });
  };

  const getBadgeColor = (badge) => {
    const colors = {
      "Top Reviewer": "from-yellow-500 to-orange-500",
      "Verified Purchase": "from-green-500 to-emerald-500",
      "Premium Customer": "from-purple-500 to-indigo-500",
      "Loyal Customer": "from-blue-500 to-cyan-500",
      "Tech Expert": "from-red-500 to-pink-500",
      "Happy Customer": "from-green-400 to-teal-500",
      "VIP Customer": "from-yellow-400 to-amber-500",
      "Satisfied Customer": "from-blue-400 to-purple-500",
    };
    return colors[badge] || "from-gray-500 to-gray-600";
  };

  const getBadgeIcon = (badge) => {
    const icons = {
      "Top Reviewer": <FaAward className="text-sm" />,
      "Verified Purchase": <MdVerified className="text-sm" />,
      "Premium Customer": <BsDiamond className="text-sm" />,
      "Loyal Customer": <FaHeart className="text-sm" />,
      "Tech Expert": <BsLightning className="text-sm" />,
      "Happy Customer": <BsStars className="text-sm" />,
      "VIP Customer": <FaShieldAlt className="text-sm" />,
      "Satisfied Customer": <FaThumbsUp className="text-sm" />,
    };
    return icons[badge] || <FaStar className="text-sm" />;
  };

  return (
    <section
      id="customer-reviews"
      className="relative bg-gradient-to-b from-slate-950 via-gray-900 to-black text-gray-300 py-20 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <BsStars className="text-yellow-400 text-2xl" />
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent font-bold text-lg">
              CUSTOMER TESTIMONIALS
            </span>
            <BsStars className="text-yellow-400 text-2xl" />
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              What Our Customers
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Are Saying
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Real experiences from real customers who trust Tech Spot for their
            mobile technology needs
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center gap-8 mt-8"
          >
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-lg" />
                ))}
              </div>
              <span className="text-white font-bold text-lg">4.9/5</span>
            </div>
            <div className="w-px h-6 bg-gray-600" />
            <div className="text-gray-400">
              <span className="text-white font-bold">15,000+</span> Happy
              Customers
            </div>
            <div className="w-px h-6 bg-gray-600" />
            <div className="flex items-center gap-2">
              <MdVerified className="text-green-400" />
              <span className="text-gray-400">Verified Reviews</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Main Review Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Review Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="relative"
          >
            <div className="relative max-w-lg mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <img
                    src={currentReview.image}
                    alt={currentReview.name}
                    className="w-full h-auto max-h-[400px] object-contain rounded-3xl shadow-2xl"
                  />

                  {/* Image overlay with gradient border */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-3xl opacity-30 blur-lg" />

                  {/* Floating like button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleLike(activeIndex)}
                    className="absolute top-4 right-4 w-12 h-12 bg-black/50 backdrop-blur-xl rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    {liked.has(activeIndex) ? (
                      <BsHeartFill className="text-red-400 text-xl" />
                    ) : (
                      <BsHeart className="text-white text-xl" />
                    )}
                  </motion.button>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Review Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 1.0 }}
            className="space-y-6"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Customer Info */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      {currentReview.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {currentReview.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400">
                        {currentReview.location}
                      </span>
                      <div className="w-1 h-1 bg-gray-500 rounded-full" />
                      <span className="text-gray-400">
                        {currentReview.date}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-3">
                  <div className="flex text-yellow-400">
                    {[...Array(currentReview.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <FaStar className="text-lg" />
                      </motion.div>
                    ))}
                  </div>
                  <span className="text-white font-semibold">
                    {currentReview.rating}.0
                  </span>
                </div>

                {/* Review Text */}
                <div className="relative">
                  <FaQuoteLeft className="absolute -top-2 -left-2 text-blue-400 text-2xl opacity-30" />
                  <p className="text-lg text-gray-300 leading-relaxed px-6 italic">
                    {currentReview.review}
                  </p>
                  <FaQuoteRight className="absolute -bottom-2 -right-2 text-purple-400 text-2xl opacity-30" />
                </div>

                {/* Product & Badges */}
                <div className="flex flex-wrap items-center gap-3">
                  {/* <div className="bg-gradient-to-r from-gray-800 to-gray-700 px-4 py-2 rounded-full border border-gray-600">
                    <span className="text-gray-300 text-sm">
                      📱 {currentReview.product}
                    </span>
                  </div> */}

                  {currentReview.verified && (
                    <div className="flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 px-3 py-2 rounded-full border border-green-500/30">
                      <MdVerified className="text-green-400 text-sm" />
                      <span className="text-green-400 text-sm font-medium">
                        Verified
                      </span>
                    </div>
                  )}

                  <div
                    className={`flex items-center gap-2 bg-gradient-to-r ${getBadgeColor(
                      currentReview.badge
                    )}/20 px-3 py-2 rounded-full border border-white/20`}
                  >
                    {getBadgeIcon(currentReview.badge)}
                    <span className="text-white text-sm font-medium">
                      {currentReview.badge}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Navigation Dots */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="flex justify-center mt-12 gap-3"
        >
          {reviews.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 w-8"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </motion.div>

        {/* Thank You Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.4 }}
          className="text-center mt-16"
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="text-3xl lg:text-4xl font-bold"
            >
              Thank you,{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {currentReview.name.split(" ")[0]}
              </span>
              ! 🙏
            </motion.p>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerReviews;
