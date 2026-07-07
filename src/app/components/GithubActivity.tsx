import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Github, ArrowUpRight } from 'lucide-react';
import { useTheme, useLang } from '../App';

const GITHUB_USERNAME = 'fabio7jose';
const CONTRIBUTIONS_API = `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`;

const CELL = 10;
const MAX_CELL = 14;
const GAP = 3;
const LABEL_COL = 28;

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

function buildWeeks(days: ContributionDay[]): (ContributionDay | null)[][] {
  if (days.length === 0) return [];
  const weeks: (ContributionDay | null)[][] = [];
  let week: (ContributionDay | null)[] = [];
  const firstWeekday = new Date(`${days[0].date}T00:00:00`).getDay();
  for (let i = 0; i < firstWeekday; i++) week.push(null);
  for (const day of days) {
    week.push(day);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  }
  if (week.length) {
    while (week.length < 7) week.push(null);
    weeks.push(week);
  }
  return weeks;
}

function buildMonthLabels(weeks: (ContributionDay | null)[][], locale: string) {
  const formatter = new Intl.DateTimeFormat(locale, { month: 'short' });
  const labels: { weekIndex: number; label: string }[] = [];
  let lastMonth = -1;
  weeks.forEach((week, i) => {
    const firstDay = week.find((d) => d !== null);
    if (!firstDay) return;
    const month = new Date(`${firstDay.date}T00:00:00`).getMonth();
    if (month !== lastMonth) {
      labels.push({ weekIndex: i, label: formatter.format(new Date(`${firstDay.date}T00:00:00`)) });
      lastMonth = month;
    }
  });
  return labels;
}

