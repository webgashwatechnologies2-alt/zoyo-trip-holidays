'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { allDestinations } from '@/data/allDestinations';
import PackageDetailView from '@/components/PackageDetailView';

export default function KeralaPackageDetailClient({
  params,
}: {
  params: { slug: string };
}) {
  const keralaData = allDestinations['kerala'];
  const pkg = keralaData?.packages?.find((p) => p.slug === params.slug);

  if (!pkg) {
    notFound();
  }

  return (
    <PackageDetailView
      pkg={pkg}
      destSlug="kerala"
      destName="Kerala"
      categoryLabel="National Holiday Package"
    />
  );
}
