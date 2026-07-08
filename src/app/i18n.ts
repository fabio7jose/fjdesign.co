export type Lang = 'pt' | 'en';

/* ─── Sub-types ─────────────────────────────────────────────────── */
interface Stat { num: string; label: string }
interface SkillCard { title: string; body: string }
interface EduItem { degree: string; school: string; period: string; status: string }
interface InfoItem { label: string; value: string; isAvailability: boolean }
interface LacreiStep { num: string; label: string; heading: string; body: string }
interface LacreiScreen { label: string; annotation: string }
interface CopilotoStep { num: string; label: string; heading: string; body: string; aiUse: string }
interface CopilotoDecision { title: string; body: string; bridge?: string }
interface CopilotoReflectionCard { label: string; body: string }
interface UltrafarmaTask { num: string; title: string; body: string }
interface UltrafarmaFlaw { number: string; title: string; body: string; tag: string }
interface UltrafarmaFinding { num: string; title: string; body: string; tag: string }
interface UltrafarmaDecision { title: string; body: string; tag: string }
interface UltrafarmaValidationItem { label: string; body: string; tag: string }

/* ─── Shape every locale object must satisfy ─────────────────────
   Both `en` and `pt` are checked against this interface at compile
   time. A missing or misnamed key causes a TypeScript error.      */
interface TranslationShape {
  nav: {
    work: string; github: string; skills: string; certifications: string;
    motionContent: string; about: string; contact: string;
  };
  hero: {
    available: string; title: string; title2: string; subtitle: string;
    cta: string; stats: Stat[]; scroll: string;
  };
  work: {
    label: string; title1: string; title2: string;
    filters: string[]; viewCase: string;
    previousProject: string; nextProject: string;
  };
  githubActivity: {
    label: string; title: string; description: string; username: string; cta: string; contributionsSuffix: string;
  };
  skills: {
    label: string; title: string; cards: SkillCard[];
  };
  certifications: {
    label: string; title: string; scrollHint: string;
  };
  motionContent: {
    label: string; heading: string; videosLabel: string; imagesLabel: string;
  };
  about: {
    label: string; title: string; openTo: string; bio: string[];
    downloadCV: string; education: string; location: string;
    active: string; ongoing: string; eduItems: EduItem[];
  };
  contact: {
    label: string; title1: string; title2: string; description: string;
    infoItems: InfoItem[]; findMeOn: string;
    form: {
      namePlaceholder: string; emailPlaceholder: string;
      projectTypePlaceholder: string; projectTypes: string[];
      messagePlaceholder: string; submit: string; sending: string;
      successTitle: string; successText: string;
      errorMessage: string;
      errors: {
        nameRequired: string; emailRequired: string; emailInvalid: string;
        projectTypeRequired: string; messageRequired: string;
      };
    };
  };
  footer: {
    copyright: string; backToTop: string;
  };
  lacrei: {
    backToWork: string;
    projectTitle: string;
    projectDescription: string;
    rolePill: string;
    year: string;
    methodology: string;
    tools: string[];
    prototypeLabel: string;
    viewFigma: string;
    problemLabel: string;
    problemHeading: string;
    problemBody: string;
    myRoleTitle: string;
    roleCardTitle: string;
    roleCardItems: string[];
    withCardTitle: string;
    withCardValue: string;
    constraintsCardTitle: string;
    constraintsCardValue: string;
    processLabel: string;
    steps: LacreiStep[];
    stepLinkPersona: string;
    stepLinkJourney: string;
    stepLinkWireframes: string;
    solutionLabel: string;
    solutionHeading: string;
    screens: LacreiScreen[];
    highlightCard1Label: string;
    highlightCard1Value: string;
    highlightCard2Label: string;
    highlightCard2Value: string;
    learningsHeading: string;
    learnings: string[];
    ctaPrototype: string;
    previousProject: string;
    nextProject: string;
  };
  guiaMoteis: {
    backToWork: string;
    projectTitle: string;
    projectDescription: string;
    rolePill: string;
    year: string;
    methodology: string;
    tools: string[];
    problemLabel: string;
    problemHeading: string;
    problemBody: string;
    highlightCard1Label: string;
    highlightCard1Value: string;
    highlightCard2Label: string;
    highlightCard2Value: string;
    myRoleTitle: string;
    roleCardTitle: string;
    roleCardItems: string[];
    withCardTitle: string;
    withCardValue: string;
    constraintsCardTitle: string;
    constraintsCardValue: string;
    processLabel: string;
    steps: LacreiStep[];
    solutionLabel: string;
    solutionHeading: string;
    screens: LacreiScreen[];
    learningsHeading: string;
    learnings: string[];
    ctaPrototype: string;
    previousProject: string;
    nextProject: string;
  };
  copiloto: {
    backToWork: string;
    scopeBadge: string;
    completedStagesLabel: string;
    completedStages: string;
    projectTitle: string;
    projectDescription: string;
    rolePill: string;
    year: string;
    heroQuote: string;
    summaryBox: {
      label: string;
      problem: string;
      sample: string;
      findings: string;
      deliverables: string;
      status: string;
      aiNote: string;
    };
    methodology: string;
    tools: string[];
    challengeLabel: string;
    challengeBody1: string;
    challengeBody2: string;
    highlightCard1Label: string;
    highlightCard1Value: string;
    highlightCard2Label: string;
    highlightCard2Value: string;
    myRoleTitle: string;
    roleCardTitle: string;
    roleCardItems: string[];
    secondLayerCardTitle: string;
    secondLayerCardValue: string;
    stackCardTitle: string;
    stackCardItems: string[];
    processLabel: string;
    steps: CopilotoStep[];
    reflectionLabel: string;
    reflectionIntro: string;
    reflectionCards: CopilotoReflectionCard[];
    reflectionThroughline: string;
    decisionsLabel: string;
    decisions: CopilotoDecision[];
    limitsLabel: string;
    limits: string[];
    nextTitle: string;
    nextItems: string[];
    takesTitle: string;
    takesItems: string[];
    pageFooterText: string;
    artifacts: {
      affinityCaption: string;
      affinityAlt: string;
      jtbdsCaption: string;
      jtbdsAlt: string;
      arqIaCaption: string;
      arqIaAlt: string;
      flowsCaption: string;
      flowsAlt: string;
      personaCaption: string;
      personaAlt: string;
    };
  };
  ultrafarma: {
    backToWork: string;
    projectTitle: string;
    subtitle: string;
    rolePill: string;
    year: string;
      heroHeading: string;
      heroBody: string;
      heroFigmaCta: string;
    whyLabel: string;
    whyBody: string;
    whyCalloutValue: string;
    whyCalloutCaption: string;
    methodLabel: string;
    methodIntro: string;
    methodTasks: UltrafarmaTask[];
    diagnosisLabel: string;
    diagnosisHeading: string;
    diagnosisFlaws: UltrafarmaFlaw[];
    findingsLabel: string;
    findingsHeading: string;
    findings: UltrafarmaFinding[];
    benchmarkLabel: string;
    benchmarkHeading: string;
    benchmarkBody: string;
      benchmarkCallout: string;
      benchmarkNote: string;
      benchmarkComparisonLabel: string;
      benchmarkFigmaCta: string;
    beforeAfterLabel: string;
    beforeAfterHeading: string;
    beforeLabel: string;
    afterLabel: string;
    decisionsLabel: string;
    decisionsHeading: string;
    screensCaption: string;
    searchScreenCaption: string;
    cartModalCaption: string;
    decisionsGroup1Title: string;
    decisionsGroup1: UltrafarmaDecision[];
    decisionsGroup2Title: string;
    decisionsGroup2: UltrafarmaDecision[];
    figmaCta: string;
    refineLabel: string;
    refineHeading: string;
    refineBullets: string[];
    refineClosing: string;
    designSystemLabel: string;
    designSystemHeading: string;
      designSystemBullets: string[];
      designSystemNote: string;
      designSystemFoundations: string;
      designSystemFoundationsCaption: string;
      designSystemComponents: string;
      designSystemComponentsCaption: string;
      designSystemFigmaCta: string;
    validationLabel: string;
    validationHeading: string;
    validationIntro: string;
    validationItems: UltrafarmaValidationItem[];
    closingLabel: string;
    closingHeading: string;
    closingBody: string;
    closingHighlight: string;
    previousProject: string;
    nextProject: string;
  };
}

