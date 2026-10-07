import { cpSync, writeFileSync } from 'node:fs';
cpSync(new URL('../company-preview/', import.meta.url), new URL('../out/company/', import.meta.url), { recursive: true });
writeFileSync(new URL('../out/.nojekyll', import.meta.url), '');
console.log('Simple company introduction preserved at /company/.');
