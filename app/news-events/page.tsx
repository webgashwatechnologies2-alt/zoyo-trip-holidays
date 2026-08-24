'use client';

import React from 'react';
import Link from 'next/link';
import { FaCalendarAlt, FaArrowRight, FaNewspaper, FaCamera, FaMapMarkerAlt } from 'react-icons/fa';
import { BsStars } from 'react-icons/bs';

const newsEvents = [
  {
    id: 1,
    title: 'Zoyo Trip Holidays Launches New International Packages',
    date: 'August 15, 2026',
    category: 'Launch',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop',
    excerpt: 'We are thrilled to announce the launch of our exclusive international holiday packages to Dubai, Maldives, Bali, and more with special introductory offers.',
    location: 'Headquarters, Delhi',
  },
  {
    id: 2,
    title: 'Summer Special: Up to 30% Off on Himachal Pradesh Tours',
    date: 'August 10, 2026',
    category: 'Offer',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a2?q=80&w=800&auto=format&fit=crop',
    excerpt: 'Book your Himachal Pradesh adventure this summer and enjoy massive discounts on Manali, Shimla, and Spiti Valley packages.',
    location: 'All Destinations',
  },
  {
    id: 3,
    title: 'Photo Contest Winners Announced',
    date: 'August 5, 2026',
    category: 'Event',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop',
    excerpt: 'Congratulations to all winners of our "Travel Through Your Lens" photography contest. Check out the stunning winning entries.',
    location: 'Online Gallery',
  },
  {
    id: 4,
    title: 'New Partnership with Luxury Hotels in Kerala',
    date: 'July 28, 2026',
    category: 'Partnership',
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=800&auto=format&fit=crop',
    excerpt: 'We have partnered with premium 5-star resorts in Kerala to offer our guests an unforgettable luxury experience at competitive prices.',
    location: 'Kerala, India',
  },
  {
    id: 5,
    title: 'Customer Appreciation Month - Special Rewards',
    date: 'July 20, 2026',
    category: 'Offer',
    image: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=800&auto=format&fit=crop',
    excerpt: 'As a token of gratitude to our loyal customers, we are offering exclusive rewards and complimentary upgrades on all bookings this month.',
    location: 'All Destinations',
  },
  {
    id: 6,
    title: 'Eco-Tourism Initiative: Sustainable Travel Packages',
    date: 'July 15, 2026',
    category: 'Initiative',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop',
    excerpt: 'Join us in our commitment to sustainable tourism with our new eco-friendly travel packages that support local communities and conservation efforts.',
    location: 'National Parks',
  },
];

export default function NewsEventsPage() {
  return (
    <main className="flex flex-col w-full overflow-x-hidden bg-[#fcf9f5] min-h-screen">
      
      {/* Hero Banner */}
      <section className="relative w-full min-h-[400px] sm:min-h-[450px] md:min-h-[500px] flex items-center justify-center overflow-hidden py-14 sm:py-20 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1329] via-[#1a1f3c] to-[#0b1329]" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#f26c22] rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ffa347] rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 text-white/70 text-[13px] font-medium mb-5 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <span className="text-[#f26c22] font-semibold">News & Events</span>
          </div>
          <h1 className="text-[38px] sm:text-[54px] font-black text-white leading-tight mb-4 tracking-tight">
            Latest{' '}
            <span className="bg-gradient-to-r from-[#f26c22] via-[#ffa347] to-[#ffd000] bg-clip-text text-transparent">
              News & Events
            </span>
          </h1>
          <p className="text-gray-200 text-[16px] sm:text-[18px] max-w-xl mx-auto font-light mb-8 leading-relaxed">
            Stay updated with the latest happenings, special offers, and exciting events from Zoyo Trip Holidays.
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-14 sm:py-20 px-4 sm:px-8 lg:px-16 max-w-[1400px] mx-auto w-full">
        <div className="mb-10 border-b border-gray-200 pb-8">
          <span className="text-[12px] font-bold text-[#f26c22] uppercase tracking-widest bg-[#f26c22]/10 px-3.5 py-1 rounded-full inline-block mb-3">
            <BsStars className="inline mr-1" /> Latest Updates
          </span>
          <h2 className="text-[26px] sm:text-[32px] font-black text-gray-900">
            News & Events
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Discover what's new at Zoyo Trip Holidays
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsEvents.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_45px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-[220px] overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-[#f26c22] text-white text-[10px] font-black px-2.5 py-1 rounded-full shadow uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                  <FaCalendarAlt className="text-[#f26c22]" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-[18px] font-bold text-gray-900 group-hover:text-[#f26c22] transition-colors mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <FaMapMarkerAlt className="text-[#f26c22]" />
                    <span>{item.location}</span>
                  </div>
                  <Link
                    href="#"
                    className="text-[#f26c22] font-bold text-xs flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Read More <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-8 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#111827] to-[#1e293b] text-white rounded-3xl p-8 sm:p-12 shadow-2xl text-center">
          <h2 className="text-[26px] sm:text-[34px] font-black mb-3 leading-tight">
            Want to Stay Updated?
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto mb-8 font-light">
            Subscribe to our newsletter and never miss out on special offers, new destinations, and travel tips.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-[#f26c22] hover:bg-[#d95d1a] text-white px-8 py-3.5 rounded-full font-bold text-sm transition shadow-lg flex items-center gap-2"
            >
              <FaNewspaper className="text-xs" /> Subscribe Now
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
