// Blocks the public deployment while legal/contact data are still placeholders.
import { readFileSync } from 'node:fs';
const src = readFileSync(new URL('../src/site.config.ts', import.meta.url), 'utf8');
const legal = src.slice(src.indexOf('legal:'));
const open = (legal.match(/\[\[TODO\]\]|TODO(?=,)/g) || []).length;
if (open > 0) {
  console.error(`\nLaunch check FAILED: ${open} legal/contact field(s) in src/site.config.ts are still TODO.`);
  console.error('Fill name, street, city and email (Impressum) before publishing.\n');
  process.exit(1);
}
console.log('Launch check passed: legal data present.');
