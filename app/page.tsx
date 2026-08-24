'use client';

import { useState } from 'react';
import Link from 'next/link';
import HeroCarousel from '@/components/HeroCarousel';
import TopNationalDestinations from '@/components/TopNationalDestinations';
import TrustedCompanySection from '@/components/TrustedCompanySection';
import BestToursSection from '@/components/BestToursSection';
import ExploreZoyoSection from '@/components/ExploreZoyoSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { StaticImageData } from 'next/image';
import { GiFlowerPot } from 'react-icons/gi';
import { BsSun, BsSnow } from 'react-icons/bs';
import Image from 'next/image';
import { FaMapMarkerAlt, FaTags, FaShieldAlt } from "react-icons/fa";

import DubaiImg from '@/public/assets/images/packageimages/dubai.webp';
import MauritiusImg from '@/public/assets/images/packageimages/mauritius.webp';
import BaliImg from '@/public/assets/images/packageimages/bali.webp';
import SingaporeImg from '@/public/assets/images/packageimages/singapore.webp';
import VietnamImg from '@/public/assets/images/packageimages/vietnam.webp';
import SriLankaImg from '@/public/assets/images/packageimages/sri-lanka.webp';
import MaldivesImg from '@/public/assets/images/packageimages/maldives.webp';
import ThailandImg from '@/public/assets/images/packageimages/thailand.webp';

import BhutanImg from '@/public/assets/images/packageimages/bhutan.webp';
import MalaysiaImg from '@/public/assets/images/packageimages/malaysia.webp';
import NepalImg from '@/public/assets/images/packageimages/nepal.webp';
import PhilippinesImg from '@/public/assets/images/packageimages/philippines.webp';
import JapanImg from '@/public/assets/images/packageimages/japan.webp';
import AzerbaijanImg from '@/public/assets/images/packageimages/azerbaijan.webp';
import HongKongImg from '@/public/assets/images/packageimages/hong-kong.webp';
import SouthKoreaImg from '@/public/assets/images/packageimages/south-korea.webp';

// import SwitzerlandImg from '@/public/assets/images/packageimages/switzerland.webp';
// import TurkeyImg from '@/public/assets/images/packageimages/turkey.webp';
// import GreeceImg from '@/public/assets/images/packageimages/greece.webp';
// import ItalyImg from '@/public/assets/images/packageimages/italy.webp';
// import FranceImg from '@/public/assets/images/packageimages/france.webp';
// import SpainImg from '@/public/assets/images/packageimages/spain.webp';
// import AmsterdamImg from '@/public/assets/images/packageimages/amsterdam.webp';
// import PortugalImg from '@/public/assets/images/packageimages/portugal.webp';

import irctc from "@/public/assets/images/partners/IRCTC_Partner.webp";
import cleartrip from "@/public/assets/images/partners/cleartrip_Partner.webp";
import expedia from "@/public/assets/images/partners/Expedia_Partner.webp";
import booking from "@/public/assets/images/partners/booking.com_partner.webp";
import makemytrip from "@/public/assets/images/partners/MakeMyTrip_Partner.webp";

const seasonDestinations: Record<
  string,
  { name: string; tours: number; img: StaticImageData; price: string; tagline: string }[]
