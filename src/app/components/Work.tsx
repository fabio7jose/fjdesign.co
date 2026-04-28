import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { useTheme, useLang } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';

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
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwYXBwJTIwbW9iaWxlfGVufDF8fHx8MTc3NjgzNDg1NHww&ixlib=rb-4.1.0&q=80&w=1080',
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

// ─── Shared card heights ───────────────────────────────────────────────────────
// Desktop: card = 480px total → image ≈ 60% = 288px, info ≈ 192px
// Mobile:  image uses natural aspect-ratio, info auto

interface CardProps {
  project: Project;
  index: number;
  isFeatured: boolean;
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
  index,
  isFeatured,
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      viewport={{ once: true }}
      onMouseEnter={() => setHoveredId(project.id)}
      onMouseLeave={() => setHoveredId(null)}
      onClick={() => { if (project.slug) navigate(`/work/${project.slug}`); }}
      // Featured: auto height (image 380px + info).  Regular: fixed 480px on desktop.
      className={isFeatured ? 'flex flex-col h-auto' : 'flex flex-col h-auto md:h-[480px]'}
      style={{
        cursor: 'pointer',
        border: `1px solid ${border}`,
        borderRadius: '4px',
        backgroundColor: cardBg,
        overflow: 'hidden',
      }}
    >
      {/* ── Thumbnail ── featured: 380px desktop | regular: 260px desktop */}
      <div
        className={
          isFeatured
            ? 'relative overflow-hidden flex-shrink-0 h-[220px] md:h-[380px]'
            : 'relative overflow-hidden flex-shrink-0 h-[200px] md:h-[260px]'
        }
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
              fontSize: isFeatured ? '1.2rem' : '1rem',
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

        {/* Year badge */}
        <div
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.7rem',
            fontWeight: 400,
            color: 'rgba(255,255,255,0.7)',
            backgroundColor: 'rgba(0,0,0,0.55)',
            backdropFilter: 'blur(8px)',
            padding: '0.2rem 0.6rem',
            borderRadius: '999px',
            letterSpacing: '0.05em',
          }}
        >
          {project.year}
        </div>

        {/* Featured badge — only on the first card */}
        {isFeatured && (
          <div
            style={{
              position: 'absolute',
              top: '1rem',
              left: '1rem',
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.6rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: accentFg,
              backgroundColor: accent,
              padding: '0.22rem 0.65rem',
              borderRadius: '999px',
            }}
          >
            Featured
          </div>
        )}
      </div>

      {/* ── Card info — featured keeps existing padding; regular cards get 24px ── */}
      <div
        style={{
          padding: isFeatured ? '1.4rem 1.6rem' : '24px',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: '0.6rem',
          borderTop: `1px solid ${border}`,
        }}
      >
        {/* Top: context + title */}
        <div>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.68rem',
              fontWeight: 400,
              color: accent,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '0.45rem',
            }}
          >
            {project.context}
          </div>
          <h3
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: isFeatured ? '1.5rem' : '1.2rem',
              fontWeight: 600,
              color: text,
              letterSpacing: '-0.02em',
              margin: 0,
              lineHeight: 1.15,
            }}
          >
            {project.title}
          </h3>
        </div>

        {/* Bottom: tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', alignItems: 'flex-end' }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.68rem',
                fontWeight: 400,
                color: textMuted,
                backgroundColor: tagBg,
                border: `1px solid ${border}`,
                padding: '0.2rem 0.65rem',
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

  const text = isDark ? '#ffffff' : '#0A0A0A';
  const textMuted = isDark ? 'rgba(255,255,255,0.45)' : 'rgba(10,10,10,0.45)';
  const border = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';
  const bg = isDark ? '#0A0A0A' : '#F5F5F0';
  const cardBg = isDark ? '#111111' : '#FFFFFF';
  const tagBg = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)';
  const accent = isDark ? '#AAFF00' : '#5C8A00';
  const accentFg = isDark ? '#0A0A0A' : '#ffffff';

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

        {/* ── Asymmetric grid ──────────────────────────────────────────────────
            Featured card sits in its own row with a 24px gap below.
            All subsequent cards live in a 2-col grid with 16px gap.
            Mobile: single column throughout.
        ───────���──────────────────────────────────────────────────────────── */}
        {filtered.length > 0 && (
          <>
            {/* Featured card — full width, 24px margin before pairs */}
            <div style={{ marginBottom: filtered.length > 1 ? '24px' : 0 }}>
              <ProjectCard
                project={filtered[0]}
                index={0}
                isFeatured={true}
                {...cardProps}
              />
            </div>

            {/* Pairs — strict 2×2 grid, always 4 cards, no orphan logic */}
            {filtered.length > 1 && (
              <div
                className="grid grid-cols-1 md:grid-cols-2"
                style={{ gap: '16px' }}
              >
                {filtered.slice(1).map((project, i) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={i + 1}
                    isFeatured={false}
                    {...cardProps}
                  />
                ))}
              </div>
            )}
          </>
        )}

      </div>
    </section>
  );
}