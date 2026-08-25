import UttarakhandPackageDetailClient from './UttarakhandPackageDetailClient';
import { uttarakhandPackages } from '@/data/uttarakhandPackages';

export function generateStaticParams() {
  return uttarakhandPackages.map((pkg) => ({
    slug: pkg.slug.toLowerCase(),
  }));
}

export default async function UttarakhandPackageDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  return <UttarakhandPackageDetailClient params={resolvedParams} />;
}
