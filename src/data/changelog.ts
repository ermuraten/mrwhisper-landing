import de from './changelog.de.json';
import en from './changelog.en.json';
import type { Lang } from '@/lib/lang';

export function getChangelog(lang: Lang) {
  return lang === 'de' ? de : en;
}
