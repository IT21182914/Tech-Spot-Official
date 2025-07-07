// Login.jsx - Complete Working Version
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEye,
  FaEyeSlash,
  FaEnvelope,
  FaLock,
  FaCheckCircle,
  FaTimesCircle,
  FaSpinner,
  FaSignInAlt,
  FaGoogle,
  FaFacebook,
  FaShieldAlt,
  FaHome,
  FaCog,
} from "react-icons/fa";
import { MdSecurity, MdAdminPanelSettings } from "react-icons/md";
import { HiLightningBolt } from "react-icons/hi";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginStatus, setLoginStatus] = useState(null);
  const [errors, setErrors] = useState({});

  // Simple input change handler - NO VALIDATION DURING TYPING
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
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
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getRoleRedirectPath = (role) => {
    switch (role) {
      case "customer":
        return "/";
      case "staff":
        return "/staff";
      case "admin":
        return "/admin";
      default:
        return "/";
    }
  };

  const getRoleIcon = (role) => {
    switch (role) {
      case "customer":
        return <FaHome className="text-blue-400" />;
      case "staff":
        return <FaCog className="text-green-400" />;
      case "admin":
        return <MdAdminPanelSettings className="text-purple-400" />;
      default:
        return <FaHome className="text-blue-400" />;
    }
  };

  const getRoleDisplayName = (role) => {
    switch (role) {
      case "customer":
        return "Customer Dashboard";
      case "staff":
        return "Staff Panel";
      case "admin":
        return "Admin Panel";
      default:
        return "Dashboard";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setLoginStatus({
        type: "error",
        message: "Please fix the errors below",
      });
      return;
    }

    setIsLoading(true);
    setLoginStatus(null);

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        const userRole = data.data.user.role;
        const redirectPath = getRoleRedirectPath(userRole);

        setLoginStatus({
          type: "success",
          message: `Welcome back! Redirecting to ${getRoleDisplayName(
            userRole
          )}...`,
          data: data,
          role: userRole,
          redirectPath: redirectPath,
        });

        // Store tokens if provided
        if (data.data?.tokens) {
          localStorage.setItem("accessToken", data.data.tokens.accessToken);
          localStorage.setItem("refreshToken", data.data.tokens.refreshToken);
          localStorage.setItem("user", JSON.stringify(data.data.user));
        }

        // Simulate redirect (in real app, use React Router navigate)
        setTimeout(() => {
          setLoginStatus((prev) => ({
            ...prev,
            message: `Redirecting to ${redirectPath}...`,
            redirecting: true,
          }));

          // In real implementation, you would use:
          // navigate(redirectPath);
          console.log(`Would redirect to: ${redirectPath}`);
        }, 2000);
      } else {
        setLoginStatus({
          type: "error",
          message:
            data.message || "Login failed. Please check your credentials.",
        });
      }
    } catch (error) {
      setLoginStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const fillDemoCustomer = () => {
    setFormData({
      email: "john.doe@techspot.com",
      password: "SecurePass123!",
      rememberMe: false,
    });
    setErrors({});
  };

  const fillDemoStaff = () => {
    setFormData({
      email: "sarah.johnson@techspot.com",
      password: "StaffPass456!",
      rememberMe: false,
    });
    setErrors({});
  };

  const fillDemoAdmin = () => {
    setFormData({
      email: "michael.chen@techspot.com",
      password: "AdminPass789!",
      rememberMe: false,
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
              <FaSignInAlt className="text-2xl text-white" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl font-bold mb-2"
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Welcome Back
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-300"
            >
              Sign in to your Tech Spot account
            </motion.p>
          </div>

          {/* Login Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl"
          >
            <div className="space-y-6">
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

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-600 bg-white/10 border-white/20 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <span className="text-sm text-gray-300">Remember me</span>
                </label>
                <a
                  href="/forgot-password"
                  className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Forgot password?
                </a>
              </div>

              {/* Status Messages */}
              {loginStatus && (
                <div
                  className={`p-4 rounded-2xl border ${
                    loginStatus.type === "success"
                      ? "bg-green-500/20 border-green-500/50 text-green-300"
                      : "bg-red-500/20 border-red-500/50 text-red-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {loginStatus.type === "success" ? (
                      <div className="flex items-center gap-2">
                        <FaCheckCircle className="text-green-400" />
                        {loginStatus.role && getRoleIcon(loginStatus.role)}
                      </div>
                    ) : (
                      <FaTimesCircle className="text-red-400" />
                    )}
                    <span>{loginStatus.message}</span>
                    {loginStatus.redirecting && (
                      <FaSpinner className="animate-spin text-green-400 ml-auto" />
                    )}
                  </div>
                  {loginStatus.type === "success" &&
                    loginStatus.redirectPath && (
                      <div className="mt-2 text-sm text-green-400">
                        Redirecting to: {loginStatus.redirectPath}
                      </div>
                    )}
                </div>
              )}

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
                    <span>Signing In...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-3">
                    <HiLightningBolt />
                    <span>Sign In</span>
                  </div>
                )}
              </button>

              {/* Social Login */}
              <div className="space-y-3">
                <div className="text-center">
                  <span className="text-gray-400 text-sm">Or sign in with</span>
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

              {/* Quick Demo Login */}
              <div className="space-y-3">
                <div className="text-center">
                  <span className="text-gray-400 text-sm">
                    Quick Demo Login
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  <button
                    type="button"
                    onClick={fillDemoCustomer}
                    className="flex items-center justify-center gap-2 py-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg transition-all duration-300 text-sm"
                  >
                    <FaHome className="text-blue-400" />
                    <span>Demo Customer (john.doe@techspot.com)</span>
                  </button>
                  <button
                    type="button"
                    onClick={fillDemoStaff}
                    className="flex items-center justify-center gap-2 py-2 bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 rounded-lg transition-all duration-300 text-sm"
                  >
                    <FaCog className="text-green-400" />
                    <span>Demo Staff (sarah.johnson@techspot.com)</span>
                  </button>
                  <button
                    type="button"
                    onClick={fillDemoAdmin}
                    className="flex items-center justify-center gap-2 py-2 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 rounded-lg transition-all duration-300 text-sm"
                  >
                    <MdAdminPanelSettings className="text-purple-400" />
                    <span>Demo Admin (michael.chen@techspot.com)</span>
                  </button>
                </div>
              </div>

              {/* Security Indicators */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <MdSecurity className="text-green-400" />
                  <span>Secure Login</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <FaShieldAlt className="text-blue-400" />
                  <span>Protected Access</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Register Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-center mt-6"
          >
            <p className="text-gray-400">
              Don't have an account?{" "}
              <a
                href="/register"
                className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
              >
                Create Account
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
