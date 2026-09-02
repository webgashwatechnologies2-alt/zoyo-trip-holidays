'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { uttarakhandPackages } from '@/data/uttarakhandPackages';
import PackageDetailView from '@/components/PackageDetailView';

interface Props {
  params: {
    slug: string;
  };
}

type PackageCategory =
  | 'Adventure'
  | 'Spiritual'
  | 'Popular'
  | 'Honeymoon'
  | 'Family'
  | 'Luxury'
  | 'Cultural'
  | 'Tribal';

export default function UttarakhandPackageDetailClient({
  params,
}: Props) {
  const pkg = uttarakhandPackages.find(
    (item) => item.slug === params.slug
  );

  if (!pkg) {
    notFound();
  }

  const packageForView = {
    ...pkg,
    category: pkg.category as PackageCategory,
    heroImage: typeof pkg.heroImage === 'string' ? pkg.heroImage : '',
  };

  return (
    <PackageDetailView
      pkg={packageForView}
      destSlug="uttarakhand"
      destName="Uttarakhand"
      categoryLabel="National Holiday Package"
    />
  );
}