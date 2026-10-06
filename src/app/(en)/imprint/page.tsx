import Imprint from '@/components/legal/Imprint';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata('en', 'Legal notice');

export default function Page() {
  return <Imprint lang="en" />;
}
