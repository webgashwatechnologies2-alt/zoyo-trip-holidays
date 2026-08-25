import HimachalPackageDetailClient from './HimachalPackageDetailClient';
import { himachalPackages } from '@/data/himachalPackages';

export function generateStaticParams() {
  return (himachalPackages || []).map((pkg) => ({
    slug: pkg.slug.toLowerCase(),
  }));
}

export default async function HimachalPackageDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  return <HimachalPackageDetailClient params={resolvedParams} />;
}
