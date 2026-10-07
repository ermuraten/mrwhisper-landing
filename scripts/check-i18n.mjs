// Verifies that the English feature list matches the German one one-to-one.
import { readFileSync } from 'node:fs';
const de = readFileSync(new URL('../src/data/features.ts', import.meta.url), 'utf8');
const en = readFileSync(new URL('../src/data/features.en.ts', import.meta.url), 'utf8');
const n = s => (s.match(/^\s*title: '/gm) || []).length;
if (n(de) !== n(en)) { console.error(`Feature count mismatch: de=${n(de)} en=${n(en)}`); process.exit(1); }
console.log(`i18n check passed: ${n(de)} features in both languages.`);

const releases = lang => JSON.parse(readFileSync(new URL(`../src/data/changelog.${lang}.json`, import.meta.url), 'utf8'));
const german = releases('de');
const english = releases('en');
if (german.length !== english.length || german.some((entry, i) => entry.version !== english[i].version || entry.changes.length !== english[i].changes.length || english[i].changes.some(note => !note.trim()))) {
  console.error('Changelog mismatch: versions, order and release-note counts must match.');
  process.exit(1);
}
console.log(`Changelog check passed: ${german.length} releases, ${german.reduce((sum, entry) => sum + entry.changes.length, 0)} notes in each language.`);
