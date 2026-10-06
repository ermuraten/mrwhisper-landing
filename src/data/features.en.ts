/** English copy of src/data/features.ts: same order, same entries (checked by scripts/check-i18n.mjs). */
export const FEATURE_TEXT_EN: { title: string; description: string }[] = [
  // ───────── New in 2.15 & 2.16 ─────────
  {
    title: 'Permanent trash',
    description: 'Deleted history entries keep their text, title, versions, notes, sources, tags and follow-up prompts. Search them, view them in full and restore them one by one or together. Permanent deletion only happens after an explicit confirmation.',
  },
  {
    title: 'Import long audio & YouTube',
    description: 'Transcribe local audio or video files and single YouTube links, even recordings that run for hours. The first section is ready right away, the entry keeps growing, and jobs can be paused, resumed and cancelled.',
  },
  // ───────── New in 2.13 & 2.14 ─────────
  {
    title: 'Session mode',
    description: 'When you work on one thing for a while, everything you say lands in the right place: as a follow-up prompt under a main entry, as an appended paragraph, or as its own entry with fixed tags. No moving, no tagging by hand.',
  },
  {
    title: 'Pick any main entry',
    description: 'The main entry can be your latest entry, one you search for (title, text, number or ID) or a new empty entry. Your first dictation then becomes the main prompt and everything after it attaches below.',
  },
  {
    title: 'Tags follow along automatically',
    description: 'The tags of the reference entry are preselected and apply to every dictation in the session, including entries you type by hand. The tag popup after dictation stays out of the way while a session runs.',
  },
  {
    title: 'Save and resume sessions',
    description: 'Give a session a name and restart it later with one click. Saved sessions are part of the JSON backup, and a session can optionally continue after a restart.',
  },
  {
    title: 'Session always in view',
    description: 'The button in the title bar shows on every page whether a session is running. The main entry carries a session badge in the history, and the voice indicator shows where a dictation is going while you record.',
  },
  {
    title: 'Back to top',
    description: 'Deep down in the history? A round button at the bottom right takes you back to the start with one click.',
  },
  {
    title: '“Leather & Brass” theme',
    description: 'Dress the whole app in a leather binding with brass fittings: navy, brown or cognac. Stitched cards with golden seams, brass corners, acrylic bookmarks. Everything is rendered rather than image files, so it stays sharp at any window size.',
  },
  {
    title: 'Dictation popup with text correction',
    description: 'After dictating, a compact popup appears: click the recognized text to correct it, save or copy with ⌘↵, and tag it right away. The countdown pauses while you type.',
  },
  {
    title: 'Central tag catalog',
    description: 'Categories, tags and colors live in one place and apply in every window. Renaming or moving updates every entry and snippet automatically; tags are unique by their full path.',
  },
  {
    title: 'Smart name-conflict resolution',
    description: 'If moving “ProjectA” would collide with an existing “ProjectA”, you choose: merge, rename automatically (“ProjectA (2)”) or name it yourself. When you delete a category, MrWhisper asks where its content should go.',
  },
  {
    title: 'Freely movable tag window',
    description: 'The tag window can be moved by its header and resized at its edges and corners; the lists adapt. It always opens fully visible and remembers its size.',
  },
  {
    title: 'Color mixer for tags & categories',
    description: 'Color any tag or category with a click; category colors are inherited. Saturation field, hue slider and hex input; custom colors stay where you put them.',
  },
  {
    title: 'Entry numbers like a book spine',
    description: 'Every card carries its number large and vertical in the left column, next to its origin, date and word count. With a filter, only the matches are counted; size and minimum size are adjustable.',
  },
  {
    title: 'Colorful headings',
    description: 'Titles in the history glow in a gradient whose color clouds circle the letters. Animated, static or off, with six presets, three custom colors and an adjustable font size.',
  },
  {
    title: 'Status mode per entry',
    description: 'Each entry chooses its own progress display: three-step status, percent slider, checkbox or none. Status shows up as colored dots on the folded card corner.',
  },
  {
    title: 'Changelog inside the app',
    description: 'Help → Changelog lists every version as a card with news and fixes. The installed version is highlighted.',
  },
  {
    title: 'Settings with a second column',
    description: 'When you open the settings, the sidebar collapses and the sections appear as their own column whose highlight follows your scrolling.',
  },
  // ───────── v2.8 – v2.11 ─────────
  {
    title: 'Version metadata & favorite crown',
    description: 'Every version of an entry, follow-up prompt or snippet gets a title, a note, 1–5 stars and, if you like, the golden 👑 favorite crown, editable right in the hover popover.',
  },
  {
    title: 'Live feedback while processing',
    description: 'The indicator, title bar and history show what is happening: Transcribing … → Translating & inserting … → Inserted.',
  },
  {
    title: 'Statistics dashboard & insights',
    description: 'Words and time saved today, an activity chart over 7 or 30 days, milestones, your most active time of day, the share of AI use and your most frequent tags.',
  },
  {
    title: 'Copy counter',
    description: 'Each copy of an entry or follow-up prompt is counted quietly next to the copy icon, saved, exported and resettable.',
  },
  {
    title: 'Compact row view',
    description: 'If you prefer, the history shows single-line, expandable entries instead of cards, ideal for skimming many dictations quickly.',
  },
  {
    title: 'Freely placeable card actions',
    description: 'For each of the ten card actions, decide whether it sits in the hover bar or in the ⋯ menu, with one click back to the default.',
  },
  {
    title: 'Single-entry export as .md or .txt',
    description: 'Save any history entry with its versions, notes, sources and follow-up prompts as a Markdown or text file.',
  },
  {
    title: 'Parent-folder filter',
    description: 'Select a main category such as “Apps” and instantly filter by all tags of all its subcategories, without ticking each tag.',
  },
  // ───────── Core features ─────────
  {
    title: 'Global hotkey & instant dictation',
    description: 'Activate MrWhisper system-wide at any time with the global hotkey (for example fn). Start speaking and the text appears at your cursor.',
  },
  {
    title: '100 % offline Whisper engine',
    description: 'AI models such as Whisper and Parakeet run locally on your Mac. Full privacy, no cloud required.',
  },
  {
    title: 'Post-dictation quick tagging',
    description: 'Right after dictating, a floating popup at the voice indicator lets you tag immediately, with live preview and countdown bar.',
  },
  {
    title: 'Smooth indicator dragging',
    description: 'The voice indicator moves smoothly and without breaks, even over buttons.',
  },
  {
    title: 'Punctuation-tolerant triggers',
    description: 'Snippet and dictionary replacements still recognize their triggers when the AI appended a period or a comma.',
  },
  {
    title: 'Configurable wake word',
    description: 'Latency-free activation by voice (“Computer”). It can be switched off in the settings, which turns the microphone off completely.',
  },
  {
    title: 'Audio buffer (1–5 min)',
    description: 'A constant buffer in memory enables instant recordings and is the basis for Flashback.',
  },
  {
    title: 'macOS Dock-aware placement',
    description: 'Precise window position calculation keeps popups from disappearing behind the Dock.',
  },
  {
    title: 'Manual multi-versioning',
    description: 'Unlimited text variants (v1, v2 …) for entries and follow-up prompts. AI refinements create a new version automatically.',
  },
  {
    title: '@-mentions & dictation linking',
    description: 'Link entries and follow-up prompts with @ while typing, with autocomplete, tag colors, preview and a jump back.',
  },
  {
    title: 'Star priorities & status filter',
    description: 'Give 1–5 stars when you create an entry, filter by completion status and prioritize what really matters.',
  },
  {
    title: 'Collapsible follow-up prompts',
    description: 'Structure thoughts as follow-up prompts under a main entry; the input field stays collapsed until you need it.',
  },
  {
    title: 'Notes & sources',
    description: 'Each dictation has an expandable area for free-text notes, references and clickable web sources.',
  },
  {
    title: 'Live search & multi-filter',
    description: 'Filter the history as you type by keywords, tags, stars, locking, notes or task status.',
  },
  {
    title: 'Smooth scrolling with 1,200+ entries',
    description: 'The history is preloaded and built in stages, so scrolling and jumping stay smooth even in huge archives.',
  },
  {
    title: 'Hierarchical folder & tag tree',
    description: 'Categories with subfolders of any depth, drag & drop, renaming right in the list, and an undo hint when you delete.',
  },
  {
    title: 'Automatic color contrast',
    description: 'For every tag color, the most legible text color is computed (WCAG 2.1): light text on dark tags and the other way around.',
  },
  {
    title: 'AI refinement & custom prompts',
    description: 'Rework dictations and follow-up prompts with a 🪄 click: formal, summarized, corrected, or with your own prompt.',
  },
  {
    title: 'Multilingual: EN · DE · TR',
    description: 'The whole interface including notifications switches live between English 🇬🇧, German 🇩🇪 and Turkish 🇹🇷.',
  },
  {
    title: '11 audio sound sets',
    description: 'Eleven sound packs for the start and stop of a recording, each with its own volume.',
  },
  {
    title: 'Free text selection',
    description: 'Snippets, chips and body text in the history can be freely selected with the mouse and copied.',
  },
  {
    title: 'Sliders without lag',
    description: 'Indicator size, button scale and spacing change live while you drag, without restarting any AI services.',
  },
  {
    title: 'Growing input fields',
    description: 'Text fields for snippets and notes adjust their height to the text length and the screen edge.',
  },
  {
    title: 'Safe data migration',
    description: 'Export and import history, snippets, dictionary, tag catalog and settings as a JSON backup, without duplicates.',
  },
  {
    title: 'Unlimited archive',
    description: 'No upper limit: all dictations, snippets and history entries stay stored locally for good.',
  },
  {
    title: 'Quarantine folder',
    description: 'Deleted audio files move to a safe quarantine instead of vanishing from the disk immediately.',
  },
  // ───────── More power features ─────────
  {
    title: 'Local AI headlines',
    description: 'A local language model writes concise titles in the background for every entry without a heading, in the language of your choice, regenerable at any time.',
  },
  {
    title: 'Notes assistant (local AI chat)',
    description: 'A dedicated chat area with a local language model and word-by-word live streaming of the answers, entirely without the cloud.',
  },
  {
    title: 'Automatic translation into English',
    description: 'Dictate in your language and let MrWhisper insert the text in English automatically, also available as a quick chip per dictation.',
  },
  {
    title: 'Real-time dictation & level meter',
    description: 'Stream text word by word into the active app or process it sentence by sentence; a live level meter shows that your microphone is coming through.',
  },
  {
    title: 'Automatic language detection',
    description: 'Multilingual dictation without switching: MrWhisper detects the spoken language itself, or you set it manually.',
  },
  {
    title: 'Hands-free by voice',
    description: 'Wake word and voice-activity detection filter keyboard and background noise; a locking logic prevents conflicts with the hotkey.',
  },
  {
    title: 'Recording profiles',
    description: 'Voice isolation filters background noise, Studio delivers a clean microphone signal, and Custom gives you full control over filters and noise thresholds.',
  },
  {
    title: 'Clipboard protection',
    description: 'When MrWhisper inserts text through the clipboard, your previous clipboard content is restored automatically afterwards.',
  },
  {
    title: 'Invisible during fullscreen video',
    description: 'While a video plays in fullscreen, the recording indicator hides itself so nothing disturbs your viewing.',
  },
  {
    title: 'Pin the indicator with a lock',
    description: 'Right-click while dragging to pin the indicator in place; a lock shows the anchor and a click releases it.',
  },
  {
    title: 'Snippets with multiple triggers',
    description: 'One text block, many triggers (separated by commas), with versions, tags and search.',
  },
  {
    title: 'Lock entries',
    description: 'Protect important dictations from accidental editing and deletion with one click on the folded card corner.',
  },
  {
    title: 'Undo for everything',
    description: 'Completing, deleting, changing tags: a hint with “Undo” brings any action back for a few seconds.',
  },
  {
    title: 'Multi-select & merge',
    description: 'Select several dictations, copy or delete them together, or merge them into one entry, chronologically sorted if you like.',
  },
  {
    title: 'Everything stays where you were',
    description: 'Last tab, search term, all filters and the scroll position in the history survive a restart.',
  },
];
