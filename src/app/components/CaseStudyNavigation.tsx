import { Link } from 'react-router';
import { motion } from 'motion/react';
import { useLang, useTheme } from '../App';
import { projects, type Project } from '../data/projects';

interface CaseStudyNavigationProps {
  currentSlug: string;
}

export function CaseStudyNavigation({ currentSlug }: CaseStudyNavigationProps) {
  const { isDark } = useTheme();
  const { t } = useLang();
  const currentIndex = projects.findIndex((project) => project.slug === currentSlug);

  if (currentIndex === -1) return null;

  const previous = projects[currentIndex - 1];
  const next = projects[currentIndex + 1];
  const text = isDark ? '#ffffff' : '#0A0A0A';
  const textMuted = isDark ? 'rgba(255,255,255,0.45)' : 'rgba(10,10,10,0.45)';
  const border = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';
  const accent = isDark ? '#AAFF00' : '#5C8A00';

  const getTitle = (project: Project) => t[project.translationKey].projectTitle;
  const getPosition = (project: Project) => {
    const position = projects.findIndex((item) => item.slug === project.slug) + 1;
    return `${String(position).padStart(2, '0')} / ${String(projects.length).padStart(2, '0')}`;
  };

  const renderLink = (project: Project, direction: 'previous' | 'next') => (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: direction === 'next' ? 0.07 : 0 }}
    >
      <Link
        to={`/work/${project.slug}`}
        style={{
          display: 'block',
          border: `1px solid ${border}`,
          borderRadius: '12px',
          padding: '2rem',
          textAlign: direction === 'next' ? 'right' : 'left',
          transition: 'border-color 0.2s ease',
          cursor: 'pointer',
          textDecoration: 'none',
        }}
        onMouseEnter={(event) => (event.currentTarget.style.borderColor = accent)}
        onMouseLeave={(event) => (event.currentTarget.style.borderColor = border)}
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
          {direction === 'previous' ? '← ' : ''}
          {direction === 'previous' ? t.work.previousProject : t.work.nextProject}
          {' · '}{getPosition(project)}
          {direction === 'next' ? ' →' : ''}
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
          {getTitle(project)}
        </p>
      </Link>
    </motion.div>
  );

  return (
    <section style={{ padding: '60px 2rem', borderTop: `1px solid ${border}` }}>
      <div
        className="grid grid-cols-1 md:grid-cols-2"
        style={{ maxWidth: '1400px', margin: '0 auto', gap: '1.5rem' }}
      >
        {previous ? renderLink(previous, 'previous') : <div />}
        {next ? renderLink(next, 'next') : <div />}
      </div>
    </section>
  );
}
