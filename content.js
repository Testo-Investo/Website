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
 *  Alles mit [Platzhalter] bzw. "20??" wird noch durch echte Daten ersetzt.
 */

window.SITE = {
  profile: {
    name: "Testo",
    title: "Iron Journey",
    tagline: "22 Jahre. 45 Kilo mehr. Null Abkürzungen – nur Eisen, Reis mit Hähnchen und eine Engelsgeduld.",
    startYear: 2004,
    heroImage: "assets/shootings/2017/kreuzheben.jpg",
    instagram: "", // z. B. "https://instagram.com/deinname"
    email: "", // z. B. "kontakt@example.de"
  },

  // Kennzahlen im Hero-Bereich. "value" muss eine Zahl sein.
  // Trainingseinheiten: 22 Jahre × ~52 Wochen × ~4 Einheiten ≈ 4.500
  stats: [
    { value: 22, suffix: "", label: "Jahre am Eisen" },
    { value: 45, suffix: " kg", label: "aufgebaut (70 → 115 kg)" },
    { value: 4500, suffix: "+", label: "Trainingseinheiten" },
    { value: 5, suffix: "", label: "Wettkämpfe" },
  ],

  // Körpergewicht: Start und heute
  weight: { start: 70, now: 115 },

  // Bestleistungen (Kraftwerte) – erscheinen erst, wenn hier Einträge stehen. Beispiel:
  // { name: "Bankdrücken", start: 60, now: 180 },
  lifts: [],

  // Deine Geschichte – Meilensteine (müssen nicht jedes Jahr sein)
  timeline: [
    {
      year: "2004",
      title: "Tag 1 mit 70 Kilo",
      text: "Zum ersten Mal ins Studio. Die Hanteln waren schwerer als gedacht, das Ego auch. Aber irgendwas hat an diesem Tag Klick gemacht – und es hat nie wieder aufgehört.",
      image: null,
    },
    {
      year: "20??",
      title: "Lehrjahre",
      text: "[Platzhalter] Erst Training, dann verstehen: Ernährung, Regeneration, Trainingsplan. Und die Erkenntnis, dass sechs Mahlzeiten am Tag mehr Arbeit sind als jedes Beintraining.",
      image: null,
    },
    {
      year: "20??",
      title: "Die erste Bühne",
      text: "[Platzhalter] Wettkampf Nr. 1. Peak Week, Bräunungsfarbe, zitternde Knie – und der Moment, in dem sich alles gelohnt hat.",
      image: null,
    },
    {
      year: "20??",
      title: "Rückschläge gehören dazu",
      text: "[Platzhalter] Verletzung, Pause oder einfach das Leben dazwischen? Auch das ist Teil der Reise – entscheidend ist, wieder unter die Stange zu gehen.",
      image: null,
    },
    {
      year: "20??",
      title: "Fünf Mal auf der Bühne",
      text: "[Platzhalter] Mit jedem Wettkampf ein Stück besser: mehr Masse, mehr Härte, besseres Posing. Fünf Starts, unzählige Lektionen.",
      image: null,
    },
    {
      year: "2026",
      title: "Topform mit 115 Kilo",
      text: "22 Jahre später: 45 Kilo mehr auf den Rippen und die beste Form meines Lebens. Der Tank ist voll, die Hosen sind zu eng – und die Reise ist noch lange nicht vorbei.",
      image: null,
    },
  ],

  // Wettkämpfe – [Platzhalter], bitte Jahr, Name, Klasse und Platzierung eintragen
  // photos (optional): Bilder vom Wettkampf, z. B. aus assets/wettkaempfe/
  competitions: [
    {
      year: "2015",
      name: "NRW-Meisterschaft",
      division: "Männer III",
      place: "?",
      photos: [
        { src: "assets/wettkaempfe/2015-nrw/lat-spread.jpg", caption: "Lat Spread von vorne" },
        { src: "assets/wettkaempfe/2015-nrw/bauch-beine.jpg", caption: "Bauch-Beine-Pose" },
      ],
    },
    {
      year: "2017",
      name: "Studiomeisterschaft",
      division: "",
      place: "1",
      photos: [
        { src: "assets/wettkaempfe/2017-studiomeisterschaft/sieger-double-biceps.jpg", caption: "Double Biceps – der Sieger", focus: "50% 12%" },
        { src: "assets/wettkaempfe/2017-studiomeisterschaft/vergleich-double-biceps.jpg", caption: "Vergleich: Double Biceps", focus: "50% 30%" },
        { src: "assets/wettkaempfe/2017-studiomeisterschaft/vergleich-bauch-beine.jpg", caption: "Vergleich: Bauch-Beine-Pose", focus: "50% 30%" },
        { src: "assets/wettkaempfe/2017-studiomeisterschaft/vergleich-side-chest.jpg", caption: "Vergleich: Side Chest", focus: "50% 30%" },
        { src: "assets/wettkaempfe/2017-studiomeisterschaft/line-up.jpg", caption: "Line-up", focus: "50% 30%" },
      ],
    },
    {
      year: "2018",
      name: "NRW-Meisterschaft",
      division: "",
      place: "?",
      layout: "portraits", // Hochformat-Fotos -> hohe Vorschaukacheln
      photos: [
        { src: "assets/wettkaempfe/2018-nrw/lat-spread.jpg", caption: "Lat Spread von vorne · Foto: Oliver Rink / TEAM-ANDRO", focus: "50% 30%" },
        { src: "assets/wettkaempfe/2018-nrw/vergleich-bauch-beine.jpg", caption: "Vergleich: Bauch-Beine-Pose · Foto: Oliver Rink / TEAM-ANDRO", focus: "50% 25%" },
        { src: "assets/wettkaempfe/2018-nrw/backstage.webp", caption: "Backstage vor dem Auftritt", focus: "50% 25%" },
        { src: "assets/wettkaempfe/2018-nrw/beine.jpg", caption: "Beine in der Vorbereitung", focus: "50% 40%" },
        { src: "assets/wettkaempfe/2018-nrw/vorbereitung.jpg", caption: "Formcheck in der Vorbereitung", focus: "50% 35%" },
      ],
    },
    { year: "20??", name: "Wettkampf 4", division: "Klasse folgt", place: "?" },
    { year: "20??", name: "Wettkampf 5", division: "Klasse folgt", place: "?" },
  ],

  // Vorher / Nachher-Vergleich (Schieberegler)
  comparison: {
    before: { src: null, label: "2004 · 70 kg" },
    after: { src: null, label: "2026 · 115 kg" },
  },

  // Fotoshootings – werden als Collage angezeigt. Neues Shooting = neuer Block,
  // Fotos in einen eigenen Ordner legen, z. B. assets/shootings/2027/
  shootings: [
    {
      title: "Fotoshooting",
      year: "2017",
      text: "Ein Tag, ein Fotograf, kein Filter für die Anstrengung im Gesicht. Jeder Schatten auf diesen Bildern hat Jahre gekostet.",
      photos: [
        { src: "assets/shootings/2017/kabelzug.jpg", caption: "Double Biceps am Kabelzug", focus: "50% 30%" },
        { src: "assets/shootings/2017/rudern.jpg", caption: "Einarmiges Kurzhantelrudern", focus: "50% 25%" },
        { src: "assets/shootings/2017/hackenschmidt.jpg", caption: "Hackenschmidt-Kniebeuge", focus: "50% 20%" },
        { src: "assets/shootings/2017/bank.jpg", caption: "Kurze Pause zwischen den Sätzen", focus: "60% 30%" },
        { src: "assets/shootings/2017/kreuzheben.jpg", caption: "Kreuzheben", focus: "60% 35%" },
      ],
    },
    {
      title: "Fotoshooting",
      year: "2015",
      layout: "portraits", // alle Fotos im Hochformat -> gleich breite Spalten
      text: "Harte Kontraste, ein Grinsen, das man nur nach dem letzten Satz hat – und ein Rücken, der für sich spricht. Ehrlicher wird Eisen nicht.",
      photos: [
        { src: "assets/shootings/2015/hantelbank.jpg", caption: "Zwischen den Kurzhanteln", focus: "50% 35%" },
        { src: "assets/shootings/2015/ringe.jpg", caption: "Dips an den Ringen", focus: "50% 30%" },
        { src: "assets/shootings/2015/lichtstab.jpg", caption: "Spiel mit dem Licht", focus: "50% 40%" },
        { src: "assets/shootings/2015/ruecken.jpg", caption: "Rücken in Form", focus: "50% 30%" },
      ],
    },
  ],

  // Progress-Galerie – neueste Bilder ganz oben eintragen.
  // date: "JJJJ-MM"   tag: frei wählbar (z. B. Aufbau, Diät, Wettkampf, Shooting)
  gallery: [
    { src: null, date: "2026-09", caption: "Topform", tag: "Aufbau" },
    { src: null, date: "2026-06", caption: "Back Double Biceps", tag: "Aufbau" },
    { src: null, date: "2025-11", caption: "Side Chest", tag: "Diät" },
    { src: null, date: "2024-05", caption: "Off-Season", tag: "Aufbau" },
    { src: null, date: "2020-10", caption: "Bühne", tag: "Wettkampf" },
    { src: null, date: "2015-04", caption: "Peak Week", tag: "Diät" },
    { src: null, date: "2010-08", caption: "Masse-Phase", tag: "Aufbau" },
    { src: null, date: "2004-09", caption: "Tag 1 · 70 kg", tag: "Start" },
  ],
};
