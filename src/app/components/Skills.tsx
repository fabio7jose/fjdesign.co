import React from 'react';
import { motion } from 'motion/react';
import { useTheme, useLang } from '../App';

export function Skills() {
  const { isDark } = useTheme();
  const { t } = useLang();

  const text       = isDark ? '#ffffff'                    : '#0A0A0A';
  const textMuted  = 'var(--color-text-muted)';
  const border     = isDark ? 'rgba(255,255,255,0.08)'     : 'rgba(0,0,0,0.08)';
  const bg         = isDark ? '#0A0A0A'                    : '#F5F5F0';
  const cardBg     = isDark ? '#111111'                    : '#ffffff';
  const accent     = isDark ? '#AAFF00'                    : '#5C8A00';

  return (
    <section id="skills" style={{ backgroundColor: bg, padding: '80px 2rem' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

        {/* ── Eyebrow label ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}
        >
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.7rem',
              fontWeight: 400,
              color: accent,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            {t.skills.label}
          </span>
          <span
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.75rem', color: textMuted, letterSpacing: '0.05em' }}
          >
            02
          </span>
        </motion.div>

        {/* ── Section title ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          style={{ borderTop: `1px solid ${border}`, paddingTop: '2rem', marginBottom: '2rem' }}
        >
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(2.5rem, 5vw, 5rem)',
              fontWeight: 700,
              color: text,
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              margin: 0,
            }}
          >
            {t.skills.title}
          </h2>
        </motion.div>

        {/* ── 3-column card grid ── */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: '16px', alignItems: 'stretch' }}
        >
          {t.skills.cards.map((card, i) => {
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                style={{
                  backgroundColor: cardBg,
                  border: `1px solid ${border}`,
                  borderRadius: '4px',
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                {/* Card title */}
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: text,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.2,
                    margin: 0,
                  }}
                >
                  {card.title}
                </h3>

                {/* Two-sentence body */}
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.9rem',
                    fontWeight: 400,
                    color: textMuted,
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {card.body}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}