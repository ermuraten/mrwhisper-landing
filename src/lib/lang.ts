export type Lang = 'en' | 'de';

/** Path of a page inside a language. English lives at the root, German under /de. */
export function href(lang: Lang, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === 'en') return clean;
  return clean === '/' ? '/de' : `/de${clean}`;
}
