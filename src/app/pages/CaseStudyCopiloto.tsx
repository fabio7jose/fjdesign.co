import React, { useEffect } from 'react';
import { Link } from 'react-router';
import { AlertTriangle, Bug, Layers } from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme, useLang } from '../App';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CaseStudyNavigation } from '../components/CaseStudyNavigation';

const CASE_ACCENT = '#6366F1';

// Read-only FigJam embeds, one per artifact, each scoped to its board section
// via node-id. They render for site visitors only if the board's share setting
// is "anyone with the link can view".
const EMBEDS = {
  affinity: 'https://embed.figma.com/board/AzAdXDmDpkvgcFKxTllWVp/Affinity-Map?embed-host=share',
  jtbds: 'https://embed.figma.com/board/TAg2oK7Tnu5wuxi0j9bvzg/Copiloto-Financeiro?node-id=28-8&embed-host=share',
  arqIa: 'https://embed.figma.com/board/TAg2oK7Tnu5wuxi0j9bvzg/Copiloto-Financeiro?node-id=148-198&embed-host=share',
  flows: 'https://embed.figma.com/board/TAg2oK7Tnu5wuxi0j9bvzg/Copiloto-Financeiro?node-id=126-87&embed-host=share',
  persona: 'https://embed.figma.com/board/TAg2oK7Tnu5wuxi0j9bvzg/Copiloto-Financeiro?node-id=77-173&embed-host=share',
};

interface ArtifactEmbedProps {
  src: string;
  caption: string;
  cardBg: string;
  border: string;
  textMuted: string;
}

function ArtifactEmbed({ src, caption, cardBg, border, textMuted }: ArtifactEmbedProps) {
  return (
    <figure style={{ margin: '1.75rem 0 0' }}>
      <div
        style={{
          width: '100%',
          height: 'min(70vh, 560px)',
          borderRadius: '12px',
          overflow: 'hidden',
          border: `1px solid ${border}`,
          backgroundColor: cardBg,
        }}
      >
        <iframe
          src={src}
          title={caption}
          loading="lazy"
          allowFullScreen
          style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
        />
      </div>
      <figcaption
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.8rem',
          lineHeight: 1.5,
          color: textMuted,
          marginTop: '0.75rem',
          fontStyle: 'italic',
        }}
      >
        {caption}
      </figcaption>
    </figure>
  );
}

