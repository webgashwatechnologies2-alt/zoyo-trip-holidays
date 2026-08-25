import GoaPackageDetailClient from './GoaPackageDetailClient';
import { allDestinations } from '@/data/allDestinations';

export function generateStaticParams() {
  const goaData = allDestinations['goa'];
  return (goaData?.packages || []).map((pkg) => ({
    slug: pkg.slug.toLowerCase(),
  }));
}

export default async function GoaPackageDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  return <GoaPackageDetailClient params={resolvedParams} />;
}
