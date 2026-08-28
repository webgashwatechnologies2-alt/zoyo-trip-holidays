'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import {
  FaChevronLeft,
  FaChevronRight,
  FaArrowRight,
  FaSuitcase
} from 'react-icons/fa';

// Destination Images
import rajasthanImg from '@/public/assets/images/packageimages/rajnewww.webp';
import ladakhImg from '@/public/assets/images/packageimages/Ladakh-Nubra-Valley.webp';
import keralaImg from '@/public/assets/images/packageimages/kerala-honeymoon.webp';
import himachalImg from '@/public/assets/images/packageimages/Shimla-During-Monsoon.webp';
import uttarakhandImg from '@/public/assets/images/packageimages/rkshh.webp';
import kashmirImg from '@/public/assets/images/packageimages/Kashmir-Honeymoon-Packages.webp';
import goaImg from '@/public/assets/images/packageimages/Goa-couple-tour-package.webp';
import andamanImg from '@/public/assets/images/packageimages/havelock-island.webp';
import dubaiImg from '@/public/assets/images/packageimages/dubai.webp';
import baliImg from '@/public/assets/images/packageimages/Balis-Bedugul-Is-Charming-Tourists.webp';
import spitiImg from '@/public/assets/images/packageimages/chandertaaalnew.webp';
import sikkimImg from '@/public/assets/images/packageimages/sikkim.webp';

interface DestinationCard {
  id: number;
  badge: string;
  title: string;
  tagline: string;
  packagesCount: string;
  startingPrice: string;
  image: StaticImageData;
  link: string;
}

const destinationsData: DestinationCard[] = [
  {
    id: 1,
    badge: 'Rajasthan',
    title: 'Rajasthan',
    tagline: 'Royal Palaces & Desert Safari',
    packagesCount: '36+ Packages',
    startingPrice: '₹12,499',
    image: rajasthanImg,
    link: '/national/rajasthan',
  },
  {
    id: 2,
    badge: 'Ladakh',
    title: 'Ladakh',
    tagline: 'High Passes & Turquoise Lakes',
    packagesCount: '14+ Packages',
    startingPrice: '₹24,999',
    image: ladakhImg,
    link: '/national/ladakh',
  },
  {
    id: 3,
    badge: 'Kerala',
    title: 'Kerala',
    tagline: 'God\'s Own Country & Backwaters',
    packagesCount: '24+ Packages',
    startingPrice: '₹14,999',
    image: keralaImg,
    link: '/national/kerala',
  },
  {
    id: 4,
    badge: 'Himachal Pradesh',
    title: 'Himachal',
    tagline: 'Shimla, Manali & Snow Peaks',
    packagesCount: '54+ Packages',
    startingPrice: '₹11,499',
    image: himachalImg,
    link: '/national/himachal',
  },
  {
    id: 5,
    badge: 'Uttarakhand',
    title: 'Uttarakhand',
    tagline: 'Land of Gods & Sacred Valleys',
    packagesCount: '28+ Packages',
    startingPrice: '₹9,999',
    image: uttarakhandImg,
    link: '/national/uttarakhand',
  },
  {
    id: 6,
    badge: 'Kashmir',
    title: 'Kashmir',
    tagline: 'Paradise on Earth & Shikara',
    packagesCount: '22+ Packages',
    startingPrice: '₹16,499',
    image: kashmirImg,
    link: '/national/kashmir',
  },
  {
    id: 7,
    badge: 'Goa',
    title: 'Goa',
    tagline: 'Beaches, Parties & Heritage',
    packagesCount: '30+ Packages',
    startingPrice: '₹8,999',
    image: goaImg,
    link: '/national/goa',
  },
  {
    id: 8,
    badge: 'Andaman',
    title: 'Andaman',
    tagline: 'Exotic Islands & Coral Reefs',
    packagesCount: '15+ Packages',
    startingPrice: '₹21,999',
    image: andamanImg,
    link: '/national/andaman',
  },
  {
    id: 9,
    badge: 'Spiti Valley',
    title: 'Spiti Valley',
    tagline: 'Untamed Himalayas & Stargazing',
    packagesCount: '12+ Packages',
    startingPrice: '₹14,999',
    image: spitiImg,
    link: '/national/spiti',
  },
  {
    id: 10,
    badge: 'Sikkim',
    title: 'Sikkim',
    tagline: 'Misty Mountains & Monasteries',
    packagesCount: '18+ Packages',
    startingPrice: '₹17,499',
    image: sikkimImg,
    link: '/national/sikkim',
  },
  {
    id: 11,
    badge: 'Dubai',
    title: 'Dubai',
    tagline: 'Ultra Luxury & Desert Dunes',
    packagesCount: '19+ Packages',
    startingPrice: '₹38,999',
    image: dubaiImg,
    link: '/international/dubai',
  },
  {
    id: 12,
    badge: 'Bali',
    title: 'Bali',
    tagline: 'Tropical Villas & Sacred Temples',
    packagesCount: '16+ Packages',
    startingPrice: '₹27,999',
    image: baliImg,
    link: '/international/bali',
  },
];

