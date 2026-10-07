import type { Dict } from './en';

export const de: Dict = {
  preview: {
    "soon": "Bald verfügbar",
    "availability": "Verfügbarkeit",
    "title": "Lerne MrWhisper kennen. Der Start folgt.",
    "description": "Entdecke die Funktionen und sieh dir die Demo an. Käufe, Lizenzen und App-Downloads sind auf dieser Website noch nicht verfügbar.",
    "contact": "Kontakt aufnehmen",
    "company": "Unternehmensvorstellung",
    "pending": "Die Einrichtung einer externen Impressumsadresse ist geplant. Die Anschrift wird nach Freischaltung ergänzt. Die Anbieterangaben sind derzeit hinsichtlich der Anschrift unvollständig. Der Hinweis ersetzt keine vollständige Impressumsanschrift.",
    "terms": "Auf dieser Website werden derzeit keine Verkäufe angeboten. Verkaufs- und Lizenzbedingungen werden vor Freischaltung des Kaufs veröffentlicht."
},
  htmlLang: 'de',
  meta: {
    title: 'MrWhisper – Voice Intelligence für deinen Mac',
    description:
      'MrWhisper: Diktieren per Hotkey, lokal transkribiert, als durchsuchbarer Verlauf mit Tags, Versionen, Notizen und optionaler KI-Veredelung.',
  },
  nav: {
    new: 'Neu',
    features: 'Funktionen',
    pricing: 'Preise',
    faq: 'FAQ',
    changelog: 'Changelog',
    cta: 'MrWhisper holen',
    switchTo: 'English',
    menuLabel: 'Hauptnavigation',
  },
  hero: {
    badgeText: 'Papierkorb: gelöschte Einträge behalten und jederzeit wiederherstellen',
    titleA: 'Deine Stimme.',
    titleB: 'Dein zweites Gedächtnis.',
    leadBefore: 'Drück',
    leadAfter:
      'und sprich – der Text steht dort, wo dein Cursor ist. MrWhisper transkribiert lokal, sortiert jedes Diktat in einen durchsuchbaren Verlauf mit Tags, Versionen und Notizen und veredelt es auf Wunsch mit KI. Die Transkription braucht keine Cloud.',
    highlights: [
      { icon: '🎙️', text: 'Lokale Transkription: Whisper & Parakeet' },
      { icon: '⚡', text: 'Globaler Hotkey – Text am Cursor' },
      { icon: '⏪', text: 'Flashback holt Gesagtes zurück' },
      { icon: '🏷️', text: 'Tag-Katalog mit echten Ordnern' },
      { icon: '🌍', text: 'Deutsch · English · Türkçe' },
    ],
    ctaPrimary: 'MrWhisper holen',
    ctaSecondary: (n: number) => `Alle ${n} Funktionen ansehen`,
    platformNote: 'macOS (Apple Silicon). Eine Windows-Version ist in Entwicklung.',
  },
  mock: {
    illustration: 'Illustration der Verlaufsansicht',
    sidebar: ['Home', 'Statistiken', 'Verlauf', 'Notiz-Assistent', 'Text-Snippets', 'Wörterbuch'],
    active: 'Verlauf',
    titlebar: 'Verlauf',
    transcribing: 'Transkribiere …',
    ready: '● KI bereit',
    card1Tags: ['Apps › Codex', 'Idee'],
    card1Title: 'Second Brain mit Codex',
    card1Text:
      'Mit Codex möchte ich irgendwann diese Second-Brain-Sache aufbauen lassen – für Musik, meine Apps und Marketing.',
    card1Notes: '📝 Notiz & Quellen',
    card1Followups: '↳ Folge-Prompts (2)',
    card1Status: 'In Bearbeitung',
    card2Title: 'Release-Notizen für Version 2.13',
    card2Text: 'Leder-Oberfläche, Mindestgröße der Eintragsnummer, Filterfenster …',
    popupInserted: '✓ Diktat eingefügt',
    popupText: 'Termin mit dem Team am Donnerstag um zehn',
    popupTag: 'Arbeit › Termine',
    popupAddTag: '+ Tag',
  },
  demo: {
    eyebrow: '🎬 In Aktion',
    title: 'Eine Minute mit MrWhisper',
    text: 'Eine echte Bildschirmaufnahme der App (Version 2.16) mit erfundenen Demo-Einträgen. Der englische Sprechtext ist eine synthetische Stimme, die auf der Stimme des Entwicklers beruht.',
    fallback: 'Dein Browser kann dieses Video nicht abspielen.',
  },
  flashback: {
    past: 'Vergangenheit',
    present: 'Gegenwart',
    eyebrow: '✨ Die Akustische Zeitschleife',
    titleA: 'Worte, die schon vergangen waren –',
    titleB: 'zurückgeholt aus dem Äther.',
    p1: 'Hast du jemals einen genialen Gedanken laut ausgesprochen – nur um Sekunden später festzustellen, dass er verflogen ist? Die Luft hat ihn verschluckt, bevor du eine Aufnahmetaste drücken konntest.',
    p2Before: 'MrWhisper besitzt eine verborgene Fähigkeit. Er lauscht leise im Hintergrund. Die',
    p2Strong: 'Flashback-Funktion',
    p2After: 'ist kein gewöhnliches Werkzeug, sondern eine Anomalie. Mit einem geheimen Griff (',
    p2End: ') drehst du die Uhr zurück.',
    p3: 'MrWhisper zieht die bereits verklungenen Schallwellen der Vergangenheit aus dem Nichts zurück und fügt das Gesagte nahtlos dort ein, wo dein Cursor ruht. Was eben noch verloren war, steht nun geschrieben.',
    col1Title: 'Der Äther vergisst nicht',
    col1Text:
      'Auch ohne aktive Aufnahme hält MrWhisper einen kurzen, laufenden Puffer im Arbeitsspeicher. Dein gesprochenes Wort bleibt flüchtig, aber erreichbar. Der Puffer wird nie auf die Festplatte geschrieben.',
    col2Title: 'Temporale Faltung',
    col2Text: 'Deine Vergangenheit verschmilzt perfekt synchronisiert mit dem Hier und Jetzt. Kein Versatz, kein zerrissenes Band.',
  },
  whatsNew: {
    eyebrow: '✨ Neu in 2.13 & 2.14',
    titleA: 'Einmal einstellen.',
    titleB: 'Dann nur noch sprechen.',
    lead: 'Der Session-Modus sortiert deine Diktate selbst ein – und das gewohnte Bild gibt es weiterhin auch in Leder.',
    badgeNew: 'Neu v2.14',
    sessionTitle: 'Der Session-Modus',
    sessionText:
      'Du arbeitest länger an einer Sache und sprichst immer wieder etwas ein? Dann sag einmal, wohin das gehört – den Rest macht MrWhisper. Kein Verschieben, kein Taggen von Hand, Eintrag für Eintrag.',
    routings: [
      { title: 'Folge-Prompt', desc: 'Unter den Haupteintrag' },
      { title: 'Eigener Eintrag', desc: 'Oben im Verlauf, mit Tags' },
      { title: 'Anhängen', desc: 'Als neuer Absatz' },
    ],
    mainTitle: 'Haupteintrag frei wählen',
    mainText:
      'Der letzte Eintrag, ein gesuchter Eintrag – oder ein neuer, leerer. Dann wird dein erstes Diktat der Hauptprompt.',
    mainSearch1: 'Landing Page',
    mainSearch2: 'Session · Titel · ID',
    mainResult: '↳ wird Haupteintrag',
    tagsTitle: 'Tags laufen mit, Sessions bleiben',
    tagsText:
      'Die Tags des Referenz-Eintrags gelten für jedes weitere Diktat – auch für getippte Einträge. Sessions lassen sich benennen, später fortsetzen und wandern mit ins Backup.',
    leatherBadge: 'v2.13',
    leatherTitle: 'Leder & Messing',
    leatherText:
      'Kleide die ganze App in einen genarbten Ledereinband: aufgenähte Karten mit goldener Naht, massive Messingecken, ein Acryl-Lesezeichen mit geprägter Eintragsnummer. Drei Töne – oder das gewohnte Standarddesign. Alles gerechnet statt Bilddateien, daher in jeder Fenstergröße gestochen scharf.',
    leathers: ['Navy', 'Braun', 'Cognac'],
    topTitle: 'Zurück nach oben',
    topText:
      'Weit unten im Verlauf? Ein Knopf unten rechts bringt dich mit einem Klick zurück an den Anfang. Dazu: Export und Import stehen jetzt ganz unten in den Einstellungen – und nehmen deine Sessions mit.',
    topHint: 'Ein Klick statt langem Scrollen',
    detailsBefore: 'Alle Details im',
    detailsLink: 'Changelog',
    detailsNote: '',
  },
  how: {
    eyebrow: '⚡ So einfach geht’s',
    title: 'Drei Schritte. Null Umwege.',
    steps: [
      {
        key: 'fn',
        title: 'Taste drücken',
        text: 'Halte den globalen Hotkey – in jeder App, in jedem Textfeld. Oder sag auf Wunsch einfach „Computer“.',
      },
      {
        key: '🎙️',
        title: 'Sprechen',
        text: 'Whisper oder Parakeet transkribieren lokal auf deinem Rechner. Der Indikator zeigt live, was passiert.',
      },
      {
        key: '✓',
        title: 'Text steht da',
        text: 'Eingefügt am Cursor, gespeichert im Verlauf. Im Popup direkt korrigieren und taggen – oder später mit KI veredeln.',
      },
    ],
  },
  featuresSection: {
    eyebrow: '💎 Funktionsumfang',
    titleA: (n: number) => `${n} Funktionen für`,
    titleB: 'deinen täglichen Workflow.',
    lead: 'Lokale Spracherkennung, ein Verlauf, der zum Wissensarchiv wird, ein Tag-System mit echten Ordnern, KI direkt auf deinem Rechner – und eine Oberfläche, die du dir einrichtest, wie du willst.',
    all: 'Alle',
    new: '✨ Neu',
    aria: 'Funktionen nach Bereich',
    newBadge: 'Neu',
    categories: {
      dictation: '🎙️ Diktat & Sprache',
      history: '🗂️ Verlauf & Wissen',
      tags: '🏷️ Tags & Ordnung',
      ai: '🪄 KI',
      design: '🎨 Oberfläche & Komfort',
      data: '🔒 Daten & Sicherheit',
    },
  },
  pricing: {
    eyebrow: '💳 Preise',
    title: 'Einmal zahlen. Behalten.',
    lead: 'Keine Abos, keine Cloud-Minuten, keine versteckten Kosten.',
    planTitle: 'MrWhisper-Lizenz',
    planSub: 'Für macOS (Apple Silicon). Windows ist in Entwicklung.',
    badge: 'Alle Funktionen',
    early: 'Early-Bird',
    earlyNote: (limit: number) => `für die ersten ${limit} Lizenzen, danach`,
    perLicense: 'einmalig',
    included: [
      'Unbegrenzte lokale Transkription',
      'Globaler Hotkey (z. B. fn) & Flashback (Shift + fn)',
      'Diktat-Popup mit Korrektur & Quick-Tagging',
      'Tag-Katalog mit Ordnern, Farben & Konfliktlösung',
      'Verlauf mit Versionen, Notizen, Sternen & Status',
      'KI-Veredelung, KI-Überschriften & Notiz-Assistent',
      'Oberflächen: Standard & Leder in drei Tönen',
      'Deutsch, English, Türkçe – inklusive aller Offline-Modelle',
    ],
    updates: (months: number) => `Updates für ${months} Monate inklusive. Danach läuft deine Lizenz weiter.`,
    refund: (days: number) => `${days} Tage Geld-zurück, wenn MrWhisper für dich nicht funktioniert.`,
    buy: 'Lizenz kaufen',
    soon: 'Startet in Kürze',
    soonNote: 'Der Checkout öffnet zum Start. Möchtest du vorher Bescheid bekommen?',
    notify: 'Per E-Mail benachrichtigen',
    merchant: 'Die Zahlung wickelt unser Merchant of Record Lemon Squeezy ab.',
    testNote: 'Einführungspreis. Er kann steigen, sobald die Early-Bird-Lizenzen vergeben sind.',
  },
  faq: {
    eyebrow: '❓ FAQ',
    title: 'Häufig gestellte Fragen',
    items: [
      {
        question: 'Läuft MrWhisper komplett offline?',
        answer:
          'Ja, die Standard-Transkription nutzt lokale Modelle (llama.cpp / whisper.cpp), sodass keine Audiodaten deinen Rechner verlassen. Nur optionale KI-Erweiterungen, die einen externen Anbieter aufrufen (zum Beispiel GPT-4 mit deinem eigenen API-Schlüssel), brauchen Internet und senden den von dir gewählten Text an diesen Anbieter.',
      },
      {
        question: 'Auf welchen Betriebssystemen funktioniert MrWhisper?',
        answer:
          'MrWhisper ist eine Desktop-App auf Basis von Electron. Aktuell ist macOS auf Apple Silicon das Ziel. Eine Windows-Version ist in Entwicklung und noch nicht verfügbar.',
      },
      {
        question: 'Kann ich die Hotkey-Taste ändern?',
        answer:
          'MrWhisper funktioniert derzeit mit der „fn“-Taste oder „F13“. Ein frei aufnehmbares Tastenkürzel ist für eine kommende Version geplant.',
      },
      {
        question: 'Was ist Flashback?',
        answer:
          'MrWhisper hält die letzten Minuten Audio in einem laufenden Puffer im Arbeitsspeicher (er wird nie auf die Festplatte geschrieben). Mit Shift + fn holst du Gesagtes zurück, auch wenn du vergessen hast, die Aufnahme zu starten – der Text landet direkt am Cursor.',
      },
      {
        question: 'Kann ich das Aussehen der App ändern?',
        answer:
          'Ja. Unter Einstellungen → Darstellung wählst du zwischen dem Standarddesign und drei Leder-Oberflächen (Navy, Braun, Cognac). Dazu lassen sich Überschriften-Effekte, Schriftgrößen, Eintragsnummern und die Platzierung aller Kartenaktionen anpassen.',
      },
      {
        question: 'Wie sichere ich meine Daten?',
        answer:
          'Alles liegt lokal auf deinem Rechner. Über Einstellungen → Daten exportierst du Verlauf, Snippets, Wörterbuch, Tag-Katalog und Einstellungen als JSON-Backup und importierst es ohne Duplikate wieder – auch auf einem anderen Gerät. Einzelne Einträge lassen sich als .md oder .txt speichern.',
      },
      {
        question: 'Bekomme ich Updates kostenlos?',
        answer:
          'Ja. Mit deiner Lizenz erhältst du alle Updates für {months} Monate. Die Version, die du hast, läuft danach weiter.',
      },
      {
        question: 'Und wenn es bei mir nicht funktioniert?',
        answer:
          'Schreib uns innerhalb von {days} Tagen nach dem Kauf, dann bekommst du dein Geld zurück. Die Einzelheiten stehen in den Bedingungen.',
      },
    ],
  },
  footer: {
    createdBy: 'Erstellt von',
    privacy: 'Datenschutz',
    terms: 'Bedingungen',
    imprint: 'Impressum',
    changelog: 'Changelog',
    langLabel: 'English',
  },
  legalPages: {
    changelogNote: 'Die Release-Notizen gibt es derzeit nur auf Deutsch.',
  },
};
