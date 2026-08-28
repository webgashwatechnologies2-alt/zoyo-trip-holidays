'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { allDestinations } from '@/data/allDestinations';
import PackageDetailView from '@/components/PackageDetailView';

export default function AndamanPackageDetailClient({
  params,
}: {
  params: { slug: string };
}) {
  const andamanData = allDestinations['andaman'];
  const pkg = andamanData?.packages?.find((p) => p.slug === params.slug);

  if (!pkg) {
    notFound();
  }

  return (
    <PackageDetailView
      pkg={pkg}
      destSlug="andaman"
      destName="Andaman & Nicobar"
      categoryLabel="National Holiday Package"
    />
  );
}
