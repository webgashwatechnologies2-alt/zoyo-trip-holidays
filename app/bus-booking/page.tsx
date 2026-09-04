'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Herobaner from "@/public/assets/images/bookings/busbookingbanner.png";
import volvoacsleeperimage from "@/public/assets/images/bookings/volvoacsleeper.png";
import superdeluxebusimage from "@/public/assets/images/bookings/scariabus.webp";
import cruisebusimage from "@/public/assets/images/bookings/volvoluxury.webp";

import {
  FaBus,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUsers,
  FaWifi,
  FaSnowflake,
  FaShieldAlt,
  FaStar,
  FaCheckCircle,
  FaPhoneAlt,
  FaWhatsapp,
  FaClock,
  FaArrowRight,
  FaTag,
  FaHeadset,
} from 'react-icons/fa';
import { BsArrowRight, BsCheckLg, BsStars } from 'react-icons/bs';
import { sendEmailToZoyo } from '@/lib/sendEmail';

const busPackages = [
  {
    id: 1,
    name: 'Volvo AC Sleeper',
    route: 'Delhi → Manali',
    duration: '13–15 Hrs',
    price: '₹1,200',
    features: ['AC Sleeper', 'USB Charging', 'Blanket & Pillow', 'Night Travel'],
    badge: 'Most Popular',
    badgeColor: 'bg-[#f26c22]',
    image: volvoacsleeperimage,
    rating: 4.8,
    reviews: 1240,
    departure: '9:00 PM',
    busType: 'Volvo Multi-Axle',
  },
  {
    id: 2,
    name: 'Super Deluxe AC',
    route: 'Delhi → Shimla',
    duration: '9–10 Hrs',
    price: '₹950',
    features: ['AC Semi-Sleeper', 'Live Tracking', 'Refreshments', 'Punctual'],
    badge: 'Budget Friendly',
    badgeColor: 'bg-[#1E6AD4]',
    image: superdeluxebusimage,
    rating: 4.6,
    reviews: 890,
    departure: '6:00 PM',
    busType: 'Scania AC Seater',
  },
  {
    id: 3,
    name: 'Luxury Cruise Bus',
    route: 'Delhi → Dharamshala',
    duration: '11–12 Hrs',
    price: '₹1,450',
    features: ['Premium Seating', 'Entertainment', 'Meals Included', 'Priority Boarding'],
    badge: 'Premium',
    badgeColor: 'bg-emerald-600',
    image: cruisebusimage ,
    rating: 4.9,
    reviews: 645,
    departure: '7:30 PM',
    busType: 'MAN Luxury Coach',
  },
];

const features = [
  {
    icon: FaShieldAlt,
    title: 'Safe & Secure Journeys',
    desc: 'GPS-tracked buses with CCTV surveillance, certified drivers, and emergency helplines for your complete safety.',
    gradient: 'linear-gradient(135deg,#1E6AD4,#3b82f6)',
  },
  {
    icon: FaWifi,
    title: 'Onboard Wi-Fi & Charging',
    desc: 'Stay connected throughout your journey with free Wi-Fi and individual USB charging ports at every seat.',
    gradient: 'linear-gradient(135deg,#f26c22,#ffa347)',
  },
  {
    icon: FaSnowflake,
    title: 'Premium AC Comfort',
    desc: 'Travel in climate-controlled comfort with push-back recliner seats, blankets, and neck pillows.',
    gradient: 'linear-gradient(135deg,#06b6d4,#22d3ee)',
  },
  {
    icon: FaHeadset,
    title: '24/7 Customer Support',
    desc: 'Our dedicated team is available round-the-clock to assist with boarding, cancellations, and any emergencies.',
    gradient: 'linear-gradient(135deg,#10b981,#34d399)',
  },
  {
    icon: FaClock,
    title: 'Punctual Departures',
    desc: 'We strictly follow scheduled departure times with real-time tracking so you always know where your bus is.',
    gradient: 'linear-gradient(135deg,#8b5cf6,#a78bfa)',
  },
  {
    icon: FaTag,
    title: 'Best Price Guarantee',
    desc: 'Direct bookings mean lowest fares with no hidden charges. Compare and book with complete price transparency.',
    gradient: 'linear-gradient(135deg,#ef4444,#f87171)',
  },
];

