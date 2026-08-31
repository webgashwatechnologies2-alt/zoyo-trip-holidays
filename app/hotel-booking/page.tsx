'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Herobaner from '@/public/assets/images/bookings/himachal-pradesh-hotels.webp';
import luxuryHotelImage from '@/public/assets/images/bookings/Khyber.webp';
import mountainHotelImage from '@/public/assets/images/bookings/htlshimla.webp';
import resortHotelImage from '@/public/assets/images/bookings/htlllast.webp';

import {
  FaHotel,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUsers,
  FaWifi,
  FaSwimmingPool,
  FaShieldAlt,
  FaStar,
  FaPhoneAlt,
  FaWhatsapp,
  FaClock,
  FaArrowRight,
  FaTag,
  FaHeadset,
  FaBed,
  FaUtensils,
  FaCar,
  FaConciergeBell,
} from 'react-icons/fa';

import {
  BsCheckLg,
  BsStars,
} from 'react-icons/bs';
import { sendEmailToZoyo } from '@/lib/sendEmail';

const hotelPackages = [
  {
    id: 1,
    name: 'Luxury Mountain Resort',
    location: 'Manali, Himachal Pradesh',
    duration: '2–3 Nights',
    price: '₹3,999',
    features: [
      'Deluxe Room',
      'Breakfast Included',
      'Free Wi-Fi',
      'Mountain View',
    ],
    badge: 'Most Popular',
    badgeColor: 'bg-[#f26c22]',
    image: luxuryHotelImage,
    rating: 4.8,
    reviews: 1240,
    checkIn: '12:00 PM',
    hotelType: '5-Star Luxury Resort',
  },
  {
    id: 2,
    name: 'Mountain View Hotel',
    location: 'Shimla, Himachal Pradesh',
    duration: '2–3 Nights',
    price: '₹2,499',
    features: [
      'Super Deluxe Room',
      'Breakfast Included',
      'Free Parking',
      'Valley View',
    ],
    badge: 'Best Value',
    badgeColor: 'bg-[#1E6AD4]',
    image: mountainHotelImage,
    rating: 4.6,
    reviews: 890,
    checkIn: '1:00 PM',
    hotelType: 'Premium Hotel',
  },
  {
    id: 3,
    name: 'Premium Valley Resort',
    location: 'Dharamshala, Himachal Pradesh',
    duration: '2–4 Nights',
    price: '₹4,499',
    features: [
      'Premium Suite',
      'Swimming Pool',
      'Restaurant',
      'Spa & Wellness',
    ],
    badge: 'Premium',
    badgeColor: 'bg-emerald-600',
    image: resortHotelImage,
    rating: 4.9,
    reviews: 645,
    checkIn: '12:30 PM',
    hotelType: 'Luxury Valley Resort',
  },
];
const features = [
  {
    icon: FaShieldAlt,
    title: 'Safe & Secure Stays',
    desc: 'Stay at verified hotels with secure premises, professional staff, CCTV surveillance, and 24/7 guest assistance.',
    gradient: 'linear-gradient(135deg,#1E6AD4,#3b82f6)',
  },
  {
    icon: FaWifi,
    title: 'Free Wi-Fi',
    desc: 'Enjoy complimentary high-speed Wi-Fi in your room and common areas so you can stay connected throughout your trip.',
    gradient: 'linear-gradient(135deg,#f26c22,#ffa347)',
  },
  {
    icon: FaBed,
    title: 'Comfortable Rooms',
    desc: 'Relax in clean, spacious and well-furnished rooms with premium beds, fresh linens, modern amenities and beautiful views.',
    gradient: 'linear-gradient(135deg,#06b6d4,#22d3ee)',
  },
  {
    icon: FaHeadset,
    title: '24/7 Guest Support',
    desc: 'Our dedicated travel support team is available around the clock to assist you with check-in, bookings and special requests.',
    gradient: 'linear-gradient(135deg,#10b981,#34d399)',
  },
  {
    icon: FaConciergeBell,
    title: 'Premium Hospitality',
    desc: 'Experience warm hospitality, professional service and personalized assistance throughout your hotel stay.',
    gradient: 'linear-gradient(135deg,#8b5cf6,#a78bfa)',
  },
  {
    icon: FaTag,
    title: 'Best Hotel Rates',
    desc: 'Get competitive hotel prices with transparent pricing, no hidden charges and exclusive deals for direct bookings.',
    gradient: 'linear-gradient(135deg,#ef4444,#f87171)',
  },
];
const popularDestinations = [
  {
    city: 'Manali',
    hotels: '250+ Hotels',
    price: '₹1,499',
  },
  {
    city: 'Shimla',
    hotels: '200+ Hotels',
    price: '₹1,299',
  },
  {
    city: 'Dharamshala',
    hotels: '150+ Hotels',
    price: '₹1,199',
  },
  {
    city: 'Kasol',
    hotels: '100+ Hotels',
    price: '₹999',
  },
  {
    city: 'Dalhousie',
    hotels: '120+ Hotels',
    price: '₹1,099',
  },
  {
    city: 'Kullu',
    hotels: '90+ Hotels',
    price: '₹899',
  },
];

