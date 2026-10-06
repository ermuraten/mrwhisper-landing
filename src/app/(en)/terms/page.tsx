import Terms from '@/components/legal/Terms';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata('en', 'Terms');

export default function Page() {
  return <Terms lang="en" />;
}
