import { createBrowserRouter, redirect } from 'react-router';
import { projects } from './data/projects';
import { Home } from './pages/Home';
import { CaseStudyLacrei } from './pages/CaseStudyLacrei';
import { CaseStudyGuiaMoteis } from './pages/CaseStudyGuiaMoteis';
import { CaseStudyCopiloto } from './pages/CaseStudyCopiloto';
import { CaseStudyUltrafarma } from './pages/CaseStudyUltrafarma';

// Retain every page in the registry, but expose routes only for published cases.
const caseStudyPages = {
  lacrei: CaseStudyLacrei,
  guiaMoteis: CaseStudyGuiaMoteis,
  copiloto: CaseStudyCopiloto,
  ultrafarma: CaseStudyUltrafarma,
};

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  ...projects.map((project) => ({
    path: `/work/${project.slug}`,
    Component: caseStudyPages[project.translationKey],
  })),
  {
    path: '/work/*',
    loader: () => redirect('/#work'),
  },
]);
