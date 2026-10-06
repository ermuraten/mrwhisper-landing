// Verifies that the English feature list matches the German one one-to-one.
import { readFileSync } from 'node:fs';
const de = readFileSync(new URL('../src/data/features.ts', import.meta.url), 'utf8');
const en = readFileSync(new URL('../src/data/features.en.ts', import.meta.url), 'utf8');
const n = s => (s.match(/^\s*title: '/gm) || []).length;
if (n(de) !== n(en)) { console.error(`Feature count mismatch: de=${n(de)} en=${n(en)}`); process.exit(1); }
console.log(`i18n check passed: ${n(de)} features in both languages.`);
