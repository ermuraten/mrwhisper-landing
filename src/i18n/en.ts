export const en = {
  htmlLang: 'en',
  meta: {
    title: 'MrWhisper – Voice intelligence for your Mac',
    description:
      'MrWhisper: dictate with a hotkey, transcribed locally, kept as a searchable history with tags, versions, notes and optional AI refinement. One-time purchase.',
  },
  nav: {
    new: 'New',
    features: 'Features',
    pricing: 'Pricing',
    faq: 'FAQ',
    changelog: 'Changelog',
    cta: 'Get MrWhisper',
    switchTo: 'Deutsch',
    menuLabel: 'Main navigation',
  },
  hero: {
    badgeText: 'Trash: keep deleted entries and restore them anytime',
    titleA: 'Your voice.',
    titleB: 'Your second memory.',
    leadBefore: 'Press',
    leadAfter:
      'and speak, and the text appears right where your cursor is. MrWhisper transcribes locally, files every dictation into a searchable history with tags, versions and notes, and polishes it with AI on request. Transcription needs no cloud.',
    highlights: [
      { icon: '🎙️', text: 'Local transcription: Whisper & Parakeet' },
      { icon: '⚡', text: 'Global hotkey: text at your cursor' },
      { icon: '⏪', text: 'Flashback brings back what you just said' },
      { icon: '🏷️', text: 'Tag catalog with real folders' },
      { icon: '🌍', text: 'English · Deutsch · Türkçe' },
    ],
    ctaPrimary: 'Get MrWhisper',
    ctaSecondary: (n: number) => `See all ${n} features`,
    platformNote: 'macOS (Apple Silicon). A Windows version is in development.',
  },
  mock: {
    illustration: 'Illustration of the history view',
    sidebar: ['Home', 'Statistics', 'History', 'Notes assistant', 'Text snippets', 'Dictionary'],
    active: 'History',
    titlebar: 'History',
    transcribing: 'Transcribing …',
    ready: '● AI ready',
    card1Tags: ['Apps › Codex', 'Idea'],
    card1Title: 'Second brain with Codex',
    card1Text:
      'With Codex I eventually want to build this second-brain thing for my music, my apps and my marketing.',
    card1Notes: '📝 Notes & sources',
    card1Followups: '↳ Follow-up prompts (2)',
    card1Status: 'In progress',
    card2Title: 'Release notes for version 2.13',
    card2Text: 'Leather theme, minimum size of the entry number, filter window …',
    popupInserted: '✓ Dictation inserted',
    popupText: 'Meeting with the team on Thursday at ten',
    popupTag: 'Work › Meetings',
    popupAddTag: '+ Tag',
  },
  demo: {
    eyebrow: '🎬 See it in action',
    title: 'A minute with MrWhisper',
    text: 'A real screen recording of the app (version 2.16) with fictional demo entries. The narration is a synthetic voice based on the developer’s own voice. The interface language in the recording is German.',
    fallback: 'Your browser cannot play this video.',
  },
  flashback: {
    past: 'Past',
    present: 'Present',
    eyebrow: '✨ The Acoustic Time Loop',
    titleA: 'Words that were already gone,',
    titleB: 'brought back from the ether.',
    p1: 'Have you ever said a brilliant thought out loud, only to find seconds later that it had vanished? The air swallowed it before you could press a record button.',
    p2Before: 'MrWhisper has a hidden ability. It listens quietly in the background. The',
    p2Strong: 'Flashback feature',
    p2After: 'is no ordinary tool but an anomaly. With a secret handshake (',
    p2End: ') you turn the clock back.',
    p3: 'MrWhisper pulls the sound waves that had already faded out of the nothing and inserts what you said seamlessly where your cursor rests. What was lost a moment ago is now written down.',
    col1Title: 'The ether does not forget',
    col1Text:
      'Even without an active recording, MrWhisper keeps a short rolling buffer in memory. What you said stays fleeting, but reachable. The buffer is never written to disk.',
    col2Title: 'Temporal folding',
    col2Text: 'Your past merges perfectly synchronized with the here and now. No offset, no torn tape.',
  },
  whatsNew: {
    eyebrow: '✨ New in 2.13 & 2.14',
    titleA: 'Set it up once.',
    titleB: 'Then just speak.',
    lead: 'Session mode files your dictations by itself, and the familiar look is also available in leather.',
    badgeNew: 'New v2.14',
    sessionTitle: 'Session mode',
    sessionText:
      'Working on one thing for a while and dictating again and again? Say once where it belongs and MrWhisper does the rest. No moving, no tagging entry by entry.',
    routings: [
      { title: 'Follow-up prompt', desc: 'Below the main entry' },
      { title: 'Own entry', desc: 'On top of the history, with tags' },
      { title: 'Append', desc: 'As a new paragraph' },
    ],
    mainTitle: 'Pick any main entry',
    mainText:
      'The latest entry, one you search for, or a new empty one. Your first dictation then becomes the main prompt.',
    mainSearch1: 'Landing page',
    mainSearch2: 'Session · Title · ID',
    mainResult: '↳ becomes the main entry',
    tagsTitle: 'Tags follow along, sessions stay',
    tagsText:
      'The tags of the reference entry apply to every further dictation, including typed entries. Sessions can be named, resumed later and travel with your backup.',
    leatherBadge: 'v2.13',
    leatherTitle: 'Leather & Brass',
    leatherText:
      'Dress the whole app in a grained leather binding: stitched cards with golden seams, solid brass corners, an acrylic bookmark with an embossed entry number. Three tones, or the familiar default design. All rendered rather than image files, so razor sharp at any window size.',
    leathers: ['Navy', 'Brown', 'Cognac'],
    topTitle: 'Back to top',
    topText:
      'Deep down in the history? One button at the bottom right takes you back to the start. Also: export and import now sit at the very bottom of the settings and take your sessions along.',
    topHint: 'One click instead of long scrolling',
    detailsBefore: 'All details in the',
    detailsLink: 'changelog',
    detailsNote: ' (currently German only)',
  },
  how: {
    eyebrow: '⚡ How it works',
    title: 'Three steps. No detours.',
    steps: [
      {
        key: 'fn',
        title: 'Press the key',
        text: 'Hold the global hotkey in any app, in any text field. Or optionally just say “Computer”.',
      },
      {
        key: '🎙️',
        title: 'Speak',
        text: 'Whisper or Parakeet transcribe locally on your machine. The indicator shows live what is happening.',
      },
      {
        key: '✓',
        title: 'The text is there',
        text: 'Inserted at the cursor, saved in the history. Correct and tag it right in the popup, or refine it with AI later.',
      },
    ],
  },
  featuresSection: {
    eyebrow: '💎 Everything it can do',
    titleA: (n: number) => `${n} features for`,
    titleB: 'your daily workflow.',
    lead: 'Local speech recognition, a history that grows into a knowledge archive, a tag system with real folders, AI right on your machine, and an interface you set up the way you like.',
    all: 'All',
    new: '✨ New',
    aria: 'Features by area',
    newBadge: 'New',
    categories: {
      dictation: '🎙️ Dictation & speech',
      history: '🗂️ History & knowledge',
      tags: '🏷️ Tags & order',
      ai: '🪄 AI',
      design: '🎨 Interface & comfort',
      data: '🔒 Data & safety',
    },
  },
  pricing: {
    eyebrow: '💳 Pricing',
    title: 'Pay once. Keep it.',
    lead: 'No subscription, no cloud minutes, no hidden costs.',
    planTitle: 'MrWhisper license',
    planSub: 'For macOS (Apple Silicon). Windows is in development.',
    badge: 'All features',
    early: 'Early-bird',
    earlyNote: (limit: number) => `for the first ${limit} licenses, then`,
    perLicense: 'one-time',
    included: [
      'Unlimited local transcription',
      'Global hotkey (e.g. fn) & Flashback (Shift + fn)',
      'Dictation popup with correction & quick tagging',
      'Tag catalog with folders, colors & conflict resolution',
      'History with versions, notes, stars & status',
      'AI refinement, AI headlines & notes assistant',
      'Standard and Leather themes in three tones',
      'English, German, Turkish, including all offline models',
    ],
    updates: (months: number) => `Updates for ${months} months are included. Your license keeps working after that.`,
    refund: (days: number) => `${days}-day refund if MrWhisper does not work for you.`,
    buy: 'Buy license',
    soon: 'Launching soon',
    soonNote: 'Checkout opens at launch. Want to hear about it first?',
    notify: 'Email me when it opens',
    merchant: 'Payments are handled by our merchant of record, Lemon Squeezy.',
    testNote: 'Introductory price. It may rise after the early-bird licenses are gone.',
  },
  faq: {
    eyebrow: '❓ FAQ',
    title: 'Frequently asked questions',
    items: [
      {
        question: 'Does MrWhisper run completely offline?',
        answer:
          'Yes, standard transcription uses local models (llama.cpp / whisper.cpp), so no audio leaves your computer. Only optional AI add-ons that call an external provider (for example GPT-4 with your own API key) need an internet connection and send the text you choose to that provider.',
      },
      {
        question: 'Which operating systems are supported?',
        answer:
          'MrWhisper is a desktop app built with Electron. macOS on Apple Silicon is the current target. A Windows version is in development and not available yet.',
      },
      {
        question: 'Can I change the hotkey?',
        answer:
          'MrWhisper currently works with the “fn” key or “F13”. Recording a fully custom shortcut is planned for an upcoming version.',
      },
      {
        question: 'What is Flashback?',
        answer:
          'MrWhisper keeps the last minutes of audio in a rolling buffer in memory (it is never written to disk). With Shift + fn you bring back what you said, even if you forgot to start recording, and the text lands right at your cursor.',
      },
      {
        question: 'Can I change how the app looks?',
        answer:
          'Yes. Under Settings → Appearance you choose between the default design and three leather themes (Navy, Brown, Cognac). Heading effects, font sizes, entry numbers and the placement of all card actions can also be adjusted.',
      },
      {
        question: 'How do I back up my data?',
        answer:
          'Everything lives locally on your computer. Under Settings → Data you export history, snippets, dictionary, tag catalog and settings as a JSON backup and import them again without duplicates, also on another device. Single entries can be saved as .md or .txt.',
      },
      {
        question: 'Do I get updates for free?',
        answer:
          'Yes. Your license includes all updates for {months} months. The version you have keeps working after that.',
      },
      {
        question: 'What if it does not work for me?',
        answer:
          'Write to us within {days} days of your purchase and you get a refund. The details are in the terms.',
      },
    ],
  },
  footer: {
    createdBy: 'Created by',
    privacy: 'Privacy',
    terms: 'Terms',
    imprint: 'Legal notice',
    changelog: 'Changelog',
    langLabel: 'Deutsch',
  },
  legalPages: {
    changelogNote: 'The release notes are currently available in German only.',
  },
};

export type Dict = typeof en;
