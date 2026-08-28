'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { 
  FaMapMarkerAlt, 
  FaClock, 
  FaStar, 
  FaHeart, 
  FaUtensils, 
  FaHotel, 
  FaCar, 
  FaChevronLeft, 
  FaChevronRight,
  FaFire,
  FaTag
} from 'react-icons/fa';
import { BsInfoCircle, BsLightningChargeFill } from 'react-icons/bs';
import { MdVerified } from 'react-icons/md';

import balloonImg from '@/public/assets/images/vector/vector-image.png';
import lehLadakhImg from '@/public/assets/images/packageimages/lehladkah.webp';
import spitiImg from '@/public/assets/images/packageimages/spitiimage.webp';
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

interface Badge {
  label: string;
  type: 'sale' | 'featured' | 'popular' | 'adventure' | 'group' | 'honeymoon' | 'heritage' | 'nature';
}

interface Destination {
  id: number;
  title: string;
  location: string;
  duration: string;
  nightsDays?: string;
  price: string;
  originalPrice?: string;
  rating: string;
  reviews: string;
  badges: Badge[];
  image: StaticImageData | string;
  features: string[];
  link: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    title: 'Leh & Ladakh Expedition',
    location: 'Leh, Ladakh',
    duration: '5D / 4N',
    nightsDays: '4 Nights / 5 Days',
    price: '₹16,999',
    originalPrice: '₹21,999',
    rating: '4.9',
    reviews: '480',
    badges: [
      { label: 'Group Tour', type: 'group' },
      { label: 'Featured', type: 'featured' },
    ],
    image: lehLadakhImg,
    features: ['Stay Included', 'Meals Included', 'Pangong Lake Trip'],
    link: '/national/ladakh',
  },
  {
    id: 2,
    title: 'Lahaul & Spiti Valley',
    location: 'Lahaul & Spiti, HP',
    duration: '6D / 5N',
    nightsDays: '5 Nights / 6 Days',
    price: '₹14,999',
    originalPrice: '₹18,999',
    rating: '4.8',
    reviews: '320',
    badges: [
      { label: 'Adventure', type: 'adventure' },
      { label: 'Popular', type: 'popular' },
    ],
    image: spitiImg,
    features: ['Monasteries Tour', 'Camp Stay', 'High Passes'],
    link: '/national/spiti',
  },
  {
    id: 3,
    title: 'Himachal Pradesh Highlights',
    location: 'Manali & Shimla, HP',
    duration: '7D / 6N',
    nightsDays: '6 Nights / 7 Days',
    price: '₹18,999',
    originalPrice: '₹22,999',
    rating: '4.9',
    reviews: '640',
    badges: [
      { label: 'Sale on!', type: 'sale' },
      { label: 'Group Tour', type: 'group' },
      { label: 'Featured', type: 'featured' },
    ],
    image: himachalImg,
    features: ['Solang Valley', 'Private Transfers', '4★ Resort'],
    link: '/national/himachal-pradesh',
  },
  {
    id: 4,
    title: "Kerala - God's Own Country",
    location: 'Munnar & Alleppey, Kerala',
    duration: '5D / 4N',
    nightsDays: '4 Nights / 5 Days',
    price: '₹21,999',
    originalPrice: '₹26,999',
    rating: '5.0',
    reviews: '510',
    badges: [
      { label: 'Honeymoon', type: 'honeymoon' },
      { label: 'Popular', type: 'popular' },
    ],
    image: KeralaImg,
    features: ['Houseboat Stay', 'Tea Gardens', 'Candlelight Dinner'],
    link: '/national/kerala',
  },
  {
    id: 5,
    title: 'Royal Rajasthan Heritage',
    location: 'Jaipur & Udaipur, Rajasthan',
    duration: '6D / 5N',
    nightsDays: '5 Nights / 6 Days',
    price: '₹19,999',
    originalPrice: '₹24,999',
    rating: '4.9',
    reviews: '430',
    badges: [
      { label: 'Heritage', type: 'heritage' },
      { label: 'Featured', type: 'featured' },
    ],
    image: RajasthanImg,
    features: ['Palace Visits', 'Desert Safari', 'Cultural Show'],
    link: '/national/rajasthan',
  },
  {
    id: 6,
    title: 'Kashmir Paradise Tour',
    location: 'Srinagar & Gulmarg, Kashmir',
    duration: '6D / 5N',
    nightsDays: '5 Nights / 6 Days',
    price: '₹22,999',
    originalPrice: '₹27,999',
    rating: '4.9',
    reviews: '720',
    badges: [
      { label: 'Sale on!', type: 'sale' },
      { label: 'Group Tour', type: 'group' },
    ],
    image: Kashmirimg,
    features: ['Shikara Ride', 'Gondola Ride', 'Houseboat Stay'],
    link: '/national/kashmir',
  },
  {
    id: 7,
    title: 'Uttarakhand Himalayan Tour',
    location: 'Rishikesh & Nainital, UK',
    duration: '6D / 5N',
    nightsDays: '5 Nights / 6 Days',
    price: '₹17,999',
    originalPrice: '₹21,999',
    rating: '4.8',
    reviews: '290',
    badges: [
      { label: 'Sale on!', type: 'sale' },
      { label: 'Adventure', type: 'adventure' },
    ],
    image: Uttarakhandimg,
    features: ['River Rafting', 'Lake Tour', 'Mountain View Stays'],
    link: '/national/uttarakhand',
  },
  {
    id: 8,
    title: 'Uttar Pradesh Heritage Circuit',
    location: 'Agra & Varanasi, UP',
    duration: '5D / 4N',
    nightsDays: '4 Nights / 5 Days',
    price: '₹15,999',
    originalPrice: '₹19,999',
    rating: '4.8',
    reviews: '310',
    badges: [
      { label: 'Heritage', type: 'heritage' },
      { label: 'Featured', type: 'featured' },
    ],
    image: upimg,
    features: ['Taj Mahal Sunrise', 'Ganga Aarti', 'Heritage Guide'],
    link: '/national',
  },
  {
    id: 9,
    title: 'Sikkim & Gangtok Splendor',
    location: 'Gangtok & Pelling, Sikkim',
    duration: '6D / 5N',
    nightsDays: '5 Nights / 6 Days',
    price: '₹20,999',
    originalPrice: '₹24,999',
    rating: '4.9',
    reviews: '260',
    badges: [
      { label: 'Nature', type: 'nature' },
      { label: 'Popular', type: 'popular' },
    ],
    image: Sikkimimg,
    features: ['Tsomgo Lake', 'Monastery Tour', 'Kanchenjunga Views'],
    link: '/national',
  },
  {
    id: 10,
    title: 'Goa Coastal Escape',
    location: 'North & South Goa',
    duration: '5D / 4N',
    nightsDays: '4 Nights / 5 Days',
    price: '₹16,999',
    originalPrice: '₹20,999',
    rating: '4.9',
    reviews: '890',
    badges: [
      { label: 'Popular', type: 'popular' },
      { label: 'Featured', type: 'featured' },
    ],
    image: Goaimg,
    features: ['Beach Resort', 'Water Sports', 'Sunset Cruise'],
    link: '/national/goa',
  },
  {
    id: 11,
    title: 'Assam & Meghalaya Wild',
    location: 'Kaziranga & Shillong',
    duration: '5D / 4N',
    nightsDays: '4 Nights / 5 Days',
    price: '₹18,999',
    originalPrice: '₹22,999',
    rating: '4.8',
    reviews: '195',
    badges: [
      { label: 'Nature', type: 'nature' },
      { label: 'Adventure', type: 'adventure' },
    ],
    image: Assamimg,
    features: ['Rhino Safari', 'Living Root Bridges', 'Waterfalls'],
    link: '/national',
  },
  {
    id: 12,
    title: 'Andaman Islands Paradise',
    location: 'Havelock & Neil Island',
    duration: '6D / 5N',
    nightsDays: '5 Nights / 6 Days',
    price: '₹25,999',
    originalPrice: '₹30,999',
    rating: '5.0',
    reviews: '610',
    badges: [
      { label: 'Honeymoon', type: 'honeymoon' },
      { label: 'Featured', type: 'featured' },
    ],
    image: Andamanimg,
    features: ['Radhanagar Beach', 'Scuba / Snorkel', 'Ferry Transfers'],
    link: '/national/andaman',
  },
];

