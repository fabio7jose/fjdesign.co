export type Lang = 'pt' | 'en';

/* ─── Sub-types ─────────────────────────────────────────────────── */
interface Stat { num: string; label: string }
interface SkillCard { title: string; body: string }
interface EduItem { degree: string; school: string; period: string; status: string }
interface InfoItem { label: string; value: string; isAvailability: boolean }
interface LacreiStep { num: string; label: string; heading: string; body: string }
interface LacreiScreen { label: string; annotation: string }

/* ─── Shape every locale object must satisfy ─────────────────────
   Both `en` and `pt` are checked against this interface at compile
   time. A missing or misnamed key causes a TypeScript error.      */
interface TranslationShape {
  nav: {
    work: string; skills: string; certifications: string;
    motionContent: string; about: string; contact: string;
  };
  hero: {
    available: string; title: string; title2: string; subtitle: string;
    cta: string; stats: Stat[]; scroll: string;
  };
  work: {
    label: string; title1: string; title2: string;
    filters: string[]; viewCase: string;
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
}

export const translations = {
  en: {
    nav: {
      work: 'Work',
      skills: 'Approach',
      certifications: 'Certifications',
      motionContent: 'Content',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      available: 'Available now',
      title: 'Web Designer',
      title2: '& UX/UI Design',
      subtitle: 'UX/UI Design in Progress · Front-end · AI-Augmented',
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
      heading: 'Real work. Real clients.',
      videosLabel: 'AI Video',
      imagesLabel: 'Static',
    },
    about: {
      label: 'About',
      title: 'About',
      openTo: 'Open to opportunities · Available to relocate',
      bio: [
        "I'm Fábio, a Web Designer with over 3 years of experience building high-converting landing pages, interfaces, and digital campaign assets, from static visuals to motion. I'm currently transitioning into UX/UI Design, with a focus on research, usability, and end-to-end process.",
        "AI is a core part of how I work. I use it to design faster, explore more directions, and consistently deliver better results. Not as a shortcut, but as a creative and strategic advantage.",
        "I'm currently based in Brazil and open to opportunities anywhere in the world.",
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
      withCardValue: 'Design challenge for a real inclusive healthcare platform serving the LGBTQIA+ community in Brazil, with an established design system and visual identity by Lacrei.',
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
          body: 'I studied the main pain points reported by LGBTQIA+ healthcare users. The key finding: discrimination and lack of culturally competent professionals are the primary barriers, with direct impact on mental health and willingness to seek care.',
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
          heading: 'Anchor ideas in real people',
          body: 'I built a persona and a user journey map in Miro to ground every design decision in a real human context. Multiple directions were explored for each screen, focusing on advanced filters, real-time availability, and microinteractions that build trust progressively.',
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
        { label: 'PROFESSIONAL PROFILE', annotation: 'Photo, specialty, services, real user reviews and real-time availability. Full transparency to address the trust deficit identified in research' },
      ],
      highlightCard1Label: 'PRIMARY PROBLEM',
      highlightCard1Value: 'Difficulty finding professionals who feel safe and non-judgmental',
      highlightCard2Label: 'KEY INSIGHT',
      highlightCard2Value: 'Users needed reassurance at every step, not just in the professional\'s profile',
      learningsHeading: 'What I would carry to the next project',
      learnings: [
        'When designing for vulnerable communities, microcopy choices carry real weight. A single word can make a user feel seen or excluded.',
        'Working within a fixed brief forced sharper prioritisation. With fewer degrees of freedom, every design decision carries more consequence.',
        'Mapping the emotional journey before touching any UI was the highest-impact step. It kept every screen anchored to real user needs rather than visual preferences.',
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
      problemHeading: 'A landing page that wasn\'t converting visitors into downloads',
      problemBody: 'The brief was clear: create a new landing page that captures more app downloads, highlights the app\'s key advantages, respects the brand language, and drives users to download. The existing page was underperforming. It wasn\'t turning visitors into users.',
      highlightCard1Label: 'PRIMARY GOAL',
      highlightCard1Value: 'Increase app downloads by clearly communicating the product\'s core value',
      highlightCard2Label: 'KEY CONSTRAINT',
      highlightCard2Value: 'Brand identity and visual language already established. Focus entirely on structure and conversion.',
      myRoleTitle: 'My Role',
      roleCardTitle: 'WHAT I DID',
      roleCardItems: ['UX Research', 'Crazy 8s', 'Wireframing', 'UI Design', 'Responsive Prototype'],
      withCardTitle: 'CONTEXT',
      withCardValue: 'Design challenge for a real product with an established brand identity and defined conversion goals.',
      constraintsCardTitle: 'CONSTRAINTS',
      constraintsCardValue: 'Fixed brief with defined goals. Brand identity already established by Guia de Motéis. Full focus on landing page structure, hierarchy, and conversion architecture.',
      processLabel: 'PROCESS',
      steps: [
        {
          num: '01',
          label: 'DISCOVER',
          heading: 'Evidence-based research',
          body: 'Quick research into the motel booking niche revealed four recurring pain points preventing conversions: doubts about listing accuracy and security, confusing interfaces, distrust over hidden fees, and difficulty verifying review authenticity. These barriers informed every structural decision in the redesign.',
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
  },

  pt: {
    nav: {
      work: 'Trabalhos',
      skills: 'Abordagem',
      certifications: 'Certificações',
      motionContent: 'Conteúdo',
      about: 'Sobre',
      contact: 'Contato',
    },
    hero: {
      available: 'Disponível agora',
      title: 'Web Designer',
      title2: '& UX/UI Design',
      subtitle: 'UX/UI Design em formação · Front-end · AI-Augmented',
      cta: 'Ver meus trabalhos',
      stats: [
        { num: '3+', label: 'Anos de Experiência' },
        { num: 'Bahia', label: 'Brasil' },
        { num: 'Full Process', label: 'Do research ao código' },
      ],
      scroll: 'Rolar',
    },
    work: {
      label: 'Trabalhos Selecionados',
      title1: 'Cases &',
      title2: 'Entregáveis',
      filters: ['Todos', 'UX Design', 'Web Design', 'Landing Pages'],
      viewCase: 'Ver case',
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
      heading: 'Trabalho real. Clientes reais.',
      videosLabel: 'Vídeo IA',
      imagesLabel: 'Estático',
    },
    about: {
      label: 'Sobre',
      title: 'Sobre',
      openTo: 'Aberto a oportunidades · Disponível para realocação',
      bio: [
        'Sou Fábio, Web Designer com mais de 3 anos de experiência criando landing pages de alta conversão, interfaces e peças para campanhas digitais, de imagens estáticas a vídeos. Atualmente em transição para UX/UI Design, com foco em pesquisa, usabilidade e processo de ponta a ponta.',
        'A IA faz parte do meu processo. Uso para projetar mais rápido, explorar mais direções e entregar trabalhos melhores. Não como atalho, mas como vantagem criativa e estratégica.',
        'Estou baseado no Brasil e aberto a oportunidades em qualquer lugar do mundo.',
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
      withCardValue: 'Desafio de design para uma plataforma real de saúde inclusiva voltada à comunidade LGBTQIA+ no Brasil, com design system e identidade visual já estabelecidos pela Lacrei.',
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
          body: 'Pesquisei os principais pontos de dor relatados por usuários LGBTQIA+ no acesso à saúde. A descoberta central: discriminação e falta de profissionais preparados são as principais barreiras, com impacto direto na saúde mental e na disposição de buscar atendimento.',
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
          heading: 'Ancorar ideias em pessoas reais',
          body: 'Criei uma persona e um mapa de jornada no Miro para fundamentar cada decisão de design em um contexto humano real. Múltiplas direções foram exploradas para cada tela, com foco em filtros avançados, disponibilidade em tempo real e microinterações que constroem confiança progressivamente.',
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
        { label: 'PERFIL DO PROFISSIONAL', annotation: 'Foto, especialidade, serviços, avaliações reais e disponibilidade em tempo real. Transparência total para responder ao déficit de confiança identificado na pesquisa' },
      ],
      highlightCard1Label: 'PROBLEMA PRINCIPAL',
      highlightCard1Value: 'Dificuldade em encontrar profissionais que transmitam segurança e acolhimento',
      highlightCard2Label: 'INSIGHT CHAVE',
      highlightCard2Value: 'Usuários precisavam de segurança em cada etapa, não apenas no perfil do profissional',
      learningsHeading: 'O que eu levaria para o próximo projeto',
      learnings: [
        'Ao projetar para comunidades vulneráveis, cada escolha de microtexto tem peso real. Uma única palavra pode fazer o usuário se sentir visto ou excluído.',
        'Trabalhar dentro de um briefing fixo exigiu uma priorização mais precisa. Com menos graus de liberdade, cada decisão de design carrega mais consequência.',
        'Mapear a jornada emocional antes de tocar na UI foi o passo de maior impacto. Manteve cada tela ancorada nas necessidades reais do usuário, não nas preferências visuais.',
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
      problemHeading: 'Uma landing page que não convertia visitantes em downloads',
      problemBody: 'O brief era claro: criar uma nova landing page que captasse mais downloads do app, destacasse as principais vantagens, respeitasse a linguagem da marca e levasse os usuários a baixar. A página existente tinha baixo desempenho. Não convertia visitantes em usuários.',
      highlightCard1Label: 'OBJETIVO PRINCIPAL',
      highlightCard1Value: 'Aumentar downloads do app comunicando claramente o valor central do produto',
      highlightCard2Label: 'RESTRIÇÃO CHAVE',
      highlightCard2Value: 'Identidade visual e linguagem da marca já estabelecidas. Foco total na estrutura e conversão.',
      myRoleTitle: 'Meu Papel',
      roleCardTitle: 'O QUE EU FIZ',
      roleCardItems: ['Pesquisa de UX', 'Crazy 8s', 'Wireframing', 'UI Design', 'Protótipo Responsivo'],
      withCardTitle: 'CONTEXTO',
      withCardValue: 'Desafio de design para um produto real com identidade de marca estabelecida e objetivos de conversão definidos.',
      constraintsCardTitle: 'RESTRIÇÕES',
      constraintsCardValue: 'Brief fixo com objetivos definidos. Identidade visual já estabelecida pelo Guia de Motéis. Foco total na estrutura, hierarquia e arquitetura de conversão da landing page.',
      processLabel: 'PROCESSO',
      steps: [
        {
          num: '01',
          label: 'DESCOBRIR',
          heading: 'Pesquisa baseada em evidências',
          body: 'Uma rápida pesquisa no nicho de reservas de motéis revelou quatro barreiras recorrentes que impediam conversões: dúvidas sobre a veracidade dos anúncios e segurança, interfaces confusas, desconfiança sobre taxas ocultas e dificuldade em verificar a autenticidade das avaliações. Essas barreiras guiaram cada decisão estrutural do redesign.',
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
  },
} satisfies { en: TranslationShape; pt: TranslationShape };

export type Translations = TranslationShape;
