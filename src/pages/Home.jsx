import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaStar,
  FaShoppingCart,
  FaHeart,
  FaEye,
  FaFire,
  FaBolt,
  FaGem,
  FaShieldAlt,
  FaTrophy,
  FaRocket,
  FaArrowRight,
  FaPlay,
  FaHeadphones,
  FaMobileAlt,
  FaLaptop,
} from "react-icons/fa";
import {
  MdVerified,
  MdLocalShipping,
  MdSecurity,
  MdTrendingUp,
  MdStars,
  MdFlashOn,
} from "react-icons/md";
import {
  BsStars,
  BsLightning,
  BsDiamond,
  BsShieldCheck,
  BsHeart,
  BsHeartFill,
  BsEye,
  BsCart3,
} from "react-icons/bs";
import { HiSparkles, HiLightningBolt } from "react-icons/hi";

// Enhanced products data with more details
const products = [
  {
    id: 1,
    name: "Premium Phone Case",
    price: "LKR 850.00",
    originalPrice: "LKR 1,200.00",
    image:
      "https://cdn.pixabay.com/photo/2017/08/01/00/40/mobile-2562332_1280.jpg",
    rating: 4.5,
    reviews: 124,
    category: "Accessories",
    badge: "Best Seller",
    discount: 29,
    features: ["Drop Protection", "Wireless Charging", "Premium Materials"],
    inStock: true,
    trending: true,
  },
  {
    id: 2,
    name: "Fast Charger 65W",
    price: "LKR 1,890.00",
    originalPrice: "LKR 2,500.00",
    image:
      "https://cdn.pixabay.com/photo/2016/12/08/15/40/power-supply-unit-1892002_640.jpg",
    rating: 4.3,
    reviews: 89,
    category: "Chargers",
    badge: "Fast Charging",
    discount: 24,
    features: ["65W Power", "USB-C", "Multiple Devices"],
    inStock: true,
    trending: false,
  },
  {
    id: 3,
    name: "iPhone 15 Pro Max",
    price: "LKR 425,000.00",
    originalPrice: "LKR 450,000.00",
    image:
      "https://cdn.pixabay.com/photo/2020/11/18/13/51/iphone-12-5755365_640.jpg",
    rating: 4.9,
    reviews: 312,
    category: "Smartphones",
    badge: "Premium",
    discount: 6,
    features: ["A17 Pro Chip", "Pro Camera", "Titanium Design"],
    inStock: true,
    trending: true,
  },
  {
    id: 4,
    name: "Samsung Galaxy S24 Ultra",
    price: "LKR 385,000.00",
    originalPrice: "LKR 420,000.00",
    image:
      "https://cdn.pixabay.com/photo/2022/03/12/09/23/smartphone-7063761_640.jpg",
    rating: 4.8,
    reviews: 267,
    category: "Smartphones",
    badge: "AI Powered",
    discount: 8,
    features: ["S Pen", "200MP Camera", "AI Features"],
    inStock: true,
    trending: true,
  },
  {
    id: 5,
    name: "AirPods Pro 3",
    price: "LKR 45,000.00",
    originalPrice: "LKR 52,000.00",
    image:
      "https://cdn.pixabay.com/photo/2021/06/26/10/44/airpods-6365870_640.jpg",
    rating: 4.6,
    reviews: 198,
    category: "Audio",
    badge: "Noise Cancelling",
    discount: 13,
    features: ["Active ANC", "Spatial Audio", "Wireless Charging"],
    inStock: true,
    trending: false,
  },
  {
    id: 6,
    name: "Premium Bluetooth Speaker",
    price: "LKR 18,500.00",
    originalPrice: "LKR 24,000.00",
    image:
      "https://cdn.pixabay.com/photo/2021/07/27/15/16/speaker-6497177_640.jpg",
    rating: 4.7,
    reviews: 156,
    category: "Audio",
    badge: "Waterproof",
    discount: 23,
    features: ["360° Sound", "20H Battery", "IPX7 Rating"],
    inStock: true,
    trending: false,
  },
  {
    id: 7,
    name: "Power Bank 30,000mAh",
    price: "LKR 8,900.00",
    originalPrice: "LKR 12,000.00",
    image:
      "https://cdn.pixabay.com/photo/2015/03/27/14/44/promotional-products-694794_640.jpg",
    rating: 4.4,
    reviews: 203,
    category: "Power",
    badge: "High Capacity",
    discount: 26,
    features: ["30,000mAh", "Fast Charging", "Multiple Ports"],
    inStock: true,
    trending: false,
  },
  {
    id: 8,
    name: "Apple Watch Series 9",
    price: "LKR 95,000.00",
    originalPrice: "LKR 110,000.00",
    image:
      "https://cdn.pixabay.com/photo/2022/04/15/15/09/smart-watch-7134697_640.jpg",
    rating: 4.7,
    reviews: 187,
    category: "Wearables",
    badge: "Health Focused",
    discount: 14,
    features: ["Health Monitoring", "Always-On Display", "Water Resistant"],
    inStock: true,
    trending: true,
  },
  {
    id: 9,
    name: "Gaming Headset Pro",
    price: "LKR 15,500.00",
    originalPrice: "LKR 19,000.00",
    image:
      "https://cdn.pixabay.com/photo/2017/03/05/14/19/headphone-2118725_640.jpg",
    rating: 4.8,
    reviews: 142,
    category: "Gaming",
    badge: "Pro Gaming",
    discount: 18,
    features: ["7.1 Surround", "RGB Lighting", "Comfortable Design"],
    inStock: true,
    trending: false,
  },
  {
    id: 10,
    name: "Adjustable Phone Stand",
    price: "LKR 2,200.00",
    originalPrice: "LKR 3,000.00",
    image: "https://m.media-amazon.com/images/I/61srjyM7TFL._AC_SL1500_.jpg",
    rating: 4.2,
    reviews: 95,
    category: "Accessories",
    badge: "Ergonomic",
    discount: 27,
    features: ["Adjustable Angle", "Foldable", "Universal Fit"],
    inStock: true,
    trending: false,
  },
];

