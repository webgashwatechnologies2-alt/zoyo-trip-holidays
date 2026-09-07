'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaGooglePay,
  FaApplePay,
  FaChevronRight,
  FaWhatsapp,
  FaArrowRight,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import zoyoLogo from '../public/assets/images/logo/zoyo_logo.png';

// ─── National Destinations (same as Header) ──────────────────────────────────
const nationalDestinations = [
  // North India
  { name: 'Himachal Pradesh', href: '/national/himachal-pradesh' },
  { name: 'Kashmir', href: '/national/kashmir' },
  { name: 'Leh & Ladakh', href: '/national/ladakh' },
  { name: 'Lahaul & Spiti', href: '/national/spiti' },
  { name: 'Rajasthan', href: '/national/rajasthan' },
  { name: 'Uttarakhand', href: '/national/uttarakhand' },
  { name: 'Uttar Pradesh', href: '/national/uttarpradesh' },
  // South India
  { name: 'Karnataka', href: '/national/karnataka' },
  { name: 'Kerala', href: '/national/kerala' },
  { name: 'Goa', href: '/national/goa' },
  { name: 'Andaman & Nikobar', href: '/national/andaman-nikobar' },
  { name: 'Tamil Nadu', href: '/national/tamil-nadu' },
  // East India
  { name: 'Arunachal Pradesh', href: '/national/arunachal' },
  { name: 'Assam', href: '/national/assam' },
  { name: 'Meghalaya', href: '/national/meghalaya' },
  { name: 'Sikkim', href: '/national/sikkim' },
  { name: 'Odisha', href: '/national/odisha' },
  // North East & West
  { name: 'Manipur', href: '/national/manipur' },
  { name: 'Gujarat', href: '/national/gujarat' },
];

// ─── International Destinations (same as Header) ─────────────────────────────
const internationalDestinations = [
  { name: 'Bali', href: '/international/bali' },
  { name: 'Singapore', href: '/international/singapore' },
  { name: 'Thailand', href: '/international/thailand' },
  { name: 'Vietnam', href: '/international/vietnam' },
  { name: 'Nepal', href: '/international/nepal' },
  { name: 'Bhutan', href: '/international/bhutan' },
  { name: 'Maldives', href: '/international/maldives' },
  { name: 'Malaysia', href: '/international/malaysia' },
  { name: 'Sri Lanka', href: '/international/sri-lanka' },
  { name: 'Japan', href: '/international/japan' },
  { name: 'Dubai', href: '/international/dubai' },
];

// ─── Quick Links ──────────────────────────────────────────────────────────────
const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Vision & Mission', href: '/vision-mission' },
  { name: 'Tour Gallery', href: '/gallery' },
  { name: 'News & Events', href: '/news-events' },
  { name: 'Bookings', href: '/bookings' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Refund Policy', href: '/refund-policy' },
  { name: 'Cancellation Policy', href: '/cancellation-policy' },
  { name: 'Terms & Conditions', href: '/terms-conditions' },
];

