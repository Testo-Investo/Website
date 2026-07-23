# Testo-Investo Website

Statische Seite (HTML/CSS/JS, kein Build-Prozess nötig) im Look eines
Social-/Investoren-Profil-Feeds: dunkles Theme, Bitcoin-Gold-Akzente,
Comic-Bildsprache aus Gym- und Krypto-Motiven.

## Lokal ansehen

```bash
python3 -m http.server 8000
```

Danach `http://localhost:8000` im Browser öffnen.

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
