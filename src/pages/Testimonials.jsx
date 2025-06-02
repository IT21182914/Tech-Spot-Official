import React from "react";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { AiFillStar } from "react-icons/ai";
import "react-lazy-load-image-component/src/effects/blur.css";

const videoProofs = [
  {
    src: "/videos/Kawya iPhone 11.mp4",
    title: "Kawya – iPhone 11",
    meta: {
      name: "Kawya",
      proffession: "IT professional",
      location: "Gampaha",
      product: "iPhone 11",
      delivery: "Delivered within 2 days",
      note: "'Kawya highly recommended Tech Spot'",
      stars: 5,
    },
  },
  {
    src: "/videos/Sayuri iPhone 13.mp4",
    title: "Sayuri – iPhone 13",
    meta: {
      name: "Sayuri",
      proffession: "Officer at Shrangi-La",
      location: "Colombo",
      product: "iPhone 13",
      delivery: "Delivered within 1 day",
      note: "'Sayuri highly recommended Tech Spot'",
      stars: 5,
    },
  },
  {
    src: "/videos/Hashini iPhone 14 Pro Max.mp4",
    title: "Hashini – iPhone 14 Pro Max",
    meta: {
      name: "Hashini",
      proffession: "Full-time homemaker and mother",
      location: "Kandy",
      product: "iPhone 14 Pro Max",
      delivery: "Delivered within 1 day",
      note: "'Hashini highly recommended Tech Spot'",
      stars: 5,
    },
  },
  {
    src: "/videos/Asanka iPhone 13.mp4",
    title: "Asanka – iPhone 13",
    meta: {
      name: "Asanka",
      proffession: "Software Engineer",
      location: "Matara",
      product: "iPhone 13",
      delivery: "Delivered within 1 day",
      note: "'Asanka highly recommended Tech Spot'",
      stars: 5,
    },
  },
  {
    src: "/videos/Naveen iPhone 13.mp4",
    title: "Naveen – iPhone 13",
    meta: {
      name: "Naveen",
      proffession: "Software Engineer at GTN Technologies",
      location: "Hanwella",
      product: "iPhone 13",
      delivery: "Delivered within 1 day",
      note: "'Naveen highly recommended Tech Spot'",
      stars: 5,
    },
  },
];

const happyCustomers = [
  {
    src: "/images/HappyCustomers/Happy Customer iPhone 11.jpg",
    name: "Happy Customer",
    phone: "iPhone 11",
    note: "🎉 First iPhone purchase!",
  },
  {
    src: "/images/HappyCustomers/Happy Customer iPhone 13.jpg",
    name: "Happy Customer",
    phone: "iPhone 13",
    note: "Upgraded from Android",
  },
  {
    src: "/images/HappyCustomers/Happy Customer iPhone 14.jpg",
    name: "Happy Customer",
    phone: "iPhone 14",
    note: "Colour: Blue",
  },
  {
    src: "/images/HappyCustomers/Happy Customer Samsung Galaxy S24 Ultra 12GB 256GB.jpg",
    name: "Happy Customer",
    phone: "Galaxy S24 Ultra 12/256",
    note: "Flagship 🔥",
  },
  {
    src: "/images/HappyCustomers/Happy Customer Redmi 13 Pro Plus 8GB 256GB.jpg",
    name: "Happy Customer",
    phone: "Redmi 13 Pro Plus 8/256",
  },
  {
    src: "/images/HappyCustomers/Happy Customer Redmi 14C 8GB 256GB.jpg",
    name: "Happy Customer",
    phone: "Redmi 14C 8/256",
  },
  {
    src: "/images/HappyCustomers/Happy Customer Redmi A3 3GB 64GB.jpg",
    name: "Happy Customer",
    phone: "Redmi A3 3/64",
  },
  {
    src: "/images/HappyCustomers/Happy Customer Samsung Galaxy A06 4GB 64GB.jpg",
    name: "Happy Customer",
    phone: "Galaxy A06 4/64",
  },
  {
    src: "/images/HappyCustomers/Happy Customer Samsung Galaxy A15 5G 8GB 256GB.jpg",
    name: "Happy Customer",
    phone: "Galaxy A15 5G 8/256",
  },
  {
    src: "/images/HappyCustomers/Happy Customer Samsung Galaxy A35 5G 8GB 256GB.jpg",
    name: "Happy Customer",
    phone: "Galaxy A35 5G 8/256",
  },
  {
    src: "/images/HappyCustomers/Happy Customer3 Redmi A3 4GB 128GB.jpg",
    name: "Happy Customer",
    phone: "Redmi A3 4/128",
  },
  {
    src: "/images/HappyCustomers/Happy Customer4 Redmi 14C 8GB 256GB.jpg",
    name: "Happy Customer",
    phone: "Redmi 14C 8/256",
  },
];

