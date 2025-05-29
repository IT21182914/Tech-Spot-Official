import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

const reviews = [
  { image: "/images/Asanka.png", name: "Asanka" },
  { image: "/images/Aadham.png", name: "Aadham" },
  { image: "/images/Achintha.png", name: "Achintha" },
  { image: "/images/Naveen.png", name: "Naveen" },
  { image: "/images/Thilina.png", name: "Thilina" },
  { image: "/images/Dinuka.png", name: "Dinuka" },
  { image: "/images/Bathiya.png", name: "Bathiya" },
  { image: "/images/Chameera.png", name: "Chameera" },
];

// Advanced 3D floating elements
const FloatingElements = () => {
  return (
    <>
      {/* Morphing background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse transform rotate-45"></div>
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-bl from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000 transform -rotate-45"></div>
        <div className="absolute -bottom-32 left-1/2 w-72 h-72 bg-gradient-to-tr from-emerald-400/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Animated geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Floating orbs with glow */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-cyan-400 rounded-full opacity-60 animate-bounce shadow-lg shadow-cyan-400/50"></div>
      <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400 rounded-full opacity-60 animate-bounce delay-500 shadow-lg shadow-purple-400/50"></div>
      <div className="absolute bottom-32 left-32 w-5 h-5 bg-emerald-400 rounded-full opacity-60 animate-bounce delay-1000 shadow-lg shadow-emerald-400/50"></div>
      <div className="absolute bottom-20 right-20 w-2 h-2 bg-pink-400 rounded-full opacity-60 animate-bounce delay-1500 shadow-lg shadow-pink-400/50"></div>
    </>
  );
};

// Futuristic star rating with micro-animations
const StarRating = () => {
  return (
    <div className="flex justify-center items-center gap-2 mb-6">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="relative group">
          <svg
            className="w-7 h-7 text-yellow-400 drop-shadow-lg transition-all duration-300 hover:scale-125 hover:rotate-12"
            style={{
              animationDelay: `${i * 0.1}s`,
              animation: `twinkle 2s ease-in-out infinite ${i * 0.2}s`,
            }}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          {/* Sparkle effect */}
          <div className="absolute inset-0 bg-yellow-300/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      ))}
    </div>
  );
};

// Ultra-modern 3D button component
const ModernButton = ({ children, onClick, className = "" }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      className={`
        relative group px-8 py-4 font-bold text-white rounded-2xl overflow-hidden
        bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600
        hover:from-cyan-400 hover:via-blue-400 hover:to-purple-500
        transform transition-all duration-300 hover:scale-105 hover:-translate-y-2
        shadow-2xl hover:shadow-cyan-500/25
        ${isPressed ? "scale-95" : ""}
        ${className}
      `}
    >
      {/* Animated background layer */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Ripple effect */}
      <div className="absolute inset-0 bg-white/10 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-700 ease-out"></div>

      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

      <span className="relative z-10 flex items-center gap-2">
        {children}
        <svg
          className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </span>
    </button>
  );
};

const CustomerReviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);
  const swiperRef = useRef(null);

  // Advanced intersection observer with threshold
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Enhanced mouse tracking for 3D effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePosition({ x, y });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
      return () => section.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  // Smart auto-pause with visual feedback
  const handleMouseEnter = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at ${50 + mousePosition.x * 20}% ${
          50 + mousePosition.y * 20
        }%, 
          rgba(6, 182, 212, 0.15) 0%, 
          rgba(147, 51, 234, 0.1) 25%,
          rgba(236, 72, 153, 0.05) 50%,
          transparent 70%),
          linear-gradient(135deg, 
          #0a0a0f 0%, 
          #1a1a2e 20%, 
          #16213e 40%, 
          #0f0f23 60%, 
          #050505 80%, 
          #000000 100%)
        `,
        transform: `translateY(${scrollY * 0.1}px)`, // Parallax effect
      }}
    >
      {/* Advanced floating elements */}
      <FloatingElements />

      {/* Dynamic mesh gradient overlay */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10"
          style={{
            transform: `translate(${mousePosition.x * 10}px, ${
              mousePosition.y * 10
            }px) rotate(${mousePosition.x * 5}deg)`,
          }}
        ></div>
      </div>

      <div
        className={`relative z-10 py-24 px-4 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        {/* Ultra-modern header with 3D text */}
        <div className="text-center mb-20">
          {/* Floating badge */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-xl rounded-full px-8 py-3 mb-8 border border-cyan-400/30 shadow-2xl">
            <div className="relative">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping opacity-30"></div>
            </div>
            <span className="text-cyan-300 text-sm font-medium tracking-wide">
              LIVE TESTIMONIALS
            </span>
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce"
                  style={{ animationDelay: `${i * 0.2}s` }}
                ></div>
              ))}
            </div>
          </div>

          {/* 3D gradient text with shadows */}
          <h2
            className="text-6xl md:text-8xl font-black mb-8 leading-tight"
            style={{
              background: `linear-gradient(135deg, 
                #00f5ff 0%, 
                #00d4ff 20%, 
                #0099ff 40%, 
                #6366f1 60%, 
                #8b5cf6 80%, 
                #d946ef 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 0 40px rgba(99, 102, 241, 0.5)",
              transform: `perspective(1000px) rotateX(${
                mousePosition.y * 10
              }deg) rotateY(${mousePosition.x * 10}deg)`,
            }}
          >
            What Our
            <br />
            <span className="relative">
              Customers Say
              {/* Animated underline */}
              <div className="absolute -bottom-4 left-0 w-full h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-60 animate-pulse"></div>
            </span>
          </h2>

          {/* Animated subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Real stories from our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-semibold">
              {" "}
              amazing community{" "}
            </span>
            of satisfied customers
          </p>

          {/* Dynamic stats with pulse animations */}
          <div className="flex flex-wrap justify-center gap-12 mt-12">
            {[
              {
                number: "10K+",
                label: "Happy Reviews",
                color: "from-cyan-400 to-blue-500",
              },
              {
                number: "4.98★",
                label: "Average Rating",
                color: "from-yellow-400 to-orange-500",
              },
              {
                number: "24/7",
                label: "Support",
                color: "from-emerald-400 to-teal-500",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}
                  style={{
                    animation: `float ${2 + index * 0.5}s ease-in-out infinite`,
                  }}
                >
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium tracking-wide">
                  {stat.label}
                </div>
                <div
                  className={`w-12 h-0.5 bg-gradient-to-r ${stat.color} mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Ultra-futuristic swiper container */}
        <div className="max-w-5xl mx-auto">
          <div
            className="relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${
                mousePosition.y * 2
              }deg) rotateY(${mousePosition.x * 2}deg)`,
            }}
          >
            {/* Holographic container */}
            <div className="relative bg-gradient-to-br from-white/5 via-cyan-500/5 to-purple-500/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 shadow-2xl">
              {/* Corner holo-effects */}
              <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-cyan-400/50 rounded-tl-3xl"></div>
              <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-purple-400/50 rounded-tr-3xl"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-emerald-400/50 rounded-bl-3xl"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-pink-400/50 rounded-br-3xl"></div>

              {/* Scanning line effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-3000 ease-in-out"></div>

              <Swiper
                ref={swiperRef}
                modules={[Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{
                  clickable: true,
                  bulletActiveClass:
                    "swiper-pagination-bullet-active !bg-gradient-to-r !from-cyan-400 !to-purple-500 !w-6 !h-6 !rounded-full",
                  bulletClass:
                    "swiper-pagination-bullet !bg-white/20 !w-4 !h-4 !mx-3 !rounded-full !transition-all !duration-300 hover:!bg-cyan-400/50",
                }}
                autoplay={{
                  delay: 4500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="!pb-20 rounded-3xl overflow-hidden"
              >
                {reviews.map((review, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex flex-col items-center">
                      {/* Enhanced star rating */}
                      <StarRating />

                      {/* Ultra-modern image container */}
                      <div className="relative group/image mb-10">
                        {/* Multi-layer glow effect */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-20 group-hover/image:opacity-40 transition-all duration-700 animate-pulse"></div>
                        <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-xl blur-lg opacity-30 group-hover/image:opacity-60 transition-all duration-500"></div>

                        {/* Holographic frame */}
                        <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-1 border border-white/20">
                          <img
                            src={review.image}
                            alt={review.name}
                            className="w-full max-w-[500px] max-h-[300px] object-contain rounded-lg shadow-2xl transition-all duration-700 group-hover/image:scale-105"
                            loading="lazy"
                          />

                          {/* Holographic overlay */}
                          <div className="absolute inset-1 bg-gradient-to-t from-cyan-500/10 via-transparent to-purple-500/10 rounded-lg opacity-0 group-hover/image:opacity-100 transition-opacity duration-500"></div>

                          {/* Scanning effect */}
                          <div
                            className="absolute inset-1 bg-gradient-to-b from-transparent via-white/20 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 rounded-lg"
                            style={{
                              animation: "scan 2s ease-in-out infinite",
                            }}
                          ></div>
                        </div>

                        {/* Floating verification badge with pulse */}
                        <div className="absolute -top-3 -right-3 group/badge">
                          <div className="relative">
                            <div className="absolute inset-0 bg-emerald-400 rounded-full blur-md opacity-60 animate-pulse"></div>
                            <div className="relative bg-gradient-to-r from-emerald-400 to-teal-500 text-white rounded-full p-3 shadow-xl group-hover/badge:scale-110 transition-transform duration-300">
                              <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Enhanced testimonial */}
                      <div className="text-center max-w-2xl">
                        <blockquote className="text-gray-200 text-xl md:text-2xl italic mb-6 leading-relaxed font-light">
                          "Tech Spot delivered
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-semibold">
                            {" "}
                            exceptional service{" "}
                          </span>
                          beyond my expectations! Absolutely recommend to
                          everyone."
                        </blockquote>

                        <div className="flex items-center justify-center gap-3 text-cyan-300">
                          <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <span className="text-lg font-semibold tracking-wide">
                            Verified Customer
                          </span>
                          <div className="flex gap-1">
                            {[...Array(3)].map((_, i) => (
                              <div
                                key={i}
                                className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
                                style={{ animationDelay: `${i * 0.3}s` }}
                              ></div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        {/* Futuristic thank you section */}
        <div
          className={`text-center mt-20 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="relative max-w-3xl mx-auto">
            {/* Holographic card */}
            <div className="relative bg-gradient-to-br from-cyan-500/10 via-purple-500/5 to-pink-500/10 backdrop-blur-2xl rounded-3xl p-12 border border-white/20">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-transparent to-purple-500/20 rounded-3xl animate-pulse"></div>
              </div>

              <div className="relative z-10">
                <p className="text-4xl md:text-5xl font-black mb-6">
                  Thank you,{" "}
                  <span
                    className="relative inline-block"
                    style={{
                      background: `linear-gradient(135deg, #00f5ff, #0099ff, #6366f1, #8b5cf6, #d946ef)`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      animation: "gradient-shift 3s ease-in-out infinite",
                    }}
                  >
                    {reviews[activeIndex]?.name}
                    {/* Animated exclamation with glow */}
                    <span className="text-cyan-400 animate-bounce inline-block ml-2">
                      !
                    </span>
                  </span>
                </p>

                <p className="text-gray-300 text-xl mb-8 leading-relaxed">
                  Your trust and feedback inspire us to reach
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-semibold">
                    {" "}
                    new heights{" "}
                  </span>
                  every single day
                </p>

                {/* Floating hearts animation */}
                <div className="flex justify-center gap-3 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-8 h-8 text-red-400 hover:text-red-300 transition-colors duration-300"
                      style={{
                        animation: `heartbeat 2s ease-in-out infinite ${
                          i * 0.2
                        }s`,
                        filter:
                          "drop-shadow(0 0 10px rgba(248, 113, 113, 0.5))",
                      }}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>

                {/* Ultra-modern CTA button */}
                <ModernButton>Share Your Story</ModernButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.1);
          }
        }

        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }

        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes heartbeat {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }
      `}</style>
    </section>
  );
};

export default CustomerReviews;
