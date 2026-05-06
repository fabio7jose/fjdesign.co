import React, { useEffect } from 'react';
import { Link } from 'react-router';
import { ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme, useLang } from '../App';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import lacreiCover from '../../assets/lacrei-cover.png';
import lacreiProcesso01 from '../../assets/lacrei-processo-01.png'
import lacreiProcesso02 from '../../assets/lacrei-processo-02.png'
import lacreiProcesso03 from '../../assets/lacrei-processo-03.png'
import lacreiProcesso04 from '../../assets/lacrei-processo-04.png'
import lacreiTelaBusca from '../../assets/lacrei-tela-busca.png'
import lacreiTelaHomePos from '../../assets/lacrei-tela-home-pos-login.png'
import lacreiTelaInicio from '../../assets/lacrei-tela-inicio.png'
import lacreiTelaLogin from '../../assets/lacrei-tela-login.png'
import lacreiTelaProfissional from '../../assets/lacrei-tela-profissional.png'

const FIGMA_URL =
  'https://www.figma.com/design/F6HVVdGF1Rqq16m1fCGKxU/Lacrei-Sa%C3%BAde?node-id=3-3304';

interface ScreenCardProps {
  screen: { label: string; annotation: string };
  delay: number;
  cardBg: string;
  border: string;
  textMuted: string;
  imageSrc?: string;
  imageAlt?: string;
}

function ScreenCard({ screen, delay, cardBg, border, textMuted, imageSrc, imageAlt }: ScreenCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={imageAlt}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '300px',
            borderRadius: '12px',
            marginBottom: '1rem',
            display: 'block',
          }}
        />
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

