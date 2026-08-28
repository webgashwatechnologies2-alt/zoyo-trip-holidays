'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { himachalPackages } from '@/data/himachalPackages';
import PackageDetailView from '@/components/PackageDetailView';

export default function HimachalPackageDetailClient({
  params,
}: {
  params: { slug: string };
}) {
  const pkg = himachalPackages.find((p) => p.slug === params.slug);

  if (!pkg) {
    notFound();
  }

  return (
    <PackageDetailView
      pkg={pkg}
      destSlug="himachal-pradesh"
      destName="Himachal Pradesh"
      categoryLabel="National Holiday Package"
    />
  );
}
