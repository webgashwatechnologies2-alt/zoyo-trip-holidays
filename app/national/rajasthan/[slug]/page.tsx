import RajasthanPackageDetailClient from './RajasthanPackageDetailClient';
import { allDestinations } from '@/data/allDestinations';

export function generateStaticParams() {
  const rajasthanData = allDestinations['rajasthan'];
  return (rajasthanData?.packages || []).map((pkg) => ({
    slug: pkg.slug.toLowerCase(),
  }));
}

export default async function RajasthanPackageDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  return <RajasthanPackageDetailClient params={resolvedParams} />;
}
