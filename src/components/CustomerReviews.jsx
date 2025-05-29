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

// Floating animation component
const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated background shapes */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400/10 rounded-full animate-pulse"></div>
      <div
        className="absolute top-20 right-20 w-32 h-32 bg-purple-400/10 rounded-full animate-bounce"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-20 left-20 w-16 h-16 bg-pink-400/10 rounded-full animate-ping"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-10 right-10 w-24 h-24 bg-indigo-400/10 rounded-full animate-pulse"
        style={{ animationDelay: "0.5s" }}
      ></div>

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-blue-300/20 rounded-full animate-bounce"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

// Enhanced star rating component
const StarRating = () => {
  return (
    <div className="flex justify-center items-center gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-6 h-6 text-yellow-400 animate-pulse"
          style={{ animationDelay: `${i * 0.1}s` }}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const CustomerReviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const swiperRef = useRef(null);

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Mouse movement for subtle parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x: x - 0.5, y: y - 0.5 });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
      return () => section.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  // Auto-pause on hover
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
          radial-gradient(circle at ${50 + mousePosition.x * 5}% ${
          50 + mousePosition.y * 5
        }%, 
          rgba(59, 130, 246, 0.1) 0%, 
          transparent 50%),
          linear-gradient(135deg, 
          #0f0f23 0%, 
          #1a1a2e 25%, 
          #16213e 50%, 
          #0f0f23 75%, 
          #000000 100%)
        `,
      }}
    >
      {/* Floating background elements */}
      <FloatingElements />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/20" />

      <div
        className={`relative z-10 py-20 px-4 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* Enhanced header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-blue-400/30">
            <span className="text-blue-400 text-sm font-medium">
              Customer Testimonials
            </span>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
            What Our Customers Say
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Real experiences from satisfied customers who trust Tech Spot
          </p>

          {/* Customer stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            {[
              { number: "1000+", label: "Happy Reviews" },
              { number: "4.9★", label: "Average Rating" },
              { number: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Swiper Container */}
        <div className="max-w-4xl mx-auto">
          <div
            className="relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 shadow-2xl"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Decorative corner elements */}
            <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-blue-400/50 rounded-tl-lg"></div>
            <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-blue-400/50 rounded-tr-lg"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-blue-400/50 rounded-bl-lg"></div>
            <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-blue-400/50 rounded-br-lg"></div>

            <Swiper
              ref={swiperRef}
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{
                clickable: true,
                bulletActiveClass:
                  "swiper-pagination-bullet-active !bg-blue-400 !w-4 !h-4",
                bulletClass:
                  "swiper-pagination-bullet !bg-white/30 !w-3 !h-3 !mx-2",
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className="!pb-16 rounded-2xl overflow-hidden"
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col items-center">
                    {/* Star rating above image */}
                    <StarRating />

                    {/* Image container with modern effects */}
                    <div className="relative group mb-8">
                      {/* Animated border gradient */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

                      {/* Image with exact original sizing */}
                      <div className="relative">
                        <img
                          src={review.image}
                          alt={review.name}
                          className="w-full max-w-[500px] max-h-[300px] object-contain rounded-lg shadow-lg transition-all duration-500 group-hover:scale-105"
                          loading="lazy"
                        />

                        {/* Subtle overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 via-transparent to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      {/* Floating verification badge */}
                      <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full p-2 shadow-lg animate-bounce">
                        <svg
                          className="w-4 h-4"
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

                    {/* Customer feedback */}
                    <div className="text-center">
                      <blockquote className="text-gray-300 text-lg italic mb-4">
                        "Outstanding service and quality! Highly recommended."
                      </blockquote>
                      <div className="flex items-center justify-center gap-2 text-blue-300">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm font-medium">
                          Verified Customer
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Enhanced thank you section */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-2xl animate-pulse"></div>

            <div className="relative z-10">
              <p className="text-3xl md:text-4xl font-bold mb-4">
                Thank you,{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                  {reviews[activeIndex]?.name}
                </span>
                !
              </p>
              <p className="text-gray-300 text-lg">
                Your trust motivates us to deliver excellence every day
              </p>

              {/* Decorative hearts */}
              <div className="flex justify-center gap-2 mt-4">
                {[...Array(3)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-red-400 animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
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

              {/* Call to action */}
              <div className="mt-6">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl">
                  Share Your Experience
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/30 to-transparent"></div>
    </section>
  );
};

export default CustomerReviews;
