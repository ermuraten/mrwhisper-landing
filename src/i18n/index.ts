import { en } from './en';
import { de } from './de';
import type { Lang } from '@/lib/lang';

export const dict = { en, de } as const;
export function getDict(lang: Lang) {
  return dict[lang];
}