export function CaseStudyCopiloto() {
  const { isDark } = useTheme();
  const { t } = useLang();

  const text       = isDark ? '#ffffff' : '#0A0A0A';
  const textMuted  = isDark ? 'rgba(255,255,255,0.45)' : 'rgba(10,10,10,0.45)';
  const border     = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';
  const bg         = isDark ? '#0A0A0A' : '#F5F5F0';
  const cardBg     = isDark ? '#111111' : '#ffffff';
  const accent     = isDark ? '#AAFF00' : '#5C8A00';
  const caseAccentAlpha = isDark ? 'rgba(99,102,241,0.1)' : 'rgba(99,102,241,0.07)';

  useEffect(() => {
    document.title = 'Copiloto Financeiro | Fábio José';
    window.scrollTo(0, 0);
  }, []);

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.7rem',
    color: CASE_ACCENT,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    display: 'block',
    marginBottom: '0.75rem',
  };

  const pillShared: React.CSSProperties = {
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.75rem',
    fontWeight: 500,
    padding: '0.3rem 0.9rem',
    borderRadius: '999px',
    letterSpacing: '0.02em',
    whiteSpace: 'nowrap' as const,
  };

  const reflectionIcons = [AlertTriangle, Bug, Layers];

  // FigJam embeds keyed to the process step they illustrate.
  const stepArtifacts: Record<number, { src: string; caption: string }> = {
    1: { src: EMBEDS.affinity, caption: t.copiloto.artifacts.affinityCaption },
    2: { src: EMBEDS.jtbds, caption: t.copiloto.artifacts.jtbdsCaption },
    3: { src: EMBEDS.flows, caption: t.copiloto.artifacts.flowsCaption },
  };

  return (
    <div style={{ backgroundColor: bg, minHeight: '100vh', transition: 'background-color 0.3s ease' }}>
      <Navbar />
      <div style={{ paddingTop: '72px' }}>

        {/* ── 1. Back navigation ── */}
        <div
          style={{
            position: 'sticky',
            top: '72px',
            zIndex: 90,
            backgroundColor: bg,
            borderBottom: `1px solid ${border}`,
            transition: 'background-color 0.3s ease',
          }}
        >
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0.6rem 2rem' }}>
            <Link
              to="/#work"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                color: textMuted,
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = accent)}
              onMouseLeave={e => (e.currentTarget.style.color = textMuted)}
            >
              {t.copiloto.backToWork}
            </Link>
          </div>
        </div>

        {/* ── 2. Hero ── */}
        <section style={{ padding: '60px 2rem 80px' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div className="grid grid-cols-1 md:grid-cols-5" style={{ gap: '3rem', alignItems: 'center' }}>

              {/* Left ~60% */}
              <motion.div
                className="md:col-span-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Scope badge */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    backgroundColor: caseAccentAlpha,
                    border: `1px solid ${CASE_ACCENT}`,
                    borderRadius: '999px',
                    padding: '0.28rem 0.85rem',
                    marginBottom: '2rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      color: CASE_ACCENT,
                      letterSpacing: '0.03em',
                    }}
                  >
                    {t.copiloto.scopeBadge}
                  </span>
                </div>

                <h1
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                    fontWeight: 700,
                    color: text,
                    letterSpacing: '-0.03em',
                    lineHeight: 1.05,
                    margin: '0 0 1.25rem',
                  }}
                >
                  {t.copiloto.projectTitle}
                </h1>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '20px',
                    color: textMuted,
                    lineHeight: 1.6,
                    margin: '0 0 2rem',
                    maxWidth: '540px',
                  }}
                >
                  {t.copiloto.projectDescription}
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
                  <span style={{ ...pillShared, backgroundColor: CASE_ACCENT, color: '#ffffff' }}>
                    {t.copiloto.rolePill}
                  </span>
                  <span style={{ ...pillShared, border: `1px solid ${border}`, color: textMuted }}>
                    {t.copiloto.methodology}
                  </span>
                  {t.copiloto.tools.map(tool => (
                    <span key={tool} style={{ ...pillShared, border: `1px solid ${border}`, color: textMuted }}>
                      {tool}
                    </span>
                  ))}
                </div>

                <div>
                  <span style={labelStyle}>{t.copiloto.completedStagesLabel}</span>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.9rem',
                      lineHeight: 1.6,
                      color: textMuted,
                      margin: 0,
                      maxWidth: '540px',
                    }}
                  >
                    {t.copiloto.completedStages}
                  </p>
                </div>
              </motion.div>

              {/* Right ~40% — typographic quote card */}
              <motion.div
                className="md:col-span-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <div
                  style={{
                    backgroundColor: isDark ? '#0c0c18' : '#eeeef8',
                    border: `2px solid ${CASE_ACCENT}`,
                    borderRadius: '16px',
                    padding: 'clamp(2rem, 4vw, 3rem)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    minHeight: '280px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)',
                      fontWeight: 700,
                      fontStyle: 'italic',
                      color: isDark ? 'rgba(255,255,255,0.9)' : 'rgba(10,10,10,0.85)',
                      lineHeight: 1.3,
                      display: 'block',
                    }}
                  >
                    &ldquo;{t.copiloto.heroQuote}&rdquo;
                  </span>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.7rem',
                      color: CASE_ACCENT,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      marginTop: '1.5rem',
                      display: 'block',
                    }}
                  >
                    {t.copiloto.highlightCard2Label}
                  </span>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── 3. The Challenge ── */}
        <section style={{ padding: '0 2rem 80px' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                backgroundColor: cardBg,
                borderLeft: `3px solid ${CASE_ACCENT}`,
                borderRadius: '0 12px 12px 0',
                padding: 'clamp(2rem, 4vw, 3rem)',
              }}
            >
              <div className="flex flex-col md:flex-row" style={{ gap: '2.5rem', alignItems: 'flex-start' }}>

                {/* Left — text */}
                <div style={{ flex: '3 1 0', minWidth: 0 }}>
                  <span style={labelStyle}>{t.copiloto.challengeLabel}</span>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '18px',
                      lineHeight: 1.8,
                      color: textMuted,
                      margin: '0 0 1.5rem',
                    }}
                  >
                    {t.copiloto.challengeBody1}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '18px',
                      lineHeight: 1.8,
                      color: textMuted,
                      margin: 0,
                    }}
                  >
                    {t.copiloto.challengeBody2}
                  </p>
                </div>

                {/* Right — highlight cards */}
                <div style={{ flex: '2 1 0', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div
                    style={{
                      backgroundColor: caseAccentAlpha,
                      border: `1px solid ${border}`,
                      borderRadius: '12px',
                      padding: '24px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '11px',
                        color: CASE_ACCENT,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        display: 'block',
                        marginBottom: '0.6rem',
                      }}
                    >
                      {t.copiloto.highlightCard1Label}
                    </span>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '16px',
                        lineHeight: 1.6,
                        color: text,
                        margin: 0,
                      }}
                    >
                      {t.copiloto.highlightCard1Value}
                    </p>
                  </div>
                  <div
                    style={{
                      backgroundColor: caseAccentAlpha,
                      border: `1px solid ${border}`,
                      borderRadius: '12px',
                      padding: '24px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '11px',
                        color: CASE_ACCENT,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        display: 'block',
                        marginBottom: '0.6rem',
                      }}
                    >
                      {t.copiloto.highlightCard2Label}
                    </span>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '16px',
                        lineHeight: 1.6,
                        color: text,
                        margin: 0,
                      }}
                    >
                      {t.copiloto.highlightCard2Value}
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        </section>

        {/* ── 4. My Role ── */}
        <section style={{ padding: '0 2rem 80px' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '1.5rem',
                fontWeight: 700,
                color: text,
                letterSpacing: '-0.02em',
                margin: '0 0 2rem',
              }}
            >
              {t.copiloto.myRoleTitle}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '1.5rem' }}>

              {/* Card 1: What I did */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                style={{ backgroundColor: cardBg, border: `1px solid ${border}`, borderRadius: '12px', padding: '2rem' }}
              >
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    color: CASE_ACCENT,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '1.25rem',
                  }}
                >
                  {t.copiloto.roleCardTitle}
                </span>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {t.copiloto.roleCardItems.map(item => (
                    <li
                      key={item}
                      style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1rem', fontWeight: 500, color: text }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Card 2: Second layer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.07 }}
                style={{ backgroundColor: cardBg, border: `1px solid ${border}`, borderRadius: '12px', padding: '2rem' }}
              >
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    color: CASE_ACCENT,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '1.25rem',
                  }}
                >
                  {t.copiloto.secondLayerCardTitle}
                </span>
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: text,
                    margin: 0,
                    lineHeight: 1.55,
                  }}
                >
                  {t.copiloto.secondLayerCardValue}
                </p>
              </motion.div>

              {/* Card 3: Stack */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.14 }}
                style={{ backgroundColor: cardBg, border: `1px solid ${border}`, borderRadius: '12px', padding: '2rem' }}
              >
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    color: CASE_ACCENT,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '1.25rem',
                  }}
                >
                  {t.copiloto.stackCardTitle}
                </span>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {t.copiloto.stackCardItems.map(item => (
                    <li
                      key={item}
                      style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1rem', fontWeight: 500, color: text }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── 5. Process — vertical timeline ── */}
        <section
          style={{
            padding: '80px 2rem',
            backgroundColor: cardBg,
            borderTop: `1px solid ${border}`,
          }}
        >
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              style={{ marginBottom: '4rem' }}
            >
              <span style={labelStyle}>{t.copiloto.processLabel}</span>
            </motion.div>

            <div style={{ position: 'relative' }}>
              {/* Connecting line */}
              <div
                style={{
                  position: 'absolute',
                  left: '23px',
                  top: '24px',
                  bottom: '24px',
                  width: '1px',
                  backgroundColor: CASE_ACCENT,
                  opacity: 0.2,
                }}
              />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                {t.copiloto.steps.map((step, i) => (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}
                  >
                    {/* Step circle */}
                    <div
                      style={{
                        flexShrink: 0,
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        backgroundColor: isDark ? '#15152a' : '#eaebf8',
                        border: `2px solid ${CASE_ACCENT}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          color: CASE_ACCENT,
                        }}
                      >
                        {step.num}
                      </span>
                    </div>

                    {/* Content */}
                    <div style={{ flex: 1, paddingTop: '0.6rem' }}>
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '0.65rem',
                          color: CASE_ACCENT,
                          letterSpacing: '0.15em',
                          textTransform: 'uppercase',
                          display: 'block',
                          marginBottom: '0.5rem',
                        }}
                      >
                        {step.label}
                      </span>
                      <h3
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: '1.25rem',
                          fontWeight: 700,
                          color: text,
                          letterSpacing: '-0.02em',
                          margin: '0 0 0.75rem',
                        }}
                      >
                        {step.heading}
                      </h3>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '1rem',
                          lineHeight: 1.75,
                          color: textMuted,
                          margin: '0 0 0.85rem',
                        }}
                      >
                        {step.body}
                      </p>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '0.85rem',
                          lineHeight: 1.6,
                          color: textMuted,
                          fontStyle: 'italic',
                          margin: 0,
                          opacity: 0.7,
                        }}
                      >
                        AI: {step.aiUse}
                      </p>
                      {stepArtifacts[i] && (
                        <ArtifactEmbed
                          src={stepArtifacts[i].src}
                          caption={stepArtifacts[i].caption}
                          cardBg={bg}
                          border={border}
                          textMuted={textMuted}
                        />
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. Methodological Reflection ── */}
        <section style={{ padding: '80px 2rem' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              style={{ marginBottom: '3rem' }}
            >
              <span style={labelStyle}>{t.copiloto.reflectionLabel}</span>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '18px',
                  lineHeight: 1.8,
                  color: textMuted,
                  maxWidth: '700px',
                  margin: 0,
                }}
              >
                {t.copiloto.reflectionIntro}
              </p>
            </motion.div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
              {t.copiloto.reflectionCards.map((card, i) => {
                const Icon = reflectionIcons[i];
                return (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.07 }}
                    style={{
                      backgroundColor: cardBg,
                      borderLeft: `3px solid ${CASE_ACCENT}`,
                      borderRadius: '0 12px 12px 0',
                      padding: '2rem',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        marginBottom: '1rem',
                      }}
                    >
                      <Icon size={18} color={CASE_ACCENT} />
                      <span
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: '0.9rem',
                          fontWeight: 700,
                          color: text,
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {card.label}
                      </span>
                    </div>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '1rem',
                        lineHeight: 1.8,
                        color: textMuted,
                        margin: 0,
                      }}
                    >
                      {card.body}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <div style={{ margin: '0 auto 5rem' }}>
              <ArtifactEmbed
                src={EMBEDS.persona}
                caption={t.copiloto.artifacts.personaCaption}
                cardBg={cardBg}
                border={border}
                textMuted={textMuted}
              />
            </div>

            {/* Throughline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
                fontStyle: 'italic',
                fontWeight: 600,
                color: text,
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto',
                lineHeight: 1.4,
                letterSpacing: '-0.02em',
              }}
            >
              &ldquo;{t.copiloto.reflectionThroughline}&rdquo;
            </motion.p>
          </div>
        </section>

        {/* ── 7. Design Decisions ── */}
        <section
          style={{
            padding: '80px 2rem',
            backgroundColor: cardBg,
            borderTop: `1px solid ${border}`,
          }}
        >
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              style={{ marginBottom: '4rem' }}
            >
              <span style={labelStyle}>{t.copiloto.decisionsLabel}</span>
            </motion.div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
              {t.copiloto.decisions.map((decision, i) => (
                <React.Fragment key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.04 }}
                >
                  {decision.bridge && (
                    <p
                      style={{
                        paddingLeft: 'calc(72px + 2rem)',
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.8rem',
                        fontStyle: 'italic',
                        lineHeight: 1.6,
                        color: textMuted,
                        margin: '0 0 0.5rem',
                      }}
                    >
                      {decision.bridge}
                    </p>
                  )}
                  <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                    {/* Large muted number */}
                    <span
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: '64px',
                        fontWeight: 700,
                        color: textMuted,
                        lineHeight: 1,
                        flexShrink: 0,
                        opacity: 0.3,
                        minWidth: '72px',
                        textAlign: 'right',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {/* Text */}
                    <div style={{ paddingTop: '0.45rem' }}>
                      <h3
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: '1.2rem',
                          fontWeight: 700,
                          color: text,
                          letterSpacing: '-0.02em',
                          margin: '0 0 0.6rem',
                        }}
                      >
                        {decision.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '1rem',
                          lineHeight: 1.75,
                          color: textMuted,
                          margin: 0,
                        }}
                      >
                        {decision.body}
                      </p>
                    </div>
                  </div>
                </motion.div>
                {i === 0 && (
                  <div style={{ paddingLeft: 'calc(72px + 2rem)' }}>
                    <ArtifactEmbed
                      src={EMBEDS.arqIa}
                      caption={t.copiloto.artifacts.arqIaCaption}
                      cardBg={bg}
                      border={border}
                      textMuted={textMuted}
                    />
                  </div>
                )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* ── 8. Assumed Limits ── */}
        <section
          style={{
            padding: '80px 2rem',
            borderTop: `1px solid ${border}`,
          }}
        >
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              style={{ marginBottom: '2.5rem' }}
            >
              <span style={labelStyle}>{t.copiloto.limitsLabel}</span>
            </motion.div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', maxWidth: '680px' }}>
              {t.copiloto.limits.map((limit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}
                >
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '16px',
                      color: textMuted,
                      flexShrink: 0,
                      marginTop: '-2px',
                      opacity: 0.45,
                    }}
                  >
                    ·
                  </span>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '14px',
                      lineHeight: 1.6,
                      color: textMuted,
                      margin: 0,
                    }}
                  >
                    {limit}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 9. What comes next ── */}
        <section
          style={{
            padding: '80px 2rem',
            backgroundColor: cardBg,
            borderTop: `1px solid ${border}`,
          }}
        >
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '4rem' }}>

              {/* Left: next stages */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
              >
                <span style={labelStyle}>{t.copiloto.nextTitle}</span>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {t.copiloto.nextItems.map((item, i) => (
                    <li key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <span
                        style={{
                          flexShrink: 0,
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: CASE_ACCENT,
                          marginTop: '0.55rem',
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '1rem',
                          lineHeight: 1.6,
                          color: textMuted,
                        }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Right: what I already take */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1 }}
              >
                <span style={labelStyle}>{t.copiloto.takesTitle}</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {t.copiloto.takesItems.map((item, i) => (
                    <p
                      key={i}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '1rem',
                        lineHeight: 1.75,
                        color: textMuted,
                        margin: 0,
                        fontStyle: i === t.copiloto.takesItems.length - 1 ? 'italic' : 'normal',
                      }}
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        <CaseStudyNavigation currentSlug="copiloto" />

        {/* ── 10. Page footer ── */}
        <section
          style={{
            padding: '48px 2rem',
            borderTop: `1px solid ${border}`,
          }}
        >
          <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.85rem',
                color: textMuted,
                margin: '0 0 1.25rem',
                lineHeight: 1.6,
                opacity: 0.7,
              }}
            >
              {t.copiloto.pageFooterText}
            </p>
            <Link
              to="/#work"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.85rem',
                color: textMuted,
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = accent)}
              onMouseLeave={e => (e.currentTarget.style.color = textMuted)}
            >
              {t.copiloto.backToWork}
            </Link>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
}