> = {
  spring: [
    { name: 'Dubai', tours: 5, img: DubaiImg, price: '₹45,999', tagline: 'Luxury skylines, desert safaris & gold souks.' },
    { name: 'Mauritius', tours: 5, img: MauritiusImg, price: '₹62,999', tagline: 'Crystal lagoons, white sands & coral reefs.' },
    { name: 'Bali', tours: 5, img: BaliImg, price: '₹28,499', tagline: 'Temples, rice terraces & tropical sunsets.' },
    { name: 'Singapore', tours: 5, img: SingaporeImg, price: '₹35,999', tagline: 'Futuristic city, street food & Gardens by the Bay.' },
    { name: 'Vietnam', tours: 5, img: VietnamImg, price: '₹24,999', tagline: 'Lantern festivals, Halong Bay & street cuisine.' },
    { name: 'Sri Lanka', tours: 5, img: SriLankaImg, price: '₹19,999', tagline: 'Ancient ruins, lush tea gardens & wildlife.' },
    { name: 'Maldives', tours: 5, img: MaldivesImg, price: '₹75,999', tagline: 'Overwater bungalows & pristine coral atolls.' },
    { name: 'Thailand', tours: 5, img: ThailandImg, price: '₹22,999', tagline: 'Floating markets, temples & turquoise coasts.' },
  ],

  summer: [
    { name: 'Bhutan', tours: 5, img: BhutanImg, price: '₹38,999', tagline: 'Majestic dzongs, Tiger\'s Nest & serene valleys.' },
    { name: 'Malaysia', tours: 5, img: MalaysiaImg, price: '₹26,499', tagline: 'Twin Towers, rainforests & Langkawi islands.' },
    { name: 'Nepal', tours: 5, img: NepalImg, price: '₹15,999', tagline: 'Himalayan treks, Pokhara lake & Buddhist shrines.' },
    { name: 'Philippines', tours: 5, img: PhilippinesImg, price: '₹31,999', tagline: 'Chocolate Hills, pristine beaches & island hopping.' },
    { name: 'Japan', tours: 5, img: JapanImg, price: '₹54,999', tagline: 'Cherry blossoms, Mt. Fuji & ancient samurai culture.' },
    { name: 'Azerbaijan', tours: 5, img: AzerbaijanImg, price: '₹29,999', tagline: 'Fire temples, Caspian coast & carpet bazaars.' },
    { name: 'Hong Kong', tours: 5, img: HongKongImg, price: '₹32,999', tagline: 'Iconic skyline, dim sum delights & Victoria Peak.' },
    { name: 'South Korea', tours: 5, img: SouthKoreaImg, price: '₹44,999', tagline: 'K-culture, palaces, neon nights & han river.' },
  ],

  autumn: [
    // { name: 'Switzerland', tours: 2, img: SwitzerlandImg, price: '₹89,999', tagline: 'Alpine peaks, chocolate and dreamy lakes.' },
    // { name: 'Turkey', tours: 3, img: TurkeyImg, price: '₹42,999', tagline: 'Cappadocia balloons, bazaars & Bosphorus.' },
    // { name: 'Greece', tours: 2, img: GreeceImg, price: '₹67,999', tagline: 'Santorini sunsets, myths & Mediterranean blue.' },
    // { name: 'Italy', tours: 4, img: ItalyImg, price: '₹72,999', tagline: 'Colosseum, canals of Venice & Amalfi coast.' },
    // { name: 'France', tours: 3, img: FranceImg, price: '₹78,999', tagline: 'Eiffel magic, wine routes & Riviera charm.' },
    // { name: 'Spain', tours: 2, img: SpainImg, price: '₹65,999', tagline: 'Flamenco, Sagrada Familia & tapas trails.' },
    // { name: 'Amsterdam', tours: 1, img: AmsterdamImg, price: '₹58,999', tagline: 'Canals, tulip fields & world-class museums.' },
    // { name: 'Portugal', tours: 1, img: PortugalImg, price: '₹52,999', tagline: 'Lisbon trams, Porto wine & Atlantic coast.' },
  ],

  winter: [
    { name: 'Maldives', tours: 5, img: MaldivesImg, price: '₹75,999', tagline: 'Overwater bungalows & pristine coral atolls.' },
    { name: 'Dubai', tours: 5, img: DubaiImg, price: '₹45,999', tagline: 'Romantic escapes, art, and cafés.' },
    { name: 'Thailand', tours: 5, img: ThailandImg, price: '₹22,999', tagline: 'Floating markets, temples & turquoise coasts.' },
    { name: 'Singapore', tours: 5, img: SingaporeImg, price: '₹35,999', tagline: 'Futuristic city, street food & night safari.' },
    { name: 'Bali', tours: 5, img: BaliImg, price: '₹28,499', tagline: 'Temples, rice terraces & tropical sunsets.' },
    { name: 'Malaysia', tours: 5, img: MalaysiaImg, price: '₹26,499', tagline: 'Twin Towers, rainforests & Langkawi islands.' },
    { name: 'Sri Lanka', tours: 5, img: SriLankaImg, price: '₹19,999', tagline: 'Ancient ruins, lush tea gardens & wildlife.' },
    { name: 'Vietnam', tours: 5, img: VietnamImg, price: '₹24,999', tagline: 'Lantern festivals, Halong Bay & street cuisine.' },
  ],
};

