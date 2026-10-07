import Link from 'next/link';
import { asset, SITE } from '@/site.config';
import { href, type Lang } from '@/lib/lang';
import { getDict } from '@/i18n';

export default function Footer({ lang }: { lang: Lang }) {
  const t = getDict(lang).footer;
  const p = getDict(lang).preview;
  const other: Lang = lang === 'en' ? 'de' : 'en';
  return (
    <footer className="border-t border-white/10 bg-black/50 py-12 mt-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href={href(lang, '/')} className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset('/logo_icon.png')} alt="MrWhisper logo" width={24} height={24} className="w-6 h-6 object-contain" />
            <span className="font-bold text-lg">MrWhisper</span>
          </Link>
          <p className="text-gray-500 text-sm">
            {t.createdBy} <span className="text-gray-300 font-medium">{SITE.maker}</span>
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <a href={asset('/company/')} className="hover:text-white transition-colors">{p.company}</a>
          <Link href={href(lang, '/privacy')} className="hover:text-white transition-colors">{t.privacy}</Link>
          <Link href={href(lang, '/terms')} className="hover:text-white transition-colors">{t.terms}</Link>
          <Link href={href(lang, '/imprint')} className="hover:text-white transition-colors">{t.imprint}</Link>
          <Link href={href(lang, '/changelog')} className="hover:text-white transition-colors">{t.changelog}</Link>
          <Link href={href(other, '/')} hrefLang={other} lang={other} className="hover:text-white transition-colors">{t.langLabel}</Link>
        </div>
      </div>
    </footer>
  );
}
