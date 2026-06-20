import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { ExternalLink, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme, useLang } from '../App';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CaseStudyNavigation } from '../components/CaseStudyNavigation';
import guiaCover from '../../assets/guia-moteis/guia-moteis-cover.png';
import guiaProcesso01 from '../../assets/guia-moteis/guia-moteis-processo-01.png';
import guiaProcesso02 from '../../assets/guia-moteis/guia-moteis-processo-02.png';
import guiaProcesso03 from '../../assets/guia-moteis/guia-moteis-processo-03.png';
import guiaProcesso04 from '../../assets/guia-moteis/guia-moteis-processo-04.png';
import guiaTelaCta from '../../assets/guia-moteis/guia-moteis-tela-cta.png';
import guiaTelaTrust from '../../assets/guia-moteis/guia-moteis-tela-trust.png';
import guiaTelaHero from '../../assets/guia-moteis/guia-moteis-tela-hero.png';
import guiaTelaResponsive from '../../assets/guia-moteis/guia-moteis-tela-responsive.png';

const FIGMA_URL =
  'https://www.figma.com/design/yaqbJwkCiE5qk6v31JYOZu/Untitled?node-id=257-45';

interface ScreenCardProps {
  screen: { label: string; annotation: string };
  delay: number;
  cardBg: string;
  border: string;
  textMuted: string;
  imageSrc?: string;
  imageAlt?: string;
  onImageClick?: () => void;
}

