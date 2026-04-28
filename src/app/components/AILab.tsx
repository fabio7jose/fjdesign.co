import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { useTheme, useLang } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';

const tilesMeta = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1674305281997-b6538532f388?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGdlbmVyYXRlZCUyMGFydCUyMGRpZ2l0YWwlMjBhYnN0cmFjdCUyMGNvbG9yZnVsfGVufDF8fHx8MTc3NjgzNDg2MHww&ixlib=rb-4.1.0&q=80&w=1080',
    aspectRatio: '1/1',
    isVideo: false,
    tagColor: '#AAFF00',
    tagIndex: 0,
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1773983240131-b26cfc6b9634?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGdlbmVyYXRpdmUlMjB2aXN1YWwlMjBuZW9uJTIwZ2xpdGNoJTIwYXJ0fGVufDF8fHx8MTc3NjgzNDg2MXww&ixlib=rb-4.1.0&q=80&w=1080',
    aspectRatio: '4/5',
    isVideo: true,
    tagColor: '#FF6B6B',
    tagIndex: 1,
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1760931969401-9bd6ee902798?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwZGlnaXRhbCUyMGludGVyZmFjZSUyMG5lb24lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3NjgzNDg2NHww&ixlib=rb-4.1.0&q=80&w=1080',
    aspectRatio: '3/2',
    isVideo: false,
    tagColor: '#6B9FFF',
    tagIndex: 2,
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1768916321665-5cce61680088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwQUklMjBwdXJwbGUlMjB2aW9sZXQlMjB2aXN1YWxpemF0aW9ufGVufDF8fHx8MTc3NjgzNTAyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    aspectRatio: '1/1.2',
    isVideo: false,
    tagColor: '#AAFF00',
    tagIndex: 0,
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1604472782307-0f66f8c4df8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlbmVyYXRpdmUlMjBtYWNoaW5lJTIwbGVhcm5pbmclMjB2aXN1YWxpemF0aW9ufGVufDF8fHx8MTc3NjgzNDg2NXww&ixlib=rb-4.1.0&q=80&w=1080',
    aspectRatio: '2/3',
    isVideo: true,
    tagColor: '#FF6B6B',
    tagIndex: 1,
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1748801583967-3038967d7279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBVSSUyMHByb3RvdHlwZSUyMGRlc2lnbiUyMHNjcmVlbnxlbnwxfHx8fDE3NzY4MzQ4NjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    aspectRatio: '3/4',
    isVideo: false,
    tagColor: '#6B9FFF',
    tagIndex: 2,
  },
];

export function AILab() {
  const { isDark } = useTheme();
  const { t } = useLang();
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const text = isDark ? '#ffffff' : '#0A0A0A';
  const textMuted = 'var(--color-text-muted)';
  const border = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';
  const bg = isDark ? '#0A0A0A' : '#F5F5F0';
  const accent = isDark ? '#AAFF00' : '#5C8A00';
  const accentBorder = isDark ? 'rgba(170,255,0,0.4)' : 'rgba(92,138,0,0.35)';
  const resolvedTagColor = (color: string) => color === '#AAFF00' ? accent : color;

  return (
    <section id="ai-lab" style={{ backgroundColor: bg, padding: '80px 2rem' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Section label */}
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
            {t.aiLab.label}
          </span>
          <span
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.75rem', color: textMuted, letterSpacing: '0.05em' }}
          >
            04
          </span>
        </motion.div>

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
              margin: '0 0 1.5rem',
            }}
          >
            {t.aiLab.title1}<br />{t.aiLab.title2}
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)',
              fontWeight: 300,
              color: isDark ? 'rgba(255,255,255,0.55)' : 'rgba(10,10,10,0.55)',
              lineHeight: 1.7,
              maxWidth: '620px',
              margin: 0,
            }}
          >
            {t.aiLab.description}
          </p>
        </motion.div>

        {/* Tag legend */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}
        >
          {t.aiLab.tags.map((tag) => (
            <div
              key={tag.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.75rem',
                color: textMuted,
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: resolvedTagColor(tag.color),
                  display: 'inline-block',
                }}
              />
              {tag.label}
            </div>
          ))}
        </motion.div>

        {/* Masonry grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 640: 2, 1024: 3 }}>
            <Masonry gutter="8px">
              {tilesMeta.map((tile) => {
                const tileTrans = t.aiLab.tiles[tile.id - 1];
                const tagLabel = t.aiLab.tags[tile.tagIndex]?.label ?? '';
                return (
                  <div
                    key={tile.id}
                    onMouseEnter={() => setHoveredId(tile.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    style={{
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      border: `1px solid ${border}`,
                    }}
                  >
                    <ImageWithFallback
                      src={tile.src}
                      alt={tileTrans.title}
                      style={{
                        width: '100%',
                        display: 'block',
                        aspectRatio: tile.aspectRatio,
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease',
                        transform: hoveredId === tile.id ? 'scale(1.04)' : 'scale(1)',
                      }}
                    />

                    {/* Hover overlay */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: isDark ? 'rgba(10,10,10,0.7)' : 'rgba(0,0,0,0.55)',
                        opacity: hoveredId === tile.id ? 1 : 0,
                        transition: 'opacity 0.3s ease',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        padding: '1.2rem',
                      }}
                    >
                      {tile.isVideo && (
                        <div
                          style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '48px',
                            height: '48px',
                            borderRadius: '50%',
                            backgroundColor: isDark ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.2)',
                            backdropFilter: 'blur(8px)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid rgba(255,255,255,0.2)',
                          }}
                        >
                          <Play size={18} color={isDark ? '#ffffff' : '#f0f0f0'} fill={isDark ? '#ffffff' : '#f0f0f0'} />
                        </div>
                      )}
                      <p
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: '0.9rem',
                          fontWeight: 500,
                          color: '#ffffff',
                          margin: 0,
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {tileTrans.title}
                      </p>
                    </div>

                    {/* Always-visible tag */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '0.75rem',
                        left: '0.75rem',
                        backgroundColor: isDark ? 'rgba(10,10,10,0.7)' : 'rgba(0,0,0,0.6)',
                        backdropFilter: 'blur(8px)',
                        border: `1px solid ${tile.tagColor}33`,
                        borderRadius: '999px',
                        padding: '0.2rem 0.6rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                      }}
                    >
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: resolvedTagColor(tile.tagColor),
                          display: 'inline-block',
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '0.65rem',
                          fontWeight: 400,
                          color: resolvedTagColor(tile.tagColor),
                          letterSpacing: '0.06em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {tagLabel}
                      </span>
                    </div>
                  </div>
                );
              })}
            </Masonry>
          </ResponsiveMasonry>
        </motion.div>

        {/* Tools I Use */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ marginTop: '3rem' }}
        >
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.7rem',
              fontWeight: 400,
              color: textMuted,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '1rem',
            }}
          >
            {t.aiLab.toolsLabel}
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {t.aiLab.tools.map((tool) => (
              <span
                key={tool}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.75rem',
                  fontWeight: 400,
                  color: accent,
                  backgroundColor: isDark ? '#0A0A0A' : '#F5F5F0',
                  border: `1px solid ${accentBorder}`,
                  borderRadius: '999px',
                  padding: '0.35rem 0.9rem',
                  letterSpacing: '0.02em',
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}