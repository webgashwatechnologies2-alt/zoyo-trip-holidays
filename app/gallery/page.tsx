'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaHeart,
  FaRegHeart,
  FaExpand,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaMapMarkerAlt,
  FaTags,
  FaPhoneAlt,
  FaWhatsapp,
  FaSearch,
  FaCompass,
  FaCamera,
  FaShareAlt,
  FaStar,
  FaSlidersH,
  FaRegEye,
} from 'react-icons/fa';
import { BsCheckLg, BsStars, BsArrowRight, BsGrid3X3GapFill, BsGridFill } from 'react-icons/bs';
import { HiOutlineSparkles } from 'react-icons/hi2';

interface GalleryItem {
  id: string;
  title: string;
  location: string;
  stateCountry: string;
  category: 'mountains' | 'beaches' | 'heritage' | 'international' | 'adventure' | 'honeymoon';
  categoryLabel: string;
  imageSrc: string;
  description: string;
  tags: string[];
  featured?: boolean;
  aspect?: 'tall' | 'wide' | 'square';
}

const galleryData: GalleryItem[] = [
  {
    id: 'spiti-kaza',
    title: 'Historic Key Monastery & Spiti Valley',
    location: 'Spiti Valley',
    stateCountry: 'Himachal Pradesh',
    category: 'mountains',
    categoryLabel: 'Himalayan & Mountains',
    imageSrc: '/assets/images/packageimages/buddhist-monastery-kaza-spiti-valley.webp',
    description: 'Perched high in the trans-Himalayan desert, Key Monastery stands as a beacon of peace and spiritual heritage surrounded by rugged peaks.',
    tags: ['Spiti', 'Monastery', 'Himalayas', 'Altitude'],
    featured: true,
    aspect: 'tall',
  },
  {
    id: 'kashmir-sonmarg',
    title: 'Glacial Valleys of Sonmarg & Gulmarg',
    location: 'Gulmarg / Sonmarg',
    stateCountry: 'Jammu & Kashmir',
    category: 'mountains',
    categoryLabel: 'Himalayan & Mountains',
    imageSrc: '/assets/images/packageimages/Kashmirnewww.webp',
    description: 'Known as heaven on earth, the lush meadows and snow-draped alpine peaks of Kashmir offer breathtaking vistas in all four seasons.',
    tags: ['Kashmir', 'Snow Peaks', 'Alpine Meadows', 'Gulmarg'],
    featured: true,
    aspect: 'wide',
  },
  {
    id: 'maldives-luxury',
    title: 'Luxury Overwater Villa Lagoon Retreat',
    location: 'Male Atoll',
    stateCountry: 'Maldives',
    category: 'international',
    categoryLabel: 'International Wonders',
    imageSrc: '/assets/images/packageimages/Maldivesoverwaterimg.webp',
    description: 'Turquoise crystalline waters and private sun decks suspended over vibrant coral reefs in the heart of the Indian Ocean.',
    tags: ['Maldives', 'Overwater Villa', 'Luxury', 'Ocean View'],
    featured: true,
    aspect: 'wide',
  },
  {
    id: 'bali-bedugul',
    title: 'Sacred Water Temples & Lakes',
    location: 'Bedugul & Ubud',
    stateCountry: 'Bali, Indonesia',
    category: 'international',
    categoryLabel: 'International Wonders',
    imageSrc: '/assets/images/packageimages/balihero.webp',
    description: 'Iconic Balinese architecture surrounded by misty crater lakes, lush terraced rice fields, and tropical flora.',
    tags: ['Bali', 'Ubud', 'Temples', 'Tropical'],
    featured: true,
    aspect: 'tall',
  },
  {
    id: 'dubai-skyline',
    title: 'Modern Architecture & Desert Glow',
    location: 'Downtown Dubai & Marina',
    stateCountry: 'United Arab Emirates',
    category: 'international',
    categoryLabel: 'International Wonders',
    imageSrc: '/assets/images/packageimages/dubai.webp',
    description: 'Futuristic architectural wonders, sparkling Arabian Gulf waters, and thrilling golden dune desert safaris.',
    tags: ['Dubai', 'Burj Khalifa', 'Luxury', 'Cityscape'],
    featured: false,
    aspect: 'square',
  },
  {
    id: 'andaman-havelock',
    title: 'Radhanagar Beach White Sands',
    location: 'Havelock Island',
    stateCountry: 'Andaman & Nicobar Islands',
    category: 'beaches',
    categoryLabel: 'Tropical & Beaches',
    imageSrc: '/assets/images/packageimages/havelock-island.webp',
    description: 'Ranked among Asia’s finest beaches, Radhanagar offers powder-soft sands, vibrant turquoise waters, and sensational sunsets.',
    tags: ['Andaman', 'Havelock', 'Beaches', 'Coral Reefs'],
    featured: true,
    aspect: 'tall',
  },
  {
    id: 'ladakh-nubra',
    title: 'Sand Dunes & Mountain Passes of Nubra',
    location: 'Nubra Valley',
    stateCountry: 'Leh-Ladakh',
    category: 'mountains',
    categoryLabel: 'Himalayan & Mountains',
    imageSrc: '/assets/images/packageimages/Ladakh-Nubra-Valley.webp',
    description: 'High-altitude cold desert where double-humped Bactrian camels roam against a dramatic backdrop of rugged Karakoram peaks.',
    tags: ['Ladakh', 'Nubra Valley', 'Desert', 'Karakoram'],
    featured: false,
    aspect: 'wide',
  },
  {
    id: 'jaipur-jalmahal',
    title: 'Regal Water Palace & Pink City',
    location: 'Jaipur',
    stateCountry: 'Rajasthan',
    category: 'heritage',
    categoryLabel: 'Heritage & Culture',
    imageSrc: '/assets/images/packageimages/jalmahal1.webp',
    description: 'Emerging magically from Man Sagar Lake, Jal Mahal showcases the timeless Rajput grandeur and architectural brilliance.',
    tags: ['Rajasthan', 'Jaipur', 'Palace', 'Heritage'],
    featured: false,
    aspect: 'square',
  },
  {
    id: 'kerala-backwaters',
    title: 'Houseboat Cruises & Emerald Canals',
    location: 'Alleppey & Kumarakom',
    stateCountry: 'Kerala',
    category: 'beaches',
    categoryLabel: 'Tropical & Beaches',
    imageSrc: '/assets/images/packageimages/keralahero.webp',
    description: 'Drift through serene palm-fringed canals on handcrafted luxury houseboats while savoring authentic regional delicacies.',
    tags: ['Kerala', 'Alleppey', 'Backwaters', 'Houseboat'],
    featured: true,
    aspect: 'wide',
  },
  {
    id: 'varanasi-ghats',
    title: 'Spiritual Ganga Aarti at Dashashwamedh',
    location: 'Varanasi',
    stateCountry: 'Uttar Pradesh',
    category: 'heritage',
    categoryLabel: 'Heritage & Culture',
    imageSrc: '/assets/images/packageimages/vrnsineww.webp',
    description: 'One of the world’s oldest living cities, where millennia-old spiritual rituals unfold along the holy banks of River Ganges.',
    tags: ['Varanasi', 'Ghats', 'Spirituality', 'Ganga'],
    featured: false,
    aspect: 'tall',
  },
  {
    id: 'japan-sakura',
    title: 'Cherry Blossoms & Historic Pagodas',
    location: 'Kyoto & Tokyo',
    stateCountry: 'Japan',
    category: 'international',
    categoryLabel: 'International Wonders',
    imageSrc: '/assets/images/packageimages/japanhero.webp',
    description: 'Mesmerizing pink cherry blossoms frame ancient Shinto shrines and bustling metropolis streets in Japan.',
    tags: ['Japan', 'Kyoto', 'Sakura', 'Cherry Blossom'],
    featured: true,
    aspect: 'wide',
  },
  {
    id: 'ladakh-bike',
    title: 'Ultimate Leh-Ladakh Motorbike Expedition',
    location: 'Khardung La & Chang La',
    stateCountry: 'Leh-Ladakh',
    category: 'adventure',
    categoryLabel: 'Adventure & Thrills',
    imageSrc: '/assets/images/packageimages/bikeinlleh.webp',
    description: 'Ride across the world’s highest motorable passes with breathtaking panoramic vistas around every bend.',
    tags: ['Ladakh', 'Biking', 'Adventure', 'Khardung La'],
    featured: true,
    aspect: 'tall',
  },
  {
    id: 'goa-sunsets',
    title: 'Golden Hour & Ocean Breezes',
    location: 'Palolem & Vagator',
    stateCountry: 'Goa',
    category: 'beaches',
    categoryLabel: 'Tropical & Beaches',
    imageSrc: '/assets/images/packageimages/goaheroabner.webp',
    description: 'Warm golden sands, swaying palm trees, beach shacks, and exhilarating water sports across North & South Goa.',
    tags: ['Goa', 'Sunset', 'Beach Life', 'Coastal'],
    featured: false,
    aspect: 'wide',
  },
  {
    id: 'shimla-monsoon',
    title: 'Misty Pine Forests & Colonial Charm',
    location: 'Shimla & Kufri',
    stateCountry: 'Himachal Pradesh',
    category: 'mountains',
    categoryLabel: 'Himalayan & Mountains',
    imageSrc: '/assets/images/packageimages/Shimla-During-Monsoon.webp',
    description: 'Verdant green valleys enveloped in gentle monsoon mist, vintage British architecture, and panoramic Himalayan viewpoints.',
    tags: ['Shimla', 'Himachal', 'Hill Station', 'Pine Forests'],
    featured: false,
    aspect: 'square',
  },
  {
    id: 'singapore-marina',
    title: 'Futuristic Gardens & Marina Bay',
    location: 'Marina Bay',
    stateCountry: 'Singapore',
    category: 'international',
    categoryLabel: 'International Wonders',
    imageSrc: '/assets/images/packageimages/singapore.webp',
    description: 'Innovative Supertree Grove, the world-famous Marina Bay Sands skyline, and lush tropical botanical sanctuaries.',
    tags: ['Singapore', 'Marina Bay', 'Supertree', 'Modern'],
    featured: false,
    aspect: 'wide',
  },
  {
    id: 'river-rafting',
    title: 'White Water Rafting in Rishikesh & Kullu',
    location: 'Rishikesh / Beas River',
    stateCountry: 'Uttarakhand / Himachal',
    category: 'adventure',
    categoryLabel: 'Adventure & Thrills',
    imageSrc: '/assets/images/packageimages/water-rafting.webp',
    description: 'Conquer thrilling Grade III & IV rapids as icy mountain waters surge through deep Himalayan gorges.',
    tags: ['Rafting', 'Rishikesh', 'Adventure', 'Rapids'],
    featured: false,
    aspect: 'tall',
  },
  {
    id: 'vietnam-ha-long',
    title: 'Emerald Waters & Limestone Karsts',
    location: 'Ha Long Bay',
    stateCountry: 'Vietnam',
    category: 'international',
    categoryLabel: 'International Wonders',
    imageSrc: '/assets/images/packageimages/vthero.webp',
    description: 'Sail through thousands of towering limestone islands topped with rainforests in this UNESCO World Heritage marvel.',
    tags: ['Vietnam', 'Ha Long Bay', 'Limestone', 'Cruise'],
    featured: false,
    aspect: 'wide',
  },
  {
    id: 'honeymoon-romantic',
    title: 'Romantic Candlelight Dinner by the Ocean',
    location: 'Beachfront Resort',
    stateCountry: 'Andaman / Maldives',
    category: 'honeymoon',
    categoryLabel: 'Honeymoon & Romance',
    imageSrc: '/assets/images/packageimages/romantic.webp',
    description: 'Custom romantic experiences crafted for newlyweds with private beach cabanas, fresh floral decor, and gourmet dining.',
    tags: ['Honeymoon', 'Romantic', 'Couple Tour', 'Dinner'],
    featured: true,
    aspect: 'tall',
  },
  {
    id: 'chardham-kedarnath',
    title: 'Sacred Himalayan Pilgrimage',
    location: 'Kedarnath & Badrinath',
    stateCountry: 'Uttarakhand',
    category: 'heritage',
    categoryLabel: 'Heritage & Culture',
    imageSrc: '/assets/images/packageimages/chardham.webp',
    description: 'Majestic ancient shrines set amidst snow-covered Garhwal Himalayan peaks, drawing millions of seekers each season.',
    tags: ['Kedarnath', 'Uttarakhand', 'Char Dham', 'Pilgrimage'],
    featured: false,
    aspect: 'square',
  },
  {
    id: 'paragliding-bir',
    title: 'Soaring Over Himalayan Valleys',
    location: 'Bir Billing',
    stateCountry: 'Himachal Pradesh',
    category: 'adventure',
    categoryLabel: 'Adventure & Thrills',
    imageSrc: '/assets/images/packageimages/pgliing.webp',
    description: 'Experience the exhilarating freedom of tandem paragliding from the second highest paragliding site in the world.',
    tags: ['Bir Billing', 'Paragliding', 'Flying', 'Adrenaline'],
    featured: false,
    aspect: 'tall',
  },
  {
    id: 'sri-lanka-sigiriya',
    title: 'Ancient Fortress of Lion Rock',
    location: 'Sigiriya',
    stateCountry: 'Sri Lanka',
    category: 'international',
    categoryLabel: 'International Wonders',
    imageSrc: '/assets/images/packageimages/Sigiriya-Lion-Rock.webp',
    description: 'A dramatic 200-meter sheer rock citadel rising above emerald jungles, featuring ancient frescoes and royal gardens.',
    tags: ['Sri Lanka', 'Sigiriya', 'Ancient Rock', 'UNESCO'],
    featured: false,
    aspect: 'wide',
  },
  {
    id: 'munnar-tea',
    title: 'Rolling Green Tea Plantations',
    location: 'Munnar',
    stateCountry: 'Kerala',
    category: 'beaches',
    categoryLabel: 'Tropical & Beaches',
    imageSrc: '/assets/images/packageimages/munnar.webp',
    description: 'Vast carpets of manicured green tea gardens, aromatic spice hills, and misty Western Ghats viewpoints.',
    tags: ['Munnar', 'Kerala', 'Tea Gardens', 'Hills'],
    featured: false,
    aspect: 'square',
  },
  {
    id: 'thailand-phuket',
    title: 'Island Hopping & Limestone Cliffs',
    location: 'Phuket & Krabi',
    stateCountry: 'Thailand',
    category: 'international',
    categoryLabel: 'International Wonders',
    imageSrc: '/assets/images/packageimages/thailandimage.webp',
    description: 'Speedboat rides to hidden coves, emerald lagoons, lively night markets, and thrilling water adventures.',
    tags: ['Thailand', 'Phuket', 'Phi Phi', 'Islands'],
    featured: false,
    aspect: 'wide',
  },
  {
    id: 'rajasthan-camels',
    title: 'Sunset Camel Safari in Thar Desert',
    location: 'Jaisalmer & Thar Desert',
    stateCountry: 'Rajasthan',
    category: 'heritage',
    categoryLabel: 'Heritage & Culture',
    imageSrc: '/assets/images/packageimages/rajasthan-camel.webp',
    description: 'Ride across golden sand dunes under starlit desert skies with traditional Rajasthani folk music and cultural dance.',
    tags: ['Rajasthan', 'Jaisalmer', 'Desert Safari', 'Thar'],
    featured: false,
    aspect: 'tall',
  },
  {
    id: 'nepal-pokhara',
    title: 'Peaceful Lakes & Annapurna Vistas',
    location: 'Phewa Lake, Pokhara',
    stateCountry: 'Nepal',
    category: 'international',
    categoryLabel: 'International Wonders',
    imageSrc: '/assets/images/packageimages/pokhra.webp',
    description: 'Tranquil boating on Phewa Lake with the towering, snow-capped Annapurna mountain range mirrored in the water.',
    tags: ['Nepal', 'Pokhara', 'Annapurna', 'Lakes'],
    featured: false,
    aspect: 'square',
  },
  {
    id: 'bhutan-dzongs',
    title: 'Kingdom of Happiness & Ancient Monasteries',
    location: 'Paro & Thimphu',
    stateCountry: 'Bhutan',
    category: 'international',
    categoryLabel: 'International Wonders',
    imageSrc: '/assets/images/packageimages/bhutan.webp',
    description: 'Discover the untouched kingdom of Bhutan, famous for its Tiger’s Nest monastery, fortress dzongs, and tranquil mountain air.',
    tags: ['Bhutan', 'Paro', 'Monastery', 'Himalayas'],
    featured: false,
    aspect: 'wide',
  },
  {
    id: 'jibhi-tirthan',
    title: 'Hidden Himalayan Waterfalls & Wooden Cottages',
    location: 'Jibhi & Tirthan Valley',
    stateCountry: 'Himachal Pradesh',
    category: 'mountains',
    categoryLabel: 'Himalayan & Mountains',
    imageSrc: '/assets/images/packageimages/jibhi-tirthan.webp',
    description: 'Crystal clear trout streams, dense pine woods, and quaint traditional wooden chalets away from the tourist crowds.',
    tags: ['Jibhi', 'Tirthan', 'Hidden Gem', 'Waterfalls'],
    featured: false,
    aspect: 'square',
  },
  {
    id: 'valley-of-flowers',
    title: 'UNESCO Alpine Botanical Paradise',
    location: 'Chamoli',
    stateCountry: 'Uttarakhand',
    category: 'mountains',
    categoryLabel: 'Himalayan & Mountains',
    imageSrc: '/assets/images/packageimages/valley-of-flower.webp',
    description: 'Endless meadows of rare, endemic alpine flora framed by rugged snow-capped Himalayan ridges in full bloom.',
    tags: ['Uttarakhand', 'Valley of Flowers', 'Trek', 'Floral'],
    featured: false,
    aspect: 'tall',
  },
];

