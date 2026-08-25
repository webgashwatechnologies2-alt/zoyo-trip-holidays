'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  FaTimes, 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaUser, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaCalendarAlt, 
  FaUsers, 
  FaShieldAlt, 
  FaStar, 
  FaCheckCircle, 
  FaTag,
  FaHeadset,
  FaArrowRight
} from 'react-icons/fa';
import { BsCheckCircleFill, BsLightningChargeFill, BsShieldCheck } from 'react-icons/bs';

// Partner Logos
import irctcLogo from '@/public/assets/images/partners/IRCTC_Partner.webp';
import mmtLogo from '@/public/assets/images/partners/MakeMyTrip_Partner.webp';
import expediaLogo from '@/public/assets/images/partners/Expedia_Partner.webp';
import bookingLogo from '@/public/assets/images/partners/booking.com_partner.webp';
import spitiWinterImg from '@/public/assets/images/packageimages/sptwinterexp.webp';

const POPULAR_DESTINATIONS = [
  'Himachal Pradesh',
  'Kashmir',
  'Spiti Valley',
  'Goa',
  'Andaman',
  'Kerala',
  'Rajasthan',
  'Dubai',
  'Bali',
  'Maldives',
  'Thailand',
  'Vietnam',
];

const TRIP_TYPES = [
  'Family Holiday',
  'Honeymoon / Couple',
  'Group & Friends',
  'Solo Adventure',
  'Corporate Tour'
];

