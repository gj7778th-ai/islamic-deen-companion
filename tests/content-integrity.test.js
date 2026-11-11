#!/usr/bin/env node
// Run from repository root: node tests/content-integrity.test.js
// Offline, dependency-free regression checks for the 27-section HTML app.
'use strict';
const fs = require('node:fs');
const assert = require('node:assert/strict');
const html = fs.readFileSync('index.html', 'utf8');
const quality = fs.readFileSync('assets/content-quality.js', 'utf8');
const ids = [...html.matchAll(/<section\s+class="panel(?: active)?"\s+id="([^"]+)"/g)].map(m => m[1]);
const nav = [...html.matchAll(/<button\s+data-tab="([^"]+)"/g)].map(m => m[1]);
const expected = ['welcome','wudu','ghusl','salah','janazah','purity','nawafil','sawm','zakat','hajj','adaptations','hereafter','prophets','moresalah','duties','sects','sources','seerah','governance','family','iman','pillars','eid','quranstructure','ethics','rulings','dhikrduas'];
assert.equal(ids.length, 27, 'All 27 original sections must remain');
assert.deepEqual([...ids].sort(), [...expected].sort(), 'A preserved panel was renamed or removed');
assert.equal(new Set(ids).size, 27, 'Duplicate section IDs');
assert.deepEqual([...nav].sort(), [...ids].sort(), 'Each panel must have exactly one matching navigation button');
assert.equal((html.match(/<script\s+defer\s+src="assets\/content-quality\.js"><\/script>/g)||[]).length, 1, 'Quality script must load exactly once');
assert.equal((html.match(/id="tabs"/g)||[]).length, 1, 'Expected one navigation root');
assert.ok(html.includes('Sahih al-Bukhari 614'), 'Post-Adhan supplication reference missing');
assert.ok(html.includes('Sahih Muslim 2695 as dearer'), 'Muslim 2695/2696 distinction missing');
assert.ok(!html.includes('مَحْمُوْدَنِ'), 'Malformed Adhan wording still present');
assert.ok(quality.includes('deen-topic-search') && quality.includes('aria-live'), 'Accessible search missing');
for (const id of ['hajj', 'moresalah']) {
  assert.ok(quality.includes("section:'" + id + "'"), 'Translation enhancement missing for ' + id);
}
assert.ok(quality.includes("lang='ur'") && quality.includes("lang='en'"), 'Translation language tags missing');
const Arabic = /[\u0600-\u06ff]/u;
assert.ok(Arabic.test(html), 'Arabic or Urdu content unexpectedly absent');
assert.ok(html.length > 600000, 'Unexpectedly large reduction in preserved source content');
console.log('PASS: 27 preserved sections, one-to-one navigation, references, search and translation hooks');