function ScreenCard({ screen, delay, cardBg, border, textMuted, imageSrc, imageAlt, onImageClick }: ScreenCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      {imageSrc ? (
        <div
          onClick={onImageClick}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            width: '100%',
            overflow: 'hidden',
            borderRadius: '12px',
            marginBottom: '1rem',
            background: 'rgba(255,255,255,0.03)',
            cursor: onImageClick ? 'zoom-in' : 'default',
            transform: hovered ? 'scale(1.03)' : 'scale(1)',
            transition: 'transform 0.3s ease',
          }}
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              display: 'block',
            }}
          />
        </div>
      ) : (
        <div
          style={{
            height: '300px',
            backgroundColor: cardBg,
            borderRadius: '12px',
            border: `1px solid ${border}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1rem',
          }}
        >
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.75rem',
              color: textMuted,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            {screen.label}
          </span>
        </div>
      )}
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.875rem',
          lineHeight: 1.65,
          color: textMuted,
          margin: 0,
        }}
      >
        {screen.annotation}
      </p>
    </motion.div>
  );
}

export function CaseStudyGuiaMoteis() {
  const { isDark } = useTheme();
  const { t } = useLang();

  const text      = isDark ? '#ffffff' : '#0A0A0A';
  const textMuted = isDark ? 'rgba(255,255,255,0.45)' : 'rgba(10,10,10,0.45)';
  const border    = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';
  const bg        = isDark ? '#0A0A0A' : '#F5F5F0';
  const cardBg    = isDark ? '#111111' : '#ffffff';
  const accent    = isDark ? '#AAFF00' : '#5C8A00';
  const accentFg  = isDark ? '#0A0A0A' : '#ffffff';
  const accentBg  = isDark ? 'rgba(170,255,0,0.04)' : 'rgba(92,138,0,0.05)';

  const processImages = [guiaProcesso01, guiaProcesso02, guiaProcesso03, guiaProcesso04];

  const screenImages: Array<{ src: string; alt: string } | null> = [
    { src: guiaTelaHero, alt: 'Hero Screen' },
    { src: guiaTelaCta, alt: 'CTA Screen' },
    { src: guiaTelaTrust, alt: 'Trust Screen' },
    { src: guiaTelaResponsive, alt: 'Responsive Screen' },
  ];

  const [activeScreen, setActiveScreen] = useState<{ src: string; label: string } | null>(null);

  useEffect(() => {
    document.title = 'Guia de Motéis GO | Fábio José';
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!activeScreen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveScreen(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeScreen]);

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.7rem',
    color: accent,
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

  return (
    <>
    <div
      style={{
        backgroundColor: bg,
        minHeight: '100vh',
        transition: 'background-color 0.3s ease',
      }}
    >
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
              {t.guiaMoteis.backToWork}
            </Link>
          </div>
        </div>

        {/* ── 2. Hero — Impact First ── */}
        <section style={{ padding: '60px 2rem 80px' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div
              className="grid grid-cols-1 md:grid-cols-5"
              style={{ gap: '3rem', alignItems: 'center' }}
            >
              {/* Left ~60% */}
              <motion.div
                className="md:col-span-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 'clamp(2.25rem, 5vw, 3rem)',
                    fontWeight: 700,
                    color: text,
                    letterSpacing: '-0.03em',
                    lineHeight: 1.1,
                    margin: '0 0 1rem',
                  }}
                >
                  {t.guiaMoteis.projectTitle}
                </h1>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '20px',
                    color: textMuted,
                    lineHeight: 1.5,
                    margin: '0 0 2rem',
                  }}
                >
                  {t.guiaMoteis.projectDescription}
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span style={{ ...pillShared, backgroundColor: accent, color: accentFg }}>
                    {t.guiaMoteis.rolePill}
                  </span>
                  <span style={{ ...pillShared, border: `1px solid ${border}`, color: textMuted }}>
                    {t.guiaMoteis.methodology}
                  </span>
                  {t.guiaMoteis.tools.map((tool) => (
                    <span key={tool} style={{ ...pillShared, border: `1px solid ${border}`, color: textMuted }}>
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Right ~40% — hero image */}
              <motion.div
                className="md:col-span-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <div
                  style={{
                    width: '100%',
                    minHeight: 'clamp(280px, 45vw, 520px)',
                    overflow: 'hidden',
                    borderRadius: '16px',
                  }}
                >
                  <img
                    src={guiaCover}
                    alt="Guia de Motéis GO"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── 3. The Problem ── */}
        <section style={{ padding: '0 2rem 80px' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                backgroundColor: cardBg,
                borderLeft: `3px solid ${accent}`,
                borderRadius: '0 12px 12px 0',
                padding: 'clamp(2rem, 4vw, 3rem)',
              }}
            >
              <div className="flex flex-col md:flex-row" style={{ gap: '2.5rem', alignItems: 'flex-start' }}>
                {/* Left — text */}
                <div style={{ flex: '3 1 0', minWidth: 0 }}>
                  <span style={labelStyle}>{t.guiaMoteis.problemLabel}</span>
                  <h2
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 'clamp(1.35rem, 3vw, 2rem)',
                      fontWeight: 700,
                      color: text,
                      letterSpacing: '-0.02em',
                      lineHeight: 1.25,
                      margin: '0 0 1.5rem',
                    }}
                  >
                    {t.guiaMoteis.problemHeading}
                  </h2>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '18px',
                      lineHeight: 1.8,
                      color: textMuted,
                      margin: 0,
                    }}
                  >
                    {t.guiaMoteis.problemBody}
                  </p>
                </div>

                {/* Right — highlight cards */}
                <div style={{ flex: '2 1 0', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div
                    style={{
                      backgroundColor: accentBg,
                      border: `1px solid ${border}`,
                      borderRadius: '12px',
                      padding: '24px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '11px',
                        color: accent,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        display: 'block',
                        marginBottom: '0.6rem',
                      }}
                    >
                      {t.guiaMoteis.highlightCard1Label}
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
                      {t.guiaMoteis.highlightCard1Value}
                    </p>
                  </div>

                  <div
                    style={{
                      backgroundColor: accentBg,
                      border: `1px solid ${border}`,
                      borderRadius: '12px',
                      padding: '24px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '11px',
                        color: accent,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        display: 'block',
                        marginBottom: '0.6rem',
                      }}
                    >
                      {t.guiaMoteis.highlightCard2Label}
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
                      {t.guiaMoteis.highlightCard2Value}
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
              {t.guiaMoteis.myRoleTitle}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '1.5rem' }}>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                style={{
                  backgroundColor: cardBg,
                  border: `1px solid ${border}`,
                  borderRadius: '12px',
                  padding: '2rem',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    color: accent,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '1.25rem',
                  }}
                >
                  {t.guiaMoteis.roleCardTitle}
                </span>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {t.guiaMoteis.roleCardItems.map(item => (
                    <li
                      key={item}
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: '1rem',
                        fontWeight: 500,
                        color: text,
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.07 }}
                style={{
                  backgroundColor: cardBg,
                  border: `1px solid ${border}`,
                  borderRadius: '12px',
                  padding: '2rem',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    color: accent,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '1.25rem',
                  }}
                >
                  {t.guiaMoteis.withCardTitle}
                </span>
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: text,
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  {t.guiaMoteis.withCardValue}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.14 }}
                style={{
                  backgroundColor: cardBg,
                  border: `1px solid ${border}`,
                  borderRadius: '12px',
                  padding: '2rem',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    color: accent,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '1.25rem',
                  }}
                >
                  {t.guiaMoteis.constraintsCardTitle}
                </span>
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: text,
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  {t.guiaMoteis.constraintsCardValue}
                </p>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── 5. Process ── */}
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
              <span style={labelStyle}>{t.guiaMoteis.processLabel}</span>
            </motion.div>

            {t.guiaMoteis.steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                style={{
                  gap: '4rem',
                  alignItems: 'center',
                  marginBottom: i < t.guiaMoteis.steps.length - 1 ? '5rem' : 0,
                }}
              >
                {/* Text side */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '80px',
                      fontWeight: 700,
                      color: accent,
                      opacity: 0.15,
                      lineHeight: 1,
                      marginBottom: '0.25rem',
                    }}
                  >
                    {step.num}
                  </div>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.7rem',
                      color: accent,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {step.label}
                  </span>
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '1.4rem',
                      fontWeight: 700,
                      color: text,
                      letterSpacing: '-0.02em',
                      margin: '0 0 1rem',
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
                      margin: 0,
                    }}
                  >
                    {step.body}
                  </p>
                </div>

                {/* Image side */}
                <div
                  style={{
                    flex: 1,
                    minWidth: 0,
                    position: 'relative',
                    width: '100%',
                    overflow: 'hidden',
                    borderRadius: '12px',
                    height: 'clamp(200px, 30vw, 300px)',
                  }}
                >
                  <img
                    src={processImages[i]}
                    alt={step.heading}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── 6. Final Solution ── */}
        <section style={{ padding: '80px 2rem' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              style={{ marginBottom: '3rem' }}
            >
              <span style={labelStyle}>{t.guiaMoteis.solutionLabel}</span>
              <h2
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 'clamp(1.75rem, 4vw, 3rem)',
                  fontWeight: 700,
                  color: text,
                  letterSpacing: '-0.03em',
                  margin: 0,
                }}
              >
                {t.guiaMoteis.solutionHeading}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '1.5rem' }}>
              {t.guiaMoteis.screens.map((screen, i) => (
                <ScreenCard
                  key={screen.label}
                  screen={screen}
                  delay={i * 0.07}
                  cardBg={cardBg}
                  border={border}
                  textMuted={textMuted}
                  imageSrc={screenImages[i]?.src}
                  imageAlt={screenImages[i]?.alt}
                  onImageClick={screenImages[i] ? () => setActiveScreen({ src: screenImages[i]!.src, label: screen.label }) : undefined}
                />
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
              <a
                href={FIGMA_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: accentFg,
                  backgroundColor: accent,
                  padding: '0.75rem 1.75rem',
                  borderRadius: '999px',
                  textDecoration: 'none',
                  transition: 'opacity 0.2s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.82')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                {t.guiaMoteis.ctaPrototype}
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* ── 7. Learnings ── */}
        <section
          style={{
            padding: '80px 2rem',
            backgroundColor: cardBg,
            borderTop: `1px solid ${border}`,
          }}
        >
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <hr style={{ border: 'none', borderTop: `1px solid ${border}`, marginBottom: '3rem' }} />
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                  fontWeight: 700,
                  color: text,
                  letterSpacing: '-0.03em',
                  margin: '0 0 2.5rem',
                }}
              >
                {t.guiaMoteis.learningsHeading}
              </motion.h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                {t.guiaMoteis.learnings.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}
                  >
                    <span
                      style={{
                        flexShrink: 0,
                        width: '7px',
                        height: '7px',
                        borderRadius: '50%',
                        backgroundColor: accent,
                        marginTop: '0.6rem',
                      }}
                    />
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '18px',
                        lineHeight: 1.8,
                        color: textMuted,
                        margin: 0,
                      }}
                    >
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CaseStudyNavigation currentSlug="guia-de-moteis" />

      </div>
      <Footer />
    </div>

    {/* Screen lightbox */}
    <AnimatePresence>
      {activeScreen && (
        <motion.div
          key="screen-lightbox-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            backgroundColor: 'rgba(0,0,0,0.92)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => setActiveScreen(null)}
        >
          <motion.img
            src={activeScreen.src}
            alt={activeScreen.label}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              objectFit: 'contain',
              borderRadius: '12px',
            }}
            onClick={(e) => e.stopPropagation()}
          />
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.75rem',
              color: 'rgba(255,255,255,0.45)',
              marginTop: '1rem',
            }}
          >
            {activeScreen.label}
          </p>
          <button
            aria-label="Close lightbox"
            onClick={() => setActiveScreen(null)}
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.15)',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              padding: 0,
              transition: 'opacity 0.2s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            <X size={20} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
