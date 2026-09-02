import type { StaticImageData } from 'next/image';

import Uttarakhand1 from "@/public/assets/images/iteneraryimages/uk1.webp";
import Uttarakhand2 from "@/public/assets/images/iteneraryimages/uk2.webp";
import chardham1 from "@/public/assets/images/iteneraryimages/chr1.webp";
import chardham2 from "@/public/assets/images/iteneraryimages/badrinath-temple-uk.webp";
import Mussoorie1 from "@/public/assets/images/iteneraryimages/ms1.webp";
import Mussoorie2 from "@/public/assets/images/iteneraryimages/ms2.webp";
import Rishikesh1 from "@/public/assets/images/iteneraryimages/rsk1.webp";
import Rishikesh2 from "@/public/assets/images/iteneraryimages/haridwar-1.webp";
import Nainital1 from "@/public/assets/images/iteneraryimages/nnt1.webp";
import Nainital2 from "@/public/assets/images/iteneraryimages/nnt2.webp";
import Corbett1 from "@/public/assets/images/iteneraryimages/nntno.webp";
import Corbett2 from "@/public/assets/images/iteneraryimages/nntt22.webp";
import Chopta1 from "@/public/assets/images/iteneraryimages/chp1.webp";
import Chopta2 from "@/public/assets/images/iteneraryimages/Chopta-Tungnath.webp";
import Haridwar1 from "@/public/assets/images/iteneraryimages/Rishikesh.webp";
import Haridwar2 from "@/public/assets/images/iteneraryimages/hdnew.webp";
import Valley1 from "@/public/assets/images/iteneraryimages/auli1.webp";
import Valley2 from "@/public/assets/images/iteneraryimages/valleyoff.webp";
import uttarakhandgrand1 from "@/public/assets/images/iteneraryimages/uklat1.webp";
import uttarakhandgrand2 from "@/public/assets/images/iteneraryimages/uklat2.webp";

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  activities: string[];
  meals: string;
  stay: string;
}

export interface TourPackage {
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
  heroImage: string | StaticImageData;
  gallery: (string | StaticImageData)[];
  overview: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: ItineraryDay[];
  hotelType: string;
  pickupDrop: string;

}

// Using temporary data structure since Uttarakhand might not be in allDestinations yet
export const uttarakhandPackages: TourPackage[] = [
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
    gallery: [Uttarakhand1, Uttarakhand2],
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
      chardham1,
      chardham2,
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
      Mussoorie1,
      Mussoorie2,
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
      Rishikesh1,
      Rishikesh2,
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
      Nainital1,
      Nainital2,
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
      Corbett1,
      Corbett2,
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
      Chopta1,
      Chopta2,
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

    heroImage: '/assets/images/iteneraryimages/hdnew.webp',

    gallery: [
      Haridwar1,
      Haridwar2,
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
      Valley1,
      Valley2,
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
      uttarakhandgrand1,
      uttarakhandgrand2,
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
