#!/usr/bin/env node
// Run: node tests/content-integrity.test.js
// Uses only Node.js built-ins. Does not alter source files.
const fs=require('node:fs');
const assert=require('node:assert/strict');
const html=fs.readFileSync('index.html','utf8');
const enhancement=fs.readFileSync('assets/content-quality.js','utf8');
const ids=[...html.matchAll(/<section class="panel(?: active)?" id="([^"]+)">/g)].map(m=>m[1]);
assert.equal(ids.length,27,'The original 27 topic panels must remain');
assert.equal(new Set(ids).size,27,'Panel IDs must be unique');
for(const id of ids)assert.ok(html.includes('data-tab="'+id+'"'),'Missing navigation button: '+id);
assert.ok(html.includes('<script defer src="assets/content-quality.js"></script>'),'Missing quality script');
assert.ok(enhancement.includes('deen-topic-search'),'Missing topic search');
assert.ok(enhancement.includes('لَبَّيْكَ اللّٰهُمَّ عُمْرَةً'),'Missing Umrah translation target');
assert.ok(html.includes('Sahih al-Bukhari 614'),'Missing Adhan reference');
assert.ok(html.includes('Sahih Muslim 2695 as dearer'),'Missing Muslim clarification');
assert.ok(!html.includes('مَحْمُوْدَنِ'),'Known malformed Adhan transcription remains');
console.log('PASS: 27 panels, navigation, quality script, bilingual additions and reference corrections');