const seasonTabs = [
  { id: 'spring', label: 'Spring Picks', icon: GiFlowerPot, color: '#f59e0b' },
  { id: 'summer', label: 'Summer Hotspot', icon: BsSun, color: '#f97316' },
  // { id: 'autumn', label: 'Autumn Escape', icon: FaLeaf, color: '#ef4444' },
  { id: 'winter', label: 'Winter Getaway', icon: BsSnow, color: '#3b82f6' },
];

export default function Home() {
  const [activeSeasonTab, setActiveSeasonTab] = useState('spring');
  const [mobileCategory, setMobileCategory] = useState<'domestic' | 'international' | 'honeymoon' | 'custom'>('domestic');

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
            <section className="relative w-full h-[320px] sm:h-[420px] md:h-[600px] flex flex-col justify-center items-center">
        <HeroCarousel />
        <div className="hidden md:flex absolute bottom-[-90px] w-full flex-col items-center z-30 px-6">
          <div className="flex bg-white shadow-md rounded-full p-1.5 mb-[-12px] z-20 border border-gray-100">
            <button className="bg-[#f26c22] text-white px-6 py-2 rounded-full text-[13px] font-bold flex items-center gap-2 shadow-sm">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" /></svg>
              Domestic Tours
            </button>
            <button className="bg-transparent text-[#222] hover:bg-gray-50 px-5 py-2 rounded-full text-[13px] font-bold flex items-center gap-2 transition">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" /></svg>
              International Tours
            </button>
            <button className="bg-transparent text-[#222] hover:bg-gray-50 px-5 py-2 rounded-full text-[13px] font-bold flex items-center gap-2 transition">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
              Honeymoon Packages
            </button>
            <button className="bg-transparent text-[#222] hover:bg-gray-50 px-5 py-2 rounded-full text-[13px] font-bold flex items-center gap-2 transition">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" /></svg>
              Custom Itinerary
            </button>
          </div>
          <div className="bg-white rounded-[16px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] w-full max-w-[1150px] p-8 pt-10">
            <div className="flex flex-row items-stretch gap-4 h-[60px]">
              <div className="flex-1 border border-gray-200 rounded-[8px] p-3 flex items-center gap-3">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-gray-400 stroke-2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <div className="flex flex-col justify-center">
                  <span className="text-[13px] font-bold text-[#111] leading-tight">Where to?</span>
                  <span className="text-[12px] text-gray-500 leading-tight mt-0.5">Destination</span>
                </div>
              </div>
              <div className="flex-1 border border-gray-200 rounded-[8px] p-3 flex items-center gap-3">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-gray-400 stroke-2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <div className="flex flex-col justify-center">
                  <span className="text-[13px] font-bold text-[#111] leading-tight">22 November</span>
                  <span className="text-[12px] text-gray-500 leading-tight mt-0.5">Monday 2026</span>
                </div>
              </div>
              <div className="flex-1 border border-gray-200 rounded-[8px] p-3 flex items-center gap-3">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-gray-400 stroke-2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                <div className="flex flex-col justify-center">
                  <span className="text-[13px] font-bold text-[#111] leading-tight">22 November</span>
                  <span className="text-[12px] text-gray-500 leading-tight mt-0.5">Saturday 2026</span>
                </div>
              </div>
              <div className="flex-1 border border-gray-200 rounded-[8px] p-3 flex items-center gap-3">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-gray-400 stroke-[1.5]"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /><circle cx="8" cy="6" r="1" /><circle cx="8" cy="12" r="1" /><circle cx="8" cy="18" r="1" /></svg>
                <div className="flex flex-col justify-center">
                  <span className="text-[13px] font-medium text-gray-400 leading-tight">Select</span>
                  <span className="text-[12px] text-gray-500 leading-tight mt-0.5">No. of Travelers</span>
                </div>
              </div>
              <Link href="/national" className="bg-[#f26c22] hover:bg-[#d95d1a] transition text-white rounded-[8px] px-10 font-bold flex items-center justify-center gap-2 h-full cursor-pointer">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5 stroke-[2.5]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                SEARCH
              </Link>
            </div>
            <div className="mt-5 text-[12.5px] text-gray-600 font-medium ml-1">
              Can&apos;t find what you&apos;re looking for? create your <Link href="/contact" className="text-[#1E6AD4] font-bold hover:underline">Custom Itinerary</Link>
            </div>
          </div>
        </div>
      </section>
      <div className="md:hidden w-full px-4 -mt-10 sm:-mt-14 relative z-30 mb-8 flex flex-col items-center">
        <div className="flex bg-white shadow-lg rounded-full p-1 mb-[-14px] z-20 border border-gray-200 max-w-[calc(100vw-32px)] overflow-x-auto no-scrollbar">
          <button
            onClick={() => setMobileCategory('domestic')}
            className={`px-3.5 py-1.5 rounded-full text-[12px] font-bold flex items-center gap-1.5 transition whitespace-nowrap ${
              mobileCategory === 'domestic' ? 'bg-[#f26c22] text-white shadow-sm' : 'text-gray-700'
            }`}
          >
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-3.5 h-3.5"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" /></svg>
            Domestic
          </button>
          <button
            onClick={() => setMobileCategory('international')}
            className={`px-3.5 py-1.5 rounded-full text-[12px] font-bold flex items-center gap-1.5 transition whitespace-nowrap ${
              mobileCategory === 'international' ? 'bg-[#f26c22] text-white shadow-sm' : 'text-gray-700'
            }`}
          >
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-3.5 h-3.5"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" /></svg>
            International
          </button>
          <button
            onClick={() => setMobileCategory('honeymoon')}
            className={`px-3.5 py-1.5 rounded-full text-[12px] font-bold flex items-center gap-1.5 transition whitespace-nowrap ${
              mobileCategory === 'honeymoon' ? 'bg-[#f26c22] text-white shadow-sm' : 'text-gray-700'
            }`}
          >
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-3.5 h-3.5"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
            Honeymoon
          </button>
          <button
            onClick={() => setMobileCategory('custom')}
            className={`px-3.5 py-1.5 rounded-full text-[12px] font-bold flex items-center gap-1.5 transition whitespace-nowrap ${
              mobileCategory === 'custom' ? 'bg-[#f26c22] text-white shadow-sm' : 'text-gray-700'
            }`}
          >
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-3.5 h-3.5"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" /></svg>
            Custom
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.12)] w-full max-w-md p-5 pt-8 border border-gray-100">
          <div className="space-y-3">
            <div className="border border-gray-200 rounded-xl p-3 flex items-center gap-3 bg-white">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-gray-400 stroke-2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <div className="flex flex-col justify-center">
                <span className="text-[13px] font-bold text-[#111] leading-tight">Where to?</span>
                <span className="text-[12px] text-gray-500 leading-tight mt-0.5">Destination</span>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-3 flex items-center gap-3 bg-white">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-gray-400 stroke-2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <div className="flex flex-col justify-center">
                <span className="text-[13px] font-bold text-[#111] leading-tight">22 November</span>
                <span className="text-[12px] text-gray-500 leading-tight mt-0.5">Monday 2026</span>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-3 flex items-center gap-3 bg-white">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-gray-400 stroke-2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
              <div className="flex flex-col justify-center">
                <span className="text-[13px] font-bold text-[#111] leading-tight">22 November</span>
                <span className="text-[12px] text-gray-500 leading-tight mt-0.5">Saturday 2026</span>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-3 flex items-center gap-3 bg-white">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-gray-400 stroke-[1.5]"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /><circle cx="8" cy="6" r="1" /><circle cx="8" cy="12" r="1" /><circle cx="8" cy="18" r="1" /></svg>
              <div className="flex flex-col justify-center">
                <span className="text-[13px] font-medium text-gray-400 leading-tight">Select</span>
                <span className="text-[12px] text-gray-500 leading-tight mt-0.5">No. of Travelers</span>
              </div>
            </div>

            <Link
              href="/national"
              className="w-full bg-[#f26c22] hover:bg-[#d95d1a] transition text-white rounded-xl py-3.5 font-bold flex items-center justify-center gap-2 text-sm shadow-md"
            >
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-4 h-4 stroke-[2.5]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              SEARCH
            </Link>
          </div>

          <div className="mt-4 text-center text-[12px] text-gray-600 font-medium">
            Can&apos;t find what you&apos;re looking for? create your{' '}
            <Link href="/contact" className="text-[#1E6AD4] font-bold hover:underline">
              Custom Itinerary
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden md:block h-[120px] w-full bg-transparent"></div>

      <TopNationalDestinations />
      <TrustedCompanySection />
      
      <section className="w-full bg-white py-16 px-4 sm:px-10 lg:px-20">
        <h2 className="text-3xl md:text-[38px] font-semibold text-[#111827] text-center mb-8 tracking-tight">Top International destinations</h2>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {seasonTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeSeasonTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveSeasonTab(tab.id)}
                className={`px-5 py-2 rounded-full text-[13.5px] font-semibold flex items-center gap-2 shadow-sm transition-all duration-200 cursor-pointer ${isActive
                  ? 'bg-[#111827] text-white scale-105 shadow-md'
                  : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
                  }`}
              >
                <Icon
                  size={18}
                  style={{ color: isActive ? 'white' : tab.color }}
                />
                {tab.label}
              </button>
            );
          })}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1400px] mx-auto">
          {(seasonDestinations[activeSeasonTab] || []).map((dest, i) => (
            <div
              key={`${activeSeasonTab}-${i}`}
              className="relative h-[520px] rounded-2xl overflow-hidden group cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.10)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.18)] transition-all duration-300"
            >
              <Image
                src={dest.img}
                alt={dest.name}
                fill
                className="absolute inset-0 object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              <div className="absolute top-4 left-4 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-[11px] font-semibold px-3 py-1 rounded-full">
                {dest.tours} {dest.tours === 1 ? 'Tour' : 'Tours'} Available
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                {/* Destination name */}
                <h3 className="text-[24px] font-semibold mb-1 leading-tight drop-shadow-sm tracking-tight">
                  {dest.name}
                </h3>
                <p className="text-[13.5px] font-semibold mb-2">
                  <span className="text-[#f26c22]">From {dest.price}</span>
                  <span className="text-white/70">/night</span>
                </p>
                <p className="text-[12.5px] text-white/80 leading-snug line-clamp-2">
                  {dest.tagline}
                </p>
                <div className="mt-4">
                  <button className="text-[12px] font-bold text-white border border-white/60 px-4 py-1.5 rounded-full hover:bg-white hover:text-black hover:scale-105 hover:border-white active:scale-95 transition-all duration-200">
                    Explore Now →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full bg-[#FFF2E2] py-16 px-4 sm:px-10 xl:px-50 relative overflow-hidden">
        <div className="relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-weight-900 mb-12 text-black">Zoyo Trip Holidays – Your Journey, Our Priority!</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-12 relative">
            <div className="flex gap-4 items-start">
              <div className="bg-[#FFB52A] text-white p-3 rounded-full text-xl shrink-0">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-black">
                  Local Guidance
                </h3>
                <p className="text-gray-600 text-sm">
                  Travel agencies have experienced professionals <br /> guidance.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-[#7762D4] text-white p-3 rounded-full text-xl shrink-0">
                <FaTags />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-black">
                  Deals & Discounts
                </h3>
                <p className="text-gray-600 text-sm">
                  Agencies have special discounts on flights, hotels, & packages.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-[#FFB52A] text-white p-3 rounded-full text-xl shrink-0">
                <FaShieldAlt />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-black">
                  Saves Money
                </h3>
                <p className="text-gray-600 text-sm">
                  Avoids hidden fees & tourist traps. Multi-  <br /> destination & budget-friendly options.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition">Find Your Favourite Travel Package!</button>
            <button className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition">Discover Today ↗</button>
          </div>
        </div>
      </section>
      <BestToursSection />
      <ExploreZoyoSection />
      <section className="w-full px-4 sm:px-10 xl:px-50 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-12 text-black">Our Partner</h2>
        <div className="flex flex-wrap justify-center items-center gap-10 sm:gap-20">
          <Image src={irctc} alt="IRCTC" className="h-10 w-auto object-contain" />
          <Image src={cleartrip} alt="Cleartrip" className="h-10 w-auto object-contain" />
          <Image src={expedia} alt="Expedia" className="h-10 w-auto object-contain" />
          <Image src={booking} alt="Booking.com" className="h-10 w-auto object-contain" />
          <Image src={makemytrip} alt="MakeMyTrip" className="h-10 w-auto object-contain" />
        </div>
      </section>
      <TestimonialsSection />
    </div>
  );
}
