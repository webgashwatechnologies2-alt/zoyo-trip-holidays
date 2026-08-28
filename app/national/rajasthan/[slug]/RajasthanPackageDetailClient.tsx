'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { allDestinations } from '@/data/allDestinations';
import PackageDetailView from '@/components/PackageDetailView';

export default function RajasthanPackageDetailClient({
  params,
}: {
  params: { slug: string };
}) {
  const rajData = allDestinations['rajasthan'];
  const pkg = rajData?.packages?.find((p) => p.slug === params.slug);

  if (!pkg) {
    notFound();
  }

  return (
    <PackageDetailView
      pkg={pkg}
      destSlug="rajasthan"
      destName="Rajasthan"
      categoryLabel="National Holiday Package"
    />
  );
}
