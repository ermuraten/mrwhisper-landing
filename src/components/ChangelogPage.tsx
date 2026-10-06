import { getDict } from '@/i18n';
import type { Lang } from '@/lib/lang';

const changelogEntries = [
  {
    version: 'v2.17.0',
    date: '6. Oktober 2026',
    changes: [
      'Neue Funktion: Vollständige englische und türkische Oberfläche - Alle Seiten, Fenster, Tooltips, Statusmeldungen, Rückfragen und Exporttexte (Home, Statistik, Verlauf, Papierkorb, Notiz-Assistent, Snippets, Wörterbuch, Einstellungen, Session-Fenster, Tag-Auswahl, Changelog) erscheinen in der gewählten App-Sprache. Zuvor waren Teile des Verlaufs, der Startseite und der Einstellungen auch auf Englisch noch deutsch. Die deutsche Oberfläche bleibt unverändert.',
      'Verbesserung: Datum, Uhrzeit und Zahlen folgen der App-Sprache - Eintragsdatum, Wochentage, Statistiken und Exporte (Markdown/Text) nutzen das Format der gewählten Sprache (de-DE, en-GB, tr-TR) statt fest deutscher Formate.',
      'Verbesserung: Standardkategorie übersetzt angezeigt - Die Tag-Kategorie „Allgemein“ heißt in der englischen und türkischen Oberfläche „General“ bzw. „Genel“. Gespeichert bleibt der Name „Allgemein“; Tags, Backups und Filter ändern sich dadurch nicht.',
      'Wartung: Übersetzungen zentral und typgeprüft - Rund 1.200 Texte liegen je Sprache in locales/de.json, en.json und tr.json (gleicher Schlüsselbestand, per TypeScript geprüft). Neue Hilfsmodule für Locale, Fortschrittsstatus-Namen und Veredelungs-Vorlagen. Bewusst deutsch bleiben der Inhalt des Changelogs, die Standard-Prompts der lokalen KI und Meldungen des Hauptprozesses.',
    ]
  },
  {
    version: 'v2.16.0',
    date: '2. Oktober 2026',
    changes: [
      'Neue Funktion: Dauerhafter Papierkorb - Gelöschte Verlaufseinträge bleiben mit Text, Titel, Versionen, Notizen, Quellen, Tags und Folge-Prompts erhalten. Unter Papierkorb in der linken Seitenleiste kannst du sie suchen, vollständig ansehen und einzeln oder gemeinsam wiederherstellen. Auch beim Zusammenlegen gelöschte Originale bleiben erhalten; keine automatische Löschung nach einer Frist.',
      'Neue Funktion: Bewusst endgültig löschen - Ausgewählte Einträge endgültig löschen oder den Papierkorb leeren, jeweils mit ausdrücklicher Rückfrage. Normales Löschen im Verlauf bleibt auch nach einem Neustart wiederherstellbar.',
      'Verbesserung: Papierkorb im JSON-Backup - Export und Import nehmen archivierte Einträge mit. Alte Backups fügen bereits archivierte Einträge nicht unbemerkt wieder in den aktiven Verlauf ein; vorhandene Einträge bleiben erhalten.',
      'Verbesserung: Filter immer sichtbar - Der Verlauf zeigt, ob nur offene oder erledigte Einträge sichtbar sind und wie viele ausgeblendet werden. Alle anzeigen hebt Suche und Filter auf. Wiederhergestellte Einträge und Audioimporte lassen sich gezielt öffnen, auch wenn bisherige Filter sie verstecken.',
      'Fehlerbehebung: Suche berücksichtigt Titel - Titel, Versions-Metadaten und Folge-Prompt-Versionen werden zusätzlich zu Text, Notizen und Quellen durchsucht.',
      'Fehlerbehebung: Robuste Wiederherstellung und Backup-Import - Löschen und Archivieren sowie Wiederherstellen werden gemeinsam gespeichert. Rückgängig nutzt den zuletzt gespeicherten Eintrag. Doppelte IDs innerhalb einer Backup-Datei erzeugen keine doppelten Verlaufseinträge; ID-Konflikte beim Wiederherstellen überschreiben keine Daten.'
    ]
  },
  {
    version: 'v2.15.0',
    date: '2. Oktober 2026',
    changes: [
      'Neue Funktion: Lange Audios und YouTube-Videos importieren - Über Audioimport in der Titelleiste lassen sich lokale Audio- oder Videodateien und einzelne YouTube-Videos transkribieren, auch mehrstündige Aufnahmen. Abschnitte mit 15, 30 oder 60 Sekunden laufen nacheinander mit der beim Start gewählten Whisper-/Parakeet-Engine und Transkriptionssprache.',
      'Verbesserung: Erste Ergebnisse sofort - Der erste fertige Audioabschnitt wird bereits transkribiert, während weitere Abschnitte erzeugt werden. Du musst nicht mehr auf die vollständige Zerlegung der Aufnahme warten.',
      'Neue Funktion: Ein wachsender Verlaufseintrag - Jeder fertige Abschnitt erweitert denselben bearbeitbaren Eintrag. YouTube-Links werden als Quelle hinterlegt; der Import erhält einen eigenen Eintrag unabhängig vom Session-Modus.',
      'Neue Funktion: Pausieren, fortsetzen und abbrechen - Aufträge lassen sich am gespeicherten Fortschritt fortsetzen, auch nach Neustart oder Fehler. Fertige Audioabschnitte bleiben erhalten. Ein laufender Abschnitt wird vor der Pause fertig gespeichert; Abbrechen behält den bereits gespeicherten Text. Nach einem Neustart startest du die Fortsetzung selbst.',
      'Neue Funktion: Grafischer Fortschritt auf jeder Seite - Die Leiste unten zeigt Gesamtlänge, Abschnittslänge und -anzahl, vorbereitete und transkribierte Audiodauer, Download-Fortschritt und den aktuellen Abschnitt. Grün bedeutet Text, Blau vorbereitetes Audio, Grau noch offene Abschnitte und Gold den gerade verarbeiteten Abschnitt. Die weitere Audioaufbereitung bleibt während der Transkription sichtbar.',
      'Verbesserung: Weiterarbeiten während des Imports - Die App bleibt bedienbar, mehrere Importe laufen nacheinander. Normale Diktate haben vor dem nächsten Importabschnitt Vorrang; eine laufende Transkription wird zuerst abgeschlossen. Die neue Oberfläche ist auf Deutsch, Englisch und Türkisch verfügbar.',
      'Verbesserung: Verlässliche Speicherung und lokale Verarbeitung - Text und Fortschritt werden gemeinsam gespeichert, fertige Audioabschnitte beim Fortsetzen wiederverwendet und temporäre Audiodateien nach Abschluss oder Abbruch aufgeräumt. Transkription läuft lokal; YouTube benötigt Internet für den Download.',
      'Wartung: Projekt- und Build-Metadaten - Autor, Maintainer und Copyright sind auf Murat Eren vereinheitlicht.',
      'Wartung: Verkaufs- und Distributionsplanung dokumentiert - Projektunterlagen zu Einmalkauf, geplanter Lizenzaktivierung, öffentlichen Downloads/Updates und der Serie „Build in Replay“. Lizenzsystem, Auto-Updater und signierte Verkaufs-Builds sind weiterhin Planung.'
    ]
  },
  {
    version: 'v2.14.0',
    date: '19. September 2026',
    changes: [
      'Neue Funktion: Session-Modus - Über den Session-Knopf oben in der Titelleiste bestimmst du, wohin alles geht, was du einsprichst: als Folge-Prompt unter einen Haupteintrag, als angehängter Absatz oder als eigener Eintrag mit festen Tags. Haupteintrag ist der letzte Eintrag, ein gesuchter Eintrag (Titel, Text, Nummer oder ID) oder ein neuer leerer Eintrag, den dein erstes Diktat füllt. Tags werden automatisch übernommen – auch für von Hand getippte Einträge.',
      'Neue Funktion: Gespeicherte Sessions - Sessions mit Namen speichern, später mit einem Klick fortsetzen und im JSON-Export mitnehmen. Auf Wunsch läuft eine Session auch nach einem Neustart weiter.',
      'Neue Funktion: Session immer im Blick - Der Haupteintrag trägt im Verlauf ein Session-Badge, und der Sprachindikator zeigt beim Aufnehmen, wohin das Diktat geht.',
      'Neue Funktion: Nach oben springen - Ein Knopf unten rechts im Verlauf bringt dich mit einem Klick zurück an den Anfang.',
      'Verbesserung: Einstellungen - Export / Import steht jetzt ganz unten, der neue Bereich Session-Modus bündelt die Session-Optionen.'
    ]
  },
  {
    version: 'v2.13.0',
    date: '18. September 2026',
    changes: [
      'Neue Funktion: Oberfläche „Leder & Messing“ - Unter Einstellungen → Darstellung kleidet sich die ganze App in einen Ledereinband mit Messingbeschlägen: Navy-Leder, Braunes Leder oder Helles Leder (Cognac). Genarbtes Leder, aufgenähte Karten mit goldener Naht, Messingecken, ein Acryl-Lesezeichen mit geprägter Eintragsnummer – alles gerechnet statt Bilddateien und daher in jeder Fenstergröße scharf. Das gewohnte Design bleibt als „Standard“ wählbar.',
      'Neue Funktion: Mindestgröße der Eintragsnummer - Die Nummer auf den Verlaufskarten rechnet ihre Stellenzahl mit ein und bleibt auch auf kurzen Karten vollständig sichtbar; eine Mindestgröße ist in den Einstellungen wählbar.',
      'Neue Funktion: Installierte Version im Changelog - Die Changelog-Seite in der App zeigt, welche Version installiert ist, und markiert sie. Die App meldet jetzt die Version 2.13.0.',
      'Verbesserung: Filterfenster im Verlauf - Passt sich der gewählten Oberfläche an; solange es offen ist, lässt sich das App-Fenster nicht mehr versehentlich verschieben.',
      'Verbesserung: Neue Website - Deutlich erweiterter Funktionsumfang nach Bereichen, neue Abschnitte zu Neuerungen und Ablauf, überarbeitetes Design.',
      'Wartung: Designsystem - Akzent- und Grautöne laufen über zentrale Farbwerte, damit Oberflächen die ganze App mit wenigen Zeilen umfärben können.',
      'Fehlerbehebung: Dreistellige Eintragsnummern liefen auf kürzeren Karten oben aus der Spalte.'
    ]
  },
  {
    version: 'v2.12.0',
    date: '13. September 2026',
    changes: [
      'Neue Funktion: Changelog in der App - Unter Hilfe → Changelog zeigt MrWhisper alle Versionen übersichtlich als Karten mit Datum, Neuerungen und Fehlerbehebungen, markiert die neueste Version und öffnet auf Wunsch den Online-Changelog.',
      'Wartung: Changelog-Abgleich - Ein Prüfskript stellt sicher, dass App- und Website-Changelog immer denselben Versionsstand haben.',
      'Neue Funktion: Status-Modus pro Eintrag - Im Status-Menü jeder Verlaufskarte lässt sich einzeln 3-Stufen-Status, Prozent-Slider, Checkbox oder Aus wählen. Die Einstellung gilt als Standard, die Wahl pro Eintrag wird gespeichert und per JSON-Backup exportiert und importiert.',
      'Neue Funktion: Eintragsnummern - Jeder Verlaufseintrag zeigt seine Nummer in der aktuellen Ansicht (unten #1, oben die höchste) – mit Filter oder Suche wird nur innerhalb der Treffer gezählt. Sichtbarkeit in den Einstellungen wählbar.',
      'Neue Funktion: Aufgeräumte Verlaufskarte - Oben rechts eine umgeknickte Ecke mit Schloss zum Sperren und Status als farbige Punkte. Nummer, Datum, Uhrzeit und Wortzahl stehen gedreht in der linken Spalte, ihre Größe ist einstellbar. Kopf- und Fußzeile bleiben dadurch ruhig.',
      'Neue Funktion: Versions-Metadaten für Text-Snippets - Snippet-Versionen haben jetzt wie Verlaufs-Versionen Titel, Notiz, Sterne und eine Favoriten-Krone.',
      'Verbesserung: Verlauf öffnet ohne Verzögerung - Der Verlauf wird vorgeladen und stufenweise aufgebaut; der Wechsel dorthin fühlt sich auch bei vielen Einträgen sofort an.',
      'Neue Funktion: Diktat-Popup neu - Das Fenster nach dem Diktat ist moderner, und der erkannte Text lässt sich dort direkt korrigieren, speichern und kopieren.',
      'Neue Funktion: Titelgröße - Die Schriftgröße der Überschriften im Verlauf ist unter Einstellungen → Darstellung einstellbar.',
      'Verbesserung: Einstellungen mit zweiter Spalte - Beim Öffnen der Einstellungen klappt die Seitenleiste ein und die Bereiche erscheinen als eigene Spalte daneben statt als Tab-Leiste.',
      'Neue Funktion: Farbige Überschriften - Titel im Verlauf leuchten in einem animierten Farbverlauf. Effekt, Farben (inkl. Vorlagen) und Geschwindigkeit sind unter Einstellungen → Darstellung wählbar.',
      'Verbesserung: Tag-Fenster - Verschiebbar, in Breite und Höhe skalierbar und öffnet immer vollständig sichtbar.',
      'Neue Funktion: Tag-Verwaltung neu - Kategorien anlegen (auch leer), umbenennen und per Ziehen neu ordnen, auch Hauptkategorien als Unterkategorie. Gibt es am Ziel schon denselben Namen, kannst du zusammenführen, automatisch umbenennen oder selbst einen Namen vergeben. Beim Löschen einer Kategorie mit Inhalt fragt MrWhisper, wohin die Tags sollen. Alle Einträge werden automatisch angepasst.',
      'Neue Funktion: Farben für Tags und Kategorien - Einfach anklicken und einfärben; Kategorie-Farben gelten für alle Tags darin. Ein neuer Farbmischer ersetzt den alten Farbkreis, eigene Farben bleiben an ihrem Platz.',
      'Fehlerbehebung: Kategorien und Tags erscheinen nicht mehr plötzlich kleingeschrieben oder doppelt, leere Kategorien bleiben erhalten, und Umbenennen trifft keine gleichnamigen Tags in anderen Kategorien mehr.',
      'Fehlerbehebung: Das MrWhisper-Fenster lässt sich jetzt auch in der Mitte der Titelleiste zuverlässig verschieben.',
      'Fehlerbehebung: Das Tag-Fenster wird bei Einträgen weit unten nicht mehr abgeschnitten.'
    ]
  },
  {
    version: 'v2.11.0',
    date: '13. September 2026',
    changes: [
      'Neue Funktion: Modernes Redesign - Neue App-Shell mit gruppierter, einklappbarer Seitenleiste (Übersicht, Arbeitsbereich, Konfiguration), einheitlichem Design-System und flüssigen Animationen aus transitions.dev. Die Übersichtlichkeit orientiert sich an FluidVoice, die MrWhisper-Farben bleiben.',
      'Neue Funktion: Home & Statistiken - „Heute“-Karte mit Wörtern, eingesparter Zeit und Diktaten, animierte Kennzahlen, Aktivitätsdiagramm (7/30 Tage), Meilensteine und Insights (aktivste Tageszeit, Wochentag, KI-Anteil, häufigste Tags).',
      'Neue Funktion: Live-Feedback bei der Sprachverarbeitung - Sprachindikator, Titelleiste, Verlauf und Home zeigen animiert, ob gerade transkribiert, übersetzt oder eingefügt wird.',
      'Verbesserung: Aufgeräumte Einstellungen - 9 logische Bereiche mit Sprung-Navigation und Scroll-Spy, kompakte Schieberegler mit Wertanzeige; alle bisherigen Optionen bleiben erhalten.',
      'Neue Funktion: Neue Verlaufskarte - Ruhiges Kartendesign mit Hover-Aktionsleiste und ⋯-Menü, alternativ kompakte aufklappbare Zeilen (in den Einstellungen umschaltbar). Für jede der zehn Kartenaktionen lässt sich festlegen, ob sie in der Leiste oder im ⋯-Menü liegt.',
      'Neue Funktion: Kopier-Zähler - Jedes Kopieren von Verlaufseinträgen und Folge-Prompts wird dezent am Kopieren-Icon mitgezählt, dauerhaft gespeichert, in JSON-Backup sowie .md/.txt-Export übernommen, beim Import zusammengeführt und lässt sich per Tooltip oder ⋯-Menü zurücksetzen.',
      'Neue Funktion: Animierte Suchfelder - Beim Leeren (✕ oder Esc) löst sich der Suchtext mit der transitions.dev-Animation „Input clear with dissolve“ auf (Verlauf, Text-Snippets, @-Verweis-Dialog).',
      'Verbesserung: Verlauf öffnet sofort - Der Verlauf wird im Hintergrund vorgeladen und zwischengespeichert; kein kurzes Schwarzbild mehr beim Öffnen des Tabs. Bei einer Suche ohne Treffer behält die Seite ihre volle Breite.',
      'Fehlerbehebung: Sprachindikator-Positionierung - Die Position bleibt nach Vollbild-Apps, Auflösungs- und Monitorwechseln erhalten (Dock wird ignoriert), der Indikator lässt sich bis an den unteren Bildschirmrand ziehen, „Lösen“ wird nie abgeschnitten, alle Buttons sind ziehbar, Rechts-Ziehen verankert und Rechtsklick blendet aus, Start ohne Positionssprung.',
      'Fehlerbehebung: Aufnahmeprofile - Sprachisolation und Studio speichern Profil und Filter wieder vollständig.'
    ]
  },
  {
    version: 'v2.10.0',
    date: '25. August 2026',
    changes: [
      'Neue Funktion: Erweiterte Versionen-Metadaten für Haupt- & Folge-Prompts - Jede Version kann nun mit eigenen Titeln, Notizen, einer 1–5 Sterne-Bewertung (⭐) sowie einer Favoriten-Markierung (👑) versehen werden.',
      'Verbesserung: Multi-Stern Hover-Vorschau & Löschen - Beim Zeigen auf einen Stern (z. B. Stern 4) leuchten alle Sterne bis dorthin gelb auf. Erneuter Klick auf den vergebenen Stern oder Klick auf ✕ löscht die Sterne-Bewertung.',
      'Verbesserung: Titel & Notizen restlos entfernen - Versionstitel und Notizen können im Detail-Modal (über Einzelfeld-Leeren oder "Alles leeren") sowie direkt im Popover gelöscht werden und werden dauerhaft aus dem Speicher entfernt.',
      'Neue Funktion: Goldene Favoriten-Markierung & Krone - Favorisierte Versionen heben sich durch edle goldene Akzentfarben ab, zeigen ein 👑-Symbol direkt neben der Versionsnummer und garantieren Exklusivität pro Prompt.',
      'Neue Funktion: Flüssige Mouseover-Aktionsleiste (Hover Popover) - Schwebendes Menü beim Überfahren von Versions-Badges mit 180ms Pufferzeit für 1-Klick Sterne-Vergabe, Favoriten-Toggle, Umbenennen und Detail-Modal.',
      'Verbesserung: JSON, Markdown & Plaintext Export - Vollständige Persistierung in StorageService.ts und Einbindung von Versionstiteln, Notizen, Sternen und Favoriten in JSON-Backups sowie .md/.txt Exporte.'
    ]
  },
  {
    version: 'v2.9.1',
    date: '25. August 2026',
    changes: [
      'Fehlerbehebung: Folge-Prompt (Sub-Entry) Versionierungs- & Persistenz-Fix - Beim Bearbeiten und Speichern von Unter-Einträgen mit Versionen (z. B. v2) wird der Text nun dauerhaft im versions-Array gesichert und beim Umschalten zwischen v1 und v2 nicht mehr überschrieben.',
      'Verbesserung: Live-Synchronisierung im Bearbeitungsmodus - Beim Wechsel von Versionen bei geöffnetem Editor aktualisiert sich das Eingabefeld sofort auf den Text der gewählten Version.',
      'Verbesserung: Backend-Konsistenz (StorageService.ts) - updateSubEntry und updateDictationText synchronisieren das versions-Array nun auch bei direkten Text-Updates im Hauptprozess dauerhaft und konsistent.',
      'Wartung: CI/CD Optimierung - Bereinigung ungenutzter GitHub Actions Build-Workflows zur Schonung von Runner- und Speicher-Ressourcen.'
    ]
  },
  {
    version: 'v2.9.0',
    date: '22. August 2026',
    changes: [
      'Neue Funktion: Aufgaben- & Fortschritts-Steuerung für Prompts & ToDos - 3 wählbare Tracking-Modi in den Einstellungen (⚡ 3-Stufen-Status, 🎚️ Prozent-Slider 0–100%, ☑️ Checkbox oder Deaktiviert) zur flexiblen Fortschrittsverfolgung direkt auf jeder Verlaufskarte.',
      'Neue Funktion: Flüssige Mouseover-Auswahlleiste (Hover Popover) - Schwebende Aktionsleiste direkt über dem Status-Button für blitzschnelles Umschalten per Mouseover mit 1-Klick-Direkt-Abschluss (✅ Erledigt) ohne störende Dialoge.',
      'Neue Funktion: "Fast fertig"-Notizmodal mit Klick-Chips - Bei Stufe 2 (Fast fertig) öffnet sich ein Popover für Notizen & Begründungen (z. B. offene KI-Feinjustierungen/Bugs) samt Schnell-Tags (🐛 Bugfix nötig, 🎨 UI & Styling, ⚡ Performance, 🧪 Noch testen, 📐 Spiellogik).',
      'Verbesserung: Visuelles Farb- & Glow-Highlight - Kräftiger Bernsteinglanz & pulsierender Punkt für "In Bearbeitung", klares Orange für "Fast fertig" und Smaragdgrün für "Erledigt" heben aktive Prompts im Verlauf sofort hervor.',
      'Neue Funktion: Tag Hover Schnellfilter-Leiste & Anzeigesegment-Auswahl - Beim Überfahren vergebener Tags mit der Maus erscheint eine schwebende Aktionsleiste mit "[🔍 Nur diesen]" (1-Klick Exklusiv-Filterung), "[➕ Zum Filter]" (Kombinieren) sowie flexibler Auswahl des sichtbaren Segments für hierarchische Tags (z. B. "MrWhisper" statt "TODO" im Ruhezustand).',
      'Neue Funktion: 2-Wege-Filter-Reset-System - Komfortables Ausschalten aktiver Filter direkt im Tag-Hover-Popover ("[✕ Aus Filter]" / "[🚫 Filter aus]") sowie über den neuen leuchtenden Active-Filter-Banner über dem Verlauf mit 1-Klick-Reset-Button.',
      'Verbesserung: Filter-Modal & Volltext-Suche - Neuer Status-Filter im Filter-Modal (In Bearbeitung, Fast fertig, Erledigt, Ohne Status), automatische Suchbarkeit von Status-Notizen und Mitnahme beim Exportieren/Kopieren.'
    ]
  },
  {
    version: 'v2.8.1',
    date: '16. August 2026',
    changes: [
      'Neue Funktion: Einzel-Export für Verlaufseinträge als .md oder .txt - Jeder einzelne Eintrag kann per Klick über den nativen System-Speicherdialog sauber formatiert als Markdown (.md) oder Textdatei (.txt) exportiert werden.',
      'Verbesserung: Strukturierter Export-Umfang - Exportiert Titel, Metadaten (Datum, Tags, Priorität), Haupttext, alle Versionen/Varianten, Notizen, Quellen sowie untergeordnete Folge-Prompts strukturiert.',
      'Verbesserung: Filter-Modal Optimierungen - Modal-Breite auf 820px erweitert, Spalten-Höhe standardmäßig vergrößert und ein horizontaler Drag-Handle zum stufenlosen Ziehen der Tag-/Kategorieliste integriert.'
    ]
  },
  {
    version: 'v2.8.0',
    date: '16. August 2026',
    changes: [
      'Neue Funktion: Hierarchische Oberordner- & Kategorie-Filterung - Auswahl eines Oberordners bezieht automatisch alle darunterliegenden Child-Tags und Subkategorien in den Filter ein.',
      'Verbesserung: Hierarchische Matching-Engine - Verlauf gleicht Filterkriterien intelligent gegen Kategorien, Unterkategorien und Legacy-Tags ab (z. B. "MrWhisper > TODO").',
      'Verbesserung: Batch-Tag-Toggling - Checkbox-Klicks auf Kategorien aktualisieren alle enthaltenen Tags in einem einzigen atomaren State-Update.'
    ]
  },
  {
    version: 'v2.7.0',
    date: '30. Juli 2026',
    changes: [
      'Neue Funktion: Manuelle Versionierung für Verlaufseinträge & Folge-Prompts - [+ ➕ Version]-Button in der Aktionsleiste von Haupteinträgen und im Karteikopf von Folge-Prompts zum manuellen Erstellen neuer Textvarianten.',
      'Neue Funktion: Vollständiges Versionsmodell für Folge-Prompts (DictationSubEntry) - Unter-Einträge bieten nun eigene Versionen (versions, activeVersionId) mit Umschalt-Badges (v1, v2...), Umbenennung per Doppelklick und Löschen (×). KI-Veredelungen erzeugen automatisch neue Versionen.',
      'Verbesserung: Intelligente Versionsleisten-Ausblendung & Textübernahme-Option - Versionsleisten werden bei nur 1 existierenden Version automatisch ausgeblendet. Eine neue Option ("Bisherigen Text bei neuer Version übernehmen") steuert das Vorbefüllen.',
      'Neue Funktion: Einklappbares Eingabefeld für Folge-Prompts (Standard: eingeklappt) - Das Eingabefeld für neue Folge-Prompts erscheint standardmäßig als kompakter "+ Folge-Prompt hinzufügen"-Button und fokussiert beim Klick sofort das Textfeld.'
    ]
  },
  {
    version: 'v2.6.0',
    date: '29. Juli 2026',
    changes: [
      'Ruckelfreies & Robustes Indikator-Schieben - Neue Main-Prozess Cursor-Polling Engine (screen.getCursorScreenPoint @60fps) eliminiert Abrisse und Hängenbleiben beim Rechtsklick-Schieben vollständig, verhindert Pixel-Sprünge auf macOS und ermöglicht stufenlose Platzierung am untersten Bildschirmrand.',
      'Performance & RAM-Leak Behebung bei Einstellungs-Reglern - 60 FPS stufenlose Slider-Bewegung für Layout-Einstellungen. Selektive IPC-Reinitialisierung verhindert unnötige Neustarts von Whisper- und Audiodiensten und eliminiert RAM-Spikes.',
      'Verbesserung: Dock-Abstandsmessung & Clipping-Schutz für Tag-Modal - Vertikale Fensterpositionierung richtet sich direkt nach dem Tag-Prompt-Abstand (tagPromptBottomOffset) für präzise Platzierung direkt über dem macOS Dock.',
      'Neue Funktion: Smarte dynamische Textareas & Text-Markierung für Snippets - Freie Text-Markierung auf Snippet-Karten (userSelect) und sich automatisch an den Bildschirmrand anpassende Text-Eingabefelder.',
      'Verbesserung: Satzzeichen-Toleranter Snippet- & Wörterbuch-Abgleich - Intelligente Normalisierungs-Engine (normalizeText) ignoriert automatisch von Sprach-KIs angehängte Satzzeichen (z. B. "Commit and Push.").'
    ]
  },
  {
    version: 'v2.5.0',
    date: '28. Juli 2026',
    changes: [
      'Neue Funktion: Industriestandard Multilanguage-System (i18next + react-i18next) - Enterprise i18n Architektur mit 100 % TypeScript Compile-Time Key Validation via Module Augmentation.',
      'Neue Funktion: Vorstrukturierte Lokalisierungs-Wörterbücher - Umfassende Sprachpakete für Deutsch 🇩🇪, English 🇬🇧 und Türkçe 🇹🇷 in locales/de.json, en.json und tr.json.',
      'Neue Funktion: Echtzeit-Sprachumschaltung & Settings Integration - Sprachauswahl unter Einstellungen (App Language) schaltet die Benutzeroberfläche und Benachrichtigungen sofort live ohne Neustart um.',
      'Verbesserung: Electron Main Process Localization (I18nMainService.ts) - Dedizierter i18n-Helper im Hauptprozess versorgt native System-Benachrichtigungen, Tray-Menüs und OS-Dialoge dynamisch in der gewählten Sprache.'
    ]
  },
  {
    version: 'v2.4.0',
    date: '27. Juli 2026',
    changes: [
      'Neue Funktion: Post-Dictation Quick-Tagging Pop-up - Direkt nach dem Beenden eines Diktats erscheint ein schwebendes Pop-up unten am Sprachindikator zum sofortigen Taggen mit Vorschau, Badges und Countdown-Balken.',
      'Neue Funktion: Dynamische Fenster-Skalierung - Der IPC-Kanal resize-indicator-window vergrößert das frameless Electron-Indikatorfenster flüssig von 73px auf 260px (am unteren Bildschirmrand verankert).',
      'Verbesserung: Einstellungen & Zeitsteuerung - Einstellungs-Optionen enablePostDictationTagPicker (An/Aus) und postDictationTagPickerDuration (2–30 Sekunden, Standard 6s).'
    ]
  },
  {
    version: 'v2.3.0',
    date: '26. Juli 2026',
    changes: [
      'Neue Funktion: Direkte Sternvergabe für Neueinträge - Interaktive StarRating-Komponente im Erstellungsfeld ("Neuer Eintrag...") gestattet die Vergabe von Sternen (1–5) vor dem Absenden.',
      'Neue Funktion: Snippet-Versionierung & Aktive Trigger-Ausführung - Unterstüzung mehrerer Versionen pro Text-Snippet (v1, v2, Formell, Englisch) mit interaktiven Badges und dynamischem Einfügen der aktiven Version beim Sprechen des Trigger-Wortes.'
    ]
  },
  {
    version: 'v2.2.0',
    date: '25. Juli 2026',
    changes: [
      'Neue Funktion: Redesign Tag-Filter mit 2-Spalten Kategoriebaum - CategorizedTagFilter nutzt nun 1:1 den CategorizedTagPicker mit hierarchischer Baumstruktur (Kategorien links mit Unterordnern, Tags rechts), Inklusive/Exklusive-Filterung und Reset-Button.',
      'Neue Funktion: Graue Anzeige & Papierkorb für unzugewiesene Tags - Inaktive Tags werden grau schattiert dargestellt und zeigen ein Papierkorb-Symbol (🗑️) zum schnellen Löschen samt automatischer Bereinigung verwaister Tag-Farben.',
      'Neue Funktion: Interaktiver Tag-Lösch- & Ersetzungs-Dialog (TagDeleteModal) - Beim Löschen zugewiesener Tags zeigt ein Dialog die betroffene Diktat-Anzahl an ("Dieser Tag ist aktuell N Diktaten zugewiesen") und bietet "Ersetzen & Löschen" oder "Ersatzlos löschen" an.',
      'Neue Funktion: Nahtloses Rückgängig-System für Tag-Löschungen - Über das globale Undo-Toast-System lässt sich jede Tag-Löschung per [Rückgängig]-Button am unteren Bildschirmrand sofort wieder rückgängig machen.',
      'Verbesserung: Body-Level Portal Stacking & Popover-Fixes - Tag-Löschmodals und Undo-Toasts werden mit zIndex: 10000000 portaliert. Ein zentraler State-Manager (closeAllTagPickers & openTagPicker) verhindert das Überlappen mehrerer Tag-Picker und garantiert ein voll funktionsfähiges X zum Schließen.'
    ]
  },
  {
    version: 'v2.1.0',
    date: '24. Juli 2026',
    changes: [
      'Neue Funktion: Frei verschiebbares (Draggable) & stufenlos vergrößerbares (Resizable) Verlinkungsfenster - Das @-Verlinkungsmenü lässt sich per Titelleiste frei per Maus verschieben, ist an der rechten unteren Ecke (◢) stufenlos vergrößerbar und zeigt standardmäßig 4 volle Treffer-Karten im Hauptarbeitsbereich an.',
      'Fehlerbehebung: Saubere Trennung von Haupteintrag-Bearbeitung & Folge-Prompts - Beim Klick auf Bearbeiten oder den Haupttext bleibt das darunterliegende Folge-Prompt-Feld nun wie vorgesehen leer.',
      'Verbesserung: Smarte Status-Filter Beibehaltung bei Verlinkungs-Sprüngen - Klicks auf verlinkte Einträge behalten den aktiven Status-Filter (Nur Aktive/Offene) bei, sofern der Zieleintrag offen ist.',
      'Verbesserung: Bereinigung veralteter Geister-Tags im Tag-Filter-Modal - Veraltete oder unbenutzte Tags werden nicht mehr als grau schattierte Geister-Einträge im Tag-Filter-Modal gerendert.',
      'Neue Funktion: KI-Veredelung für Folge-Prompts (Sub-Entry KI Refinement) - Jeder Unter-Eintrag/Folge-Prompt in der Verlaufshistorie bietet nun wie der Haupteintrag einen dedizierten 🪄 Veredeln-Button mit Preset-Chips und benutzerdefinierter KI-Überarbeitung.',
      'Neue Funktion: Erweitertes @-Mention & Verlinkungs-System mit Autocomplete, Tag-Farben, Volltext-Vorschau & Kollisionsschutz - Beim Eingeben von @ im Haupteintrag oder in Folge-Prompts öffnet sich ein interaktives Such-Overlay mit Tag-Farben und side-by-side Volltext-Vorschau (👁️ Volltext-Vorschau).',
      'Neue Funktion: Präzise Ziel-Navigation & Navigations-Stack (Zurück-Button) - Klick auf ein Verlinkungs-Badge löst die Ziel-ID auf, klappt Unter-Einträge auf und hebt die Ziel-Karte mit Leuchtrahmen hervor. Ein fixer "Zurück"-Button ermöglicht nahtloses Zurückkehren.',
      'Neue Funktion: Einstellungs-Option für Sprungverhalten (Flüssig vs. Direkter Sprung) - In den Einstellungen kann zwischen "🌊 Flüssiges Scrollen" und "⚡ Direkter Sprung" gewählt werden.',
      'Neue Funktion: Direkter Klick auf Haupttext zum Bearbeiten - Klick direkt auf den Fließtext eines Haupteintrags aktiviert sofort das Bearbeitungsfenster.',
      'Neue Funktion: Echtzeit-Livesuche beim Tippen im Tag-Picker - Beim Tippen in die Kategorien- und Tag-Eingabefelder filtern sich bestehende Bäume sofort in Echtzeit mit.',
      'Verbesserung: Fast-Path 0ms Latenz-Optimierung bei riesigen Verläufen - Eliminierung von Scroll-Verzögerungen bei 1.200+ Einträgen durch Fast-Path DOM-Scrolling auf Frame 0.',
      'Verbesserung: Smarter WCAG 2.1 Farbkontrast-Rechner für Tags - getContrastTextColor berechnet für alle HSL/RGB/Hex-Farbtöne die mathematisch optimale Textfarbe (#000000 / #ffffff) für maximale Lesbarkeit.'
    ]
  },
  {
    version: 'v1.9.0',
    date: '21. Juli 2026',
    changes: [
      'Neue Funktion: Pointer Drag & Drop Engine für Tags & Kategorien - Vollständiger Ersatz des nativen HTML5 Drag & Drop durch eine hochzuverlässige Pointer-Event Drag Engine (onPointerDown / onPointerMove / onPointerUp). Eliminiert Snap-Back / Zurückfliegen auf macOS Trackpads.',
      'Verbesserung: Schwebendes Vorschau-Badge & Grüner Ordner-Highlighter - Ziehen eines Tags zeigt ein flüssiges schwebendes Vorschau-Badge (🏷️ Tag → Auf Ordner schieben) und hebt Ziel-Kategorien (📁 Hier ablegen) leuchtend grün hervor.',
      'Verbesserung: Sofortiges lokales Umhängen & Automatischer Ordner-Wechsel - Beim Ablegen eines Tags wechselt der Tag-Picker sofort auf den Zielordner und wendet ein lokales State-Override (localCategoryOverrides) an, damit Tags sofort sichtbar bleiben.',
      'Verbesserung: Body-Level React Portal & Viewport-Kollisionsschutz - Re-Architektur von CategorizedTagPicker als globales React Portal (createPortal). Verhindert Abschneiden durch Container-Overflow und berechnet die Position dynamisch am Bildschirmrand.',
      'Verbesserung: Kategorieübergreifende Gesamtansicht & Entkoppelte Suche - Initialer Zustand selectedCategory ist nun null, um sofort alle Tags aller Kategorien gemeinsam anzuzeigen. Kategoriensuche ist von der Tag-Filterung entkoppelt.',
      'Verbesserung: Case-Insensitive Tag-Deduplizierung & 100-Farben Raster - Groß-/Kleinschreibung-Ignorierung für Tags und tagColors. Farbwähler auf 20x5 Raster mit 100 kuratierten Farben erweitert.',
      'Verbesserung: Globale Tag-Umbenennung & IPC-Sync - Case-insensitive Tag-Pfade und Legacy-Tag Umbenennung in State, localStorage (mrwhisper_tag_colors) und via IPC (updateDictationCategories, updateSnippetCategories).',
      'Neue Funktion: Mehrstufige Kategorien & In-Line Unterordner-Eingabe (Nested Subcategories & Tree View) - Unterstützung für 2-Ebenen Kategoriebäume. Das obere Eingabefeld erstellt Hauptkategorien, während ein [+ Sub] Button auf aktiven Ordnern ein eingerücktes Eingabefeld (└ 📂 Unterordner...) öffnet.',
      'Neue Funktion: In-Line Tag-Umbenennung - Tags können per Doppel-Klick oder über das Stift-Icon (✏️) direkt im Tag-Picker umbenannt werden. Die Änderung wird synchron in der Datenbank und in Farbpräferenzen übernommen.',
      'Fix: Nahtlose Tag-Ersetzung beim Drag & Drop - Beim Ziehen eines zugewiesenen Tags auf eine neue Kategorie wird der alte Tag atomar ersetzt (keine doppelten Tags mehr in der oberen Leiste).',
      'Verbesserung: Erstellungs-Filter-Reset - Automatische Bereinigung aktiver Tag-Filter beim Erstellen neuer Diktat-Einträge, damit neue Inhalte sofort ganz oben im Verlauf erscheinen.'
    ]
  },
  {
    version: 'v1.8.1',
    date: '18. Juli 2026',
    changes: [
      'Verbesserung: Entfernung der Verlauf-Begrenzung - Die künstliche Obergrenze von 1.000 Einträgen im JSON-Speicher (StorageService.ts und ExportImportService.ts) wurde vollständig entfernt. Diktate im Verlauf werden nun niemals mehr automatisch gelöscht, was eine unbegrenzte und dauerhafte lokale Archivierung aller Daten garantiert.'
    ]
  },
  {
    version: 'v1.8.0',
    date: '15. Juli 2026',
    changes: [
      'Neue Funktion: Lokale Hintergrund-KI-Überschriften (Local AI Title Generation) - Ein neuer Service TitleGenerationService.ts verwaltet einen Hintergrundprozess, der für alle Verlaufseinträge ohne Titel automatisch prägnante Überschriften generiert.',
      'Neue Funktion: KI-Überschriften-Bedienfeld - Integration eines einklappbaren Panels im Verlauf mit Echtzeit-Fortschrittsbalken und Buttons zum Starten, Stoppen und Fortsetzen des Hintergrund-Generierungskreislaufs.',
      'Neue Funktion: Verlauf-Card Titel-Anzeige & Regeneration - Zeigt die generierten Titel prominent fettgedruckt an, inklusive Zauberstab-Button (🪄) zum direkten Regenerieren oder Erstellen eines Einzeltitels.',
      'Neue Funktion: Sprachauswahl für KI-Überschriften - Neue Option "titleLanguage" in den Einstellungen ermöglicht die Festlegung der Titelsprache (Automatisch, Deutsch, Englisch, Türkisch, Spanisch, Französisch).',
      'Verbesserung: Prompt-Optimierung & Ausfallsicherheit - Deutscher Systemprompt mit klaren Beispielen verhindert, dass das Modell auf diktierte Fragen direkt antwortet. Restriktive Parameter (temperature: 0.3, max_tokens: 15, stop: ["\\n"]) verhindern Weitergenerieren.',
      'Verbesserung: Prompt-Bypass & Stabilität für Reasoning-Modelle (z.B. Bonsai) - Umstellung der Titelgenerierung bei Reasoning-Modellen auf den rohen /completion-Endpoint mit vorausgefülltem geschlossenen <think>-Tag (Pre-fill). Dies verhindert Hänger, Token-Exhaustion und unnötiges Generieren.',
      'Verbesserung: Veredelung & Übersetzung - Erhöhung des Token-Limits im Hauptprozess von 2048 auf 3500, um Abschneidefehler bei langen Notizen zu verhindern.',
      'Verbesserung: Assistant Pre-fill in Chat-Requests - Injektion eines vorbefüllten <think>-Blocks in chatRequest für Bonsai/R1. Zwingt das Modell, das langsame Denken zu überspringen und verringert die Generierungszeit von Minuten auf wenige Sekunden. Reste von <think>-Tags werden per Regex herausgefiltert.',
      'Verbesserung: Server-Entladeschutz (Auto-Unload Guard) - Der automatische Entlade-Timer (Inaktivitätsschutz) prüft nun, ob eine Generierung läuft, verzögert das Entladen dynamisch und startet die Inaktivitätsfrist erst ab dem Ende der Anfrage.',
      'Verbesserung: Next.js SSR Kompatibilität (Production Build Fix) - Behebung von SSR-Build-Fehlern (window is not defined) in chat.tsx durch Kapselung von window.electronAPI. Ermöglichte die erfolgreiche Generierung des optimierten Produktions-Builds und App-Packaging.',
      'Verbesserung: Cross-Directory Modellerkennung - Die Download-Erkennung prüft nun beide Modell-Ordner (TEST_DIR_SMALL & TEST_DIR_BIG), um bereits geladene Modellsätze (z.B. Qwen 2.5 7B Instruct) unabhängig vom Speicherort sofort zu erkennen.',
      'Verbesserung: Z-Index & Layout der Multi-Select-Leiste - Verlegung des Stacking-Contexts über #main-scroll-container (zIndex: 200) sorgt für eine saubere Überlagerung der Titlebar. Die Leiste wurde vertikal tiefer positioniert und horizontal zentriert.',
      'Neue Funktion: Manuelles Bearbeiten & Hinzufügen von Überschriften - Doppelklick auf einen Titel oder Klick auf das Stift-Icon (✏️) erlaubt das manuelle Editieren. Unbetitelte Einträge können manuell mit einem Titel versehen werden.',
      'Neue Funktion: Erweiterte Filter- & Steuerungsoptionen für KI-Titel - Optionen zur Auswahl, ob nur unbetitelte Einträge verarbeitet oder bereits vorhandene Titel überschrieben werden sollen. Live-Prompt-Editor im Bedienfeld synchronisiert sich mit den globalen Einstellungen.',
      'Verbesserung: Fehlertoleranz & Fehleranzeige im Titel-Generator - Tritt beim Laden des Modells ein Fehler auf, wird dieser im Verlaufspanel als rotes Banner dargestellt. Zudem fangen neue Validierungen leere Läufe ab.',
      'Verbesserung: Persistentes Laden des Custom-Modells - Der Pfad des zuletzt gestarteten GGUF-Modells wird in den Einstellungen gesichert, sodass der Hintergrund-Generierungsdienst den Server immer zuverlässig mit dem gewählten Modell startet.',
      'Neue Funktion: Preset-Unterstützung für Bonsai-27B & Ternary-Bonsai-27B - Hinzufügen der neuen Apache-2.0 lizenzierten GGUF-Modelle Bonsai 27B (1-Bit, ~3.9 GB) und Ternary Bonsai 27B (Ternary, ~5.9 GB) zur Preset-Auswahlliste in den Einstellungen für den Download auf die externe Festplatte.',
      'Neue Funktion: Lokaler KI-Chat-Tab mit Echtzeit-Streaming - Einbindung eines Chat-Tabs im Hauptmenü (Sidebar). Bietet ein ChatGPT-Feeling mit automatischem Scrollen bei neuen Nachrichten, animiertem Schreib-Indikator und Kopiermöglichkeit von Antworten. Unterstützt echtes, wortweises Token-Streaming (Server-Sent Events) in Echtzeit sowie In-App Llama-Server-Steuerung.',
      'Neue Funktion: Hauptprozess-ChatService & Session-Persistenz - Ein neuer Chat-Service im Hauptprozess verwaltet Unterhaltungs- und Generierungszustände persistent. Dies verhindert Datenverlust beim Wechseln von Tabs. Der Verlauf wird zudem dauerhaft über den Electron Store gesichert.',
      'Verbesserung: Llama-Server-Upgrade auf Build b10012 - Aktualisierung der integrierten Llama-Server-Binärdateien und dynamischen Bibliotheken auf Build b10012. Löst Kompatibilitätsprobleme mit dem Quantisierungstyp 41 (z. B. Bonsai Q1_0 / Q2_0) und ermöglicht stabiles Laden hochkomprimierter Modelle.'
    ]
  },
  {
    version: 'v1.7.0',
    date: '14. Juli 2026',
    changes: [
      'Neue Funktion: Kopieren mit Metadaten (Copy with Notes & Sources) - Beim Kopieren eines Verlaufseintrags (einzeln oder gesammelt) werden eventuell verknüpfte Notizen und Quellen-Links automatisch formatiert und unter den Text kopiert. Mehrere Einträge werden durch eine Trennlinie ("---") getrennt.',
      'Neue Funktion: Tab- & Routen-Persistenz (Active Tab Retention) - Der zuletzt geöffnete Haupt-Tab (z. B. Verlauf oder Einstellungen) wird beim Beenden der App über localStorage gespeichert und beim Neustart direkt geöffnet.',
      'Neue Funktion: Filter- & Sucheinstellungen-Persistenz - Alle Filter des Verlaufs (Suchbegriff, ein-/ausgeschlossene Tags, Erledigt-Status, Mindestpriorität, Sperrstatus sowie Notizen-/Quellenfilter) werden in localStorage gesichert und beim Tab-Wechsel oder App-Neustart wiederhergestellt.',
      'Neue Funktion: Scrollposition-Persistenz - Die vertikale Scrollposition im Verlaufstext wird erfasst und bei Rückkehr zum Verlauf (auch nach Neustart der App) automatisch restauriert.',
      'Neue Funktion: Globale weiche Seitenüberblendung - Eine globale 80ms-CSS-Keyframe-Überblendung (fadeInGlobal) wurde in die Layout-Komponente integriert, die alle Seiteninhalte beim Navigieren weich und flackerfrei einblendet.',
      'Verbesserung: Absoluter Jump-Free Verlauf-Lademodus - Durch Hydrations-sichere Initialisierung (isScrollRestored = false) bleibt der Verlauf beim Laden und der automatischen Scroll-Restaurierung unsichtbar und schaltet sich synchron erst nach der Scroll-Restaurierung im Hintergrund ein.'
    ]
  },
  {
    version: 'v1.6.0',
    date: '13. Juli 2026',
    changes: [
      'Neue Funktion: Unified Undo System (Allgemeines Rückgängig-System) - Die Undo-Funktionalität wurde auf alle destruktiven Operationen ausgeweitet (Löschen, Massen-Löschen und Zusammenlegen).',
      'Neue Funktion: Notizen & Quellen (Collapsible Notes & Clickable Sources) - Jeder Verlaufseintrag besitzt nun eine einklappbare Sektion für optionale Notizen und klickbare Quellenlinks.',
      'Neue Funktion: Direkt-Edit & Lese-Modus (Smart Toggle) - Öffnet leere Drawer direkt im Bearbeitungsmodus und gefüllte im Lese-Modus, um Links sofort anklicken zu können.',
      'Neue Funktion: Globaler Ein- & Zuklapp-Button - Ermöglicht das synchrone Aus- und Einklappen aller Verlaufseinträge, wobei leere Einträge automatisch übersprungen werden.',
      'Neue Funktion: Drag-and-Drop Unterstützung - Browser-Links können direkt auf Verlaufseinträge (als Quelle) oder auf den Compose-Bereich (als neue Quelle/Karte) gezogen werden.',
      'Neue Funktion: Compose-Notizen & Quellen - Direktes Hinzufügen von Notizen und Quellen beim Erstellen eines neuen Eintrags.',
      'Neue Funktion: MrWhisper-Alter (App-Alter-Statistik) - Eine neue Kachel auf der Startseite zeigt die vergangenen Tage seit dem Projektstart von MrWhisper (29. Mai 2026). In dieser Version optisch veredelt in einem Indigo-Farbton (#818cf8).',
      'Neue Funktion: Sprechzeit Gesamt & Symmetrie-Optimierung - Eine neue 8. Metrik zur Darstellung der gesamten Diktierzeit wurde hinzugefügt. Das Dashboard (Home) und die Statistiken (Insights) wurden in ein vollkommen symmetrisches 4-Spalten-Layout (4x2 Grid) umgewandelt. Das Sprechzeit-Format wurde ultrakompakt gekürzt (z. B. 2h 10m) und Kartentitel wurden verkleinert, um Zeilenumbrüche zu verhindern.',
      'Verbesserung: ASR-Dienst-Steuerung & Performance-Optimierung - Automatische Bereinigung von Zombie-Prozessen auf Port 8081 vor dem Whisper-Serverstart sorgt für Metal GPU-Inferenz von ca. 1s.',
      'Verbesserung: Zuverlässiger ASR-Dienstwechsel - Einstellungen zur ASR-Engine (Whisper vs Parakeet) starten/stoppen die zugehörigen Hintergrund-Dienste jetzt absolut fehlerfrei.',
      'Verbesserung: Erweiterte Verlaufs-Suche - Die Echtzeit-Suche durchsucht nun auch alle verknüpften Notizen und Quellen.',
      'Verbesserung: Notizen- & Quellen-Filter - Neues Filter-Menü zum Filtern nach Einträgen mit/ohne Notizen und Quellen.',
      'Verbesserung: Filter-Modal Scrollbarkeit & Reset - Das erweiterte Suchfilter-Modal lässt sich nun bei geringer Bildschirmhöhe vertikal scrollen und setzt den Notizen- und Quellenfilter ordnungsgemäß zurück.'
    ]
  },
  {
    version: 'v1.5.0',
    date: '13. Juli 2026',
    changes: [
      'Neue Funktion: Jeder Verlaufseintrag kann nun über ein Schloss-Symbol ("Sperren" / "Entsperren") gesperrt und vor versehentlichem Löschen geschützt werden.',
      'Neue Funktion: Gesperrte Einträge sind komplett unlöschbar und werden auch bei Massen-Löschungen (Bulk Delete) sowie beim automatischen Bereinigen (Limit auf 1000 Einträge im JSON-Speicher) übersprungen.',
      'Neue Funktion: Der Sperrstatus bleibt beim Export und Import via JSON-Backup voll erhalten.',
      'Neue Funktion: Ein neuer Sperrstatus-Filter ("Alle", "Nur Gesperrte", "Nur Entsperrte") wurde in das erweiterte Suchmenü integriert.',
      'Neue Funktion: Tags besitzen nun globale Farben, die direkt auf den Tag-Pills via eingebettetem Farbwähler angepasst werden können.',
      'Verbesserung: Automatische Berechnung der Tag-Textfarbe (hell/dunkel) über die YIQ-Helligkeitsformel zur optimalen Lesbarkeit und Barrierefreiheit.',
      'Verbesserung: Die Multi-Select-Leiste schwebt nun am oberen App-Rand und bleibt auch beim Scrollen durch den Verlauf immer sichtbar.',
      'Fix: Hinzufügen von no-drag auf dem schwebenden Multi-Select-Menü verhindert, dass Klicks durch die Drag-Region der Electron-Titlebar abgefangen werden.',
      'Verbesserung: Layout-Tausch in Verlaufseinträgen platziert die Aktions-Schaltflächen (Erledigen, Kopieren, Bearbeiten, Veredeln, Sperren, Löschen) oben und die Metadaten darunter.'
    ]
  },
  {
    version: 'v1.4.0',
    date: '11. Juli 2026',
    changes: [
      'Neue Funktion: Echtzeit-Diktat (Real-Time Dictation) mit wortweiser Direkt-Eingabe ("Word-by-word") oder satzweiser Live-Vorschau ("Sentence-by-sentence").',
      'Neue Funktion: Automatische Segmentierung des Echtzeit-Audiostreams durch Silero VAD (Voice Activity Detection).',
      'Neue Funktion: Echtzeit-Pegelanzeige (MicLevelMeter) visualisiert den Mikrofon-Input direkt in der Benutzeroberfläche.',
      'Neue Funktion: Zentraler LatencyTracker zeichnet genaue Leistungskennzahlen (Audio-IPC, WAV-Erstellung, ASR-Inferenz) im Format [LATENCY_METRIC] unter /tmp/mrwhisper.log auf.',
      'Verbesserung: Re-Architektur des lokalen ASR-Backends auf einen persistenten Parakeet-Daemon (interactive-server) reduziert Start- und Inferenz-Latenz von 18 Sekunden auf unmerkliche 130 Millisekunden.',
      'Verbesserung: Skalierung der drei Modell-Lade-Punkte im Indikator auf 10.4px (8 * scale) für optimale Erkennbarkeit auf Retina-Displays.',
      'Fix: 8-Sekunden-Sicherheits-Timeout fängt eventuelle Aufhänger der Parakeet-Inferenz (z.B. ANE-Locks) zuverlässig ab.',
      'Fix: Erzwungene Freigabe der Aufnahme-Ressourcen per 5-Sekunden-Lock-Timeout in der Stop-Routine verhindert GUI-Freezes beim Loslassen des Hotkeys.',
      'Fix: Automatisches Verwerfen aller ausstehenden Start- und Inferenz-Verbindungskalbacks bei unerwartetem Daemon-Absturz.'
    ]
  },
  {
    version: 'v1.3.0',
    date: 'Juni 2026',
    changes: [
      'Neue Funktion: Option in den Einstellungen zur automatischen Übersetzung von eingesprochenen Diktaten ins Englische (erfordert ein geladenes Veredelungsmodell). Bei Inaktivität des Modells erfolgt ein transparenter Fallback auf die Originalsprache samt OS-Systembenachrichtigung.',
      'Neue Funktion: Ein 🇬🇧 Englisch-Schnell-Chip im Verlauf-Veredelungsmenü übersetzt bestehende Diktate direkt per Klick ins Englische.',
      'Verbesserung: Nahtloses, unsichtbares Infinite Scrolling auf der Verlaufseite lädt automatisch beim Herunterscrollen via IntersectionObserver jeweils 60 weitere Einträge nach, was die Ladezeit der GUI selbst bei tausenden Einträgen eliminiert.',
      'Verbesserung: Optimierte Veredelungs-Prompts (für eigene Anweisungen in der Verlauf-Veredelung) stellen die korrekte Sinnverarbeitung und Übersetzung durch lokale LLMs sicher.',
      'Neue Funktion: Verlauf fungiert nun als To-Do Liste inkl. Checkboxen für erledigte Einträge und einem intuitiven 5-Sterne-Prioritätensystem (inkl. Links- und Rechtsklick-Aktionen). Erledigte Aufgaben werden nicht mehr durchgestrichen dargestellt.',
      'Neue Funktion: Verlauf Multi-Select & Massenaktionen ermöglichen das Auswählen mehrerer Diktate per Checkbox, um diese gesammelt zu kopieren oder mit Bestätigung gesammelt zu löschen.',
      'Neue Funktion: Rückgängig-Funktion (Undo) über ein temporäres Toast-Interface, wenn Aufgaben im Verlauf erledigt oder reaktiviert werden.',
      'Neue Funktion: Plattformsensitive Hotkey-Anzeige stellt den Diktat-Hotkey dynamisch basierend auf dem Betriebssystem (Fn für macOS, Shift+Win+Space für Windows) dar.',
      'Neue Funktion: Ein neuer "Alle Kopieren"-Button im Verlauf erlaubt das gesammelte Kopieren aller aktuell gefilterten Diktat-Texte.',
      'Neue Funktion: Erweitertes Filter-Modal im Verlauf ermöglicht präzises Filtern nach Status, Ein-/Ausschluss-Tags und Mindest-Priorität.',
      'Neue Funktion: Umfassendes JSON-Export/Import-System für Einstellungen, Verlauf, Snippets und Dictionary mit intelligenter Duplikatsvermeidung und Merge-Logik.',
      'Neue Funktion: Der Voice-Indikator lässt sich nun via Drag & Drop frei auf dem Bildschirm verschieben.',
      'Neue Funktion: Elegantes Countdown-Interface, das den verschobenen Indikator nach einer einstellbaren Zeit automatisch zentriert (eased Animation).',
      'Neue Funktion: Optionen in den Einstellungen zum Ein-/Ausschalten des schwebenden Rückzentrierungs-Countdown-Textes sowie zur Anpassung der Ausblendedauer (Fadeout).',
      'Neue Funktion: Möglichkeit, den Indikator während des Verschiebens mit gedrückter linker Maustaste per Rechtsklick an der aktuellen Position fest zu verankern (Zieh-Verankerung). Ein Schloss-Overlay zeigt den Status und erlaubt das Lösen per Klick.',
      'Neue Funktion: Dynamische, echtzeitfähige WebGL-Waveform, die auf das Mikrofon reagiert, während diktiert wird.',
      'Neue Funktion: Dynamische Indikator-Positionierung bei Bildschirmänderungen (z. B. Verbinden/Trennen eines Monitors oder Ändern der Auflösung) zur nahtlosen Neuausrichtung in der Mitte unten über dem Dock des Hauptbildschirms (ohne App-Neustart).',
      'Verbesserung: Chronologisches Kopieren im Verlauf sortiert die Texte nun standardmäßig chronologisch (älteste zuerst) für einen besseren Lesefluss beim Einfügen.',
      'Verbesserung: Klicks auf das Einstellungs-Zahnrad in der TitleBar leiten nun direkt auf die Einstellungsseite weiter.',
      'Verbesserung: Whisper-Server Inference-Timeout auf 10 Minuten erhöht, um auch sehr lange Diktate ohne Abbruch zu verarbeiten.',
      'Verbesserung: Robustes Recording-Lifecycle-Management verhindert Hänger beim Stoppen von Aufnahmen während der Initialisierungsphase.',
      'Verbesserung: Tray-Icon Pfad-Auflösung für gepackte Builds optimiert (Prozess-ResourcesPath).',
      'Verbesserung: Doppelte Leerzeichen im diktierten Text werden nun automatisch bereinigt, bevor sie im Verlauf gespeichert werden (inkl. rückwirkender Migration).',
      'Verbesserung: Snippets unterstützen nun ebenfalls (wie das Dictionary) mehrere Auslöser, die durch Komma oder Semikolon getrennt werden.',
      'Verbesserung: Der Indikator lässt sich per Rechtsklick temporär komplett ausblenden – mit langsamer, sanfter Ausblend-Animation des Text-Overlays und automatischer Rückkehr nach Ablauf des Countdowns.',
      'Verbesserung: Wenn der Countdown in den Einstellungen deaktiviert ist, blendet ein Rechtsklick den Indikator sowie alle Bedienelemente (Atmungslinie, Welle, Buttons) sofort und ohne jegliches Fadeout aus.',
      'Verbesserung: Diverse UI- und Performance-Optimierungen des Indikators (Zero-Lag Render Pipeline).',
      'Verbesserung: Erweiterung der Audio-Feedbacks auf 11 wählbare Sound-Sets für Aufnahme Start/Stop.',
      'Verbesserung: Start- und Stop-Sounds lassen sich nun in den Einstellungen unabhängig voneinander in der Lautstärke regeln.',
      'Verbesserung: Beim Einfügen von Text über MrWhisper wird der vorherige Inhalt der Zwischenablage automatisch wiederhergestellt.',
      'Fix: Der Kopieren-Button in den Verlaufs-, Snippet- und Dictionary-Ansichten funktioniert nun dank angepasster Clipboard-Berechtigungen.',
      'Fix: Countdown-Zähler bleibt auch während der aktiven Sprachaufnahme sichtbar.',
      'Fix: Zuverlässigkeit des Klicks auf den Aufnahme-Button verbessert (Natives onClick verhindert verschluckte Klicks durch CSS-Animationen).',
      'Verbesserung: Die "X"-Taste im Zähler setzt den Indikator nun an seine Ursprungsposition zurück, anstatt ihn auszublenden.',
      'Fix: Klicks auf den Indikator stehlen nicht mehr den Tastaturfokus aktiver Eingabefelder.',
      'Fix (macOS): Smart-Hiding des Aufnahme-Indikators bei Video-Vollbild (YouTube/Netflix im Browser) behoben. Erkennt Video-Vollbild nun zuverlässig per Accessibility-Tree-Abfrage ohne JavaScript-AppleEvents.',
      'Fix (macOS): Smart-Hiding des Indikators im VLC-Player und anderen Mediaplayern korrigiert. Die Erkennung durchsucht nun alle geöffneten Fenster des Prozesses (da VLC den Videostream meist in ein separates Fenster auslagert), nutzt case-insensitives App-Matching und eine Identifikation per Bundle-ID (org.videolan.vlc).',
      'Fix: Fehler behoben, bei dem der Hover-Zustand des Indikators nach der automatischen Rückzentrierung hängen blieb (Zurücksetzen der isHovering-Zustandsvariable).',
      'Neue Funktion: Interaktives Inline-Tagging direkt auf Vorschau-Chips und im Bearbeitungs-Modal zum Zuweisen neuer Kategorien.',
      'Neue Funktion: Einheitliches, graues React-Vorschlags-Dropdown, das sich sofort beim Fokussieren des Eingabefeldes öffnet und alle existierenden Tags filtert.',
      'Neue Funktion: Systemweites Rechtsklick-Kontextmenü für alle Textfelder (Rückgängig, Wiederholen, Ausschneiden, Kopieren, Einfügen, Alles auswählen) sowie Kopierfunktion bei markiertem Text.',
      'Neue Funktion: Manuelle Abbruchmöglichkeit ("Aufteilung abbrechen") im Ladebildschirm laufender KI-Splits.',
      'Neue Funktion: Verlaufstexte können ab sofort ohne Wechsel in den Bearbeitungsmodus direkt mit der Maus markiert und kopiert werden.',
      'Verbesserung: Unbegrenztes Veredelungs-Zeitfenster durch das Entfernen aller harten zeitbasierten HTTP-Timeouts bei LLM-Verarbeitungen.',
      'Verbesserung: Verdoppeltes LLM-Kontextfenster durch Slot-Optimierung des Llama-Servers (np 1 statt np 2), wodurch die vollen 4096 Token genutzt werden.',
      'Verbesserung: Anhebung des Token-Limits im Veredelungs-Endpoint auf 2048 Token zur Vermeidung abgeschnittener Texte.',
      'Verbesserung: localStorage-Persistenz behält die erzeugten Vorschau-Chips auch bei Tab-Wechseln im Verlauf vollständig bei.',
      'Fix: Behebung des App-Absturzes beim Laden eines Veredelungsmodells (Suicide Bug) durch Port-Ausschluss der eigenen Prozess-ID.',
      'Fix: Korrektur des Llama-Server-Packagings und plattformübergreifende Pfadauflösungen (.exe, .dylib, .dll, .so) in der gepackten DMG-Version.',
      'Neue Funktion: Verlauf-Versionierung (Veredeln) ermöglicht das Erzeugen von Varianten eines Diktats (Zusammenfassung, Commit, etc.) und einfaches Umschalten per Badge-Auswahl.',
      'Neue Funktion: Doppelklick-Rename & Löschoptionen für Versionen im Verlauf.',
      'Neue Funktion: Herkunfts-Indikator-Symbole (Mikrofon für Sprache, Tastatur für Eingabe, Zauberstab für Veredelt) für jeden Eintrag.',
      'Neue Funktion: Massen-Zusammenlegung (Merge) ausgewählter Verlaufseinträge inklusive Text- und Tag-Kombination.',
      'Neue Funktion: Dynamischer Versions-Icon-Wechsel aktualisiert das Herkunfts-Icon des Eintrags dauerhaft und persistent beim Umschalten der aktiven Textversion.',
      'Neue Funktion: Ein eleganter, kreisförmiger "X"-Löschbutton wurde direkt in das Suchfeld im Verlauf integriert, um den Filter-Text mit einem Klick zu leeren.',
      'Verbesserung: Die Neueintrag-Textarea klappt automatisch auf eine Zeile (36px) zusammen, wenn sie leer ist und nicht fokussiert wird, behält aber die benutzerdefinierte Zieh-Höhe beim aktiven Schreiben bei.',
      'Verbesserung: Automatisches Zurücksetzen veralteter Vorschauchips beim Wechseln in den KI-Split-Tab.',
      'Fix: Tastatur-Symbol für Neueinträge wird nun korrekt angezeigt (manuell eingetippte Einträge erhalten kein KI-Symbol mehr, sofern kein KI-Split ausgeführt wurde).'
    ]
  },
  {
    version: 'v1.2.0',
    date: 'Juni 2026',
    changes: [
      'Neue Funktion: Voice Activation (Hands-Free) via "Computer" oder "Hör zu" mit lokalem Sherpa ONNX Modell und Silero VAD.',
      'Neue Funktion: Statistik-Dashboard (Insights) zeigt gerettete Zeit, Wörter pro Minute (WPM) und durchschnittliche Wörter pro Diktat.',
      'Neue Funktion: Multi-Sprachen-Auto-Erkennung und dedizierte Türkisch-Sprachauswahl.',
      'Neue Funktion: Verlauf-Kategorien (Tags) und Paste-Button zum direkten Einfügen von Verlaufseinträgen am Cursor.',
      'Neue Funktion: Detail-Suche und Zuweisung von Tags für Snippets direkt in der UI.',
      'Verbesserung: Hybrid-Logik (Dictation Lock) verhindert Konflikte zwischen manueller (FN-Taste) und sprachgesteuerter Aktivierung.',
      'Verbesserung: VAD feingetuned (Thresholds & Audio-Padding) für zuverlässigere Erkennung kurzer Befehle.',
      'Verbesserung: Automatischer Neustart der Audio-Dienste nach dem Mac-Ruhezustand.',
      'Verbesserung: Multi-Word-Replacement und Copy/Edit-Funktion direkt im Snippet- und Dictionary-UI.',
      'Fix: Sprachspezifische Initial Prompts hinzugefügt, um unregelmäßige Leerzeichen am Satzanfang (z.B. "Yeah.", "Thank you.") bei Stille zu verhindern.',
      'Fix: Performance-Optimierung der Wake-Word-Erkennung zur Reduzierung der Hintergrund-CPU-Last.'
    ]
  },
  {
    version: 'v1.1.0',
    date: 'Mai 2026',
    changes: [
      'Neue Funktion: Llama.cpp und Whisper-Server Steuerung mit automatischem Ladeindikator im Voice-Indikator (Status-Polling).',
      'Neue Funktion: Out-of-the-Box ffmpeg-static Integration im App-Bundle, entkoppelt von Homebrew.',
      'Verbesserung: Startup-Timeout des Whisper-Servers auf 60 Sekunden erhöht und ausführliches Logging unter /tmp/mrwhisper.log hinzugefügt.',
      'Verbesserung: Standard-Layoutwerte für den Voice-Indikator optimiert (Skalierung 1.3, Offset -24px, Button-Skalierung 1.1).',
      'Fix: Whisper-Server Status-Polling beim Mounten korrigiert.',
      'Fix: Ignorieren von OS Key Repeats bei gehaltenem Fn-Hotkey zur Vermeidung von Diktat-Flackern.'
    ]
  },
  {
    version: 'v1.0.9',
    date: 'Mai 2026',
    changes: [
      'Verbesserung: Lokaler Whisper-Server wird nun direkt in das finale Build gepackt.',
      'Fix: Konsolen-Logging-Spam bei der Wake-Word-Erkennung entfernt.'
    ]
  },
  {
    version: 'v1.0.7',
    date: 'Mai 2026',
    changes: [
      'Neue Funktion: Audio-Feedback um ein 8. Sound-Set für Aufnahme Start/Stop erweitert.',
      'Verbesserung: Synchronisation zwischen GUI-Status und der hardwareseitigen Fn-Taste verbessert.',
      'Verbesserung: Hiding des Hauptfensters vor dem Einfügen, um den Fokus wieder an die aktive App zurückzugeben.',
      'Fix: Native Swift Helper (mac-fn-helper mit CGEventTap) integriert, um verschluckte Fn-Events bei schnellen Doppeltaps zu verhindern.',
      'Fix: Automatische Abfrage von macOS Bedienungshilfen-Berechtigungen.',
      'Fix: Blockierung des macOS Standard-Sprachumschalters bei Fn-Klick.'
    ]
  },
  {
    version: 'v1.0.3',
    date: 'Mai 2026',
    changes: [
      'Neue Funktion: Multi-Arch-Builds (Universal macOS binaries für arm64 und x64).',
      'Neue Funktion: Standardisierung der Icons unter resources/icon.icns und Assets für Windows.',
      'Fix: Hardened Runtime für macOS Builds angepasst, um Gatekeeper-Fehlermeldungen auf Apple Silicon zu umgehen.',
      'Fix: Sharp-Bindings für x64-Architekturen korrigiert.'
    ]
  },
  {
    version: 'v1.0.0',
    date: 'April 2026',
    changes: [
      'Initiales Release von MrWhisper.',
      'Lokale Transkription via Whisper.cpp und Llama.cpp.',
      'Unterstützung für macOS und Windows.',
      'Globaler Hotkey (Fn-Taste) zur Sprachsteuerung.',
      'Glassmorphic Dark Mode und Tailwind UI Integration.',
      'Integrierte Text-Ersetzungen (Dictionary & Snippets).'
    ]
  }
];

