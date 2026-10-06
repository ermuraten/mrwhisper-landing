'use client';

import { useMemo, useState } from 'react';
import Icon from '@/components/Icon';
import { FEATURE_CATEGORIES, type FeatureCategory } from '@/data/features';
import { getFeatures } from '@/data/getFeatures';
import { getDict } from '@/i18n';
import type { Lang } from '@/lib/lang';

type Filter = 'all' | 'new' | FeatureCategory;

export default function Features({ lang }: { lang: Lang }) {
  const t = getDict(lang).featuresSection;
  const FEATURES = useMemo(() => getFeatures(lang), [lang]);
  const [filter, setFilter] = useState<Filter>('all');

  const counts = useMemo(() => {
    const byCategory = Object.fromEntries(FEATURE_CATEGORIES.map(c => [c.id, 0])) as Record<FeatureCategory, number>;
    for (const f of FEATURES) byCategory[f.category] += 1;
    return byCategory;
  }, [FEATURES]);
  const newCount = FEATURES.filter(f => f.isNew).length;

  const shown = FEATURES.filter(f => (filter === 'all' ? true : filter === 'new' ? f.isNew : f.category === filter));

  const tabs: { id: Filter; label: string; count: number }[] = [
    { id: 'all', label: t.all, count: FEATURES.length },
    { id: 'new', label: t.new, count: newCount },
    ...FEATURE_CATEGORIES.map(c => ({ id: c.id as Filter, label: t.categories[c.id], count: counts[c.id] })),
  ];

  return (
    <section id="features" className="py-28 px-6 relative scroll-mt-24">
      <div className="absolute inset-0 bg-grid pointer-events-none -z-10" />
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <div className="eyebrow eyebrow-cyan mb-5">{t.eyebrow}</div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            {t.titleA(FEATURES.length)} <br />
            <span className="text-gradient">{t.titleB}</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto font-light leading-relaxed">
            {t.lead}
          </p>
        </div>

        {/* Bereichsfilter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" role="tablist" aria-label={t.aria}>
          {tabs.map(tab => {
            const active = filter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 flex items-center gap-2 ${
                  active
                    ? 'bg-cyan-500/15 border-cyan-400/50 text-white shadow-[0_0_20px_rgba(6,182,212,0.2)]'
                    : 'bg-white/[0.03] border-white/10 text-gray-300 hover:bg-white/[0.07] hover:text-white'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[11px] font-mono px-1.5 rounded-md ${active ? 'bg-cyan-400/20 text-cyan-200' : 'bg-white/5 text-gray-400'}`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {shown.map(f => (
            <article
              key={f.title}
              className={`feature-card group ${f.isNew ? 'is-new' : ''}`}
            >
              <div className="flex items-start justify-between gap-3 mb-5">
                <div className={`feature-icon ${f.isNew ? 'text-amber-300' : 'text-cyan-300'}`}>
                  <Icon name={f.icon} className="w-5 h-5" />
                </div>
                {f.since && (
                  <span className={`badge ${f.isNew ? 'badge-new' : ''}`}>
                    {f.isNew ? `${t.newBadge} ${f.since}` : f.since}
                  </span>
                )}
              </div>
              <h3 className="text-[17px] font-bold mb-2 text-white group-hover:text-cyan-200 transition-colors">{f.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{f.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
