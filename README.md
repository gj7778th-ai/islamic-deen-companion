# Islamic Deen Companion

**My Deen Companion · میرا دین کا ساتھی**

A bilingual/trilingual Islamic reference app presenting Qur'an, Sunnah, practical worship, duas, aqeedah and fiqh material in **Arabic, Urdu and English**.

## Current repository state

- `index.html` is the active app entry point.
- The app uses compact horizontal topic navigation.
- Arabic is presented separately from Urdu and English for clearer reading.
- Urdu uses Nastaliq styling and Arabic uses Naskh/Amiri styling.
- The visual system uses dark green and yellow-green accents.
- Source distinctions are retained where the app identifies Qur'an/hadith evidence, scholarly explanation, or uploaded-source material.

## Scope

The repository is intentionally separate from the **biddah-buster** project.

## Run locally

Open `index.html` in a modern browser. The app is designed as a static HTML application and does not require a build step.


## Source and evidence standard

The app separates:
- **Qur'an** — primary revelation, with surah/ayah references.
- **Hadith** — cited with collection and hadith reference where available; authenticity is identified where relevant.
- **Fiqh / madhhab guidance** — practical rulings are labelled by school or described as a broader Sunnah practice when appropriate.
- **Scholarly explanation** — commentary is identified as scholarly interpretation rather than presented as revelation.
- **Uploaded study sources** — user-provided material is preserved as study/reference material and is not automatically treated as an uncontested doctrinal authority.

Where uploaded material contains sectarian, polemical, disputed, or source-quality-sensitive claims, the app should attribute the claim to the source and distinguish it from independently established Qur'an, authentic hadith, or documented scholarly positions.

### Prayer presentation
The practical prayer guide uses the requested **Sunnah method** presentation. It includes raising the hands at the opening takbir, before and after rukūʿ, and when rising for the third rakʿah; hands are not folded during rukūʿ; and the tashahhud hand/index-finger presentation is kept at thigh level.

### Source note
Some uploaded PDFs have poor OCR or image-only text. Such files should be treated cautiously until the relevant Arabic/Urdu text can be checked against the original page image or a reliable edition.