const Testimonials = () => (
  <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 px-6">
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-yellow-300 text-4xl md:text-5xl font-extrabold text-center mb-14 drop-shadow"
    >
      පාරිභෝගිකයන් අපි ගැන කියන දේ
    </motion.h1>

    <section className="mb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {videoProofs.map(({ src, title, meta }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-gray-800 rounded-xl shadow-lg overflow-hidden"
          >
            <div className="flex justify-center bg-black">
              <video
                src={src}
                controls
                title={title}
                className="w-full max-w-xs sm:max-w-none sm:aspect-video object-contain"
              />
            </div>

            {Object.keys(meta || {}).length > 0 && (
              <div className="flex flex-col sm:flex-row sm:justify-between gap-6 px-6 py-5 bg-[#0f1929]">
                <div className="flex-1 space-y-1 text-sm md:text-base">
                  {meta.name && (
                    <p>
                      <span className="font-semibold text-yellow-400">
                        Name:
                      </span>{" "}
                      <span className="text-white">{meta.name}</span>
                    </p>
                  )}
                  {meta.proffession && (
                    <p>
                      <span className="font-semibold text-yellow-400">
                        Profession:
                      </span>{" "}
                      <span className="text-white">{meta.proffession}</span>
                    </p>
                  )}

                  {meta.location && (
                    <p>
                      <span className="font-semibold text-yellow-400">
                        Location:
                      </span>{" "}
                      <span className="text-white">{meta.location}</span>
                    </p>
                  )}
                  {meta.product && (
                    <p>
                      <span className="font-semibold text-yellow-400">
                        Product:
                      </span>{" "}
                      <span className="text-white">{meta.product}</span>
                    </p>
                  )}
                  {meta.delivery && (
                    <p>
                      <span className="font-semibold text-yellow-400">
                        Delivery:
                      </span>{" "}
                      <span className="text-white">{meta.delivery}</span>
                    </p>
                  )}
                </div>

                {(meta.note || meta.stars) && (
                  <div className="flex flex-col items-center sm:items-end text-sm md:text-base space-y-1">
                    {meta.note && (
                      <p className="font-semibold bg-gradient-to-r from-white via-yellow-300 to-yellow-200 bg-clip-text text-transparent text-center sm:text-right">
                        {meta.note}
                      </p>
                    )}
                    {meta.stars && (
                      <div className="flex gap-0.5">
                        {Array.from({ length: meta.stars }).map((_, s) => (
                          <AiFillStar
                            key={s}
                            className="text-yellow-400 text-lg"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>

    <section>
      <motion.h2
        className="text-3xl font-semibold text-center mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        🎊 Some of Happy Customers Visited Us
      </motion.h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto">
        {happyCustomers.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="relative rounded-xl overflow-hidden shadow-lg group"
          >
            <LazyLoadImage
              src={c.src}
              alt={c.phone}
              effect="blur"
              className="w-full aspect-[4/4] object-contain object-center bg-black transition-transform duration-300 group-hover:scale-105"
            />

            <div className="absolute inset-x-0 bottom-0 bg-black/70 backdrop-blur-sm p-3 text-xs sm:text-sm">
              <p className="font-semibold text-yellow-300">{c.name}</p>
              <p className="text-white">{c.phone}</p>
              {c.note && <p className="text-emerald-300 mt-0.5">{c.note}</p>}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default Testimonials;
