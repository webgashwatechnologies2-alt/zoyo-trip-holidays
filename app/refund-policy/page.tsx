'use client';

import React from 'react';
import Link from 'next/link';
import { FaMoneyBillWave, FaCalendarCheck, FaTimesCircle, FaCheckCircle } from 'react-icons/fa';
import { BsStars } from 'react-icons/bs';

export default function RefundPolicyPage() {
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
            <span className="text-[#f26c22] font-semibold">Refund Policy</span>
          </div>
          <h1 className="text-[38px] sm:text-[54px] text-white leading-tight mb-4 tracking-tight">
            Refund{' '}
            <span className="bg-gradient-to-r from-[#f26c22] via-[#ffa347] to-[#ffd000] bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
          <p className="text-gray-200 text-[16px] sm:text-[18px] max-w-xl mx-auto font-light mb-8 leading-relaxed">
            Clear and transparent refund policies for your peace of mind.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 sm:py-20 px-4 sm:px-8 lg:px-16 max-w-[1000px] mx-auto w-full">
        <div className="mb-10 border-b border-gray-200 pb-8">
          <span className="text-[12px] font-bold text-[#f26c22] uppercase tracking-widest bg-[#f26c22]/10 px-3.5 py-1 rounded-full inline-block mb-3">
            <BsStars className="inline mr-1" /> Customer Protection
          </span>
          <h2 className="text-[26px] sm:text-[32px] text-gray-900">
            Refund Policy
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Last Updated: August 2026
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm space-y-8">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FaMoneyBillWave className="text-[#f26c22]" /> General Refund Policy
            </h3>
            <p className="text-gray-600 text-[15px] leading-[1.8]">
              At Zoyo Trip Holidays, we understand that travel plans may change. Our refund policy is designed to be fair and transparent while protecting both our customers and our service providers.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FaCalendarCheck className="text-[#f26c22]" /> Cancellation Timeline
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left font-bold text-gray-900">Cancellation Time</th>
                    <th className="px-4 py-3 text-left font-bold text-gray-900">Refund Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-3 text-gray-700">30+ days before departure</td>
                    <td className="px-4 py-3 text-gray-700 font-semibold">90% of total booking amount</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-700">15-29 days before departure</td>
                    <td className="px-4 py-3 text-gray-700 font-semibold">75% of total booking amount</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-700">7-14 days before departure</td>
                    <td className="px-4 py-3 text-gray-700 font-semibold">50% of total booking amount</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-700">3-6 days before departure</td>
                    <td className="px-4 py-3 text-gray-700 font-semibold">25% of total booking amount</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-700">0-2 days before departure</td>
                    <td className="px-4 py-3 text-gray-700 font-semibold">No refund</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FaCheckCircle className="text-[#f26c22]" /> Non-Refundable Services
            </h3>
            <p className="text-gray-600 text-[15px] leading-[1.8] mb-4">
              The following services are generally non-refundable:
            </p>
            <ul className="list-disc list-inside text-gray-600 text-[15px] leading-[1.8] space-y-2 ml-4">
              <li>Airline tickets (as per airline policy)</li>
              <li>Visa processing fees</li>
              <li>Travel insurance premiums</li>
              <li>Special event tickets or reservations</li>
              <li>Peak season surcharges</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FaTimesCircle className="text-[#f26c22]" /> Refund Process
            </h3>
            <p className="text-gray-600 text-[15px] leading-[1.8] mb-4">
              Refunds are processed within 7-14 business days from the date of cancellation approval. The refund will be credited to the original payment method used for booking.
            </p>
            <ul className="list-disc list-inside text-gray-600 text-[15px] leading-[1.8] space-y-2 ml-4">
              <li>Submit cancellation request via email or phone</li>
              <li>Our team will review and process the request</li>
              <li>Refund amount will be calculated based on the timeline</li>
              <li>Refund will be initiated to the original payment method</li>
              <li>You will receive confirmation via email</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Force Majeure</h3>
            <p className="text-gray-600 text-[15px] leading-[1.8]">
              In case of force majeure events (natural disasters, political unrest, pandemics, etc.), we will work with service providers to secure maximum refunds or reschedule your trip without additional charges, subject to provider policies.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h3>
            <p className="text-gray-600 text-[15px] leading-[1.8]">
              For refund-related queries, please contact us:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-xl">
              <p className="text-gray-700 text-sm font-semibold">Email: refunds@zoyotripholidays.com</p>
              <p className="text-gray-700 text-sm font-semibold">Phone: +91 8091660060</p>
              <p className="text-gray-700 text-sm font-semibold">WhatsApp: +91 8091660060</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
