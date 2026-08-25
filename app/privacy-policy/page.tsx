'use client';

import React from 'react';
import Link from 'next/link';
import { FaShieldAlt, FaLock, FaUserSecret, FaFileAlt } from 'react-icons/fa';
import { BsStars } from 'react-icons/bs';

export default function PrivacyPolicyPage() {
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
            <span className="text-[#f26c22] font-semibold">Privacy Policy</span>
          </div>
          <h1 className="text-[38px] sm:text-[54px] text-white leading-tight mb-4 tracking-tight">
            Privacy{' '}
            <span className="bg-gradient-to-r from-[#f26c22] via-[#ffa347] to-[#ffd000] bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
          <p className="text-gray-200 text-[16px] sm:text-[18px] max-w-xl mx-auto font-light mb-8 leading-relaxed">
            Your privacy is important to us. Learn how we protect your personal information.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 sm:py-20 px-4 sm:px-8 lg:px-16 max-w-[1000px] mx-auto w-full">
        <div className="mb-10 border-b border-gray-200 pb-8">
          <span className="text-[12px] font-bold text-[#f26c22] uppercase tracking-widest bg-[#f26c22]/10 px-3.5 py-1 rounded-full inline-block mb-3">
            <BsStars className="inline mr-1" /> Legal Information
          </span>
          <h2 className="text-[26px] sm:text-[32px] text-gray-900">
            Privacy Policy
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Last Updated: August 2026
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm space-y-8">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FaShieldAlt className="text-[#f26c22]" /> Information We Collect
            </h3>
            <p className="text-gray-600 text-[15px] leading-[1.8] mb-4">
              At Zoyo Trip Holidays, we collect information you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside text-gray-600 text-[15px] leading-[1.8] space-y-2 ml-4">
              <li>Name, email address, phone number, and other contact details</li>
              <li>Travel preferences, dates, and destination choices</li>
              <li>Payment information (processed securely through third-party payment gateways)</li>
              <li>Passport and visa details for international travel bookings</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FaLock className="text-[#f26c22]" /> How We Use Your Information
            </h3>
            <p className="text-gray-600 text-[15px] leading-[1.8] mb-4">
              We use your information to:
            </p>
            <ul className="list-disc list-inside text-gray-600 text-[15px] leading-[1.8] space-y-2 ml-4">
              <li>Process and manage your travel bookings</li>
              <li>Communicate with you about your reservations and travel updates</li>
              <li>Provide customer support and respond to your inquiries</li>
              <li>Send you promotional offers and travel updates (with your consent)</li>
              <li>Improve our services and develop new travel packages</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FaUserSecret className="text-[#f26c22]" /> Data Security
            </h3>
            <p className="text-gray-600 text-[15px] leading-[1.8]">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Your payment information is processed through secure, encrypted payment gateways and is not stored on our servers.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FaFileAlt className="text-[#f26c22]" /> Information Sharing
            </h3>
            <p className="text-gray-600 text-[15px] leading-[1.8] mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only with:
            </p>
            <ul className="list-disc list-inside text-gray-600 text-[15px] leading-[1.8] space-y-2 ml-4">
              <li>Travel service providers (hotels, airlines, tour operators) to fulfill your bookings</li>
              <li>Payment processors to process transactions securely</li>
              <li>Government authorities when required by law for visa processing</li>
              <li>Service providers who assist in operating our business (with strict confidentiality agreements)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Your Rights</h3>
            <p className="text-gray-600 text-[15px] leading-[1.8] mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-600 text-[15px] leading-[1.8] space-y-2 ml-4">
              <li>Access and review your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information (subject to legal obligations)</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h3>
            <p className="text-gray-600 text-[15px] leading-[1.8]">
              If you have any questions about this Privacy Policy or how we handle your personal information, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-xl">
              <p className="text-gray-700 text-sm font-semibold">Email: privacy@zoyotripholidays.com</p>
              <p className="text-gray-700 text-sm font-semibold">Phone: +91 8091660060</p>
              <p className="text-gray-700 text-sm font-semibold">WhatsApp: +91 8091660060</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
