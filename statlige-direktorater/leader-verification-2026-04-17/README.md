# Leader Verification Report

Audit date: 17 April 2026

Scope: verify the `leader` field for all 78 entries in `index.html` against official sources.

Method:
- Extracted the live dataset from `index.html` into `data.json`.
- Split the workload into 10 batches.
- Ran 6 sub-agents in parallel, which was the environment limit, and verified the remaining batches directly in the main thread.
- Preferred official agency leadership/contact pages and `regjeringen.no` appointment pages.

Result:
- 73 entries verified as correct.
- 4 entries are wrong in the current dataset.
- 1 entry remains a documentation gap, but no contrary source was found.

## Wrong Leaders

### 1. Arbeids- og velferdsdirektoratet (NAV)
- In `index.html`: `Hege Nilssen (tiltrer 1. juni 2026; Eve Vangsnes Bergli fungerende)`
- Current published leader on 17 April 2026: `Eve Vangsnes Bergli (konstituert arbeids- og velferdsdirektør)`
- Why this is wrong: `regjeringen.no` says Hege Nilssen was appointed on 27 March 2026, but that her start date was **not yet clarified**. The dataset hard-codes `1. juni 2026`, which is unsupported, and NAV's own site still presents Bergli as the acting/current leader.
- Sources:
  - https://www.regjeringen.no/id3155064/
  - https://www.nav.no/samarbeidspartner/kontakt-direktoratet

### 2. Barne-, ungdoms- og familiedirektoratet (Bufdir)
- In `index.html`: `Hege Nilssen (til 1. juni 2026)`
- Current published leader on 17 April 2026: `Hege Nilssen`
- Why this is wrong: the name is still correct, but the specific end date is unsupported. The same appointment press release says the NAV start date was **not yet clarified**.
- Sources:
  - https://www.bufdir.no/om
  - https://www.regjeringen.no/id3155064/

### 3. Direktoratet for samfunnssikkerhet og beredskap (DSB)
- In `index.html`: `Lars Jacob Hiim`
- Current published leader on 17 April 2026: `Elisabeth Askim (konstituert direktør fra 14. april 2026)`
- Why this is wrong: Hiim was appointed on 27 February 2026, but DSB states Askim is acting director from 14 April 2026 until Hiim takes up the post.
- Sources:
  - https://www.dsb.no/aktuelt/elisabeth-askim-konstitueres-som-direktor-i-dsb/
  - https://www.regjeringen.no/no/aktuelt/lars-jacob-hiim-blir-ny-direktor-for-direktoratet-for-samfunnssikkerhet-og-beredskap/id3150421/

### 4. Brønnøysundregistrene
- In `index.html`: `Inger-Lise Strøm`
- Current published leader on 17 April 2026: `Lise Dahl Karlsen (konstituert direktør)`
- Why this is wrong: `regjeringen.no` announced Strøm's appointment on 19 December 2025, but Brønnøysundregistrene's own organisation page still lists Karlsen as the acting director. For a current-leader field, the agency's own live leadership page should win until the transition is reflected.
- Sources:
  - https://www.brreg.no/om-oss/dette-er-oss/organisasjonen-var/
  - https://www.regjeringen.no/no/aktuelt/ny-side7/id3143788/

## Remaining Uncertainty

### Statens sivilrettsforvaltning (SRF)
- In `index.html`: `Siv Hallgren`
- Status: no contrary source found, but the evidence is older than ideal.
- Assessment: likely still correct, not counted as wrong.
- Sources:
  - https://www.regjeringen.no/no/aktuelt/siv-hallgren-blir-ny-direktor-i-statens-sivilrettsforvaltning/id2928577/
  - https://www.regjeringen.no/contentassets/8a064321ff1c49599f54baaa6e4c2ed9/tildelingsbrev-statens-sivilrettsforvaltning-2026.pdf

## Files In This Folder

- `notes.md`: working log
- `extract_data.js`: extractor for the embedded dataset
- `create_batches.js`: batch generator used for parallel verification
- `data.json`: extracted dataset snapshot used for this audit
- `batch-*.md`: non-overlapping verification slices
