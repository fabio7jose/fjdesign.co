import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { useTheme, useLang } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';
import lacreiThumbnail from '../../assets/lacrei-thumbnail.png';

interface Project {
  id: number;
  slug?: string;
  title: string;
  context: string;
  category: string;
  image: string;
  tags: string[];
  year: string;
}

const projects: Project[] = [
  {
    id: 0,
    slug: 'lacrei-saude',
    title: 'Lacrei Saúde',
    context: 'UX Design · Voluntário',
    category: 'UX Design',
    image: lacreiThumbnail,
    tags: ['UX Research', 'Figma', 'Miro', 'Design Thinking'],
    year: '2024',
  },
  {
    id: 1,
    title: 'Digital Ecosystem Redesign',
    context: 'UX Research · TT&T IT Solutions',
    category: 'UX Design',
    image:
      'https://images.unsplash.com/photo-1767449441925-737379bc2c4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVWCUyMFVJJTIwZGVzaWduJTIwd2lyZWZyYW1lJTIwbW9iaWxlJTIwYXBwfGVufDF8fHx8MTc3NjgzNDg1NHww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['UX Research', 'Figma', 'Wireframing', 'Lean UX'],
    year: '2024',
  },
  {
    id: 2,
    title: 'Sales Platform UI',
    context: 'Web Design · AddSales',
    category: 'Web Design',
    image:
      'https://images.unsplash.com/photo-1720962158883-b0f2021fb51e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2UlMjBkYXJrfGVufDF8fHx8MTc3NjgzNDg1NXww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Web Design', 'HTML/CSS', 'Figma', 'Visual Design'],
    year: '2024',
  },
  {
    id: 3,
    title: 'High-Converting Landing Page',
    context: 'Landing Page · E-commerce Client',
    category: 'Landing Pages',
    image:
      'https://images.unsplash.com/photo-1648134859177-66e35b61e106?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kaW5nJTIwcGFnZSUyMGVjb21tZXJjZSUyMHdlYnNpdGUlMjBkZXNpZ258ZW58MXx8fHwxNzc2ODM0ODU3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['HTML/CSS', 'Figma', 'Responsive Layout', 'Visual Design'],
    year: '2023',
  },
  {
    id: 4,
    title: 'Health App UX Research',
    context: 'UX Research · Health Startup',
    category: 'UX Design',
    image:
      'https://images.unsplash.com/photo-1518349619113-03114f06ac3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcmVzZWFyY2glMjBpbnRlcnZpZXclMjB1c2FiaWxpdHklMjB0ZXN0aW5nfGVufDF8fHx8MTc3NjgzNDg1OHww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['User Research', 'Personas', 'Journey Map', 'Usability Testing'],
    year: '2023',
  },
  {
    id: 5,
    title: 'Mobile App Prototype',
    context: 'UX/UI Design · Fintech Startup',
    category: 'UX Design',
    image:
      'https://images.unsplash.com/photo-1748801583967-3038967d7279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBVSSUyMHByb3RvdHlwZSUyMGRlc2lnbiUyMHNjcmVlbnxlbnwxfHx8fDE3NzY4MzQ4NjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Prototyping', 'Figma', 'UX Research', 'Design Systems'],
    year: '2022',
  },
];

// English filter values — used for category logic; translated labels come from i18n
const filterValues = ['All', 'UX Design', 'Web Design', 'Landing Pages'];

interface CardProps {
  project: Project;
  animIndex: number;
  isFullWidth: boolean;
  hoveredId: number | null;
  setHoveredId: (id: number | null) => void;
  t: { work: { viewCase: string } };
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
  const thumbHeight = isFullWidth ? 200 : 260;

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
        style={{
          position: 'relative',
          overflow: 'hidden',
          flexShrink: 0,
          height: `${thumbHeight}px`,
        }}
      >
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
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
          {project.title}
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
  const { t } = useLang();
  const [activeFilterIdx, setActiveFilterIdx] = useState(0);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const activeFilter = filterValues[activeFilterIdx];
  const filtered =
    activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter);

  const text      = isDark ? '#ffffff' : '#0A0A0A';
  const textMuted = isDark ? 'rgba(255,255,255,0.45)' : 'rgba(10,10,10,0.45)';
  const border    = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';
  const bg        = isDark ? '#0A0A0A' : '#F5F5F0';
  const cardBg    = isDark ? '#111111' : '#FFFFFF';
  const tagBg     = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)';
  const accent    = isDark ? '#AAFF00' : '#5C8A00';
  const accentFg  = isDark ? '#0A0A0A' : '#ffffff';

  const cardProps = { hoveredId, setHoveredId, t, isDark, text, textMuted, border, cardBg, tagBg, accent, accentFg };

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

        {/* ── Section title + filters ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          style={{
            borderTop: `1px solid ${border}`,
            paddingTop: '2rem',
            marginBottom: '3rem',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
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

          {/* Filter pills */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {filterValues.map((val, i) => (
              <button
                key={val}
                onClick={() => setActiveFilterIdx(i)}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.8rem',
                  fontWeight: 400,
                  padding: '0.4rem 1rem',
                  borderRadius: '999px',
                  border: `1px solid ${activeFilterIdx === i ? accent : border}`,
                  backgroundColor: activeFilterIdx === i ? accent : 'transparent',
                  color: activeFilterIdx === i ? accentFg : text,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  letterSpacing: '0.02em',
                }}
              >
                {t.work.filters[i]}
              </button>
            ))}
          </div>
        </motion.div>

        {/* ── Symmetric 2-column grid ───────────────────────────────────────────
            All cards identical size. Odd total: last card spans both columns.
            Mobile: single column throughout.
        ──────────────────────────────────────────────────────────────────────── */}
        {filtered.length > 0 && (
          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ gap: '16px' }}
          >
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                animIndex={i}
                isFullWidth={filtered.length % 2 !== 0 && i === filtered.length - 1}
                {...cardProps}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
