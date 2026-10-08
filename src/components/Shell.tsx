import { geistSans, geistMono } from '@/lib/fonts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Lang } from '@/lib/lang';
import { getDict } from '@/i18n';

/** Shared <html>/<body> frame used by both language root layouts. */
export default function Shell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html
      lang={getDict(lang).htmlLang}
      className={`${geistSans.variable} ${geistMono.variable} site-document h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="site-shell min-h-full flex flex-col" suppressHydrationWarning>
        <Header lang={lang} />
        <main className="site-main flex-1 pt-20">{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
