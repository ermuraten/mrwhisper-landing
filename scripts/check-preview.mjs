// The user authorized a public presentation while the service address is pending.
// Commercial launch still uses check-launch-ready.mjs.
import { readFileSync } from 'node:fs';
const config = readFileSync(new URL('../src/site.config.ts', import.meta.url), 'utf8');
if (!/preview: true/.test(config) || !/checkoutUrl: ''/.test(config) || !/indexable: false/.test(config)) {
  throw new Error('Preview must keep sales and search indexing inactive. Use the commercial launch check before enabling sales.');
}
console.log('Presentation check passed: preview enabled, checkout empty, indexing disabled.');
