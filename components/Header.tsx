'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaChevronDown, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import zoyoLogo from '../public/assets/images/logo/zoyo_logo.png';

const nationalDestinations = {
  northIndia: {
    title: 'NORTH INDIA',
    items: [
      { name: 'Himachal Pradesh', href: '/national/himachal-pradesh' },
      { name: 'Kashmir', href: '/national/kashmir' },
      { name: 'Leh & Ladakh', href: '/national/ladakh' },
      { name: 'Lahaul and Spiti', href: '/national/spiti' },
      { name: 'Rajasthan', href: '/national/rajasthan' },
      { name: 'Uttarakhand', href: '/national/uttarakhand' },
      { name: 'Uttar Pradesh', href: '/national/uttarpradesh' },
    ],
  },
  southIndia: {
    title: 'SOUTH INDIA',
    items: [
      { name: 'Karnataka', href: '/national/karnataka' },
      { name: 'Kerala', href: '/national/kerala' },
      { name: 'Goa', href: '/national/goa' },
      { name: 'Andaman & Nikobar', href: '/national/andaman-nikobar' },
      { name: 'Tamil Nadu', href: '/national/tamil-nadu' },
    ],
  },
  eastIndia: {
    title: 'EAST INDIA',
    items: [
      { name: 'Arunachal Pradesh', href: '/national/arunachal' },
      { name: 'Assam', href: '/national/assam' },
      { name: 'Meghalaya', href: '/national/meghalaya' },
      { name: 'Sikkim', href: '/national/sikkim' },
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
const internationalDestinations = {
  southeastAsia: {
    title: 'SOUTHEAST ASIA',
    items: [
      { name: 'Bali', href: '/international/bali' },
      { name: 'Singapore', href: '/international/singapore' },
      { name: 'Thailand', href: '/international/thailand' },
      { name: 'Vietnam', href: '/international/vietnam' },
    ],
  },
  southAsia: {
    title: 'SOUTH ASIA',
    items: [
      { name: 'Nepal', href: '/international/nepal' },
      { name: 'Bhutan', href: '/international/bhutan' },
      { name: 'Maldives', href: '/international/maldives' },
      { name: 'Malaysia', href: '/international/malaysia' },
      { name: 'Sri Lanka', href: '/international/sri-lanka' },
      // { name: 'Philippines', href: '/international/philippines' },
    ],
  },
  eastAsia: {
    title: 'EAST ASIA',
    items: [
      // { name: 'South Korea', href: '/international/south-korea' },
      // { name: 'Hong Kong', href: '/international/hong-kong' },
      { name: 'Japan', href: '/international/japan' },
    ],
  },
  middleEast: {
    title: 'MIDDLE EAST',
    items: [
      // { name: 'Azerbaijan', href: '/international/azerbaijan' },
      { name: 'Dubai', href: '/international/dubai' },
    ],
  },
  // indianOcean: {
  //   title: 'INDIAN OCEAN ISLANDS',
  //   items: [
  //     { name: 'Mauritius', href: '/international/mauritius' },
  //   ],
  // },
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
    <header className="w-full relative h-[100px] sticky top-0 z-50">
      <div className="absolute top-0 left-0 w-full h-[45px] bg-[#1E6AD4] z-0"></div>
      <div className="absolute bottom-0 left-0 w-full h-[55px] bg-white border-b border-gray-200 z-0 shadow-sm"></div>
      <div className="relative z-10 w-full h-full flex px-4 sm:px-8 xl:px-50">
        <div className="w-[180px] sm:w-[220px] lg:w-[260px] shrink-0 h-full relative">
          <Link href="/">
            <div
              className="absolute inset-0 w-full h-full bg-white flex items-center justify-center cursor-pointer"
              style={{
                clipPath: 'polygon(40px 0, 100% 0, calc(100% - 40px) 100%, 0 100%)',
              }}
            >
              <div className="flex items-center justify-center">
                <img
                  src={zoyoLogo.src}
                  alt="Zoyo Trip Holidays"
                  className="w-auto h-[50px] sm:h-[60px] lg:h-[65px] object-contain"
                />
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-1 flex flex-col h-full min-w-0">
          <div className="h-[45px] flex justify-between items-center px-4 text-white text-[13px] font-medium">
            <div className="flex items-center gap-6 whitespace-nowrap overflow-hidden">
              <div className="hidden md:flex items-center gap-1.5 truncate">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4 shrink-0">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span className="truncate">Near by Ananda Marga High School, HPSEBL Colony, Bhuntar, Sarabai, Himachal Pradesh 175125</span>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4 shrink-0">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span>info@zoyotrip.in</span>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/contact"
                className="bg-[#f26c22] hover:bg-[#d95d1a] px-3 py-1.5 rounded-[4px] text-[12px] font-bold flex items-center gap-1.5 transition shadow-sm whitespace-nowrap text-white"
              >
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-3.5 h-3.5">
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                </svg>
                Get Quote
              </Link>
              <Link
                href="/bookings"
                className="bg-[#f26c22] hover:bg-[#d95d1a] px-3 py-1.5 rounded-[4px] text-[12px] font-bold flex items-center gap-1.5 transition shadow-sm whitespace-nowrap text-white"
              >
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-3.5 h-3.5">
                  <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 1.99 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
                </svg>
                Pay Now
              </Link>
            </div>
          </div>
          <div className="h-[55px] flex items-center justify-between pl-2">
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
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className={`w-4 h-4 mt-0.5 transition-transform duration-200 ${
                      activeMenu === 'national' ? 'rotate-180 text-[#f26c22]' : ''
                    }`}
                  >
                    <path d="M7 10l5 5 5-5z" />
                  </svg>
                </Link>
                <div
                  className={`fixed left-0 right-0 top-[100px] w-full bg-white border-t-2 border-[#1E6AD4] shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-200 z-50 ${
                    activeMenu === 'national'
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
                                className="text-[13.5px] text-[#4b5563] hover:text-[#f26c22] hover:translate-x-1 transition-all duration-150 inline-block font-normal"
                              >
                                {item.name}
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
                                className="text-[13.5px] text-[#4b5563] hover:text-[#f26c22] hover:translate-x-1 transition-all duration-150 inline-block font-normal"
                              >
                                {item.name}
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
                                className="text-[13.5px] text-[#4b5563] hover:text-[#f26c22] hover:translate-x-1 transition-all duration-150 inline-block font-normal"
                              >
                                {item.name}
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
                                className="text-[13.5px] text-[#4b5563] hover:text-[#f26c22] hover:translate-x-1 transition-all duration-150 inline-block font-normal"
                              >
                                {item.name}
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
                                className="text-[13.5px] text-[#4b5563] hover:text-[#f26c22] hover:translate-x-1 transition-all duration-150 inline-block font-normal"
                              >
                                {item.name}
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
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className={`w-4 h-4 mt-0.5 transition-transform duration-200 ${
                      activeMenu === 'international' ? 'rotate-180 text-[#f26c22]' : ''
                    }`}
                  >
                    <path d="M7 10l5 5 5-5z" />
                  </svg>
                </Link>
                <div
                  className={`fixed left-0 right-0 top-[100px] w-full bg-white border-t-2 border-[#1E6AD4] shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-200 z-50 ${
                    activeMenu === 'international'
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
                                  className="text-[13.5px] text-[#4b5563] hover:text-[#f26c22] hover:translate-x-1 transition-all duration-150 inline-block font-normal"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {/* <div>
                          <div className="flex items-center gap-2 border-l-[3px] border-[#1E6AD4] pl-2.5 text-[12px] font-extrabold tracking-wider text-[#1a2b49] uppercase mb-4">
                            {internationalDestinations.indianOcean.title}
                          </div>
                          <ul className="space-y-2.5">
                            {internationalDestinations.indianOcean.items.map((item) => (
                              <li key={item.name}>
                                <Link
                                  href={item.href}
                                  className="text-[13.5px] text-[#4b5563] hover:text-[#f26c22] hover:translate-x-1 transition-all duration-150 inline-block font-normal"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div> */}
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
                                className="text-[13.5px] text-[#4b5563] hover:text-[#f26c22] hover:translate-x-1 transition-all duration-150 inline-block font-normal"
                              >
                                {item.name}
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
                                className="text-[13.5px] text-[#4b5563] hover:text-[#f26c22] hover:translate-x-1 transition-all duration-150 inline-block font-normal"
                              >
                                {item.name}
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
                                className="text-[13.5px] text-[#4b5563] hover:text-[#f26c22] hover:translate-x-1 transition-all duration-150 inline-block font-normal"
                              >
                                {item.name}
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
                onMouseEnter={() => setActiveMenu('bookings')}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link href="/bookings" className="hover:text-[#f26c22] transition flex items-center gap-1">
                  Bookings
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4 mt-0.5"><path d="M7 10l5 5 5-5z" /></svg>
                </Link>

                <div
                  className={`absolute top-[55px] left-0 w-60 bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.12)] rounded-b-xl py-3 transition-all duration-200 z-50 ${
                    activeMenu === 'bookings'
                      ? 'opacity-100 visible translate-y-0 pointer-events-auto'
                      : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                  }`}
                >
                  <Link
                    href="/bookings"
                    className="block px-4 py-2 text-[13.5px] text-gray-700 hover:bg-orange-50 hover:text-[#f26c22] transition"
                  >
                    Bus Booking 
                  </Link>
                  <Link
                    href="/bookings"
                    className="block px-4 py-2 text-[13.5px] text-gray-700 hover:bg-orange-50 hover:text-[#f26c22] transition"
                  >
                    Flight Booking
                  </Link>
                  <Link
                    href="/contact"
                    className="block px-4 py-2 text-[13.5px] text-gray-700 hover:bg-orange-50 hover:text-[#f26c22] transition"
                  >
                    Hotel Booking
                  </Link>
                </div>
              </div>
              <Link href="/gallery" className="hover:text-[#f26c22] transition">
                Gallery
              </Link>
              <Link href="/contact" className="hover:text-[#f26c22] transition">
                Contact Us
              </Link>
              <div
                className="relative h-full flex items-center group cursor-pointer"
                onMouseEnter={() => setActiveMenu('account')}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link href="/account" className="hover:text-[#f26c22] transition flex items-center gap-1">
                  My Account
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4 mt-0.5"><path d="M7 10l5 5 5-5z" /></svg>
                </Link>

                <div
                  className={`absolute top-[55px] right-0 w-56 bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.12)] rounded-b-xl py-3 transition-all duration-200 z-50 ${
                    activeMenu === 'account'
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
        <div className="lg:hidden fixed inset-0 top-[100px] z-50 bg-black/60 backdrop-blur-sm flex flex-col justify-start">
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
                    className={`text-xs transition-transform duration-200 ${
                      mobileExpanded === 'national' ? 'rotate-180 text-[#f26c22]' : 'text-gray-400'
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
                              className="text-xs text-gray-600 hover:text-[#f26c22] py-1"
                            >
                              • {item.name}
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
                    className={`text-xs transition-transform duration-200 ${
                      mobileExpanded === 'international' ? 'rotate-180 text-[#f26c22]' : 'text-gray-400'
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
                              className="text-xs text-gray-600 hover:text-[#f26c22] py-1"
                            >
                              • {item.name}
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
