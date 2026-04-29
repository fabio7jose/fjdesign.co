import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { BadgeCheck, ExternalLink } from 'lucide-react';
import { useTheme, useLang } from '../App';
import useEmblaCarousel from 'embla-carousel-react';

const certs = [
  { id: 1, title: 'SFPC™ Scrum Fundamentals', institution: 'CertiProf',     year: '2024' },
  { id: 2, title: 'UX & Design Thinking',      institution: 'Udemy',         year: '2021' },
  { id: 3, title: 'UI Design Complete Course',  institution: 'Udemy',         year: '2022' },
  { id: 4, title: 'UX Design Bootcamp',         institution: 'IGTI',          year: '2021' },
  { id: 5, title: 'UX & UI Design',             institution: 'Instituto TIM', year: '2021' },
];

export function Certifications() {
  const { isDark } = useTheme();
  const { t }      = useLang();

  const text      = isDark ? '#ffffff'                : '#0A0A0A';
  const textMuted = isDark ? 'rgba(255,255,255,0.45)' : 'rgba(10,10,10,0.45)';
  const border    = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';
  const bg        = isDark ? '#0A0A0A'                : '#F5F5F0';
  const cardBg    = isDark ? '#111111'                : '#ffffff';
  const accent    = isDark ? '#AAFF00'                : '#5C8A00';
  const accentBorderHover = isDark ? 'rgba(170,255,0,0.6)' : 'rgba(92,138,0,0.6)';

  const [hoveredId, setHoveredId] = useState<number | null>(null);

  /* ── Responsive perView ── */
  const [perView, setPerView] = useState<number>(4);

  useEffect(() => {
    function calcPerView() {
      const w = window.innerWidth;
      if (w <= 480)  return 1;
      if (w <= 768)  return 2;
      if (w <= 1024) return 3;
      return 4;
    }
    setPerView(calcPerView());
    const onResize = () => setPerView(calcPerView());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const showHint = perView < certs.length;

  /* ── Embla carousel ── */
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: false,
  });

  useEffect(() => {
    emblaApi?.reInit();
  }, [perView, emblaApi]);

  /*
   * Slide width: when not all cards fit, subtract a 50px peek so the next
   * card is partially visible — matching the original Glide peek:after:50.
   */
  const gap = 16;
  const slideWidth = showHint
    ? `calc((100% - ${(perView - 1) * gap + 50}px) / ${perView})`
    : `calc((100% - ${(certs.length - 1) * gap}px) / ${certs.length})`;

  return (
    <section id="certifications" style={{ backgroundColor: bg, padding: '80px 0' }}>

      {/* ── Section header ── */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}
        >
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.7rem',
            fontWeight: 400,
            color: accent,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}>
            {t.certifications.label}
          </span>
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.75rem', color: textMuted, letterSpacing: '0.05em' }}>
            03
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          style={{ borderTop: `1px solid ${border}`, paddingTop: '2rem', marginBottom: '3rem' }}
        >
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(2.5rem, 5vw, 5rem)',
            fontWeight: 700,
            color: text,
            lineHeight: 0.95,
            letterSpacing: '-0.03em',
            margin: 0,
          }}>
            {t.certifications.title}
          </h2>
        </motion.div>

        {/* ── Embla carousel ── */}
        <div ref={emblaRef} style={{ overflow: 'hidden' }}>
          <div style={{ display: 'flex', gap: `${gap}px`, userSelect: 'none' }}>
            {certs.map((cert) => {
              const isHovered = hoveredId === cert.id;
              return (
                <div
                  key={cert.id}
                  style={{ flex: `0 0 ${slideWidth}`, minWidth: 0 }}
                >
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHoveredId(cert.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem',
                      height: '100%',
                      backgroundColor: cardBg,
                      border: `0.5px solid ${isHovered ? accentBorderHover : border}`,
                      borderRadius: '4px',
                      padding: '2rem',
                      textDecoration: 'none',
                      cursor: 'pointer',
                      boxSizing: 'border-box',
                      userSelect: 'none',
                      transition: 'border-color 200ms ease',
                    }}
                  >
                    {/* Icon */}
                    <BadgeCheck
                      size={28}
                      color={isHovered ? accent : textMuted}
                      strokeWidth={1.5}
                      style={{ transition: 'color 200ms ease', flexShrink: 0 }}
                    />

                    {/* Title */}
                    <h3 style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      color: text,
                      letterSpacing: '-0.01em',
                      margin: 0,
                      lineHeight: 1.3,
                      flexGrow: 1,
                    }}>
                      {cert.title}
                    </h3>

                    {/* Institution + link icon */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.8rem',
                        fontWeight: 400,
                        color: textMuted,
                      }}>
                        {cert.institution}
                      </span>
                      <ExternalLink
                        size={13}
                        color={textMuted}
                        strokeWidth={1.5}
                        style={{
                          opacity: isHovered ? 1 : 0,
                          transition: 'opacity 200ms ease',
                          flexShrink: 0,
                        }}
                      />
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Scroll hint ── */}
        {showHint && (
          <div style={{
            marginTop: '1.5rem',
            textAlign: 'center',
            fontFamily: "'Inter', sans-serif",
            fontSize: '12px',
            fontWeight: 400,
            color: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(10,10,10,0.3)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            userSelect: 'none',
            pointerEvents: 'none',
          }}>
            {t.certifications.scrollHint}
          </div>
        )}
      </div>

    </section>
  );
}
