'use client';

import { useState, useRef } from 'react';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight, FaMapMarkerAlt, FaHeart, FaTrophy, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import { GiCastle } from 'react-icons/gi';
import { BsBuilding, BsInfoCircle } from 'react-icons/bs';
import { FiPlusCircle, FiCompass } from 'react-icons/fi';

import himachalimg from '@/public/assets/images/packageimages/Shimla-During-Monsoon.webp';
import Manaliimg from '@/public/assets/images/packageimages/Shimla-Manali-Tour-Package.webp';
import Shimlatourimg from '@/public/assets/images/packageimages/shimlaimage.webp';
import Dharamshalaimg from '@/public/assets/images/packageimages/dharamshala.webp';
import Spitiimg from '@/public/assets/images/packageimages/spt.webp';

import Dubaiimg from '@/public/assets/images/packageimages/dubai.webp';
import Mauritiusimg from '@/public/assets/images/packageimages/mauritius.webp';
import Singaporeimg from '@/public/assets/images/packageimages/singapore.webp';
import Thailandimg from '@/public/assets/images/packageimages/thailand.webp';

import Rajasthanimg from '@/public/assets/images/packageimages/rajasthan-camel.webp';
import Kashmirimg from '@/public/assets/images/packageimages/mkashmir.webp';
import Keralaimg from '@/public/assets/images/packageimages/rediscover.webp';
import Varanasiimg from '@/public/assets/images/packageimages/Varanasiimg.webp';

import Manaliromanticimg from '@/public/assets/images/packageimages/honeymoon.webp';
import Maldivesoverwaterimg from '@/public/assets/images/packageimages/Maldivesoverwaterimg.webp';
import Keralaprivateimg from '@/public/assets/images/packageimages/Keralapvt.webp';


interface Badge {
  label: string;
  bg: string;
  text: string;
}

interface TourCardData {
  id: string;
  title: string;
  location: string;
  duration: string;
  price: string;
  image: StaticImageData | string;
  badges: Badge[];
  link: string;
}

