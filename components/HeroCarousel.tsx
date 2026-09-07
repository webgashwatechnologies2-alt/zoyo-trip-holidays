'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import herobaner1 from '@/public/assets/images/Herobanner/dusherabaner.png';
import herobaner2 from '@/public/assets/images/Herobanner/tamil-nadu.png';
import herobaner3 from '@/public/assets/images/Herobanner/dwbaner.png';
import herobaner4 from '@/public/assets/images/Herobanner/dubaibaner.png';
import herobaner5 from '@/public/assets/images/Herobanner/ganesh-chaturthi.png';
import herobaner6 from '@/public/assets/images/Herobanner/uttarakhand.png';
import herobaner7 from '@/public/assets/images/Herobanner/anant-chaturdashi.png';
import herobaner8 from '@/public/assets/images/Herobanner/himachal-pradesh.png';
import herobaner9 from '@/public/assets/images/Herobanner/navratri.png';
import herobaner10 from '@/public/assets/images/Herobanner/swastya-manthan.png';
import herobaner11 from '@/public/assets/images/Herobanner/thailand.png';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const images = [herobaner1, herobaner2, herobaner3, herobaner4, herobaner5, herobaner6, herobaner7, herobaner8, herobaner9, herobaner10, herobaner11];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  return (
    <>
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#f4b504]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <Image
              src={image}
              alt={`Banner ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        aria-label="Previous Banner"
        className="absolute left-6 top-[45%] w-11 h-11 rounded-full bg-black/30 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-xs transition-all z-20 cursor-pointer shadow-lg hover:scale-105 active:scale-95"
      >
        <FaChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next Banner"
        className="absolute right-6 top-[45%] w-11 h-11 rounded-full bg-black/30 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-xs transition-all z-20 cursor-pointer shadow-lg hover:scale-105 active:scale-95"
      >
        <FaChevronRight className="w-5 h-5" />
      </button>
    </>
  );
}
