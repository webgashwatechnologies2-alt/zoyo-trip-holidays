import AndamanPackageDetailClient from './AndamanPackageDetailClient';
import { allDestinations } from '@/data/allDestinations';

export function generateStaticParams() {
  const andamanData = allDestinations['andaman'];
  return (andamanData?.packages || []).map((pkg) => ({
    slug: pkg.slug.toLowerCase(),
  }));
}

export default async function AndamanPackageDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  return <AndamanPackageDetailClient params={resolvedParams} />;
}
