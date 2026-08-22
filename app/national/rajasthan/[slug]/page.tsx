'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  FaMapMarkerAlt,
  FaStar,
  FaPhoneAlt,
  FaWhatsapp,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
  FaMountain,
  FaHotel,
  FaCar,
  FaUtensils,
  FaChevronDown,
  FaPaperPlane,
  FaShieldAlt,
  FaAward,
} from 'react-icons/fa';
import { BsArrowRight, BsCheckLg, BsStars } from 'react-icons/bs';
import { allDestinations } from '@/data/allDestinations';

export default function RajasthanPackageDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const rajasthanData = allDestinations['rajasthan'];
  const pkg = rajasthanData.packages.find((p) => p.slug === resolvedParams.slug);

  if (!pkg) {
    notFound();
  }

  const [activeDay, setActiveDay] = useState<number | null>(1);
  const [selectedImage, setSelectedImage] = useState<string>(pkg.heroImage);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    travelDate: '',
    travelers: '2',
  });

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const otherPackages = rajasthanData.packages.filter((p) => p.id !== pkg.id).slice(0, 3);

  return (
    <main className="flex flex-col w-full overflow-x-hidden bg-[#fcf9f5] min-h-screen text-gray-800">
      
      {/* ─── 1. PACKAGE HERO HEADER ─── */}
      <section className="relative w-full min-h-[380px] md:min-h-[460px] flex items-center overflow-hidden">
        <img
          src={pkg.heroImage}
          alt={pkg.title}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.32)' }}
        />
        <div className="absolute inset-0 " />

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 w-full py-12">
          
          {/* Breadcrumbs */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-white text-[12px] font-medium mb-4 shadow">
            <Link href="/" className="hover:text-[#f26c22] transition">Home</Link>
            <span>/</span>
            <Link href="/national" className="hover:text-[#f26c22] transition">National</Link>
            <span>/</span>
            <Link href="/national/rajasthan" className="hover:text-[#f26c22] transition">Rajasthan</Link>
            <span>/</span>
            <span className="text-[#f26c22] font-semibold truncate max-w-[200px] sm:max-w-none">{pkg.title}</span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            <span className="bg-[#f26c22] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {pkg.category} Package
            </span>
            <span className="bg-white/20 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
              <FaClock className="text-[#f26c22]" /> {pkg.duration}
            </span>
            <span className="bg-amber-500/30 text-amber-300 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 border border-amber-400/40">
              <FaStar className="text-amber-400" /> {pkg.rating} ({pkg.reviewsCount} Verified Reviews)
            </span>
          </div>

          <h1 className="text-[28px] sm:text-[40px] md:text-[48px] font-black text-white leading-[1.18] tracking-tight max-w-4xl mb-3">
            {pkg.title}
          </h1>

          <p className="text-gray-200 text-sm sm:text-base max-w-2xl font-light leading-relaxed mb-6">
            {pkg.subtitle}
          </p>

          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 font-medium">
            <FaMapMarkerAlt className="text-[#f26c22] shrink-0" />
            <span>Destinations Covered: <strong className="text-white">{pkg.location}</strong></span>
          </div>

        </div>
      </section>

      {/* ─── 2. MAIN DETAIL CONTENT & BOOKING SIDEBAR ─── */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 lg:px-16 max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* ═══ LEFT MAIN CONTENT (8 Cols) ═══ */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Photo Gallery & Preview */}
            <div className="bg-white rounded-3xl p-4 sm:p-6 border border-gray-100 shadow-sm">
              <div className="relative h-[320px] sm:h-[440px] rounded-2xl overflow-hidden mb-4 bg-gray-100">
                <img
                  src={selectedImage}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>
              <div className="grid grid-cols-4 gap-3">
                {pkg.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`relative h-20 sm:h-24 rounded-xl overflow-hidden border-2 transition cursor-pointer ${
                      selectedImage === img ? 'border-[#f26c22] scale-95 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Preview ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Feature Highlights Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#f26c22] flex items-center justify-center text-lg shrink-0">
                  <FaClock />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Duration</div>
                  <div className="text-xs sm:text-sm font-bold text-gray-900">{pkg.duration}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#1E6AD4] flex items-center justify-center text-lg shrink-0">
                  <FaHotel />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Stay Type</div>
                  <div className="text-xs sm:text-sm font-bold text-gray-900">{pkg.hotelType.split('/')[0]}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-lg shrink-0">
                  <FaUtensils />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Meal Plan</div>
                  <div className="text-xs sm:text-sm font-bold text-gray-900">Breakfast &amp; Dinner</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center text-lg shrink-0">
                  <FaCar />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Transfer</div>
                  <div className="text-xs sm:text-sm font-bold text-gray-900">Private Cab</div>
                </div>
              </div>
            </div>

            {/* Overview */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm">
              <h2 className="text-[22px] font-black text-gray-900 mb-3 flex items-center gap-2">
                <BsStars className="text-[#f26c22]" /> Tour Overview
              </h2>
              <p className="text-gray-600 text-[14.5px] leading-[1.8] mb-6">
                {pkg.overview}
              </p>

              <h3 className="text-[16px] font-bold text-gray-900 mb-3">Key Highlights:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pkg.highlights.map((hl, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 font-medium">
                    <FaCheckCircle className="text-[#f26c22] text-sm shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Day-by-Day Interactive Detailed Itinerary */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
                <h2 className="text-[22px] font-black text-gray-900">
                  Day-by-Day Detailed Itinerary
                </h2>
                <span className="text-xs font-semibold text-gray-400">
                  {pkg.itinerary.length} Days Planned with Precision
                </span>
              </div>

              <div className="space-y-4">
                {pkg.itinerary.map((day) => {
                  const isOpen = activeDay === day.day;
                  return (
                    <div
                      key={day.day}
                      className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                        isOpen ? 'border-[#f26c22] shadow-md ring-1 ring-[#f26c22]/20' : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {/* Day Accordion Header */}
                      <button
                        onClick={() => setActiveDay(isOpen ? null : day.day)}
                        className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 bg-white"
                      >
                        <div className="flex items-center gap-3.5 min-w-0">
                          <span className={`w-9 h-9 rounded-xl font-black text-sm flex items-center justify-center shrink-0 ${
                            isOpen ? 'bg-[#f26c22] text-white' : 'bg-gray-100 text-gray-700'
                          }`}>
                            D{day.day}
                          </span>
                          <div className="min-w-0">
                            <h3 className="text-[15px] sm:text-[16px] font-bold text-gray-900 truncate">
                              Day {day.day}: {day.title}
                            </h3>
                            <div className="flex items-center gap-3 text-xs text-gray-400 mt-0.5">
                              <span>🍽️ {day.meals}</span>
                              <span>🏨 {day.stay}</span>
                            </div>
                          </div>
                        </div>

                        <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                          isOpen ? 'bg-[#f26c22] text-white rotate-180' : 'bg-gray-100 text-gray-500'
                        }`}>
                          <FaChevronDown className="text-xs" />
                        </div>
                      </button>

                      {/* Day Accordion Content */}
                      {isOpen && (
                        <div className="p-4 sm:p-6 pt-2 bg-[#fcf9f5] border-t border-gray-100 space-y-4 text-[13.5px] sm:text-[14px]">
                          <p className="text-gray-600 leading-relaxed">
                            {day.description}
                          </p>

                          <div>
                            <div className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                              Day {day.day} Inclusions &amp; Activities:
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {day.activities.map((act, i) => (
                                <span key={i} className="bg-white border border-gray-200 text-gray-700 text-xs font-semibold px-3 py-1 rounded-lg shadow-sm">
                                  ✓ {act}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm">
              <h2 className="text-[22px] font-black text-gray-900 mb-6">
                Inclusions &amp; Exclusions
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Inclusions */}
                <div className="space-y-3">
                  <div className="text-sm font-bold text-emerald-700 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                    <BsCheckLg className="text-base" /> What&apos;s Included
                  </div>
                  {pkg.inclusions.map((inc, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                      <FaCheckCircle className="text-emerald-500 text-sm shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>

                {/* Exclusions */}
                <div className="space-y-3">
                  <div className="text-sm font-bold text-rose-600 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                    <FaTimesCircle className="text-base" /> What&apos;s Not Included
                  </div>
                  {pkg.exclusions.map((exc, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-500">
                      <FaTimesCircle className="text-rose-400 text-sm shrink-0 mt-0.5" />
                      <span>{exc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* ═══ RIGHT STICKY BOOKING CARD (4 Cols) ═══ */}
          <div className="lg:col-span-4 sticky top-[120px] space-y-6">
            
            {/* Booking Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-100 shadow-[0_10px_35px_rgba(0,0,0,0.08)]">
              
              {/* Price Tag */}
              <div className="border-b border-gray-100 pb-5 mb-5">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-[#10b981] bg-emerald-50 px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                    Special Direct Rate
                  </span>
                  <span className="text-xs text-gray-400 line-through font-semibold">{pkg.originalPrice}</span>
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-[32px] font-black text-[#f26c22]">{pkg.price}</span>
                  <span className="text-xs text-gray-500 font-medium">/ person (All Inclusive)</span>
                </div>
              </div>

              {formSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center text-emerald-900">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center text-2xl mx-auto mb-3">
                    ✓
                  </div>
                  <h4 className="font-bold text-base mb-1">Quote Request Sent!</h4>
                  <p className="text-xs text-emerald-700 leading-relaxed mb-4">
                    Our Rajasthan travel consultant will contact you via WhatsApp &amp; Call with your customized itinerary.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-bold text-[#111827] underline"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-3.5">
                  <h3 className="font-bold text-gray-900 text-[15px] mb-1">Get Instant Free Quote &amp; Itinerary</h3>
                  
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name *"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#f26c22]"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="WhatsApp / Phone Number *"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#f26c22]"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <input
                        type="date"
                        required
                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#f26c22] bg-white text-gray-700"
                        value={formData.travelDate}
                        onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                      />
                    </div>
                    <div>
                      <select
                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#f26c22] bg-white text-gray-700"
                        value={formData.travelers}
                        onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                      >
                        <option value="1">1 Person</option>
                        <option value="2">2 Persons</option>
                        <option value="3-5">3 - 5 Persons</option>
                        <option value="6+">6+ Persons</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#f26c22] hover:bg-[#d95d1a] text-white py-3.5 rounded-xl font-bold text-xs transition shadow-md flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01]"
                  >
                    <FaPaperPlane className="text-xs" />
                    <span>Request Custom Quote &amp; Booking</span>
                  </button>
                </form>
              )}

              {/* Direct WhatsApp CTA */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <a
                  href={`https://wa.me/918091660060?text=Hello%20Zoyo%20Trip,%20I%20want%20to%20book%20the%20${encodeURIComponent(pkg.title)}%20package`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-3 rounded-xl font-bold text-xs transition flex items-center justify-center gap-2 shadow-sm"
                >
                  <FaWhatsapp className="text-base" />
                  <span>Chat With Tour Expert on WhatsApp</span>
                </a>
              </div>

              {/* Call Hotline */}
              <div className="mt-3 text-center">
                <a
                  href="tel:+918091660060"
                  className="text-xs font-semibold text-gray-600 hover:text-[#1E6AD4] flex items-center justify-center gap-1.5"
                >
                  <FaPhoneAlt className="text-xs text-[#f26c22]" /> Call Helpline: (+91) 8091660060
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="mt-5 pt-4 border-t border-gray-100 space-y-2 text-[11.5px] text-gray-500">
                <div className="flex items-center gap-2">
                  <FaShieldAlt className="text-[#10b981]" />
                  <span>100% Safe Payments (Credit Card / UPI / NetBanking)</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaAward className="text-[#f26c22]" />
                  <span>Government Registered Tour Operator</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#1E6AD4]" />
                  <span>No Hidden Surcharges &amp; Transparent Billing</span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* ─── 3. OTHER RELATED RAJASTHAN PACKAGES ─── */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <h2 className="text-[26px] font-black text-gray-900 mb-8">
            You Might Also Like Other Rajasthan Packages
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherPackages.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <img
                      src={item.heroImage}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 bg-[#f26c22] text-white text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase">
                      {item.category}
                    </div>
                    <div className="absolute bottom-3 left-3 text-white text-xs font-semibold">
                      {item.duration}
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="text-xs text-[#1E6AD4] font-semibold mb-1 truncate">{item.location}</div>
                    <h3 className="font-bold text-gray-900 group-hover:text-[#f26c22] transition-colors text-base line-clamp-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-gray-100 flex items-center justify-between mt-4">
                  <div>
                    <span className="text-xs text-gray-400 block">Starting from</span>
                    <span className="text-lg font-black text-[#f26c22]">{item.price}</span>
                  </div>
                  <Link
                    href={`/national/rajasthan/${item.slug}`}
                    className="bg-[#111827] hover:bg-[#f26c22] text-white px-4 py-2 rounded-xl font-bold text-xs transition-colors flex items-center gap-1"
                  >
                    <span>View Tour</span>
                    <BsArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

    </main>
  );
}
