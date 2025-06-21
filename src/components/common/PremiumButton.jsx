// src/components/common/PremiumButton.jsx
import React from "react";
import { motion } from "framer-motion";
import { BsStars } from "react-icons/bs";

const PremiumButton = ({
  text,
  href,
  gradient = "from-yellow-400 via-amber-300 to-yellow-200",
  type = "premium",
  onClick,
  className = "",
  ...props
}) => {
  const buttonVariants = {
    premium: {
      gradient: "from-yellow-400 via-amber-300 to-yellow-200",
      ringColor: "ring-yellow-300",
      textColor: "text-black",
      icon: <BsStars className="relative z-10 mr-2 text-lg" />,
    },
    review: {
      gradient: "from-yellow-400 via-amber-300 to-yellow-200",
      ringColor: "ring-yellow-300",
      textColor: "text-black",
      icon: null,
    },
    terms: {
      gradient: "from-blue-400 via-blue-500 to-blue-600",
      ringColor: "ring-blue-300",
      textColor: "text-black",
      icon: null,
    },
  };

  const variant = buttonVariants[type] || buttonVariants.premium;
  const currentGradient = gradient || variant.gradient;

  const ButtonContent = () => (
    <>
      <span
        className={`absolute inset-0 bg-gradient-to-r ${currentGradient} ${
          type === "premium" ? "rounded-2xl" : "rounded-full"
        } filter blur-sm opacity-90 group-hover:opacity-100 animate-pulse`}
      />
      <span
        className={`absolute inset-0 ${
          type === "premium" ? "rounded-2xl" : "rounded-full"
        } ring-2 ring-transparent group-hover:${
          variant.ringColor
        } transition duration-300`}
      />
      {variant.icon}
      <span
        className={`relative z-10 drop-shadow-sm whitespace-nowrap ${variant.textColor}`}
      >
        {text}
      </span>
    </>
  );

  const baseClasses = `relative inline-flex items-center justify-center px-6 py-3 ${
    type === "premium" ? "rounded-2xl" : "rounded-full"
  } text-sm font-bold overflow-hidden group shadow-xl ${className}`;

  const motionProps = {
    whileHover: { scale: 1.05, y: -2 },
    whileTap: { scale: 0.98 },
    ...props,
  };

  if (href) {
    return (
      <motion.a href={href} className={baseClasses} {...motionProps}>
        <ButtonContent />
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} className={baseClasses} {...motionProps}>
      <ButtonContent />
    </motion.button>
  );
};

export default PremiumButton;
