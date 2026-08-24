'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaClock,
  FaCheckCircle,
  FaPaperPlane,
} from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travelers: '2',
    date: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="flex flex-col w-full overflow-x-hidden bg-[#fcf9f5] min-h-screen">
      {/* Hero Banner */}
      <section className="relative w-full min-h-[420px] md:min-h-[480px] flex items-center justify-center overflow-hidden py-14 sm:py-20">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2000&auto=format&fit=crop"
          alt="Contact Zoyo Trip Holidays"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.35)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1329] via-black/30 to-black/60" />
        
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto my-auto">
          <div className="inline-flex items-center gap-2 text-white/70 text-[13px] font-medium mb-4 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-[#f26c22] font-semibold">Contact Us</span>
          </div>
          <h1 className="text-[36px] sm:text-[50px] font-black text-white leading-tight mb-4">
            Let&apos;s Plan Your <span className="text-[#f26c22]">Next Adventure</span>
          </h1>
          <p className="text-gray-200 text-[16px] sm:text-[18px] max-w-xl mx-auto font-light">
            Have questions or need a custom holiday itinerary? Our destination specialists are here to assist you 24/7.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 sm:px-10 lg:px-20 max-w-[1240px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <span className="text-[12px] font-bold text-[#f26c22] uppercase tracking-widest bg-[#f26c22]/10 px-3 py-1 rounded-full inline-block mb-4">
                Head Office
              </span>
              <h2 className="text-[24px] font-black text-gray-900 mb-6">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#f26c22]/10 text-[#f26c22] flex items-center justify-center text-xl shrink-0">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-[15px]">Office Address</h3>
                    <p className="text-gray-600 text-[13.5px] leading-relaxed mt-1">
                      Near by Ananda Marga High School, HPSEBL Colony, Bhuntar, Sarabai, Himachal Pradesh 175125
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#1E6AD4]/10 text-[#1E6AD4] flex items-center justify-center text-xl shrink-0">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-[15px]">Phone & Hotline</h3>
                    <p className="text-gray-600 text-[13.5px] mt-1">
                      <a href="tel:+918091660060" className="hover:text-[#f26c22] transition font-medium">(+91) 8091660060</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center text-xl shrink-0">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-[15px]">WhatsApp Support</h3>
                    <p className="text-gray-600 text-[13.5px] mt-1">
                      <a href="https://wa.me/918091660060" target="_blank" rel="noreferrer" className="hover:text-emerald-600 transition font-medium">
                        Chat with our Travel Agent
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center text-xl shrink-0">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-[15px]">Email Address</h3>
                    <p className="text-gray-600 text-[13.5px] mt-1">
                      <a href="mailto:info@zoyotrip.in" className="hover:text-[#f26c22] transition font-medium">info@zoyotrip.in</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-600 flex items-center justify-center text-xl shrink-0">
                    <FaClock />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-[15px]">Working Hours</h3>
                    <p className="text-gray-600 text-[13.5px] mt-1">
                      Monday - Sunday: 9:00 AM – 9:00 PM<br />
                      <span className="text-emerald-600 font-semibold">(24/7 On-Tour Emergency Desk)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100">
              <span className="text-[12px] font-bold text-[#1E6AD4] uppercase tracking-widest bg-[#1E6AD4]/10 px-3 py-1 rounded-full inline-block mb-3">
                Quick Enquiry
              </span>
              <h2 className="text-[28px] font-black text-gray-900 mb-2">Request a Free Custom Quote</h2>
              <p className="text-gray-500 text-[14.5px] mb-8">
                Fill out the details below and our travel expert will send you a tailored itinerary and discounted pricing within 2 hours.
              </p>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center text-3xl mx-auto mb-4">
                    <FaCheckCircle />
                  </div>
                  <h3 className="text-[22px] font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600 text-[14.5px] max-w-md mx-auto mb-6">
                    We have received your enquiry. One of our dedicated holiday specialists will call or WhatsApp you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-[#111827] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-gray-800 transition"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-700 font-semibold text-[13.5px] mb-1.5">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#f26c22] text-sm"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold text-[13.5px] mb-1.5">Phone / WhatsApp Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#f26c22] text-sm"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-700 font-semibold text-[13.5px] mb-1.5">Email Address</label>
                      <input
                        type="email"
                        placeholder="rahul@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#f26c22] text-sm"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold text-[13.5px] mb-1.5">Preferred Destination *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Manali, Kashmir, Dubai, Bali, Maldives"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#f26c22] text-sm"
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-700 font-semibold text-[13.5px] mb-1.5">Number of Travelers</label>
                      <select
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#f26c22] text-sm bg-white"
                        value={formData.travelers}
                        onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                      >
                        <option value="1">Solo (1 Person)</option>
                        <option value="2">Couple / 2 Persons</option>
                        <option value="3-5">Family (3 - 5 Persons)</option>
                        <option value="6+">Group (6+ Persons)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold text-[13.5px] mb-1.5">Approx. Travel Date</label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#f26c22] text-sm bg-white"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold text-[13.5px] mb-1.5">Your Travel Preferences / Requirements</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your trip: hotel preference (3★, 4★, 5★), sightseeing interests, flight requirements, etc."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#f26c22] text-sm"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#f26c22] to-[#e0560e] hover:from-[#e0560e] hover:to-[#c44705] text-white py-4 rounded-xl font-bold text-[15px] transition-all shadow-lg flex items-center justify-center gap-2 hover:scale-[1.01]"
                  >
                    <FaPaperPlane className="text-sm" />
                    <span>Send My Holiday Request</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
