# Passage-level duplicate and translation audit

Source: unchanged `index.html`, blob `33db024e40c791a2e7c1aca3363225df73093698`. Audit date 2026-11-11. Detection is structural/heuristic and **does not prove semantic duplication or missing translation**. No original text edited.

## Repeated Arabic quotations (identical after diacritic normalisation)

### REP-001 — `welcome`, `iman`

> مَا كَانَ مُحَمَّدٌ أَبَآ أَحَدٍ مِّنْ رِّجَالِكُمْ وَلٰكِنْ رَّسُوْلَ اللّٰهِ وَخَاتَمَ النَّبِيّٖنَ

Occurrences: 2. Recommendation: retain one canonical quotation/reference record, preserve contextual discussion in each chapter; verify all Urdu and English translations before linking.

### REP-002 — `salah`, `salah`

> سُبُّوْحٌ قُدُّوْسٌ رَّبُّ الْمَلٰٓئِكَةِ وَالرُّوْحِ

Occurrences: 2. Recommendation: retain one canonical quotation/reference record, preserve contextual discussion in each chapter; verify all Urdu and English translations before linking.

### REP-003 — `moresalah`, `dhikrduas`

> لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللّٰهِ

Occurrences: 2. Recommendation: retain one canonical quotation/reference record, preserve contextual discussion in each chapter; verify all Urdu and English translations before linking.

### REP-004 — `duties`, `ethics`

> أَكْمَلُ الْمُؤْمِنِيْنَ إِيْمَانًا أَحْسَنُهُمْ خُلُقًا، وَخِيَارُكُمْ خِيَارُكُمْ لِنِسَآئِهِمْ

Occurrences: 2. Recommendation: retain one canonical quotation/reference record, preserve contextual discussion in each chapter; verify all Urdu and English translations before linking.

### REP-005 — `duties`, `ethics`

> لَا يُؤْمِنُ أَحَدُكُمْ حَتّٰى يُحِبَّ لِأَخِيْهِ مَا يُحِبُّ لِنَفْسِهٖ

Occurrences: 2. Recommendation: retain one canonical quotation/reference record, preserve contextual discussion in each chapter; verify all Urdu and English translations before linking.

### REP-006 — `sources`, `quranstructure`

> مَنْ قَرَأَ حَرْفًا مِّنْ كِتَابِ اللّٰهِ فَلَهٗ بِهٖ حَسَنَةٌ وَّالْحَسَنَةُ بِعَشْرِ أَمْثَالِهَا

Occurrences: 2. Recommendation: retain one canonical quotation/reference record, preserve contextual discussion in each chapter; verify all Urdu and English translations before linking.

### REP-007 — `ethics`, `dhikrduas`

> وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ

Occurrences: 2. Recommendation: retain one canonical quotation/reference record, preserve contextual discussion in each chapter; verify all Urdu and English translations before linking.

### REP-008 — `dhikrduas`, `dhikrduas`

> اَلْحَمْدُ لِلّٰهِ الَّذِيْ بِنِعْمَتِهٖ تَتِمُّ الصَّالِحَاتُ

Occurrences: 2. Recommendation: retain one canonical quotation/reference record, preserve contextual discussion in each chapter; verify all Urdu and English translations before linking.

### REP-009 — `dhikrduas`, `dhikrduas`

> اَلْحَمْدُ لِلّٰهِ عَلٰى كُلِّ حَالٍ

Occurrences: 2. Recommendation: retain one canonical quotation/reference record, preserve contextual discussion in each chapter; verify all Urdu and English translations before linking.

## Arabic blocks without an immediately following Urdu translation div

There are 5 structural candidates among 232 Arabic blocks. **Some already have Urdu translations before the Arabic or in the enclosing step**; inspect before calling them missing.

| Section | Arabic text (excerpt) | Next element | Review |
|---|---|---|---|
| `wudu` | بِسْمِ اللّٰہ | `step` | Check preceding Urdu and full English gloss; add adjacent bilingual translation only if absent |
| `salah` | اَللّٰهُ أَكْبَرُ | `step` | Check preceding Urdu and full English gloss; add adjacent bilingual translation only if absent |
| `salah` | أَعُوْذُ بِاللّٰہِ مِنَ الشَّيْطَانِ الرَّجِيْمِ ۔ بِسْمِ اللّٰہِ الرَّحْمٰنِ الرَّحِ | `arabic` | Check preceding Urdu and full English gloss; add adjacent bilingual translation only if absent |
| `hajj` | لَبَّيْكَ اللّٰهُمَّ عُمْرَةً | `step-note` | Check preceding Urdu and full English gloss; add adjacent bilingual translation only if absent |
| `moresalah` | لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللّٰهِ | `step-note` | Check preceding Urdu and full English gloss; add adjacent bilingual translation only if absent |

## Confirmed presentation gaps for editorial repair

- `hajj`: Arabic **لَبَّيْكَ اللّٰهُمَّ عُمْرَةً** is followed by an English discussion of Talbiyah, but no immediately adjacent Urdu/English translation of this particular phrase. Proposed English: **Here I am, O Allah, for Umrah**; Urdu: **اے اللہ! میں عمرے کے لیے حاضر ہوں۔** Preserve existing intention discussion.
- `moresalah`: Arabic **لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللّٰهِ** has an English gloss in the next note and preceding Urdu instruction, but no directly paired Urdu translation. Proposed Urdu: **اللہ کی مدد کے بغیر نہ کوئی طاقت ہے نہ قوت۔**
- `wudu`: **بِسْمِ اللّٰہ** is already explained in both languages *before* the Arabic; not a missing translation.
- `salah`: **اَللّٰهُ أَكْبَرُ** and the opening recitation are in step context; check complete nearby translations, not only adjacency.

## Quality controls

- Do not collapse the same verse used in two different arguments without preserving contextual explanations.
- Do not mistake repeated formulae in different acts of worship for accidental duplication.
- Scan every Arabic quotation for **both** Urdu and English meaning, and flag transliteration as distinct from translation.
- Add verse/hadith IDs to quotation records rather than relying on nearest `step-note` parsing.
