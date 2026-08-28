'use client';

import React from 'react';
import { allDestinations, TourPackage } from '@/data/allDestinations';
import { internationalDestinations } from '@/data/internationalPackages';
import PackageDetailView from '@/components/PackageDetailView';

export default function InternationalPackageDetailClient({
  params,
}: {
  params: { slug: string; packageSlug: string };
}) {
  const destSlug = params.slug.toLowerCase();
  const pkgSlug = params.packageSlug.toLowerCase();

  const dest = internationalDestinations[destSlug] || allDestinations[destSlug];
  let pkg: TourPackage | undefined = dest?.packages.find((p) => p.slug === pkgSlug);

  // Generic fallback if dynamically generated
  if (!pkg) {
    const formattedTitle = pkgSlug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
    pkg = {
      id: `pkg-${pkgSlug}`,
      slug: pkgSlug,
      title: formattedTitle,
      subtitle: `Luxury international tour with 4/5-star hotel stays, sightseeing transfers and visa assistance`,
      location: dest?.name || 'International',
      duration: '5 Days / 4 Nights',
      price: '₹34,999',
      originalPrice: '₹44,999',
      rating: 4.9,
      reviewsCount: 260,
      category: 'Luxury',
      heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop',
      ],
      overview: `Experience the luxury, culture, and iconic attractions of ${dest?.name || 'this international destination'} on this meticulously planned holiday package by Zoyo Trip Holidays.`,
      highlights: [
        'Central 4-Star/5-Star verified luxury hotel stays',
        'Daily international buffet breakfast',
        'Private sanitized AC airport and sightseeing transfers',
        '24/7 dedicated trip manager and visa assistance',
      ],
      inclusions: [
        '4 Nights accommodation in 4-Star luxury hotel',
        'Daily Gourmet Buffet Breakfast',
        'All sightseeing and excursion passes as per itinerary',
        'Airport pickup and drop-off in private AC vehicle',
      ],
      exclusions: ['International flight tickets', 'Visa stamping fees', 'Personal expenses'],
      hotelType: '4-Star / 5-Star Luxury Hotels',
      pickupDrop: `International Airport in ${dest?.name || 'Destination'}`,
      itinerary: [
        {
          day: 1,
          title: 'Arrival & VIP Airport Transfer',
          description: 'Arrive at the destination. Meet our concierge and transfer to your luxury hotel. Evening free to enjoy the city skyline.',
          activities: ['Airport Meet & Greet', 'Hotel Check-in', 'Evening Skyline'],
          meals: 'Dinner',
          stay: '4-Star Luxury Hotel',
        },
        {
          day: 2,
          title: 'Iconic City Landmarks & Sightseeing',
          description: 'Full day guided city tour exploring world-renowned architectural wonders, cultural sites, and famous viewpoints.',
          activities: ['City Landmarks Tour', 'Scenic Photos', 'Gourmet Lunch'],
          meals: 'Breakfast',
          stay: '4-Star Luxury Hotel',
        },
        {
          day: 3,
          title: 'Scenic Excursion & Adventure Experience',
          description: 'Day trip to top natural and themed attractions.',
          activities: ['Scenic Excursion', 'Theme Park / Cruise'],
          meals: 'Breakfast & Dinner',
          stay: '4-Star Luxury Hotel',
        },
        {
          day: 4,
          title: 'Shopping & Cultural Immersion',
          description: 'Free time for luxury duty-free shopping, cafe hopping, and cultural exploration.',
          activities: ['Mall Shopping', 'Cultural Street Walk'],
          meals: 'Breakfast',
          stay: '4-Star Luxury Hotel',
        },
        {
          day: 5,
          title: 'Departure & Airport Transfer',
          description: 'Buffet breakfast, check-out, and private transfer to the airport for your return flight.',
          activities: ['Hotel Check-out', 'Airport Drop-off'],
          meals: 'Breakfast',
          stay: 'Departure',
        },
      ],
    };
  }

  return (
    <PackageDetailView
      pkg={pkg}
      destSlug={destSlug}
      destName={dest?.name || 'International'}
      categoryLabel="International Holiday Package"
    />
  );
}
