'use client';

import React, { useState } from 'react';
import { FaPlay, FaStar, FaRegStar, FaTimes } from 'react-icons/fa';

import Image, { StaticImageData } from 'next/image';
import heroImg from "@/public/assets/images/Herobanner/backgroundimage.png";
import heroImgnew from "@/public/assets/images/Herobanner/chsnewww.webp";
import maldivesimg from "@/public/assets/images/packageimages/Maldivesneww.webp";
import Phuketimg from "@/public/assets/images/packageimages/Phuketimg.webp";
import Hawaiiimg from "@/public/assets/images/packageimages/Hawaiiimg.webp";

interface VideoItem {
  id: string;
  title: string;
  location: string;
  rating: number; // e.g. 3 or 5
  image: StaticImageData | string;
  videoUrl: string;
}

const videoList: VideoItem[] = [
  {
    id: 'maldives',
    title: 'Maldives, Asia',
    location: 'Maldives, Asia',
    rating: 3,
    image: maldivesimg,
    videoUrl: 'https://www.youtube.com/embed/fC4Z2A4UqP8?autoplay=1',
  },
  {
    id: 'phuket',
    title: 'Phuket, Thailand',
    location: 'Phuket, Thailand',
    rating: 5,
    image: Phuketimg,
    videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso?autoplay=1',
  },
  {
    id: 'maui',
    title: 'Maui, Hawaii, USA',
    location: 'Maui, Hawaii, USA',
    rating: 5,
    image: Hawaiiimg,
    videoUrl: 'https://www.youtube.com/embed/8Z1eMy2Foor?autoplay=1',
  },
];

export default function ExploreZoyoSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const openVideo = (url: string) => {
    setActiveVideo(url);
  };

  const closeVideo = () => {
    setActiveVideo(null);
  };

  return (
    <section style={{
      backgroundImage: `url(${heroImg.src})`,
      backgroundSize: '800px auto',
    }} className="relative w-full bg-[#fbf5e8] py-12 md:py-16 overflow-hidden font-sans">
      {/* Subtle World Map Watermark Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07] bg-repeat bg-center" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 ">
        {/* Section Heading */}
        <h2 className="text-[26px] sm:text-[32px] md:text-[36px] font-semibold text-[#111827] tracking-tight mb-6 sm:mb-8 text-left">
          Explore Zoyo Trip Holidays
        </h2>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">

          {/* Left Large Card with Blue Glow Border */}
          <div className="lg:col-span-8 relative rounded-[24px] border-[4px] sm:border-[5px] border-[#6b9dfa] overflow-hidden shadow-[0_10px_30px_rgba(107,157,250,0.15)] flex flex-col justify-end min-h-[380px] sm:min-h-[440px] lg:min-h-[500px]">
            {/* Background Image: Rishikesh Shiva Statue Sunset */}
            <Image
              src={heroImgnew}
              alt="India's Trusted Tour And Destination Management Company"
              fill
              className="object-cover object-center"
            />

            {/* Gradient Overlays for Sunset Mood and Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

            {/* Card Content */}
            <div className="relative z-10 p-6 sm:p-9 md:p-12 max-w-2xl">
              <h3 className="text-2xl sm:text-3xl md:text-[38px] lg:text-[40px] font-semibold text-white leading-[1.18] tracking-tight mb-3 sm:mb-4 drop-shadow-md">
                India&apos;s Trusted Tour And Destination Management Company
              </h3>

              <p className="text-white/90 text-[13.5px] sm:text-[15px] md:text-[16px] font-normal leading-relaxed mb-6 sm:mb-8 max-w-xl drop-shadow-sm">
                Plan your perfect holiday with Zoyo Trip Holidays, India&apos;s most trusted travel and destination management company.
              </p>

              <button
                onClick={() => openVideo('https://www.youtube.com/embed/fC4Z2A4UqP8?autoplay=1')}
                className="bg-[#eb672b] hover:bg-[#d5581e] text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-[12px] font-semibold text-[14px] sm:text-[15px] shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer inline-flex items-center gap-2"
              >
                Explore All Videos
              </button>
            </div>
          </div>

          {/* Right Column: 3 Destination Video Cards */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-4 sm:gap-4.5">
            {videoList.map((item) => (
              <div
                key={item.id}
                onClick={() => openVideo(item.videoUrl)}
                className="group relative rounded-[20px] overflow-hidden shadow-md cursor-pointer h-[155px] sm:h-[160px] lg:h-full min-h-[145px] flex items-end p-4 transition-transform duration-300 hover:shadow-xl"
              >
                {/* Background Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

                {/* Centered Circular Play Button */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 shadow-[0_4px_12px_rgba(0,0,0,0.3)] flex items-center justify-center text-[#2563eb] group-hover:scale-110 group-hover:bg-white transition-all duration-200">
                    <FaPlay className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-0.5" />
                  </div>
                </div>

                {/* Bottom Content: Destination Title + Star Rating */}
                <div className="relative z-10 w-full">
                  <h4 className="text-white font-bold text-[14px] sm:text-[15px] leading-tight mb-1 drop-shadow-sm">
                    {item.title}
                  </h4>

                  {/* Star Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => {
                      const isFilled = i < item.rating;
                      return isFilled ? (
                        <FaStar key={i} className="text-[#f59e0b] w-3.5 h-3.5 drop-shadow-sm" />
                      ) : (
                        <FaRegStar key={i} className="text-gray-300 w-3.5 h-3.5 opacity-70" />
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Video Modal Popup */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fadeIn"
          onClick={closeVideo}
        >
          <div
            className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl aspect-video border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeVideo}
              className="absolute top-4 right-4 z-20 text-white/80 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-2.5 transition"
              aria-label="Close Video"
            >
              <FaTimes className="w-5 h-5" />
            </button>

            {/* Video Frame */}
            <iframe
              src={activeVideo}
              title="Travel Video"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
