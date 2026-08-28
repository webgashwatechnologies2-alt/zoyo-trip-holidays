'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { allDestinations } from '@/data/allDestinations';
import PackageDetailView from '@/components/PackageDetailView';

export default function UttarakhandPackageDetailClient({
  params,
}: {
  params: { slug: string };
}) {
  const ukData = allDestinations['uttarakhand'];
  const pkg = ukData?.packages?.find((p) => p.slug === params.slug);

  if (!pkg) {
    notFound();
  }

  return (
    <PackageDetailView
      pkg={pkg}
      destSlug="uttarakhand"
      destName="Uttarakhand"
      categoryLabel="National Holiday Package"
    />
  );
}
