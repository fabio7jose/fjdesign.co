import { createBrowserRouter } from 'react-router';
import { Home } from './pages/Home';
import { CaseStudyLacrei } from './pages/CaseStudyLacrei';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/work/lacrei-saude',
    Component: CaseStudyLacrei,
  },
]);
