import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What services does Tech Spot offer?",
      answer:
        "We provide mobile phone repair services, mobile accessories, and professional support for all your tech needs.",
    },
    {
      question: "Where is Tech Spot located?",
      answer:
        "We are located on Palliyawaththa Road, Tissamaharama, Sri Lanka.",
    },
    {
      question: "What are your working hours?",
      answer: "We are open from 7:00 AM to 10:00 PM, Monday through Saturday.",
    },
    {
      question: "How can I contact Tech Spot?",
      answer:
        "You can contact us via WhatsApp, Facebook, or call us directly. Visit our Contact page for more details.",
    },
    {
      question: "Do you provide a warranty for repairs?",
      answer:
        "Yes, but the warranty period may vary depending on the type of repair. Contact us for more information.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          Frequently Asked Questions
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-12">
          Have questions? We’ve got answers! Find out everything you need to
          know about Tech Spot.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300 ${
              activeIndex === index ? "border-l-4 border-blue-500" : ""
            }`}
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg md:text-xl font-semibold">
                {faq.question}
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                className={`w-6 h-6 transform ${
                  activeIndex === index ? "rotate-180" : "rotate-0"
                } transition-transform duration-300`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {activeIndex === index && (
              <p className="text-gray-400 mt-4">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
