import LadakhPackageDetailClient from './LadakhPackageDetailClient';
import { allDestinations } from '@/data/allDestinations';

export function generateStaticParams() {
  const ladakhData = allDestinations['ladakh'];
  return (ladakhData?.packages || []).map((pkg) => ({
    slug: pkg.slug.toLowerCase(),
  }));
}

export default async function LadakhPackageDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  return <LadakhPackageDetailClient params={resolvedParams} />;
}
