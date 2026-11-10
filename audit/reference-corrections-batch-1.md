# Reference corrections and verification findings — batch 1

Source: `index.html` on audit branch, no application edits. Status categories: **verified citation exists**, **correction recommended**, **needs further source checking**. References were compared with publicly accessible Arabic/English hadith texts; this is not an exhaustive authentication audit.

## REF-001: Sahih Muslim 2695–2696 conflated

**Location:** `dhikrduas`, composite formula beginning `سُبْحَانَ اللّٰهِ وَالْحَمْدُ لِلّٰهِ`.

**Current wording:** the four opening phrases are called the most beloved speech to Allah in `Sahih Muslim 2695-2696`.

**Finding:** Muslim **2695** explicitly contains the four phrases and says that saying them is dearer to the Prophet ﷺ than all the sun rises upon. Muslim **2696** is a **different longer formula** taught to a Bedouin and should not be presented as a second identical source for the four-word statement. Moreover the wording *'most beloved speech to Allah'* is a distinct formulation and should not be attributed to 2695 without qualification.

**Proposed replacement:** `Sahih Muslim 2695 records the four phrases and states that saying them is dearer to the Prophet ﷺ than all upon which the sun rises. Muslim 2696 narrates a different, longer dhikr; do not merge their wording. The additional phrase La hawla wa la quwwata illa billah is separately narrated.`

Primary comparison: https://sunnah.com/muslim/2695 and https://sunnah.com/muslim/2696

## REF-002: Bukhari 6398 used as support for later compiled istighfar

**Location:** `dhikrduas`, supplication beginning `أَسْتَغْفِرُ اللّٰهَ رَبِّيْ مِنْ كُلِّ ذَنْبٍ`.

**Finding:** Bukhari **6398** is an authentic, distinct invocation beginning **رَبِّ اغْفِرْ لِي خَطِيئَتِي وَجَهْلِي**. It is *not* the exact Arabic text of the displayed compiled supplication. The app does say it is composite, which should be retained; however 'every clause is rooted in an authentic source' is stronger than has been demonstrated clause by clause.

**Proposed replacement:** `This is a later compiled istighfar, not the verbatim text of Sahih al-Bukhari 6398. That narration contains a related supplication seeking forgiveness for mistakes, ignorance, intentional acts, and concealed or open acts. Each clause of the compiled wording needs separate source verification before being labelled hadith-based.`

Primary comparison: https://sunnah.com/bukhari/6398

## REF-003: Arabic Adhan supplication needs orthographic checking

**Location:** `moresalah`, `Dua after the Adhan`.

**Finding:** The displayed Arabic includes unusual letter sequences in the Prophet's name and `مَحْمُوْدَنِ`. These should be checked against the established Arabic of the Bukhari narration, rather than silently normalised by the app. The citation also lacks the hadith number in the local note.

**Action:** Compare Arabic and Urdu with Sahih al-Bukhari 614, confirm all variants, then propose a separate exact-text correction.

## REF-004: Incomplete collection-only citations

**Locations:** `dhikrduas`, `family`, `nawafil` and other chapters.

**Action:** Replace bare collection names with exact identifiers only after verifying the displayed Arabic, chain/grading and translation. Keep source disputes visible.

## Policy

These findings are proposed corrections **in the register only**. No changes to religious text, translation or references have been applied to `index.html`.
