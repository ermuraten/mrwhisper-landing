import ChangelogPage from '@/components/ChangelogPage';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata('de', 'Changelog');

export default function Page() {
  return <ChangelogPage lang="de" />;
}
