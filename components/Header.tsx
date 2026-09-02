'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  FaBars, 
  FaTimes, 
  FaChevronDown, 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaFacebookF, 
  FaYoutube, 
  FaInstagram, 
  FaLinkedinIn, 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaFileInvoice, 
  FaCreditCard 
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import zoyoLogo from '../public/assets/images/logo/zoyo_logo.png';

const nationalDestinations: Record<string, { title: string; items: { name: string; href: string; badge?: string }[] }> = {
  northIndia: {
    title: 'NORTH INDIA',
    items: [
      { name: 'Himachal Pradesh', href: '/national/himachal-pradesh', badge: 'POPULAR' },
      { name: 'Kashmir', href: '/national/kashmir', badge: 'TRENDING' },
      { name: 'Leh & Ladakh', href: '/national/ladakh', badge: 'SEASON' },
      { name: 'Lahaul and Spiti', href: '/national/spiti' },
      { name: 'Rajasthan', href: '/national/rajasthan' },
      { name: 'Uttarakhand', href: '/national/uttarakhand', badge: 'POPULAR' },
      { name: 'Uttar Pradesh', href: '/national/uttarpradesh' },
    ],
  },
  southIndia: {
    title: 'SOUTH INDIA',
    items: [
      { name: 'Karnataka', href: '/national/karnataka' },
      { name: 'Kerala', href: '/national/kerala', badge: 'SEASON' },
      { name: 'Goa', href: '/national/goa', badge: 'POPULAR' },
      { name: 'Andaman & Nikobar', href: '/national/andaman-nikobar', badge: 'HONEYMOON' },
      { name: 'Tamil Nadu', href: '/national/tamil-nadu' },
    ],
  },
  eastIndia: {
    title: 'EAST INDIA',
    items: [
      { name: 'Arunachal Pradesh', href: '/national/arunachal' },
      { name: 'Assam', href: '/national/assam' },
      { name: 'Meghalaya', href: '/national/meghalaya', badge: 'SEASON' },
      { name: 'Sikkim', href: '/national/sikkim', badge: 'POPULAR' },
      { name: 'Odisha', href: '/national/odisha' },
    ],
  },
  northeastIndia: {
    title: 'NORTH EAST INDIA',
    items: [
      { name: 'Manipur', href: '/national/manipur' },
    ],
  },
  westIndia: {
    title: 'WEST INDIA',
    items: [
      { name: 'Gujarat', href: '/national/gujarat' },
    ],
  },
};
const badgeConfig: Record<string, { bg: string; color: string; label: string }> = {
  TRENDING:     { bg: '#f8a598', color: '#2d1515', label: 'TRENDING' },
  HONEYMOON:    { bg: '#f9a8d4', color: '#431427', label: 'HONEYMOON' },
  POPULAR:      { bg: '#fed7aa', color: '#431407', label: 'POPULAR' },
  POPULAR_BLUE: { bg: '#c7d2fe', color: '#1e1b4b', label: 'POPULAR' },
  SEASON:       { bg: '#86efac', color: '#064e3b', label: 'SEASON' },
};

const renderBadge = (badgeKey?: string, isMobile = false) => {
  if (!badgeKey || !badgeConfig[badgeKey]) return null;
  const b = badgeConfig[badgeKey];
  return (
    <span
      style={{
        backgroundColor: b.bg,
        color: b.color,
      }}
      className={`${
        isMobile ? 'text-[8.5px] px-1.5 py-0.5' : 'text-[9.5px] px-2 py-0.5'
      } font-semibold rounded-full uppercase tracking-wider leading-none shadow-[0_1px_2px_rgba(0,0,0,0.05)] inline-flex items-center justify-center`}
    >
      {b.label}
    </span>
  );
};

