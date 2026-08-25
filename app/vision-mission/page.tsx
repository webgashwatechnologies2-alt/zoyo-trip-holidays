'use client';

import React from 'react';
import Link from 'next/link';
import { FaEye, FaBullseye, FaHeart, FaAward, FaUsers, FaGlobe, FaShieldAlt, FaHandshake } from 'react-icons/fa';
import { BsStars } from 'react-icons/bs';

export default function VisionMissionPage() {
  return (
    <main className="flex flex-col w-full overflow-x-hidden bg-[#fcf9f5] min-h-screen">
      
      {/* Hero Banner */}
      <section className="relative w-full min-h-[400px] sm:min-h-[450px] md:min-h-[500px] flex items-center justify-center overflow-hidden py-14 sm:py-20 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1329] via-[#1a1f3c] to-[#0b1329]" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#f26c22] rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ffa347] rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 text-white/70 text-[13px] font-medium mb-5 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <span className="text-[#f26c22] font-semibold">Vision & Mission</span>
          </div>
          <h1 className="text-[38px] sm:text-[54px] text-white leading-tight mb-4 tracking-tight">
            Our{' '}
            <span className="bg-gradient-to-r from-[#f26c22] via-[#ffa347] to-[#ffd000] bg-clip-text text-transparent">
              Vision & Mission
            </span>
          </h1>
          <p className="text-gray-200 text-[16px] sm:text-[18px] max-w-xl mx-auto font-light mb-8 leading-relaxed">
            Discover what drives us to create unforgettable travel experiences for you.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-14 sm:py-20 px-4 sm:px-8 lg:px-16 max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[12px] font-bold text-[#f26c22] uppercase tracking-widest bg-[#f26c22]/10 px-3.5 py-1 rounded-full inline-block mb-3">
              <BsStars className="inline mr-1" /> Our Vision
            </span>
            <h2 className="text-[26px] sm:text-[32px] text-gray-900 mb-6">
              To Be the World's Most Trusted Travel Partner
            </h2>
            <p className="text-gray-600 text-[15px] leading-[1.8] mb-6">
              At Zoyo Trip Holidays, we envision a world where every traveler can explore their dream destinations with confidence, comfort, and joy. We aim to revolutionize the travel industry by providing personalized, hassle-free, and memorable experiences that exceed expectations.
            </p>
            <p className="text-gray-600 text-[15px] leading-[1.8] mb-8">
              Our vision is built on the foundation of trust, innovation, and customer satisfaction. We strive to create lasting memories for every traveler while promoting sustainable and responsible tourism practices.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-gray-700">
                <FaGlobe className="text-[#f26c22]" />
                <span className="text-sm font-semibold">Global Presence</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <FaUsers className="text-[#f26c22]" />
                <span className="text-sm font-semibold">50K+ Happy Travelers</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-[#f26c22]/10 to-[#ffa347]/10 rounded-3xl p-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <FaEye className="text-[#f26c22] text-5xl mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Seeing Beyond Borders</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We believe travel has the power to connect people, cultures, and perspectives. Our vision is to break barriers and make the world accessible to everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-14 sm:py-20 px-4 sm:px-8 lg:px-16 max-w-[1400px] mx-auto w-full bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="bg-gradient-to-br from-[#f26c22]/10 to-[#ffa347]/10 rounded-3xl p-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <FaBullseye className="text-[#f26c22] text-5xl mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Focused on Excellence</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our mission is to deliver exceptional travel experiences through meticulous planning, premium services, and unwavering commitment to customer satisfaction.
                </p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-[12px] font-bold text-[#f26c22] uppercase tracking-widest bg-[#f26c22]/10 px-3.5 py-1 rounded-full inline-block mb-3">
              <BsStars className="inline mr-1" /> Our Mission
            </span>
            <h2 className="text-[26px] sm:text-[32px] text-gray-900 mb-6">
              Delivering Exceptional Travel Experiences
            </h2>
            <p className="text-gray-600 text-[15px] leading-[1.8] mb-6">
              Our mission is to provide comprehensive travel solutions that cater to diverse needs and preferences. From domestic getaways to international adventures, we ensure every journey is seamless, safe, and unforgettable.
            </p>
            <p className="text-gray-600 text-[15px] leading-[1.8] mb-8">
              We are committed to transparency, integrity, and innovation in all our operations. Our dedicated team works tirelessly to craft personalized itineraries that transform travel dreams into reality.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-14 sm:py-20 px-4 sm:px-8 lg:px-16 max-w-[1400px] mx-auto w-full">
        <div className="text-center mb-12">
          <span className="text-[12px] font-bold text-[#f26c22] uppercase tracking-widest bg-[#f26c22]/10 px-3.5 py-1 rounded-full inline-block mb-3">
            <BsStars className="inline mr-1" /> Core Values
          </span>
          <h2 className="text-[26px] sm:text-[32px] text-gray-900">
            What We Stand For
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="w-14 h-14 rounded-xl bg-[#f26c22]/10 flex items-center justify-center mb-4">
              <FaHeart className="text-[#f26c22] text-2xl" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Customer First</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our customers are at the heart of everything we do. We prioritize their needs and satisfaction above all else.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="w-14 h-14 rounded-xl bg-[#f26c22]/10 flex items-center justify-center mb-4">
              <FaShieldAlt className="text-[#f26c22] text-2xl" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Trust & Integrity</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We believe in honest communication and transparent pricing. Trust is the foundation of our relationships.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="w-14 h-14 rounded-xl bg-[#f26c22]/10 flex items-center justify-center mb-4">
              <FaAward className="text-[#f26c22] text-2xl" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Excellence</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We strive for excellence in every aspect of our service, from planning to execution and beyond.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="w-14 h-14 rounded-xl bg-[#f26c22]/10 flex items-center justify-center mb-4">
              <FaHandshake className="text-[#f26c22] text-2xl" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Partnership</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We build strong partnerships with hotels, airlines, and local guides to ensure the best experience for our travelers.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
