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
  FaTimesCircle,
  FaMountain,
  FaHotel,
  FaCar,
  FaUtensils,
  FaChevronDown,
  FaPaperPlane,
  FaShieldAlt,
  FaAward,
} from 'react-icons/fa';
import { BsArrowRight, BsCheckLg, BsStars } from 'react-icons/bs';

interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  activities: string[];
  meals: string;
  stay: string;
}

interface TourPackage {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  location: string;
  duration: string;
  price: string;
  originalPrice: string;
  rating: number;
  reviewsCount: number;
  category: string;
  heroImage: string;
  gallery: string[];
  overview: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: ItineraryDay[];
  hotelType: string;
  pickupDrop: string;
}

export default function UttarakhandPackageDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  
  // Using temporary data structure since Uttarakhand might not be in allDestinations yet
  const uttarakhandPackages: TourPackage[] = [
    {
        id: 'uk-1',
        slug: 'uttarakhand-hill-stations',
        title: 'Uttarakhand Devbhoomi - Rishikesh & Nainital',
        subtitle: 'Ganga Aarti, river rafting, Naini Lake boating & Mussoorie hills',
        location: 'Rishikesh, Nainital, Mussoorie',
        duration: '5 Days / 4 Nights',
        price: '₹13,999',
        originalPrice: '₹18,499',
        rating: 4.8,
        reviewsCount: 210,
        category: 'Adventure',
        heroImage: '/assets/images/packageimages/nanital.webp', 
        gallery: ['https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop'],
        overview: 'Explore the spiritual and adventure capital of India. Experience the divine Ganga Aarti in Rishikesh, thrilling white-water rafting, serene Naini Lake in Nainital, and colonial charm of Mussoorie.',
        highlights: [
          'Ganga Aarti Ceremony at Triveni Ghat',
          'River Rafting in Rishikesh (Grade III+ Rapids)',
          'Naini Lake Boating & Mall Road Shopping',
          'Kempty Falls & Company Garden in Mussoorie',
        ],
        inclusions: [
          '4 Nights 3/4-Star Deluxe Hotels',
          'Daily Breakfast & Dinner',
          'Private sanitized AC cab with driver',
          'All toll taxes, parking & fuel charges',
        ],
        exclusions: ['Airfare / Train tickets', 'Monument entrance tickets', 'Personal expenses', 'Adventure activity charges'],
        hotelType: '3-Star Deluxe Hotels & Hill Resorts',
        pickupDrop: 'Dehradun Airport / Railway Station',
        itinerary: [],
      },
      {
        id: 'uk-2',
        slug: 'uttarakhand-char-dham-spiritual-journey',
        title: 'Uttarakhand Char Dham Spiritual Journey',
        subtitle: 'Sacred temples, Himalayan valleys, holy rivers & divine mountain landscapes',
        location: 'Haridwar, Barkot, Yamunotri, Uttarkashi, Kedarnath, Badrinath',
        duration: '10 Days / 9 Nights',
        price: '₹29,999',
        originalPrice: '₹38,999',
        rating: 4.9,
        reviewsCount: 285,
        category: 'Spiritual',

        heroImage: '/assets/images/packageimages/chardham.webp', 

        gallery: [
          'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=800&auto=format&fit=crop',
        ],

        overview:
          'Embark on a sacred Himalayan journey covering the revered Char Dham temples of Uttarakhand. Experience the spiritual atmosphere of Yamunotri, Gangotri, Kedarnath and Badrinath while travelling through breathtaking mountain valleys, holy rivers and peaceful Himalayan villages.',

        highlights: [
          'Visit the sacred Yamunotri Temple',
          'Experience divine Gangotri Dham',
          'Kedarnath Temple Darshan in the Himalayas',
          'Visit the sacred Badrinath Temple',
          'Ganga Aarti at Haridwar',
          'Scenic Himalayan mountain drives',
          'Holy rivers and traditional mountain villages',
        ],

        inclusions: [
          '9 Nights accommodation in Deluxe Hotels & Guesthouses',
          'Daily Breakfast & Dinner',
          'Private dedicated AC vehicle with experienced driver',
          'All toll taxes, parking & fuel charges',
          'Driver allowances and applicable permits',
        ],

        exclusions: [
          'Airfare / Train tickets',
          'Helicopter services',
          'Temple donations and special darshan',
          'Personal expenses',
          'Travel insurance',
        ],

        hotelType: '3-Star Deluxe Hotels, Guesthouses & Hill Resorts',
        pickupDrop: 'Haridwar / Dehradun Airport / Railway Station',

        itinerary: [
          {
            day: 1,
            title: 'Haridwar Arrival & Ganga Aarti',
            description:
              'Arrive in Haridwar and check into your hotel. In the evening, experience the divine Ganga Aarti at Har Ki Pauri.',
            activities: [
              'Airport / Railway Station Pickup',
              'Hotel Check-in',
              'Har Ki Pauri',
              'Ganga Aarti',
              'Evening Market Walk',
            ],
            meals: 'Dinner',
            stay: 'Haridwar Deluxe Hotel',
          },

          {
            day: 2,
            title: 'Haridwar to Barkot',
            description:
              'Begin your Himalayan journey towards Barkot through scenic mountain roads and beautiful valleys.',
            activities: [
              'Breakfast & Hotel Check-out',
              'Scenic Mountain Drive',
              'Dehradun Valley',
              'Mussoorie Road',
              'Barkot Arrival',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Barkot Hill Hotel',
          },

          {
            day: 3,
            title: 'Yamunotri Dham Excursion',
            description:
              'Travel towards Janki Chatti and begin the journey to the sacred Yamunotri Temple. Return to Barkot after darshan.',
            activities: [
              'Early Morning Departure',
              'Janki Chatti',
              'Yamunotri Trek',
              'Yamunotri Temple Darshan',
              'Hot Water Springs',
              'Return to Barkot',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Barkot Hill Hotel',
          },

          {
            day: 4,
            title: 'Barkot to Uttarkashi',
            description:
              'Drive towards Uttarkashi through beautiful Himalayan landscapes and riverside roads.',
            activities: [
              'Breakfast & Check-out',
              'Mountain Drive',
              'Bhagirathi River Views',
              'Uttarkashi Arrival',
              'Vishwanath Temple',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Uttarkashi Deluxe Hotel',
          },

          {
            day: 5,
            title: 'Gangotri Dham Excursion',
            description:
              'Travel through spectacular Himalayan scenery towards Gangotri and visit the sacred Gangotri Temple.',
            activities: [
              'Breakfast',
              'Gangotri Drive',
              'Bhagirathi River',
              'Gangotri Temple',
              'Surya Kund',
              'Return to Uttarkashi',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Uttarkashi Deluxe Hotel',
          },

          {
            day: 6,
            title: 'Uttarkashi to Guptkashi',
            description:
              'Continue towards the Kedarnath region through beautiful mountain roads and scenic valleys.',
            activities: [
              'Breakfast & Check-out',
              'Scenic Himalayan Drive',
              'Rudraprayag',
              'Alaknanda River',
              'Guptkashi Arrival',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Guptkashi Deluxe Hotel',
          },

          {
            day: 7,
            title: 'Kedarnath Dham Yatra',
            description:
              'Travel towards Sonprayag and begin the journey to Kedarnath, one of the most sacred Shiva temples in India.',
            activities: [
              'Early Morning Departure',
              'Sonprayag',
              'Gaurikund',
              'Kedarnath Trek / Helicopter Option',
              'Kedarnath Temple Darshan',
              'Evening Aarti',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Kedarnath / Guptkashi Accommodation',
          },

          {
            day: 8,
            title: 'Kedarnath to Badrinath',
            description:
              'Continue towards Badrinath through dramatic Himalayan landscapes and beautiful valleys.',
            activities: [
              'Breakfast',
              'Mountain Drive',
              'Joshimath',
              'Alaknanda Valley',
              'Badrinath Arrival',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Badrinath Deluxe Hotel',
          },

          {
            day: 9,
            title: 'Badrinath Temple & Return',
            description:
              'Visit Badrinath Temple in the morning before beginning the return journey towards the lower Himalayan region.',
            activities: [
              'Badrinath Temple Darshan',
              'Mana Village',
              'Vyas Cave',
              'Scenic Drive',
              'Rudraprayag',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Rudraprayag Deluxe Hotel',
          },

          {
            day: 10,
            title: 'Departure from Uttarakhand',
            description:
              'After breakfast, continue towards Haridwar or Dehradun for your onward journey.',
            activities: [
              'Breakfast',
              'Hotel Check-out',
              'Return Drive',
              'Haridwar / Dehradun Drop',
            ],
            meals: 'Breakfast',
            stay: 'End of Tour',
          },
        ],
      },

      {
        id: 'uk-3',
        slug: 'mussoorie-dhanaulti-kanatal-escape',
        title: 'Mussoorie Dhanaulti & Kanatal Hill Escape',
        subtitle: 'Misty mountains, pine forests, waterfalls, peaceful valleys & scenic viewpoints',
        location: 'Mussoorie, Dhanaulti, Kanatal',
        duration: '5 Days / 4 Nights',
        price: '₹12,499',
        originalPrice: '₹16,999',
        rating: 4.8,
        reviewsCount: 198,
        category: 'Nature',

        heroImage: '/assets/images/packageimages/ukimagemnew.webp', 

        gallery: [
          'https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop',
        ],

        overview:
          'Escape into the peaceful hills of Uttarakhand with a relaxing journey through Mussoorie, Dhanaulti and Kanatal. Enjoy misty mountain views, pine forests, waterfalls, charming hill roads and peaceful evenings away from the busy city life.',

        highlights: [
          'Explore the famous Mall Road of Mussoorie',
          'Visit Kempty Falls',
          'Scenic Dhanaulti Eco Park',
          'Peaceful Kanatal mountain views',
          'Surkanda Devi Temple visit',
          'Pine forest walks and nature experiences',
        ],

        inclusions: [
          '4 Nights accommodation in 3-Star Hill Resorts',
          'Daily Breakfast & Dinner',
          'Private dedicated AC cab with driver',
          'All toll taxes, parking & fuel charges',
        ],

        exclusions: [
          'Airfare / Train tickets',
          'Adventure activities',
          'Monument / attraction entry tickets',
          'Personal expenses',
          'Travel insurance',
        ],

        hotelType: '3-Star Hill Resorts & Boutique Hotels',
        pickupDrop: 'Dehradun Airport / Railway Station',

        itinerary: [
          {
            day: 1,
            title: 'Arrival in Mussoorie',
            description:
              'Arrive in Dehradun and drive towards Mussoorie. Check into your hotel and enjoy the evening around Mall Road.',
            activities: [
              'Airport / Railway Station Pickup',
              'Mountain Drive',
              'Hotel Check-in',
              'Mall Road',
              'The Camel Back Road',
            ],
            meals: 'Dinner',
            stay: 'Mussoorie Hill Resort',
          },

          {
            day: 2,
            title: 'Mussoorie Local Sightseeing',
            description:
              'Explore the popular attractions of Mussoorie including Kempty Falls, Company Garden and scenic viewpoints.',
            activities: [
              'Kempty Falls',
              'Company Garden',
              'Gun Hill',
              'Lal Tibba',
              'Mall Road Shopping',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Mussoorie Hill Resort',
          },

          {
            day: 3,
            title: 'Mussoorie to Dhanaulti',
            description:
              'Drive through beautiful pine forests towards peaceful Dhanaulti. Enjoy the fresh mountain air and scenic Himalayan views.',
            activities: [
              'Breakfast & Check-out',
              'Scenic Forest Drive',
              'Dhanaulti Eco Park',
              'Apple Orchards',
              'Sunset Point',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Dhanaulti Hill Resort',
          },

          {
            day: 4,
            title: 'Dhanaulti to Kanatal',
            description:
              'Continue towards Kanatal and explore its peaceful mountain landscapes. Visit Surkanda Devi Temple and enjoy nature walks.',
            activities: [
              'Breakfast',
              'Kanatal Drive',
              'Surkanda Devi Temple',
              'Pine Forest Walk',
              'Himalayan Viewpoint',
              'Bonfire Evening',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Kanatal Nature Resort',
          },

          {
            day: 5,
            title: 'Kanatal to Dehradun & Departure',
            description:
              'Enjoy breakfast and scenic morning views before driving back to Dehradun for your onward journey.',
            activities: [
              'Breakfast',
              'Resort Check-out',
              'Scenic Drive',
              'Dehradun Drop',
            ],
            meals: 'Breakfast',
            stay: 'End of Tour',
          },
        ],
      },

      {
        id: 'uk-4',
        slug: 'rishikesh-auli-joshimath-adventure',
        title: 'Rishikesh Auli & Joshimath Adventure',
        subtitle: 'River rafting, Himalayan cable car, snow peaks & thrilling mountain adventures',
        location: 'Rishikesh, Devprayag, Joshimath, Auli',
        duration: '6 Days / 5 Nights',
        price: '₹16,999',
        originalPrice: '₹22,999',
        rating: 4.9,
        reviewsCount: 235,
        category: 'Adventure',

        heroImage: '/assets/images/packageimages/rkshh.webp', 

        gallery: [
          'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop',
        ],

        overview:
          'Combine the adventure of Rishikesh with the spectacular snow-covered mountains of Auli. Enjoy river rafting, visit Devprayag, explore Joshimath and experience breathtaking Himalayan views from Auli.',

        highlights: [
          'White-water rafting in Rishikesh',
          'Ganga Aarti at Triveni Ghat',
          'Visit Devprayag Sangam',
          'Auli ropeway experience',
          'Snow-covered Himalayan mountain views',
          'Joshimath local sightseeing',
        ],

        inclusions: [
          '5 Nights accommodation in 3-Star Hotels & Hill Resorts',
          'Daily Breakfast & Dinner',
          'Private dedicated AC cab with driver',
          'River rafting activity',
          'All toll taxes, parking & fuel charges',
        ],

        exclusions: [
          'Airfare / Train tickets',
          'Additional adventure activities',
          'Personal expenses',
          'Monument / attraction entry fees',
          'Travel insurance',
        ],

        hotelType: '3-Star Hotels & Himalayan Hill Resorts',
        pickupDrop: 'Dehradun Airport / Railway Station',

        itinerary: [
          {
            day: 1,
            title: 'Arrival in Rishikesh',
            description:
              'Arrive in Dehradun and transfer to Rishikesh. Check into your hotel and enjoy the spiritual atmosphere of the Ganga.',
            activities: [
              'Airport Pickup',
              'Hotel Check-in',
              'Laxman Jhula Area',
              'Ganga Riverside',
              'Triveni Ghat',
              'Ganga Aarti',
            ],
            meals: 'Dinner',
            stay: 'Rishikesh Deluxe Hotel',
          },

          {
            day: 2,
            title: 'Rishikesh River Rafting & Adventure',
            description:
              'Enjoy an exciting river rafting experience on the Ganges followed by free time to explore the adventure capital of India.',
            activities: [
              'Breakfast',
              'River Rafting',
              'Ganga Riverside',
              'Beatles Ashram',
              'Local Cafe Experience',
              'Evening Leisure',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Rishikesh Deluxe Hotel',
          },

          {
            day: 3,
            title: 'Rishikesh to Joshimath via Devprayag',
            description:
              'Begin your Himalayan drive towards Joshimath through Devprayag and beautiful river valleys.',
            activities: [
              'Breakfast & Check-out',
              'Devprayag Sangam',
              'Alaknanda River',
              'Scenic Mountain Drive',
              'Joshimath Arrival',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Joshimath Deluxe Hotel',
          },

          {
            day: 4,
            title: 'Auli Himalayan Adventure',
            description:
              'Travel to Auli and enjoy spectacular views of the Himalayan peaks. Experience the famous ropeway and explore the beautiful mountain surroundings.',
            activities: [
              'Breakfast',
              'Auli Drive',
              'Auli Ropeway',
              'Himalayan Viewpoint',
              'Auli Meadow',
              'Photography',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Auli Hill Resort',
          },

          {
            day: 5,
            title: 'Auli to Joshimath Exploration',
            description:
              'Enjoy a peaceful morning in Auli before returning to Joshimath for local sightseeing and relaxation.',
            activities: [
              'Breakfast',
              'Auli Sunrise',
              'Nature Walk',
              'Joshimath Local Market',
              'Narsingh Temple',
              'Bonfire Evening',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Joshimath Deluxe Hotel',
          },

          {
            day: 6,
            title: 'Joshimath to Dehradun & Departure',
            description:
              'After breakfast, begin your scenic return journey to Dehradun for your onward journey.',
            activities: [
              'Breakfast',
              'Hotel Check-out',
              'Mountain Drive',
              'Dehradun Drop',
            ],
            meals: 'Breakfast',
            stay: 'End of Tour',
          },
        ],
      },

      {
        id: 'uk-5',
        slug: 'nainital-ranikhet-kausani-hill-tour',
        title: 'Nainital Ranikhet & Kausani Hill Tour',
        subtitle: 'Beautiful lakes, peaceful hill towns, Himalayan sunrise & colonial charm',
        location: 'Nainital, Ranikhet, Kausani',
        duration: '6 Days / 5 Nights',
        price: '₹15,499',
        originalPrice: '₹20,999',
        rating: 4.8,
        reviewsCount: 204,
        category: 'Nature',

        heroImage: '/assets/images/packageimages/almora.webp', 

        gallery: [
          'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=800&auto=format&fit=crop',
        ],

        overview:
          'Discover the peaceful beauty of Kumaon with a scenic journey through Nainital, Ranikhet and Kausani. Enjoy lake boating, pine forests, colonial architecture and spectacular Himalayan sunrise views.',

        highlights: [
          'Boating on beautiful Naini Lake',
          'Explore Nainital Mall Road',
          'Visit Snow View Point',
          'Peaceful Ranikhet hill landscapes',
          'Himalayan sunrise from Kausani',
          'Visit Anashakti Ashram and local temples',
        ],

        inclusions: [
          '5 Nights accommodation in 3-Star Hill Hotels',
          'Daily Breakfast & Dinner',
          'Private dedicated AC cab with driver',
          'Naini Lake boating',
          'All toll taxes, parking & fuel charges',
        ],

        exclusions: [
          'Airfare / Train tickets',
          'Cable car charges',
          'Personal expenses',
          'Adventure activities',
          'Travel insurance',
        ],

        hotelType: '3-Star Hill Hotels & Boutique Resorts',
        pickupDrop: 'Kathgodam Railway Station',

        itinerary: [
          {
            day: 1,
            title: 'Arrival in Nainital',
            description:
              'Arrive at Kathgodam and drive to Nainital. Check into your hotel and enjoy the evening around Naini Lake and Mall Road.',
            activities: [
              'Kathgodam Pickup',
              'Mountain Drive',
              'Hotel Check-in',
              'Naini Lake',
              'Mall Road',
            ],
            meals: 'Dinner',
            stay: 'Nainital Hill Hotel',
          },

          {
            day: 2,
            title: 'Nainital Lake & Local Sightseeing',
            description:
              'Explore Nainital’s major attractions including Snow View Point, Naina Devi Temple, Eco Cave Gardens and scenic viewpoints.',
            activities: [
              'Naina Devi Temple',
              'Snow View Point',
              'Eco Cave Gardens',
              'Naini Lake Boating',
              'Mall Road Shopping',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Nainital Hill Hotel',
          },

          {
            day: 3,
            title: 'Nainital to Ranikhet',
            description:
              'Drive towards the peaceful cantonment town of Ranikhet through beautiful pine and oak forests.',
            activities: [
              'Breakfast & Check-out',
              'Scenic Forest Drive',
              'Ranikhet Arrival',
              'Chaubatia Gardens',
              'Local Market',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Ranikhet Hill Resort',
          },

          {
            day: 4,
            title: 'Ranikhet Local Exploration',
            description:
              'Explore the peaceful surroundings of Ranikhet with temples, forest trails and panoramic Himalayan viewpoints.',
            activities: [
              'Breakfast',
              'Jhula Devi Temple',
              'Mankameshwar Temple',
              'Himalayan Viewpoint',
              'Pine Forest Walk',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Ranikhet Hill Resort',
          },

          {
            day: 5,
            title: 'Ranikhet to Kausani',
            description:
              'Drive towards Kausani, one of Uttarakhand’s most scenic hill stations known for its spectacular Himalayan panorama.',
            activities: [
              'Breakfast & Check-out',
              'Scenic Mountain Drive',
              'Kausani Arrival',
              'Anashakti Ashram',
              'Himalayan Sunset',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Kausani Hill Resort',
          },

          {
            day: 6,
            title: 'Kausani Sunrise & Departure',
            description:
              'Enjoy the famous Himalayan sunrise at Kausani before breakfast and departure towards Kathgodam.',
            activities: [
              'Himalayan Sunrise',
              'Breakfast',
              'Hotel Check-out',
              'Return Drive',
              'Kathgodam Drop',
            ],
            meals: 'Breakfast',
            stay: 'End of Tour',
          },
        ],
      },

      {
        id: 'uk-6',
        slug: 'corbett-nainital-wildlife-holiday',
        title: 'Corbett & Nainital Wildlife Holiday',
        subtitle: 'Jungle safari, Himalayan lakes, wildlife encounters & peaceful hill station views',
        location: 'Jim Corbett, Nainital',
        duration: '5 Days / 4 Nights',
        price: '₹14,999',
        originalPrice: '₹19,999',
        rating: 4.9,
        reviewsCount: 267,
        category: 'Wildlife',

        heroImage: '/assets/images/packageimages/nanitalnew.webp', 

        gallery: [
          'https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop',
        ],

        overview:
          'Experience the perfect combination of wildlife and hills with a trip to Jim Corbett National Park and Nainital. Enjoy an exciting jungle safari, spot diverse wildlife and then relax beside the beautiful Naini Lake.',

        highlights: [
          'Jeep Safari in Jim Corbett National Park',
          'Wildlife and bird photography',
          'Explore Corbett forest landscapes',
          'Naini Lake boating',
          'Naina Devi Temple',
          'Nainital Mall Road experience',
        ],

        inclusions: [
          '4 Nights accommodation in Wildlife Resort & Hill Hotel',
          'Daily Breakfast & Dinner',
          'Private dedicated AC cab with driver',
          '1 Jeep Jungle Safari',
          'Naini Lake boating',
          'All toll taxes, parking & fuel charges',
        ],

        exclusions: [
          'Airfare / Train tickets',
          'Additional safaris',
          'Personal expenses',
          'Camera / permit charges',
          'Travel insurance',
        ],

        hotelType: 'Wildlife Resort & 3-Star Hill Hotels',
        pickupDrop: 'Kathgodam / Ramnagar Railway Station',

        itinerary: [
          {
            day: 1,
            title: 'Arrival in Jim Corbett',
            description:
              'Arrive at Ramnagar and transfer to your wildlife resort. Relax in the peaceful forest surroundings.',
            activities: [
              'Railway Station Pickup',
              'Resort Check-in',
              'Forest Area',
              'Nature Walk',
              'Resort Leisure',
            ],
            meals: 'Dinner',
            stay: 'Corbett Wildlife Resort',
          },

          {
            day: 2,
            title: 'Corbett Jungle Safari',
            description:
              'Start the day with an exciting jeep safari through the forest zones of Jim Corbett National Park.',
            activities: [
              'Early Morning Jeep Safari',
              'Tiger Spotting',
              'Wildlife Photography',
              'Bird Watching',
              'Forest Exploration',
              'Resort Leisure',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Corbett Wildlife Resort',
          },

          {
            day: 3,
            title: 'Corbett to Nainital',
            description:
              'After breakfast, drive towards Nainital through scenic mountain roads. Enjoy an evening walk around the lake.',
            activities: [
              'Breakfast & Check-out',
              'Mountain Drive',
              'Nainital Arrival',
              'Naini Lake',
              'Mall Road',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Nainital Hill Hotel',
          },

          {
            day: 4,
            title: 'Nainital Sightseeing',
            description:
              'Explore the beautiful attractions of Nainital including Snow View Point, Naina Devi Temple and Eco Cave Gardens.',
            activities: [
              'Snow View Point',
              'Naina Devi Temple',
              'Eco Cave Gardens',
              'Naini Lake Boating',
              'Mall Road Shopping',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Nainital Hill Hotel',
          },

          {
            day: 5,
            title: 'Nainital to Kathgodam & Departure',
            description:
              'Enjoy breakfast and transfer to Kathgodam Railway Station for your onward journey.',
            activities: [
              'Breakfast',
              'Hotel Check-out',
              'Scenic Drive',
              'Kathgodam Drop',
            ],
            meals: 'Breakfast',
            stay: 'End of Tour',
          },
        ],
      },

      {
        id: 'uk-7',
        slug: 'chopta-tungnath-chandrashila-trek',
        title: 'Chopta Tungnath & Chandrashila Trek',
        subtitle: 'High-altitude meadows, sacred Tungnath temple, Himalayan trekking & sunrise views',
        location: 'Rishikesh, Chopta, Tungnath, Chandrashila',
        duration: '5 Days / 4 Nights',
        price: '₹12,999',
        originalPrice: '₹17,999',
        rating: 4.9,
        reviewsCount: 221,
        category: 'Trekking',

        heroImage: '/assets/images/packageimages/Tungnath-Trek.webp', 

        gallery: [
          'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop',
        ],

        overview:
          'Experience one of Uttarakhand’s most beautiful Himalayan trekking routes. Trek through the lush meadows of Chopta to Tungnath, the highest Shiva temple, and continue towards Chandrashila for spectacular panoramic Himalayan views.',

        highlights: [
          'Trek to sacred Tungnath Temple',
          'Chandrashila Summit sunrise experience',
          'Beautiful Chopta alpine meadows',
          'Panoramic Himalayan mountain views',
          'Scenic mountain villages and forests',
          'Bonfire and camping experience',
        ],

        inclusions: [
          '4 Nights accommodation in Hotels, Camps & Guesthouses',
          'Daily Breakfast & Dinner',
          'Private dedicated AC cab with driver',
          'Trekking assistance',
          'Camping accommodation in Chopta',
          'All toll taxes, parking & fuel charges',
        ],

        exclusions: [
          'Airfare / Train tickets',
          'Personal trekking equipment',
          'Porter charges',
          'Personal expenses',
          'Travel insurance',
        ],

        hotelType: 'Hill Hotels, Camps & Mountain Guesthouses',
        pickupDrop: 'Rishikesh / Dehradun',

        itinerary: [
          {
            day: 1,
            title: 'Arrival in Rishikesh',
            description:
              'Arrive in Rishikesh and check into your hotel. Enjoy the peaceful Ganga riverside and prepare for your Himalayan adventure.',
            activities: [
              'Pickup',
              'Hotel Check-in',
              'Ganga Riverside',
              'Laxman Jhula Area',
              'Ganga Aarti',
            ],
            meals: 'Dinner',
            stay: 'Rishikesh Deluxe Hotel',
          },

          {
            day: 2,
            title: 'Rishikesh to Chopta',
            description:
              'Drive towards Chopta through beautiful mountain valleys, forests and riverside landscapes.',
            activities: [
              'Breakfast & Check-out',
              'Devprayag',
              'Rudraprayag',
              'Mountain Drive',
              'Chopta Arrival',
              'Bonfire Evening',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Chopta Mountain Camp',
          },

          {
            day: 3,
            title: 'Tungnath Temple Trek',
            description:
              'Begin the scenic trek from Chopta towards Tungnath Temple through alpine meadows and beautiful Himalayan landscapes.',
            activities: [
              'Breakfast',
              'Tungnath Trek',
              'Forest Trail',
              'Tungnath Temple',
              'Himalayan Viewpoint',
              'Return to Chopta',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Chopta Mountain Camp',
          },

          {
            day: 4,
            title: 'Chandrashila Summit & Return',
            description:
              'Start early for the Chandrashila summit and witness spectacular Himalayan sunrise views before returning to Chopta.',
            activities: [
              'Early Morning Trek',
              'Chandrashila Summit',
              'Himalayan Sunrise',
              'Mountain Photography',
              'Return Trek',
              'Campfire Evening',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Chopta Mountain Camp',
          },

          {
            day: 5,
            title: 'Chopta to Rishikesh & Departure',
            description:
              'Enjoy breakfast and begin your return journey towards Rishikesh or Dehradun.',
            activities: [
              'Breakfast',
              'Camp Check-out',
              'Scenic Mountain Drive',
              'Rishikesh / Dehradun Drop',
            ],
            meals: 'Breakfast',
            stay: 'End of Tour',
          },
        ],
      },

      {
        id: 'uk-8',
        slug: 'haridwar-rishikesh-spiritual-retreat',
        title: 'Haridwar Rishikesh Spiritual Retreat',
        subtitle: 'Ganga Aarti, temples, yoga, meditation & peaceful Himalayan riverside experiences',
        location: 'Haridwar, Rishikesh, Neelkanth',
        duration: '4 Days / 3 Nights',
        price: '₹9,999',
        originalPrice: '₹13,999',
        rating: 4.8,
        reviewsCount: 245,
        category: 'Spiritual',

        heroImage: '/assets/images/packageimages/uk-tour.webp',

        gallery: [
          'https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?q=80&w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800&auto=format&fit=crop',
        ],

        overview:
          'Reconnect with yourself through a peaceful spiritual journey across Haridwar and Rishikesh. Experience sacred Ganga Aarti, ancient temples, yoga, meditation, ashrams and peaceful riverside moments in the foothills of the Himalayas.',

        highlights: [
          'Har Ki Pauri Ganga Aarti',
          'Rishikesh Triveni Ghat Aarti',
          'Visit ancient temples and ashrams',
          'Yoga and meditation experience',
          'Neelkanth Mahadev Temple',
          'Peaceful Ganga riverside walks',
        ],

        inclusions: [
          '3 Nights accommodation in 3-Star Hotels',
          'Daily Breakfast & Dinner',
          'Private dedicated AC cab with driver',
          'Yoga / Meditation session',
          'All toll taxes, parking & fuel charges',
        ],

        exclusions: [
          'Airfare / Train tickets',
          'Temple donations',
          'Personal expenses',
          'Adventure activities',
          'Travel insurance',
        ],

        hotelType: '3-Star Riverside & Spiritual Retreat Hotels',
        pickupDrop: 'Dehradun Airport / Haridwar Railway Station',

        itinerary: [
          {
            day: 1,
            title: 'Arrival in Haridwar & Ganga Aarti',
            description:
              'Arrive in Haridwar and check into your hotel. In the evening attend the spectacular Ganga Aarti at Har Ki Pauri.',
            activities: [
              'Pickup',
              'Hotel Check-in',
              'Har Ki Pauri',
              'Ganga Aarti',
              'Market Walk',
            ],
            meals: 'Dinner',
            stay: 'Haridwar Spiritual Hotel',
          },

          {
            day: 2,
            title: 'Haridwar to Rishikesh',
            description:
              'Travel to Rishikesh and explore its famous temples, ashrams and riverside areas.',
            activities: [
              'Breakfast & Check-out',
              'Rishikesh Arrival',
              'Ram Jhula',
              'Parmarth Niketan',
              'Ganga Riverside',
              'Triveni Ghat Aarti',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Rishikesh Riverside Hotel',
          },

          {
            day: 3,
            title: 'Rishikesh Yoga & Neelkanth Experience',
            description:
              'Begin your day with a peaceful yoga and meditation session before visiting the sacred Neelkanth Mahadev Temple.',
            activities: [
              'Morning Yoga',
              'Meditation Session',
              'Breakfast',
              'Neelkanth Mahadev Temple',
              'Ganga Riverside Walk',
              'Evening Aarti',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Rishikesh Riverside Hotel',
          },

          {
            day: 4,
            title: 'Rishikesh to Dehradun & Departure',
            description:
              'Enjoy breakfast and a relaxed morning before transfer to Dehradun Airport or Railway Station.',
            activities: [
              'Breakfast',
              'Morning Walk',
              'Hotel Check-out',
              'Dehradun Drop',
            ],
            meals: 'Breakfast',
            stay: 'End of Tour',
          },
        ],
      },

      {
        id: 'uk-9',
        slug: 'valley-of-flowers-auli-adventure',
        title: 'Valley of Flowers & Auli Adventure',
        subtitle: 'Alpine meadows, colorful Himalayan flowers, Auli peaks & unforgettable trekking',
        location: 'Rishikesh, Joshimath, Auli, Valley of Flowers',
        duration: '7 Days / 6 Nights',
        price: '₹19,999',
        originalPrice: '₹26,999',
        rating: 4.9,
        reviewsCount: 189,
        category: 'Trekking',

        heroImage: '/assets/images/packageimages/valley-of-flower.webp',

        gallery: [
          'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop',
        ],

        overview:
          'Discover the breathtaking alpine beauty of Uttarakhand with an adventure covering Auli and the Valley of Flowers. Trek through colorful meadows surrounded by snow-capped Himalayan peaks and experience the peaceful beauty of the Garhwal Himalayas.',

        highlights: [
          'Trek through the famous Valley of Flowers',
          'Explore Auli Himalayan meadows',
          'Visit Joshimath',
          'Scenic Himalayan mountain trails',
          'Snow-covered peak views',
          'Camping and nature experiences',
        ],

        inclusions: [
          '6 Nights accommodation in Hotels, Camps & Guesthouses',
          'Daily Breakfast & Dinner',
          'Private dedicated AC cab with driver',
          'Valley of Flowers trek assistance',
          'Camping accommodation',
          'All toll taxes, parking & fuel charges',
        ],

        exclusions: [
          'Airfare / Train tickets',
          'Forest entry / trekking permits',
          'Porter charges',
          'Personal trekking equipment',
          'Travel insurance',
        ],

        hotelType: '3-Star Hotels, Camps & Mountain Guesthouses',
        pickupDrop: 'Rishikesh / Dehradun',

        itinerary: [
          {
            day: 1,
            title: 'Arrival in Rishikesh',
            description:
              'Arrive in Rishikesh and prepare for your upcoming Himalayan adventure.',
            activities: [
              'Pickup',
              'Hotel Check-in',
              'Ganga Riverside',
              'Local Exploration',
              'Ganga Aarti',
            ],
            meals: 'Dinner',
            stay: 'Rishikesh Deluxe Hotel',
          },

          {
            day: 2,
            title: 'Rishikesh to Joshimath',
            description:
              'Drive through Devprayag and Rudraprayag towards Joshimath while enjoying spectacular Himalayan scenery.',
            activities: [
              'Breakfast & Check-out',
              'Devprayag',
              'Rudraprayag',
              'Alaknanda River',
              'Joshimath Arrival',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Joshimath Deluxe Hotel',
          },

          {
            day: 3,
            title: 'Joshimath to Govindghat & Trek Preparation',
            description:
              'Travel towards Govindghat and prepare for the Valley of Flowers trek. Enjoy a short nature walk around the area.',
            activities: [
              'Breakfast',
              'Govindghat Drive',
              'Trek Registration',
              'Local Exploration',
              'Trekking Briefing',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Govindghat Guesthouse',
          },

          {
            day: 4,
            title: 'Trek to Valley of Flowers',
            description:
              'Begin the trek towards the spectacular Valley of Flowers. Walk through forests, waterfalls and alpine landscapes.',
            activities: [
              'Early Morning Trek',
              'Ghangaria',
              'Valley of Flowers Trail',
              'Alpine Meadows',
              'Mountain Photography',
              'Return to Camp',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Ghangaria Guesthouse / Camp',
          },

          {
            day: 5,
            title: 'Valley of Flowers Exploration',
            description:
              'Spend another day exploring the beautiful valley and its colorful seasonal flowers before returning towards Ghangaria.',
            activities: [
              'Breakfast',
              'Valley Exploration',
              'Himalayan Flora',
              'Photography',
              'Waterfall Views',
              'Return to Ghangaria',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Ghangaria Guesthouse / Camp',
          },

          {
            day: 6,
            title: 'Return to Joshimath & Auli',
            description:
              'Return towards Joshimath and continue to Auli for a relaxing evening surrounded by Himalayan peaks.',
            activities: [
              'Breakfast & Check-out',
              'Return Trek',
              'Govindghat',
              'Joshimath',
              'Auli Arrival',
              'Himalayan Sunset',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Auli Hill Resort',
          },

          {
            day: 7,
            title: 'Auli to Rishikesh & Departure',
            description:
              'Enjoy the final Himalayan morning before driving back to Rishikesh or Dehradun for your onward journey.',
            activities: [
              'Breakfast',
              'Auli Sunrise',
              'Hotel Check-out',
              'Scenic Mountain Drive',
              'Rishikesh / Dehradun Drop',
            ],
            meals: 'Breakfast',
            stay: 'End of Tour',
          },
        ],
      },

      {
        id: 'uk-10',
        slug: 'uttarakhand-grand-himalayan-circuit',
        title: 'Grand Uttarakhand Himalayan Circuit',
        subtitle: 'Rishikesh, Auli, Nainital, Corbett & Mussoorie in one unforgettable journey',
        location: 'Rishikesh, Auli, Nainital, Corbett, Mussoorie',
        duration: '9 Days / 8 Nights',
        price: '₹24,999',
        originalPrice: '₹32,999',
        rating: 4.9,
        reviewsCount: 315,
        category: 'Popular',

        heroImage: '/assets/images/packageimages/ukneww.webp',

        gallery: [
          'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=800&auto=format&fit=crop',
        ],

        overview:
          'Experience the best of Uttarakhand in one grand Himalayan circuit. Combine the spirituality and adventure of Rishikesh, the snow-covered peaks of Auli, the lakes of Nainital, the wildlife of Jim Corbett and the colonial charm of Mussoorie.',

        highlights: [
          'Ganga Aarti and river rafting in Rishikesh',
          'Spectacular Himalayan views from Auli',
          'Naini Lake boating in Nainital',
          'Jeep jungle safari in Jim Corbett',
          'Kempty Falls in Mussoorie',
          'Scenic Himalayan mountain drives',
          'Explore five iconic Uttarakhand destinations',
        ],

        inclusions: [
          '8 Nights accommodation in 3/4-Star Hotels & Resorts',
          'Daily Breakfast & Dinner',
          'Private dedicated AC cab with driver',
          'River rafting in Rishikesh',
          'Naini Lake boating',
          '1 Jeep Jungle Safari in Corbett',
          'All toll taxes, parking & fuel charges',
        ],

        exclusions: [
          'Airfare / Train tickets',
          'Additional adventure activities',
          'Monument / attraction entry tickets',
          'Personal expenses',
          'Travel insurance',
        ],

        hotelType: '3/4-Star Deluxe Hotels, Hill Resorts & Wildlife Resort',
        pickupDrop: 'Dehradun Airport / Railway Station',

        itinerary: [
          {
            day: 1,
            title: 'Arrival in Rishikesh',
            description:
              'Arrive in Dehradun and transfer to Rishikesh. Enjoy the Ganga riverside and attend the evening Ganga Aarti.',
            activities: [
              'Airport Pickup',
              'Hotel Check-in',
              'Ganga Riverside',
              'Ram Jhula',
              'Ganga Aarti',
            ],
            meals: 'Dinner',
            stay: 'Rishikesh Deluxe Hotel',
          },

          {
            day: 2,
            title: 'Rishikesh Adventure & Rafting',
            description:
              'Enjoy an exciting rafting experience on the Ganges followed by local sightseeing and leisure time.',
            activities: [
              'Breakfast',
              'River Rafting',
              'Beatles Ashram',
              'Laxman Jhula Area',
              'Cafe Experience',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Rishikesh Deluxe Hotel',
          },

          {
            day: 3,
            title: 'Rishikesh to Auli via Joshimath',
            description:
              'Begin your Himalayan journey towards Auli through Devprayag, Rudraprayag and Joshimath.',
            activities: [
              'Breakfast & Check-out',
              'Devprayag',
              'Rudraprayag',
              'Joshimath',
              'Auli Arrival',
              'Mountain Sunset',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Auli Hill Resort',
          },

          {
            day: 4,
            title: 'Auli to Nainital',
            description:
              'Enjoy the beautiful morning in Auli before travelling towards the lake city of Nainital.',
            activities: [
              'Auli Sunrise',
              'Breakfast',
              'Hotel Check-out',
              'Scenic Mountain Drive',
              'Nainital Arrival',
              'Mall Road',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Nainital Hill Hotel',
          },

          {
            day: 5,
            title: 'Nainital Lake & Sightseeing',
            description:
              'Explore the famous attractions of Nainital including Naini Lake, Snow View Point and Naina Devi Temple.',
            activities: [
              'Naini Lake Boating',
              'Snow View Point',
              'Naina Devi Temple',
              'Eco Cave Gardens',
              'Mall Road Shopping',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Nainital Hill Hotel',
          },

          {
            day: 6,
            title: 'Nainital to Jim Corbett',
            description:
              'Drive towards Jim Corbett National Park and check into your wildlife resort surrounded by forest landscapes.',
            activities: [
              'Breakfast & Check-out',
              'Scenic Drive',
              'Corbett Arrival',
              'Resort Check-in',
              'Nature Walk',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Corbett Wildlife Resort',
          },

          {
            day: 7,
            title: 'Corbett Jungle Safari to Mussoorie',
            description:
              'Start the day with an exciting jungle safari before continuing towards the beautiful hill station of Mussoorie.',
            activities: [
              'Early Morning Jeep Safari',
              'Wildlife Photography',
              'Breakfast',
              'Scenic Drive',
              'Mussoorie Arrival',
              'Mall Road',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Mussoorie Hill Resort',
          },

          {
            day: 8,
            title: 'Mussoorie Sightseeing',
            description:
              'Explore the best of Mussoorie including Kempty Falls, Company Garden and beautiful Himalayan viewpoints.',
            activities: [
              'Kempty Falls',
              'Company Garden',
              'Gun Hill',
              'Lal Tibba',
              'Camel Back Road',
              'Mall Road',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Mussoorie Hill Resort',
          },

          {
            day: 9,
            title: 'Mussoorie to Dehradun & Departure',
            description:
              'Enjoy breakfast and a relaxed morning before transfer to Dehradun Airport or Railway Station for your onward journey.',
            activities: [
              'Breakfast',
              'Hotel Check-out',
              'Mountain Drive',
              'Dehradun Drop',
              'Departure',
            ],
            meals: 'Breakfast',
            stay: 'End of Tour',
          },
        ],
      },
  ];

  const pkg: TourPackage | undefined = uttarakhandPackages.find((p) => p.slug === resolvedParams.slug);

  if (!pkg) {
    notFound();
  }

  const [activeDay, setActiveDay] = useState<number | null>(1);
  const [selectedImage, setSelectedImage] = useState<string>(pkg.heroImage);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    travelDate: '',
    travelers: '2',
  });

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const otherPackages: TourPackage[] = uttarakhandPackages.filter((p) => p.id !== pkg.id).slice(0, 3);

  return (
    <main className="flex flex-col w-full overflow-x-hidden bg-[#fcf9f5] min-h-screen text-gray-800">
      
      {/* ─── 1. PACKAGE HERO HEADER ─── */}
      <section className="relative w-full min-h-[380px] md:min-h-[460px] flex items-center overflow-hidden">
        <img
          src={pkg.heroImage}
          alt={pkg.title}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.32)' }}
        />
        <div className="absolute inset-0" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 w-full py-12">
          
          {/* Breadcrumbs */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-white text-[12px] font-medium mb-4 shadow">
            <Link href="/" className="hover:text-[#f26c22] transition">Home</Link>
            <span>/</span>
            <Link href="/national" className="hover:text-[#f26c22] transition">National</Link>
            <span>/</span>
            <Link href="/national/uttarakhand" className="hover:text-[#f26c22] transition">Uttarakhand</Link>
            <span>/</span>
            <span className="text-[#f26c22] font-semibold truncate max-w-[200px] sm:max-w-none">{pkg.title}</span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            <span className="bg-[#f26c22] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {pkg.category} Package
            </span>
            <span className="bg-white/20 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
              <FaClock className="text-[#f26c22]" /> {pkg.duration}
            </span>
            <span className="bg-amber-500/30 text-amber-300 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 border border-amber-400/40">
              <FaStar className="text-amber-400" /> {pkg.rating} ({pkg.reviewsCount} Verified Reviews)
            </span>
          </div>

          <h1 className="text-[28px] sm:text-[40px] md:text-[48px] font-black text-white leading-[1.18] tracking-tight max-w-4xl mb-3">
            {pkg.title}
          </h1>

          <p className="text-gray-200 text-sm sm:text-base max-w-2xl font-light leading-relaxed mb-6">
            {pkg.subtitle}
          </p>

          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 font-medium">
            <FaMapMarkerAlt className="text-[#f26c22] shrink-0" />
            <span>Destinations Covered: <strong className="text-white">{pkg.location}</strong></span>
          </div>

        </div>
      </section>

      {/* ─── 2. MAIN DETAIL CONTENT & BOOKING SIDEBAR ─── */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 lg:px-16 max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* ═══ LEFT MAIN CONTENT (8 Cols) ═══ */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Photo Gallery & Preview */}
            <div className="bg-white rounded-3xl p-4 sm:p-6 border border-gray-100 shadow-sm">
              <div className="relative h-[320px] sm:h-[440px] rounded-2xl overflow-hidden mb-4 bg-gray-100">
                <img
                  src={selectedImage}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>
              <div className="grid grid-cols-4 gap-3">
                {pkg.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`relative h-20 sm:h-24 rounded-xl overflow-hidden border-2 transition cursor-pointer ${
                      selectedImage === img ? 'border-[#f26c22] scale-95 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Preview ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Feature Highlights Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#f26c22] flex items-center justify-center text-lg shrink-0">
                  <FaClock />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Duration</div>
                  <div className="text-xs sm:text-sm font-bold text-gray-900">{pkg.duration}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#1E6AD4] flex items-center justify-center text-lg shrink-0">
                  <FaHotel />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Stay Type</div>
                  <div className="text-xs sm:text-sm font-bold text-gray-900">{pkg.hotelType.split('/')[0]}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-lg shrink-0">
                  <FaUtensils />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Meal Plan</div>
                  <div className="text-xs sm:text-sm font-bold text-gray-900">Breakfast &amp; Dinner</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center text-lg shrink-0">
                  <FaCar />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Transfer</div>
                  <div className="text-xs sm:text-sm font-bold text-gray-900">Private Cab</div>
                </div>
              </div>
            </div>

            {/* Overview */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm">
              <h2 className="text-[22px] font-black text-gray-900 mb-3 flex items-center gap-2">
                <BsStars className="text-[#f26c22]" /> Tour Overview
              </h2>
              <p className="text-gray-600 text-[14.5px] leading-[1.8] mb-6">
                {pkg.overview}
              </p>

              <h3 className="text-[16px] font-bold text-gray-900 mb-3">Key Highlights:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pkg.highlights.map((hl, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 font-medium">
                    <FaCheckCircle className="text-[#f26c22] text-sm shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Day-by-Day Interactive Detailed Itinerary */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
                <h2 className="text-[22px] font-black text-gray-900">
                  Day-by-Day Detailed Itinerary
                </h2>
                <span className="text-xs font-semibold text-gray-400">
                  {pkg.itinerary.length} Days Planned with Precision
                </span>
              </div>

              <div className="space-y-4">
                {pkg.itinerary.length > 0 ? pkg.itinerary.map((day) => {
                  const isOpen = activeDay === day.day;
                  return (
                    <div
                      key={day.day}
                      className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                        isOpen ? 'border-[#f26c22] shadow-md ring-1 ring-[#f26c22]/20' : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {/* Day Accordion Header */}
                      <button
                        onClick={() => setActiveDay(isOpen ? null : day.day)}
                        className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 bg-white"
                      >
                        <div className="flex items-center gap-3.5 min-w-0">
                          <span className={`w-9 h-9 rounded-xl font-black text-sm flex items-center justify-center shrink-0 ${
                            isOpen ? 'bg-[#f26c22] text-white' : 'bg-gray-100 text-gray-700'
                          }`}>
                            D{day.day}
                          </span>
                          <div className="min-w-0">
                            <h3 className="text-[15px] sm:text-[16px] font-bold text-gray-900 truncate">
                              Day {day.day}: {day.title}
                            </h3>
                            <div className="flex items-center gap-3 text-xs text-gray-400 mt-0.5">
                              <span>🍽️ {day.meals}</span>
                              <span>🏨 {day.stay}</span>
                            </div>
                          </div>
                        </div>

                        <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                          isOpen ? 'bg-[#f26c22] text-white rotate-180' : 'bg-gray-100 text-gray-500'
                        }`}>
                          <FaChevronDown className="text-xs" />
                        </div>
                      </button>

                      {/* Day Accordion Content */}
                      {isOpen && (
                        <div className="p-4 sm:p-6 pt-2 bg-[#fcf9f5] border-t border-gray-100 space-y-4 text-[13.5px] sm:text-[14px]">
                          <p className="text-gray-600 leading-relaxed">
                            {day.description}
                          </p>

                          <div>
                            <div className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                              Day {day.day} Inclusions &amp; Activities:
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {day.activities.map((act: string, i: number) => (
                                <span key={i} className="bg-white border border-gray-200 text-gray-700 text-xs font-semibold px-3 py-1 rounded-lg shadow-sm">
                                  ✓ {act}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }) : (
                  <div className="text-center py-8 text-gray-500">
                    <p>Detailed itinerary coming soon. Contact us for custom planning.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm">
              <h2 className="text-[22px] text-gray-900 mb-6">
                Inclusions &amp; Exclusions
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Inclusions */}
                <div className="space-y-3">
                  <div className="text-sm font-bold text-emerald-700 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                    <BsCheckLg className="text-base" /> What&apos;s Included
                  </div>
                  {pkg.inclusions.map((inc, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                      <FaCheckCircle className="text-emerald-500 text-sm shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>

                {/* Exclusions */}
                <div className="space-y-3">
                  <div className="text-sm font-bold text-rose-600 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                    <FaTimesCircle className="text-base" /> What&apos;s Not Included
                  </div>
                  {pkg.exclusions.map((exc, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-500">
                      <FaTimesCircle className="text-rose-400 text-sm shrink-0 mt-0.5" />
                      <span>{exc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* ═══ RIGHT STICKY BOOKING CARD (4 Cols) ═══ */}
          <div className="lg:col-span-4 sticky top-[120px] space-y-6">
            
            {/* Booking Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-100 shadow-[0_10px_35px_rgba(0,0,0,0.08)]">
              
              {/* Price Tag */}
              <div className="border-b border-gray-100 pb-5 mb-5">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-[#10b981] bg-emerald-50 px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                    Special Direct Rate
                  </span>
                  <span className="text-xs text-gray-400 line-through font-semibold">{pkg.originalPrice}</span>
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-[32px] font-black text-[#f26c22]">{pkg.price}</span>
                  <span className="text-xs text-gray-500 font-medium">/ person (All Inclusive)</span>
                </div>
              </div>

              {formSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center text-emerald-900">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center text-2xl mx-auto mb-3">
                    ✓
                  </div>
                  <h4 className="font-bold text-base mb-1">Quote Request Sent!</h4>
                  <p className="text-xs text-emerald-700 leading-relaxed mb-4">
                    Our Uttarakhand travel consultant will contact you via WhatsApp &amp; Call with your customized itinerary.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-bold text-[#111827] underline"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-3.5">
                  <h3 className="font-bold text-gray-900 text-[15px] mb-1">Get Instant Free Quote &amp; Itinerary</h3>
                  
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name *"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#f26c22]"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="WhatsApp / Phone Number *"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#f26c22]"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <input
                        type="date"
                        required
                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#f26c22] bg-white text-gray-700"
                        value={formData.travelDate}
                        onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                      />
                    </div>
                    <div>
                      <select
                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#f26c22] bg-white text-gray-700"
                        value={formData.travelers}
                        onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                      >
                        <option value="1">1 Person</option>
                        <option value="2">2 Persons</option>
                        <option value="3-5">3 - 5 Persons</option>
                        <option value="6+">6+ Persons</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#f26c22] hover:bg-[#d95d1a] text-white py-3.5 rounded-xl font-bold text-xs transition shadow-md flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01]"
                  >
                    <FaPaperPlane className="text-xs" />
                    <span>Request Custom Quote &amp; Booking</span>
                  </button>
                </form>
              )}

              {/* Direct WhatsApp CTA */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <a
                  href={`https://wa.me/918091660060?text=Hello%20Zoyo%20Trip,%20I%20want%20to%20book%20the%20${encodeURIComponent(pkg.title)}%20package`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-3 rounded-xl font-bold text-xs transition flex items-center justify-center gap-2 shadow-sm"
                >
                  <FaWhatsapp className="text-base" />
                  <span>Chat With Tour Expert on WhatsApp</span>
                </a>
              </div>

              {/* Call Hotline */}
              <div className="mt-3 text-center">
                <a
                  href="tel:+918091660060"
                  className="text-xs font-semibold text-gray-600 hover:text-[#1E6AD4] flex items-center justify-center gap-1.5"
                >
                  <FaPhoneAlt className="text-xs text-[#f26c22]" /> Call Helpline: (+91) 8091660060
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="mt-5 pt-4 border-t border-gray-100 space-y-2 text-[11.5px] text-gray-500">
                <div className="flex items-center gap-2">
                  <FaShieldAlt className="text-[#10b981]" />
                  <span>100% Safe Payments (Credit Card / UPI / NetBanking)</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaAward className="text-[#f26c22]" />
                  <span>Government Registered Tour Operator</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#1E6AD4]" />
                  <span>No Hidden Surcharges &amp; Transparent Billing</span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* ─── 3. OTHER RELATED UTTARAKHAND PACKAGES ─── */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <h2 className="text-[26px] font-black text-gray-900 mb-8">
            You Might Also Like Other Uttarakhand Packages
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherPackages.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <img
                      src={item.heroImage}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 bg-[#f26c22] text-white text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase">
                      {item.category}
                    </div>
                    <div className="absolute bottom-3 left-3 text-white text-xs font-semibold">
                      {item.duration}
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="text-xs text-[#1E6AD4] font-semibold mb-1 truncate">{item.location}</div>
                    <h3 className="font-bold text-gray-900 group-hover:text-[#f26c22] transition-colors text-base line-clamp-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-gray-100 flex items-center justify-between mt-4">
                  <div>
                    <span className="text-xs text-gray-400 block">Starting from</span>
                    <span className="text-lg font-black text-[#f26c22]">{item.price}</span>
                  </div>
                  <Link
                    href={`/national/uttarakhand/${item.slug}`}
                    className="bg-[#111827] hover:bg-[#f26c22] text-white px-4 py-2 rounded-xl font-bold text-xs transition-colors flex items-center gap-1"
                  >
                    <span>View Tour</span>
                    <BsArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

    </main>
  );
}