export default function TopNationalDestinations() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const [likedCards, setLikedCards] = useState<Record<number, boolean>>({});
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
    }, 4000);
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

  const toggleLike = (id: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLikedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const totalDots = maxIndex + 1;

  const getTransform = () => {
    if (itemsPerPage === 1) {
      return `translateX(calc(-${currentIndex} * 100%))`;
    }
    if (itemsPerPage === 2) {
      return `translateX(calc(-${currentIndex} * (50% + 12px)))`;
    }
    return `translateX(calc(-${currentIndex} * (33.3333% + 16px)))`;
  };

  const renderBadge = (badge: Badge, idx: number) => {
    switch (badge.type) {
      case 'sale':
        return (
          <span
            key={idx}
            className="inline-flex items-center gap-1 bg-gradient-to-r from-red-500 to-rose-600 text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow-md backdrop-blur-sm"
          >
            <FaFire className="w-3 h-3 text-yellow-300" />
            {badge.label}
          </span>
        );
      case 'adventure':
        return (
          <span
            key={idx}
            className="inline-flex items-center gap-1 bg-gradient-to-r from-amber-400 to-amber-500 text-gray-900 text-[11px] font-extrabold px-3 py-1 rounded-full shadow-md"
          >
            <BsLightningChargeFill className="w-3 h-3 text-gray-900" />
            {badge.label}
          </span>
        );
      case 'honeymoon':
        return (
          <span
            key={idx}
            className="inline-flex items-center gap-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md"
          >
            <FaHeart className="w-2.5 h-2.5" />
            {badge.label}
          </span>
        );
      case 'featured':
      case 'popular':
      default:
        return (
          <span
            key={idx}
            className="inline-flex items-center gap-1 bg-[#f26c22] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md backdrop-blur-sm"
          >
            {badge.label}
          </span>
        );
    }
  };

  return (
    <section
      className="w-full px-4 sm:px-8 md:px-12 lg:px-6 py-16 max-w-[1400px] mx-auto overflow-hidden font-sans"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative flex flex-col md:flex-row items-center justify-between mb-10 gap-4">
        <div className="hidden lg:flex items-end gap-1 absolute left-0 -top-8 pointer-events-none opacity-80">
          <Image
            src={balloonImg}
            alt="Hot Air Balloon"
            className="w-24 h-24 object-contain drop-shadow-sm"
          />
        </div>

        <div className="w-full text-center px-4">
          <div className="inline-flex items-center gap-1.5 bg-orange-50 border border-orange-200/80 px-3.5 py-1 rounded-full text-[#f26c22] text-[12px] font-bold uppercase tracking-wider mb-2.5">
            <FaTag className="w-3 h-3" /> Handcrafted India Holiday Packages
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#111827] tracking-tight">
            Top National Destinations
          </h2>
          <p className="text-gray-600 text-[14.5px] max-w-xl mx-auto mt-2 leading-relaxed">
            Curated list of premium domestic holiday packages with transparent pricing and verified stays.
          </p>
        </div>
        <div className="flex items-center gap-2.5 self-center md:self-auto md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2">
          <button
            onClick={handlePrev}
            aria-label="Previous destination"
            className="w-10 h-10 rounded-full border border-gray-300 bg-white hover:border-[#f26c22] hover:bg-[#f26c22] text-gray-700 hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm active:scale-95 cursor-pointer"
          >
            <FaChevronLeft className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next destination"
            className="w-10 h-10 rounded-full bg-[#f26c22] hover:bg-[#d95d1a] text-white flex items-center justify-center transition-all duration-200 shadow-md active:scale-95 cursor-pointer"
          >
            <FaChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
      <div
        className="overflow-hidden py-3"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out gap-6"
          style={{ transform: getTransform() }}
        >
          {destinations.map((item) => {
            const isLiked = !!likedCards[item.id];
            
            return (
              <div
                key={item.id}
                className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.3333%-16px)]"
              >
                <div className="group bg-white rounded-[22px] overflow-hidden border border-gray-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(242,108,34,0.14)] hover:border-orange-200/90 transition-all duration-300 h-full flex flex-col justify-between hover:-translate-y-1.5">                  <Link href={item.link} className="h-[225px] sm:h-[235px] relative overflow-hidden bg-gray-10 block cursor-pointer">
                    {typeof item.image === 'string' ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                      />
                    ) : (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/35 pointer-events-none" />
                    <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-1.5 z-10 max-w-[75%]">
                      {item.badges.map((b, idx) => renderBadge(b, idx))}
                    </div>
                    <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5 z-10">
                      <button
                        onClick={(e) => toggleLike(item.id, e)}
                        aria-label="Add to wishlist"
                        className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md hover:bg-white text-white hover:text-red-500 flex items-center justify-center transition-all duration-200 shadow-sm"
                      >
                        <FaHeart className={`w-3.5 h-3.5 transition-colors ${isLiked ? 'text-red-500 fill-current' : 'text-white'}`} />
                      </button>
                    </div>
                    <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between z-10 text-white">
                      <div className="inline-flex items-center gap-1.5 bg-black/50 backdrop-blur-md border border-white/20 px-2.5 py-1 rounded-full text-[11.5px] font-bold">
                        <FaStar className="text-amber-400 w-3 h-3" />
                        <span>{item.rating}</span>
                        <span className="text-white/70 font-normal">({item.reviews})</span>
                      </div>
                      <div className="inline-flex items-center gap-1 text-[11.5px] font-semibold text-white/90 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                        <MdVerified className="text-emerald-400 w-3.5 h-3.5" />
                        <span>Verified Tour</span>
                      </div>
                    </div>
                  </Link>

                  {/* Card Content Area */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      
                      {/* Destination Title */}
                      <h3 className="text-[19px] font-semibold text-[#111827] group-hover:text-[#f26c22] transition-colors leading-tight mb-2.5 line-clamp-1">
                        {item.title}
                      </h3>

                      {/* Meta Information: Location & Duration Pill */}
                      <div className="flex items-center justify-between text-xs text-gray-500 gap-2 mb-3.5">
                        <div className="flex items-center gap-1.5 text-gray-700 font-medium truncate">
                          <FaMapMarkerAlt className="text-[#f26c22] w-3.5 h-3.5 shrink-0" />
                          <span className="truncate">{item.location}</span>
                        </div>
                        <div className="inline-flex items-center gap-1 bg-amber-50 border border-amber-200/60 text-amber-900 font-bold px-2.5 py-0.5 rounded-md text-[11.5px] shrink-0">
                          <FaClock className="w-2.5 h-2.5 text-[#f26c22]" />
                          <span>{item.duration}</span>
                        </div>
                      </div>

                      {/* Micro Features / Inclusions Chips */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {item.features.map((feat, fIdx) => (
                          <span
                            key={fIdx}
                            className="bg-gray-50 text-gray-600 text-[11px] font-medium px-2 py-0.5 rounded-md border border-gray-200/70"
                          >
                            {feat}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Pricing & CTA Area */}
                    <div>
                      <div className="flex items-end justify-between pt-3.5 border-t border-gray-100">
                        
                        {/* Left CTA: Modern Action Button */}
                        <Link
                          href={item.link}
                          className="bg-gradient-to-r from-[#f26c22] to-[#e05615] hover:from-[#e05615] hover:to-[#c8490e] text-white px-5 py-2.5 rounded-xl font-bold text-[13.5px] shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-1.5 active:scale-95 group/btn"
                        >
                          <span>Book Now</span>
                          <span className="text-sm font-bold group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200">↗</span>
                        </Link>

                        {/* Right: Price Typography */}
                        <div className="text-right">
                          {item.originalPrice && (
                            <div className="flex items-center justify-end gap-1.5">
                              <span className="text-[12px] text-gray-400 line-through">
                                {item.originalPrice}
                              </span>
                              <span className="text-[10px] font-extrabold text-emerald-600 bg-emerald-50 px-1.5 py-0.2 rounded">
                                SAVE 20%
                              </span>
                            </div>
                          )}
                          <div className="text-[11px] text-gray-500 font-medium">
                            per person
                          </div>
                          <div className="text-[22px] font-black text-gray-900 leading-none tracking-tight">
                            {item.price}
                          </div>
                        </div>

                      </div>

                      {/* Interactive Bottom Trust Strip */}
                      <div className="flex items-center justify-between text-[11.5px] text-gray-500 font-medium pt-3 mt-3 border-t border-gray-100/90">
                        <div className="flex items-center gap-1 hover:text-gray-900 transition-colors cursor-pointer">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#f26c22]"></span>
                          <span>Top Experiences</span>
                          <BsInfoCircle className="w-3 h-3 text-gray-400" />
                        </div>
                        <div className="flex items-center gap-1 hover:text-gray-900 transition-colors cursor-pointer">
                          <span className="text-emerald-500 font-bold">+</span>
                          <span>Full Inclusions</span>
                          <BsInfoCircle className="w-3 h-3 text-gray-400" />
                        </div>
                      </div>

                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modern Carousel Dots */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {Array.from({ length: totalDots }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-300 rounded-full cursor-pointer h-2.5 ${
              currentIndex === index
                ? 'w-8 bg-[#f26c22] shadow-sm'
                : 'w-2.5 bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
