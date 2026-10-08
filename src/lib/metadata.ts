import type { Metadata } from 'next';
import { SITE } from '@/site.config';
import { getDict } from '@/i18n';
import type { Lang } from './lang';

export function pageMetadata(lang: Lang, title?: string): Metadata {
  const t = getDict(lang).meta;
  return {
    title: title ? `${title} | MrWhisper` : t.title,
    description: t.description,
    robots: { index: SITE.indexable, follow: SITE.indexable },
  };
}
