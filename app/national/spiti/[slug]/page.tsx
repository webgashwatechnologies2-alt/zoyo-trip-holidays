import SpitiPackageDetailClient from './SpitiPackageDetailClient';
import { allDestinations } from '@/data/allDestinations';

export function generateStaticParams() {
  const spitiData = allDestinations['spiti'];
  return (spitiData?.packages || []).map((pkg) => ({
    slug: pkg.slug.toLowerCase(),
  }));
}

export default async function SpitiPackageDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  return <SpitiPackageDetailClient params={resolvedParams} />;
}
