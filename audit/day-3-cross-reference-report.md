# Day 3 — canonical repeated passages and contextual cross-references

Date: 2026-11-14. Branch: `audit/content-preservation-2026-11-11`. No changes to the 27 original chapter texts, no merge, no deployment.

## Implemented
1. `audit/canonical-passages.json`: machine-readable canonical index of **nine** exact repeated Arabic quotation groups (`REP-001` through `REP-009`). Includes section occurrence order and explicit source-verification status. Only Qur'an **33:40** and **113:5** are identified by verse location; this does not certify edition-specific transcription or translation. Hadith citation IDs and grading remain pending.
2. `assets/content-quality.js`: for repeated Arabic quotations actually present on the page, add unobtrusive contextual navigation buttons to other occurrences. Keeps the full Arabic, Urdu, English, and surrounding explanation at **every** location. Links between occurrences in the same chapter are supported. Does not modify the original quotations.
3. `tests/content-integrity.test.js`: regression assertions that the nine canonical records each match the expected two original source locations, plus the original 27-section tests.

## Inspection / verification
- Inspected `index.html` and confirmed **all nine groups have exactly two matching Arabic divs** after Unicode diacritic normalisation.
- Matched their actual section order to the register: **9/9**.
- Static source checks only. **Node tests and real-browser/mobile interaction have not been executed during this session**; navigation and CSS still need visual/keyboard QA.

## Remaining defects and editorial limits
- **Canonical record is not a canonical authenticated hadith citation**: seven entries have no independently verified hadith number, edition or grading. Do not infer authenticity from repetition.
- Exact whole-block matching means partial quotations, spelling variants and texts split across HTML elements will not be linked automatically.
- `REP-008` and `REP-009` occur twice **inside the same chapter**; the navigation targets distinct passage anchors, but must be checked in a browser.
- Search and cross-references are additive; the original repetition has deliberately not been deleted.
- Day 4: independently check Qur'an transcription and hadith references against primary sources; distinguish Sahih, Hasan, Da'if and disputed grading with edition-specific citations. Correct only verified discrepancies.

## Commits
- `0dd519973a727e03913e9f6897f21dc05a6373da` — canonical index.
- `d2c2d1a2d0284c451a061228a56c93dc0db09688` — cross-reference UI.
- `3c7de39da0bad3ce1d66550c3520be2333bb735e` — regression tests.
