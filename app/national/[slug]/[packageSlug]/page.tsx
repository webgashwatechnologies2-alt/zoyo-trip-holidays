import NationalPackageDetailClient from './NationalPackageDetailClient';
import { allDestinations } from '@/data/allDestinations';
import { himachalPackages } from '@/data/himachalPackages';

export function generateStaticParams() {
  const params: { slug: string; packageSlug: string }[] = [];

  for (const [slug, dest] of Object.entries(allDestinations || {})) {
    if (dest?.packages && Array.isArray(dest.packages)) {
      for (const pkg of dest.packages) {
        if (pkg?.slug) {
          params.push({ slug: slug.toLowerCase(), packageSlug: pkg.slug.toLowerCase() });
        }
      }
    }
  }

  // Also include himachal packages
  for (const pkg of himachalPackages || []) {
    if (pkg?.slug) {
      params.push({ slug: 'himachal-pradesh', packageSlug: pkg.slug.toLowerCase() });
    }
  }

  return params;
}

export default async function NationalPackageDetailPage({
  params,
}: {
  params: Promise<{ slug: string; packageSlug: string }>;
}) {
  const resolvedParams = await params;
  return <NationalPackageDetailClient params={resolvedParams} />;
}
