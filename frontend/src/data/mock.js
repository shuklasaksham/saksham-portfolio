// Portfolio data — content sourced from sakshamshukla.com, adapted into terminal-UI shape

export const stats = [
  { value: '4+', label: 'YEARS' },
  { value: '30+', label: 'PROJECTS' },
  { value: '12', label: 'CLIENTS' }
];

export const caseStudies = [
  {
    id: 'hyundai-bo',
    version: 'V2024.4',
    title: 'Hyundai \u00d7 Bang & Olufsen',
    category: 'CONCEPT',
    role: 'UX/UI DESIGNER',
    year: '2024',
    words: 68,
    saves: 24,
    replies: 12,
    bullets: [
      'Designed spatial audio mixer for the in-cabin experience',
      'Adaptive DSP presets react to cabin acoustics + passengers',
      'Haptic-forward controls with quiet-mode default state'
    ],
    caption: 'Reimagining premium in-cabin audio for next-gen EVs.',
    tags: ['automotive', 'audio', 'spatial-ui']
  },
  {
    id: 'bracket',
    version: 'V2024.2',
    title: 'Bracket',
    category: 'WEB APP',
    role: 'PRODUCT DESIGNER',
    year: '2024',
    words: 54,
    saves: 18,
    replies: 7,
    bullets: [
      'Onboarding shrunk from 9 steps to 3 with zero drop in retention',
      'Live-scoring dashboards optimised for 12k concurrent users',
      'Component library shipped in Figma + storybook parity'
    ],
    caption: 'End-to-end product design for a bracketing tournament SaaS.',
    tags: ['saas', 'b2b', 'dashboards']
  },
  {
    id: 'harman-kardon',
    version: 'V2023.3',
    title: 'Harman Kardon',
    category: 'CONNECTED AUDIO',
    role: 'UX/UI DESIGNER',
    year: '2023',
    words: 44,
    saves: 15,
    replies: 5,
    bullets: [
      'Multi-room grouping with a quiet first-run experience',
      'Custom EQ profiles saved per room and per source',
      'Companion app redesign shipped across iOS + Android'
    ],
    caption: 'Companion app redesign for connected speakers.',
    tags: ['iot', 'mobile', 'audio']
  },
  {
    id: 'verizon-tello',
    version: 'V2023.1',
    title: 'Verizon \u2014 Tello.ai',
    category: 'CONVERSATIONAL AI',
    role: 'PRODUCT DESIGNER',
    year: '2023',
    words: 61,
    saves: 22,
    replies: 9,
    bullets: [
      'Designed turn-taking model + error recovery for voice AI',
      'Built a friendly personality system with 4 tone presets',
      'Reduced average call time by 38% in pilot with 4k users'
    ],
    caption: 'A voice-first AI assistant for customer support.',
    tags: ['ai', 'voice', 'support']
  }
];

export const digitalArt = [
  { id: 1, title: 'Sailing ship at sunset', src: 'https://www.sakshamshukla.com/assets/art-01-thumb-CAO5WgdZ.webp' },
  { id: 2, title: 'Pencil portrait', src: 'https://www.sakshamshukla.com/assets/art-02-thumb-BtE4qAcS.webp' },
  { id: 3, title: 'Retro sports car', src: 'https://www.sakshamshukla.com/assets/art-10-thumb-DU3Sn2Ib.webp' },
  { id: 4, title: 'Tall ship, golden hour', src: 'https://www.sakshamshukla.com/assets/art-08-thumb-xPyhPeEn.webp' },
  { id: 5, title: 'Laughing elder', src: 'https://www.sakshamshukla.com/assets/art-09-thumb-DXTOQIwz.webp' },
  { id: 6, title: 'Pop-art portrait', src: 'https://www.sakshamshukla.com/assets/art-04-thumb-DwVDRSsa.webp' },
  { id: 7, title: 'Tabby cat', src: 'https://www.sakshamshukla.com/assets/art-05-thumb-wWxfgG1b.webp' },
  { id: 8, title: 'Porsche in Japan', src: 'https://www.sakshamshukla.com/assets/art-06-thumb-BbJhDxY6.webp' },
  { id: 9, title: 'Anime, glowing eyes', src: 'https://www.sakshamshukla.com/assets/art-03-thumb-B5SlTRDX.webp' },
  { id: 10, title: 'Dystopian van', src: 'https://www.sakshamshukla.com/assets/art-07-thumb-CIw37Mbj.webp' }
];

export const aboutTabs = {
  process: [
    { n: '01', title: 'Discover', text: 'Research, interviews, competitive analysis' },
    { n: '02', title: 'Define', text: 'Personas, user flows, information architecture' },
    { n: '03', title: 'Design', text: 'Wireframes, visual design, prototyping' },
    { n: '04', title: 'Deliver', text: 'Testing, iteration, handoff, documentation' }
  ],
  skills: [
    { n: '01', title: 'Design', text: 'Figma, prototyping, interaction & motion' },
    { n: '02', title: 'Research', text: 'Interviews, usability tests, synthesis' },
    { n: '03', title: 'Craft', text: 'Pixel-level attention, systems thinking' },
    { n: '04', title: 'Code', text: 'HTML/CSS, React, framer-motion, prototypes' }
  ],
  obsessions: [
    { n: '01', title: 'Micro-copy', text: 'Words that do the heavy lifting' },
    { n: '02', title: 'Motion', text: 'Easing curves that feel human' },
    { n: '03', title: 'Density', text: 'How much information can breathe' },
    { n: '04', title: 'Terminals', text: 'ASCII, monospace, keyboard-first UX' }
  ],
  peeves: [
    { n: '01', title: 'Lorem Ipsum', text: 'Design with real content or don\u2019t design' },
    { n: '02', title: 'Fake gradients', text: 'Dark purple to blue on every button' },
    { n: '03', title: 'No empty states', text: 'What happens when there\u2019s nothing?' },
    { n: '04', title: 'PDF handoffs', text: 'It is 2026. Please stop.' }
  ]
};

export const playground = [
  { id: 'shy', category: 'INTERACTION', title: 'The Shy Button', hint: 'Try to click' },
  { id: 'elastic', category: 'MOTION', title: 'Elastic Card', hint: 'DRAG' },
  { id: 'glitch', category: 'VISUAL', title: 'Glitch Type', hint: 'BREAK ME' },
  { id: 'gravity', category: 'CONCEPT', title: 'Gravity UI', hint: 'enable gravity' }
];

export const contactPrompts = [
  'I need a designer who can…',
  'Let\u2019s collaborate on…',
  'I have this wild idea about…',
  'Help me redesign…'
];

export const navItems = [
  { key: 'home', label: 'Feed', shortcut: 'H' },
  { key: 'work', label: 'Work', shortcut: 'W' },
  { key: 'art', label: 'Journal', shortcut: 'J' },
  { key: 'about', label: 'Write', shortcut: 'B' },
  { key: 'play', label: 'Playground', shortcut: 'P' },
  { key: 'contact', label: 'C-Mail', shortcut: 'C', badge: 9 }
];

export const socials = [
  { label: 'LinkedIn', href: '#' },
  { label: 'Behance', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'Twitter', href: '#' }
];

export const profile = {
  handle: '@saksham_shukla',
  joined: 'Joined March 12, 2020',
  bio: 'This is not a portfolio — it\u2019s a controlled design experiment.',
  followers: 2140,
  following: 128
};
