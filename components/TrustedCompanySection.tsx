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
  FaShieldAlt
} from 'react-icons/fa';
import { BsCheckCircleFill, BsShieldCheck } from 'react-icons/bs';
import { TbHelicopter } from 'react-icons/tb';

const services = [
  {
    title: 'Hotel Booking',
    icon: FaHotel,
    href: '/hotel-booking',
    iconBg: 'bg-orange-50 text-[#f26c22] group-hover:bg-[#f26c22] group-hover:text-white',
    borderHover: 'hover:border-orange-300 hover:shadow-orange-500/10',
  },
  {
    title: 'Top Destinations',
    icon: FaMapMarkedAlt,
    href: '/national',
    iconBg: 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
    borderHover: 'hover:border-blue-300 hover:shadow-blue-500/10',
  },
  {
    title: 'Visa Processing',
    icon: FaPassport,
    href: '/contact',
    iconBg: 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white',
    borderHover: 'hover:border-emerald-300 hover:shadow-emerald-500/10',
  },
  {
    title: 'Tour Experiences',
    icon: FaHiking,
    href: '/gallery',
    iconBg: 'bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
    borderHover: 'hover:border-purple-300 hover:shadow-purple-500/10',
  },
  {
    title: 'Customize Package',
    icon: FaSlidersH,
    href: '/contact',
    iconBg: 'bg-rose-50 text-rose-600 group-hover:bg-rose-600 group-hover:text-white',
    borderHover: 'hover:border-rose-300 hover:shadow-rose-500/10',
  },
  {
    title: 'Adventure Travel',
    icon: FaCompass,
    href: '/national/spiti',
    iconBg: 'bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white',
    borderHover: 'hover:border-amber-300 hover:shadow-amber-500/10',
  },
];

