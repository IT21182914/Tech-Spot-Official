// src/components/common/CopyToast.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdCheckCircle, MdContentCopy, MdClose } from "react-icons/md";
import { FaWhatsapp, FaClipboard } from "react-icons/fa";
import { HiOutlineSparkles, HiOutlineLightningBolt } from "react-icons/hi";

const CopyToast = ({
  isVisible,
  message,
  onClose,
  type = "copy", // "copy" | "whatsapp" | "success" | "info"
  autoClose = 3000,
  position = "top", // "top" | "bottom" | "center"
}) => {
  const [isClosing, setIsClosing] = React.useState(false);

  // Auto close functionality
  React.useEffect(() => {
    if (isVisible && autoClose > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, autoClose);
      return () => clearTimeout(timer);
    }
  }, [isVisible, autoClose]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300);
  };

  const getToastConfig = () => {
    switch (type) {
      case "copy":
        return {
          icon: <FaClipboard className="text-lg sm:text-xl" />,
          gradient: "from-blue-500 to-blue-600",
          borderColor: "border-blue-300",
          bgColor: "bg-blue-500",
          iconBg: "bg-blue-400/20",
        };
      case "whatsapp":
        return {
          icon: <FaWhatsapp className="text-lg sm:text-xl" />,
          gradient: "from-green-500 to-emerald-600",
          borderColor: "border-green-300",
          bgColor: "bg-green-500",
          iconBg: "bg-green-400/20",
        };
      case "success":
        return {
          icon: <MdCheckCircle className="text-lg sm:text-xl" />,
          gradient: "from-emerald-500 to-green-600",
          borderColor: "border-emerald-300",
          bgColor: "bg-emerald-500",
          iconBg: "bg-emerald-400/20",
        };
      default:
        return {
          icon: <HiOutlineSparkles className="text-lg sm:text-xl" />,
          gradient: "from-purple-500 to-pink-600",
          borderColor: "border-purple-300",
          bgColor: "bg-purple-500",
          iconBg: "bg-purple-400/20",
        };
    }
  };

  const config = getToastConfig();

  const getPositionClasses = () => {
    switch (position) {
      case "bottom":
        return "bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2";
      case "center":
        return "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2";
      default:
        return "top-4 sm:top-8 left-1/2 transform -translate-x-1/2";
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
            y: position === "bottom" ? 20 : -20,
            x: "-50%",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            x: "-50%",
          }}
          exit={{
            opacity: 0,
            scale: 0.9,
            y: position === "bottom" ? 20 : -20,
            x: "-50%",
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
            duration: 0.4,
          }}
          className={`fixed ${getPositionClasses()} z-[9999] px-4 max-w-xs sm:max-w-md`}
        >
          <div
            className={`relative bg-gradient-to-r ${config.gradient} text-white rounded-2xl shadow-2xl ${config.borderColor} border-2 overflow-hidden`}
          >
            {/* Animated Background Pattern */}
            <motion.div
              className="absolute inset-0 opacity-10"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                background:
                  "linear-gradient(45deg, transparent 30%, white 50%, transparent 70%)",
                backgroundSize: "200% 100%",
              }}
            />

            {/* Content */}
            <div className="relative z-10 p-4 sm:p-5">
              <div className="flex items-start gap-3">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: 0.1,
                  }}
                  className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 ${config.iconBg} rounded-xl flex items-center justify-center backdrop-blur-sm`}
                >
                  {config.icon}
                </motion.div>

                {/* Message */}
                <div className="flex-1 min-w-0 pt-1">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-1"
                  >
                    <p className="font-semibold text-sm sm:text-base text-white/95">
                      {message.split("\n")[0]}
                    </p>
                    {message.includes("\n") && (
                      <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                        {message.split("\n").slice(1).join("\n")}
                      </p>
                    )}
                  </motion.div>
                </div>

                {/* Close Button */}
                <motion.button
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  onClick={handleClose}
                  className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors duration-200 backdrop-blur-sm"
                >
                  <MdClose className="text-sm sm:text-base" />
                </motion.button>
              </div>

              {/* Progress Bar (if autoClose is enabled) */}
              {autoClose > 0 && (
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-white/30 rounded-full"
                  initial={{ width: "100%" }}
                  animate={{ width: "0%" }}
                  transition={{
                    duration: autoClose / 1000,
                    ease: "linear",
                  }}
                />
              )}
            </div>

            {/* Glow Effect */}
            <motion.div
              className={`absolute inset-0 ${config.bgColor} opacity-20 blur-xl`}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.1, 0.2],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Enhanced Shadow */}
          <div
            className={`absolute inset-0 ${config.bgColor} opacity-20 blur-2xl scale-110 -z-10`}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CopyToast;