type CategoryFilter = 'all' | 'mountains' | 'beaches' | 'heritage' | 'international' | 'adventure' | 'honeymoon';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const [likedMap, setLikedMap] = useState<{ [key: string]: boolean }>({});
  const [likeCountMap, setLikeCountMap] = useState<{ [key: string]: number }>({});
  const [copiedNotification, setCopiedNotification] = useState(false);

  // Initialize randomized like counts for realism
  useEffect(() => {
    const initialLikes: { [key: string]: number } = {};
    galleryData.forEach((item, i) => {
      initialLikes[item.id] = 42 + ((i * 17) % 65);
    });
    setLikeCountMap(initialLikes);
  }, []);

  // Filtered items
  const filteredItems = useMemo(() => {
    return galleryData.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCategory;

      const matchesSearch =
        item.title.toLowerCase().includes(query) ||
        item.location.toLowerCase().includes(query) ||
        item.stateCountry.toLowerCase().includes(query) ||
        item.tags.some((t) => t.toLowerCase().includes(query)) ||
        item.categoryLabel.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Categories list with count
  const categories: { key: CategoryFilter; label: string; count: number }[] = useMemo(() => {
    return [
      { key: 'all', label: 'All Highlights', count: galleryData.length },
      {
        key: 'mountains',
        label: 'Himalayan & Mountains',
        count: galleryData.filter((i) => i.category === 'mountains').length,
      },
      {
        key: 'beaches',
        label: 'Tropical & Beaches',
        count: galleryData.filter((i) => i.category === 'beaches').length,
      },
      {
        key: 'heritage',
        label: 'Heritage & Culture',
        count: galleryData.filter((i) => i.category === 'heritage').length,
      },
      {
        key: 'international',
        label: 'International Wonders',
        count: galleryData.filter((i) => i.category === 'international').length,
      },
      {
        key: 'adventure',
        label: 'Adventure & Thrills',
        count: galleryData.filter((i) => i.category === 'adventure').length,
      },
      {
        key: 'honeymoon',
        label: 'Honeymoon & Romance',
        count: galleryData.filter((i) => i.category === 'honeymoon').length,
      },
    ];
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') {
        setActiveLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActiveLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % filteredItems.length : null
        );
      } else if (e.key === 'ArrowLeft') {
        setActiveLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, filteredItems]);

  const toggleLike = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setLikedMap((prev) => {
      const isLiked = !prev[id];
      setLikeCountMap((counts) => ({
        ...counts,
        [id]: (counts[id] || 0) + (isLiked ? 1 : -1),
      }));
      return { ...prev, [id]: isLiked };
    });
  };

  const handleShare = (e: React.MouseEvent, item: GalleryItem) => {
    e.stopPropagation();
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(`${window.location.origin}/gallery?highlight=${item.id}`);
      setCopiedNotification(true);
      setTimeout(() => setCopiedNotification(false), 2500);
    }
  };

  const activeItem = activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  return (
    <main className="flex flex-col w-full overflow-x-hidden bg-[#FAFAF8] text-gray-800">
      {/* Toast Notification */}
      {copiedNotification && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#111827] text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-gray-700 animate-bounce">
          <BsCheckLg className="text-[#f26c22] text-lg" />
          <span className="text-[14px] font-medium">Link copied to clipboard!</span>
        </div>
      )}

      {/* ─── Hero Section ─── */}
      <section className="relative w-full min-h-[460px] md:min-h-[520px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/packageimages/balihero.webp"
            alt="Zoyo Trip Holidays Gallery Hero"
            fill
            className="w-full h-full object-cover scale-105"
            style={{ filter: 'brightness(0.35)' }}
            priority
          />
          <div className="absolute inset-0 " />
          <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#f26c22]/20 blur-[130px] pointer-events-none" />
          <div className="absolute bottom-10 right-1/4 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#1E6AD4]/25 blur-[130px] pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center flex flex-col items-center">
          {/* Breadcrumb Pill */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-white text-[12px] sm:text-[13px] font-medium mb-5 shadow-lg">
            <Link href="/" className="hover:text-[#f26c22] transition-colors flex items-center gap-1.5">
              <span>Home</span>
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-[#f26c22] font-semibold flex items-center gap-1">
              <HiOutlineSparkles className="text-sm" /> Travel Gallery
            </span>
          </div>

          <h1 className="text-[26px] xs:text-[30px] sm:text-[44px] md:text-[52px] font-extrabold text-white leading-[1.18] sm:leading-[1.14] tracking-tight max-w-[980px] mb-4">
            Moments Captured,{' '}
            <span className="bg-gradient-to-r from-[#f26c22] via-[#ffa347] to-[#ffd000] bg-clip-text text-transparent">
              Timeless Adventures
            </span>
          </h1>

          <p className="text-[14px] sm:text-[17px] md:text-[19px] text-gray-200/90 max-w-[760px] mx-auto leading-relaxed font-light mb-7">
            Immerse yourself in real glimpses from our journeys across the mighty Himalayas, tropical coastlines, ancient heritage corridors, and iconic global wonders.
          </p>

          {/* Quick Stats Bar in Hero */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl sm:rounded-3xl p-3 sm:p-5 max-w-[820px] w-full text-white shadow-xl">
            <div className="flex flex-col items-center justify-center p-1.5">
              <span className="text-[19px] sm:text-[26px] font-extrabold text-[#ffa347]">500+</span>
              <span className="text-[11px] sm:text-[13px] text-gray-300 font-medium">Curated Spots</span>
            </div>
            <div className="flex flex-col items-center justify-center p-1.5 border-l border-white/10">
              <span className="text-[19px] sm:text-[26px] font-extrabold text-[#ffa347]">24K+</span>
              <span className="text-[11px] sm:text-[13px] text-gray-300 font-medium">Delighted Travelers</span>
            </div>
            <div className="flex flex-col items-center justify-center p-1.5 border-t sm:border-t-0 sm:border-l border-white/10">
              <span className="text-[19px] sm:text-[26px] font-extrabold text-[#ffa347]">50+</span>
              <span className="text-[11px] sm:text-[13px] text-gray-300 font-medium">Destinations</span>
            </div>
            <div className="flex flex-col items-center justify-center p-1.5 border-t sm:border-t-0 border-l border-white/10">
              <div className="flex items-center gap-1 text-[19px] sm:text-[26px] font-extrabold text-[#ffa347]">
                <span>4.9</span>
                <FaStar className="text-[14px] sm:text-[16px] text-amber-400" />
              </div>
              <span className="text-[11px] sm:text-[13px] text-gray-300 font-medium">Guest Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Filter & Search Control Panel ─── */}
      <section className="relative w-full max-w-[1340px] mx-auto px-3 sm:px-6 lg:px-10 -mt-6 z-20">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 shadow-[0_15px_45px_rgba(0,0,0,0.07)] border border-gray-100/80">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-[320px] lg:w-[380px]">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="text"
                placeholder="Search destination, state, tags (e.g. Kashmir, Beach)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#f8fafc] border border-gray-200 rounded-2xl pl-11 pr-4 py-3 text-[14px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#f26c22] focus:ring-2 focus:ring-[#f26c22]/15 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs bg-gray-200 hover:bg-gray-300 text-gray-600 rounded-full w-5 h-5 flex items-center justify-center"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Total Results Count */}
            <div className="flex items-center gap-2 text-[13px] text-gray-500 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#f26c22]" />
              <span>
                Showing <strong className="text-gray-900 font-bold">{filteredItems.length}</strong> travel memories
              </span>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-2 pt-4 mt-2 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`shrink-0 flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-2xl text-[13px] sm:text-[13.5px] font-bold transition-all duration-300 ${isActive
                    ? 'bg-gradient-to-r from-[#f26c22] to-[#e0560e] text-white shadow-[0_8px_20px_rgba(242,108,34,0.3)] scale-102'
                    : 'bg-[#f8fafc] text-gray-600 hover:bg-gray-100 hover:text-gray-900 border border-gray-200/70'
                    }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${isActive ? 'bg-white/25 text-white' : 'bg-gray-200/80 text-gray-600'
                      }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Gallery Grid ─── */}
      <section className="relative w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
        {filteredItems.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 sm:p-16 text-center border border-gray-100 shadow-sm max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-3xl bg-[#f26c22]/10 text-[#f26c22] flex items-center justify-center text-2xl mx-auto mb-4">
              <FaCamera />
            </div>
            <h3 className="text-[20px] font-bold text-gray-900 mb-2">No photos found</h3>
            <p className="text-gray-500 text-[14px] mb-6">
              We couldn’t find any photos matching &quot;{searchQuery}&quot;. Try exploring other categories or reset search.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="bg-[#f26c22] hover:bg-[#e0560e] text-white font-bold px-6 py-2.5 rounded-full text-[13.5px] transition-all shadow-md"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
            {filteredItems.map((item, index) => {
              const isLiked = likedMap[item.id];
              const likes = likeCountMap[item.id] || 45;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveLightboxIndex(index)}
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-[0_6px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] border border-gray-100 transition-all duration-500 hover:-translate-y-2 cursor-pointer flex flex-col justify-between"
                >
                  {/* Image Container */}
                  <div className="relative w-full h-[260px] sm:h-[280px] overflow-hidden bg-gray-100">
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />

                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

                    {/* Category Badge Top Left */}
                    <div className="absolute top-3.5 left-3.5 z-10">
                      <span className="bg-black/50 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                        {item.categoryLabel}
                      </span>
                    </div>

                    {/* Top Right Action Icons */}
                    <div className="absolute top-3.5 right-3.5 z-10 flex items-center gap-2">
                      {/* Like Button */}
                      <button
                        onClick={(e) => toggleLike(e, item.id)}
                        className={`w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md border transition-all duration-300 shadow-md ${isLiked
                          ? 'bg-red-500 text-white border-red-400 scale-110'
                          : 'bg-black/40 text-white border-white/20 hover:bg-black/60'
                          }`}
                        title="Favorite"
                      >
                        {isLiked ? <FaHeart className="text-sm" /> : <FaRegHeart className="text-sm" />}
                      </button>

                      {/* Expand Icon */}
                      <div className="w-9 h-9 rounded-full bg-black/40 text-white border border-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-[#f26c22] group-hover:border-[#f26c22] transition-all duration-300 shadow-md">
                        <FaExpand className="text-xs" />
                      </div>
                    </div>

                    {/* Floating Info on Image Overlay */}
                    <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10 text-white">
                      <div className="flex items-center gap-1.5 text-[12px] font-semibold text-[#ffa347] mb-1">
                        <FaMapMarkerAlt className="text-xs" />
                        <span>{item.location}, {item.stateCountry}</span>
                      </div>
                      <h3 className="text-[16.5px] font-bold leading-snug line-clamp-2 drop-shadow-sm group-hover:text-[#ffa347] transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Bottom Meta */}
                  <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow">
                    <p className="text-gray-500 text-[13px] leading-relaxed line-clamp-2 mb-4">
                      {item.description}
                    </p>

                    {/* Tags & Action */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-[12px]">
                      <div className="flex items-center gap-1.5 text-gray-400">
                        <FaHeart className={isLiked ? 'text-red-500 text-xs' : 'text-gray-400 text-xs'} />
                        <span className="font-semibold text-gray-600">{likes} likes</span>
                      </div>

                      <span className="font-bold text-[#1E6AD4] group-hover:text-[#f26c22] transition-colors flex items-center gap-1">
                        <span>View Details</span>
                        <BsArrowRight className="group-hover:translate-x-1 transition-transform text-xs" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* ─── Lightbox Modal ─── */}
      {activeItem && activeLightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 transition-all duration-300 animate-fadeIn"
          onClick={() => setActiveLightboxIndex(null)}
        >
          {/* Close Button Top Right */}
          <button
            onClick={() => setActiveLightboxIndex(null)}
            className="absolute top-5 right-5 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 flex items-center justify-center transition-all hover:scale-105 shadow-xl"
            title="Close Preview (Esc)"
          >
            <FaTimes className="text-lg" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveLightboxIndex((prev) =>
                prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
              );
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white border border-white/20 flex items-center justify-center transition-all hover:scale-110 shadow-2xl backdrop-blur-md"
            title="Previous (Left Arrow)"
          >
            <FaChevronLeft className="text-base" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveLightboxIndex((prev) =>
                prev !== null ? (prev + 1) % filteredItems.length : null
              );
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white border border-white/20 flex items-center justify-center transition-all hover:scale-110 shadow-2xl backdrop-blur-md"
            title="Next (Right Arrow)"
          >
            <FaChevronRight className="text-base" />
          </button>

          {/* Modal Container */}
          <div
            className="relative bg-[#111827] border border-white/10 rounded-3xl max-w-[1100px] w-full max-h-[92vh] overflow-y-auto overflow-x-hidden shadow-[0_25px_70px_rgba(0,0,0,0.8)] text-white grid grid-cols-1 lg:grid-cols-12 gap-0"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left: Big Image View */}
            <div className="lg:col-span-8 relative min-h-[340px] sm:min-h-[480px] lg:min-h-[580px] bg-black flex items-center justify-center overflow-hidden">
              <Image
                src={activeItem.imageSrc}
                alt={activeItem.title}
                fill
                priority
                className="object-contain"
              />

              {/* Counter Badge */}
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-[12px] font-bold text-gray-200">
                {activeLightboxIndex + 1} / {filteredItems.length}
              </div>
            </div>

            {/* Right: Details & Action Sidebar */}
            <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-b from-[#111827] to-[#1a2234] border-t lg:border-t-0 lg:border-l border-white/10">
              <div>
                {/* Category & Location */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11.5px] font-bold text-[#f26c22] bg-[#f26c22]/15 px-3 py-1 rounded-full uppercase tracking-wider">
                    {activeItem.categoryLabel}
                  </span>
                  <button
                    onClick={(e) => toggleLike(e, activeItem.id)}
                    className={`flex items-center gap-1.5 text-[12.5px] px-3 py-1 rounded-full border transition-all ${likedMap[activeItem.id]
                      ? 'bg-red-500/20 text-red-400 border-red-500/40'
                      : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
                      }`}
                  >
                    <FaHeart className={likedMap[activeItem.id] ? 'text-red-500' : 'text-gray-400'} />
                    <span>{likeCountMap[activeItem.id] || 45}</span>
                  </button>
                </div>

                <h2 className="text-[22px] sm:text-[24px] font-black text-white leading-tight mb-2">
                  {activeItem.title}
                </h2>

                <div className="flex items-center gap-1.5 text-[13.5px] text-[#ffa347] font-semibold mb-4">
                  <FaMapMarkerAlt />
                  <span>{activeItem.location}, {activeItem.stateCountry}</span>
                </div>

                <p className="text-[14px] text-gray-300 leading-relaxed mb-6">
                  {activeItem.description}
                </p>

                {/* Tags */}
                <div className="mb-6">
                  <span className="text-[12px] font-bold text-gray-400 block mb-2 uppercase tracking-wider">
                    Highlights & Tags
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeItem.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11.5px] bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-full font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                <Link
                  href="/contact"
                  className="w-full bg-gradient-to-r from-[#f26c22] to-[#e0560e] hover:from-[#e0560e] hover:to-[#c44705] text-white py-3.5 rounded-2xl font-bold text-[14.5px] text-center transition-all duration-300 hover:scale-102 shadow-[0_10px_25px_rgba(242,108,34,0.35)] flex items-center justify-center gap-2"
                >
                  <FaCompass />
                  <span>Book a Tour to This Spot</span>
                </Link>

                <a
                  href={`https://wa.me/918091660060?text=Hi%20Zoyo%20Trip%20Holidays,%20I%20am%20interested%20in%20visiting%20${encodeURIComponent(
                    activeItem.title + ' (' + activeItem.location + ')'
                  )}.%20Please%20share%20package%20details.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 rounded-2xl font-bold text-[14.5px] text-center transition-all duration-300 hover:scale-102 shadow-md flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="text-lg" />
                  <span>Inquire on WhatsApp</span>
                </a>

                <button
                  onClick={(e) => handleShare(e, activeItem)}
                  className="w-full bg-white/5 hover:bg-white/10 text-gray-300 py-2.5 rounded-2xl font-semibold text-[13px] text-center transition-all border border-white/10 flex items-center justify-center gap-2"
                >
                  <FaShareAlt className="text-xs" />
                  <span>Share This Image</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─── Experience Showcase / Video & Reels Section ─── */}
      <section className="relative w-full bg-[#FFF9F3] py-20 px-6 sm:px-10 lg:px-20 border-y border-orange-100 overflow-hidden">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#f26c22]/10 text-[#f26c22] text-[12.5px] font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-widest">
              <BsStars className="text-sm" /> Real Guest Journeys
            </div>
            <h2 className="text-[32px] sm:text-[42px] font-black text-gray-900 leading-tight">
              Why Our Travelers Love Every Frame
            </h2>
            <p className="text-gray-600 text-[15.5px] mt-3 max-w-xl mx-auto">
              Every photograph in our gallery is taken on actual guest departures, curated customized itineraries, and luxury honeymoon holidays.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-orange-100 shadow-[0_10px_30px_rgba(242,108,34,0.06)] hover:-translate-y-1.5 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#f26c22] to-[#ffa347] flex items-center justify-center text-white text-2xl mb-6 shadow-md">
                <FaCamera />
              </div>
              <h3 className="text-[19px] font-bold text-gray-900 mb-3">100% Real Guest Shots</h3>
              <p className="text-gray-600 text-[14px] leading-relaxed">
                Authentic vistas from Himachal, Kashmir, Spiti, Kerala, Bali, and Dubai captured by our joyful travelers and tour coordinators.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-orange-100 shadow-[0_10px_30px_rgba(242,108,34,0.06)] hover:-translate-y-1.5 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1E6AD4] to-[#3b82f6] flex items-center justify-center text-white text-2xl mb-6 shadow-md">
                <FaCompass />
              </div>
              <h3 className="text-[19px] font-bold text-gray-900 mb-3">Handcrafted Itineraries</h3>
              <p className="text-gray-600 text-[14px] leading-relaxed">
                Every photo represents a customized tour designed exclusively around personal preferences, top-tier accommodations, and private transit.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-orange-100 shadow-[0_10px_30px_rgba(242,108,34,0.06)] hover:-translate-y-1.5 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white text-2xl mb-6 shadow-md">
                <FaStar />
              </div>
              <h3 className="text-[19px] font-bold text-gray-900 mb-3">5-Star On-Tour Care</h3>
              <p className="text-gray-600 text-[14px] leading-relaxed">
                Enjoy complete peace of mind with 24/7 dedicated ground assistance, licensed chauffeurs, and instant trip consultations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Call To Action Banner ─── */}
      <section className="relative w-full py-24 px-6 sm:px-10 overflow-hidden">
        <Image
          src="/assets/images/packageimages/keralahero.webp"
          alt="Plan Your Trip With Zoyo"
          fill
          className="object-cover"
          style={{ filter: 'brightness(0.24)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-[#f26c22]/40 to-black/80" />

        <div className="relative z-10 max-w-[880px] mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 text-white text-[12px] font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
            <FaCamera /> Create Your Own Memories
          </div>

          <h2 className="text-[34px] sm:text-[46px] md:text-[52px] font-black leading-tight mb-6">
            Ready to Be Part of Our Next Story?
          </h2>

          <p className="text-gray-200 text-[16px] sm:text-[18px] mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Let our destination experts customize your dream vacation with luxury stays, private sightseeing, helicopter rides, and uncompromised comfort.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-[#f26c22] to-[#e0560e] hover:from-[#e0560e] hover:to-[#c44705] text-white px-9 py-4 rounded-full font-bold text-[15px] transition-all duration-300 hover:scale-105 shadow-[0_10px_30px_rgba(242,108,34,0.4)] flex items-center gap-2.5"
            >
              <span>Get Free Custom Itinerary</span>
              <BsArrowRight />
            </Link>

            <a
              href="https://wa.me/918091660060"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba59] text-white px-8 py-4 rounded-full font-bold text-[15px] transition-all duration-300 hover:scale-105 shadow-xl flex items-center gap-2.5"
            >
              <FaWhatsapp className="text-lg" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href="tel:+918091660060"
              className="bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/40 text-white px-8 py-4 rounded-full font-bold text-[15px] transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2.5"
            >
              <FaPhoneAlt className="text-xs text-[#f26c22]" />
              <span>+91 8091660060</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
