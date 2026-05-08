import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme, useLang } from '../App';

export function Hero() {
  const { isDark } = useTheme();
  const { t } = useLang();

  const text = isDark ? '#ffffff' : '#0A0A0A';
  const textMuted = 'var(--color-text-muted)';
  const border = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';
  const bg = isDark ? '#0A0A0A' : '#F5F5F0';
  const accent = isDark ? '#AAFF00' : '#5C8A00';
  const accentFg = isDark ? '#0A0A0A' : '#ffffff';
  const accentAlpha = isDark ? 'rgba(170,255,0,0.3)' : 'rgba(92,138,0,0.25)';
  const accentBg = isDark ? 'rgba(170,255,0,0.05)' : 'rgba(92,138,0,0.07)';

  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      style={{
        minHeight: 'calc(100vh - 120px)',
        backgroundColor: bg,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: 'calc(72px + 40px) 2rem 40px',
        position: 'relative',
        overflow: 'hidden',
        marginBottom: 0,
      }}
    >
      {/* Background large text */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(8rem, 20vw, 22rem)',
          fontWeight: 700,
          color: isDark ? 'rgba(255,255,255,0.015)' : 'rgba(0,0,0,0.02)',
          whiteSpace: 'nowrap',
          userSelect: 'none',
          pointerEvents: 'none',
          letterSpacing: '-0.04em',
          lineHeight: 1,
          zIndex: 0,
        }}
      >
        DESIGN
      </div>

      {/* Max width container */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 2 }}>

        {/* Top badge row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '3rem',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          {/* Available badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              border: `1px solid ${accentAlpha}`,
              borderRadius: '999px',
              padding: '0.4rem 1rem',
              backgroundColor: accentBg,
            }}
          >
            <span
              className="pulse-dot"
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: accent,
                display: 'inline-block',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.8rem',
                fontWeight: 400,
                color: accent,
                letterSpacing: '0.03em',
              }}
            >
              {t.hero.available}
            </span>
          </div>

          {/* Title badge */}
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.75rem',
              fontWeight: 400,
              color: textMuted,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            {t.hero.subtitle}
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(3.5rem, 8.5vw, 10rem)',
              fontWeight: 700,
              lineHeight: 0.92,
              letterSpacing: '-0.03em',
              color: text,
              margin: '0 0 0.1em',
            }}
          >
            Fábio José
            <span style={{ color: accent }}> /</span>
          </h1>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(2rem, 5vw, 6rem)',
              fontWeight: 300,
              lineHeight: 1,
              letterSpacing: '-0.02em',
              color: isDark ? 'rgba(255,255,255,0.55)' : 'rgba(10,10,10,0.55)',
              margin: '0 0 2.5rem',
            }}
          >
            Product Designer
          </h1>
        </motion.div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem',
          }}
        >
          {/* Left: subheadline + CTA */}
          <div style={{ maxWidth: '480px' }}>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                fontWeight: 300,
                color: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(10,10,10,0.6)',
                lineHeight: 1.6,
                marginBottom: '2rem',
              }}
            >
              {t.hero.tagline}<br />{t.hero.tagline2}
            </p>
            <button
              onClick={scrollToWork}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                backgroundColor: accent,
                color: accentFg,
                border: 'none',
                borderRadius: '999px',
                padding: '0.9rem 2rem',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.95rem',
                fontWeight: 600,
                cursor: 'pointer',
                letterSpacing: '0.01em',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = isDark ? '0 8px 32px rgba(170,255,0,0.3)' : '0 8px 32px rgba(92,138,0,0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {t.hero.cta}
              <ArrowRight size={16} />
            </button>
          </div>

        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="hero-scroll-indicator"
          style={{
            position: 'absolute',
            bottom: '-3rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.4rem',
            cursor: 'pointer',
          }}
          onClick={scrollToWork}
        >
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.65rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: textMuted,
            }}
          >
            {t.hero.scroll}
          </span>
          <ArrowDown size={14} color={textMuted} />
        </motion.div>
      </div>

      {/* Horizontal divider — removed: MarqueeBanner provides its own borderTop */}
    </section>
  );
}