export default function EnquiryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    dialCode: '+91',
    mobile: '',
    email: '',
    destination: '',
    travelDate: '',
    adults: 2,
    children: 0,
    tripType: 'Family Holiday',
  });

  // Auto-open modal automatically whenever the page loads / reloads
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1200); // Smooth 1.2 second delay after page load

    return () => clearTimeout(timer);
  }, []);

  // Listen to custom trigger events from anywhere on the website
  useEffect(() => {
    const handleOpenModal = () => setIsOpen(true);
    window.addEventListener('open-enquiry-modal', handleOpenModal);
    return () => window.removeEventListener('open-enquiry-modal', handleOpenModal);
  }, []);

  // Close on Escape key & manage body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile) return;
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      dialCode: '+91',
      mobile: '',
      email: '',
      destination: '',
      travelDate: '',
      adults: 2,
      children: 0,
      tripType: 'Family Holiday',
    });
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Quick Action Trigger Badge */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-40 flex items-center gap-2.5 bg-gradient-to-r from-[#f26c22] via-[#ea580c] to-[#d97706] text-white px-4 py-3 rounded-full shadow-2xl hover:shadow-orange-500/40 hover:scale-105 transition-all duration-300 group cursor-pointer border-2 border-white"
        title="Get Exclusive Travel Quote"
        aria-label="Enquire Now"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-200"></span>
        </span>
        <BsLightningChargeFill className="text-yellow-300 text-base group-hover:rotate-12 transition-transform" />
        <span className="text-sm font-bold tracking-wide hidden sm:inline">Get Instant Free Quote</span>
        <span className="text-sm font-bold tracking-wide sm:hidden">Quote</span>
      </button>

      {/* Modal Backdrop & Container */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto backdrop-blur-md bg-slate-900/60 animate-fadeIn transition-opacity"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          <div 
            className="relative w-full max-w-5xl bg-white text-slate-800 rounded-2xl md:rounded-3xl shadow-[0_25px_70px_-15px_rgba(0,0,0,0.35)] border border-slate-100 overflow-hidden flex flex-col md:flex-row max-h-[92vh] md:max-h-[88vh] animate-scaleUp"
            role="dialog"
            aria-modal="true"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-100 hover:bg-red-50 text-slate-500 hover:text-red-600 flex items-center justify-center transition-all duration-200 shadow-sm border border-slate-200 hover:border-red-200 cursor-pointer"
              aria-label="Close modal"
            >
              <FaTimes className="text-sm" />
            </button>

            {/* Left Panel: Trust & Brand Showcase (Light Aesthetic) */}
            <div className="w-full md:w-[45%] bg-gradient-to-br from-orange-50/60 via-slate-50 to-amber-50/40 p-5 sm:p-6 lg:p-7 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-200/80 overflow-y-auto">
              <div>
                {/* Hero Feature Banner Card */}
                <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200/80 mb-5 group bg-white">
                  <div className="relative h-40 sm:h-44 w-full">
                    <Image
                      src={spitiWinterImg}
                      alt="Special Holiday Deals"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                  </div>

                  <div className="absolute top-3 left-3 bg-[#f26c22] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1.5 uppercase tracking-wider">
                    <FaTag className="text-[10px]" /> Seasonal Offer
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[11px] font-semibold text-amber-300 uppercase tracking-widest block mb-0.5">
                      Exclusive Package Savings
                    </span>
                    <h4 className="text-base sm:text-lg font-bold leading-tight drop-shadow text-white">
                      Up to 35% OFF on Custom Tour Itineraries
                    </h4>
                  </div>
                </div>

                {/* Brand Trust Headline */}
                <div className="mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#f26c22] block mb-1">
                    India’s Trusted DMC Specialist
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
                    Why 25,000+ Travellers Choose <span className="text-[#f26c22]">Zoyo Trip Holidays</span>
                  </h3>
                </div>

                {/* 2x2 Trust Badges Grid (Crisp Light Cards) */}
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mb-5">
                  <div className="bg-white rounded-xl p-3 border border-slate-200/80 shadow-xs flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-7 h-7 rounded-lg bg-orange-50 text-[#f26c22] flex items-center justify-center shrink-0 border border-orange-100">
                        <FaShieldAlt className="text-xs" />
                      </div>
                      <span className="text-xs font-bold text-slate-900">100% Verified</span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-tight">Govt. Registered & IATA Partnered</p>
                  </div>

                  <div className="bg-white rounded-xl p-3 border border-slate-200/80 shadow-xs flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100">
                        <FaStar className="text-xs" />
                      </div>
                      <span className="text-xs font-bold text-slate-900">4.9/5 Rating</span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-tight">Over 8,000+ Real Client Reviews</p>
                  </div>

                  <div className="bg-white rounded-xl p-3 border border-slate-200/80 shadow-xs flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                        <FaUsers className="text-xs" />
                      </div>
                      <span className="text-xs font-bold text-slate-900">25,000+ Guests</span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-tight">Pan-India & International Trips</p>
                  </div>

                  <div className="bg-white rounded-xl p-3 border border-slate-200/80 shadow-xs flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                        <FaHeadset className="text-xs" />
                      </div>
                      <span className="text-xs font-bold text-slate-900">24/7 Concierge</span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-tight">Personal Trip Specialist Assigned</p>
                  </div>
                </div>
              </div>

              {/* Contact Assistance Footer */}
              <div>
                <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-xs mb-4">
                  <p className="text-xs text-slate-700 font-semibold mb-2 flex items-center justify-between">
                    <span>Need Instant Tour Consultation?</span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Online Now
                    </span>
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    <a
                      href="https://wa.me/918091660060?text=Hi%20Zoyo%20Trip%20Holidays,%20I%20want%20to%20enquire%20about%20a%20tour%20package."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[130px] flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2 px-3 rounded-xl transition-all shadow-xs"
                    >
                      <FaWhatsapp className="text-sm" /> WhatsApp Us
                    </a>
                    <a
                      href="tel:+918091660060"
                      className="flex-1 min-w-[130px] flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold py-2 px-3 rounded-xl transition-all border border-slate-200"
                    >
                      <FaPhoneAlt className="text-xs text-[#f26c22]" /> +91 8091660060
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel: Lead Generation Form (Pure Crisp White) */}
            <div className="w-full md:w-[55%] bg-white p-5 sm:p-7 lg:p-8 flex flex-col justify-center overflow-y-auto">
              {!isSubmitted ? (
                <>
                  <div className="mb-4">
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ea580c] bg-orange-50 border border-orange-200/80 px-3 py-1 rounded-full mb-2">
                      <BsLightningChargeFill className="text-[#f26c22]" /> Instant Response in 15 Minutes
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                      Plan Your Dream Trip at the Best Price
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">
                      Tell us your travel ideas. Our holiday experts will craft a personalized itinerary with guaranteed best rates.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1 uppercase tracking-wider">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <FaUser className="text-xs" />
                        </div>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter Your Name"
                          className="w-full bg-slate-50 hover:bg-slate-50/50 focus:bg-white border border-slate-200 rounded-xl pl-9 pr-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#f26c22] focus:ring-2 focus:ring-orange-500/20 transition-all font-medium"
                        />
                      </div>
                    </div>

                    {/* Mobile & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1 uppercase tracking-wider">
                          WhatsApp / Phone <span className="text-red-500">*</span>
                        </label>
                        <div className="flex gap-2">
                          <div className="w-[85px] shrink-0 bg-slate-100 border border-slate-200 rounded-xl px-2.5 py-2.5 text-xs font-bold text-slate-700 flex items-center justify-center">
                            🇮🇳 +91
                          </div>
                          <div className="relative flex-1">
                            <input
                              type="tel"
                              name="mobile"
                              required
                              value={formData.mobile}
                              onChange={handleChange}
                              placeholder="98765 43210"
                              className="w-full bg-slate-50 hover:bg-slate-50/50 focus:bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#f26c22] focus:ring-2 focus:ring-orange-500/20 transition-all font-medium"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1 uppercase tracking-wider">
                          Email Address
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                            <FaEnvelope className="text-xs" />
                          </div>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="name@example.com"
                            className="w-full bg-slate-50 hover:bg-slate-50/50 focus:bg-white border border-slate-200 rounded-xl pl-9 pr-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#f26c22] focus:ring-2 focus:ring-orange-500/20 transition-all font-medium"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Destination & Travel Date Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1 uppercase tracking-wider">
                          Destination / Query <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                            <FaMapMarkerAlt className="text-xs text-[#f26c22]" />
                          </div>
                          <input
                            type="text"
                            name="destination"
                            required
                            list="destinations-list"
                            value={formData.destination}
                            onChange={handleChange}
                            placeholder="e.g. Kashmir, Bali, Spiti..."
                            className="w-full bg-slate-50 hover:bg-slate-50/50 focus:bg-white border border-slate-200 rounded-xl pl-9 pr-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#f26c22] focus:ring-2 focus:ring-orange-500/20 transition-all font-medium"
                          />
                          <datalist id="destinations-list">
                            {POPULAR_DESTINATIONS.map((dest) => (
                              <option key={dest} value={dest} />
                            ))}
                          </datalist>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1 uppercase tracking-wider">
                          Approx. Travel Date
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                            <FaCalendarAlt className="text-xs" />
                          </div>
                          <input
                            type="date"
                            name="travelDate"
                            value={formData.travelDate}
                            onChange={handleChange}
                            className="w-full bg-slate-50 hover:bg-slate-50/50 focus:bg-white border border-slate-200 rounded-xl pl-9 pr-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#f26c22] focus:ring-2 focus:ring-orange-500/20 transition-all font-medium"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Travellers Count & Trip Type Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1 uppercase tracking-wider">
                          Total Travellers
                        </label>
                        <div className="flex gap-2">
                          <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 flex items-center justify-between">
                            <span className="text-xs text-slate-500 font-medium">Adults</span>
                            <select
                              name="adults"
                              value={formData.adults}
                              onChange={handleChange}
                              className="bg-transparent text-xs sm:text-sm text-slate-900 font-bold focus:outline-none cursor-pointer"
                            >
                              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, '10+'].map((num) => (
                                <option key={num} value={num} className="bg-white text-slate-900">
                                  {num}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 flex items-center justify-between">
                            <span className="text-xs text-slate-500 font-medium">Kids</span>
                            <select
                              name="children"
                              value={formData.children}
                              onChange={handleChange}
                              className="bg-transparent text-xs sm:text-sm text-slate-900 font-bold focus:outline-none cursor-pointer"
                            >
                              {[0, 1, 2, 3, 4, 5].map((num) => (
                                <option key={num} value={num} className="bg-white text-slate-900">
                                  {num}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1 uppercase tracking-wider">
                          Vacation Type
                        </label>
                        <select
                          name="tripType"
                          value={formData.tripType}
                          onChange={handleChange}
                          className="w-full bg-slate-50 hover:bg-slate-50/50 focus:bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 font-medium focus:outline-none focus:border-[#f26c22] focus:ring-2 focus:ring-orange-500/20 transition-all cursor-pointer"
                        >
                          {TRIP_TYPES.map((type) => (
                            <option key={type} value={type} className="bg-white text-slate-900">
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Submit CTA Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full relative group overflow-hidden bg-gradient-to-r from-[#f26c22] via-[#ea580c] to-[#d97706] text-white font-extrabold py-3.5 px-6 rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:brightness-105 active:scale-[0.99] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                      >
                        <span className="text-sm sm:text-base tracking-wide flex items-center gap-2">
                          Get Free Customized Quote & Itinerary <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                        </span>
                      </button>
                    </div>

                    {/* Assurance note */}
                    <div className="flex items-center justify-center gap-3 text-[11px] text-slate-500 pt-1 font-medium">
                      <span className="flex items-center gap-1">
                        <BsCheckCircleFill className="text-emerald-500 text-[10px]" /> 100% Privacy
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <BsCheckCircleFill className="text-emerald-500 text-[10px]" /> Best Price Guarantee
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <BsCheckCircleFill className="text-emerald-500 text-[10px]" /> Instant Response
                      </span>
                    </div>
                  </form>
                </>
              ) : (
                /* Success Confirmation State (Light Aesthetic) */
                <div className="py-8 px-4 text-center flex flex-col items-center justify-center animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 border border-emerald-200">
                    <FaCheckCircle className="text-3xl" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">
                    Enquiry Received Successfully!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mb-6 leading-relaxed">
                    Thank you, <strong className="text-slate-900">{formData.name || 'Traveler'}</strong>! Our senior tour specialist is preparing an exclusive personalized plan for <strong className="text-[#f26c22]">{formData.destination || 'your vacation'}</strong>.
                  </p>

                  <div className="bg-orange-50/60 border border-orange-200/80 rounded-2xl p-4 w-full max-w-sm mb-6 text-left">
                    <div className="text-xs text-slate-500 font-medium mb-1">Expected Response Time:</div>
                    <div className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      Within 10 to 15 Minutes
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                    <a
                      href={`https://wa.me/918091660060?text=Hi%20Zoyo%20Trip,%20I%20just%20submitted%20a%20request%20for%20${encodeURIComponent(formData.destination || 'a tour')}.%20My%20name%20is%20${encodeURIComponent(formData.name)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-md text-sm"
                    >
                      <FaWhatsapp className="text-base" /> Chat on WhatsApp Now
                    </a>
                    <button
                      onClick={handleReset}
                      className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 px-4 rounded-xl transition-all border border-slate-200 text-sm cursor-pointer"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
