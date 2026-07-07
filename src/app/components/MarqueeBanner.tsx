import React from 'react';
import { useTheme } from '../App';

const items = [
  'Product Design',
  '✦',
  'UX Design',
  '✦',
  'Design Systems',
  '✦',
  'AI Builder',
  '✦',
  'Prototyping',
  '✦',
  'User Research',
  '✦',
  'Front-end Dev',
  '✦',
  'Figma Expert',
  '✦',
  'Web Design',
  '✦',
  'Landing Pages',
  '✦',
  'Product Design',
  '✦',
  'UX Design',
  '✦',
  'Design Systems',
  '✦',
  'AI Builder',
  '✦',
  'Prototyping',
  '✦',
  'User Research',
  '✦',
  'Front-end Dev',
  '✦',
  'Figma Expert',
  '✦',
  'Web Design',
  '✦',
  'Landing Pages',
  '✦',
];

export function MarqueeBanner() {
  const { isDark } = useTheme();

  const bg = isDark ? '#111111' : '#EBEBEB';
  const text = isDark ? 'rgba(255,255,255,0.55)' : 'rgba(10,10,10,0.55)';
  const accent = isDark ? '#AAFF00' : '#5C8A00';

  return (
    <div
      style={{
        backgroundColor: bg,
        borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
        borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
        overflow: 'hidden',
        padding: '1.1rem 0',
      }}
    >
      <div
        className="marquee-track"
        style={{
          display: 'flex',
          gap: '2.5rem',
          whiteSpace: 'nowrap',
        }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: item === '✦' ? 'monospace' : "'Inter', sans-serif",
              fontSize: '0.8rem',
              fontWeight: 400,
              color: item === '✦' ? accent : text,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              flexShrink: 0,
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}