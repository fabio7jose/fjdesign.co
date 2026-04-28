export type Lang = 'pt' | 'en';

/* ─── Sub-types ─────────────────────────────────────────────────── */
interface Stat     { num: string; label: string }
interface SkillCard { title: string; body: string }
interface AiTag    { label: string; color: string }
interface AiTile   { id: number; type: string; title: string }
interface EduItem  { degree: string; school: string; period: string; status: string }
interface InfoItem { label: string; value: string; isAvailability: boolean }

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
  },
} satisfies { en: TranslationShape; pt: TranslationShape };

export type Translations = TranslationShape;