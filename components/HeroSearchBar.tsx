'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUsers,
  FaSearch,
  FaChevronDown,
  FaTimes,
  FaCheck,
  FaCompass,
  FaPlane,
  FaHeart,
  FaSlidersH,
  FaBolt
} from 'react-icons/fa';

type TourCategory = 'domestic' | 'international' | 'honeymoon' | 'custom';

interface DestinationOption {
  id: string;
  name: string;
  region: string;
  category: TourCategory;
  url: string;
}

const ALL_DESTINATIONS: DestinationOption[] = [
  // ── Domestic Destinations ──
  { id: 'kashmir', name: 'Kashmir', region: 'North India', category: 'domestic', url: '/national/kashmir' },
  { id: 'ladakh', name: 'Leh & Ladakh', region: 'North India', category: 'domestic', url: '/national/ladakh' },
  { id: 'himachal', name: 'Himachal Pradesh (Shimla, Manali)', region: 'North India', category: 'domestic', url: '/national/himachal-pradesh' },
  { id: 'rajasthan', name: 'Rajasthan (Jaipur, Udaipur, Jaisalmer)', region: 'North India', category: 'domestic', url: '/national/rajasthan' },
  { id: 'kerala', name: 'Kerala (Munnar, Alleppey)', region: 'South India', category: 'domestic', url: '/national/kerala' },
  { id: 'goa', name: 'Goa (Beaches, Cruise)', region: 'West India', category: 'domestic', url: '/national/goa' },
  { id: 'uttarakhand', name: 'Uttarakhand (Rishikesh, Nainital, Char Dham)', region: 'North India', category: 'domestic', url: '/national/uttarakhand' },
  { id: 'spiti', name: 'Lahaul & Spiti Valley', region: 'North India', category: 'domestic', url: '/national/spiti' },
  { id: 'andaman', name: 'Andaman & Nicobar Islands', region: 'Island', category: 'domestic', url: '/national/andaman' },
  { id: 'sikkim', name: 'Sikkim & Darjeeling', region: 'North East', category: 'domestic', url: '/national/sikkim' },
  { id: 'meghalaya', name: 'Meghalaya (Shillong, Cherrapunji)', region: 'North East', category: 'domestic', url: '/national/meghalaya' },
  { id: 'uttarpradesh', name: 'Uttar Pradesh (Varanasi, Ayodhya, Mathura)', region: 'North India', category: 'domestic', url: '/national/uttarpradesh' },
  { id: 'gujarat', name: 'Gujarat (Rann of Kutch, Dwarka)', region: 'West India', category: 'domestic', url: '/national/gujarat' },
  { id: 'karnataka', name: 'Karnataka (Coorg, Ooty, Hampi)', region: 'South India', category: 'domestic', url: '/national/karnataka' },

  // ── International Destinations ──
  { id: 'dubai', name: 'Dubai & UAE', region: 'Middle East', category: 'international', url: '/international/dubai' },
  { id: 'bali', name: 'Bali, Indonesia', region: 'Southeast Asia', category: 'international', url: '/international/bali' },
  { id: 'maldives', name: 'Maldives Overwater Villas', region: 'Indian Ocean', category: 'international', url: '/international/maldives' },
  { id: 'singapore', name: 'Singapore City & Sentosa', region: 'Southeast Asia', category: 'international', url: '/international/singapore' },
  { id: 'thailand', name: 'Thailand (Bangkok, Phuket, Krabi)', region: 'Southeast Asia', category: 'international', url: '/international/thailand' },
  { id: 'vietnam', name: 'Vietnam (Hanoi, Halong Bay, Da Nang)', region: 'Southeast Asia', category: 'international', url: '/international/vietnam' },
  { id: 'malaysia', name: 'Malaysia (Kuala Lumpur, Langkawi)', region: 'Southeast Asia', category: 'international', url: '/international/malaysia' },
  { id: 'srilanka', name: 'Sri Lanka (Colombo, Kandy, Bentota)', region: 'South Asia', category: 'international', url: '/international/sri-lanka' },
  { id: 'bhutan', name: 'Bhutan (Thimphu, Paro)', region: 'South Asia', category: 'international', url: '/international/bhutan' },
  { id: 'nepal', name: 'Nepal (Kathmandu, Pokhara)', region: 'South Asia', category: 'international', url: '/international/nepal' },
  { id: 'azerbaijan', name: 'Azerbaijan (Baku & Beyond)', region: 'Eurasia', category: 'international', url: '/international/azerbaijan' },
  { id: 'japan', name: 'Japan (Tokyo, Kyoto, Mt. Fuji)', region: 'East Asia', category: 'international', url: '/international/japan' },
  { id: 'hongkong', name: 'Hong Kong & Macau', region: 'East Asia', category: 'international', url: '/international/hong-kong' },
  { id: 'southkorea', name: 'South Korea (Seoul, Jeju)', region: 'East Asia', category: 'international', url: '/international/south-korea' },
  { id: 'mauritius', name: 'Mauritius Island', region: 'Indian Ocean', category: 'international', url: '/international/mauritius' },

  // ── Honeymoon Packages ──
  { id: 'bali-honeymoon', name: 'Bali Romantic Villa & Candlelight Escape', region: 'International', category: 'honeymoon', url: '/international/bali' },
  { id: 'maldives-honeymoon', name: 'Maldives Luxury Overwater Bungalow', region: 'International', category: 'honeymoon', url: '/international/maldives' },
  { id: 'kashmir-honeymoon', name: 'Kashmir Shikara & Snow Romance', region: 'Domestic', category: 'honeymoon', url: '/national/kashmir' },
  { id: 'kerala-honeymoon', name: 'Kerala Backwaters Houseboat & Tea Hills', region: 'Domestic', category: 'honeymoon', url: '/national/kerala' },
  { id: 'himachal-honeymoon', name: 'Manali & Shimla Snowy Mountain Retreat', region: 'Domestic', category: 'honeymoon', url: '/national/himachal-pradesh' },
  { id: 'goa-honeymoon', name: 'Goa Sunset Cruise & Private Beach Haven', region: 'Domestic', category: 'honeymoon', url: '/national/goa' },
  { id: 'andaman-honeymoon', name: 'Andaman Beach Villa & Scuba Dive', region: 'Domestic', category: 'honeymoon', url: '/national/andaman' },
  { id: 'dubai-honeymoon', name: 'Dubai Skyline & Luxury Desert Safari', region: 'International', category: 'honeymoon', url: '/international/dubai' },

  // ── Custom Itinerary ──
  { id: 'custom-himalaya', name: 'Custom Himalayan Grand Circuit', region: 'Ladakh, Spiti, Himachal', category: 'custom', url: '/contact' },
  { id: 'custom-south-india', name: 'Custom South India Cultural Trail', region: 'Kerala, Tamil Nadu', category: 'custom', url: '/contact' },
  { id: 'custom-golden-triangle', name: 'Custom Royal Golden Triangle', region: 'Rajasthan & Taj Mahal', category: 'custom', url: '/contact' },
  { id: 'custom-southeast-asia', name: 'Custom Southeast Asia Grand Tour', region: 'Singapore, Bali, Thai', category: 'custom', url: '/contact' },
  { id: 'custom-dubai-abudhabi', name: 'Custom Dubai & Abu Dhabi Tour', region: 'Luxury Desert & City', category: 'custom', url: '/contact' },
  { id: 'custom-any', name: 'Plan Any Custom Tour Worldwide', region: 'Custom Destination', category: 'custom', url: '/contact' },
];

