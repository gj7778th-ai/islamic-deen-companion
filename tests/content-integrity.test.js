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
const translationPairs = [
  ['لَبَّيْكَ اللّٰهُمَّ عُمْرَةً', 'اے اللہ! میں عمرے کے لیے حاضر ہوں۔', 'Here I am, O Allah, for Umrah.'],
  ['لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللّٰهِ', 'اللہ کی مدد کے بغیر نہ کوئی طاقت ہے نہ قوت۔', 'There is no power or strength except through Allah.'],
  ['أَعُوْذُ بِاللّٰہِ مِنَ الشَّيْطَانِ الرَّجِيْمِ', 'میں شیطان مردود سے اللہ کی پناہ مانگتا ہوں۔', 'I seek refuge in Allah from Satan, the accursed.']
];
for (const [arabic, urdu, english] of translationPairs) {
  const at = html.indexOf(arabic);
  assert.ok(at >= 0, 'Missing Arabic text: ' + arabic);
  const adjacent = html.slice(at, at + 700);
  assert.ok(adjacent.includes(urdu), 'Urdu meaning not adjacent to ' + arabic);
  assert.ok(adjacent.includes(english), 'English meaning not adjacent to ' + arabic);
}
assert.ok(!quality.includes('deen-added-translation'), 'Legacy translation injection should be removed');
const Arabic = /[\u0600-\u06ff]/u;
assert.ok(Arabic.test(html), 'Arabic or Urdu content unexpectedly absent');
assert.ok(html.length > 600000, 'Unexpectedly large reduction in preserved source content');
// Day 3: verify canonical duplicates against the preserved source, without removing passages.
const registry = JSON.parse(fs.readFileSync('audit/canonical-passages.json', 'utf8'));
assert.equal(registry.entries.length, 9, 'Nine original repeated-quotation groups expected');
const normaliseArabic = value => value.normalize('NFKC').replace(/[\\u064b-\\u065f\\u0670\\u06d6-\\u06ed\\u0640]/g, '').replace(/\\s+/g, ' ').trim();
const positions = [...html.matchAll(/<section\\s+class="panel(?: active)?"\\s+id="([^"]+)"/g)].map(m => ({ id: m[1], at: m.index }));
const quotes = [...html.matchAll(/<div class="arabic(?:-sm)?">([^<]+)<\\/div>/g)].map(m => ({
  value: normaliseArabic(m[1]),
  section: positions.filter(p => p.at < m.index).at(-1)?.id
}));
for (const record of registry.entries) {
  const found = quotes.filter(q => q.value === normaliseArabic(record.arabic)).map(q => q.section);
  assert.deepEqual(found, record.sections, 'Repeated quote missing or moved: ' + record.id);
  assert.ok(record.verification, 'Missing verification status: ' + record.id);
}
assert.ok(quality.includes('deen-cross-reference'), 'Runtime cross-reference presentation missing');
assert.ok(quality.includes('canonicalPassages'), 'Runtime canonical cross-reference index missing');

console.log('PASS: 27 preserved sections, one-to-one navigation, references, search and source translations');