export default function HolidayDestinationsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollPosition = useCallback(() => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 15);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 15);
  }, []);

  // useEffect(() => {
  //   const el = scrollContainerRef.current;
  //   if (!el) return;
  //   el.addEventListener('scroll', checkScrollPosition);
  //   checkScrollPosition();
  //   return () => el.removeEventListener('scroll', checkScrollPosition);
  // }, [checkScrollPosition]);

  // useEffect(() => {
  //   if (isPaused) return;
  //   const interval = setInterval(() => {
  //     if (!scrollContainerRef.current) return;
  //     const el = scrollContainerRef.current;
  //     const cardWidth = 285;
  //     const maxScroll = el.scrollWidth - el.clientWidth;
  //     if (el.scrollLeft >= maxScroll - 20) {
  //       el.scrollTo({ left: 0, behavior: 'smooth' });
  //     } else {
  //       el.scrollBy({ left: cardWidth, behavior: 'smooth' });
  //     }
  //   }, 3200);
  //   return () => clearInterval(interval);
  // }, [isPaused]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const cardWidth = 285;
    const shift = direction === 'left' ? -cardWidth * 2 : cardWidth * 2;
    scrollContainerRef.current.scrollBy({ left: shift, behavior: 'smooth' });
  };

  return (
    <section className="w-full bg-gradient-to-b from-white via-slate-50/50 to-white py-12 sm:py-16 px-4 sm:px-8 lg:px-14 overflow-hidden border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100/80 text-[#f26c22] text-xs font-bold mb-2.5">
              <FaSuitcase className="text-orange-500" />
              CURATED HOLIDAY ESCAPES
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight">
              Top Destinations This Holiday Season!
            </h2>
            <p className="text-sm sm:text-[15.5px] text-gray-500 font-medium mt-1.5">
              We Provide Fully Customized Tour Packages as per Your Travel Needs
            </p>
          </div>

          {/* Top-Right Arrow Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              aria-label="Previous destinations"
              className={`w-10 h-10 rounded-full flex items-center justify-center border shadow-xs transition-all duration-200 ${canScrollLeft
                ? 'bg-white text-gray-700 hover:bg-[#f26c22] hover:text-white hover:border-[#f26c22] hover:shadow-md cursor-pointer'
                : 'bg-gray-50 text-gray-300 border-gray-200 cursor-not-allowed opacity-40'
                }`}
            >
              <FaChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              aria-label="Next destinations"
              className={`w-10 h-10 rounded-full flex items-center justify-center border shadow-xs transition-all duration-200 ${canScrollRight
                ? 'bg-white text-gray-700 hover:bg-[#f26c22] hover:text-white hover:border-[#f26c22] hover:shadow-md cursor-pointer'
                : 'bg-gray-50 text-gray-300 border-gray-200 cursor-not-allowed opacity-40'
                }`}
            >
              <FaChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative group/carousel">
          <div
            ref={scrollContainerRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            className="flex gap-4 overflow-x-auto pb-6 pt-2 no-scrollbar scroll-smooth snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {destinationsData.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className="group relative flex-none w-[47vw] sm:w-[calc((100%-64px)/5)] min-w-[190px] h-[340px] sm:h-[360px] snap-start rounded-[22px] overflow-hidden bg-gray-900 shadow-[0_8px_25px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.28)] hover:-translate-y-2 transition-all duration-500 ease-out focus:outline-none ring-1 ring-black/5 hover:ring-2 hover:ring-[#f26c22]/50"
              >
                {/* Background Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 230px, (max-width: 768px) 255px, 265px"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Ambient Top Vignette */}
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/60 via-black/20 to-transparent pointer-events-none z-10" />

                {/* Top-Right Orange Pill Badge */}
                <div className="absolute top-3.5 right-3.5 z-20">
                  <div className="bg-gradient-to-r from-[#ff5e00] to-[#ff8c00] text-white text-[11px] sm:text-[12px] font-extrabold px-3.5 py-1 rounded-full shadow-[0_3px_12px_rgba(255,94,0,0.5)] border border-white/25 backdrop-blur-xs tracking-wide">
                    {item.badge}
                  </div>
                </div>

                {/* Bottom Card Glass Overlay & Details */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/65 via-60% to-transparent p-4 sm:p-5 pt-14 text-white z-20 flex flex-col justify-end">

                  {/* Title & Tagline */}
                  <h3 className="font-extrabold text-[19px] sm:text-[21px] text-white leading-tight tracking-tight drop-shadow-md group-hover:text-[#FFA000] transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-[12px] text-gray-300 font-medium line-clamp-1 mt-0.5 opacity-90">
                    {item.tagline}
                  </p>

                  {/* Pricing & Packages Pill Row */}
                  <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-white/15">
                    <div>
                      <span className="text-[10.5px] text-white/70 block uppercase tracking-wider font-semibold">
                        {item.packagesCount}
                      </span>
                      <span className="text-[13px] sm:text-[14px] font-black text-white tracking-tight">
                        From <span className="text-emerald-400 font-extrabold">{item.startingPrice}</span>
                      </span>
                    </div>

                    {/* Explore Circular Arrow Button */}
                    <div className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-md group-hover:bg-[#f26c22] text-white flex items-center justify-center shadow-md group-hover:scale-110 group-hover:shadow-[0_4px_14px_rgba(242,108,34,0.6)] transition-all duration-300 shrink-0 border border-white/20 group-hover:border-transparent">
                      <FaArrowRight className="text-[11px] group-hover:translate-x-0.5 transition-transform duration-300" />
                    </div>
                  </div>

                </div>
              </Link>
            ))}
          </div>

          {/* Floating Right Next Chevron Button */}
          {canScrollRight && (
            <button
              onClick={() => handleScroll('right')}
              aria-label="Next slide"
              className="flex absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-gray-800 shadow-[0_6px_25px_rgba(0,0,0,0.22)] hover:bg-[#f26c22] hover:text-white items-center justify-center border border-gray-100 hover:border-[#f26c22] transition-all duration-200 cursor-pointer group"
            >
              <FaChevronRight className="w-4 h-4 ml-0.5 group-hover:scale-110 transition-transform" />
            </button>
          )}

          {canScrollLeft && (
            <button
              onClick={() => handleScroll('left')}
              aria-label="Previous slide"
              className="flex absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-gray-800 shadow-[0_6px_25px_rgba(0,0,0,0.22)] hover:bg-[#f26c22] hover:text-white items-center justify-center border border-gray-100 hover:border-[#f26c22] transition-all duration-200 cursor-pointer group"
            >
              <FaChevronLeft className="w-4 h-4 mr-0.5 group-hover:scale-110 transition-transform" />
            </button>
          )}
        </div>

      </div>
    </section>
  );
}
