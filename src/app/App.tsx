import React, { createContext, useContext, useState, useEffect } from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes';
import { type Lang, translations } from './i18n';
import './theme.css';

// ─── Theme Context ───────────────────────────────────────────────────────────
interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  isDark: true,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

// ─── Language Context ─────────────────────────────────────────────────────────
interface LangContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (typeof translations)['en'];
}

export const LangContext = createContext<LangContextType>({
  lang: 'pt',
  toggleLang: () => {},
  t: translations['pt'],
});

export const useLang = () => useContext(LangContext);

// ─── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [isDark, setIsDark] = useState(() => {
    // Block transitions before first paint so restoring a non-default theme
    // from localStorage doesn't cause a visible color flash.
    document.documentElement.classList.add('no-transition');
    try {
      const stored = localStorage.getItem('fabio-theme');
      return stored ? stored === 'dark' : true;
    } catch {
      return true;
    }
  });

  const [lang, setLang] = useState<Lang>(() => {
    try {
      const stored = localStorage.getItem('fabio-lang');
      return (stored as Lang) || 'pt';
    } catch {
      return 'pt';
    }
  });

  useEffect(() => {
    // Re-enable transitions after first render and paint.
    document.documentElement.classList.remove('no-transition');
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--color-text-muted',
      isDark ? 'rgba(255,255,255,0.45)' : 'rgba(10,10,10,0.45)',
    );
  }, [isDark]);

  useEffect(() => {
    try {
      localStorage.setItem('fabio-theme', isDark ? 'dark' : 'light');
    } catch {}
  }, [isDark]);

  useEffect(() => {
    try {
      localStorage.setItem('fabio-lang', lang);
    } catch {}
  }, [lang]);

  const toggleTheme = () => setIsDark((prev) => !prev);
  const toggleLang = () => setLang((prev) => (prev === 'pt' ? 'en' : 'pt'));

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <LangContext.Provider value={{ lang, toggleLang, t: translations[lang] }}>
        <RouterProvider router={router} />
      </LangContext.Provider>
    </ThemeContext.Provider>
  );
}
