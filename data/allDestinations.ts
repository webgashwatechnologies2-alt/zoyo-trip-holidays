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
  category: 'Popular' | 'Honeymoon' | 'Adventure' | 'Family' | 'Luxury' | 'Cultural';
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

export interface DestinationData {
  id: string;
  slug: string;
  name: string;
  type: 'national' | 'international';
  region: string;
  tagline: string;
  description: string;
  heroImage: string;
  bestTime: string;
  packagesCount: number;
  packages: TourPackage[];
}

export const allDestinations: Record<string, DestinationData> = {
  'kashmir': {
    id: 'dest-kashmir',
    slug: 'kashmir',
    name: 'Kashmir Paradise on Earth',
    type: 'national',
    region: 'North India',
    tagline: 'Snow-capped peaks, shikara rides on Dal Lake, Gulmarg gondolas, and saffron valleys.',
    description: 'Known as the "Paradise on Earth", Kashmir enchants travelers with its floating gardens, snow-covered pine slopes, tranquil wooden houseboats on Dal Lake, and blooming tulip gardens.',
    heroImage: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=1600&auto=format&fit=crop',
    bestTime: 'April to October (Pleasant & Green) / Dec to Feb (Snow & Skiing)',
    packagesCount: 4,
    packages: [
      {
        id: 'ks-1',
        slug: 'vaishnodevi-darshan-kashmir-classic-tour',
        title: 'Vaishnodevi Darshan & Kashmir Classic Tour',
        subtitle: 'Shikara rides on Dal Lake, Gulmarg Gondola snow ride & Betaab Valley meadows',
        location: 'Srinagar, Gulmarg, Pahalgam, Sonamarg',
        duration: '2 Nights / 3 Days',
        price: '₹18,999',
        originalPrice: '₹24,499',
        rating: 5.0,
        reviewsCount: 410,
        category: 'Popular',

        heroImage: '/assets/images/packageimages/vashnodeviimage.webp',

        gallery: [
          'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop',
        ],

        overview:
          'Experience the beauty of Kashmir with a memorable Vaishnodevi Darshan and Kashmir tour. Enjoy a peaceful Shikara ride on Dal Lake, explore the scenic beauty of Gulmarg, and discover the beautiful valleys of Pahalgam. This short getaway is perfect for experiencing Kashmir’s famous landscapes and attractions.',

        highlights: [
          'Vaishnodevi Darshan for a spiritual and memorable experience',
          '1-Hour Shikara Ride on the beautiful Dal Lake',
          'Gulmarg Gondola cable car ride with breathtaking mountain views',
          'Explore Betaab Valley and the scenic landscapes of Pahalgam',
          'Visit the famous Mughal Gardens of Srinagar',
        ],

        inclusions: [
          '2 Nights accommodation in a comfortable 3/4-Star hotel',
          'Daily Breakfast and Dinner',
          'Private Sedan/SUV with experienced local chauffeur',
          '1-Hour complimentary Shikara Ride on Dal Lake',
          'All toll, fuel, parking and driver allowances',
        ],

        exclusions: [
          'Airfare to/from Srinagar Airport',
          'Gulmarg Gondola tickets',
          'Vaishnodevi shrine travel/registration related charges',
          'Union cab charges in Pahalgam / Gulmarg',
          'Pony / horse rides and personal expenses',
        ],

        hotelType: '3/4-Star Mountain Hotels',
        pickupDrop: 'Srinagar International Airport (SXR)',
        itinerary: [
          {
            day: 1,
            title: 'Arrival in Jammu | Transfer to Katra',
            description:
              'Arrive at Jammu Railway Station or Airport and proceed to Katra. Check in to your hotel and relax. In the evening, explore the local market and prepare for the sacred Vaishno Devi pilgrimage. Overnight stay in Katra.',
            activities: [
              'Airport/Railway Station Meet & Greet',
              'Transfer to Katra',
              'Hotel Check-in',
              'Explore Katra Local Market',
              'Vaishno Devi Yatra Preparation',
            ],
            meals: 'Dinner',
            stay: '3/4-Star Hotel, Katra',
          },

          {
            day: 2,
            title: 'Vaishno Devi Darshan | Return to Katra',
            description:
              'Start early morning for the sacred Vaishno Devi pilgrimage. Trek or use available travel options to reach the Holy Shrine of Mata Vaishno Devi and seek blessings. After darshan, return to Katra and relax at the hotel. Overnight stay in Katra.',
            activities: [
              'Vaishno Devi Yatra',
              'Mata Vaishno Devi Darshan',
              'Bhairon Temple Visit (Optional)',
              'Return to Katra',
              'Evening Leisure',
            ],
            meals: 'Breakfast & Dinner',
            stay: '3/4-Star Hotel, Katra',
          },

          {
            day: 3,
            title: 'Katra to Jammu | Departure',
            description:
              'After breakfast, check out from the hotel and proceed towards Jammu Railway Station or Airport. Depending on your departure time, enjoy a short local sightseeing experience before your onward journey with divine blessings and memorable experiences.',
            activities: [
              'Breakfast & Hotel Check-out',
              'Katra to Jammu Transfer',
              'Local Sightseeing (Time Permitting)',
              'Airport/Railway Station Drop',
            ],
            meals: 'Breakfast',
            stay: 'Departure',
          },
        ],
      },
      {
        id: 'ks-2',
        slug: 'majestic-kashmir-escape',
        title: 'Majestic Kashmir Escape',
        subtitle:
          'Shikara rides on Dal Lake, Gulmarg Gondola snow ride & Betaab Valley meadows',
        location: 'Srinagar, Gulmarg, Pahalgam, Sonamarg',
        duration: '7 Nights / 8 Days',
        price: '₹39,999',
        originalPrice: '₹49,999',
        rating: 5.0,
        reviewsCount: 410,
        category: 'Popular',

        heroImage: '/assets/images/packageimages/mkashmir.webp',

        gallery: [
          'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop',
        ],

        overview:
          'Discover the breathtaking beauty of Kashmir on an unforgettable 7 Nights / 8 Days journey covering Srinagar, Gulmarg, Pahalgam and Sonamarg. Enjoy a relaxing Shikara ride on Dal Lake, experience the famous Gulmarg Gondola, explore the beautiful valleys of Pahalgam and witness the spectacular mountain landscapes of Sonamarg.',

        highlights: [
          '1-Hour Shikara Ride on the beautiful Dal Lake',
          'Overnight stay on a traditional Kashmiri houseboat',
          'Gulmarg Gondola ride with spectacular Himalayan views',
          'Explore Betaab Valley, Aru Valley & Chandanwari in Pahalgam',
          'Scenic Sonamarg excursion and mountain landscapes',
          'Visit Srinagar’s famous Mughal Gardens',
        ],

        inclusions: [
          '7 Nights accommodation in 3/4-Star hotels and houseboat',
          'Daily Breakfast and Dinner',
          'Private Sedan/SUV with experienced local chauffeur',
          '1-Hour complimentary Shikara Ride on Dal Lake',
          'All toll, fuel, parking and driver allowances',
        ],

        exclusions: [
          'Airfare to/from Srinagar Airport',
          'Gulmarg Gondola tickets',
          'Union cab charges in Pahalgam and Sonamarg',
          'Pony / horse rides',
          'Personal expenses, tips and laundry',
        ],

        hotelType: '3/4-Star Hotels & Deluxe Houseboat',
        pickupDrop: 'Srinagar International Airport (SXR)',
        itinerary: [
          {
            day: 1,
            title: 'Arrival in Srinagar | Houseboat Stay & Shikara Ride',
            description:
              'Arrive at Srinagar Airport and transfer to a traditional Kashmiri houseboat on Dal Lake. Relax and enjoy a peaceful Shikara ride while experiencing the floating gardens, local markets, and beautiful Himalayan surroundings. Overnight stay in the houseboat.',
            activities: [
              'Srinagar Airport Meet & Greet',
              'Transfer to Dal Lake',
              'Houseboat Check-in',
              '1-Hour Shikara Ride',
              'Explore Dal Lake Floating Market',
            ],
            meals: 'Dinner',
            stay: 'Deluxe Houseboat, Dal Lake',
          },

          {
            day: 2,
            title: 'Srinagar Local Sightseeing',
            description:
              'After breakfast, explore the famous attractions of Srinagar. Visit the beautiful Mughal Gardens including Nishat Bagh, Shalimar Bagh and Chashme Shahi, followed by Pari Mahal, Hazratbal Shrine and Shankaracharya Temple. Overnight stay in Srinagar.',
            activities: [
              'Nishat Bagh',
              'Shalimar Bagh',
              'Chashme Shahi',
              'Pari Mahal',
              'Hazratbal Shrine',
              'Shankaracharya Temple',
            ],
            meals: 'Breakfast & Dinner',
            stay: '3/4-Star Hotel, Srinagar',
          },

          {
            day: 3,
            title: 'Excursion to Sonamarg | Meadow of Gold',
            description:
              'After breakfast, drive to Sonamarg, famously known as the Meadow of Gold. Enjoy the spectacular mountain scenery and visit Thajiwas Glacier by pony or local vehicle, subject to weather and road conditions. Return to Srinagar for an overnight stay.',
            activities: [
              'Scenic Drive to Sonamarg',
              'Thajiwas Glacier Visit',
              'Zero Point Visit (Subject to Conditions)',
              'Mountain Photography',
              'Return to Srinagar',
            ],
            meals: 'Breakfast & Dinner',
            stay: '3/4-Star Hotel, Srinagar',
          },

          {
            day: 4,
            title: 'Srinagar to Gulmarg | Gondola Experience',
            description:
              'After breakfast, drive to Gulmarg, one of Kashmir’s most beautiful mountain destinations. Enjoy the scenic surroundings and visit the famous Gulmarg Golf Course. Experience the Gulmarg Gondola cable car ride, subject to weather and operational conditions. Overnight stay in Gulmarg.',
            activities: [
              'Scenic Drive to Gulmarg',
              'Gulmarg Golf Course',
              'Gulmarg Gondola Ride',
              'Mountain & Snow Views',
              'Leisure Evening in Gulmarg',
            ],
            meals: 'Breakfast & Dinner',
            stay: '3/4-Star Hotel, Gulmarg',
          },

          {
            day: 5,
            title: 'Gulmarg to Pahalgam | Scenic Valley Drive',
            description:
              'After breakfast, check out and drive towards Pahalgam through beautiful countryside, saffron fields and apple orchards. Upon arrival, check in to your hotel and spend the evening relaxing beside the scenic Lidder River. Overnight stay in Pahalgam.',
            activities: [
              'Hotel Check-out',
              'Scenic Drive to Pahalgam',
              'Visit Saffron Fields',
              'Apple Orchard Views',
              'Lidder River Walk',
            ],
            meals: 'Breakfast & Dinner',
            stay: '3/4-Star Hotel, Pahalgam',
          },

          {
            day: 6,
            title: 'Pahalgam Sightseeing | Betaab Valley & Aru Valley',
            description:
              'Explore the stunning valleys around Pahalgam. Visit Betaab Valley, Aru Valley and Chandanwari by local union cab. Enjoy the breathtaking landscapes and optional activities such as horse riding or river rafting. Overnight stay in Pahalgam.',
            activities: [
              'Betaab Valley',
              'Aru Valley',
              'Chandanwari',
              'Lidder River Views',
              'Horse Riding (Optional)',
              'River Rafting (Optional)',
            ],
            meals: 'Breakfast & Dinner',
            stay: '3/4-Star Hotel, Pahalgam',
          },

          {
            day: 7,
            title: 'Pahalgam to Srinagar | Shopping & Leisure',
            description:
              'After breakfast, check out from the hotel and drive back to Srinagar. Spend the rest of the day at leisure. Explore local markets for Kashmiri handicrafts, Pashmina products, dry fruits, spices and traditional souvenirs. Overnight stay in Srinagar.',
            activities: [
              'Breakfast & Hotel Check-out',
              'Drive to Srinagar',
              'Kashmiri Handicraft Shopping',
              'Dry Fruits & Souvenir Shopping',
              'Leisure Evening',
            ],
            meals: 'Breakfast & Dinner',
            stay: '3/4-Star Hotel, Srinagar',
          },

          {
            day: 8,
            title: 'Departure from Srinagar',
            description:
              'After breakfast, check out from the hotel and transfer to Srinagar International Airport for your onward journey. Take home unforgettable memories of the beautiful valleys, lakes and mountains of Kashmir.',
            activities: [
              'Breakfast',
              'Hotel Check-out',
              'Srinagar Local Transfer',
              'Airport Drop',
              'Departure',
            ],
            meals: 'Breakfast',
            stay: 'Departure',
          },
        ],
      },
      {
        id: 'ks-3',
        slug: 'kashmir-bliss-getaway',
        title: 'Kashmir Bliss Getaway',
        subtitle:
          'Shikara rides on Dal Lake, Gulmarg Gondola snow ride & Betaab Valley meadows',
        location: 'Srinagar, Gulmarg, Pahalgam, Sonamarg',
        duration: '3 Nights / 4 Days',
        price: '₹24,999',
        originalPrice: '₹31,999',
        rating: 5.0,
        reviewsCount: 410,
        category: 'Popular',

        heroImage: '/assets/images/packageimages/Kashmirnewww.webp',

        gallery: [
          'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop',
        ],

        overview:
          'Experience the best of Kashmir on a memorable 3 Nights / 4 Days getaway covering Srinagar, Gulmarg and Pahalgam. Enjoy a peaceful Shikara ride on Dal Lake, explore the scenic beauty of Gulmarg and discover the stunning valleys of Pahalgam. This short Kashmir escape is perfect for couples, families and first-time visitors.',

        highlights: [
          '1-Hour Shikara Ride on the beautiful Dal Lake',
          'Comfortable stay in Srinagar, Gulmarg and Pahalgam',
          'Gulmarg Gondola ride with spectacular Himalayan views',
          'Explore Betaab Valley and the scenic landscapes of Pahalgam',
          'Visit Srinagar’s famous Mughal Gardens',
          'Scenic mountain drives through Kashmir Valley',
        ],

        inclusions: [
          '3 Nights accommodation in 3/4-Star hotels',
          'Daily Breakfast and Dinner',
          'Private Sedan/SUV with experienced local chauffeur',
          '1-Hour complimentary Shikara Ride on Dal Lake',
          'All toll, fuel, parking and driver allowances',
        ],

        exclusions: [
          'Airfare to/from Srinagar Airport',
          'Gulmarg Gondola tickets',
          'Union cab charges in Pahalgam',
          'Pony / horse rides',
          'Personal expenses, tips and laundry',
        ],

        hotelType: '3/4-Star Mountain Hotels',
        pickupDrop: 'Srinagar International Airport (SXR)',
        itinerary: [
          {
            day: 1,
            title: 'Arrival in Srinagar | Mughal Gardens & Shikara Ride',
            description:
              'Arrive at Srinagar Airport and transfer to your hotel. Visit the beautiful Mughal Gardens including Nishat Bagh, Shalimar Bagh, Chashme Shahi and Pari Mahal. In the evening, enjoy a relaxing Shikara ride on Dal Lake and experience the beautiful surroundings. Overnight stay in Srinagar.',
            activities: [
              'Srinagar Airport Meet & Greet',
              'Hotel Check-in',
              'Nishat Bagh',
              'Shalimar Bagh',
              'Chashme Shahi',
              '1-Hour Shikara Ride on Dal Lake',
            ],
            meals: 'Dinner',
            stay: '3/4-Star Hotel, Srinagar',
          },

          {
            day: 2,
            title: 'Day Excursion to Gulmarg | Gondola Ride',
            description:
              'After breakfast, drive to Gulmarg, known for its beautiful meadows and spectacular Himalayan scenery. Explore the Gulmarg Golf Course and St. Mary Church, and enjoy the famous Gulmarg Gondola ride, subject to weather and operational conditions. Return to Srinagar for an overnight stay.',
            activities: [
              'Scenic Drive to Gulmarg',
              'Gulmarg Golf Course',
              'St. Mary Church',
              'Gulmarg Gondola Ride',
              'Snow & Mountain Views',
              'Return to Srinagar',
            ],
            meals: 'Breakfast & Dinner',
            stay: '3/4-Star Hotel, Srinagar',
          },

          {
            day: 3,
            title: 'Day Excursion to Pahalgam | Betaab Valley & Aru Valley',
            description:
              'After breakfast, drive to Pahalgam through scenic countryside, saffron fields and apple orchards. Explore the beautiful Betaab Valley, Aru Valley and Chandanwari by local union cab at additional cost. Enjoy the peaceful surroundings of the Lidder River before returning to Srinagar. Overnight stay in Srinagar.',
            activities: [
              'Scenic Drive to Pahalgam',
              'Saffron Fields & Apple Orchards',
              'Betaab Valley',
              'Aru Valley',
              'Chandanwari',
              'Lidder River Views',
            ],
            meals: 'Breakfast & Dinner',
            stay: '3/4-Star Hotel, Srinagar',
          },

          {
            day: 4,
            title: 'Departure from Srinagar',
            description:
              'After breakfast, check out from the hotel and transfer to Srinagar International Airport for your onward journey. Take home unforgettable memories of the beautiful Kashmir Valley.',
            activities: [
              'Breakfast',
              'Hotel Check-out',
              'Srinagar Local Transfer',
              'Airport Drop',
              'Departure',
            ],
            meals: 'Breakfast',
            stay: 'Departure',
          },
        ],
      },
      {
        id: 'ks-4',
        slug: 'trails-of-kashmir',
        title: 'Trails of Kashmir | Shikara Rides, Glaciers & Meadows',
        subtitle:
          'Shikara rides on Dal Lake, Gulmarg Gondola snow ride & Betaab Valley meadows',
        location: 'Srinagar, Gulmarg, Pahalgam, Sonamarg',
        duration: '6 Days / 5 Nights',
        price: '₹29,999',
        originalPrice: '₹37,999',
        rating: 5.0,
        reviewsCount: 410,
        category: 'Popular',

        heroImage: '/assets/images/packageimages/kashmirtrails.webp',

        gallery: [
          'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop',
        ],

        overview:
          'Explore the breathtaking trails of Kashmir on a memorable 5 Nights / 6 Days journey covering Srinagar, Sonamarg, Gulmarg and Pahalgam. Enjoy a peaceful Shikara ride on Dal Lake, experience the majestic Gulmarg Gondola, explore the glaciers and meadows of Sonamarg, and discover the scenic valleys of Pahalgam. A perfect Kashmir holiday for families, couples and nature lovers.',

        highlights: [
          '1-Hour Shikara Ride on the beautiful Dal Lake',
          'Explore the Mughal Gardens and heritage attractions of Srinagar',
          'Scenic Sonamarg excursion with Thajiwas Glacier views',
          'Gulmarg Gondola ride with spectacular Himalayan scenery',
          'Explore Betaab Valley, Aru Valley & Chandanwari',
          'Scenic drives through Kashmir’s mountains, meadows and valleys',
        ],

        inclusions: [
          '5 Nights accommodation in 3/4-Star hotels',
          'Daily Breakfast and Dinner',
          'Private Sedan/SUV with experienced local chauffeur',
          '1-Hour complimentary Shikara Ride on Dal Lake',
          'All toll, fuel, parking and driver allowances',
        ],

        exclusions: [
          'Airfare to/from Srinagar Airport',
          'Gulmarg Gondola tickets',
          'Union cab charges in Pahalgam and Sonamarg',
          'Pony / horse rides and adventure activities',
          'Personal expenses, tips and laundry',
        ],

        hotelType: '3/4-Star Mountain Hotels',
        pickupDrop: 'Srinagar International Airport (SXR)',
        itinerary: [
          {
            day: 1,
            title: 'Arrival in Srinagar | Srinagar Sightseeing Tour | Shikara Ride Experience',
            description:
              'Welcome to Kashmir! Upon arrival at the Srinagar airport, get transferred to your hotel for check-in. Later, get driven to Pari Mahal, offering historic charm and city views. Also, stroll through Shalimar Bagh and Nishat Bagh, the iconic Mughal gardens by Dal Lake. Head to Shankaracharya Temple for panoramic valley views, and later in the evening, enjoy a peaceful Shikara ride on Dal Lake before getting driven to the hotel for an overnight stay.',
            activities: [
              'Srinagar Airport Meet & Greet',
              'Hotel Check-in',
              'Nishat Bagh',
              'Shalimar Bagh',
              'Chashme Shahi',
              '1-Hour Shikara Ride on Dal Lake',
            ],
            meals: 'Dinner',
            stay: '3/4-Star Hotel, Srinagar',
          },

          {
            day: 2,
            title: 'Excursion to Sonamarg',
            description:
              'In the morning, get driven to Sonamarg, the “Meadow of Gold.” On arrival, you can hire a pony (at your own cost) for a short trek to Thajiwas Glacier, a scenic spot where snow stays year-round. Later, proceed towards Zero Point near Zojila Pass to witness dramatic mountain landscapes along the India-Pakistan border road. In the evening, get transferred back to Srinagar at the hotel for an overnight stay.',
            activities: [
              'Scenic Drive to Gulmarg',
              'Gulmarg Golf Course',
              'St. Mary Church',
              'Gulmarg Gondola Ride',
              'Snow & Mountain Views',
              'Return to Srinagar',
            ],
            meals: 'Breakfast & Dinner',
            stay: '3/4-Star Hotel, Srinagar',
          },

          {
            day: 3,
            title: 'Transfer to Gulmarg | Gulmarg Sightseeing Tour',
            description:
              'After check-out, you will be driven to Gulmarg. Upon arrival, get driven to Union Cab Stand, from where you can either hire a cab or take a walk to the world-famous Gulmarg Golf Course, one of the world highest green golf courses. Later, head to Gondola cable car station & ascend through Phase 1  Phase 2 cost not included to reach the towering Apharwat Peak, where sweeping views of the Himalayas await. Afterwards, get transferred to the hotel. Upon arrival, check in for an overnight stay.',
            activities: [
              'Scenic Drive to Pahalgam',
              'Saffron Fields & Apple Orchards',
              'Betaab Valley',
              'Aru Valley',
              'Chandanwari',
              'Lidder River Views',
            ],
            meals: 'Breakfast & Dinner',
            stay: '3/4-Star Hotel, Srinagar',
          },

          {
            day: 4,
            title: 'Transfer to Pahalgam | En Route Pahalgam Sightseeing',
            description:
              'Check out from your hotel in Gulmarg and get transferred to Pahalgam, enjoying scenic views of saffron fields and apple orchards en route. On arrival at the Pahalgam Union Cab Stand, hire a cab (at your own expense) to explore attractions such as Aru Valley, Baisaran Valley, and Betaab Valley, each known for its lush meadows and alpine beauty. After sightseeing, return to Pahalgam Union Cab Stand and from there, get driven to check in at your Pahalgam hotel and spend the evening at leisure.',
            activities: [
              'Breakfast',
              'Hotel Check-out',
              'Srinagar Local Transfer',
              'Airport Drop',
              'Departure',
            ],
            meals: 'Breakfast',
            stay: 'Departure',
          },
          {
            day: 5,
            title: 'Departure Day',
            description:
              'Today, check out of your hotel and get driven to Srinagar airport for your onward journey, carrying with you cherished memories of Kashmir’s valleys, gardens, and mountain landscapes.',
            activities: [
              'Breakfast',
              'Hotel Check-out',
              'Srinagar Local Transfer',
              'Airport Drop',
              'Departure',
            ],
            meals: 'Breakfast',
            stay: 'Departure',
          },
        ],
      },
      {
        id: 'ks-5',
        slug: 'gulmarg-family-tour',
        title: 'Gulmarg Family Tour Package',
        subtitle:
          'Family-friendly Kashmir escape with Gulmarg Gondola, Dal Lake Shikara ride & scenic mountain views',
        location: 'Srinagar, Gulmarg',
        duration: '4 Days / 3 Nights',
        price: '₹19,999',
        originalPrice: '₹25,999',
        rating: 5.0,
        reviewsCount: 410,
        category: 'Popular',

        heroImage: '/assets/images/packageimages/gulmarghero.webp',
        gallery: [
          'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop',
        ],

        overview:
          'Enjoy a memorable family holiday in Kashmir with a comfortable 3 Nights / 4 Days journey covering Srinagar and Gulmarg. Experience a relaxing Shikara ride on Dal Lake, explore Srinagar’s beautiful Mughal Gardens and spend quality time surrounded by the scenic meadows and mountains of Gulmarg. This family-friendly package is designed for a relaxed and enjoyable Kashmir vacation.',

        highlights: [
          'Family-friendly Shikara Ride on the beautiful Dal Lake',
          'Explore Srinagar’s famous Mughal Gardens',
          'Gulmarg Gondola ride with breathtaking Himalayan views',
          'Visit Gulmarg Golf Course and enjoy the scenic meadows',
          'Comfortable family accommodation in 3/4-Star hotels',
          'Scenic mountain drives and leisure time in Kashmir',
        ],

        inclusions: [
          '3 Nights accommodation in 3/4-Star hotels',
          'Daily Breakfast and Dinner',
          'Private Sedan/SUV with experienced local chauffeur',
          '1-Hour complimentary Shikara Ride on Dal Lake',
          'All toll, fuel, parking and driver allowances',
        ],

        exclusions: [
          'Airfare to/from Srinagar Airport',
          'Gulmarg Gondola tickets',
          'Pony / horse rides and adventure activities',
          'Entry fees to attractions not mentioned in inclusions',
          'Personal expenses, tips and laundry',
        ],

        hotelType: '3/4-Star Family Hotels',
        pickupDrop: 'Srinagar International Airport (SXR)',
        itinerary: [
          {
            day: 1,
            title: 'Arrival in Srinagar | Evening at Dal Lake',
            description:
              'Welcome to Srinagar, the beautiful gateway to Kashmir. Upon arrival at Srinagar International Airport, meet your driver and proceed towards your hotel. Complete the check-in formalities and take some time to relax. In the evening, visit the iconic Dal Lake and enjoy a peaceful Shikara ride across the calm waters. Experience the beautiful Himalayan surroundings, floating gardens and traditional Kashmiri lifestyle before returning to your hotel for an overnight stay.',
            activities: [
              'Srinagar Airport Meet & Greet',
              'Private Transfer to Hotel',
              'Hotel Check-in',
              'Dal Lake Visit',
              '1-Hour Shikara Ride',
              'Floating Gardens & Local Market',
              'Leisure Evening',
            ],
            meals: 'Dinner',
            stay: '3/4-Star Hotel, Srinagar',
          },

          {
            day: 2,
            title: 'Srinagar to Gulmarg | Gulmarg Sightseeing & Gondola Ride',
            description:
              'After breakfast, check out from the hotel and drive towards Gulmarg, one of Kashmir’s most popular hill stations. Enjoy a scenic journey through beautiful mountain landscapes. Upon arrival, explore the famous Gulmarg meadows and visit the Gulmarg Golf Course. Later, enjoy the spectacular Gulmarg Gondola cable car ride, subject to weather and operational conditions. You may also explore Strawberry Valley and Drung Waterfall, subject to local conditions. Spend the evening relaxing amidst the peaceful Himalayan surroundings. Overnight stay in Gulmarg.',
            activities: [
              'Breakfast & Hotel Check-out',
              'Scenic Drive to Gulmarg',
              'Gulmarg Meadows',
              'Gulmarg Golf Course',
              'Gulmarg Gondola Ride',
              'Strawberry Valley Visit',
              'Drung Waterfall Visit',
              'Snow & Mountain Views',
              'Leisure Evening',
            ],
            meals: 'Breakfast & Dinner',
            stay: '3/4-Star Hotel, Gulmarg',
          },

          {
            day: 3,
            title: 'Gulmarg to Srinagar | Mughal Gardens & Local Sightseeing',
            description:
              'After breakfast, check out from the Gulmarg hotel and drive back to Srinagar. On arrival, begin a sightseeing tour of the city and explore the famous Mughal Gardens. Visit Chashme Shahi, Nishat Bagh and Shalimar Bagh, known for their beautiful terraced gardens, fountains and views of Dal Lake. Continue to Pari Mahal for panoramic views of Srinagar. Later, check in to your hotel and spend the evening at leisure. You can explore the local market and shop for Kashmiri handicrafts, dry fruits, saffron and souvenirs. Overnight stay in Srinagar.',
            activities: [
              'Breakfast & Hotel Check-out',
              'Scenic Drive from Gulmarg to Srinagar',
              'Chashme Shahi',
              'Nishat Bagh',
              'Shalimar Bagh',
              'Pari Mahal',
              'Kashmiri Handicraft Shopping',
              'Dry Fruits & Saffron Shopping',
              'Hotel Check-in',
              'Leisure Evening',
            ],
            meals: 'Breakfast & Dinner',
            stay: '3/4-Star Hotel, Srinagar',
          },

          {
            day: 4,
            title: 'Departure from Srinagar | Trip Ends',
            description:
              'Enjoy your final breakfast in Kashmir and check out from the hotel. Depending on your departure schedule, you may have some free time for last-minute shopping or a short local visit. Later, your private vehicle will transfer you to Srinagar International Airport for your onward journey. Depart with beautiful memories of the Dal Lake, Gulmarg mountains and your memorable family holiday in Kashmir.',
            activities: [
              'Breakfast',
              'Hotel Check-out',
              'Last-Minute Shopping',
              'Srinagar Local Transfer',
              'Airport Drop',
              'Departure',
            ],
            meals: 'Breakfast',
            stay: 'Departure',
          },
        ],
      },
      {
        id: 'ks-6',
        slug: 'romantic-escape-kashmir-tour',
        title: 'Romantic Escape to Kashmir | Peaks, Valleys & Meadows',
        subtitle:
          'A romantic Kashmir getaway with Shikara rides, Gulmarg meadows, scenic valleys & cozy stays',
        location: 'Srinagar, Gulmarg, Pahalgam',
        duration: '5 Days / 4 Nights',
        price: '₹29,999',
        originalPrice: '₹37,999',
        rating: 5.0,
        reviewsCount: 410,
        category: 'Popular',

        heroImage: '/assets/images/packageimages/romantic.webp',

        gallery: [
          'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop',
        ],

        overview:
          'Celebrate love with a memorable 4 Nights / 5 Days romantic escape through the breathtaking landscapes of Kashmir. Explore the charm of Srinagar, enjoy a romantic Shikara ride on Dal Lake, experience the snow-covered beauty of Gulmarg and discover the peaceful valleys of Pahalgam. With comfortable stays, scenic drives and leisurely experiences, this package is perfect for couples and honeymooners looking for a romantic Kashmir getaway.',

        highlights: [
          'Romantic 1-Hour Shikara Ride on Dal Lake',
          'Beautiful sunset and mountain views in Srinagar',
          'Gulmarg Gondola ride with breathtaking Himalayan scenery',
          'Romantic walk through the scenic meadows of Gulmarg',
          'Explore Betaab Valley and the beautiful landscapes of Pahalgam',
          'Comfortable couple-friendly accommodation in 3/4-Star hotels',
        ],

        inclusions: [
          '4 Nights accommodation in 3/4-Star couple-friendly hotels',
          'Daily Breakfast and Dinner',
          'Private Sedan/SUV with experienced local chauffeur',
          '1-Hour complimentary Shikara Ride on Dal Lake',
          'All toll, fuel, parking and driver allowances',
        ],

        exclusions: [
          'Airfare to/from Srinagar Airport',
          'Gulmarg Gondola tickets',
          'Union cab charges in Pahalgam',
          'Pony / horse rides and adventure activities',
          'Personal expenses, tips and laundry',
        ],

        hotelType: '3/4-Star Couple-Friendly Hotels',
        pickupDrop: 'Srinagar International Airport (SXR)',
        itinerary: [
          {
            day: 1,
            title:
              'Arrival in Srinagar | Srinagar Sightseeing Tour | Shikara Ride Experience',
            description:
              'Welcome to Srinagar, the beautiful gateway to Kashmir. Upon arrival at Srinagar Airport, meet your driver and transfer to your hotel. After check-in, relax for some time before beginning your Srinagar sightseeing tour. Visit the beautiful Mughal Gardens including Shalimar Bagh and Nishat Bagh, where fountains, flowers and landscaped terraces create a peaceful atmosphere. Continue to the historic Pari Mahal and Shankaracharya Temple for panoramic views of Srinagar. In the evening, enjoy a romantic Shikara ride on Dal Lake and admire the surrounding Himalayan scenery. Overnight stay in Srinagar.',
            activities: [
              'Srinagar Airport Meet & Greet',
              'Private Transfer to Hotel',
              'Hotel Check-in',
              'Shalimar Bagh',
              'Nishat Bagh',
              'Pari Mahal',
              'Shankaracharya Temple',
              '1-Hour Romantic Shikara Ride',
              'Dal Lake Sunset Views',
              'Leisure Evening',
            ],
            meals: 'Dinner',
            stay: '3/4-Star Couple-Friendly Hotel, Srinagar',
          },

          {
            day: 2,
            title: 'Srinagar to Gulmarg | Gulmarg Sightseeing & Gondola Ride',
            description:
              'After breakfast, check out from your Srinagar hotel and drive towards Gulmarg, one of Kashmir’s most romantic mountain destinations. Upon arrival, explore the beautiful Gulmarg meadows and visit the famous Gulmarg Golf Course. Continue towards the Gondola cable car station and enjoy the spectacular Phase 1 and Phase 2 rides, subject to weather and operational conditions. From the upper levels, admire panoramic views of snow-covered peaks and Apharwat Mountain. Later, return to the hotel and enjoy a peaceful evening surrounded by the mountains. Overnight stay in Gulmarg.',
            activities: [
              'Breakfast & Hotel Check-out',
              'Scenic Drive to Gulmarg',
              'Gulmarg Meadows',
              'Gulmarg Golf Course',
              'Gulmarg Gondola Phase 1',
              'Gulmarg Gondola Phase 2',
              'Apharwat Peak Views',
              'Snow & Mountain Photography',
              'Romantic Leisure Evening',
            ],
            meals: 'Breakfast & Dinner',
            stay: '3/4-Star Couple-Friendly Hotel, Gulmarg',
          },

          {
            day: 3,
            title: 'Gulmarg to Pahalgam | Pahalgam Valley Exploration',
            description:
              'After breakfast, check out from your Gulmarg hotel and drive towards the beautiful valley of Pahalgam. Upon arrival, proceed to the local Union Cab Stand and hire a cab for sightseeing at additional cost. Explore the picturesque Baisaran Valley, often known as Mini Switzerland, surrounded by lush meadows and snow-covered mountains. Continue to Aru Valley, Betaab Valley and Chandanwari, the traditional gateway to the Amarnath Yatra. Enjoy the peaceful landscapes and spend some quality time together before checking in to your hotel. Overnight stay in Pahalgam.',
            activities: [
              'Breakfast & Hotel Check-out',
              'Scenic Drive to Pahalgam',
              'Pahalgam Union Cab Transfer',
              'Baisaran Valley',
              'Aru Valley',
              'Betaab Valley',
              'Chandanwari',
              'Lidder River Views',
              'Couple Photography',
              'Hotel Check-in',
              'Leisure Evening',
            ],
            meals: 'Breakfast & Dinner',
            stay: '3/4-Star Couple-Friendly Hotel, Pahalgam',
          },

          {
            day: 4,
            title: 'Pahalgam to Srinagar | Leisure & Romantic Evening',
            description:
              'After breakfast, check out from your hotel and drive back to Srinagar through the beautiful Kashmir countryside. Upon arrival, check in to your hotel and relax. Spend the rest of the day at leisure with your partner. You can enjoy a peaceful walk around Dal Lake, explore the local markets or shop for Kashmiri handicrafts, saffron, dry fruits and traditional souvenirs. In the evening, enjoy the romantic atmosphere of Srinagar and unwind at your hotel. Overnight stay in Srinagar.',
            activities: [
              'Breakfast & Hotel Check-out',
              'Scenic Drive to Srinagar',
              'Hotel Check-in',
              'Dal Lake Leisure Walk',
              'Kashmiri Handicraft Shopping',
              'Saffron & Dry Fruits Shopping',
              'Couple Leisure Time',
              'Romantic Evening',
            ],
            meals: 'Breakfast & Dinner',
            stay: '3/4-Star Couple-Friendly Hotel, Srinagar',
          },

          {
            day: 5,
            title: 'Departure from Srinagar | Trip Ends',
            description:
              'Enjoy your final breakfast in Kashmir and check out from the hotel. Depending on your departure schedule, you may have some free time for last-minute shopping or a short visit around Srinagar. Later, your private vehicle will transfer you to Srinagar International Airport for your onward journey. Depart with beautiful memories of the Dal Lake, Gulmarg mountains, Pahalgam valleys and your romantic Kashmir escape.',
            activities: [
              'Breakfast',
              'Hotel Check-out',
              'Last-Minute Shopping',
              'Srinagar Local Transfer',
              'Airport Drop',
              'Departure',
            ],
            meals: 'Breakfast',
            stay: 'Departure',
          },
        ],
      },
    ],
  },

  'ladakh': {
    id: 'dest-ladakh',
    slug: 'ladakh',
    name: 'Leh & Ladakh High Altitude Wonderland',
    type: 'national',
    region: 'North India',
    tagline: 'Pangong Lake, Nubra Valley sand dunes, double-humped camels & Khardung La Pass.',
    description: 'The Land of High Passes, Ladakh is renowned for its otherworldly moonscapes, crystal-blue alpine lakes, ancient Buddhist gompas, and the thrilling Khardung La Pass.',
    heroImage: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=1600&auto=format&fit=crop',
    bestTime: 'May to October',
    packagesCount: 3,
    packages: [
      {
        id: 'ld-1',
        slug: 'best-ladakh-tour-package',
        title: 'Best Of Ladakh Tour Package',
        subtitle:
          'Khardung La, Diskit Monastery, Bactrian Camel Safari & Pangong camping',
        location: 'Leh, Nubra Valley, Pangong Tso, Khardung La',
        duration: '6 Days / 5 Nights',
        price: '₹22,999',
        originalPrice: '₹29,999',
        rating: 4.9,
        reviewsCount: 380,
        category: 'Adventure',

        heroImage: '/assets/images/packageimages/lehhh.webp',

        gallery: [
          'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop',
        ],

        overview:
          'Embark on an unforgettable 6 Days / 5 Nights adventure through the breathtaking landscapes of Ladakh. Explore Leh’s iconic attractions, cross the legendary Khardung La, discover the Nubra Valley with its dramatic mountains and high-altitude desert, visit Diskit Monastery and experience the magical beauty of Pangong Tso. This adventure-packed journey is perfect for travellers seeking Himalayan landscapes, thrilling mountain roads and unforgettable high-altitude experiences.',

        highlights: [
          'Khardung La Pass high-altitude mountain road experience',
          'Overnight luxury Swiss camp stay beside Pangong Tso',
          'Double-humped Bactrian camel ride at Hunder Sand Dunes',
          'Visit Diskit Monastery and the giant Maitreya Buddha Statue',
          'Explore Magnetic Hill, Hall of Fame & Sangam',
          'Scenic Himalayan drives through Leh, Nubra Valley & Pangong',
        ],

        inclusions: [
          '5 Nights accommodation in Leh, Nubra Valley & Pangong Tso',
          'Daily Breakfast & Dinner with warm soup',
          'Dedicated 4x4 / Scorpio / Innova with experienced Ladakhi driver',
          'Inner Line Permits & applicable wildlife/environment fees',
          'Oxygen cylinder backup in vehicle',
          'All applicable tolls, parking and driver allowances',
        ],

        exclusions: [
          'Airfare to and from Leh',
          'Bactrian camel rides and quad biking',
          'Monastery entry fees where applicable',
          'Personal expenses, tips and laundry',
          'Travel insurance and emergency evacuation costs',
        ],

        hotelType: '3-Star Deluxe Hotels & Luxury Swiss Camps',
        pickupDrop: 'Leh Kushok Bakula Rimpochee Airport (IXL)',
        itinerary: [
          {
            day: 1,
            title: 'Arrival in Leh | Acclimatization & Local Exploration',
            description:
              'Arrive at Leh Kushok Bakula Rimpochee Airport and experience the dramatic Himalayan landscapes of Ladakh. Meet your driver and transfer to the hotel. Since Leh is located at a high altitude, spend the day relaxing and allowing your body to acclimatize. In the evening, take a gentle walk around Leh Market and, if your health and weather conditions permit, visit Shanti Stupa for beautiful sunset views. Overnight stay in Leh.',
            activities: [
              'Leh Airport Meet & Greet',
              'Private Hotel Transfer',
              'Hotel Check-in',
              'Acclimatization Rest',
              'Leh Market Walk',
              'Shanti Stupa Sunset',
            ],
            meals: 'Dinner',
            stay: '3-Star Deluxe Hotel, Leh',
          },

          {
            day: 2,
            title: 'Leh Local Sightseeing | Monasteries & Heritage',
            description:
              'After breakfast, explore the cultural and historical highlights of Leh. Visit Shanti Stupa for panoramic views of Leh town and the surrounding mountains. Continue to Leh Palace, a historic royal residence overlooking the valley. Explore the bustling Leh Market and discover local handicrafts, Tibetan souvenirs and traditional products. Later, visit the Hall of Fame and enjoy views around the Indus River. Overnight stay in Leh.',
            activities: [
              'Shanti Stupa',
              'Leh Palace',
              'Leh Market',
              'Hall of Fame',
              'Indus River View',
              'Local Handicraft Shopping',
            ],
            meals: 'Breakfast & Dinner',
            stay: '3-Star Deluxe Hotel, Leh',
          },

          {
            day: 3,
            title: 'Leh to Nubra Valley via Khardung La Pass',
            description:
              'After breakfast, begin your exciting drive towards Nubra Valley via the legendary Khardung La Pass. Enjoy spectacular views of the rugged Himalayan terrain as you cross one of Ladakh’s most famous high-altitude mountain passes. Continue towards Hunder in Nubra Valley, known for its beautiful sand dunes surrounded by snow-covered mountains. In the evening, enjoy an optional Bactrian camel ride at the Hunder Sand Dunes. Overnight stay in Nubra Valley.',
            activities: [
              'Breakfast & Hotel Check-out',
              'Drive via Khardung La Pass',
              'Khardung La Summit Photo Stop',
              'Nubra Valley Arrival',
              'Hunder Sand Dunes',
              'Bactrian Camel Ride (Optional)',
              'Nubra Valley Sunset',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Deluxe Camp/Hotel, Nubra Valley',
          },

          {
            day: 4,
            title: 'Nubra Valley to Pangong Tso via Shyok Route',
            description:
              'After breakfast, leave Nubra Valley and drive towards the spectacular Pangong Tso Lake via the scenic Shyok River route. The journey takes you through dramatic mountain landscapes, remote villages and rugged Himalayan terrain. Upon reaching Pangong, admire the lake’s ever-changing shades of blue and enjoy the peaceful surroundings. Spend the evening beside the lake and, weather permitting, experience the incredible night sky. Overnight stay at Pangong Tso.',
            activities: [
              'Breakfast & Camp Check-out',
              'Shyok River Route',
              'Scenic Himalayan Drive',
              'Pangong Tso Arrival',
              'Lakeside Walk',
              'Pangong Sunset',
              'Stargazing (Weather Permitting)',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Luxury Swiss Camp, Pangong Tso',
          },

          {
            day: 5,
            title: 'Pangong Tso to Leh via Chang La Pass',
            description:
              'Wake up early to witness the spectacular sunrise over Pangong Tso. After breakfast, begin the return journey towards Leh via the mighty Chang La Pass. Enjoy breathtaking views of the surrounding mountains along the way. On the return route, visit Thiksey Monastery, one of Ladakh’s most impressive monasteries, before continuing to Leh. Check in to your hotel and relax after the journey. Overnight stay in Leh.',
            activities: [
              'Pangong Sunrise',
              'Breakfast & Camp Check-out',
              'Chang La Pass',
              'Scenic Himalayan Drive',
              'Thiksey Monastery',
              'Leh Hotel Check-in',
              'Evening Leisure',
            ],
            meals: 'Breakfast & Dinner',
            stay: '3-Star Deluxe Hotel, Leh',
          },

          {
            day: 6,
            title: 'Departure from Leh | Trip Ends',
            description:
              'After breakfast, check out from the hotel and transfer to Leh Kushok Bakula Rimpochee Airport for your onward journey. Depart with unforgettable memories of Ladakh’s dramatic mountains, high-altitude passes, Nubra Valley, and the magical Pangong Tso Lake.',
            activities: [
              'Breakfast',
              'Hotel Check-out',
              'Leh Local Transfer',
              'Airport Drop',
              'Departure',
            ],
            meals: 'Breakfast',
            stay: 'End of Tour',
          },
        ],
      },
      {
        id: 'ld-2',
        slug: 'leh-ladakh-pangong-lake-tour',
        title: 'Leh Ladakh with Pangong Lake Tour Package',
        subtitle:
          'Khardung La, Diskit Monastery, Bactrian Camel Safari & Pangong camping',
        location: 'Leh, Nubra Valley, Pangong Tso, Khardung La',
        duration: '7 Days / 6 Nights',
        price: '₹24,999',
        originalPrice: '₹31,999',
        rating: 4.9,
        reviewsCount: 380,
        category: 'Adventure',

        heroImage: '/assets/images/packageimages/lehimage.webp',

        gallery: [
          'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop',
        ],

        overview:
          'Experience the spectacular beauty of Ladakh on an unforgettable 7 Days / 6 Nights journey covering Leh, Nubra Valley, Pangong Tso and the famous high-altitude mountain passes. Explore Leh’s historic monasteries and landmarks, cross the legendary Khardung La, discover the sand dunes and monasteries of Nubra Valley, and spend a memorable night beside the crystal-clear waters of Pangong Tso. This carefully planned adventure combines scenic Himalayan drives, cultural experiences and breathtaking landscapes.',

        highlights: [
          'Khardung La Pass high-altitude mountain road experience',
          'Overnight luxury Swiss camp stay beside Pangong Tso',
          'Double-humped Bactrian camel ride at Hunder Sand Dunes',
          'Diskit Monastery and giant Maitreya Buddha Statue',
          'Magnetic Hill, Hall of Fame & Indus-Zanskar Sangam',
          'Thiksey Monastery and beautiful Himalayan landscapes',
          'Scenic drives through Leh, Nubra Valley and Pangong',
        ],

        inclusions: [
          '6 Nights accommodation in Leh, Nubra Valley & Pangong Tso',
          'Daily Breakfast & Dinner with warm soup',
          'Dedicated 4x4 / Scorpio / Innova with experienced Ladakhi driver',
          'Inner Line Permits & applicable wildlife/environment fees',
          'Oxygen cylinder backup in vehicle',
          'All applicable tolls, parking and driver allowances',
        ],

        exclusions: [
          'Airfare to and from Leh',
          'Bactrian camel rides and quad biking',
          'Monastery entry fees where applicable',
          'Personal expenses, tips and laundry',
          'Travel insurance and emergency evacuation costs',
        ],

        hotelType: '3-Star Deluxe Hotels & Luxury Swiss Camps',
        pickupDrop: 'Leh Kushok Bakula Rimpochee Airport (IXL)',
        itinerary: [
          {
            day: 1,
            title: 'Arrival in Leh | Acclimatization & Leh Local Sightseeing',
            description:
              'Arrive at Leh Kushok Bakula Rimpochee Airport and meet your representative for a smooth transfer to the hotel. Complete the check-in formalities and spend the day resting and acclimatizing to the high altitude of Ladakh. Later in the evening, if your health permits, visit the beautiful Shanti Stupa for panoramic views of Leh. Continue to the historic Leh Palace and explore the vibrant Leh Market, where you can shop for Tibetan handicrafts, souvenirs and local products. Return to the hotel for dinner and overnight stay in Leh.',
            activities: [
              'Leh Airport Meet & Greet',
              'Private Hotel Transfer',
              'Hotel Check-in',
              'Acclimatization Rest',
              'Shanti Stupa',
              'Leh Palace',
              'Leh Market',
              'Local Handicraft Shopping',
            ],
            meals: 'Dinner',
            stay: '3-Star Deluxe Hotel, Leh',
          },

          {
            day: 2,
            title: 'Leh to Sham Valley | Hall of Fame, Magnetic Hill & Sangam',
            description:
              'After breakfast, begin your sightseeing excursion towards Sham Valley along the scenic Srinagar-Leh highway. Visit the Hall of Fame, a museum dedicated to the brave soldiers of the Indian Army. Continue to Spituk Monastery and then visit Gurudwara Pathar Sahib, a peaceful spiritual site maintained by the Indian Army. Experience the fascinating Magnetic Hill and later stop at the Indus-Zanskar Sangam viewpoint to witness the dramatic confluence of the two rivers. If time permits, visit SECMOL, popularly associated with the movie 3 Idiots. Return to Leh in the evening for dinner and overnight stay.',
            activities: [
              'Breakfast',
              'Hall of Fame',
              'Spituk Monastery',
              'Gurudwara Pathar Sahib',
              'Magnetic Hill',
              'Indus-Zanskar Sangam',
              'SECMOL Visit (Time Permitting)',
              'Scenic Sham Valley Drive',
              'Return to Leh',
            ],
            meals: 'Breakfast & Dinner',
            stay: '3-Star Deluxe Hotel, Leh',
          },

          {
            day: 3,
            title: 'Leh to Nubra Valley via Khardung La Pass',
            description:
              'After breakfast, begin your exciting journey towards Nubra Valley via the legendary Khardung La Pass. Enjoy spectacular views of the rugged Himalayan landscape as you cross the high-altitude pass. Continue towards Nubra Valley and reach Hunder, famous for its beautiful white sand dunes surrounded by snow-covered mountains. Visit Diskit Monastery and admire the giant Maitreya Buddha statue overlooking the valley. Later, enjoy an optional Bactrian camel ride at the Hunder Sand Dunes. Check in to your camp or hotel and enjoy the peaceful surroundings of Nubra Valley.',
            activities: [
              'Breakfast & Hotel Check-out',
              'Drive via Khardung La Pass',
              'Khardung La Summit Photo Stop',
              'Diskit Monastery',
              'Maitreya Buddha Statue',
              'Hunder Sand Dunes',
              'Bactrian Camel Ride (Optional)',
              'Nubra Valley Sunset',
              'Camp/Hotel Check-in',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Deluxe Camp/Hotel, Nubra Valley',
          },

          {
            day: 4,
            title: 'Nubra Valley | Turtuk Village Excursion',
            description:
              'After breakfast, proceed towards Turtuk, one of the northernmost villages accessible to tourists in India and a beautiful Balti settlement near the Line of Control. Enjoy the scenic drive through the Nubra Valley and explore the traditional village, local culture and surrounding mountain landscapes. Visit the village lanes, traditional homes and local viewpoints before returning towards Hunder in the evening. Spend a relaxed evening at your camp or hotel surrounded by the dramatic Himalayan scenery.',
            activities: [
              'Breakfast',
              'Turtuk Village Excursion',
              'Scenic Mountain Drive',
              'Balti Village Exploration',
              'Local Culture & Village Walk',
              'Himalayan Photography',
              'Return to Nubra',
              'Leisure Evening',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Deluxe Camp/Hotel, Nubra Valley',
          },

          {
            day: 5,
            title: 'Nubra Valley to Pangong Tso via Shyok Route',
            description:
              'After breakfast, check out and begin your scenic drive towards the magnificent Pangong Tso Lake through the Shyok River route. The journey takes you through dramatic mountains, remote landscapes and beautiful river valleys. Upon reaching Pangong, admire the lake’s famous changing shades of blue and enjoy a peaceful walk along the lakeshore. Spend the evening enjoying the spectacular sunset and, weather permitting, the clear Himalayan night sky. Overnight stay beside Pangong Tso.',
            activities: [
              'Breakfast & Camp Check-out',
              'Shyok River Route',
              'Scenic Himalayan Drive',
              'Pangong Tso Arrival',
              'Lakeside Walk',
              '3 Idiots Movie Point',
              'Pangong Sunset',
              'Stargazing (Weather Permitting)',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Luxury Swiss Camp, Pangong Tso',
          },

          {
            day: 6,
            title: 'Pangong Tso to Leh via Chang La Pass',
            description:
              'Wake up early to witness the spectacular sunrise over Pangong Lake. After breakfast, check out from the camp and begin your return journey towards Leh via the mighty Chang La Pass. Stop at Chang La for photographs and enjoy the surrounding mountain scenery. Continue towards Leh and, if time permits, visit Thiksey Monastery, one of the most impressive Buddhist monasteries in Ladakh. Proceed to Leh and check in to your hotel. Spend the evening at leisure or explore Leh Market for last-minute shopping.',
            activities: [
              'Pangong Sunrise',
              'Breakfast & Camp Check-out',
              'Chang La Pass',
              'Chang La Baba Temple',
              'Scenic Himalayan Drive',
              'Thiksey Monastery',
              'Leh Hotel Check-in',
              'Leh Market',
              'Evening Leisure',
            ],
            meals: 'Breakfast & Dinner',
            stay: '3-Star Deluxe Hotel, Leh',
          },

          {
            day: 7,
            title: 'Departure from Leh | Trip Ends',
            description:
              'After breakfast, complete the check-out formalities at the hotel. Depending on your flight schedule, enjoy some free time in Leh before being transferred to Leh Kushok Bakula Rimpochee Airport. Depart with unforgettable memories of the majestic Himalayan landscapes, Nubra Valley, Khardung La, Pangong Tso and the rich culture of Ladakh.',
            activities: [
              'Breakfast',
              'Hotel Check-out',
              'Leh Local Transfer',
              'Airport Drop',
              'Departure',
            ],
            meals: 'Breakfast',
            stay: 'End of Tour',
          },
        ],
      },
      {
        id: 'ld-3',
        slug: 'manali-leh-srinagar-bike-adventure',
        title: 'Manali Leh Srinagar Bike Adventure',
        subtitle:
          'Epic Himalayan motorcycle journey through Manali, Leh, Nubra, Pangong, Kargil & Srinagar',
        location: 'Manali, Jispa, Leh, Nubra Valley, Pangong Tso, Kargil, Srinagar',
        duration: '10 Days / 9 Nights',
        price: '₹34,999',
        originalPrice: '₹42,999',
        rating: 4.9,
        reviewsCount: 380,
        category: 'Adventure',

        heroImage: '/assets/images/packageimages/lehbike.webp',

        gallery: [
          'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop',
        ],

        overview:
          'Experience the ultimate Himalayan motorcycle adventure on an unforgettable 10 Days / 9 Nights journey from Manali to Leh and onward to Srinagar. Ride through some of the most spectacular mountain roads in India, crossing high-altitude passes including Rohtang, Baralacha La, Lachung La, Tanglang La, Khardung La and Chang La. Explore the dramatic landscapes of Leh, Nubra Valley and Pangong Tso before riding through the remote Suru and Drass valleys towards Kargil and Srinagar. This adventure-packed motorcycle expedition is perfect for riders looking for challenging terrain, breathtaking landscapes and an unforgettable Himalayan experience.',

        highlights: [
          'Epic Manali to Leh motorcycle ride through high-altitude Himalayan passes',
          'Ride across Baralacha La, Lachung La & Tanglang La',
          'Khardung La Pass motorcycle experience',
          'Explore Nubra Valley and Hunder Sand Dunes',
          'Bactrian Camel Ride at Hunder (Optional)',
          'Ride to the spectacular Pangong Tso Lake via Chang La',
          'Scenic ride through Kargil, Drass & Zoji La',
          'Explore Leh, Magnetic Hill, Hall of Fame & Indus-Zanskar Sangam',
        ],

        inclusions: [
          '9 Nights accommodation in hotels, camps and guesthouses',
          'Daily Breakfast & Dinner with warm soup',
          'Royal Enfield / Himalayan motorcycle for the entire tour',
          'Fuel for the planned itinerary',
          'Experienced road captain / motorcycle tour leader',
          'Backup support vehicle for luggage and emergencies',
          'Inner Line Permits & applicable environmental fees',
          'Oxygen cylinder and basic first-aid kit in support vehicle',
          'All applicable tolls, parking and driver allowances',
        ],

        exclusions: [
          'Flights or transportation to Manali and from Srinagar',
          'Security deposit for motorcycle, if applicable',
          'Motorcycle damage or repair costs caused by negligence',
          'Bactrian camel rides and other optional activities',
          'Personal expenses, tips and laundry',
          'Travel insurance and emergency evacuation costs',
          'Any meals or services not specifically mentioned in inclusions',
        ],

        hotelType: '3-Star Hotels, Mountain Camps & Comfortable Guesthouses',
        pickupDrop: 'Manali Bus Stand / Hotel Pickup – Srinagar Airport',
        itinerary: [
          {
            day: 1,
            title: 'Arrival in Delhi | Transfer to Manali',
            description:
              'Welcome to Delhi, the starting point of your epic Himalayan motorcycle adventure. Arrive in Delhi and proceed to Majnu Ka Tila for your overnight Volvo bus journey towards Manali. Enjoy the changing landscapes as the journey takes you from the plains towards the lush green valleys and majestic Himalayan mountains.',
            activities: [
              'Delhi Arrival',
              'Trip Briefing',
              'Meet Tour Coordinator',
              'Transfer to Majnu Ka Tila',
              'Overnight Volvo Journey to Manali',
            ],
            meals: 'Dinner',
            stay: 'Overnight Volvo Bus',
          },

          {
            day: 2,
            title: 'Arrival in Manali | Bike Handover & Local Exploration',
            description:
              'Arrive in Manali in the morning and transfer to your hotel. Complete the check-in formalities and relax after the overnight journey. Later, meet the tour coordinator, complete the bike documentation and receive your motorcycle. Attend a detailed safety and route briefing before exploring Manali at leisure. Visit Mall Road, Hadimba Temple or Manu Temple depending on available time. Overnight stay in Manali.',
            activities: [
              'Manali Arrival',
              'Hotel Check-in',
              'Bike Handover',
              'Bike Documentation',
              'Safety & Route Briefing',
              'Mall Road Visit',
              'Hadimba Temple / Manu Temple',
              'Bike Familiarization Ride',
            ],
            meals: 'Breakfast & Dinner',
            stay: '3-Star Hotel, Manali',
          },

          {
            day: 3,
            title: 'Ride from Manali to Jispa via Atal Tunnel',
            description:
              'After breakfast, begin your exciting motorcycle journey towards Jispa. Ride through the famous Atal Tunnel and continue towards Sissu, where you can enjoy views of the Sissu Waterfall and surrounding Himalayan peaks. Proceed through the scenic Lahaul Valley, crossing beautiful mountain roads and remote landscapes before reaching Jispa. Check in to your camp and relax after the day’s ride.',
            activities: [
              'Breakfast & Hotel Check-out',
              'Motorcycle Ride to Jispa',
              'Atal Tunnel Crossing',
              'Sissu Waterfall',
              'Sissu Valley',
              'Lahaul Valley Drive',
              'Mountain Photography',
              'Jispa Camp Check-in',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Deluxe Camp, Jispa',
          },

          {
            day: 4,
            title: 'Ride from Jispa to Sarchu via Baralacha La Pass',
            description:
              'After breakfast, continue your thrilling Himalayan motorcycle adventure towards Sarchu. Ride through the spectacular landscapes of Lahaul and cross the high-altitude Baralacha La Pass. Along the way, stop at Deepak Tal and Suraj Tal, two beautiful high-altitude lakes surrounded by dramatic mountains. Continue through ZingZing Bar and the rugged terrain before reaching Sarchu. Check in to your campsite and enjoy the peaceful surroundings.',
            activities: [
              'Breakfast & Camp Check-out',
              'Motorcycle Ride to Sarchu',
              'Deepak Tal',
              'Suraj Tal',
              'ZingZing Bar',
              'Baralacha La Pass',
              'High-Altitude Mountain Roads',
              'Sarchu Camp Check-in',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Deluxe Camp, Sarchu',
          },

          {
            day: 5,
            title: 'Ride from Sarchu to Leh via Gata Loops, Nakee La & Lachung La',
            description:
              'Begin your ride towards Leh after breakfast. Experience the thrilling Gata Loops and continue across the high-altitude passes of Nakee La and Lachung La. Ride through the More Plains and cross the mighty Tanglang La Pass before descending towards the Indus Valley. Continue to Leh and check in to your hotel. Spend the evening resting after the long and adventurous ride.',
            activities: [
              'Breakfast & Camp Check-out',
              'Gata Loops',
              'Nakee La Pass',
              'Lachung La Pass',
              'More Plains',
              'Tanglang La Pass',
              'Scenic Himalayan Ride',
              'Leh Hotel Check-in',
              'Evening Leisure',
            ],
            meals: 'Breakfast & Dinner',
            stay: '3-Star Deluxe Hotel, Leh',
          },

          {
            day: 6,
            title: 'Leh Local Sightseeing | Sham Valley & Indus-Zanskar Sangam',
            description:
              'After breakfast, explore the cultural and historical attractions around Leh on your motorcycle. Visit the Hall of Fame, Spituk Monastery, Gurudwara Pathar Sahib and the fascinating Magnetic Hill. Continue to the Indus-Zanskar Sangam viewpoint to witness the confluence of the two rivers. If time permits, visit SECMOL before returning to Leh. Spend the evening exploring Leh Market and relaxing at the hotel.',
            activities: [
              'Breakfast',
              'Hall of Fame',
              'Spituk Monastery',
              'Gurudwara Pathar Sahib',
              'Magnetic Hill',
              'Indus-Zanskar Sangam',
              'SECMOL (Time Permitting)',
              'Leh Market',
              'Local Shopping',
            ],
            meals: 'Breakfast & Dinner',
            stay: '3-Star Deluxe Hotel, Leh',
          },

          {
            day: 7,
            title: 'Ride from Leh to Nubra Valley via Khardung La Pass',
            description:
              'After breakfast, begin one of the most exciting rides of the expedition towards Nubra Valley. Cross the legendary Khardung La Pass and enjoy spectacular views of the surrounding Himalayan ranges. Descend into Nubra Valley and continue towards Hunder. Visit Diskit Monastery and the giant Maitreya Buddha statue overlooking the valley. Later, explore the famous Hunder Sand Dunes and enjoy an optional Bactrian camel ride. Overnight stay in Nubra Valley.',
            activities: [
              'Breakfast & Hotel Check-out',
              'Ride via Khardung La Pass',
              'Khardung La Summit',
              'Diskit Monastery',
              'Maitreya Buddha Statue',
              'Hunder Sand Dunes',
              'Bactrian Camel Ride (Optional)',
              'Nubra Valley Sunset',
              'Camp Check-in',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Deluxe Camp/Hotel, Nubra Valley',
          },

          {
            day: 8,
            title: 'Ride from Nubra Valley to Pangong Tso via Shyok',
            description:
              'After breakfast, continue your motorcycle adventure from Nubra Valley towards the spectacular Pangong Tso Lake via the scenic Shyok River route. Ride through remote mountain landscapes and dramatic valleys before reaching the famous lake. Spend time exploring the lakeshore and enjoy the breathtaking changing shades of blue across Pangong Tso. Visit the famous 3 Idiots movie point and enjoy a spectacular Himalayan sunset before settling into your lakeside camp.',
            activities: [
              'Breakfast & Camp Check-out',
              'Shyok River Route',
              'Remote Himalayan Villages',
              'Pangong Tso Arrival',
              'Lakeside Exploration',
              '3 Idiots Movie Point',
              'Pangong Sunset',
              'Photography',
              'Stargazing (Weather Permitting)',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Luxury Swiss Camp, Pangong Tso',
          },

          {
            day: 9,
            title: 'Ride from Pangong Tso to Leh via Chang La | Transfer towards Kargil',
            description:
              'Wake up early to witness the beautiful sunrise over Pangong Lake. After breakfast, begin your return ride towards Leh via the mighty Chang La Pass. Stop at Chang La for photographs before continuing towards Leh. Depending on the group schedule and road conditions, continue towards the Kargil route. Enjoy the changing landscapes as you leave the Ladakh plateau and enter the western Himalayan region. Overnight stay in Kargil.',
            activities: [
              'Pangong Sunrise',
              'Breakfast & Camp Check-out',
              'Chang La Pass',
              'Chang La Baba Temple',
              'Scenic Himalayan Ride',
              'Leh Region Crossing',
              'Kargil Transfer',
              'Kargil Hotel Check-in',
            ],
            meals: 'Breakfast & Dinner',
            stay: '3-Star Hotel, Kargil',
          },

          {
            day: 10,
            title: 'Ride from Kargil to Srinagar | Drass & Sonamarg',
            description:
              'After breakfast, begin your final motorcycle ride towards Srinagar. Ride through Drass, known for its dramatic mountain landscapes, and continue towards Zoji La Pass before descending into the greener Kashmir Valley. Continue through Sonamarg, the Meadow of Gold, and finally reach Srinagar. Complete the bike handover formalities and conclude your epic Manali-Leh-Srinagar motorcycle adventure with unforgettable memories of the Himalayas.',
            activities: [
              'Breakfast & Hotel Check-out',
              'Motorcycle Ride to Srinagar',
              'Drass Valley',
              'Zoji La Pass',
              'Sonamarg',
              'Kashmir Valley Ride',
              'Bike Handover',
              'Trip Completion',
              'Srinagar Arrival',
            ],
            meals: 'Breakfast',
            stay: 'End of Tour',
          },
        ],
      },
      {
        id: 'ld-4',
        slug: 'ladakh-family-couple-escape',
        title: 'Ladakh Family & Couple Escape',
        subtitle:
          'Leh sightseeing, Nubra Valley, Khardung La & peaceful Pangong Lake experience',
        location: 'Leh, Nubra Valley, Khardung La, Pangong Tso',
        duration: '6 Days / 5 Nights',
        price: '₹26,999',
        originalPrice: '₹34,999',
        rating: 4.9,
        reviewsCount: 325,
        category: 'Family',

        heroImage: '/assets/images/packageimages/Ladakh-honeymoon.webp',

        gallery: [
          'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=800&auto=format&fit=crop',
        ],

        overview:
          'Enjoy a comfortable and memorable Ladakh holiday covering Leh, Nubra Valley and Pangong Tso. Explore ancient monasteries, cross the legendary Khardung La, experience the unique desert landscape of Nubra Valley and spend a peaceful evening beside the stunning Pangong Lake. This package is specially designed for families and couples looking for a relaxed Himalayan escape.',

        highlights: [
          'Scenic Leh local sightseeing and acclimatization experience',
          'Khardung La Pass high-altitude mountain drive',
          'Visit Diskit Monastery and Maitreya Buddha Statue',
          'Bactrian camel experience at Hunder Sand Dunes',
          'Magical sunset and lakeside experience at Pangong Tso',
          'Visit Thiksey Monastery and Chang La Pass',
        ],

        inclusions: [
          '5 Nights accommodation in 3-Star Deluxe Hotels & Camps',
          'Daily Breakfast & Dinner',
          'Private Scorpio / Innova with experienced Ladakhi driver',
          'Inner Line Permits and applicable environmental fees',
          'Oxygen cylinder backup in vehicle',
          'All toll, parking and driver allowances',
        ],

        exclusions: [
          'Airfare to and from Leh',
          'Camel rides and adventure activities',
          'Monastery entry fees where applicable',
          'Personal expenses, tips and laundry',
          'Travel insurance and emergency evacuation',
        ],

        hotelType: '3-Star Deluxe Hotels & Comfortable Camps',
        pickupDrop: 'Leh Kushok Bakula Rimpochee Airport (IXL)',

        itinerary: [
          {
            day: 1,
            title: 'Arrival in Leh | Acclimatization & Local Market',
            description:
              'Arrive at Leh Airport and meet our representative for your private transfer to the hotel. Complete the check-in formalities and spend the day relaxing and acclimatizing to the high altitude. In the evening, take a gentle walk around Leh Market and enjoy the local atmosphere.',
            activities: [
              'Leh Airport Meet & Greet',
              'Hotel Transfer',
              'Hotel Check-in',
              'Acclimatization Rest',
              'Leh Market Walk',
              'Local Café Visit',
            ],
            meals: 'Dinner',
            stay: '3-Star Deluxe Hotel, Leh',
          },

          {
            day: 2,
            title: 'Leh Local Sightseeing | Monasteries & Heritage',
            description:
              'After breakfast, explore the cultural highlights of Leh. Visit Shanti Stupa, Leh Palace, Hall of Fame and the beautiful Thiksey Monastery. Continue towards the Indus River viewpoint before returning to Leh for an overnight stay.',
            activities: [
              'Shanti Stupa',
              'Leh Palace',
              'Hall of Fame',
              'Thiksey Monastery',
              'Indus River Viewpoint',
              'Leh Market',
            ],
            meals: 'Breakfast & Dinner',
            stay: '3-Star Deluxe Hotel, Leh',
          },

          {
            day: 3,
            title: 'Leh to Nubra Valley via Khardung La',
            description:
              'Begin your journey towards Nubra Valley through the famous Khardung La Pass. Stop at the pass for photographs before descending into the beautiful Nubra Valley. Visit Diskit Monastery and the giant Maitreya Buddha Statue before reaching Hunder.',
            activities: [
              'Breakfast & Hotel Check-out',
              'Khardung La Pass',
              'Scenic Mountain Drive',
              'Diskit Monastery',
              'Maitreya Buddha Statue',
              'Hunder Sand Dunes',
              'Bactrian Camel Ride Optional',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Deluxe Camp/Hotel, Nubra Valley',
          },

          {
            day: 4,
            title: 'Nubra Valley to Pangong Tso via Shyok',
            description:
              'After breakfast, drive towards the spectacular Pangong Tso through the scenic Shyok route. Enjoy dramatic Himalayan landscapes throughout the journey. Reach Pangong Lake by afternoon and spend the evening beside its crystal-clear waters.',
            activities: [
              'Breakfast & Camp Check-out',
              'Shyok River Route',
              'Himalayan Mountain Drive',
              'Pangong Tso Arrival',
              'Lakeside Walk',
              'Pangong Sunset',
              'Stargazing Weather Permitting',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Luxury Swiss Camp, Pangong Tso',
          },

          {
            day: 5,
            title: 'Pangong Tso to Leh via Chang La',
            description:
              'Wake up early to enjoy the beautiful sunrise over Pangong Lake. After breakfast, drive back towards Leh via the spectacular Chang La Pass. Visit Chang La Baba Temple and Thiksey Monastery before reaching Leh.',
            activities: [
              'Pangong Sunrise',
              'Breakfast & Camp Check-out',
              'Chang La Pass',
              'Chang La Baba Temple',
              'Thiksey Monastery',
              'Scenic Mountain Drive',
              'Leh Market',
            ],
            meals: 'Breakfast & Dinner',
            stay: '3-Star Deluxe Hotel, Leh',
          },

          {
            day: 6,
            title: 'Departure from Leh',
            description:
              'After breakfast, check out from your hotel and transfer to Leh Airport for your onward journey with unforgettable memories of Ladakh.',
            activities: [
              'Breakfast',
              'Hotel Check-out',
              'Airport Transfer',
              'Departure',
            ],
            meals: 'Breakfast',
            stay: 'End of Tour',
          },
        ],
      },
      {
        id: 'ld-5',
        slug: 'ladakh-monastery-culture-tour',
        title: 'Ladakh Monastery & Culture Tour',
        subtitle:
          'Ancient monasteries, Leh Palace, Sham Valley & authentic Ladakhi culture',
        location: 'Leh, Sham Valley, Alchi, Thiksey, Hemis',
        duration: '5 Days / 4 Nights',
        price: '₹18,999',
        originalPrice: '₹24,999',
        rating: 4.8,
        reviewsCount: 290,
        category: 'Cultural',

        heroImage: '/assets/images/packageimages/ladakh-tours-packages.webp',

        gallery: [
          'https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?q=80&w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800&auto=format&fit=crop',
        ],

        overview:
          'Discover the spiritual and cultural side of Ladakh with this carefully designed monastery tour. Explore Leh Palace, Shanti Stupa, Hall of Fame, Magnetic Hill, Gurudwara Pathar Sahib, Alchi Monastery, Thiksey Monastery and Hemis Monastery while experiencing the unique Buddhist heritage and landscapes of Ladakh.',

        highlights: [
          'Explore historic Leh Palace and Shanti Stupa',
          'Visit Thiksey and Hemis Monasteries',
          'Discover the ancient Alchi Monastery complex',
          'Magnetic Hill and Indus-Zanskar Sangam viewpoint',
          'Visit Gurudwara Pathar Sahib',
          'Experience authentic Ladakhi culture and local markets',
        ],

        inclusions: [
          '4 Nights accommodation in 3-Star Deluxe Hotels',
          'Daily Breakfast & Dinner',
          'Private Scorpio / Innova with Ladakhi driver',
          'Inner Line Permits and applicable environmental fees',
          'Oxygen cylinder backup in vehicle',
          'All toll, parking and driver allowances',
        ],

        exclusions: [
          'Airfare to and from Leh',
          'Monastery entry charges where applicable',
          'Personal expenses and shopping',
          'Tips and laundry',
          'Travel insurance',
        ],

        hotelType: '3-Star Deluxe Hotels',
        pickupDrop: 'Leh Kushok Bakula Rimpochee Airport (IXL)',

        itinerary: [
          {
            day: 1,
            title: 'Arrival in Leh | Acclimatization Day',
            description:
              'Arrive at Leh Airport and transfer to your hotel. Spend the day resting and acclimatizing to the high altitude. In the evening, enjoy a gentle visit to Leh Market and explore the local atmosphere.',
            activities: [
              'Leh Airport Meet & Greet',
              'Hotel Transfer',
              'Hotel Check-in',
              'Acclimatization Rest',
              'Leh Market',
              'Local Café Experience',
            ],
            meals: 'Dinner',
            stay: '3-Star Deluxe Hotel, Leh',
          },

          {
            day: 2,
            title: 'Leh Sightseeing | Palace, Stupa & Local Heritage',
            description:
              'After breakfast, explore the major attractions of Leh. Visit Shanti Stupa, Leh Palace and Hall of Fame. Spend some time exploring the local market before returning to your hotel.',
            activities: [
              'Shanti Stupa',
              'Leh Palace',
              'Hall of Fame',
              'Leh Market',
              'Local Handicraft Shopping',
              'Traditional Ladakhi Cuisine',
            ],
            meals: 'Breakfast & Dinner',
            stay: '3-Star Deluxe Hotel, Leh',
          },

          {
            day: 3,
            title: 'Sham Valley | Magnetic Hill & Alchi Monastery',
            description:
              'Drive through the scenic Sham Valley and visit Hall of Fame, Gurudwara Pathar Sahib, Magnetic Hill and the famous Indus-Zanskar Sangam. Continue towards Alchi to explore its ancient monastery before returning to Leh.',
            activities: [
              'Hall of Fame',
              'Gurudwara Pathar Sahib',
              'Magnetic Hill',
              'Indus-Zanskar Sangam',
              'Alchi Monastery',
              'Scenic Sham Valley Drive',
            ],
            meals: 'Breakfast & Dinner',
            stay: '3-Star Deluxe Hotel, Leh',
          },

          {
            day: 4,
            title: 'Thiksey & Hemis Monastery Tour',
            description:
              'After breakfast, drive towards the famous monasteries of the Indus Valley. Visit Thiksey Monastery, one of Ladakh’s most impressive monasteries, followed by Hemis Monastery. Return to Leh in the evening.',
            activities: [
              'Thiksey Monastery',
              'Hemis Monastery',
              'Shey Palace',
              'Indus Valley Views',
              'Photography',
              'Leh Market',
            ],
            meals: 'Breakfast & Dinner',
            stay: '3-Star Deluxe Hotel, Leh',
          },

          {
            day: 5,
            title: 'Departure from Leh',
            description:
              'After breakfast, check out from the hotel and transfer to Leh Airport for your onward journey.',
            activities: [
              'Breakfast',
              'Hotel Check-out',
              'Airport Transfer',
              'Departure',
            ],
            meals: 'Breakfast',
            stay: 'End of Tour',
          },
        ],
      },
      {
        id: 'ld-6',
        slug: 'nubra-pangong-ladakh-adventure',
        title: 'Nubra Valley & Pangong Adventure',
        subtitle:
          'Khardung La, Hunder Sand Dunes, Diskit Monastery & Pangong Lake camping',
        location: 'Leh, Khardung La, Nubra Valley, Pangong Tso',
        duration: '5 Days / 4 Nights',
        price: '₹21,999',
        originalPrice: '₹28,999',
        rating: 4.9,
        reviewsCount: 345,
        category: 'Adventure',

        heroImage: '/assets/images/packageimages/Ladakh-Nubra-Valley.webp',

        gallery: [
          'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=800&auto=format&fit=crop',
        ],

        overview:
          'Experience the most iconic landscapes of Ladakh on this action-packed journey to Nubra Valley and Pangong Tso. Cross the spectacular Khardung La Pass, explore the high-altitude desert of Hunder, visit Diskit Monastery and travel through the Shyok Valley to the breathtaking Pangong Lake.',

        highlights: [
          'Khardung La Pass high-altitude mountain experience',
          'Explore Hunder Sand Dunes in Nubra Valley',
          'Bactrian camel ride experience',
          'Diskit Monastery and giant Buddha Statue',
          'Scenic Shyok River route to Pangong',
          'Luxury lakeside camp at Pangong Tso',
        ],

        inclusions: [
          '4 Nights accommodation in Leh, Nubra & Pangong',
          'Daily Breakfast & Dinner',
          'Private 4x4 Scorpio / Innova with experienced driver',
          'Inner Line Permits and environmental fees',
          'Oxygen cylinder backup in vehicle',
          'All toll, parking and driver allowances',
        ],

        exclusions: [
          'Airfare to and from Leh',
          'Bactrian camel rides',
          'Quad biking and adventure activities',
          'Personal expenses and shopping',
          'Tips, laundry and travel insurance',
        ],

        hotelType: '3-Star Deluxe Hotels & Luxury Swiss Camps',
        pickupDrop: 'Leh Kushok Bakula Rimpochee Airport (IXL)',

        itinerary: [
          {
            day: 1,
            title: 'Arrival in Leh | Acclimatization & Leh Market',
            description:
              'Arrive at Leh Airport and transfer to your hotel. Spend the day resting and acclimatizing to the high altitude. In the evening, explore Leh Market and enjoy the unique atmosphere of Ladakh.',
            activities: [
              'Leh Airport Transfer',
              'Hotel Check-in',
              'Acclimatization Rest',
              'Leh Market Walk',
              'Local Café Visit',
              'Evening Leisure',
            ],
            meals: 'Dinner',
            stay: '3-Star Deluxe Hotel, Leh',
          },

          {
            day: 2,
            title: 'Leh to Nubra Valley via Khardung La',
            description:
              'Start your adventure with a drive across the legendary Khardung La Pass. Continue towards Nubra Valley and visit Diskit Monastery and the giant Maitreya Buddha Statue. Later explore the Hunder Sand Dunes.',
            activities: [
              'Breakfast & Hotel Check-out',
              'Khardung La Pass',
              'Mountain Photography',
              'Diskit Monastery',
              'Maitreya Buddha Statue',
              'Hunder Sand Dunes',
              'Bactrian Camel Ride Optional',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Deluxe Camp/Hotel, Nubra Valley',
          },

          {
            day: 3,
            title: 'Nubra Valley to Pangong Tso via Shyok',
            description:
              'After breakfast, begin a spectacular drive through the Shyok River route towards Pangong Tso. Enjoy the changing mountain landscapes before reaching the famous blue lake. Spend the evening at your lakeside camp.',
            activities: [
              'Breakfast & Camp Check-out',
              'Shyok River Route',
              'Scenic Himalayan Drive',
              'Pangong Tso Arrival',
              'Lakeside Walk',
              'Pangong Sunset',
              'Stargazing',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Luxury Swiss Camp, Pangong Tso',
          },

          {
            day: 4,
            title: 'Pangong Tso to Leh via Chang La',
            description:
              'Wake up to a beautiful sunrise over Pangong Lake. After breakfast, drive towards Leh via Chang La Pass. Stop at Chang La Baba Temple and visit Thiksey Monastery before reaching Leh.',
            activities: [
              'Pangong Sunrise',
              'Breakfast & Camp Check-out',
              'Chang La Pass',
              'Chang La Baba Temple',
              'Thiksey Monastery',
              'Scenic Mountain Drive',
              'Leh Market',
            ],
            meals: 'Breakfast & Dinner',
            stay: '3-Star Deluxe Hotel, Leh',
          },

          {
            day: 5,
            title: 'Departure from Leh',
            description:
              'After breakfast, check out from your hotel and transfer to Leh Airport for your onward journey with unforgettable memories of the Ladakh Himalayas.',
            activities: [
              'Breakfast',
              'Hotel Check-out',
              'Airport Transfer',
              'Departure',
            ],
            meals: 'Breakfast',
            stay: 'End of Tour',
          },
        ],
      },
      {
        id: 'ld-7',
        slug: 'ladakh-tso-moriri-hanle-expedition',
        title: 'Ladakh Tso Moriri & Hanle Expedition',
        subtitle:
          'Tso Moriri Lake, Hanle village, Changthang Valley & remote Himalayan landscapes',
        location: 'Leh, Tso Moriri, Hanle, Changthang, Tso Kar',
        duration: '7 Days / 6 Nights',
        price: '₹29,999',
        originalPrice: '₹38,999',
        rating: 4.9,
        reviewsCount: 245,
        category: 'Adventure',

        heroImage: '/assets/images/packageimages/tso.webp',

        gallery: [
          'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop',
        ],

        overview:
          'Go beyond the popular Ladakh routes and explore the remote Changthang region. Discover the breathtaking beauty of Tso Moriri, experience the peaceful landscapes of Hanle, cross dramatic high-altitude passes and visit Tso Kar. This expedition is ideal for adventure travellers who want to experience the untouched side of Ladakh.',

        highlights: [
          'Beautiful Tso Moriri high-altitude lake experience',
          'Explore the remote village of Hanle',
          'Scenic Changthang Valley landscapes',
          'Visit Tso Kar and its surrounding wetlands',
          'High-altitude mountain passes and remote roads',
          'Spectacular Himalayan sunrise and sunset views',
          'Night sky and stargazing experience at Hanle',
        ],

        inclusions: [
          '6 Nights accommodation in Leh, camps and guesthouses',
          'Daily Breakfast & Dinner',
          'Dedicated 4x4 Scorpio / Innova with experienced driver',
          'Inner Line Permits and applicable environmental fees',
          'Oxygen cylinder backup in vehicle',
          'All toll, parking and driver allowances',
        ],

        exclusions: [
          'Airfare to and from Leh',
          'Adventure activities',
          'Monastery and attraction entry fees',
          'Personal expenses, tips and laundry',
          'Travel insurance and emergency evacuation costs',
        ],

        hotelType: '3-Star Deluxe Hotels, Camps & Comfortable Guesthouses',
        pickupDrop: 'Leh Kushok Bakula Rimpochee Airport (IXL)',

        itinerary: [
          {
            day: 1,
            title: 'Arrival in Leh | Acclimatization Day',
            description:
              'Arrive at Leh Airport and transfer to your hotel. Spend the day resting and acclimatizing to the high altitude. In the evening, enjoy a short walk around Leh Market.',
            activities: [
              'Leh Airport Meet & Greet',
              'Hotel Transfer',
              'Hotel Check-in',
              'Acclimatization Rest',
              'Leh Market Walk',
            ],
            meals: 'Dinner',
            stay: '3-Star Deluxe Hotel, Leh',
          },

          {
            day: 2,
            title: 'Leh Local Sightseeing',
            description:
              'Explore Leh and its surrounding attractions. Visit Shanti Stupa, Leh Palace, Hall of Fame and Thiksey Monastery. Enjoy panoramic views of the Indus Valley before returning to the hotel.',
            activities: [
              'Shanti Stupa',
              'Leh Palace',
              'Hall of Fame',
              'Thiksey Monastery',
              'Indus Valley View',
              'Leh Market',
            ],
            meals: 'Breakfast & Dinner',
            stay: '3-Star Deluxe Hotel, Leh',
          },

          {
            day: 3,
            title: 'Leh to Tso Moriri via Changthang Valley',
            description:
              'Begin your journey into the remote Changthang region. Drive through spectacular barren mountains, high-altitude plains and traditional nomadic settlements before reaching the beautiful Tso Moriri Lake.',
            activities: [
              'Breakfast & Hotel Check-out',
              'Scenic Changthang Drive',
              'High-Altitude Mountain Pass',
              'Nomadic Village Views',
              'Tso Moriri Arrival',
              'Lakeside Walk',
              'Sunset Photography',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Comfortable Camp, Tso Moriri',
          },

          {
            day: 4,
            title: 'Tso Moriri to Hanle | Remote Ladakh',
            description:
              'After breakfast, continue towards the remote village of Hanle. Enjoy spectacular landscapes and experience the peaceful atmosphere of one of Ladakh’s most remote regions.',
            activities: [
              'Tso Moriri Sunrise',
              'Breakfast & Camp Check-out',
              'Changthang Valley Drive',
              'Remote Mountain Landscapes',
              'Hanle Village',
              'Local Culture Experience',
              'Stargazing Weather Permitting',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Comfortable Guesthouse, Hanle',
          },

          {
            day: 5,
            title: 'Hanle to Tso Kar | Himalayan Lakes Circuit',
            description:
              'Leave Hanle after breakfast and travel through the dramatic Changthang landscape towards Tso Kar. Explore the beautiful lake surroundings and enjoy the peaceful wilderness of the region.',
            activities: [
              'Breakfast & Guesthouse Check-out',
              'Scenic Mountain Drive',
              'Changthang Landscapes',
              'Tso Kar Lake',
              'Wildlife & Bird Photography',
              'Sunset Views',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Deluxe Camp, Tso Kar',
          },

          {
            day: 6,
            title: 'Tso Kar to Leh | Himalayan Return Journey',
            description:
              'After breakfast, begin your return journey towards Leh. Enjoy the spectacular mountain scenery and make photo stops along the way. Reach Leh by evening and relax at your hotel.',
            activities: [
              'Breakfast & Camp Check-out',
              'Scenic Himalayan Drive',
              'Mountain Pass Crossing',
              'Photography Stops',
              'Leh Arrival',
              'Evening Leisure',
              'Leh Market',
            ],
            meals: 'Breakfast & Dinner',
            stay: '3-Star Deluxe Hotel, Leh',
          },

          {
            day: 7,
            title: 'Departure from Leh',
            description:
              'After breakfast, check out from your hotel and transfer to Leh Airport for your onward journey after an unforgettable exploration of remote Ladakh.',
            activities: [
              'Breakfast',
              'Hotel Check-out',
              'Airport Transfer',
              'Departure',
            ],
            meals: 'Breakfast',
            stay: 'End of Tour',
          },
        ],
      },
      {
        id: 'ld-8',
        slug: 'ladakh-nubra-pangong-tsomoriri-adventure',
        title: 'Ladakh Nubra, Pangong & Tso Moriri Adventure',
        subtitle:
          'Explore Nubra Valley, Pangong Lake, Tso Moriri and the breathtaking landscapes of eastern Ladakh',
        location:
          'Leh, Nubra Valley, Pangong Tso, Tso Moriri, Changthang',
        duration: '9 Days / 8 Nights',
        price: '₹39,999',
        originalPrice: '₹49,999',
        rating: 4.9,
        reviewsCount: 286,
        category: 'Adventure',

        heroImage: '/assets/images/packageimages/nbraa.webp',

        gallery: [
          'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?q=80&w=800&auto=format&fit=crop',
        ],

        overview:
          'Experience the ultimate Ladakh road adventure covering the spectacular Nubra Valley, turquoise Pangong Lake and remote Tso Moriri. Travel across Khardung La and Chang La, explore traditional Himalayan villages and witness the dramatic landscapes of Changthang. This carefully planned expedition is perfect for travellers looking to experience the best of Ladakh beyond the usual routes.',

        highlights: [
          'Cross the legendary Khardung La mountain pass',
          'Explore the scenic Nubra Valley and Diskit Monastery',
          'Experience the turquoise waters of Pangong Lake',
          'Cross Chang La, one of the world’s highest motorable passes',
          'Discover the remote beauty of Tso Moriri',
          'Experience Changthang Valley landscapes',
          'Enjoy spectacular Himalayan sunrise and sunset views',
          'Visit traditional Ladakhi villages and local settlements',
        ],

        inclusions: [
          '8 Nights accommodation in Leh, Nubra, Pangong and Tso Moriri',
          'Daily Breakfast & Dinner',
          'Dedicated 4x4 Scorpio / Innova with experienced driver',
          'Inner Line Permits and applicable environmental fees',
          'Oxygen cylinder backup in vehicle',
          'All toll, parking and driver allowances',
        ],

        exclusions: [
          'Airfare to and from Leh',
          'Adventure activities',
          'Monastery and attraction entry fees',
          'Personal expenses, tips and laundry',
          'Travel insurance and emergency evacuation costs',
        ],

        hotelType: '3-Star Deluxe Hotels, Camps & Comfortable Guesthouses',
        pickupDrop: 'Leh Kushok Bakula Rimpochee Airport (IXL)',

        itinerary: [
          {
            day: 1,
            title: 'Arrival in Leh | Acclimatization',
            description:
              'Arrive at Leh Airport and transfer to your hotel. Spend the day resting and allowing your body to adjust to the high altitude. In the evening, enjoy a relaxed walk around Leh Market.',
            activities: [
              'Leh Airport Meet & Greet',
              'Hotel Transfer',
              'Hotel Check-in',
              'Acclimatization Rest',
              'Leh Market Walk',
            ],
            meals: 'Dinner',
            stay: '3-Star Deluxe Hotel, Leh',
          },

          {
            day: 2,
            title: 'Leh to Nubra Valley via Khardung La',
            description:
              'Begin your Ladakh road adventure with a drive towards Nubra Valley via the famous Khardung La Pass. Enjoy dramatic mountain views before descending into the beautiful Nubra Valley.',
            activities: [
              'Breakfast & Hotel Check-out',
              'Khardung La Pass',
              'Mountain Photography Stops',
              'Khardung Village',
              'Nubra Valley Arrival',
              'Diskit Monastery',
              'Hunder Sand Dunes',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Comfortable Camp / Guesthouse, Nubra',
          },

          {
            day: 3,
            title: 'Nubra Valley Exploration',
            description:
              'Spend the day exploring the beautiful Nubra Valley. Visit Diskit and Hunder, experience the cold desert landscape and enjoy views of the surrounding Himalayan mountains.',
            activities: [
              'Breakfast',
              'Diskit Monastery',
              'Giant Maitreya Buddha Statue',
              'Hunder Sand Dunes',
              'Double-Humped Camel Experience',
              'Turtuk Village Optional Visit',
              'Nubra Valley Sunset',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Comfortable Camp / Guesthouse, Nubra',
          },

          {
            day: 4,
            title: 'Nubra to Pangong Lake via Shyok',
            description:
              'Leave Nubra Valley and travel towards the spectacular Pangong Lake through the scenic Shyok Valley route. Enjoy dramatic mountain formations and reach the famous blue waters of Pangong by afternoon.',
            activities: [
              'Breakfast & Camp Check-out',
              'Shyok Valley Drive',
              'Mountain Photography',
              'Remote Himalayan Landscapes',
              'Pangong Lake Arrival',
              'Lakeside Walk',
              'Sunset Photography',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Comfortable Camp, Pangong',
          },

          {
            day: 5,
            title: 'Pangong Lake Exploration',
            description:
              'Wake up to beautiful views of Pangong Lake and spend a relaxed morning around the lake. Explore the nearby landscapes and enjoy the changing colours of the lake throughout the day.',
            activities: [
              'Pangong Sunrise',
              'Breakfast',
              'Lakeside Exploration',
              'Photography Stops',
              'Spangmik Village',
              'Free Time by the Lake',
              'Sunset Views',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Comfortable Camp, Pangong',
          },

          {
            day: 6,
            title: 'Pangong to Tso Moriri via Changthang',
            description:
              'Continue deeper into eastern Ladakh through the remote Changthang region. Travel across high-altitude plains and remote roads before reaching the stunning Tso Moriri Lake.',
            activities: [
              'Breakfast & Camp Check-out',
              'Chang La Region',
              'Remote Mountain Roads',
              'Changthang Valley',
              'Nomadic Settlement Views',
              'Tso Moriri Arrival',
              'Lakeside Sunset',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Comfortable Camp, Tso Moriri',
          },

          {
            day: 7,
            title: 'Tso Moriri to Leh | Himalayan Return',
            description:
              'Enjoy the peaceful morning at Tso Moriri before beginning the return journey towards Leh. Travel through spectacular high-altitude landscapes and reach Leh by evening.',
            activities: [
              'Tso Moriri Sunrise',
              'Breakfast & Camp Check-out',
              'Scenic Changthang Drive',
              'Mountain Pass Crossing',
              'Photography Stops',
              'Leh Arrival',
              'Evening Leisure',
            ],
            meals: 'Breakfast & Dinner',
            stay: '3-Star Deluxe Hotel, Leh',
          },

          {
            day: 8,
            title: 'Leh Local Sightseeing',
            description:
              'Explore the cultural and historical attractions of Leh. Visit ancient monasteries, royal landmarks and viewpoints overlooking the Indus Valley.',
            activities: [
              'Breakfast',
              'Shanti Stupa',
              'Leh Palace',
              'Hall of Fame',
              'Thiksey Monastery',
              'Shey Palace',
              'Leh Market',
            ],
            meals: 'Breakfast & Dinner',
            stay: '3-Star Deluxe Hotel, Leh',
          },

          {
            day: 9,
            title: 'Departure from Leh',
            description:
              'After breakfast, check out from your hotel and transfer to Leh Airport for your onward journey after an unforgettable Ladakh adventure.',
            activities: [
              'Breakfast',
              'Hotel Check-out',
              'Airport Transfer',
              'Departure',
            ],
            meals: 'Breakfast',
            stay: 'End of Tour',
          },
        ],
      },

      {
        id: 'ld-9',
        slug: 'ladakh-sham-valley-monastery-village-tour',
        title: 'Ladakh Sham Valley Monastery & Village Tour',
        subtitle:
          'Discover ancient monasteries, peaceful villages, high mountain landscapes and the cultural heart of Ladakh',
        location:
          'Leh, Magnetic Hill, Gurudwara Pathar Sahib, Alchi, Lamayuru, Sham Valley',
        duration: '6 Days / 5 Nights',
        price: '₹18,999',
        originalPrice: '₹24,999',
        rating: 4.8,
        reviewsCount: 198,
        category: 'Cultural',

        heroImage: '/assets/images/packageimages/shamvallery.webp',

        gallery: [
          'https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?q=80&w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=800&auto=format&fit=crop',
        ],

        overview:
          'Explore the cultural and scenic side of Ladakh with a journey through Sham Valley and its historic monasteries and villages. Visit Magnetic Hill, Gurudwara Pathar Sahib, Alchi Monastery and Lamayuru while enjoying spectacular Himalayan landscapes. This package is ideal for travellers who want to experience Ladakh’s culture, history and natural beauty at a relaxed pace.',

        highlights: [
          'Explore the historic Sham Valley',
          'Visit ancient Alchi Monastery',
          'Discover the dramatic Moonland landscapes of Lamayuru',
          'Visit Magnetic Hill and Gurudwara Pathar Sahib',
          'Explore traditional Ladakhi villages',
          'Experience Indus Valley mountain scenery',
          'Visit Thiksey Monastery and Leh Palace',
          'Enjoy beautiful Himalayan sunrise and sunset views',
        ],

        inclusions: [
          '5 Nights accommodation in Leh and Sham Valley',
          'Daily Breakfast & Dinner',
          'Dedicated 4x4 Scorpio / Innova with experienced driver',
          'Inner Line Permits and applicable environmental fees',
          'Oxygen cylinder backup in vehicle',
          'All toll, parking and driver allowances',
        ],

        exclusions: [
          'Airfare to and from Leh',
          'Adventure activities',
          'Monastery and attraction entry fees',
          'Personal expenses, tips and laundry',
          'Travel insurance and emergency evacuation costs',
        ],

        hotelType: '3-Star Deluxe Hotels & Comfortable Guesthouses',
        pickupDrop: 'Leh Kushok Bakula Rimpochee Airport (IXL)',

        itinerary: [
          {
            day: 1,
            title: 'Arrival in Leh | Acclimatization Day',
            description:
              'Arrive at Leh Airport and transfer to your hotel. Spend the day resting and acclimatizing to the high altitude. In the evening, enjoy a peaceful walk around Leh Market.',
            activities: [
              'Leh Airport Meet & Greet',
              'Hotel Transfer',
              'Hotel Check-in',
              'Acclimatization Rest',
              'Leh Market Walk',
            ],
            meals: 'Dinner',
            stay: '3-Star Deluxe Hotel, Leh',
          },

          {
            day: 2,
            title: 'Leh Local Sightseeing & Monastery Tour',
            description:
              'Explore the historical and cultural landmarks of Leh. Visit Shanti Stupa, Leh Palace, Hall of Fame and Thiksey Monastery before returning to Leh.',
            activities: [
              'Breakfast',
              'Shanti Stupa',
              'Leh Palace',
              'Hall of Fame',
              'Thiksey Monastery',
              'Shey Palace',
              'Leh Market',
            ],
            meals: 'Breakfast & Dinner',
            stay: '3-Star Deluxe Hotel, Leh',
          },

          {
            day: 3,
            title: 'Leh to Sham Valley | Alchi & Lamayuru',
            description:
              'Drive through the beautiful Sham Valley towards Lamayuru. Visit Gurudwara Pathar Sahib, Magnetic Hill and the ancient Alchi Monastery before reaching Lamayuru.',
            activities: [
              'Breakfast & Hotel Check-out',
              'Gurudwara Pathar Sahib',
              'Magnetic Hill',
              'Indus River View',
              'Alchi Monastery',
              'Moonland Landscapes',
              'Lamayuru Monastery',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Comfortable Guesthouse, Sham Valley',
          },

          {
            day: 4,
            title: 'Sham Valley Village Exploration',
            description:
              'Spend the day exploring the peaceful villages and landscapes of Sham Valley. Experience local culture, traditional houses and the beautiful Himalayan surroundings.',
            activities: [
              'Breakfast',
              'Traditional Ladakhi Village',
              'Local Culture Experience',
              'Village Walk',
              'Mountain Photography',
              'Indus Valley Views',
              'Sunset Photography',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Comfortable Guesthouse, Sham Valley',
          },

          {
            day: 5,
            title: 'Sham Valley to Leh | Scenic Return',
            description:
              'After breakfast, begin your return journey to Leh through the scenic Himalayan roads. Stop at important viewpoints and enjoy the final mountain views before reaching Leh.',
            activities: [
              'Breakfast & Guesthouse Check-out',
              'Scenic Himalayan Drive',
              'Photography Stops',
              'Indus Valley Views',
              'Leh Arrival',
              'Evening Leisure',
              'Leh Market',
            ],
            meals: 'Breakfast & Dinner',
            stay: '3-Star Deluxe Hotel, Leh',
          },

          {
            day: 6,
            title: 'Departure from Leh',
            description:
              'After breakfast, check out from your hotel and transfer to Leh Airport for your onward journey after discovering the cultural heart of Ladakh.',
            activities: [
              'Breakfast',
              'Hotel Check-out',
              'Airport Transfer',
              'Departure',
            ],
            meals: 'Breakfast',
            stay: 'End of Tour',
          },
        ],
      },

      {
        id: 'ld-10',
        slug: 'ladakh-ultimate-bike-adventure-khardungla-pangong',
        title: 'Ladakh Ultimate Bike Adventure',
        subtitle:
          'An unforgettable motorcycle journey through Khardung La, Nubra Valley, Pangong Lake and Chang La',
        location:
          'Leh, Khardung La, Nubra Valley, Hunder, Pangong Tso, Chang La',
        duration: '8 Days / 7 Nights',
        price: '₹32,999',
        originalPrice: '₹42,999',
        rating: 4.9,
        reviewsCount: 312,
        category: 'Adventure',

        heroImage: '/assets/images/packageimages/bikeinlleh.webp',

        gallery: [
          'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop',
        ],

        overview:
          'Ride through the legendary landscapes of Ladakh on an unforgettable motorcycle adventure. Cross Khardung La and Chang La, explore the dramatic Nubra Valley, ride along the scenic Shyok route and reach the spectacular Pangong Lake. Designed for adventure lovers, this expedition combines thrilling mountain roads, remote villages and breathtaking Himalayan scenery.',

        highlights: [
          'Thrilling motorcycle ride across Khardung La',
          'Ride through the dramatic Nubra Valley',
          'Explore Hunder Sand Dunes and Diskit Monastery',
          'Scenic motorcycle ride through Shyok Valley',
          'Experience the spectacular Pangong Lake',
          'Cross the high-altitude Chang La Pass',
          'Explore traditional Ladakhi villages',
          'Enjoy unforgettable Himalayan sunrise and sunset views',
        ],

        inclusions: [
          '7 Nights accommodation in Leh, Nubra and Pangong',
          'Daily Breakfast & Dinner',
          'Royal Enfield / Himalayan motorcycle',
          'Fuel for the planned itinerary',
          'Experienced road captain / tour leader',
          'Backup vehicle for luggage and emergencies',
          'Inner Line Permits and applicable environmental fees',
          'Oxygen cylinder backup in support vehicle',
          'All toll, parking and driver allowances',
        ],

        exclusions: [
          'Airfare to and from Leh',
          'Motorcycle security deposit',
          'Riding gear and personal protective equipment',
          'Personal expenses, tips and laundry',
          'Travel insurance and emergency evacuation costs',
          'Any damage to motorcycle caused by negligence',
        ],

        hotelType: '3-Star Deluxe Hotels, Camps & Comfortable Guesthouses',
        pickupDrop: 'Leh Kushok Bakula Rimpochee Airport (IXL)',

        itinerary: [
          {
            day: 1,
            title: 'Arrival in Leh | Acclimatization',
            description:
              'Arrive at Leh Airport and transfer to your hotel. Spend the day resting and acclimatizing to the altitude. In the evening, meet the tour team and get a briefing about the upcoming motorcycle adventure.',
            activities: [
              'Leh Airport Meet & Greet',
              'Hotel Transfer',
              'Hotel Check-in',
              'Acclimatization Rest',
              'Motorcycle Briefing',
              'Leh Market Walk',
            ],
            meals: 'Dinner',
            stay: '3-Star Deluxe Hotel, Leh',
          },

          {
            day: 2,
            title: 'Leh Local Sightseeing & Bike Orientation',
            description:
              'Explore the major attractions around Leh while getting comfortable with your motorcycle. Visit important cultural landmarks and prepare for the high-altitude riding ahead.',
            activities: [
              'Breakfast',
              'Motorcycle Orientation',
              'Shanti Stupa',
              'Leh Palace',
              'Hall of Fame',
              'Thiksey Monastery',
              'Bike Check & Safety Briefing',
            ],
            meals: 'Breakfast & Dinner',
            stay: '3-Star Deluxe Hotel, Leh',
          },

          {
            day: 3,
            title: 'Leh to Nubra Valley via Khardung La',
            description:
              'Start the main motorcycle expedition with a thrilling ride towards Nubra Valley. Cross the legendary Khardung La Pass and descend towards the cold desert landscapes of Nubra.',
            activities: [
              'Breakfast & Bike Preparation',
              'Khardung La Pass',
              'High-Altitude Motorcycle Ride',
              'Mountain Photography Stops',
              'Diskit Monastery',
              'Hunder Sand Dunes',
              'Nubra Valley Sunset',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Comfortable Camp / Guesthouse, Nubra',
          },

          {
            day: 4,
            title: 'Nubra Valley Exploration Ride',
            description:
              'Explore the beautiful Nubra Valley on your motorcycle. Ride through remote villages and desert landscapes while enjoying spectacular views of the surrounding mountains.',
            activities: [
              'Breakfast',
              'Hunder Village',
              'Diskit Monastery',
              'Maitreya Buddha Statue',
              'Hunder Sand Dunes',
              'Village Riding Experience',
              'Nubra Valley Photography',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Comfortable Camp / Guesthouse, Nubra',
          },

          {
            day: 5,
            title: 'Nubra to Pangong via Shyok Valley',
            description:
              'Ride from Nubra to Pangong Lake through the spectacular Shyok Valley. This remote route offers some of the most dramatic mountain scenery in Ladakh.',
            activities: [
              'Breakfast & Camp Check-out',
              'Shyok Valley Ride',
              'Remote Himalayan Roads',
              'Mountain Pass Views',
              'Pangong Lake Arrival',
              'Lakeside Ride',
              'Sunset Photography',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Comfortable Camp, Pangong',
          },

          {
            day: 6,
            title: 'Pangong Lake Exploration | Chang La Ride',
            description:
              'Enjoy the spectacular morning at Pangong Lake before beginning your return ride towards Leh. Cross the mighty Chang La Pass and experience some of the most exciting roads of the expedition.',
            activities: [
              'Pangong Sunrise',
              'Breakfast',
              'Lakeside Photography',
              'Pangong Exploration',
              'Chang La Pass',
              'High-Altitude Motorcycle Ride',
              'Leh Arrival',
            ],
            meals: 'Breakfast & Dinner',
            stay: '3-Star Deluxe Hotel, Leh',
          },

          {
            day: 7,
            title: 'Leh Leisure & Adventure Day',
            description:
              'Take a relaxed day in Leh after the challenging mountain rides. Explore the local market, shop for souvenirs and enjoy the final evening with fellow riders.',
            activities: [
              'Breakfast',
              'Leh Market',
              'Local Shopping',
              'Cafe Experience',
              'Motorcycle Inspection',
              'Adventure Memories',
              'Farewell Dinner',
            ],
            meals: 'Breakfast & Dinner',
            stay: '3-Star Deluxe Hotel, Leh',
          },

          {
            day: 8,
            title: 'Departure from Leh',
            description:
              'After breakfast, return the motorcycles and transfer to Leh Airport for your onward journey after completing an unforgettable Ladakh motorcycle adventure.',
            activities: [
              'Breakfast',
              'Motorcycle Return',
              'Hotel Check-out',
              'Airport Transfer',
              'Departure',
            ],
            meals: 'Breakfast',
            stay: 'End of Tour',
          },
        ],
      },
    ],
  },

  'rajasthan': {
    id: 'dest-rajasthan',
    slug: 'rajasthan',
    name: 'Royal Rajasthan Heritage & Deserts',
    type: 'national',
    region: 'North India',
    tagline: 'Grand palaces of Jaipur, romantic lakes of Udaipur, golden sands of Jaisalmer.',
    description: 'Step into the land of kings, majestic hill forts, vibrant desert cultures, camel safaris on Sam sand dunes, and royal palace hospitality.',
    heroImage: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1600&auto=format&fit=crop',
    bestTime: 'October to March (Pleasant Royal Season)',
    packagesCount: 3,
    packages: [
      {
        id: 'rj-1',
        slug: 'royal-rajasthan-grand-circuit',
        title: 'Grand Royal Rajasthan Heritage Circuit',
        subtitle: 'Jaipur Pink City, Jodhpur Blue City, Jaisalmer Desert Camp & Udaipur Lakes',
        location: 'Jaipur, Jodhpur, Jaisalmer, Udaipur',
        duration: '7 Days / 6 Nights',
        price: '₹19,999',
        originalPrice: '₹26,999',
        rating: 4.9,
        reviewsCount: 360,
        category: 'Popular',
        heroImage: '/assets/images/packageimages/rj1.webp',
        gallery: [
          'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800&auto=format&fit=crop',
        ],
        overview: 'Experience the regal elegance of Rajputana. From the opulent Amber Fort and Hawa Mahal in Jaipur to the golden sand dune camps of Jaisalmer and romantic sunset boat cruises on Lake Pichola in Udaipur.',
        highlights: [
          'Amber Fort elephant/jeep ride & Hawa Mahal in Jaipur',
          'Overnight Swiss Desert Tent with Folk Dance & Camel Safari in Jaisalmer',
          'Mehrangarh Fort & Jaswant Thada in Jodhpur',
          'City Palace & Lake Pichola sunset boat ride in Udaipur',
        ],
        inclusions: [
          '6 Nights 3/4-Star Heritage/Deluxe Hotels + 1 Night Desert Camp',
          'Daily Breakfast & Dinner (Royal Rajasthani & Continental)',
          'Private dedicated AC Sedan/SUV for full tour',
          'Camel Safari & Cultural Folk Show in Thar Desert',
          'All tolls, driver allowances and parking charges',
        ],
        exclusions: ['Flight / Train fares', 'Monument entrance tickets', 'Personal expenses'],
        hotelType: 'Heritage Havelis & 4-Star Palaces',
        pickupDrop: 'Jaipur / Udaipur Airport / Railway Station',
        itinerary: [
          {
            day: 1,
            title: 'Arrival in Jaipur - The Pink City',
            description: 'Arrive in Jaipur. Check in to your hotel and visit Birla Temple and Chokhi Dhani ethnic village.',
            activities: ['Airport Pickup', 'Hotel Check-in', 'Chokhi Dhani Dinner'],
            meals: 'Dinner',
            stay: 'Jaipur Heritage Hotel',
          },
          {
            day: 2,
            title: 'Jaipur Forts & Palaces Full Day Tour',
            description: 'Explore the magnificent Amber Fort, Jal Mahal palace on the water, City Palace, Jantar Mantar observatory, and iconic Hawa Mahal.',
            activities: ['Amber Fort Tour', 'Hawa Mahal Photo', 'City Palace Museum'],
            meals: 'Breakfast & Dinner',
            stay: 'Jaipur Heritage Hotel',
          },
          {
            day: 3,
            title: 'Jaipur to Jodhpur - The Blue City',
            description: 'Drive to Jodhpur. Visit the towering Mehrangarh Fort offering views over the blue-painted houses, Jaswant Thada marble cenotaph, and Umaid Bhawan Palace.',
            activities: ['Mehrangarh Fort', 'Jaswant Thada', 'Clock Tower Bazaar'],
            meals: 'Breakfast & Dinner',
            stay: 'Jodhpur Deluxe Hotel',
          },
          {
            day: 4,
            title: 'Jodhpur to Jaisalmer Thar Desert Camp',
            description: 'Drive to the Golden City of Jaisalmer. Check into luxury desert camps at Sam Sand Dunes. Enjoy camel safari, dune bashing, and cultural Kalbeliya folk dance around bonfire.',
            activities: ['Thar Desert Drive', 'Camel Safari at Sunset', 'Folk Dance & Dinner'],
            meals: 'Breakfast & Dinner',
            stay: 'Luxury Swiss Desert Camp, Sam',
          },
          {
            day: 5,
            title: 'Jaisalmer Fort & Drive to Udaipur',
            description: 'Tour the living Golden Fort (Sonar Qella) and intricately carved Patwon Ki Haveli before driving to Udaipur.',
            activities: ['Jaisalmer Fort', 'Patwon Haveli', 'Scenic Highway Drive'],
            meals: 'Breakfast & Dinner',
            stay: 'Udaipur Lakeside Hotel',
          },
          {
            day: 6,
            title: 'Udaipur - City of Lakes & Romance',
            description: 'Tour the magnificent City Palace complex, Jagdish Temple, Saheliyon Ki Bari royal gardens, and take a sunset boat ride on Lake Pichola.',
            activities: ['City Palace Tour', 'Lake Pichola Boat Cruise', 'Jag Mandir View'],
            meals: 'Breakfast & Dinner',
            stay: 'Udaipur Lakeside Hotel',
          },
          {
            day: 7,
            title: 'Departure from Udaipur',
            description: 'Breakfast and drop at Udaipur Airport / Railway Station.',
            activities: ['Hotel Check-out', 'Airport Transfer'],
            meals: 'Breakfast',
            stay: 'End of Tour',
          },
        ],
      },
      {
        id: 'rj-2',
        slug: 'jaipur-pushkar-ajmer-heritage-tour',
        title: 'Jaipur Pushkar & Ajmer Heritage Tour',
        subtitle: 'Explore Jaipur forts, Pushkar temples, Ajmer Sharif and the colorful heritage of Rajasthan',
        location: 'Jaipur, Ajmer, Pushkar',
        duration: '4 Days / 3 Nights',
        price: '₹10,999',
        originalPrice: '₹14,999',
        rating: 4.8,
        reviewsCount: 245,
        category: 'Popular',

        heroImage: '/assets/images/packageimages/jaipur-bg.webp',
        gallery: [
          'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800&auto=format&fit=crop',
        ],

        overview:
          'Discover the cultural heart of Rajasthan with a short and memorable journey through Jaipur, Ajmer and Pushkar. Explore magnificent forts, colorful bazaars, historic temples and spiritual landmarks while experiencing the royal charm of Rajasthan.',

        highlights: [
          'Explore the magnificent Amber Fort',
          'Visit the iconic Hawa Mahal and City Palace',
          'Seek blessings at Brahma Temple in Pushkar',
          'Visit the famous Ajmer Sharif Dargah',
          'Explore colorful Jaipur local markets',
          'Enjoy traditional Rajasthani cuisine',
        ],

        inclusions: [
          '3 Nights accommodation in 3/4-Star Deluxe Hotels',
          'Daily Breakfast & Dinner',
          'Private dedicated AC Sedan/SUV',
          'Airport / Railway Station transfers',
          'All tolls, parking and driver allowances',
        ],

        exclusions: [
          'Flight / Train fares',
          'Monument entrance tickets',
          'Personal expenses and shopping',
          'Guide charges',
          'Travel insurance',
        ],

        hotelType: '3/4-Star Deluxe & Heritage Hotels',
        pickupDrop: 'Jaipur Airport / Railway Station',

        itinerary: [
          {
            day: 1,
            title: 'Arrival in Jaipur - The Pink City',
            description:
              'Arrive in Jaipur and transfer to your hotel. Later explore the colorful streets and traditional atmosphere of the Pink City.',
            activities: [
              'Airport / Railway Station Pickup',
              'Hotel Check-in',
              'Birla Temple',
              'Albert Hall Museum',
              'Local Market Visit',
            ],
            meals: 'Dinner',
            stay: 'Jaipur Deluxe Hotel',
          },
          {
            day: 2,
            title: 'Jaipur Forts & Palaces',
            description:
              'Spend the day exploring Jaipur’s famous royal landmarks including Amber Fort, Jal Mahal, City Palace, Jantar Mantar and Hawa Mahal.',
            activities: [
              'Amber Fort',
              'Jal Mahal',
              'City Palace',
              'Jantar Mantar',
              'Hawa Mahal',
              'Johari Bazaar',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Jaipur Deluxe Hotel',
          },
          {
            day: 3,
            title: 'Jaipur to Ajmer & Pushkar',
            description:
              'Drive towards Ajmer and Pushkar. Visit the historic Ajmer Sharif Dargah and explore Pushkar Lake and the famous Brahma Temple.',
            activities: [
              'Breakfast & Hotel Check-out',
              'Ajmer Sharif Dargah',
              'Pushkar Lake',
              'Brahma Temple',
              'Pushkar Market',
              'Sunset at Pushkar Lake',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Pushkar Heritage Hotel',
          },
          {
            day: 4,
            title: 'Pushkar to Jaipur & Departure',
            description:
              'Enjoy breakfast and a relaxed morning in Pushkar before returning to Jaipur for your onward journey.',
            activities: [
              'Breakfast',
              'Pushkar Morning Walk',
              'Return Drive to Jaipur',
              'Airport / Railway Station Drop',
            ],
            meals: 'Breakfast',
            stay: 'End of Tour',
          },
        ],
      },

      {
        id: 'rj-3',
        slug: 'jodhpur-jaisalmer-desert-escape',
        title: 'Jodhpur Jaisalmer Desert Escape',
        subtitle: 'Blue City heritage, golden forts, desert dunes and magical nights under the Rajasthan sky',
        location: 'Jodhpur, Jaisalmer, Sam Sand Dunes',
        duration: '5 Days / 4 Nights',
        price: '₹13,999',
        originalPrice: '₹18,999',
        rating: 4.9,
        reviewsCount: 278,
        category: 'Adventure',

        heroImage: '/assets/images/packageimages/8-Rajasthan.webp',

        gallery: [
          'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=800&auto=format&fit=crop',
        ],

        overview:
          'Experience the contrasting beauty of Rajasthan with a journey from the blue streets of Jodhpur to the golden landscapes of Jaisalmer. Explore majestic forts, ancient havelis and the Thar Desert with camel rides, sunset dunes and traditional folk performances.',

        highlights: [
          'Explore the mighty Mehrangarh Fort',
          'Visit the royal Umaid Bhawan Palace',
          'Discover the golden Jaisalmer Fort',
          'Camel safari across Sam Sand Dunes',
          'Traditional Rajasthani folk dance and music',
          'Desert sunset and bonfire experience',
        ],

        inclusions: [
          '4 Nights accommodation in Deluxe Hotels & Desert Camp',
          'Daily Breakfast & Dinner',
          'Private dedicated AC Sedan/SUV',
          'Camel Safari in Sam Sand Dunes',
          'Rajasthani Cultural Folk Show',
          'All tolls, parking and driver allowances',
        ],

        exclusions: [
          'Flight / Train fares',
          'Monument entrance tickets',
          'Personal expenses',
          'Desert adventure activities',
          'Travel insurance',
        ],

        hotelType: 'Heritage Hotels, Deluxe Hotels & Desert Camp',
        pickupDrop: 'Jodhpur Airport / Railway Station',

        itinerary: [
          {
            day: 1,
            title: 'Arrival in Jodhpur - Blue City',
            description:
              'Arrive in Jodhpur and check in to your hotel. Explore the old city and enjoy the evening atmosphere around the famous Clock Tower market.',
            activities: [
              'Airport Pickup',
              'Hotel Check-in',
              'Clock Tower Market',
              'Old City Walk',
              'Local Shopping',
            ],
            meals: 'Dinner',
            stay: 'Jodhpur Deluxe Hotel',
          },
          {
            day: 2,
            title: 'Jodhpur Fort & Palace Tour',
            description:
              'Explore the architectural grandeur of Jodhpur with visits to Mehrangarh Fort, Jaswant Thada and Umaid Bhawan Palace.',
            activities: [
              'Mehrangarh Fort',
              'Jaswant Thada',
              'Umaid Bhawan Palace',
              'Blue City Viewpoint',
              'Local Bazaar',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Jodhpur Deluxe Hotel',
          },
          {
            day: 3,
            title: 'Jodhpur to Jaisalmer - Golden City',
            description:
              'Drive through the desert landscapes towards Jaisalmer. Check into your hotel and explore the beautiful golden city in the evening.',
            activities: [
              'Breakfast & Hotel Check-out',
              'Thar Desert Drive',
              'Jaisalmer Arrival',
              'Gadisar Lake',
              'Jaisalmer Local Market',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Jaisalmer Heritage Hotel',
          },
          {
            day: 4,
            title: 'Jaisalmer Fort & Desert Camp',
            description:
              'Explore the Golden Fort and famous havelis before heading towards Sam Sand Dunes for an unforgettable desert evening.',
            activities: [
              'Jaisalmer Fort',
              'Patwon Ki Haveli',
              'Salim Singh Haveli',
              'Sam Sand Dunes',
              'Camel Safari',
              'Sunset Photography',
              'Folk Dance & Bonfire',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Luxury Swiss Desert Camp',
          },
          {
            day: 5,
            title: 'Desert Sunrise & Departure',
            description:
              'Enjoy the peaceful desert sunrise followed by breakfast. Later transfer to Jaisalmer for your onward journey.',
            activities: [
              'Desert Sunrise',
              'Breakfast',
              'Camp Check-out',
              'Jaisalmer Transfer',
              'Airport / Railway Station Drop',
            ],
            meals: 'Breakfast',
            stay: 'End of Tour',
          },
        ],
      },

      {
        id: 'rj-4',
        slug: 'udaipur-mount-abu-romantic-rajasthan',
        title: 'Udaipur Mount Abu Romantic Rajasthan',
        subtitle: 'Lakeside romance, royal palaces, hill station charm and peaceful Rajasthan escapes',
        location: 'Udaipur, Mount Abu',
        duration: '5 Days / 4 Nights',
        price: '₹14,999',
        originalPrice: '₹19,999',
        rating: 4.9,
        reviewsCount: 224,
        category: 'Popular',

        heroImage: '/assets/images/packageimages/moundabu.webp',

        gallery: [
          'https://images.unsplash.com/photo-1602643163983-ed0babc39797?q=80&w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800&auto=format&fit=crop',
        ],

        overview:
          'Enjoy a romantic Rajasthan getaway combining the beautiful lakes and palaces of Udaipur with the peaceful hill station of Mount Abu. Experience sunset cruises, royal architecture, scenic viewpoints and relaxing evenings surrounded by nature.',

        highlights: [
          'Romantic Lake Pichola sunset boat ride',
          'Explore the magnificent City Palace',
          'Visit the beautiful Sajjangarh Monsoon Palace',
          'Enjoy Nakki Lake and Mount Abu sunset',
          'Explore Dilwara Jain Temples',
          'Peaceful hill station experience',
        ],

        inclusions: [
          '4 Nights accommodation in 3/4-Star Deluxe Hotels',
          'Daily Breakfast & Dinner',
          'Private dedicated AC Sedan/SUV',
          'Lake Pichola boat ride',
          'Airport / Railway Station transfers',
          'All tolls, parking and driver allowances',
        ],

        exclusions: [
          'Flight / Train fares',
          'Monument entrance tickets',
          'Personal expenses',
          'Adventure activities',
          'Travel insurance',
        ],

        hotelType: '4-Star Lakeside & Hill Resort Hotels',
        pickupDrop: 'Udaipur Airport / Railway Station',

        itinerary: [
          {
            day: 1,
            title: 'Arrival in Udaipur - City of Lakes',
            description:
              'Arrive in Udaipur and check in to your hotel. Spend the evening enjoying the romantic atmosphere around Lake Pichola.',
            activities: [
              'Airport Pickup',
              'Hotel Check-in',
              'Lake Pichola Walk',
              'Gangaur Ghat',
              'Evening Leisure',
            ],
            meals: 'Dinner',
            stay: 'Udaipur Lakeside Hotel',
          },
          {
            day: 2,
            title: 'Udaipur Royal Heritage Tour',
            description:
              'Explore the royal heritage of Udaipur with visits to City Palace, Jagdish Temple, Saheliyon Ki Bari and the beautiful lakeside areas.',
            activities: [
              'City Palace',
              'Jagdish Temple',
              'Saheliyon Ki Bari',
              'Bagore Ki Haveli',
              'Lake Pichola Boat Cruise',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Udaipur Lakeside Hotel',
          },
          {
            day: 3,
            title: 'Udaipur to Mount Abu',
            description:
              'Drive towards the only hill station of Rajasthan. Check in to your resort and enjoy the pleasant mountain atmosphere.',
            activities: [
              'Breakfast & Hotel Check-out',
              'Scenic Drive',
              'Mount Abu Arrival',
              'Nakki Lake',
              'Local Market',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Mount Abu Hill Resort',
          },
          {
            day: 4,
            title: 'Mount Abu Sightseeing & Sunset',
            description:
              'Explore Mount Abu including the famous Dilwara Jain Temples, Guru Shikhar and peaceful viewpoints before enjoying sunset at Sunset Point.',
            activities: [
              'Dilwara Jain Temples',
              'Guru Shikhar',
              'Achalgarh',
              'Nakki Lake',
              'Sunset Point',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Mount Abu Hill Resort',
          },
          {
            day: 5,
            title: 'Mount Abu to Udaipur & Departure',
            description:
              'Enjoy breakfast and return towards Udaipur for your onward journey.',
            activities: [
              'Breakfast',
              'Hotel Check-out',
              'Return Drive',
              'Udaipur Airport / Railway Station Drop',
            ],
            meals: 'Breakfast',
            stay: 'End of Tour',
          },
        ],
      },

      {
        id: 'rj-5',
        slug: 'royal-jaipur-ranthambore-wildlife-tour',
        title: 'Royal Jaipur & Ranthambore Wildlife Tour',
        subtitle: 'Royal forts of Jaipur combined with thrilling tiger safari adventures in Ranthambore',
        location: 'Jaipur, Ranthambore',
        duration: '5 Days / 4 Nights',
        price: '₹15,999',
        originalPrice: '₹21,999',
        rating: 4.8,
        reviewsCount: 187,
        category: 'Popular',

        heroImage: '/assets/images/packageimages/widlifepark.webp',

        gallery: [
          'https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800&auto=format&fit=crop',
        ],

        overview:
          'Combine Rajasthan’s royal heritage with an exciting wildlife experience. Explore Jaipur’s grand forts and palaces before heading to Ranthambore National Park for thrilling jungle safaris and the chance to spot majestic Bengal tigers.',

        highlights: [
          'Explore Amber Fort and Jaipur City Palace',
          'Visit iconic Hawa Mahal',
          'Morning or evening Ranthambore jungle safari',
          'Explore historic Ranthambore Fort',
          'Wildlife and bird photography',
          'Scenic Aravalli landscapes',
        ],

        inclusions: [
          '4 Nights accommodation in 3/4-Star Hotels & Resort',
          'Daily Breakfast & Dinner',
          'Private dedicated AC Sedan/SUV',
          '1 Jungle Safari in Ranthambore',
          'Airport / Railway Station transfers',
          'All tolls, parking and driver allowances',
        ],

        exclusions: [
          'Flight / Train fares',
          'Additional jungle safaris',
          'Monument entrance tickets',
          'Personal expenses',
          'Travel insurance',
        ],

        hotelType: '4-Star Heritage Hotel & Wildlife Resort',
        pickupDrop: 'Jaipur Airport / Railway Station',

        itinerary: [
          {
            day: 1,
            title: 'Arrival in Jaipur',
            description:
              'Arrive in Jaipur and check in to your hotel. Spend the evening exploring local markets and experiencing the colorful atmosphere of the Pink City.',
            activities: [
              'Airport Pickup',
              'Hotel Check-in',
              'Birla Temple',
              'Johari Bazaar',
              'Local Shopping',
            ],
            meals: 'Dinner',
            stay: 'Jaipur Deluxe Hotel',
          },
          {
            day: 2,
            title: 'Jaipur Forts & Palaces',
            description:
              'Explore Jaipur’s magnificent royal landmarks including Amber Fort, Jal Mahal, City Palace, Jantar Mantar and Hawa Mahal.',
            activities: [
              'Amber Fort',
              'Jal Mahal',
              'City Palace',
              'Jantar Mantar',
              'Hawa Mahal',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Jaipur Deluxe Hotel',
          },
          {
            day: 3,
            title: 'Jaipur to Ranthambore',
            description:
              'Drive towards Ranthambore National Park. After check-in, relax at the resort and explore the surrounding natural landscapes.',
            activities: [
              'Breakfast & Hotel Check-out',
              'Scenic Drive',
              'Ranthambore Arrival',
              'Resort Check-in',
              'Nature Walk',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Ranthambore Wildlife Resort',
          },
          {
            day: 4,
            title: 'Ranthambore Jungle Safari',
            description:
              'Start your day with an exciting jungle safari through Ranthambore National Park. Explore the wildlife habitat and keep an eye out for tigers, leopards, deer and birds.',
            activities: [
              'Early Morning Safari',
              'Tiger Spotting',
              'Wildlife Photography',
              'Ranthambore Fort',
              'Jungle Landscape',
              'Evening Leisure',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Ranthambore Wildlife Resort',
          },
          {
            day: 5,
            title: 'Ranthambore to Jaipur & Departure',
            description:
              'After breakfast, drive back to Jaipur for your onward journey.',
            activities: [
              'Breakfast',
              'Resort Check-out',
              'Return Drive to Jaipur',
              'Airport / Railway Station Drop',
            ],
            meals: 'Breakfast',
            stay: 'End of Tour',
          },
        ],
      },

      {
        id: 'rj-6',
        slug: 'bikaner-jaisalmer-desert-heritage-tour',
        title: 'Bikaner Jaisalmer Desert Heritage Tour',
        subtitle: 'Junagarh Fort, desert villages, golden architecture and an unforgettable Thar experience',
        location: 'Bikaner, Jaisalmer, Sam Sand Dunes',
        duration: '5 Days / 4 Nights',
        price: '₹13,499',
        originalPrice: '₹18,499',
        rating: 4.8,
        reviewsCount: 176,
        category: 'Popular',

        heroImage: '/assets/images/packageimages/raj.webp',

        gallery: [
          'https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800&auto=format&fit=crop',
        ],

        overview:
          'Journey through the desert heritage of Rajasthan with a fascinating trip from Bikaner to Jaisalmer. Discover magnificent forts, traditional havelis, colorful markets and the golden Thar Desert with an overnight camp experience.',

        highlights: [
          'Explore the magnificent Junagarh Fort',
          'Visit Karni Mata Temple at Deshnok',
          'Discover the golden Jaisalmer Fort',
          'Experience camel safari in the Thar Desert',
          'Enjoy Rajasthani folk music and cultural show',
          'Spend a night under the desert sky',
        ],

        inclusions: [
          '4 Nights accommodation in Deluxe Hotel & Desert Camp',
          'Daily Breakfast & Dinner',
          'Private dedicated AC Sedan/SUV',
          'Camel Safari',
          'Cultural Folk Show',
          'All tolls, parking and driver allowances',
        ],

        exclusions: [
          'Flight / Train fares',
          'Monument entrance tickets',
          'Personal expenses',
          'Optional desert activities',
          'Travel insurance',
        ],

        hotelType: 'Heritage Hotels & Luxury Desert Camp',
        pickupDrop: 'Bikaner Airport / Railway Station',

        itinerary: [
          {
            day: 1,
            title: 'Arrival in Bikaner',
            description:
              'Arrive in Bikaner and check in to your heritage hotel. Later explore the old city and local markets.',
            activities: [
              'Airport / Railway Station Pickup',
              'Hotel Check-in',
              'Old City Walk',
              'Local Bazaar',
              'Evening Leisure',
            ],
            meals: 'Dinner',
            stay: 'Bikaner Heritage Hotel',
          },
          {
            day: 2,
            title: 'Bikaner Fort & Deshnok Temple',
            description:
              'Explore Junagarh Fort and the royal heritage of Bikaner before visiting the unique Karni Mata Temple at Deshnok.',
            activities: [
              'Junagarh Fort',
              'Lalgarh Palace',
              'Karni Mata Temple',
              'Bikaner Old City',
              'Local Shopping',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Bikaner Heritage Hotel',
          },
          {
            day: 3,
            title: 'Bikaner to Jaisalmer',
            description:
              'Drive through the changing desert landscapes towards Jaisalmer. In the evening enjoy Gadisar Lake and the golden city atmosphere.',
            activities: [
              'Breakfast & Hotel Check-out',
              'Thar Desert Drive',
              'Jaisalmer Arrival',
              'Gadisar Lake',
              'Golden City Market',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Jaisalmer Heritage Hotel',
          },
          {
            day: 4,
            title: 'Jaisalmer Fort & Desert Camp',
            description:
              'Explore the magnificent Jaisalmer Fort and famous havelis before heading to Sam Sand Dunes for a camel safari and cultural desert evening.',
            activities: [
              'Jaisalmer Fort',
              'Patwon Ki Haveli',
              'Salim Singh Haveli',
              'Sam Sand Dunes',
              'Camel Safari',
              'Sunset at Dunes',
              'Folk Dance & Bonfire',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Luxury Swiss Desert Camp',
          },
          {
            day: 5,
            title: 'Desert Sunrise & Departure',
            description:
              'Enjoy a peaceful sunrise over the dunes followed by breakfast and transfer to Jaisalmer for your onward journey.',
            activities: [
              'Desert Sunrise',
              'Breakfast',
              'Camp Check-out',
              'Jaisalmer Transfer',
              'Airport / Railway Station Drop',
            ],
            meals: 'Breakfast',
            stay: 'End of Tour',
          },
        ],
      },

      {
        id: 'rj-7',
        slug: 'royal-rajasthan-family-holiday',
        title: 'Royal Rajasthan Family Holiday',
        subtitle: 'Family-friendly Rajasthan journey covering Jaipur, Jodhpur and Udaipur with comfort and culture',
        location: 'Jaipur, Jodhpur, Udaipur',
        duration: '7 Days / 6 Nights',
        price: '₹20,999',
        originalPrice: '₹27,999',
        rating: 4.9,
        reviewsCount: 298,
        category: 'Family',

        heroImage: '/assets/images/packageimages/rajnewww.webp',

        gallery: [
          'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800&auto=format&fit=crop',
        ],

        overview:
          'Enjoy a comfortable family holiday through the royal cities of Rajasthan. Explore magnificent forts and palaces, discover colorful markets, enjoy cultural experiences and relax beside the beautiful lakes of Udaipur.',

        highlights: [
          'Family-friendly sightseeing in Jaipur',
          'Explore Amber Fort and Hawa Mahal',
          'Discover Mehrangarh Fort in Jodhpur',
          'Experience the blue streets of Jodhpur',
          'Explore Udaipur City Palace',
          'Enjoy a family boat ride on Lake Pichola',
        ],

        inclusions: [
          '6 Nights accommodation in 3/4-Star Deluxe Hotels',
          'Daily Breakfast & Dinner',
          'Private dedicated AC Sedan/SUV',
          'Lake Pichola boat ride',
          'Airport / Railway Station transfers',
          'All tolls, parking and driver allowances',
        ],

        exclusions: [
          'Flight / Train fares',
          'Monument entrance tickets',
          'Personal expenses',
          'Optional activities',
          'Travel insurance',
        ],

        hotelType: 'Family-Friendly 3/4-Star Deluxe Hotels',
        pickupDrop: 'Jaipur Airport / Railway Station',

        itinerary: [
          {
            day: 1,
            title: 'Arrival in Jaipur',
            description:
              'Arrive in Jaipur and transfer to your hotel. Spend a relaxed evening with your family exploring the local market.',
            activities: [
              'Airport Pickup',
              'Hotel Check-in',
              'Birla Temple',
              'Local Market',
              'Family Leisure Time',
            ],
            meals: 'Dinner',
            stay: 'Jaipur Family Hotel',
          },
          {
            day: 2,
            title: 'Jaipur Family Sightseeing',
            description:
              'Explore the royal attractions of Jaipur including Amber Fort, Jal Mahal, City Palace and Hawa Mahal.',
            activities: [
              'Amber Fort',
              'Jal Mahal',
              'City Palace',
              'Jantar Mantar',
              'Hawa Mahal',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Jaipur Family Hotel',
          },
          {
            day: 3,
            title: 'Jaipur to Jodhpur',
            description:
              'Drive towards Jodhpur through the scenic Rajasthan countryside. Check in and enjoy an evening walk around the Blue City.',
            activities: [
              'Breakfast & Hotel Check-out',
              'Scenic Drive',
              'Jodhpur Arrival',
              'Clock Tower',
              'Local Market',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Jodhpur Deluxe Hotel',
          },
          {
            day: 4,
            title: 'Jodhpur Heritage Tour',
            description:
              'Discover the royal history of Jodhpur with visits to Mehrangarh Fort, Jaswant Thada and Umaid Bhawan Palace.',
            activities: [
              'Mehrangarh Fort',
              'Jaswant Thada',
              'Umaid Bhawan Palace',
              'Blue City Viewpoint',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Jodhpur Deluxe Hotel',
          },
          {
            day: 5,
            title: 'Jodhpur to Udaipur',
            description:
              'Travel towards Udaipur and enjoy the changing landscapes of Rajasthan. After check-in, relax beside Lake Pichola.',
            activities: [
              'Breakfast & Hotel Check-out',
              'Scenic Drive',
              'Udaipur Arrival',
              'Lake Pichola',
              'Gangaur Ghat',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Udaipur Lakeside Hotel',
          },
          {
            day: 6,
            title: 'Udaipur Family Exploration',
            description:
              'Explore Udaipur’s beautiful palaces, temples and gardens before enjoying a relaxing boat ride on Lake Pichola.',
            activities: [
              'City Palace',
              'Jagdish Temple',
              'Saheliyon Ki Bari',
              'Bagore Ki Haveli',
              'Lake Pichola Boat Ride',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Udaipur Lakeside Hotel',
          },
          {
            day: 7,
            title: 'Departure from Udaipur',
            description:
              'Enjoy breakfast and check out from your hotel before transfer to Udaipur Airport or Railway Station.',
            activities: [
              'Breakfast',
              'Hotel Check-out',
              'Airport Transfer',
              'Departure',
            ],
            meals: 'Breakfast',
            stay: 'End of Tour',
          },
        ],
      },

      {
        id: 'rj-8',
        slug: 'rajasthan-desert-triangle-tour',
        title: 'Rajasthan Desert Triangle Tour',
        subtitle: 'Jaipur heritage, Jodhpur royal charm and Jaisalmer golden desert landscapes',
        location: 'Jaipur, Jodhpur, Jaisalmer',
        duration: '6 Days / 5 Nights',
        price: '₹16,999',
        originalPrice: '₹22,999',
        rating: 4.9,
        reviewsCount: 321,
        category: 'Popular',

        heroImage: '/assets/images/packageimages/newwrajimage.webp',

        gallery: [
          'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=800&auto=format&fit=crop',
        ],

        overview:
          'Discover three of Rajasthan’s most iconic destinations in one exciting journey. Experience Jaipur’s royal architecture, Jodhpur’s blue-painted streets and Jaisalmer’s golden desert landscapes with a perfect blend of sightseeing, culture and adventure.',

        highlights: [
          'Amber Fort and Hawa Mahal in Jaipur',
          'Mehrangarh Fort and Blue City in Jodhpur',
          'Jaisalmer Golden Fort',
          'Camel safari at Sam Sand Dunes',
          'Traditional Rajasthani cultural evening',
          'Explore historic havelis and colorful markets',
        ],

        inclusions: [
          '5 Nights accommodation in 3/4-Star Deluxe Hotels & Desert Camp',
          'Daily Breakfast & Dinner',
          'Private dedicated AC Sedan/SUV',
          'Camel Safari at Sam Sand Dunes',
          'Cultural Folk Show',
          'All tolls, parking and driver allowances',
        ],

        exclusions: [
          'Flight / Train fares',
          'Monument entrance tickets',
          'Personal expenses',
          'Optional adventure activities',
          'Travel insurance',
        ],

        hotelType: '3/4-Star Deluxe Hotels & Luxury Desert Camp',
        pickupDrop: 'Jaipur Airport / Railway Station',

        itinerary: [
          {
            day: 1,
            title: 'Arrival in Jaipur',
            description:
              'Arrive in Jaipur and check into your hotel. Enjoy an evening visit to a local market and experience the colorful atmosphere of the Pink City.',
            activities: [
              'Airport Pickup',
              'Hotel Check-in',
              'Birla Temple',
              'Johari Bazaar',
              'Local Shopping',
            ],
            meals: 'Dinner',
            stay: 'Jaipur Deluxe Hotel',
          },
          {
            day: 2,
            title: 'Jaipur Royal Heritage',
            description:
              'Explore the grand forts and palaces of Jaipur including Amber Fort, City Palace, Jantar Mantar and Hawa Mahal.',
            activities: [
              'Amber Fort',
              'Jal Mahal',
              'City Palace',
              'Jantar Mantar',
              'Hawa Mahal',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Jaipur Deluxe Hotel',
          },
          {
            day: 3,
            title: 'Jaipur to Jodhpur',
            description:
              'Drive to Jodhpur and explore the famous Clock Tower and old city area after hotel check-in.',
            activities: [
              'Breakfast & Hotel Check-out',
              'Scenic Drive',
              'Jodhpur Arrival',
              'Clock Tower',
              'Blue City Walk',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Jodhpur Deluxe Hotel',
          },
          {
            day: 4,
            title: 'Jodhpur to Jaisalmer',
            description:
              'Visit Mehrangarh Fort and Jaswant Thada before continuing towards the Golden City of Jaisalmer.',
            activities: [
              'Mehrangarh Fort',
              'Jaswant Thada',
              'Thar Desert Drive',
              'Jaisalmer Arrival',
              'Gadisar Lake',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Jaisalmer Heritage Hotel',
          },
          {
            day: 5,
            title: 'Jaisalmer Fort & Desert Experience',
            description:
              'Explore Jaisalmer Fort and its beautiful havelis before heading to Sam Sand Dunes for a camel safari and cultural evening.',
            activities: [
              'Jaisalmer Fort',
              'Patwon Ki Haveli',
              'Salim Singh Haveli',
              'Camel Safari',
              'Desert Sunset',
              'Folk Dance & Bonfire',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Luxury Swiss Desert Camp',
          },
          {
            day: 6,
            title: 'Departure from Jaisalmer',
            description:
              'Enjoy breakfast and a relaxed morning before transfer to Jaisalmer Airport or Railway Station.',
            activities: [
              'Breakfast',
              'Camp Check-out',
              'Jaisalmer Transfer',
              'Airport / Railway Station Drop',
            ],
            meals: 'Breakfast',
            stay: 'End of Tour',
          },
        ],
      },

      {
        id: 'rj-9',
        slug: 'udaipur-chittorgarh-kumbhalgarh-heritage-tour',
        title: 'Udaipur Chittorgarh & Kumbhalgarh Heritage Tour',
        subtitle: 'Royal Mewar history, magnificent forts, lakes and the legendary heritage of Rajasthan',
        location: 'Udaipur, Chittorgarh, Kumbhalgarh',
        duration: '5 Days / 4 Nights',
        price: '₹14,499',
        originalPrice: '₹19,499',
        rating: 4.8,
        reviewsCount: 192,
        category: 'Popular',

        heroImage: '/assets/images/packageimages/jalmahal1.webp',

        gallery: [
          'https://images.unsplash.com/photo-1602643163983-ed0babc39797?q=80&w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800&auto=format&fit=crop',
        ],

        overview:
          'Step into the glorious history of Mewar with a journey through Udaipur, Chittorgarh and Kumbhalgarh. Explore massive hilltop forts, royal palaces, ancient temples and beautiful lakes while discovering the stories of Rajasthan’s legendary rulers.',

        highlights: [
          'Explore Udaipur City Palace',
          'Sunset boat ride on Lake Pichola',
          'Visit the historic Chittorgarh Fort',
          'Discover the massive Kumbhalgarh Fort',
          'Explore Mewar royal heritage',
          'Visit Ranakpur Jain Temple',
        ],

        inclusions: [
          '4 Nights accommodation in 3/4-Star Deluxe Hotels',
          'Daily Breakfast & Dinner',
          'Private dedicated AC Sedan/SUV',
          'Lake Pichola boat ride',
          'Airport / Railway Station transfers',
          'All tolls, parking and driver allowances',
        ],

        exclusions: [
          'Flight / Train fares',
          'Monument entrance tickets',
          'Personal expenses',
          'Guide charges',
          'Travel insurance',
        ],

        hotelType: 'Heritage & 4-Star Deluxe Hotels',
        pickupDrop: 'Udaipur Airport / Railway Station',

        itinerary: [
          {
            day: 1,
            title: 'Arrival in Udaipur',
            description:
              'Arrive in Udaipur and check in to your hotel. Enjoy a relaxed evening beside the beautiful Lake Pichola.',
            activities: [
              'Airport Pickup',
              'Hotel Check-in',
              'Gangaur Ghat',
              'Lake Pichola',
              'Evening Leisure',
            ],
            meals: 'Dinner',
            stay: 'Udaipur Lakeside Hotel',
          },
          {
            day: 2,
            title: 'Udaipur City Palace & Lakes',
            description:
              'Explore the royal attractions of Udaipur including City Palace, Jagdish Temple, Saheliyon Ki Bari and Lake Pichola.',
            activities: [
              'City Palace',
              'Jagdish Temple',
              'Saheliyon Ki Bari',
              'Bagore Ki Haveli',
              'Lake Pichola Boat Cruise',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Udaipur Lakeside Hotel',
          },
          {
            day: 3,
            title: 'Udaipur to Chittorgarh',
            description:
              'Drive towards Chittorgarh and explore one of India’s most historic hill forts, known for its Rajput heritage and magnificent monuments.',
            activities: [
              'Breakfast & Hotel Check-out',
              'Scenic Drive',
              'Chittorgarh Fort',
              'Vijay Stambh',
              'Kirti Stambh',
              'Padmini Palace',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Chittorgarh Heritage Hotel',
          },
          {
            day: 4,
            title: 'Chittorgarh to Kumbhalgarh & Udaipur',
            description:
              'Visit the spectacular Kumbhalgarh Fort and continue towards Udaipur through the scenic Aravalli hills.',
            activities: [
              'Breakfast & Hotel Check-out',
              'Kumbhalgarh Fort',
              'Fort Wall View',
              'Ranakpur Jain Temple',
              'Aravalli Scenic Drive',
              'Udaipur Arrival',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Udaipur Deluxe Hotel',
          },
          {
            day: 5,
            title: 'Departure from Udaipur',
            description:
              'Enjoy breakfast and check out before transfer to Udaipur Airport or Railway Station.',
            activities: [
              'Breakfast',
              'Hotel Check-out',
              'Airport Transfer',
              'Departure',
            ],
            meals: 'Breakfast',
            stay: 'End of Tour',
          },
        ],
      },

      {
        id: 'rj-10',
        slug: 'royal-rajasthan-luxury-honeymoon',
        title: 'Royal Rajasthan Luxury Honeymoon',
        subtitle: 'Romantic palaces, lakeside evenings, desert sunsets and unforgettable royal experiences',
        location: 'Jaipur, Jodhpur, Jaisalmer, Udaipur',
        duration: '8 Days / 7 Nights',
        price: '₹28,999',
        originalPrice: '₹37,999',
        rating: 4.9,
        reviewsCount: 264,
        category: 'Honeymoon',

        heroImage: '/assets/images/packageimages/Honeymoon_in_Rajasthand.webp',

        gallery: [
          'https://images.unsplash.com/photo-1602643163983-ed0babc39797?q=80&w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=800&auto=format&fit=crop',
        ],

        overview:
          'Celebrate your special journey with a luxurious Rajasthan honeymoon covering the royal cities of Jaipur, Jodhpur, Jaisalmer and Udaipur. Enjoy romantic palace experiences, desert sunsets, private moments beside the lakes and unforgettable cultural experiences.',

        highlights: [
          'Romantic Jaipur palace and fort sightseeing',
          'Couple sunset experience in the Thar Desert',
          'Luxury desert camp stay',
          'Explore the blue city of Jodhpur',
          'Romantic Lake Pichola boat cruise',
          'Udaipur palace and lakeside experiences',
          'Special candlelight dinner experience',
        ],

        inclusions: [
          '7 Nights accommodation in 4-Star / Heritage Hotels & Luxury Desert Camp',
          'Daily Breakfast & Dinner',
          'Private dedicated AC Sedan/SUV',
          'Lake Pichola boat ride',
          'Camel Safari in Jaisalmer',
          'Romantic candlelight dinner',
          'Cultural Folk Show',
          'All tolls, parking and driver allowances',
        ],

        exclusions: [
          'Flight / Train fares',
          'Monument entrance tickets',
          'Personal expenses',
          'Optional activities',
          'Travel insurance',
        ],

        hotelType: 'Luxury Heritage Hotels, Palace Hotels & Desert Camp',
        pickupDrop: 'Jaipur Airport / Railway Station',

        itinerary: [
          {
            day: 1,
            title: 'Arrival in Jaipur - Romantic Welcome',
            description:
              'Arrive in Jaipur and enjoy a comfortable transfer to your luxury hotel. Spend the evening relaxing and experiencing the royal atmosphere of the Pink City.',
            activities: [
              'Airport Pickup',
              'Luxury Hotel Check-in',
              'Welcome Experience',
              'Birla Temple',
              'Romantic Evening',
            ],
            meals: 'Dinner',
            stay: 'Jaipur Luxury Heritage Hotel',
          },
          {
            day: 2,
            title: 'Jaipur Royal Romance',
            description:
              'Explore Jaipur’s magnificent forts and palaces including Amber Fort, Jal Mahal, City Palace and Hawa Mahal.',
            activities: [
              'Amber Fort',
              'Jal Mahal',
              'City Palace',
              'Hawa Mahal',
              'Local Market',
              'Romantic Dinner',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Jaipur Luxury Heritage Hotel',
          },
          {
            day: 3,
            title: 'Jaipur to Jodhpur - Blue City',
            description:
              'Drive towards Jodhpur and check into your luxury hotel. Spend the evening exploring the charming blue lanes and Clock Tower market.',
            activities: [
              'Breakfast & Hotel Check-out',
              'Scenic Drive',
              'Jodhpur Arrival',
              'Clock Tower',
              'Blue City Walk',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Jodhpur Luxury Hotel',
          },
          {
            day: 4,
            title: 'Jodhpur to Jaisalmer Desert Romance',
            description:
              'Explore Mehrangarh Fort before driving towards Jaisalmer. In the evening enjoy a camel safari and romantic sunset experience in the Thar Desert.',
            activities: [
              'Mehrangarh Fort',
              'Jaswant Thada',
              'Thar Desert Drive',
              'Camel Safari',
              'Desert Sunset',
              'Folk Dance & Bonfire',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Luxury Swiss Desert Camp',
          },
          {
            day: 5,
            title: 'Jaisalmer Golden City',
            description:
              'Explore the Golden Fort and beautifully carved havelis before enjoying a relaxed evening in the historic city.',
            activities: [
              'Jaisalmer Fort',
              'Patwon Ki Haveli',
              'Salim Singh Haveli',
              'Gadisar Lake',
              'Golden City Market',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Jaisalmer Luxury Heritage Hotel',
          },
          {
            day: 6,
            title: 'Jaisalmer to Udaipur',
            description:
              'Travel towards the romantic City of Lakes. Check into your hotel and enjoy an evening beside Lake Pichola.',
            activities: [
              'Breakfast & Hotel Check-out',
              'Scenic Rajasthan Drive',
              'Udaipur Arrival',
              'Hotel Check-in',
              'Lake Pichola Evening',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Udaipur Luxury Lakeside Hotel',
          },
          {
            day: 7,
            title: 'Udaipur Romantic Experience',
            description:
              'Explore the royal City Palace and beautiful gardens before enjoying a romantic sunset boat cruise on Lake Pichola.',
            activities: [
              'City Palace',
              'Jagdish Temple',
              'Saheliyon Ki Bari',
              'Bagore Ki Haveli',
              'Lake Pichola Sunset Cruise',
              'Candlelight Dinner',
            ],
            meals: 'Breakfast & Dinner',
            stay: 'Udaipur Luxury Lakeside Hotel',
          },
          {
            day: 8,
            title: 'Departure from Udaipur',
            description:
              'Enjoy your final breakfast in Rajasthan before checking out and transferring to Udaipur Airport or Railway Station.',
            activities: [
              'Breakfast',
              'Hotel Check-out',
              'Airport Transfer',
              'Departure',
            ],
            meals: 'Breakfast',
            stay: 'End of Tour',
          },
        ],
      },
    ],
  },

  'kerala': {
    id: 'dest-kerala',
    slug: 'kerala',
    name: 'Kerala God\'s Own Country',
    type: 'national',
    region: 'South India',
    tagline: 'Alleppey backwaters houseboats, Munnar mist-covered tea gardens & Kovalam beaches.',
    description: 'Immerse in emerald backwaters, Ayurvedic wellness, rolling green tea plantations, spice gardens, and Arabian Sea sunsets in Kerala.',
    heroImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1600&auto=format&fit=crop',
    bestTime: 'September to March',
    packagesCount: 3,
    packages: [
      {
        id: 'kl-1',
        slug: 'kerala-backwaters-tea-plantations',
        title: 'Kerala Enchanting Hills & Backwaters Tour',
        subtitle: 'Munnar tea estates, Thekkady wildlife & Alleppey luxury houseboat cruise',
        location: 'Cochin, Munnar, Thekkady, Alleppey',
        duration: '5 Days / 4 Nights',
        price: '₹16,499',
        originalPrice: '₹21,999',
        rating: 4.9,
        reviewsCount: 395,
        category: 'Honeymoon',
        heroImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200&auto=format&fit=crop',
        gallery: [
          'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop',
        ],
        overview: 'Discover why Kerala is God\'s Own Country. Breathe fresh mountain air among the rolling tea estates of Munnar, explore aromatic spice plantations and Periyar wildlife in Thekkady, and drift peacefully through the backwaters on a private houseboat.',
        highlights: [
          '1 Night Private Luxury Houseboat with all meals in Alleppey backwaters',
          'Munnar Tea Museum, Mattupetty Dam & Eravikulam National Park (Nilgiri Tahr)',
          'Periyar Tiger Reserve boat safari and spice garden walk in Thekkady',
          'Cochin Fort, Chinese Fishing Nets & Dutch Palace',
        ],
        inclusions: [
          '3 Nights 3/4-Star Deluxe Resorts + 1 Night Private Houseboat',
          'All Meals on Houseboat + Daily Breakfast & Dinner at resorts',
          'Private sanitized AC cab with driver',
          'Toll taxes, parking & fuel charges',
        ],
        exclusions: ['Air / Train tickets', 'Safari tickets in Periyar', 'Ayurvedic massage charges'],
        hotelType: 'Tea Estate Resorts & Luxury Private Houseboats',
        pickupDrop: 'Cochin International Airport (COK) / Railway Station',
        itinerary: [
          {
            day: 1,
            title: 'Arrival in Cochin & Drive to Munnar',
            description: 'Arrive at Cochin Airport. Drive through the scenic Western Ghats passing Cheeyappara and Valara waterfalls. Check into your tea garden resort in Munnar.',
            activities: ['Cheeyappara Falls', 'Valara Falls', 'Munnar Check-in'],
            meals: 'Dinner',
            stay: 'Munnar Tea Resort',
          },
          {
            day: 2,
            title: 'Munnar Tea Gardens & Eravikulam National Park',
            description: 'Visit Eravikulam National Park, home to the endangered Nilgiri Tahr. Explore Mattupetty Dam, Echo Point, Kundala Lake, and the Tea Museum.',
            activities: ['Eravikulam Park', 'Mattupetty Dam', 'Echo Point', 'Tea Tasting'],
            meals: 'Breakfast & Dinner',
            stay: 'Munnar Tea Resort',
          },
          {
            day: 3,
            title: 'Munnar to Thekkady Spice Plantation & Wildlife',
            description: 'Drive to Thekkady. Tour organic spice plantations (cardamom, pepper, cinnamon) and enjoy boat safari on Periyar Lake inside the wildlife sanctuary.',
            activities: ['Spice Plantation Walk', 'Periyar Boat Safari', 'Kathakali Dance Show'],
            meals: 'Breakfast & Dinner',
            stay: 'Thekkady Deluxe Resort',
          },
          {
            day: 4,
            title: 'Thekkady to Alleppey Luxury Houseboat Cruise',
            description: 'Board your private luxury houseboat in Alleppey. Cruise along tranquil canals, paddy fields, and coconut groves while savoring authentic Kerala cuisine prepared on board.',
            activities: ['Houseboat Check-in', 'Backwater Cruise', 'Kerala Feast Dinner'],
            meals: 'Breakfast, Lunch & Dinner',
            stay: 'Private Deluxe Houseboat, Alleppey',
          },
          {
            day: 5,
            title: 'Alleppey to Cochin Departure',
            description: 'Breakfast on the backwaters, check out and drive to Cochin for your flight home.',
            activities: ['Houseboat Check-out', 'Cochin Airport Drop'],
            meals: 'Breakfast',
            stay: 'End of Tour',
          },
        ],
      },
    ],
  },

  'goa': {
    id: 'dest-goa',
    slug: 'goa',
    name: 'Goa Golden Beaches & Nightlife',
    type: 'national',
    region: 'South India',
    tagline: 'Sun-kissed beaches, Portuguese heritage churches, luxury cruises & water sports.',
    description: 'India\'s favorite beach destination with swaying palm trees, beach shacks, Portuguese architecture in Old Goa, luxury cruises on Mandovi river, and vibrant nightlife.',
    heroImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1600&auto=format&fit=crop',
    bestTime: 'October to May',
    packagesCount: 2,
    packages: [
      {
        id: 'goa-1',
        slug: 'goa-beach-delight-cruise',
        title: 'Goa Beach Paradise & Sunset River Cruise',
        subtitle: 'North Goa beaches, water sports, South Goa churches & Mandovi sunset cruise',
        location: 'Calangute, Baga, Old Goa, Panaji, Dudhsagar',
        duration: '4 Days / 3 Nights',
        price: '₹11,999',
        originalPrice: '₹15,499',
        rating: 4.8,
        reviewsCount: 290,
        category: 'Popular',
        heroImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop',
        gallery: ['https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop'],
        overview: 'Experience the ultimate beach escape in Goa. Relax on golden sands, try thrilling water sports at Baga Beach, visit 16th-century Portuguese churches in Old Goa, and enjoy a sunset cruise on the Mandovi River with live DJ and Goan folk dance.',
        highlights: [
          'North Goa beach tour: Baga, Calangute, Anjuna & Fort Aguada',
          'South Goa heritage: Basilica of Bom Jesus & Se Cathedral',
          'Mandovi River Sunset Cruise with live music & DJ',
          'Water sports: Parasailing, Jet Ski & Banana ride options',
        ],
        inclusions: [
          '3 Nights stay in 3/4-Star Beach Resort with swimming pool',
          'Daily Breakfast & Dinner',
          'Private vehicle for full-day North & South Goa sightseeing',
          'Complimentary Mandovi River Cruise tickets',
          'Airport / Thivim / Madgaon railway transfers',
        ],
        exclusions: ['Airfare / Train tickets', 'Water sports activity tickets', 'Personal beverages'],
        hotelType: '3/4-Star Beach Resort with Pool',
        pickupDrop: 'Goa Airport (GOI / GOX) or Railway Station',
        itinerary: [
          {
            day: 1,
            title: 'Arrival in Goa & Beach Relaxation',
            description: 'Arrive at Goa Airport. Transfer to your resort. Relax by the pool or take an evening stroll on the beach.',
            activities: ['Airport Transfer', 'Resort Check-in', 'Sunset Beach Walk'],
            meals: 'Dinner',
            stay: 'Goa Beach Resort',
          },
          {
            day: 2,
            title: 'North Goa Beaches & Fort Aguada',
            description: 'Explore the 17th-century Portuguese Fort Aguada, followed by visits to popular North Goa beaches: Calangute, Baga, and Anjuna. Enjoy thrilling water sports.',
            activities: ['Fort Aguada', 'Baga Beach Water Sports', 'Anjuna Beach Sunset'],
            meals: 'Breakfast & Dinner',
            stay: 'Goa Beach Resort',
          },
          {
            day: 3,
            title: 'South Goa Heritage & Mandovi Sunset Cruise',
            description: 'Visit the UNESCO heritage churches in Old Goa: Basilica of Bom Jesus and Se Cathedral. Explore Miramar Beach and board the 1-hour sunset cruise on Mandovi River.',
            activities: ['Basilica of Bom Jesus', 'Miramar Beach', 'Mandovi Sunset Cruise'],
            meals: 'Breakfast & Dinner',
            stay: 'Goa Beach Resort',
          },
          {
            day: 4,
            title: 'Departure from Goa',
            description: 'Breakfast, check out, and transfer to the airport or railway station.',
            activities: ['Hotel Check-out', 'Airport Drop'],
            meals: 'Breakfast',
            stay: 'End of Tour',
          },
        ],
      },
    ],
  },

  'andaman': {
    id: 'dest-andaman',
    slug: 'andaman',
    name: 'Andaman Tropical Islands',
    type: 'national',
    region: 'South India',
    tagline: 'Radhanagar Beach, turquoise lagoons, scuba diving & Cellular Jail history.',
    description: 'Emerald islands surrounded by turquoise waters, coral reefs, bioluminescence beaches, and India\'s historic Cellular Jail.',
    heroImage: 'https://images.unsplash.com/photo-1589136777351-fdc9c9cab193?q=80&w=1600&auto=format&fit=crop',
    bestTime: 'October to May',
    packagesCount: 2,
    packages: [
      {
        id: 'ad-1',
        slug: 'andaman-tropical-paradise',
        title: 'Andaman Exotic Island Escapade',
        subtitle: 'Port Blair, Havelock Island, Radhanagar Beach & Neil Island corals',
        location: 'Port Blair, Havelock Island, Neil Island',
        duration: '6 Days / 5 Nights',
        price: '₹24,999',
        originalPrice: '₹31,999',
        rating: 5.0,
        reviewsCount: 240,
        category: 'Honeymoon',
        heroImage: 'https://images.unsplash.com/photo-1589136777351-fdc9c9cab193?q=80&w=1200&auto=format&fit=crop',
        gallery: ['https://images.unsplash.com/photo-1589136777351-fdc9c9cab193?q=80&w=800&auto=format&fit=crop'],
        overview: 'Discover Asia\'s best beach! Experience Havelock Island\'s Radhanagar Beach (ranked among top 10 beaches in the world), go snorkeling at Elephant Beach, explore natural coral bridges in Neil Island, and witness the moving Sound & Light show at Cellular Jail.',
        highlights: [
          'Radhanagar Beach sunset in Havelock Island',
          'High-speed premium Catamaran (Makruzz/Nautika) cruise tickets',
          'Cellular Jail Light & Sound Historic Show in Port Blair',
          'Elephant Beach water sports & coral reef snorkeling',
          'Natural Rock Bridge & Laxmanpur Beach in Neil Island',
        ],
        inclusions: [
          '5 Nights 3/4-Star Beach Resorts',
          'Daily Breakfast & Dinner',
          'Private AC vehicle for all transfers in Port Blair, Havelock & Neil',
          'Premium inter-island high-speed ferry tickets',
          'All port entry permits and assistance',
        ],
        exclusions: ['Airfare to Port Blair', 'Scuba diving / Sea walk charges', 'Personal expenses'],
        hotelType: 'Luxury Beachfront Cottages & Resorts',
        pickupDrop: 'Veer Savarkar International Airport, Port Blair (IXZ)',
        itinerary: [
          {
            day: 1,
            title: 'Arrival in Port Blair & Cellular Jail Light & Sound',
            description: 'Arrive at Port Blair. Transfer to hotel. In the afternoon, visit the historic Cellular Jail and attend the emotional Sound & Light show.',
            activities: ['Airport Meet & Greet', 'Cellular Jail Tour', 'Sound & Light Show'],
            meals: 'Dinner',
            stay: 'Port Blair Deluxe Hotel',
          },
          {
            day: 2,
            title: 'Port Blair to Havelock Island & Radhanagar Beach',
            description: 'Board the high-speed Catamaran cruise to Havelock Island. Check into your beach resort and spend the afternoon at Radhanagar Beach (Asia\'s #1 beach).',
            activities: ['Catamaran Ferry Cruise', 'Havelock Resort Check-in', 'Radhanagar Sunset'],
            meals: 'Breakfast & Dinner',
            stay: 'Havelock Beach Resort',
          },
          {
            day: 3,
            title: 'Elephant Beach Coral Snorkeling & Water Sports',
            description: 'Take a speed boat to Elephant Beach. Marvel at vibrant coral reefs and enjoy water activities like snorkeling, sea walk, or jet ski.',
            activities: ['Elephant Beach Boat Ride', 'Coral Snorkeling', 'Beach Volleyball'],
            meals: 'Breakfast & Dinner',
            stay: 'Havelock Beach Resort',
          },
          {
            day: 4,
            title: 'Havelock to Neil Island - Coral Paradise',
            description: 'Cruise to Neil Island. Visit the Natural Rock Bridge, Bharatpur Beach for shallow water coral viewing, and Laxmanpur Beach for sunset.',
            activities: ['Neil Island Cruise', 'Natural Rock Formation', 'Laxmanpur Sunset'],
            meals: 'Breakfast & Dinner',
            stay: 'Neil Island Resort',
          },
          {
            day: 5,
            title: 'Neil Island to Port Blair Return & Souvenirs',
            description: 'Return to Port Blair via ferry. Visit Sagarika Emporium for pearl and sea-shell souvenirs.',
            activities: ['Return Ferry to Port Blair', 'Handicraft Shopping'],
            meals: 'Breakfast & Dinner',
            stay: 'Port Blair Deluxe Hotel',
          },
          {
            day: 6,
            title: 'Departure from Andaman',
            description: 'Breakfast and transfer to Port Blair Airport for your flight.',
            activities: ['Airport Drop'],
            meals: 'Breakfast',
            stay: 'End of Tour',
          },
        ],
      },
    ],
  },

  // ────────────────── INTERNATIONAL DESTINATIONS ──────────────────
  'dubai': {
    id: 'dest-dubai',
    slug: 'dubai',
    name: 'Dubai & Abu Dhabi Luxury Extravaganza',
    type: 'international',
    region: 'Middle East',
    tagline: 'Burj Khalifa top views, desert safari dune bashing, Ferrari World & luxury marina yachts.',
    description: 'The futuristic capital of luxury, iconic skyscrapers, indoor snow parks, gold souks, desert safaris, and grand Arabian hospitality.',
    heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop',
    bestTime: 'October to April',
    packagesCount: 3,
    packages: [
      {
        id: 'db-1',
        slug: 'dubai-luxury-glamour-escape',
        title: 'Dubai Glamour & Desert Adventure Holiday',
        subtitle: 'Burj Khalifa 124th Floor, Desert Safari BBQ, Marina Dhow Cruise & Abu Dhabi',
        location: 'Dubai, Abu Dhabi, Palm Jumeirah',
        duration: '5 Days / 4 Nights',
        price: '₹45,999',
        originalPrice: '₹55,999',
        rating: 5.0,
        reviewsCount: 480,
        category: 'Luxury',
        heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop',
        gallery: ['https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop'],
        overview: 'Experience the magic of Dubai! Stand at the top of the world on Burj Khalifa 124th floor, race over golden dunes in a 4x4 Land Cruiser with a desert BBQ & belly dance show, cruise along Dubai Marina on a luxury glass boat, and visit the breathtaking Sheikh Zayed Grand Mosque in Abu Dhabi.',
        highlights: [
          'Burj Khalifa 124th & 125th Floor Observation Deck Tickets',
          '4x4 Desert Safari with Dune Bashing, Camel Ride, Tanoura Show & BBQ Dinner',
          'Dubai Marina Luxury Dhow Cruise with international 5-star buffet dinner',
          'Abu Dhabi Day Tour: Sheikh Zayed Grand Mosque & BAPS Hindu Mandir',
          'Dubai City Tour: Dubai Frame, Museum of the Future & Gold Souk',
        ],
        inclusions: [
          '4 Nights stay in 4-Star Deluxe Dubai City Hotel',
          'Daily Buffet Breakfast + 2 Gourmet Dinners (Cruise & Safari)',
          'All sightseeing transfers in luxury AC vehicle',
          'UAE Tourist Visa & Travel Insurance included',
          '24/7 on-ground UAE Zoyo Trip Concierge assistance',
        ],
        exclusions: ['International flight tickets', 'Tourism Dirham fee (payable directly at hotel)', 'Personal expenses'],
        hotelType: '4-Star / 5-Star City Center Hotels',
        pickupDrop: 'Dubai International Airport (DXB)',
        itinerary: [
          {
            day: 1,
            title: 'Arrival in Dubai & Marina Dhow Cruise Dinner',
            description: 'Arrive at Dubai Airport. Transfer to your 4-star hotel. Evening luxury Dhow cruise along the dazzling Dubai Marina skyline with international buffet dinner.',
            activities: ['Airport VIP Transfer', 'Hotel Check-in', 'Dubai Marina Dhow Cruise'],
            meals: 'Dinner',
            stay: '4-Star Dubai Hotel',
          },
          {
            day: 2,
            title: 'Dubai City Tour & Burj Khalifa 124th Floor',
            description: 'Morning city tour covering Dubai Frame, Palm Jumeirah, and Burj Al Arab. Evening visit to Dubai Mall, Dubai Fountain Show, and ascent to Burj Khalifa 124th Floor.',
            activities: ['Palm Jumeirah Monorail', 'Burj Khalifa Observation Deck', 'Dubai Fountain Show'],
            meals: 'Breakfast',
            stay: '4-Star Dubai Hotel',
          },
          {
            day: 3,
            title: 'Gold Souk & Thrilling 4x4 Desert Safari',
            description: 'Morning free for shopping at the Gold and Spice Souks. Afternoon 4x4 Land Cruiser pickup for high-dune bashing, sandboarding, camel ride, Tanoura & belly dancing with royal BBQ dinner.',
            activities: ['Gold Souk Shopping', '4x4 Dune Bashing', 'Desert BBQ Feast & Live Shows'],
            meals: 'Breakfast & BBQ Dinner',
            stay: '4-Star Dubai Hotel',
          },
          {
            day: 4,
            title: 'Abu Dhabi Grand Mosque & City Tour',
            description: 'Full day excursion to Abu Dhabi. Marvel at the architectural masterpiece Sheikh Zayed Grand Mosque, drive along the Corniche, and photo stop at Ferrari World.',
            activities: ['Sheikh Zayed Mosque Tour', 'Emirates Palace View', 'Ferrari World Photo Stop'],
            meals: 'Breakfast',
            stay: '4-Star Dubai Hotel',
          },
          {
            day: 5,
            title: 'Departure from Dubai',
            description: 'Breakfast, hotel check out, and transfer to Dubai Airport for flight back home.',
            activities: ['Hotel Check-out', 'Airport Transfer'],
            meals: 'Breakfast',
            stay: 'End of Tour',
          },
        ],
      },
    ],
  },

  'bali': {
    id: 'dest-bali',
    slug: 'bali',
    name: 'Bali Island of the Gods',
    type: 'international',
    region: 'Southeast Asia',
    tagline: 'Ubud rice terraces, Uluwatu cliff temples, Nusa Penida island & private pool villas.',
    description: 'A tropical dreamland of volcanic mountains, iconic cliffside temples, private pool villas, world-class beach clubs, and serene spiritual culture.',
    heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1600&auto=format&fit=crop',
    bestTime: 'April to October',
    packagesCount: 3,
    packages: [
      {
        id: 'bl-1',
        slug: 'bali-romantic-pool-villa-escape',
        title: 'Bali Romantic Tropical Escape & Nusa Penida',
        subtitle: 'Ubud Bali Swing, Kintamani Volcano, Uluwatu Kecak Dance & Nusa Penida West Tour',
        location: 'Ubud, Seminyak, Nusa Penida, Kuta',
        duration: '6 Days / 5 Nights',
        price: '₹28,499',
        originalPrice: '₹36,999',
        rating: 4.9,
        reviewsCount: 420,
        category: 'Honeymoon',
        heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop',
        gallery: ['https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop'],
        overview: 'Experience the magic of Bali. Swing over Ubud\'s lush jungle canopies, take photos at Kelingking "T-Rex" Beach in Nusa Penida, witness the fiery Kecak dance on Uluwatu cliffs at sunset, and unwind in a luxury private pool villa.',
        highlights: [
          '1 Night Private Pool Villa with Floating Breakfast in Seminyak / Ubud',
          'Full Day Nusa Penida Speedboat Tour: Kelingking Beach, Broken Beach & Angel Billabong',
          'Ubud Jungle Swing & Tegalalang Rice Terrace photo shoot',
          'Uluwatu Cliff Temple with Sunset Kecak Fire Dance Show',
          'Kintamani Mount Batur volcano viewpoint & coffee plantation tour',
        ],
        inclusions: [
          '3 Nights 4-Star Resort + 2 Nights Private Luxury Pool Villa',
          'Daily Breakfast (including 1 romantic Floating Breakfast)',
          'All private sightseeing and airport transfers in dedicated AC car with English-speaking guide',
          'Fast boat return tickets to Nusa Penida Island',
          'All temple entrance fees and swing tickets',
        ],
        exclusions: ['International Flights', 'Visa on Arrival ($35 USD at airport)', 'Personal expenses'],
        hotelType: '4-Star Beach Resort & Luxury Private Pool Villa',
        pickupDrop: 'Ngurah Rai International Airport, Denpasar (DPS)',
        itinerary: [
          {
            day: 1,
            title: 'Arrival in Bali & Transfer to Ubud',
            description: 'Arrive at Denpasar Airport. Warm flower garland welcome and transfer to your tropical Ubud resort.',
            activities: ['Airport Meet & Greet', 'Flower Garland Welcome', 'Ubud Check-in'],
            meals: 'Dinner',
            stay: 'Ubud Tropical Resort',
          },
          {
            day: 2,
            title: 'Ubud Bali Swing, Rice Terraces & Kintamani Volcano',
            description: 'Experience the famous Bali Swing over jungle valleys. Visit Tegalalang Rice Terraces, Luwak Coffee plantation, and enjoy lunch overlooking Mount Batur volcano.',
            activities: ['Bali Jungle Swing', 'Tegalalang Terraces', 'Kintamani Volcano View'],
            meals: 'Breakfast & Dinner',
            stay: 'Ubud Tropical Resort',
          },
          {
            day: 3,
            title: 'Full Day Nusa Penida Island Expedition',
            description: 'Take a high-speed boat to Nusa Penida. Visit the world-famous Kelingking T-Rex Beach, Angel\'s Billabong natural infinity pool, and Broken Beach.',
            activities: ['Fast Boat to Nusa Penida', 'Kelingking Beach View', 'Angel\'s Billabong'],
            meals: 'Breakfast & Lunch',
            stay: 'Seminyak Private Pool Villa',
          },
          {
            day: 4,
            title: 'Watersports & Uluwatu Sunset Kecak Dance',
            description: 'Enjoy Banana boat and Jet ski at Tanjung Benoa beach. In the evening, visit the dramatic clifftop Uluwatu Temple and watch the Kecak Fire Dance.',
            activities: ['Tanjung Benoa Watersports', 'Uluwatu Cliff Temple', 'Kecak Fire Dance'],
            meals: 'Breakfast & Dinner',
            stay: 'Seminyak Private Pool Villa',
          },
          {
            day: 5,
            title: 'Leisure Day & Balinese Massage in Villa',
            description: 'Enjoy your floating breakfast in your private villa pool. Afternoon free for Seminyak beach club hopping or shopping at Krisna Oleh Oleh.',
            activities: ['Floating Breakfast', 'Balinese Spa Massage', 'Beach Club Sunset'],
            meals: 'Breakfast',
            stay: 'Seminyak Private Pool Villa',
          },
          {
            day: 6,
            title: 'Departure from Bali',
            description: 'Breakfast, check out, and transfer to Denpasar Airport for your journey home.',
            activities: ['Airport Transfer'],
            meals: 'Breakfast',
            stay: 'End of Tour',
          },
        ],
      },
    ],
  },

  'singapore': {
    id: 'dest-singapore',
    slug: 'singapore',
    name: 'Singapore The Lion City',
    type: 'international',
    region: 'Southeast Asia',
    tagline: 'Gardens by the Bay, Universal Studios Sentosa, Marina Bay Sands & Night Safari.',
    description: 'A global metropolis where nature and futuristic technology blend seamlessly. Marvel at Supertree Groves, world-class theme parks, and vibrant culinary culture.',
    heroImage: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1600&auto=format&fit=crop',
    bestTime: 'All year round',
    packagesCount: 2,
    packages: [
      {
        id: 'sg-1',
        slug: 'singapore-glitz-universal-studios',
        title: 'Singapore Futuristic Highlights & Universal Studios',
        subtitle: 'Gardens by the Bay, Sentosa Island, Universal Studios & Night Safari',
        location: 'Marina Bay, Sentosa, Orchard Road',
        duration: '5 Days / 4 Nights',
        price: '₹35,999',
        originalPrice: '₹44,999',
        rating: 4.9,
        reviewsCount: 350,
        category: 'Family',
        heroImage: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1200&auto=format&fit=crop',
        gallery: ['https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=800&auto=format&fit=crop'],
        overview: 'Experience Singapore\'s world-famous attractions! Walk inside the Cloud Forest dome, watch the Supertree Light Show at Gardens by the Bay, scream on adrenaline-pumping rollercoasters at Universal Studios, and meet nocturnal wildlife at Night Safari.',
        highlights: [
          'Universal Studios Singapore Full Day Unlimited Pass',
          'Gardens by the Bay (Flower Dome + Cloud Forest + Avatar experience)',
          'Sentosa Island cable car ride & Wings of Time laser fountain show',
          'Night Safari Tram Ride with live creature presentation',
          'Half Day Singapore City Tour: Merlion Park, Chinatown & Little India',
        ],
        inclusions: [
          '4 Nights 4-Star Hotel accommodation in central Singapore',
          'Daily Buffet Breakfast',
          'All entry tickets for Universal Studios, Gardens by the Bay, Night Safari & Sentosa',
          'Private/SIC transfers in luxury AC coaches',
        ],
        exclusions: ['Airfare', 'Singapore Visa fees', 'Personal meals outside itinerary'],
        hotelType: '4-Star City Hotels',
        pickupDrop: 'Singapore Changi Airport (SIN)',
        itinerary: [
          {
            day: 1,
            title: 'Arrival at Changi Airport & Night Safari',
            description: 'Arrive at the world-famous Changi Airport. Transfer to hotel. In the evening, visit the world\'s first nocturnal zoo: Singapore Night Safari.',
            activities: ['Changi Jewel View', 'Hotel Check-in', 'Night Safari Tram Ride'],
            meals: 'Dinner',
            stay: '4-Star Singapore Hotel',
          },
          {
            day: 2,
            title: 'Singapore City Tour & Gardens by the Bay',
            description: 'Tour Merlion Park, Padang, and Chinatown. Afternoon at Gardens by the Bay exploring Flower Dome and Cloud Forest with its indoor waterfall.',
            activities: ['Merlion Park Photos', 'Flower Dome & Cloud Forest', 'Supertree Light Show'],
            meals: 'Breakfast',
            stay: '4-Star Singapore Hotel',
          },
          {
            day: 3,
            title: 'Full Day Universal Studios Singapore',
            description: 'Spend an action-packed day at Universal Studios on Sentosa Island with 24 rides across 7 themed zones like Sci-Fi City, Ancient Egypt, and Far Far Away.',
            activities: ['Transformers 3D Ride', 'Battlestar Galactica', 'Mummy Coaster'],
            meals: 'Breakfast',
            stay: '4-Star Singapore Hotel',
          },
          {
            day: 4,
            title: 'Sentosa Island Cable Car & Wings of Time',
            description: 'Take the scenic Cable Car to Sentosa. Visit Madame Tussauds, S.E.A. Aquarium, and watch the spectacular Wings of Time night show by the beach.',
            activities: ['Scenic Cable Car', 'S.E.A. Aquarium', 'Wings of Time Laser Show'],
            meals: 'Breakfast',
            stay: '4-Star Singapore Hotel',
          },
          {
            day: 5,
            title: 'Departure via Jewel Changi',
            description: 'Breakfast, check out, visit the indoor Rain Vortex waterfall at Jewel Changi, and board your flight home.',
            activities: ['Jewel Changi Rain Vortex', 'Airport Drop'],
            meals: 'Breakfast',
            stay: 'End of Tour',
          },
        ],
      },
    ],
  },

  'thailand': {
    id: 'dest-thailand',
    slug: 'thailand',
    name: 'Thailand Land of Smiles',
    type: 'international',
    region: 'Southeast Asia',
    tagline: 'Phuket turquoise beaches, Coral Island speedboats, Bangkok golden temples & Chao Phraya cruise.',
    description: 'Vibrant night markets, floating food stalls, ornate Buddhist temples, emerald island hopping, and warm Thai hospitality.',
    heroImage: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?q=80&w=1600&auto=format&fit=crop',
    bestTime: 'November to April',
    packagesCount: 3,
    packages: [
      {
        id: 'th-1',
        slug: 'thailand-bangkok-pattaya-fun',
        title: 'Thailand Fun & Adventure - Bangkok & Pattaya',
        subtitle: 'Coral Island Speedboat, Alcazar Cabaret Show, Chao Phraya Dinner Cruise & Temple Tour',
        location: 'Bangkok, Pattaya, Coral Island',
        duration: '5 Days / 4 Nights',
        price: '₹22,999',
        originalPrice: '₹29,999',
        rating: 4.8,
        reviewsCount: 460,
        category: 'Popular',
        heroImage: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?q=80&w=1200&auto=format&fit=crop',
        gallery: ['https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?q=80&w=800&auto=format&fit=crop'],
        overview: 'Experience the quintessential Thailand holiday! Speedboat to Coral Island in Pattaya for watersports and pristine beaches, watch the dazzling Alcazar Cabaret Show, cruise down Bangkok\'s Chao Phraya River on a luxury dinner boat, and visit the iconic Golden Buddha Temple.',
        highlights: [
          'Speedboat trip to Coral Island (Koh Larn) with Indian buffet lunch',
          'VIP seats for world-famous Alcazar Cabaret Show in Pattaya',
          'Luxury Chao Phraya River Dinner Cruise in Bangkok with live band',
          'Bangkok Temple Tour: Wat Traimit (Golden Buddha) & Wat Pho',
          'Safari World & Marine Park day trip option',
        ],
        inclusions: [
          '2 Nights 4-Star Pattaya Resort + 2 Nights 4-Star Bangkok Hotel',
          'Daily Buffet Breakfast + 2 Special Dinners',
          'All private/shared transfers in air-conditioned tourist vehicles',
          'Speedboat and entry passes for Coral Island & Alcazar Show',
        ],
        exclusions: ['International flight tickets', 'Thailand Visa on Arrival', 'Personal water sports tickets'],
        hotelType: '4-Star Hotels with Swimming Pool',
        pickupDrop: 'Bangkok Suvarnabhumi Airport (BKK) / Don Mueang (DMK)',
        itinerary: [
          {
            day: 1,
            title: 'Arrival in Bangkok & Drive to Pattaya',
            description: 'Arrive in Bangkok. Meet our representative and drive along the scenic expressway to Pattaya. In the evening, attend the world-renowned Alcazar Cabaret Show.',
            activities: ['Airport Meet & Greet', 'Pattaya Drive', 'Alcazar Show VIP'],
            meals: 'Dinner',
            stay: '4-Star Pattaya Hotel',
          },
          {
            day: 2,
            title: 'Coral Island Speedboat Tour with Lunch',
            description: 'Board a high-speed boat to the turquoise waters of Coral Island. Enjoy parasailing, jet skiing, underwater sea walk, and an Indian buffet lunch.',
            activities: ['Speedboat Ride', 'Coral Island Beach Time', 'Indian Buffet Lunch'],
            meals: 'Breakfast & Lunch',
            stay: '4-Star Pattaya Hotel',
          },
          {
            day: 3,
            title: 'Pattaya to Bangkok & Chao Phraya Dinner Cruise',
            description: 'Drive back to Bangkok. Visit the Gems Gallery. In the evening, board the grand Chao Phraya Princess dinner cruise overlooking illuminated temples.',
            activities: ['Gems Gallery', 'Bangkok Check-in', 'Chao Phraya Cruise Dinner'],
            meals: 'Breakfast & Dinner',
            stay: '4-Star Bangkok Hotel',
          },
          {
            day: 4,
            title: 'Bangkok Golden Buddha & Shopping Day',
            description: 'Visit Wat Traimit with its 5.5-ton solid gold Buddha statue. Afternoon free for shopping at Pratunam Market, Platinum Mall, and MBK Center.',
            activities: ['Golden Buddha Temple Tour', 'Pratunam Shopping Spree'],
            meals: 'Breakfast',
            stay: '4-Star Bangkok Hotel',
          },
          {
            day: 5,
            title: 'Departure from Bangkok',
            description: 'Breakfast, check out, and transfer to Bangkok Airport for flight home.',
            activities: ['Hotel Check-out', 'Airport Drop'],
            meals: 'Breakfast',
            stay: 'End of Tour',
          },
        ],
      },
    ],
  },

  'vietnam': {
    id: 'dest-vietnam',
    slug: 'vietnam',
    name: 'Vietnam Halong Bay & Heritage',
    type: 'international',
    region: 'Southeast Asia',
    tagline: 'Halong Bay luxury cruise, Ba Na Hills Golden Hand Bridge, lantern town of Hoi An.',
    description: 'Emerald limestone karsts, lantern-lit riverside alleys, French colonial architecture, vibrant street food, and the iconic Golden Bridge held by giant stone hands.',
    heroImage: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1600&auto=format&fit=crop',
    bestTime: 'October to April',
    packagesCount: 2,
    packages: [
      {
        id: 'vn-1',
        slug: 'vietnam-hanoi-halong-danang-golden-bridge',
        title: 'Vietnam Highlights - Halong Bay Cruise & Golden Bridge',
        subtitle: 'Overnight Halong Bay Cruise, Hanoi Old Quarter, Da Nang & Ba Na Hills Golden Hand Bridge',
        location: 'Hanoi, Halong Bay, Da Nang, Ba Na Hills, Hoi An',
        duration: '6 Days / 5 Nights',
        price: '₹32,999',
        originalPrice: '₹41,999',
        rating: 4.9,
        reviewsCount: 310,
        category: 'Popular',
        heroImage: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1200&auto=format&fit=crop',
        gallery: ['https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=800&auto=format&fit=crop'],
        overview: 'Experience the magic of Vietnam! Spend an unforgettable night cruising among emerald limestone islands in Halong Bay with kayaking and cooking classes, walk on the famous Golden Bridge held by giant stone hands in Ba Na Hills, and explore the lantern-lit ancient streets of Hoi An.',
        highlights: [
          '1 Night Luxury 5-Star Halong Bay Cruise with all gourmet meals & kayaking',
          'Ba Na Hills cable car ride & walk on the world-famous Golden Bridge',
          'Hoi An Ancient Town lantern boat ride & Japanese Covered Bridge',
          'Hanoi Old Quarter Cyclo Rickshaw ride & Hoan Kiem Lake',
        ],
        inclusions: [
          '4 Nights 4-Star Hotels + 1 Night 5-Star Halong Cruise',
          'Daily Breakfast, 2 Lunches & 3 Dinners',
          'Ba Na Hills cable car tickets and Golden Bridge entry',
          'Private English-speaking tour guide and AC vehicle',
        ],
        exclusions: ['International and domestic flights', 'Vietnam E-Visa', 'Personal expenses'],
        hotelType: '4-Star City Hotels & 5-Star Cruise Ship',
        pickupDrop: 'Hanoi Noi Bai Airport (HAN) / Da Nang Airport (DAD)',
        itinerary: [
          {
            day: 1,
            title: 'Arrival in Hanoi & Old Quarter Cyclo Ride',
            description: 'Arrive in Hanoi. Check in and take a traditional Cyclo rickshaw ride through the 36 guild streets of Hanoi Old Quarter.',
            activities: ['Airport Transfer', 'Cyclo Rickshaw Ride', 'Hoan Kiem Lake'],
            meals: 'Dinner',
            stay: '4-Star Hanoi Hotel',
          },
          {
            day: 2,
            title: 'Hanoi to Halong Bay 5-Star Cruise',
            description: 'Drive to Halong Bay. Board your 5-star luxury cruise ship. Sail past thousand-year-old limestone karsts, explore Sung Sot (Surprise) Cave, and try sunset kayaking.',
            activities: ['Halong Cruise Boarding', 'Sung Sot Cave Hike', 'Sunset Kayaking'],
            meals: 'Breakfast, Lunch & Dinner',
            stay: '5-Star Halong Cruise Cabin',
          },
          {
            day: 3,
            title: 'Halong Bay to Hanoi & Fly to Da Nang',
            description: 'Morning Tai Chi on sundeck, cruise back to harbor, and fly to Da Nang. Check into your beachside resort.',
            activities: ['Morning Tai Chi', 'Da Nang Flight Transfer', 'Dragon Bridge Night View'],
            meals: 'Breakfast & Brunch',
            stay: '4-Star Da Nang Resort',
          },
          {
            day: 4,
            title: 'Ba Na Hills & Iconic Golden Bridge',
            description: 'Ascend Ba Na Hills on the world\'s longest single-wire cable car. Walk on the incredible Golden Hand Bridge, explore French Village, and Fantasy Park.',
            activities: ['Cable Car Ride', 'Golden Hand Bridge Photos', 'French Village'],
            meals: 'Breakfast & Lunch',
            stay: '4-Star Da Nang Resort',
          },
          {
            day: 5,
            title: 'Hoi An Lantern Town & Coconut Forest Boat',
            description: 'Ride a traditional round bamboo basket boat in Cam Thanh coconut forest. In the evening, walk through UNESCO heritage Hoi An with thousand glowing lanterns.',
            activities: ['Bamboo Basket Boat', 'Hoi An Lantern Street', 'Night Market'],
            meals: 'Breakfast & Dinner',
            stay: '4-Star Da Nang Resort',
          },
          {
            day: 6,
            title: 'Departure from Da Nang',
            description: 'Breakfast, check out, and transfer to Da Nang Airport for your flight.',
            activities: ['Airport Drop'],
            meals: 'Breakfast',
            stay: 'End of Tour',
          },
        ],
      },
    ],
  },

  'maldives': {
    id: 'dest-maldives',
    slug: 'maldives',
    name: 'Maldives Tropical Atolls & Overwater Villas',
    type: 'international',
    region: 'South Asia',
    tagline: 'Overwater luxury villas, crystal turquoise lagoons, coral reef snorkeling & speedboat transfers.',
    description: 'The pinnacle of barefoot luxury with pure white sandbars, turquoise lagoons, private ocean villas, and world-class marine life.',
    heroImage: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1600&auto=format&fit=crop',
    bestTime: 'November to April',
    packagesCount: 2,
    packages: [
      {
        id: 'mv-1',
        slug: 'maldives-luxury-water-villa-honeymoon',
        title: 'Maldives Overwater Luxury Villa Romance',
        subtitle: 'Water Villa with Private Pool, All Inclusive Meals, Speedboat Transfer & Sunset Cruise',
        location: 'Malé Atoll, Private Island Resort',
        duration: '4 Days / 3 Nights',
        price: '₹68,999',
        originalPrice: '₹84,999',
        rating: 5.0,
        reviewsCount: 310,
        category: 'Luxury',
        heroImage: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1200&auto=format&fit=crop',
        gallery: ['https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800&auto=format&fit=crop'],
        overview: 'Wake up to the gentle lapping of Indian Ocean waves directly below your private sun deck. Jump straight into the turquoise lagoon from your overwater villa, enjoy all-inclusive gourmet dining, and spot dolphins during a romantic sunset cruise.',
        highlights: [
          '3 Nights in Luxury Overwater Villa with direct lagoon access',
          'All-Inclusive Meal Plan (Breakfast, Lunch, Dinner & Unlimited Drinks)',
          'Roundtrip Speedboat / Seaplane transfer from Malé Airport',
          'Complimentary Snorkeling gear & non-motorized water sports',
          'Sunset Dolphin Cruise on traditional Maldivian Dhoni',
        ],
        inclusions: [
          '3 Nights Overwater Villa accommodation on 4/5-Star Private Island Resort',
          'All-Inclusive Dining (Breakfast, Lunch, Dinner, Snacks & Drinks)',
          'Return Speedboat transfers from Velana Airport',
          'All Maldives Green Taxes and Service Charges included',
        ],
        exclusions: ['International flight tickets', 'Motorized water sports (Scuba/Jet ski)', 'Spa treatments'],
        hotelType: '5-Star Private Island Overwater Villa',
        pickupDrop: 'Velana International Airport, Malé (MLE)',
        itinerary: [
          {
            day: 1,
            title: 'Arrival in Malé & Speedboat to Private Island',
            description: 'Arrive at Malé Airport. Greeted by resort host and transfer via high-speed boat to your private island resort. Check into your Overwater Villa.',
            activities: ['Speedboat Transfer', 'Water Villa Check-in', 'Sunset Cocktails'],
            meals: 'Dinner',
            stay: '5-Star Overwater Villa',
          },
          {
            day: 2,
            title: 'House Reef Snorkeling & Coral Exploration',
            description: 'Step down into the crystal-clear lagoon from your villa sundeck. Snorkel with colorful reef fish, sea turtles, and baby blacktip reef sharks.',
            activities: ['Lagoon Swimming', 'Coral Reef Snorkeling', 'Gourmet Buffet Lunch'],
            meals: 'All Inclusive',
            stay: '5-Star Overwater Villa',
          },
          {
            day: 3,
            title: 'Sunset Dolphin Cruise & Candlelight Dinner',
            description: 'Spend your morning relaxing on white sandy beaches. In the evening, embark on a traditional Dhoni cruise to spot spinner dolphins leaping at sunset.',
            activities: ['Dolphin Sunset Cruise', 'Beach Walk', 'Candlelight Beach Dinner'],
            meals: 'All Inclusive',
            stay: '5-Star Overwater Villa',
          },
          {
            day: 4,
            title: 'Departure from Paradise',
            description: 'Enjoy a lavish champagne breakfast over the water. Check out and take the speedboat back to Malé Airport for your flight.',
            activities: ['Speedboat to Airport'],
            meals: 'Breakfast',
            stay: 'End of Tour',
          },
        ],
      },
    ],
  },
};
