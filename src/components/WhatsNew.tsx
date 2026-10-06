import Link from 'next/link';
import { href, type Lang } from '@/lib/lang';
import { getDict } from '@/i18n';

const LEATHER_CLASSES = ['leather-navy', 'leather-brown', 'leather-tan'];

export default function WhatsNew({ lang }: { lang: Lang }) {
  const t = getDict(lang).whatsNew;
  return (
    <section id="neu" className="py-28 px-6 relative scroll-mt-24">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <div className="eyebrow eyebrow-gold mb-5">{t.eyebrow}</div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-5">
            {t.titleA}<br />
            <span className="text-gradient">{t.titleB}</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-light">
            {t.lead}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
          {/* Session-Modus */}
          <div className="tile md:col-span-4 md:row-span-2 flex flex-col">
            <span className="badge badge-new self-start mb-4">{t.badgeNew}</span>
            <h3 className="text-2xl md:text-3xl font-bold mb-3">{t.sessionTitle}</h3>
            <p className="text-gray-300 font-light leading-relaxed max-w-xl mb-8">
              {t.sessionText}
            </p>

            <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 min-h-[11rem]">
              {t.routings.map((r, i) => (
                <div key={r.title} className="rounded-2xl bg-black/30 border border-white/10 p-3 flex flex-col">
                  <div className="flex-1 flex flex-col gap-1.5 justify-center">
                    {/* Haupteintrag */}
                    <span className={`h-3 rounded ${i === 1 ? 'bg-cyan-400/50' : 'bg-white/25'}`} />
                    {/* Was dazukommt */}
                    {i === 0 && (
                      <>
                        <span className="h-2 rounded bg-white/15 ml-4" />
                        <span className="h-2 rounded bg-cyan-400/60 ml-4" />
                      </>
                    )}
                    {i === 1 && (
                      <>
                        <span className="h-3 rounded bg-white/25" />
                        <span className="h-3 rounded bg-white/25" />
                      </>
                    )}
                    {i === 2 && (
                      <>
                        <span className="h-1.5 rounded bg-white/20 w-2/3" />
                        <span className="h-1.5 rounded bg-white/20 w-1/2" />
                        <span className="h-3 rounded bg-cyan-400/60" />
                      </>
                    )}
                  </div>
                  <span className="mt-3 text-[13px] font-semibold text-gray-100">{r.title}</span>
                  <span className="text-[11px] text-gray-400 leading-snug">{r.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Haupteintrag wählen */}
          <div className="tile md:col-span-2">
            <span className="badge badge-new mb-4 inline-block">{t.badgeNew}</span>
            <h3 className="text-xl font-bold mb-2">{t.mainTitle}</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              {t.mainText}
            </p>
            <div className="rounded-xl bg-black/30 border border-white/10 p-3 font-mono text-[11px] leading-6 text-gray-300">
              <div>🔍 <span className="text-cyan-300">#1190</span> {t.mainSearch1}</div>
              <div>🔍 {t.mainSearch2}</div>
              <div className="text-gray-500">{t.mainResult}</div>
            </div>
          </div>

          {/* Tags & gespeicherte Sessions */}
          <div className="tile md:col-span-2">
            <span className="badge badge-new mb-4 inline-block">{t.badgeNew}</span>
            <h3 className="text-xl font-bold mb-2">{t.tagsTitle}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {t.tagsText}
            </p>
          </div>

          {/* Leder & Messing */}
          <div className="tile md:col-span-4 flex flex-col">
            <span className="badge self-start mb-4">{t.leatherBadge}</span>
            <h3 className="text-2xl font-bold mb-3">{t.leatherTitle}</h3>
            <p className="text-gray-300 font-light leading-relaxed max-w-xl mb-6">
              {t.leatherText}
            </p>
            <div className="grid grid-cols-3 gap-3 sm:gap-6 min-h-[8rem]">
              {LEATHER_CLASSES.map((cls, i) => (
                <div key={cls} className="flex flex-col text-center">
                  <div className={`leather ${cls} relative flex-1 rounded-2xl`} style={{ transform: `rotate(${(i - 1) * 1.5}deg)` }}>
                    <span className="brass absolute -top-1 -right-1 w-6 h-6 rounded-tr-2xl [clip-path:polygon(0_0,100%_0,100%_100%)]" />
                    <span className="absolute left-3 top-3 bottom-3 w-7 rounded-lg bg-white/10 border border-white/20 grid place-items-center">
                      <span className="font-black text-lg text-white/50 [writing-mode:vertical-rl] rotate-180">{3 - i}</span>
                    </span>
                  </div>
                  <span className="block mt-3 text-xs text-gray-400">{t.leathers[i]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Kleinigkeiten */}
          <div className="tile md:col-span-2">
            <span className="badge badge-new mb-4 inline-block">{t.badgeNew}</span>
            <h3 className="text-xl font-bold mb-2">{t.topTitle}</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              {t.topText}
            </p>
            <div className="rounded-xl bg-black/30 border border-white/10 p-3 flex items-center gap-3 text-sm text-gray-300">
              <span className="w-9 h-9 rounded-full border border-cyan-300/40 text-cyan-300 grid place-items-center text-lg">↑</span>
              {t.topHint}
            </div>
          </div>
        </div>

        <p className="text-center mt-10 text-sm text-gray-400">
          {t.detailsBefore}{' '}
          <Link href={href(lang, '/changelog')} className="text-amber-300 hover:text-amber-200 underline underline-offset-4 decoration-amber-300/40">
            {t.detailsLink}
          </Link>
          {t.detailsNote}.
        </p>
      </div>
    </section>
  );
}
