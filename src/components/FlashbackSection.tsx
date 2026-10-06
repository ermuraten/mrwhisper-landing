import { getDict } from '@/i18n';
import type { Lang } from '@/lib/lang';

export default function FlashbackSection({ lang }: { lang: Lang }) {
  const t = getDict(lang).flashback;
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-[#0b0f19] via-[#090b11] to-[#111827] border-y border-white/5">
      {/* Mystical glow effects (cosmic nebulae styling) */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-20" />

      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Visual Element (The Temporal Portal / Acoustic Eye) */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1 relative">
            <div className="relative w-80 h-80 rounded-full border border-purple-500/20 flex items-center justify-center bg-black/40 backdrop-blur-xl shadow-[0_0_80px_rgba(168,85,247,0.08)]">
              
              {/* Outer spinning runes or dashes */}
              <div className="absolute inset-0 rounded-full border border-dashed border-cyan-500/30 animate-[spin_40s_linear_infinite]" />
              
              {/* Inner glowing orbits */}
              <div className="absolute inset-6 rounded-full border border-purple-500/15 animate-[spin_20s_linear_infinite_reverse]" />
              <div className="absolute inset-12 rounded-full border border-white/5" />

              {/* Time radar sweep */}
              <div className="absolute inset-0 rounded-full animate-[spin_8s_linear_infinite] pointer-events-none">
                <div className="w-[2px] h-40 bg-gradient-to-t from-transparent via-cyan-400/40 to-cyan-400 absolute left-1/2 top-0 transform -translate-x-1/2 origin-bottom shadow-[0_0_20px_#00f2fe]" />
              </div>

              {/* Holographic soundwave vortex */}
              <div className="absolute inset-16 flex items-center justify-center">
                <div className="w-full h-full rounded-full border border-cyan-500/20 bg-gradient-to-tr from-purple-500/10 via-transparent to-cyan-500/10 flex items-center justify-center relative overflow-hidden">
                  
                  {/* Floating particles */}
                  <div className="absolute top-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping" />
                  <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse [animation-delay:1s]" />
                  <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-pink-500/40 rounded-full animate-pulse [animation-delay:2s]" />

                  {/* Pulsing Core */}
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#a855f7] to-[#06b6d4] flex items-center justify-center shadow-[0_0_40px_rgba(168,85,247,0.5)] z-10 hover:scale-105 transition-transform duration-500">
                    <svg className="w-10 h-10 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Magical Time Indicators */}
              <div className="absolute -top-6 px-3 py-1 rounded-md bg-purple-950/80 border border-purple-500/30 text-[10px] font-mono text-purple-300 shadow-lg tracking-widest uppercase">
                {t.past}
              </div>
              <div className="absolute -bottom-6 px-3 py-1 rounded-md bg-cyan-950/80 border border-cyan-500/30 text-[10px] font-mono text-cyan-300 shadow-lg tracking-widest uppercase">
                {t.present}
              </div>
            </div>
          </div>

          {/* Mysterious and poetic copy */}
          <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-300 uppercase tracking-widest">
              {t.eyebrow}
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              {t.titleA} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
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

