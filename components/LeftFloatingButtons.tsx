'use client';
import React from 'react';
import { FaWhatsapp, FaCheckCircle } from 'react-icons/fa';

export default function LeftFloatingButtons() {
  const handleGetQuote = () => {
    window.dispatchEvent(new Event('open-enquiry-modal'));
  };
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden sm:flex flex-col gap-0.5">
      <a
        href="https://wa.me/918091660060?text=Hi%20Zoyo%20Trip%20Holidays,%20I%20want%20to%20enquire%20about%20a%20tour%20package."
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-[13px] tracking-wide px-3 py-2.5 shadow-lg transition-all duration-300"
        style={{
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
          transform: 'rotate(180deg)',
          borderRadius: '0 8px 8px 0',
        }}
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp
          className="text-[17px] shrink-0 group-hover:scale-110 transition-transform"
          style={{ transform: 'rotate(180deg)' }}
        />
        Whatsapp
      </a>
      <button
        onClick={handleGetQuote}
        className="group flex items-center gap-2 bg-[#1E6AD4] hover:bg-[#16304f] text-white font-bold text-[13px] tracking-wide px-3 py-2.5 shadow-lg transition-all duration-300 cursor-pointer"
        style={{
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
          transform: 'rotate(180deg)',
          borderRadius: '0 8px 8px 0',
        }}
        title="Get a Free Quote"
        aria-label="Get a Free Quote"
      >
        <FaCheckCircle
          className="text-[14px] shrink-0 text-amber-400 group-hover:scale-110 transition-transform"
          style={{ transform: 'rotate(180deg)' }}
        />
        Get a free Quote
      </button>
    </div>
  );
}
