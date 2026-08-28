'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { allDestinations } from '@/data/allDestinations';
import PackageDetailView from '@/components/PackageDetailView';

export default function KashmirPackageDetailClient({
  params,
}: {
  params: { slug: string };
}) {
  const kashmirData = allDestinations['kashmir'];
  const pkg = kashmirData?.packages?.find((p) => p.slug === params.slug);

  if (!pkg) {
    notFound();
  }

  return (
    <PackageDetailView
      pkg={pkg}
      destSlug="kashmir"
      destName="Kashmir"
      categoryLabel="National Holiday Package"
    />
  );
}
