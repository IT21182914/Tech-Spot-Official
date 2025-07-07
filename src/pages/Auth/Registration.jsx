// Registration.jsx - Complete Working Version
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEye,
  FaEyeSlash,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaSpinner,
  FaShieldAlt,
  FaUserPlus,
  FaGoogle,
  FaFacebook,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import { MdSecurity, MdVerifiedUser } from "react-icons/md";
import { HiSparkles } from "react-icons/hi";

const Registration = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "customer",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [registrationStatus, setRegistrationStatus] = useState(null);
  const [errors, setErrors] = useState({});

  // Simple input change handler - NO VALIDATION DURING TYPING
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear any existing error for this field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Validation only runs on form submission
  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        formData.password
      )
    ) {
      newErrors.password =
        "Password must contain uppercase, lowercase, number, and special character";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setRegistrationStatus({
        type: "error",
        message: "Please fix the errors below",
      });
      return;
    }

    setIsLoading(true);
    setRegistrationStatus(null);

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
          role: formData.role,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setRegistrationStatus({
          type: "success",
          message: "Registration successful! Welcome to Tech Spot!",
        });

        if (data.data?.tokens) {
          localStorage.setItem("accessToken", data.data.tokens.accessToken);
          localStorage.setItem("refreshToken", data.data.tokens.refreshToken);
          localStorage.setItem("user", JSON.stringify(data.data.user));
        }

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
          role: "customer",
        });
        setErrors({});
      } else {
        setRegistrationStatus({
          type: "error",
          message: data.message || "Registration failed. Please try again.",
        });
      }
    } catch (error) {
      setRegistrationStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const fillDemoData = () => {
    setFormData({
      firstName: "Demo",
      lastName: "Customer",
      email: "demo.customer@techspot.com",
      phone: "+94771234567",
      password: "DemoPass123!",
      confirmPassword: "DemoPass123!",
      role: "customer",
    });
    setErrors({});
  };

  const fillStaffDemo = () => {
    setFormData({
      firstName: "Demo",
      lastName: "Staff",
      email: "demo.staff@techspot.com",
      phone: "+94771234568",
      password: "StaffDemo123!",
      confirmPassword: "StaffDemo123!",
      role: "staff",
    });
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl"
            >
              <FaUserPlus className="text-2xl text-white" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl font-bold mb-2"
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Join Tech Spot
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-300"
            >
              Create your account and start shopping
            </motion.p>
          </div>

          {/* Registration Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl"
          >
            <div className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="relative">
                    <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-xl border-2 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 ${
                        errors.firstName ? "border-red-500" : "border-white/20"
                      }`}
                    />
                  </div>
                  {errors.firstName && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <div className="relative">
                    <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-xl border-2 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 ${
                        errors.lastName ? "border-red-500" : "border-white/20"
                      }`}
                    />
                  </div>
                  {errors.lastName && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              {/* Email Field */}
              <div>
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-xl border-2 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 ${
                      errors.email ? "border-red-500" : "border-white/20"
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="mt-2 text-sm text-red-400">{errors.email}</p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <div className="relative">
                  <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number (Optional)"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-xl border-2 border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <div className="relative">
                  <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full pl-12 pr-12 py-4 bg-white/10 backdrop-blur-xl border-2 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 ${
                      errors.password ? "border-red-500" : "border-white/20"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-2 text-sm text-red-400">{errors.password}</p>
                )}
              </div>

              {/* Confirm Password Field */}
              <div>
                <div className="relative">
                  <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`w-full pl-12 pr-12 py-4 bg-white/10 backdrop-blur-xl border-2 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 ${
                      errors.confirmPassword
                        ? "border-red-500"
                        : "border-white/20"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              {/* Role Selection */}
              <div className="relative">
                <FaShieldAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-xl border-2 border-white/20 rounded-2xl text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="customer" className="bg-gray-900">
                    Customer
                  </option>
                  <option value="staff" className="bg-gray-900">
                    Staff
                  </option>
                  <option value="admin" className="bg-gray-900">
                    Admin
                  </option>
                </select>
              </div>

              {/* Status Messages */}
              {registrationStatus && (
                <div
                  className={`p-4 rounded-2xl border ${
                    registrationStatus.type === "success"
                      ? "bg-green-500/20 border-green-500/50 text-green-300"
                      : "bg-red-500/20 border-red-500/50 text-red-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {registrationStatus.type === "success" ? (
                      <FaCheckCircle className="text-green-400" />
                    ) : (
                      <FaTimesCircle className="text-red-400" />
                    )}
                    <span>{registrationStatus.message}</span>
                  </div>
                </div>
              )}

              {/* Demo Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={fillDemoData}
                  className="py-2 bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors text-sm"
                >
                  Demo Customer
                </button>
                <button
                  type="button"
                  onClick={fillStaffDemo}
                  className="py-2 bg-green-600 hover:bg-green-500 rounded-xl transition-colors text-sm"
                >
                  Demo Staff
                </button>
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full py-4 rounded-2xl font-bold text-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300 disabled:opacity-50"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-3">
                    <FaSpinner className="animate-spin" />
                    <span>Creating Account...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-3">
                    <HiSparkles />
                    <span>Create Account</span>
                  </div>
                )}
              </button>

              {/* Social Registration */}
              <div className="space-y-3">
                <div className="text-center">
                  <span className="text-gray-400 text-sm">
                    Or register with
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all duration-300"
                  >
                    <FaGoogle className="text-red-400" />
                    <span className="text-sm">Google</span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all duration-300"
                  >
                    <FaFacebook className="text-blue-400" />
                    <span className="text-sm">Facebook</span>
                  </button>
                </div>
              </div>

              {/* Security Indicators */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <MdSecurity className="text-green-400" />
                  <span>256-bit SSL Encrypted</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <MdVerifiedUser className="text-blue-400" />
                  <span>GDPR Compliant</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Login Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-center mt-6"
          >
            <p className="text-gray-400">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
              >
                Sign In
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Registration;
