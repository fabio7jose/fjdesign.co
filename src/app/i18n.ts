export type Lang = 'pt' | 'en';

/* ─── Sub-types ─────────────────────────────────────────────────── */
interface Stat { num: string; label: string }
interface SkillCard { title: string; body: string }
interface EduItem { degree: string; school: string; period: string; status: string }
interface InfoItem { label: string; value: string; isAvailability: boolean }
interface LacreiStep { num: string; label: string; heading: string; body: string }
interface LacreiScreen { label: string; annotation: string }
type CopilotoArtifact = 'affinity' | 'jtbds' | 'journey' | 'informationArchitecture' | 'flows' | 'aiArchitecture' | 'designSystem' | 'persona';
interface CopilotoStep {
  num: string; label: string; heading: string; body: string; aiUse: string;
  detailsTitle: string;
  details: { title: string; body: string; artifact?: CopilotoArtifact }[];
  artifact?: CopilotoArtifact;
  source?: { url: string; label: string };
}
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
    motivationTitle: string; motivationBody: string;
    competenciesTitle: string; competenciesBody: string;
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
    readingGuide: string;
    aiUseLabel: string;
    artifactOpen: string;
    artifactExport: string;
    decisionsToggle: string;
    reflectionToggle: string;
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
      designSystemCaption: string;
      designSystemAlt: string;
      journeyCaption: string;
      journeyAlt: string;
      informationArchitectureCaption: string;
      informationArchitectureAlt: string;
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
    heuristicsReference: string;
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
        "I am a designer with around four years of professional experience in design, working across Graphic Design, Web Design and UX/UI Design. Throughout this journey, I have worked on digital experiences in an agency, interface creation and web and mobile projects, combining design and front-end knowledge.",
        "I began my career in Graphic Design and page layout, later moving into Web Design and UX/UI, areas in which I continue to develop.",
        "I am currently studying for a Master’s in Product and Service Design at the University of Minho, deepening my knowledge of product, experience and service design.",
        "My goal is to consolidate my work as a Product Designer, connecting research, product strategy and interface design to develop solutions grounded in users’ needs.",
      ],
      motivationTitle: "WHAT MOTIVATES ME",
      motivationBody: "understanding problems, improving experiences and transforming real needs into digital solutions.",
      competenciesTitle: "SKILLS",
      competenciesBody: "UX Research · UI Design · Information Architecture · Design Systems · Figma · Prototyping · Front-end · AI applied to the design process",
      downloadCV: 'Download CV',
      education: 'Education',
      location: 'Bahia, Brazil',
      active: 'Active',
      ongoing: 'Ongoing',
      eduItems: [
        { degree: 'MA in Product and Service Design', school: 'University of Minho', period: '2026–2028', status: 'ongoing' },
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
      "backToWork": "← Back",
      "scopeBadge": "Discovery · Architecture · Design System V1",
      "completedStagesLabel": "Project status",
      "completedStages": "Discovery and architecture complete. V1 library exists; UI in development. Prototype, validation and functional MVP are not complete.",
      "projectTitle": "Copiloto Financeiro",
      "projectDescription": "How can a product support purchase decisions for Brazilians with variable or hybrid income? A product study combining real research, scope decisions and critical use of AI, from the initial hypothesis to a component library.",
      "rolePill": "UX Research · Product Strategy",
      "year": "2025",
      "heroQuote": "Can I make this purchase now?",
      "summaryBox": {
        "label": "PROJECT SUMMARY",
        "problem": "Support decisions before spending, accounting for existing commitments and income the person can rely on.",
        "sample": "4 real interviews and autoethnography; AI exploration identified separately.",
        "findings": "I used an affinity map to compare accounts and find patterns. Synthesis pointed to decision support, instalment visibility and planning from reliable income. This shifted the product’s focus from recording spending to helping before a purchase.",
        "deliverables": "Discovery and architecture complete. V1 library exists; UI in development. Prototype, validation and functional MVP are not complete.",
        "status": "Discovery and architecture documented. V1 library exists; interface, prototype, validation and functional MVP remain in progress or not yet started.",
        "aiNote": "I used AI to turn accounts and notes into structured material: clusters, the affinity map and JTBDs. I analysed proposals, corrected interpretations and decided product priorities."
      },
      "methodology": "Research and product definition",
      "tools": [
        "FigJam",
        "Figma",
        "Assistive AI"
      ],
      "challengeLabel": "THE PRODUCT QUESTION",
      "challengeBody1": "Research revealed a tension: recognising a financial limit does not mean respecting it when spending. The proposal is to make the impact on income and future instalments visible, with context and a possible next action.",
      "challengeBody2": "This case follows design decisions through to the V1 library. Whether people will consult this support before buying remains a hypothesis to validate.",
      "highlightCard1Label": "PRODUCT DIRECTION",
      "highlightCard1Value": "Support decisions before spending, accounting for existing commitments and income the person can rely on.",
      "highlightCard2Label": "THE CENTRAL QUESTION",
      "highlightCard2Value": "Can I make this purchase now? Show consequences and preserve the person’s choice.",
      "myRoleTitle": "My Role",
      "roleCardTitle": "WHAT I DID",
      "roleCardItems": [
        "Research and evidence curation",
        "Definition, architecture and flows"
      ],
      "secondLayerCardTitle": "HOW I WORKED WITH AI",
      "secondLayerCardValue": "I used AI to turn accounts and notes into structured material: clusters, the affinity map and JTBDs. I analysed proposals, corrected interpretations and decided product priorities.",
      "stackCardTitle": "CURRENT DELIVERABLES",
      "stackCardItems": [
        "Documented discovery and architecture",
        "V1 library with a provisional identity"
      ],
      "processLabel": "FROM HYPOTHESES TO DECISIONS",
      "steps": [
        {
          "num": "00",
          "label": "STARTING POINT",
          "heading": "Turn personal experience into hypotheses",
          "body": "I recorded my own spending decisions to frame hypotheses about impulse, instalments and hybrid income. Since this was only my experience, I used interviews to investigate what other people were experiencing.",
          "detailsTitle": "What I took into research",
          "details": [
            {
              "title": "Initial hypotheses",
              "body": "Did others experience this pain? Were instalments central? Would they accept AI support? Was “can I buy?” the right question? Did “financial diary” make sense?"
            },
            {
              "title": "Autoethnography’s limit",
              "body": "My account was a starting source with declared bias, not another interview or validation of other people’s behaviour."
            }
          ],
          "aiUse": "AI reviewed my account and looked for confirmation bias in the initial hypotheses."
        },
        {
          "num": "01",
          "label": "RESEARCH",
          "heading": "Understand how people decide to spend",
          "body": "I conducted four interviews about purchase decisions, existing tools and reasons for abandonment. I compared nine products in May 2026 to identify what they addressed and which needs could guide Copiloto. AI formalised the competitive review; I analysed the comparison.",
          "detailsTitle": "Methods and source limitations",
          "details": [
            {
              "title": "Evidence and contrast",
              "body": "I compared interviews with autoethnography. A variable-income participant who did not experience the pain helped delimit the audience rather than support the problem."
            },
            {
              "title": "Competitive analysis",
              "body": "The matrix compared nine products across positioning, use, AI and coverage. It informed opportunities and priorities in May 2026, not a current or universal market assessment."
            },
            {
              "title": "AI exploration",
              "body": "Two generated personas challenged hypotheses. The declared 80% empirical / 20% exploratory weights are a process convention, not a statistical validity measure."
            }
          ],
          "aiUse": "AI assisted transcript analysis and organised competitor research into a comparison matrix.",
          "source": {
            "url": "https://www.notion.so/35d09c23db3680ad9b34fad58034ec95",
            "label": "View competitive analysis · May 2026"
          }
        },
        {
          "num": "02",
          "label": "SYNTHESIS AND DEFINITION",
          "heading": "Group the accounts to define the problem",
          "body": "I used an affinity map to compare accounts and find patterns. Synthesis pointed to decision support, instalment visibility and planning from reliable income. This shifted the product’s focus from recording spending to helping before a purchase.",
          "detailsTitle": "How the direction took shape",
          "details": [
            {
              "title": "From accounts to insights",
              "body": "AI extracted material from real sources, generated sticky notes, organised nine clusters and sub-clusters, and built the FigJam board. I moved notes, removed duplicates, added missing accounts and marked priorities. Unstarred notes were not individually verified."
            },
            {
              "title": "What research challenged",
              "body": "Pain varied by profile, and AI acceptance depended on usefulness and trust. “Can I buy?” was questioned; “financial diary” did not arise spontaneously. The proposed solution remained a hypothesis."
            },
            {
              "title": "Ana: a composite profile",
              "body": "The main persona synthesises the audience from real research and declared inferences. Ana is not a fifth interviewee or one of the two AI-generated exploratory personas.",
              "artifact": "persona"
            },
            {
              "title": "A necessary limit",
              "body": "Exploration challenged generalisations such as treating all instalments as loss of control. It produces hypotheses, not new participant observations."
            }
          ],
          "aiUse": "AI generated sticky notes, formalised clusters and sub-clusters, and built the FigJam board. I reviewed, moved, removed and added content.",
          "artifact": "affinity"
        },
        {
          "num": "03",
          "label": "JOBS TO BE DONE",
          "heading": "Turn findings into priority needs",
          "body": "With AI, I formalised five JTBDs to define what people need to achieve before choosing features. I reviewed their research support. Priorities combined real evidence, MVP scope and differentiation: purchase decisions and instalments first, with goals and replenishment effort on the roadmap.",
          "detailsTitle": "The five jobs and their criteria",
          "details": [
            {
              "title": "01 · Understand whether a purchase fits — MVP",
              "body": "For unplanned spending, understand affordability and consequences. Strong evidence in real sources; guides decision support without blocking purchases."
            },
            {
              "title": "02 · Make small instalments visible — MVP",
              "body": "See existing commitments, including forgotten ones. Strong evidence; informs the view of future months."
            },
            {
              "title": "03 · Give a goal a realistic timeframe — roadmap",
              "body": "Understand how much to save and when a goal is reachable. Strong evidence, but outside the bounded first release; not deferred for lack of need."
            },
            {
              "title": "04 · Plan from the floor, not the average — partial",
              "body": "Separate reliable and variable income. Medium evidence; underpins configuration and calculation for the target audience."
            },
            {
              "title": "05 · Express spending as replenishment effort — roadmap",
              "body": "Estimate extra work needed to cover spending. Thin evidence in a narrower segment with additional AI exploration; excluded from the MVP."
            },
            {
              "title": "Reading the priorities",
              "body": "Three sequential filters: evidence density, MVP scope and differentiation. Strong, medium and thin are internal categories. Five jobs are not five delivered features or a one-to-one mapping to F01–F05."
            },
            {
              "title": "Why I used JTBDs",
              "body": "The accounts described different problems. Formalising situation, need and desired outcome helped compare what the product should address. AI assisted wording and critical revision; choosing priorities remained a design decision."
            }
          ],
          "aiUse": "AI drafted, critically reviewed and reformulated the jobs from the sources. I analysed the proposals and decided product priorities and scope.",
          "artifact": "jtbds"
        },
        {
          "num": "04",
          "label": "JOURNEY MAP",
          "heading": "Define when the product should help",
          "body": "I used the journey to locate needs over time: trigger, consideration, decision, post-purchase and replanning. The map places a quick response before buying, visibility of instalment commitments, and follow-up on consequences in the next cycle.",
          "detailsTitle": "What the map adds to the jobs",
          "details": [
            {
              "title": "Needs over time",
              "body": "I compared context, current behaviour, thought, emotion, pain/opportunity and product intervention. One need can require preparation, a quick response and follow-up."
            },
            {
              "title": "Before and after buying",
              "body": "Consideration calls for accessible impact information; the decision needs cumulative commitments made visible; replanning starts from the income floor and existing commitments."
            },
            {
              "title": "Artefact scope",
              "body": "The main journey excludes replenishment effort. It synthesises research and inferences, not a solution test. Categorisation is a supporting requirement; the canonical JTBD 04 remains the income floor."
            }
          ],
          "aiUse": "",
          "artifact": "journey"
        },
        {
          "num": "05",
          "label": "INFORMATION ARCHITECTURE",
          "heading": "Organise information around needs",
          "body": "I divided navigation into three areas to separate overview, future commitments and history. Home provides context and shortcuts; Instalments & Commitments shows future payments; Transactions supports spending review. Help appears in those areas without depending on a separate chat.",
          "detailsTitle": "How the structure addresses needs",
          "details": [
            {
              "title": "Home",
              "body": "Balance after commitments, instalment summary and quick access to the purchase question. Context supports the decision without trapping every detail on one screen."
            },
            {
              "title": "Instalments & Commitments",
              "body": "Timeline, monthly totals and manual entry for obligations not captured by bank integration. Separates future obligations from payment history and addresses JTBD 02."
            },
            {
              "title": "Transactions",
              "body": "History, categorisation and explanation of the month. The past provides context for the next plan; a future-facing product still needs this function."
            },
            {
              "title": "Support and scope",
              "body": "Onboarding sets income and data entry; settings manage permissions and amounts. JTBD 04 runs across the structure. Free-form AI chat was deferred because of its additional complexity."
            }
          ],
          "aiUse": "AI generated architecture alternatives. I compared them with research needs before deciding.",
          "artifact": "informationArchitecture"
        },
        {
          "num": "06",
          "label": "USER FLOWS",
          "heading": "Connect data entry to the purchase decision",
          "body": "I defined five flows to detail product use. F01 configures data; F02 provides the overview; F03 shows commitments; F04 simulates a purchase; F05 explains patterns. F04 is central because it answers the product question using income and commitments prepared through the supporting paths.",
          "detailsTitle": "Purpose, dependencies and MVP design",
          "details": [
            {
              "title": "F01 · Prepare context",
              "body": "Configure income and its floor, with optional bank connection last. The later revision distinguishes an initially declared estimate from an operational floor calculated from history; an average is not guaranteed income."
            },
            {
              "title": "F02 · Orient use",
              "body": "Dashboard and shortcuts. With no data, bank connection and manual entry have equal visual weight. Manual entry avoids exclusive dependence on integration."
            },
            {
              "title": "F03 · Anticipate commitments",
              "body": "Timeline, instalment detail and manual entry provide the future-facing data needed by purchase simulation."
            },
            {
              "title": "F04 · Simulate before buying",
              "body": "Amount and payment method produce consequences for future months, income floor and optional spending limit. The MVP design is a modal without persistent chat. No scenario blocks a purchase; pre-purchase adoption still needs validation."
            },
            {
              "title": "F05 · Explain the month",
              "body": "Explains current-month patterns for the next planning cycle. It is not JTBD 05. Arbitrary periods, goals and persistent chat remain future work."
            }
          ],
          "aiUse": "",
          "artifact": "flows"
        },
        {
          "num": "07",
          "label": "ARTIFICIAL INTELLIGENCE",
          "heading": "Separate calculation from explanation",
          "body": "I defined each technology’s role because financial responses need reproducible calculation. In F04, rules calculate impact and parameterised messages present it. In F05, a language model explains facts already calculated. Text generation therefore does not take over the financial decision.",
          "detailsTitle": "What each technology does",
          "details": [
            {
              "title": "F04 · Calculation and message",
              "body": "A deterministic core uses amount, payment method, income and commitments. MVP wording follows parameterised scenarios; open conversation is a separate scope decision."
            },
            {
              "title": "F05 · Patterns and explanation",
              "body": "Aggregations and comparisons produce facts. The LLM organises the explanation in Brazilian Portuguese without taking over calculation or the financial decision."
            },
            {
              "title": "Scope boundaries",
              "body": "Free-form chat, proprietary ML and replenishment effort remain roadmap items. These are documented architecture decisions, not functioning integrations presented as complete."
            }
          ],
          "aiUse": "",
          "artifact": "aiArchitecture"
        },
        {
          "num": "08",
          "label": "DESIGN SYSTEM AND CURRENT STATUS",
          "heading": "Build a consistent foundation for screens",
          "body": "The flows specify fields, choices, empty states and responses the interface needs to provide. Those requirements guide component work. A V1 library with provisional identity exists; application to screens and assistant patterns remains in development. Prototype, validation and functional MVP are subsequent stages.",
          "detailsTitle": "What exists and what remains in development",
          "details": [
            {
              "title": "Existing foundation",
              "body": "The library documents foundations, actions, forms, selection, feedback, navigation and icons, with variants and states. The reviewed V1 has a light theme and provisional identity."
            },
            {
              "title": "Connection to experience",
              "body": "F02 needs an empty state and equivalent alternatives; F04 needs inputs and responses with a next action; F01 needs clear permissions. These are interface requirements, not proof that all screens already apply them."
            },
            {
              "title": "Delivery boundary",
              "body": "Library documentation separates generic components from assistant-specific patterns. Screens, prototyping and validation remain subsequent work. A component library does not demonstrate an implemented product."
            }
          ],
          "aiUse": "",
          "artifact": "designSystem"
        }
      ],
      "reflectionLabel": "PROCESS LEARNINGS",
      "reflectionIntro": "AI use also needed review: an outdated summary was once treated as the full source. Checking original material changed the reading process and reinforced my responsibility for interpretations.",
      "reflectionCards": [
        {
          "label": "Real research remains necessary",
          "body": "During recruitment difficulty I considered simulation. Review returned to the methodological boundary: a generated persona can challenge hypotheses but cannot add an interview or validate behaviour."
        },
        {
          "label": "Return to the source",
          "body": "I detected disagreement between an outdated summary and primary material. It led to four corpus-reading rules. Agent review is critical assistance, not user validation."
        },
        {
          "label": "Review that changes the argument",
          "body": "JTBD review removed an unsuitable source from support for the income floor. Distinguishing contrast, evidence and inference made the decision more defensible."
        }
      ],
      "reflectionThroughline": "Real data leads, AI assists, and the final judgement is always human.",
      "decisionsLabel": "PRINCIPLES GUIDING THE DESIGN",
      "decisions": [
        {
          "title": "Context and a next action, without blocking purchases",
          "body": "The current decision is to show consequences and return control. An interview request for blocking does not demonstrate acceptance in use.",
          "bridge": "JTBD 01 and F04 design; behaviour still requires validation."
        },
        {
          "title": "Instalments without moral judgement",
          "body": "Exploration challenged the assumption that every instalment means loss of control. Design should explain cost and future weight without condemning the choice.",
          "bridge": "A tension from AI exploration, retained as a hypothesis and a language boundary."
        },
        {
          "title": "Bank access as a choice",
          "body": "Concern about financial access varied by participant. Optional connection, explicit consent and manual entry became architecture decisions.",
          "bridge": "Real research and F01/F02 decisions; not a barrier attributed to everyone."
        }
      ],
      "limitsLabel": "WHAT IS NOT YET DEMONSTRATED",
      "limits": [
        "Four interviews and autoethnography cannot be generalised to the whole audience.",
        "AI-generated exploratory personas help challenge hypotheses; they do not validate real behaviour.",
        "No usability test of the solution has been conducted. Consulting F04 before buying and changing a decision remain hypotheses to investigate."
      ],
      "nextTitle": "NEXT STEPS",
      "nextItems": [
        "Develop UI and assistant patterns on the V1 foundation",
        "Prototype and validate hypotheses with real people",
        "Then build the functional MVP"
      ],
      "takesTitle": "WHAT I TAKE FROM THIS PROCESS",
      "takesItems": [
        "A well-supported need can remain outside the MVP because of scope.",
        "A central flow depends on data quality and supporting paths.",
        "Declaring provenance and returning to sources matters more than a fluent draft."
      ],
      "pageFooterText": "Discovery and architecture documented. V1 library exists; interface, prototype, validation and functional MVP remain in progress or not yet started.",
      "artifacts": {
        "affinityCaption": "Affinity map: follow how accounts were grouped and which patterns informed the problem. AI formalised clusters and built the board; I curated the material.",
        "affinityAlt": "Affinity diagram from the FigJam board, with post-its grouped into themes and colour-marked by source, separating real interview evidence from exploratory personas.",
        "jtbdsCaption": "Five jobs with evidence, criteria and scope. AI helped formalise statements; I analysed support and decided priorities.",
        "jtbdsAlt": "FigJam cards describing the five prioritised Jobs to be Done for the product.",
        "arqIaCaption": "AI architecture: separate calculation from verbalisation. F04 uses rules and parameterised messages; F05 explains calculated facts. The categorisation LLM fallback still needs scope alignment.",
        "arqIaAlt": "Diagram of the AI architecture showing the boundary between deterministic calculation and the LLM that only translates ready facts into language.",
        "flowsCaption": "Working board of the five flows. F01’s “average” and F04’s “AI processes” labels predate the revisions explained above; they are not the final technical specification.",
        "flowsAlt": "Working diagram of F01–F05: configuration, dashboard, future commitments, purchase simulation and pattern explanation. The text describes later decisions.",
        "personaCaption": "Ana is a composite profile informing the audience scope. The provenance card separates evidence, inference and speculation; she is not another participant.",
        "personaAlt": "Persona Ana sheet next to a Provenance Card documenting the origin of each attribute as data, inference or speculation.",
        "designSystemCaption": "V1 library documentation, with light theme and provisional identity, dated 22 October 2026. Existing components do not mean completed screens or product.",
        "designSystemAlt": "Copiloto Financeiro V1 library overview, component areas, usage examples and provisional-version boundaries.",
        "journeyCaption": "Journey: look at moments before and after buying. Canonical JTBD 04 is the income floor; categorisation shown in the board is a supporting requirement.",
        "journeyAlt": "Journey map with trigger, consideration, decision, post-purchase and replanning, and opportunities for intervention.",
        "informationArchitectureCaption": "Information architecture: three permanent areas, onboarding and settings. Compare the groupings with the needs described above.",
        "informationArchitectureAlt": "Product architecture with Home, Instalments and Commitments, Transactions and supporting paths."
      },
      "readingGuide": "The text explains decisions; the boards show the work. Details contain each stage’s criteria, evidence and limitations.",
      "aiUseLabel": "AI’s role",
      "artifactOpen": "Open board in Figma",
      "decisionsToggle": "Explore the product principles",
      "reflectionToggle": "How I reviewed AI use in research",
      "artifactExport": "View static export"
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
      heuristicsReference: 'Reference: Jakob Nielsen’s 10 usability heuristics',
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
          tag: 'Nielsen #3 · User control and freedom.',
        },
        {
          number: '02',
          title: 'Cart with no feedback.',
          body: 'When adding a product, the response is limited to updating the counters, with no clear confirmation. The "Buy" button also leads to the item\'s page instead of executing the action its label suggests.',
          tag: 'Nielsen #1 · Visibility of system status (confirmation). Nielsen #4 · Consistency and standards (“Buy” label).',
        },
      ],
      findingsLabel: '04 · OTHER FINDINGS',
      findingsHeading: 'Hierarchy, recognition and consistency.',
      findings: [
        { num: '1', title: 'Carousel with no affordance.', body: 'The horizontal gesture is not communicated.', tag: 'Nielsen #6 · Recognition rather than recall.' },
        { num: '2', title: 'Long scroll with no hierarchy.', body: 'Cards and banners with no clear priority.', tag: 'Nielsen #8 · Aesthetic and minimalist design.' },
        { num: '3', title: 'Prices competing with each other.', body: 'List price, sale price, Pix price and unit price all fight for attention.', tag: 'Nielsen #8 · Aesthetic and minimalist design.' },
        { num: '4', title: 'Inconsistent grid.', body: 'Blocks start on different lines.', tag: 'Nielsen #4 · Consistency and standards.' },
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
        { title: 'Search', body: 'Full screen with free scroll.', tag: 'Nielsen #3 · User control and freedom.' },
        { title: 'Cart', body: 'Confirmation, item and subtotal shown.', tag: 'Nielsen #1 · Visibility of system status.' },
        { title: 'Carousel', body: 'Peek of the next item.', tag: 'Nielsen #6 · Recognition rather than recall.' },
      ],
      decisionsGroup2Title: 'Organising to reduce effort.',
      decisionsGroup2: [
        { title: 'Wall of sections', body: 'Named and separated sections.', tag: 'Nielsen #8 · Aesthetic and minimalist design.' },
        { title: 'Price', body: 'The main price is strong, secondary ones are discreet.', tag: 'Nielsen #8 · Aesthetic and minimalist design.' },
        { title: 'Grid', body: '4 columns, 16px margin, 8px gutter.', tag: 'Nielsen #4 · Consistency and standards.' },
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
        "Sou designer com cerca de quatro anos de experiência profissional na área de design, com atuação em Design Gráfico, Web Design e UX/UI Design. Ao longo dessa trajetória, trabalhei com experiências digitais em agência, criação de interfaces e projetos web e mobile, combinando design e conhecimentos de front-end.",
        "Comecei minha carreira no Design Gráfico e na diagramação, evoluindo posteriormente para Web Design e UX/UI, áreas nas quais venho me desenvolvendo cada vez mais.",
        "Atualmente, curso o Mestrado em Design de Produto e Serviços na Universidade do Minho, aprofundando meus conhecimentos em design de produtos, experiências e serviços.",
        "Meu objetivo é consolidar minha atuação como Product Designer, conectando pesquisa, estratégia de produto e design de interfaces para desenvolver soluções fundamentadas nas necessidades dos usuários.",
      ],
      motivationTitle: "O QUE ME MOTIVA",
      motivationBody: "compreender problemas, melhorar experiências e transformar necessidades reais em soluções digitais.",
      competenciesTitle: "COMPETÊNCIAS",
      competenciesBody: "UX Research · UI Design · Arquitetura da Informação · Design Systems · Figma · Prototipagem · Front-end · IA aplicada ao processo de design",
      downloadCV: 'Baixar CV',
      education: 'Formação',
      location: 'Bahia, Brasil',
      active: 'Ativo',
      ongoing: 'Em andamento',
      eduItems: [
        { degree: 'Mestrado em Design de Produto e Serviços', school: 'Universidade do Minho', period: '2026–2028', status: 'ongoing' },
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
      "backToWork": "← Voltar",
      "scopeBadge": "Discovery · Arquitetura · Design System V1",
      "completedStagesLabel": "Estado do projeto",
      "completedStages": "Discovery e arquitetura concluídos. Biblioteca V1 existente; UI em desenvolvimento. Protótipo, validação e MVP funcional ainda não concluídos.",
      "projectTitle": "Copiloto Financeiro",
      "projectDescription": "Como apoiar decisões de compra de brasileiros com renda variável ou híbrida? Um estudo de produto que cruza pesquisa real, decisões de escopo e uso crítico de IA, da hipótese inicial à biblioteca de componentes.",
      "rolePill": "UX Research · Product Strategy",
      "year": "2025",
      "heroQuote": "Posso fazer essa compra agora?",
      "summaryBox": {
        "label": "RESUMO DO PROJECTO",
        "problem": "Ajudar a decidir antes de gastar, considerando o que já está comprometido e a renda com que se pode contar.",
        "sample": "4 entrevistas reais e autoetnografia; exploração com IA identificada separadamente.",
        "findings": "Usei um affinity map para comparar os relatos e encontrar padrões. A síntese apontou para apoio na decisão, visibilidade das parcelas e planejamento pela renda garantida. Isso mudou o foco do produto: de registrar gastos para ajudar antes da compra.",
        "deliverables": "Discovery e arquitetura concluídos. Biblioteca V1 existente; UI em desenvolvimento. Protótipo, validação e MVP funcional ainda não concluídos.",
        "status": "Discovery e arquitetura documentados. Biblioteca V1 existente; interface, protótipo, validação e MVP funcional ainda em desenvolvimento ou por iniciar.",
        "aiNote": "Usei IA para transformar relatos e anotações em material estruturado: clusters, affinity map e JTBDs. Analisei as propostas, corrigi interpretações e decidi as prioridades do produto."
      },
      "methodology": "Pesquisa e definição de produto",
      "tools": [
        "FigJam",
        "Figma",
        "IA assistiva"
      ],
      "challengeLabel": "A PERGUNTA DO PROJETO",
      "challengeBody1": "A pesquisa trouxe uma tensão: reconhecer um limite financeiro não significa respeitá-lo na hora de gastar. A proposta é tornar visível o impacto da compra sobre a renda e as parcelas futuras, com contexto e uma saída possível.",
      "challengeBody2": "Este case acompanha as decisões de design até a biblioteca V1. A hipótese de que as pessoas consultarão esse apoio antes de comprar ainda precisa ser validada.",
      "highlightCard1Label": "DIREÇÃO DE PRODUTO",
      "highlightCard1Value": "Ajudar a decidir antes de gastar, considerando o que já está comprometido e a renda com que se pode contar.",
      "highlightCard2Label": "A PERGUNTA CENTRAL",
      "highlightCard2Value": "Posso fazer essa compra agora? Mostrar consequências e preservar a escolha da pessoa.",
      "myRoleTitle": "Meu Papel",
      "roleCardTitle": "O QUE EU FIZ",
      "roleCardItems": [
        "Pesquisa e curadoria das evidências",
        "Definição, arquitetura e fluxos"
      ],
      "secondLayerCardTitle": "COMO TRABALHEI COM IA",
      "secondLayerCardValue": "Usei IA para transformar relatos e anotações em material estruturado: clusters, affinity map e JTBDs. Analisei as propostas, corrigi interpretações e decidi as prioridades do produto.",
      "stackCardTitle": "ENTREGA ATUAL",
      "stackCardItems": [
        "Discovery e arquitetura documentados",
        "Biblioteca V1 com identidade provisória"
      ],
      "processLabel": "DAS HIPÓTESES ÀS DECISÕES",
      "steps": [
        {
          "num": "00",
          "label": "PONTO DE PARTIDA",
          "heading": "Transformar minha experiência em hipóteses",
          "body": "Registrei minhas próprias decisões de gasto para levantar hipóteses sobre impulso, parcelas e renda híbrida. Como esse era só o meu caso, usei as entrevistas para investigar o que outras pessoas viviam.",
          "detailsTitle": "O que levei para a pesquisa",
          "details": [
            {
              "title": "Hipóteses iniciais",
              "body": "Outras pessoas viviam essa dor? Parcelamento era central? Aceitariam apoio de IA? “Posso comprar?” era a pergunta certa? A expressão “diário financeiro” fazia sentido?"
            },
            {
              "title": "Limite da autoetnografia",
              "body": "Meu relato foi uma fonte de partida, com viés declarado. Não representa uma entrevista adicional nem valida o comportamento de outras pessoas."
            }
          ],
          "aiUse": "A IA revisou meu relato e procurou vieses de confirmação nas hipóteses iniciais."
        },
        {
          "num": "01",
          "label": "INVESTIGAÇÃO",
          "heading": "Entender como as pessoas decidem gastar",
          "body": "Fiz quatro entrevistas para entender decisões de compra, ferramentas usadas e motivos de abandono. Comparei nove produtos, em maio de 2026, para identificar o que já resolviam e quais necessidades poderiam orientar o Copiloto. A IA formalizou o levantamento competitivo; eu analisei a comparação.",
          "detailsTitle": "Métodos e limites das fontes",
          "details": [
            {
              "title": "Evidência e contraste",
              "body": "Cruzei entrevistas e autoetnografia. Uma pessoa com renda variável, mas sem o mecanismo da dor, serviu como contraste para delimitar o público, não como sustentação do problema."
            },
            {
              "title": "Análise competitiva",
              "body": "A matriz comparou nove produtos em posicionamento, uso, IA e cobertura. Foi uma referência de maio de 2026 para oportunidades e priorização, não uma avaliação atual ou universal do mercado."
            },
            {
              "title": "Exploração com IA",
              "body": "Duas personas geradas serviram para tensionar hipóteses. Os pesos declarados de 80% para fontes empíricas e 20% para exploração são uma convenção do processo, não uma medida estatística de validade."
            }
          ],
          "aiUse": "A IA apoiou a análise das transcrições e organizou a pesquisa de concorrentes em uma matriz comparativa.",
          "source": {
            "url": "https://www.notion.so/35d09c23db3680ad9b34fad58034ec95",
            "label": "Ver análise competitiva · maio de 2026"
          }
        },
        {
          "num": "02",
          "label": "SÍNTESE E DEFINIÇÃO",
          "heading": "Agrupar os relatos para definir o problema",
          "body": "Usei um affinity map para comparar os relatos e encontrar padrões. A síntese apontou para apoio na decisão, visibilidade das parcelas e planejamento pela renda garantida. Isso mudou o foco do produto: de registrar gastos para ajudar antes da compra.",
          "detailsTitle": "Como cheguei a essa direção",
          "details": [
            {
              "title": "Da fala ao insight",
              "body": "A IA extraiu trechos das fontes reais, gerou os post-its e os organizou em nove clusters com sub-clusters. Também executou a montagem no FigJam. Reposicionei itens, descartei redundâncias, acrescentei relatos ausentes e marquei prioridades. Post-its sem estrela não foram verificados individualmente."
            },
            {
              "title": "O que a pesquisa questionou",
              "body": "A dor variava por perfil; aceitar IA dependia da utilidade e da confiança. A pergunta “posso comprar?” foi questionada, e “diário financeiro” não apareceu espontaneamente. A direção escolhida continuou sendo uma hipótese de solução."
            },
            {
              "title": "Ana: perfil composto",
              "body": "A persona principal sintetiza o recorte com origem documentada em pesquisa real e inferências declaradas. Ana não é uma quinta entrevistada nem uma das duas personas exploratórias geradas com IA.",
              "artifact": "persona"
            },
            {
              "title": "Limite importante",
              "body": "As personas exploratórias ajudaram a questionar generalizações, como tratar parcelamento sempre como perda de controle. Essa exploração gera hipóteses, não novas observações de participantes."
            }
          ],
          "aiUse": "A IA gerou os post-its, formalizou clusters e sub-clusters e executou a montagem visual no FigJam. Revisei, reposicionei, descartei e acrescentei conteúdo.",
          "artifact": "affinity"
        },
        {
          "num": "03",
          "label": "JOBS TO BE DONE",
          "heading": "Transformar os achados em necessidades prioritárias",
          "body": "Com a IA, formalizei cinco JTBDs para definir o que a pessoa precisa conseguir antes de escolher funcionalidades. Revisei sua sustentação na pesquisa. A prioridade considerou evidência real, escopo do MVP e diferenciação: decisão de compra e parcelas primeiro; metas e esforço de reposição no roadmap.",
          "detailsTitle": "Os cinco JTBDs e seus critérios",
          "details": [
            {
              "title": "01 · Decidir se a compra cabe — MVP",
              "body": "Quando surge um gasto não planejado, entender se cabe e o que compromete. Evidência forte nas fontes reais; orienta o apoio à decisão, sem bloqueio da compra."
            },
            {
              "title": "02 · Enxergar parcelas pequenas — MVP",
              "body": "Ver compromissos já assumidos, inclusive os esquecidos. Evidência forte; orienta a visão dos meses seguintes."
            },
            {
              "title": "03 · Dar prazo real a um objetivo — roadmap",
              "body": "Saber quanto guardar e quando chegar a uma meta. Evidência forte, mas fora do escopo fechado da primeira versão: não foi adiado por falta de necessidade."
            },
            {
              "title": "04 · Planejar pelo piso, não pela média — parcial",
              "body": "Distinguir renda garantida e variável. Evidência média; sustenta a configuração e o cálculo para o recorte de renda variável ou híbrida."
            },
            {
              "title": "05 · Traduzir gasto em esforço de reposição — roadmap",
              "body": "Estimar trabalho extra necessário para cobrir um gasto. Evidência fina em um sub-recorte, com exploração adicional por IA; não entrou no MVP."
            },
            {
              "title": "Como ler a prioridade",
              "body": "Os três filtros foram aplicados em sequência: densidade de evidência, escopo do MVP e diferenciação. Forte, média e fina são categorias internas. Cinco JTBDs não significam cinco funcionalidades entregues nem uma correspondência com F01–F05."
            },
            {
              "title": "Por que usei JTBDs",
              "body": "Os relatos descreviam problemas diferentes. Formalizar situação, necessidade e resultado esperado ajudou a comparar o que o produto deveria resolver. A IA ajudou na redação e na revisão dessa formulação; a escolha do que priorizar permaneceu uma decisão de design."
            }
          ],
          "aiUse": "A IA redigiu, revisou e reformulou os JTBDs a partir das fontes. Analisei as propostas e defini as prioridades e o escopo do produto.",
          "artifact": "jtbds"
        },
        {
          "num": "04",
          "label": "MAPA DE JORNADA",
          "heading": "Definir em que momento o produto deve ajudar",
          "body": "Usei a jornada para localizar as necessidades no tempo: gatilho, consideração, decisão, pós-compra e replanejamento. O mapa situa a resposta rápida antes da compra, a visualização do peso das parcelas e o acompanhamento das consequências no ciclo seguinte.",
          "detailsTitle": "O que o mapa acrescenta aos JTBDs",
          "details": [
            {
              "title": "Necessidade no tempo",
              "body": "Cruzei contexto, comportamento atual, pensamento, emoção, dor/oportunidade e intervenção do produto. Uma mesma necessidade pode exigir preparação, resposta rápida e acompanhamento."
            },
            {
              "title": "Antes e depois da compra",
              "body": "Na consideração, a oportunidade é uma resposta acessível sobre impacto. Na decisão, tornar o acúmulo de parcelas visível. No replanejamento, começar pelo piso e pelos compromissos já assumidos."
            },
            {
              "title": "Recorte do artefato",
              "body": "A jornada principal não cobre o sub-recorte de reposição por esforço. É uma síntese de pesquisa e inferências, não o registro de um teste da solução. A categorização é um requisito de apoio; o JTBD 04 canônico continua sendo o piso de renda."
            }
          ],
          "aiUse": "",
          "artifact": "journey"
        },
        {
          "num": "05",
          "label": "ARQUITETURA DE INFORMAÇÃO",
          "heading": "Organizar a informação por necessidade",
          "body": "Dividi a navegação em três áreas para separar visão geral, compromissos futuros e histórico. Início reúne contexto e atalhos; Parcelas & Compromissos mostra o que ainda será pago; Transações permite revisar gastos. A ajuda aparece nessas áreas, sem depender de um chat separado.",
          "detailsTitle": "Como a estrutura atende às necessidades",
          "details": [
            {
              "title": "Início",
              "body": "Saldo após compromissos, resumo de parcelas e acesso rápido a “posso comprar?”. Sustenta o contexto para a decisão, em vez de prender toda informação na tela inicial."
            },
            {
              "title": "Parcelas & Compromissos",
              "body": "Linha do tempo, total por mês e entrada manual do que não chega pela integração bancária. Separa compromissos futuros do histórico de pagamentos e atende ao JTBD 02."
            },
            {
              "title": "Transações",
              "body": "Histórico, categorização e explicação do mês. O passado fornece contexto para o próximo planejamento; o foco em decisões futuras não elimina essa função."
            },
            {
              "title": "Suporte e escopo",
              "body": "Onboarding configura renda e entrada de dados; configurações permitem revisar permissões e valores. O piso do JTBD 04 atravessa essa estrutura. Conversa livre com IA ficou para o roadmap pela complexidade adicional."
            }
          ],
          "aiUse": "A IA gerou alternativas de arquitetura. Comparei as opções com as necessidades identificadas na pesquisa antes de decidir.",
          "artifact": "informationArchitecture"
        },
        {
          "num": "06",
          "label": "USER FLOWS",
          "heading": "Ligar a entrada de dados à decisão de compra",
          "body": "Defini cinco fluxos para detalhar o uso do produto. F01 configura dados; F02 dá a visão geral; F03 mostra compromissos; F04 simula a compra; F05 explica padrões. F04 é o fluxo central porque responde à pergunta do projeto usando a renda e os compromissos preparados pelos outros percursos.",
          "detailsTitle": "Finalidade, dependências e desenho do MVP",
          "details": [
            {
              "title": "F01 · Preparar o contexto",
              "body": "Configuração de renda e piso, com conexão bancária opcional ao final. A revisão posterior distingue uma estimativa inicial declarada do piso operacional calculado sobre o histórico; não usa média como sinônimo de renda garantida."
            },
            {
              "title": "F02 · Orientar o uso",
              "body": "Dashboard com atalhos. Sem dados, oferece conexão de conta e entrada manual com peso equivalente. A alternativa manual evita depender exclusivamente da integração bancária."
            },
            {
              "title": "F03 · Antecipar compromissos",
              "body": "Linha do tempo e detalhe das parcelas, incluindo entrada manual. É a base prospectiva de que a simulação de compra precisa."
            },
            {
              "title": "F04 · Simular antes de comprar",
              "body": "Recebe valor e forma de pagamento e mostra impacto sobre meses, piso e limite opcional. No desenho do MVP é um modal sem conversa persistente. Nenhum cenário bloqueia a compra; a adoção desse apoio antes de gastar ainda precisa de validação."
            },
            {
              "title": "F05 · Explicar o mês",
              "body": "Apresenta padrões do mês corrente em linguagem simples para apoiar o planejamento seguinte. Não é o JTBD 05. Explicar qualquer período, metas e chat persistente ficaram para futuras versões."
            }
          ],
          "aiUse": "",
          "artifact": "flows"
        },
        {
          "num": "07",
          "label": "INTELIGÊNCIA ARTIFICIAL",
          "heading": "Separar o cálculo da explicação",
          "body": "Defini o papel de cada tecnologia porque respostas sobre dinheiro precisam de cálculo reproduzível. No F04, regras calculam o impacto e mensagens parametrizadas apresentam o resultado. No F05, o modelo de linguagem explica os fatos já calculados. Assim, a geração de texto não assume a decisão financeira.",
          "detailsTitle": "O que cada tecnologia faz",
          "details": [
            {
              "title": "F04 · Cálculo e mensagem",
              "body": "O núcleo é determinístico. O valor, a forma de pagamento, a renda e os compromissos alimentam regras explícitas. O texto usa cenários parametrizados no MVP; uma conversa aberta é outra decisão de escopo."
            },
            {
              "title": "F05 · Padrão e explicação",
              "body": "Agregações e comparações produzem os fatos. O LLM organiza a explicação em português brasileiro, sem assumir a conta nem a decisão financeira."
            },
            {
              "title": "Limites de escopo",
              "body": "Chat livre, modelos próprios de ML e reposição por esforço permanecem no roadmap. A fronteira entre módulos foi documentada antes da implementação; não é uma integração funcional apresentada como pronta."
            }
          ],
          "aiUse": "",
          "artifact": "aiArchitecture"
        },
        {
          "num": "08",
          "label": "DESIGN SYSTEM E ESTADO ATUAL",
          "heading": "Criar uma base consistente para as telas",
          "body": "Os fluxos especificaram campos, escolhas, estados vazios e respostas que a interface precisa oferecer. Essas necessidades orientam o trabalho de componentes. Já existe uma biblioteca V1 com identidade provisória; a aplicação às telas e aos padrões do assistente continua em desenvolvimento. Protótipo, validação e MVP funcional ainda são etapas seguintes.",
          "detailsTitle": "O que existe e o que continua em desenvolvimento",
          "details": [
            {
              "title": "Base existente",
              "body": "A biblioteca documenta foundations, ações, formulários, seleção, feedback, navegação e ícones, com variantes e estados. A V1 consultada é de tema claro e identidade provisória."
            },
            {
              "title": "Ligação com a experiência",
              "body": "F02 pede estado vazio e alternativas equivalentes; F04 pede entradas e respostas com saída; F01 pede clareza de permissões. São requisitos a levar aos padrões de interface, não prova de que todas as telas já os aplicam."
            },
            {
              "title": "Fronteira da entrega",
              "body": "A documentação da biblioteca separa componentes genéricos dos padrões próprios do assistente. Telas, prototipagem e validação continuam como trabalho seguinte. A existência da biblioteca não demonstra produto implementado."
            }
          ],
          "aiUse": "",
          "artifact": "designSystem"
        }
      ],
      "reflectionLabel": "APRENDIZADOS DO PROCESSO",
      "reflectionIntro": "O uso de IA também exigiu revisão: um resumo desatualizado chegou a ser tratado como fonte completa. Conferir o material original mudou o processo de leitura e reforçou minha responsabilidade sobre as interpretações.",
      "reflectionCards": [
        {
          "label": "Pesquisa real permanece necessária",
          "body": "Diante de uma dificuldade de recrutamento, considerei uma simulação. A revisão retomou o limite do método: uma persona gerada pode tensionar hipóteses, mas não acrescenta uma entrevista nem valida comportamento."
        },
        {
          "label": "Voltar à fonte antes de concluir",
          "body": "Detectei a divergência entre um resumo desatualizado e as fontes primárias. O episódio levou a quatro regras de leitura do corpus. Revisão por agente é apoio crítico, não validação com usuários."
        },
        {
          "label": "Revisão que muda o argumento",
          "body": "Na revisão dos JTBDs, uma fonte inadequada foi retirada da sustentação do piso de renda. Distinguir caso de contraste, evidência e inferência tornou a decisão mais defensável."
        }
      ],
      "reflectionThroughline": "Dado real protagoniza, IA assiste, e o julgamento final é sempre humano.",
      "decisionsLabel": "PRINCÍPIOS QUE ORIENTAM O DESENHO",
      "decisions": [
        {
          "title": "Contexto e saída, sem bloquear a compra",
          "body": "A decisão atual é mostrar consequência e devolver a escolha. Um pedido de bloqueio em entrevista não demonstra que a pessoa o aceitaria no uso.",
          "bridge": "JTBD 01 e desenho do F04; comportamento ainda por validar."
        },
        {
          "title": "Parcelamento sem julgamento moral",
          "body": "A exploração questionou a generalização de que toda parcela significa perda de controle. O desenho deve informar custo e peso futuro sem condenar a escolha.",
          "bridge": "Tensão da exploração com IA, mantida como hipótese e limite de linguagem."
        },
        {
          "title": "Acesso bancário como escolha",
          "body": "A preocupação com acesso financeiro variou entre participantes. Por isso, conexão opcional, consentimento explícito e alternativa manual foram decisões de arquitetura.",
          "bridge": "Pesquisa real e decisões de F01/F02; não é uma barreira atribuída a todo o público."
        }
      ],
      "limitsLabel": "O QUE AINDA NÃO ESTÁ DEMONSTRADO",
      "limits": [
        "Quatro entrevistas e uma autoetnografia não permitem generalizar para todo o público.",
        "Personas exploratórias geradas com IA ajudam a questionar hipóteses; não validam comportamentos reais.",
        "Não foi realizado teste de usabilidade da solução. Consultar F04 antes de comprar e mudar a decisão são hipóteses a investigar."
      ],
      "nextTitle": "PRÓXIMOS PASSOS",
      "nextItems": [
        "Desenvolver UI e padrões do assistente sobre a base V1",
        "Prototipar e validar as hipóteses com pessoas reais",
        "Depois, construir o MVP funcional"
      ],
      "takesTitle": "O QUE LEVO DESTE PROCESSO",
      "takesItems": [
        "Uma necessidade bem sustentada pode ficar fora do MVP por escopo.",
        "Um fluxo central depende da qualidade dos dados e dos percursos de apoio.",
        "Declarar a origem e voltar à fonte importa mais que a fluidez de um rascunho."
      ],
      "pageFooterText": "Discovery e arquitetura documentados. Biblioteca V1 existente; interface, protótipo, validação e MVP funcional ainda em desenvolvimento ou por iniciar.",
      "artifacts": {
        "affinityCaption": "Affinity map: acompanhe como os relatos foram agrupados e quais padrões orientaram a definição do problema. A IA formalizou os clusters e montou o quadro; a curadoria foi minha.",
        "affinityAlt": "Affinity diagram do board no FigJam, com post-its agrupados em temas e marcados por cor segundo a origem, separando evidência de entrevistas reais das personas exploratórias.",
        "jtbdsCaption": "Os cinco JTBDs, com evidência, critérios e escopo. A IA ajudou a formalizar os enunciados; analisei sua sustentação e defini a prioridade.",
        "jtbdsAlt": "Cards no FigJam descrevendo os cinco Jobs to be Done priorizados do produto.",
        "arqIaCaption": "Arquitetura de IA: separe cálculo e verbalização. F04 usa regras e mensagens parametrizadas; F05 explica fatos calculados. A menção a fallback LLM na categorização ainda requer alinhamento de escopo.",
        "arqIaAlt": "Diagrama da arquitetura de IA mostrando a fronteira entre o cálculo determinístico e o LLM que só traduz fatos prontos em linguagem.",
        "flowsCaption": "Quadro de trabalho dos cinco fluxos. Os rótulos “média” em F01 e “IA processa” em F04 antecedem as revisões explicadas acima; não representam a especificação técnica final.",
        "flowsAlt": "Registro dos fluxos F01 a F05: configuração, dashboard, compromissos futuros, simulação de compra e explicação de padrões. A descrição textual apresenta as decisões posteriores aos rótulos deste diagrama.",
        "personaCaption": "Ana é um perfil composto usado para orientar o recorte. O cartão de procedência distingue evidência, inferência e especulação; não é uma participante adicional.",
        "personaAlt": "Ficha da persona Ana ao lado de um Provenance Card documentando a origem de cada atributo como dado, inferência ou especulação.",
        "designSystemCaption": "Documentação da biblioteca V1, com tema claro e identidade provisória, em 22 de outubro de 2026. Componentes existentes não equivalem a telas ou produto concluídos.",
        "designSystemAlt": "Página inicial da biblioteca V1 do Copiloto Financeiro, com áreas de componentes, exemplos de uso e limites da versão provisória.",
        "journeyCaption": "Jornada: observe os momentos anteriores e posteriores à compra. O JTBD 04 canônico é o piso de renda; a categorização indicada no quadro é um requisito de apoio.",
        "journeyAlt": "Mapa de jornada em cinco estágios: gatilho, consideração, decisão, pós-compra e replanejamento, com oportunidades de intervenção.",
        "informationArchitectureCaption": "Arquitetura de informação: três áreas permanentes, onboarding e configurações. Compare os grupos com as necessidades descritas acima.",
        "informationArchitectureAlt": "Arquitetura do produto com Início, Parcelas e Compromissos, Transações e os percursos de suporte."
      },
      "readingGuide": "O texto explica as decisões; os quadros mostram o trabalho. Nos detalhes estão os critérios, as evidências e os limites de cada etapa.",
      "aiUseLabel": "Papel da IA",
      "artifactOpen": "Abrir quadro no Figma",
      "decisionsToggle": "Aprofundar os princípios de produto",
      "reflectionToggle": "Como controlei o uso de IA na pesquisa",
      "artifactExport": "Ver exportação estática"
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
      heuristicsReference: 'Referência: as 10 heurísticas de usabilidade de Jakob Nielsen',
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
          tag: 'Nielsen #3 · Controle e liberdade do usuário.',
        },
        {
          number: '02',
          title: 'Carrinho sem feedback.',
          body: 'Ao adicionar um produto, o retorno se limita à atualização dos contadores, sem uma confirmação evidente. Já o botão "Comprar" direciona para a página do item, em vez de executar a ação indicada pelo rótulo.',
          tag: 'Nielsen #1 · Visibilidade do estado do sistema (confirmação). Nielsen #4 · Consistência e padrões (rótulo “Comprar”).',
        },
      ],
      findingsLabel: '04 · OUTROS ACHADOS',
      findingsHeading: 'Hierarquia, reconhecimento e consistência.',
      findings: [
        { num: '1', title: 'Carrossel sem affordance.', body: 'O gesto horizontal não é comunicado.', tag: 'Nielsen #6 · Reconhecimento em vez de memorização.' },
        { num: '2', title: 'Scroll longo sem hierarquia.', body: 'Cards e banners sem prioridade clara.', tag: 'Nielsen #8 · Estética e design minimalista.' },
        { num: '3', title: 'Preços competindo entre si.', body: 'De, Por, Pix e preço unitário disputam atenção.', tag: 'Nielsen #8 · Estética e design minimalista.' },
        { num: '4', title: 'Grid inconsistente.', body: 'Blocos começam em linhas diferentes.', tag: 'Nielsen #4 · Consistência e padrões.' },
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
        { title: 'Busca', body: 'Tela cheia com scroll livre.', tag: 'Nielsen #3 · Controle e liberdade do usuário.' },
        { title: 'Carrinho', body: 'Confirmação, item e subtotal visíveis.', tag: 'Nielsen #1 · Visibilidade do estado do sistema.' },
        { title: 'Carrossel', body: 'Peek do próximo item.', tag: 'Nielsen #6 · Reconhecimento em vez de memorização.' },
      ],
      decisionsGroup2Title: 'Organização para reduzir esforço.',
      decisionsGroup2: [
        { title: 'Paredão', body: 'Seções nomeadas e separadas.', tag: 'Nielsen #8 · Estética e design minimalista.' },
        { title: 'Preço', body: 'Principal forte, secundários discretos.', tag: 'Nielsen #8 · Estética e design minimalista.' },
        { title: 'Grid', body: '4 colunas, margem 16, gutter 8.', tag: 'Nielsen #4 · Consistência e padrões.' },
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
