'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaUserCircle, FaLock, FaEnvelope, FaHeart, FaHistory, FaPhoneAlt } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';

export default function AccountPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <main className="flex flex-col w-full overflow-x-hidden bg-[#fcf9f5] min-h-screen">
      {/* Hero */}
      <section className="relative w-full min-h-[380px] md:min-h-[440px] flex items-center justify-center overflow-hidden py-14 sm:py-20">
        <img
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2000&auto=format&fit=crop"
          alt="My Account"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.35)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1329] via-black/30 to-black/60" />
        
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto my-auto">
          <div className="inline-flex items-center gap-2 text-white/70 text-[13px] font-medium mb-4 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-[#f26c22] font-semibold">My Account</span>
          </div>
          <h1 className="text-[34px] sm:text-[44px] font-black text-white leading-tight mb-2">
            Welcome to <span className="text-[#f26c22]">Zoyo Trip Club</span>
          </h1>
          <p className="text-gray-200 text-[15px] font-light">
            Manage your saved trips, exclusive discounts, and past travel itineraries.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <section className="py-16 px-6 sm:px-10 max-w-[520px] mx-auto w-full">
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100">
          
          <div className="flex border-b border-gray-200 mb-8">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 pb-3 text-sm font-bold text-center border-b-2 transition-colors ${
                isLogin ? 'border-[#f26c22] text-[#f26c22]' : 'border-transparent text-gray-500 hover:text-gray-800'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 pb-3 text-sm font-bold text-center border-b-2 transition-colors ${
                !isLogin ? 'border-[#f26c22] text-[#f26c22]' : 'border-transparent text-gray-500 hover:text-gray-800'
              }`}
            >
              Create Account
            </button>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Rahul Sharma"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#f26c22] text-sm"
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Email or Phone Number</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="you@example.com / +91 9876543210"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#f26c22] text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Password</label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#f26c22] text-sm"
                />
              </div>
            </div>

            {isLogin && (
              <div className="flex justify-between items-center text-xs text-gray-500 pt-1">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" className="rounded text-[#f26c22]" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="text-[#f26c22] font-semibold hover:underline">Forgot password?</a>
              </div>
            )}

            <button
              type="submit"
              className="w-full mt-4 bg-gradient-to-r from-[#f26c22] to-[#e0560e] text-white py-3.5 rounded-xl font-bold text-sm shadow-md hover:from-[#e0560e] hover:to-[#c44705] transition"
            >
              {isLogin ? 'Sign In to Account' : 'Register Now'}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-100 text-center text-xs text-gray-500">
            Need help? Contact our desk at{' '}
            <a href="tel:+918091660060" className="text-[#1E6AD4] font-semibold hover:underline">
              (+91) 8091660060
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