const popularRoutes = [
  { from: 'Delhi', to: 'Manali', hrs: '13-15h', price: '₹1,200' },
  { from: 'Delhi', to: 'Shimla', hrs: '9-10h', price: '₹950' },
  { from: 'Delhi', to: 'Kullu', hrs: '11-12h', price: '₹1,100' },
  { from: 'Chandigarh', to: 'Manali', hrs: '8-9h', price: '₹750' },
  { from: 'Delhi', to: 'Kasol', hrs: '12-13h', price: '₹1,050' },
  { from: 'Delhi', to: 'Dharamshala', hrs: '11-12h', price: '₹1,000' },
];

export default function BusBookingPage() {
  const [form, setForm] = useState({
    from: '',
    to: '',
    date: '',
    returnDate: '',
    travelers: '1',
    tripType: 'oneway',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    await sendEmailToZoyo({
      formType: 'Bus Booking Search / Enquiry',
      destination: `${form.from} to ${form.to}`,
      tripType: form.tripType,
      travelDate: form.tripType === 'roundtrip' ? `Depart: ${form.date}, Return: ${form.returnDate}` : `Depart: ${form.date}`,
      travelers: form.travelers,
      message: `Bus search enquiry from ${form.from} to ${form.to}. Trip: ${form.tripType}, Passengers: ${form.travelers}`,
    });

    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <main className="flex flex-col w-full overflow-x-hidden bg-[#f8fafc] text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full min-h-[520px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src={Herobaner}
          alt="Bus Booking - Zoyo Trip Holidays"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.28)' }}
        />
        <div className="absolute inset-0" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#f26c22]/20 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-[#1E6AD4]/25 blur-[120px] pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-white text-[12px] font-medium mb-6 shadow-lg">
            <Link href="/" className="hover:text-[#f26c22] transition-colors">Home</Link>
            <span className="text-white/40">/</span>
            <span className="text-[#f26c22] font-semibold flex items-center gap-1">
              <FaBus className="text-xs" /> Bus Booking
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#f26c22]/20 border border-[#f26c22]/40 text-[#ffa347] text-[12px] font-bold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
                <BsStars /> Trusted Bus Service
              </div>
              <h1 className="text-[34px] sm:text-[44px] md:text-[52px] text-white leading-[1.12] mb-5">
                Book Bus Tickets to{' '}
                <span className="bg-gradient-to-r from-[#f26c22] via-[#ffa347] to-[#ffd000] bg-clip-text text-transparent">
                  Himachal &amp; Beyond
                </span>
              </h1>
              <p className="text-gray-300 text-[16px] sm:text-[18px] leading-relaxed mb-8 max-w-[520px]">
                Premium AC Volvo &amp; Luxury coaches to Manali, Shimla, Dharamshala, Kasol &amp; more. Comfortable, punctual &amp; affordable.
              </p>
              <div className="flex items-center gap-6 flex-wrap">
                {[
                  { val: '200+', label: 'Daily Routes' },
                  { val: '50K+', label: 'Happy Travelers' },
                  { val: '4.8★', label: 'Avg Rating' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-[24px] font-black text-[#ffa347]">{stat.val}</div>
                    <div className="text-[12px] text-gray-400 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl">
              <h2 className="text-white text-[20px] font-bold mb-5 flex items-center gap-2">
                <FaBus className="text-[#f26c22]" /> Search Bus
              </h2>

              <div className="flex items-center gap-2 bg-white/10 p-1 rounded-xl mb-5">
                {(['oneway', 'roundtrip'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setForm({ ...form, tripType: type })}
                    className={`flex-1 py-2 rounded-lg text-[13px] font-bold transition-all duration-200 ${form.tripType === type ? 'bg-[#f26c22] text-white shadow-lg' : 'text-white/70 hover:text-white'}`}
                  >
                    {type === 'oneway' ? 'One Way' : 'Round Trip'}
                  </button>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative">
                    <FaMapMarkerAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-[#f26c22] text-sm" />
                    <input
                      type="text"
                      placeholder="From City"
                      required
                      value={form.from}
                      onChange={(e) => setForm({ ...form, from: e.target.value })}
                      className="w-full pl-9 pr-3 py-3 bg-white/15 border border-white/25 rounded-xl text-white placeholder-white/50 text-[13px] focus:outline-none focus:border-[#f26c22] transition"
                    />
                  </div>
                  <div className="relative">
                    <FaMapMarkerAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-[#1E6AD4] text-sm" />
                    <input
                      type="text"
                      placeholder="To City"
                      required
                      value={form.to}
                      onChange={(e) => setForm({ ...form, to: e.target.value })}
                      className="w-full pl-9 pr-3 py-3 bg-white/15 border border-white/25 rounded-xl text-white placeholder-white/50 text-[13px] focus:outline-none focus:border-[#f26c22] transition"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative">
                    <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-[#f26c22] text-sm" />
                    <input
                      type="date"
                      required
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="w-full pl-9 pr-3 py-3 bg-white/15 border border-white/25 rounded-xl text-white text-[13px] focus:outline-none focus:border-[#f26c22] transition"
                      style={{ colorScheme: 'dark' }}
                    />
                  </div>
                  {form.tripType === 'roundtrip' ? (
                    <div className="relative">
                      <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-[#f26c22] text-sm" />
                      <input
                        type="date"
                        value={form.returnDate}
                        onChange={(e) => setForm({ ...form, returnDate: e.target.value })}
                        className="w-full pl-9 pr-3 py-3 bg-white/15 border border-white/25 rounded-xl text-white text-[13px] focus:outline-none focus:border-[#f26c22] transition"
                        style={{ colorScheme: 'dark' }}
                      />
                    </div>
                  ) : (
                    <div className="relative">
                      <FaUsers className="absolute left-3 top-1/2 -translate-y-1/2 text-[#f26c22] text-sm" />
                      <select
                        value={form.travelers}
                        onChange={(e) => setForm({ ...form, travelers: e.target.value })}
                        className="w-full pl-9 pr-3 py-3 bg-white/15 border border-white/25 rounded-xl text-white text-[13px] focus:outline-none focus:border-[#f26c22] transition appearance-none"
                        style={{ colorScheme: 'dark' }}
                      >
                        {[1, 2, 3, 4, 5, 6].map((n) => (
                          <option key={n} value={n} className="bg-gray-800">{n} Passenger{n > 1 ? 's' : ''}</option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#f26c22] to-[#e0560e] hover:from-[#e0560e] hover:to-[#c44705] text-white py-3.5 rounded-xl font-bold text-[15px] transition-all shadow-lg flex items-center justify-center gap-2 hover:scale-[1.01]"
                >
                  <FaBus />
                  {submitted ? 'Searching Buses...' : 'Search Available Buses'}
                </button>
                <p className="text-center text-white/50 text-[11px]">
                  Can&apos;t find your route?{' '}
                  <Link href="/contact" className="text-[#ffa347] hover:underline font-semibold">Request a custom trip</Link>
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
            <div className="inline-flex items-center gap-2 bg-[#f26c22]/10 text-[#f26c22] text-[12px] font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-widest">
              <FaBus /> Popular Routes
            </div>
            <h2 className="text-[28px] sm:text-[36px] text-gray-900">Top Bus Routes from Delhi</h2>
            <p className="text-gray-500 text-[15px] mt-2">Frequent departures, best prices, premium comfort</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {popularRoutes.map((route, i) => (
              <Link
                href="/contact"
                key={i}
                className="group bg-[#fcf9f5] hover:bg-[#f26c22] border border-gray-200 hover:border-[#f26c22] rounded-2xl p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="text-[13px] font-bold text-gray-700 group-hover:text-white mb-1">{route.from}</div>
                <FaArrowRight className="mx-auto text-[#f26c22] group-hover:text-white text-xs my-2" />
                <div className="text-[13px] font-bold text-gray-900 group-hover:text-white mb-2">{route.to}</div>
                <div className="text-[11px] text-gray-400 group-hover:text-white/80">{route.hrs}</div>
                <div className="text-[15px] font-black text-[#f26c22] group-hover:text-white mt-1">{route.price}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-20 bg-[#fcf9f5]">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#1E6AD4]/10 text-[#1E6AD4] text-[12px] font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-widest">
              <BsStars /> Featured Coaches
            </div>
            <h2 className="text-[28px] sm:text-[40px] text-gray-900">Premium Bus Packages</h2>
            <p className="text-gray-500 text-[15px] mt-3 max-w-lg mx-auto">Handpicked luxury coaches for your mountain journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {busPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-[0_5px_25px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.13)] border border-gray-100 transition-all duration-400 hover:-translate-y-2"
              >
                <div className="relative h-[200px] overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <span className={`absolute top-4 left-4 ${pkg.badgeColor} text-white text-[11px] font-black px-3 py-1 rounded-full shadow-md uppercase tracking-wider`}>
                    {pkg.badge}
                  </span>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-[12px] text-[#ffa347] font-semibold">{pkg.busType}</div>
                    <div className="text-[18px] font-black">{pkg.route}</div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-[17px] font-bold text-gray-900">{pkg.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center gap-1 text-amber-400 text-[12px]">
                          <FaStar />
                          <span className="font-bold text-gray-700">{pkg.rating}</span>
                        </div>
                        <span className="text-gray-400 text-[12px]">({pkg.reviews} reviews)</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[22px] font-black text-[#f26c22]">{pkg.price}</div>
                      <div className="text-[11px] text-gray-400">per seat</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-[12px] text-gray-500 mb-4 pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-1.5">
                      <FaClock className="text-[#f26c22]" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FaBus className="text-[#1E6AD4]" />
                      <span>Departs {pkg.departure}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-5">
                    {pkg.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-1.5 text-[12px] text-gray-600">
                        <BsCheckLg className="text-emerald-500 text-xs shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="w-full block text-center bg-gradient-to-r from-[#f26c22] to-[#e0560e] hover:from-[#e0560e] hover:to-[#c44705] text-white py-3 rounded-xl font-bold text-[14px] transition-all shadow-md hover:scale-[1.01]"
                  >
                    Book Now
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
            <div className="inline-flex items-center gap-2 bg-[#f26c22]/10 text-[#f26c22] text-[12px] font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-widest">
              <FaShieldAlt /> Why Choose Us
            </div>
            <h2 className="text-[28px] sm:text-[40px] text-gray-900">Travel with Confidence</h2>
            <p className="text-gray-500 text-[15px] mt-3 max-w-lg mx-auto">Every bus journey with Zoyo is designed for your ultimate comfort and safety</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {features.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <div key={i} className="group bg-[#fcf9f5] hover:bg-white border border-gray-100 hover:border-[#f26c22]/30 rounded-3xl p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(242,108,34,0.1)]">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300" style={{ background: feat.gradient }}>
                    <Icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-[17px] font-bold text-gray-900 mb-2 group-hover:text-[#f26c22] transition-colors">{feat.title}</h3>
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
          src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=2000&auto=format&fit=crop"
          alt="Himachal mountain road"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.2)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1422]/90 via-[#0b1422]/60 to-[#f26c22]/30" />
        <div className="relative z-10 max-w-[860px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 text-white text-[12px] font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
            <FaPhoneAlt className="text-[#ffa347]" /> Get In Touch
          </div>
          <h2 className="text-[30px] sm:text-[44px]  text-white leading-tight mb-5">
            Need a Custom Bus Charter or <span className="text-[#ffa347]">Group Booking?</span>
          </h2>
          <p className="text-gray-300 text-[16px] sm:text-[18px] mb-10 max-w-2xl mx-auto leading-relaxed">
            Planning a family trip, corporate outing, or school excursion? We arrange private luxury bus charters across Himachal Pradesh and pan-India.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-[#f26c22] to-[#e0560e] hover:from-[#e0560e] hover:to-[#c44705] text-white px-8 py-4 rounded-full font-bold text-[15px] transition-all duration-300 hover:scale-105 shadow-2xl flex items-center gap-2"
            >
              <FaPhoneAlt className="text-xs" /> Request a Custom Quote
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
              <FaPhoneAlt className="text-xs text-[#ffa347]" /> (+91) 80916 60060
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