export const translations = {
  en: {
    nav: {
      work: 'Work',
      github: 'GitHub',
      skills: 'Approach',
      certifications: 'Certifications',
      motionContent: 'Content',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      available: 'Available now',
      title: 'UX/UI Designer',
      title2: '& Product Designer',
      subtitle: 'UX/UI Design · Product Design · AI-Augmented Design · Web Design',
      cta: 'View my work',
      stats: [
        { num: '3+', label: 'Years of Experience' },
        { num: 'Bahia', label: 'Brazil' },
        { num: 'Full Process', label: 'From research to code' },
      ],
      scroll: 'Scroll',
    },
    work: {
      label: 'Selected Work',
      title1: 'Case Studies &',
      title2: 'Deliverables',
      filters: ['All', 'UX Design', 'Web Design', 'Landing Pages'],
      viewCase: 'View case',
      previousProject: 'Previous project',
      nextProject: 'Next project',
    },
    githubActivity: {
      label: 'Open Source',
      title: 'Code, Every Day',
      description: "Most of my client work is proprietary and I can't share that code here. My GitHub commit history is the honest proxy: real, day-to-day practice with HTML, CSS and front-end fundamentals.",
      username: '@fabio7jose',
      cta: 'View full profile on GitHub',
      contributionsSuffix: 'contributions in the last year',
    },
    skills: {
      label: 'Approach',
      title: 'My Approach',
      cards: [
        {
          title: 'Human-Centered by Default',
          body: 'Every project starts with a question: what does the user actually need? I apply UX research and design thinking to turn complex problems into intuitive, elegant interfaces.',
        },
        {
          title: 'Design that Lives in the Browser',
          body: "I don't just hand off screens; I understand how they're built. My designs are grounded in front-end reality, making collaboration with developers faster and cleaner.",
        },
        {
          title: 'AI-Augmented Creative',
          body: 'I treat AI as a creative partner, not a replacement. It lets me prototype faster, explore further, and deliver more, without losing the human intention behind every decision.',
        },
      ],
    },
    certifications: {
      label: 'Certifications',
      title: 'Credentials',
      scrollHint: '← Slide to see more →',
    },
    motionContent: {
      label: 'DIGITAL CONTENT',
      heading: 'Agency Experience: Real Brands',
      videosLabel: 'AI Video',
      imagesLabel: 'Static',
    },
    about: {
      label: 'About',
      title: 'About',
      openTo: 'Open to opportunities · Available to relocate',
      bio: [
        "I'm Fábio, a UX/UI Designer with a solid foundation in Web Design. For over three years I've implemented interfaces for brands like Movistar, Claro and Prosegur, serving clients across nine countries in Latin America and Europe.",
        "I've been deepening my work in digital products through projects like Copiloto Financeiro and Lacrei Saúde, from discovery to high-fidelity interfaces. I use AI as targeted support in the process, in research and prototyping, but the final decision is always mine. That includes this portfolio itself: the visual identity and structure were defined by me, with Figma Make for prototyping and Claude Code for development.",
        "I'm based in Brazil and open to opportunities in Brazil and Europe, including Portugal.",
      ],
      downloadCV: 'Download CV',
      education: 'Education',
      location: 'Bahia, Brazil',
      active: 'Active',
      ongoing: 'Ongoing',
      eduItems: [
        { degree: 'Graphic Design', school: 'Anhanguera', period: '2023–2025', status: 'completed' },
      ],
    },
    contact: {
      label: 'Contact',
      title1: "Let's build something",
      title2: 'together.',
      description:
        'Open to new projects and opportunities. Based in Brazil, available to relocate anywhere.',
      infoItems: [
        { label: 'Email', value: 'fabiojpsf.7@gmail.com', isAvailability: false },
        { label: 'Location', value: 'Bahia, Brazil (UTC-3)', isAvailability: false },
        { label: 'Availability', value: 'Open to projects', isAvailability: true },
      ],
      findMeOn: 'Find me on',
      form: {
        namePlaceholder: 'Your name',
        emailPlaceholder: 'your@email.com',
        projectTypePlaceholder: 'Type of project',
        projectTypes: ['UX Design', 'Web Design', 'AI Project', 'Other'],
        messagePlaceholder: 'Tell me about your project...',
        submit: 'Send message',
        sending: 'Sending...',
        successTitle: 'Message sent! ✓',
        successText: "I'll get back to you within 24 hours.",
        errorMessage: 'Something went wrong. Please try again or email me directly.',
        errors: {
          nameRequired: 'Name is required',
          emailRequired: 'Email is required',
          emailInvalid: 'Invalid email address',
          projectTypeRequired: 'Please select a project type',
          messageRequired: 'Message is required',
        },
      },
    },
    footer: {
      copyright: '© 2026 Fábio José · Designed & built with care.',
      backToTop: 'Back to top ↑',
    },
    lacrei: {
      backToWork: '← Back',
      projectTitle: 'Lacrei Saúde',
      projectDescription: 'End-to-end UX and UI design for an inclusive healthcare platform connecting LGBTQIA+ individuals with affirming medical professionals in Brazil.',
      rolePill: 'UX/UI Designer · End-to-end',
      year: '2024',
      methodology: 'Design Thinking',
      tools: ['UX Research', 'UI Design', 'Figma'],
      prototypeLabel: 'Prototype',
      viewFigma: 'View in Figma →',
      problemLabel: 'THE CHALLENGE',
      problemHeading: 'How do I feel safe enough to even start looking?',
      problemBody:
        'LGBTQIA+ individuals frequently delay or avoid healthcare due to past experiences of discrimination. The core design problem was not just how to find a doctor. It was how to make users feel safe enough to begin. Trust and psychological safety had to be embedded in every layer of the interface, from the first screen to the moment a user reaches out to a professional.',
      myRoleTitle: 'My Role',
      roleCardTitle: 'WHAT I DID',
      roleCardItems: ['UX Research', 'Information Architecture', 'Wireframing', 'UI Design', 'Prototyping'],
      withCardTitle: 'CONTEXT',
      withCardValue: 'This case was developed in response to a design challenge proposed during the selection process for a volunteer role at Lacrei Saúde. The brief was provided by the organization and included the goals, visual identity constraints and functional requirements of the platform. It does not represent contracted work or official work carried out for Lacrei Saúde.',
      constraintsCardTitle: 'CONSTRAINTS',
      constraintsCardValue: 'Fixed brief with 4 defined screens. Full focus on user flow and experience decisions. No changes to the existing visual identity.',
      processLabel: 'PROCESS',
      stepLinkPersona: 'View Persona →',
      stepLinkJourney: 'View User Journey →',
      stepLinkWireframes: 'View Low-fi Wireframes →',
      steps: [
        {
          num: '01',
          label: 'EMPATHY & RESEARCH',
          heading: 'Listen before designing',
          body: 'I analysed the main pain points documented about LGBTQIA+ users\' experience accessing healthcare. The key finding: discrimination and lack of culturally competent professionals are the primary barriers, with direct impact on mental health and willingness to seek care.',
        },
        {
          num: '02',
          label: 'DEFINE',
          heading: 'Sharpen the problem',
          body: "The core problem was difficulty finding professionals who feel safe and non-judgmental. Using Lacrei's brief as a starting point, I defined 4 key screens: Login, Professional Search, Professional Profile, and Contact, each requiring careful attention to trust signals.",
        },
        {
          num: '03',
          label: 'IDEATION',
          heading: 'Anchor ideas in user hypotheses',
          body: 'I built a persona and a user journey map in Miro to ground each design decision in hypotheses about user needs, based on secondary research and the provided brief, to be validated through future testing. Multiple directions were explored for each screen, focusing on advanced filters, real-time availability, and microinteractions that build trust progressively.',
        },
        {
          num: '04',
          label: 'PROTOTYPE',
          heading: 'From rough sketches to navigable screens',
          body: "Low-fidelity wireframes in Miro were progressively refined into a fully navigable high-fidelity prototype in Figma, with 5 complete screens built using Lacrei's existing design system and brand visual identity.",
        },
      ],
      solutionLabel: 'KEY DESIGN DECISIONS',
      solutionHeading: "Every screen had to earn the user's trust",
      screens: [
        { label: 'WELCOME SCREEN', annotation: 'Warm, inclusive entry point with clear navigation and immediate access to professional search' },
        { label: 'LOGIN', annotation: 'Social login options alongside email and password to reduce friction. Personalised welcome message sets an inclusive tone from the first interaction' },
        { label: 'HOME (POST-LOGIN)', annotation: 'Personalised view after login surfacing recommended professionals based on location and specialty' },
        { label: 'SEARCH & FILTERS', annotation: 'Star ratings, availability and specialty filters surfaced upfront so users can identify trusted professionals without digging' },
        { label: 'PROFESSIONAL PROFILE', annotation: 'Photo, specialty, services, reviews and real-time availability. Full transparency to address the trust deficit identified in research' },
      ],
      highlightCard1Label: 'PRIMARY PROBLEM',
      highlightCard1Value: 'Difficulty finding professionals who feel safe and non-judgmental',
      highlightCard2Label: 'KEY INSIGHT',
      highlightCard2Value: 'Users needed reassurance at every step, not just in the professional\'s profile',
      learningsHeading: 'What I would carry to the next project',
      learnings: [
        'When designing for vulnerable communities, microcopy choices carry real weight. A single word can make a user feel seen or excluded.',
        'Working within a fixed brief forced sharper prioritisation. With fewer degrees of freedom, every design decision carries more consequence.',
        'Mapping the emotional journey before touching any UI was the highest-impact step. It kept every screen anchored to hypotheses about user needs, based on secondary research and the provided brief, to be validated through future testing, rather than visual preferences.',
      ],
      ctaPrototype: 'View the prototype in Figma',
      previousProject: 'Previous project',
      nextProject: 'Next project',
    },
    guiaMoteis: {
      backToWork: '← Back',
      projectTitle: 'Guia de Motéis GO',
      projectDescription: 'Full redesign of a landing page to drive app downloads. From discovery research to a responsive high-fidelity prototype.',
      rolePill: 'UI Designer · End-to-end',
      year: '2024',
      methodology: 'Crazy 8s',
      tools: ['UX Research', 'Wireframing', 'Figma'],
      problemLabel: 'THE CHALLENGE',
      problemHeading: 'The existing page needed a clearer value proposition',
      problemBody: 'The brief stated that the existing page did not communicate the value proposition clearly enough to encourage app downloads.',
      highlightCard1Label: 'PRIMARY GOAL',
      highlightCard1Value: 'Increase app downloads by clearly communicating the product\'s core value',
      highlightCard2Label: 'KEY CONSTRAINT',
      highlightCard2Value: 'Brand identity and visual language already established. Focus entirely on structure and conversion.',
      myRoleTitle: 'My Role',
      roleCardTitle: 'WHAT I DID',
      roleCardItems: ['UX Research', 'Crazy 8s', 'Wireframing', 'UI Design', 'Responsive Prototype'],
      withCardTitle: 'CONTEXT',
      withCardValue: 'This case was developed in response to the design challenge proposed during the selection process for a UI Designer role at the Guia de Motéis GO brand. The brief provided by the company identified the need to make the value proposition clearer and increase app downloads. It does not represent contracted work or official work carried out for the company.',
      constraintsCardTitle: 'CONSTRAINTS',
      constraintsCardValue: 'Fixed brief with defined goals. Brand identity already established by Guia de Motéis. Full focus on landing page structure, hierarchy, and conversion architecture.',
      processLabel: 'PROCESS',
      steps: [
        {
          num: '01',
          label: 'DISCOVER',
          heading: 'Competitive analysis of the category',
          body: 'The research consisted of a competitive analysis of direct and indirect competitors in the category, identifying conversion patterns, trust barriers and opportunities to differentiate the product communication.',
        },
        {
          num: '02',
          label: 'DEFINE',
          heading: 'Crazy 8s. Eight directions in eight minutes',
          body: 'I used the Crazy 8s technique to rapidly sketch eight distinct layout directions, forcing creative divergence before committing to a direction. This surfaced the key insight: leading with the discount mechanic as the primary hero message, rather than a generic product description.',
        },
        {
          num: '03',
          label: 'DEVELOP',
          heading: 'From low to high fidelity',
          body: 'Starting from low-fidelity wireframes to validate structure and hierarchy, I progressively refined the design into a full high-fidelity prototype, responsive across desktop and mobile, built using the brand\'s existing visual identity.',
        },
        {
          num: '04',
          label: 'DELIVER',
          heading: 'Responsive landing page',
          body: 'The final design is fully responsive, covering both desktop and mobile breakpoints, with a single focused CTA driving users to download the app.',
        },
      ],
      solutionLabel: 'KEY DESIGN DECISIONS',
      solutionHeading: 'Every decision was anchored in the four trust barriers from research',
      screens: [
        { label: 'HERO SECTION', annotation: 'Leading with up to 50% off immediately addresses pricing distrust and anchors attention on value' },
        { label: 'SINGLE CTA', annotation: 'All attention channelled to one primary action: downloading the app. No competing links, no distractions' },
        { label: 'TRUST SIGNALS', annotation: 'Real user reviews surfaced prominently to build credibility and counter the distrust identified in research' },
        { label: 'RESPONSIVE STRUCTURE', annotation: 'Design built for desktop and mobile simultaneously. The conversion architecture works across all breakpoints' },
      ],
      learningsHeading: 'What I would carry to the next project',
      learnings: [
        'Leading with the strongest value proposition, the discount, rather than a product description was the highest-impact structural decision. Users need a reason to stay before they need information.',
        'Crazy 8s forced me to explore directions I would not have considered otherwise. Committing to one direction too early kills better ideas.',
        'Designing for conversion is designing for trust. Every structural decision either builds or erodes the user\'s confidence in the product.',
      ],
      ctaPrototype: 'View prototype in Figma',
      previousProject: 'Previous project',
      nextProject: 'Next project',
    },
    copiloto: {
      backToWork: '← Back',
      scopeBadge: 'Discovery & Product Architecture',
      completedStagesLabel: 'Stages completed',
      completedStages: 'Framing, Research, Definition, Information Architecture, 5 Critical Flows and AI Architecture',
      projectTitle: 'Copiloto Financeiro',
      projectDescription: 'A study project on two fronts: designing a financial copilot for Brazilians with variable or hybrid income, and a hands-on investigation into how to use AI in the design process critically and transparently, without letting it replace human judgement.',
      rolePill: 'UX Research · Product Strategy',
      year: '2025',
      heroQuote: 'Can I make this purchase now?',
      summaryBox: {
        label: 'PROJECT SUMMARY',
        problem: 'Brazilians with variable or hybrid income make impulsive purchase decisions without knowing if they can afford them. Existing apps record the past and ignore future instalments and uncertain income.',
        sample: '4 real qualitative interviews + autoethnography + competitive analysis. Exploratory personas with a declared weight of 20%, used only to stress-test hypotheses.',
        findings: 'The pain is not a lack of information. It is the absence of useful friction at the moment of decision. Instalments are a central dimension, not peripheral. Existing apps are retrospective; the pain is prospective.',
        deliverables: 'Completed stages: Framing, Research (2 layers), Definition (JTBDs, Persona, Anti-features), Information Architecture, 5 Critical Flows and AI Architecture.',
        status: 'Case in progress. Design System and UI, Prototyping and Validation, and Functional MVP are the next stages.',
        aiNote: 'A study project on two fronts: product design and a critical investigation into the use of AI in the design process, with declared provenance at each stage.',
      },
      methodology: 'Two-layer discovery',
      tools: ['UX Research', 'Product Strategy', 'FigJam', 'Claude API'],
      challengeLabel: 'THE CHALLENGE',
      challengeBody1: 'The personal finance apps that exist today were designed for people who already know what to do with their money. They record the past, sort categories and show the closed-month chart. But the pain of the people I researched is not in not knowing. It is in knowing, deciding to spend anyway, and having no useful point of friction between the impulse and the card.',
      challengeBody2: 'This gets worse when income is variable or hybrid: freelancers, salaried workers with recurring side income, gig workers, content creators. On a fixed salary, the month absorbs the month\'s mistake. On variable income, one month\'s mistake can compromise the next, with no safety net. This is the case of the process, not the final product: discovery, definition and architecture are closed; design, prototype and validation come next.',
      highlightCard1Label: 'PROBLEM STATEMENT',
      highlightCard1Value: 'The pain is not a lack of information. It is the absence of useful friction between impulse and decision, worsened by variable or hybrid income.',
      highlightCard2Label: 'THE CENTRAL QUESTION',
      highlightCard2Value: 'Can I make this purchase now? With context, and never a binary yes or no.',
      myRoleTitle: 'My Role',
      roleCardTitle: 'WHAT I DID',
      roleCardItems: ['Autoethnography & Framing', 'Interviews & Competitive Analysis', 'Definition (JTBDs, Persona, Anti-features)', 'Information Architecture & Flows', 'AI Architecture'],
      secondLayerCardTitle: 'AI AS A DESIGN OBJECT',
      secondLayerCardValue: 'A second layer sets this case apart: I treated my own use of AI as an object of design. At each step I documented what was a human decision, what was AI-assisted and what was generated, with explicit criteria for what the AI could and could not claim. Used openly, with its failures documented.',
      stackCardTitle: 'PRODUCT STACK',
      stackCardItems: ['Planned MVP stack'],
      processLabel: 'PROCESS',
      steps: [
        {
          num: '00',
          label: 'FRAMING',
          heading: 'I am part of the audience this product serves',
          body: 'I started with an autoethnography: I belong to the profile the product serves, so my own financial behaviour became the first data, with its bias declared up front.',
          aiUse: 'A UX research agent in critical mode read my autoethnography looking for confirmation bias in my own voice.',
        },
        {
          num: '01',
          label: 'RESEARCH, IN TWO LAYERS',
          heading: 'Real data leads, AI assists, provenance declared',
          body: 'Layer 1 (80% of the decision weight) is empirical evidence: 4 real qualitative interviews plus the autoethnography, and a structured competitive analysis. Layer 2 (20%, declared) is 2 exploratory personas used only to stress-test hypotheses, never as a substitute for real people. Everything synthesised into an affinity diagram with post-its visually marked by origin (real vs. exploratory).',
          aiUse: 'Critical analysis of the transcripts and web research for the competitive analysis; the exploratory personas were generated with documented provenance.',
        },
        {
          num: '02',
          label: 'DEFINITION',
          heading: 'Turn insight into product direction',
          body: 'A layered problem statement, 5 Jobs to be Done prioritised by density of evidence, the main persona (Ana, a composite profile anchored on the densest interviewee), a five-stage product journey and 15 anti-features: what the product explicitly does not do.',
          aiUse: 'Each deliverable went through a UX research agent in critical mode; a lighter model drafted, a stronger model ran the critical check.',
        },
        {
          num: '03',
          label: 'ARCHITECTURE & FLOWS',
          heading: 'Structure the product before drawing any screen',
          body: 'Information architecture (three permanent sections, AI as a contextual layer and not a separate chat), the 5 critical flows and the deliverable I am most proud of: the AI architecture, mapping where an LLM, a heuristic or ML belongs, with explicit justification for each. The organising principle: the AI verbalises, never calculates.',
          aiUse: 'Used to generate architecture variations. All were evaluated against the real data before any decision; the first ADRs closed the stage.',
        },
      ],
      reflectionLabel: 'METHODOLOGICAL REFLECTION',
      reflectionIntro: 'My position: research in two layers, 80% real data and 20% declared AI. My audience is the opposite of the WEIRD profile (Western, Educated, Industrialized, Rich, Democratic) that language models are overtrained on. Trusting the definition of such an audience mostly to an LLM would fabricate a young American disguised as a Brazilian. I operationalised this with Provenance Cards, vocabulary inherited from the real sources, and a discard rule whenever a persona converged too closely with the initial hypothesis. What gives the case density are the moments the method was actually tested.',
      reflectionCards: [
        {
          label: 'The refusal',
          body: 'Struggling to recruit one profile, I proposed that the AI replace a real interview with a synthetic simulation, topped with an external authority argument. The AI refused, anchored in my own methodological grounding, and offered three paths within the method. The finding: the critical stance is bilateral. The method guards against drift in any direction, including mine.',
        },
        {
          label: 'The epistemic error',
          body: 'In one session, the AI operated on an outdated summary page as if it were the corpus. I caught the divergence by cross-checking against the primary source. Instead of sweeping it under the rug, I turned the episode into four rules for mandatory corpus reading. Documenting an error in your own process is rarer, and more useful, than hiding it.',
        },
        {
          label: 'Light draft, strong critique',
          body: 'A cheaper model drafts, a stronger one runs the critical check on every interpretive deliverable. Repeatedly, the check caught structural problems the draft missed, including overclaims of mine that had to be downgraded to the defensible version.',
        },
      ],
      reflectionThroughline: 'Real data leads, AI assists, and the final judgement is always human.',
      decisionsLabel: 'DESIGN DECISIONS',
      decisions: [
        {
          title: 'The AI verbalises, never calculates',
          body: 'Every number and every financial decision is deterministic and reproducible; the LLM only translates ready facts into natural language. Trust, cost and technical risk stay under control.',
          bridge: 'Mapping where AI adds value and where it is overkill, in Stage 3, is what made deterministic calculation non-negotiable. The LLM only steps in once the number already exists.',
        },
        {
          title: 'The product never blocks a purchase',
          body: 'One interviewee asked for blocking, but what people say in an interview is not their behaviour. The product offers context with an exit, not an authoritarian verdict.',
          bridge: 'One of the four interviewees asked for blocking, in words. That JTBD set the limit: context with an exit, never a verdict.',
        },
        {
          title: 'Prospective, not retrospective',
          body: 'The main screen looks at what is committed in the months ahead, not the closed-month pie chart. The past is what the user already has in a spreadsheet, and it does not solve the pain.',
          bridge: 'The pain is a decision in the present, not a record of the past. That is why the main screen never repeats the closed-month chart every competitor already shows.',
        },
        {
          title: 'Instalments are a tool, not a moral failure',
          body: 'The product shows the real cost and the future weight, and respects the choice. No moralising tone, which is the default of Brazilian financial education and disrespects the user.',
        },
        {
          title: 'It speaks with context, stays silent on raw data',
          body: 'Not a raw alert, not a mute app: the product speaks when there is actionable context and stays silent when there is only logged data. No gamification, streaks or reminders.',
        },
        {
          title: 'Bank connection is optional and late',
          body: 'Privacy is an architectural requirement, with explicit consent. The product is useful before asking for access to sensitive data, and builds trust progressively.',
          bridge: 'The privacy barrier surfaced in the interview that anchors Ana. It became the rule of asking for bank access only after the product has already proven its value.',
        },
        {
          title: 'Microcopy in real Brazilian Portuguese',
          body: 'Tone tested against the "translated from English" feel. If it sounds like a translated fintech, it gets rewritten.',
          bridge: 'The vocabulary inherited from the real interviews is what keeps Layer 2 anchored. It is the same discipline that blocks microcopy that reads like a translation.',
        },
      ],
      limitsLabel: 'ASSUMED LIMITS',
      limits: [
        'There is no representative saturation of the Brazilian hybrid-income audience. The sample does not allow statistical generalisation.',
        'Design decisions based on this research are provisional until validation with an expanded base, planned for the prototyping stage.',
        'The exploratory personas map a spectrum of plausible behaviours, they do not validate real behaviours. Weight of 10% each, declared.',
        'One interviewee sits on the edge of the scope: formal variable income, but does not live the mechanism of the pain. Kept as a delimitation contrast, not as support.',
        'The WEIRD bias of the model was mitigated, not eliminated.',
      ],
      nextTitle: 'PRODUCT ROADMAP',
      nextItems: [
        'Stage 4: Design System & UI',
        'Stage 5: Prototyping & Validation',
        'Stage 6: Functional MVP',
      ],
      takesTitle: 'WHAT I ALREADY TAKE',
      takesItems: [
        'The four protection rules were born from a real error and are now method.',
        'Match the model\'s effort to the difficulty of the task, not to its importance.',
        'Provenance Cards as a standard artefact for any use of AI in research.',
      ],
      pageFooterText: 'Discovery and Product Architecture complete. Next: Design System & MVP.',
      artifacts: {
        affinityCaption: 'Affinity diagram, post-its marked by origin: real evidence vs. exploratory personas.',
        affinityAlt: 'Affinity diagram from the FigJam board, with post-its grouped into themes and colour-marked by source, separating real interview evidence from exploratory personas.',
        jtbdsCaption: 'The 5 Jobs to be Done, prioritised by density of evidence.',
        jtbdsAlt: 'FigJam cards describing the five prioritised Jobs to be Done for the product.',
        arqIaCaption: 'AI architecture: where an LLM, a heuristic or ML belongs. The AI verbalises, never calculates.',
        arqIaAlt: 'Diagram of the AI architecture showing the boundary between deterministic calculation and the LLM that only translates ready facts into language.',
        flowsCaption: 'The 5 critical user flows, F01 to F05.',
        flowsAlt: 'Diagram of the five critical user flows of the product, numbered F01 to F05.',
        personaCaption: 'Persona Ana and her Provenance Card: what is data, inference and speculation.',
        personaAlt: 'Persona Ana sheet next to a Provenance Card documenting the origin of each attribute as data, inference or speculation.',
      },
    },
    ultrafarma: {
      backToWork: '← Back',
      projectTitle: 'Ultrafarma Mobile Redesign',
      subtitle: 'Ultrafarma mobile home redesign',
      rolePill: 'UX/UI Design · Heuristic Evaluation · Benchmarking · UI Kit & Tokens · Figma',
      year: '2026',
      heroHeading: "Solving real problems without losing the brand's character.",
      heroBody: 'An independent concept project, not commissioned by or officially affiliated with Ultrafarma. Based on a heuristic evaluation of the real mobile experience, I redesigned the home screen to address search, feedback and hierarchy issues while preserving the brand identity.',
      heroFigmaCta: 'View the complete project in Figma',
      whyLabel: '01 · WHY ULTRAFARMA',
      whyBody: 'I compared the mobile experience of Pague Menos, Drogaria SP and Drogasil. The category follows a similar structure across competitors, but Ultrafarma concentrated functional flaws and hierarchy problems with the highest impact on the user journey.',
      whyCalloutValue: '2 functional flaws + 4 hierarchy findings',
      whyCalloutCaption: 'A case with observable problems, a clear scope and real room for improvement.',
      methodLabel: '02 · METHOD',
      methodIntro: 'Heuristic evaluation in a real context. I went through the home screen on my phone, executing real tasks and exploring the main states and interactions available.',
      methodTasks: [
        { num: '01', title: 'Search for a product', body: 'Search, autocomplete and scrolling.' },
        { num: '02', title: 'Add something from the home screen to the cart', body: 'Action, feedback and correspondence.' },
        { num: '03', title: 'Explore the home screen', body: 'Banners, categories, cards and hierarchy.' },
      ],
      diagnosisLabel: '03 · FUNCTIONAL DIAGNOSIS',
      diagnosisHeading: 'Two flaws of function, not of aesthetics.',
      diagnosisFlaws: [
        {
          number: '01',
          title: 'Search closes on scroll.',
          body: 'The dropdown disappears when the user tries to scroll down to see the options.',
          tag: 'User control · mobile context.',
        },
        {
          number: '02',
          title: 'Cart with no feedback.',
          body: 'When adding a product, the response is limited to updating the counters, with no clear confirmation. The "Buy" button also leads to the item\'s page instead of executing the action its label suggests.',
          tag: 'State visibility · labeling.',
        },
      ],
      findingsLabel: '04 · OTHER FINDINGS',
      findingsHeading: 'Hierarchy, recognition and consistency.',
      findings: [
        { num: '1', title: 'Carousel with no affordance.', body: 'The horizontal gesture is not communicated.', tag: 'Mobile · recognition.' },
        { num: '2', title: 'Long scroll with no hierarchy.', body: 'Cards and banners with no clear priority.', tag: "Mobile · Hick's law." },
        { num: '3', title: 'Prices competing with each other.', body: 'List price, sale price, Pix price and unit price all fight for attention.', tag: 'Visual hierarchy.' },
        { num: '4', title: 'Inconsistent grid.', body: 'Blocks start on different lines.', tag: 'Consistency · execution.' },
      ],
      benchmarkLabel: '05 · BENCHMARKING',
      benchmarkHeading: 'Similar structure, different execution.',
      benchmarkBody: 'Pague Menos, Drogaria SP and Drogasil use similar patterns, but solve search, feedback and hierarchy better.',
        benchmarkCallout: 'The benchmarking shows the problem is not the category, it is the quality of execution.',
        benchmarkNote: 'Note: consolidated patterns were preserved; intentional deviations are justified.',
        benchmarkComparisonLabel: 'Ultrafarma × competitors',
        benchmarkFigmaCta: 'View the complete benchmarking in Figma',
      beforeAfterLabel: '06 · BEFORE AND AFTER',
      beforeAfterHeading: 'A home screen with priority.',
      beforeLabel: 'THE BEFORE · ORIGINAL HOME',
      afterLabel: 'THE AFTER · REDESIGN',
      decisionsLabel: '07 · DESIGN DECISIONS',
      decisionsHeading: 'Problem to decision: specific answers.',
      screensCaption: 'The redesigned screens',
      searchScreenCaption: 'Search, full screen with free scroll',
      cartModalCaption: 'Cart confirmation, with item and subtotal',
      decisionsGroup1Title: 'Specific responses.',
      decisionsGroup1: [
        { title: 'Search', body: 'Full screen with free scroll.', tag: 'User control.' },
        { title: 'Cart', body: 'Confirmation, item and subtotal shown.', tag: 'Immediate feedback.' },
        { title: 'Carousel', body: 'Peek of the next item.', tag: 'Recognition.' },
      ],
      decisionsGroup2Title: 'Organising to reduce effort.',
      decisionsGroup2: [
        { title: 'Wall of sections', body: 'Named and separated sections.', tag: 'Mobile hierarchy.' },
        { title: 'Price', body: 'The main price is strong, secondary ones are discreet.', tag: 'Typographic hierarchy.' },
        { title: 'Grid', body: '4 columns, 16px margin, 8px gutter.', tag: 'Consistency.' },
      ],
      figmaCta: 'View the redesigned screens in Figma',
      refineLabel: '08 · REFINE WITHOUT REBRANDING',
      refineHeading: 'Visual changes serve clarity and hierarchy, not a change of identity.',
      refineBullets: [
        'Cleaner header, with search taking the lead',
        'Consistent spacing, more breathing room',
        'Clearer typographic hierarchy',
        'Original colors, logo and font preserved',
      ],
      refineClosing: 'Identity preserved. Execution improved.',
      designSystemLabel: '09 · DESIGN SYSTEM',
      designSystemHeading: 'Tokens and components ensure consistency.',
      designSystemBullets: [
        'Colors and typography extracted from the real site',
        'Color and spacing tokens',
        'Reusable card, button, input, chip, header and footer',
        '4-column mobile grid',
        'Named layers and organised pages',
      ],
        designSystemNote: 'AI accelerated the style guide by extracting colors, typography and tokens from Ultrafarma’s real interface. Curation, decisions and application in the redesign were led by me.',
        designSystemFoundations: 'Foundations',
        designSystemFoundationsCaption: 'Color, typography, spacing and mobile grid.',
        designSystemComponents: 'Reusable components',
        designSystemComponentsCaption: 'A consistent library built for real interface scenarios.',
        designSystemFigmaCta: 'Explore the design system in Figma',
      validationLabel: '10 · VALIDATION AND LIMITS',
      validationHeading: 'What was validated and what is still missing.',
      validationIntro: 'This project produces well-founded hypotheses, not results proven through user testing.',
      validationItems: [
        { label: 'Validated', body: 'Heuristic evaluation and competitive comparison.', tag: 'Observable evidence.' },
        { label: 'Limitation', body: 'No formal user testing.', tag: 'I do not claim measured impact.' },
      ],
      closingLabel: '11 · CLOSING',
      closingHeading: 'I did not reinvent Ultrafarma.',
      closingBody: 'I kept the identity and what already worked. I refined what was broken, with criteria and evidence.',
      closingHighlight: 'Usability redesign means solving a real problem, not changing the look out of personal taste.',
      previousProject: 'Previous project',
      nextProject: 'Next project',
    },
  },

  pt: {
    nav: {
      work: 'Trabalhos',
      github: 'GitHub',
      skills: 'Abordagem',
      certifications: 'Certificações',
      motionContent: 'Conteúdo',
      about: 'Sobre',
      contact: 'Contato',
    },
    hero: {
      available: 'Disponível agora',
      title: 'UX/UI Designer',
      title2: '& Product Designer',
      subtitle: 'UX/UI Design · Product Design · IA aplicada ao Design · Web Design',
      cta: 'Ver meus trabalhos',
      stats: [
        { num: '3+', label: 'Anos de Experiência' },
        { num: 'Bahia', label: 'Brasil' },
        { num: 'Processo Completo', label: 'Da pesquisa ao código' },
      ],
      scroll: 'Rolar',
    },
    work: {
      label: 'Trabalhos Selecionados',
      title1: 'Cases e',
      title2: 'Entregáveis',
      filters: ['Todos', 'UX Design', 'Web Design', 'Landing Pages'],
      viewCase: 'Ver case',
      previousProject: 'Projeto anterior',
      nextProject: 'Próximo projeto',
    },
    githubActivity: {
      label: 'Código Aberto',
      title: 'Código no Dia a Dia',
      description: 'Boa parte do meu trabalho é proprietário e não posso compartilhar o código dos meus clientes aqui. Meu histórico de commits no GitHub é a prova honesta: prática real, do dia a dia, com HTML, CSS e fundamentos de front-end.',
      username: '@fabio7jose',
      cta: 'Ver perfil completo no GitHub',
      contributionsSuffix: 'contribuições no último ano',
    },
    skills: {
      label: 'Abordagem',
      title: 'Minha Abordagem',
      cards: [
        {
          title: 'Humano por Padrão',
          body: 'Todo projeto começa com uma pergunta: o que o usuário realmente precisa? Aplico pesquisa de UX e design thinking para transformar problemas complexos em interfaces intuitivas e elegantes.',
        },
        {
          title: 'Design que Vive no Browser',
          body: 'Não me limito a entregar telas; entendo como elas são construídas. Meus designs são fundamentados na realidade do front-end, tornando a colaboração com desenvolvedores mais ágil e precisa.',
        },
        {
          title: 'Criativo Aumentado por IA',
          body: 'Trato a IA como parceira criativa, não como substituta. Ela me permite prototipar mais rápido, explorar mais longe e entregar mais, sem perder a intenção humana por trás de cada decisão.',
        },
      ],
    },
    certifications: {
      label: 'Certificações',
      title: 'Credenciais',
      scrollHint: '← Deslize para ver mais →',
    },
    motionContent: {
      label: 'CONTEÚDO DIGITAL',
      heading: 'Experiência em Agência: Marcas Reais',
      videosLabel: 'Vídeo IA',
      imagesLabel: 'Estático',
    },
    about: {
      label: 'Sobre',
      title: 'Sobre',
      openTo: 'Aberto a oportunidades · Disponível para realocação',
      bio: [
        'Sou Fábio, UX/UI Designer com base sólida em Web Design. Há mais de três anos implemento interfaces para marcas como Movistar, Claro e Prosegur, atendendo clientes em nove países da América Latina e Europa.',
        'Tenho aprofundado minha atuação em produtos digitais em projetos como o Copiloto Financeiro e o Lacrei Saúde, do discovery à interface de alta fidelidade. Uso IA como apoio pontual no processo, na pesquisa e na prototipação, mas a decisão final é sempre minha. Isso inclui este portfólio: a identidade visual e a estrutura foram definidas por mim, com Figma Make para prototipagem e Claude Code para o desenvolvimento.',
        'Estou baseado no Brasil e aberto a oportunidades no Brasil e na Europa, incluindo Portugal.',
      ],
      downloadCV: 'Baixar CV',
      education: 'Formação',
      location: 'Bahia, Brasil',
      active: 'Ativo',
      ongoing: 'Em andamento',
      eduItems: [
        { degree: 'Design Gráfico', school: 'Anhanguera', period: '2023–2025', status: 'completed' },
      ],
    },
    contact: {
      label: 'Contato',
      title1: 'Vamos construir algo',
      title2: 'juntos.',
      description:
        'Aberto a novos projetos e oportunidades. Baseado no Brasil, disponível para realocação.',
      infoItems: [
        { label: 'E-mail', value: 'fabiojpsf.7@gmail.com', isAvailability: false },
        { label: 'Localização', value: 'Bahia, Brasil (UTC-3)', isAvailability: false },
        { label: 'Disponibilidade', value: 'Aberto a projetos', isAvailability: true },
      ],
      findMeOn: 'Me encontre em',
      form: {
        namePlaceholder: 'Seu nome',
        emailPlaceholder: 'seu@email.com',
        projectTypePlaceholder: 'Tipo de projeto',
        projectTypes: ['UX Design', 'Web Design', 'Projeto IA', 'Outro'],
        messagePlaceholder: 'Me conte sobre seu projeto...',
        submit: 'Enviar mensagem',
        sending: 'Enviando...',
        successTitle: 'Mensagem enviada! ✓',
        successText: 'Retornarei em até 24 horas.',
        errorMessage: 'Algo deu errado. Por favor tente novamente ou envie um email diretamente.',
        errors: {
          nameRequired: 'Nome é obrigatório',
          emailRequired: 'E-mail é obrigatório',
          emailInvalid: 'E-mail inválido',
          projectTypeRequired: 'Selecione um tipo de projeto',
          messageRequired: 'Mensagem é obrigatória',
        },
      },
    },
    footer: {
      copyright: '© 2026 Fábio José · Desenhado & construído com cuidado.',
      backToTop: 'Voltar ao topo ↑',
    },
    lacrei: {
      backToWork: '← Voltar',
      projectTitle: 'Lacrei Saúde',
      projectDescription: 'Design de UX e UI completo para uma plataforma de saúde inclusiva que conecta pessoas LGBTQIA+ a profissionais de saúde acolhedores no Brasil.',
      rolePill: 'UX/UI Designer · End-to-end',
      year: '2024',
      methodology: 'Design Thinking',
      tools: ['UX Research', 'UI Design', 'Figma'],
      prototypeLabel: 'Protótipo',
      viewFigma: 'Ver no Figma →',
      problemLabel: 'O DESAFIO',
      problemHeading: 'Como me sentir seguro o suficiente para começar a buscar?',
      problemBody:
        'Pessoas LGBTQIA+ frequentemente adiam ou evitam cuidados de saúde por experiências passadas de discriminação. O problema de design não era apenas como encontrar um médico. Era como fazer o usuário se sentir seguro o suficiente para dar o primeiro passo. Confiança e segurança psicológica precisavam estar presentes em cada camada da interface, da primeira tela ao momento em que o usuário entra em contato com um profissional.',
      myRoleTitle: 'Meu Papel',
      roleCardTitle: 'O que eu fiz',
      roleCardItems: ['Pesquisa de UX', 'Arquitetura da Informação', 'Wireframing', 'UI Design', 'Prototipagem'],
      withCardTitle: 'CONTEXTO',
      withCardValue: 'Este case foi desenvolvido como resposta a um desafio de design proposto no processo seletivo para uma vaga de trabalho voluntário na Lacrei Saúde. O briefing foi fornecido pela organização e incluía os objetivos, as restrições de identidade visual e os requisitos funcionais da plataforma. Não representa um trabalho contratado ou realizado oficialmente para a Lacrei Saúde.',
      constraintsCardTitle: 'Restrições',
      constraintsCardValue: 'Brief fixo com 4 telas definidas. Foco total no fluxo do usuário e nas decisões de experiência. Sem alterações na identidade visual existente.',
      processLabel: 'PROCESSO',
      stepLinkPersona: 'Ver Persona →',
      stepLinkJourney: 'Ver Jornada →',
      stepLinkWireframes: 'Ver Wireframes →',
      steps: [
        {
          num: '01',
          label: 'EMPATIA & PESQUISA',
          heading: 'Ouvir antes de projetar',
          body: 'Analisei os principais pontos de dor documentados sobre a experiência de utilizadores LGBTQIA+ no acesso à saúde. A descoberta central: discriminação e falta de profissionais preparados são as principais barreiras, com impacto direto na saúde mental e na disposição de buscar atendimento.',
        },
        {
          num: '02',
          label: 'DEFINIÇÃO',
          heading: 'Afiar o problema',
          body: 'O problema central era a dificuldade em encontrar profissionais que transmitissem segurança e acolhimento. Usando o briefing da Lacrei como ponto de partida, defini 4 telas-chave: Login, Busca de Profissionais, Perfil do Profissional e Contato, cada uma exigindo atenção especial aos sinais de confiança.',
        },
        {
          num: '03',
          label: 'IDEAÇÃO',
          heading: 'Ancorar ideias em hipóteses de utilizadores',
          body: 'Criei uma persona e um mapa de jornada no Miro para fundamentar cada decisão de design em hipóteses de necessidades dos utilizadores, baseadas em pesquisa secundária e no briefing fornecido, a validar com testes futuros. Múltiplas direções foram exploradas para cada tela, com foco em filtros avançados, disponibilidade em tempo real e microinterações que constroem confiança progressivamente.',
        },
        {
          num: '04',
          label: 'PROTOTIPAGEM',
          heading: 'De esboços ao protótipo navegável',
          body: 'Os wireframes de baixa fidelidade no Miro foram refinados em um protótipo de alta fidelidade totalmente navegável no Figma, com 5 telas completas construídas usando o design system e a identidade visual já estabelecidos pela Lacrei.',
        },
      ],
      solutionLabel: 'DECISÕES DE DESIGN',
      solutionHeading: 'Cada tela precisava conquistar a confiança do usuário',
      screens: [
        { label: 'TELA DE INÍCIO', annotation: 'Entrada acolhedora e inclusiva com navegação clara e acesso imediato à busca de profissionais' },
        { label: 'LOGIN', annotation: 'Login social junto com email e senha para reduzir a fricção. Mensagem de boas-vindas personalizada define um tom inclusivo desde a primeira interação' },
        { label: 'HOME PÓS-LOGIN', annotation: 'Visão personalizada após o acesso, com profissionais recomendados por localização e especialidade' },
        { label: 'BUSCA E FILTROS', annotation: 'Avaliações, disponibilidade e filtros por especialidade visíveis desde o início para que o usuário encontre profissionais de confiança sem precisar procurar' },
        { label: 'PERFIL DO PROFISSIONAL', annotation: 'Foto, especialidade, serviços, avaliações e disponibilidade em tempo real. Transparência total para responder ao déficit de confiança identificado na pesquisa' },
      ],
      highlightCard1Label: 'PROBLEMA PRINCIPAL',
      highlightCard1Value: 'Dificuldade em encontrar profissionais que transmitam segurança e acolhimento',
      highlightCard2Label: 'INSIGHT CHAVE',
      highlightCard2Value: 'Usuários precisavam de segurança em cada etapa, não apenas no perfil do profissional',
      learningsHeading: 'O que eu levaria para o próximo projeto',
      learnings: [
        'Ao projetar para comunidades vulneráveis, cada escolha de microtexto tem peso real. Uma única palavra pode fazer o usuário se sentir visto ou excluído.',
        'Trabalhar dentro de um briefing fixo exigiu uma priorização mais precisa. Com menos graus de liberdade, cada decisão de design carrega mais consequência.',
        'Mapear a jornada emocional antes de tocar na UI foi o passo de maior impacto. Manteve cada tela ancorada em hipóteses de necessidades dos utilizadores, baseadas em pesquisa secundária e no briefing fornecido, a validar com testes futuros, não nas preferências visuais.',
      ],
      ctaPrototype: 'Ver o protótipo no Figma',
      previousProject: 'Projeto anterior',
      nextProject: 'Próximo projeto',
    },
    guiaMoteis: {
      backToWork: '← Voltar',
      projectTitle: 'Guia de Motéis GO',
      projectDescription: 'Redesign completo de uma landing page para aumentar downloads do app. Da pesquisa de descoberta ao protótipo de alta fidelidade responsivo.',
      rolePill: 'UI Designer · End-to-end',
      year: '2024',
      methodology: 'Crazy 8s',
      tools: ['UX Research', 'Wireframing', 'Figma'],
      problemLabel: 'O DESAFIO',
      problemHeading: 'A página existente precisava comunicar melhor a proposta de valor',
      problemBody: 'O briefing apontava que a página existente não comunicava a proposta de valor com clareza suficiente para incentivar o download do aplicativo.',
      highlightCard1Label: 'OBJETIVO PRINCIPAL',
      highlightCard1Value: 'Aumentar downloads do app comunicando claramente o valor central do produto',
      highlightCard2Label: 'RESTRIÇÃO CHAVE',
      highlightCard2Value: 'Identidade visual e linguagem da marca já estabelecidas. Foco total na estrutura e conversão.',
      myRoleTitle: 'Meu Papel',
      roleCardTitle: 'O QUE EU FIZ',
      roleCardItems: ['Pesquisa de UX', 'Crazy 8s', 'Wireframing', 'UI Design', 'Protótipo Responsivo'],
      withCardTitle: 'CONTEXTO',
      withCardValue: 'Este case foi desenvolvido como resposta ao desafio de design proposto no processo seletivo para uma vaga de UI Designer na marca Guia de Motéis GO. O briefing fornecido pela empresa identificava a necessidade de tornar a proposta de valor mais clara e aumentar os downloads do aplicativo. Não representa um trabalho contratado ou realizado oficialmente para a empresa.',
      constraintsCardTitle: 'RESTRIÇÕES',
      constraintsCardValue: 'Brief fixo com objetivos definidos. Identidade visual já estabelecida pelo Guia de Motéis. Foco total na estrutura, hierarquia e arquitetura de conversão da landing page.',
      processLabel: 'PROCESSO',
      steps: [
        {
          num: '01',
          label: 'DESCOBRIR',
          heading: 'Análise competitiva da categoria',
          body: 'A pesquisa consistiu numa análise competitiva de concorrentes diretos e indiretos da categoria, identificando padrões de conversão, barreiras de confiança e oportunidades de diferenciação na comunicação do produto.',
        },
        {
          num: '02',
          label: 'DEFINIR',
          heading: 'Crazy 8s. Oito direções em oito minutos',
          body: 'Usei a técnica Crazy 8s para esboçar rapidamente oito direções de layout distintas, forçando divergência criativa antes de definir uma direção. Isso revelou o insight central: destacar o desconto como mensagem principal do hero, em vez de uma descrição genérica do produto.',
        },
        {
          num: '03',
          label: 'DESENVOLVER',
          heading: 'Do baixo ao alto nível de fidelidade',
          body: 'Partindo de wireframes de baixa fidelidade para validar estrutura e hierarquia, refinei progressivamente o design até um protótipo completo de alta fidelidade, responsivo para desktop e mobile, usando a identidade visual existente da marca.',
        },
        {
          num: '04',
          label: 'ENTREGAR',
          heading: 'Landing page responsiva',
          body: 'O design final é totalmente responsivo, cobrindo breakpoints de desktop e mobile, com um CTA único e focado direcionando os usuários a baixar o app.',
        },
      ],
      solutionLabel: 'DECISÕES DE DESIGN',
      solutionHeading: 'Cada decisão foi ancorada nas quatro barreiras de confiança identificadas na pesquisa',
      screens: [
        { label: 'SEÇÃO HERO', annotation: 'Destacar até 50% de desconto aborda imediatamente a desconfiança de preço e ancora a atenção no valor' },
        { label: 'CTA ÚNICO', annotation: 'Toda atenção direcionada para uma ação principal: baixar o app. Sem links concorrentes, sem distrações' },
        { label: 'SINAIS DE CONFIANÇA', annotation: 'Avaliações reais de usuários em destaque para construir credibilidade e combater a desconfiança identificada na pesquisa' },
        { label: 'ESTRUTURA RESPONSIVA', annotation: 'Design desenvolvido para desktop e mobile simultaneamente. A arquitetura de conversão funciona em todos os breakpoints' },
      ],
      learningsHeading: 'O que eu levaria para o próximo projeto',
      learnings: [
        'Liderar com a proposta de valor mais forte, o desconto, em vez de uma descrição do produto foi a decisão estrutural de maior impacto. Os usuários precisam de um motivo para ficar antes de precisar de informação.',
        'O Crazy 8s me forçou a explorar direções que eu não teria considerado de outra forma. Comprometer-se com uma direção cedo demais mata ideias melhores.',
        'Projetar para conversão é projetar para confiança. Cada decisão estrutural constrói ou corrói a confiança do usuário no produto.',
      ],
      ctaPrototype: 'Ver protótipo no Figma',
      previousProject: 'Projeto anterior',
      nextProject: 'Próximo projeto',
    },
    copiloto: {
      backToWork: '← Voltar',
      scopeBadge: 'Discovery & Arquitetura de Produto',
      completedStagesLabel: 'Etapas concluídas',
      completedStages: 'Framing, Pesquisa, Definição, Arquitetura da Informação, 5 Fluxos Críticos e Arquitetura de IA',
      projectTitle: 'Copiloto Financeiro',
      projectDescription: 'Um projecto de estudo em duas frentes: o design de um copiloto financeiro para brasileiros com renda variável ou híbrida, e uma investigação prática sobre como usar IA no processo de design de forma crítica e declarada, sem deixar que ela substitua o julgamento humano.',
      rolePill: 'UX Research · Product Strategy',
      year: '2025',
      heroQuote: 'Posso fazer essa compra agora?',
      summaryBox: {
        label: 'RESUMO DO PROJECTO',
        problem: 'Brasileiros com renda variável ou híbrida tomam decisões de compra no impulso, sem saber se podem. Os apps actuais registam o passado e ignoram parcelas futuras e renda incerta.',
        sample: '4 entrevistas qualitativas reais + autoetnografia + análise competitiva. Personas exploratórias com peso declarado de 20%, usadas apenas para stress-test de hipóteses.',
        findings: 'A dor não é falta de informação. É ausência de fricção útil no momento da decisão. Parcelamento é dimensão central, não periférica. Apps actuais são retrospectivos; a dor é prospectiva.',
        deliverables: 'Etapas concluídas: Framing, Research (2 camadas), Definição (JTBDs, Persona, Anti-features), Arquitetura de Informação, 5 Fluxos críticos e Arquitetura de IA.',
        status: 'Case em andamento. Design System e UI, Prototipagem e Validação e MVP Funcional são as etapas seguintes.',
        aiNote: 'Projecto de estudo em duas frentes: design de produto e investigação crítica sobre o uso de IA no processo de design, com procedência declarada em cada etapa.',
      },
      methodology: 'Discovery em duas camadas',
      tools: ['UX Research', 'Product Strategy', 'FigJam', 'Claude API'],
      challengeLabel: 'O DESAFIO',
      challengeBody1: 'Os apps de finanças pessoais que existem hoje foram desenhados para quem já sabe o que faz com o próprio dinheiro. Eles registram o passado, classificam categorias e mostram o gráfico do mês fechado. Mas a dor das pessoas que pesquisei não está em não saber. Está em saber, decidir gastar mesmo assim, e não ter nenhum ponto de fricção útil entre o impulso e o cartão.',
      challengeBody2: 'Isso fica mais grave quando a renda é variável ou híbrida: freelancer, CLT com freela recorrente, autônomo de aplicativo, criador de conteúdo. Em salário fixo, o mês cobre o erro do mês. Em renda variável, o erro do mês pode comprometer o mês seguinte, sem rede para absorver. Este é o case do processo, não do produto final: descoberta, definição e arquitetura estão fechadas; design, protótipo e validação vêm a seguir.',
      highlightCard1Label: 'PROBLEM STATEMENT',
      highlightCard1Value: 'A dor não é falta de informação. É a ausência de fricção útil entre impulso e decisão, agravada por renda variável ou híbrida.',
      highlightCard2Label: 'A PERGUNTA CENTRAL',
      highlightCard2Value: 'Posso fazer essa compra agora? Com contexto, e nunca um sim ou não binário.',
      myRoleTitle: 'Meu Papel',
      roleCardTitle: 'O QUE EU FIZ',
      roleCardItems: ['Autoetnografia & Framing', 'Entrevistas & Análise Competitiva', 'Definição (JTBDs, Persona, Anti-features)', 'Arquitetura de Informação & Fluxos', 'Arquitetura de IA'],
      secondLayerCardTitle: 'IA COMO OBJETO DE DESIGN',
      secondLayerCardValue: 'Uma segunda camada diferencia este case: tratei o próprio uso de IA como objeto de design. Em cada etapa documentei o que foi decisão humana, o que foi assistido por IA e o que foi gerado, com critério explícito sobre o que a IA podia e não podia afirmar. Usei de forma declarada, e documentei onde ela falhou.',
      stackCardTitle: 'STACK DO PRODUTO',
      stackCardItems: ['Stack prevista para o MVP'],
      processLabel: 'PROCESSO',
      steps: [
        {
          num: '00',
          label: 'FRAMING',
          heading: 'Eu sou do perfil que o produto atende',
          body: 'Comecei por uma autoetnografia: eu sou do perfil que o produto atende, então meu próprio comportamento financeiro virou primeiro dado, com o viés disso declarado de saída.',
          aiUse: 'Um agente de UX Research em modo crítico leu minha autoetnografia procurando viés de confirmação na minha própria voz.',
        },
        {
          num: '01',
          label: 'RESEARCH, EM DUAS CAMADAS',
          heading: 'Dado real protagoniza, IA assiste, procedência declarada',
          body: 'A Camada 1 (80% do peso decisório) é evidência empírica: 4 entrevistas qualitativas reais mais a autoetnografia, e uma análise competitiva estruturada. A Camada 2 (20%, declarado) são 2 personas exploratórias usadas só para stress-test de hipóteses, nunca como substituto de gente real. Tudo sintetizado num affinity diagram com os post-its marcados visualmente por origem (real vs. exploratório).',
          aiUse: 'Análise crítica das transcrições e pesquisa web na análise competitiva; as personas exploratórias foram geradas com procedência documentada.',
        },
        {
          num: '02',
          label: 'DEFINIÇÃO',
          heading: 'Transformar insight em direção de produto',
          body: 'Um problem statement em camadas, 5 Jobs to be Done priorizados por densidade de evidência, a persona principal (Ana, um perfil composto ancorado na entrevistada mais densa), uma jornada de produto em cinco estágios e 15 anti-features: o que o produto explicitamente não faz.',
          aiUse: 'Cada entregável passou por um agente de UX Research em modo crítico; um modelo mais leve rascunhava e um mais forte fazia o check crítico.',
        },
        {
          num: '03',
          label: 'ARQUITETURA & FLUXOS',
          heading: 'Estruturar o produto antes de desenhar qualquer tela',
          body: 'A arquitetura de informação (três seções permanentes, IA como camada contextual e não um chat à parte), os 5 fluxos críticos e o entregável que mais me orgulha: a arquitetura de IA, mapeando onde entra LLM, onde entra heurística e onde entra ML, com justificativa explícita de cada escolha. O princípio que organiza tudo: a IA verbaliza, nunca calcula.',
          aiUse: 'Usada para gerar variações de arquitetura. Todas avaliadas contra os dados reais antes de qualquer decisão; os primeiros ADRs fecharam a etapa.',
        },
      ],
      reflectionLabel: 'REFLEXÃO METODOLÓGICA',
      reflectionIntro: 'A posição que adotei: pesquisa em duas camadas, 80% dado real e 20% IA declarada. Meu público é o oposto do perfil WEIRD (Western, Educated, Industrialized, Rich, Democratic) em que os modelos de linguagem são supertreinados. Confiar a definição de um público assim majoritariamente a um LLM seria fabricar um jovem americano disfarçado de brasileiro. Operacionalizei com Provenance Cards, vocabulário herdado das fontes reais e uma regra de descarte sempre que uma persona convergia demais com a hipótese inicial. O que dá densidade ao case são os momentos em que o método foi testado de verdade.',
      reflectionCards: [
        {
          label: 'A recusa',
          body: 'Com dificuldade de recrutar um perfil, propus à IA substituir uma entrevista real por uma simulação sintética, com um argumento de autoridade externo por cima. A IA recusou, ancorada na minha própria fundamentação metodológica, e ofereceu três caminhos dentro do método. A descoberta: a postura crítica é bilateral. O método protege contra desvio em qualquer direção, inclusive a minha.',
        },
        {
          label: 'O erro epistêmico',
          body: 'Em uma sessão, a IA operou sobre uma página-resumo desatualizada como se fosse o corpus. Peguei a divergência ao cruzar com a fonte primária. Em vez de varrer pra baixo do tapete, transformei o episódio em quatro regras de leitura obrigatória de corpus. Documentar um erro do próprio processo é mais raro, e mais útil, do que escondê-lo.',
        },
        {
          label: 'Rascunho leve, crítica forte',
          body: 'Um modelo mais barato rascunha, um mais forte faz o check crítico de cada entregável interpretativo. Repetidamente o check pegou problemas estruturais que o rascunho não via, inclusive overclaims meus que precisaram ser rebaixados à versão defensável.',
        },
      ],
      reflectionThroughline: 'Dado real protagoniza, IA assiste, e o julgamento final é sempre humano.',
      decisionsLabel: 'DECISÕES DE DESIGN',
      decisions: [
        {
          title: 'A IA verbaliza, nunca calcula',
          body: 'Todo número e toda decisão financeira são determinísticos e reproduzíveis; o LLM só traduz fatos prontos em linguagem natural. Confiança, custo e risco técnico sob controle.',
          bridge: 'Mapear onde IA agrega e onde é overkill, na Etapa 3, foi o que tornou o cálculo determinístico não negociável. O LLM entra só depois que o número já existe.',
        },
        {
          title: 'O produto nunca bloqueia a compra',
          body: 'Um entrevistado pediu bloqueio em fala, mas fala em entrevista não é comportamento. O produto oferece contexto com saída, não veredito autoritário.',
          bridge: 'Um dos quatro entrevistados pediu bloqueio em fala. Foi esse JTBD que definiu o limite: contexto com saída, nunca veredito.',
        },
        {
          title: 'Prospectivo, não retrospectivo',
          body: 'A tela principal olha para o que está comprometido nos meses à frente, não para o gráfico de pizza do mês fechado. O passado é o que o usuário já tem na planilha e não resolve a dor.',
          bridge: 'A dor é decisão no presente, não registro do passado. Por isso a tela principal nunca repete o gráfico de mês fechado que todo concorrente já faz.',
        },
        {
          title: 'Parcelamento é instrumento, não falha moral',
          body: 'O produto informa o custo real e o peso futuro, e respeita a escolha. Sem tom moralizante, que é o default da educação financeira brasileira e desrespeita a inteligência do usuário.',
        },
        {
          title: 'Fala com contexto, silêncio no dado cru',
          body: 'Não é alerta cru nem app mudo: o produto fala quando há contexto acionável e silencia quando só há dado registrado. Sem gamificação, streaks ou lembretes.',
        },
        {
          title: 'Conexão bancária é opcional e tardia',
          body: 'Privacidade como requisito de arquitetura, com consentimento explícito. O produto é útil antes de pedir acesso a dados sensíveis, e constrói confiança progressivamente.',
          bridge: 'A barreira de privacidade apareceu na entrevista que ancora a Ana. Virou a regra de pedir acesso bancário só depois que o produto já provou valor.',
        },
        {
          title: 'Microcopy em português brasileiro de verdade',
          body: 'Tom testado contra a cara de tradução do inglês. Se soa como fintech traduzida, é refeito.',
          bridge: 'O vocabulário herdado das entrevistas reais é o que mantém a Camada 2 ancorada. É a mesma disciplina que barra microcopy com cara de tradução.',
        },
      ],
      limitsLabel: 'LIMITES ASSUMIDOS',
      limits: [
        'Não há saturação representativa do público brasileiro de renda híbrida. A amostra não permite generalização estatística.',
        'As decisões de design baseadas nesta pesquisa são provisórias até a validação com base expandida, prevista para a etapa de prototipagem.',
        'As personas exploratórias mapeiam um espectro de comportamentos plausíveis, não validam comportamentos reais. Peso de 10% cada, declarado.',
        'Um dos entrevistados ficou na fronteira do recorte: tem renda variável formal, mas não vive o mecanismo da dor. Mantido como contraste de delimitação, não como sustentação.',
        'O viés WEIRD do modelo foi mitigado, não eliminado.',
      ],
      nextTitle: 'PRÓXIMAS ETAPAS DO PRODUTO',
      nextItems: [
        'Etapa 4: Design System & UI',
        'Etapa 5: Prototipagem & Validação',
        'Etapa 6: MVP Funcional',
      ],
      takesTitle: 'O QUE JÁ LEVO',
      takesItems: [
        'As quatro regras de proteção nasceram de um erro real e hoje são método.',
        'Casar o esforço do modelo com a dificuldade da tarefa, não com a importância dela.',
        'Provenance Cards como artefato padrão para qualquer uso de IA em pesquisa.',
      ],
      pageFooterText: 'Discovery e Arquitetura de Produto concluídos. Próxima etapa: Design System & MVP.',
      artifacts: {
        affinityCaption: 'Affinity diagram, com post-its marcados por origem: evidência real vs. personas exploratórias.',
        affinityAlt: 'Affinity diagram do board no FigJam, com post-its agrupados em temas e marcados por cor segundo a origem, separando evidência de entrevistas reais das personas exploratórias.',
        jtbdsCaption: 'Os 5 Jobs to be Done, priorizados por densidade de evidência.',
        jtbdsAlt: 'Cards no FigJam descrevendo os cinco Jobs to be Done priorizados do produto.',
        arqIaCaption: 'Arquitetura de IA: onde entra LLM, heurística ou ML. A IA verbaliza, nunca calcula.',
        arqIaAlt: 'Diagrama da arquitetura de IA mostrando a fronteira entre o cálculo determinístico e o LLM que só traduz fatos prontos em linguagem.',
        flowsCaption: 'Os 5 fluxos críticos de usuário, F01 a F05.',
        flowsAlt: 'Diagrama dos cinco fluxos críticos de usuário do produto, numerados de F01 a F05.',
        personaCaption: 'Persona Ana e seu Provenance Card: o que é dado, inferência e especulação.',
        personaAlt: 'Ficha da persona Ana ao lado de um Provenance Card documentando a origem de cada atributo como dado, inferência ou especulação.',
      },
    },
    ultrafarma: {
      backToWork: '← Voltar',
      projectTitle: 'Redesign Ultrafarma',
      subtitle: 'Redesign da home mobile da Ultrafarma',
      rolePill: 'UX/UI Design · Avaliação Heurística · Benchmarking · UI Kit & Tokens · Figma',
      year: '2026',
      heroHeading: 'Resolver problemas reais sem descaracterizar a marca.',
      heroBody: 'Projeto conceitual independente, não encomendado e sem vínculo oficial com a Ultrafarma. A partir de uma avaliação heurística da experiência mobile real, redesenhei a home para corrigir problemas de busca, feedback e hierarquia, preservando a identidade da marca.',
      heroFigmaCta: 'Ver o projeto completo no Figma',
      whyLabel: '01 · POR QUE A ULTRAFARMA',
      whyBody: 'Comparei a experiência mobile de Pague Menos, Drogaria SP e Drogasil. A estrutura da categoria é semelhante entre concorrentes, mas a Ultrafarma concentrou falhas funcionais e problemas de hierarquia com maior impacto na jornada.',
      whyCalloutValue: '2 falhas funcionais + 4 achados de hierarquia',
      whyCalloutCaption: 'Um caso com problemas observáveis, escopo claro e espaço real para melhoria.',
      methodLabel: '02 · MÉTODO',
      methodIntro: 'Avaliação heurística em contexto real. Percorri a home no celular executando tarefas reais e explorando os principais estados e interações disponíveis.',
      methodTasks: [
        { num: '01', title: 'Pesquisar um produto', body: 'Busca, autocomplete e rolagem.' },
        { num: '02', title: 'Adicionar ao carrinho algo da home', body: 'Ação, retorno e correspondência.' },
        { num: '03', title: 'Explorar a home', body: 'Banners, categorias, cards e hierarquia.' },
      ],
      diagnosisLabel: '03 · DIAGNÓSTICO FUNCIONAL',
      diagnosisHeading: 'Duas falhas de função, não de estética.',
      diagnosisFlaws: [
        {
          number: '01',
          title: 'Busca fecha ao rolar.',
          body: 'O dropdown some ao tentar descer para ver as opções.',
          tag: 'Controle do usuário · contexto móvel.',
        },
        {
          number: '02',
          title: 'Carrinho sem feedback.',
          body: 'Ao adicionar um produto, o retorno se limita à atualização dos contadores, sem uma confirmação evidente. Já o botão "Comprar" direciona para a página do item, em vez de executar a ação indicada pelo rótulo.',
          tag: 'Visibilidade de estado · rotulação.',
        },
      ],
      findingsLabel: '04 · OUTROS ACHADOS',
      findingsHeading: 'Hierarquia, reconhecimento e consistência.',
      findings: [
        { num: '1', title: 'Carrossel sem affordance.', body: 'O gesto horizontal não é comunicado.', tag: 'Mobile · reconhecimento.' },
        { num: '2', title: 'Scroll longo sem hierarquia.', body: 'Cards e banners sem prioridade clara.', tag: 'Mobile · lei de Hick.' },
        { num: '3', title: 'Preços competindo entre si.', body: 'De, Por, Pix e preço unitário disputam atenção.', tag: 'Hierarquia visual.' },
        { num: '4', title: 'Grid inconsistente.', body: 'Blocos começam em linhas diferentes.', tag: 'Consistência · execução.' },
      ],
      benchmarkLabel: '05 · BENCHMARKING',
      benchmarkHeading: 'Estrutura parecida, execução diferente.',
      benchmarkBody: 'Pague Menos, Drogaria SP e Drogasil usam padrões semelhantes, mas resolvem melhor busca, feedback e hierarquia.',
        benchmarkCallout: 'O benchmarking indica que o problema não é a categoria, é a qualidade da execução.',
        benchmarkNote: 'Nota: padrões consolidados foram preservados; desvios intencionais são justificados.',
        benchmarkComparisonLabel: 'Ultrafarma × concorrentes',
        benchmarkFigmaCta: 'Ver o benchmarking completo no Figma',
      beforeAfterLabel: '06 · ANTES E DEPOIS',
      beforeAfterHeading: 'Uma home com prioridade.',
      beforeLabel: 'O ANTES · HOME ORIGINAL',
      afterLabel: 'O DEPOIS · REDESIGN',
      decisionsLabel: '07 · DECISÕES DE DESIGN',
      decisionsHeading: 'Problema para decisão: respostas específicas.',
      screensCaption: 'As telas redesenhadas',
      searchScreenCaption: 'Busca em tela cheia, com scroll livre',
      cartModalCaption: 'Confirmação do carrinho, com item e subtotal',
      decisionsGroup1Title: 'Respostas específicas.',
      decisionsGroup1: [
        { title: 'Busca', body: 'Tela cheia com scroll livre.', tag: 'Controle do usuário.' },
        { title: 'Carrinho', body: 'Confirmação, item e subtotal visíveis.', tag: 'Feedback imediato.' },
        { title: 'Carrossel', body: 'Peek do próximo item.', tag: 'Reconhecimento.' },
      ],
      decisionsGroup2Title: 'Organização para reduzir esforço.',
      decisionsGroup2: [
        { title: 'Paredão', body: 'Seções nomeadas e separadas.', tag: 'Hierarquia mobile.' },
        { title: 'Preço', body: 'Principal forte, secundários discretos.', tag: 'Hierarquia tipográfica.' },
        { title: 'Grid', body: '4 colunas, margem 16, gutter 8.', tag: 'Consistência.' },
      ],
      figmaCta: 'Ver as telas redesenhadas no Figma',
      refineLabel: '08 · REFINAR SEM REBRANDEAR',
      refineHeading: 'As mudanças visuais servem à clareza e à hierarquia, não à troca de identidade.',
      refineBullets: [
        'Header mais limpo, com busca protagonista',
        'Espaçamento consistente e mais respiro',
        'Hierarquia tipográfica mais clara',
        'Cores, logo e fonte originais preservados',
      ],
      refineClosing: 'Identidade preservada. Execução aprimorada.',
      designSystemLabel: '09 · DESIGN SYSTEM',
      designSystemHeading: 'Tokens e componentes garantem consistência.',
      designSystemBullets: [
        'Cores e tipografia extraídas do site real',
        'Tokens de cor e espaçamento',
        'Card, botão, input, chip, header e footer reutilizáveis',
        'Grid mobile de 4 colunas',
        'Layers nomeados e páginas organizadas',
      ],
        designSystemNote: 'A IA acelerou a criação do style guide ao extrair cores, tipografia e tokens da interface real da Ultrafarma. A curadoria, as decisões e a aplicação no redesign foram conduzidas por mim.',
        designSystemFoundations: 'Fundações',
        designSystemFoundationsCaption: 'Cor, tipografia, espaçamento e grid mobile.',
        designSystemComponents: 'Componentes reutilizáveis',
        designSystemComponentsCaption: 'Uma biblioteca consistente para cenários reais da interface.',
        designSystemFigmaCta: 'Explorar o design system no Figma',
      validationLabel: '10 · VALIDAÇÃO E LIMITES',
      validationHeading: 'O que foi validado e o que ainda falta.',
      validationIntro: 'O projeto produz hipóteses fundamentadas, não resultados comprovados por teste com usuários.',
      validationItems: [
        { label: 'Validado', body: 'Avaliação heurística e comparação competitiva.', tag: 'Evidências observáveis.' },
        { label: 'Limitação', body: 'Sem teste formal com usuários.', tag: 'Não afirmo impacto medido.' },
      ],
      closingLabel: '11 · FECHAMENTO',
      closingHeading: 'Não reinventei a Ultrafarma.',
      closingBody: 'Mantive a identidade e o que já funcionava. Refinei o que estava quebrado, com critério e evidência.',
      closingHighlight: 'Redesign de usabilidade é resolver problema real, não trocar a cara por gosto.',
      previousProject: 'Projeto anterior',
      nextProject: 'Próximo projeto',
    },
  },
} satisfies { en: TranslationShape; pt: TranslationShape };

export type Translations = TranslationShape;
