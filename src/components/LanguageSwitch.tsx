'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { href, type Lang } from '@/lib/lang';

export default function LanguageSwitch({ lang, className, children }: {
  lang: Lang;
  className?: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const page = pathname.replace(/^\/de(?=\/|$)/, '') || '/';
  const other: Lang = lang === 'en' ? 'de' : 'en';
  return <Link href={href(other, page)} hrefLang={other} lang={other} className={className}>{children}</Link>;
}
