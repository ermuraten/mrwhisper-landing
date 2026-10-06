import type { IconName } from '@/components/Icon';

export type FeatureCategory = 'dictation' | 'history' | 'tags' | 'ai' | 'design' | 'data';

export interface Feature {
  title: string;
  description: string;
  category: FeatureCategory;
  icon: IconName;
  /** Version the feature arrived in (shown as a badge). */
  since?: string;
  /** Highlighted as new (latest releases). */
  isNew?: boolean;
}

export const FEATURE_CATEGORIES: { id: FeatureCategory; label: string; emoji: string }[] = [
  { id: 'dictation', label: 'Diktat & Sprache', emoji: '🎙️' },
  { id: 'history', label: 'Verlauf & Wissen', emoji: '🗂️' },
  { id: 'tags', label: 'Tags & Ordnung', emoji: '🏷️' },
  { id: 'ai', label: 'KI', emoji: '🪄' },
  { id: 'design', label: 'Oberfläche & Komfort', emoji: '🎨' },
  { id: 'data', label: 'Daten & Sicherheit', emoji: '🔒' },
];

export const FEATURES: Feature[] = [
  // ───────── Neu in 2.15 & 2.16 ─────────
  {
    title: 'Dauerhafter Papierkorb',
    description: 'Gelöschte Verlaufseinträge bleiben mit Text, Titel, Versionen, Notizen, Quellen, Tags und Folge-Prompts erhalten. Suchen, vollständig ansehen und einzeln oder gemeinsam wiederherstellen – endgültig gelöscht wird nur nach ausdrücklicher Rückfrage.',
    category: 'data', icon: 'archive', since: 'v2.16', isNew: true,
  },
  {
    title: 'Lange Audios & YouTube importieren',
    description: 'Lokale Audio- oder Videodateien und einzelne YouTube-Links transkribieren – auch mehrstündige Aufnahmen. Der erste Abschnitt ist sofort fertig, der Eintrag wächst weiter, und Aufträge lassen sich pausieren, fortsetzen und abbrechen.',
    category: 'dictation', icon: 'download', since: 'v2.15', isNew: true,
  },
  // ───────── Neu in 2.13 & 2.14 ─────────
  {
    title: 'Session-Modus',
    description: 'Arbeitest du länger an einer Sache, landet alles Eingesprochene automatisch am richtigen Ort: als Folge-Prompt unter einem Haupteintrag, als angehängter Absatz oder als eigener Eintrag mit festen Tags. Kein Verschieben, kein Taggen von Hand.',
    category: 'history', icon: 'stack', since: 'v2.14', isNew: true,
  },
  {
    title: 'Haupteintrag frei wählen',
    description: 'Haupteintrag ist der letzte Eintrag, ein gesuchter Eintrag (Titel, Text, Nummer oder ID) oder ein neuer leerer Eintrag – dann wird dein erstes Diktat der Hauptprompt und alles Weitere hängt sich darunter.',
    category: 'history', icon: 'search', since: 'v2.14', isNew: true,
  },
  {
    title: 'Tags laufen automatisch mit',
    description: 'Die Tags des Referenz-Eintrags sind vorausgewählt und gelten für jedes Diktat der Session – auch für Einträge, die du von Hand tippst. Das Tag-Popup nach dem Diktat entfällt, solange eine Session läuft.',
    category: 'tags', icon: 'tag', since: 'v2.14', isNew: true,
  },
  {
    title: 'Sessions speichern & fortsetzen',
    description: 'Gib einer Session einen Namen und starte sie später mit einem Klick wieder. Gespeicherte Sessions sind im JSON-Backup enthalten, und auf Wunsch läuft eine Session auch nach einem Neustart weiter.',
    category: 'data', icon: 'archive', since: 'v2.14', isNew: true,
  },
  {
    title: 'Session immer im Blick',
    description: 'Der Knopf in der Titelleiste zeigt auf jeder Seite, ob eine Session läuft. Der Haupteintrag trägt im Verlauf ein Session-Abzeichen, und der Sprachindikator verrät beim Aufnehmen, wohin das Diktat geht.',
    category: 'design', icon: 'signal', since: 'v2.14', isNew: true,
  },
  {
    title: 'Zurück nach oben',
    description: 'Bist du im Verlauf weit unten, bringt dich ein Knopf unten rechts mit einem Klick zurück an den Anfang – kein langes Zurückscrollen mehr.',
    category: 'history', icon: 'undo', since: 'v2.14', isNew: true,
  },
  {
    title: 'Oberfläche „Leder & Messing“',
    description: 'Kleide die ganze App in einen Ledereinband mit Messingbeschlägen – Navy, Braun oder Cognac. Aufgenähte Karten mit goldener Naht, Messingecken, Acryl-Lesezeichen. Alles gerechnet statt Bilddateien, daher in jeder Fenstergröße scharf.',
    category: 'design', icon: 'swatch', since: 'v2.13', isNew: true,
  },
  {
    title: 'Diktat-Popup mit Textkorrektur',
    description: 'Nach dem Diktat erscheint ein kompaktes Popup: erkannten Text direkt anklicken, korrigieren, mit ⌘↵ speichern oder kopieren – und gleich taggen. Der Countdown pausiert, solange du schreibst.',
    category: 'dictation', icon: 'notes', since: 'v2.12',
  },
  {
    title: 'Zentraler Tag-Katalog',
    description: 'Kategorien, Tags und Farben liegen an einer Stelle und gelten in allen Fenstern. Umbenennen oder Verschieben passt jeden Eintrag und jedes Snippet automatisch an – Tags sind über ihren vollständigen Pfad eindeutig.',
    category: 'tags', icon: 'folder', since: 'v2.12',
  },
  {
    title: 'Namenskonflikte klug lösen',
    description: 'Landet „ProjektA“ beim Verschieben dort, wo es „ProjektA“ schon gibt, wählst du: zusammenführen, automatisch umbenennen („ProjektA (2)“) oder selbst benennen. Beim Löschen einer Kategorie fragt MrWhisper, wohin der Inhalt soll.',
    category: 'tags', icon: 'merge', since: 'v2.12',
  },
  {
    title: 'Tag-Fenster frei verschiebbar',
    description: 'Das Tag-Fenster lässt sich an der Kopfzeile verschieben und an Rändern und Ecken skalieren; die Listen passen sich an. Es öffnet immer vollständig sichtbar und merkt sich seine Größe.',
    category: 'tags', icon: 'expand', since: 'v2.12',
  },
  {
    title: 'Farbmischer für Tags & Kategorien',
    description: 'Jeden Tag und jede Kategorie per Klick einfärben – Kategorie-Farben vererben sich. Sättigungsfeld, Farbton-Regler und Hex-Eingabe; eigene Farben bleiben an ihrem Platz.',
    category: 'tags', icon: 'swatch', since: 'v2.12',
  },
  {
    title: 'Eintragsnummern als Buchrücken',
    description: 'Jede Karte trägt ihre Nummer groß und senkrecht in der linken Spalte, daneben Herkunft, Datum und Wortzahl. Mit Filter wird nur innerhalb der Treffer gezählt; Größe und Mindestgröße sind einstellbar.',
    category: 'history', icon: 'hash', since: 'v2.12',
  },
  {
    title: 'Farbige Überschriften',
    description: 'Titel im Verlauf leuchten in einem Farbverlauf, dessen Farbwolken um die Buchstaben kreisen. Animiert, statisch oder aus – mit sechs Vorlagen, drei eigenen Farben und einstellbarer Schriftgröße.',
    category: 'design', icon: 'sparkles', since: 'v2.12',
  },
  {
    title: 'Status-Modus pro Eintrag',
    description: 'Jeder Eintrag wählt seine eigene Fortschrittsanzeige: 3-Stufen-Status, Prozent-Slider, Checkbox oder aus. Status erscheinen als farbige Punkte an der umgeknickten Kartenecke.',
    category: 'history', icon: 'check', since: 'v2.12',
  },
  {
    title: 'Changelog in der App',
    description: 'Unter Hilfe → Changelog stehen alle Versionen als Karten mit Neuerungen und Fehlerbehebungen – die installierte Version ist markiert.',
    category: 'design', icon: 'book', since: 'v2.12',
  },
  {
    title: 'Einstellungen mit zweiter Spalte',
    description: 'Beim Öffnen der Einstellungen klappt die Seitenleiste ein und die Bereiche erscheinen als eigene Spalte, deren Markierung dem Scrollen folgt.',
    category: 'design', icon: 'columns', since: 'v2.12',
  },

  // ───────── v2.8 – v2.11 ─────────
  {
    title: 'Versions-Metadaten & Favoriten-Krone',
    description: 'Jede Version eines Eintrags, Folge-Prompts oder Snippets bekommt Titel, Notiz, 1–5 Sterne und auf Wunsch die goldene 👑 Favoriten-Krone – bearbeitbar direkt im Hover-Popover.',
    category: 'history', icon: 'star', since: 'v2.10',
  },
  {
    title: 'Live-Feedback bei der Verarbeitung',
    description: 'Indikator, Titelleiste und Verlauf zeigen animiert, was gerade passiert: Transkribiere … → Übersetze & füge ein … → Eingefügt.',
    category: 'dictation', icon: 'signal', since: 'v2.11',
  },
  {
    title: 'Statistik-Dashboard & Insights',
    description: 'Wörter und eingesparte Zeit von heute, Aktivitätsdiagramm über 7 oder 30 Tage, Meilensteine, aktivste Tageszeit, KI-Anteil und häufigste Tags.',
    category: 'history', icon: 'chart', since: 'v2.11',
  },
  {
    title: 'Kopier-Zähler',
    description: 'Jedes Kopieren eines Eintrags oder Folge-Prompts wird dezent am Kopieren-Symbol mitgezählt, gespeichert, exportiert und lässt sich zurücksetzen.',
    category: 'history', icon: 'clipboard', since: 'v2.11',
  },
  {
    title: 'Kompakte Zeilenansicht',
    description: 'Auf Wunsch zeigt der Verlauf einzeilige, aufklappbare Einträge statt Karten – ideal, um viele Diktate schnell zu überfliegen.',
    category: 'history', icon: 'rows', since: 'v2.11',
  },
  {
    title: 'Frei platzierbare Kartenaktionen',
    description: 'Für jede der zehn Kartenaktionen festlegen, ob sie direkt in der Hover-Leiste oder im ⋯-Menü liegt – mit einem Klick zurück zum Standard.',
    category: 'design', icon: 'sliders', since: 'v2.11',
  },
  {
    title: 'Einzel-Export als .md oder .txt',
    description: 'Jeden Verlaufseintrag samt Versionen, Notizen, Quellen und Folge-Prompts als Markdown oder Text-Datei speichern.',
    category: 'data', icon: 'download', since: 'v2.8.1',
  },
  {
    title: 'Oberordner-Filter',
    description: 'Eine Hauptkategorie wie „Apps“ auswählen und sofort alle Tags aller Unterkategorien darin filtern – ohne jeden Tag einzeln anzuhaken.',
    category: 'tags', icon: 'filter', since: 'v2.8',
  },

  // ───────── Bewährter Funktionsumfang ─────────
  {
    title: 'Global Hotkey & Instant Dictation',
    description: 'Aktiviere MrWhisper jederzeit systemweit über den Global Hotkey (z. B. fn). Sprich los – der Text erscheint an deiner Cursor-Position.',
    category: 'dictation', icon: 'bolt',
  },
  {
    title: '100 % Offline Whisper Engine',
    description: 'KI-Modelle wie Whisper und Parakeet laufen direkt lokal auf deinem Mac. Volle Privatsphäre, kein Cloud-Zwang.',
    category: 'dictation', icon: 'lock',
  },
  {
    title: 'Post-Dictation Quick-Tagging',
    description: 'Direkt nach dem Diktat erscheint ein schwebendes Pop-up am Sprachindikator zum sofortigen Taggen – mit Live-Vorschau und Countdown-Leiste.',
    category: 'dictation', icon: 'tag', since: 'v2.4',
  },
  {
    title: 'Ruckelfreies Indikator-Schieben',
    description: 'Der Sprachindikator lässt sich stufenlos und ohne Abrisse verschieben – auch über allen Buttons.',
    category: 'dictation', icon: 'cursor', since: 'v2.6',
  },
  {
    title: 'Satzzeichen-tolerante Auslöser',
    description: 'Snippet- und Wörterbuch-Ersetzungen erkennen ihre Auslöser auch dann, wenn die KI einen Punkt oder ein Komma angehängt hat.',
    category: 'dictation', icon: 'doc', since: 'v2.6',
  },
  {
    title: 'Konfigurierbares Wake Word',
    description: 'Latenzfreie Aktivierung per Zuruf („Computer“). In den Einstellungen abschaltbar – dann ist das Mikrofon komplett aus.',
    category: 'dictation', icon: 'mic',
  },
  {
    title: 'Audio-Puffer (1–5 Min)',
    description: 'Ein ständiger Puffer im Arbeitsspeicher sorgt für verzögerungsfreie Aufnahmen – und ist die Grundlage für Flashback.',
    category: 'dictation', icon: 'clock',
  },
  {
    title: 'macOS Dock-Abstandsmessung',
    description: 'Präzise Berechnung der Fensterposition verhindert, dass Popups hinter dem Dock verschwinden.',
    category: 'dictation', icon: 'desktop', since: 'v2.6',
  },
  {
    title: 'Manuelle Multi-Versionierung',
    description: 'Unbegrenzte Text-Varianten (v1, v2 …) für Einträge und Folge-Prompts. KI-Veredelungen legen automatisch eine neue Version an.',
    category: 'history', icon: 'versions', since: 'v2.7',
  },
  {
    title: '@-Mentions & Diktat-Verlinkung',
    description: 'Verlinke Einträge und Folge-Prompts per @ beim Tippen – mit Autocomplete, Tag-Farben, Vorschau und Zurück-Sprung.',
    category: 'history', icon: 'link', since: 'v2.1',
  },
  {
    title: 'Sterne-Priorisierung & Status-Filter',
    description: 'Vergib 1–5 Sterne schon beim Erstellen, filtere nach Erledigungsstatus und priorisiere, was wirklich zählt.',
    category: 'history', icon: 'star', since: 'v2.3',
  },
  {
    title: 'Einklappbare Folge-Prompts',
    description: 'Strukturiere Gedanken als Folge-Prompts unter einem Haupteintrag – das Eingabefeld bleibt eingeklappt, bis du es brauchst.',
    category: 'history', icon: 'stack', since: 'v2.7',
  },
  {
    title: 'Notizen & Quellen',
    description: 'Pro Diktat ein aufklappbarer Bereich für Freitext-Notizen, Referenzen und anklickbare Web-Quellen.',
    category: 'history', icon: 'notes',
  },
  {
    title: 'Echtzeit-Suche & Multi-Filter',
    description: 'Filtere den Verlauf beim Tippen nach Stichwörtern, Tags, Sternen, Sperrung, Notizen oder Aufgabenstatus.',
    category: 'history', icon: 'search',
  },
  {
    title: 'Flüssiges Scrollen bei 1.200+ Einträgen',
    description: 'Der Verlauf wird vorgeladen und stufenweise aufgebaut – Scrollen und Sprünge bleiben auch bei riesigen Archiven flüssig.',
    category: 'history', icon: 'bolt', since: 'v2.1',
  },
  {
    title: 'Hierarchischer Ordner- & Tag-Baum',
    description: 'Kategorien mit beliebig tiefen Unterordnern, Ziehen & Ablegen, Umbenennen direkt in der Liste und Rückgängig-Hinweis beim Löschen.',
    category: 'tags', icon: 'folder', since: 'v2.2',
  },
  {
    title: 'Automatischer Farbkontrast',
    description: 'Für jede Tag-Farbe wird die lesbarste Schriftfarbe berechnet (WCAG 2.1) – helle Schrift auf dunklen Tags und umgekehrt.',
    category: 'tags', icon: 'swatch', since: 'v2.1',
  },
  {
    title: 'KI-Veredelung & eigene Prompts',
    description: 'Überarbeite Diktate und Folge-Prompts per 🪄-Klick: formell, zusammengefasst, korrigiert – oder mit deinem eigenen Prompt.',
    category: 'ai', icon: 'sparkles',
  },
  {
    title: 'Mehrsprachig: DE · EN · TR',
    description: 'Die gesamte Oberfläche samt Benachrichtigungen schaltet live zwischen Deutsch 🇩🇪, Englisch 🇬🇧 und Türkisch 🇹🇷 um.',
    category: 'design', icon: 'language', since: 'v2.5',
  },
  {
    title: '11 Audio-Sound-Sets',
    description: 'Elf Klangpakete für Start und Stopp der Aufnahme – jeweils mit eigener Lautstärke.',
    category: 'design', icon: 'speaker',
  },
  {
    title: 'Freie Text-Markierung',
    description: 'Snippets, Chips und Fließtext im Verlauf lassen sich frei mit der Maus markieren und kopieren.',
    category: 'design', icon: 'clipboard', since: 'v2.6',
  },
  {
    title: 'Regler ohne Verzögerung',
    description: 'Indikatorgröße, Button-Skalierung und Abstände ändern sich live beim Ziehen – ohne KI-Dienste neu zu starten.',
    category: 'design', icon: 'sliders', since: 'v2.6',
  },
  {
    title: 'Mitwachsende Eingabefelder',
    description: 'Textfelder für Snippets und Notizen passen ihre Höhe automatisch an Textlänge und Bildschirmrand an.',
    category: 'design', icon: 'expand', since: 'v2.6',
  },
  {
    title: 'Sichere Datenmigration',
    description: 'Verlauf, Snippets, Wörterbuch, Tag-Katalog und Einstellungen als JSON-Backup exportieren und importieren – ohne Duplikate.',
    category: 'data', icon: 'download',
  },
  {
    title: 'Unbegrenzte Archivierung',
    description: 'Keine Obergrenze: Alle Diktate, Snippets und Verlaufseinträge bleiben dauerhaft lokal gespeichert.',
    category: 'data', icon: 'archive', since: 'v1.8.1',
  },
  {
    title: 'Quarantäne-Ordner',
    description: 'Gelöschte Audiodateien wandern in eine sichere Quarantäne statt sofort endgültig von der Festplatte zu verschwinden.',
    category: 'data', icon: 'shield',
  },

  // ───────── 15 weitere Profi-Funktionen ─────────
  {
    title: 'Lokale KI-Überschriften',
    description: 'Ein lokales Sprachmodell schreibt im Hintergrund prägnante Titel für alle Einträge ohne Überschrift – in der Sprache deiner Wahl, jederzeit neu generierbar.',
    category: 'ai', icon: 'sparkles', since: 'v1.8',
  },
  {
    title: 'Notiz-Assistent (lokaler KI-Chat)',
    description: 'Ein eigener Chat-Bereich mit lokalem Sprachmodell und wortweisem Echtzeit-Streaming der Antworten – ganz ohne Cloud.',
    category: 'ai', icon: 'chat', since: 'v1.8',
  },
  {
    title: 'Automatische Übersetzung ins Englische',
    description: 'Diktiere in deiner Sprache und lass MrWhisper den Text automatisch auf Englisch einfügen – auch als Schnell-Chip pro Diktat.',
    category: 'ai', icon: 'globe', since: 'v1.3',
  },
  {
    title: 'Echtzeit-Diktat & Pegelanzeige',
    description: 'Text wortweise direkt in die aktive App streamen oder satzweise verarbeiten; eine Live-Pegelanzeige zeigt, dass dein Mikrofon ankommt.',
    category: 'dictation', icon: 'signal', since: 'v1.4',
  },
  {
    title: 'Automatische Spracherkennung',
    description: 'Mehrsprachige Diktate ohne Umschalten: MrWhisper erkennt die gesprochene Sprache selbst – oder du legst sie fest.',
    category: 'dictation', icon: 'language', since: 'v1.2',
  },
  {
    title: 'Freihändig per Zuruf',
    description: 'Wake Word und Sprachaktivitätserkennung filtern Tastatur- und Hintergrundgeräusche; eine Sperrlogik verhindert Konflikte mit dem Hotkey.',
    category: 'dictation', icon: 'mic', since: 'v1.2',
  },
  {
    title: 'Aufnahmeprofile',
    description: 'Sprachisolation filtert Nebengeräusche, Studio liefert reines Mikrofonsignal, Benutzerdefiniert gibt dir die volle Kontrolle über Filter und Rauschgrenzen.',
    category: 'dictation', icon: 'sliders',
  },
  {
    title: 'Zwischenablage-Schutz',
    description: 'Fügt MrWhisper Text über die Zwischenablage ein, wird dein vorheriger Inhalt danach automatisch wiederhergestellt.',
    category: 'dictation', icon: 'clipboardCheck', since: 'v1.3',
  },
  {
    title: 'Unsichtbar bei Vollbild-Videos',
    description: 'Läuft ein Video im Vollbild, blendet sich der Aufnahme-Indikator automatisch aus – nichts stört beim Schauen.',
    category: 'dictation', icon: 'eyeOff', since: 'v1.3',
  },
  {
    title: 'Indikator mit Schloss verankern',
    description: 'Beim Ziehen per Rechtsklick an Ort und Stelle festsetzen – ein Schloss zeigt die Verankerung, ein Klick löst sie wieder.',
    category: 'dictation', icon: 'lock', since: 'v1.3',
  },
  {
    title: 'Snippets mit mehreren Auslösern',
    description: 'Ein Textbaustein, viele Auslöser (durch Komma getrennt) – mit Versionen, Tags und Suche.',
    category: 'dictation', icon: 'doc', since: 'v2.3',
  },
  {
    title: 'Einträge sperren',
    description: 'Wichtige Diktate gegen versehentliches Bearbeiten und Löschen sperren – ein Klick auf die umgeknickte Kartenecke genügt.',
    category: 'history', icon: 'lock', since: 'v1.5',
  },
  {
    title: 'Rückgängig für alles',
    description: 'Erledigen, Löschen, Tag-Änderungen: Ein Hinweis mit „Rückgängig“ holt jede Aktion wenige Sekunden lang zurück.',
    category: 'history', icon: 'undo', since: 'v1.6',
  },
  {
    title: 'Mehrfachauswahl & Zusammenlegen',
    description: 'Mehrere Diktate auswählen, gesammelt kopieren, löschen oder zu einem Eintrag zusammenlegen – auf Wunsch chronologisch sortiert.',
    category: 'history', icon: 'merge', since: 'v1.3',
  },
  {
    title: 'Alles bleibt, wo du warst',
    description: 'Letzter Tab, Suchbegriff, alle Filter und die Scrollposition im Verlauf bleiben auch nach einem Neustart erhalten.',
    category: 'design', icon: 'refresh', since: 'v1.7',
  },
];
