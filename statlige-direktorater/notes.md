# Statlige direktorater – Research Notes

## 2026-04-16: Validering og komplettering

### Oppgave
Validere at alle statlige direktorater er med i oversikten, kvalifisere KI-relevans, og kryssreferere mot autoritative kilder.

### Kilder
- Wikipedia: https://no.wikipedia.org/wiki/Liste_over_norske_direktorat
- DFØ: https://www.dfo.no/nokkeltall-og-statistikk/organisering-og-ansatte-i-staten/organisering-av-virksomheter-i-staten

### Arbeidsmetode
1. Hentet komplett liste fra Wikipedia over norske direktorater
2. Hentet DFØ-oversikt over statlige virksomheter
3. Ekstrahert nåværende data fra index.html
4. Kryssreferert for å finne manglende direktorater
5. Researched KI-relevans for alle etater med web-søk

### Funn

#### Nåværende status (før oppdatering)
- 52 etater i index.html
- 16 departementer
- 8 med KI-relevant tag og kiReason
- 2 merket som eksisterende kunde (UDI, Jernbanedirektoratet)

#### Wikipedia-liste: 65 aktive direktorater
Kilde: https://no.wikipedia.org/wiki/Liste_over_norske_direktorat

#### Manglende direktorater (ikke i vår oversikt)
Sammenlignet med Wikipedia-listen mangler disse:

**Energidepartementet:**
- Havindustritilsynet (NB: vi har Petroleumstilsynet under AID – dette er nytt navn, flyttet til ED)

**Helse- og omsorgsdepartementet:**
- Direktoratet for e-helse (kan være slått inn i Helsedirektoratet)
- Direktoratet for strålevern og atomsikkerhet (DSA)
- Norsk pasientskadeerstatning (NPE)

**Justis- og beredskapsdepartementet:**
- Sivil klareringsmyndighet (SKM)
- Statens sivilrettsforvaltning (SRF)

**Klima- og miljødepartementet:**
- Riksantikvaren

**Kommunal- og distriktsdepartementet:**
- Valgdirektoratet

**Kultur- og likestillingsdepartementet:**
- Kulturtanken
- Kunst i offentlige rom (KORO)
- Norsk filminstitutt (NFI)
- Norsk kulturråd

**Kunnskapsdepartementet:**
- Sikt (Direktoratet for IKT og fellestjenester i høyere utdanning)
- Lånekassen
- NOKUT

**Nærings- og fiskeridepartementet:**
- Direktoratet for mineralforvaltning (DMF)
- Justervesenet
- Konkurransetilsynet
- Norsk akkreditering (NA)
- Norsk nukleær dekommisjonering (NND)

**Samferdselsdepartementet:**
- Statens havarikommisjon (SHK)
- Vegtilsynet

#### Korrigeringer nødvendig
- Petroleumstilsynet → Havindustritilsynet (nytt navn, ny dep.)
- Noen departementstilhørigheter kan være utdatert (Wikipedia bruker gamle dep.navn)
- IMDi: Wikipedia har det under Kunnskapsdepartementet, vi under AID

#### KI-relevans runde 2 (nye funn – lagt til)
Disse har fått KI-relevant tag med kiReason:
- Statens vegvesen (autonome kjøretøy, trafikkflyt, digital tvilling)
- Kartverket (ML for satellittbilder, automatisert kartlegging)
- SSB (ML for klassifisering, NLP, alternative datakilder)
- Arkivverket (KI-OCR/HTR, digitalisering av arkiver)
- Miljødirektoratet (fjernmåling, artsidentifisering, klima)
- Tolletaten (risikobasert grensekontroll, ML-analyse)
- Nkom (koordinerende tilsynsmyndighet for EU AI Act)

#### DFØ-data (72 direktorater i 2025)
Kilde: https://www.dfo.no/nokkeltall-og-statistikk/organisering-og-ansatte-i-staten
- 187 forvaltningsorganer totalt, 72 klassifisert som direktorater
- 178 969 ansettelsesforhold i staten (2024)
- DFØs definisjon er bred: inkluderer tilsyn, etater, vesen osv.

#### Korrigeringer utført
- Petroleumstilsynet → Havindustritilsynet (nytt navn, flyttet til Energidepartementet)
- NSM flyttet til Justis- og beredskapsdepartementet (iht. DFØ)
- DFØ flyttet til Finansdepartementet (iht. DFØ)
- Lagt til Direktoratet for eksportkontroll og sanksjoner (Deksa) – nytt 2025

#### Endelig status etter oppdatering
- **78 etater/direktorater** i oversikten (superset av DFØs 72)
- **16 departementer**
- **15 med KI-relevant tag og kiReason**
- **2 eksisterende kunder** (UDI, Jernbanedirektoratet)
- Kryssvalidert mot Wikipedia (65 aktive) og DFØ (72 direktorater)

