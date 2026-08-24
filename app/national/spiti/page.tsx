'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  FaMapMarkerAlt,
  FaStar,
  FaPhoneAlt,
  FaWhatsapp,
  FaClock,
  FaCheckCircle,
  FaMountain,
  FaShieldAlt,
  FaHotel,
  FaCar,
  FaHeadset,
} from 'react-icons/fa';
import { BsArrowRight, BsStars } from 'react-icons/bs';
import { allDestinations } from '@/data/allDestinations';

export default function SpitiPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const spitiData = allDestinations['spiti'];

  const filteredPackages = selectedCategory === 'All'
    ? spitiData.packages
    : spitiData.packages.filter((pkg) => pkg.category === selectedCategory);

  return (
    <main className="flex flex-col w-full overflow-x-hidden bg-[#fcf9f5] min-h-screen text-gray-800">
      
      {/* ─── 1. HERO BANNER ─── */}
      <section className="relative w-full min-h-[480px] sm:min-h-[540px] md:min-h-[580px] flex items-center justify-center overflow-hidden py-14 sm:py-20 md:py-24">
        <img
          src={spitiData.heroImage}
          alt="Spiti Valley Tour Packages"
          className="absolute inset-0 w-full h-full object-cover scale-105"
          style={{ filter: 'brightness(0.70)' }}
        />
        <div className="absolute inset-0" />
        
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto flex flex-col items-center my-auto">
          {/* Breadcrumb Pill */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-white text-[12.5px] font-medium mb-4 shadow">
            <Link href="/" className="hover:text-[#f26c22] transition">Home</Link>
            <span>/</span>
            <Link href="/national" className="hover:text-[#f26c22] transition">National Destinations</Link>
            <span>/</span>
            <span className="text-[#f26c22] font-semibold flex items-center gap-1">
              <FaMountain className="text-xs" /> Spiti
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[34px] sm:text-[46px] md:text-[56px] font-black text-white leading-[1.14] tracking-tight mb-4">
            Spiti Valley{' '}
            <span className="bg-gradient-to-r from-[#f26c22] via-[#ffa347] to-[#ffd000] bg-clip-text text-transparent">
              Tour Packages
            </span>
          </h1>

          <p className="text-gray-200 text-[15px] sm:text-[17px] max-w-2xl mx-auto font-light leading-relaxed mb-8">
            Experience the cold desert of India with ancient monasteries, high-altitude lakes, and breathtaking landscapes with Zoyo Trip Holidays.
          </p>

          {/* Quick trust metrics bar */}
          <div className="flex items-center justify-center gap-3 sm:gap-6 flex-wrap text-white text-xs sm:text-sm font-semibold">
            <span className="bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5">
              <FaCheckCircle className="text-[#f26c22]" /> {spitiData.packagesCount} Handcrafted Packages
            </span>
            <span className="bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5">
              <FaStar className="text-amber-400" /> 4.8/5 Star Rated (400+ Reviews)
            </span>
            <span className="bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5">
              <FaCar className="text-emerald-400" /> Sanitized Private SUVs
            </span>
          </div>
        </div>
      </section>

      {/* ─── 2. DESTINATION OVERVIEW & FILTER TABS ─── */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 lg:px-16 max-w-[1400px] mx-auto w-full">
        
        {/* Intro bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-b border-gray-200/80 pb-8">
          <div>
            <span className="text-[12px] font-bold text-[#f26c22] uppercase tracking-widest bg-[#f26c22]/10 px-3.5 py-1 rounded-full inline-block mb-3">
              <BsStars className="inline mr-1" /> Cold Desert of India
            </span>
            <h2 className="text-[28px] sm:text-[36px] text-gray-900 leading-tight">
              Curated Tour Packages for Every Traveler
            </h2>
            <p className="text-gray-500 text-sm mt-1.5 max-w-xl">
              Choose from adventure expeditions, motorcycle trips, honeymoon getaways, photography tours, and budget-friendly packages.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {['All', 'Popular', 'Adventure', 'Honeymoon', 'Family'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#111827] text-white shadow-md'
                    : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ─── 3. PACKAGES GRID ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_6px_25px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_45px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image & Badges */}
              <div>
                <div className="relative h-[240px] overflow-hidden bg-gray-100">
                  <img
                    src={pkg.heroImage}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 " />
                  
                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4 z-10 flex gap-2">
                    <span className="bg-[#f26c22] text-white text-[11px] font-black px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
                      {pkg.category}
                    </span>
                  </div>

                  {/* Rating Top Right */}
                  <div className="absolute top-4 right-4 z-10 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold text-gray-900 flex items-center gap-1 shadow">
                    <FaStar className="text-amber-500 text-xs" /> {pkg.rating}
                    <span className="text-gray-400 font-normal text-[11px]">({pkg.reviewsCount})</span>
                  </div>

                  {/* Duration Tag Bottom */}
                  <div className="absolute bottom-3 left-4 right-4 text-white flex items-center justify-between text-xs font-semibold">
                    <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg flex items-center gap-1.5 border border-white/10">
                      <FaClock className="text-[#f26c22]" /> {pkg.duration}
                    </span>
                    <span className="text-white-300 text-[11px] truncate max-w-[50%]">
                      {pkg.pickupDrop}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#1E6AD4] mb-2">
                    <FaMapMarkerAlt />
                    <span className="truncate">{pkg.location}</span>
                  </div>

                  <Link href={`/national/spiti/${pkg.slug}`}>
                    <h3 className="text-[18px] font-bold text-gray-900 group-hover:text-[#f26c22] transition-colors leading-snug mb-2.5 line-clamp-2">
                      {pkg.title}
                    </h3>
                  </Link>

                  <p className="text-gray-500 text-[13px] line-clamp-2 leading-relaxed mb-4">
                    {pkg.subtitle}
                  </p>

                  {/* Key Highlights list */}
                  <div className="space-y-1.5 border-t border-gray-100 pt-3 mb-4">
                    {pkg.highlights.slice(0, 3).map((hl, i) => (
                      <div key={i} className="flex items-start gap-2 text-[12px] text-gray-600">
                        <FaCheckCircle className="text-[#10b981] text-xs shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price & CTA Footer */}
              <div className="p-6 pt-0 border-t border-gray-100 flex items-center justify-between mt-auto">
                <div>
                  <span className="text-[11px] text-gray-400 block line-through">{pkg.originalPrice}</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-[21px] font-black text-[#f26c22]">{pkg.price}</span>
                    <span className="text-[11px] text-gray-500 font-medium">/person</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={`https://wa.me/918091660060?text=Hello%20Zoyo%20Trip,%20I%20am%20interested%20in%20the%20${encodeURIComponent(pkg.title)}%20package`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 hover:bg-emerald-500 hover:text-white flex items-center justify-center text-base transition shadow-sm"
                    title="Chat on WhatsApp"
                  >
                    <FaWhatsapp />
                  </a>
                  <Link
                    href={`/national/spiti/${pkg.slug}`}
                    className="bg-[#111827] hover:bg-[#f26c22] text-white px-4 py-2.5 rounded-xl font-bold text-xs transition-colors flex items-center gap-1.5 shadow-md"
                  >
                    <span>View Itinerary</span>
                    <BsArrowRight />
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* ─── 4. WHY BOOK SPITI WITH ZOYO TRIP ─── */}
      <section className="w-full bg-[#f4ebe1] py-16 sm:py-20 px-4 sm:px-8 lg:px-16 border-y border-orange-200/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[12px] font-bold text-[#f26c22] uppercase tracking-widest bg-white/80 px-3.5 py-1 rounded-full inline-block mb-3 shadow-sm">
              Trusted Spiti Travel Partner
            </span>
            <h2 className="text-[28px] sm:text-[38px] font-black text-gray-900 leading-tight">
              Why Zoyo Trip is Spiti&apos;s #1 Choice
            </h2>
            <p className="text-gray-600 text-sm mt-2 max-w-lg mx-auto">
              We ensure safe high-altitude journeys with oxygen backup, expert mountain drivers, and acclimatization support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#f26c22] flex items-center justify-center text-xl mb-4">
                <FaMountain />
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-1.5">Oxygen Backup</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                All vehicles equipped with oxygen cylinders for safety at high altitudes above 14,000 feet.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#1E6AD4] flex items-center justify-center text-xl mb-4">
                <FaCar />
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-1.5">Expert Mountain Fleet</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                All vehicles driven by licensed Spiti chauffeurs trained for high-altitude passes and rugged terrain.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-xl mb-4">
                <FaHotel />
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-1.5">Luxury Camp Stays</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                Personally verified luxury Swiss camps at Chandratal Lake and comfortable hotels in Kaza.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center text-xl mb-4">
                <FaHeadset />
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-1.5">24/7 On-Ground Care</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                Dedicated local Tour Manager on standby round the clock throughout your Spiti journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. INSTANT CUSTOM QUOTE CTA ─── */}
      <section className="py-20 px-4 sm:px-8 text-center bg-white">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#111827] to-[#1e293b] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#f26c22]/20 rounded-full blur-3xl pointer-events-none" />
          
          <h2 className="text-[28px] sm:text-[38px] font-black mb-3 leading-tight">
            Planning a Customized Spiti Holiday?
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto mb-8 font-light">
            Tell us your travel dates, preferred destinations, and hotel category. Get a 100% custom itinerary with discounted direct rates.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-[#f26c22] hover:bg-[#d95d1a] text-white px-8 py-3.5 rounded-full font-bold text-sm transition shadow-lg flex items-center gap-2"
            >
              <FaPhoneAlt className="text-xs" /> Request Custom Itinerary
            </Link>
            <a
              href="https://wa.me/918091660060?text=Hello%20Zoyo%20Trip,%20I%20want%20to%20plan%20a%20custom%20Spiti%20trip"
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba59] text-white px-7 py-3.5 rounded-full font-bold text-sm transition shadow-lg flex items-center gap-2"
            >
              <FaWhatsapp className="text-base" /> WhatsApp (+91) 8091660060
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
