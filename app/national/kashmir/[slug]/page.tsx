import KashmirPackageDetailClient from './KashmirPackageDetailClient';
import { allDestinations } from '@/data/allDestinations';

export function generateStaticParams() {
  const kashmirData = allDestinations['kashmir'];
  return (kashmirData?.packages || []).map((pkg) => ({
    slug: pkg.slug.toLowerCase(),
  }));
}

export default async function KashmirPackageDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  return <KashmirPackageDetailClient params={resolvedParams} />;
}
