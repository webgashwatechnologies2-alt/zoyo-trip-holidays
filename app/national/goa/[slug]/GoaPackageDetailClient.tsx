'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { allDestinations } from '@/data/allDestinations';
import PackageDetailView from '@/components/PackageDetailView';

export default function GoaPackageDetailClient({
  params,
}: {
  params: { slug: string };
}) {
  const goaData = allDestinations['goa'];
  const pkg = goaData?.packages?.find((p) => p.slug === params.slug);

  if (!pkg) {
    notFound();
  }

  return (
    <PackageDetailView
      pkg={pkg}
      destSlug="goa"
      destName="Goa"
      categoryLabel="National Holiday Package"
    />
  );
}