const internationalDestinations: Record<string, { title: string; items: { name: string; href: string; badge?: string }[] }> = {
  southeastAsia: {
    title: 'SOUTHEAST ASIA',
    items: [
      { name: 'Bali',      href: '/international/bali',      badge: 'TRENDING' },
      { name: 'Singapore', href: '/international/singapore' },
      { name: 'Thailand',  href: '/international/thailand',  badge: 'POPULAR' },
      { name: 'Vietnam',   href: '/international/vietnam',   badge: 'SEASON' },
    ],
  },
  southAsia: {
    title: 'SOUTH ASIA',
    items: [
      { name: 'Nepal',     href: '/international/nepal' },
      { name: 'Bhutan',    href: '/international/bhutan',    badge: 'SEASON' },
      { name: 'Maldives',  href: '/international/maldives',  badge: 'HONEYMOON' },
      { name: 'Malaysia',  href: '/international/malaysia' },
      { name: 'Sri Lanka', href: '/international/sri-lanka' },
    ],
  },
  eastAsia: {
    title: 'EAST ASIA',
    items: [
      { name: 'Japan', href: '/international/japan' },
    ],
  },
  middleEast: {
    title: 'MIDDLE EAST',
    items: [
      { name: 'Dubai', href: '/international/dubai', badge: 'POPULAR_BLUE' },
    ],
  },
};

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileSubmenu = (menuKey: string) => {
    setMobileExpanded(mobileExpanded === menuKey ? null : menuKey);
  };

  return (
    <header className="w-full relative h-[85px] sm:h-[100px] sticky top-0 z-50">
      <div className="absolute top-0 left-0 w-full h-[38px] sm:h-[45px] bg-[#1E6AD4] z-0"></div>
      <div className="absolute bottom-0 left-0 w-full h-[47px] sm:h-[55px] bg-white border-b border-gray-200 z-0 shadow-sm"></div>
      <div className="relative z-10 w-full h-full flex px-2 sm:px-6 lg:px-8 xl:px-12 max-w-full">
        <div className="w-[125px] xs:w-[145px] sm:w-[200px] lg:w-[260px] shrink-0 h-full relative">
          <Link href="/">
            <div
              className="absolute inset-0 w-full h-full bg-white flex items-center justify-center cursor-pointer"
              style={{
                clipPath: 'polygon(20px 0, 100% 0, calc(100% - 20px) 100%, 0 100%)',
              }}
            >
              <div className="flex items-center justify-center px-1">
                <img
                  src={zoyoLogo.src}
                  alt="Zoyo Trip Holidays"
                  className="w-auto h-[40px] sm:h-[55px] lg:h-[65px] object-contain"
                />
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-1 flex flex-col h-full min-w-0">
          <div className="h-[38px] sm:h-[45px] flex justify-between items-center px-1.5 sm:px-4 text-white text-[11px] sm:text-[13px] font-medium">
            <div className="hidden md:flex items-center gap-6 whitespace-nowrap overflow-hidden">
              <div className="hidden md:flex items-center gap-1.5 truncate">
                <FaMapMarkerAlt className="w-3.5 h-3.5 shrink-0 text-white" />
                <span className="truncate">Near by Ananda Marga High School, HPSEBL Colony, Bhuntar, Sarabai, Himachal Pradesh 175125</span>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <FaEnvelope className="w-3.5 h-3.5 shrink-0 text-white" />
                <span>info@zoyotrip.in</span>
              </div>
              {/* Social Icons */}
              <div className="hidden md:flex items-center gap-2 ml-2 pl-3 border-l border-white/30">
                <a href="https://www.facebook.com/ZoyoTripHolidays/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                  className="w-[22px] h-[22px] flex items-center justify-center rounded-full bg-white/15 hover:bg-[#1877F2] transition-all duration-200">
                  <FaFacebookF className="text-[10px] text-white" />
                </a>
                <a href="https://www.youtube.com/@zoyotripholidays" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
                  className="w-[22px] h-[22px] flex items-center justify-center rounded-full bg-white/15 hover:bg-[#FF0000] transition-all duration-200">
                  <FaYoutube className="text-[10px] text-white" />
                </a>
                <a href="https://x.com/zoyotrip" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X"
                  className="w-[22px] h-[22px] flex items-center justify-center rounded-full bg-white/15 hover:bg-black transition-all duration-200">
                  <FaXTwitter className="text-[10px] text-white" />
                </a>
                <a href="https://www.instagram.com/zoyotripholidays/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                  className="w-[22px] h-[22px] flex items-center justify-center rounded-full bg-white/15 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] transition-all duration-200" style={{ background: 'rgba(255,255,255,0.15)' }} onMouseEnter={e => (e.currentTarget.style.background = 'linear-gradient(to top right, #f09433, #e6683c, #bc1888)')} onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}>
                  <FaInstagram className="text-[10px] text-white" />
                </a>
                <a href="https://www.linkedin.com/in/zoyo-trip-holidays/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                  className="w-[22px] h-[22px] flex items-center justify-center rounded-full bg-white/15 hover:bg-[#0A66C2] transition-all duration-200">
                  <FaLinkedinIn className="text-[10px] text-white" />
                </a>
              </div>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-3 shrink-0 ml-auto">
              <Link
                href="/contact"
                className="bg-[#f26c22] hover:bg-[#d95d1a] px-2 sm:px-3 py-1 sm:py-1.5 rounded-[4px] text-[10.5px] sm:text-[12px] font-bold flex items-center gap-1.5 transition shadow-sm whitespace-nowrap text-white"
              >
                <FaFileInvoice className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                Get Quote
              </Link>
              <Link
                href="/bookings"
                className="bg-[#f26c22] hover:bg-[#d95d1a] px-2 sm:px-3 py-1 sm:py-1.5 rounded-[4px] text-[10.5px] sm:text-[12px] font-bold flex items-center gap-1.5 transition shadow-sm whitespace-nowrap text-white"
              >
                <FaCreditCard className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                Pay Now
              </Link>
            </div>
          </div>
          <div className="h-[47px] sm:h-[55px] flex items-center justify-between pl-1 sm:pl-2">
            <nav className="hidden lg:flex space-x-8 text-[15px] font-[500] text-[#222] whitespace-nowrap h-full items-center">
              <Link href="/" className="hover:text-[#F26C22] transition">
                Home
              </Link>
              <Link href="/about" className="hover:text-[#f26c22] transition">
                About
              </Link>
              <div
                className="relative h-full flex items-center group cursor-pointer"
                onMouseEnter={() => setActiveMenu('national')}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link href="/national" className="hover:text-[#f26c22] transition flex items-center gap-1">
                  National Destinations
                  <FaChevronDown
                    className={`w-3 h-3 mt-0.5 transition-transform duration-200 ${activeMenu === 'national' ? 'rotate-180 text-[#f26c22]' : ''
                      }`}
                  />
                </Link>
                <div
                  className={`fixed left-0 right-0 top-[100px] w-full bg-white border-t-2 border-[#1E6AD4] shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-200 z-50 ${activeMenu === 'national'
                      ? 'opacity-100 visible translate-y-0 pointer-events-auto'
                      : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                    }`}
                >
                  <div className="max-w-[1400px] mx-auto px-12 py-8">
                    <div className="grid grid-cols-4 gap-12 text-left">
                      <div>
                        <div className="flex items-center gap-2 border-l-[3px] border-[#1E6AD4] pl-2.5 text-[12px] font-extrabold tracking-wider text-[#1a2b49] uppercase mb-4">
                          {nationalDestinations.northIndia.title}
                        </div>
                        <ul className="space-y-2.5">
                          {nationalDestinations.northIndia.items.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className="text-[13.5px] text-[#4b5563] hover:text-[#f26c22] hover:translate-x-1 transition-all duration-150 inline-flex items-center gap-2 font-normal"
                              >
                                {item.name}
                                {renderBadge(item.badge)}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 border-l-[3px] border-[#1E6AD4] pl-2.5 text-[12px] font-extrabold tracking-wider text-[#1a2b49] uppercase mb-4">
                          {nationalDestinations.southIndia.title}
                        </div>
                        <ul className="space-y-2.5">
                          {nationalDestinations.southIndia.items.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className="text-[13.5px] text-[#4b5563] hover:text-[#f26c22] hover:translate-x-1 transition-all duration-150 inline-flex items-center gap-2 font-normal"
                              >
                                {item.name}
                                {renderBadge(item.badge)}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 border-l-[3px] border-[#1E6AD4] pl-2.5 text-[12px] font-extrabold tracking-wider text-[#1a2b49] uppercase mb-4">
                          {nationalDestinations.eastIndia.title}
                        </div>
                        <ul className="space-y-2.5">
                          {nationalDestinations.eastIndia.items.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className="text-[13.5px] text-[#4b5563] hover:text-[#f26c22] hover:translate-x-1 transition-all duration-150 inline-flex items-center gap-2 font-normal"
                              >
                                {item.name}
                                {renderBadge(item.badge)}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 border-l-[3px] border-[#1E6AD4] pl-2.5 text-[12px] font-extrabold tracking-wider text-[#1a2b49] uppercase mb-4">
                          {nationalDestinations.northeastIndia.title}
                        </div>
                        <ul className="space-y-2.5">
                          {nationalDestinations.northeastIndia.items.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className="text-[13.5px] text-[#4b5563] hover:text-[#f26c22] hover:translate-x-1 transition-all duration-150 inline-flex items-center gap-2 font-normal"
                              >
                                {item.name}
                                {renderBadge(item.badge)}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 border-l-[3px] border-[#1E6AD4] pl-2.5 text-[12px] font-extrabold tracking-wider text-[#1a2b49] uppercase mb-4">
                          {nationalDestinations.westIndia.title}
                        </div>
                        <ul className="space-y-2.5">
                          {nationalDestinations.westIndia.items.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className="text-[13.5px] text-[#4b5563] hover:text-[#f26c22] hover:translate-x-1 transition-all duration-150 inline-flex items-center gap-2 font-normal"
                              >
                                {item.name}
                                {renderBadge(item.badge)}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="relative h-full flex items-center group cursor-pointer"
                onMouseEnter={() => setActiveMenu('international')}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link href="/international" className="hover:text-[#f26c22] transition flex items-center gap-1">
                  International Destinations
                  <FaChevronDown
                    className={`w-3 h-3 mt-0.5 transition-transform duration-200 ${activeMenu === 'international' ? 'rotate-180 text-[#f26c22]' : ''
                      }`}
                  />
                </Link>
                <div
                  className={`fixed left-0 right-0 top-[100px] w-full bg-white border-t-2 border-[#1E6AD4] shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-200 z-50 ${activeMenu === 'international'
                      ? 'opacity-100 visible translate-y-0 pointer-events-auto'
                      : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                    }`}
                >
                  <div className="max-w-[1400px] mx-auto px-12 py-8">
                    <div className="grid grid-cols-4 gap-12 text-left">
                      <div className="space-y-6">
                        <div>
                          <div className="flex items-center gap-2 border-l-[3px] border-[#1E6AD4] pl-2.5 text-[12px] font-extrabold tracking-wider text-[#1a2b49] uppercase mb-4">
                            {internationalDestinations.southeastAsia.title}
                          </div>
                          <ul className="space-y-2.5">
                            {internationalDestinations.southeastAsia.items.map((item) => (
                              <li key={item.name}>
                                <Link
                                  href={item.href}
                                  className="text-[13.5px] text-[#4b5563] hover:text-[#f26c22] hover:translate-x-1 transition-all duration-150 inline-flex items-center gap-2 font-normal"
                                >
                                  {item.name}
                                  {renderBadge(item.badge)}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 border-l-[3px] border-[#1E6AD4] pl-2.5 text-[12px] font-extrabold tracking-wider text-[#1a2b49] uppercase mb-4">
                          {internationalDestinations.southAsia.title}
                        </div>
                        <ul className="space-y-2.5">
                          {internationalDestinations.southAsia.items.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className="text-[13.5px] text-[#4b5563] hover:text-[#f26c22] hover:translate-x-1 transition-all duration-150 inline-flex items-center gap-2 font-normal"
                              >
                                {item.name}
                                {renderBadge(item.badge)}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 border-l-[3px] border-[#1E6AD4] pl-2.5 text-[12px] font-extrabold tracking-wider text-[#1a2b49] uppercase mb-4">
                          {internationalDestinations.eastAsia.title}
                        </div>
                        <ul className="space-y-2.5">
                          {internationalDestinations.eastAsia.items.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className="text-[13.5px] text-[#4b5563] hover:text-[#f26c22] hover:translate-x-1 transition-all duration-150 inline-flex items-center gap-2 font-normal"
                              >
                                {item.name}
                                {renderBadge(item.badge)}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 border-l-[3px] border-[#1E6AD4] pl-2.5 text-[12px] font-extrabold tracking-wider text-[#1a2b49] uppercase mb-4">
                          {internationalDestinations.middleEast.title}
                        </div>
                        <ul className="space-y-2.5">
                          {internationalDestinations.middleEast.items.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className="text-[13.5px] text-[#4b5563] hover:text-[#f26c22] hover:translate-x-1 transition-all duration-150 inline-flex items-center gap-2 font-normal"
                              >
                                {item.name}
                                {renderBadge(item.badge)}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Link href="/gallery" className="hover:text-[#f26c22] transition">
                Gallery
              </Link>
              <div
                className="relative h-full flex items-center group cursor-pointer"
                onMouseEnter={() => setActiveMenu('bookings')}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link href="/bookings" className="hover:text-[#f26c22] transition flex items-center gap-1.5">
                  Bookings
                  <FaChevronDown className="w-3 h-3 mt-0.5" />
                </Link>

                <div
                  className={`absolute top-[55px] left-0 w-60 bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.12)] rounded-b-xl py-3 transition-all duration-200 z-50 ${activeMenu === 'bookings'
                      ? 'opacity-100 visible translate-y-0 pointer-events-auto'
                      : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                    }`}
                >
                  <Link
                    href="/bus-booking"
                    className="block px-4 py-2 text-[13.5px] text-gray-700 hover:bg-orange-50 hover:text-[#f26c22] transition"
                  >
                    Bus Booking
                  </Link>
                  <Link
                    href="/flight-booking"
                    className="block px-4 py-2 text-[13.5px] text-gray-700 hover:bg-orange-50 hover:text-[#f26c22] transition"
                  >
                    Flight Booking
                  </Link>
                  <Link
                    href="/hotel-booking"
                    className="block px-4 py-2 text-[13.5px] text-gray-700 hover:bg-orange-50 hover:text-[#f26c22] transition"
                  >
                    Hotel Booking
                  </Link>
                </div>
              </div>

              <Link href="/contact" className="hover:text-[#f26c22] transition">
                Contact Us
              </Link>
              <div
                className="relative h-full flex items-center group cursor-pointer"
                onMouseEnter={() => setActiveMenu('account')}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link href="/account" className="hover:text-[#f26c22] transition flex items-center gap-1.5">
                  My Account
                  <FaChevronDown className="w-3 h-3 mt-0.5" />
                </Link>

                <div
                  className={`absolute top-[55px] right-0 w-56 bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.12)] rounded-b-xl py-3 transition-all duration-200 z-50 ${activeMenu === 'account'
                      ? 'opacity-100 visible translate-y-0 pointer-events-auto'
                      : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                    }`}
                >
                  <Link
                    href="/account"
                    className="block px-4 py-2 text-[13.5px] text-gray-700 hover:bg-orange-50 hover:text-[#f26c22] transition"
                  >
                    Sign In / Login
                  </Link>
                  <Link
                    href="/account"
                    className="block px-4 py-2 text-[13.5px] text-gray-700 hover:bg-orange-50 hover:text-[#f26c22] transition"
                  >
                    Create New Account
                  </Link>
                  <Link
                    href="/bookings"
                    className="block px-4 py-2 text-[13.5px] text-gray-700 hover:bg-orange-50 hover:text-[#f26c22] transition"
                  >
                    My Past Bookings
                  </Link>
                </div>
              </div>
            </nav>
            <div className="flex items-center gap-2 lg:hidden ml-auto">
              <a
                href="https://wa.me/918091660060"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm shadow-sm"
              >
                <FaWhatsapp />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Menu"
                className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 flex items-center justify-center text-lg transition"
              >
                {mobileMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[85px] sm:top-[100px] z-50 bg-black/60 backdrop-blur-sm flex flex-col justify-start">
          <div className="w-full max-h-[85vh] bg-white overflow-y-auto shadow-2xl pb-10 border-t border-gray-100">
            <div className="p-5 space-y-3 text-left">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 px-3 rounded-lg font-semibold text-gray-900 hover:bg-orange-50 hover:text-[#f26c22] text-[15px]"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 px-3 rounded-lg font-semibold text-gray-900 hover:bg-orange-50 hover:text-[#f26c22] text-[15px]"
              >
                About Us
              </Link>
              <div className="border-t border-gray-100 pt-2">
                <button
                  onClick={() => toggleMobileSubmenu('national')}
                  className="w-full flex items-center justify-between py-2 px-3 rounded-lg font-semibold text-gray-900 hover:bg-orange-50 hover:text-[#f26c22] text-[15px]"
                >
                  <span>National Destinations</span>
                  <FaChevronDown
                    className={`text-xs transition-transform duration-200 ${mobileExpanded === 'national' ? 'rotate-180 text-[#f26c22]' : 'text-gray-400'
                      }`}
                  />
                </button>
                {mobileExpanded === 'national' && (
                  <div className="pl-4 pr-2 py-2 space-y-4 bg-gray-50 rounded-xl mt-1">
                    {Object.values(nationalDestinations).map((cat) => (
                      <div key={cat.title}>
                        <div className="text-[11px] font-extrabold uppercase text-[#1E6AD4] tracking-wider mb-1.5">
                          {cat.title}
                        </div>
                        <div className="grid grid-cols-2 gap-1">
                          {cat.items.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-xs text-gray-600 hover:text-[#f26c22] py-1 inline-flex items-center gap-1.5"
                            >
                              <span>• {item.name}</span>
                              {renderBadge(item.badge, true)}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="border-t border-gray-100 pt-2">
                <button
                  onClick={() => toggleMobileSubmenu('international')}
                  className="w-full flex items-center justify-between py-2 px-3 rounded-lg font-semibold text-gray-900 hover:bg-orange-50 hover:text-[#f26c22] text-[15px]"
                >
                  <span>International Destinations</span>
                  <FaChevronDown
                    className={`text-xs transition-transform duration-200 ${mobileExpanded === 'international' ? 'rotate-180 text-[#f26c22]' : 'text-gray-400'
                      }`}
                  />
                </button>
                {mobileExpanded === 'international' && (
                  <div className="pl-4 pr-2 py-2 space-y-4 bg-gray-50 rounded-xl mt-1">
                    {Object.values(internationalDestinations).map((cat) => (
                      <div key={cat.title}>
                        <div className="text-[11px] font-extrabold uppercase text-[#1E6AD4] tracking-wider mb-1.5">
                          {cat.title}
                        </div>
                        <div className="grid grid-cols-2 gap-1">
                          {cat.items.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-xs text-gray-600 hover:text-[#f26c22] py-1 inline-flex items-center gap-1.5"
                            >
                              <span>• {item.name}</span>
                              {renderBadge(item.badge, true)}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="border-t border-gray-100 pt-2">
                <Link
                  href="/bookings"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 px-3 rounded-lg font-semibold text-gray-900 hover:bg-orange-50 hover:text-[#f26c22] text-[15px]"
                >
                  Manage Bookings
                </Link>
              </div>
              <div className="border-t border-gray-100 pt-2">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 px-3 rounded-lg font-semibold text-gray-900 hover:bg-orange-50 hover:text-[#f26c22] text-[15px]"
                >
                  Contact Us
                </Link>
              </div>
              <div className="border-t border-gray-100 pt-2">
                <Link
                  href="/account"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 px-3 rounded-lg font-semibold text-gray-900 hover:bg-orange-50 hover:text-[#f26c22] text-[15px]"
                >
                  My Account
                </Link>
              </div>

            </div>
          </div>
        </div>
      )}
    </header>
  );
}
