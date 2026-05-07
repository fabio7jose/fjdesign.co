import { createBrowserRouter } from 'react-router';
import { Home } from './pages/Home';
import { CaseStudyLacrei } from './pages/CaseStudyLacrei';
import { CaseStudyGuiaMoteis } from './pages/CaseStudyGuiaMoteis';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/work/lacrei-saude',
    Component: CaseStudyLacrei,
  },
  {
    path: '/work/guia-de-moteis',
    Component: CaseStudyGuiaMoteis,
  },
]);
