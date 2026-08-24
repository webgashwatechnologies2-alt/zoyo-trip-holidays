'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  FaTags,
  FaShieldAlt,
  FaStar,
  FaUsers,
  FaGlobeAsia,
  FaAward,
  FaPhoneAlt,
  FaEnvelope,
  FaCheckCircle,
  FaHeart,
  FaPlane,
  FaHandshake,
  FaLightbulb,
  FaHeadset,
  FaHotel,
  FaCar,
  FaHelicopter,
  FaCompass,
  FaQuoteRight,
  FaChevronDown,
  FaWhatsapp,
  FaArrowRight,
  FaMountain,
} from 'react-icons/fa';
import { BsArrowRight, BsCheckLg, BsStars } from 'react-icons/bs';
import { HiOutlineSparkles } from 'react-icons/hi2';

import irctc from '@/public/assets/images/partners/IRCTC_Partner.webp';
import cleartrip from '@/public/assets/images/partners/cleartrip_Partner.webp';
import expedia from '@/public/assets/images/partners/Expedia_Partner.webp';
import booking from '@/public/assets/images/partners/booking.com_partner.webp';
import makemytrip from '@/public/assets/images/partners/MakeMyTrip_Partner.webp';

import aboutHero from "@/public/assets/images/packageimages/andeman.webp";
import aboutsecimage from "@/public/assets/images/packageimages/dubai.webp";
import aboutsectwoimage from "@/public/assets/images/packageimages/Shimla-During-Monsoon.webp";


