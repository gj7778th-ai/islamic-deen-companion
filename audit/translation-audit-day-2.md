# Day 2 — Arabic/Urdu/English translation quality pass (2026-11-13)

## Completed source changes

- **Hajj / Umrah intention:** added adjacent Urdu and English meanings for `لَبَّيْكَ اللّٰهُمَّ عُمْرَةً`, without changing the Arabic or existing Talbiyah instructions.
- **Adhan response:** added adjacent Urdu and English meanings for `لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللّٰهِ`, preserving the explanation of when it is recited.
- **Salah step 3:** added adjacent Urdu and English meanings for Ta'awwudh and Tasmiyah, without changing the following al-Fatihah text or its existing Urdu translation.
- Moved the first two bilingual meanings from ephemeral JavaScript DOM injection into durable source HTML, so they remain available when enhancement JavaScript is disabled.
- Updated the Node integrity test to assert source-level adjacency of all three Arabic/Urdu/English sets and to reject obsolete runtime translation injection.

## Structural review

The current source contains **168** `arabic-sm` blocks. **168** are immediately followed by a `step-ur` element; the remaining **0** require contextual review rather than being automatically labelled untranslated. The last group is:


This is **not** a semantic translation audit of all Arabic quotations. `arabic` (larger text) blocks, English alignment, and exact Qur'anic translation fidelity remain outstanding. Counts apply to this specific HTML structure only, not the broader Lovable React project.

## Verification and limitations

- Re-inspected the committed HTML through the GitHub connector and confirmed **27 panel sections**.
- Checked the added translation strings in source and the revised test assertions.
- **Node test execution and browser/mobile rendering were not performed in this session.** Automated workflow results are not yet verified.
- The existing Arabic source text was preserved. The new translations are plain-language meanings, not claims of a particular published translation.
- The GitHub development branch is the only target; no merge, main-branch modification, or deployment.

## Next passes

1. Review all larger `arabic` blocks and compare their Urdu and English translations at the individual verse/supplication level.
2. Check exact Qur'anic ayah references and hadith wording before editorial correction.
3. Create canonical quotation IDs and cross-reference repeated texts without removing chapter-specific explanations.
