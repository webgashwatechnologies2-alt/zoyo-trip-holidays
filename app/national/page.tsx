'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaMapMarkerAlt, FaStar, FaPhoneAlt, FaSearch, FaWhatsapp, FaClock, FaCheckCircle } from 'react-icons/fa';
import { BsArrowRight, BsStars } from 'react-icons/bs';

const nationalTours = [
  {
    name: 'Himachal Pradesh',
    subtitle: 'Manali, Shimla, Dharamshala & Spiti Valley',
    slug: 'himachal-pradesh',
    img: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop',
    duration: '6 Days / 5 Nights',
    price: '₹14,499',
    originalPrice: '₹18,999',
    rating: '4.9',
    reviews: 340,
    category: 'Adventure',
    highlights: ['Solang Valley Snow Point', 'Rohtang Pass', 'Hadimba Temple', 'Mall Road Shimla'],
  },
  {
    name: 'Kashmir Paradise',
    subtitle: 'Srinagar, Gulmarg, Pahalgam & Sonamarg',
    slug: 'kashmir',
    img: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=800&auto=format&fit=crop',
    duration: '6 Days / 5 Nights',
    price: '₹18,999',
    originalPrice: '₹24,499',
    rating: '5.0',
    reviews: 410,
    category: 'Popular',
    highlights: ['Shikara Ride Dal Lake', 'Gulmarg Gondola', 'Betaab Valley', 'Luxury Houseboat'],
  },
  {
    name: 'Kerala God\'s Own Country',
    subtitle: 'Munnar, Alleppey Backwaters & Thekkady',
    slug: 'kerala',
    img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop',
    duration: '5 Days / 4 Nights',
    price: '₹16,499',
    originalPrice: '₹21,999',
    rating: '4.9',
    reviews: 295,
    category: 'Honeymoon',
    highlights: ['Private Houseboat Stay', 'Tea Plantations', 'Spice Garden Walk', 'Periyar Wildlife'],
  },
  {
    name: 'Royal Rajasthan',
    subtitle: 'Jaipur Pink City, Jodhpur, Udaipur & Jaisalmer',
    slug: 'rajasthan',
    img: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800&auto=format&fit=crop',
    duration: '7 Days / 6 Nights',
    price: '₹19,999',
    originalPrice: '₹26,999',
    rating: '4.8',
    reviews: 360,
    category: 'Cultural',
    highlights: ['Amber Fort', 'Lake Pichola Boat Ride', 'Desert Safari & Camp', 'Mehrangarh Fort'],
  },
  {
    name: 'Andaman & Nicobar Islands',
    subtitle: 'Port Blair, Havelock & Neil Island',
    slug: 'andaman',
    img: 'https://images.unsplash.com/photo-1589136777351-fdc9c9cab193?q=80&w=800&auto=format&fit=crop',
    duration: '6 Days / 5 Nights',
    price: '₹22,999',
    originalPrice: '₹29,999',
    rating: '4.9',
    reviews: 275,
    category: 'Adventure',
    highlights: ['Radhanagar Beach', 'Scuba Diving', 'Cellular Jail Light Show', 'Coral Snorkeling'],
  },
  {
    name: 'Goa Beach Getaway',
    subtitle: 'North Goa Beaches, Old Goa & Mandovi Cruise',
    slug: 'goa',
    img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop',
    duration: '4 Days / 3 Nights',
    price: '₹11,999',
    originalPrice: '₹15,499',
    rating: '4.7',
    reviews: 290,
    category: 'Popular',
    highlights: ['Baga & Calangute Beach', 'Mandovi River Cruise', 'Dudhsagar Waterfalls', 'Fort Aguada'],
  },
  {
    name: 'Uttarakhand Devbhoomi',
    subtitle: 'Rishikesh, Nainital & Mussoorie Hill Stations',
    slug: 'uttarakhand',
    img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop',
    duration: '5 Days / 4 Nights',
    price: '₹13,999',
    originalPrice: '₹18,499',
    rating: '4.8',
    reviews: 210,
    category: 'Adventure',
    highlights: ['Ganga Aarti Ceremony', 'River Rafting Rishikesh', 'Naini Lake Boating', 'Kempty Falls'],
  },
  {
    name: 'Leh & Ladakh',
    subtitle: 'Pangong Lake, Nubra Valley & Khardung La Pass',
    slug: 'ladakh',
    img: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=800&auto=format&fit=crop',
    duration: '6 Days / 5 Nights',
    price: '₹22,999',
    originalPrice: '₹29,999',
    rating: '5.0',
    reviews: 380,
    category: 'Adventure',
    highlights: ['Pangong Tso Lake', 'Khardung La 17,582 ft', 'Nubra Camel Safari', 'Magnetic Hill'],
  },
];

