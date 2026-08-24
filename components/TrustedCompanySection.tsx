'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import section1 from "@/public/assets/images/packageimages/Shimla-During-Monsoon.webp";
import section2 from "@/public/assets/images/packageimages/dubai.webp";
import {
  FaHotel,
  FaMapMarkedAlt,
  FaPassport,
  FaHiking,
  FaSlidersH,
  FaCompass,
  FaStar,
  FaPlane,
  FaShieldAlt,
  FaCheckCircle
} from 'react-icons/fa';
import { BsCheckCircleFill, BsShieldCheck } from 'react-icons/bs';
import { TbHelicopter } from 'react-icons/tb';

const services = [
  {
    title: 'Hotel',
    subtitle: 'Booking',
    desc: 'Handpicked luxury stays & resorts',
    icon: FaHotel,
    color: 'from-amber-500 to-orange-500',
    lightBg: 'bg-orange-50',
    iconColor: 'text-orange-600',
    borderColor: 'group-hover:border-orange-300',
  },
  {
    title: 'Top',
    subtitle: 'Destinations',
    desc: '500+ hand-curated spots',
    icon: FaMapMarkedAlt,
    color: 'from-blue-500 to-cyan-500',
    lightBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    borderColor: 'group-hover:border-blue-300',
  },
  {
    title: 'Visa',
    subtitle: 'Processing',
    desc: 'Fast, hassle-free paperwork',
    icon: FaPassport,
    color: 'from-emerald-500 to-teal-500',
    lightBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    borderColor: 'group-hover:border-emerald-300',
  },
  {
    title: 'Tour',
    subtitle: 'Experiences',
    desc: 'Guided cultural & leisure trips',
    icon: FaHiking,
    color: 'from-purple-500 to-indigo-500',
    lightBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
    borderColor: 'group-hover:border-purple-300',
  },
  {
    title: 'Customize',
    subtitle: 'Package',
    desc: '100% tailor-made itineraries',
    icon: FaSlidersH,
    color: 'from-rose-500 to-pink-500',
    lightBg: 'bg-rose-50',
    iconColor: 'text-rose-600',
    borderColor: 'group-hover:border-rose-300',
  },
  {
    title: 'Adventure',
    subtitle: 'Travel',
    desc: 'Thrilling treks & safaris',
    icon: FaCompass,
    color: 'from-sky-500 to-blue-600',
    lightBg: 'bg-sky-50',
    iconColor: 'text-sky-600',
    borderColor: 'group-hover:border-sky-300',
  },
];

