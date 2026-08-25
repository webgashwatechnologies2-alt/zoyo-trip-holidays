import NationalDestinationClient from './NationalDestinationClient';
import { allDestinations } from '@/data/allDestinations';

export function generateStaticParams() {
  const allSlugs = new Set([
    ...Object.keys(allDestinations || {}),
    'himachal-pradesh', 'kashmir', 'ladakh', 'rajasthan', 'kerala', 'goa', 'andaman', 'spiti', 'uttarakhand', 'assam', 'meghalaya', 'sikkim', 'arunachal', 'gujarat', 'karnataka', 'tamil-nadu', 'uttar-pradesh', 'odisha', 'manipur', 'andaman-nikobar'
  ]);
  return Array.from(allSlugs).map((slug) => ({ slug }));
}

export default async function NationalDestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  return <NationalDestinationClient params={resolvedParams} />;
}
