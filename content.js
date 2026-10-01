/*
 * ================================================================
 *  INHALTE DER SEITE – hier pflegst du alles, ohne HTML anzufassen.
 * ================================================================
 *
 *  Neues Foto hochladen:
 *    1. Bild in den Ordner  assets/progress/  legen
 *       (am besten .jpg oder .webp, max. ~2000 px Breite)
 *    2. Unten bei "gallery" eine neue Zeile ganz oben einfügen, z. B.:
 *       { src: "assets/progress/2026-10-front.jpg", date: "2026-10", caption: "Front Double Biceps", tag: "Aufbau" },
 *    3. Speichern, committen, pushen – fertig.
 *
 *  Steht bei "src" null, zeigt die Seite automatisch einen Platzhalter.
 *  Alle Texte mit [Platzhalter] bitte durch deine eigenen ersetzen.
 */

window.SITE = {
  profile: {
    name: "Testo",
    title: "Iron Journey",
    tagline: "Kein Shortcut. Nur Jahre voller Sätze, Wiederholungen und Disziplin.",
    startYear: 2019,
    heroImage: null, // z. B. "assets/progress/hero.jpg"
    instagram: "", // z. B. "https://instagram.com/deinname"
    email: "", // z. B. "kontakt@example.de"
  },

  // Kennzahlen im Hero-Bereich. "value" muss eine Zahl sein.
  stats: [
    { value: 7, suffix: "", label: "Jahre im Training" },
    { value: 18, suffix: " kg", label: "Muskelmasse aufgebaut" },
    { value: 1500, suffix: "+", label: "Trainingseinheiten" },
    { value: 3, suffix: "", label: "Wettkämpfe" },
  ],

  // Bestleistungen (Kraftwerte)
  lifts: [
    { name: "Bankdrücken", start: 70, now: 150 },
    { name: "Kniebeuge", start: 80, now: 200 },
    { name: "Kreuzheben", start: 100, now: 240 },
  ],

  // Deine Geschichte – ein Eintrag pro Jahr / Meilenstein
  timeline: [
    {
      year: "2019",
      title: "Der erste Schritt",
      text: "[Platzhalter] Wie alles anfing: das erste Probetraining, kaum Plan, aber viel Motivation. Was war dein Auslöser?",
      image: null,
    },
    {
      year: "2020",
      title: "Training zu Hause",
      text: "[Platzhalter] Gyms zu – Kurzhanteln im Keller. Hier hast du gelernt, dranzubleiben, wenn es unbequem wird.",
      image: null,
    },
    {
      year: "2021",
      title: "Ernährung verstanden",
      text: "[Platzhalter] Erster richtiger Bulk, Kalorien tracken, Meal-Prep. Der Moment, ab dem es sichtbar vorwärts ging.",
      image: null,
    },
    {
      year: "2022",
      title: "Erste Diät",
      text: "[Platzhalter] Definitionsphase, Disziplin auf dem nächsten Level. Was hast du über dich gelernt?",
      image: null,
    },
    {
      year: "2023",
      title: "Rückschlag & Comeback",
      text: "[Platzhalter] Verletzung, Pause oder Motivationsloch? Hier ist Platz für die ehrliche Seite der Reise.",
      image: null,
    },
    {
      year: "2024",
      title: "Die Bühne",
      text: "[Platzhalter] Erster Wettkampf oder Shooting – Posing, Peak Week, Gänsehaut.",
      image: null,
    },
    {
      year: "2025",
      title: "Neues Level",
      text: "[Platzhalter] Neue Bestleistungen, neue Ziele. Was hat sich im Kopf verändert?",
      image: null,
    },
    {
      year: "2026",
      title: "Heute",
      text: "[Platzhalter] Wo du jetzt stehst und wo die Reise noch hingehen soll.",
      image: null,
    },
  ],

  // Vorher / Nachher-Vergleich (Schieberegler)
  comparison: {
    before: { src: null, label: "2019" },
    after: { src: null, label: "2026" },
  },

  // Progress-Galerie – neueste Bilder ganz oben eintragen.
  // date: "JJJJ-MM"   tag: frei wählbar (z. B. Aufbau, Diät, Wettkampf, Shooting)
  gallery: [
    { src: null, date: "2026-09", caption: "Front Relaxed", tag: "Aufbau" },
    { src: null, date: "2026-06", caption: "Back Double Biceps", tag: "Aufbau" },
    { src: null, date: "2025-11", caption: "Side Chest", tag: "Diät" },
    { src: null, date: "2025-04", caption: "Off-Season", tag: "Aufbau" },
    { src: null, date: "2024-10", caption: "Bühne", tag: "Wettkampf" },
    { src: null, date: "2024-03", caption: "Peak Week", tag: "Diät" },
    { src: null, date: "2023-08", caption: "Comeback", tag: "Aufbau" },
    { src: null, date: "2022-05", caption: "Erste Diät", tag: "Diät" },
    { src: null, date: "2021-02", caption: "Bulk", tag: "Aufbau" },
    { src: null, date: "2019-09", caption: "Tag 1", tag: "Start" },
  ],
};
