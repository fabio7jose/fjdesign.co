import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { ExternalLink, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme, useLang } from '../App';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CaseStudyNavigation } from '../components/CaseStudyNavigation';

const ASSET_PATH = '/case-studies/ultrafarma';
const heroImage = `${ASSET_PATH}/home-screen.png`;
const beforeVideo = 'https://ik.imagekit.io/zxou7bg5w/antes.mp4';
const afterVideo = 'https://ik.imagekit.io/zxou7bg5w/depois.mp4';
const searchErrorVideo = 'https://ik.imagekit.io/zxou7bg5w/Video%20busca%20erro.mp4';
const cartErrorVideo = 'https://ik.imagekit.io/zxou7bg5w/Video-erro-carrinho%20e%20botao.mp4';
const searchScreenImage = `${ASSET_PATH}/tela-busca-redesign.png`;
const cartModalImage = `${ASSET_PATH}/modal-carrinho-redesign.png`;
const carouselSolutionImage = `${ASSET_PATH}/card-carrossel-solução.png`;
const sectionWallSolutionImage = `${ASSET_PATH}/card-paredao-solução.png`;
const priceSolutionImage = `${ASSET_PATH}/card-preco-solução.png`;
const gridSolutionImage = `${ASSET_PATH}/card-grid-solução.png`;
const benchmarkSearchImage = `${ASSET_PATH}/benchmark-busca.png`;
const benchmarkCartImage = `${ASSET_PATH}/benchmark-carrinho.png`;
const benchmarkCarouselImage = `${ASSET_PATH}/benchmark-carrossel.png`;
const benchmarkHierarchyImage = `${ASSET_PATH}/benchmark-hierarquia.png`;
const benchmarkPricesImage = `${ASSET_PATH}/benchmark-precos.png`;
const findingCarouselImage = `${ASSET_PATH}/falha-carrossel.png`;
const findingLongScrollImage = `${ASSET_PATH}/falha scroll longo.png`;
const findingPricesImage = `${ASSET_PATH}/falha preço competindo.png`;
const findingGridImage = `${ASSET_PATH}/falha-grid.png`;

const FIGMA_SCREENS_URL =
  'https://www.figma.com/design/Ml0dgWFIXWVpVsALQpSVNV/Redesign-Home-Mobile-Ultrafarma?node-id=45-74';
const FIGMA_DOCUMENTATION_URL =
  'https://www.figma.com/design/Ml0dgWFIXWVpVsALQpSVNV/Redesign-Home-Mobile-Ultrafarma?node-id=163-1771';
const FIGMA_BENCHMARK_URL =
  'https://www.figma.com/design/Ml0dgWFIXWVpVsALQpSVNV/Redesign-Home-Mobile-Ultrafarma?node-id=0-1';
const FIGMA_DESIGN_SYSTEM_URL =
  'https://www.figma.com/design/Ml0dgWFIXWVpVsALQpSVNV/Redesign-Home-Mobile-Ultrafarma?node-id=21-3560';
const FIGMA_DESIGN_SYSTEM_EMBED_URL =
  `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(FIGMA_DESIGN_SYSTEM_URL)}`;

const CASE_ACCENT = '#003865';
const CASE_ACCENT_LIME = '#AADB1E';

