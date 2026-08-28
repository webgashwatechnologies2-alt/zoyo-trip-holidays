'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { allDestinations } from '@/data/allDestinations';
import PackageDetailView from '@/components/PackageDetailView';

export default function SpitiPackageDetailClient({
  params,
}: {
  params: { slug: string };
}) {
  const spitiData = allDestinations['spiti'];
  const pkg = spitiData?.packages?.find((p) => p.slug === params.slug);

  if (!pkg) {
    notFound();
  }

  return (
    <PackageDetailView
      pkg={pkg}
      destSlug="spiti"
      destName="Spiti Valley"
      categoryLabel="National Holiday Package"
    />
  );
}