## 2026-04-17: Lederverifisering

### Oppgave
Tilbakemelding om at mange av lederne i oversikten er utdaterte. Verifiser navn på leder for alle 78 direktorater mot offisielle kilder (regjeringen.no, etatens egne sider) per april 2026.

### Arbeidsmetode
- Delegert til 8 parallelle sub-agenter (Sonnet) som hver validerte ~10 direktorater
- Hver lederstatus markert som correct / wrong / uncertain
- Kilder primært regjeringen.no (utnevnelsessaker) og etatens "om oss / ledelse"-sider

### Resultat
- **32 korrekte** (uendret)
- **44 feil/utdaterte → rettet**
- **2 tomme felt fylt inn** (Maritim pensjonskasse → Åmund T. Lunde; Deksa → Annette Tjaberg)
- Arkivverket omdøpt til Nasjonalarkivet per 1. januar 2026 (navn og tittel oppdatert)
- Direktoratet for e-helse: sammenslått med Helsedirektoratet per 1. jan 2024 (markert i leder-feltet)
- Norsk kulturråd: ikke lenger eget direktorat med egen direktør – fungerer nå som rådsorgan under Kulturdirektoratet (rådsleder Kristian Seltun)
- Etter ny kontroll samme dag ble **4 gjenstående feil** identifisert og rettet i `index.html`, slik at totalen ble **48 utdaterte lederfelt**.

### Oversikt over rettelser (gammel → ny)

**Arbeids- og inkluderingsdepartementet**
- NAV: Hans Christian Holte → Eve Vangsnes Bergli (konst.; Hege Nilssen utnevnt 27. mars 2026, tiltredelse ikke avklart)
- Arbeidstilsynet: Trude Vollheim → Ingvill Kvernmo (okt 2024)
- Maritim pensjonskasse: tom → Åmund T. Lunde (org. omdøpt fra Pensjonstrygden for sjømenn 2023)

**Barne- og familiedepartementet**
- Bufdir: Kjetil Andreas Ostling → Hege Nilssen
- Forbrukertilsynet: Trond Rønningen → Bente Øverli (feb 2025)

**Digitaliserings- og forvaltningsdepartementet / Finansdep.**
- DFØ: Hilde Singsaas → Nina Cecilie Kulås (apr 2025)

**Forsvarsdepartementet**
- Forsvarsmateriell: Mette Sørfonden → Gro Jære
- Forsvarsbygg: Thorbjørn Thoresen → Camilla Mathiesen (konst.)

**Justis- og beredskapsdepartementet**
- NSM: Sofie Nystrøm → Arne Christian Haugstøyl (mai 2024)
- DSB: Elisabeth Aarsæther → Elisabeth Askim (konst. fra 14. april 2026; Lars Jacob Hiim utnevnt 27. feb 2026)
- Politidirektoratet: Benedicte Bjørnland → Håkon Skulstad (2025)
- UDI: Mari Trommald → Snorre Sæther (merk: Trommald var aldri UDI-direktør – original data feil)
- Statens sivilrettsforvaltning: Sven Olav Rørvik → Siv Hallgren (sep 2022)

**Finansdepartementet**
- Tolletaten: Øystein Børmer → Benedicte Bjørnland (2026, Børmer til Statsbygg)

**Helse- og omsorgsdepartementet**
- Helsedirektoratet: Bjørn Guldvog → Cathrine Marie Lofthus (1. aug 2025)
- DMP: Audun Hågå → Trygve Ottersen (nov 2024)
- Helsetilsynet: Jan Fredrik Andresen → Sjur Lehmann (jan 2024)
- Direktoratet for e-helse: avviklet 1. jan 2024 (sammenslått med Helsedirektoratet)

**Klima- og miljødepartementet**
- Miljødirektoratet: Ellen Hambro → Hilde Singsaas (1. mars 2025)

**Kommunal- og distriktsdepartementet**
- Husbanken: Osmund Kaldheim → Jan Hjelle
- Distriktssenteret: Halvor Holmli → Marit Lofnes Mellingen (apr 2022)
- Valgdirektoratet: Bjørn Berg → Siri Dolven

**Kultur- og likestillingsdepartementet**
- Kulturdirektoratet: Kristin Danielsen → Øystein Strand (1. mars 2026)
- Kulturtanken: Øystein Strand → Matias Hilmar Iversen (2023)
- KORO: Sigurd Sverdrup Sandmo → Karianne Kampevold Sætre (april 2026)
- Språkrådet: Åse Wetås → Nina Teigland (konst., Wetås til Nasjonalbiblioteket apr 2026)
- Norsk kulturråd: Kristin Danielsen → Kristian Seltun (rådsleder)
- Arkivverket → Nasjonalarkivet (navn- og titteloppdatering)