export function CaseStudyLacrei() {
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

  const processImages = [lacreiProcesso01, lacreiProcesso02, lacreiProcesso03, lacreiProcesso04];
  const processAlts   = ['Empathy & Research', 'Define', 'Ideation', 'Prototype'];
  const screenImages: Array<{ src: string; alt: string } | null> = [
    { src: lacreiTelaInicio, alt: 'Welcome Screen' },
    { src: lacreiTelaLogin, alt: 'Login Screen' },
    { src: lacreiTelaHomePos, alt: 'Home Post-login' },
    { src: lacreiTelaBusca, alt: 'Search & Filters' },
    { src: lacreiTelaProfissional, alt: 'Professional Profile' },
  ];

  useEffect(() => {
    document.title = 'Lacrei Saúde | Fábio José';
    window.scrollTo(0, 0);
  }, []);

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
              {t.lacrei.backToWork}
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
                  {t.lacrei.projectTitle}
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
                  {t.lacrei.projectDescription}
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span style={{ ...pillShared, backgroundColor: accent, color: accentFg }}>
                    {t.lacrei.rolePill}
                  </span>
                  <span style={{ ...pillShared, border: `1px solid ${border}`, color: textMuted }}>
                    {t.lacrei.methodology}
                  </span>
                  {t.lacrei.tools.map((tool) => (
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
                <img
                  src={lacreiCover}
                  alt="Lacrei Saúde"
                  style={{
                    width: '100%',
                    height: '500px',
                    objectFit: 'cover',
                    borderRadius: '16px',
                  }}
                />
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
                {/* Left — text (60%) */}
                <div style={{ flex: '3 1 0', minWidth: 0 }}>
                  <span style={labelStyle}>{t.lacrei.problemLabel}</span>
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
                    {t.lacrei.problemHeading}
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
                    {t.lacrei.problemBody}
                  </p>
                </div>

                {/* Right — highlight cards (40%) */}
                <div style={{ flex: '2 1 0', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {/* Card 1 */}
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
                      {t.lacrei.highlightCard1Label}
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
                      {t.lacrei.highlightCard1Value}
                    </p>
                  </div>

                  {/* Card 2 */}
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
                      {t.lacrei.highlightCard2Label}
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
                      {t.lacrei.highlightCard2Value}
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
              {t.lacrei.myRoleTitle}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '1.5rem' }}>

              {/* Card 1: What I did */}
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
                  {t.lacrei.roleCardTitle}
                </span>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {t.lacrei.roleCardItems.map(item => (
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

              {/* Card 2: With */}
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
                  {t.lacrei.withCardTitle}
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
                  {t.lacrei.withCardValue}
                </p>
              </motion.div>

              {/* Card 3: Constraints */}
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
                  {t.lacrei.constraintsCardTitle}
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
                  {t.lacrei.constraintsCardValue}
                </p>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── 5. Process — 4 alternating steps ── */}
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
              <span style={labelStyle}>{t.lacrei.processLabel}</span>
            </motion.div>

            {t.lacrei.steps.map((step, i) => (
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
                  marginBottom: i < t.lacrei.steps.length - 1 ? '5rem' : 0,
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

                  {/* Ghost buttons — Step 03: Ideation */}
                  {step.num === '03' && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '16px' }}>
                      {[
                        { label: t.lacrei.stepLinkPersona, href: 'https://miro.com/welcomeonboard/SXBtdWZBVjBFT3lqWVRLa2RSTGJIVE5YVTRvTjZYVmdJTW1pdHdSaGF4MmJWNHFqRjVMak1VUXVFa0hWZG5ROHwzMDc0NDU3MzU2MzEyNTA4NjIwfDI=?share_link_id=384137890711' },
                        { label: t.lacrei.stepLinkJourney, href: 'https://miro.com/welcomeonboard/cHlCVEJ2UDN3V1lCN28ya0F6cFJmak91a3pOaGZQeDFzQ3o1VGZaQUFWNkx4SURuRFlnSk1sN09HVHVFcEVXSnwzMDc0NDU3MzU2MzEyNTA4NjIwfDI=?share_link_id=912274466439' },
                      ].map(({ label, href }) => (
                        <a
                          key={href}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '13px',
                            fontWeight: 500,
                            color: textMuted,
                            backgroundColor: 'transparent',
                            border: `1px solid ${border}`,
                            padding: '8px 16px',
                            borderRadius: '999px',
                            textDecoration: 'none',
                            transition: 'color 0.2s ease, border-color 0.2s ease',
                            whiteSpace: 'nowrap' as const,
                          }}
                          onMouseEnter={e => {
                            e.currentTarget.style.color = accent;
                            e.currentTarget.style.borderColor = accent;
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.color = textMuted;
                            e.currentTarget.style.borderColor = border;
                          }}
                        >
                          {label}
                        </a>
                      ))}
                    </div>
                  )}

                  {/* Ghost button — Step 04: Prototype */}
                  {step.num === '04' && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '16px' }}>
                      <a
                        href="https://miro.com/welcomeonboard/M1kyN0RsZUZDdlFaWjJGVXFxMlp3dDZPd2xlSUZnTlRmaXN2Q3VYVmZKOFNaRnowaXlwbU5DTnh0NGtvMWVsZXwzMDc0NDU3MzU2MzEyNTA4NjIwfDI=?share_link_id=461139257939"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '13px',
                          fontWeight: 500,
                          color: textMuted,
                          backgroundColor: 'transparent',
                          border: `1px solid ${border}`,
                          padding: '8px 16px',
                          borderRadius: '999px',
                          textDecoration: 'none',
                          transition: 'color 0.2s ease, border-color 0.2s ease',
                          whiteSpace: 'nowrap' as const,
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.color = accent;
                          e.currentTarget.style.borderColor = accent;
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.color = textMuted;
                          e.currentTarget.style.borderColor = border;
                        }}
                      >
                        {t.lacrei.stepLinkWireframes}
                      </a>
                    </div>
                  )}
                </div>

                <img
                  src={processImages[i]}
                  alt={processAlts[i]}
                  style={{
                    flex: 1,
                    minWidth: 0,
                    objectFit: 'cover',
                    width: '100%',
                    height: '300px',
                    borderRadius: '12px',
                  }}
                />
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
              <span style={labelStyle}>{t.lacrei.solutionLabel}</span>
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
                {t.lacrei.solutionHeading}
              </h2>
            </motion.div>

            {/* Top row: 3 screens */}
            <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>
              {t.lacrei.screens.slice(0, 3).map((screen, i) => (
                <ScreenCard
                  key={screen.label}
                  screen={screen}
                  delay={i * 0.07}
                  cardBg={cardBg}
                  border={border}
                  textMuted={textMuted}
                  imageSrc={screenImages[i]?.src}
                  imageAlt={screenImages[i]?.alt}
                />
              ))}
            </div>

            {/* Bottom row: 2 screens centered, matching top card widths */}
            <div style={{ maxWidth: 'calc(66.667% - 1rem)', margin: '0 auto' }}>
              <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '1.5rem' }}>
                {t.lacrei.screens.slice(3).map((screen, i) => (
                  <ScreenCard
                    key={screen.label}
                    screen={screen}
                    delay={(i + 3) * 0.07}
                    cardBg={cardBg}
                    border={border}
                    textMuted={textMuted}
                    imageSrc={screenImages[i + 3]?.src}
                    imageAlt={screenImages[i + 3]?.alt}
                  />
                ))}
              </div>
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
                {t.lacrei.learningsHeading}
              </motion.h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                {t.lacrei.learnings.map((item, i) => (
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

        {/* ── 8. CTA Footer ── */}
        <section
          style={{
            padding: '48px 2rem',
            backgroundColor: bg,
            borderTop: `1px solid ${border}`,
          }}
        >
          <div
            style={{
              maxWidth: '1400px',
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
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
              {t.lacrei.ctaPrototype}
              <ExternalLink size={14} />
            </a>
          </div>
        </section>

        {/* ── 9. Next Project navigation ── */}
        <section
          style={{
            padding: '60px 2rem',
            borderTop: `1px solid ${border}`,
          }}
        >
          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ maxWidth: '1400px', margin: '0 auto', gap: '1.5rem' }}
          >
            {/* Previous */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              style={{
                border: `1px solid ${border}`,
                borderRadius: '12px',
                padding: '2rem',
                transition: 'border-color 0.2s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = accent)}
              onMouseLeave={e => (e.currentTarget.style.borderColor = border)}
            >
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.7rem',
                  color: textMuted,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '0.75rem',
                }}
              >
                ← {t.lacrei.previousProject}
              </span>
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: text,
                  margin: 0,
                }}
              >

              </p>
            </motion.div>

            {/* Next */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.07 }}
              style={{
                border: `1px solid ${border}`,
                borderRadius: '12px',
                padding: '2rem',
                textAlign: 'right',
                transition: 'border-color 0.2s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = accent)}
              onMouseLeave={e => (e.currentTarget.style.borderColor = border)}
            >
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.7rem',
                  color: textMuted,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '0.75rem',
                }}
              >
                {t.lacrei.nextProject} →
              </span>
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: text,
                  margin: 0,
                }}
              >
              </p>
            </motion.div>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
}
