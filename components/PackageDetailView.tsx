'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FaStar, 
  FaClock, 
  FaCar, 
  FaHotel, 
  FaUtensils, 
  FaCheck, 
  FaTimes, 
  FaChevronDown, 
  FaChevronUp, 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaTag, 
  FaShieldAlt, 
  FaCalendarAlt, 
  FaUsers, 
  FaMapMarkerAlt, 
  FaShareAlt, 
  FaArrowRight,
  FaCheckCircle,
  FaFileInvoiceDollar,
  FaCamera,
  FaGasPump,
  FaUserTie
} from 'react-icons/fa';
import { BsStars, BsShieldCheck, BsLightningChargeFill, BsStopwatchFill } from 'react-icons/bs';
import { TourPackage } from '@/data/allDestinations';

interface PackageDetailViewProps {
  pkg: TourPackage;
  destSlug?: string;
  destName?: string;
  categoryLabel?: string;
}

export default function PackageDetailView({
  pkg,
  destSlug = 'india',
  destName = 'Destinations',
  categoryLabel = 'National Tour',
}: PackageDetailViewProps) {
  const [activeTab, setActiveTab] = useState<'dayplan' | 'overview' | 'stay' | 'transfers' | 'inclusions' | 'policies'>('dayplan');
  const [openDay, setOpenDay] = useState<number | null>(1);
  const [appliedCoupon, setAppliedCoupon] = useState<string>('WELCOME');
  const [couponApplied, setCouponApplied] = useState<boolean>(true);
  const [openPolicy, setOpenPolicy] = useState<string | null>('terms');
  
  // Real-time Live Countdown Timer (Ticks every second)
  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number }>({
    hours: 11,
    minutes: 23,
    seconds: 22,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 11, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  
  const [bookingDate, setBookingDate] = useState<string>('2026-09-15');
  const [travelersCount, setTravelersCount] = useState<number>(2);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [bookingFormData, setBookingFormData] = useState({
    name: '',
    phone: '',
    email: '',
    notes: '',
  });

  const toggleDay = (dayIndex: number) => {
    setOpenDay(openDay === dayIndex ? null : dayIndex);
  };

  const togglePolicy = (policyKey: string) => {
    setOpenPolicy(openPolicy === policyKey ? null : policyKey);
  };

  // Smooth Scroll to corresponding section
  const scrollToSection = (sectionId: 'dayplan' | 'overview' | 'stay' | 'transfers' | 'inclusions' | 'policies') => {
    setActiveTab(sectionId);
    const element = document.getElementById(`section-${sectionId}`);
    if (element) {
      const yOffset = -120; // Accounts for sticky top bar + tab bar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Auto-track active tab while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const sections: Array<'overview' | 'dayplan' | 'stay' | 'transfers' | 'inclusions' | 'policies'> = [
        'policies',
        'inclusions',
        'transfers',
        'stay',
        'dayplan',
        'overview',
      ];

      const scrollPosition = window.scrollY + 160;

      for (const sec of sections) {
        const el = document.getElementById(`section-${sec}`);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveTab(sec);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setIsBookingModalOpen(false);
    }, 3000);
  };

  // Sample destination experiences photos
  const experienceThumbnails = [
    { title: 'Scenic Valley Viewpoint', img: pkg.heroImage },
    { title: 'Iconic Heritage Landmark', img: pkg.gallery?.[0] || pkg.heroImage },
    { title: 'Cultural Market & Street Walk', img: pkg.gallery?.[1] || pkg.heroImage },
    { title: 'Snow Mountain / Lake Excursion', img: pkg.gallery?.[2] || pkg.heroImage },
  ];

  return (
    <div className="w-full bg-[#f8fafc] min-h-screen text-gray-800 pb-20 font-sans">
      
      {/* ─── 1. TOP STICKY BAR (QUICK SUMMARY STRIP) ─── */}
      <div className="sticky top-0 z-40 w-full bg-[#1E6AD4] text-white shadow-md border-b border-blue-600 px-4 sm:px-8 py-2.5">
        <div className="max-w-[1360px] mx-auto flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2 sm:gap-4 overflow-hidden">
            <span className="font-bold text-white truncate max-w-[200px] sm:max-w-xs md:max-w-md">
              {pkg.title}
            </span>
            <span className="hidden sm:inline-block text-blue-200">•</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-blue-100 bg-white/15 px-2.5 py-0.5 rounded-full text-xs font-semibold">
              <FaClock className="text-xs" /> {pkg.duration}
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 ml-auto">
            <div className="text-right">
              <span className="text-[11px] text-blue-200 block sm:inline mr-1">Starts From</span>
              <strong className="text-base sm:text-lg font-black text-white">{pkg.price}</strong>
              <span className="text-[11px] text-blue-200 font-normal"> /person</span>
            </div>
            
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-white hover:bg-blue-50 text-[#1E6AD4] font-extrabold px-4 sm:px-5 py-1.5 rounded-full text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer"
            >
              Book Online
            </button>
          </div>
        </div>
      </div>

      {/* ─── 2. MAIN CONTAINER ─── */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        
        {/* Breadcrumb Row */}
        <div className="flex items-center flex-wrap gap-2 text-xs text-gray-500 mb-3 font-medium">
          <Link href="/" className="hover:text-[#1E6AD4] transition">Home</Link>
          <span>/</span>
          <Link href="/national" className="hover:text-[#1E6AD4] transition">{categoryLabel}</Link>
          <span>/</span>
          <span className="text-gray-900 font-semibold capitalize truncate max-w-[240px] sm:max-w-none">{destName}</span>
        </div>

        {/* Title & Badge Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-5">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-blue-100 text-[#1E6AD4] text-[11px] font-extrabold px-3 py-0.5 rounded-full uppercase tracking-wider">
                Customizable
              </span>
              <span className="bg-orange-100 text-[#f26c22] text-[11px] font-extrabold px-3 py-0.5 rounded-full">
                {pkg.duration}
              </span>
              <span className="bg-amber-100 text-amber-800 text-[11px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <FaStar className="text-amber-500 text-xs" /> {pkg.rating || 4.9} ({pkg.reviewsCount || 180}+ Reviews)
              </span>
              <span className="bg-emerald-100 text-emerald-800 text-[11px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <BsShieldCheck className="text-emerald-600 text-xs" /> Verified Stays
              </span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-[34px] font-black text-[#0f172a] leading-tight tracking-tight">
              {pkg.title}
            </h1>
            <p className="text-sm text-gray-600 mt-1 font-medium">
              {pkg.subtitle || `Handcrafted tour with deluxe hotel stays, private cab transfers and meals`}
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            <button 
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: pkg.title, url: window.location.href });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Link copied to clipboard!');
                }
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-xs font-bold text-gray-700 shadow-xs transition"
            >
              <FaShareAlt className="text-gray-500" /> Share
            </button>
          </div>
        </div>

        {/* ─── 3. GRID LAYOUT: LEFT CONTENT (65%) + RIGHT SIDEBAR (35%) ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ════════ LEFT COLUMN ════════ */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Main Featured Photo Box */}
            <div className="relative w-full h-[320px] sm:h-[420px] md:h-[460px] rounded-[20px] overflow-hidden shadow-lg border border-gray-200/80 bg-gray-900 group">
              <img
                src={pkg.heroImage}
                alt={pkg.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white z-10">
                <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 text-xs font-semibold">
                  <FaMapMarkerAlt className="text-[#f26c22]" />
                  <span>{pkg.location}</span>
                </div>
                <div className="bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 text-xs font-semibold flex items-center gap-1.5">
                  <FaCamera className="text-amber-400" />
                  <span>Full Itinerary & Stay Included</span>
                </div>
              </div>
            </div>

            {/* Quick Navigation Tabs Bar (Sticky & Fully Functional) */}
            <div className="sticky top-[52px] z-30 bg-white/95 backdrop-blur-md rounded-2xl p-1.5 border border-gray-200 shadow-md flex items-center gap-1 overflow-x-auto no-scrollbar">
              {[
                { id: 'dayplan', label: 'Day Plan' },
                { id: 'overview', label: 'Overview' },
                { id: 'stay', label: 'Hotels & Stay' },
                { id: 'transfers', label: 'Transfers' },
                { id: 'inclusions', label: 'Inclusions' },
                { id: 'policies', label: 'Policies' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-[#1E6AD4] text-white shadow-sm scale-102'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* ─── TOUR OVERVIEW & HIGHLIGHTS ─── */}
            <div id="section-overview" className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-200 shadow-xs scroll-mt-28">
              <h2 className="text-lg sm:text-xl font-extrabold text-[#0f172a] mb-3 flex items-center gap-2">
                <BsStars className="text-[#f26c22]" /> Tour Overview & Key Highlights
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-5 font-normal">
                {pkg.overview || `Experience the best of ${destName} on this all-inclusive handcrafted tour. Curated with comfortable private transportation, verified hotel rooms, daily meals, and 24/7 on-ground assistance.`}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-gray-100">
                {(pkg.highlights && pkg.highlights.length > 0 ? pkg.highlights : [
                  'Complete sightseeing in private sanitized vehicle',
                  '3/4-Star deluxe hotel accommodation with scenic views',
                  'Daily breakfast and dinner prepared fresh',
                  'Dedicated tour coordinator & 24/7 helpline',
                ]).map((hl, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-blue-50 text-[#1E6AD4] flex items-center justify-center shrink-0 mt-0.5">
                      <FaCheck className="text-[10px]" />
                    </span>
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ─── DAY-BY-DAY DETAILED ITINERARY (MATCHING REFERENCE IMAGE 2) ─── */}
            <div id="section-dayplan" className="space-y-4 scroll-mt-28">
              <div className="flex items-center justify-between px-1">
                <h2 className="text-xl font-extrabold text-[#0f172a] tracking-tight">
                  Day-by-Day Detailed Itinerary
                </h2>
                <span className="text-xs text-gray-500 font-semibold bg-gray-100 px-3 py-1 rounded-full">
                  {pkg.itinerary?.length || 5} Days Planned
                </span>
              </div>

              {pkg.itinerary?.map((dayPlan, idx) => {
                const isOpen = openDay === dayPlan.day;
                return (
                  <div 
                    key={dayPlan.day || idx}
                    className="bg-white rounded-2xl border border-gray-200 shadow-xs overflow-hidden transition-all duration-200"
                  >
                    {/* Day Header Accordion Toggle */}
                    <button
                      onClick={() => toggleDay(dayPlan.day)}
                      className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left hover:bg-gray-50/80 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="bg-[#1E6AD4] text-white text-xs font-black px-3 py-1.5 rounded-lg shrink-0 shadow-xs">
                          Day {dayPlan.day}
                        </div>
                        <div>
                          <h3 className="font-bold text-sm sm:text-base text-gray-900 leading-snug">
                            {dayPlan.title}
                          </h3>
                          <div className="flex items-center gap-3 text-xs text-gray-500 mt-0.5 font-medium">
                            <span className="inline-flex items-center gap-1.5 text-gray-600">
                              <FaCar className="text-[#1E6AD4] text-xs" />
                              Private Cab Transfer
                            </span>
                            <span>•</span>
                            <span className="inline-flex items-center gap-1.5 text-gray-600">
                              <FaUtensils className="text-orange-500 text-xs" />
                              {dayPlan.meals || 'Breakfast & Dinner'}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 bg-blue-50 text-[#1E6AD4]' : ''}`}>
                        <FaChevronDown className="text-xs" />
                      </div>
                    </button>

                    {/* Day Content Area */}
                    {isOpen && (
                      <div className="p-4 sm:p-6 pt-2 border-t border-gray-100 space-y-5 bg-white">
                        
                        {/* Day Description */}
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                          {dayPlan.description}
                        </p>

                        {/* 1. Private Transfer Box (Exact match from reference image) */}
                        <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200 flex items-start gap-3.5">
                          <div className="w-12 h-12 rounded-lg bg-blue-100 text-[#1E6AD4] flex items-center justify-center shrink-0 text-xl">
                            <FaCar />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between gap-2">
                              <h4 className="font-bold text-xs sm:text-sm text-gray-900">
                                Private Transfer - Sedan / SUV
                              </h4>
                              <span className="text-[10.5px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                                Included
                              </span>
                            </div>
                            <p className="text-xs text-gray-500 mt-0.5">
                              Comfortable sanitized AC vehicle with experienced driver. Covers all tolls, parking, and scenic photo stops.
                            </p>
                          </div>
                        </div>

                        {/* 2. Hotel / Stay Box (Exact match from reference image) */}
                        <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                          <div className="flex items-center gap-3.5">
                            <div className="w-12 h-12 rounded-lg bg-orange-100 text-[#f26c22] flex items-center justify-center shrink-0 text-xl">
                              <FaHotel />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <h4 className="font-bold text-xs sm:text-sm text-gray-900">
                                  {dayPlan.stay || pkg.hotelType || 'Premium Deluxe Hotel / Resort'}
                                </h4>
                                <div className="flex items-center text-amber-500 text-xs gap-0.5">
                                  <FaStar />
                                  <FaStar />
                                  <FaStar />
                                  <FaStar />
                                  <FaStar className="opacity-40" />
                                </div>
                              </div>
                              <p className="text-xs text-gray-500 mt-0.5">
                                Deluxe Mountain / City View Room • Meal Plan: {dayPlan.meals || 'Breakfast & Dinner'}
                              </p>
                            </div>
                          </div>

                          <span className="text-[11px] font-bold text-[#1E6AD4] bg-blue-50 border border-blue-200 px-3 py-1 rounded-full self-end sm:self-auto inline-flex items-center gap-1">
                            Verified Stay <FaCheck className="text-[10px]" />
                          </span>
                        </div>

                        {/* 3. Experiences Thumbnails Gallery (Exact match from reference image) */}
                        <div>
                          <h4 className="text-xs font-extrabold text-gray-800 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                            <FaCamera className="text-[#f26c22]" /> You will be exploring these amazing experiences:
                          </h4>
                          
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                            {(dayPlan.activities && dayPlan.activities.length > 0 
                              ? dayPlan.activities 
                              : ['Scenic Valley View', 'Local Culture Hub', 'Famous Temple / Landmark', 'Evening Leisure Stroll']
                            ).slice(0, 4).map((act, i) => (
                              <div key={i} className="group relative h-24 rounded-xl overflow-hidden bg-gray-900 shadow-xs border border-gray-100">
                                <img
                                  src={pkg.gallery?.[i % (pkg.gallery?.length || 1)] || pkg.heroImage}
                                  alt={act}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex items-end p-2">
                                  <span className="text-white text-[11px] font-bold leading-tight line-clamp-2 drop-shadow-xs">
                                    {act}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* ─── HOTELS & STAYS SECTION ─── */}
            <div id="section-stay" className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-200 shadow-xs scroll-mt-28 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg sm:text-xl font-extrabold text-[#0f172a] flex items-center gap-2">
                  <FaHotel className="text-[#f26c22]" /> Hotels & Accommodations
                </h3>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                  100% Verified Stays
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600">
                All hotels are hand-picked for high hygiene standards, scenic views, and prime connectivity.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 text-[#f26c22] flex items-center justify-center shrink-0 text-lg">
                    <FaHotel />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">{pkg.hotelType || '3/4-Star Deluxe Hotel / Resort'}</h4>
                    <p className="text-xs text-gray-500 mt-0.5">Spacious AC Deluxe Room with balcony / mountain view</p>
                    <div className="flex items-center gap-3 mt-2 text-[11px] font-bold text-[#1E6AD4]">
                      <span className="inline-flex items-center gap-1"><FaCheck className="text-[10px]" /> Free Wi-Fi</span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1"><FaCheck className="text-[10px]" /> Hot Water</span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1"><FaCheck className="text-[10px]" /> Room Service</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 text-lg">
                    <FaUtensils />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">Included Meal Plan (MAPAI)</h4>
                    <p className="text-xs text-gray-500 mt-0.5">Daily buffet breakfast and freshly prepared multi-cuisine dinner</p>
                    <div className="flex items-center gap-3 mt-2 text-[11px] font-bold text-emerald-700">
                      <span className="inline-flex items-center gap-1"><FaCheck className="text-[10px]" /> Veg & Non-Veg Options</span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1"><FaCheck className="text-[10px]" /> Kids Friendly</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ─── TRANSFERS & TRANSPORT SECTION ─── */}
            <div id="section-transfers" className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-200 shadow-xs scroll-mt-28 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg sm:text-xl font-extrabold text-[#0f172a] flex items-center gap-2">
                  <FaCar className="text-[#1E6AD4]" /> Transfers & Sightseeing Cab
                </h3>
                <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                  Dedicated Private Cab
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600">
                Door-to-door private cab service throughout the entire tour duration without any sharing hassles.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-100 text-center">
                  <span className="text-xs font-extrabold text-gray-900 flex items-center justify-center gap-1.5">
                    <FaCar className="text-[#1E6AD4]" /> Private AC Vehicle
                  </span>
                  <span className="text-[11px] text-gray-500 mt-0.5 block">Sedan / Ertiga / Innova based on group size</span>
                </div>
                <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-100 text-center">
                  <span className="text-xs font-extrabold text-gray-900 flex items-center justify-center gap-1.5">
                    <FaGasPump className="text-amber-600" /> All Expenses Covered
                  </span>
                  <span className="text-[11px] text-gray-500 mt-0.5 block">Fuel, Tolls, State Taxes & Parking Included</span>
                </div>
                <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-100 text-center">
                  <span className="text-xs font-extrabold text-gray-900 flex items-center justify-center gap-1.5">
                    <FaUserTie className="text-emerald-600" /> Verified Driver
                  </span>
                  <span className="text-[11px] text-gray-500 mt-0.5 block">Experienced local chauffeur & guide support</span>
                </div>
              </div>
            </div>

            {/* ─── INCLUSIONS & EXCLUSIONS ─── */}
            <div id="section-inclusions" className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-200 shadow-xs space-y-6 scroll-mt-28">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-emerald-800 mb-3 flex items-center gap-2">
                  <FaCheckCircle className="text-emerald-600" /> What&apos;s Included in This Package
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {(pkg.inclusions || [
                    '4 Nights accommodation in 3/4-Star verified hotels',
                    'Daily fresh breakfast and dinner',
                    'Complete private vehicle transfers with driver',
                    'Tolls, parking fees, driver allowance and fuel',
                    '24/7 dedicated trip support coordinator',
                  ]).map((inc, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                      <FaCheck className="text-emerald-600 text-xs shrink-0 mt-1" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <h3 className="text-base sm:text-lg font-bold text-rose-800 mb-3 flex items-center gap-2">
                  <FaTimes className="text-rose-600" /> What&apos;s Excluded
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {(pkg.exclusions || [
                    'Flight / Train tickets to base city',
                    'Monument entrance tickets & adventure activity fees',
                    'Personal expenses (laundry, telephone, room service)',
                    'Any item not specified in inclusions',
                  ]).map((exc, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                      <FaTimes className="text-rose-500 text-xs shrink-0 mt-1" />
                      <span>{exc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ─── POLICIES & TERMS ACCORDIONS ─── */}
            <div id="section-policies" className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-200 shadow-xs space-y-3 scroll-mt-28">
              <h3 className="text-lg font-extrabold text-[#0f172a] mb-3">
                Important Policies & Terms
              </h3>

              {[
                {
                  id: 'terms',
                  title: 'Terms & Conditions',
                  content: 'All bookings are confirmed upon advance token payment. Rates are subject to seasonal revisions. Identification documents (Aadhaar / Voter ID / Passport) are mandatory during hotel check-in.'
                },
                {
                  id: 'cancellation',
                  title: 'Cancellation & Refund Policy',
                  content: 'Free cancellation up to 15 days before travel date with 100% refund. 50% refund between 7-14 days. Non-refundable within 7 days of departure as per hotel and transport agreements.'
                },
                {
                  id: 'confirmation',
                  title: 'Instant Confirmation & Payment Modes',
                  content: 'You will receive immediate digital booking vouchers and invoice via Email & WhatsApp. We accept UPI, Net Banking, Credit/Debit Cards, and EMI options.'
                }
              ].map((p) => (
                <div key={p.id} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => togglePolicy(p.id)}
                    className="w-full px-4 py-3 bg-gray-50 flex items-center justify-between text-left text-xs sm:text-sm font-bold text-gray-800 hover:bg-gray-100 transition cursor-pointer"
                  >
                    <span>{p.title}</span>
                    <FaChevronDown className={`text-xs transition-transform ${openPolicy === p.id ? 'rotate-180 text-[#1E6AD4]' : ''}`} />
                  </button>
                  {openPolicy === p.id && (
                    <div className="p-4 text-xs text-gray-600 leading-relaxed bg-white border-t border-gray-100">
                      {p.content}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>

          {/* ════════ RIGHT COLUMN (STICKY BOOKING SIDEBAR) ════════ */}
          <div className="lg:col-span-4 sticky top-16 space-y-4">
            
            {/* Main Pricing & Booking Card (Exact match from reference image 2) */}
            <div className="bg-white rounded-[22px] p-5 sm:p-6 border border-gray-200 shadow-xl relative overflow-hidden">
              
              {/* Real-time Live Deal Banner (Exact Match with Reference Image 2) */}
              <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-2xl p-3 sm:p-3.5 mb-4.5 flex items-center gap-3">
                {/* Stopwatch Icon */}
                <div className="text-[#16a34a] shrink-0">
                  <BsStopwatchFill className="w-7 h-7" />
                </div>

                {/* Deal Text & Timer */}
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[13px] sm:text-[13.5px] font-black text-[#15803d] tracking-tight leading-none">
                      Lowest Price! Today Only Deals
                    </span>
                    <span className="text-[13px] sm:text-[13.5px] font-mono font-black text-[#16a34a] whitespace-nowrap">
                      {String(timeLeft.hours).padStart(2, '0')}h : {String(timeLeft.minutes).padStart(2, '0')}m : {String(timeLeft.seconds).padStart(2, '0')}s
                    </span>
                  </div>
                  
                  <span className="text-[11.5px] font-semibold text-[#16a34a] mt-1 block leading-tight">
                    {pkg.reviewsCount ? pkg.reviewsCount - 1 : '179'} people have booked, hurry up!
                  </span>
                </div>
              </div>

              {/* Pricing Section */}
              <div className="mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-[#0f172a] tracking-tight">
                    {pkg.price}
                  </span>
                  <span className="text-xs text-gray-500 font-medium">/ person</span>
                </div>
                
                <div className="flex items-center gap-2 mt-1 text-xs">
                  <span className="text-gray-400 line-through font-medium">
                    {pkg.originalPrice || '₹24,999'}
                  </span>
                  <span className="text-emerald-600 font-bold">
                    (Inclusive of all taxes)
                  </span>
                </div>
              </div>

              {/* Date & Travelers Inputs */}
              <div className="space-y-3 pt-3 border-t border-gray-100 mb-5">
                <div>
                  <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-1">
                    Select Travel Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="w-full text-xs font-semibold px-3 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E6AD4] transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-1">
                    Number of Travelers
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 4, '6+'].map((cnt, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setTravelersCount(typeof cnt === 'number' ? cnt : 6)}
                        className={`flex-1 py-1.5 rounded-lg text-xs font-bold border transition ${
                          (typeof cnt === 'number' ? travelersCount === cnt : travelersCount >= 6)
                            ? 'bg-[#1E6AD4] text-white border-[#1E6AD4] shadow-xs'
                            : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                        }`}
                      >
                        {cnt} {cnt === 1 ? 'Guest' : 'Guests'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5">
                <button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="w-full bg-gradient-to-r from-[#1E6AD4] to-[#0052CC] hover:from-[#0055E5] hover:to-[#003EA8] text-white font-extrabold py-3.5 rounded-xl text-sm shadow-[0_4px_16px_rgba(0,102,255,0.35)] active:scale-98 transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <BsLightningChargeFill className="text-yellow-300" />
                  Proceed to Book Online
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="https://wa.me/918091660060?text=Hi%2C%20I%20am%20interested%20in%20booking%20this%20tour%20package"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 border border-emerald-200 transition"
                  >
                    <FaWhatsapp className="text-emerald-600 text-sm" /> WhatsApp
                  </a>
                  <a
                    href="tel:+918091660060"
                    className="bg-orange-50 hover:bg-orange-100 text-orange-700 font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 border border-orange-200 transition"
                  >
                    <FaPhoneAlt className="text-orange-600 text-xs" /> Call Expert
                  </a>
                </div>
              </div>

              {/* Promo Code Box */}
              <div className="mt-4 pt-3.5 border-t border-gray-100">
                <div className="flex items-center justify-between gap-2 bg-amber-50/70 border border-amber-200/80 rounded-xl p-2 px-3">
                  <div className="flex items-center gap-2">
                    <FaTag className="text-[#f26c22] text-xs" />
                    <div>
                      <span className="text-xs font-mono font-bold text-gray-900">{appliedCoupon}</span>
                      <span className="text-[10px] text-gray-500 block leading-none">Flat ₹500 OFF Applied</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-extrabold text-emerald-600 bg-white px-2 py-0.5 rounded border border-emerald-200 inline-flex items-center gap-1">
                    APPLIED <FaCheck className="text-[10px]" />
                  </span>
                </div>
              </div>

              {/* Trust Badges List */}
              <div className="mt-4 pt-3 border-t border-gray-100 space-y-2 text-[11px] text-gray-600 font-medium">
                <div className="flex items-center gap-2">
                  <BsShieldCheck className="text-[#1E6AD4] text-sm shrink-0" />
                  <span>100% Customizable & Verified Stay</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCar className="text-[#1E6AD4] text-sm shrink-0" />
                  <span>Dedicated Private sanitized vehicle</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaFileInvoiceDollar className="text-[#1E6AD4] text-sm shrink-0" />
                  <span>Transparent Pricing with No Hidden Fees</span>
                </div>
              </div>

            </div>

            {/* Need Help Box */}
            <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-2xl p-4 sm:p-5 shadow-md">
              <h4 className="font-extrabold text-sm text-white mb-1">
                Need Help Customizing?
              </h4>
              <p className="text-xs text-gray-300 leading-relaxed mb-3">
                Speak directly with our destination specialist for personalized dates and hotel upgrades.
              </p>
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="w-full bg-[#f26c22] hover:bg-[#e05e16] text-white font-bold py-2 rounded-xl text-xs transition shadow-sm cursor-pointer"
              >
                Request Free Callback
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* ─── 4. BOOKING / ENQUIRY MODAL POPUP ─── */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative animate-scaleUp">
            
            <button
              onClick={() => setIsBookingModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 transition"
            >
              <FaTimes />
            </button>

            {isSuccess ? (
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3 text-3xl">
                  <FaCheck />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Enquiry Submitted!</h3>
                <p className="text-xs text-gray-600 mt-1">
                  Our travel specialist will contact you with the best customized quote shortly.
                </p>
              </div>
            ) : (
              <div>
                <div className="mb-4">
                  <span className="text-[11px] font-bold text-[#1E6AD4] uppercase tracking-wider">
                    Instant Booking & Custom Quote
                  </span>
                  <h3 className="text-lg font-black text-gray-900 leading-tight">
                    {pkg.title}
                  </h3>
                  <div className="text-xs text-gray-500 mt-0.5">
                    {pkg.duration} • <strong className="text-gray-800">{pkg.price}</strong> /person
                  </div>
                </div>

                <form onSubmit={handleBookingSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Full Name</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={bookingFormData.name}
                      onChange={(e) => setBookingFormData({ ...bookingFormData, name: e.target.value })}
                      className="w-full text-xs px-3 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1E6AD4] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Phone / WhatsApp Number</label>
                    <input
                      required
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={bookingFormData.phone}
                      onChange={(e) => setBookingFormData({ ...bookingFormData, phone: e.target.value })}
                      className="w-full text-xs px-3 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1E6AD4] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="rahul@example.com"
                      value={bookingFormData.email}
                      onChange={(e) => setBookingFormData({ ...bookingFormData, email: e.target.value })}
                      className="w-full text-xs px-3 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1E6AD4] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#1E6AD4] hover:bg-blue-700 text-white font-bold py-3 rounded-xl text-sm shadow-md transition-all cursor-pointer"
                  >
                    Confirm & Send Enquiry
                  </button>
                </form>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
