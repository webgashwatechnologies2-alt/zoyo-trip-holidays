'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  FaMapMarkerAlt,
  FaStar,
  FaPhoneAlt,
  FaWhatsapp,
  FaClock,
  FaCheckCircle,
  FaGlobeAmericas,
  FaShieldAlt,
  FaHotel,
  FaCar,
  FaPassport,
} from 'react-icons/fa';
import { BsArrowRight, BsStars } from 'react-icons/bs';
import { allDestinations, DestinationData } from '@/data/allDestinations';

export default function InternationalDestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug.toLowerCase();

  let dest: DestinationData | undefined = allDestinations[slug];

  // Generic fallback for any other international destination in list
  if (!dest) {
    const formattedName = slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
    dest = {
      id: `dest-${slug}`,
      slug: slug,
      name: `${formattedName} International Holiday`,
      type: 'international',
      region: 'International',
      tagline: `Discover the luxury, iconic landmarks, and world-class experiences of ${formattedName}.`,
      description: `Experience handcrafted international tour packages to ${formattedName} with 4-star/5-star luxury hotels, guided tours, and complete visa and travel concierge assistance by Zoyo Trip Holidays.`,
      heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop',
      bestTime: 'October to May',
      packagesCount: 1,
      packages: [
        {
          id: `${slug}-1`,
          slug: `${slug}-luxury-discovery`,
          title: `${formattedName} Luxury Discovery & Highlights Tour`,
          subtitle: `Iconic city tours, 4/5-star deluxe stays, sightseeing transfers & guided excursions in ${formattedName}`,
          location: formattedName,
          duration: '5 Days / 4 Nights',
          price: '₹34,999',
          originalPrice: '₹44,999',
          rating: 4.9,
          reviewsCount: 310,
          category: 'Popular',
          heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop',
          gallery: ['https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop'],
          overview: `Embark on an unforgettable international vacation to ${formattedName}. Enjoy handpicked luxury accommodations, daily breakfast, private sightseeing transfers, and 24/7 dedicated support.`,
          highlights: [
            `Top iconic sights and cultural landmarks of ${formattedName}`,
            'Luxury 4-Star/5-Star verified central hotels',
            'Comfortable private AC tourist transportation',
            'Complimentary visa documentation & travel insurance assistance',
          ],
          inclusions: [
            '4 Nights stay in 4-Star luxury hotel',
            'Daily Gourmet Buffet Breakfast',
            'Private airport and sightseeing transfers',
            'All entrance passes as per itinerary',
          ],
          exclusions: ['International flight tickets', 'Visa stamping fees', 'Personal expenses'],
          hotelType: '4-Star / 5-Star City Hotels',
          pickupDrop: `International Airport in ${formattedName}`,
          itinerary: [
            {
              day: 1,
              title: `Arrival in ${formattedName} & Welcome`,
              description: `Arrive at the international airport. Greeted by our concierge and transfer to your luxury hotel.`,
              activities: ['VIP Airport Transfer', 'Hotel Check-in', 'Evening Skyline View'],
              meals: 'Dinner',
              stay: `4-Star Hotel, ${formattedName}`,
            },
            {
              day: 2,
              title: 'City Highlights & Famous Landmarks Tour',
              description: `Full day guided city tour exploring premier landmarks, architectural marvels, and museums.`,
              activities: ['Iconic Landmarks Tour', 'Shopping Arcade Walk'],
              meals: 'Breakfast',
              stay: `4-Star Hotel, ${formattedName}`,
            },
            {
              day: 3,
              title: 'Scenic Excursion & Adventure Experience',
              description: `Day trip to top tourist attractions and scenic natural viewpoints.`,
              activities: ['Scenic Excursion', 'Theme Park / Cruise Experience'],
              meals: 'Breakfast & Dinner',
              stay: `4-Star Hotel, ${formattedName}`,
            },
            {
              day: 4,
              title: 'Shopping & Cultural Exploration',
              description: `Free time for world-class duty free shopping, cafe hopping, and cultural immersion.`,
              activities: ['Luxury Mall Shopping', 'Cultural Street Market'],
              meals: 'Breakfast',
              stay: `4-Star Hotel, ${formattedName}`,
            },
            {
              day: 5,
              title: 'Departure Transfer',
              description: `Breakfast, check out, and transfer to the international airport for your flight home.`,
              activities: ['Hotel Check-out', 'Airport Transfer'],
              meals: 'Breakfast',
              stay: 'End of Tour',
            },
          ],
        },
      ],
    };
  }

  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredPackages = selectedCategory === 'All'
    ? dest.packages
    : dest.packages.filter((pkg) => pkg.category === selectedCategory);

  return (
    <main className="flex flex-col w-full overflow-x-hidden bg-[#fcf9f5] min-h-screen text-gray-800">
      
      {/* ─── 1. HERO BANNER ─── */}
      <section className="relative w-full min-h-[440px] md:min-h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src={dest.heroImage}
          alt={dest.name}
          className="absolute inset-0 w-full h-full object-cover scale-105"
          style={{ filter: 'brightness(0.38)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1329] via-black/30 to-black/65" />
        
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-white text-[12.5px] font-medium mb-4 shadow">
            <Link href="/" className="hover:text-[#f26c22] transition">Home</Link>
            <span>/</span>
            <Link href="/international" className="hover:text-[#f26c22] transition">International Destinations</Link>
            <span>/</span>
            <span className="text-[#f26c22] font-semibold flex items-center gap-1">
              <FaGlobeAmericas className="text-xs" /> {dest.name}
            </span>
          </div>

          <h1 className="text-[34px] sm:text-[46px] md:text-[54px] font-black text-white leading-[1.14] tracking-tight mb-4">
            {dest.name}{' '}
            <span className="bg-gradient-to-r from-[#f26c22] via-[#ffa347] to-[#ffd000] bg-clip-text text-transparent">
              Tour Packages
            </span>
          </h1>

          <p className="text-gray-200 text-[15px] sm:text-[17px] max-w-2xl mx-auto font-light leading-relaxed mb-8">
            {dest.tagline}
          </p>

          <div className="flex items-center justify-center gap-3 sm:gap-6 flex-wrap text-white text-xs sm:text-sm font-semibold">
            <span className="bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5">
              <FaCheckCircle className="text-[#f26c22]" /> {dest.packages.length} International {dest.packages.length === 1 ? 'Package' : 'Packages'}
            </span>
            <span className="bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5">
              <FaPassport className="text-amber-400" /> Visa &amp; Insurance Support Included
            </span>
            <span className="bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5">
              <FaHotel className="text-emerald-400" /> 4★/5★ Verified Luxury Resorts
            </span>
          </div>
        </div>
      </section>

      {/* ─── 2. PACKAGES GRID ─── */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 lg:px-16 max-w-[1400px] mx-auto w-full">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-b border-gray-200/80 pb-8">
          <div>
            <span className="text-[12px] font-bold text-[#f26c22] uppercase tracking-widest bg-[#f26c22]/10 px-3.5 py-1 rounded-full inline-block mb-3">
              <BsStars className="inline mr-1" /> World-Class Holidays
            </span>
            <h2 className="text-[28px] sm:text-[36px] font-black text-gray-900 leading-tight">
              Curated {dest.name} Tour Packages
            </h2>
            <p className="text-gray-500 text-sm mt-1.5 max-w-xl">
              {dest.description}
            </p>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {['All', 'Popular', 'Luxury', 'Honeymoon', 'Family'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#111827] text-white shadow-md'
                    : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_6px_25px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_45px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-[240px] overflow-hidden bg-gray-100">
                  <img
                    src={pkg.heroImage}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0" />
                  
                  <div className="absolute top-4 left-4 z-10 flex gap-2">
                    <span className="bg-[#f26c22] text-white text-[11px] font-black px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
                      {pkg.category}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 z-10 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold text-gray-900 flex items-center gap-1 shadow">
                    <FaStar className="text-amber-500 text-xs" /> {pkg.rating}
                    <span className="text-gray-400 font-normal text-[11px]">({pkg.reviewsCount})</span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 text-white flex items-center justify-between text-xs font-semibold">
                    <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg flex items-center gap-1.5 border border-white/10">
                      <FaClock className="text-[#f26c22]" /> {pkg.duration}
                    </span>
                    <span className="text-gray-300 text-[11px] truncate max-w-[50%]">
                      {pkg.pickupDrop}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#1E6AD4] mb-2">
                    <FaMapMarkerAlt />
                    <span className="truncate">{pkg.location}</span>
                  </div>

                  <Link href={`/international/${dest?.slug}/${pkg.slug}`}>
                    <h3 className="text-[18px] font-bold text-gray-900 group-hover:text-[#f26c22] transition-colors leading-snug mb-2.5 line-clamp-2">
                      {pkg.title}
                    </h3>
                  </Link>

                  <p className="text-gray-500 text-[13px] line-clamp-2 leading-relaxed mb-4">
                    {pkg.subtitle}
                  </p>

                  <div className="space-y-1.5 border-t border-gray-100 pt-3 mb-4">
                    {pkg.highlights.slice(0, 3).map((hl, i) => (
                      <div key={i} className="flex items-start gap-2 text-[12px] text-gray-600">
                        <FaCheckCircle className="text-[#10b981] text-xs shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-gray-100 flex items-center justify-between mt-auto">
                <div>
                  <span className="text-[11px] text-gray-400 block line-through">{pkg.originalPrice}</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-[21px] font-black text-[#f26c22]">{pkg.price}</span>
                    <span className="text-[11px] text-gray-500 font-medium">/person</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={`https://wa.me/918091660060?text=Hello%20Zoyo%20Trip,%20I%20am%20interested%20in%20the%20${encodeURIComponent(pkg.title)}%20package`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 hover:bg-emerald-500 hover:text-white flex items-center justify-center text-base transition shadow-sm"
                    title="Chat on WhatsApp"
                  >
                    <FaWhatsapp />
                  </a>
                  <Link
                    href={`/international/${dest?.slug}/${pkg.slug}`}
                    className="bg-[#111827] hover:bg-[#f26c22] text-white px-4 py-2.5 rounded-xl font-bold text-xs transition-colors flex items-center gap-1.5 shadow-md"
                  >
                    <span>View Itinerary</span>
                    <BsArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ─── 3. CTA ─── */}
      <section className="py-16 px-4 sm:px-8 text-center bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#111827] to-[#1e293b] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <h2 className="text-[28px] sm:text-[36px] font-black mb-3 leading-tight">
            Planning an International Trip to {dest.name}?
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto mb-8 font-light">
            Get personalized holiday itineraries, group flight rates, luxury private transfers, and end-to-end visa assistance.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-[#f26c22] hover:bg-[#d95d1a] text-white px-8 py-3.5 rounded-full font-bold text-sm transition shadow-lg flex items-center gap-2"
            >
              <FaPhoneAlt className="text-xs" /> Request Custom Itinerary
            </Link>
            <a
              href={`https://wa.me/918091660060?text=Hello%20Zoyo%20Trip,%20I%20want%20to%20plan%20an%20international%20trip%20to%20${encodeURIComponent(dest.name)}`}
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba59] text-white px-7 py-3.5 rounded-full font-bold text-sm transition shadow-lg flex items-center gap-2"
            >
              <FaWhatsapp className="text-base" /> WhatsApp (+91) 8091660060
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