export default function HeroSearchBar() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TourCategory>('domestic');
  
  // Destination state
  const [selectedDestination, setSelectedDestination] = useState<DestinationOption>(ALL_DESTINATIONS[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDestDropdownOpen, setIsDestDropdownOpen] = useState(false);
  
  // Dates state
  const [departDate, setDepartDate] = useState('2026-11-22');
  const [returnDate, setReturnDate] = useState('2026-11-28');
  
  // Travelers state
  const [travelers, setTravelers] = useState('2 Travelers (Couple)');
  const [isTravelersOpen, setIsTravelersOpen] = useState(false);

  // Refs for outside clicks & direct picker triggers
  const destDropdownRef = useRef<HTMLDivElement>(null);
  const travelersDropdownRef = useRef<HTMLDivElement>(null);
  const departInputRef = useRef<HTMLInputElement>(null);
  const returnInputRef = useRef<HTMLInputElement>(null);

  // Filter destinations based on active tab and search query
  const filteredDestinations = ALL_DESTINATIONS.filter((d) => {
    const matchesCategory = d.category === activeTab;
    const matchesQuery = d.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         d.region.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && (searchQuery ? matchesQuery : true);
  });

  // Switch tabs and set default destination for that tab
  const handleTabChange = (tab: TourCategory) => {
    setActiveTab(tab);
    setSearchQuery('');
    const firstOption = ALL_DESTINATIONS.find((d) => d.category === tab);
    if (firstOption) {
      setSelectedDestination(firstOption);
    }
  };

  // Trigger browser native date picker safely
  const triggerDepartPicker = () => {
    if (departInputRef.current) {
      try {
        if ('showPicker' in HTMLInputElement.prototype) {
          departInputRef.current.showPicker();
        } else {
          departInputRef.current.focus();
        }
      } catch {
        departInputRef.current.focus();
      }
    }
  };

  const triggerReturnPicker = () => {
    if (returnInputRef.current) {
      try {
        if ('showPicker' in HTMLInputElement.prototype) {
          returnInputRef.current.showPicker();
        } else {
          returnInputRef.current.focus();
        }
      } catch {
        returnInputRef.current.focus();
      }
    }
  };

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (destDropdownRef.current && !destDropdownRef.current.contains(e.target as Node)) {
        setIsDestDropdownOpen(false);
      }
      if (travelersDropdownRef.current && !travelersDropdownRef.current.contains(e.target as Node)) {
        setIsTravelersOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Format date helper
  const formatDateDisplay = (dateString: string) => {
    if (!dateString) return { date: 'Select Date', day: 'Pick from calendar' };
    const dateObj = new Date(dateString);
    if (isNaN(dateObj.getTime())) return { date: 'Select Date', day: 'Pick from calendar' };
    
    const dayName = dateObj.toLocaleDateString('en-US', { weekday: 'long' });
    const dayNum = dateObj.getDate();
    const monthName = dateObj.toLocaleDateString('en-US', { month: 'long' });
    const year = dateObj.getFullYear();

    return {
      date: `${dayNum} ${monthName}`,
      day: `${dayName} ${year}`
    };
  };

  const departDisplay = formatDateDisplay(departDate);
  const returnDisplay = formatDateDisplay(returnDate);

  // Search Submit
  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (selectedDestination?.url) {
      router.push(selectedDestination.url);
    } else {
      router.push(activeTab === 'domestic' ? '/national' : activeTab === 'international' ? '/international' : '/contact');
    }
  };

  return (
    <>
      {/* ════════ DESKTOP VERSION (Hidden on Mobile) ════════ */}
      <div className="hidden md:flex absolute bottom-[-90px] w-full flex-col items-center z-30 px-6">
        
        {/* Category Tabs */}
        <div className="flex bg-white shadow-lg rounded-full p-1.5 mb-[-14px] z-20 border border-gray-100 transition-all">
          
          <button
            type="button"
            onClick={() => handleTabChange('domestic')}
            className={`px-6 py-2.5 rounded-full text-[13px] font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'domestic'
                ? 'bg-[#f26c22] text-white shadow-md'
                : 'text-gray-700 hover:text-[#f26c22] hover:bg-orange-50/60'
            }`}
          >
            <FaCompass className="w-4 h-4" />
            Domestic Tours
          </button>

          <button
            type="button"
            onClick={() => handleTabChange('international')}
            className={`px-5 py-2.5 rounded-full text-[13px] font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'international'
                ? 'bg-[#f26c22] text-white shadow-md'
                : 'text-gray-700 hover:text-[#f26c22] hover:bg-orange-50/60'
            }`}
          >
            <FaPlane className="w-4 h-4" />
            International Tours
          </button>

          <button
            type="button"
            onClick={() => handleTabChange('honeymoon')}
            className={`px-5 py-2.5 rounded-full text-[13px] font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'honeymoon'
                ? 'bg-[#f26c22] text-white shadow-md'
                : 'text-gray-700 hover:text-[#f26c22] hover:bg-orange-50/60'
            }`}
          >
            <FaHeart className="w-4 h-4 text-rose-300" />
            Honeymoon Packages
          </button>

          <button
            type="button"
            onClick={() => handleTabChange('custom')}
            className={`px-5 py-2.5 rounded-full text-[13px] font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'custom'
                ? 'bg-[#f26c22] text-white shadow-md'
                : 'text-gray-700 hover:text-[#f26c22] hover:bg-orange-50/60'
            }`}
          >
            <FaSlidersH className="w-4 h-4" />
            Custom Itinerary
          </button>
        </div>

        {/* Search Input Bar Box */}
        <div className="bg-white rounded-[20px] shadow-[0_12px_36px_rgba(0,0,0,0.10)] w-full max-w-[1180px] p-6 pt-9 border border-gray-100">
          <form onSubmit={handleSearch} className="flex flex-row items-center gap-3.5 h-[64px]">
            
            {/* 1. Destination Field Dropdown */}
            <div ref={destDropdownRef} className="relative flex-[1.4] h-full min-w-0">
              <button
                type="button"
                onClick={() => setIsDestDropdownOpen(!isDestDropdownOpen)}
                className="w-full h-full border border-gray-200 hover:border-[#f26c22] rounded-xl p-3 px-3.5 flex items-center gap-3 text-left bg-white transition cursor-pointer shadow-xs focus:ring-2 focus:ring-[#f26c22]/20"
              >
                <div className="w-9 h-9 rounded-xl bg-orange-50 text-[#f26c22] flex items-center justify-center shrink-0">
                  <FaMapMarkerAlt className="text-base" />
                </div>
                <div className="flex flex-col justify-center overflow-hidden flex-1 min-w-0">
                  <span className="text-[13.5px] font-extrabold text-[#111] leading-tight truncate">
                    {selectedDestination?.name || 'Where to?'}
                  </span>
                  <span className="text-[11.5px] text-gray-500 leading-tight mt-0.5 truncate capitalize">
                    {selectedDestination?.region || 'Destination'}
                  </span>
                </div>
                <FaChevronDown className={`text-gray-400 text-xs shrink-0 transition-transform duration-200 ${isDestDropdownOpen ? 'rotate-180 text-[#f26c22]' : ''}`} />
              </button>

              {/* Destination Dropdown Menu */}
              {isDestDropdownOpen && (
                <div className="absolute top-[72px] left-0 w-[360px] bg-white rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.18)] border border-gray-200 p-3 z-50 animate-scaleUp">
                  <div className="mb-2.5 relative">
                    <input
                      type="text"
                      placeholder="Type destination name..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full text-xs font-semibold px-3 py-2 pl-8 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#f26c22]"
                      autoFocus
                    />
                    <FaSearch className="absolute left-2.5 top-2.5 text-gray-400 text-xs" />
                  </div>

                  <div className="max-h-[260px] overflow-y-auto no-scrollbar space-y-1">
                    {filteredDestinations.map((dest) => (
                      <button
                        key={dest.id}
                        type="button"
                        onClick={() => {
                          setSelectedDestination(dest);
                          setIsDestDropdownOpen(false);
                        }}
                        className={`w-full p-2.5 px-3 rounded-xl flex items-center justify-between text-left transition cursor-pointer ${
                          selectedDestination?.id === dest.id
                            ? 'bg-orange-50 text-[#f26c22] font-bold'
                            : 'hover:bg-gray-50 text-gray-700 font-medium'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <FaMapMarkerAlt className="text-xs text-[#f26c22] shrink-0" />
                          <div className="min-w-0">
                            <div className="text-xs font-bold leading-snug truncate">{dest.name}</div>
                            <div className="text-[10.5px] text-gray-400 leading-none truncate">{dest.region}</div>
                          </div>
                        </div>
                        {selectedDestination?.id === dest.id && <FaCheck className="text-xs text-[#f26c22] shrink-0 ml-2" />}
                      </button>
                    ))}
                    {filteredDestinations.length === 0 && (
                      <div className="text-center py-4 text-xs text-gray-400">
                        No destination found
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* 2. Departure Date Picker */}
            <div className="relative flex-1 h-full min-w-0">
              <button
                type="button"
                onClick={triggerDepartPicker}
                className="w-full h-full border border-gray-200 hover:border-[#f26c22] rounded-xl p-3 px-3.5 flex items-center gap-3 text-left bg-white transition cursor-pointer shadow-xs focus:ring-2 focus:ring-[#f26c22]/20"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1E6AD4] flex items-center justify-center shrink-0">
                  <FaCalendarAlt className="text-base" />
                </div>
                <div className="flex flex-col justify-center flex-1 min-w-0">
                  <span className="text-[13.5px] font-extrabold text-[#111] leading-tight truncate">
                    {departDisplay.date}
                  </span>
                  <span className="text-[11.5px] text-gray-500 leading-tight mt-0.5 truncate">
                    {departDisplay.day}
                  </span>
                </div>
              </button>
              {/* Native Input with Ref for 100% Reliable Click Opening */}
              <input
                ref={departInputRef}
                type="date"
                value={departDate}
                onChange={(e) => setDepartDate(e.target.value)}
                className="absolute inset-0 opacity-0 pointer-events-none w-full h-full"
              />
            </div>

            {/* 3. Return Date Picker */}
            <div className="relative flex-1 h-full min-w-0">
              <button
                type="button"
                onClick={triggerReturnPicker}
                className="w-full h-full border border-gray-200 hover:border-[#f26c22] rounded-xl p-3 px-3.5 flex items-center gap-3 text-left bg-white transition cursor-pointer shadow-xs focus:ring-2 focus:ring-[#f26c22]/20"
              >
                <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                  <FaCalendarAlt className="text-base" />
                </div>
                <div className="flex flex-col justify-center flex-1 min-w-0">
                  <span className="text-[13.5px] font-extrabold text-[#111] leading-tight truncate">
                    {returnDisplay.date}
                  </span>
                  <span className="text-[11.5px] text-gray-500 leading-tight mt-0.5 truncate">
                    {returnDisplay.day}
                  </span>
                </div>
              </button>
              {/* Native Input with Ref for 100% Reliable Click Opening */}
              <input
                ref={returnInputRef}
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="absolute inset-0 opacity-0 pointer-events-none w-full h-full"
              />
            </div>

            {/* 4. Travelers Selector */}
            <div ref={travelersDropdownRef} className="relative flex-1 h-full min-w-0">
              <button
                type="button"
                onClick={() => setIsTravelersOpen(!isTravelersOpen)}
                className="w-full h-full border border-gray-200 hover:border-[#f26c22] rounded-xl p-3 px-3.5 flex items-center gap-3 text-left bg-white transition cursor-pointer shadow-xs focus:ring-2 focus:ring-[#f26c22]/20"
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <FaUsers className="text-base" />
                </div>
                <div className="flex flex-col justify-center flex-1 min-w-0">
                  <span className="text-[13.5px] font-extrabold text-[#111] leading-tight truncate">
                    {travelers.split(' ')[0]} {travelers.split(' ')[1]}
                  </span>
                  <span className="text-[11.5px] text-gray-500 leading-tight mt-0.5 truncate">
                    {travelers.includes('(') ? travelers.slice(travelers.indexOf('(') + 1, -1) : 'Guests'}
                  </span>
                </div>
                <FaChevronDown className={`text-gray-400 text-xs shrink-0 transition-transform duration-200 ${isTravelersOpen ? 'rotate-180 text-[#f26c22]' : ''}`} />
              </button>

              {/* Travelers Dropdown Menu */}
              {isTravelersOpen && (
                <div className="absolute top-[72px] right-0 w-[240px] bg-white rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.18)] border border-gray-200 p-2.5 z-50 animate-scaleUp">
                  {[
                    '1 Solo Traveler',
                    '2 Travelers (Couple)',
                    '3-4 Family / Friends',
                    '5-8 Small Group',
                    '9+ Group / Corporate'
                  ].map((item, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setTravelers(item);
                        setIsTravelersOpen(false);
                      }}
                      className={`w-full p-2.5 px-3 rounded-xl flex items-center justify-between text-left text-xs font-bold transition cursor-pointer ${
                        travelers === item ? 'bg-orange-50 text-[#f26c22]' : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <span>{item}</span>
                      {travelers === item && <FaCheck className="text-xs text-[#f26c22]" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 5. SEARCH Button */}
            <button
              type="submit"
              className="bg-[#f26c22] hover:bg-[#d95d1a] active:scale-98 transition-all text-white rounded-xl px-8 font-black flex items-center justify-center gap-2 h-full cursor-pointer shadow-[0_4px_14px_rgba(242,108,34,0.4)] tracking-wide shrink-0"
            >
              <FaSearch className="text-base" />
              SEARCH
            </button>

          </form>

          {/* Footer Subtext */}
          <div className="mt-4 text-[12.5px] text-gray-600 font-medium ml-1 flex items-center justify-between">
            <span>
              Can&apos;t find what you&apos;re looking for? Create your{' '}
              <Link href="/contact" className="text-[#1E6AD4] font-bold hover:underline">
                Custom Itinerary
              </Link>
            </span>
            <span className="text-gray-400 text-xs hidden lg:inline-flex items-center gap-1.5">
              <FaBolt className="text-amber-500 text-xs" /> Over 500+ Verified Handcrafted Tours
            </span>
          </div>
        </div>

      </div>

      {/* ════════ MOBILE VERSION ════════ */}
      <div className="md:hidden w-full px-4 -mt-10 sm:-mt-14 relative z-30 mb-8 flex flex-col items-center">
        
        {/* Mobile Tabs */}
        <div className="flex bg-white shadow-lg rounded-full p-1 mb-[-14px] z-20 border border-gray-200 max-w-[calc(100vw-32px)] overflow-x-auto no-scrollbar">
          <button
            type="button"
            onClick={() => handleTabChange('domestic')}
            className={`px-3.5 py-1.5 rounded-full text-[12px] font-bold flex items-center gap-1.5 transition whitespace-nowrap ${
              activeTab === 'domestic' ? 'bg-[#f26c22] text-white shadow-sm' : 'text-gray-700'
            }`}
          >
            <FaCompass className="w-3.5 h-3.5" />
            Domestic
          </button>
          
          <button
            type="button"
            onClick={() => handleTabChange('international')}
            className={`px-3.5 py-1.5 rounded-full text-[12px] font-bold flex items-center gap-1.5 transition whitespace-nowrap ${
              activeTab === 'international' ? 'bg-[#f26c22] text-white shadow-sm' : 'text-gray-700'
            }`}
          >
            <FaPlane className="w-3.5 h-3.5" />
            International
          </button>
          
          <button
            type="button"
            onClick={() => handleTabChange('honeymoon')}
            className={`px-3.5 py-1.5 rounded-full text-[12px] font-bold flex items-center gap-1.5 transition whitespace-nowrap ${
              activeTab === 'honeymoon' ? 'bg-[#f26c22] text-white shadow-sm' : 'text-gray-700'
            }`}
          >
            <FaHeart className="w-3.5 h-3.5" />
            Honeymoon
          </button>
          
          <button
            type="button"
            onClick={() => handleTabChange('custom')}
            className={`px-3.5 py-1.5 rounded-full text-[12px] font-bold flex items-center gap-1.5 transition whitespace-nowrap ${
              activeTab === 'custom' ? 'bg-[#f26c22] text-white shadow-sm' : 'text-gray-700'
            }`}
          >
            <FaSlidersH className="w-3.5 h-3.5" />
            Custom
          </button>
        </div>

        {/* Mobile Search Card */}
        <div className="bg-white rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.12)] w-full max-w-md p-5 pt-8 border border-gray-100">
          <form onSubmit={handleSearch} className="space-y-3">
            
            {/* Destination Select */}
            <div className="border border-gray-200 rounded-xl p-3 flex items-center gap-3 bg-white relative">
              <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#f26c22] flex items-center justify-center shrink-0">
                <FaMapMarkerAlt className="text-sm" />
              </div>
              <div className="flex flex-col justify-center flex-1 min-w-0">
                <span className="text-[11px] font-bold text-gray-500 leading-tight">Where to?</span>
                <select
                  value={selectedDestination?.id}
                  onChange={(e) => {
                    const dest = ALL_DESTINATIONS.find((d) => d.id === e.target.value);
                    if (dest) setSelectedDestination(dest);
                  }}
                  className="text-[13px] font-bold text-[#111] bg-transparent focus:outline-none w-full truncate cursor-pointer"
                >
                  {filteredDestinations.map((dest) => (
                    <option key={dest.id} value={dest.id}>
                      {dest.name} ({dest.region})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Depart Date */}
            <div 
              onClick={triggerDepartPicker}
              className="border border-gray-200 rounded-xl p-3 flex items-center gap-3 bg-white relative cursor-pointer"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1E6AD4] flex items-center justify-center shrink-0">
                <FaCalendarAlt className="text-sm" />
              </div>
              <div className="flex flex-col justify-center flex-1 min-w-0">
                <span className="text-[11px] font-bold text-gray-500 leading-tight">Departure Date</span>
                <span className="text-[13px] font-bold text-[#111] leading-tight mt-0.5 truncate">
                  {departDisplay.date} ({departDisplay.day})
                </span>
              </div>
              <input
                type="date"
                value={departDate}
                onChange={(e) => setDepartDate(e.target.value)}
                className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
              />
            </div>

            {/* Return Date */}
            <div 
              onClick={triggerReturnPicker}
              className="border border-gray-200 rounded-xl p-3 flex items-center gap-3 bg-white relative cursor-pointer"
            >
              <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                <FaCalendarAlt className="text-sm" />
              </div>
              <div className="flex flex-col justify-center flex-1 min-w-0">
                <span className="text-[11px] font-bold text-gray-500 leading-tight">Return Date</span>
                <span className="text-[13px] font-bold text-[#111] leading-tight mt-0.5 truncate">
                  {returnDisplay.date} ({returnDisplay.day})
                </span>
              </div>
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
              />
            </div>

            {/* Travelers */}
            <div className="border border-gray-200 rounded-xl p-3 flex items-center gap-3 bg-white">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <FaUsers className="text-sm" />
              </div>
              <div className="flex flex-col justify-center flex-1 min-w-0">
                <span className="text-[11px] font-bold text-gray-500 leading-tight">Guests</span>
                <select
                  value={travelers}
                  onChange={(e) => setTravelers(e.target.value)}
                  className="text-[13px] font-bold text-[#111] bg-transparent focus:outline-none w-full cursor-pointer"
                >
                  <option value="1 Solo Traveler">1 Solo Traveler</option>
                  <option value="2 Travelers (Couple)">2 Travelers (Couple)</option>
                  <option value="3-4 Family / Friends">3-4 Family / Friends</option>
                  <option value="5-8 Small Group">5-8 Small Group</option>
                  <option value="9+ Group / Corporate">9+ Group / Corporate</option>
                </select>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#f26c22] hover:bg-[#d95d1a] transition text-white rounded-xl py-3.5 font-bold flex items-center justify-center gap-2 text-sm shadow-md cursor-pointer"
            >
              <FaSearch /> SEARCH
            </button>
          </form>

          <div className="mt-4 text-center text-[12px] text-gray-600 font-medium">
            Can&apos;t find what you&apos;re looking for? create your{' '}
            <Link href="/contact" className="text-[#1E6AD4] font-bold hover:underline">
              Custom Itinerary
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
