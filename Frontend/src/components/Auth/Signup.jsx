import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import apiClient from './ApiClient';

const Signup = () => {
  const { 
    register, 
    handleSubmit,
    formState: { errors }
  } = useForm();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await apiClient.post(
        `${import.meta.env.REACT_APP_BASE_URL}/auth/signup`,
        data
      );
      
      if (response.status >= 200 && response.status < 300) {
        navigate('/login');
      }
    } catch (err) {
      setError(err.response?.data?.message || "Failed to create account. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Updated gradient orbs to green */}
      <div className="absolute -left-4 w-96 h-96 bg-green-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob" />
      <div className="absolute -right-4 w-96 h-96 bg-emerald-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-5xl relative"
      >
        <div className="backdrop-blur-xl bg-white/[0.02] rounded-3xl shadow-2xl border border-white/[0.05] overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left Side - Welcome Message */}
            <div className="lg:w-5/12 p-8 lg:p-12 bg-gradient-to-br from-black/50 to-transparent flex flex-col justify-center">
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="text-center lg:text-left"
              >
                <h1 className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400 mb-4">
                  LeafLink
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-4">Create Account</h2>
                <p className="text-gray-400 text-lg mb-6">
                  Join our community of professionals.
                </p>
                <p className="text-gray-300">
                  Already have an account?{' '}
                  <Link to="/login" className="text-green-400 hover:text-green-300 transition-colors font-medium">
                    Sign In
                  </Link>
                </p>
              </motion.div>
            </div>

            {/* Right Side - Form */}
            <div className="lg:w-7/12 p-8 lg:p-12 bg-black/20">
              {error && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-400 text-center mb-6"
                >
                  {error}
                </motion.p>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-gray-300 text-sm font-medium">Full Name</label>
                  <input
                    {...register("name", { 
                      required: "Name is required"
                    })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.05] text-white placeholder-gray-500 focus:border-green-500 focus:ring-green-500 focus:ring-1 focus:bg-white/[0.05] transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-gray-300 text-sm font-medium">Email</label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                        message: "Please enter a valid email address"
                      }
                    })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.05] text-white placeholder-gray-500 focus:border-green-500 focus:ring-green-500 focus:ring-1 focus:bg-white/[0.05] transition-all duration-200"
                    type="email"
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-gray-300 text-sm font-medium">Password</label>
                  <input
                    {...register("password", { 
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters"
                      }
                    })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.05] text-white placeholder-gray-500 focus:border-green-500 focus:ring-green-500 focus:ring-1 focus:bg-white/[0.05] transition-all duration-200"
                    type="password"
                    placeholder="Enter your password"
                  />
                  {errors.password && (
                    <p className="text-red-400 text-sm">{errors.password.message}</p>
                  )}
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  className="w-full py-3 px-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-medium hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg shadow-green-600/20"
                >
                  Create Account
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;