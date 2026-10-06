import Hero from '@/components/Hero';
import DemoVideo from '@/components/DemoVideo';
import FlashbackSection from '@/components/FlashbackSection';
import WhatsNew from '@/components/WhatsNew';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import type { Lang } from '@/lib/lang';

export default function Home({ lang }: { lang: Lang }) {
  return (
    <>
      <Hero lang={lang} />
      <DemoVideo lang={lang} />
      <FlashbackSection lang={lang} />
      <WhatsNew lang={lang} />
      <HowItWorks lang={lang} />
      <Features lang={lang} />
      <Pricing lang={lang} />
      <FAQ lang={lang} />
    </>
  );
}
