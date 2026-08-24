'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  FaPlane,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUsers,
  FaShieldAlt,
  FaStar,
  FaPhoneAlt,
  FaWhatsapp,
  FaClock,
  FaTag,
  FaHeadset,
  FaExchangeAlt,
  FaCheckCircle,
  FaSuitcaseRolling,
  FaWifi,
} from 'react-icons/fa';
import { BsArrowRight, BsCheckLg, BsStars } from 'react-icons/bs';
import { MdFlightLand, MdFlightTakeoff, MdLuggage } from 'react-icons/md';

const flightPackages = [
  {
    id: 1,
    airline: 'IndiGo',
    airlineCode: '6E',
    from: 'Delhi (DEL)',
    to: 'Kullu (KUU)',
    departure: '07:15',
    arrival: '08:30',
    duration: '1h 15m',
    price: '₹4,200',
    type: 'Non-Stop',
    badge: 'Best Value',
    badgeColor: 'bg-[#f26c22]',
    seats: 12,
    class: 'Economy',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop',
    rating: 4.7,
    includes: ['15kg Check-in', 'Meal', 'Seat Choice', 'Web Check-in'],
  },
  {
    id: 2,
    airline: 'Air India',
    airlineCode: 'AI',
    from: 'Delhi (DEL)',
    to: 'Srinagar (SXR)',
    departure: '10:00',
    arrival: '11:20',
    duration: '1h 20m',
    price: '₹5,800',
    type: 'Non-Stop',
    badge: 'Most Popular',
    badgeColor: 'bg-[#F26C22]',
    seats: 6,
    class: 'Economy',
    image: 'https://images.unsplash.com/photo-1583396910974-4f8c9a6b1e1d?q=80&w=800&auto=format&fit=crop',
    rating: 4.5,
    includes: ['20kg Check-in', 'Hot Meal', 'Priority Boarding', 'Lounge Access'],
  },
  {
    id: 3,
    airline: 'Vistara',
    airlineCode: 'UK',
    from: 'Delhi (DEL)',
    to: 'Chandigarh (IXC)',
    departure: '06:00',
    arrival: '07:05',
    duration: '1h 05m',
    price: '₹3,500',
    type: 'Non-Stop',
    badge: 'Budget Pick',
    badgeColor: 'bg-emerald-600',
    seats: 18,
    class: 'Economy',
    image: 'https://images.unsplash.com/photo-1529074963764-98f45c47344b?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    includes: ['15kg Check-in', 'Snack', 'Window Seat', 'Free Cancellation'],
  },
];

const features = [
  {
    icon: FaShieldAlt,
    title: 'Secure & Verified Booking',
    desc: 'All our flight bookings are authenticated, with official e-tickets, GST invoices, and confirmed PNR.',
    gradient: 'linear-gradient(135deg,#F26C22,#3b82f6)',
  },
  {
    icon: FaTag,
    title: 'Lowest Fare Guarantee',
    desc: 'We compare fares across IndiGo, Air India, Vistara & SpiceJet to get you the absolute best price.',
    gradient: 'linear-gradient(135deg,#f26c22,#ffa347)',
  },
  {
    icon: MdLuggage,
    title: 'Flexible Baggage Options',
    desc: 'Choose from economy to business class with customizable baggage allowances for individuals or groups.',
    gradient: 'linear-gradient(135deg,#8b5cf6,#a78bfa)',
  },
  {
    icon: FaHeadset,
    title: '24/7 Flight Support',
    desc: 'Missed flight? Cancellation? Our travel desk operates round the clock for instant resolution.',
    gradient: 'linear-gradient(135deg,#10b981,#34d399)',
  },
  {
    icon: FaClock,
    title: 'Last-Minute Bookings',
    desc: 'Need a same-day or next-day flight? Our network ensures you find available seats even at the last minute.',
    gradient: 'linear-gradient(135deg,#ef4444,#f87171)',
  },
  {
    icon: FaWifi,
    title: 'Digital E-Tickets',
    desc: 'Receive your boarding pass and e-ticket instantly on WhatsApp and email within minutes of booking.',
    gradient: 'linear-gradient(135deg,#06b6d4,#22d3ee)',
  },
];

