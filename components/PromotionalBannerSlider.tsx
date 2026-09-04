'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import banner1 from '@/public/assets/images/slider/balislider.png';
import banner2 from '@/public/assets/images/slider/dubai2.png';
import banner3 from '@/public/assets/images/slider/Rajasthan.png';
import banner4 from '@/public/assets/images/slider/Lehbaner.png';
import banner5 from '@/public/assets/images/slider/kashmirslider2.png';
import banner6 from '@/public/assets/images/slider/himachalslider1.png';

export interface BannerSlideItem {
  id: number;
  image: StaticImageData | string;
  alt: string;
  link?: string;
}

// Banners List
const bannerImages: BannerSlideItem[] = [
  {
    id: 1,
    image: banner1,
    alt: 'Super Saver Travel Sale Banner',
    link: '/international/bali',
  },
  {
    id: 2,
    image: banner2,
    alt: 'Special Holiday Tour Offers',
    link: '/international/dubai',
  },
  {
    id: 3,
    image: banner3,
    alt: 'Exclusive Vacation Packages',
    link: '/national/rajasthan',
  },
  {
    id: 4,
    image: banner4,
    alt: 'Adventure & Mountain Deals',
    link: '/national/ladakh',
  },
  {
    id: 5,
    image: banner5,
    alt: 'International Tourism Sale',
    link: '/national/kashmir',
  },
   {
    id: 6,
    image: banner6,
    alt: 'International Tourism Sale',
    link: '/national/himachal-pradesh',
  },
];

export default function PromotionalBannerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef<number>(0);
  const touchEndXRef = useRef<number>(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
  }, []);

  useEffect(() => {
    if (isPaused || bannerImages.length <= 1) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartXRef.current - touchEndXRef.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  return (
    <section 
      className="w-full py-8 sm:py-12 px-4 sm:px-8 lg:px-16 bg-white block relative z-10 mb-14"
      aria-label="Special Offers Banner Slider"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        <div
          className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.12)] border border-gray-200 group select-none bg-slate-900"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="relative w-full"
            style={{ height: 'clamp(200px, 35vw, 480px)' }}
          >
            {bannerImages.map((banner, index) => {
              const isActive = index === currentIndex;

              return (
                <div
                  key={banner.id}
                  className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                    isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  {banner.link ? (
                    <Link
                      href={banner.link}
                      className="block relative w-full h-full cursor-pointer focus:outline-none"
                    >
                      <Image
                        src={banner.image}
                        alt={banner.alt}
                        fill
                        priority={index === 0}
                        sizes="(max-width: 1400px) 100vw, 1400px"
                        className="object-cover object-center w-full h-full transition-transform duration-1000 ease-out group-hover:scale-[1.01]"
                      />
                    </Link>
                  ) : (
                    <div className="relative w-full h-full">
                      <Image
                        src={banner.image}
                        alt={banner.alt}
                        fill
                        priority={index === 0}
                        sizes="(max-width: 1400px) 100vw, 1400px"
                        className="object-cover object-center w-full h-full transition-transform duration-1000 ease-out group-hover:scale-[1.01]"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              prevSlide();
            }}
            aria-label="Previous Banner"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/80 text-white backdrop-blur-md flex items-center justify-center transition-all duration-200 shadow-xl hover:scale-110 active:scale-95 cursor-pointer opacity-90 sm:opacity-0 group-hover:opacity-100 border border-white/20"
          >
            <FaChevronLeft className="text-xs sm:text-base" />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              nextSlide();
            }}
            aria-label="Next Banner"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/80 text-white backdrop-blur-md flex items-center justify-center transition-all duration-200 shadow-xl hover:scale-110 active:scale-95 cursor-pointer opacity-90 sm:opacity-0 group-hover:opacity-100 border border-white/20"
          >
            <FaChevronRight className="text-xs sm:text-base" />
          </button>
          <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 sm:px-4 py-1.5 rounded-full border border-white/20 shadow-lg">
            {bannerImages.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentIndex(i);
                }}
                aria-label={`Slide ${i + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentIndex === i
                    ? 'w-6 sm:w-8 h-2 sm:h-2.5 bg-gradient-to-r from-[#ff6b00] to-[#f26c22] shadow-sm'
                    : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/60 hover:bg-white'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
