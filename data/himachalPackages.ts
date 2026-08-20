export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  activities: string[];
  meals: string;
  stay: string;
}

export interface HimachalPackage {
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
  category: 'Popular' | 'Honeymoon' | 'Adventure' | 'Family' | 'Tribal';
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

export const himachalPackages: HimachalPackage[] = [
  {
    id: 'hp-1',
    slug: 'manali-chandratal-kaza',
    title: 'Manali Chandratal Kaza Safari',
    subtitle:
      'Explore Manali, Chandratal Lake and the breathtaking landscapes of Kaza with an unforgettable Himalayan adventure',
    location:
      'Manali, Solang Valley, Atal Tunnel, Kaza, Spiti Valley, Chandratal Lake',
    duration: '7 Nights / 8 Days',
    price: '₹14,999',
    originalPrice: '₹19,499',
    rating: 4.9,
    reviewsCount: 340,
    category: 'Adventure',

    heroImage: '/assets/images/packageimages/chandertaaalnew.webp',

    gallery: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1593181629936-11c609b8db9b?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop',
    ],

    overview:
      'Experience the ultimate Himalayan adventure with our Manali Chandratal Kaza Safari. Explore the scenic beauty of Manali and Solang Valley, drive through the spectacular Atal Tunnel, discover the remote villages and monasteries of Spiti Valley, and witness the mesmerizing beauty of Chandratal Lake. This carefully planned journey is perfect for adventure seekers, nature lovers, couples, and families looking to explore the breathtaking landscapes of Himachal Pradesh.',

    highlights: [
      'Explore the scenic beauty and attractions of Manali and Solang Valley',
      'Experience the spectacular drive through Atal Tunnel towards Lahaul Valley',
      'Explore the high-altitude landscapes, villages and monasteries around Kaza',
      'Visit the iconic Chandratal Lake surrounded by majestic Himalayan mountains',
      'Discover Key Monastery, Kibber, Langza, Hikkim and Komic villages',
      'Enjoy breathtaking Himalayan landscapes throughout the Manali to Spiti journey',
    ],

    inclusions: [
      'Accommodation in Shimla & Manali',
      'Daily Breakfast & Dinner',
      'Delhi to Shimla and Manali to Delhi Volvo Transfers (if applicable)',
      'Private vehicle for sightseeing and transfers',
      'Shimla, Kufri, Kullu & Manali sightseeing',
      'Driver allowance, toll taxes & parking charges',
    ],

    exclusions: [
      'Airfare Train FareRohtang Pass permit & vehicle charges (if applicable)Adventure activities (Paragliding, ATV Ride, Skiing, etc.)Lunch and personal expensesMonument entry feesTravel insuranceAnything not mentioned under Inclusions',
    ],
    hotelType: '3-Star / 4-Star Mountain View Resort',
    pickupDrop: 'Chandigarh / Delhi / Bhuntar (Kullu)',
    itinerary: [
      {
        day: 1,
        title: 'Delhi to Shimla',
        description:
          'Arrive in Delhi and begin your scenic journey to Shimla. Upon arrival, check in to your hotel and relax. In the evening, explore the local markets or enjoy a peaceful walk on Mall Road. Overnight stay in Shimla.',
        activities: [
          'Hotel Check-in',
          'Shimla Mall Road',
          'The Ridge',
          'Local Market Exploration',
        ],
        meals: 'Dinner',
        stay: 'Deluxe Hotel, Shimla',
      },

      {
        day: 2,
        title: 'Shimla & Kufri Sightseeing',
        description:
          'After breakfast, visit Kufri, known for its panoramic Himalayan views and adventure activities. Explore Jakhoo Temple, The Ridge, Christ Church, Mall Road, and Lakkar Bazaar before returning to your hotel for an overnight stay.',
        activities: [
          'Kufri Sightseeing',
          'Jakhoo Temple',
          'The Ridge & Christ Church',
          'Lakkar Bazaar',
        ],
        meals: 'Breakfast & Dinner',
        stay: 'Deluxe Hotel, Shimla',
      },

      {
        day: 3,
        title: 'Shimla to Manali via Kullu',
        description:
          'Check out from the hotel and drive towards Manali via the picturesque Kullu Valley. En route, visit Pandoh Dam, Kullu Shawl Factory, and enjoy river rafting (optional). Reach Manali by evening, check in to your hotel, and relax.',
        activities: [
          'Pandoh Dam',
          'Kullu Shawl Factory',
          'Beas River Rafting',
          'Manali Hotel Check-in',
        ],
        meals: 'Breakfast & Dinner',
        stay: 'Deluxe Resort, Manali',
      },

      {
        day: 4,
        title: 'Manali Local Sightseeing',
        description:
          'Explore the popular attractions of Manali including Hadimba Devi Temple, Vashisht Hot Springs, Tibetan Monastery, Van Vihar, and Club House. Spend the evening exploring Manali Mall Road before returning to the hotel.',
        activities: [
          'Hadimba Devi Temple',
          'Vashisht Hot Springs',
          'Tibetan Monastery',
          'Manali Mall Road',
        ],
        meals: 'Breakfast & Dinner',
        stay: 'Deluxe Resort, Manali',
      },

      {
        day: 5,
        title: 'Manali to Kaza via Rohtang & Kunzum Pass',
        description:
          'Start early and drive towards Kaza, crossing the breathtaking Rohtang Pass and Kunzum Pass. Witness dramatic landscapes as you enter the cold desert region of Spiti Valley. Reach Kaza by evening and check in to your hotel.',
        activities: [
          'Rohtang Pass Drive',
          'Kunzum Pass',
          'Spiti Valley Landscapes',
          'Kaza Hotel Check-in',
        ],
        meals: 'Breakfast & Dinner',
        stay: 'Deluxe Hotel, Kaza',
      },

      {
        day: 6,
        title: 'Kaza Local Sightseeing',
        description:
          'After breakfast, explore the villages around Kaza including Key Monastery, Kibber Village, Langza, Hikkim, and Komic. Discover the unique culture, monasteries, and high-altitude landscapes of Spiti Valley before returning to Kaza for an overnight stay.',
        activities: [
          'Key Monastery',
          'Kibber Village',
          'Langza Village',
          'Hikkim & Komic',
        ],
        meals: 'Breakfast & Dinner',
        stay: 'Deluxe Hotel, Kaza',
      },

      {
        day: 7,
        title: 'Kaza to Chandratal Lake Excursion',
        description:
          'Enjoy a scenic journey towards the mesmerizing Chandratal Lake, known as the Moon Lake for its crescent shape. Marvel at the crystal-clear turquoise waters surrounded by rugged mountains and spend the night at a comfortable campsite near Chandratal.',
        activities: [
          'Chandratal Lake',
          'Himalayan Mountain Views',
          'Photography',
          'Campsite Experience',
        ],
        meals: 'Breakfast & Dinner',
        stay: 'Deluxe Campsite, Chandratal',
      },

      {
        day: 8,
        title: 'Chandratal to Manali / Delhi Departure',
        description:
          'After breakfast, check out from the campsite and begin your return journey towards Manali and onward to Delhi/Chandigarh. Carry unforgettable memories of your Manali, Spiti Valley, Kaza and Chandratal adventure.',
        activities: [
          'Breakfast at Campsite',
          'Campsite Check-out',
          'Return Journey',
          'Departure Transfer',
        ],
        meals: 'Breakfast',
        stay: 'End of Tour',
      },
    ],
  },
  {
    id: 'hp-2',
    slug: 'tirthan-valley-tour-package',
    title: 'Tirthan Valley Tour Package',

    subtitle:
      'Crystal-clear rivers, peaceful Himalayan villages, lush forests, waterfalls, and unforgettable mountain experiences',

    location:
      'Tirthan Valley, Jibhi, Jalori Pass, Gushaini, Banjar',

    duration: '2 Nights / 3 Days',

    price: '₹12,499',
    originalPrice: '₹16,999',

    rating: 4.8,
    reviewsCount: 285,

    category: 'Popular',

    heroImage: '/assets/images/packageimages/jibhi-tirthan.webp',

    gallery: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop',
    ],

