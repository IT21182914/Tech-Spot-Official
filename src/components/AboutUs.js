import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTools,
  FaMobileAlt,
  FaMapMarkerAlt,
  FaStar,
  FaShieldAlt,
  FaHeart,
  FaUsers,
  FaClock,
  FaAward,
  FaRocket,
  FaGem,
  FaBolt,
  FaCheckCircle,
  FaArrowRight,
  FaQuoteLeft,
  FaQuoteRight,
  FaPlay,
  FaPhone,
  FaHandshake,
  FaLightbulb,
  FaEye,
  FaBullseye,
  FaGraduationCap,
  FaThumbsUp,
  FaMedal,
  FaCertificate,
  FaStore,
  FaHistory,
  FaFire,
} from "react-icons/fa";
import {
  MdVerified,
  MdSecurity,
  MdHighQuality,
  MdTrendingUp,
  MdStars,
  MdDiamond,
  MdLightbulb,
  MdHandshake,
  MdSupport,
  MdPeople,
  MdBusinessCenter,
  MdWorkspacePremium,
  MdTrendingDown,
  MdOutlineWorkspaces,
} from "react-icons/md";
import {
  BsStars,
  BsLightning,
  BsDiamond,
  BsShieldCheck,
  BsHeart,
  BsEye,
  BsTarget,
  BsTrophy,
  BsPeople,
  BsGraphUp,
  BsAward,
  BsCheckCircle,
  BsGear,
  BsHeadset,
  BsShop,
} from "react-icons/bs";
import { HiSparkles, HiLightningBolt } from "react-icons/hi";

