'use client';

import React from 'react';
import Link from 'next/link';
import { FaTimesCircle, FaCalendarAlt, FaFileAlt, FaPhoneAlt } from 'react-icons/fa';
import { BsStars } from 'react-icons/bs';

export default function CancellationPolicyPage() {
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
            <span className="text-[#f26c22] font-semibold">Cancellation Policy</span>
          </div>
          <h1 className="text-[38px] sm:text-[54px] text-white leading-tight mb-4 tracking-tight">
            Cancellation{' '}
            <span className="bg-gradient-to-r from-[#f26c22] via-[#ffa347] to-[#ffd000] bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
          <p className="text-gray-200 text-[16px] sm:text-[18px] max-w-xl mx-auto font-light mb-8 leading-relaxed">
            Clear guidelines for cancelling your travel bookings.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 sm:py-20 px-4 sm:px-8 lg:px-16 max-w-[1000px] mx-auto w-full">
        <div className="mb-10 border-b border-gray-200 pb-8">
          <span className="text-[12px] font-bold text-[#f26c22] uppercase tracking-widest bg-[#f26c22]/10 px-3.5 py-1 rounded-full inline-block mb-3">
            <BsStars className="inline mr-1" /> Booking Terms
          </span>
          <h2 className="text-[26px] sm:text-[32px] text-gray-900">
            Cancellation Policy
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Last Updated: August 2026
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm space-y-8">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FaTimesCircle className="text-[#f26c22]" /> Cancellation Guidelines
            </h3>
            <p className="text-gray-600 text-[15px] leading-[1.8]">
              To cancel your booking, please notify us in writing via email or phone. Cancellations will be effective from the date we receive your request. Please provide your booking reference number and traveler details for faster processing.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FaCalendarAlt className="text-[#f26c22]" /> Cancellation Charges
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left font-bold text-gray-900">Time Before Departure</th>
                    <th className="px-4 py-3 text-left font-bold text-gray-900">Cancellation Charge</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-3 text-gray-700">30+ days</td>
                    <td className="px-4 py-3 text-gray-700 font-semibold">10% of total amount</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-700">15-29 days</td>
                    <td className="px-4 py-3 text-gray-700 font-semibold">25% of total amount</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-700">7-14 days</td>
                    <td className="px-4 py-3 text-gray-700 font-semibold">50% of total amount</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-700">3-6 days</td>
                    <td className="px-4 py-3 text-gray-700 font-semibold">75% of total amount</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-700">0-2 days / No Show</td>
                    <td className="px-4 py-3 text-gray-700 font-semibold">100% of total amount</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FaFileAlt className="text-[#f26c22]" /> Service-Specific Policies
            </h3>
            <p className="text-gray-600 text-[15px] leading-[1.8] mb-4">
              Certain services have specific cancellation policies:
            </p>
            <ul className="list-disc list-inside text-gray-600 text-[15px] leading-[1.8] space-y-2 ml-4">
              <li><strong>Flight Tickets:</strong> As per airline policy (non-refundable in most cases)</li>
              <li><strong>Hotels:</strong> As per hotel cancellation policy (varies by property)</li>
              <li><strong>Visa Services:</strong> Non-refundable once application is submitted</li>
              <li><strong>Travel Insurance:</strong> Non-refundable after policy issuance</li>
              <li><strong>Group Tours:</strong> Special group cancellation terms may apply</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Partial Cancellations</h3>
            <p className="text-gray-600 text-[15px] leading-[1.8]">
              For group bookings, partial cancellations are subject to the same percentage-based charges. The remaining travelers may be subject to revised pricing based on the new group size.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">No-Show Policy</h3>
            <p className="text-gray-600 text-[15px] leading-[1.8]">
              If you fail to report for your scheduled tour or flight without prior cancellation, it will be considered a no-show and 100% of the booking amount will be forfeited. No refund or rescheduling will be permitted in such cases.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Modification Policy</h3>
            <p className="text-gray-600 text-[15px] leading-[1.8]">
              Date changes or modifications to bookings are subject to availability and may incur additional charges. Changes made within 7 days of departure may be treated as cancellations and re-bookings.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FaPhoneAlt className="text-[#f26c22]" /> Contact for Cancellations
            </h3>
            <p className="text-gray-600 text-[15px] leading-[1.8]">
              To cancel your booking, please contact us:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-xl">
              <p className="text-gray-700 text-sm font-semibold">Email: cancellations@zoyotripholidays.com</p>
              <p className="text-gray-700 text-sm font-semibold">Phone: +91 8091660060</p>
              <p className="text-gray-700 text-sm font-semibold">WhatsApp: +91 8091660060</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