**Kunnskapsdepartementet**
- Sikt: Roar Olsen → Terje Mørland
- Lånekassen: Morten Søberg → Kjetil Moen
- Statped: Tone Mørk → Annemarie Bechmann Hansen

**Landbruks- og matdepartementet**
- Landbruksdirektoratet: Jørn Rolfsen → Eli Reistad (2024)

**Nærings- og fiskeridepartementet**
- Brønnøysundregistrene: Lars Peder Brekk → Lise Dahl Karlsen (konst.; Inger-Lise Strøm utnevnt 19. des 2025, men ikke reflektert som tiltrådt på etatens ledelsesside per 17. april 2026)
- Sjøfartsdirektoratet: Knut Arild Hareide → Alf Tore Sørheim (apr 2025)
- DMF: Randi Skirstad Grini → Bjarte Rambjør Heide (1. nov 2024)
- Justervesenet: Kristine Bue Aasen → Geir A. Samuelsen
- Konkurransetilsynet: Tina Søreide → Mads Magnussen (1. jan 2026)
- Norsk akkreditering: Bente Mathisen → Inger Cecilie Laake
- Dagligvaretilsynet: Magnus Gabrielsen → Tor Erik Engebretsen (NB: regjeringen har foreslått avvikling i 2026-budsjettet)

**Energidepartementet**
- Havindustritilsynet: Anne Myhrvold → Sigve Knudsen (1. mai 2025)

**Samferdselsdepartementet**
- Jernbanedirektoratet: Knut Sletta → Anne Iren Fagerbakke (nov 2025)
- Statens havarikommisjon: Kåre Halvorsen → Ingvild K. Ytrehus (fung.)
- Vegtilsynet: Bjørne Grimsrud → Vegard Hansen (2023)

**Utenriksdepartementet**
- Norad: Bård Vegar Solhjell → Gunn Jorid Roset (sommer 2025)
- Deksa: tom → Annette Tjaberg (utnevnt juni 2025)

### Korrekte (stikkprøver)
IMDi (Libe Rieber-Mohn), Digdir (Frode Danielsen), Datatilsynet (Line Coll), Nkom (John-Eivind Velure), Skatteetaten (Nina Schanke Funnemark), Finanstilsynet (Per Mathis Kongsrud), SSB (Geir Axelsen), FHI (Guri Rørtveit), Mattilsynet (Ingunn Midttun Godal), DSA (Per Strand), NPE (Kristin Cordt-Hansen), Kriminalomsorgsdir. (Lise Sannerud), UNE (Marianne Jakobsen), SKM (Gudmund Gjølstad), Norsk Polarinstitutt (Camilla Brekke), Riksantikvaren (Hanna Geiran), DiBK (Per-Arne Horne), Kartverket (Johnny Welle), Medietilsynet (Mari Velsand), Lottstift (Atle Hamar), NFI (Kjersti Mo), HK-dir (Sveinung Skule), Udir (Morten Rosenkvist), NOKUT (Kristin Vinje), Fiskeridirektoratet (Frank Bakke-Jensen), Patentstyret (Kathrine Myhre), NND (Pål Mikkelsen), NVE (Kjetil Lund), Sokkeldirektoratet (Torgeir Stordal), Statens vegvesen (Ingrid Dahl Hovland), Luftfartstilsynet (Lars Kobberstad), Kystverket (Einar Vik Arset), SJT (Erik Ø. Reiersøl-Johnsen).

### Læringspunkter
- Omfanget av feil (56 % av lederne) bekrefter tilbakemeldingen – listen hadde drevet langt ut av sync siden forrige oppdatering
- Flere utnevnelser har skjedd det siste året: Helsedir, NAV, Bufdir, Pol.dir, Tolletaten, DSB, DMP, Havtil, Norad
- Flere "krysslanseringer": samme person flyttet mellom etater (Bjørnland: POD → Tolletaten; Øystein Strand: Kulturtanken → Kulturdir; Hilde Singsaas: DFØ → Miljødir; Hege Nilssen: Bufdir → NAV)
- Kristin Danielsen var listet på både Kulturdirektoratet OG Norsk kulturråd – etter fusjonen i 2023 er disse samme enhet med Kulturdirektoratet som navn
- Direktoratet for e-helse eksisterer ikke lenger (ble slått sammen med Helsedirektoratet 1. jan 2024). Bør vurderes fjernet helt ved neste revisjon
- Norsk kulturråd har ikke lenger egen direktør – er nå et rådsorgan under Kulturdirektoratet. Bør vurderes fjernet eller flagget eksplisitt
- Kilder: regjeringen.no gir best datering av formelle utnevnelser; etatens egen "ledelse"-side er raskest for fungerende/konstituerte
- Formelle utnevnelser og faktisk tiltredelse kan avvike i flere uker. For feltet `leader` bør publisert nåværende leder på etatens egen ledelses-/kontaktside veie tyngst når tiltredelsesdato ikke er bekreftet.
