import Link from 'next/link';
import { SITE } from '@/site.config';
import { href, type Lang } from '@/lib/lang';
import { getDict } from '@/i18n';
import { getFeatures } from '@/data/getFeatures';

/** Illustration of the history view in the app. It is a drawing, not a screenshot, and is labelled as such. */
function AppMockup({ lang }: { lang: Lang }) {
  const m = getDict(lang).mock;
  return (
    <div className="relative mx-auto w-full max-w-5xl" role="img" aria-label={m.illustration}>


      <div className="mock-window text-left">
        <div className="mock-titlebar flex items-center gap-3 px-4 h-11">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="ml-3 text-[13px] font-semibold text-gray-200">{m.titlebar}</span>
          <div className="mx-auto hidden sm:flex items-center gap-2 px-3 py-1 rounded-full border border-rose-400/30 bg-rose-500/10 text-[11px] font-semibold text-rose-200">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
            {m.transcribing}
          </div>
          <div className="ml-auto flex items-center gap-2 px-2.5 py-1 rounded-full border border-emerald-400/30 bg-emerald-500/10 text-[11px] text-emerald-300">
            {m.ready}
          </div>
        </div>

        <div className="flex">
          <aside className="mock-sidebar hidden md:flex w-44 shrink-0 flex-col gap-1 p-3 text-[12px] text-gray-400">
            {m.sidebar.map(item => (
              <span key={item} className={`px-2.5 py-1.5 rounded-lg ${item === m.active ? 'mock-nav-active' : ''}`}>
                {item}
              </span>
            ))}
          </aside>

          <div className="mock-body min-w-0 flex-1 p-4 sm:p-5 space-y-3 bg-[radial-gradient(900px_400px_at_100%_-10%,rgba(36,123,198,0.12),transparent_60%)]">
            <div className="mock-card">
              <span className="mock-fold" />
              <div className="mock-gutter flex flex-col items-center gap-2 w-10 shrink-0">
                <span className="w-4 h-4 rounded-full border border-white/25" />
                <span className="mock-number text-[40px]">128</span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap gap-1.5 mb-2">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-rose-600 text-white">{m.card1Tags[0]}</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-400 text-black">{m.card1Tags[1]}</span>
                </div>
                <p className="text-[15px] font-bold mb-1 text-gradient">{m.card1Title}</p>
                <p className="text-[12px] leading-relaxed text-gray-400 line-clamp-2">{m.card1Text}</p>
                <div className="mock-card-meta flex flex-wrap items-center gap-3 mt-3 pt-2.5 border-t border-white/5 text-[11px] text-gray-400">
                  <span className="whitespace-nowrap">{m.card1Notes}</span>
                  <span className="hidden sm:inline">{m.card1Followups}</span>
                  <span className="ml-auto whitespace-nowrap px-2 py-0.5 rounded-full border border-amber-400/40 bg-amber-400/10 text-amber-300">{m.card1Status}</span>
                  <span className="text-amber-400 tracking-tight">★★★★☆</span>
                </div>
              </div>
            </div>

            <div className="mock-card opacity-80">
              <div className="mock-gutter flex flex-col items-center gap-2 w-10 shrink-0">
                <span className="w-4 h-4 rounded-full border border-white/25" />
                <span className="mock-number text-[34px]">127</span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[14px] font-semibold text-gray-200 mb-1">{m.card2Title}</p>
                <p className="text-[12px] text-gray-500 line-clamp-1">{m.card2Text}</p>
                <div className="flex items-center gap-2 mt-2.5 text-[11px] text-gray-500">
                  <span className="px-1.5 py-0.5 rounded-md border border-white/10">v3 👑</span>
                  <span className="ml-auto text-amber-400">★★★★★</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mock-popup float-slow absolute -right-2 sm:-right-8 -bottom-10 w-64 sm:w-72 rounded-2xl p-3.5 text-left bg-[#0c1222]/95 border border-white/10 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.9)] backdrop-blur">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-semibold text-emerald-300">{m.popupInserted}</span>
          <span className="text-[10px] text-gray-500">⏸ 🗑 ✕</span>
        </div>
        <p className="text-[12px] text-gray-200 leading-relaxed rounded-lg bg-white/5 border border-cyan-400/30 px-2.5 py-2">
          {m.popupText}<span className="inline-block w-px h-3.5 bg-cyan-300 align-middle ml-0.5 animate-pulse" />
        </p>
        <div className="flex gap-1.5 mt-2.5">
          <span className="px-2 py-0.5 rounded-full text-[10px] bg-sky-500 text-white">{m.popupTag}</span>
          <span className="px-2 py-0.5 rounded-full text-[10px] border border-dashed border-white/20 text-gray-400">{m.popupAddTag}</span>
        </div>
        <div className="mt-3 h-1 rounded-full bg-white/10 overflow-hidden"><div className="h-full w-2/3 bg-gradient-to-r from-cyan-400 to-purple-400" /></div>
      </div>

      <div className="mock-recorder float-slower absolute -left-2 sm:-left-6 -bottom-6 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#0c1222]/95 border border-cyan-400/25 shadow-[0_20px_40px_-15px_rgba(6,182,212,0.5)]">
        <span className="w-7 h-7 rounded-full bg-gradient-to-br from-rose-500 to-pink-600 grid place-items-center text-[11px]">🎙️</span>
        <div className="flex items-end gap-[3px] h-5">
          {[40, 75, 55, 90, 60, 80, 45, 70, 35].map((h, i) => (
            <span key={i} className="w-[3px] rounded-full bg-cyan-300/80 animate-pulse" style={{ height: `${h}%`, animationDelay: `${i * 120}ms` }} />
          ))}
        </div>
        <span className="text-[11px] font-mono text-gray-300">0:07</span>
      </div>
    </div>
  );
}

export default function Hero({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const h = t.hero;
  const count = getFeatures(lang).length;
  return (
    <section className="hero-section pt-24 pb-36 px-6 relative overflow-hidden">

      <div className="absolute inset-0 bg-grid pointer-events-none -z-10" />

      <div className="container mx-auto text-center max-w-5xl">
        <p className="hero-audience text-sm sm:text-base font-semibold mb-5">{h.audience}</p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black tracking-tight mb-7 leading-[1.05]">
          {h.titleA}<br />
          <span className="brass-text">{h.titleB}</span>
        </h1>

        <p className="text-lg md:text-2xl text-gray-300 mb-9 max-w-3xl mx-auto leading-relaxed font-light">
          {h.description}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10 text-xs font-medium text-gray-300">
          {h.highlights.map(x => (
            <span key={x.text} className="inset-chip px-3.5 py-1.5 flex items-center gap-1.5">
              <span>{x.icon}</span> <span>{x.text}</span>
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-4 mb-5">
          {SITE.demoVideo ? (
            <a href="#demo" className="brass-button inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 font-bold text-lg transition-transform hover:-translate-y-0.5">
              <span aria-hidden="true">▶</span> {t.demo.watch}
            </a>
          ) : null}
          {SITE.preview ? (
            <button type="button" disabled className="w-full sm:w-auto px-8 py-4 bg-white/10 text-gray-400 rounded-full font-bold text-lg cursor-not-allowed">{t.preview.soon}</button>
          ) : (
          <a href="#pricing" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-full font-bold text-lg transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_44px_rgba(6,182,212,0.6)] hover:-translate-y-0.5">
            {h.ctaPrimary}
          </a>
          )}
          <a href="#features" className="leather-button w-full sm:w-auto px-8 py-4 font-bold text-lg transition-all">
            {h.ctaSecondary(count)}
          </a>
        </div>
        <p className="text-sm text-gray-400 mb-3">
          {h.leadBefore}{' '}
          <kbd className="px-2 py-0.5 bg-white/10 rounded border border-white/20 font-mono text-cyan-300">fn</kbd>{' '}
          {h.leadAfter}
        </p>
        <p className="text-sm text-gray-500 mb-6">{h.platformNote}</p>
        <div className="inset-chip max-w-2xl mx-auto px-5 py-4 mb-8">
          <p className="font-semibold text-amber-200 mb-1">{h.projectSince}</p>
          <p className="text-sm text-gray-400 leading-relaxed">{h.projectBy}</p>
        </div>

        {SITE.preview ? (
          <a href="#pricing" className="price-summary inline-block text-sm underline underline-offset-4 mb-10">
            {t.preview.priceSummary(`${SITE.priceEarly} ${SITE.currency}`, `${SITE.priceRegular} ${SITE.currency}`, SITE.earlyLimit)}
          </a>
        ) : null}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left mb-16">
          {h.workflow.map((item, i) => (
            <div key={item.title} className="stitched-panel workflow-card rounded-2xl p-6">
              <span aria-hidden="true" className="brass-medallion inline-flex items-center justify-center w-8 h-8 font-mono text-sm mb-3">{i + 1}</span>
              <h2 className="font-bold text-white mb-2">{item.title}</h2>
              <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <section aria-labelledby="roadmap-title" className="text-left mb-12">
          <div className="text-center mb-5">
            <h2 id="roadmap-title" className="text-xl font-bold text-amber-200 mb-2">{h.roadmapTitle}</h2>
            <p className="text-sm text-gray-400">{h.roadmapNote}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {h.roadmap.map(item => (
              <article key={item.title} className="stitched-panel workflow-card rounded-2xl p-6">
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <Link
          href={href(lang, '/changelog')}
          className="inline-flex flex-wrap justify-center items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-amber-400/30 text-sm text-gray-200 mb-8 backdrop-blur-md transition-all duration-300 hover:scale-[1.03] shadow-[0_0_24px_rgba(213,165,64,0.18)] group"
        >
          <span className="flex h-2 w-2 rounded-full bg-amber-300 animate-pulse" />
          <span className="font-semibold text-amber-200">✨ v{SITE.version}:</span>
          <span className="text-gray-300 group-hover:text-white transition-colors">{h.badgeText}</span>
          <span className="text-xs text-amber-300 group-hover:translate-x-0.5 transition-transform">→</span>
        </Link>

        <AppMockup lang={lang} />
      </div>
    </section>
  );
}
