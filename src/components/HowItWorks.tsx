import type { Lang } from '@/lib/lang';
import { getDict } from '@/i18n';

export default function HowItWorks({ lang }: { lang: Lang }) {
  const t = getDict(lang).how;
  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <div className="eyebrow eyebrow-violet mb-5">{t.eyebrow}</div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">{t.title}</h2>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-px bg-gradient-to-r from-cyan-500/0 via-cyan-400/40 to-purple-500/0" aria-hidden="true" />
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-5 relative">
            {t.steps.map((step, i) => (
              <li key={step.title} className="tile text-center">
                <div className="relative mx-auto mb-6 w-20 h-20 rounded-2xl grid place-items-center bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-white/10 text-2xl font-mono font-bold text-cyan-200 shadow-[0_0_30px_rgba(6,182,212,0.15)]">
                  {step.key}
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#0a0f1c] border border-white/15 text-[11px] text-gray-300 grid place-items-center">{i + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
