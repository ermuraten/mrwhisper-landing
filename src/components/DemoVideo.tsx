import { SITE, asset } from '@/site.config';
import type { Lang } from '@/lib/lang';
import { getDict } from '@/i18n';

/** Product demo. Hidden until SITE.demoVideo points to a file in /public. Self-hosted: no third-party embeds. */
export default function DemoVideo({ lang }: { lang: Lang }) {
  if (!SITE.demoVideo) return null;
  const d = getDict(lang).demo;
  return (
    <section id="demo" className="py-20 px-6 scroll-mt-24">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="eyebrow eyebrow-cyan mb-5">{d.eyebrow}</div>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">{d.title}</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8 font-light">{d.text}</p>
        <div className="demo-frame stitched-panel fitted-panel">
        <video
          className="w-full rounded-xl bg-black"
          controls
          preload="metadata"
          playsInline
          poster={SITE.demoPoster ? asset(SITE.demoPoster) : undefined}
        >
          <source src={asset(SITE.demoVideo)} type="video/mp4" />
          {SITE.demoCaptions ? <track kind="captions" srcLang="en" label="English" src={asset(SITE.demoCaptions)} default /> : null}
          {d.fallback}
        </video>
        </div>
        <a href={asset(SITE.demoVideo)} className="inline-flex mt-5 text-sm text-cyan-300 hover:text-white underline underline-offset-4">
          {d.directLink}
        </a>
      </div>
    </section>
  );
}