const categories = ['All', 'Popular', 'Adventure', 'Honeymoon', 'Cultural', 'Family'];

export default function NationalPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredTours = nationalTours.filter(tour => {
    const matchSearch = tour.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tour.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tour.highlights.some(h => h.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchCategory = activeCategory === 'All' || tour.category === activeCategory;
    return matchSearch && matchCategory;
  });

  return (
    <main className="flex flex-col w-full overflow-x-hidden bg-[#fcf9f5] min-h-screen">

      {/* ─── HERO BANNER ─── */}
      <section className="relative w-full h-[420px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2000&auto=format&fit=crop"
          alt="National Destinations India"
          className="absolute inset-0 w-full h-full object-cover scale-105"
          style={{ filter: 'brightness(0.35)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1329] via-black/30 to-black/65" />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 text-white/70 text-[13px] font-medium mb-5 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <span className="text-[#f26c22] font-semibold">National Destinations</span>
          </div>
          <h1 className="text-[38px] sm:text-[54px] font-black text-white leading-tight mb-4 tracking-tight">
            Discover{' '}
            <span className="bg-gradient-to-r from-[#f26c22] via-[#ffa347] to-[#ffd000] bg-clip-text text-transparent">
              Incredible India
            </span>
          </h1>
          <p className="text-gray-200 text-[16px] sm:text-[18px] max-w-xl mx-auto font-light mb-8 leading-relaxed">
            From Himalayan snow peaks to tropical Kerala lagoons — handpicked domestic holiday packages with private cabs, curated stays & 24/7 support.
          </p>

          {/* Search bar */}
          <div className="max-w-lg mx-auto relative">
            <input
              type="text"
              placeholder="Search destination (e.g. Manali, Kashmir, Goa)..."
              className="w-full pl-12 pr-5 py-4 rounded-full bg-white/95 text-gray-800 text-sm shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#f26c22]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-4.5 top-1/2 -translate-y-1/2 text-gray-400 text-base" />
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-5 mt-8 flex-wrap text-white text-xs sm:text-sm font-semibold">
            <span className="bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5">
              <BsStars className="text-amber-400" /> {nationalTours.length} Destinations
            </span>
            <span className="bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5">
              <FaCheckCircle className="text-emerald-400" /> 4.8★ Avg Rating
            </span>
            <span className="bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5">
              <FaPhoneAlt className="text-[#f26c22]" /> Free Custom Itinerary
            </span>
          </div>
        </div>
      </section>

      {/* ─── FILTER & GRID ─── */}
      <section className="py-14 sm:py-20 px-4 sm:px-8 lg:px-16 max-w-[1400px] mx-auto w-full">

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-10 border-b border-gray-200 pb-8">
          <div>
            <span className="text-[12px] font-bold text-[#f26c22] uppercase tracking-widest bg-[#f26c22]/10 px-3.5 py-1 rounded-full inline-block mb-2">
              <BsStars className="inline mr-1" /> Handcrafted Tours
            </span>
            <h2 className="text-[26px] sm:text-[32px] font-black text-gray-900">
              Featured Domestic Holiday Packages
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Showing {filteredTours.length} verified packages — private cab + hotel stays included
            </p>
          </div>

          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#111827] text-white shadow-md'
                    : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filteredTours.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-lg font-semibold">No matching destinations found.</p>
            <p className="text-sm mt-1">Try searching for "Kashmir", "Goa", or "Ladakh"</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
            {filteredTours.map((tour, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_45px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-[230px] overflow-hidden bg-gray-100">
                  <img
                    src={tour.img}
                    alt={tour.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-[#f26c22] text-white text-[10px] font-black px-2.5 py-1 rounded-full shadow uppercase tracking-wider">
                      {tour.category}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 z-10 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold text-gray-900 flex items-center gap-1 shadow">
                    <FaStar className="text-amber-500 text-xs" /> {tour.rating}
                    <span className="text-gray-400 font-normal text-[10px]">({tour.reviews})</span>
                  </div>

                  <div className="absolute bottom-3 left-3 z-10 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-lg text-white text-xs font-semibold flex items-center gap-1.5 border border-white/10">
                    <FaClock className="text-[#f26c22] text-xs" /> {tour.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                  <div className="mb-1 flex items-center gap-1.5 text-[11px] font-semibold text-[#1E6AD4]">
                    <FaMapMarkerAlt className="text-xs" />
                    <span>{tour.subtitle.split(',')[0]}</span>
                  </div>
                  <Link href={`/national/${tour.slug}`}>
                    <h3 className="text-[17px] font-bold text-gray-900 group-hover:text-[#f26c22] transition-colors mb-2 leading-snug">
                      {tour.name}
                    </h3>
                  </Link>
                  <p className="text-gray-500 text-xs mb-4 leading-relaxed line-clamp-2">{tour.subtitle}</p>

                  <div className="space-y-1 mb-4">
                    {tour.highlights.slice(0, 3).map((h, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[11px] text-gray-600">
                        <FaCheckCircle className="text-emerald-500 shrink-0" />
                        <span className="line-clamp-1">{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-gray-400 block line-through">{tour.originalPrice}</span>
                      <div className="flex items-baseline gap-0.5">
                        <span className="text-[20px] font-black text-[#f26c22]">{tour.price}</span>
                        <span className="text-[10px] text-gray-400">/person</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <a
                        href={`https://wa.me/918091660060?text=Hello%20Zoyo%20Trip,%20I%20am%20interested%20in%20a%20${encodeURIComponent(tour.name)}%20package`}
                        target="_blank"
                        rel="noreferrer"
                        className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 hover:bg-emerald-500 hover:text-white flex items-center justify-center text-sm transition shadow-sm"
                        title="WhatsApp"
                      >
                        <FaWhatsapp />
                      </a>
                      <Link
                        href={`/national/${tour.slug}`}
                        className="bg-[#111827] hover:bg-[#f26c22] text-white px-4 py-2 rounded-xl font-bold text-[11px] transition-colors flex items-center gap-1 shadow-sm"
                      >
                        View Packages <BsArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ─── CTA SECTION ─── */}
      <section className="py-16 px-4 sm:px-8 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#111827] to-[#1e293b] text-white rounded-3xl p-8 sm:p-12 shadow-2xl text-center">
          <h2 className="text-[26px] sm:text-[34px] font-black mb-3 leading-tight">
            Can't Find Your Dream Destination?
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto mb-8 font-light">
            Our travel experts craft fully customized India itineraries tailored to your budget, dates, and travel style — at guaranteed lowest rates.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-[#f26c22] hover:bg-[#d95d1a] text-white px-8 py-3.5 rounded-full font-bold text-sm transition shadow-lg flex items-center gap-2"
            >
              <FaPhoneAlt className="text-xs" /> Request Custom Itinerary
            </Link>
            <a
              href="https://wa.me/918091660060?text=Hello%20Zoyo%20Trip,%20I%20want%20to%20plan%20a%20domestic%20trip"
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
