import { getDict } from '@/i18n';
import { getChangelog } from '@/data/changelog';
import type { Lang } from '@/lib/lang';

export default function ChangelogPage({ lang }: { lang: Lang }) {
  const note = getDict(lang).legalPages.changelogNote;
  const changelogEntries = getChangelog(lang);
  return (
    <div className="container mx-auto px-6 py-24 max-w-3xl">
      <h1 className="text-4xl font-bold mb-4">Changelog</h1>
      <p className="text-gray-400 mb-3 text-lg">{lang === 'de' ? 'Alle Updates und Neuerungen für MrWhisper auf einen Blick.' : 'All updates and news for MrWhisper at a glance.'}</p>
      <p className="text-gray-500 mb-12 text-sm">{note}</p>
      
      <div className="space-y-12">
        {changelogEntries.map((entry) => (
          <div key={entry.version} className="relative pl-8 md:pl-0">
            <div className="md:flex gap-8">
              <div className="md:w-1/4 mb-4 md:mb-0 shrink-0">
                <div className="sticky top-24">
                  <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-lg font-bold font-mono text-sm mb-2">
                    {entry.version}
                  </span>
                  <div className="text-gray-500 text-sm">{entry.date}</div>
                </div>
              </div>
              
              <div className="md:w-3/4 glass p-6 md:p-8 rounded-2xl border border-white/5">
                <ul className="space-y-3">
                  {entry.changes.map((change, i) => (
                    <li key={i} className="flex gap-3 text-gray-300">
                      <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{change}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
