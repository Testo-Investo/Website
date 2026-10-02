# Testo · Iron Journey

Persönliche Bodybuilding-Seite: Story als Zeitstrahl, Vorher/Nachher-Regler,
Progress-Galerie mit Jahresfilter und Lightbox, Bestleistungen.
Statisches HTML/CSS/JS – kein Build-Prozess nötig.

## Inhalte pflegen

Alle Texte, Zahlen und Bilder stehen in **`content.js`**. HTML musst du nicht anfassen.

### Neues Progress-Foto hochladen

1. Bild in `assets/progress/` ablegen (z. B. `2026-10-front.jpg`, ideal ≤ 2000 px Breite, .jpg/.webp).
2. In `content.js` bei `gallery` ganz oben eine Zeile ergänzen:
   ```js
   { src: "assets/progress/2026-10-front.jpg", date: "2026-10", caption: "Front Double Biceps", tag: "Aufbau" },
   ```
3. Committen und pushen. Das neueste Bild bekommt automatisch das „Neu“-Badge,
   der Jahresfilter aktualisiert sich von selbst.

Einträge mit `src: null` werden als Platzhalter angezeigt.

### Neues Fotoshooting

1. Ordner anlegen, z. B. `assets/shootings/2027/`, Fotos hineinlegen.
2. In `content.js` bei `shootings` einen Block nach dem Muster von 2017 ergänzen.
   Die Collage ordnet sich automatisch an (am besten 5 Fotos:
   1. Querformat, 2.+3. Hochformat, 4.+5. Querformat). `focus` steuert den Bildausschnitt.

## Lokal ansehen

```bash
python3 -m http.server 8000
```

Danach `http://localhost:8000` öffnen.

## Hosting mit GitHub Pages

1. Branch nach `main` mergen.
2. **Settings → Pages**: Source `Deploy from a branch`, Branch `main`, Ordner `/ (root)`.
3. Nach ein bis zwei Minuten ist die Seite unter der angezeigten URL erreichbar.
