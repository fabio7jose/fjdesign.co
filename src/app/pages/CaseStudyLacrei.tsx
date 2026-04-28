import React, { useEffect } from 'react';
import { Link } from 'react-router';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from '../App';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const FIGMA_URL =
  'https://www.figma.com/design/F6HVVdGF1Rqq16m1fCGKxU/Lacrei-Sa%C3%BAde?node-id=3-3304&t=A8BHBwry9EUXNaQy-1';

const processSteps = [
  {
    num: '01',
    title: 'Empathy & Research',
    body: 'Researched the reality of LGBT+ access to healthcare. Key insight: discrimination and prejudice are the main barriers, with direct impact on mental health.',
  },
  {
    num: '02',
    title: 'Define',
    body: "Core problem: difficulty finding professionals who convey safety and comfort. Lacrei's brief defined 4 screens: Login, Search, Professional Profile, and Contact.",
  },
  {
    num: '03',
    title: 'Ideation',
    body: 'Created persona and user journey in Miro. Generated ideas for each screen focusing on advanced filters, real-time availability, and microinteractions.',
  },
  {
    num: '04',
    title: 'Prototype',
    body: 'Low-fidelity wireframes in Miro evolved into a fully navigable high-fidelity prototype in Figma.',
  },
];

const metadata = [
  { label: 'Client', value: 'Lacrei Saúde' },
  { label: 'Role', value: 'UX Designer Voluntário' },
  { label: 'Year', value: '2024' },
  { label: 'Method', value: 'Design Thinking' },
  { label: 'Tools', value: 'Figma, Miro' },
];

export function CaseStudyLacrei() {
  const { isDark } = useTheme();

  const text      = isDark ? '#ffffff' : '#0A0A0A';
  const textMuted = isDark ? 'rgba(255,255,255,0.45)' : 'rgba(10,10,10,0.45)';
  const border    = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';
  const bg        = isDark ? '#0A0A0A' : '#F5F5F0';
  const cardBg    = isDark ? '#111111' : '#ffffff';
  const surfaceBg = isDark ? '#0D0D0D' : '#e8e8e3';
  const accent    = isDark ? '#AAFF00' : '#5C8A00';
  const accentFg  = isDark ? '#0A0A0A' : '#ffffff';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

        {/* ── Header ── */}
        <section style={{ padding: '60px 2rem 48px' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              style={{ marginBottom: '2.5rem' }}
            >
              <Link
                to="/#work"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.85rem',
                  color: textMuted,
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = accent)}
                onMouseLeave={e => (e.currentTarget.style.color = textMuted)}
              >
                <ArrowLeft size={14} />
                Back to work
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.25rem',
                flexWrap: 'wrap',
              }}
            >
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.7rem',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: accentFg,
                  backgroundColor: accent,
                  padding: '0.2rem 0.7rem',
                  borderRadius: '999px',
                }}
              >
                UX Design
              </span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: textMuted }}>
                2024
              </span>
              <span style={{ color: border }}>·</span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: textMuted }}>
                UX Designer Voluntário
              </span>
              <span style={{ color: border }}>·</span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: textMuted }}>
                Design Thinking
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
                fontWeight: 700,
                color: text,
                letterSpacing: '-0.03em',
                lineHeight: 0.95,
                margin: 0,
              }}
            >
              Lacrei Saúde
            </motion.h1>
          </div>
        </section>

        {/* ── Hero / prototype preview ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            width: '100%',
            height: '600px',
            backgroundColor: surfaceBg,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem',
            marginBottom: '80px',
          }}
        >
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '1rem',
              color: textMuted,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              margin: 0,
            }}
          >
            Prototype Preview
          </p>
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
              padding: '0.65rem 1.4rem',
              borderRadius: '999px',
              textDecoration: 'none',
              transition: 'opacity 0.2s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.82')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            View Figma Prototype →
            <ExternalLink size={13} />
          </a>
        </motion.div>

        {/* ── Overview ── */}
        <section style={{ padding: '0 2rem 80px' }}>
          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ maxWidth: '1400px', margin: '0 auto', gap: '4rem' }}
          >
            {/* Left: challenge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '1.6rem',
                  fontWeight: 600,
                  color: text,
                  letterSpacing: '-0.02em',
                  margin: '0 0 1rem',
                }}
              >
                The Challenge
              </h2>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '1rem',
                  lineHeight: 1.75,
                  color: textMuted,
                  margin: 0,
                }}
              >
                Lacrei Saúde connects the LGBT+ community with welcoming healthcare professionals.
                The challenge was to design an intuitive flow for login, professional search, profile
                viewing, and appointment contact — ensuring users feel safe and respected throughout.
              </p>
            </motion.div>

            {/* Right: metadata table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {metadata.map((item, i) => (
                <div
                  key={item.label}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    padding: '1rem 0',
                    borderBottom: `1px solid ${border}`,
                    ...(i === 0 ? { borderTop: `1px solid ${border}` } : {}),
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.75rem',
                      color: textMuted,
                      letterSpacing: '0.07em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '0.95rem',
                      color: text,
                      fontWeight: 500,
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Process ── */}
        <section style={{ padding: '80px 2rem', backgroundColor: surfaceBg }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{ marginBottom: '3rem' }}
            >
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.7rem',
                  color: accent,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}
              >
                Process
              </span>
              <h2
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  fontWeight: 700,
                  color: text,
                  letterSpacing: '-0.03em',
                  margin: '0.5rem 0 0',
                }}
              >
                Design Thinking
              </h2>
            </motion.div>

            {/* 2×2 grid with 1px border illusion */}
            <div
              className="grid grid-cols-1 md:grid-cols-2"
              style={{ gap: '1px', backgroundColor: border }}
            >
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  style={{ backgroundColor: cardBg, padding: '2.5rem' }}
                >
                  <div
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '2.8rem',
                      fontWeight: 700,
                      color: accent,
                      lineHeight: 1,
                      marginBottom: '1rem',
                      opacity: 0.55,
                    }}
                  >
                    {step.num}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '1.2rem',
                      fontWeight: 600,
                      color: text,
                      letterSpacing: '-0.01em',
                      margin: '0 0 0.75rem',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.9rem',
                      lineHeight: 1.7,
                      color: textMuted,
                      margin: 0,
                    }}
                  >
                    {step.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Links ── */}
        <section style={{ padding: '80px 2rem' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
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
                  padding: '0.75rem 1.6rem',
                  borderRadius: '999px',
                  textDecoration: 'none',
                  transition: 'opacity 0.2s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.82')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                View Figma Prototype
                <ExternalLink size={14} />
              </a>
              <a
                href="#"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: text,
                  border: `1px solid ${border}`,
                  padding: '0.75rem 1.6rem',
                  borderRadius: '999px',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = accent)}
                onMouseLeave={e => (e.currentTarget.style.borderColor = border)}
              >
                View Miro Flow
                <ExternalLink size={14} />
              </a>
            </motion.div>
          </div>
        </section>

        {/* ── Project navigation ── */}
        <div
          style={{
            borderTop: `1px solid ${border}`,
            padding: '2rem',
            maxWidth: '1400px',
            margin: '0 auto',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.8rem',
                color: textMuted,
              }}
            >
              ← Previous Project
            </span>
            <Link
              to="/#work"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.8rem',
                color: textMuted,
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = accent)}
              onMouseLeave={e => (e.currentTarget.style.color = textMuted)}
            >
              All Work
            </Link>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.8rem',
                color: textMuted,
              }}
            >
              Next Project →
            </span>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}
