import { getDict } from '@/i18n';
import type { Lang } from '@/lib/lang';

export default function FlashbackSection({ lang }: { lang: Lang }) {
  const t = getDict(lang).flashback;
  return (
    <section className="flashback-section py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1" aria-hidden="true">
            <div className="flashback-dial">
              <span className="dial-label dial-past">{t.past}</span>
              <div className="dial-ticks" />
              <div className="dial-ring" />
              <div className="dial-hand" />
              <div className="dial-hub">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="dial-label dial-present">{t.present}</span>
            </div>
          </div>

          {/* Mysterious and poetic copy */}
          <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
            <div className="eyebrow eyebrow-gold">
              {t.eyebrow}
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              {t.titleA} <br/>
              <span className="brass-text">
                {t.titleB}
              </span>
            </h2>
            
            <p className="text-lg text-gray-300 leading-relaxed font-light">
              {t.p1}
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed font-light">
              {t.p2Before} <span className="text-cyan-400 font-medium">{t.p2Strong}</span> {t.p2After}<kbd className="px-2 py-1 rounded bg-white/5 text-purple-300 border border-white/10 text-xs font-mono shadow-inner">Shift + FN</kbd>{t.p2End}
            </p>

            <p className="text-lg text-gray-300 leading-relaxed font-light">
              {t.p3}
            </p>

            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-white/5">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                    <span className="text-purple-400 font-mono text-sm">Ⅰ</span>
                  </div>
                  <h4 className="font-semibold text-white">{t.col1Title}</h4>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {t.col1Text}
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                    <span className="text-cyan-400 font-mono text-sm">Ⅱ</span>
                  </div>
                  <h4 className="font-semibold text-white">{t.col2Title}</h4>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {t.col2Text}
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