// Hero Section Component
const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const heroSlides = [
    {
      title: "Premium Mobile Technology",
      subtitle: "Discover the Future",
      description:
        "Experience cutting-edge smartphones and accessories with unmatched quality and innovation.",
      image:
        "https://cdn.pixabay.com/photo/2020/11/18/13/51/iphone-12-5755365_640.jpg",
      gradient: "from-blue-600 via-purple-600 to-cyan-500",
      action: "Shop Now",
      link: "/smartphones",
    },
    {
      title: "Expert Repair Services",
      subtitle: "Professional Care",
      description:
        "Trust our certified technicians for all your device repair and maintenance needs.",
      image:
        "https://cdn.pixabay.com/photo/2023/10/09/14/11/work-8304180_1280.jpg",
      gradient: "from-green-600 via-emerald-600 to-teal-500",
      action: "Book Service",
      link: "/repair",
    },
    {
      title: "Exclusive Deals",
      subtitle: "Limited Time Offers",
      description:
        "Don't miss out on our spectacular deals and exclusive discounts on premium products.",
      image:
        "https://cdn.pixabay.com/photo/2021/06/26/10/44/airpods-6365870_640.jpg",
      gradient: "from-red-600 via-pink-600 to-rose-500",
      action: "View Deals",
      link: "/shop",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen bg-gradient-to-b from-slate-950 via-gray-900 to-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/30 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-3 mb-6 justify-center lg:justify-start"
                  >
                    <BsStars className="text-yellow-400 text-xl" />
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent font-bold">
                      {heroSlides[currentSlide].subtitle}
                    </span>
                    <BsStars className="text-yellow-400 text-xl" />
                  </motion.div>

                  <h1 className="text-5xl lg:text-7xl font-black mb-6">
                    <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                      {heroSlides[currentSlide].title}
                    </span>
                  </h1>

                  <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                    {heroSlides[currentSlide].description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <motion.a
                      href={heroSlides[currentSlide].link}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-8 py-4 bg-gradient-to-r ${heroSlides[currentSlide].gradient} text-white font-bold rounded-2xl shadow-2xl flex items-center gap-3 justify-center transition-all duration-300 no-underline`}
                    >
                      {heroSlides[currentSlide].action}
                      <FaArrowRight className="text-lg" />
                    </motion.a>

                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-bold rounded-2xl flex items-center gap-3 justify-center hover:bg-white/20 transition-all duration-300"
                    >
                      <FaPlay className="text-lg" />
                      Watch Demo
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                  transition={{ duration: 0.6 }}
                  className="relative max-w-lg mx-auto"
                >
                  <img
                    src={heroSlides[currentSlide].image}
                    alt="Hero Product"
                    className="w-full h-auto rounded-3xl shadow-2xl"
                  />
                  <div
                    className={`absolute -inset-4 bg-gradient-to-r ${heroSlides[currentSlide].gradient} rounded-3xl opacity-30 blur-xl`}
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
        {heroSlides.map((_, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-gradient-to-r from-blue-500 to-purple-500 w-8"
                : "bg-gray-600 hover:bg-gray-500"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

// Product Card Component
const ProductCard = ({ product, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  const getBadgeColor = (badge) => {
    const colors = {
      "Best Seller": "from-yellow-500 to-orange-500",
      "Fast Charging": "from-green-500 to-emerald-500",
      Premium: "from-purple-500 to-indigo-500",
      "AI Powered": "from-blue-500 to-cyan-500",
      "Noise Cancelling": "from-red-500 to-pink-500",
      Waterproof: "from-teal-500 to-cyan-500",
      "High Capacity": "from-orange-500 to-red-500",
      "Health Focused": "from-green-400 to-teal-500",
      "Pro Gaming": "from-purple-600 to-pink-600",
      Ergonomic: "from-gray-500 to-gray-700",
    };
    return colors[badge] || "from-gray-500 to-gray-600";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden hover:border-white/40 transition-all duration-500"
    >
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-500"
          animate={{ scale: isHovered ? 1.1 : 1 }}
        />

        {/* Overlay Actions */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
              >
                <BsEye className="text-xl" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-blue-500/80 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-blue-600/80 transition-all duration-300"
              >
                <BsCart3 className="text-xl" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.discount > 0 && (
            <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
              -{product.discount}%
            </div>
          )}
          <div
            className={`bg-gradient-to-r ${getBadgeColor(
              product.badge
            )} text-white px-3 py-1 rounded-full text-xs font-bold`}
          >
            {product.badge}
          </div>
          {product.trending && (
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
              <FaFire className="text-xs" />
              Trending
            </div>
          )}
        </div>

        {/* Like Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-xl rounded-full flex items-center justify-center text-white transition-all duration-300"
        >
          {isLiked ? (
            <BsHeartFill className="text-red-400" />
          ) : (
            <BsHeart className="hover:text-red-400" />
          )}
        </motion.button>
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-4">
        {/* Category & Rating */}
        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-sm font-medium">
            {product.category}
          </span>
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-400 text-sm" />
            <span className="text-white font-semibold text-sm">
              {product.rating}
            </span>
            <span className="text-gray-400 text-xs">({product.reviews})</span>
          </div>
        </div>

        {/* Product Name */}
        <h3 className="text-xl font-bold text-white leading-tight">
          {product.name}
        </h3>

        {/* Features */}
        <div className="flex flex-wrap gap-1">
          {product.features.slice(0, 2).map((feature, idx) => (
            <span
              key={idx}
              className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Price */}
        <div className="flex items-center gap-3">
          <span className="text-2xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            {product.price}
          </span>
          {product.originalPrice && (
            <span className="text-gray-500 line-through text-sm">
              {product.originalPrice}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <motion.button
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
        >
          <FaShoppingCart className="text-lg" />
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
};

// Featured Products Section
const FeaturedProducts = ({ products }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Smartphones",
    "Audio",
    "Accessories",
    "Gaming",
    "Wearables",
  ];

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const element = document.getElementById("featured-products");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="featured-products"
      className="py-20 bg-gradient-to-b from-black via-slate-950 to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <BsStars className="text-yellow-400 text-2xl" />
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent font-bold text-lg">
              FEATURED PRODUCTS
            </span>
            <BsStars className="text-yellow-400 text-2xl" />
          </div>

          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Premium Collection
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Discover our handpicked selection of cutting-edge technology and
            premium accessories
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="/shop"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold rounded-2xl shadow-2xl flex items-center gap-3 mx-auto transition-all duration-300 no-underline w-fit"
          >
            View All Products
            <FaArrowRight className="text-lg" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

// Main Home Component
const Home = () => {
  return (
    <div className="relative">
      <HeroSection />
      <FeaturedProducts products={products} />
    </div>
  );
};

export default Home;
