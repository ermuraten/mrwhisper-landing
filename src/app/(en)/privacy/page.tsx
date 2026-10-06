import Privacy from '@/components/legal/Privacy';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata('en', 'Privacy');

export default function Page() {
  return <Privacy lang="en" />;
}
