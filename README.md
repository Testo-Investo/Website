# Testo-Investo Website

Moderne, responsive One-Page-Brand-Website für **Testo-Investo** –
Krypto-Investor, Content-Creator und Gym-Enthusiast. Statische Seite
(HTML/CSS/JS, kein Build-Prozess nötig): dunkles Layout (`#0a0a0a`),
Bitcoin-Orange als Akzent, Neongrün für Gains, Rot für Warnungen.

## Sektionen

1. Fixe Navigation mit CTA "Folge der Crew"
2. Hero mit Eyebrow, Headline im Testo-Ton und zwei CTAs
3. Kennzahlen-Leiste (Follower, Beitragsansichten, Positionen, aktiv seit)
4. Laufendes Asset-Band (Bitcoin, Ethereum, Gold, Silber, Chainlink, Solana …)
5. Über-mich-Sektion mit drei Kernprinzipien
6. Portfolio-Dashboard (animierte Balken, Platzhalterdaten)
7. Neuste Beiträge (3 Karten im Feed-Stil)
8. Philosophie-Block mit Schlagworten
9. Community/Social Proof mit Follower-Stimmen und Testo-Zitat
10. CTA zum getquin-Profil
11. Footer mit Social-Links, Newsletter-Formular und deutlich sichtbarem Disclaimer

## Lokal ansehen

```bash
python3 -m http.server 8000
```

Danach `http://localhost:8000` im Browser öffnen.

## Anpassen

- **getquin-Links:** Alle Links zeigen aktuell auf `https://app.getquin.com/` –
  hier die echte Profil-URL eintragen (in `index.html` nach `getquin.com` suchen).
- **Portfolio-Daten:** Die Balken in der Portfolio-Sektion sind Platzhalter.
  Gewichtung (`data-weight` + angezeigte %) und Performance direkt in
  `index.html` pflegen.
- **Newsletter:** Das Formular zeigt aktuell nur eine Front-End-Bestätigung.
  Für echte Anmeldungen einen Dienst wie Formspree/Buttondown in
  `script.js`/`index.html` anbinden.

## Bilder

Alle Illustrationen liegen in `assets/images/` und stammen aus dem
Google Drive des Nutzers (KI-generierte Bodybuilder-/Krypto-Motive).
Weitere Bilder können dort einfach ergänzt und in `index.html`
referenziert werden.

## Hosting mit GitHub Pages

1. Diesen Branch nach `main` mergen.
2. In den Repository-Einstellungen unter **Settings → Pages**:
   - Source: `Deploy from a branch`
   - Branch: `main`, Ordner `/ (root)`
3. Nach ein bis zwei Minuten ist die Seite unter der von GitHub angezeigten URL erreichbar.
