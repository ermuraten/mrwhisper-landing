import { FEATURES, type Feature } from './features';
import { FEATURE_TEXT_EN } from './features.en';
import type { Lang } from '@/lib/lang';

export function getFeatures(lang: Lang): Feature[] {
  if (lang === 'de') return FEATURES;
  return FEATURES.map((f, i) => ({ ...f, ...FEATURE_TEXT_EN[i] }));
}
