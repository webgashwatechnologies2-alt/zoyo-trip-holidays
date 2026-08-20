'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image, { StaticImageData } from 'next/image';
import balloonImg from '@/public/assets/images/vector/vector-image.png';
import lehLadakhImg from '@/public/assets/images/packageimages/darshan-chudasama.webp';
import spitiImg from '@/public/assets/images/packageimages/spiti.webp';
import himachalImg from '@/public/assets/images/packageimages/himachalnewimage.webp';
import KeralaImg from '@/public/assets/images/packageimages/rediscover.webp';
import RajasthanImg from '@/public/assets/images/packageimages/rajasthan-camel.webp';
import Kashmirimg from '@/public/assets/images/packageimages/mkashmir.webp';
import Uttarakhandimg from '@/public/assets/images/packageimages/uttarakahand.webp';
import upimg from '@/public/assets/images/packageimages/uttar-pradesh.webp';
import Sikkimimg from '@/public/assets/images/packageimages/sikkim.webp';
import Goaimg from '@/public/assets/images/packageimages/goa.webp';
import Assamimg from '@/public/assets/images/packageimages/assam.webp';
import Andamanimg from '@/public/assets/images/packageimages/andeman.webp';

interface Destination {
  id: number;
  title: string;
  location: string;
  duration: string;
  price: string;
  originalPrice?: string;
  badges: {
    label: string;
    bg: string;
    color?: string;
  }[];
  image: StaticImageData | string;
}

