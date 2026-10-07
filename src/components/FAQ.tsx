'use client';

import { useState } from 'react';
import { SITE } from '@/site.config';
import { getDict } from '@/i18n';
import type { Lang } from '@/lib/lang';

export default function FAQ({ lang }: { lang: Lang }) {
  const t = getDict(lang).faq;
  const faqs = t.items.filter(f => !SITE.preview || !/\{months\}|\{days\}/.test(f.answer)).map(f => ({
    question: f.question,
    answer: f.answer.replace('{months}', String(SITE.updateMonths)).replace('{days}', String(SITE.refundDays)),
  }));
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-6 scroll-mt-24">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-14">
          <div className="eyebrow eyebrow-violet mb-5">{t.eyebrow}</div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">{t.title}</h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`rounded-2xl overflow-hidden transition-all duration-300 border ${isOpen ? 'bg-white/[0.05] border-cyan-500/25' : 'bg-white/[0.025] border-white/8 hover:border-white/15'}`}
              >
                <button 
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="font-medium text-lg">{faq.question}</span>
                  <svg 
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-72 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