export default function HotelBookingPage() {
  const [form, setForm] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    rooms: '1',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    await sendEmailToZoyo({
      formType: 'Hotel Booking Search / Enquiry',
      destination: form.destination,
      travelDate: `Check-in: ${form.checkIn} to Check-out: ${form.checkOut}`,
      guests: form.guests,
      rooms: form.rooms,
      message: `Hotel search enquiry for ${form.destination}. Check-in: ${form.checkIn}, Check-out: ${form.checkOut}, Guests: ${form.guests}, Rooms: ${form.rooms}`,
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };


  return (
    <main className="flex flex-col w-full overflow-x-hidden bg-[#f8fafc] text-gray-800">
      <section className="relative w-full min-h-[520px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src={Herobaner}
          alt="Hotel Booking - Zoyo Trip Holidays"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            filter: 'brightness(0.30)',
          }}
        />
        <div className="absolute inset-0" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#f26c22]/20 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-[#1E6AD4]/25 blur-[120px] pointer-events-none" />
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-white text-[12px] font-medium mb-6 shadow-lg">
            <Link
              href="/"
              className="hover:text-[#f26c22] transition-colors"
            >
              Home
            </Link>

            <span className="text-white/40">/</span>

            <span className="text-[#f26c22] font-semibold flex items-center gap-1">
              <FaHotel className="text-xs" />
              Hotel Booking
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#f26c22]/20 border border-[#f26c22]/40 text-[#ffa347] text-[12px] font-bold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
                <BsStars />
                Trusted Hotel Booking
              </div>
              <h1 className="text-[34px] sm:text-[44px] md:text-[52px] text-white leading-[1.12] mb-5">
                Book Your Perfect Stay in{' '}
                <span className="bg-gradient-to-r from-[#f26c22] via-[#ffa347] to-[#ffd000] bg-clip-text text-transparent">
                  Himachal & Beyond
                </span>
              </h1>
              <p className="text-gray-300 text-[16px] sm:text-[18px] leading-relaxed mb-8 max-w-[540px]">
                Discover luxury resorts, mountain-view hotels, cozy stays and premium properties in Manali, Shimla, Dharamshala, Kasol and more.
              </p>
              <div className="flex items-center gap-6 flex-wrap">
                {[
                  {
                    val: '500+',
                    label: 'Hotels',
                  },
                  {
                    val: '50K+',
                    label: 'Happy Guests',
                  },
                  {
                    val: '4.8★',
                    label: 'Avg Rating',
                  },
                ].map((stat) => (

                  <div
                    key={stat.label}
                    className="text-center"
                  >
                    <div className="text-[24px] font-black text-[#ffa347]">
                      {stat.val}
                    </div>
                    <div className="text-[12px] text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl">
              <h2 className="text-white text-[20px] font-bold mb-5 flex items-center gap-2">
                <FaHotel className="text-[#f26c22]" />
                Search Hotels
              </h2>
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-[#f26c22] text-sm" />
                  <input
                    type="text"
                    placeholder="Where do you want to stay?"
                    required
                    value={form.destination}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        destination: e.target.value,
                      })
                    }
                    className="w-full pl-9 pr-3 py-3 bg-white/15 border border-white/25 rounded-xl text-white placeholder-white/50 text-[13px] focus:outline-none focus:border-[#f26c22] transition"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative">
                    <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-[#f26c22] text-sm" />
                    <input
                      type="date"
                      required
                      value={form.checkIn}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          checkIn: e.target.value,
                        })
                      }
                      className="w-full pl-9 pr-3 py-3 bg-white/15 border border-white/25 rounded-xl text-white text-[13px] focus:outline-none focus:border-[#f26c22] transition"
                      style={{
                        colorScheme: 'dark',
                      }}
                    />
                  </div>
                  <div className="relative">
                    <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-[#1E6AD4] text-sm" />
                    <input
                      type="date"
                      required
                      value={form.checkOut}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          checkOut: e.target.value,
                        })
                      }
                      className="w-full pl-9 pr-3 py-3 bg-white/15 border border-white/25 rounded-xl text-white text-[13px] focus:outline-none focus:border-[#f26c22] transition"
                      style={{
                        colorScheme: 'dark',
                      }}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative">
                    <FaUsers className="absolute left-3 top-1/2 -translate-y-1/2 text-[#f26c22] text-sm" />
                    <select
                      value={form.guests}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          guests: e.target.value,
                        })
                      }
                      className="w-full pl-9 pr-3 py-3 bg-white/15 border border-white/25 rounded-xl text-white text-[13px] focus:outline-none focus:border-[#f26c22] transition appearance-none"
                      style={{
                        colorScheme: 'dark',
                      }}
                    >
                      {[1, 2, 3, 4, 5, 6].map((n) => (
                        <option
                          key={n}
                          value={n}
                          className="bg-gray-800"
                        >
                          {n} Guest{n > 1 ? 's' : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="relative">
                    <FaBed className="absolute left-3 top-1/2 -translate-y-1/2 text-[#1E6AD4] text-sm" />
                    <select
                      value={form.rooms}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          rooms: e.target.value,
                        })
                      }
                      className="w-full pl-9 pr-3 py-3 bg-white/15 border border-white/25 rounded-xl text-white text-[13px] focus:outline-none focus:border-[#f26c22] transition appearance-none"
                      style={{
                        colorScheme: 'dark',
                      }}
                    >
                      {[1, 2, 3, 4, 5].map((n) => (
                        <option
                          key={n}
                          value={n}
                          className="bg-gray-800"
                        >
                          {n} Room{n > 1 ? 's' : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#f26c22] to-[#e0560e] hover:from-[#e0560e] hover:to-[#c44705] text-white py-3.5 rounded-xl font-bold text-[15px] transition-all shadow-lg flex items-center justify-center gap-2 hover:scale-[1.01]"
                >
                  <FaHotel />
                  {submitted
                    ? 'Searching Hotels...'
                    : 'Search Available Hotels'}
                </button>
                <p className="text-center text-white/50 text-[11px]">
                  Looking for a special stay?{' '}
                  <Link
                    href="/contact"
                    className="text-[#ffa347] hover:underline font-semibold"
                  >
                    Request a custom hotel
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-14 px-4 sm:px-6 lg:px-20 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-[#f26c22]/10 text-[#f26c22] text-[12px] font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-widest">
              <FaHotel />
              Popular Destinations
            </div>
            <h2 className="text-[28px] sm:text-[36px] text-gray-900">
              Top Hotel Destinations in Himachal
            </h2>
            <p className="text-gray-500 text-[15px] mt-2">
              Find comfortable stays, luxury resorts and mountain-view hotels
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {popularDestinations.map((destination, i) => (
              <Link
                href="/contact"
                key={i}
                className="group bg-[#fcf9f5] hover:bg-[#f26c22] border border-gray-200 hover:border-[#f26c22] rounded-2xl p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="w-10 h-10 mx-auto rounded-full bg-[#f26c22]/10 group-hover:bg-white/20 flex items-center justify-center mb-3">
                  <FaMapMarkerAlt className="text-[#f26c22] group-hover:text-white text-sm" />
                </div>
                <div className="text-[13px] font-bold text-gray-800 group-hover:text-white mb-1">
                  {destination.city}
                </div>
                <div className="text-[11px] text-gray-400 group-hover:text-white/80 mb-2">
                  {destination.hotels}
                </div>
                <div className="text-[15px] font-black text-[#f26c22] group-hover:text-white">
                  From {destination.price}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-20 px-4 sm:px-6 lg:px-20 bg-[#fcf9f5]">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#1E6AD4]/10 text-[#1E6AD4] text-[12px] font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-widest">
              <BsStars />
              Featured Hotels
            </div>
            <h2 className="text-[28px] sm:text-[40px] text-gray-900">
              Handpicked Hotels & Resorts
            </h2>
            <p className="text-gray-500 text-[15px] mt-3 max-w-lg mx-auto">
              Stay at some of the most comfortable and highly-rated properties in the mountains
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hotelPackages.map((hotel) => (
              <div
                key={hotel.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-[0_5px_25px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.13)] border border-gray-100 transition-all duration-400 hover:-translate-y-2"
              >
                <div className="relative h-[220px] overflow-hidden">
                  <Image
                    src={hotel.image}
                    alt={hotel.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0" />
                  <span
                    className={`absolute top-4 left-4 ${hotel.badgeColor} text-white text-[11px] font-black px-3 py-1 rounded-full shadow-md uppercase tracking-wider`}
                  >
                    {hotel.badge}
                  </span>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-[12px] text-[#ffa347] font-semibold">
                      {hotel.hotelType}
                    </div>
                    <div className="text-[18px] font-black">
                      {hotel.location}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-[17px] font-bold text-gray-900">
                        {hotel.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center gap-1 text-amber-400 text-[12px]">
                          <FaStar />
                          <span className="font-bold text-gray-700">
                            {hotel.rating}
                          </span>
                        </div>
                        <span className="text-gray-400 text-[12px]">
                          ({hotel.reviews} reviews)
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[22px] font-black text-[#f26c22]">
                        {hotel.price}
                      </div>
                      <div className="text-[11px] text-gray-400">
                        per night
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-[12px] text-gray-500 mb-4 pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-1.5">
                      <FaClock className="text-[#f26c22]" />
                      <span>
                        Check-in {hotel.checkIn}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FaBed className="text-[#1E6AD4]" />
                      <span>
                        {hotel.duration}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-5">
                    {hotel.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-1.5 text-[12px] text-gray-600"
                      >
                        <BsCheckLg className="text-emerald-500 text-xs shrink-0" />
                        <span>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="w-full block text-center bg-gradient-to-r from-[#f26c22] to-[#e0560e] hover:from-[#e0560e] hover:to-[#c44705] text-white py-3 rounded-xl font-bold text-[14px] transition-all shadow-md hover:scale-[1.01]"
                  >
                    Book Hotel
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-20 px-4 sm:px-6 lg:px-20 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#f26c22]/10 text-[#f26c22] text-[12px] font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-widest">
              <FaShieldAlt />
              Why Choose Us
            </div>
            <h2 className="text-[28px] sm:text-[40px] text-gray-900">
              Stay Comfortable & Travel Happy
            </h2>
            <p className="text-gray-500 text-[15px] mt-3 max-w-lg mx-auto">
              Every hotel booking with Zoyo is designed to give you comfort, convenience and complete peace of mind.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={i}
                  className="group bg-[#fcf9f5] hover:bg-white border border-gray-100 hover:border-[#f26c22]/30 rounded-3xl p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(242,108,34,0.1)]"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background: feature.gradient,
                    }}
                  >
                    <Icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-[17px] font-bold text-gray-900 mb-2 group-hover:text-[#f26c22] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-[13.5px] text-gray-500 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="w-full py-16 px-4 sm:px-6 lg:px-20 bg-[#fcf9f5]">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#1E6AD4]/10 text-[#1E6AD4] text-[12px] font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-widest">
              <FaConciergeBell />
              Hotel Services
            </div>
            <h2 className="text-[28px] sm:text-[38px] text-gray-900">
              Everything You Need for a Perfect Stay
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              {
                icon: FaWifi,
                title: 'Free Wi-Fi',
              },
              {
                icon: FaSwimmingPool,
                title: 'Swimming Pool',
              },
              {
                icon: FaUtensils,
                title: 'Restaurant',
              },
              {
                icon: FaCar,
                title: 'Free Parking',
              },
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 text-center border border-gray-100 hover:border-[#f26c22]/30 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#f26c22]/10 flex items-center justify-center">
                    <Icon className="text-[#f26c22] text-xl" />
                  </div>
                  <h3 className="text-[14px] font-bold text-gray-800">
                    {service.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="relative w-full py-20 px-4 sm:px-6 overflow-hidden">
        <Image
          src={Herobaner}
          alt="Luxury hotel stay in Himachal"
          fill
          sizes="100vw"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            filter: 'brightness(0.2)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1422]/90 via-[#0b1422]/60 to-[#f26c22]/30" />
        <div className="relative z-10 max-w-[860px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 text-white text-[12px] font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
            <FaHotel className="text-[#ffa347]" />
            Plan Your Stay
          </div>
          <h2 className="text-[30px] sm:text-[44px] text-white leading-tight mb-5">
            Looking for a Perfect Hotel in{' '}
            <span className="text-[#ffa347]">
              Himachal?
            </span>
          </h2>
          <p className="text-gray-300 text-[16px] sm:text-[18px] mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you are planning a romantic getaway, family vacation, corporate trip or adventure holiday, we can help you find the perfect stay at the best available rates.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-[#f26c22] to-[#e0560e] hover:from-[#e0560e] hover:to-[#c44705] text-white px-8 py-4 rounded-full font-bold text-[15px] transition-all duration-300 hover:scale-105 shadow-2xl flex items-center gap-2"
            >
              <FaHotel className="text-xs" />
              Find Your Hotel
            </Link>
            <a
              href="https://wa.me/918091660060"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba59] text-white px-8 py-4 rounded-full font-bold text-[15px] transition-all duration-300 hover:scale-105 shadow-xl flex items-center gap-2"
            >
              <FaWhatsapp className="text-lg" />
              WhatsApp Now
            </a>
            <a
              href="tel:+918091660060"
              className="bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-[15px] transition-all hover:scale-105 shadow-lg flex items-center gap-2"
            >
              <FaPhoneAlt className="text-xs text-[#ffa347]" />
              (+91) 80916 60060
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}