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
    tools: string;
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
      projectDescription: 'Designing an inclusive health flow for the LGBT+ community, within an established brand design system and visual identity',
      rolePill: 'Volunteer UX Designer',
      year: '2024',
      methodology: 'Design Thinking',
      tools: 'Figma · Miro',
      prototypeLabel: 'Prototype',
      viewFigma: 'View in Figma →',
      problemLabel: 'THE PROBLEM',
      problemHeading: "Finding a welcoming healthcare professional shouldn't be this hard",
      problemBody:
        'The LGBT+ community faces real barriers to healthcare: discrimination, discomfort, and a lack of professionals prepared to provide respectful care. Lacrei Saúde was created to change this, connecting people to welcoming professionals. My challenge: design an intuitive flow that conveyed safety from the very first click.',
      myRoleTitle: 'My Role',
      roleCardTitle: 'What I did',
      roleCardItems: ['UX Research', 'Wireframing', 'Prototyping', 'UI Design'],
      withCardTitle: 'With',
      withCardValue: 'Individual volunteer project',
      constraintsCardTitle: 'Constraints',
      constraintsCardValue: 'Fixed brief, brand materials and visual identity already provided. The design system already existed. My focus was the flow and user experience.',
      processLabel: 'PROCESS',
      steps: [
        {
          num: '01',
          label: 'Empathy & Research',
          heading: 'Listening before designing',
          body: 'Through research on the LGBT+ health context, we identified that discrimination and prejudice are the main barriers to healthcare access, with a direct impact on mental health. This discovery guided every design decision.',
        },
        {
          num: '02',
          label: 'Define',
          heading: 'Sharpening the problem',
          body: "The core problem was the difficulty finding professionals who convey safety and comfort. Lacrei's brief defined 4 key screens: Login, Professional Search, Professional Profile, and Contact, each requiring special attention to trust and inclusion signals.",
        },
        {
          num: '03',
          label: 'Ideation',
          heading: 'Diverging before converging',
          body: 'I created a persona and user journey map in Miro as a low-fidelity prototype to map needs and pain points. I generated multiple directions for each screen, focusing on advanced filters, real-time availability and microinteractions that progressively build trust.',
        },
        {
          num: '04',
          label: 'Prototype',
          heading: 'From low-fi to high-fi',
          body: "Low-fidelity wireframes from Miro were refined into a fully navigable high-fidelity Figma prototype, with 5 complete screens using Lacrei's existing design system and established brand visual identity.",
        },
      ],
      solutionLabel: 'THE SOLUTION',
      solutionHeading: 'A flow that puts the user first',
      screens: [
        { label: 'Welcome Screen', annotation: 'Inclusive welcome with clear navigation and quick access to professional search' },
        { label: 'Login Screen', annotation: 'Clean entry with inclusive language that builds trust from the first click' },
        { label: 'Post-login Home', annotation: 'Personalized view after login, with location-based recommendations' },
        { label: 'Search Area', annotation: 'Map view with advanced filters by specialty and availability' },
        { label: 'Professional Profile', annotation: 'Trust signals and welcoming indicators that provide safety before contact' },
      ],
      learningsHeading: "What I'd take to the next project",
      learnings: [
        'When designing for vulnerable communities, every microcopy choice matters. A single word can make the user feel safe or excluded.',
        'Working within a fixed brief forced me to be more intentional. With fewer degrees of freedom, each design decision carries more weight.',
        'Mapping the emotional journey before touching the UI was the highest-impact step. It kept every screen anchored to real user needs, not visual preferences.',
      ],
      ctaPrototype: 'View the prototype',
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
      projectDescription: 'Design de um fluxo de saúde inclusivo para a comunidade LGBT+, dentro de um design system e identidade visual já estabelecidos pela marca',
      rolePill: 'UX Designer Voluntário',
      year: '2024',
      methodology: 'Design Thinking',
      tools: 'Figma · Miro',
      prototypeLabel: 'Protótipo',
      viewFigma: 'Ver no Figma →',
      problemLabel: 'O PROBLEMA',
      problemHeading: 'Encontrar um profissional de saúde acolhedor não deveria ser tão difícil',
      problemBody:
        'A população LGBT+ enfrenta barreiras reais no acesso à saúde: discriminação, desconforto e falta de profissionais preparados para atender com respeito. A Lacrei Saúde surgiu para mudar isso, conectando pessoas a profissionais acolhedores. Meu desafio: projetar um fluxo intuitivo que transmitisse segurança desde o primeiro clique.',
      myRoleTitle: 'Meu Papel',
      roleCardTitle: 'O que eu fiz',
      roleCardItems: ['UX Research', 'Wireframing', 'Prototipagem', 'UI Design'],
      withCardTitle: 'Com quem',
      withCardValue: 'Projeto voluntário individual',
      constraintsCardTitle: 'Restrições',
      constraintsCardValue: 'Briefing fixo, materiais e identidade visual da marca já fornecidos. O design system já existia. Meu foco foi o fluxo e a experiência do usuário.',
      processLabel: 'PROCESSO',
      steps: [
        {
          num: '01',
          label: 'Empatia & Pesquisa',
          heading: 'Ouvir antes de projetar',
          body: 'Através de pesquisas sobre o contexto da saúde LGBT+, identificamos que discriminação e preconceito são as principais barreiras ao acesso, com impacto direto na saúde mental. Essa descoberta guiou cada decisão de design do projeto.',
        },
        {
          num: '02',
          label: 'Definição',
          heading: 'Afiar o problema',
          body: 'O problema central era a dificuldade em encontrar profissionais que transmitissem segurança e acolhimento. O briefing da Lacrei definiu 4 telas-chave: Login, Busca de Profissionais, Perfil do Profissional e Contato, cada uma exigindo atenção especial aos sinais de confiança e inclusão.',
        },
        {
          num: '03',
          label: 'Ideação',
          heading: 'Divergir antes de convergir',
          body: 'Criei uma persona e um mapa de jornada do usuário no Miro como protótipo de baixa fidelidade para mapear necessidades e pontos de dor. Gerei múltiplas direções para cada tela, focando em filtros avançados, disponibilidade em tempo real e microinterações que constroem confiança progressivamente.',
        },
        {
          num: '04',
          label: 'Prototipação',
          heading: 'Do low-fi ao high-fi',
          body: 'Os wireframes de baixa fidelidade do Miro foram refinados em um protótipo de alta fidelidade navegável no Figma, com 5 telas completas utilizando o design system e identidade visual já estabelecidos pela marca Lacrei.',
        },
      ],
      solutionLabel: 'A SOLUÇÃO',
      solutionHeading: 'Um fluxo que coloca o usuário em primeiro lugar',
      screens: [
        { label: 'Tela de Início', annotation: 'Boas-vindas inclusivas com navegação clara e acesso rápido à busca de profissionais' },
        { label: 'Tela de Login', annotation: 'Entrada limpa com linguagem inclusiva que constrói confiança desde o primeiro clique' },
        { label: 'Home Pós-login', annotation: 'Visão personalizada após o acesso, com recomendações baseadas em localização' },
        { label: 'Área de Busca', annotation: 'Visualização em mapa com filtros avançados por especialidade e disponibilidade' },
        { label: 'Perfil do Profissional', annotation: 'Sinais de confiança e indicadores de acolhimento que dão segurança antes do contato' },
      ],
      learningsHeading: 'O que eu levaria para o próximo projeto',
      learnings: [
        'Ao projetar para comunidades vulneráveis, cada escolha de microtexto importa. Uma única palavra pode fazer o usuário se sentir seguro ou excluído.',
        'Trabalhar dentro de um briefing fixo me forçou a ser mais intencional. Com menos graus de liberdade, cada decisão de design carrega mais peso.',
        'Mapear a jornada emocional antes de tocar na UI foi o passo de maior impacto. Manteve cada tela ancorada nas necessidades reais do usuário, não nas preferências visuais.',
      ],
      ctaPrototype: 'Ver o protótipo',
      previousProject: 'Projeto anterior',
      nextProject: 'Próximo projeto',
    },
  },
} satisfies { en: TranslationShape; pt: TranslationShape };

export type Translations = TranslationShape;