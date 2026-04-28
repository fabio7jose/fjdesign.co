import React from 'react';
import { motion } from 'motion/react';
import { Download, MapPin, GraduationCap } from 'lucide-react';
import { useTheme, useLang } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';
import profileImg from '../../imports/image-1.png';

export function About() {
  const { isDark } = useTheme();
  const { t } = useLang();

  const text = isDark ? '#ffffff' : '#0A0A0A';
  const textMuted = isDark ? 'rgba(255,255,255,0.45)' : 'rgba(10,10,10,0.45)';
  const border = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';
  const bg = isDark ? '#0A0A0A' : '#F5F5F0';
  const cardBg = isDark ? '#111111' : '#ffffff';
  const accent = isDark ? '#AAFF00' : '#5C8A00';
  const accentFg = isDark ? '#0A0A0A' : '#ffffff';
  const accentAlpha = isDark ? 'rgba(170,255,0,0.35)' : 'rgba(92,138,0,0.3)';
  const accentBg = isDark ? 'rgba(170,255,0,0.05)' : 'rgba(92,138,0,0.06)';

  return (
    <section id="about" style={{ backgroundColor: bg, padding: '80px 2rem' }}>
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
            {t.about.label}
          </span>
          <span
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.75rem', color: textMuted, letterSpacing: '0.05em' }}
          >
            05
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
              margin: 0,
            }}
          >
            {t.about.title}
          </h2>
        </motion.div>

        {/* Two column layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
            gap: '4rem',
            alignItems: 'start',
          }}
        >
          {/* Photo column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            style={{ position: 'relative' }}
          >
            <div
              style={{
                borderRadius: '4px',
                overflow: 'hidden',
                border: `1px solid ${border}`,
                aspectRatio: '4/5',
                position: 'relative',
              }}
            >
              <ImageWithFallback
                src={profileImg}
                alt="Fábio José"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 45%', display: 'block' }}
              />
              {/* Overlay gradient */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '40%',
                  background: `linear-gradient(transparent, ${isDark ? 'rgba(10,10,10,0.8)' : 'rgba(245,245,240,0.8)'})`,
                }}
              />
              {/* Name overlay */}
              <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem' }}>
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Fábio José
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.8rem',
                    color: 'rgba(255,255,255,0.6)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    marginTop: '0.2rem',
                  }}
                >
                  <MapPin size={11} />
                  {t.about.location}
                </div>
              </div>
            </div>

            {/* Accent line */}
            <div
              style={{
                position: 'absolute',
                top: '-12px',
                left: '-12px',
                width: '80px',
                height: '80px',
                border: '2px solid ' + accent,
                borderRadius: '4px',
                opacity: 0.4,
                zIndex: -1,
              }}
            />
          </motion.div>

          {/* Bio column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}
          >
            {/* Availability badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                border: `1px solid ${accentAlpha}`,
                borderRadius: '999px',
                padding: '0.4rem 1rem',
                backgroundColor: accentBg,
                alignSelf: 'flex-start',
              }}
            >
              <span
                className="pulse-dot"
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  backgroundColor: accent,
                  display: 'inline-block',
                }}
              />
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.78rem',
                  fontWeight: 400,
                  color: accent,
                }}
              >
                {t.about.openTo}
              </span>
            </div>

            {/* Bio text */}
            <div>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
                  fontWeight: 300,
                  color: isDark ? 'rgba(255,255,255,0.75)' : 'rgba(10,10,10,0.75)',
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {t.about.bio}
              </p>
            </div>

            {/* Download CV button */}
            <button
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                backgroundColor: 'transparent',
                color: text,
                border: `1px solid ${border}`,
                borderRadius: '999px',
                padding: '0.8rem 1.8rem',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.9rem',
                fontWeight: 500,
                cursor: 'pointer',
                alignSelf: 'flex-start',
                transition: 'all 0.2s ease',
                letterSpacing: '0.01em',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = accent;
                e.currentTarget.style.color = accentFg;
                e.currentTarget.style.borderColor = accent;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = text;
                e.currentTarget.style.borderColor = border;
              }}
            >
              <Download size={15} />
              {t.about.downloadCV}
            </button>

            {/* Divider */}
            <div style={{ height: '1px', backgroundColor: border }} />

            {/* Education */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '1.5rem',
                }}
              >
                <GraduationCap size={16} color={accent} />
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.7rem',
                    fontWeight: 400,
                    color: accent,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                  }}
                >
                  {t.about.education}
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {t.about.eduItems.map((edu) => (
                  <div
                    key={edu.degree}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      padding: '1.2rem 1.5rem',
                      backgroundColor: cardBg,
                      border: `1px solid ${border}`,
                      borderRadius: '4px',
                      gap: '1rem',
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: '0.95rem',
                          fontWeight: 600,
                          color: text,
                          letterSpacing: '-0.01em',
                          marginBottom: '0.25rem',
                        }}
                      >
                        {edu.degree}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '0.8rem',
                          color: textMuted,
                        }}
                      >
                        {edu.school}
                      </div>
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '0.75rem',
                          color: edu.status === 'ongoing' ? accent : textMuted,
                          letterSpacing: '0.02em',
                        }}
                      >
                        {edu.period}
                      </div>
                      {edu.status === 'ongoing' && (
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.3rem',
                            justifyContent: 'flex-end',
                            marginTop: '0.2rem',
                          }}
                        >
                          <span
                            className="pulse-dot"
                            style={{
                              width: '5px',
                              height: '5px',
                              borderRadius: '50%',
                              backgroundColor: accent,
                              display: 'inline-block',
                            }}
                          />
                          <span
                            style={{
                              fontFamily: "'Inter', sans-serif",
                              fontSize: '0.65rem',
                              color: accent,
                              letterSpacing: '0.08em',
                            }}
                          >
                            {t.about.active}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}