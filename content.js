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

  // Diät 2026: Diätstart (Januar) und Topform
  diet: { label: "Diät 2026", start: 133, now: 115 },

  // Bestleistungen (Kraftwerte) – erscheinen erst, wenn hier Einträge stehen. Beispiel:
  // { name: "Bankdrücken", start: 60, now: 180 },
  lifts: [],

  // Deine Geschichte – Meilensteine (müssen nicht jedes Jahr sein)
  timeline: [
    {
      year: "2004",
      title: "Ein Urlaub mit Folgen",
      text: "Mit 70 Kilo in den Urlaub, mit einem neuen Lebensinhalt zurück: Jason hat mich zum Bodybuilding gebracht. Ob er wusste, was er da anrichtet? Ich jedenfalls nicht. Danke, Jason.",
      image: null,
    },
    {
      year: "2006",
      title: "Die Anfänge",
      text: "Weihnachtsdeko im Hintergrund, Double Biceps im Vordergrund: Der Rücken war noch ein Versprechen, der Ehrgeiz schon voll da. Erst Training, dann verstehen – Ernährung, Regeneration, Trainingsplan.",
      image: "assets/progress/2006/rueckenbizeps.jpg",
    },
    {
      year: "2008",
      title: "Erste Bühne, erster Titel",
      text: "Erster Wettkampf, Studiomeisterschaft – und direkt Platz 1. Bräunungsfarbe bis in die Haarspitzen, Grinsen bis zu den Ohren. Die Form ging danach gleich mit nach Ibiza.",
      image: "assets/wettkaempfe/2008-studiomeisterschaft/backstage.jpg",
      focus: "50% 18%",
    },
    {
      year: "Autsch",
      title: "Supraspinatussehne gerissen",
      text: "Das genaue Datum weiß ich nicht mehr – das Gefühl schon. Reha statt Rekorde, Geduld statt Gewichte. Aufhören stand trotzdem nie zur Debatte.",
      image: null,
    },
    {
      year: "2015",
      title: "Zurück auf der großen Bühne",
      text: "NRW-Meisterschaft und ein Fotoshooting in Schwarz-Weiß: Die Schulter hat gehalten, die Form auch. Comeback geglückt.",
      image: "assets/shootings/2015/ringe.jpg",
      focus: "50% 25%",
    },
    {
      year: "2017",
      title: "Zum zweiten Mal Studiomeister",
      text: "Neun Jahre nach dem ersten Titel wieder ganz oben – und dazu ein Shooting in Bestform. Manche Dinge werden mit dem Alter einfach besser.",
      image: "assets/wettkaempfe/2017-studiomeisterschaft/sieger-double-biceps.jpg",
      focus: "50% 8%",
    },
    {
      year: "2018",
      title: "Noch mal NRW",
      text: "Größere Bühne, härtere Konkurrenz, gleiches Grinsen. Startnummer 230 – und jede Menge Adern.",
      image: "assets/wettkaempfe/2018-nrw/lat-spread.jpg",
      focus: "50% 22%",
    },
    {
      year: "2026",
      title: "Von 133 auf 115 Kilo",
      text: "Januar 2026: Diätstart mit 133 Kilo, Ziel Sommerform. Ergebnis: 115 Kilo und die beste Form meines Lebens. 18 Kilo runter, kein Gramm Ehrgeiz verloren – und die Reise ist noch lange nicht vorbei.",
      image: null,
    },
  ],

  // Wettkämpfe – place und division sind optional (leer = wird nicht angezeigt)
  // photos (optional): Bilder vom Wettkampf, z. B. aus assets/wettkaempfe/
  competitions: [
    {
      year: "2008",
      name: "Studiomeisterschaft",
      division: "",
      place: "1",
      date: "21.06.2008",
      photos: [
        { src: "assets/wettkaempfe/2008-studiomeisterschaft/backstage.jpg", caption: "Backstage – frisch gebräunt, breit gegrinst", focus: "50% 18%" },
        { src: "assets/wettkaempfe/2008-studiomeisterschaft/vergleich-double-biceps.jpg", caption: "Vergleich: Double Biceps", focus: "50% 30%" },
        { src: "assets/wettkaempfe/2008-studiomeisterschaft/vergleich-lat-spread.jpg", caption: "Vergleich: Lat Spread von vorne", focus: "50% 30%" },
      ],
    },
    {
      year: "2015",
      name: "NRW-Meisterschaft",
      division: "Männer III",
      place: "",
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
      place: "",
      layout: "portraits", // Hochformat-Fotos -> hohe Vorschaukacheln
      photos: [
        { src: "assets/wettkaempfe/2018-nrw/lat-spread.jpg", caption: "Lat Spread von vorne · Foto: Oliver Rink / TEAM-ANDRO", focus: "50% 30%" },
        { src: "assets/wettkaempfe/2018-nrw/vergleich-bauch-beine.jpg", caption: "Vergleich: Bauch-Beine-Pose · Foto: Oliver Rink / TEAM-ANDRO", focus: "50% 25%" },
        { src: "assets/wettkaempfe/2018-nrw/backstage.webp", caption: "Backstage vor dem Auftritt", focus: "50% 25%" },
        { src: "assets/wettkaempfe/2018-nrw/beine.jpg", caption: "Beine in der Vorbereitung", focus: "50% 40%" },
        { src: "assets/wettkaempfe/2018-nrw/vorbereitung.jpg", caption: "Formcheck in der Vorbereitung", focus: "50% 35%" },
      ],
    },
  ],

  // Vorher / Nachher-Vergleich (Schieberegler)
  comparison: {
    before: { src: "assets/progress/2006/front.jpg", label: "2006" },
    after: { src: "assets/shootings/2017/kabelzug.jpg", label: "2017" },
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
    { src: "assets/shootings/2015/hantelbank-farbe.jpg", date: "2015", caption: "Zwischen den Kurzhanteln", tag: "Shooting" },
    { src: "assets/progress/2008-ibiza/front.jpg", date: "2008", caption: "Ibiza – Training statt Strandbar", tag: "Ibiza" },
    { src: "assets/progress/2008-ibiza/arm-hinterm-kopf.jpg", date: "2008", caption: "Bauch-Beine-Pose in der Sonne", tag: "Ibiza" },
    { src: "assets/progress/2008-ibiza/ruecken.jpg", date: "2008", caption: "Rücken im Gegenlicht", tag: "Ibiza" },
    { src: "assets/progress/2006/front.jpg", date: "2006", caption: "Die Anfänge", tag: "Start" },
    { src: "assets/progress/2006/rueckenbizeps.jpg", date: "2006", caption: "Double Biceps unterm Weihnachtsbaum", tag: "Start" },
    { src: "assets/progress/2006/balkon.jpg", date: "2006", caption: "Urlaub – noch ohne Meal-Prep", tag: "Start" },
    { src: "assets/progress/2006/urlaub.jpg", date: "2006", caption: "Urlaubsmodus", tag: "Start" },
  ],
};
