import InternationalPackageDetailClient from './InternationalPackageDetailClient';
import { internationalDestinations } from '@/data/internationalPackages';
import { allDestinations } from '@/data/allDestinations';

export function generateStaticParams() {
  const params: { slug: string; packageSlug: string }[] = [];

  const allDestSources = { ...allDestinations, ...internationalDestinations };
  for (const [slug, dest] of Object.entries(allDestSources)) {
    if (dest?.packages && Array.isArray(dest.packages)) {
      for (const pkg of dest.packages) {
        if (pkg?.slug) {
          params.push({ slug: slug.toLowerCase(), packageSlug: pkg.slug.toLowerCase() });
        }
      }
    }
  }

  return params;
}

export default async function InternationalPackageDetailPage({
  params,
}: {
  params: Promise<{ slug: string; packageSlug: string }>;
}) {
  const resolvedParams = await params;
  return <InternationalPackageDetailClient params={resolvedParams} />;
}