const tourCategories: Record<string, TourCardData[]> = {
  himachal: [
    {
      id: 'himachal-1',
      title: 'Shimla Tour with Chail',
      location: 'Himachal Pradesh',
      duration: '3 Days/4 Nights',
      price: '0.00',
      image: himachalimg,
      link: '/national/himachal-pradesh',
      badges: [
        { label: 'Group Tour', bg: 'bg-[#FFE100]', text: 'text-black' },
        { label: 'Featured', bg: 'bg-[#f26c22]', text: 'text-white' },
      ],
    },
    {
      id: 'himachal-2',
      title: 'Shimla Manali Tour',
      location: 'Himachal Pradesh',
      duration: '2 Days/1 Nights',
      price: '0.00',
      image: Manaliimg,
      link: '/national/himachal-pradesh',
      badges: [
        { label: 'Solo Tour', bg: 'bg-[#FFE100]', text: 'text-black' },
      ],
    },
    {
      id: 'himachal-3',
      title: 'Overview Of Shimla Tour',
      location: 'Himachal Pradesh',
      duration: '2 Days/1 Nights',
      price: '0.00',
      image: Shimlatourimg,
      link: '/national/himachal-pradesh',
      badges: [
        { label: 'Sale on!', bg: 'bg-[#ef4444]', text: 'text-white' },
        { label: 'Group Tour', bg: 'bg-[#FFE100]', text: 'text-black' },
        { label: 'Featured', bg: 'bg-[#f26c22]', text: 'text-white' },
      ],
    },
    {
      id: 'himachal-4',
      title: 'Dharamshala & Dalhousie Escape',
      location: 'Himachal Pradesh',
      duration: '5 Days/4 Nights',
      price: '0.00',
      image: Dharamshalaimg,
      link: '/national/himachal-pradesh',
      badges: [
        { label: 'Adventure', bg: 'bg-[#FFE100]', text: 'text-black' },
        { label: 'Featured', bg: 'bg-[#f26c22]', text: 'text-white' },
      ],
    },
    {
      id: 'himachal-5',
      title: 'Spiti Valley Grand Expedition',
      location: 'Himachal Pradesh',
      duration: '7 Days/6 Nights',
      price: '0.00',
      image: Spitiimg,
      link: '/national/spiti',
      badges: [
        { label: 'Group Tour', bg: 'bg-[#FFE100]', text: 'text-black' },
        { label: 'Sale on!', bg: 'bg-[#ef4444]', text: 'text-white' },
      ],
    },
  ],
  international: [
    {
      id: 'intl-1',
      title: 'Dubai & Abu Dhabi Delights | 6D/5N -Inclusive Tour',
      location: 'Dubai, UAE',
      duration: '5 Days/4 Nights',
      price: '0.00',
      image: Dubaiimg,
      link: '/international/dubai',
      badges: [
        { label: 'Sale on!', bg: 'bg-[#ef4444]', text: 'text-white' },
        { label: 'Featured', bg: 'bg-[#f26c22]', text: 'text-white' },
      ],
    },
    {
      id: 'intl-2',
      title: 'Enchanting Mauritius Escape from Mumbai',
      location: 'Mauritius, Indonesia',
      duration: '6 Days/5 Nights',
      price: '0.00',
      image: Mauritiusimg,
      link: '/international/mauritius',
      badges: [
        { label: 'Group Tour', bg: 'bg-[#FFE100]', text: 'text-black' },
        { label: 'Featured', bg: 'bg-[#f26c22]', text: 'text-white' },
      ],
    },
    {
      id: 'intl-3',
      title: 'Singapore Sentosa & Marina Bay',
      location: 'Singapore',
      duration: '4 Days/3 Nights',
      price: '0.00',
      image: Singaporeimg,
      link: '/international/singapore',
      badges: [
        { label: 'Solo Tour', bg: 'bg-[#FFE100]', text: 'text-black' },
      ],
    },
    {
      id: 'intl-4',
      title: 'Thailand Island Hopping & Phuket',
      location: 'Phuket & Krabi, Thailand',
      duration: '6 Days/5 Nights',
      price: '0.00',
      image: Thailandimg,
      link: '/international/thailand',
      badges: [
        { label: 'Sale on!', bg: 'bg-[#ef4444]', text: 'text-white' },
        { label: 'Featured', bg: 'bg-[#f26c22]', text: 'text-white' },
      ],
    },
  ],
  india: [
    {
      id: 'india-1',
      title: 'Royal Rajasthan Heritage Circuit',
      location: 'Jaipur & Udaipur',
      duration: '6 Days/5 Nights',
      price: '0.00',
      image: Rajasthanimg,
      link: '/national/rajasthan',
      badges: [
        { label: 'Group Tour', bg: 'bg-[#FFE100]', text: 'text-black' },
        { label: 'Featured', bg: 'bg-[#f26c22]', text: 'text-white' },
      ],
    },
    {
      id: 'india-2',
      title: 'Kashmir Paradise & Gulmarg Valley',
      location: 'Srinagar, Kashmir',
      duration: '5 Days/4 Nights',
      price: '0.00',
      image: Kashmirimg,
      link: '/national/kashmir',
      badges: [
        { label: 'Sale on!', bg: 'bg-[#ef4444]', text: 'text-white' },
        { label: 'Featured', bg: 'bg-[#f26c22]', text: 'text-white' },
      ],
    },
    {
      id: 'india-3',
      title: 'Kerala Backwaters & Tea Gardens',
      location: 'Munnar & Alleppey',
      duration: '5 Days/4 Nights',
      price: '0.00',
      image: Keralaimg,
      link: '/national/kerala',
      badges: [
        { label: 'Solo Tour', bg: 'bg-[#FFE100]', text: 'text-black' },
      ],
    },
    {
      id: 'india-4',
      title: 'Varanasi Spiritual & Ganga Aarti',
      location: 'Varanasi, UP',
      duration: '3 Days/2 Nights',
      price: '0.00',
      image: Varanasiimg,
      link: '/national',
      badges: [
        { label: 'Featured', bg: 'bg-[#f26c22]', text: 'text-white' },
      ],
    },
  ],
  honeymoon: [
    {
      id: 'honey-1',
      title: 'Manali Romantic Snow & Solang',
      location: 'Manali, Himachal',
      duration: '4 Days/3 Nights',
      price: '0.00',
      image: Manaliromanticimg,
      link: '/national/himachal-pradesh',
      badges: [
        { label: 'Solo Tour', bg: 'bg-[#FFE100]', text: 'text-black' },
        { label: 'Featured', bg: 'bg-[#f26c22]', text: 'text-white' },
      ],
    },
    {
      id: 'honey-2',
      title: 'Maldives Overwater Luxury Romance',
      location: 'Maldives',
      duration: '5 Days/4 Nights',
      price: '0.00',
      image: Maldivesoverwaterimg,
      link: '/international/maldives',
      badges: [
        { label: 'Sale on!', bg: 'bg-[#ef4444]', text: 'text-white' },
        { label: 'Featured', bg: 'bg-[#f26c22]', text: 'text-white' },
      ],
    },
    {
      id: 'honey-3',
      title: 'Kerala Private Houseboat Romance',
      location: 'Alleppey & Munnar',
      duration: '5 Days/4 Nights',
      price: '0.00',
      image: Keralaprivateimg,
      link: '/national/kerala',
      badges: [
        { label: 'Group Tour', bg: 'bg-[#FFE100]', text: 'text-black' },
      ],
    },
  ],
};

const tabs = [
  { id: 'himachal', label: 'Himachal Pradesh Tours', icon: GiCastle },
  { id: 'international', label: 'International Tours', icon: FiCompass },
  { id: 'india', label: 'India Tours', icon: BsBuilding },
  { id: 'honeymoon', label: 'Honeymoon Tours', icon: FaHeart },
];

