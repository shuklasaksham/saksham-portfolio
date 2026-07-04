// Portfolio data — content sourced from sakshamshukla.com, adapted into terminal-UI shape

export const stats = [
  { value: '4+', label: 'YEARS' },
  { value: '30+', label: 'PROJECTS' },
  { value: '12', label: 'CLIENTS' }
];

export const caseStudies = [
  {
    id: 'bracket',
    version: 'V2026.1',
    title: 'Bracket',
    subtitle: 'An AI Decision OS for designers and freelancers that turns messy briefs into client-ready decisions, documents, and review workflows.',
    category: 'AI DECISION OS',
    role: 'Founder \u00b7 Product Designer \u00b7 UX Research \u00b7 Product Strategy',
    year: '2026',
    duration: '2026 \u2013 Present',
    platform: 'Web \u00b7 AI \u00b7 SaaS',
    tools: ['Figma', 'Framer', 'Linear', 'Cursor', 'Emergent'],
    words: 54, saves: 18, replies: 7,
    caption: 'AI Decision OS for freelancers and designers.',
    description: 'AI Decision OS that turns messy briefs into structured decisions and docs.',
    tags: ['ai', 'saas', 'design-tools'],
    detailed: true,
    images: [
      { src: 'https://placehold.co/1200x720/0a0704/f5a524.png?text=Bracket+%E2%80%94+Workspace+%28replace%29&font=roboto', caption: 'Bracket workspace \u2014 replace this dummy image' },
      { src: 'https://placehold.co/1200x720/0a0704/f5a524.png?text=Bracket+%E2%80%94+AI+Decisions+%28replace%29&font=roboto', caption: 'AI decision flow \u2014 replace this dummy image' }
    ],
    resultsLabel: 'Impact',
    results: [
      { value: '2K+', label: 'Early waitlist signups' },
      { value: '6+', label: 'Hours saved weekly per freelancer' },
      { value: '80%', label: 'Reduction in context switching' },
      { value: '50%', label: 'Less administrative work' }
    ],
    overview: [
      'Freelancers don\u2019t struggle because they lack tools.',
      'They struggle because every project lives across disconnected documents, chats, proposals, contracts, and invoices.',
      'Bracket reimagines project management as an AI-native operating system that transforms messy client briefs into structured decisions, documentation, review workflows, and project execution \u2014 all from a single source of truth.'
    ],
    challenge: {
      lead: 'Creative work starts with ambiguity.',
      paragraphs: [
        'Clients share scattered messages, incomplete requirements, and changing expectations across multiple channels. Designers spend as much time organizing information as they do solving problems.',
        'The challenge was to create a workspace that helps freelancers move from uncertainty to execution without constantly switching between tools.'
      ]
    },
    research: {
      intro: 'After interviewing freelancers and designers, one pattern appeared repeatedly.',
      paragraphs: [
        'People weren\u2019t frustrated by Figma.',
        'They weren\u2019t frustrated by Notion.',
        'They weren\u2019t frustrated by Google Docs.',
        'They were frustrated by everything between them.'
      ],
      listLead: 'Every project required:',
      items: [
        'Copying information across tools',
        'Rewriting the same decisions',
        'Searching through chats',
        'Managing endless revisions',
        'Manually documenting discussions'
      ]
    },
    insight: 'The real problem isn\u2019t fragmented tools. It\u2019s fragmented decisions.',
    principlesLabel: 'Product Principles',
    principles: [
      { icon: 'Database', title: 'One source of truth', text: 'Information should be created once and flow throughout the project automatically.' },
      { icon: 'Sparkles', title: 'AI should organize, not generate noise', text: 'Instead of another chatbot, AI should help structure conversations into decisions and actions.' },
      { icon: 'Zap', title: 'Progress over administration', text: 'Less time documenting. More time designing.' },
      { icon: 'Route', title: 'Every decision should be traceable', text: 'Ideas evolve. Projects change. Every important decision should have context, ownership, and history.' }
    ],
    explorationLabel: 'Exploring the Product',
    explorationIntro: 'I explored three possible directions before defining Bracket.',
    exploration: [
      { ok: false, title: 'Project Management Tool', text: 'Powerful, but became another task manager competing with existing products.' },
      { ok: false, title: 'Documentation Platform', text: 'Organized information well but failed to connect decisions with execution.' },
      { ok: false, title: 'AI Chat Assistant', text: 'Useful for answering questions, but conversations quickly became difficult to revisit and impossible to manage at scale.' },
      { ok: true, title: 'AI Decision OS', text: 'Instead of replacing existing creative tools, Bracket became the layer that connects requirements, decisions, documentation, reviews, and deliverables into one continuous workflow.' }
    ],
    finalSolutionLabel: 'The Solution',
    finalSolution: {
      lead: 'Bracket transforms unstructured conversations into structured project knowledge.',
      body: 'Instead of asking users to manually organize every meeting, message, and requirement, the platform automatically builds a living project workspace where every decision is connected.',
      workflow: ['Brief', 'Decisions', 'Documentation', 'Reviews', 'Deliverables'],
      close: 'As projects evolve, every document, review, and change request stays synchronized \u2014 reducing repetitive work and helping teams maintain clarity throughout the project lifecycle.'
    },
    features: [
      { icon: 'Bot', title: 'AI Brief Analysis', text: 'Convert scattered client requirements into structured project plans.' },
      { icon: 'FileText', title: 'Smart Documentation', text: 'Generate proposals, project documentation, and decision records automatically.' },
      { icon: 'RefreshCw', title: 'Review Workflows', text: 'Track feedback, revisions, approvals, and change requests in one place.' },
      { icon: 'LineChart', title: 'Project Timeline', text: 'Maintain a complete history of project decisions from kickoff to delivery.' },
      { icon: 'Users', title: 'Client Workspace', text: 'Share progress, documents, and approvals without long email threads.' }
    ],
    takeawayLabel: 'What I Learned',
    takeaway: {
      paragraphs: [
        'Building Bracket changed the way I think about product design.',
        'I realized freelancers don\u2019t need another productivity tool \u2014 they need a system that reduces decision fatigue.',
        'The biggest opportunity wasn\u2019t designing better interfaces. It was designing a product that quietly removes the invisible work happening between every project milestone.'
      ]
    },
    improvementsLabel: 'What\u2019s Next',
    improvementsIntro: 'Bracket is evolving into an AI-native operating system for creative work. Future iterations focus on:',
    improvements: [
      'Smarter project memory',
      'AI-assisted decision making',
      'Automated documentation',
      'Team collaboration',
      'Cross-project knowledge'
    ],
    bullets: [
      'Onboarding shrunk from 9 steps to 3 with zero drop in retention',
      'Live-scoring dashboards optimised for 12k concurrent users',
      'Component library shipped in Figma + storybook parity'
    ]
  },
  {
    id: 'hyundai-bo',
    version: 'V2024.4',
    title: 'Hyundai \u00d7 Bang & Olufsen',
    subtitle: 'Rethinking in-car audio for safer, distraction-free driving.',
    category: 'CONCEPT',
    role: 'Lead Product Designer',
    year: '2024',
    duration: '12 Weeks',
    platform: 'Automotive Infotainment',
    tools: ['Figma', 'ProtoPie', 'After Effects', 'Blender'],
    words: 68,
    saves: 24,
    replies: 12,
    caption: 'Reimagining premium in-cabin audio for next-gen EVs.',
    description: 'Reimagining premium in-cabin audio for the next-gen EV experience.',
    tags: ['automotive', 'audio', 'spatial-ui'],
    detailed: true,
    results: [
      { value: '40%', label: 'Faster audio interactions' },
      { value: '3 \u2192 1', label: 'Navigation layers reduced' },
      { value: '92%', label: 'User satisfaction' },
      { value: '60%', label: 'Reduction in driver distraction' }
    ],
    overview: [
      'Modern infotainment systems often borrow interaction patterns from smartphones \u2014 multiple menus, small touch targets, and feature-heavy interfaces. While these work on mobile devices, they become distractions inside a moving vehicle.',
      'This concept explores how a premium audio experience for Hyundai \u00d7 Bang & Olufsen could prioritize driver attention without compromising the richness of the sound experience.'
    ],
    challenge: {
      lead: 'Design an audio system that allows drivers to control music with minimal cognitive effort while maintaining Bang & Olufsen\u2019s premium brand experience.',
      body: 'The experience needed to:',
      items: [
        'Reduce interaction time',
        'Minimize visual distraction',
        'Preserve premium audio controls',
        'Work within real automotive constraints'
      ]
    },
    research: [
      { title: 'Touch Interfaces', text: 'Small touch targets increased interaction time and required drivers to repeatedly glance away from the road.' },
      { title: 'Voice Controls', text: 'Voice commands became unreliable in noisy environments and while music was playing.' },
      { title: 'Gesture Controls', text: 'Most users struggled to remember available gestures, making them difficult to discover and trust.' },
      { title: 'Overwhelming Audio Controls', text: 'Drivers wanted music to feel better \u2014 not adjust equalizers, frequencies, or technical parameters.' }
    ],
    insight: 'People don\u2019t think in frequencies. They think in feelings.',
    principles: [
      { icon: 'Eye', title: 'Keep eyes on the road', text: 'Every interaction should require only a quick glance.' },
      { icon: 'Zap', title: 'Reduce interaction steps', text: 'One action should accomplish one task whenever possible.' },
      { icon: 'BrainCircuit', title: 'Adapt to context', text: 'The system should respond to driving conditions instead of relying on manual adjustments.' },
      { icon: 'Music', title: 'Design for emotion', text: 'Expose meaningful choices while hiding unnecessary complexity.' }
    ],
    exploration: [
      { ok: false, title: 'Traditional EQ Controls', text: 'Powerful but visually overwhelming.' },
      { ok: false, title: 'Multi-level Navigation', text: 'Required too many interactions for common tasks.' },
      { ok: false, title: 'Voice-first Experience', text: 'Promising in theory, but unreliable in noisy driving environments.' },
      { ok: true, title: 'Emotion-based Audio Modes', text: 'Replacing technical audio settings with three simple modes \u2014 Calm, Focus, and Energize \u2014 allowed drivers to make faster decisions while the system handled the complexity behind the scenes.' }
    ],
    finalSolution: {
      lead: 'Instead of exposing dozens of audio settings, the interface presents three emotion-driven listening modes.',
      body: 'Behind each mode, the system automatically adjusts:',
      items: ['Equalizer', 'Spatial audio', 'Dynamic range', 'Volume behavior'],
      close: 'The result is a premium listening experience that requires almost no configuration from the driver.',
      distraction: {
        title: 'To further reduce distraction:',
        items: [
          'Frequently used controls remain accessible with a single interaction.',
          'Volume stays on a physical haptic dial.',
          'Ambient lighting provides subtle confirmation when switching modes.',
          'Interface elements are optimized for quick recognition during driving.'
        ]
      }
    },
    takeaway: {
      lead: 'This project reinforced an important lesson:',
      quote: 'Designing for automotive experiences isn\u2019t about adding features \u2014 it\u2019s about removing unnecessary decisions.',
      body: 'By focusing on driver attention instead of interface complexity, I was able to create an experience that feels simpler, safer, and more aligned with the way people naturally interact with music while driving.'
    },
    improvements: [
      'Personalized audio recommendations based on driving behavior.',
      'Better passenger controls without distracting the driver.',
      'Smarter contextual automation using route and environmental data.'
    ],
    bullets: [
      'Designed spatial audio mixer for the in-cabin experience',
      'Adaptive DSP presets react to cabin acoustics + passengers',
      'Haptic-forward controls with quiet-mode default state'
    ]
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
