# Day 3 — Source-of-truth and cross-reference integration register (2026-11-13)

## Verified project identities
- **Published Lovable app:** Islamic Guidance Hub, project `00682a42-ed4f-49e7-b8c8-383cf89b07cb`, published at `https://biddah-buster.lovable.app/`. Lovable reported ready and published; latest observed commit `343f4f347d0e3d4e8f24f017bf96b2b333fec14d`.
- **This GitHub repository:** `gj7778th-ai/islamic-deen-companion`, development branch `audit/content-preservation-2026-11-11`.
- **Critical distinction:** This repository's README explicitly says it is *intentionally separate* from the biddah-buster project. Therefore, do not claim GitHub commits are automatically synchronized to the Lovable application or attempt an automatic merge across their different codebases.

## Verified evidence for preservation
- Existing GitHub Day 2 audit reports 27 HTML panel sections, 168 smaller Arabic blocks each adjacent to Urdu, and three newly source-level bilingual translation sets. These are structural observations, not a semantic accuracy certification.
- Lovable has a React-oriented application, guide diagrams, source-book asset manifests, and downloadable Salah/Umrah PDF cards. Its most recent observed edit was a compact citation panel on 13 November.
- GitHub README says its active entry point is a standalone `index.html` with no build step. Lovable is not equivalent to that static HTML implementation.

## Canonical citation and duplication register — schema for subsequent verified entries
Use one row per *exactly verified* primary quotation; do not collapse distinct wordings or disputed reports.

| Field | Meaning |
| --- | --- |
| canonical_id | Stable `quran:<surah>:<ayah>`, `hadith:<collection>:<reference>:<variant>`, or `dua:<verified-source>:<id>` |
| arabic_excerpt | Exact original quotation (preserve diacritics/variants) |
| primary_reference | Surah/ayah or hadith collection/number/edition |
| verification_status | unverified / wording-verified / reference-verified / grading-verified |
| grading | Authenticated classification only with named source; otherwise pending |
| translation_ur / translation_en | Approved meanings with translator/edition attribution if published |
| occurrence_locations | All chapter/section anchors where the quotation occurs |
| chapter_context | Retain separate interpretations, school-specific commentary and context |
| duplication_action | Cross-link only; never silently remove content |

## Cross-project integration gates
1. Map all 27 GitHub panel IDs to Lovable routes/section IDs, recording unmatched items.
2. Compare citation components and translation display between the standalone HTML and Lovable React app.
3. Create canonical IDs only after matching exact Arabic and source references; repeated passages can link to the same canonical record while preserving every chapter's explanatory text.
4. Verify Qur'an references and hadith wording against primary sources before marking verified; record disputed grading and madhhab attributions explicitly.
5. Run repository Node tests and Lovable build/browser checks separately before proposing any synchronization.
6. Present a reviewed migration diff; do not merge, deploy, or overwrite Lovable without user approval.

## Outstanding limitations
No source-level cross-project diff, test execution, citation semantic verification, or live browser test was completed in this pass. This register documents a newly verified integration risk and a safe, auditable path; it is not a claim of content synchronization.