export default function ChangelogPage({ lang }: { lang: Lang }) {
  const note = getDict(lang).legalPages.changelogNote;
  return (
    <div className="container mx-auto px-6 py-24 max-w-3xl">
      <h1 className="text-4xl font-bold mb-4">Changelog</h1>
      <p className="text-gray-400 mb-3 text-lg">{lang === 'de' ? 'Alle Updates und Neuerungen für MrWhisper auf einen Blick.' : 'All updates and news for MrWhisper at a glance.'}</p>
      <p className="text-gray-500 mb-12 text-sm">{note}</p>
      
      <div className="space-y-12">
        {changelogEntries.map((entry, index) => (
          <div key={index} className="relative pl-8 md:pl-0">
            <div className="md:flex gap-8">
              <div className="md:w-1/4 mb-4 md:mb-0 shrink-0">
                <div className="sticky top-24">
                  <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-lg font-bold font-mono text-sm mb-2">
                    {entry.version}
                  </span>
                  <div className="text-gray-500 text-sm">{entry.date}</div>
                </div>
              </div>
              
              <div className="md:w-3/4 glass p-6 md:p-8 rounded-2xl border border-white/5">
                <ul className="space-y-3">
                  {entry.changes.map((change, i) => (
                    <li key={i} className="flex gap-3 text-gray-300">
                      <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{change}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
