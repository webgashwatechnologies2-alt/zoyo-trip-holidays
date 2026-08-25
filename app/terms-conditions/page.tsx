'use client';

import React from 'react';
import Link from 'next/link';
import { FaFileContract, FaCheckCircle, FaExclamationTriangle, FaBalanceScale } from 'react-icons/fa';
import { BsStars } from 'react-icons/bs';

export default function TermsConditionsPage() {
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
            <span className="text-[#f26c22] font-semibold">Terms & Conditions</span>
          </div>
          <h1 className="text-[38px] sm:text-[54px] text-white leading-tight mb-4 tracking-tight">
            Terms &{' '}
            <span className="bg-gradient-to-r from-[#f26c22] via-[#ffa347] to-[#ffd000] bg-clip-text text-transparent">
              Conditions
            </span>
          </h1>
          <p className="text-gray-200 text-[16px] sm:text-[18px] max-w-xl mx-auto font-light mb-8 leading-relaxed">
            Please read our terms and conditions carefully before booking.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 sm:py-20 px-4 sm:px-8 lg:px-16 max-w-[1000px] mx-auto w-full">
        <div className="mb-10 border-b border-gray-200 pb-8">
          <span className="text-[12px] font-bold text-[#f26c22] uppercase tracking-widest bg-[#f26c22]/10 px-3.5 py-1 rounded-full inline-block mb-3">
            <BsStars className="inline mr-1" /> Legal Agreement
          </span>
          <h2 className="text-[26px] sm:text-[32px] text-gray-900">
            Terms & Conditions
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Last Updated: August 2026
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm space-y-8">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FaFileContract className="text-[#f26c22]" /> Acceptance of Terms
            </h3>
            <p className="text-gray-600 text-[15px] leading-[1.8]">
              By booking with Zoyo Trip Holidays, you agree to these terms and conditions. Please read them carefully as they govern your relationship with us regarding our travel services.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FaCheckCircle className="text-[#f26c22]" /> Booking & Payment
            </h3>
            <ul className="list-disc list-inside text-gray-600 text-[15px] leading-[1.8] space-y-2 ml-4">
              <li>All bookings are subject to availability and confirmation</li>
              <li>A minimum deposit of 25% is required to confirm your booking</li>
              <li>Full payment must be made 15 days before departure for domestic tours and 30 days for international tours</li>
              <li>Prices are subject to change without prior notice due to currency fluctuations, fuel surcharges, or tax changes</li>
              <li>Payments can be made via credit card, debit card, UPI, bank transfer, or cash</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FaExclamationTriangle className="text-[#f26c22]" /> Traveler Responsibilities
            </h3>
            <ul className="list-disc list-inside text-gray-600 text-[15px] leading-[1.8] space-y-2 ml-4">
              <li>Valid passport (with minimum 6 months validity) for international travel</li>
              <li>Valid visa for the destination country (we provide assistance but approval is subject to embassy)</li>
              <li>Travel insurance is mandatory for all international bookings</li>
              <li>Travelers must be physically fit for the chosen tour activities</li>
              <li>Compliance with local laws, customs, and regulations of destination countries</li>
              <li>Timely reporting at designated pickup points as per itinerary</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Itinerary Changes</h3>
            <p className="text-gray-600 text-[15px] leading-[1.8] mb-4">
              We reserve the right to modify itineraries due to:
            </p>
            <ul className="list-disc list-inside text-gray-600 text-[15px] leading-[1.8] space-y-2 ml-4">
              <li>Weather conditions or natural disasters</li>
              <li>Flight delays or cancellations</li>
              <li>Political unrest or security concerns</li>
              <li>Force majeure events beyond our control</li>
              <li>Operational requirements or logistical constraints</li>
            </ul>
            <p className="text-gray-600 text-[15px] leading-[1.8] mt-4">
              In such cases, we will provide alternative arrangements of similar value or refund the affected portion.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FaBalanceScale className="text-[#f26c22]" /> Liability & Limitations
            </h3>
            <p className="text-gray-600 text-[15px] leading-[1.8] mb-4">
              Our liability is limited to:
            </p>
            <ul className="list-disc list-inside text-gray-600 text-[15px] leading-[1.8] space-y-2 ml-4">
              <li>The cost of services booked through us</li>
              <li>We are not liable for any indirect, incidental, or consequential damages</li>
              <li>We are not responsible for actions of third-party service providers (airlines, hotels, etc.)</li>
              <li>We are not liable for personal injury, loss, or damage during travel unless caused by our negligence</li>
              <li>Travel insurance is strongly recommended to cover unforeseen circumstances</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Governing Law</h3>
            <p className="text-gray-600 text-[15px] leading-[1.8]">
              These terms and conditions are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Delhi, India.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
            <p className="text-gray-600 text-[15px] leading-[1.8]">
              For any questions regarding these terms and conditions, please contact us:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-xl">
              <p className="text-gray-700 text-sm font-semibold">Email: legal@zoyotripholidays.com</p>
              <p className="text-gray-700 text-sm font-semibold">Phone: +91 8091660060</p>
              <p className="text-gray-700 text-sm font-semibold">WhatsApp: +91 8091660060</p>
              <p className="text-gray-700 text-sm font-semibold">Address: Delhi, India</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
