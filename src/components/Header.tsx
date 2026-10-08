import Link from 'next/link';
import LanguageSwitch from '@/components/LanguageSwitch';
import { asset, SITE } from '@/site.config';
import { href, type Lang } from '@/lib/lang';
import { getDict } from '@/i18n';

export default function Header({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  return (
    <header className="site-header fixed z-50">
      <div className="container mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <Link href={href(lang, '/')} className="site-brand flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <span className="brand-plate"><img src={asset('/logo_mark_white.png')} alt="" width={40} height={40} /></span>
          <span className="text-xl font-bold tracking-tight text-white">MrWhisper</span>
        </Link>

        <nav aria-label={t.nav.menuLabel} className="hidden xl:flex items-center gap-6 text-sm font-medium text-gray-300">
          <Link href={href(lang, '/') + '#neu'} className="hover:text-white transition-colors">{t.nav.new}</Link>
          <Link href={href(lang, '/') + '#features'} className="hover:text-white transition-colors">{t.nav.features}</Link>
          <Link href={href(lang, '/') + '#pricing'} className="hover:text-white transition-colors">{SITE.preview ? t.preview.availability : t.nav.pricing}</Link>
          <Link href={href(lang, '/') + '#faq'} className="hover:text-white transition-colors">{t.nav.faq}</Link>
          <Link href={href(lang, '/changelog')} className="hover:text-white transition-colors flex items-center gap-1.5">
            <span>{t.nav.changelog}</span>
            <span className="px-2 py-0.5 rounded-full bg-amber-400/15 text-amber-200 text-[10px] font-mono border border-amber-400/35 font-semibold shadow-[0_0_10px_rgba(213,165,64,0.3)]">
              v{SITE.version}
            </span>
          </Link>
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          {SITE.demoVideo ? (
            <Link href={href(lang, '/') + '#demo'} aria-label={t.demo.watch} className="brass-button inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold whitespace-nowrap">
              <span aria-hidden="true">▶</span> {t.nav.demo}
            </Link>
          ) : null}
          <LanguageSwitch lang={lang} className="text-sm text-gray-300 hover:text-white transition-colors">{t.nav.switchTo}</LanguageSwitch>
          {SITE.preview ? (
            <button type="button" disabled className="hidden sm:inline-flex bg-white/10 text-gray-400 px-3 sm:px-5 py-2 rounded-full text-sm sm:text-base whitespace-nowrap font-semibold cursor-not-allowed">{t.preview.soon}</button>
          ) : (
          <Link href={href(lang, '/') + '#pricing'} className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-5 py-2 rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(6,182,212,0.35)]">
            {t.nav.cta}
          </Link>
          )}
        </div>
      </div>
    </header>
  );
}
