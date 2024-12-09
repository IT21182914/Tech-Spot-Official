import React from "react";

const Location = () => {
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=6.28268,81.2878`;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-12 px-4 lg:px-20">
      <h1 className="text-5xl font-bold fascinate-inline-regular mb-8 text-center lg:text-6xl">
        Find Us Here
      </h1>
      <p className="text-lg kanit-medium text-gray-400 mb-8 text-center lg:text-xl">
        Palliyawaththa Road, Tissamaharama, Sri Lanka.
      </p>
      <div className="w-full max-w-6xl rounded-lg overflow-hidden shadow-xl mb-10">
        <iframe
          title="Tech Spot Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.101572192873!2d81.28780007539078!3d6.282680221469045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae527e3b0d37a93%3A0x5d4c614e3b798c18!2sPalliyawaththa%20Rd%2C%20Tissamaharama%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1696958954389!5m2!1sen!2slk"
          className="w-full h-80 lg:h-[500px]"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-8 py-4 bg-blue-500 text-white font-semibold text-lg rounded-full hover:bg-blue-600 transition duration-300 shadow-lg"
      >
        {/* Up Arrow SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
        Start Directions
      </a>
    </div>
  );
};

export default Location;
