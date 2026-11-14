# Day 4 — source-level Qur'an and hadith verification (2026-11-15)

Scope: source-location and quotation comparisons for five of nine repeated Arabic passage groups. This is **not** a full semantic audit of translations or an authentication of all citations in the app.

| ID | Source checked | Comparison | Grade / caution |
|---|---|---|---|
| REP-001 | [Qur'an 33:40](https://quran.com/33/40) | Source location and quoted opening phrase confirmed; app only quotes part of the verse | Qur'an; hadith grading inapplicable. Uthmani spelling and translation not fully reviewed |
| REP-002 | [Sahih Muslim 487a](https://sunnah.com/muslim:487a) | Arabic invocation “Subbuhun Quddusun Rabbul-mala'ikati war-ruh” corresponds to the reported wording | Sahih Muslim; app typography/diacritics differ from published page |
| REP-005 | [Sahih al-Bukhari 13](https://sunnah.com/bukhari:13) | “None of you believes until he loves for his brother ...” matches reported Arabic sentence | Sahih Bukhari; precise translation scope still to review |
| REP-006 | [Jami' at-Tirmidhi 2910](https://sunnah.com/tirmidhi:2910) | App includes only the opening reward-for-a-letter portion, omitting the Alif-Lam-Mim continuation | Al-Tirmidhi called the route *hasan sahih gharib*; Darussalam grades it *Hasan*. Al-Tirmidhi mentions other marfu' and mawquf transmissions; preserve grader distinctions |
| REP-007 | [Qur'an 113:5](https://quran.com/113/5) | Full short verse and verse number compared | Qur'an; grading inapplicable |

## Additional checked source

[Sahih al-Bukhari 614](https://sunnah.com/bukhari:614) contains the post-Adhan supplication previously corrected in the app. Its central wording and numbering were independently checked on this run. This is not one of the nine repeated-passage records.

## Not yet verified

- REP-003: “La hawla ...” requires exact report context, not merely a common formula.
- REP-004: “Akmal al-mu'minin ...” includes two clauses; verify whether the combined wording matches a single transmission.
- REP-008 and REP-009: “Alhamdulillah ...” expressions require exact source identification, wording, and grading.
- 16 wider citation-verification workstreams in `audit/citation-verification-register.md` remain open. Do not infer that these are verified from the five records above.
- No semantic comparison of all 232 Arabic passages and their Urdu/English translations has been completed.
- No live browser or mobile QA in this run.

## Code / preservation

Updated only `audit/canonical-passages.json`: five source identifiers, URLs, scoped verification notes and explicit grading/uncertainty fields. No changes to `index.html`, script behavior, any original chapter, or the remaining four unverified records. The nine groups and 27 sections remain structurally untouched by this commit.

## Test status

Primary source pages were directly inspected. No Node test, CI run or browser test was executed. Existing source integrity tests remain available at `tests/content-integrity.test.js`; run them before a merge proposal.

## Next

Continue the remaining four repeated hadith source checks, resolve misleading attribution in original chapters only after verified source comparison, and record edition-specific variants. Then expand thin chapters in separate additive commits. No merge or deployment without approval.
