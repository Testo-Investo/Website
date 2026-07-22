# Testo-Investo Website

Statische Landingpage (HTML/CSS/JS, kein Build-Prozess nötig).

## Lokal ansehen

```bash
python3 -m http.server 8000
```

Danach `http://localhost:8000` im Browser öffnen.

## Kontaktformular (Formspree)

Das Formular sendet Anfragen über [Formspree](https://formspree.io/) an `skwurst@gmx.de`.
Beim allerersten Absenden schickt Formspree eine Bestätigungs-E-Mail an diese Adresse –
erst nach Bestätigung werden weitere Nachrichten zugestellt.

## Hosting mit GitHub Pages

1. Diesen Branch nach `main` mergen.
2. In den Repository-Einstellungen unter **Settings → Pages**:
   - Source: `Deploy from a branch`
   - Branch: `main`, Ordner `/ (root)`
3. Nach ein bis zwei Minuten ist die Seite unter der von GitHub angezeigten URL erreichbar.
