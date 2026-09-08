'use client';

import { useState } from 'react';
import Link from 'next/link';
import HeroCarousel from '@/components/HeroCarousel';
import HeroSearchBar from '@/components/HeroSearchBar';
import SpecialOffersSection from '@/components/SpecialOffersSection';
import HolidayDestinationsSection from '@/components/HolidayDestinationsSection';
import TopNationalDestinations from '@/components/TopNationalDestinations';
import TrustedCompanySection from '@/components/TrustedCompanySection';
import BestToursSection from '@/components/BestToursSection';
import PromotionalBannerSlider from '@/components/PromotionalBannerSlider';
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

import irctc from "@/public/assets/images/partners/IRCTC_Partner.webp";
import cleartrip from "@/public/assets/images/partners/cleartrip_Partner.webp";
import expedia from "@/public/assets/images/partners/Expedia_Partner.webp";
import booking from "@/public/assets/images/partners/booking.com_partner.webp";
import makemytrip from "@/public/assets/images/partners/MakeMyTrip_Partner.webp";

const seasonDestinations: Record<
  string,
  { name: string; tours: number; img: StaticImageData; price: string; tagline: string; slug: string }[]
> = {
  spring: [
    { name: 'Dubai', tours: 5, img: DubaiImg, price: '₹45,999', tagline: 'Luxury skylines, desert safaris & gold souks.', slug: 'dubai' },
    { name: 'Mauritius', tours: 5, img: MauritiusImg, price: '₹62,999', tagline: 'Crystal lagoons, white sands & coral reefs.', slug: 'mauritius' },
    { name: 'Bali', tours: 5, img: BaliImg, price: '₹28,499', tagline: 'Temples, rice terraces & tropical sunsets.', slug: 'bali' },
    { name: 'Singapore', tours: 5, img: SingaporeImg, price: '₹35,999', tagline: 'Futuristic city, street food & Gardens by the Bay.', slug: 'singapore' },
    { name: 'Vietnam', tours: 5, img: VietnamImg, price: '₹24,999', tagline: 'Lantern festivals, Halong Bay & street cuisine.', slug: 'vietnam' },
    { name: 'Sri Lanka', tours: 5, img: SriLankaImg, price: '₹19,999', tagline: 'Ancient ruins, lush tea gardens & wildlife.', slug: 'sri-lanka' },
    { name: 'Maldives', tours: 5, img: MaldivesImg, price: '₹75,999', tagline: 'Overwater bungalows & pristine coral atolls.', slug: 'maldives' },
    { name: 'Thailand', tours: 5, img: ThailandImg, price: '₹22,999', tagline: 'Floating markets, temples & turquoise coasts.', slug: 'thailand' },
  ],

  summer: [
    { name: 'Bhutan', tours: 5, img: BhutanImg, price: '₹38,999', tagline: "Majestic dzongs, Tiger's Nest & serene valleys.", slug: 'bhutan' },
    { name: 'Malaysia', tours: 5, img: MalaysiaImg, price: '₹26,499', tagline: 'Twin Towers, rainforests & Langkawi islands.', slug: 'malaysia' },
    { name: 'Nepal', tours: 5, img: NepalImg, price: '₹15,999', tagline: 'Himalayan treks, Pokhara lake & Buddhist shrines.', slug: 'nepal' },
    { name: 'Philippines', tours: 5, img: PhilippinesImg, price: '₹31,999', tagline: 'Chocolate Hills, pristine beaches & island hopping.', slug: 'philippines' },
    { name: 'Japan', tours: 5, img: JapanImg, price: '₹54,999', tagline: 'Cherry blossoms, Mt. Fuji & ancient samurai culture.', slug: 'japan' },
    { name: 'Azerbaijan', tours: 5, img: AzerbaijanImg, price: '₹29,999', tagline: 'Fire temples, Caspian coast & carpet bazaars.', slug: 'azerbaijan' },
    { name: 'Hong Kong', tours: 5, img: HongKongImg, price: '₹32,999', tagline: 'Iconic skyline, dim sum delights & Victoria Peak.', slug: 'hong-kong' },
    { name: 'South Korea', tours: 5, img: SouthKoreaImg, price: '₹44,999', tagline: 'K-culture, palaces, neon nights & han river.', slug: 'south-korea' },
  ],

  winter: [
    { name: 'Maldives', tours: 5, img: MaldivesImg, price: '₹75,999', tagline: 'Overwater bungalows & pristine coral atolls.', slug: 'maldives' },
    { name: 'Dubai', tours: 5, img: DubaiImg, price: '₹45,999', tagline: 'Romantic escapes, art, and cafés.', slug: 'dubai' },
    { name: 'Thailand', tours: 5, img: ThailandImg, price: '₹22,999', tagline: 'Floating markets, temples & turquoise coasts.', slug: 'thailand' },
    { name: 'Singapore', tours: 5, img: SingaporeImg, price: '₹35,999', tagline: 'Futuristic city, street food & night safari.', slug: 'singapore' },
    { name: 'Bali', tours: 5, img: BaliImg, price: '₹28,499', tagline: 'Temples, rice terraces & tropical sunsets.', slug: 'bali' },
    { name: 'Malaysia', tours: 5, img: MalaysiaImg, price: '₹26,499', tagline: 'Twin Towers, rainforests & Langkawi islands.', slug: 'malaysia' },
    { name: 'Sri Lanka', tours: 5, img: SriLankaImg, price: '₹19,999', tagline: 'Ancient ruins, lush tea gardens & wildlife.', slug: 'sri-lanka' },
    { name: 'Vietnam', tours: 5, img: VietnamImg, price: '₹24,999', tagline: 'Lantern festivals, Halong Bay & street cuisine.', slug: 'vietnam' },
  ],
};

const seasonTabs = [
  { id: 'spring', label: 'Spring Picks', icon: GiFlowerPot, color: '#f59e0b' },
  { id: 'summer', label: 'Summer Hotspot', icon: BsSun, color: '#f97316' },
  { id: 'winter', label: 'Winter Getaway', icon: BsSnow, color: '#3b82f6' },
];

export default function Home() {
  const [activeSeasonTab, setActiveSeasonTab] = useState('spring');

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <section className="relative w-full h-[150px] sm:h-[600px] md:h-[300px] lg:h-[600px] flex flex-col justify-end md:justify-center items-center pb-2 md:pb-0 md:pt-0">
        <HeroCarousel />
        <HeroSearchBar />
      </section>
      <div className="hidden md:block h-[120px] w-full bg-transparent"></div>
      <SpecialOffersSection />
      <HolidayDestinationsSection />
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
            <Link
              key={`${activeSeasonTab}-${i}`}
              href={`/international/${dest.slug}`}
              className="relative h-[520px] rounded-2xl overflow-hidden group cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.10)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.18)] transition-all duration-300 block"
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
                  <span className="text-[12px] font-bold text-white border border-white/60 px-4 py-1.5 rounded-full group-hover:text-black group-hover:scale-105 group-hover:border-white active:scale-95 transition-all duration-200 inline-block">
                    Explore Now →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <PromotionalBannerSlider />
      <section className="w-full bg-[#FFF2E2] py-16 px-4 sm:px-10 xl:px-50 relative overflow-hidden">
        <div className="relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-weight-900 mb-12 text-black">Zoyo Trip Holidays –  Your <span style={{ color: '#F26C22' }}>Journey, Our Priority!</span> </h2>
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
