import Imprint from '@/components/legal/Imprint';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata('de', 'Impressum');

export default function Page() {
  return <Imprint lang="de" />;
}