export default function TrustedCompanySection() {
  return (
    <section className="relative w-full bg-[#FCF8F2] py-12 sm:py-16 lg:py-20 overflow-hidden font-sans border-y border-amber-100/80">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none -z-0" />
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: `radial-gradient(circle, #d4c0a8 1.2px, transparent 1.2px)`,
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col">
            <div className="inline-flex items-center gap-2 self-start bg-white/90 backdrop-blur-md border border-orange-200/80 px-3.5 py-1.5 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.04)] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#f26c22]"></span>
              <span className="text-[11.5px] sm:text-[12px] font-bold text-gray-800 tracking-wider uppercase">
                India&apos;s Premier Destination Management Company
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight mb-4">
              India&apos;s Trusted Tour &amp;{' '}
              <span className="text-[#e05615]">Destination</span>{' '}
              <span className="text-[#1E6AD4]">Management</span>{' '}
              Company
            </h2>
            <p className="text-[#4b5563] text-[15px] sm:text-[15.5px] leading-[1.7] mb-7 max-w-2xl font-normal">
              Plan your perfect holiday with <strong className="text-gray-900 font-semibold">Zoyo Trip Holidays</strong>, India&apos;s most trusted travel and destination management company. We specialize in customized domestic (India Only) and{' '}
              <Link
                href="/international"
                className="underline decoration-[#f26c22]/50 decoration-2 underline-offset-4 font-semibold text-[#f26c22] hover:text-[#d65714] transition-colors"
              >
                International tour packages
              </Link>{' '}
              (World Wide), offering end-to-end travel solutions that include flight bookings, hotel accommodations, transportation, train and bus tickets, and exclusive helicopter ride experiences.
            </p>
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-amber-100/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] mb-7">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0 sm:divide-x divide-gray-100">
                <div className="flex items-center gap-3.5 sm:pr-4">
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-xl border border-orange-200 bg-orange-50/50 flex items-center justify-center shrink-0">
                    <span className="text-[26px] font-black text-[#f26c22] leading-none">
                      15<span className="text-amber-500 text-lg">+</span>
                    </span>
                  </div>
                  <div>
                    <div className="text-[14.5px] font-bold text-gray-900 leading-snug">
                      Years of Excellence
                    </div>
                    <div className="text-[12px] text-gray-500 mt-0.5">
                      Trusted by 50 Lakh Travelers
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3.5 sm:px-5">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                    <BsShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[14px] font-bold text-gray-900 leading-snug">
                      100% Verified Stays
                    </div>
                    <div className="text-[12px] text-gray-500 mt-0.5">
                      Govt. Approved Partners
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3.5 sm:pl-5">
                  <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100">
                    <TbHelicopter className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[14px] font-bold text-gray-900 leading-snug">
                      Helicopter Charters
                    </div>
                    <div className="text-[12px] text-gray-500 mt-0.5">
                      Exclusive VIP Experiences
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3.5">
              <h3 className="text-[17px] sm:text-[18px] font-extrabold text-[#111827] tracking-tight">
                We Provide Smart Services
              </h3>
              <p className="text-[12.5px] text-gray-500 font-normal">
                Comprehensive end-to-end management for smooth journeys
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
              {services.map((svc, i) => {
                const IconComponent = svc.icon;
                return (
                  <Link
                    key={i}
                    href={svc.href}
                    className={`group bg-white rounded-xl p-3 border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(242,108,34,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center cursor-pointer ${svc.borderHover}`}
                  >
                    <div className={`w-11 h-11 rounded-xl ${svc.iconBg} flex items-center justify-center mb-2 transition-all duration-300 group-hover:scale-110 shadow-sm`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="text-[12px] font-bold text-gray-800 group-hover:text-[#f26c22] transition-colors leading-snug">
                      {svc.title}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="lg:col-span-5 relative flex justify-center items-center mt-8 lg:mt-0 w-full">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-300/25 via-orange-300/20 to-sky-300/20 rounded-[44px] blur-3xl -z-0 scale-95" />
            <div className="absolute -top-9 left-2 right-2 h-16 pointer-events-none z-20 hidden sm:block">
              <svg viewBox="0 0 380 60" className="w-full h-full" preserveAspectRatio="none">
                <circle cx="30" cy="50" r="4" fill="#f26c22" />
                <path
                  d="M30,50 Q190,-15 350,30"
                  fill="none"
                  stroke="#f26c22"
                  strokeWidth="2.2"
                  strokeDasharray="6 6"
                  opacity="0.85"
                />
                <circle cx="350" cy="30" r="4" fill="#f26c22" />
              </svg>
              <div className="absolute top-1 right-[12%] text-[#f26c22] transform rotate-12 drop-shadow-md">
                <FaPlane className="w-4 h-4" />
              </div>
            </div>
            <div className="relative z-10 w-full max-w-[500px] grid grid-cols-2 gap-3.5 sm:gap-5 pt-4 pb-0">
              <div
                className="relative group rounded-[22px] sm:rounded-[28px] lg:rounded-[32px] overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.18)] border-2 border-white flex flex-col justify-between p-3 sm:p-5 bg-gray-900 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 translate-y-3 sm:translate-y-6 lg:translate-y-8 w-full h-[500px] sm:h-[460px] lg:h-[540px]"
              >
                <Image
                  src={section1}
                  alt="Mountain Wonders Holiday"
                  fill
                  sizes="(max-width: 768px) 50vw, 260px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.92]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/35" />
                <div className="relative z-10 self-start">
                  <span className="bg-black/50 backdrop-blur-md border border-white/25 text-white text-[10px] sm:text-[11px] font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-sm flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Mountain Wonders
                  </span>
                </div>
                <div className="relative z-10 text-white">
                  <span className="text-[9.5px] sm:text-[10.5px] font-extrabold text-amber-300 uppercase tracking-widest block mb-1">
                    Domestic &amp; World
                  </span>
                  <h4 className="text-[16px] sm:text-[19px] lg:text-[22px] font-black leading-tight drop-shadow-md mb-0.5 sm:mb-1">
                    Waterfalls &amp; Treks
                  </h4>
                  <p className="text-[11px] sm:text-[12.5px] text-white/85 line-clamp-1">
                    Kashmir, Manali, Meghalaya
                  </p>
                </div>
              </div>
              <div
                className="relative group rounded-[22px] sm:rounded-[28px] lg:rounded-[32px] overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.18)] border-2 border-white flex flex-col justify-between p-3 sm:p-5 bg-gray-900 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 translate-y-3 sm:translate-y-6 lg:translate-y-8 w-full h-[500px] sm:h-[460px] lg:h-[540px]"
              >
                <Image
                  src={section2}
                  alt="Tropical Escapes Holiday"
                  fill
                  sizes="(max-width: 768px) 50vw, 260px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.92]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/35" />
                <div className="relative z-10 self-start">
                  <span className="bg-black/50 backdrop-blur-md border border-white/25 text-white text-[10px] sm:text-[11px] font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-sm flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                    Tropical Escapes
                  </span>
                </div>
                <div className="relative z-10 text-white">
                  <span className="text-[9.5px] sm:text-[10.5px] font-extrabold text-sky-300 uppercase tracking-widest block mb-1">
                    Adventure &amp; Peace
                  </span>
                  <h4 className="text-[16px] sm:text-[19px] lg:text-[22px] font-black leading-tight drop-shadow-md mb-0.5 sm:mb-1">
                    Beaches &amp; Islands
                  </h4>
                  <p className="text-[11px] sm:text-[12.5px] text-white/85 line-clamp-1">
                    Goa, Maldives, Dubai
                  </p>
                </div>
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gradient-to-tr from-[#e05615] via-[#f26c22] to-amber-500 p-1 shadow-[0_10px_30px_rgba(242,108,34,0.45)] flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-[#111827] flex flex-col items-center justify-center text-white">
                    <span className="text-[12px] font-black tracking-tighter leading-none text-amber-400">360°</span>
                    <span className="text-[8.5px] font-bold uppercase tracking-wider text-white/90 mt-0.5">Tours</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-30 w-11/12 max-w-[320px]">
                <div className="bg-white/95 backdrop-blur-md border border-amber-200/90 rounded-2xl px-4 py-2.5 shadow-[0_10px_25px_rgba(0,0,0,0.1)] flex items-center justify-center gap-2">
                  <FaShieldAlt className="text-[#f26c22] w-4 h-4 shrink-0" />
                  <span className="text-[12.5px] font-bold text-gray-800 whitespace-nowrap">
                    100% Customized Tour Solutions
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-amber-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2.5 flex-wrap justify-center">
            <span className="font-extrabold text-[#111827] text-[15px]">Excellent!</span>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-[20px] h-[20px] bg-[#00b67a] flex items-center justify-center rounded-[3px] shadow-sm">
                  <FaStar className="w-[11px] h-[11px] text-white" />
                </div>
              ))}
            </div>
            <span className="text-gray-700 text-[13.5px] font-medium">
              <strong className="text-gray-900 font-bold">4.7</strong> out of 4.7 based on{' '}
              <Link href="https://www.google.com/search?sca_esv=ee5ce1eb980ec4a8&sxsrf=APpeQnvaWytg232qaPjI3rqflykucRFVfQ:1787570259444&q=zoyo+trip+holidays" className="underline font-bold text-gray-900 hover:text-[#f26c22] transition-colors">
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