export default function BestToursSection() {
  const [activeTab, setActiveTab] = useState('himachal');
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 380;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const currentTours = tourCategories[activeTab] || [];

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-[1380px] mx-auto">
        <h2 className="text-3xl sm:text-[34px] md:text-[38px] font-semibold text-[#111827] tracking-tight mb-6 sm:mb-8 text-left">
          Best Tours of Himachal - International - India
        </h2>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-3">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2 rounded-full text-[13.5px] font-medium flex items-center gap-2 transition-all duration-200 cursor-pointer ${isActive
                    ? 'bg-black text-white shadow-sm'
                    : 'bg-white text-gray-900 border border-gray-900 hover:bg-gray-50'
                    }`}
                >
                  <Icon size={16} className={isActive ? 'text-white' : 'text-gray-900'} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
          <div className="hidden sm:flex items-center gap-2 self-end md:self-auto">
            <button
              onClick={() => scroll('left')}
              aria-label="Previous tours"
              className="w-9 h-9 rounded-full bg-[#f26c22] hover:bg-[#d95817] active:scale-95 text-white flex items-center justify-center shadow-sm transition-all duration-200 cursor-pointer"
            >
              <FaChevronLeft size={13} />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Next tours"
              className="w-9 h-9 rounded-full bg-[#f26c22] hover:bg-[#d95817] active:scale-95 text-white flex items-center justify-center shadow-sm transition-all duration-200 cursor-pointer"
            >
              <FaChevronRight size={13} />
            </button>
          </div>
        </div>
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-4 pt-1 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {currentTours.map((tour) => (
            <Link
              key={tour.id}
              href={tour.link}
              className="min-w-[310px] sm:min-w-[360px] md:min-w-[390px] flex-shrink-0 bg-white rounded-2xl border border-gray-300 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 p-3.5 flex flex-col snap-start hover:-translate-y-1 group"
            >
              <div className="relative h-[210px] w-full rounded-xl overflow-hidden mb-4 bg-gray-100">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 right-3 flex flex-col items-end gap-1.5 z-10">
                  {tour.badges.map((badge, idx) => (
                    <span
                      key={idx}
                      className={`${badge.bg} ${badge.text} text-[11px] font-bold px-3 py-0.5 rounded-full shadow-sm`}
                    >
                      {badge.label}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col flex-grow px-1">
                <h3 className="text-[17.5px] font-bold text-[#111827] tracking-tight mb-2 group-hover:text-[#f26c22] transition-colors leading-tight">
                  {tour.title}
                </h3>
                <div className="flex items-center text-[12.5px] text-gray-500 font-medium mb-5 gap-2">
                  <FaMapMarkerAlt className="text-gray-400 shrink-0 text-xs" />
                  <span className="text-gray-600">{tour.location}</span>
                  <span className="text-gray-400 font-bold">↔</span>
                  <span className="text-gray-600">{tour.duration}</span>
                </div>
                <div className="flex items-center justify-between mt-auto mb-4">
                  <div className="bg-[#f26c22] hover:bg-[#d95817] text-white font-bold text-[13px] px-5 py-2.5 rounded-lg shadow-sm flex items-center gap-1.5 transition-all duration-200">
                    <span>Book Now</span>
                    <FaArrowRight className="text-sm" />
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] text-gray-500 font-medium leading-none mb-1">
                      per person
                    </div>
                    <div className="text-[22px] font-black text-[#111827] leading-none tracking-tight">
                      {tour.price}
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-100 pt-3 flex items-center justify-between text-[12px] text-gray-600 font-medium">
                  <div className="flex items-center gap-1.5 hover:text-gray-900 transition-colors">
                    <FaTrophy className="text-gray-500 text-xs" />
                    <span>Experience</span>
                    <BsInfoCircle className="text-gray-400 text-xs" />
                  </div>
                  <div className="flex items-center gap-1.5 hover:text-gray-900 transition-colors">
                    <FiPlusCircle className="text-gray-500 text-xs" />
                    <span>Inclusion</span>
                    <BsInfoCircle className="text-gray-400 text-xs" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex sm:hidden justify-center items-center gap-3 mt-4">
          <button
            onClick={() => scroll('left')}
            aria-label="Previous tours"
            className="w-10 h-10 rounded-full bg-[#f26c22] hover:bg-[#d95817] active:scale-95 text-white flex items-center justify-center shadow-sm transition-all cursor-pointer"
          >
            <FaChevronLeft size={14} />
          </button>
          <button
            onClick={() => scroll('right')}
            aria-label="Next tours"
            className="w-10 h-10 rounded-full bg-[#f26c22] hover:bg-[#d95817] active:scale-95 text-white flex items-center justify-center shadow-sm transition-all cursor-pointer"
          >
            <FaChevronRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
