import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { useTheme, useLang } from '../App';
import { projects, type Project } from '../data/projects';
import { ImageWithFallback } from './figma/ImageWithFallback';



interface CardProps {
  project: Project;
  animIndex: number;
  hoveredId: number | null;
  setHoveredId: (id: number | null) => void;
  t: { work: { viewCase: string } };
  lang: 'pt' | 'en';
  isDark: boolean;
  text: string;
  textMuted: string;
  border: string;
  cardBg: string;
  tagBg: string;
  accent: string;
  accentFg: string;
}

function ProjectCard({
  project,
  animIndex,
  hoveredId,
  setHoveredId,
  t,
  lang,
  isDark,
  text,
  textMuted,
  border,
  cardBg,
  tagBg,
  accent,
  accentFg,
}: CardProps) {
  const isHovered = hoveredId === project.id;
  const navigate = useNavigate();
  const displayTags = lang === 'pt' && project.tagsPt ? project.tagsPt : project.tags;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: animIndex * 0.07 }}
      viewport={{ once: true }}
      onMouseEnter={() => setHoveredId(project.id)}
      onMouseLeave={() => setHoveredId(null)}
      onFocus={() => setHoveredId(project.id)}
      onBlur={() => setHoveredId(null)}
      onClick={() => { if (project.slug) navigate(`/work/${project.slug}`); }}
      onKeyDown={(event) => {
        if (project.slug && (event.key === 'Enter' || event.key === ' ')) {
          event.preventDefault();
          navigate(`/work/${project.slug}`);
        }
      }}
      role={project.slug ? 'link' : undefined}
      tabIndex={project.slug ? 0 : undefined}
      className="flex flex-col"
      style={{
        cursor: project.slug ? 'pointer' : 'default',
        border: `1px solid ${isHovered ? accent : border}`,
        borderRadius: '12px',
        backgroundColor: cardBg,
        overflow: 'hidden',
        transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
        transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: isHovered ? `0 18px 50px ${isDark ? 'rgba(0,0,0,0.32)' : 'rgba(10,10,10,0.12)'}` : 'none',
      }}
    >
      {/* Thumbnail */}
      <div
        className="work-thumb relative w-full overflow-hidden"
        style={{ borderRadius: '12px 12px 0 0' }}
      >
        {project.quoteThumbnail ? (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: isDark ? '#111111' : '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
            }}
          >
            <span
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '0.5rem',
                left: '1.2rem',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '6rem',
                fontWeight: 700,
                lineHeight: 1,
                color: accent,
                opacity: 0.12,
              }}
            >
              &ldquo;
            </span>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(1rem, 1.6vw, 1.3rem)',
                fontStyle: 'italic',
                fontWeight: 600,
                color: text,
                textAlign: 'center',
                lineHeight: 1.4,
                margin: 0,
                maxWidth: '18rem',
                position: 'relative',
                zIndex: 1,
              }}
            >
              &ldquo;{project.quoteThumbnail[lang]}&rdquo;
            </p>
          </div>
        ) : (
          <ImageWithFallback
            src={project.image ?? ''}
            alt={typeof project.title === 'string' ? project.title : project.title[lang]}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: project.imagePosition ?? 'center',
              transition: 'transform 0.6s ease',
              transform: isHovered ? 'scale(1.04)' : 'scale(1)',
              display: 'block',
            }}
          />
        )}

        {/* In-progress badge */}
        {project.inProgressLabel && (
          <div
            style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: accent,
              backdropFilter: 'blur(4px)',
              borderRadius: '999px',
              padding: '0.22rem 0.65rem',
              zIndex: 2,
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: accentFg,
                animation: 'wk-pulse 2s ease-in-out infinite',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '10px',
                fontWeight: 600,
                color: accentFg,
                letterSpacing: '0.05em',
              }}
            >
              {project.inProgressLabel[lang]}
            </span>
          </div>
        )}

        {/* Subtle hover wash. The action remains visible below the image. */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(180deg, transparent 55%, ${isDark ? 'rgba(10,10,10,0.35)' : 'rgba(10,10,10,0.18)'})`,
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.35s ease',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Info area */}
      <div
        style={{
          padding: '20px',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          borderTop: `1px solid ${border}`,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '10px',
              fontWeight: 500,
              color: textMuted,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            {project.context}
          </div>
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '11px',
              color: accent,
              letterSpacing: '0.08em',
              flexShrink: 0,
            }}
          >
            {String(animIndex + 1).padStart(2, '0')}
          </span>
        </div>
        <h3
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(17px, 1.45vw, 21px)',
            fontWeight: 600,
            color: text,
            letterSpacing: '-0.02em',
            margin: 0,
            marginTop: '6px',
            lineHeight: 1.25,
          }}
        >
          {typeof project.title === 'string' ? project.title : project.title[lang]}
        </h3>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.35rem',
            marginTop: '12px',
          }}
        >
          {displayTags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '10px',
                fontWeight: 400,
                color: textMuted,
                backgroundColor: tagBg,
                border: `1px solid ${border}`,
                padding: '0.2rem 0.55rem',
                borderRadius: '999px',
                letterSpacing: '0.02em',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            marginTop: 'auto',
            paddingTop: '20px',
          }}
        >
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '13px',
              fontWeight: 600,
              color: text,
            }}
          >
            {t.work.viewCase}
          </span>
          <span
            aria-hidden="true"
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              display: 'grid',
              placeItems: 'center',
              color: isHovered ? accentFg : accent,
              backgroundColor: isHovered ? accent : 'transparent',
              border: `1px solid ${accent}`,
              transition: 'background-color 0.3s ease, color 0.3s ease, transform 0.3s ease',
              transform: isHovered ? 'translateX(2px)' : 'translateX(0)',
              flexShrink: 0,
            }}
          >
            <ArrowRight size={15} />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// ────────────────────────────────────────────────────────────────────────────

export function Work() {
  const { isDark } = useTheme();
  const { t, lang } = useLang();
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  useEffect(() => {
    const style = document.createElement('style');
    style.id = 'work-card-styles';
    style.textContent = `
      .work-grid { display: grid; grid-template-columns: minmax(0, 1fr); gap: 16px; }
      .work-thumb { aspect-ratio: 16 / 9; }
      @media (min-width: 768px) {
        .work-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      }
      @keyframes wk-pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.45; transform: scale(0.75); } }
    `;
    if (!document.getElementById('work-card-styles')) {
      document.head.appendChild(style);
    }
  }, []);

  const text      = isDark ? '#ffffff' : '#0A0A0A';
  const textMuted = isDark ? 'rgba(255,255,255,0.45)' : 'rgba(10,10,10,0.45)';
  const border    = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';
  const bg        = isDark ? '#0A0A0A' : '#F5F5F0';
  const cardBg    = isDark ? '#111111' : '#FFFFFF';
  const tagBg     = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)';
  const accent    = isDark ? '#AAFF00' : '#5C8A00';
  const accentFg  = isDark ? '#0A0A0A' : '#ffffff';

  const cardProps = { hoveredId, setHoveredId, t, lang, isDark, text, textMuted, border, cardBg, tagBg, accent, accentFg };

  return (
    <section id="work" style={{ backgroundColor: bg, padding: '80px 2rem' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

        {/* ── Section label ── */}
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
            {t.work.label}
          </span>
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.75rem', color: textMuted, letterSpacing: '0.05em' }}>
            01
          </span>
        </motion.div>

        {/* ── Section title ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          style={{
            borderTop: `1px solid ${border}`,
            paddingTop: '2rem',
            marginBottom: '3rem',
          }}
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
            {t.work.title1}<br />{t.work.title2}
          </h2>
        </motion.div>

        {/* ── Symmetric 2-column grid ───────────────────────────────────────────
            Two equal cards per row. Odd totals leave the final grid space empty.
            Mobile uses a single column.
        ──────────────────────────────────────────────────────────────────────── */}
        <div
          className="work-grid"
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              animIndex={i}
              {...cardProps}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
