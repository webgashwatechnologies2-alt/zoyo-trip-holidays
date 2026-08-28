'use client';

import React from 'react';
import { allDestinations, TourPackage } from '@/data/allDestinations';
import { himachalPackages } from '@/data/himachalPackages';
import PackageDetailView from '@/components/PackageDetailView';

export default function NationalPackageDetailClient({
  params,
}: {
  params: { slug: string; packageSlug: string };
}) {
  const destSlug = params.slug.toLowerCase();
  const pkgSlug = params.packageSlug.toLowerCase();

  // Find destination with aliases
  const cleanSlug = destSlug.replace(/-/g, '');
  const dest = 
    allDestinations[destSlug] ||
    allDestinations[cleanSlug] ||
    (destSlug.includes('andaman') ? allDestinations['andaman'] : undefined) ||
    (destSlug.includes('uttar') ? (allDestinations['uttarpradesh'] || allDestinations['uttar-pradesh']) : undefined) ||
    (destSlug.includes('tamil') ? (allDestinations['tamilnadu'] || allDestinations['tamil-nadu']) : undefined) ||
    (destSlug.includes('arunachal') ? (allDestinations['arunachal'] || allDestinations['arunachal-pradesh']) : undefined);
  
  // Search in destination packages or himachal packages
  let pkg: TourPackage | undefined = dest?.packages.find((p) => p.slug === pkgSlug);
  if (!pkg) {
    pkg = himachalPackages.find((p) => p.slug === pkgSlug);
  }

  // Generic fallback if dynamically generated
  if (!pkg) {
    const formattedTitle = pkgSlug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
    pkg = {
      id: `pkg-${pkgSlug}`,
      slug: pkgSlug,
      title: formattedTitle,
      subtitle: `Handcrafted tour with deluxe hotel stays, private cab transfers and meals`,
      location: dest?.name || 'India',
      duration: '5 Days / 4 Nights',
      price: '₹15,999',
      originalPrice: '₹20,999',
      rating: 4.9,
      reviewsCount: 180,
      category: 'Popular',
      heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop',
      ],
      overview: `Experience the best of ${dest?.name || 'India'} on this all-inclusive tour. Curated by Zoyo Trip Holidays with comfortable private transportation, verified hotel rooms, and 24/7 on-ground assistance.`,
      highlights: [
        'Complete sightseeing in private sanitized vehicle',
        '3/4-Star deluxe hotel accommodation with scenic views',
        'Daily breakfast and dinner prepared fresh',
        'Dedicated tour coordinator on standby',
      ],
      inclusions: [
        '4 Nights hotel stay in 3/4-Star categories',
        'Daily Breakfast & Dinner',
        'Private vehicle with driver allowances, fuel, toll and parking',
      ],
      exclusions: ['Air / Train tickets', 'Personal expenses & entry fees'],
      hotelType: '3/4-Star Deluxe Hotels',
      pickupDrop: 'Nearest Airport / Railway Station',
      itinerary: [
        {
          day: 1,
          title: 'Arrival & Hotel Check-in',
          description: 'Meet and greet at airport/station. Transfer to hotel and evening leisure.',
          activities: ['Arrival Transfer', 'Hotel Check-in', 'Evening Stroll'],
          meals: 'Dinner',
          stay: 'Deluxe Hotel',
        },
        {
          day: 2,
          title: 'Full Day Sightseeing Tour',
          description: 'Explore the top landmarks and natural attractions.',
          activities: ['Iconic Landmarks', 'Local Food Experience'],
          meals: 'Breakfast & Dinner',
          stay: 'Deluxe Hotel',
        },
        {
          day: 3,
          title: 'Excursion & Nature Trails',
          description: 'Excursion to scenic valleys and cultural hubs.',
          activities: ['Scenic Viewpoints', 'Shopping'],
          meals: 'Breakfast & Dinner',
          stay: 'Deluxe Hotel',
        },
        {
          day: 4,
          title: 'Cultural Heritage & Sunset Points',
          description: 'Visit heritage sites, temples, and sunset viewpoints.',
          activities: ['Heritage Walk', 'Sunset View'],
          meals: 'Breakfast & Dinner',
          stay: 'Deluxe Hotel',
        },
        {
          day: 5,
          title: 'Departure Transfer',
          description: 'Breakfast, check out, and transfer for your return journey.',
          activities: ['Hotel Check-out', 'Airport Drop'],
          meals: 'Breakfast',
          stay: 'End of Tour',
        },
      ],
    };
  }

  return (
    <PackageDetailView
      pkg={pkg}
      destSlug={destSlug}
      destName={dest?.name || 'India'}
      categoryLabel="National Holiday Package"
    />
  );
}
