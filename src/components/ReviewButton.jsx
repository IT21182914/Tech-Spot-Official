import React from "react";

/* Gold-glow pill with subtle pulse */
const ReviewButton = ({ text, className = "" }) => (
  <a
    href="/testimonials"
    className={`relative inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-semibold text-black overflow-hidden group ${className}`}
  >
    <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-200 rounded-full blur-sm opacity-75 group-hover:opacity-90 animate-pulse" />
    <span className="absolute inset-0 rounded-full ring ring-transparent group-hover:ring-yellow-300 transition duration-300" />
    <span className="relative z-10 whitespace-nowrap drop-shadow-sm">
      {text}
    </span>
  </a>
);

export default ReviewButton;
