# Fjerne sticky toppmeny

Denne endringen fjerner sticky-oppførselen fra toppmenyen i oversiktssiden.

## Hva som ble endret

- I `index.html` ble `header` endret fra `position: sticky` til `position: static`.
- `top: 0` ble fjernet siden det ikke lenger er relevant når headeren ikke er sticky.

## Resultat

Toppseksjonen følger nå vanlig sidescrolling i stedet for å bli liggende festet øverst på siden.

## Verifisering

- Inspiserte CSS i `index.html` og bekreftet at sticky-oppførselen kom fra `header`.
- Bekreftet at mobil/print allerede hadde ikke-sticky oppførsel, så endringen forenkler og gjør oppførselen konsistent.
- Testet siden med `uvx rodney` i en lokal Chrome-sesjon åpnet mot `file:///Users/okms/code/research/statlige-direktorater/index.html`.
- Bekreftet at `getComputedStyle(document.querySelector('header')).position` returnerer `static`.
- Bekreftet ved scrolling at headerens topp-posisjon endrer seg fra `0` til `-600`, som viser at headeren scroller bort i stedet for å ligge fast øverst.
