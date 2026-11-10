# Content-quality build — first implementation batch

Branch: `audit/content-preservation-2026-11-11`. The original 27 panels remain. **No merge or deployment.**

## Implemented
- Added `assets/content-quality.js` for client-side English/Urdu/Arabic topic search. Results switch to the existing panel using its original navigation button.
- Added directly paired bilingual translations for the Umrah intention and the Adhan response. Existing Arabic and commentary retained.
- Corrected obvious malformed Arabic letters in the post-Adhan supplication; supplied Sahih al-Bukhari 614 in its adjacent reference.
- Clarified that Sahih Muslim 2695 and 2696 are distinct reports, rather than a single identical source.
- Removed a categorical authenticity claim about every clause of a later compiled istighfar.
- Added a Node built-in integrity test for 27 panels, unique IDs, navigation and known corrections.

## Outstanding
- No live browser or mobile visual QA has been performed.
- Search operates at **section** level, not paragraph level; results are limited to 20 and may include broad matches.
- Translations for all 232 Arabic blocks have **not** been fully semantically verified.
- The repeated quotation groups have been identified but **not deleted**; shared canonical citation records remain to be implemented.
- Full hadith grading and edition-by-edition checks remain pending.

## Run integrity check

```sh
node tests/content-integrity.test.js
```

## Editorial safeguards
Keep the original source available through Git history. Before any further changes to Arabic or doctrinal material, compare against a primary source and record the exact wording and edition. Never treat a source citation's mere presence as proof of authentication.