export function GithubActivity() {
  const { isDark } = useTheme();
  const { t, lang } = useLang();
  const heatmapScrollRef = useRef<HTMLDivElement>(null);

  const [contributions, setContributions] = useState<ContributionDay[] | null>(null);
  const [totalLastYear, setTotalLastYear] = useState<number | null>(null);
  const [fetchFailed, setFetchFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(CONTRIBUTIONS_API)
      .then((res) => res.json())
      .then((data) => {
        if (cancelled) return;
        setContributions(data.contributions ?? []);
        setTotalLastYear(data.total?.lastYear ?? null);
      })
      .catch(() => {
        if (!cancelled) setFetchFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const weeks = useMemo(() => buildWeeks(contributions ?? []), [contributions]);
  const monthLabels = useMemo(
    () => buildMonthLabels(weeks, lang === 'pt' ? 'pt-BR' : 'en-US'),
    [weeks, lang]
  );

  useEffect(() => {
    const el = heatmapScrollRef.current;
    if (el && weeks.length) el.scrollLeft = el.scrollWidth;
  }, [weeks]);

  const text       = isDark ? '#ffffff'                    : '#0A0A0A';
  const textMuted  = 'var(--color-text-muted)';
  const border     = isDark ? 'rgba(255,255,255,0.08)'     : 'rgba(0,0,0,0.08)';
  const bg         = isDark ? '#0A0A0A'                    : '#F5F5F0';
  const cardBg     = isDark ? '#111111'                    : '#ffffff';
  const accent     = isDark ? '#AAFF00'                    : '#5C8A00';
  const accentFg   = isDark ? '#0A0A0A'                    : '#ffffff';
  const accentRgb  = isDark ? '170,255,0'                  : '92,138,0';
  const emptyCell  = isDark ? 'rgba(255,255,255,0.06)'     : 'rgba(0,0,0,0.05)';
  const levelAlphas = [0, 0.35, 0.55, 0.78, 1];

  const dayLabels = lang === 'pt'
    ? { 1: 'Seg', 3: 'Qua', 5: 'Sex' }
    : { 1: 'Mon', 3: 'Wed', 5: 'Fri' };

  return (
    <section id="github" style={{ backgroundColor: bg, padding: '80px 2rem' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

        {/* ── Eyebrow label ── */}
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
            {t.githubActivity.label}
          </span>
          <span
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.75rem', color: textMuted, letterSpacing: '0.05em' }}
          >
            02
          </span>
        </motion.div>

        {/* ── Section title + description ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          style={{ borderTop: `1px solid ${border}`, paddingTop: '2rem', marginBottom: '2rem' }}
        >
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(2.5rem, 5vw, 5rem)',
              fontWeight: 700,
              color: text,
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              margin: '0 0 1.25rem',
            }}
          >
            {t.githubActivity.title}
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1rem',
              fontWeight: 400,
              color: textMuted,
              lineHeight: 1.75,
              maxWidth: '640px',
              margin: 0,
            }}
          >
            {t.githubActivity.description}
          </p>
        </motion.div>

        {/* ── Contribution heatmap card ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{
            backgroundColor: cardBg,
            border: `1px solid ${border}`,
            borderRadius: '4px',
            padding: '32px',
            marginBottom: '16px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Github size={18} color={text} />
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1rem', fontWeight: 600, color: text }}>
                  {t.githubActivity.username}
                </span>
              </div>
              {totalLastYear !== null && (
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: textMuted }}>
                  {totalLastYear} {t.githubActivity.contributionsSuffix}
                </span>
              )}
            </div>
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: accent,
                color: accentFg,
                border: 'none',
                borderRadius: '999px',
                padding: '0.6rem 1.25rem',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.85rem',
                fontWeight: 600,
                textDecoration: 'none',
                letterSpacing: '0.01em',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = isDark ? '0 8px 32px rgba(170,255,0,0.3)' : '0 8px 32px rgba(92,138,0,0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {t.githubActivity.cta}
              <ArrowUpRight size={15} />
            </a>
          </div>

          {!fetchFailed && weeks.length > 0 && (
            <div ref={heatmapScrollRef} style={{ overflowX: 'auto' }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: `${LABEL_COL}px repeat(${weeks.length}, minmax(${CELL}px, 1fr))`,
                  gap: GAP,
                  maxWidth: LABEL_COL + weeks.length * (MAX_CELL + GAP),
                  minWidth: LABEL_COL + weeks.length * (CELL + GAP),
                  margin: '0 auto',
                }}
              >
                {/* Row 1: empty corner + month labels */}
                <div />
                {weeks.map((week, wi) => {
                  const label = monthLabels.find((m) => m.weekIndex === wi)?.label;
                  return (
                    <div key={`m-${wi}`} style={{ position: 'relative', height: '16px' }}>
                      {label && (
                        <span
                          style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            whiteSpace: 'nowrap',
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '0.7rem',
                            color: textMuted,
                            textTransform: 'capitalize',
                          }}
                        >
                          {label}
                        </span>
                      )}
                    </div>
                  );
                })}

                {/* Rows 2-8: day-of-week label (sticky while scrolling) + cells */}
                {Array.from({ length: 7 }).map((_, di) => (
                  <React.Fragment key={`row-${di}`}>
                    <div
                      style={{
                        position: 'sticky',
                        left: 0,
                        backgroundColor: cardBg,
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', color: textMuted }}>
                        {(dayLabels as Record<number, string>)[di] ?? ''}
                      </span>
                    </div>
                    {weeks.map((week, wi) => {
                      const day = week[di];
                      return (
                        <div
                          key={`c-${wi}-${di}`}
                          title={day ? `${day.count} · ${day.date}` : undefined}
                          style={{
                            width: '100%',
                            aspectRatio: '1',
                            borderRadius: '2px',
                            backgroundColor: day
                              ? day.level > 0
                                ? `rgba(${accentRgb},${levelAlphas[Math.min(day.level, 4)]})`
                                : emptyCell
                              : 'transparent',
                          }}
                        />
                      );
                    })}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}
        </motion.div>

      </div>
    </section>
  );
}
