'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { allDestinations } from '@/data/allDestinations';
import PackageDetailView from '@/components/PackageDetailView';

export default function LadakhPackageDetailClient({
  params,
}: {
  params: { slug: string };
}) {
  const ladakhData = allDestinations['ladakh'];
  const pkg = ladakhData?.packages?.find((p) => p.slug === params.slug);

  if (!pkg) {
    notFound();
  }

  return (
    <PackageDetailView
      pkg={pkg}
      destSlug="ladakh"
      destName="Ladakh"
      categoryLabel="National Holiday Package"
    />
  );
}
