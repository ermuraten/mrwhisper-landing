import Privacy from '@/components/legal/Privacy';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata('de', 'Datenschutz');

export default function Page() {
  return <Privacy lang="de" />;
}
