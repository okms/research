# Leader Verification Notes

## 2026-04-17

### Setup
- Created this investigation folder to keep all work products isolated.
- Located the live dataset in `index.html` under `const data = [...]`.
- Confirmed the repo already contains older root-level verification notes, but those will be treated as hints rather than authoritative output.
- Added `extract_data.js` to parse the embedded dataset and exported `data.json`.
- Confirmed the live dataset currently contains 78 entries.
- Generated `batch-01.md` through `batch-10.md` to split the verification work into non-overlapping slices.

### Parallel verification
- Started the maximum number of concurrent sub-agents permitted by the environment: 6.
- Assigned batches 1-6 to sub-agents for official-source verification.
- Verified batches 7-10 directly with web searches against official agency or regjeringen.no pages.

### Interim findings from direct checks
- Batches 7, 9 and 10 currently look consistent with official sources.
- Batch 8 has one likely live mismatch:
  - `Brønnøysundregistrene`: `index.html` says `Inger-Lise Strøm`, but the official organisation page currently shows `konstituert direktør Lise Dahl Karlsen`. This needs to be treated as the current published leader unless a newer official source confirms Strøm has taken over.

### Final consolidated findings
- Total checked: 78 entries from `index.html`.
- Confirmed correct: 73.
- Confirmed wrong: 4.
- Uncertain / documentation gap: 1.

### Confirmed wrong entries
- `Arbeids- og velferdsdirektoratet (NAV)`: stored value says `Hege Nilssen (tiltrer 1. juni 2026; Eve Vangsnes Bergli fungerende)`. Official sources on 2026-04-17 still show `Eve Vangsnes Bergli` as the acting/current leader, while regjeringen.no says Hege Nilssen was appointed on 2026-03-27 and that the start date was not yet clarified.
- `Barne-, ungdoms- og familiedirektoratet (Bufdir)`: stored value says `Hege Nilssen (til 1. juni 2026)`. Official sources still show `Hege Nilssen` as director, but the specific end date is unsupported because regjeringen.no says her NAV tiltredelsesdato was not clarified as of 2026-03-27.
- `Direktoratet for samfunnssikkerhet og beredskap (DSB)`: stored value says `Lars Jacob Hiim`. Official DSB source says `Elisabeth Askim` is acting director from 2026-04-14 until Hiim takes up the role.
- `Brønnøysundregistrene`: stored value says `Inger-Lise Strøm`. Official Brønnøysundregistrene organisation page currently shows `Lise Dahl Karlsen` as acting director, even though regjeringen.no announced Strøm's appointment on 2025-12-19.

### Uncertain / needs manual judgement
- `Statens sivilrettsforvaltning (SRF)`: no newer contrary source was found after Siv Hallgren's appointment in 2022, and 2024/2026 government documents still align with her being director. I did not classify this as wrong, but the lack of a current leadership page means it is a residual verification gap.
