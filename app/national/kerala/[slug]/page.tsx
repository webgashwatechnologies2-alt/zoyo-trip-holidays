import KeralaPackageDetailClient from './KeralaPackageDetailClient';
import { allDestinations } from '@/data/allDestinations';

export function generateStaticParams() {
  const keralaData = allDestinations['kerala'];
  return (keralaData?.packages || []).map((pkg) => ({
    slug: pkg.slug.toLowerCase(),
  }));
}

export default async function KeralaPackageDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  return <KeralaPackageDetailClient params={resolvedParams} />;
}