    overview:
      'Escape into the peaceful beauty of Tirthan Valley, one of Himachal Pradesh’s most scenic and serene destinations. Surrounded by dense deodar forests, snow-capped Himalayan peaks, crystal-clear Tirthan River, and charming mountain villages, this package offers the perfect blend of nature, relaxation, and adventure. Explore the picturesque village of Jibhi, enjoy peaceful riverside moments, discover hidden waterfalls, and experience the breathtaking landscapes around Jalori Pass.',

    highlights: [
      'Explore the scenic beauty and peaceful surroundings of Tirthan Valley',
      'Visit the charming mountain village of Jibhi and its famous waterfall',
      'Enjoy relaxing riverside walks and nature experiences along the Tirthan River',
      'Scenic drive through the forests towards Jalori Pass',
      'Explore traditional Himalayan villages and experience local culture',
      'Enjoy peaceful stays surrounded by lush forests and majestic mountain views',
    ],

    inclusions: [
      'Accommodation in comfortable hotels',
      'Daily Breakfast & Dinner',
      'Delhi–Manali–Delhi Volvo tickets (if applicable)',
      'Private cab for sightseeing',
      'Manali local sightseeing',
      'Solang Valley & Kullu sightseeing',
      'Driver allowance, toll tax & parking charges',
    ],

    exclusions: [
      'Airfare / Train FareRohtang Pass permit & vehicle charges (if applicable)Adventure activities (Paragliding, ATV Ride, River Rafting, etc.)Lunch and personal expensesMonument entry feesTravel insuranceAnything not mentioned under Inclusions',
    ],

    hotelType:
      '3-Star Mountain Resort / Premium Riverside Homestay',

