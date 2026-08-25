'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import herobaner1 from '@/public/assets/images/Herobanner/herobnaer1.webp';
import herobaner2 from '@/public/assets/images/Herobanner/herobanner2.webp';
import herobaner3 from '@/public/assets/images/Herobanner/herobanner3.webp';

const images = [herobaner1, herobaner2, herobaner3];

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
            style={{
              backgroundImage: `url(${image.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat'
            }}
          >
          </div>
        ))}
      </div>

      <button onClick={prevSlide} className="absolute left-6 top-[45%] text-white/80 hover:text-white transition z-20 cursor-pointer">
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" /></svg>
      </button>
      <button onClick={nextSlide} className="absolute right-6 top-[45%] text-white/80 hover:text-white transition z-20 cursor-pointer">
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" /></svg>
      </button>
    </>
  );
}
