import { SITE } from '@/site.config';
import type { Lang } from '@/lib/lang';
import { getDict } from '@/i18n';

export default function Pricing({ lang }: { lang: Lang }) {
  const t = getDict(lang).pricing;
  const live = !SITE.preview && SITE.checkoutUrl.length > 0;
  const notifyHref = `mailto:${SITE.legal.email}?subject=${encodeURIComponent('MrWhisper launch')}`;
  if (SITE.preview) {
    const p = getDict(lang).preview;
    return (
      <section id="pricing" className="py-24 px-6 scroll-mt-24">
        <div className="pricing-panel stitched-panel fitted-panel container mx-auto max-w-3xl text-center rounded-3xl px-6 py-12">
          <div className="eyebrow eyebrow-cyan mb-5">{p.availability}</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-5">{p.title}</h2>
          <div className="mb-8">
            <div className="text-sm font-semibold text-amber-300 uppercase tracking-widest mb-3">{t.early}</div>
            <p className="flex flex-wrap justify-center items-baseline gap-3 mb-3">
              <span className="text-6xl font-black tracking-tight">{SITE.priceEarly} {SITE.currency}</span>
              <span className="text-gray-400">{t.perLicense}</span>
            </p>
            <p className="text-gray-300">
              {t.earlyNote(SITE.earlyLimit)} <strong className="text-white">{SITE.priceRegular} {SITE.currency}</strong>
            </p>
          </div>
          <p className="text-gray-400 mb-8 leading-relaxed">{p.description}</p>
          <button type="button" disabled className="px-8 py-4 rounded-full bg-white/10 text-gray-400 cursor-not-allowed">{p.soon}</button>
          <a className="block mt-6 text-cyan-300 underline underline-offset-4" href={`mailto:${SITE.legal.email}`}>{p.contact}</a>
        </div>
      </section>
    );
  }
  return (
    <section id="pricing" className="py-28 px-6 relative scroll-mt-24">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-14">
          <div className="eyebrow eyebrow-cyan mb-5">{t.eyebrow}</div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">{t.title}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">{t.lead}</p>
        </div>

        <div className="max-w-lg mx-auto relative">
          <div className="absolute -inset-px rounded-[1.7rem] bg-gradient-to-br from-cyan-400/60 via-purple-500/40 to-pink-500/50 blur-[2px]" />
          <div className="relative rounded-[1.6rem] bg-[#0d1323] border border-white/10 p-9 shadow-2xl">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold mb-1">{t.planTitle}</h3>
                <p className="text-sm text-gray-400">{t.planSub}</p>
              </div>
              <span className="badge badge-new">{t.badge}</span>
            </div>

            <div className="mb-2 text-sm font-semibold text-amber-300 uppercase tracking-widest">{t.early}</div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-6xl font-black tracking-tight">{SITE.currency}{SITE.priceEarly}</span>
              <span className="text-gray-400">/ {t.perLicense}</span>
            </div>
            <p className="text-sm text-gray-400 mb-8">
              {t.earlyNote(SITE.earlyLimit)} <span className="text-white font-semibold">{SITE.currency}{SITE.priceRegular}</span>
            </p>

            <ul className="space-y-3.5 mb-8">
              {t.included.map(feature => (
                <li key={feature} className="flex items-start gap-3 text-gray-300 text-sm">
                  <svg className="w-5 h-5 mt-px text-cyan-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <ul className="space-y-1.5 mb-8 text-xs text-gray-400">
              <li>{t.updates(SITE.updateMonths)}</li>
              <li>{t.refund(SITE.refundDays)}</li>
              <li>{t.testNote}</li>
            </ul>

            {live ? (
              <a
                href={SITE.checkoutUrl}
                className="block w-full text-center py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-lg transition-all shadow-[0_0_30px_rgba(6,182,212,0.35)]"
              >
                {t.buy}
              </a>
            ) : (
              <div>
                <button
                  type="button"
                  disabled
                  className="w-full py-4 rounded-xl bg-white/10 text-gray-400 font-bold text-lg cursor-not-allowed"
                >
                  {t.soon}
                </button>
                <p className="text-sm text-gray-400 mt-4 text-center">
                  {t.soonNote}{' '}
                  <a href={notifyHref} className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4">{t.notify}</a>
                </p>
              </div>
            )}
            <p className="text-xs text-gray-500 mt-5 text-center">{t.merchant}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
