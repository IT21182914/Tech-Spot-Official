import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall, FiMessageSquare } from "react-icons/fi";

const buttons = [
  {
    icon: <FaWhatsapp className="text-white text-2xl" />,
    bg: "bg-green-500",
    hover: "hover:bg-green-600",
    label: "WhatsApp",
    link: "https://wa.me/94726048468",
  },
  {
    icon: <FiPhoneCall className="text-white text-2xl" />,
    bg: "bg-yellow-500",
    hover: "hover:bg-yellow-600",
    label: "Call",
    link: "tel:+94726048468",
  },
  {
    icon: <FiMessageSquare className="text-white text-2xl" />,
    bg: "bg-blue-500",
    hover: "hover:bg-blue-600",
    label: "Message",
    link: "sms:+94726048468",
  },
];

const FloatingContactButtons = () => {
  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-end space-y-3 z-50">
      {buttons.map((btn, index) => (
        <a
          key={index}
          href={btn.link}
          target={btn.link.startsWith("http") ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className={`group flex items-center justify-end w-12 hover:w-36 md:hover:w-40 transition-all duration-300 ${btn.bg} ${btn.hover} rounded-full shadow-lg overflow-hidden animate-[bounce_1.5s_ease-in-out_infinite]`}
        >
          <span className="whitespace-nowrap text-white text-sm font-semibold mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {btn.label}
          </span>
          <div className="p-3">{btn.icon}</div>
        </a>
      ))}
    </div>
  );
};

export default FloatingContactButtons;
