'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaCalendarCheck, FaSearch, FaPhoneAlt, FaFileDownload, FaCreditCard } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';

export default function BookingsPage() {
  const [bookingId, setBookingId] = useState('');
  const [phone, setPhone] = useState('');
  const [searched, setSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
  };

  return (
    <main className="flex flex-col w-full overflow-x-hidden bg-[#fcf9f5] min-h-screen">
      {/* Hero */}
      <section className="relative w-full min-h-[400px] md:min-h-[460px] flex items-center justify-center overflow-hidden py-14 sm:py-20">
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000&auto=format&fit=crop"
          alt="My Bookings"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.35)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1329] via-black/30 to-black/60" />
        
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto my-auto">
          <div className="inline-flex items-center gap-2 text-white/70 text-[13px] font-medium mb-4 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-[#f26c22] font-semibold">Manage Bookings</span>
          </div>
          <h1 className="text-[34px] sm:text-[46px] font-black text-white leading-tight mb-3">
            Track &amp; Manage Your <span className="text-[#f26c22]">Bookings</span>
          </h1>
          <p className="text-gray-200 text-[15px] sm:text-[17px] font-light">
            Check your itinerary vouchers, flight tickets, hotel confirmation, and payment status anytime.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <section className="py-16 px-6 sm:px-10 lg:px-20 max-w-[1000px] mx-auto w-full">
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100 mb-10">
          <h2 className="text-[22px] font-bold text-gray-900 mb-2">Find Your Booking</h2>
          <p className="text-gray-500 text-sm mb-6">
            Enter your Booking Reference Number and registered Mobile Number to access your tour documents.
          </p>

          <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-12 gap-4">
            <div className="sm:col-span-5">
              <label className="block text-xs font-bold text-gray-600 uppercase mb-1">Booking ID / Ref No.</label>
              <input
                type="text"
                required
                placeholder="e.g. ZOYO-2026-889"
                value={bookingId}
                onChange={(e) => setBookingId(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#f26c22] text-sm"
              />
            </div>
            <div className="sm:col-span-5">
              <label className="block text-xs font-bold text-gray-600 uppercase mb-1">Registered Phone No.</label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#f26c22] text-sm"
              />
            </div>
            <div className="sm:col-span-2 flex items-end">
              <button
                type="submit"
                className="w-full bg-[#f26c22] hover:bg-[#d95d1a] text-white py-3 px-4 rounded-xl font-bold text-sm transition shadow flex items-center justify-center gap-2"
              >
                <FaSearch /> Search
              </button>
            </div>
          </form>

          {searched && (
            <div className="mt-8 p-6 bg-amber-50 rounded-2xl border border-amber-200 text-sm text-amber-900">
              <p className="font-semibold mb-1">Searching booking record for: {bookingId || 'N/A'}</p>
              <p className="text-amber-700">
                If your booking was placed recently, please allow 15 minutes for system synchronization or contact our 24/7 hotline at <a href="tel:+918091660060" className="underline font-bold">+91 8091660060</a>.
              </p>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#1E6AD4]/10 text-[#1E6AD4] flex items-center justify-center text-xl shrink-0">
              <FaCreditCard />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-1">Make a Payment</h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-3">Pay package balance or token advance securely online.</p>
              <Link href="/contact" className="text-xs font-bold text-[#1E6AD4] hover:underline flex items-center gap-1">
                Pay Now <BsArrowRight />
              </Link>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center text-xl shrink-0">
              <FaFileDownload />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-1">Download Vouchers</h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-3">Get your hotel confirmation &amp; cab driver details.</p>
              <Link href="/contact" className="text-xs font-bold text-emerald-600 hover:underline flex items-center gap-1">
                Request Voucher <BsArrowRight />
              </Link>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#f26c22]/10 text-[#f26c22] flex items-center justify-center text-xl shrink-0">
              <FaPhoneAlt />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-1">Need Assistance?</h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-3">24/7 dedicated customer care for ongoing tours.</p>
              <a href="tel:+918091660060" className="text-xs font-bold text-[#f26c22] hover:underline flex items-center gap-1">
                Call Concierge <BsArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