    pickupDrop:
      'Chandigarh / Delhi / Bhuntar (Kullu)',
    itinerary: [
      {
        day: 1,
        title: 'Delhi to Tirthan Valley',
        description:
          'Begin your journey from Delhi towards the peaceful Tirthan Valley. Travel through the scenic Himalayan foothills and beautiful mountain roads before reaching Tirthan Valley. Check in to your resort and relax amidst the serene surroundings. Enjoy a peaceful evening by the riverside.',
        activities: [
          'Scenic Himalayan Drive',
          'Tirthan Riverside Walk',
          'Resort Check-in',
          'Relaxing Evening',
        ],
        meals: 'Dinner',
        stay: 'Premium Riverside Resort, Tirthan Valley',
      },

      {
        day: 2,
        title: 'Tirthan Valley & Jibhi Sightseeing',
        description:
          'After breakfast, explore the beautiful surroundings of Tirthan Valley. Visit the charming village of Jibhi and its famous waterfall, followed by a scenic drive through the lush Himalayan forests. Spend some peaceful time along the Tirthan River and experience the natural beauty and local charm of the valley.',
        activities: [
          'Jibhi Village Visit',
          'Jibhi Waterfall',
          'Tirthan River Experience',
          'Himalayan Forest Walk',
        ],
        meals: 'Breakfast & Dinner',
        stay: 'Premium Riverside Resort, Tirthan Valley',
      },

      {
        day: 3,
        title: 'Tirthan Valley to Delhi Departure',
        description:
          'After breakfast, check out from the resort and enjoy some leisure time in the beautiful surroundings of Tirthan Valley. Depending on the departure schedule, take a short riverside walk or explore the local area before beginning your return journey to Delhi with wonderful memories of your Himalayan getaway.',
        activities: [
          'Morning Riverside Walk',
          'Local Village Exploration',
          'Resort Check-out',
          'Return Journey to Delhi',
        ],
        meals: 'Breakfast',
        stay: 'End of Tour',
      },
    ],
  },
  {
    id: 'hp-3',
    slug: 'shimla-kullu-manali-honeymoon-package',
    title: 'Shimla Kullu Manali Honeymoon Package',

    subtitle:
      'A romantic Himalayan escape covering Shimla charm, Kullu valleys, Manali adventures, and beautiful mountain moments',

    location:
      'Shimla, Kufri, Kullu, Manali, Solang Valley, Atal Tunnel',

    duration: '6 Days / 5 Nights',

    price: '₹18,999',
    originalPrice: '₹24,999',

    rating: 5.0,
    reviewsCount: 520,

    category: 'Honeymoon',

    heroImage: '/assets/images/packageimages/Shimla-During-Monsoon.webp',

    gallery: [
      'https://images.unsplash.com/photo-1593181629936-11c609b8db9b?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop',
    ],

    overview:
      'Celebrate your love with a memorable Himalayan honeymoon across Shimla, Kullu and Manali. Explore the romantic charm of Shimla, enjoy scenic drives through the beautiful Kullu Valley, experience the peaceful surroundings of Manali, and spend quality time together amidst breathtaking mountain landscapes. From cozy evenings on Mall Road to scenic views of Solang Valley and romantic riverside moments, this package is designed especially for couples looking for a perfect Himachal honeymoon experience.',

    highlights: [
      'Romantic Shimla sightseeing including The Ridge, Mall Road and Christ Church',
      'Scenic Kufri excursion with beautiful Himalayan mountain views',
      'Romantic drive through the picturesque Kullu Valley along the Beas River',
      'Couple-friendly Manali sightseeing including Hadimba Temple and Vashisht',
      'Full-day Solang Valley and Atal Tunnel excursion',
      'Beautiful mountain views, peaceful evenings and memorable couple experiences',
    ],

    inclusions: [
      'Accommodation in comfortable hotels',
      'Daily Breakfast & Dinner',
      'Delhi–Manali–Delhi Volvo tickets (if applicable)',
      'Private cab for sightseeing',
      'Manali local sightseeing',
      'Solang Valley & Kullu sightseeing',
      'Driver allowance, toll tax & parking charges',
    ],

    exclusions: [
      'Airfare / Train FareRohtang Pass permit & vehicle charges (if applicable)Adventure activities (Paragliding, ATV Ride, River Rafting, etc.)Lunch and personal expensesMonument entry feesTravel insuranceAnything not mentioned under Inclusions',
    ],

    hotelType:
      'Deluxe 3/4-Star Couple-Friendly Hotels with Mountain Views',

    pickupDrop:
      'Chandigarh / Delhi / Kalka',
    itinerary: [
      {
        day: 1,
        title: 'Delhi to Shimla',
        description:
          'Arrive in Delhi and begin your scenic journey to Shimla. Upon arrival, check in to your hotel and relax. In the evening, enjoy a romantic walk along Mall Road, The Ridge, and Christ Church while taking in the beautiful Himalayan surroundings.',
        activities: [
          'Scenic Mountain Drive',
          'Hotel Check-in',
          'Mall Road Evening Walk',
          'The Ridge & Christ Church',
        ],
        meals: 'Dinner',
        stay: 'Shimla Deluxe Hotel',
      },

      {
        day: 2,
        title: 'Romantic Shimla & Kufri Sightseeing',
        description:
          'After breakfast, enjoy a romantic excursion to Kufri and explore its beautiful Himalayan landscapes. Visit Green Valley, Himalayan Nature Park, Mahasu Peak, and Jakhoo Temple. Spend the evening together exploring Shimla Mall Road and Lakkar Bazaar before returning to the hotel.',
        activities: [
          'Kufri Sightseeing',
          'Green Valley',
          'Mahasu Peak',
          'Jakhoo Temple',
        ],
        meals: 'Breakfast & Dinner',
        stay: 'Shimla Deluxe Hotel',
      },

      {
        day: 3,
        title: 'Shimla to Manali via Kullu',
        description:
          'After breakfast, check out from your Shimla hotel and drive towards Manali through the scenic Kullu Valley. En route, enjoy beautiful views of the Beas River, visit Pandoh Dam and Kullu, and explore a local shawl factory. Reach Manali by evening and check in to your romantic hotel.',
        activities: [
          'Pandoh Dam Viewpoint',
          'Kullu Valley',
          'Kullu Shawl Factory',
          'Manali Hotel Check-in',
        ],
        meals: 'Breakfast & Dinner',
        stay: 'Manali Deluxe Resort',
      },

      {
        day: 4,
        title: 'Manali Local Sightseeing & Solang Valley',
        description:
          'After breakfast, explore the romantic and scenic attractions of Manali including Hadimba Devi Temple, Vashisht Hot Springs, Tibetan Monastery, and Van Vihar. Later, visit Solang Valley and enjoy breathtaking mountain views with optional adventure activities. Return to your hotel for a relaxing evening.',
        activities: [
          'Hadimba Devi Temple',
          'Vashisht Hot Springs',
          'Solang Valley',
          'Optional Adventure Activities',
        ],
        meals: 'Breakfast & Dinner',
        stay: 'Manali Deluxe Resort',
      },

      {
        day: 5,
        title: 'Manali & Atal Tunnel Excursion',
        description:
          'After breakfast, enjoy a scenic full-day excursion towards Atal Tunnel and Sissu Valley. Experience the dramatic Himalayan landscapes, waterfalls, snow-covered peaks, and beautiful mountain valleys. Return to Manali by evening and spend a peaceful evening together exploring Old Manali or Mall Road.',
        activities: [
          'Atal Tunnel Drive',
          'Sissu Valley',
          'Himalayan Mountain Views',
          'Old Manali Evening',
        ],
        meals: 'Breakfast & Dinner',
        stay: 'Manali Deluxe Resort',
      },

      {
        day: 6,
        title: 'Manali to Delhi Departure',
        description:
          'After breakfast, check out from your hotel and enjoy some leisure time in Manali for shopping or a final romantic walk along Mall Road. Later, begin your return journey to Delhi with beautiful memories of your Shimla Kullu Manali honeymoon.',
        activities: [
          'Manali Mall Road',
          'Local Shopping',
          'Hotel Check-out',
          'Departure Transfer',
        ],
        meals: 'Breakfast',
        stay: 'End of Tour',
      },
    ],
  },
  {
    id: 'hp-4',
    slug: 'dharamshala-dalhousie-tour-package',
    title: 'Dharamshala Dalhousie Tour Package',
    subtitle: 'Explore Tibetan culture, Dhauladhar views, Khajjiar meadows, Dalhousie charm & scenic mountain escapes',
    location: 'Dharamshala, McLeodganj, Dalhousie, Khajjiar',
    duration: '4 Days / 3 Nights',
    price: '₹13,999',
    originalPrice: '₹17,999',
    rating: 4.9,
    reviewsCount: 195,
    category: 'Popular',

    heroImage: '/assets/images/packageimages/dharmashanreimage.webp',

    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop',
    ],

    overview:
      'Experience the best of Himachal Pradesh with our Dharamshala Dalhousie Tour Package. Discover the spiritual charm of McLeodganj, visit the Tsuglagkhang Complex and Bhagsunag Waterfall, and enjoy the colonial beauty of Dalhousie. Explore the lush green meadows of Khajjiar, scenic mountain viewpoints, pine forests, and the breathtaking landscapes of the Dhauladhar range.',

    highlights: [
      'Accommodation in comfortable hotels',
      'Bhagsunag Waterfall and McLeodganj local sightseeing',
      'St. John in the Wilderness Church and Dal Lake',
      'Scenic drive through the mountains to Dalhousie',
      'Khajjiar – the Mini Switzerland of India',
      'Panchpula and Subhash Baoli in Dalhousie',
      'Tibetan handicraft shopping in McLeodganj market',
    ],

    inclusions: [
      'Accommodation in comfortable hotels',
      'Daily Breakfast & Dinner',
      'Delhi–Manali–Delhi Volvo tickets (if applicable)',
      'Private cab for sightseeing',
      'Manali local sightseeing',
      'Solang Valley & Kullu sightseeing',
      'Driver allowance, toll tax & parking charges',
    ],

    exclusions: [
      'Airfare / Train FareRohtang Pass permit & vehicle charges (if applicable)Adventure activities (Paragliding, ATV Ride, River Rafting, etc.)Lunch and personal expensesMonument entry feesTravel insuranceAnything not mentioned under Inclusions',
    ],

    hotelType: 'Deluxe Mountain View Hotel',

    pickupDrop: 'Gaggal Airport / Pathankot / Chandigarh',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Dharamshala & McLeodganj Sightseeing',
        description:
          'Arrive at Dharamshala and transfer to McLeodganj. After hotel check-in, explore the spiritual and cultural charm of McLeodganj. Visit the Tsuglagkhang Complex, Namgyal Monastery, and enjoy an evening walk through the vibrant Tibetan market.',
        activities: [
          'Hotel Check-in',
          'Dalai Lama Temple Complex',
          'Namgyal Monastery',
          'Tibetan Market Walk',
        ],
        meals: 'Dinner',
        stay: 'McLeodganj Deluxe Hotel',
      },

      {
        day: 2,
        title: 'Dharamshala & McLeodganj Sightseeing',
        description:
          'After breakfast, explore the major attractions of Dharamshala and McLeodganj. Visit Bhagsunag Temple and Waterfall, St. John in the Wilderness Church, Dal Lake, and the scenic viewpoints around the Dhauladhar mountains.',
        activities: [
          'Bhagsunag Temple & Waterfall',
          'St. John in the Wilderness Church',
          'Dal Lake Visit',
          'McLeodganj Local Sightseeing',
        ],
        meals: 'Breakfast & Dinner',
        stay: 'McLeodganj Deluxe Hotel',
      },

      {
        day: 3,
        title: 'Dharamshala to Dalhousie & Local Sightseeing',
        description:
          'After breakfast, check out and drive towards the beautiful hill station of Dalhousie. Enjoy the scenic mountain journey and upon arrival explore the colonial charm of Dalhousie, including Gandhi Chowk, Subhash Baoli, and Panchpula.',
        activities: [
          'Scenic Mountain Drive',
          'Dalhousie Local Sightseeing',
          'Gandhi Chowk',
          'Subhash Baoli',
          'Panchpula',
        ],
        meals: 'Breakfast & Dinner',
        stay: 'Dalhousie Deluxe Hotel',
      },

      {
        day: 4,
        title: 'Khajjiar Excursion & Departure',
        description:
          'After breakfast, visit Khajjiar, popularly known as the Mini Switzerland of India. Enjoy the beautiful meadows, pine forests, and panoramic mountain views. Later, return to Dalhousie and proceed for your onward journey to Pathankot, Gaggal Airport, or Chandigarh with unforgettable memories.',
        activities: [
          'Khajjiar Visit',
          'Khajjiar Meadows',
          'Pine Forest Walk',
          'Departure Transfer',
        ],
        meals: 'Breakfast',
        stay: 'End of Tour',
      },
    ],
  },
  {
    id: 'hp-5',
    slug: 'spiti-valley-tour-package-from-manali',
    title: 'Spiti Valley Tour Package From Manali',
    subtitle:
      'Explore the rugged Himalayan desert, ancient monasteries, high-altitude villages & breathtaking Spiti landscapes',
    location: 'Manali, Kaza, Key, Kibber, Chicham',
    duration: '6 Nights / 7 Days',
    price: '₹14,499',
    originalPrice: '₹18,999',
    rating: 4.8,
    reviewsCount: 230,
    category: 'Adventure',

    heroImage: '/assets/images/packageimages/sptvalley.webp',

    gallery: [
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop',
    ],

    overview:
      'Embark on an unforgettable journey from Manali to the remote and breathtaking landscapes of Spiti Valley. Experience dramatic Himalayan mountains, ancient Buddhist monasteries, high-altitude villages, winding mountain roads, and the unique culture of the Spiti region. Explore Kaza, Key Monastery, Kibber, Chicham Bridge, Langza, Hikkim, and the stunning valleys surrounding the cold desert of Spiti.',

    highlights: [
      'Scenic Manali to Spiti Valley mountain drive',
      'Key Monastery – the largest monastery in Spiti Valley',
      'Kibber Village and Chicham Bridge',
      'Kaza local sightseeing and traditional Spitian culture',
      'Langza Village with stunning Himalayan views',
      'Hikkim – one of the world’s highest villages with a post office',
      'High-altitude Himalayan landscapes and mountain passes',
    ],

    inclusions: [
      'Accommodation in comfortable hotels',
      'Daily Breakfast & Dinner',
      'Delhi–Manali–Delhi Volvo tickets (if applicable)',
      'Private cab for sightseeing',
      'Manali local sightseeing',
      'Solang Valley & Kullu sightseeing',
      'Driver allowance, toll tax & parking charges',
    ],

    exclusions: [
      'Airfare / Train FareRohtang Pass permit & vehicle charges (if applicable)Adventure activities (Paragliding, ATV Ride, River Rafting, etc.)Lunch and personal expensesMonument entry feesTravel insuranceAnything not mentioned under Inclusions',
    ],

    hotelType: 'Deluxe Mountain View Hotels & Camps',
    pickupDrop: 'Manali / Chandigarh / Delhi',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Manali',
        description:
          'Arrive in Manali and check in to your hotel. Spend the day relaxing and acclimatizing to the mountain environment. In the evening, explore Mall Road and the local market. Overnight stay in Manali.',
        activities: [
          'Hotel Check-in',
          'Manali Mall Road',
          'Local Market Walk',
          'Mountain Views',
        ],
        meals: 'Dinner',
        stay: 'Manali Deluxe Hotel',
      },

      {
        day: 2,
        title: 'Manali to Kaza via Atal Tunnel & Kunzum Pass',
        description:
          'After breakfast, begin your scenic journey from Manali towards Spiti Valley. Drive through the Atal Tunnel and continue towards Gramphoo, Chhatru and Batal. Cross the spectacular Kunzum Pass and enter the remote landscapes of Spiti Valley before reaching Kaza. Overnight stay in Kaza.',
        activities: [
          'Atal Tunnel Drive',
          'Kunzum Pass',
          'Chandra Valley Views',
          'Scenic Himalayan Drive',
        ],
        meals: 'Breakfast & Dinner',
        stay: 'Kaza Deluxe Hotel / Camp',
      },

      {
        day: 3,
        title: 'Kaza Local Sightseeing – Key, Kibber & Chicham',
        description:
          'After breakfast, explore the famous attractions around Kaza. Visit the magnificent Key Monastery, followed by Kibber Village and the spectacular Chicham Bridge. Enjoy panoramic views of the Spiti Valley and return to Kaza for an overnight stay.',
        activities: [
          'Key Monastery Visit',
          'Kibber Village',
          'Chicham Bridge',
          'Spiti Valley Viewpoints',
        ],
        meals: 'Breakfast & Dinner',
        stay: 'Kaza Deluxe Hotel / Camp',
      },

      {
        day: 4,
        title: 'Kaza to Langza, Hikkim & Komic Excursion',
        description:
          'After breakfast, visit the high-altitude villages of Langza, Hikkim and Komic. Explore the traditional Spitian villages, admire the surrounding Himalayan peaks, and visit the famous Hikkim post office. Return to Kaza by evening.',
        activities: [
          'Langza Village',
          'Hikkim Post Office',
          'Komic Village',
          'Himalayan Photography',
        ],
        meals: 'Breakfast & Dinner',
        stay: 'Kaza Deluxe Hotel / Camp',
      },

      {
        day: 5,
        title: 'Kaza to Chandratal Lake',
        description:
          'After breakfast, depart from Kaza and drive towards the breathtaking Chandratal Lake. Travel through the rugged Himalayan terrain and enjoy spectacular views of the Spiti and Lahaul valleys. On arrival, explore the beautiful crescent-shaped lake and surrounding mountains.',
        activities: [
          'Scenic Himalayan Drive',
          'Chandratal Lake',
          'Mountain Photography',
          'Lake-side Nature Walk',
        ],
        meals: 'Breakfast & Dinner',
        stay: 'Chandratal Camp',
      },

      {
        day: 6,
        title: 'Chandratal to Manali',
        description:
          'Wake up to beautiful Himalayan views and enjoy breakfast at the campsite. Begin the return journey towards Manali through Batal, Chhatru and the Atal Tunnel. Reach Manali by evening and relax at the hotel.',
        activities: [
          'Chandratal Sunrise Views',
          'Batal & Chhatru Drive',
          'Atal Tunnel',
          'Scenic Mountain Drive',
        ],
        meals: 'Breakfast & Dinner',
        stay: 'Manali Deluxe Hotel',
      },

      {
        day: 7,
        title: 'Manali Sightseeing & Departure',
        description:
          'After breakfast, check out from the hotel and enjoy a short Manali sightseeing tour covering Hadimba Devi Temple, Vashisht Hot Springs and the local market, depending on your departure time. Later, proceed towards Chandigarh or Delhi with unforgettable memories of your Spiti Valley adventure.',
        activities: [
          'Hadimba Devi Temple',
          'Vashisht Hot Springs',
          'Local Market',
          'Departure Transfer',
        ],
        meals: 'Breakfast',
        stay: 'End of Tour',
      },
    ],
  },
  {
    id: 'hp-6',
    slug: 'jibhi-tirthan-valley-tour-package',
    title: 'Jibhi, Tirthan Valley Tour Package',
    subtitle:
      'Explore peaceful Himalayan villages, lush cedar forests, waterfalls, riverside escapes & scenic mountain trails',
    location: 'Jibhi, Tirthan Valley, Shoja, Jalori Pass',
    duration: '3 Nights / 4 Days',
    price: '₹27,999',
    originalPrice: '₹34,999',
    rating: 5.0,
    reviewsCount: 180,
    category: 'Adventure',

    heroImage: '/assets/images/packageimages/Jibhi.webp',

    gallery: [
      'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop',
    ],

    overview:
      'Escape to the peaceful Himalayan beauty of Jibhi and Tirthan Valley, surrounded by dense cedar forests, crystal-clear rivers, charming mountain villages and breathtaking Himalayan landscapes. Explore the famous Jibhi Waterfall, enjoy peaceful riverside walks, discover the scenic villages of Shoja and experience the natural beauty around Jalori Pass and Serolsar Lake.',

    highlights: [
      'Jibhi Waterfall surrounded by lush cedar forests',
      'Peaceful riverside experience along the Tirthan River',
      'Jalori Pass with breathtaking Himalayan mountain views',
      'Serolsar Lake nature trek through dense pine and cedar forests',
      'Shoja village and scenic Himalayan viewpoints',
      'Traditional Himachali village walks and local culture',
      'Trout fishing and relaxing riverside experiences in Tirthan Valley',
    ],

    inclusions: [
      'Accommodation in comfortable hotels',
      'Daily Breakfast & Dinner',
      'Delhi–Manali–Delhi Volvo tickets (if applicable)',
      'Private cab for sightseeing',
      'Manali local sightseeing',
      'Solang Valley & Kullu sightseeing',
      'Driver allowance, toll tax & parking charges',
    ],

    exclusions: [
      'Airfare / Train FareRohtang Pass permit & vehicle charges (if applicable)Adventure activities (Paragliding, ATV Ride, River Rafting, etc.)Lunch and personal expensesMonument entry feesTravel insuranceAnything not mentioned under Inclusions',
    ],

    hotelType: 'Boutique Mountain Homestays & Riverside Cottages',

    pickupDrop: 'Chandigarh / Delhi / Bhuntar Airport',
    itinerary: [
      {
        day: 1,
        title: 'Delhi to Aut & Transfer to Jibhi',
        description:
          'Begin your journey from Delhi towards Aut by Volvo or private vehicle. Upon arrival at Aut, transfer to the peaceful Himalayan village of Jibhi. Check in to your hotel and spend the evening relaxing amidst the beautiful cedar forests and mountain surroundings.',
        activities: [
          'Scenic Himalayan Drive',
          'Jibhi Village Walk',
          'Hotel Check-in',
          'Riverside Relaxation',
        ],
        meals: 'Dinner',
        stay: 'Jibhi Boutique Homestay',
      },

      {
        day: 2,
        title: 'Jibhi Waterfall & Tirthan Valley Exploration',
        description:
          'After breakfast, explore the charming surroundings of Jibhi. Visit the famous Jibhi Waterfall and enjoy a peaceful walk through the traditional village trails. Later, explore the Tirthan River and nearby villages while enjoying the serene Himalayan atmosphere.',
        activities: [
          'Jibhi Waterfall',
          'Tirthan River Walk',
          'Jibhi Village Exploration',
          'Local Café Experience',
        ],
        meals: 'Breakfast & Dinner',
        stay: 'Jibhi Boutique Homestay',
      },

      {
        day: 3,
        title: 'Jalori Pass & Serolsar Lake Trek',
        description:
          'After breakfast, drive towards Jalori Pass, located at an altitude of around 3,120 metres. From here, begin the scenic trek through dense pine and cedar forests to the beautiful Serolsar Lake. Visit the sacred Budhi Nagin Temple and enjoy spectacular Himalayan views before returning to Jibhi.',
        activities: [
          'Jalori Pass',
          'Serolsar Lake Trek',
          'Budhi Nagin Temple',
          'Himalayan Mountain Views',
        ],
        meals: 'Breakfast & Dinner',
        stay: 'Jibhi Boutique Homestay',
      },

      {
        day: 4,
        title: 'Chehni Kothi & Tirthan Valley Exploration, Departure',
        description:
          'After breakfast, check out from the hotel and visit the historic Chehni Kothi, a traditional Himachali wooden tower known for its unique architecture. Later, enjoy some peaceful time near the Tirthan River before proceeding towards Aut for your onward journey to Delhi with beautiful memories of Jibhi and Tirthan Valley.',
        activities: [
          'Chehni Kothi Visit',
          'Tirthan River Experience',
          'Local Village Walk',
          'Departure Transfer',
        ],
        meals: 'Breakfast',
        stay: 'End of Tour',
      },
    ],
  },
  {
    id: 'hp-7',
    slug: 'manali-shimla-honeymoon-tour-package',
    title: 'Manali Shimla Honeymoon Package',
    subtitle: 'Romantic mountain escapes, scenic valleys, beautiful waterfalls, cozy stays & unforgettable Himalayan moments',
    location: 'Shimla, Kufri, Manali, Solang Valley, Rohtang Pass',
    duration: '6 Nights / 7 Days',
    price: '₹15,499',
    originalPrice: '₹19,999',
    rating: 4.9,
    reviewsCount: 310,
    category: 'Honeymoon',

    heroImage: '/assets/images/packageimages/honeymoonnew.webp',

    gallery: [
      'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop',
    ],

    overview:
      'Celebrate your love with a romantic journey through the breathtaking hills of Shimla and Manali. Explore the charming streets of Shimla, enjoy panoramic Himalayan views from Kufri, experience the beauty of Solang Valley, and create unforgettable memories together in the peaceful surroundings of Manali.',

    highlights: [
      'Romantic evening walk at Shimla Mall Road & The Ridge',
      'Scenic Kufri sightseeing and Himalayan mountain views',
      'Visit to the historic Christ Church in Shimla',
      'Romantic sightseeing around Manali and Hadimba Temple',
      'Adventure and scenic views at Solang Valley',
      'Visit to the beautiful Vashisht Hot Springs',
      'Couple-friendly hotel stays with beautiful mountain views',
    ],

    inclusions: [
      'Accommodation in comfortable hotels',
      'Daily Breakfast & Dinner',
      'Delhi–Manali–Delhi Volvo tickets (if applicable)',
      'Private cab for sightseeing',
      'Manali local sightseeing',
      'Solang Valley & Kullu sightseeing',
      'Driver allowance, toll tax & parking charges',
    ],

    exclusions: [
      'Airfare / Train FareRohtang Pass permit & vehicle charges (if applicable)Adventure activities (Paragliding, ATV Ride, River Rafting, etc.)Lunch and personal expensesMonument entry feesTravel insuranceAnything not mentioned under Inclusions',
    ],

    hotelType: 'Romantic 3-Star / 4-Star Mountain View Hotels',
    pickupDrop: 'Delhi / Chandigarh',
    itinerary: [
      {
        day: 1,
        title: 'Delhi to Shimla',
        description:
          'Begin your romantic honeymoon journey from Delhi to Shimla. Arrive in Shimla, check in to your hotel, relax, and enjoy a romantic evening exploring Mall Road, The Ridge, and Christ Church.',
        activities: [
          'Scenic Mountain Drive',
          'Hotel Check-in',
          'Mall Road Evening Walk',
          'The Ridge & Christ Church'
        ],
        meals: 'Dinner',
        stay: 'Shimla Hotel',
      },
      {
        day: 2,
        title: 'Shimla & Kufri Sightseeing',
        description:
          'Enjoy a romantic sightseeing tour of Shimla and Kufri. Visit Green Valley, Kufri, Himalayan Nature Park, and Jakhoo Temple while enjoying beautiful Himalayan views.',
        activities: [
          'Kufri Sightseeing',
          'Green Valley',
          'Himalayan Nature Park',
          'Jakhoo Temple'
        ],
        meals: 'Breakfast & Dinner',
        stay: 'Shimla Hotel',
      },
      {
        day: 3,
        title: 'Shimla to Manali',
        description:
          'Check out from Shimla and drive towards Manali through the beautiful Kullu Valley. Enjoy scenic mountain roads, rivers, forests, and picturesque Himalayan landscapes before checking in to your Manali hotel.',
        activities: [
          'Scenic Kullu Valley Drive',
          'Kullu Riverside Views',
          'Kullu Shawl Shopping',
          'Manali Hotel Check-in'
        ],
        meals: 'Breakfast & Dinner',
        stay: 'Manali Hotel',
      },
      {
        day: 4,
        title: 'Solang Valley Excursion',
        description:
          'Spend a memorable day exploring the breathtaking Solang Valley. Enjoy panoramic Himalayan views and optional adventure activities. Depending on weather and road conditions, visit Atal Tunnel as well.',
        activities: [
          'Solang Valley Sightseeing',
          'Snow Activities',
          'Adventure Activities',
          'Atal Tunnel Visit'
        ],
        meals: 'Breakfast & Dinner',
        stay: 'Manali Hotel',
      },
      {
        day: 5,
        title: 'Manali Local Sightseeing',
        description:
          'Explore the romantic charm of Manali with visits to Hadimba Devi Temple, Manu Temple, Vashisht Hot Springs, Tibetan Monastery, Van Vihar, and Manali Mall Road.',
        activities: [
          'Hadimba Devi Temple',
          'Vashisht Hot Springs',
          'Tibetan Monastery',
          'Mall Road Evening Walk'
        ],
        meals: 'Breakfast & Dinner',
        stay: 'Manali Hotel',
      },
      {
        day: 6,
        title: 'Naggar & Kullu Excursion',
        description:
          'Enjoy a peaceful excursion to Naggar and Kullu. Visit the historic Naggar Castle, Roerich Art Gallery, and Kullu Valley while enjoying the scenic beauty of the Beas River.',
        activities: [
          'Naggar Castle Visit',
          'Roerich Art Gallery',
          'Kullu Valley Sightseeing',
          'Beas River Views'
        ],
        meals: 'Breakfast & Dinner',
        stay: 'Manali Hotel',
      },
      {
        day: 7,
        title: 'Manali to Delhi Departure',
        description:
          'After breakfast, check out from the hotel and begin your return journey to Delhi. Take back beautiful memories of your romantic Shimla and Manali honeymoon.',
        activities: [
          'Breakfast',
          'Hotel Check-out',
          'Scenic Mountain Drive',
          'Departure to Delhi'
        ],
        meals: 'Breakfast',
        stay: 'End of Tour',
      },
    ],
  },
];
