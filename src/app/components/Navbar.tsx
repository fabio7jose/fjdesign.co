import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme, useLang } from '../App';

export function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.work, href: '#work' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.certifications, href: '#certifications' },
    { label: t.nav.motionContent, href: '#motion-content' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const bg = isDark ? '#0A0A0A' : '#F5F5F0';
  const text = isDark ? '#ffffff' : '#0A0A0A';
  const textMuted = 'var(--color-text-muted)';
  const border = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';
  const accent = isDark ? '#AAFF00' : '#5C8A00';

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backgroundColor: scrolled
            ? isDark ? 'rgba(10,10,10,0.92)' : 'rgba(245,245,240,0.92)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? `1px solid ${border}` : '1px solid transparent',
          transition: 'background-color 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
            {/* Logo */}
            <a
              href="/"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '1.5rem',
                fontWeight: 700,
                color: accent,
                textDecoration: 'none',
                letterSpacing: '-0.02em',
              }}
            >
              FJ.
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex" style={{ alignItems: 'center', gap: '2rem' }}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.875rem',
                    fontWeight: 400,
                    color: isDark ? 'rgba(255,255,255,0.65)' : 'rgba(10,10,10,0.65)',
                    textDecoration: 'none',
                    letterSpacing: '0.01em',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = accent)}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = isDark ? 'rgba(255,255,255,0.65)' : 'rgba(10,10,10,0.65)')
                  }
                >
                  {link.label}
                </a>
              ))}

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                style={{
                  background: 'none',
                  border: `1px solid ${border}`,
                  borderRadius: '50%',
                  width: '38px',
                  height: '38px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: text,
                  transition: 'border-color 0.2s ease, color 0.2s ease',
                  padding: 0,
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = accent;
                  e.currentTarget.style.color = accent;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = border;
                  e.currentTarget.style.color = text;
                }}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={15} /> : <Moon size={15} />}
              </button>

              {/* Language Toggle Pill */}
              <LangPill lang={lang} toggleLang={toggleLang} border={border} textMuted={textMuted} accent={accent} />
            </div>

            {/* Mobile: right side */}
            <div className="flex md:hidden" style={{ alignItems: 'center', gap: '0.75rem' }}>
              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: text,
                  padding: '4px',
                  display: 'flex',
                  alignItems: 'center',
                }}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* Mobile language pill */}
              <LangPill lang={lang} toggleLang={toggleLang} border={border} textMuted={textMuted} accent={accent} small />

              {/* Hamburger */}
              <button
                onClick={() => setMenuOpen((v) => !v)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: text,
                  padding: '4px',
                  display: 'flex',
                  alignItems: 'center',
                }}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '72px',
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 99,
            backgroundColor: isDark ? 'rgba(10,10,10,0.98)' : 'rgba(245,245,240,0.98)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            padding: '3rem 2rem',
            gap: '0',
          }}
        >
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '2.5rem',
                fontWeight: 600,
                color: text,
                textDecoration: 'none',
                padding: '1rem 0',
                borderBottom: `1px solid ${border}`,
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = accent)}
              onMouseLeave={(e) => (e.currentTarget.style.color = text)}
            >
              {String(i + 1).padStart(2, '0')} — {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}

// ─── Language Pill Sub-component ──────────────────────────────────────────────
interface LangPillProps {
  lang: string;
  toggleLang: () => void;
  border: string;
  textMuted: string;
  accent: string;
  small?: boolean;
}

function LangPill({ lang, toggleLang, border, textMuted, accent, small }: LangPillProps) {
  const pad = small ? '0.28rem 0.55rem' : '0.32rem 0.65rem';
  const fs = small ? '0.65rem' : '0.7rem';
  const dividerColor = border;

  return (
    <button
      onClick={toggleLang}
      aria-label="Toggle language"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        border: `1px solid ${border}`,
        borderRadius: '999px',
        background: 'none',
        cursor: 'pointer',
        padding: 0,
        overflow: 'hidden',
        flexShrink: 0,
        transition: 'border-color 0.2s ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = accent)}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = border)}
    >
      <span
        style={{
          padding: pad,
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: fs,
          fontWeight: 600,
          letterSpacing: '0.06em',
          color: lang === 'pt' ? accent : textMuted,
          transition: 'color 0.2s ease',
          lineHeight: 1,
        }}
      >
        PT
      </span>
      <span
        style={{
          width: '1px',
          height: '12px',
          backgroundColor: dividerColor,
          flexShrink: 0,
        }}
      />
      <span
        style={{
          padding: pad,
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: fs,
          fontWeight: 600,
          letterSpacing: '0.06em',
          color: lang === 'en' ? accent : textMuted,
          transition: 'color 0.2s ease',
          lineHeight: 1,
        }}
      >
        EN
      </span>
    </button>
  );
}