export function CaseStudyUltrafarma() {
  const { isDark } = useTheme();
  const { t } = useLang();
  const u = t.ultrafarma;

  const text        = isDark ? '#ffffff' : '#0A0A0A';
  const textMuted   = isDark ? 'rgba(255,255,255,0.45)' : 'rgba(10,10,10,0.45)';
  const border      = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';
  const bg          = isDark ? '#0A0A0A' : '#F5F5F0';
  const cardBg      = isDark ? '#111111' : '#ffffff';
  const accent      = CASE_ACCENT;
  const accentLabel = isDark ? '#4FA3E3' : '#0067B9';
  const accentFg    = '#ffffff';
  const accentLime  = CASE_ACCENT_LIME;
  const accentBg    = isDark ? 'rgba(0,56,101,0.22)' : 'rgba(0,56,101,0.06)';
  const accentNeutral = isDark ? '#9A9A9A' : '#656565';
  // Navy reads well on the light card but fails contrast on near-black backgrounds,
  // so headline-weight accent text swaps to the brighter label blue in dark mode.
  const accentText  = isDark ? accentLabel : accent;

  const [activeImage, setActiveImage] = useState<{ src: string; label: string } | null>(null);

  useEffect(() => {
    document.title = 'Ultrafarma Mobile Redesign | Fábio José';
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!activeImage) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImage]);

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.7rem',
    color: accentLabel,
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

  const sectionHeadingStyle: React.CSSProperties = {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 'clamp(1.5rem, 3.2vw, 2.25rem)',
    fontWeight: 700,
    color: text,
    letterSpacing: '-0.02em',
    lineHeight: 1.2,
    margin: '0 0 1.5rem',
  };

  const bodyTextStyle: React.CSSProperties = {
    fontFamily: "'Inter', sans-serif",
    fontSize: '17px',
    lineHeight: 1.8,
    color: textMuted,
    margin: 0,
  };

  const figmaCtaStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.65rem',
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '0.95rem',
    fontWeight: 700,
    color: '#ffffff',
    backgroundColor: CASE_ACCENT,
    padding: '0.9rem 1.5rem',
    border: '1px solid rgba(255,255,255,0.14)',
    borderRadius: '999px',
    textDecoration: 'none',
    boxShadow: isDark
      ? '0 10px 28px rgba(0, 56, 101, 0.34)'
      : '0 10px 28px rgba(0, 56, 101, 0.18)',
    transition: 'transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease',
  };

  const handleCtaMouseEnter = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.currentTarget.style.transform = 'translateY(-2px)';
    event.currentTarget.style.backgroundColor = '#005083';
    event.currentTarget.style.boxShadow = '0 14px 34px rgba(0, 56, 101, 0.3)';
  };

  const handleCtaMouseLeave = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.currentTarget.style.transform = 'translateY(0)';
    event.currentTarget.style.backgroundColor = CASE_ACCENT;
    event.currentTarget.style.boxShadow = isDark
      ? '0 10px 28px rgba(0, 56, 101, 0.34)'
      : '0 10px 28px rgba(0, 56, 101, 0.18)';
  };

  const roleChips = u.rolePill.split(' · ');

  return (
    <>
    <div style={{ backgroundColor: bg, minHeight: '100vh', transition: 'background-color 0.3s ease' }}>
      <Navbar />
      <div style={{ paddingTop: '72px' }}>

        {/* ── Back navigation ── */}
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
              onMouseEnter={e => (e.currentTarget.style.color = accentLabel)}
              onMouseLeave={e => (e.currentTarget.style.color = textMuted)}
            >
              {u.backToWork}
            </Link>
          </div>
        </div>

        {/* ── Hero ── */}
        <section style={{ padding: '60px 2rem 80px' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div className="grid grid-cols-1 md:grid-cols-5" style={{ gap: '3rem', alignItems: 'center' }}>
              <motion.div
                className="md:col-span-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    color: accentLabel,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '1rem',
                  }}
                >
                  {u.subtitle}
                </span>
                <h1
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 'clamp(2.1rem, 4.6vw, 2.85rem)',
                    fontWeight: 700,
                    color: text,
                    letterSpacing: '-0.03em',
                    lineHeight: 1.15,
                    margin: '0 0 1.25rem',
                  }}
                >
                  {u.heroHeading}
                </h1>
                <p style={{ ...bodyTextStyle, fontSize: '18px', marginBottom: '2rem' }}>
                  {u.heroBody}
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {roleChips.map((chip, i) => (
                    <span
                      key={chip}
                      style={
                        i === 0
                          ? { ...pillShared, backgroundColor: accent, color: accentFg }
                          : { ...pillShared, border: `1px solid ${border}`, color: textMuted }
                      }
                    >
                      {chip}
                    </span>
                  ))}
                </div>
                <a
                  href={FIGMA_DOCUMENTATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ ...figmaCtaStyle, marginTop: '1.5rem' }}
                  onMouseEnter={handleCtaMouseEnter}
                  onMouseLeave={handleCtaMouseLeave}
                >
                  {u.heroFigmaCta}
                  <ExternalLink size={16} strokeWidth={2.5} />
                </a>
              </motion.div>

              <motion.div
                className="md:col-span-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                >
                  <div
                    style={{
                      width: '100%',
                      maxWidth: '1100px',
                      height: 'clamp(320px, 38vw, 460px)',
                      margin: '0 auto',
                      overflow: 'hidden',
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <img
                      src={heroImage}
                      alt={u.projectTitle}
                      style={{ width: 'auto', height: '92%', maxWidth: '100%', objectFit: 'contain' }}
                    />
                  </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── 01. Why Ultrafarma ── */}
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
              <span style={labelStyle}>{u.whyLabel}</span>
              <p style={{ ...bodyTextStyle, fontSize: '18px', marginBottom: '1.75rem' }}>{u.whyBody}</p>
              <div
                style={{
                  backgroundColor: accentBg,
                  border: `1px solid ${border}`,
                  borderRadius: '12px',
                  padding: '24px',
                }}
              >
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                    fontWeight: 700,
                    color: accentLime,
                    margin: '0 0 0.6rem',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {u.whyCalloutValue}
                </p>
                <p style={{ ...bodyTextStyle, fontSize: '15px' }}>{u.whyCalloutCaption}</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── 02. Method ── */}
        <section style={{ padding: '0 2rem 80px' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              style={{ marginBottom: '2.5rem' }}
            >
              <span style={labelStyle}>{u.methodLabel}</span>
              <p style={{ ...bodyTextStyle, fontSize: '18px', maxWidth: '780px' }}>{u.methodIntro}</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '1.5rem' }}>
              {u.methodTasks.map((task, i) => (
                <motion.div
                  key={task.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  style={{
                    backgroundColor: cardBg,
                    border: `1px solid ${border}`,
                    borderRadius: '12px',
                    padding: '2rem',
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '2.5rem',
                      fontWeight: 700,
                      color: accentText,
                      opacity: isDark ? 0.6 : 0.35,
                      lineHeight: 1,
                      marginBottom: '1rem',
                    }}
                  >
                    {task.num}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      color: text,
                      margin: '0 0 0.5rem',
                      lineHeight: 1.3,
                    }}
                  >
                    {task.title}
                  </h3>
                  <p style={{ ...bodyTextStyle, fontSize: '14px' }}>{task.body}</p>
                </motion.div>
                ))}
              </div>

            </div>
          </section>

        {/* ── 03. Functional diagnosis ── */}
        <section style={{ padding: '80px 2rem', backgroundColor: cardBg, borderTop: `1px solid ${border}` }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              style={{ marginBottom: '2.5rem' }}
            >
              <span style={labelStyle}>{u.diagnosisLabel}</span>
              <h2 style={sectionHeadingStyle}>{u.diagnosisHeading}</h2>
            </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '1.5rem' }}>
                {u.diagnosisFlaws.map((flaw, i) => (
                  <motion.div
                  key={flaw.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  style={{
                      backgroundColor: bg,
                      border: `1px solid ${border}`,
                      borderRadius: '12px',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        height: 'clamp(300px, 38vw, 500px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: isDark ? '#050505' : '#ededE8',
                        borderBottom: `1px solid ${border}`,
                      }}
                    >
                      <video
                        src={`${i === 0 ? searchErrorVideo : cartErrorVideo}?tr=q-70`}
                        poster={`${i === 0 ? searchErrorVideo : cartErrorVideo}/ik-thumbnail.jpg?tr=so-1,w-720,q-80`}
                        aria-label={flaw.title}
                        autoPlay
                        loop
                        muted
                        playsInline
                        controls
                        preload="metadata"
                        style={{ width: 'auto', height: '100%', maxWidth: '100%', objectFit: 'contain', display: 'block' }}
                      />
                    </div>
                    <div style={{ padding: '1.5rem 1.75rem 1.75rem' }}>
                      <span
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: '1.1rem',
                          fontWeight: 700,
                          color: accentNeutral,
                          display: 'block',
                          marginBottom: '0.75rem',
                        }}
                      >
                        {flaw.number}
                      </span>
                      <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.15rem', fontWeight: 700, color: text, margin: '0 0 0.6rem' }}>
                        {flaw.title}
                      </h3>
                      <p style={{ ...bodyTextStyle, fontSize: '15px', marginBottom: '0.75rem' }}>{flaw.body}</p>
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: accentLabel }}>{flaw.tag}</span>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </section>

        {/* ── 04. Other findings ── */}
        <section style={{ padding: '80px 2rem' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              style={{ marginBottom: '2.5rem' }}
            >
              <span style={labelStyle}>{u.findingsLabel}</span>
              <h2 style={sectionHeadingStyle}>{u.findingsHeading}</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: '1.25rem' }}>
                {u.findings.map((finding, i) => {
                  const findingImage = [
                    findingCarouselImage,
                    findingLongScrollImage,
                    findingPricesImage,
                    findingGridImage,
                  ][i];
                  return (
                  <motion.div
                    key={finding.num}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    onClick={() => setActiveImage({ src: findingImage, label: finding.title })}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        setActiveImage({ src: findingImage, label: finding.title });
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label={finding.title}
                    style={{
                      backgroundColor: cardBg,
                      border: `1px solid ${border}`,
                      borderRadius: '12px',
                      overflow: 'hidden',
                      cursor: 'zoom-in',
                    }}
                  >
                    <div
                      style={{
                        height: '220px',
                        padding: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: bg,
                        borderBottom: `1px solid ${border}`,
                      }}
                    >
                      <img
                        src={findingImage}
                        alt={finding.title}
                        style={{
                          width: 'auto',
                          height: 'auto',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          display: 'block',
                        }}
                      />
                    </div>
                    <div style={{ padding: '1.5rem' }}>
                    <span
                      style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: accentBg,
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      color: accentLabel,
                      marginBottom: '1rem',
                    }}
                  >
                    {finding.num.padStart(2, '0')}
                  </span>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1rem', fontWeight: 600, color: text, margin: '0 0 0.5rem', lineHeight: 1.3 }}>
                    {finding.title}
                  </h3>
                  <p style={{ ...bodyTextStyle, fontSize: '13.5px', marginBottom: '0.75rem' }}>{finding.body}</p>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: textMuted, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      {finding.tag}
                    </span>
                    </div>
                  </motion.div>
                  );
                })}
            </div>
          </div>
        </section>

        {/* ── 05. Benchmarking ── */}
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
              <span style={labelStyle}>{u.benchmarkLabel}</span>
              <h2 style={sectionHeadingStyle}>{u.benchmarkHeading}</h2>
              <p style={{ ...bodyTextStyle, fontSize: '18px', marginBottom: '1.75rem' }}>{u.benchmarkBody}</p>
              <div style={{ backgroundColor: accentBg, border: `1px solid ${border}`, borderRadius: '12px', padding: '24px', marginBottom: '1rem' }}>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(1.05rem, 1.8vw, 1.3rem)', fontWeight: 700, color: text, margin: 0, lineHeight: 1.5 }}>
                  {u.benchmarkCallout}
                </p>
              </div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontStyle: 'italic', color: textMuted, margin: 0 }}>
                  {u.benchmarkNote}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '1.25rem', paddingTop: '1.5rem' }}>
                {[
                  { src: benchmarkSearchImage, title: u.diagnosisFlaws[0].title },
                  { src: benchmarkCartImage, title: u.diagnosisFlaws[1].title },
                  { src: benchmarkCarouselImage, title: u.findings[0].title },
                  { src: benchmarkHierarchyImage, title: u.findings[1].title },
                  { src: benchmarkPricesImage, title: u.findings[2].title },
                ].map((item, i) => (
                  <motion.article
                    key={item.src}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className={i === 4 ? 'md:col-span-2' : undefined}
                    style={{
                      overflow: 'hidden',
                      backgroundColor: cardBg,
                      border: `1px solid ${border}`,
                      borderRadius: '14px',
                      padding: '1.25rem',
                    }}
                  >
                    <div style={{ marginBottom: '1rem' }}>
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '10px', fontWeight: 600, color: accentLabel, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                        {u.benchmarkComparisonLabel}
                      </span>
                      <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1rem', fontWeight: 700, color: text, margin: '0.35rem 0 0' }}>
                        {item.title}
                      </h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveImage({ src: item.src, label: item.title })}
                      aria-label={item.title}
                      style={{
                        width: '100%',
                        height: i === 4 ? 'clamp(240px, 32vw, 420px)' : 'clamp(220px, 27vw, 350px)',
                        padding: '0.75rem',
                        border: `1px solid ${border}`,
                        borderRadius: '10px',
                        backgroundColor: bg,
                        cursor: 'zoom-in',
                        overflow: 'hidden',
                      }}
                    >
                      <img
                        src={item.src}
                        alt={item.title}
                        style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
                      />
                    </button>
                  </motion.article>
                ))}
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
                <a
                  href={FIGMA_BENCHMARK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={figmaCtaStyle}
                  onMouseEnter={handleCtaMouseEnter}
                  onMouseLeave={handleCtaMouseLeave}
                >
                  {u.benchmarkFigmaCta}
                  <ExternalLink size={15} strokeWidth={2.5} />
                </a>
              </div>
            </div>
          </section>

        {/* ── 06. Before and after ── */}
        <section style={{ padding: '80px 2rem', backgroundColor: cardBg, borderTop: `1px solid ${border}` }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              style={{ marginBottom: '2.5rem' }}
            >
              <span style={labelStyle}>{u.beforeAfterLabel}</span>
              <h2 style={sectionHeadingStyle}>{u.beforeAfterHeading}</h2>
            </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '2rem' }}>
                {[
                  { src: beforeVideo, label: u.beforeLabel, tint: accentNeutral },
                  { src: afterVideo, label: u.afterLabel, tint: accentLime },
                ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      color: item.tint,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {item.label}
                  </span>
                  <div
                    style={{
                      width: '100%',
                      overflow: 'hidden',
                      borderRadius: '16px',
                      border: `1px solid ${border}`,
                      backgroundColor: bg,
                      maxHeight: '640px',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <video
                      src={`${item.src}?tr=q-70`}
                      poster={`${item.src}/ik-thumbnail.jpg?tr=so-1,w-720,q-80`}
                      aria-label={item.label}
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls
                      preload="metadata"
                      style={{
                        width: 'auto',
                        maxWidth: '100%',
                        height: 'auto',
                        maxHeight: '640px',
                        objectFit: 'contain',
                        display: 'block',
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
              <a
                href={FIGMA_SCREENS_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={figmaCtaStyle}
                onMouseEnter={handleCtaMouseEnter}
                onMouseLeave={handleCtaMouseLeave}
              >
                {u.figmaCta}
                <ExternalLink size={16} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </section>

        {/* ── 07. Design decisions ── */}
        <section style={{ padding: '80px 2rem' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              style={{ marginBottom: '3rem' }}
            >
              <span style={labelStyle}>{u.decisionsLabel}</span>
              <h2 style={sectionHeadingStyle}>{u.decisionsHeading}</h2>
            </motion.div>

            {[
              {
                title: u.decisionsGroup1Title,
                items: u.decisionsGroup1,
                screens: [
                  { src: searchScreenImage, caption: u.searchScreenCaption },
                  { src: cartModalImage, caption: u.cartModalCaption },
                  { src: carouselSolutionImage, caption: u.decisionsGroup1[2].title },
                ],
              },
              {
                title: u.decisionsGroup2Title,
                items: u.decisionsGroup2,
                screens: [
                  { src: sectionWallSolutionImage, caption: u.decisionsGroup2[0].title },
                  { src: priceSolutionImage, caption: u.decisionsGroup2[1].title },
                  { src: gridSolutionImage, caption: u.decisionsGroup2[2].title },
                ],
              },
            ].map((group, gi) => (
              <div key={group.title} style={{ marginBottom: gi === 0 ? '3rem' : 0 }}>
                <motion.h3
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: text,
                    margin: '0 0 1.25rem',
                  }}
                >
                  {group.title}
                </motion.h3>
                <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '1.25rem' }}>
                  {group.items.map((item, i) => {
                    const screen = group.screens[i];
                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.07 }}
                        style={{
                          backgroundColor: cardBg,
                          border: `1px solid ${border}`,
                          borderRadius: '12px',
                          overflow: 'hidden',
                        }}
                      >
                        {screen && (
                          <div
                            onClick={() => setActiveImage({ src: screen.src, label: screen.caption })}
                            style={{
                              width: '100%',
                              height: '200px',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'flex-start',
                              overflow: 'hidden',
                              backgroundColor: bg,
                              borderBottom: `1px solid ${border}`,
                              cursor: 'zoom-in',
                              padding: '14px 0 0',
                            }}
                          >
                            <img
                              src={screen.src}
                              alt={screen.caption}
                              style={{ width: 'auto', height: '100%', maxWidth: '86%', objectFit: 'cover', objectPosition: 'top', borderRadius: '10px 10px 0 0', boxShadow: isDark ? '0 6px 24px rgba(0,0,0,0.4)' : '0 6px 24px rgba(10,10,10,0.12)' }}
                            />
                          </div>
                        )}
                        <div style={{ padding: '1.5rem' }}>
                          <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1rem', fontWeight: 700, color: accentLabel, margin: '0 0 0.5rem' }}>
                            {item.title}
                          </h4>
                          <p style={{ ...bodyTextStyle, fontSize: '14.5px', marginBottom: '0.5rem' }}>{item.body}</p>
                          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: textMuted, letterSpacing: '0.03em' }}>{item.tag}</span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
              <a
                href={FIGMA_SCREENS_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={figmaCtaStyle}
                onMouseEnter={handleCtaMouseEnter}
                onMouseLeave={handleCtaMouseLeave}
              >
                {u.figmaCta}
                <ExternalLink size={16} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </section>

        {/* ── 08. Refine without rebranding ── */}
        <section style={{ padding: '80px 2rem', backgroundColor: cardBg, borderTop: `1px solid ${border}` }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              style={{ marginBottom: '2rem' }}
            >
              <span style={labelStyle}>{u.refineLabel}</span>
              <h2 style={sectionHeadingStyle}>{u.refineHeading}</h2>
            </motion.div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
              {u.refineBullets.map((bullet, i) => (
                <motion.div
                  key={bullet}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}
                >
                  <span style={{ flexShrink: 0, width: '7px', height: '7px', borderRadius: '50%', backgroundColor: accentLime, marginTop: '0.55rem' }} />
                  <p style={{ ...bodyTextStyle, fontSize: '16px' }}>{bullet}</p>
                </motion.div>
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(1.15rem, 2.2vw, 1.5rem)',
                fontWeight: 700,
                color: accentText,
                margin: 0,
              }}
            >
              {u.refineClosing}
            </motion.p>
          </div>
        </section>

        {/* ── 09. Design system ── */}
        <section style={{ padding: '80px 2rem' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              style={{ marginBottom: '2.5rem' }}
            >
                <span style={labelStyle}>{u.designSystemLabel}</span>
                <h2 style={sectionHeadingStyle}>{u.designSystemHeading}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5" style={{ gap: '0.75rem', marginBottom: '1.5rem' }}>
                  {u.designSystemBullets.map((bullet) => (
                    <div
                      key={bullet}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.65rem',
                        padding: '0.9rem 1rem',
                        backgroundColor: cardBg,
                        border: `1px solid ${border}`,
                        borderRadius: '10px',
                      }}
                    >
                      <span style={{ color: accentLime, fontWeight: 800, lineHeight: 1.45 }}>✓</span>
                      <span style={{ ...bodyTextStyle, fontSize: '14px', color: text }}>{bullet}</span>
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    maxWidth: '760px',
                    paddingLeft: '1rem',
                    borderLeft: `2px solid ${accentLime}`,
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '14px',
                      fontWeight: 400,
                      lineHeight: 1.65,
                      color: textMuted,
                      margin: 0,
                    }}
                  >
                    {u.designSystemNote}
                  </p>
                </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              style={{
                overflow: 'hidden',
                backgroundColor: cardBg,
                border: `1px solid ${border}`,
                borderRadius: '16px',
              }}
            >
              <iframe
                src={FIGMA_DESIGN_SYSTEM_EMBED_URL}
                title={`${u.designSystemFoundations} · ${u.designSystemComponents}`}
                allowFullScreen
                loading="lazy"
                style={{
                  width: '100%',
                  height: 'clamp(460px, 62vw, 760px)',
                  display: 'block',
                  border: 0,
                }}
              />
            </motion.div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.75rem' }}>
              <a
                href={FIGMA_DESIGN_SYSTEM_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={figmaCtaStyle}
                onMouseEnter={handleCtaMouseEnter}
                onMouseLeave={handleCtaMouseLeave}
              >
                {u.designSystemFigmaCta}
                <ExternalLink size={16} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </section>

        {/* ── 10. Validation and limits ── */}
        <section style={{ padding: '80px 2rem', backgroundColor: cardBg, borderTop: `1px solid ${border}` }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              style={{ marginBottom: '2.5rem' }}
            >
              <span style={labelStyle}>{u.validationLabel}</span>
              <h2 style={sectionHeadingStyle}>{u.validationHeading}</h2>
              <p style={{ ...bodyTextStyle, fontSize: '17px', maxWidth: '780px' }}>{u.validationIntro}</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '1.5rem' }}>
              {u.validationItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  style={{
                    backgroundColor: bg,
                    border: `1px solid ${border}`,
                    borderRadius: '12px',
                    padding: '1.75rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      color: i === 0 ? accentLime : accentNeutral,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {item.label}
                  </span>
                  <p style={{ ...bodyTextStyle, fontSize: '16px', color: text, marginBottom: '0.5rem' }}>{item.body}</p>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: textMuted }}>{item.tag}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 11. Closing ── */}
        <section style={{ padding: '80px 2rem' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              style={{ ...labelStyle, textAlign: 'center' }}
            >
              {u.closingLabel}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                fontWeight: 700,
                color: text,
                letterSpacing: '-0.03em',
                margin: '0 0 1.25rem',
              }}
            >
              {u.closingHeading}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.06 }}
              style={{ ...bodyTextStyle, fontSize: '18px', marginBottom: '2rem' }}
            >
              {u.closingBody}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.12 }}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                fontWeight: 700,
                color: accentText,
                margin: 0,
                lineHeight: 1.5,
              }}
            >
              {u.closingHighlight}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.18 }}
              style={{ marginTop: '2rem' }}
            >
              <a
                href={FIGMA_DOCUMENTATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={figmaCtaStyle}
                onMouseEnter={handleCtaMouseEnter}
                onMouseLeave={handleCtaMouseLeave}
              >
                {u.heroFigmaCta}
                <ExternalLink size={16} strokeWidth={2.5} />
              </a>
            </motion.div>
          </div>
        </section>

        <CaseStudyNavigation currentSlug="ultrafarma" />

      </div>
      <Footer />
    </div>

    {/* Image lightbox */}
    <AnimatePresence>
      {activeImage && (
        <motion.div
          key="ultrafarma-lightbox-overlay"
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
            padding: '2rem',
          }}
          onClick={() => setActiveImage(null)}
        >
          <motion.img
            src={activeImage.src}
            alt={activeImage.label}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ maxWidth: '90vw', maxHeight: '85vh', objectFit: 'contain', borderRadius: '12px' }}
            onClick={(e) => e.stopPropagation()}
          />
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)', marginTop: '1rem' }}>
            {activeImage.label}
          </p>
          <button
            aria-label="Close lightbox"
            onClick={() => setActiveImage(null)}
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
