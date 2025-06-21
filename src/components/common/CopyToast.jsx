// src/components/common/CopyToast.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MdCheckCircle,
  MdContentCopy,
  MdClose,
  MdDone,
  MdInfo,
} from "react-icons/md";
import { FaWhatsapp, FaClipboard, FaCheck } from "react-icons/fa";
import {
  HiOutlineSparkles,
  HiOutlineLightningBolt,
  HiOutlineClipboardCheck,
} from "react-icons/hi";
import { BsCheckCircleFill, BsClipboard2Check } from "react-icons/bs";

const CopyToast = ({
  isVisible,
  message,
  onClose,
  type = "copy", // "copy" | "whatsapp" | "success" | "info"
  autoClose = 3500,
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
          icon: <BsClipboard2Check className="text-xl sm:text-2xl" />,
          gradient: "from-emerald-500 via-green-500 to-teal-500",
          borderColor: "border-emerald-300/50",
          bgColor: "bg-emerald-500",
          iconBg: "bg-white/20",
          shadowColor: "shadow-emerald-500/30",
          glowColor: "emerald-400",
        };
      case "whatsapp":
        return {
          icon: <FaWhatsapp className="text-xl sm:text-2xl" />,
          gradient: "from-green-500 via-emerald-500 to-green-600",
          borderColor: "border-green-300/50",
          bgColor: "bg-green-500",
          iconBg: "bg-white/20",
          shadowColor: "shadow-green-500/30",
          glowColor: "green-400",
        };
      case "success":
        return {
          icon: <BsCheckCircleFill className="text-xl sm:text-2xl" />,
          gradient: "from-emerald-400 via-green-500 to-emerald-600",
          borderColor: "border-emerald-200/60",
          bgColor: "bg-emerald-500",
          iconBg: "bg-white/25",
          shadowColor: "shadow-emerald-400/40",
          glowColor: "emerald-300",
        };
      default:
        return {
          icon: <MdInfo className="text-xl sm:text-2xl" />,
          gradient: "from-slate-500 via-gray-500 to-slate-600",
          borderColor: "border-slate-300/50",
          bgColor: "bg-slate-500",
          iconBg: "bg-white/20",
          shadowColor: "shadow-slate-500/30",
          glowColor: "slate-400",
        };
    }
  };

  const config = getToastConfig();

  const getPositionClasses = () => {
    switch (position) {
      case "bottom":
        return "bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2";
      case "center":
        return "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2";
      default:
        return "top-6 sm:top-8 left-1/2 transform -translate-x-1/2";
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.85,
            y: position === "bottom" ? 30 : -30,
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
            stiffness: 400,
            damping: 30,
            duration: 0.5,
          }}
          className={`fixed ${getPositionClasses()} z-[9999] px-4 max-w-sm sm:max-w-lg`}
        >
          <motion.div
            className={`relative bg-gradient-to-r ${config.gradient} text-white rounded-2xl sm:rounded-3xl ${config.shadowColor} shadow-2xl ${config.borderColor} border-2 overflow-hidden backdrop-blur-sm`}
            animate={{
              boxShadow: [
                `0 10px 25px -3px rgba(34, 197, 94, 0.3), 0 4px 6px -2px rgba(34, 197, 94, 0.05)`,
                `0 15px 35px -3px rgba(34, 197, 94, 0.4), 0 6px 8px -2px rgba(34, 197, 94, 0.1)`,
                `0 10px 25px -3px rgba(34, 197, 94, 0.3), 0 4px 6px -2px rgba(34, 197, 94, 0.05)`,
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Professional Background Pattern */}
            <motion.div
              className="absolute inset-0 opacity-10"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                background: `
                  radial-gradient(circle at 20% 50%, white 2px, transparent 2px),
                  radial-gradient(circle at 80% 50%, white 2px, transparent 2px),
                  linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)
                `,
                backgroundSize: "40px 40px, 40px 40px, 200% 200%",
              }}
            />

            {/* Content */}
            <div className="relative z-10 p-5 sm:p-6">
              <div className="flex items-start gap-4">
                {/* Professional Icon Container */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: 0.1,
                  }}
                  className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 ${config.iconBg} rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/20 shadow-lg`}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  >
                    {config.icon}
                  </motion.div>
                </motion.div>

                {/* Message Content */}
                <div className="flex-1 min-w-0 pt-1">
                  <motion.div
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25, duration: 0.4 }}
                    className="space-y-2"
                  >
                    <motion.p
                      className="font-bold text-base sm:text-lg text-white drop-shadow-sm"
                      animate={{
                        textShadow: [
                          "0 1px 3px rgba(0,0,0,0.3)",
                          "0 2px 6px rgba(0,0,0,0.4)",
                          "0 1px 3px rgba(0,0,0,0.3)",
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {message.split("\n")[0]}
                    </motion.p>
                    {message.includes("\n") && (
                      <motion.p
                        className="text-sm sm:text-base text-white/90 leading-relaxed font-medium"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        {message.split("\n").slice(1).join("\n")}
                      </motion.p>
                    )}
                  </motion.div>
                </div>

                {/* Professional Close Button */}
                <motion.button
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  onClick={handleClose}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(255,255,255,0.25)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-white/15 hover:bg-white/25 rounded-xl flex items-center justify-center transition-all duration-200 backdrop-blur-md border border-white/20 shadow-sm"
                >
                  <MdClose className="text-base sm:text-lg font-bold" />
                </motion.button>
              </div>

              {/* Professional Progress Bar */}
              {autoClose > 0 && (
                <div className="mt-4 relative">
                  <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-white/80 to-white/60 rounded-full shadow-sm"
                      initial={{ width: "100%" }}
                      animate={{ width: "0%" }}
                      transition={{
                        duration: autoClose / 1000,
                        ease: "linear",
                      }}
                    />
                  </div>
                  {/* Progress Glow */}
                  <motion.div
                    className="absolute top-0 left-0 h-1 w-8 bg-white/60 rounded-full blur-sm"
                    animate={{
                      x: ["0%", "calc(100vw - 2rem)", "0%"],
                    }}
                    transition={{
                      duration: autoClose / 1000,
                      ease: "linear",
                    }}
                  />
                </div>
              )}
            </div>

            {/* Professional Glow Effects */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-r ${config.gradient} opacity-20 blur-2xl`}
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.2, 0.15, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Corner Accents */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/10 to-transparent rounded-bl-3xl" />
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-white/10 to-transparent rounded-tr-3xl" />
          </motion.div>

          {/* Enhanced Professional Shadow */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-r ${config.gradient} opacity-15 blur-3xl scale-110 -z-10 rounded-3xl`}
            animate={{
              scale: [1.1, 1.15, 1.1],
              opacity: [0.15, 0.1, 0.15],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Outer Glow Ring */}
          <motion.div
            className={`absolute inset-0 border-2 border-${config.glowColor}/30 rounded-3xl -z-5`}
            animate={{
              scale: [1, 1.02, 1],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CopyToast;
