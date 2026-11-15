# Day 5 — Bilingual substantive chapter expansion

## Scope and preservation
Edited only `index.html` on `audit/content-preservation-2026-11-11`. Added approximately 9,595 characters of new material **inside** the existing `zakat`, `seerah` and `pillars` panels. No existing paragraphs were deleted or rewritten; all 27 panel opening tags remain present. No merge or deployment.

## Zakat
- Worked illustrative lunar-year example: cash 8,000 + trading inventory 3,000 + collectible receivables 1,000 − qualifying immediately payable debt 2,000 = 10,000; at 2.5%, 250 units if applicable nisab/hawl conditions are met.
- Clearly distinguishes personal-use property from trading stock, highlights juristic differences on jewellery, debts, pensions, investments and receivables.
- Notes Qur'an 9:60's eight recipient classes and the importance of verifying eligibility and intention.
- Separates agricultural dues from 2.5% cash zakat; points to Sahih al-Bukhari 1483 for natural vs effort-dependent irrigation rates.
- All new explanatory material includes adjacent Urdu.

## Seerah
- Added evidence-based reading guidance distinguishing Qur'an, Sahih hadith, early historical reports and later retellings.
- Sources: Qur'an 96:1–5, 68:4, 33:21, 9:40, 49:10, 5:8; Sahih al-Bukhari 3.
- Explicitly warns that source attribution alone does not establish the authenticity of every reported historical detail.
- Adjacent Urdu explanations.

## Five Pillars
- Expanded the five introductory cards with a bilingual practical checklist and Quranic anchors.
- Sources: Qur'an 47:19, 48:29, 4:103, 9:60, 2:183, 2:185, 3:97; Sahih al-Bukhari 8 and Sahih Muslim 16.
- Clarifies that the checklist is an editorial educational synthesis, not an additional hadith.

## Verification performed
- Retrieved current source and blob SHA before updating.
- Programmatically checked that the resulting source still contains 27 panel opening tags.
- Confirmed the update succeeded with a GitHub commit.
- **Not performed:** local Node test execution, live browser QA, complete semantic review of all Arabic/Urdu/English translations, scholarly verification of all older citations, school-by-school rulings for contemporary zakat assets.

## Next steps
1. Run `node tests/content-integrity.test.js` in a checkout or GitHub Actions.
2. Independently review quoted source references and juristic qualifications, especially zakat deductions and recipient transfer rules.
3. Day 6: comparative fiqh/aqeedah attribution, accessibility, mobile layout and usability checks.
4. Day 7: full validation and explicit remaining-gap register.