const destinations: Destination[] = [
  {
    id: 1,
    title: 'Leh & Ladakh',
    location: 'Leh, Ladakh',
    duration: '5 Days/4 Nights',
    price: '₹16,999',
    badges: [
      { label: 'Group Tour', bg: 'bg-[#f26c22]' },
      { label: 'Featured', bg: 'bg-[#f26c22]' },
    ],
    image: lehLadakhImg,
  },
  {
    id: 2,
    title: 'Lahaul & Spiti',
    location: 'Lahaul & Spiti, Himachal Pradesh',
    duration: '6 Days/5 Nights',
    price: '₹14,999',
    badges: [
      { label: 'Adventure', bg: 'bg-[#FFE100]', color: 'text-black' },
      { label: 'Popular', bg: 'bg-[#f26c22]' },
    ],
    image: spitiImg,
  },
  {
    id: 3,
    title: 'Himachal Pradesh',
    location: 'Manali, Shimla & Himachal Pradesh',
    duration: '7 Days/6 Nights',
    price: '₹18,999',
    originalPrice: '₹22,999',
    badges: [
      { label: 'Sale on!', bg: 'bg-[#FFE100]', },
      { label: 'Group Tour', bg: 'bg-[#f26c22]' },
      { label: 'Featured', bg: 'bg-[#f26c22]' },
    ],
    image: himachalImg,
  },
  {
    id: 4,
    title: "Kerala - God's Own Country",
    location: 'Munnar & Alleppey, Kerala',
    duration: '5 Days/4 Nights',
    price: '₹21,999',
    badges: [
      { label: 'Honeymoon', bg: 'bg-[#f26c22]' },
      { label: 'Popular', bg: 'bg-[#f26c22]' },
    ],
    image: KeralaImg,
  },
  {
    id: 5,
    title: 'Royal Rajasthan Heritage',
    location: 'Jaipur, Udaipur & Jodhpur, Rajasthan',
    duration: '6 Days/5 Nights',
    price: '₹19,999',
    originalPrice: '₹24,999',
    badges: [
      { label: 'Cultural Tour', bg: 'bg-[#f26c22]' },
      { label: 'Featured', bg: 'bg-[#f26c22]' },
    ],
    image: RajasthanImg,
  },
  {
    id: 6,
    title: 'Kashmir Paradise Tour',
    location: 'Srinagar, Gulmarg & Pahalgam, Kashmir',
    duration: '6 Days/5 Nights',
    price: '₹22,999',
    originalPrice: '₹27,999',
    badges: [
      { label: 'Sale on!', bg: 'bg-red-500' },
      { label: 'Group Tour', bg: 'bg-[#f26c22]' },
    ],
    image: Kashmirimg,
  },
  {
    id: 7,
    title: 'Uttarakhand Tour',
    location: 'Rishikesh, Mussoorie & Nainital, Uttarakhand',
    duration: '6 Days/5 Nights',
    price: '₹17,999',
    originalPrice: '₹21,999',
    badges: [
      { label: 'Sale on!', bg: 'bg-red-500' },
      { label: 'Group Tour', bg: 'bg-[#f26c22]' },
    ],
    image: Uttarakhandimg,
  },
  {
    id: 8,
    title: 'Uttar Pradesh Heritage Tour',
    location: 'Agra, Varanasi & Lucknow, Uttar Pradesh',
    duration: '5 Days/4 Nights',
    price: '₹15,999',
    originalPrice: '₹19,999',
    badges: [
      { label: 'Heritage', bg: 'bg-[#f26c22]' },
      { label: 'Featured', bg: 'bg-[#f26c22]' },
    ],
    image: upimg,
  },
  {
    id: 9,
    title: 'Sikkim',
    location: 'Gangtok, Pelling & Lachung, Sikkim',
    duration: '6 Days/5 Nights',
    price: '₹20,999',
    originalPrice: '₹24,999',
    badges: [
      { label: 'Mountain Tour', bg: 'bg-[#f26c22]' },
      { label: 'Popular', bg: 'bg-[#f26c22]' },
    ],
    image: Sikkimimg,
  },
  {
    id: 10,
    title: 'Goa Beach Escape',
    location: 'North & South Goa',
    duration: '5 Days/4 Nights',
    price: '₹16,999',
    originalPrice: '₹20,999',
    badges: [
      { label: 'Beach Tour', bg: 'bg-[#f26c22]' },
      { label: 'Popular', bg: 'bg-[#f26c22]' },
    ],
    image: Goaimg,
  },
  {
    id: 11,
    title: 'Assam',
    location: 'Guwahati, Kaziranga & Shillong',
    duration: '5 Days/4 Nights',
    price: '₹18,999',
    originalPrice: '₹22,999',
    badges: [
      { label: 'Nature Tour', bg: 'bg-[#f26c22]' },
      { label: 'Wildlife', bg: 'bg-[#f26c22]' },
    ],
    image: Assamimg,
  },
  {
    id: 12,
    title: 'Andaman Islands',
    location: 'Port Blair, Havelock & Neil Island',
    duration: '6 Days/5 Nights',
    price: '₹25,999',
    originalPrice: '₹30,999',
    badges: [
      { label: 'Beach Tour', bg: 'bg-[#f26c22]' },
      { label: 'Honeymoon', bg: 'bg-[#f26c22]' },
    ],
    image: Andamanimg,
  },
];
export default function TopNationalDestinations() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const maxIndex = Math.max(0, destinations.length - itemsPerPage);
  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);
  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 3500);
    return () => clearInterval(timer);
  }, [isPaused, handleNext]);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  const totalDots = maxIndex + 1;

  const getTransform = () => {
    if (itemsPerPage === 1) {
      return `translateX(calc(-${currentIndex} * 100%))`;
    }
    if (itemsPerPage === 2) {
      return `translateX(calc(-${currentIndex} * (50% + 12px)))`;
    }
    return `translateX(calc(-${currentIndex} * (33.3333% + 8px)))`;
  };

  return (
    <section
      className="w-full px-4 sm:px-8 md:px-16 lg:px-0 py-16 max-w-[1400px] mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative flex items-center justify-between mb-6">
        <div className="hidden sm:flex items-end gap-1 absolute left-0 bottom-0 pointer-events-none">
          <Image
            src={balloonImg}
            alt="Balloon"
            className="w-28 h-28 lg:w-32 lg:h-32 object-contain"
          />
        </div>
        <div className="w-full text-center px-4">
          <h2 className="text-3xl md:text-4xl font-semibold mb-3 text-[#000000]">
            Top National destinations
          </h2>
          <p className="text-gray-500 text-[15px] max-w-xl mx-auto">
            A curated list of the most popular travel packages based on{' '}
            <br className="hidden sm:inline" />
            different destinations.
          </p>
        </div>
        <div className="flex items-center gap-2 absolute right-0 top-0">
          <button
            onClick={handlePrev}
            aria-label="Previous destination"
            className="w-10 h-10 rounded-full border-2 border-[#f26c22] text-[#f26c22] flex items-center justify-center hover:bg-[#f26c22] hover:text-white transition font-bold text-xl cursor-pointer shadow-sm active:scale-95 select-none"
          >
            ‹
          </button>
          <button
            onClick={handleNext}
            aria-label="Next destination"
            className="w-10 h-10 rounded-full bg-[#f26c22] text-white flex items-center justify-center hover:bg-[#d95d1a] transition font-bold text-xl cursor-pointer shadow-sm active:scale-95 select-none"
          >
            ›
          </button>
        </div>
      </div>

      <div
        className="overflow-hidden mt-8 py-2"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out gap-6"
          style={{ transform: getTransform() }}
        >
          {destinations.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.3333%-16px)]"
            >
              <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between">
                <div className="h-56 bg-gray-200 relative overflow-hidden group">
                  {typeof item.image === 'string' ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                    {item.badges.map((b, idx) => (
                      <span
                        key={idx}
                        className={`${b.bg} text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm`}
                      >
                        {b.label}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-[18px] font-bold mb-2 text-gray-900 line-clamp-1">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-3.5 h-3.5 text-[#f26c22] shrink-0"
                      >
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                      <span className="truncate">{item.location}</span>
                      <span className="text-gray-400">↔</span>
                      <span className="shrink-0">{item.duration}</span>
                    </div>
                  </div>
                  <div>
                    {/* Price and CTA */}
                    <div className="flex justify-between items-center border-t border-gray-100 pt-4 ">
                      <button className="bg-[#f26c22] hover:bg-[#d95d1a] text-white px-5 py-2 rounded-lg font-bold text-sm transition cursor-pointer active:scale-95 shadow-sm">
                        Book Now ↗
                      </button>
                      <div className="text-right">
                        {item.originalPrice && (
                          <p className="text-xs text-gray-400 line-through">
                            {item.originalPrice}
                          </p>
                        )}
                        <p className="text-xs text-gray-400">per person</p>
                        <p className="text-xl font-bold text-gray-900">
                          {item.price}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mt-3 pt-3 border-t border-gray-100">
                      <span className="flex items-center gap-1 text-[12px] text-gray-500 font-medium">
                        <svg
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          className="w-3.5 h-3.5"
                        >
                          <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                        </svg>
                        Experience
                        <span className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center text-[10px] text-gray-400 font-bold">
                          i
                        </span>
                      </span>
                      <span className="flex items-center gap-1 text-[12px] text-gray-500 font-medium">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          className="w-3.5 h-3.5 stroke-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                        Inclusion
                        <span className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center text-[10px] text-gray-400 font-bold">
                          i
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 mt-8">
        {Array.from({ length: totalDots }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-300 rounded-full cursor-pointer h-2.5 ${currentIndex === index
              ? 'w-7 bg-[#f26c22]'
              : 'w-2.5 bg-gray-300 hover:bg-gray-400'
              }`}
          />
        ))}
      </div>
    </section>
  );
}
