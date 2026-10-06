import Home from '@/components/Home';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata('de');

export default function Page() {
  return <Home lang="de" />;
}
