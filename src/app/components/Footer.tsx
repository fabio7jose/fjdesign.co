import React from 'react';
import { useTheme, useLang } from '../App';

export function Footer() {
  const { isDark } = useTheme();
  const { t } = useLang();

  const textMuted = isDark ? 'rgba(255,255,255,0.35)' : 'rgba(10,10,10,0.35)';
  const border = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';
  const bg = isDark ? '#0A0A0A' : '#F5F5F0';
  const accent = isDark ? '#AAFF00' : '#5C8A00';

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      style={{
        backgroundColor: bg,
        borderTop: `1px solid ${border}`,
        padding: '3rem 2rem',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '1.4rem',
            fontWeight: 700,
            color: accent,
            letterSpacing: '-0.02em',
          }}
        >
          FJ.
        </div>

        {/* Copyright */}
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.75rem',
            color: textMuted,
            letterSpacing: '0.03em',
          }}
        >
          {t.footer.copyright}
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.75rem',
            color: textMuted,
            background: 'none',
            border: `1px solid ${border}`,
            borderRadius: '999px',
            padding: '0.4rem 1rem',
            cursor: 'pointer',
            letterSpacing: '0.05em',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = accent;
            e.currentTarget.style.borderColor = accent;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = textMuted;
            e.currentTarget.style.borderColor = border;
          }}
        >
          {t.footer.backToTop}
        </button>
      </div>
    </footer>
  );
}