import lacreiThumbnail from '../../assets/lacrei/lacrei-thumbnail.png';
import guiaThumbnail from '../../assets/guia-moteis/guia-moteis-thumbnail.png';
import copilotoThumbnail from '../../assets/copiloto-financeiro/capa-copiloto-financeiro-pt.webp';

export type ProjectTranslationKey = 'copiloto' | 'lacrei' | 'guiaMoteis' | 'ultrafarma';

export interface Project {
  id: number;
  slug: string;
  translationKey: ProjectTranslationKey;
  addedOrder: number;
  title: { pt: string; en: string };
  context: string;
  category: string;
  image?: string;
  imagePosition?: string;
  tags: string[];
  tagsPt?: string[];
  year: string;
  quoteThumbnail?: { pt: string; en: string };
  inProgressLabel?: { pt: string; en: string };
}

const projectEntries: Project[] = [
  {
    id: 8,
    slug: 'ultrafarma',
    translationKey: 'ultrafarma',
    addedOrder: 4,
    title: {
      en: 'Ultrafarma Mobile Redesign',
      pt: 'Redesign Ultrafarma',
    },
    context: 'UX/UI DESIGN · HEURISTIC EVALUATION',
    category: 'UX Design',
    image: '/case-studies/ultrafarma/01 · Capa.png',
    imagePosition: 'center',
    tags: ['UX/UI Design', 'Heuristic Evaluation', 'Benchmarking', 'UI Kit & Tokens', 'Figma'],
    tagsPt: ['UX/UI Design', 'Avaliação Heurística', 'Benchmarking', 'UI Kit & Tokens', 'Figma'],
    year: '2026',
  },
  {
    id: 7,
    slug: 'copiloto',
    translationKey: 'copiloto',
    addedOrder: 5,
    title: {
      en: 'Copiloto Financeiro: Product Discovery with Critical AI Use',
      pt: 'Copiloto Financeiro: Product Discovery com uso crítico de IA',
    },
    context: 'UX RESEARCH · PRODUCT STRATEGY',
    category: 'UX Design',
    image: copilotoThumbnail,
    imagePosition: 'center',
    tags: ['UX Research', 'Product Strategy', 'AI Design', 'Figma'],
    tagsPt: ['UX Research', 'Product Strategy', 'AI Design', 'Figma'],
    year: '2025',
    inProgressLabel: {
      pt: 'Em andamento',
      en: 'In progress',
    },
  },
  {
    id: 0,
    slug: 'lacrei-saude',
    translationKey: 'lacrei',
    addedOrder: 2,
    title: {
      en: 'Lacrei Saúde: Inclusive Healthcare Platform',
      pt: 'Lacrei Saúde: Plataforma de Saúde Inclusiva',
    },
    context: 'UX/UI DESIGN · WEB PLATFORM',
    category: 'UX/UI DESIGN · WEB PLATFORM',
    image: lacreiThumbnail,
    imagePosition: '20% center',
    tags: ['UX Research', 'UI Design', 'Figma', 'Design Thinking'],
    tagsPt: ['UX Research', 'UI Design', 'Figma', 'Design Thinking'],
    year: '2024',
  },
  {
    id: 6,
    slug: 'guia-de-moteis',
    translationKey: 'guiaMoteis',
    addedOrder: 1,
    title: {
      en: 'Guia de Motéis GO: Landing Page Redesign',
      pt: 'Guia de Motéis GO: Redesign de Landing Page',
    },
    context: 'UI DESIGN · LANDING PAGE',
    category: 'Landing Pages',
    image: guiaThumbnail,
    tags: ['UX Research', 'Crazy 8s', 'Wireframing', 'UI Design'],
    tagsPt: ['UX Research', 'Crazy 8s', 'Wireframing', 'UI Design'],
    year: '2024',
  },
];

// Canonical order for the Home grid and every case-study navigation.
// A newly added case receives the next addedOrder number and appears first automatically.
export const projects = [...projectEntries].sort(
  (a, b) => b.addedOrder - a.addedOrder,
);