const AboutUs = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const [stats, setStats] = useState({
    customers: 15000,
    experience: 5,
    repairs: 8500,
    rating: 4.9,
  });

  // Preload the image
  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = "/images/TechSpot.jpg";
    setIsVisible(true);
  }, []);

  // Animate stats on load
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setStats((prev) => ({
          ...prev,
          customers: prev.customers + Math.floor(Math.random() * 2) + 1,
        }));
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const features = [
    {
      icon: <FaTools className="text-3xl" />,
      title: "Expert Repair Services",
      description:
        "Professional device repairs with certified technicians and genuine parts",
      color: "from-blue-500 to-cyan-500",
      stats: "8,500+ Repairs",
    },
    {
      icon: <FaMobileAlt className="text-3xl" />,
      title: "Premium Accessories",
      description:
        "High-quality mobile accessories from trusted brands worldwide",
      color: "from-purple-500 to-pink-500",
      stats: "500+ Products",
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl" />,
      title: "Trusted Location",
      description:
        "Conveniently located in Tissamaharama with easy accessibility",
      color: "from-green-500 to-teal-500",
      stats: "5+ Years",
    },
    {
      icon: <FaStar className="text-3xl" />,
      title: "Customer Satisfaction",
      description: "4.9-star rating with thousands of happy customers",
      color: "from-yellow-500 to-orange-500",
      stats: "15,000+ Customers",
    },
  ];

  const values = [
    {
      icon: <MdHighQuality className="text-4xl" />,
      title: "Quality First",
      description:
        "We never compromise on quality. Every product and service meets our highest standards.",
      gradient: "from-blue-600 to-purple-600",
    },
    {
      icon: <MdHandshake className="text-4xl" />,
      title: "Trust & Integrity",
      description:
        "Building lasting relationships through honest business practices and transparent pricing.",
      gradient: "from-green-600 to-teal-600",
    },
    {
      icon: <MdLightbulb className="text-4xl" />,
      title: "Innovation",
      description:
        "Staying ahead with the latest technology trends and cutting-edge solutions.",
      gradient: "from-yellow-600 to-orange-600",
    },
    {
      icon: <FaHeart className="text-4xl" />,
      title: "Customer Care",
      description:
        "Your satisfaction is our priority. We go above and beyond for every customer.",
      gradient: "from-red-600 to-pink-600",
    },
  ];

  const achievements = [
    {
      icon: <BsTrophy className="text-2xl" />,
      title: "Best Mobile Shop 2024",
      subtitle: "Tissamaharama Business Awards",
    },
    {
      icon: <MdVerified className="text-2xl" />,
      title: "Certified Technicians",
      subtitle: "Industry-standard qualifications",
    },
    {
      icon: <BsShieldCheck className="text-2xl" />,
      title: "Warranty Guarantee",
      subtitle: "All repairs and products covered",
    },
    {
      icon: <BsStars className="text-2xl" />,
      title: "5-Star Service",
      subtitle: "Consistently excellent reviews",
    },
  ];

  const timeline = [
    {
      year: "2019",
      title: "Tech Spot Founded",
      description:
        "Started as a small mobile accessories shop with a vision to serve the community.",
      icon: <FaRocket className="text-xl" />,
    },
    {
      year: "2020",
      title: "Repair Services Launch",
      description:
        "Expanded to offer professional mobile device repair services.",
      icon: <FaTools className="text-xl" />,
    },
    {
      year: "2021",
      title: "Team Expansion",
      description:
        "Grew our team with certified technicians and customer service specialists.",
      icon: <FaUsers className="text-xl" />,
    },
    {
      year: "2022",
      title: "Premium Partnership",
      description:
        "Became authorized dealers for major smartphone and accessory brands.",
      icon: <FaAward className="text-xl" />,
    },
    {
      year: "2023",
      title: "Digital Innovation",
      description:
        "Launched online platform and modernized customer experience.",
      icon: <BsLightning className="text-xl" />,
    },
    {
      year: "2024",
      title: "15K+ Customers",
      description:
        "Reached milestone of serving over 15,000 satisfied customers.",
      icon: <FaHeart className="text-xl" />,
    },
    {
      year: "2025",
      title: "Tech Spot 2.0 Launch",
      description:
        "Launched our revolutionary Tech Spot 2.0 branch with enhanced facilities and premium services.",
      icon: <FaStore className="text-xl" />,
    },
  ];

  const teamMembers = [
    {
      name: "Dilan Shanuka",
      role: "Founder, Co-Founder & CEO",
      description:
        "Visionary leader with 5+ years in mobile technology industry & Software Engineer",
      image: "/images/team/asanka.jpg",
      gradient: "from-blue-600 to-purple-600",
      skills: [
        "Leadership",
        "Business Strategy",
        "Customer Relations",
        "Manager Skills",
        "Technical Expertise",
        "Marketing Skills",
        "Software Engineering",
      ],
    },
    {
      name: "Lakshan Madusha",
      role: "Co-Founder, COO & Lead Technician",
      description: "Expert in smartphone repairs with advanced certifications",
      image: "/images/team/dinuka.jpg",
      gradient: "from-green-600 to-teal-600",
      skills: [
        "Hardware Repair",
        "Software Repair",
        "Diagnostics",
        "Manager Skills",
        "Quality Control",
      ],
    },
    {
      name: "Ishan Rashmika",
      role: "Customer Service Manager",
      description: "Dedicated to ensuring exceptional customer experiences",
      image: "/images/team/thilina.jpg",
      gradient: "from-purple-600 to-pink-600",
      skills: ["Customer Support", "Communication", "Problem Solving"],
    },
    {
      name: "Sithara Virajini",
      role: "Sales Specialist",
      description: "Expert in mobile accessories and product recommendations",
      image: "/images/team/naveen.jpg",
      gradient: "from-orange-600 to-red-600",
      skills: ["Product Knowledge", "Sales", "Technical Consulting"],
    },
  ];

  const certifications = [
    {
      title: "Apple Authorized Service Provider",
      organization: "Apple Inc.",
      year: "2023",
      icon: <FaCertificate className="text-xl" />,
      color: "from-gray-600 to-gray-800",
    },
    {
      title: "Samsung Certified Repair Center",
      organization: "Samsung Electronics",
      year: "2022",
      icon: <MdVerified className="text-xl" />,
      color: "from-blue-600 to-indigo-600",
    },
    {
      title: "ISO 9001:2015 Quality Management",
      organization: "International Organization for Standardization",
      year: "2023",
      icon: <BsAward className="text-xl" />,
      color: "from-green-600 to-emerald-600",
    },
    {
      title: "Mobile Device Repair Certification",
      organization: "Technical Education Board",
      year: "2021",
      icon: <FaGraduationCap className="text-xl" />,
      color: "from-purple-600 to-indigo-600",
    },
  ];

  const whyChooseUs = [
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "Warranty Protection",
      description:
        "Comprehensive warranty on all repairs and products with full coverage guarantee",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: "Fast Service",
      description:
        "Most repairs completed within 1-2 hours with express service options available",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FaGem className="text-2xl" />,
      title: "Genuine Parts",
      description:
        "Only authentic and high-quality replacement parts from trusted suppliers",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <FaUsers className="text-2xl" />,
      title: "Expert Team",
      description:
        "Certified technicians with years of experience and continuous training",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <FaHandshake className="text-2xl" />,
      title: "Fair Pricing",
      description:
        "Transparent and competitive pricing with no hidden costs or surprises",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: <MdSupport className="text-2xl" />,
      title: "24/7 Support",
      description:
        "Round-the-clock customer support for urgent repairs and technical assistance",
      color: "from-teal-500 to-cyan-500",
    },
  ];

  return (
    <div className="relative bg-gradient-to-b from-slate-950 via-gray-900 to-black text-gray-300 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="min-h-screen flex items-center justify-center py-20 px-6"
        >
          <div className="max-w-7xl mx-auto text-center">
            {/* Animated Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="flex items-center justify-center gap-3 mb-8"
            >
              <BsStars className="text-yellow-400 text-2xl" />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent font-bold text-lg">
                ABOUT TECH SPOT
              </span>
              <BsStars className="text-yellow-400 text-2xl" />
            </motion.div>

            <TypeAnimation
              sequence={[
                "Welcome to Tech Spot!",
                2000,
                "Your Trusted Mobile Partner.",
                2000,
                "Where Innovation Meets Excellence.",
                2000,
                "Sri Lanka's Premier Tech Destination.",
                2000,
              ]}
              wrapper="h1"
              className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
              repeat={Infinity}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              At Tech Spot, we're passionate about delivering exceptional
              service, premium products, and reliable solutions to keep you
              connected to what matters most.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stats.customers.toLocaleString()}+
                </div>
                <div className="text-gray-400 font-medium">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                  {stats.experience}+
                </div>
                <div className="text-gray-400 font-medium">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {stats.repairs.toLocaleString()}+
                </div>
                <div className="text-gray-400 font-medium">Repairs Done</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2">
                  {stats.rating}★
                </div>
                <div className="text-gray-400 font-medium">Customer Rating</div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Story Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  {/* Loading placeholder */}
                  {!imageLoaded && (
                    <div className="w-full h-96 bg-gradient-to-br from-gray-800 to-gray-700 animate-pulse flex items-center justify-center">
                      <div className="flex items-center gap-3 text-gray-400">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full"
                        />
                        Loading...
                      </div>
                    </div>
                  )}

                  {/* Optimized image */}
                  <img
                    src="/images/TechSpot.jpg"
                    alt="Tech Spot Store"
                    className={`w-full h-auto object-cover transition-all duration-500 ${
                      imageLoaded
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-110 absolute inset-0"
                    }`}
                    loading="eager"
                    decoding="async"
                    fetchpriority="high"
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageLoaded(true)}
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-6 left-6">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                      <MdVerified />
                      Verified Business
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-30 blur-xl animate-pulse" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full opacity-30 blur-xl animate-pulse delay-1000" />
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-4xl lg:text-5xl font-black mb-6">
                    <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      Our Story
                    </span>
                  </h2>

                  <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                    <div className="relative">
                      <FaQuoteLeft className="absolute -top-2 -left-2 text-blue-400 text-xl opacity-30" />
                      <p className="pl-8">
                        Tech Spot began with a simple yet powerful vision: to
                        create a one-stop destination for all mobile technology
                        needs in Sri Lanka. What started as a small shop in
                        Tissamaharama has grown into a trusted technology
                        partner for thousands of customers.
                      </p>
                    </div>

                    <p>
                      Our journey is built on the foundation of quality,
                      innovation, and genuine care for our customers. From
                      premium mobile accessories to expert repair services,
                      we've consistently delivered excellence that exceeds
                      expectations.
                    </p>

                    <p>
                      Located in the heart of Tissamaharama, we pride ourselves
                      on being more than just a business – we're a part of the
                      community. Our team of certified technicians and customer
                      service specialists work tirelessly to ensure every
                      interaction is exceptional.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold rounded-2xl shadow-2xl flex items-center gap-3 justify-center transition-all duration-300 no-underline"
                  >
                    Contact Us
                    <FaArrowRight />
                  </motion.a>

                  <motion.a
                    href="/location"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-bold rounded-2xl flex items-center gap-3 justify-center hover:bg-white/20 transition-all duration-300 no-underline"
                  >
                    <FaMapMarkerAlt />
                    Visit Store
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-black mb-6">
                <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                  Meet Our Expert Team
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Dedicated professionals committed to delivering exceptional
                service and technical expertise
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-6 text-center hover:border-white/40 transition-all duration-500"
                >
                  {/* Avatar placeholder */}
                  <div
                    className={`w-24 h-24 bg-gradient-to-r ${member.gradient} rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-xl`}
                  >
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {member.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-black mb-6">
                <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                  Our Journey
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From humble beginnings to becoming Sri Lanka's trusted tech
                destination
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500"></div>

              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-black z-10"></div>

                  {/* Content */}
                  <div
                    className={`ml-20 md:ml-0 md:w-5/12 ${
                      index % 2 === 0 ? "md:text-right md:pr-16" : "md:pl-16"
                    }`}
                  >
                    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white">
                          {item.icon}
                        </div>
                        <span className="text-2xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-transparent to-black/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-black mb-6">
                <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                  Certifications & Awards
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Industry recognition and professional certifications that
                validate our expertise
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 p-6 text-center hover:border-white/40 transition-all duration-300"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${cert.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-white`}
                  >
                    {cert.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">
                    {cert.organization}
                  </p>
                  <span className="text-blue-400 text-sm font-semibold">
                    {cert.year}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-black mb-6">
                <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                  Our Achievements
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Recognition and milestones that reflect our commitment to
                excellence
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 p-6 text-center hover:border-white/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 text-white">
                    {achievement.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {achievement.subtitle}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Spot 2.0 Branch Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-xl rounded-full px-6 py-3 border border-white/20 mb-6">
                <FaStore className="text-purple-400" />
                <span className="text-purple-300 font-semibold">
                  New Branch
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black mb-6">
                <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                  Tech Spot 2.0
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience our revolutionary new branch with enhanced
                facilities, premium services, and cutting-edge technology
                solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* TechSpotBoard.jpg */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative group"
              >
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-xl border border-white/20 p-2 hover:border-white/40 transition-all duration-500">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src="/images/TechSpotBoard.jpg"
                      alt="Tech Spot 2.0 Board"
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Badge */}
                  <div className="absolute top-6 left-6">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                      <FaFire />
                      New Branch
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Modern Facilities
                  </h3>
                  <p className="text-gray-400">
                    State-of-the-art infrastructure and premium customer
                    experience
                  </p>
                </div>
              </motion.div>

              {/* TechSpot2.jpg */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative group"
              >
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-xl border border-white/20 p-2 hover:border-white/40 transition-all duration-500">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src="/images/TechSpot2.jpg"
                      alt="Tech Spot 2.0 Interior"
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Badge */}
                  <div className="absolute top-6 left-6">
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                      <BsStars />
                      Premium
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Enhanced Experience
                  </h3>
                  <p className="text-gray-400">
                    Premium interiors and advanced service capabilities
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-16"
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-8 lg:p-12">
                <div className="text-center mb-10">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    What Makes Tech Spot 2.0 Special
                  </h3>
                  <p className="text-gray-400 max-w-2xl mx-auto">
                    Our new branch represents the future of mobile technology
                    retail and service
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <MdWorkspacePremium className="text-white text-2xl" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      Premium Setup
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Modern interiors with premium finishes and comfortable
                      customer areas
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <BsGear className="text-white text-2xl" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      Advanced Tech
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Latest diagnostic equipment and repair tools for superior
                      service quality
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <BsHeadset className="text-white text-2xl" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      Expert Support
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Dedicated customer service team with specialized technical
                      expertise
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Vision and Mission Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-3xl border border-white/20 p-8 lg:p-12 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                      <BsEye className="text-white text-2xl" />
                    </div>
                    <h3 className="text-3xl font-black text-white">
                      Our Vision
                    </h3>
                  </div>

                  <div className="relative">
                    <FaQuoteLeft className="absolute -top-2 -left-2 text-blue-400 text-xl opacity-30" />
                    <p className="text-gray-300 text-lg leading-relaxed pl-8">
                      To become the leading provider of mobile technology
                      solutions in Sri Lanka, recognized for our innovation,
                      quality, and unwavering commitment to customer
                      satisfaction. We envision a future where technology
                      seamlessly enhances every aspect of our customers' lives.
                    </p>
                    <FaQuoteRight className="absolute -bottom-2 -right-2 text-purple-400 text-xl opacity-30" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 backdrop-blur-xl rounded-3xl border border-white/20 p-8 lg:p-12 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl flex items-center justify-center">
                      <FaBullseye className="text-white text-2xl" />
                    </div>
                    <h3 className="text-3xl font-black text-white">
                      Our Mission
                    </h3>
                  </div>

                  <div className="relative">
                    <FaQuoteLeft className="absolute -top-2 -left-2 text-green-400 text-xl opacity-30" />
                    <p className="text-gray-300 text-lg leading-relaxed pl-8">
                      To deliver exceptional customer service, premium quality
                      products, and reliable repair solutions that enhance our
                      customers' digital experiences. We are committed to
                      building lasting relationships through trust, innovation,
                      and genuine care for our community.
                    </p>
                    <FaQuoteRight className="absolute -bottom-2 -right-2 text-teal-400 text-xl opacity-30" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-transparent to-black">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-12 lg:p-16"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <BsStars className="text-yellow-400 text-2xl" />
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent font-bold text-lg">
                  JOIN OUR JOURNEY
                </span>
                <BsStars className="text-yellow-400 text-2xl" />
              </div>

              <h2 className="text-4xl lg:text-5xl font-black mb-6">
                <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                  Ready to Experience
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Tech Spot Excellence?
                </span>
              </h2>

              <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
                Visit our store in Tissamaharama or get in touch with our team
                to discover how we can help with all your mobile technology
                needs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/location"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold rounded-2xl shadow-2xl flex items-center gap-3 justify-center transition-all duration-300 no-underline"
                >
                  <FaMapMarkerAlt className="text-lg" />
                  Visit Our Store
                </motion.a>

                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-bold rounded-2xl flex items-center gap-3 justify-center hover:bg-white/20 transition-all duration-300 no-underline"
                >
                  <FaArrowRight className="text-lg" />
                  Get In Touch
                </motion.a>

                <motion.a
                  href="/smartphones"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-500 hover:to-teal-500 text-white font-bold rounded-2xl shadow-2xl flex items-center gap-3 justify-center transition-all duration-300 no-underline"
                >
                  <FaMobileAlt className="text-lg" />
                  Shop Now
                </motion.a>
              </div>

              {/* Contact info */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8 pt-8 border-t border-white/20">
                <div className="flex items-center gap-3 text-gray-400">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <FaClock className="text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-white">Open Daily</div>
                    <div className="text-sm">8:00 AM - 8:00 PM</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-400">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <FaMapMarkerAlt className="text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-white">
                      Tissamaharama
                    </div>
                    <div className="text-sm">Palliyawaththa Road</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-400">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <FaStar className="text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-white">4.9★ Rating</div>
                    <div className="text-sm">15,000+ Reviews</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