// ─── Services ─────────────────────────────────────────────────────────────────
const services = [
  { name: 'Hotel Booking', href: '/hotel-booking' },
  { name: 'Flight Booking', href: '/flight-booking' },
  { name: 'Bus Booking', href: '/bus-booking' },
  { name: 'Customize Package', href: '/contact' },
  { name: 'Helicopter Charters', href: '/contact' },
  { name: 'Visa Processing', href: '/contact' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#0d1b2a] text-white font-sans">
      <div className="border-b border-white/10 bg-[#112233]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-7 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#f26c22] animate-pulse shrink-0" />
            <div>
              <h3 className="text-[17px] sm:text-[19px] font-extrabold text-white leading-tight">
                Get Updated The Latest Newsletter
              </h3>
              <p className="text-gray-400 text-[12.5px] mt-0.5">
                Exclusive deals, travel tips & package updates — straight to your inbox.
              </p>
            </div>
          </div>
          {subscribed ? (
            <div className="flex items-center gap-2 bg-emerald-900/40 border border-emerald-700/60 rounded-xl px-5 py-3">
              <span className="text-emerald-400 font-bold text-sm">✓ Subscribed successfully!</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="w-full sm:w-auto sm:min-w-[340px] flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                className="flex-1 bg-white text-gray-800 text-sm px-4 py-2.5 rounded-full outline-none border-2 border-transparent focus:border-[#f26c22] transition-all placeholder:text-gray-400 font-medium"
              />
              <button
                type="submit"
                className="flex items-center gap-2 bg-[#0d1b2a] hover:bg-[#f26c22] text-white font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-300 whitespace-nowrap border border-white/20 hover:border-[#f26c22] cursor-pointer"
              >
                Subscribe Now <FaArrowRight className="text-xs" />
              </button>
            </form>
          )}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          <div className="lg:col-span-1 flex flex-col gap-4">
            <Link href="/" className="inline-block">
              <Image
                src={zoyoLogo}
                alt="Zoyo Trip Holidays"
                width={130}
                height={50}
                className="object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 text-[13px] leading-relaxed">
              India&apos;s most trusted Tour &amp; Destination Management Company — specialising in customised domestic &amp; international travel.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/8 border border-white/10 rounded-xl px-3.5 py-2 w-fit">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#f26c22] text-xs">★</span>
                ))}
              </div>
              <span className="text-white font-bold text-xs">4.7</span>
              <span className="text-gray-400 text-[11px]">/ 24K+ Reviews</span>
            </div>
            <div className="space-y-2">
              <a
                href="tel:+918091660060"
                className="flex items-center gap-2 text-gray-400 hover:text-[#f26c22] transition-colors text-[13px] group"
              >
                <FaPhoneAlt className="text-[#f26c22] shrink-0 group-hover:scale-110 transition-transform" />
                (+91) 8091660060
              </a>
              <a
                href="mailto:info@zoyotrip.in"
                className="flex items-center gap-2 text-gray-400 hover:text-[#f26c22] transition-colors text-[13px] group"
              >
                <FaEnvelope className="text-[#f26c22] shrink-0 group-hover:scale-110 transition-transform" />
                info@zoyotrip.in
              </a>
              <div className="flex items-start gap-2 text-gray-400 text-[13px]">
                <FaMapMarkerAlt className="text-[#f26c22] shrink-0 mt-0.5" />
                <span>Inderlok, New Delhi — 110035, India</span>
              </div>
            </div>
            <div className="flex gap-2 flex-wrap mt-1">
              {[
                { href: 'https://www.facebook.com/ZoyoTripHolidays/', icon: FaFacebookF, label: 'Facebook', hover: 'hover:bg-[#1877F2]' },
                { href: 'https://www.instagram.com/zoyotripholidays/', icon: FaInstagram, label: 'Instagram', hover: 'hover:bg-gradient-to-tr hover:from-[#f09433] hover:to-[#bc1888]' },
                { href: 'https://www.youtube.com/@zoyotripholidays', icon: FaYoutube, label: 'YouTube', hover: 'hover:bg-[#FF0000]' },
                { href: 'https://x.com/zoyotrip', icon: FaXTwitter, label: 'X Twitter', hover: 'hover:bg-white hover:text-black' },
                { href: 'https://www.linkedin.com/in/zoyo-trip-holidays/', icon: FaLinkedinIn, label: 'LinkedIn', hover: 'hover:bg-[#0A66C2]' },
                { href: 'https://wa.me/918091660060', icon: FaWhatsapp, label: 'WhatsApp', hover: 'hover:bg-[#25D366]' },
              ].map(({ href, icon: Icon, label, hover }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-8 h-8 rounded-full bg-white/10 ${hover} flex items-center justify-center text-white transition-all duration-200 hover:scale-110`}
                >
                  <Icon className="text-xs" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <h4 className="font-extrabold text-white text-[14px] uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-3 h-0.5 bg-[#f26c22] inline-block rounded-full" />
              National Destinations
            </h4>
            <ul className="space-y-1.5">
              {nationalDestinations.map((d) => (
                <li key={d.href}>
                  <Link
                    href={d.href}
                    className="flex items-center gap-1.5 text-gray-400 hover:text-[#f26c22] transition-colors text-[12.5px] group"
                  >
                    <FaChevronRight className="text-[8px] text-[#f26c22]/60 group-hover:text-[#f26c22] group-hover:translate-x-0.5 transition-all" />
                    {d.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: International Destinations ────────────────── */}
          <div className="lg:col-span-1">
            <h4 className="font-extrabold text-white text-[14px] uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-3 h-0.5 bg-[#f26c22] inline-block rounded-full" />
              International
            </h4>
            <ul className="space-y-1.5 mb-7">
              {internationalDestinations.map((d) => (
                <li key={d.href}>
                  <Link
                    href={d.href}
                    className="flex items-center gap-1.5 text-gray-400 hover:text-[#f26c22] transition-colors text-[12.5px] group"
                  >
                    <FaChevronRight className="text-[8px] text-[#f26c22]/60 group-hover:text-[#f26c22] group-hover:translate-x-0.5 transition-all" />
                    {d.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Services */}
            <h4 className="font-extrabold text-white text-[14px] uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-3 h-0.5 bg-[#f26c22] inline-block rounded-full" />
              Our Services
            </h4>
            <ul className="space-y-1.5">
              {services.map((s) => (
                <li key={s.href + s.name}>
                  <Link
                    href={s.href}
                    className="flex items-center gap-1.5 text-gray-400 hover:text-[#f26c22] transition-colors text-[12.5px] group"
                  >
                    <FaChevronRight className="text-[8px] text-[#f26c22]/60 group-hover:text-[#f26c22] group-hover:translate-x-0.5 transition-all" />
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Quick Links ────────────────────────────────── */}
          <div className="lg:col-span-1">
            <h4 className="font-extrabold text-white text-[14px] uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-3 h-0.5 bg-[#f26c22] inline-block rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-1.5">
              {quickLinks.map((l) => (
                <li key={l.href + l.name}>
                  <Link
                    href={l.href}
                    className="flex items-center gap-1.5 text-gray-400 hover:text-[#f26c22] transition-colors text-[12.5px] group"
                  >
                    <FaChevronRight className="text-[8px] text-[#f26c22]/60 group-hover:text-[#f26c22] group-hover:translate-x-0.5 transition-all" />
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="font-extrabold text-white text-[14px] uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-3 h-0.5 bg-[#f26c22] inline-block rounded-full" />
              Instagram Posts
            </h4>
            <div className="grid grid-cols-3 gap-1.5 mb-5">
              {[
                "/assets/images/iteneraryimages/kashmir-family-tour.webp",
                "/assets/images/iteneraryimages/honeymoon-in-kashmir.webp",
                "/assets/images/iteneraryimages/Jama_Masjid,_Srinagar.webp",
                "/assets/images/iteneraryimages/png1.webp",
                "/assets/images/iteneraryimages/monasteries-ladakh.webp",
                "/assets/images/iteneraryimages/romantic-himachal.webp",
                "/assets/images/iteneraryimages/newimage.webp",
                "/assets/images/iteneraryimages/spitivalleyfaliy.webp",
                "/assets/images/iteneraryimages/newphtography.webp",
                "/assets/images/iteneraryimages/sptmn2.webp",
                "/assets/images/iteneraryimages/royal-rajasthan.webp",
                "/assets/images/iteneraryimages/jaipur-ajmer-pushkar-tours.webp",
                "/assets/images/iteneraryimages/Camel-decorated.webp",
                "/assets/images/iteneraryimages/up2.webp",
                "/assets/images/iteneraryimages/bikaner2.webp",
                "/assets/images/iteneraryimages/rajasthan-honeymoon-tour.webp",
                "/assets/images/iteneraryimages/ag1.webp",
                "/assets/images/iteneraryimages/Prayagraj-Maha-Kumbh.webp",
              ].map((src, i) => (
                <a
                  key={i}
                  href="https://www.instagram.com/zoyotripholidays/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-square overflow-hidden rounded-lg group"
                >
                  <img
                    src={src}
                    alt={`Instagram ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-[#f26c22]/0 group-hover:bg-[#f26c22]/30 transition-all duration-300 flex items-center justify-center">
                    <FaInstagram className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-lg" />
                  </div>
                </a>
              ))}
            </div>
            <a
              href="https://www.instagram.com/zoyotripholidays/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#bc1888] text-white text-xs font-bold py-2 rounded-lg hover:opacity-90 transition-opacity"
            >
              <FaInstagram /> Follow @zoyotripholidays
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 bg-[#091522]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-gray-500 text-xs">
          <p>© 2026 <span className="text-[#f26c22] font-semibold">Zoyo Trip Holidays</span>. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="text-gray-500 font-medium">We Accept</span>
            <div className="flex items-center gap-2 text-2xl text-gray-400">
              <FaCcVisa className="hover:text-white transition" title="Visa" />
              <FaCcMastercard className="hover:text-white transition" title="Mastercard" />
              <FaCcPaypal className="hover:text-white transition" title="PayPal" />
              <FaGooglePay className="text-3xl hover:text-white transition" title="Google Pay" />
              <FaApplePay className="text-3xl hover:text-white transition" title="Apple Pay" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