const popularRoutes = [
  { from: 'DEL', to: 'KUU', name: 'Delhi → Kullu', price: '₹4,200', hrs: '1h 15m' },
  { from: 'DEL', to: 'SXR', name: 'Delhi → Srinagar', price: '₹5,800', hrs: '1h 20m' },
  { from: 'DEL', to: 'IXC', name: 'Delhi → Chandigarh', price: '₹3,500', hrs: '1h 05m' },
  { from: 'BOM', to: 'KUU', name: 'Mumbai → Kullu', price: '₹7,200', hrs: '2h 10m' },
  { from: 'DEL', to: 'LEH', name: 'Delhi → Leh', price: '₹6,500', hrs: '1h 30m' },
  { from: 'DEL', to: 'GAU', name: 'Delhi → Guwahati', price: '₹5,100', hrs: '2h 05m' },
];

export default function FlightBookingPage() {
  const [form, setForm] = useState({
    from: '',
    to: '',
    departDate: '',
    returnDate: '',
    adults: '1',
    children: '0',
    tripType: 'oneway',
    classType: 'economy',
  });
  const [submitted, setSubmitted] = useState(false);

  const swapCities = () => {
    setForm({ ...form, from: form.to, to: form.from });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <main className="flex flex-col w-full overflow-x-hidden bg-[#f0f4ff] text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full min-h-[560px] md:min-h-[640px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000&auto=format&fit=crop"
          alt="Flight Booking - Zoyo Trip Holidays"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.25)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b2e]/90 via-[#0d1b2e]/50 to-[#F26C22]/30" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-[#F26C22]/20 blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-[#f26c22]/20 blur-[120px] pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-white text-[12px] font-medium mb-2 shadow-lg">
            <Link href="/" className="hover:text-[#f26c22] transition-colors">Home</Link>
            <span className="text-white/40">/</span>
            <span className="text-[#F26C22] font-semibold flex items-center gap-1">
              <FaPlane className="text-xs" /> Flight Booking
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left Text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#F26C22]/25 border border-[#F26C22]/40 text-[#7eb8ff] text-[12px] font-bold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
                <BsStars /> Certified Travel Agent
              </div>
              <h1 className="text-[34px] sm:text-[44px] md:text-[52px] text-white leading-[1.12] mb-5">
                Book Flights to the{' '}
                <span className="bg-gradient-to-r from-[#F26C22] via-[#5ba4ff] to-[#ffa347] bg-clip-text text-transparent">
                  Himalayas &amp; India
                </span>
              </h1>
              <p className="text-gray-300 text-[16px] sm:text-[18px] leading-relaxed mb-8 max-w-[520px]">
                Find the best flights to Kullu-Manali, Srinagar, Leh Ladakh, Guwahati, Chandigarh &amp; across India. Instant tickets, best fares.
              </p>
              <div className="flex items-center gap-6 flex-wrap">
                {[
                  { val: '15+', label: 'Airlines' },
                  { val: '100+', label: 'Destinations' },
                  { val: '24/7', label: 'Support' },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col items-center">
                    <div className="text-[24px] font-black text-[#7eb8ff]">{stat.val}</div>
                    <div className="text-[12px] text-gray-400 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Search Form */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl">
              <h2 className="text-white text-[20px] font-bold mb-5 flex items-center gap-2">
                <FaPlane className="text-[#F26C22]" /> Search Flights
              </h2>

              {/* Trip Type */}
              <div className="flex items-center gap-2 bg-white/10 p-1 rounded-xl mb-5">
                {(['oneway', 'roundtrip', 'multicity'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setForm({ ...form, tripType: type })}
                    className={`flex-1 py-2 rounded-lg text-[12px] font-bold transition-all duration-200 ${form.tripType === type ? 'bg-[#F26C22] text-white shadow-lg' : 'text-white/60 hover:text-white'}`}
                  >
                    {type === 'oneway' ? 'One Way' : type === 'roundtrip' ? 'Round Trip' : 'Multi City'}
                  </button>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* From / To */}
                <div className="relative grid grid-cols-2 gap-3">
                  <div className="relative">
                    <MdFlightTakeoff className="absolute left-3 top-1/2 -translate-y-1/2 text-[#F26C22] text-lg" />
                    <input
                      type="text"
                      placeholder="From (City / Airport)"
                      required
                      value={form.from}
                      onChange={(e) => setForm({ ...form, from: e.target.value })}
                      className="w-full pl-9 pr-3 py-3 bg-white/15 border border-white/25 rounded-xl text-white placeholder-white/50 text-[13px] focus:outline-none focus:border-[#F26C22] transition"
                    />
                  </div>

                  {/* Swap Button */}
                  <button
                    type="button"
                    onClick={swapCities}
                    className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-[#f26c22] text-white flex items-center justify-center shadow-lg hover:scale-110 transition"
                  >
                    <FaExchangeAlt className="text-xs" />
                  </button>

                  <div className="relative">
                    <MdFlightLand className="absolute left-3 top-1/2 -translate-y-1/2 text-[#f26c22] text-lg" />
                    <input
                      type="text"
                      placeholder="To (City / Airport)"
                      required
                      value={form.to}
                      onChange={(e) => setForm({ ...form, to: e.target.value })}
                      className="w-full pl-9 pr-3 py-3 bg-white/15 border border-white/25 rounded-xl text-white placeholder-white/50 text-[13px] focus:outline-none focus:border-[#F26C22] transition"
                    />
                  </div>
                </div>

                {/* Dates */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative">
                    <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-[#F26C22] text-sm" />
                    <input
                      type="date"
                      required
                      value={form.departDate}
                      onChange={(e) => setForm({ ...form, departDate: e.target.value })}
                      className="w-full pl-9 pr-3 py-3 bg-white/15 border border-white/25 rounded-xl text-white text-[13px] focus:outline-none focus:border-[#F26C22] transition"
                      style={{ colorScheme: 'dark' }}
                    />
                  </div>
                  {form.tripType === 'roundtrip' ? (
                    <div className="relative">
                      <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-[#F26C22] text-sm" />
                      <input
                        type="date"
                        value={form.returnDate}
                        onChange={(e) => setForm({ ...form, returnDate: e.target.value })}
                        className="w-full pl-9 pr-3 py-3 bg-white/15 border border-white/25 rounded-xl text-white text-[13px] focus:outline-none focus:border-[#F26C22] transition"
                        style={{ colorScheme: 'dark' }}
                      />
                    </div>
                  ) : (
                    <div className="relative">
                      <FaUsers className="absolute left-3 top-1/2 -translate-y-1/2 text-[#F26C22] text-sm" />
                      <select
                        value={form.adults}
                        onChange={(e) => setForm({ ...form, adults: e.target.value })}
                        className="w-full pl-9 pr-3 py-3 bg-white/15 border border-white/25 rounded-xl text-white text-[13px] focus:outline-none focus:border-[#F26C22] transition appearance-none"
                        style={{ colorScheme: 'dark' }}
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                          <option key={n} value={n} className="bg-gray-800">{n} Adult{n > 1 ? 's' : ''}</option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>

                {/* Class */}
                <div className="grid grid-cols-3 gap-2">
                  {(['economy', 'business', 'first'] as const).map((cls) => (
                    <button
                      key={cls}
                      type="button"
                      onClick={() => setForm({ ...form, classType: cls })}
                      className={`py-2 rounded-xl text-[12px] font-bold capitalize transition-all ${form.classType === cls ? 'bg-[#F26C22] text-white shadow' : 'bg-white/10 text-white/60 hover:text-white border border-white/15'}`}
                    >
                      {cls === 'economy' ? 'Economy' : cls === 'business' ? 'Business' : 'First Class'}
                    </button>
                  ))}
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#F26C22] to-[#F26C22] hover:from-[#F26C22] hover:to-[#0d46a0] text-white py-3.5 rounded-xl font-bold text-[15px] transition-all shadow-lg flex items-center justify-center gap-2 hover:scale-[1.01]"
                >
                  <FaPlane />
                  {submitted ? 'Searching Flights...' : 'Search Flights'}
                </button>
                <p className="text-center text-white/50 text-[11px]">
                  Need help?{' '}
                  <Link href="/contact" className="text-[#7eb8ff] hover:underline font-semibold">Talk to our travel expert</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="w-full py-14 px-4 sm:px-6 lg:px-20 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-[#F26C22]/10 text-[#F26C22] text-[12px] font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-widest">
              <FaPlane /> Popular Flights
            </div>
            <h2 className="text-[28px] sm:text-[36px] text-gray-900">Top Flight Routes</h2>
            <p className="text-gray-500 text-[15px] mt-2">Affordable fares to the most sought-after mountain destinations</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {popularRoutes.map((route, i) => (
              <Link
                href="/contact"
                key={i}
                className="group bg-[#f0f4ff] hover:bg-[#F26C22] border border-blue-100 hover:border-[#F26C22] rounded-2xl p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="text-[13px] font-black text-[#F26C22] group-hover:text-white mb-1">{route.from}</div>
                <FaPlane className="mx-auto text-[#f26c22] group-hover:text-white text-xs my-2 rotate-45" />
                <div className="text-[13px] font-black text-[#F26C22] group-hover:text-white mb-2">{route.to}</div>
                <div className="text-[11px] text-gray-400 group-hover:text-white/80">{route.hrs}</div>
                <div className="text-[15px] font-black text-[#F26C22] group-hover:text-white mt-1">{route.price}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Flight Packages */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-20 bg-[#f0f4ff]">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#f26c22]/10 text-[#f26c22] text-[12px] font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-widest">
              <BsStars /> Featured Flights
            </div>
            <h2 className="text-[28px] sm:text-[40px] text-gray-900">Best Flight Deals</h2>
            <p className="text-gray-500 text-[15px] mt-3 max-w-lg mx-auto">Curated flights with best fares, comfort, and on-time performance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {flightPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-[0_5px_25px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(30,106,212,0.15)] border border-gray-100 hover:border-[#F26C22]/30 transition-all duration-400 hover:-translate-y-2"
              >
                <div className="relative h-[160px] overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.airline}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <span className={`absolute top-4 left-4 ${pkg.badgeColor} text-white text-[11px] font-black px-3 py-1 rounded-full shadow-md`}>
                    {pkg.badge}
                  </span>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md border border-white/30 text-white text-[12px] font-bold px-2.5 py-1 rounded-full">
                    {pkg.type}
                  </div>
                </div>

                <div className="p-6">
                  {/* Airline & Route */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-[12px] text-gray-400 font-semibold mb-0.5">{pkg.airline} ({pkg.airlineCode})</div>
                      <div className="text-[16px] font-black text-gray-900">{pkg.from}</div>
                    </div>
                    <div className="flex flex-col items-center px-3">
                      <FaPlane className="text-[#F26C22] text-lg mb-0.5" />
                      <div className="text-[11px] text-gray-400 font-medium">{pkg.duration}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[12px] text-gray-400 font-semibold mb-0.5">{pkg.class}</div>
                      <div className="text-[16px] font-black text-gray-900">{pkg.to}</div>
                    </div>
                  </div>

                  {/* Times */}
                  <div className="flex items-center justify-between text-[12px] text-gray-500 bg-[#f0f4ff] rounded-xl px-4 py-2.5 mb-4">
                    <div className="text-center">
                      <div className="text-[16px] font-black text-gray-900">{pkg.departure}</div>
                      <div className="text-[11px] text-gray-400">Departure</div>
                    </div>
                    <div className="flex items-center gap-1 text-[#F26C22]">
                      <div className="w-10 h-px bg-[#F26C22]" />
                      <FaPlane className="text-xs" />
                      <div className="w-10 h-px bg-[#F26C22]" />
                    </div>
                    <div className="text-center">
                      <div className="text-[16px] font-black text-gray-900">{pkg.arrival}</div>
                      <div className="text-[11px] text-gray-400">Arrival</div>
                    </div>
                  </div>

                  {/* Price & Rating */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-[24px] font-black text-[#F26C22]">{pkg.price}</div>
                      <div className="text-[11px] text-gray-400">per person</div>
                    </div>
                    <div>
                      <div className="flex items-center gap-1 text-amber-400">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <FaStar key={j} className={j < Math.floor(pkg.rating) ? 'text-amber-400' : 'text-gray-200'} style={{ fontSize: '11px' }} />
                        ))}
                      </div>
                      <div className="text-[12px] text-gray-500 text-right">{pkg.rating}/5</div>
                    </div>
                  </div>

                  {/* Includes */}
                  <div className="grid grid-cols-2 gap-1.5 mb-5 pb-4 border-b border-gray-100">
                    {pkg.includes.map((inc) => (
                      <div key={inc} className="flex items-center gap-1.5 text-[11.5px] text-gray-600">
                        <BsCheckLg className="text-emerald-500 text-xs shrink-0" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-[12px] text-gray-400 mb-4">
                    <span className="text-emerald-600 font-bold">{pkg.seats} seats left</span>
                  </div>

                  <Link
                    href="/contact"
                    className="w-full block text-center bg-gradient-to-r from-[#F26C22] to-[#F26C22] hover:from-[#F26C22] hover:to-[#0d46a0] text-white py-3 rounded-xl font-bold text-[14px] transition-all shadow-md hover:scale-[1.01]"
                  >
                    Book This Flight
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-20 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#F26C22]/10 text-[#F26C22] text-[12px] font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-widest">
              <FaShieldAlt /> Why Fly With Us
            </div>
            <h2 className="text-[28px] sm:text-[40px] text-gray-900">The Zoyo Flight Advantage</h2>
            <p className="text-gray-500 text-[15px] mt-3 max-w-lg mx-auto">We make your air travel smooth, affordable, and completely stress-free</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {features.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <div key={i} className="group bg-[#f0f4ff] hover:bg-white border border-blue-100 hover:border-[#F26C22]/30 rounded-3xl p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(30,106,212,0.12)]">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300" style={{ background: feat.gradient }}>
                    <Icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-[17px] font-bold text-gray-900 mb-2 group-hover:text-[#F26C22] transition-colors">{feat.title}</h3>
                  <p className="text-[13.5px] text-gray-500 leading-relaxed">{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative w-full py-20 px-4 sm:px-6 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1529074963764-98f45c47344b?q=80&w=2000&auto=format&fit=crop"
          alt="Airplane in sky"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.18)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b2e]/95 via-[#0d1b2e]/60 to-[#F26C22]/40" />
        <div className="relative z-10 max-w-[860px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 text-white text-[12px] font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
            <FaPhoneAlt className="text-[#7eb8ff]" /> Charter Flights
          </div>
          <h2 className="text-[30px] sm:text-[44px] text-white leading-tight mb-5">
            Need a Group Flight or <span className="text-[#7eb8ff]">Private Charter?</span>
          </h2>
          <p className="text-gray-300 text-[16px] sm:text-[18px] mb-10 max-w-2xl mx-auto leading-relaxed">
            We arrange private jets, helicopter bookings, and group flight blocks for corporate events, weddings, and special tour packages.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-[#F26C22] to-[#F26C22] hover:from-[#F26C22] hover:to-[#0d46a0] text-white px-8 py-4 rounded-full font-bold text-[15px] transition-all duration-300 hover:scale-105 shadow-2xl flex items-center gap-2"
            >
              <FaPlane className="text-xs" /> Get a Flight Quote
            </Link>
            <a
              href="https://wa.me/918091660060"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba59] text-white px-8 py-4 rounded-full font-bold text-[15px] transition-all duration-300 hover:scale-105 shadow-xl flex items-center gap-2"
            >
              <FaWhatsapp className="text-lg" /> WhatsApp Now
            </a>
            <a
              href="tel:+918091660060"
              className="bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-[15px] transition-all hover:scale-105 shadow-lg flex items-center gap-2"
            >
              <FaPhoneAlt className="text-xs text-[#7eb8ff]" /> (+91) 80916 60060
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
