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

export const experience = [
  {
    company: 'Verizon',
    role: 'Experience Specialist II',
    period: '2025 — NOW',
    dateShort: '[2025 - NOW]',
    location: 'Remote',
    status: 'Active',
    summary: 'Designing AI-driven conversational and mobile experiences that simplify decision-making across Verizon\u2019s consumer telecom stack.',
    highlights: [
      { label: 'Focus', text: 'AI-driven conversational flows for plan selection & support' },
      { label: 'Scope', text: 'End-to-end mobile UX with a bar for clarity, trust and speed' },
      { label: 'Partners', text: 'Cross-functional pods spanning product, ML and engineering' }
    ],
    bullets: [
      'Designed AI-driven conversational flows to simplify telecom plan selection and reduce decision fatigue',
      'Led end-to-end UX for mobile experiences, focusing on clarity, trust, and faster user decisions',
      'Collaborated with product and engineering teams to translate complex requirements into scalable solutions'
    ],
    stack: ['Figma', 'Origami', 'Notion', 'Linear', 'Loom'],
    team: '6 designers · 20+ engineers · 4 PMs',
    tags: ['ai', 'telecom', 'conversational']
  },
  {
    company: 'Harman International',
    role: 'Experience Designer',
    period: '2024 — 2025',
    dateShort: '[2024 - 2025]',
    location: 'Bengaluru',
    status: 'Completed',
    summary: 'Led UX for automotive infotainment across global brands — making complex in-car interactions safer and less cognitively taxing.',
    highlights: [
      { label: 'Focus', text: 'Automotive infotainment for multiple global OEMs' },
      { label: 'Craft', text: 'Reduced cognitive load and improved task efficiency in-cabin' },
      { label: 'Delivery', text: 'Production-ready design shipped with cross-functional teams' }
    ],
    bullets: [
      'Led UX design for automotive infotainment systems across global brands, focusing on safety and usability',
      'Simplified complex in-car interactions by reducing cognitive load and improving task efficiency',
      'Worked closely with cross-functional teams to deliver production-ready design solutions'
    ],
    stack: ['Figma', 'Origami', 'After Effects', 'Miro'],
    team: '4 designers · 15 engineers · 2 PMs',
    tags: ['automotive', 'infotainment', 'safety']
  },
  {
    company: 'Harman International',
    role: 'Associate Experience Designer',
    period: '2022 — 2024',
    dateShort: '[2022 - 2024]',
    location: 'Bengaluru',
    status: 'Completed',
    summary: 'Designed connected-automotive experiences from the wireframe up — validated with real users and shipped into production UI.',
    highlights: [
      { label: 'Scope', text: 'User flows & interfaces for connected-car products' },
      { label: 'Validation', text: 'Interactive prototypes tested with real users' },
      { label: 'Craft', text: 'End-to-end process from research to final UI execution' }
    ],
    bullets: [
      'Designed user flows and interfaces for connected automotive experiences and digital products',
      'Created wireframes and interactive prototypes to validate concepts and improve usability',
      'Supported end-to-end design process from research to final UI execution'
    ],
    stack: ['Figma', 'Sketch', 'InVision', 'Zeplin'],
    team: '3 designers · 10 engineers',
    tags: ['automotive', 'prototyping', 'ui']
  }
];

export const skillsData = {
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

export const contactPrompts = [
  'I need a designer who can…',
  'Let\u2019s collaborate on…',
  'I have this wild idea about…',
  'Help me redesign…'
];

// 6 portfolio-focused menu items with lucide icon names
export const navItems = [
  { key: 'about', label: 'About Me', shortcut: 'A', icon: 'User' },
  { key: 'work', label: 'Case Studies & Projects', shortcut: 'W', icon: 'FolderKanban', badge: 4 },
  { key: 'illustrations', label: 'Illustrations', shortcut: 'I', icon: 'Palette' },
  { key: 'experience', label: 'Experience', shortcut: 'E', icon: 'Briefcase' },
  { key: 'pixels', label: 'Behind the Pixels', shortcut: 'B', icon: 'MonitorDot' },
  { key: 'contact', label: 'Contact', shortcut: 'C', icon: 'Mail' }
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

// Tools in the current design stack (WORKBENCH)
export const toolStack = [
  { name: 'Figma', icon: 'PenTool' },
  { name: 'Cursor', icon: 'Terminal' },
  { name: 'Linear', icon: 'GitBranch' },
  { name: 'Notion', icon: 'FileText' },
  { name: 'Framer', icon: 'Frame' },
  { name: 'Miro', icon: 'Grid3x3' },
  { name: 'Origami', icon: 'Layers' }
];

// Design principles a product designer ships by
export const principles = [
  { n: '01', title: 'Ship the smallest thing', text: 'A small thing shipped beats a big thing planned. Cut scope, keep intent.' },
  { n: '02', title: 'Design with real content', text: 'Lorem lies. Use messy, real, live copy — empty states included.' },
  { n: '03', title: 'Systems over screens', text: 'One tile at a time — but each tile snaps into the whole grid.' },
  { n: '04', title: 'Read the room', text: 'Product is people. Watch faces in usability tests, not just the screen.' }
];

// Live "currently" status
export const currentStatus = {
  headline: 'Building Bracket — an AI Decision OS',
  detail: 'Shipping v0.4 workspace: shareable decision docs, AI-assisted briefs, keyboard-first reviews.',
  availability: 'Onboarding 3 design partners this quarter',
  responseTime: 'Usually replies within 24h'
};
