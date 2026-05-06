export type Lang = 'pt' | 'en';

/* ─── Sub-types ─────────────────────────────────────────────────── */
interface Stat { num: string; label: string }
interface SkillCard { title: string; body: string }
interface AiTag { label: string; color: string }
interface AiTile { id: number; type: string; title: string }
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
    aiLab: string; about: string; contact: string;
  };
  hero: {
    available: string; subtitle: string; tagline: string; tagline2: string;
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
  aiLab: {
    label: string; title1: string; title2: string; description: string;
    tags: AiTag[]; tiles: AiTile[]; toolsLabel: string; tools: string[];
  };
  about: {
    label: string; title: string; openTo: string; bio: string;
    downloadCV: string; education: string; location: string;
    active: string; ongoing: string; eduItems: EduItem[];
  };
  contact: {
    label: string; title1: string; title2: string; description: string;
    infoItems: InfoItem[]; findMeOn: string;
    form: {
      namePlaceholder: string; emailPlaceholder: string;
      projectTypePlaceholder: string; projectTypes: string[];
      messagePlaceholder: string; submit: string;
      successTitle: string; successText: string;
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
}

export const translations = {
  en: {
    nav: {
      work: 'Work',
      skills: 'Approach',
      certifications: 'Certifications',
      aiLab: 'AI Lab',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      available: 'Available now',
      subtitle: 'UX/UI & Web Designer · Creative Technologist & AI Builder',
      tagline: 'Designing human-centered experiences,',
      tagline2: 'powered by AI.',
      cta: 'View my work',
      stats: [
        { num: '4+', label: 'Years of Experience' },
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
    aiLab: {
      label: 'AI Lab',
      title1: 'Where AI Meets',
      title2: 'Design',
      description:
        'Where design meets artificial intelligence: a creative lab of generated visuals, videos and experiments. Exploring the frontier of AI-augmented creativity.',
      tags: [
        { label: 'AI Image', color: '#AAFF00' },
        { label: 'AI Video', color: '#FF6B6B' },
        { label: 'AI Code', color: '#6B9FFF' },
      ],
      tiles: [
        { id: 1, type: 'AI Image', title: 'Abstract Dreamscape' },
        { id: 2, type: 'AI Video', title: 'Neon Cityscape Loop' },
        { id: 3, type: 'AI Code', title: 'UI Component Generator' },
        { id: 4, type: 'AI Image', title: 'Neural Pattern Study' },
        { id: 5, type: 'AI Video', title: 'Data Morphing Loop' },
        { id: 6, type: 'AI Code', title: 'Generative Layout System' },
      ],
      toolsLabel: 'Tools I Use',
      tools: ['ChatGPT', 'Claude Code', 'ElevenLabs', 'Nano Banana', 'Veo3'],
    },
    about: {
      label: 'About',
      title: 'About Me',
      openTo: 'Open to new projects and creative collaborations',
      bio: "I'm Fábio, a UX/UI & Web Designer with 4+ years of experience, specialized in creating intuitive interfaces and high-converting landing pages. I also produce assets for digital campaigns, from static images to videos, always aligned with each project's visual strategy. I work at the intersection of user experience and business goals, always focused on usability, strategy, and real results. AI is part of my creative process, helping me design faster, explore more ideas, and deliver better work.",
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
        'Open to new projects and creative collaborations. Based in Bahia, Brazil, working globally.',
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
        successTitle: 'Message sent! ✓',
        successText: "I'll get back to you within 24 hours.",
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
      copyright: '© 2024 Fábio José · Designed & built with care.',
      backToTop: 'Back to top ↑',
    },
    lacrei: {
      backToWork: '← Back to work',
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
  },

  pt: {
    nav: {
      work: 'Trabalhos',
      skills: 'Abordagem',
      certifications: 'Certificações',
      aiLab: 'AI Lab',
      about: 'Sobre',
      contact: 'Contato',
    },
    hero: {
      available: 'Disponível agora',
      subtitle: 'UX/UI & Web Designer · Creative Technologist & AI Builder',
      tagline: 'Criando experiências centradas no humano,',
      tagline2: 'impulsionadas por IA.',
      cta: 'Ver meus trabalhos',
      stats: [
        { num: '4+', label: 'Anos de Experiência' },
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
    aiLab: {
      label: 'AI Lab',
      title1: 'Onde IA Encontra',
      title2: 'o Design',
      description:
        'Onde o design encontra a inteligência artificial: um laboratório criativo de visuais, vídeos e experimentos gerados por IA. Explorando a fronteira da criatividade aumentada por IA.',
      tags: [
        { label: 'Imagem IA', color: '#AAFF00' },
        { label: 'Vídeo IA', color: '#FF6B6B' },
        { label: 'Código IA', color: '#6B9FFF' },
      ],
      tiles: [
        { id: 1, type: 'Imagem IA', title: 'Paisagem Onírica' },
        { id: 2, type: 'Vídeo IA', title: 'Loop Cidade Neon' },
        { id: 3, type: 'Código IA', title: 'Gerador de Componentes' },
        { id: 4, type: 'Imagem IA', title: 'Estudo de Padrões Neurais' },
        { id: 5, type: 'Vídeo IA', title: 'Loop de Dados Morphing' },
        { id: 6, type: 'Código IA', title: 'Sistema de Layout Generativo' },
      ],
      toolsLabel: 'Ferramentas que Uso',
      tools: ['ChatGPT', 'Claude Code', 'ElevenLabs', 'Nano Banana', 'Veo3'],
    },
    about: {
      label: 'Sobre',
      title: 'Sobre Mim',
      openTo: 'Aberto a novos projetos e colaborações criativas',
      bio: 'Sou Fábio, UX/UI & Web Designer com mais de 4 anos de experiência, especializado em criar interfaces intuitivas e landing pages de alta conversão. Produzo também peças para campanhas digitais, de imagens estáticas a vídeos, sempre alinhado com a estratégia visual de cada projeto. Atuo na interseção entre experiência do usuário e objetivos de negócio, sempre focado em usabilidade, estratégia e resultados reais. A IA faz parte do meu processo criativo, me ajudando a projetar mais rápido, explorar mais ideias e entregar trabalhos melhores.',
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
        'Aberto a novos projetos e colaborações criativas. Baseado na Bahia, Brasil, atuando globalmente.',
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
        successTitle: 'Mensagem enviada! ✓',
        successText: 'Retornarei em até 24 horas.',
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
      copyright: '© 2024 Fábio José · Desenhado & construído com cuidado.',
      backToTop: 'Voltar ao topo ↑',
    },
    lacrei: {
      backToWork: '← Voltar para trabalhos',
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
  },
} satisfies { en: TranslationShape; pt: TranslationShape };

export type Translations = TranslationShape;