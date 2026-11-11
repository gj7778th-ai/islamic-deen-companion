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

## Session 1 — 12 November 2026: preservation and navigation QA
- Strengthened `tests/content-integrity.test.js` to assert the **exact preserved set** of 27 panel IDs, unique IDs, and one-to-one navigation button correspondence (not merely count or substring presence).
- Added checks for a single search script include, reference corrections, search accessibility hooks, translation insertion targets, Arabic/Urdu presence and a broad source-length regression guard.
- Added `.github/workflows/content-integrity.yml` to run offline Node assertions and `node --check assets/content-quality.js` on pushes to the preservation branch and relevant pull requests.
- **Direct connector-based static inspection passed**: 27 unique panels, 27 matching nav buttons, script link, translation hooks, and absence of the known malformed Adhan transcription. These checks were evaluated against the GitHub branch contents.
- **Not yet confirmed**: execution result of the GitHub Actions workflow, browser rendering, mobile accessibility, and all content-source claims. The source-length threshold is a coarse warning, not a content equivalence proof.
- Commits: `fdb2f8118874d0e81f0562242a52d8927b65ee2d` (test strengthening); `566c3def6839c8897a4261ce35398f1adddda66e` (CI workflow).
- No deletion, merge, main-branch write or deployment.
