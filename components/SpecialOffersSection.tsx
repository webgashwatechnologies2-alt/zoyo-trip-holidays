'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { 
  FaChevronLeft, 
  FaChevronRight, 
  FaCopy, 
  FaCheck, 
  FaClock, 
  FaFire,
  FaArrowRight
} from 'react-icons/fa';

// Image imports
import ladakhImg from '@/public/assets/images/packageimages/lehbike.webp';
import agraImg from '@/public/assets/images/packageimages/agra.webp';
import shimlaImg from '@/public/assets/images/packageimages/Shimla-Manali-Tour-Package.webp';
import kashmirImg from '@/public/assets/images/packageimages/Kashmirnewww.webp';
import baliImg from '@/public/assets/images/packageimages/balibeach.webp';
import keralaImg from '@/public/assets/images/packageimages/alleppey.webp';
import dubaiImg from '@/public/assets/images/packageimages/dubai.webp';
import goaImg from '@/public/assets/images/packageimages/goa.webp';

interface OfferCardData {
  id: number;
  badge: string;
  discountTag: string;
  title: string;
  originalPrice: string;
  savings: string;
  finalPrice: string;
  validity: string;
  image: StaticImageData;
  link: string;
}
const offersData: OfferCardData[] = [
  {
    id: 1,
    badge: 'Early birds Sale is Live !',
    discountTag: '25% OFF*',
    title: 'Most Wanted Ladakh Adventure Package',
    originalPrice: '₹35,532',
    savings: 'Save ₹8,883',
    finalPrice: '₹26,649',
    validity: 'Valid till: 28 Aug 2026',
    image: ladakhImg,
    link: '/national/ladakh',
  },
  {
    id: 2,
    badge: '20% Off',
    discountTag: '20% OFF*',
    title: 'Deluxe - Golden Triangle Heritage Tour',
    originalPrice: '₹32,078',
    savings: 'Save ₹6,416',
    finalPrice: '₹25,662',
    validity: 'Valid till: 28 Aug 2026',
    image: agraImg,
    link: '/national/rajasthan',
  },
  {
    id: 3,
    badge: 'Book with ₹4999 Only !',
    discountTag: '5% OFF*',
    title: 'Classic Shimla Manali Mountain Tour',
    originalPrice: '₹15,187',
    savings: 'Save ₹759',
    finalPrice: '₹14,428',
    validity: 'Valid till: 28 Aug 2026',
    image: shimlaImg,
    link: '/national/himachal',
  },
  {
    id: 4,
    badge: 'Book with ₹2999 Only !',
    discountTag: '25% OFF*',
    title: 'Experience the Magic of Kashmir Valley',
    originalPrice: '₹24,999',
    savings: 'Save ₹6,250',
    finalPrice: '₹18,749',
    validity: 'Valid till: 28 Aug 2026',
    image: kashmirImg,
    link: '/national/kashmir',
  },
  {
    id: 5,
    badge: 'Honeymoon Special !',
    discountTag: '30% OFF*',
    title: 'Romantic Bali Island & Beach Escape',
    originalPrice: '₹42,500',
    savings: 'Save ₹12,750',
    finalPrice: '₹29,750',
    validity: 'Valid till: 28 Aug 2026',
    image: baliImg,
    link: '/international/bali',
  },
  {
    id: 6,
    badge: 'Best Seller Deal !',
    discountTag: '35% OFF*',
    title: 'Serene Kerala Backwaters & Munnar Hills',
    originalPrice: '₹28,999',
    savings: 'Save ₹10,150',
    finalPrice: '₹18,849',
    validity: 'Valid till: 28 Aug 2026',
    image: keralaImg,
    link: '/national/kerala',
  },
  {
    id: 7,
    badge: 'Mega Summer Sale !',
    discountTag: '40% OFF*',
    title: 'Grand Dubai Luxury City & Desert Safari',
    originalPrice: '₹68,000',
    savings: 'Save ₹27,200',
    finalPrice: '₹40,800',
    validity: 'Valid till: 28 Aug 2026',
    image: dubaiImg,
    link: '/international/dubai',
  },
  {
    id: 8,
    badge: 'Weekend Getaway !',
    discountTag: '22% OFF*',
    title: 'Vibrant Goa Beach Party & Cruise',
    originalPrice: '₹18,500',
    savings: 'Save ₹4,070',
    finalPrice: '₹14,430',
    validity: 'Valid till: 28 Aug 2026',
    image: goaImg,
    link: '/national/goa',
  },
];
export default function SpecialOffersSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const checkScrollPosition = useCallback(() => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  }, []);
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    el.addEventListener('scroll', checkScrollPosition);
    checkScrollPosition();
    return () => el.removeEventListener('scroll', checkScrollPosition);
  }, [checkScrollPosition]);
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      if (!scrollContainerRef.current) return;
      const el = scrollContainerRef.current;
      const cardWidth = 390;
      const maxScroll = el.scrollWidth - el.clientWidth;

      if (el.scrollLeft >= maxScroll - 20) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
    }, 3200);
    return () => clearInterval(interval);
  }, [isPaused]);
  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const cardWidth = 390;
    const shift = direction === 'left' ? -cardWidth : cardWidth;
    scrollContainerRef.current.scrollBy({ left: shift, behavior: 'smooth' });
  };
  const handleCopyCode = () => {
    navigator.clipboard.writeText('WELCOME');
    setCopiedCode(true);
    setTimeout(() => {
      setCopiedCode(false);
    }, 2500);
  };
  return (
    <section className="w-full bg-[#f8fafc] py-10 sm:py-14 px-4 sm:px-8 lg:px-14 overflow-hidden border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-[#f26c22] text-xs font-bold mb-2">
              <FaFire className="text-orange-500 animate-pulse" />
              HOT TRAVEL DEALS
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight">
              Offers to Inspire You! <span className="text-[#1E6AD4]">Up to 40% OFF*</span>
            </h2>
            <div className="flex items-center flex-wrap gap-2 mt-2 text-sm sm:text-[15px] text-gray-600 font-medium">
              <span>Use Code</span>
              <button
                onClick={handleCopyCode}
                title="Click to copy coupon code"
                className="group relative inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-300 text-[#ea580c] font-mono font-bold tracking-wider hover:from-orange-100 hover:to-amber-100 hover:border-orange-400 active:scale-95 transition-all shadow-xs cursor-pointer"
              >
                <span>WELCOME</span>
                {copiedCode ? (
                  <FaCheck className="text-green-600 text-xs animate-bounce" />
                ) : (
                  <FaCopy className="text-orange-500 text-xs opacity-80 group-hover:opacity-100" />
                )}
                {copiedCode && (
                  <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#0f172a] text-white text-[10px] font-sans font-semibold py-0.5 px-2 rounded shadow-lg whitespace-nowrap animate-fadeIn inline-flex items-center gap-1">
                    Copied! <FaCheck className="text-emerald-400 text-[9px]" />
                  </span>
                )}
              </button>
              <span>AND GET <strong className="text-gray-900 font-bold">₹500 FLAT OFF</strong></span>
            </div>
          </div>
          <div className="flex items-center gap-3 self-end md:self-auto">
            <div className="text-xs text-gray-500 hidden sm:flex items-center gap-1.5 mr-2 font-medium">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              Auto-scrolling
            </div>
            <button
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              aria-label="Previous offers"
              className={`w-10 h-10 rounded-full flex items-center justify-center border shadow-md transition-all duration-200 ${
                canScrollLeft
                  ? 'bg-white text-gray-700 hover:bg-[#1E6AD4] hover:text-white hover:border-[#1E6AD4] cursor-pointer'
                  : 'bg-gray-100 text-gray-300 border-gray-200 cursor-not-allowed opacity-60'
              }`}
            >
              <FaChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              aria-label="Next offers"
              className={`w-10 h-10 rounded-full flex items-center justify-center border shadow-md transition-all duration-200 ${
                canScrollRight
                  ? 'bg-white text-gray-700 hover:bg-[#1E6AD4] hover:text-white hover:border-[#1E6AD4] cursor-pointer'
                  : 'bg-gray-100 text-gray-300 border-gray-200 cursor-not-allowed opacity-60'
              }`}
            >
              <FaChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            className="flex gap-5 overflow-x-auto pb-6 pt-3 no-scrollbar scroll-smooth snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {offersData.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className="group relative flex-none w-[320px] sm:w-[370px] md:w-[390px] snap-start rounded-[20px] overflow-visible transition-all duration-300 hover:-translate-y-1.5 focus:outline-none"
              >
                {/* Floating Top Pill Badge */}
                <div className="absolute -top-3 left-4 z-20">
                  <div className="bg-gradient-to-r from-[#ff6b00] to-[#ff8800] text-white text-[11px] sm:text-[12px] font-extrabold px-3.5 py-1 rounded-full shadow-[0_4px_12px_rgba(255,107,0,0.35)] flex items-center gap-1.5 border border-white/20 whitespace-nowrap">
                    <span>{item.badge}</span>
                  </div>
                </div>
                <div className="flex h-[200px] sm:h-[210px] w-full rounded-[20px] overflow-hidden bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] group-hover:shadow-[0_16px_32px_rgba(0,102,255,0.18)] border border-gray-100 group-hover:border-blue-200 transition-all duration-300">
                  <div className="w-[58%] bg-gradient-to-br from-[#1E6AD4] via-[#1E6AD4] to-[#003EA8] text-white p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute -right-10 -bottom-10 w-28 h-28 bg-white/10 rounded-full blur-xl pointer-events-none" />
                    <div className="pt-2">
                      <div className="inline-block text-[#FFE600] font-black text-[13px] sm:text-[14px] tracking-wide uppercase drop-shadow-xs">
                        {item.discountTag}
                      </div>
                      <h3 className="font-bold text-[14px] sm:text-[15.5px] leading-tight text-white line-clamp-2 mt-1 drop-shadow-xs group-hover:text-blue-100 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <div className="mt-auto pt-2">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-white/70 line-through text-[12px] font-medium">
                          {item.originalPrice}
                        </span>
                        <span className="bg-white/20 backdrop-blur-xs text-white text-[10.5px] font-bold px-1.5 py-0.5 rounded border border-white/20">
                          {item.savings}
                        </span>
                      </div>

                      <div className="flex items-baseline gap-1">
                        <span className="text-xl sm:text-[22px] font-black text-white tracking-tight leading-none drop-shadow-xs">
                          {item.finalPrice}
                        </span>
                        <span className="text-[11px] font-medium text-white/80">
                          per person
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-[10px] sm:text-[10.5px] text-white/75 font-medium mt-1.5">
                        <FaClock className="text-[9px] opacity-80" />
                        <span>{item.validity}</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-[42%] relative overflow-hidden bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 160px, 180px"
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1E6AD4]/20 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-2 right-2 w-7 h-7 rounded-full bg-white/90 backdrop-blur-xs text-[#1E6AD4] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300 shadow-md">
                      <FaArrowRight className="text-[10px]" />
                    </div>
                  </div>

                </div>
              </Link>
            ))}
          </div>
          {canScrollRight && (
            <button
              onClick={() => handleScroll('right')}
              aria-label="Next slide"
              className="hidden lg:flex absolute right-[-14px] top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white text-gray-800 shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:bg-[#1E6AD4] hover:text-white items-center justify-center border border-gray-100 hover:border-[#1E6AD4] transition-all duration-200 cursor-pointer group"
            >
              <FaChevronRight className="w-4 h-4 ml-0.5 group-hover:scale-110 transition-transform" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