export default function TrustedCompanySection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#fdf8f2] via-[#faf3e7] to-[#fdf8f2] py-16 sm:py-20 lg:py-24 overflow-hidden font-sans border-y border-amber-100/60">
      {/* Decorative ambient background glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-orange-200/25 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-1/4 w-[28rem] h-[28rem] bg-amber-200/20 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Subtle Dot Pattern Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle, #e2d1b8 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-0">

        {/* Main Grid: Left (Content & Services) & Right (Visual Composite) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Column: Heading, Bio, Experience Card & Smart Services Grid */}
          <div className="lg:col-span-7 flex flex-col">

            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 self-start bg-white/90 backdrop-blur-md border border-orange-200/80 px-4 py-1.5 rounded-full shadow-sm mb-4">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f26c22] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f26c22]"></span>
              </span>
              <span className="text-[12.5px] font-bold text-gray-800 tracking-wide uppercase">
                India&apos;s Premier Destination Management Company
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-[30px] sm:text-[38px] lg:text-[44px]  text-[#111827] leading-[1.16] tracking-tight mb-4">
              India&apos;s Trusted Tour &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e05615] via-[#f26c22] to-[#f59e0b]">
                Destination Management
              </span>{' '}
              Company
            </h2>

            {/* Description Paragraph */}
            <p className="text-[#4b5563] text-[15px] sm:text-[16px] leading-[1.75] mb-7 max-w-2xl font-normal">
              Plan your perfect holiday with <strong className="text-gray-900 font-semibold">Zoyo Trip Holidays</strong>, India&apos;s most trusted travel and destination management company. We specialize in customized domestic (India Only) and{' '}
              <Link
                href="/international"
                className="underline decoration-[#f26c22]/50 decoration-2 underline-offset-4 font-semibold text-[#f26c22] hover:text-[#d65714] transition-colors"
              >
                International tour packages
              </Link>{' '}
              (World Wide), offering end-to-end travel solutions that include flight bookings, hotel accommodations, transportation, train and bus tickets, and exclusive helicopter ride experiences.
            </p>

            {/* Stats & Trust Highlight Card */}
            <div className="bg-white/85 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-amber-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] mb-8 flex flex-wrap items-center justify-between gap-4">

              {/* Stat 1: 5+ Years */}
              <div className="flex items-center gap-3.5">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 p-0.5 shadow-md flex items-center justify-center shrink-0">
                  <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                    <span className="text-[26px] sm:text-[28px] font-black text-[#f26c22] leading-none">5<span className="text-amber-500 text-lg">+</span></span>
                  </div>
                </div>
                <div>
                  <div className="text-[14px] sm:text-[15px] font-bold text-gray-900 leading-snug">
                    Years of Excellence
                  </div>
                  <div className="text-[12px] text-gray-500">
                    Trusted by 50,000+ Travelers
                  </div>
                </div>
              </div>

              <div className="hidden sm:block w-px h-10 bg-gray-200" />

              {/* Stat 2: Custom Itineraries */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <BsShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[13.5px] font-bold text-gray-900 leading-snug">
                    100% Verified Stays
                  </div>
                  <div className="text-[12px] text-gray-500">
                    Govt. Approved Partners
                  </div>
                </div>
              </div>

              <div className="hidden sm:block w-px h-10 bg-gray-200" />

              {/* Stat 3: Helicopter Rides & VIP */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                  <TbHelicopter className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[13.5px] font-bold text-gray-900 leading-snug">
                    Helicopter Charters
                  </div>
                  <div className="text-[12px] text-gray-500">
                    Exclusive VIP Experiences
                  </div>
                </div>
              </div>
            </div>

            {/* Smart Services Title & Subtext */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-[17px] sm:text-[18px] font-bold text-[#111827] tracking-tight">
                  We Provide Smart Services
                </h3>
                <p className="text-[12.5px] text-gray-500">
                  Comprehensive end-to-end management for smooth journeys
                </p>
              </div>
            </div>

            {/* 6 Services Responsive Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {services.map((svc, i) => {
                const IconComponent = svc.icon;
                return (
                  <div
                    key={i}
                    className={`group bg-white rounded-xl p-3.5 border border-gray-100/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(242,108,34,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center cursor-pointer ${svc.borderColor}`}
                  >
                    {/* Icon with soft background and vibrant color */}
                    <div className={`w-11 h-11 rounded-xl ${svc.lightBg} ${svc.iconColor} flex items-center justify-center mb-2.5 transition-transform duration-300 group-hover:scale-110 shadow-sm`}>
                      <IconComponent className="w-5 h-5" />
                    </div>

                    {/* Label */}
                    <div className="text-[12.5px] text-gray-900 leading-tight">
                      {svc.title} {svc.subtitle}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column: Unique & Professional Visual Showcase */}
          <div className="lg:col-span-5 relative flex justify-center items-center">

            {/* Ambient Backlight Ring */}
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/20 via-orange-400/20 to-sky-400/20 rounded-[36px] blur-2xl -z-0 scale-95" />

            {/* Travel Flight Dashed Route Arc with Animated Plane */}
            <div className="absolute -top-7 left-4 right-4 h-16 pointer-events-none z-20 hidden sm:block">
              <svg viewBox="0 0 380 60" className="w-full h-full" preserveAspectRatio="none">
                <circle cx="40" cy="50" r="4" fill="#f26c22" />
                <path
                  d="M40,50 Q190,-15 340,30"
                  fill="none"
                  stroke="#f26c22"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  opacity="0.75"
                />
                <circle cx="340" cy="30" r="4" fill="#f26c22" />
              </svg>
              <div className="absolute top-1 right-[18%] text-[#f26c22] transform rotate-12 drop-shadow">
                <FaPlane className="w-4 h-4" />
              </div>
            </div>

            {/* Visual Double Card Layer */}
            <div className="relative z-10 w-full max-w-[480px] grid grid-cols-2 gap-3.5 sm:gap-4.5 pt-4 pb-2">

              {/* Left Image Card: Tropical Beach */}
              <div className="relative group rounded-[26px] overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.14)] border-2 border-white/80 h-[380px] sm:h-[600px] flex flex-col justify-between p-3.5 sm:p-4 bg-gray-900 transition-all duration-500 hover:shadow-2xl">
                <Image
                  src={section1}
                  alt="Tropical Beach Holiday"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out brightness-[0.92]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent" />

                {/* Top Badge */}
                <div className="relative z-10 self-start">
                  <span className="bg-black/40 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Mountain Wonders
                  </span>
                </div>

                {/* Bottom Destination Info */}
                <div className="relative z-10 text-white">
                  <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider">Domestic &amp; World</span>
                  <h4 className="text-[17px] sm:text-[19px] font-extrabold leading-tight drop-shadow-md">
                    Waterfalls &amp; Treks
                  </h4>
                  <p className="text-[12px] text-white/80 line-clamp-1 mt-0.5">
                    Kashmir, Manali, Meghalaya
                  </p>
                </div>
              </div>

              {/* Right Image Card: Waterfall / Mountain Expeditions (Elevated / Staggered) */}
              <div className="relative group rounded-[26px] overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.14)] border-2 border-white/80 h-[380px] sm:h-[600px] flex flex-col justify-between p-3.5 sm:p-4 bg-gray-900 transition-all duration-500 hover:shadow-2xl translate-y-3 sm:translate-y-5">
                <Image
                  src={section2}
                  alt="Waterfall Nature Adventure"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out brightness-[0.92]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent" />

                {/* Top Badge */}
                <div className="relative z-10 self-start">
                  <span className="bg-black/40 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    Tropical Escapes
                  </span>
                </div>

                {/* Bottom Destination Info */}
                <div className="relative z-10 text-white">
                  <span className="text-[11px] font-bold text-sky-300 uppercase tracking-wider">Adventure &amp; Peace</span>
                  <h4 className="text-[17px] sm:text-[19px] font-extrabold leading-tight drop-shadow-md">
                    Beaches &amp; Islands
                  </h4>
                  <p className="text-[12px] text-white/80 line-clamp-1 mt-0.5">
                    Goa, Maldives, Phuket
                  </p>
                </div>
              </div>

              {/* Central Floating 360 Experience Badge */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
                <div className="relative flex items-center justify-center">
                  {/* Glowing Pulse Ring */}
                  <span className="animate-ping absolute inline-flex h-16 w-16 rounded-full bg-[#f26c22] opacity-25" />

                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#e05615] via-[#f26c22] to-amber-500 p-1 shadow-[0_8px_24px_rgba(242,108,34,0.4)] flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-[#111827] flex flex-col items-center justify-center text-white">
                      <span className="text-[11px] font-black tracking-tighter leading-none text-amber-400">360°</span>
                      <span className="text-[8.5px] font-bold uppercase tracking-wider text-white/90">Tours</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Bottom Quality Chip */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-30 w-11/12 max-w-[320px]">
                <div className="bg-white/95 backdrop-blur-md border border-amber-200/90 rounded-xl px-3.5 py-2 shadow-lg flex items-center justify-center gap-2">
                  <FaShieldAlt className="text-[#f26c22] w-4 h-4 shrink-0" />
                  <span className="text-[12px] font-bold text-gray-800 whitespace-nowrap">
                    100% Customized Tour Solutions
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Trust & Rating Bar */}
        <div className="mt-7 pt-8 border-t border-amber-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">

          <div className="flex items-center gap-2.5 flex-wrap justify-center">
            <span className="font-black text-[#111827] text-[16px]">Excellent!</span>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-[22px] h-[22px] bg-[#00b67a] flex items-center justify-center rounded-[3px] shadow-sm">
                  <FaStar className="w-[12px] h-[12px] text-white" />
                </div>
              ))}
            </div>
            <span className="text-gray-700 text-[14px] font-medium">
              <strong className="text-gray-900 font-bold">5.0</strong> out of 5.0 based on{' '}
              <Link href="https://www.google.com/search?sca_esv=ee5ce1eb980ec4a8&sxsrf=APpeQnvaWytg232qaPjI3rqflykucRFVfQ:1787570259444&q=zoyo+trip+holidays&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_3qevqKrpVY1EUCPodHOye5rdk6dbYCH_VaMOYcgij9_2kL5edelaWUY1I0ABmHsIs61nsPc6jYQQWll9AErMHwl-sic1SxMQ5czgOXdtwd3hsrCQvJ7-mV4pq72UHWOq9c5EDA%3D&sa=X&ved=2ahUKEwiL1MySkrmWAxVhxTgGHV9fGKsQrrQLegQIORAA&biw=1920&bih=945&dpr=1" className="underline font-bold text-gray-900 hover:text-[#f26c22] transition-colors">
                24K+ reviews
              </Link>
            </span>
          </div>

          <div className="flex items-center gap-4 text-[13px] font-semibold text-gray-600">
            <div className="flex items-center gap-1.5">
              <span className="text-[#00b67a] text-base">★</span>
              <span className="font-extrabold text-gray-900">Trustpilot</span> Verified
            </div>
            <span className="text-gray-300">•</span>
            <div className="flex items-center gap-1.5 text-gray-700">
              <BsCheckCircleFill className="text-emerald-600 w-3.5 h-3.5" />
              <span>Instant Support</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
