import InternationalDestinationClient from './InternationalDestinationClient';
import { internationalDestinations } from '@/data/internationalPackages';
import { allDestinations } from '@/data/allDestinations';

export function generateStaticParams() {
  const allSlugs = new Set([
    ...Object.keys(internationalDestinations || {}),
    ...Object.keys(allDestinations || {}).filter(k => allDestinations[k]?.type === 'international'),
    'bali', 'bhutan', 'dubai', 'maldives', 'malaysia', 'singapore', 'thailand', 'vietnam', 'nepal', 'sri-lanka', 'japan', 'south-korea', 'hong-kong', 'azerbaijan', 'mauritius', 'philippines'
  ]);
  return Array.from(allSlugs).map((slug) => ({ slug }));
}

export default async function InternationalDestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  return <InternationalDestinationClient params={resolvedParams} />;
}
