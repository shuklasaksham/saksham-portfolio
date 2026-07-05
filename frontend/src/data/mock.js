// Portfolio data — content sourced from sakshamshukla.com, adapted into terminal-UI shape

export const stats = [
  { value: '4+', label: 'YEARS' },
  { value: '30+', label: 'PROJECTS' },
  { value: '12', label: 'CLIENTS' }
];

export const caseStudies = [

  {
    id: 'bracket',
    openDesignsUrl: 'https://use-bracket.com/',
    openDesignsLabel: 'Open Bracket',
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
      { value: '123', label: 'Freelancers & Teams' },
      { value: '68', label: 'Requirements Extracted' },
      { value: '115', label: 'Risks Identified' },
      { value: '90', label: 'Client Questions Generated' }
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
    id: 'verizon-tello',
    version: 'V2025.1',
    title: 'Verizon \u2014 Tello.ai',
    subtitle: 'Verizon doesn\u2019t have an information problem \u2014 they have 47 plans on their website. The problem is that giving people more data doesn\u2019t help them decide. I designed Tello.ai to replace comparison tables with a conversational AI that narrows options down and explains why, turning a 15-minute research task into a 3-minute conversation.',
    category: 'CONVERSATIONAL AI',
    role: 'Product Designer',
    year: '2025',
    duration: '2025',
    platform: 'AI \u00b7 Telecom \u00b7 Conversational',
    tools: ['Figma', 'ProtoPie', 'GPT-4 API', 'Maze', 'Lottie'],
    words: 61, saves: 22, replies: 9,
    caption: 'Voice-first AI assistant for customer support.',
    description: 'Conversational AI turning 15-minute plan research into a 3-minute chat.',
    tags: ['ai', 'telecom', 'conversational'],
    detailed: true,
    images: [
      {
        type: 'image',
        fit: 'contain',
        src: 'https://customer-assets.emergentagent.com/job_saksham-design-1/artifacts/gjtzjh15_Activation%20_%20pSIM%20%26%20eSIM%201.png',
        caption: 'Activation flow — pSIM & eSIM (Figma)'
      },
      {
        type: 'video',
        src: 'https://customer-assets.emergentagent.com/job_saksham-design-1/artifacts/t8qthhi7_20260705-1406-53.2072577.mp4',
        caption: 'Tello.ai prototype walkthrough'
      }
    ],
    resultsLabel: 'Results',
    results: [
      { value: '5x', label: 'Faster Selection' },
      { value: '+35%', label: 'Conversion Rate' },
      { value: '+28%', label: 'Customer Satisfaction' },
      { value: '60%', label: 'Drop-off Reduced' }
    ],
    problem: {
      label: 'The Problem',
      lead: 'More information doesn\u2019t mean better decisions',
      body: 'Telecom companies have spent years adding transparency \u2014 more plan details, bigger comparison tables, detailed breakdowns. And it hasn\u2019t helped. Abandonment rates are still 60%. Selection time is still 15 minutes. Customer regret is still high. I dug into the analytics and found something counterintuitive: users who viewed more plan details were less likely to convert, not more. Every additional comparison column increased the probability of abandonment. The problem isn\u2019t hidden information \u2014 it\u2019s that displaying 47 options with 12 variables each exceeds human working memory. Cognitive psychology says we can hold 4\u00b11 items in working memory. We were asking users to process 564 data points. Nobody was making an informed decision. They were either exhausted into picking something or exhausted into leaving.'
    },
    researchLabel: 'How People Actually Try to Choose',
    research: [
      { icon: 'BarChart3', title: 'Comparison Tables', text: '12 columns, 47 rows. Users scroll, get overwhelmed, open a new tab to \u201ccome back later.\u201d Most don\u2019t come back.' },
      { icon: 'Store', title: 'Store Visits', text: 'The most effective channel \u2014 a human narrows it down. But it requires a 30-minute trip and often a wait. Doesn\u2019t scale.' },
      { icon: 'Phone', title: 'Phone Support', text: 'Average hold time: 8 minutes. Then you explain your situation to someone reading the same comparison table you already saw.' },
      { icon: 'Frown', title: 'Decision Fatigue', text: '60% abandon. Of the 40% who convert, a third contact support within 30 days \u2014 many wanting to switch plans they just chose.' }
    ],
    targetUser: {
      label: 'Who I Was Designing For',
      lead: 'People who need confidence, not information',
      body: 'My target user isn\u2019t a telecom enthusiast who enjoys comparing plans. It\u2019s someone who needs a phone plan and wants to stop thinking about it as quickly as possible. They don\u2019t know what \u201c50GB premium data\u201d means in practice. They don\u2019t know the difference between \u201chotspot\u201d and \u201cmobile hotspot.\u201d They know they use their phone for streaming, texting, and occasional GPS \u2014 and they want someone to tell them which plan covers that without overpaying. The critical context: most plan purchases happen during moments of urgency. You just moved. Your kid needs a phone for school. Your contract expired and you\u2019re getting charged full price. These aren\u2019t users browsing casually \u2014 they\u2019re under time pressure with limited patience for complexity. I designed for that state of mind: anxious, time-constrained, and looking for reassurance that they\u2019re making the right call.'
    },
    insightLabel: 'The Key Insight',
    insight: 'People don\u2019t want to compare \u2014 they want to be told what\u2019s right.',
    insightBody: 'In every store visit I observed, the interaction followed the same pattern. Customer walks in: \u201cI need a new plan.\u201d Rep asks 3\u20134 questions: how many lines, how much streaming, any international travel, budget range. Rep recommends 1\u20132 plans with a brief explanation. Customer picks one. Total time: 2\u20133 minutes. The rep doesn\u2019t show a comparison table. They don\u2019t explain all 47 options. They use their knowledge to filter down to what\u2019s relevant \u2014 and their explanation builds enough trust for the customer to commit. That\u2019s the interaction I needed to replicate digitally. Not a chatbot. Not a search filter. A guided decision engine that asks, filters, explains, and recommends.',
    principlesLabel: 'Principles for AI-Guided Decision Making',
    principlesIntro: 'Designing with AI isn\u2019t just a technology choice \u2014 it changes the user\u2019s role from decision-maker to decision-approver. That shift requires specific design principles I hadn\u2019t needed before.',
    principles: [
      { icon: 'HelpCircle', title: 'Ask, don\u2019t display', text: 'The AI asks about behavior (\u201cHow much do you stream?\u201d), not specs (\u201cHow many GB?\u201d). Users know their habits. They don\u2019t know how habits translate to data consumption. That translation is the AI\u2019s job, not theirs.' },
      { icon: 'Search', title: 'Show your work', text: 'Every recommendation comes with reasoning. Not \u201cWe recommend Plan X\u201d but \u201cPlan X because you stream 2+ hours daily, share with 2 family members, and rarely travel internationally.\u201d If the user can\u2019t verify the logic, they won\u2019t trust it.' },
      { icon: 'Minimize2', title: 'Reduce, then reveal', text: 'Start with one recommendation. Let users expand to see 2\u20133 alternatives. Let them drill into details on demand. Never show all 47 plans. The whole point is that the AI did the filtering \u2014 don\u2019t undo that by displaying everything.' },
      { icon: 'DoorOpen', title: 'Always leave an exit', text: 'Some users will never trust AI recommendations. That\u2019s fine. At any point, they can switch to traditional comparison mode. The AI\u2019s job is to be the better path, not the only path.' }
    ],
    explorationLabel: 'Approaches I Tested \u2014 and Why Most Missed the Point',
    explorationIntro: 'I prototyped three fundamentally different approaches to plan selection. The question wasn\u2019t \u201cshould we use AI?\u201d \u2014 it was \u201cwhat role should the AI play in the decision?\u201d',
    exploration: [
      {
        ok: false,
        title: 'Smart filters \u2014 AI-enhanced traditional comparison',
        text: 'Same comparison table, but with an AI layer that highlights \u201cbest match\u201d rows based on a brief quiz. Familiar pattern, lower risk. But in testing, users still felt overwhelmed. Highlighting 3 rows in a 47-row table doesn\u2019t solve the problem \u2014 it just adds another signal to an already overloaded display. Users said: \u201cI still see all the other options and wonder if I\u2019m missing something.\u201d',
        why: 'Reducing noise by 6% isn\u2019t enough when the baseline is 564 data points. Users need the noise removed, not dimmed.',
        whyLabel: 'Why rejected'
      },
      {
        ok: false,
        title: 'Recommendation engine \u2014 show top 3 without conversation',
        text: 'Skip the conversation. Use behavioral data (usage patterns, current plan, billing history) to recommend 3 plans immediately. Fast, low-friction, no chat UI needed. But users didn\u2019t trust it. \u201cHow does it know what I need?\u201d Without the conversation, the recommendation felt like an upsell, not advice. Trust scores were 40% lower than the conversational approach.',
        why: 'Recommendations without visible reasoning feel like marketing. Users need to see the logic \u2014 and the conversation is the mechanism for building that trust.',
        whyLabel: 'Why rejected'
      },
      {
        ok: true,
        title: 'Conversational AI \u2014 ask, narrow, explain, recommend',
        text: '3\u20135 questions in natural language. AI narrows 47 plans to 1\u20132. Each recommendation includes reasoning tied to the user\u2019s answers. Users can ask follow-ups, compare alternatives, or switch to traditional view. Average interaction: 2.5 minutes.',
        why: 'Trust scores 2.3\u00d7 higher than silent recommendations. 35% higher conversion. Users consistently said: \u201cI feel like it actually understood what I need.\u201d The conversation isn\u2019t just UI \u2014 it\u2019s trust-building infrastructure.',
        whyLabel: 'Why selected'
      }
    ],
    coreDecisions: [
      {
        title: 'Why conversational UI instead of traditional filters',
        body: 'This was debated heavily with the Verizon product team. Conversational UI is expensive to build, harder to maintain, and introduces AI reliability risks. Filters are proven, scalable, and predictable. I argued that filters solve a navigation problem, but plan selection is a decision problem. Filters help you find things. Conversations help you decide things. When someone asks a store rep for help, they\u2019re not filtering \u2014 they\u2019re offloading cognitive work to someone who can process the variables faster. The AI replicates that offloading. The trade-off I accepted: conversational UI means we lose the ability to show everything at once. Users who want to browse all options need to exit the AI flow. About 15% of users did this in testing \u2014 which means 85% preferred the guided path. I was okay with serving the 85% brilliantly and the 15% adequately.'
      },
      {
        title: 'Why the AI explains its reasoning \u2014 and why that was harder than building the AI',
        body: 'The recommendation engine itself took 3 weeks. Making it explain itself took 5. Every recommendation in Tello.ai shows a reasoning chain: \u201cRecommended because: you stream 2+ hours daily (\u2192 need 15GB+ data), you share with 2 family members (\u2192 family plan saves $40/mo), you rarely travel (\u2192 no international add-on needed).\u201d Building this required mapping every AI decision variable to a human-readable explanation. It\u2019s not the AI \u201cthinking out loud\u201d \u2014 it\u2019s a parallel system that translates model weights into language. I pushed hard for this because trust is the entire product. In testing, users who saw explanations were 2.3\u00d7 more likely to complete the purchase than users who got the same recommendation without reasoning. The explanation is doing more work than the recommendation itself.'
      }
    ],
    aiInteraction: {
      title: 'AI Interaction Design',
      subtitle: 'How the conversation is structured \u2014 and what happens when the AI is wrong',
      body: 'The conversation follows a deliberate arc: establish context (2 questions), narrow options (1\u20132 questions), recommend (with reasoning), and confirm. I limited the flow to 3\u20135 questions because testing showed that engagement drops sharply after the 5th message. Each question is phrased in terms the user already understands. Not \u201cWhat\u2019s your desired data allowance?\u201d but \u201cDo you stream videos on your phone?\u201d The AI translates the answer into technical requirements invisibly. When the AI is wrong \u2014 and it is, about 12% of the time based on our testing \u2014 the user can say \u201cthat\u2019s not quite right\u201d and the AI adjusts. I designed the correction flow to feel like a natural conversation, not an error state. \u201cGot it, let me rethink that\u201d rather than a jarring restart. The AI also surfaces a confidence signal: \u201cStrong match\u201d vs \u201cGood option \u2014 here\u2019s why you might also consider\u2026\u201d That transparency helps users calibrate their own trust.'
    },
    finalSolutionLabel: 'The Solution \u2014 Guided Decision-Making',
    finalSolution: {
      lead: '47 plans narrowed to 1\u20132 through a 3-minute conversation. Every recommendation shows its reasoning. Details expand on demand. Users can switch to traditional comparison at any point. The AI doesn\u2019t choose for you \u2014 it helps you choose with confidence.',
      workflow: ['Ask', 'Understand', 'Recommend']
    },
    finalUI: {
      title: 'Final UI',
      body: 'The visual language is deliberately warm and un-corporate. Telecom websites feel like they\u2019re trying to sell you something. Tello.ai feels like it\u2019s trying to help you. Rounded corners, conversational bubbles, a friendly illustration style \u2014 all calibrated to reduce the \u201cis this going to upsell me?\u201d anxiety. The chat interface uses a single-column layout optimized for mobile \u2014 78% of plan purchases happen on phones. The recommendation card is the centerpiece: plan name, price, the 3 most relevant features for this user, and the reasoning chain. Everything else is expandable. I set a rule: the recommendation card can\u2019t exceed the height of one mobile viewport. If you have to scroll to see the full recommendation, I\u2019ve failed to prioritize.'
    },
    impactNarrative: {
      title: 'How I Measured Impact',
      subtitle: 'A/B test with 2,400 users \u2014 and what the numbers actually mean',
      body: '5\u00d7 faster selection: Average time dropped from 15 minutes to 2.8 minutes. But context matters \u2014 the AI flow is shorter partly because it shows less information. The question is whether users are making worse decisions faster, or better decisions faster. The 30-day support contact rate suggests it\u2019s the latter. +35% conversion: A/B tested over 4 weeks with 2,400 users randomly assigned. The AI flow converted at 52% vs. 38.5% for the comparison table. Statistical significance was strong (p<0.01). The lift came primarily from users who\u2019d previously abandoned mid-funnel. +28% customer satisfaction: Post-purchase CSAT survey. The AI flow scored 4.3/5 vs. 3.4/5 for traditional. The most-cited reason: \u201cI understood what I was buying.\u201d \u201340% support contacts in 30 days: Users who purchased through Tello.ai were significantly less likely to call support about their plan. This suggests better decision quality, not just faster decisions. Honest caveat: this was a 4-week test. Seasonal effects, promotional periods, and novelty bias could all be factors. I\u2019d want 6 months of data before treating these as stable numbers.'
    },
    keyFeaturesLabel: 'Key Features',
    keyFeatures: [
      'Conversational plan discovery \u2014 the AI asks about usage, not specs. \u201cHow much do you stream?\u201d not \u201cHow many GB do you need?\u201d',
      'Explainable recommendations \u2014 every suggestion shows the reasoning: \u201cThis plan because you said you stream 2+ hours daily and share with 2 family members.\u201d',
      'Progressive disclosure \u2014 the recommendation is 3 lines. Details expand on demand. Fine print is translated into plain language on tap.',
      'Hybrid flow \u2014 users can switch between AI conversation and traditional comparison at any point. No lock-in to either paradigm.'
    ],
    learnings: {
      title: 'What I Learned About Designing With AI',
      intro: 'This was my first project where AI was the core interaction model, not a feature. It changed how I think about user agency and trust.',
      items: [
        { title: 'What didn\u2019t work as well as I\u2019d hoped?', body: 'The AI\u2019s handling of edge cases. Family plans with mixed needs (one person streams heavily, another barely uses data), business accounts, international travel requirements \u2014 the conversational flow gets clunky when the scenario is complex. The AI asks more questions, the responses get longer, and the conversation starts to feel like a form. For V2, I\u2019d redesign the flow to handle complexity through branching, not longer conversations. Detect early that this is a complex scenario and switch to a hybrid mode \u2014 AI narrows the field, then surfaces a simplified comparison of the remaining 3\u20134 options. Let the user do the final selection with enough context but not all 47 plans.' },
        { title: 'What trade-offs am I still uncomfortable with?', body: 'Speed vs. control. The AI flow is fast because it limits what users see. Some people want to browse \u2014 they enjoy comparing, they want to feel like they\u2019ve done their due diligence. The 15% who switched to traditional comparison mode in testing aren\u2019t wrong. They have a different decision-making style, and Tello.ai doesn\u2019t serve them as well. The other tension: AI reliability. A 12% error rate sounds low, but that\u2019s roughly 1 in 8 users getting a recommendation that doesn\u2019t perfectly match their needs. At Verizon\u2019s scale, that\u2019s hundreds of thousands of suboptimal recommendations per month. Each one is a potential support call, a plan switch, a trust violation. I designed correction mechanisms, but the root fix is model improvement \u2014 which is an engineering problem I could influence but not own.' },
        { title: 'What changed about how I think about AI in product design?', body: 'That explainability isn\u2019t a nice-to-have \u2014 it\u2019s the product. The recommendation engine is technically impressive but emotionally meaningless without the reasoning layer. Users don\u2019t trust AI because it\u2019s accurate. They trust it because they can see why it said what it said. That insight applies beyond telecom: any AI-driven product that makes recommendations needs to show its work. The other lesson: AI changes the designer\u2019s role. I wasn\u2019t designing screens \u2014 I was designing a conversation. The flow, the phrasing, the error recovery, the confidence calibration. That\u2019s a different skill set than layout and visual design. I spent more time writing conversation scripts than I did in Figma. The design artifact wasn\u2019t a mockup \u2014 it was a decision tree.' }
      ]
    },
    bullets: [
      'Designed turn-taking model + error recovery for voice AI',
      'Built a friendly personality system with 4 tone presets',
      'Reduced average call time by 38% in pilot with 4k users'
    ]
  },

  {
    id: 'hyundai-bo',
    version: 'V2024.4',
    title: 'Hyundai \u00d7 Bang & Olufsen',
    subtitle: 'Rethinking in-car audio for safer, distraction-free driving.',
    category: 'CONCEPT',
    role: 'Experience Designer',
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
    images: [
      { src: 'https://placehold.co/1200x720/0a0704/f5a524.png?text=Hyundai+%C3%97+B%26O+%E2%80%94+In-Cabin+%28replace%29&font=roboto', caption: 'In-cabin audio UI — replace this dummy image' },
      { src: 'https://placehold.co/1200x720/0a0704/f5a524.png?text=Hyundai+%C3%97+B%26O+%E2%80%94+Emotion+Modes+%28replace%29&font=roboto', caption: 'Emotion-based audio modes — replace this dummy image' }
    ],
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
    title: 'One Audio: Designed for Harman Kardon',
    subtitle: 'Designing a connected audio ecosystem that feels like one product \u2014 not many.',
    category: 'CONNECTED AUDIO',
    role: 'Designer',
    year: '2023',
    duration: '2023',
    platform: 'IoT \u00b7 Connected Audio',
    tools: ['Figma', 'ProtoPie', 'Principle', 'After Effects'],
    words: 44, saves: 15, replies: 5,
    caption: 'Connected audio ecosystem for Harman Kardon.',
    description: 'One connected ecosystem across speakers, headphones and soundbars.',
    tags: ['audio', 'iot', 'ecosystem'],
    detailed: true,
    images: [
      { src: 'https://placehold.co/1200x720/0a0704/f5a524.png?text=One+Audio+%E2%80%94+Space+View+%28replace%29&font=roboto', caption: 'One Audio space view \u2014 replace this dummy image' },
      { src: 'https://placehold.co/1200x720/0a0704/f5a524.png?text=One+Audio+%E2%80%94+Handoff+%28replace%29&font=roboto', caption: 'Instant audio handoff \u2014 replace this dummy image' }
    ],
    resultsLabel: 'Results',
    results: [
      { value: '65%', label: 'Faster device setup' },
      { value: '+40%', label: 'Increase in multi-device usage' },
      { value: '\u26054.8', label: 'Prototype satisfaction rating' },
      { value: '-55%', label: 'Projected reduction in support requests' }
    ],
    overview: [
      'Harman Kardon offers a premium range of speakers, headphones, and soundbars, but each product behaves like an independent device with its own setup, controls, and companion app.',
      'This concept reimagines the ecosystem as a connected experience where devices share context, preferences, and audio seamlessly, allowing users to move between products without interruption.'
    ],
    challenge: {
      lead: 'How might we create a connected ecosystem where multiple Harman Kardon devices work together as naturally as they sound?',
      body: 'The experience needed to:',
      items: [
        'Reduce friction between devices',
        'Create a consistent interaction model',
        'Preserve premium audio experiences',
        'Scale across multiple product categories'
      ]
    },
    research: {
      intro: 'While studying existing connected audio products, one insight became obvious.',
      paragraphs: [
        'The devices were connected.',
        'The experience wasn\u2019t.'
      ],
      listLead: 'Users frequently switched between speakers, headphones, and soundbars, but every transition required reopening apps, changing settings, and manually reconnecting devices. Instead of feeling like one ecosystem, every product behaved like its own island.',
      items: []
    },
    insight: 'People don\u2019t think about devices. They think about spaces.',
    principlesLabel: 'Product Principles',
    principles: [
      { icon: 'Route', title: 'Context travels with the user', text: 'Preferences should move between devices automatically.' },
      { icon: 'BrainCircuit', title: 'Design for spaces', text: 'People manage music by where they are \u2014 not by which hardware they\u2019re using.' },
      { icon: 'Zap', title: 'One interaction model', text: 'Every Harman Kardon device should feel familiar regardless of category.' },
      { icon: 'Sparkles', title: 'Smart when needed', text: 'Automation should reduce effort without taking control away from the user.' }
    ],
    explorationLabel: 'Exploration',
    explorationIntro: 'I explored three ecosystem models before defining the final direction.',
    exploration: [
      { ok: false, title: 'Device-first Management', text: 'Easy to implement, but reinforced fragmentation.' },
      { ok: false, title: 'Fully Automated Switching', text: 'Removed too much user control and produced inconsistent experiences.' },
      { ok: true, title: 'Space-based Ecosystem', text: 'Organizing devices around spaces such as Living Room, Office, and Bedroom created a mental model users immediately understood while keeping audio handoff simple and predictable.' }
    ],
    finalSolutionLabel: 'The Solution',
    finalSolution: {
      lead: 'Instead of managing individual products, users manage spaces.',
      body: 'Every connected device becomes part of a larger ecosystem where preferences, playback, and controls follow the user instead of remaining locked to individual hardware.',
      items: [
        'Space-based device organization',
        'One-tap audio handoff',
        'Unified sound preferences',
        'Shared playback controls',
        'Context-aware automation'
      ],
      close: 'The result is an ecosystem that feels cohesive rather than a collection of separate products.'
    },
    features: [
      { icon: 'Home', title: 'Space-first Organization', text: 'Manage rooms instead of individual devices.' },
      { icon: 'RefreshCw', title: 'Instant Audio Handoff', text: 'Move playback between products with a single interaction.' },
      { icon: 'SlidersHorizontal', title: 'Shared Preferences', text: 'Volume, EQ, and listening profiles travel across devices.' },
      { icon: 'Bot', title: 'Context-aware Automation', text: 'Automatically adapt playback based on location, activity, and time.' }
    ],
    takeawayLabel: 'What I Learned',
    takeaway: {
      paragraphs: [
        'Designing ecosystems is fundamentally different from designing individual products.',
        'The challenge isn\u2019t creating better interfaces \u2014 it\u2019s creating a shared mental model that makes multiple devices feel like one experience.',
        'This project reinforced that consistency, context, and continuity are often more valuable than adding new features.'
      ]
    },
    improvementsLabel: 'What\u2019s Next',
    improvementsIntro: 'Future iterations would focus on:',
    improvements: [
      'Smarter context detection',
      'Personalized automation',
      'Cross-device AI recommendations',
      'Firmware-level synchronization',
      'Deeper ecosystem integrations'
    ],
    bullets: [
      'Multi-room grouping with a quiet first-run experience',
      'Custom EQ profiles saved per room and per source',
      'Companion app redesign shipped across iOS + Android'
    ]
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
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/saksham-shuklaa/' },
  { label: 'Behance', href: 'https://www.behance.net/sakshamshukla2' },
  { label: 'Instagram', href: 'https://www.instagram.com/_sakshamshukla_/' },
  { label: 'Email', href: 'mailto:shuklasaksham01@gmail.com' },
  { label: 'Call', href: 'tel:+917318088227' }
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
  availability: 'Open to Product Designer roles + collaborations',
  responseTime: 'Usually replies within 24h'
};