/* ─── Animated Counter Hook ─── */
function useCountUp(target: number, duration = 2200, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}
function StatCard({
  value,
  suffix,
  label,
  sublabel,
  icon: Icon,
  gradient,
  started,
}: {
  value: number;
  suffix: string;
  label: string;
  sublabel?: string;
  icon: React.ElementType;
  gradient: string;
  started: boolean;
}) {
  const count = useCountUp(value, 2000, started);
  return (
    <div className="relative group bg-white/5 backdrop-blur-md border border-#F26C22/20 border-[#f26c22]/50 rounded-3xl p-6 sm:p-8 transition-all duration-500 hover:-translate-y-2 bg-white/[0.08] hover:shadow-[0_20px_50px_rgba(242,108,34,0.15)] flex flex-col items-center text-center">
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
        style={{ background: gradient }}
      >
        <Icon className="text-white text-2xl" />
      </div>
      <div className="text-[36px] sm:text-[44px] text-black leading-none tracking-tight">
        {count.toLocaleString()}
        <span className="text-[#f26c22] font-black">{suffix}</span>
      </div>
      <div className="text-[16px] text-black font-bold mt-2.5">{label}</div>
      {sublabel && <div className="text-[13px] text-gray-400 font-normal mt-1">{sublabel}</div>}
      <div className="w-12 h-1 bg-[#f26c22]/40 rounded-full mt-4 group-hover:w-20 group-hover:bg-[#f26c22] transition-all duration-300" />
    </div>
  );
}
const values = [
  {
    icon: FaHeart,
    color: '#ef4444',
    gradient: 'linear-gradient(135deg, #ef4444, #f87171)',
    title: 'Passion for Unforgettable Travel',
    desc: 'Every itinerary is thoughtfully curated with genuine love for exploration, cultural immersion, and creating memories you will cherish forever.',
    highlight: 'Handcrafted Itineraries',
  },
  {
    icon: FaShieldAlt,
    color: '#1E6AD4',
    gradient: 'linear-gradient(135deg, #1E6AD4, #3b82f6)',
    title: 'Absolute Trust & Transparency',
    desc: '100% transparent pricing with zero hidden fees. What you see is what you get, backed by authorized booking vouchers and trusted ground partners.',
    highlight: 'No Hidden Costs',
  },
  {
    icon: FaHeadset,
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #10b981, #34d399)',
    title: '24/7 On-Tour Dedicated Support',
    desc: 'Your peace of mind is paramount. From departure to your safe return home, our trip managers are always a phone call or WhatsApp message away.',
    highlight: 'Round-The-Clock Care',
  },
  {
    icon: FaLightbulb,
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f26c22, #f59e0b)',
    title: 'Boutique Service & Innovation',
    desc: 'We combine cutting-edge travel technology with deep local expertise in Himachal, Kashmir, Kerala, Dubai, Bali, and across the globe.',
    highlight: 'Tailored Just For You',
  },
];
const features = [
  {
    icon: FaCompass,
    title: '100% Customized Tour Packages',
    desc: 'Tailor-made itineraries designed around your preferences, budget, pace, and travel dates for families, couples, and groups.',
    badge: 'Personalized',
  },
  {
    icon: FaTags,
    title: 'Direct Contractor Best Price Guarantee',
    desc: 'Exclusive direct contracts with premium hotels, airlines, and local transport operators pass maximum savings directly to you.',
    badge: 'Best Value',
  },
  {
    icon: FaHotel,
    title: 'Handpicked Audited Accommodations',
    desc: 'Stay only at thoroughly verified 3-Star, 4-Star, 5-Star luxury hotels and boutique heritage resorts with guaranteed cleanliness.',
    badge: 'Premium Stays',
  },
  {
    icon: FaCar,
    title: 'Sanitized Cabs & Certified Chauffeurs',
    desc: 'Private dedicated vehicles with experienced mountain drivers who double up as polite, knowledgeable local destination guides.',
    badge: 'Safe Travel',
  },
  {
    icon: FaHelicopter,
    title: 'Exclusive Helicopter Rides & Charters',
    desc: 'Experience breathtaking aerial views of Manali, Rohtang, Kedarnath, and special pilgrimage & luxury charter experiences.',
    badge: 'VIP Experience',
  },
  {
    icon: FaAward,
    title: 'Award-Winning Travel Expertise',
    desc: 'Recognized travel management with 5+ years of customer acclaim, 24,000+ delighted guests, and a 4.9/5 satisfaction rating.',
    badge: 'Certified DMC',
  },
];
const team = [
  {
    name: 'Rajesh Sharma',
    role: 'Founder & Managing Director',
    specialty: 'Himalayan & Luxury Expeditions',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    quote: 'Travel is not just visiting new places; it is discovering new perspectives and creating timeless memories.',
  },
  {
    name: 'Priya Mehta',
    role: 'Head of International Tours',
    specialty: 'Dubai, Bali, Maldives & Europe',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
    quote: 'Every international journey should feel effortless and magical from the moment you take off.',
  },
  {
    name: 'Amit Verma',
    role: 'Senior Travel Operations Lead',
    specialty: 'Logistics, Fleets & Ground Management',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop',
    quote: 'Flawless execution is the backbone of an unforgettable trip. We treat every detail with precision.',
  },
  {
    name: 'Sneha Kapoor',
    role: 'Guest Relations & Concierge Manager',
    specialty: '24/7 Traveler Care & VIP Services',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop',
    quote: 'Our travelers are family. Seeing their joyous smiles at the end of every tour is our greatest success.',
  },
];
const timeline = [
  {
    year: '2019',
    badge: 'Foundation',
    title: 'Zoyo Trip Holidays Born in the Himalayas',
    desc: 'Founded with a passion for authentic mountain journeys in Bhuntar (Kullu-Manali), Himachal Pradesh, serving domestic adventurers.',
    icon: FaMountain,
  },
  {
    year: '2020',
    badge: 'Digital Era',
    title: 'Seamless Digital Booking Platform',
    desc: 'Launched our modern online portal offering custom itinerary builders, instant quote consultations, and virtual travel planning.',
    icon: FaGlobeAsia,
  },
  {
    year: '2021',
    badge: 'First Milestone',
    title: '5,000+ Happy Explorers & 5-Star Reviews',
    desc: 'Crossed 5,000 satisfied guests with stellar 5.0 ratings on TripAdvisor, Google, and major travel review platforms.',
    icon: FaStar,
  },
  {
    year: '2022',
    badge: 'Global Expansion',
    title: 'International Destinations Portfolio',
    desc: 'Expanded our operations to premier worldwide hot-spots including Dubai, Maldives, Singapore, Bali, Thailand, and Mauritius.',
    icon: FaPlane,
  },
  {
    year: '2023',
    badge: 'Industry Honor',
    title: 'Best Emerging Travel Agency Award',
    desc: 'Honored with industry recognition for exceptional hospitality, personalized service, and innovative tour packaging.',
    icon: FaAward,
  },
  {
    year: '2024-Present',
    badge: 'Market Leader',
    title: '24,000+ Journeys & Helicopter Experiences',
    desc: 'Celebrating over 24,000 smiling travelers, luxury helicopter packages, and expanding corporate & family holiday wings.',
    icon: FaHeart,
  },
];
const faqs = [
  {
    q: 'How do I customize my holiday package with Zoyo Trip Holidays?',
    a: 'Customizing is simple! You can click "Get Quote", contact us on WhatsApp (+91 8091660060), or fill out our contact form. Our travel specialists will consult with you on your preferences, budget, duration, and hotel choices to craft a 100% bespoke itinerary within hours.',
  },
  {
    q: 'Are flight tickets, hotels, and cabs included in the package?',
    a: 'Yes, absolutely! We provide all-inclusive holiday packages that cover flights/trains, handpicked 3/4/5-star hotel accommodations, daily breakfast/meals, private sanitized sightseeing vehicles with chauffeurs, permit charges, and optional helicopter joyrides.',
  },
  {
    q: 'Is there any 24/7 support available while I am traveling on tour?',
    a: 'Yes, 100%. Every booking is assigned a dedicated Tour Manager who remains in constant touch with you via phone and WhatsApp throughout your trip to assist with hotel check-ins, route recommendations, and any emergency assistance.',
  },
  {
    q: 'What is your booking confirmation and payment process?',
    a: 'You can reserve your tour with a small initial token advance. We accept UPI, Credit/Debit Cards, Net Banking, and Bank Transfers with instant GST invoices and official booking vouchers provided immediately.',
  },
  {
    q: 'Can Zoyo Trip arrange helicopter rides and special romantic setups?',
    a: 'Yes! We specialize in luxury honeymoon setups (candlelight dinners, flower bed decorations, cakes), helicopter joyrides in Manali & Kedarnath, and special adventure activities like paragliding, river rafting, and scuba diving.',
  },
];
export default function AboutPage() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsStarted, setStatsStarted] = useState(false);
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'story'>('story');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsStarted(true);
      },
      { threshold: 0.25 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <main className="flex flex-col w-full overflow-x-hidden bg-white text-gray-800">
      <section className="relative w-full min-h-[480px] md:min-h-[560px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={aboutHero}
            alt="Zoyo Trip Holidays - About Us"
            fill
            className="w-full h-full object-cover scale-105 animate-pulse-slow"
            style={{ filter: "brightness(0.70)" }}
            priority
          />
          <div className="absolute inset-0" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#f26c22]/25 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full bg-[#1E6AD4]/25 blur-[120px] pointer-events-none" />
        </div>
        <div className="relative z-10 max-w-[1240px] mx-auto px-6 py-16 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-white text-[13px] font-medium mb-6 shadow-lg">
            <Link href="/" className="hover:text-[#f26c22] transition-colors flex items-center gap-1.5">
              <span>Home</span>
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-[#f26c22] font-semibold flex items-center gap-1">
              <HiOutlineSparkles className="text-sm" /> About Zoyo Trip Holidays
            </span>
          </div>
          <h1 className="text-[36px] sm:text-[48px] md:text-[50px] text-white leading-[1.12] tracking-tight max-w-[950px] mb-6">
            Crafting Extraordinary Journeys,{' '}
            <span className="bg-gradient-to-r from-[#f26c22] via-[#ffa347] to-[#ffd000] bg-clip-text text-transparent">
              Creating Lifelong Memories
            </span>
          </h1>
          <p className="text-[16px] sm:text-[18px] md:text-[20px] text-gray-200/90 max-w-[760px] mx-auto leading-relaxed font-light mb-10">
            India&apos;s premier Destination Management Company born in Himachal Pradesh — delivering personalized domestic and international holiday experiences with 5-star trust.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/national"
              className="bg-gradient-to-r from-[#f26c22] to-[#e0560e] hover:from-[#e0560e] hover:to-[#c44705] text-white px-8 py-4 rounded-full font-bold text-[15px] transition-all duration-300 hover:scale-105 shadow-[0_10px_30px_rgba(242,108,34,0.4)] flex items-center gap-2.5"
            >
              <span>Explore Top Destinations</span>
              <FaArrowRight className="text-xs" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-[15px] transition-all duration-300 hover:scale-105 shadow-md flex items-center gap-2.5"
            >
              <FaPhoneAlt className="text-xs text-[#f26c22]" />
              <span>Talk to Travel Specialist</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="relative w-full bg-[#fcf9f5] py-24 px-6 sm:px-10 lg:px-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage: `radial-gradient(circle, #e3d5c5 1.2px, transparent 1.2px)`,
            backgroundSize: '32px 32px',
          }}
        />
        <div className="relative z-10 max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[480px] h-[460px] sm:h-[540px]">
                <div className="absolute top-0 left-0 w-[78%] h-[82%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-10 group">
                  <Image
                    src={aboutsecimage}
                    alt="Zoyo Travelers Experience"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="bg-[#f26c22] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Authentic Journeys
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 w-[62%] h-[60%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-20 group">
                  <Image
                    src={aboutsectwoimage}
                    alt="Mountain Landscape Tour"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="absolute top-1/3 -right-3 sm:-right-6 z-30 bg-white rounded-2xl p-4 shadow-[0_15px_35px_rgba(0,0,0,0.15)] border border-gray-100 flex items-center gap-3.5 animate-bounce-slow">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f26c22] to-[#ffa347] flex items-center justify-center text-white text-xl shadow-md">
                    <FaAward />
                  </div>
                  <div>
                    <div className="text-[20px] font-black text-gray-900 leading-none">5+ Years</div>
                    <div className="text-[12px] text-gray-500 font-semibold mt-1">Trusted DMC Agency</div>
                  </div>
                </div>
                <div className="absolute -bottom-4 left-6 z-30 bg-white rounded-2xl py-3 px-5 shadow-[0_15px_35px_rgba(0,0,0,0.15)] border border-gray-100 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#00b67a] flex items-center justify-center text-white text-sm">
                    <FaStar />
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-gray-900">4.9 / 5.0 Rating</div>
                    <div className="text-[11px] text-gray-500">24,000+ Traveler Reviews</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 bg-[#f26c22]/10 text-[#f26c22] text-[13px] font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest w-fit">
                <BsStars className="text-sm" /> Who We Are
              </div>
              <h2 className="text-[32px] sm:text-[30px] text-gray-900 leading-[1.18] tracking-tight mb-6">
                Your Trusted Travel Partner for Seamless, Authentic &amp; Luxury Vacations
              </h2>
              <p className="text-gray-600 text-[15.5px] leading-[1.8] mb-6">
                Welcome to <strong className="text-gray-900 font-bold">Zoyo Trip Holidays</strong>. Headquartered in the picturesque heart of Sarabai, Bhuntar (Himachal Pradesh), we are a premier, government-recognized Destination Management Company (DMC) crafting bespoke travel experiences across India and global hot-spots.
              </p>
              <div className="flex items-center gap-2 p-1.5 bg-gray-200/70 rounded-2xl mb-6 w-fit">
                <button
                  onClick={() => setActiveTab('story')}
                  className={`px-5 py-2 rounded-xl text-[13.5px] font-bold transition-all duration-300 ${activeTab === 'story'
                      ? 'bg-white text-[#f26c22] shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                    }`}
                >
                  Our Story
                </button>
                <button
                  onClick={() => setActiveTab('mission')}
                  className={`px-5 py-2 rounded-xl text-[13.5px] font-bold transition-all duration-300 ${activeTab === 'mission'
                      ? 'bg-white text-[#f26c22] shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                    }`}
                >
                  Our Mission
                </button>
                <button
                  onClick={() => setActiveTab('vision')}
                  className={`px-5 py-2 rounded-xl text-[13.5px] font-bold transition-all duration-300 ${activeTab === 'vision'
                      ? 'bg-white text-[#f26c22] shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                    }`}
                >
                  Our Vision
                </button>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.05)] mb-8">
                {activeTab === 'story' && (
                  <div className="text-[14.5px] text-gray-600 leading-relaxed">
                    <p className="mb-3">
                      Founded by passionate Himalayan travel enthusiasts, Zoyo Trip Holidays started with a vision to redefine travel planning. We eliminated rigid cookie-cutter packages and introduced true customization where every hotel, cab, route, and activity is curated specifically for your dream holiday.
                    </p>
                  </div>
                )}
                {activeTab === 'mission' && (
                  <div className="text-[14.5px] text-gray-600 leading-relaxed">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-[#f26c22]/15 text-[#f26c22] flex items-center justify-center shrink-0 mt-0.5">
                        <BsCheckLg />
                      </div>
                      <p>
                        To make world-class travel accessible, hassle-free, and delightfully memorable by providing transparent pricing, personalized itineraries, and 24/7 concierge support.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#1E6AD4]/15 text-[#1E6AD4] flex items-center justify-center shrink-0 mt-0.5">
                        <BsCheckLg />
                      </div>
                      <p>
                        To empower local tourism communities across Himachal Pradesh, Kashmir, and pan-India while maintaining high ecological and hospitality standards.
                      </p>
                    </div>
                  </div>
                )}
                {activeTab === 'vision' && (
                  <div className="text-[14.5px] text-gray-600 leading-relaxed">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/15 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                        <BsCheckLg />
                      </div>
                      <p>
                        To become India&apos;s most loved and trusted boutique travel agency, acclaimed globally for customer-centric itineraries, innovative digital tools, and unmatched on-ground hospitality.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/15 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                        <BsCheckLg />
                      </div>
                      <p>
                        To continuously expand our global portfolio across 100+ destinations while ensuring every single guest returns home with unforgettable memories and a smiling heart.
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                {[
                  '100% Tailored Custom Itineraries',
                  'Zero Hidden Charges & Transparent Bills',
                  'Pan-India Ground Fleet & Guides',
                  '24/7 Live On-Tour Concierge',
                  'Exclusive Helicopter & Luxury Charters',
                  'Official IRCTC & Aviation Partners',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-[14px] text-gray-800 font-semibold">
                    <div className="w-5 h-5 rounded-full bg-[#f26c22]/15 text-[#f26c22] flex items-center justify-center text-xs shrink-0">
                      <FaCheckCircle />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <Link
                  href="/contact"
                  className="bg-[#111827] hover:bg-[#1f2937] text-white px-7 py-3.5 rounded-full font-bold text-[14px] transition-all hover:scale-105 shadow-md flex items-center gap-2"
                >
                  <span>Plan Your Journey With Us</span>
                  <BsArrowRight />
                </Link>
                <a
                  href="https://wa.me/918091660060"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3.5 rounded-full font-bold text-[14px] transition-all hover:scale-105 shadow-md flex items-center gap-2"
                >
                  <FaWhatsapp className="text-lg" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section ref={statsRef} className="relative w-full bg-[#FFF2E2] py-24 px-6 sm:px-10 lg:px-20 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#f26c22]/20 via-[#ffa347]/15 to-[#1E6AD4]/20 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-32 left-1/4 w-[500px] h-[300px] bg-[#1E6AD4]/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="relative z-10 max-w-[1240px] mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#f26c22]/20 border border-[#f26c22]/30 text-[#f26c22] text-[12px] font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
              <FaStar className="text-xs" /> Proven Milestones
            </div>
            <h2 className="text-[32px] sm:text-[46px] text-black leading-tight">
              Numbers That Speak of Our Commitment
            </h2>
            <p className="text-black-300 text-[15.5px] mt-4 max-w-xl mx-auto leading-relaxed">
              Every statistic represents a joyful family vacation, a dreamy honeymoon, and a bond of trust forged over years of excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <StatCard
              value={24000}
              suffix="+"
              label="Happy Travelers"
              sublabel="Smiling guests across all packages"
              icon={FaUsers}
              gradient="linear-gradient(135deg,#f26c22,#ff8f3d)"
              started={statsStarted}
            />
            <StatCard
              value={50}
              suffix="+"
              label="Destinations Worldwide"
              sublabel="Pan-India & International Tours"
              icon={FaGlobeAsia}
              gradient="linear-gradient(135deg,#1E6AD4,#3b82f6)"
              started={statsStarted}
            />
            <StatCard
              value={5}
              suffix="+"
              label="Years of Excellence"
              sublabel="Registered boutique DMC agency"
              icon={FaAward}
              gradient="linear-gradient(135deg,#10b981,#34d399)"
              started={statsStarted}
            />
            <StatCard
              value={99}
              suffix="%"
              label="Guest Satisfaction"
              sublabel="Top-tier TripAdvisor & Google ratings"
              icon={FaStar}
              gradient="linear-gradient(135deg,#8b5cf6,#a78bfa)"
              started={statsStarted}
            />
          </div>
        </div>
      </section>
      <section className="w-full bg-white py-24 px-6 sm:px-10 lg:px-20 relative">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#f26c22]/10 text-[#f26c22] text-[12px] font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
              <FaShieldAlt /> The Zoyo Advantage
            </div>
            <h2 className="text-[32px] sm:text-[44px] text-gray-900 leading-tight">
              Why Discerning Travelers Choose Zoyo Trip
            </h2>
            <p className="text-gray-500 text-[15.5px] mt-4 max-w-xl mx-auto leading-relaxed">
              We go beyond standard flight and hotel bookings. We curate seamless, stress-free travel memories with perfection at every turn.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-[#fcf9f5] border border-gray-100 hover:border-[#f26c22]/40 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(242,108,34,0.1)] overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-gray-100 group-hover:bg-[#f26c22] text-[#f26c22] group-hover:text-white flex items-center justify-center text-2xl transition-all duration-300 group-hover:rotate-3">
                        <Icon />
                      </div>
                      <span className="text-[11.5px] font-bold text-[#f26c22] bg-[#f26c22]/10 px-3 py-1 rounded-full uppercase tracking-wider">
                        {item.badge}
                      </span>
                    </div>
                    <h3 className="text-[19px] font-bold text-gray-900 mb-3 group-hover:text-[#f26c22] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[14px] text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bottom Accent */}
                  <div className="mt-6 pt-4 border-t border-gray-200/60 flex items-center text-[13px] font-bold text-[#1E6AD4] group-hover:text-[#f26c22] transition-colors gap-1.5">
                    <span>Learn more</span>
                    <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="w-full bg-[#f8fafc] py-24 px-6 sm:px-10 lg:px-20 border-y border-gray-200/60">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#f26c22]/10 text-[#f26c22] text-[12px] font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
              <FaHeart /> What Guides Us
            </div>
            <h2 className="text-[32px] sm:text-[44px] text-gray-900 leading-tight">
              Our Core Pillars of Service
            </h2>
            <p className="text-gray-500 text-[15.5px] mt-4 max-w-xl mx-auto">
              Our values are woven into every itinerary we design and every conversation we have with our travelers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="group relative bg-white border border-gray-200/80 rounded-3xl p-7 shadow-[0_5px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.09)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300"
                      style={{ background: v.gradient }}
                    >
                      <Icon className="text-white text-2xl" />
                    </div>
                    <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-[#f26c22] bg-[#f26c22]/10 px-2.5 py-0.5 rounded-full mb-2.5">
                      {v.highlight}
                    </span>
                    <h3 className="text-[18px] font-bold text-gray-900 mb-3">{v.title}</h3>
                    <p className="text-[13.5px] text-gray-500 leading-relaxed">{v.desc}</p>
                  </div>

                  <div className="w-full h-1 bg-gray-100 rounded-full mt-6 overflow-hidden">
                    <div
                      className="h-full w-0 group-hover:w-full transition-all duration-500 rounded-full"
                      style={{ background: v.color }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="relative w-full bg-[#fcf9f5] py-24 px-6 sm:px-10 lg:px-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage: `radial-gradient(circle, #e3d5c5 1.2px, transparent 1.2px)`,
            backgroundSize: '32px 32px',
          }}
        />
        <div className="relative z-10 max-w-[1040px] mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#f26c22]/10 text-[#f26c22] text-[12px] font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
              <FaPlane /> Our Evolution
            </div>
            <h2 className="text-[32px] sm:text-[44px] text-gray-900 leading-tight">
              Milestones on Our Journey
            </h2>
            <p className="text-gray-500 text-[15.5px] mt-4 max-w-lg mx-auto">
              From a boutique mountain travel desk in Himachal to a recognized national &amp; international DMC.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[3px] bg-gradient-to-b from-[#f26c22] via-[#f59e0b] to-[#1E6AD4] hidden md:block rounded-full shadow-sm" />
            <div className="flex flex-col gap-12">
              {timeline.map((item, i) => {
                const isLeft = i % 2 === 0;
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className={`relative flex flex-col md:flex-row items-center gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                      }`}
                  >
                    <div className="w-full md:w-[calc(50%-44px)] bg-white rounded-3xl p-7 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.11)] transition-all duration-300 hover:-translate-y-1.5 border border-gray-100 group">
                      <div className="flex items-center justify-between mb-3">
                        <span className="bg-[#f26c22] text-white text-[12px] font-black px-3.5 py-1 rounded-full shadow-sm">
                          {item.year}
                        </span>
                        <span className="text-[12px] font-bold text-gray-400 uppercase tracking-wider">
                          {item.badge}
                        </span>
                      </div>
                      <h3 className="text-[18px] font-bold text-gray-900 mb-2 group-hover:text-[#f26c22] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[13.5px] text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                    <div className="hidden md:flex w-[56px] h-[56px] shrink-0 rounded-2xl bg-white border-3 border-[#f26c22] items-center justify-center shadow-lg z-10 text-[#f26c22] text-xl transform hover:scale-115 transition-transform duration-300">
                      <Icon />
                    </div>
                    <div className="hidden md:block w-[calc(50%-44px)]" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full py-24 px-6 sm:px-10 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=2000&auto=format&fit=crop"
          alt="Ready for your next trip"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.22)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f26c22]/100" />
        <div className="relative z-10 max-w-[880px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 text-white text-[12px] font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
            <FaEnvelope /> Let&apos;s Plan Your Dream Trip
          </div>
          <h2 className="text-[34px] sm:text-[48px] md:text-[54px] text-white leading-tight mb-6">
            Ready to Experience the Magic of Travel?
          </h2>
          <p className="text-white/90 text-[16px] sm:text-[18px] mb-10 max-w-2xl mx-auto leading-relaxed">
            Get in touch with our certified holiday specialists today for a free custom itinerary, exclusive deals, and zero-compromise memories.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-white text-gray-900 hover:bg-[#f26c22] hover:text-white px-9 py-4 rounded-full font-bold text-[15px] transition-all duration-300 hover:scale-105 shadow-2xl flex items-center gap-2.5"
            >
              <FaEnvelope className="text-[#f26c22] group-hover:text-white" />
              <span>Request a Free Quote</span>
            </Link>
            <a
              href="tel:+918091660060"
              className="bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/40 text-white px-9 py-4 rounded-full font-bold text-[15px] transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2.5"
            >
              <FaPhoneAlt className="text-xs text-[#f26c22]" />
              <span>Call (+91) 8091660060</span>
            </a>
            <a
              href="https://wa.me/918091660060"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba59] text-white px-8 py-4 rounded-full font-bold text-[15px] transition-all duration-300 hover:scale-105 shadow-xl flex items-center gap-2.5"
            >
              <FaWhatsapp className="text-lg" />
              <span>Instant WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#f8fafc] py-24 px-6 sm:px-10 lg:px-20 border-t border-gray-200/60">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#f26c22]/10 text-[#f26c22] text-[12px] font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
              <FaLightbulb /> Got Questions?
            </div>
            <h2 className="text-[32px] sm:text-[44px] font-black text-gray-900 leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-[15.5px] mt-4 max-w-lg mx-auto">
              Everything you need to know about planning, booking, and traveling with Zoyo Trip Holidays.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden shadow-sm ${isOpen ? 'border-[#f26c22] shadow-md ring-1 ring-[#f26c22]/20' : 'border-gray-200 hover:border-gray-300'
                    }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-[16px] text-gray-900 hover:text-[#f26c22] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'bg-[#f26c22] text-white rotate-180' : 'bg-gray-100 text-gray-500'
                        }`}
                    >
                      <FaChevronDown className="text-xs" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-[14.5px] text-gray-600 leading-relaxed border-t border-gray-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="w-full px-6 sm:px-10 lg:px-20 py-20 bg-white text-center">
        <div className="max-w-[1240px] mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#1E6AD4]/10 text-[#1E6AD4] text-[12px] font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-widest">
            <FaHandshake /> Industry Affiliations
          </div>
          <h2 className="text-[28px] sm:text-[46px] text-gray-900 mb-3">
            Our Trusted Airline &amp; Travel Partners
          </h2>
          <p className="text-gray-500 text-[14.5px] mb-12 max-w-lg mx-auto">
            We collaborate with industry pioneers and global hospitality giants to deliver unforgettable value and reliability.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-10 sm:gap-16">
            {[
              { src: irctc, alt: 'IRCTC Authorized' },
              { src: cleartrip, alt: 'Cleartrip Partner' },
              { src: expedia, alt: 'Expedia Partner' },
              { src: booking, alt: 'Booking.com Partner' },
              { src: makemytrip, alt: 'MakeMyTrip Partner' },
            ].map((p) => (
              <div
                key={p.alt}
                className="p-4 rounded-2xl bg-[#fcf9f5] border border-gray-100 hover:border-[#f26c22]/30 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center hover:scale-105"
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  className="h-10 sm:h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </main>
  );
}
