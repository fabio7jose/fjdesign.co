import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { useTheme, useLang } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';
import lacreiThumbnail from '../../assets/lacrei/lacrei-thumbnail.png';
import guiaThumbnail from '../../assets/guia-moteis/guia-moteis-thumbnail.png';

interface Project {
  id: number;
  slug?: string;
  title: string | { pt: string; en: string };
  context: string;
  category: string;
  image: string;
  imagePosition?: string;
  tags: string[];
  year: string;
}

const projects: Project[] = [
  {
    id: 0,
    slug: 'lacrei-saude',
    title: {
      en: 'Lacrei Saúde — Inclusive Healthcare Platform',
      pt: 'Lacrei Saúde — Plataforma de Saúde Inclusiva'
    },
    context: 'UX/UI DESIGN · WEB PLATFORM',
    category: 'UX/UI DESIGN · WEB PLATFORM',
    image: lacreiThumbnail,
    imagePosition: '20% center',
    tags: ["UX Research", "UI Design", "Figma", "Design Thinking"],
    year: '2024',
  },
  {
    id: 6,
    slug: 'guia-de-moteis',
    title: {
      en: 'Guia de Motéis GO: Landing Page Redesign',
      pt: 'Guia de Motéis GO: Redesign de Landing Page',
    },
    context: 'UI DESIGN · LANDING PAGE',
    category: 'Landing Pages',
    image: guiaThumbnail,
    tags: ['UX Research', 'Crazy 8s', 'Wireframing', 'UI Design'],
    year: '2024',
  },
];



interface CardProps {
  project: Project;
  animIndex: number;
  isFullWidth: boolean;
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
  isFullWidth,
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: animIndex * 0.07 }}
      viewport={{ once: true }}
      onMouseEnter={() => setHoveredId(project.id)}
      onMouseLeave={() => setHoveredId(null)}
      onClick={() => { if (project.slug) navigate(`/work/${project.slug}`); }}
      className="flex flex-col"
      style={{
        cursor: project.slug ? 'pointer' : 'default',
        border: `1px solid ${isHovered ? accent : border}`,
        borderRadius: '8px',
        backgroundColor: cardBg,
        overflow: 'hidden',
        transition: 'transform 0.3s ease, border-color 0.3s ease',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        gridColumn: isFullWidth ? '1 / -1' : undefined,
      }}
    >
      {/* Thumbnail */}
      <div
        className="work-thumb relative w-full overflow-hidden"
        style={{ borderRadius: '8px 8px 0 0' }}
      >
        <ImageWithFallback
          src={project.image}
          alt={project.title}
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

        {/* Hover overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: isDark ? 'rgba(10,10,10,0.82)' : 'rgba(0,0,0,0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.35s ease',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '1rem',
              fontWeight: 600,
              color: accent,
              border: `1px solid ${accent}`,
              padding: '0.7rem 1.5rem',
              borderRadius: '999px',
            }}
          >
            {t.work.viewCase}
            <ArrowRight size={16} />
          </div>
        </div>
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
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '11px',
            fontWeight: 400,
            color: textMuted,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          {project.context}
        </div>
        <h3
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '18px',
            fontWeight: 600,
            color: text,
            letterSpacing: '-0.02em',
            margin: 0,
            marginTop: '6px',
            lineHeight: 1.2,
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
          {project.tags.map((tag) => (
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
    style.textContent = `.work-thumb { padding-bottom: 75%; } @media (min-width: 768px) { .work-thumb { padding-bottom: 56.25%; } }`;
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
            All cards identical size. Odd total: last card spans both columns.
            Mobile: single column throughout.
        ──────────────────────────────────────────────────────────────────────── */}
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: '16px' }}
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              animIndex={i}
              isFullWidth={projects.length % 2 !== 0 && i === projects.length - 1}
              {...cardProps}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
