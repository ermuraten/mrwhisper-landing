import Terms from '@/components/legal/Terms';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata('de', 'Nutzungsbedingungen');

export default function Page() {
  return <Terms lang="de" />;
}
