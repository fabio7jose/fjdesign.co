import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, VolumeX, X } from 'lucide-react';
import { useTheme, useLang } from '../App';

import estadao from '../../assets/motion-content/1-br-estadao-banners-abril-1200x1200-19715-v2.jpg';
import ipemig from '../../assets/motion-content/2-br-ipemig-banner-marco-1200x1200-19406.jpg';
import netlife from '../../assets/motion-content/2-ec-netlife-carrossel-julho-1200x1200-20922.jpg';
import movistarNov from '../../assets/motion-content/3-co-movistar-banner-novembro-1200x1200-25484.png';
import movistarOct from '../../assets/motion-content/3-co-movistar-banners-outubro-25262.png';
import prosegurImg from '../../assets/motion-content/3-CO-Prosegur-banner-marco-1200x1200-26185.png';
import virgin from '../../assets/motion-content/cl-virgin-abril-banner-1125x600-26156.png';
import sams from '../../assets/motion-content/br-sams-banner-home-crystal-fevereiro-1500x630-23528.jpg';

const videoData = [
  { src: 'https://res.cloudinary.com/dzvkwjrgi/video/upload/v1778203499/2-br-wine-abril-video-1080x1920-26300_q1cbbf.mp4', client: 'Wine', country: 'Brasil' },
  { src: 'https://res.cloudinary.com/dzvkwjrgi/video/upload/v1778203451/2-co-movistar-abril-video-1080x1920-26337_xnxyoz.mp4', client: 'Movistar', country: 'Colombia' },
  { src: 'https://res.cloudinary.com/dzvkwjrgi/video/upload/v1778203449/1-co-prosegur-marc%CC%A7o-videos-1080x1920-26187_gejicd.mp4', client: 'Prosegur', country: 'Colombia' },
  { src: 'https://res.cloudinary.com/dzvkwjrgi/video/upload/v1778203448/1-co-prosegur-marc%CC%A7o-video-1080x1920-26186_skcwy4.mp4', client: 'Prosegur', country: 'Colombia' },
  { src: 'https://res.cloudinary.com/dzvkwjrgi/video/upload/vc_h264/v1778203444/3-ar-payway-abril-videos-1080x1920-25993_kcemvj.mp4', client: 'Payway', country: 'Argentina' },
  { src: 'https://res.cloudinary.com/dzvkwjrgi/video/upload/v1778203442/1-co-movistar-abril-video-1080x1920-25931-v3_nzys6e.mp4', client: 'Movistar', country: 'Colombia' },
];

const imageData = [
  { src: estadao, client: 'Estadão', country: 'Brasil' },
  { src: ipemig, client: 'Ipemig', country: 'Brasil' },
  { src: netlife, client: 'Netlife', country: 'Ecuador' },
  { src: movistarNov, client: 'Movistar', country: 'Colombia' },
  { src: movistarOct, client: 'Movistar', country: 'Colombia' },
  { src: prosegurImg, client: 'Prosegur', country: 'Colombia' },
  { src: virgin, client: 'Virgin', country: 'Chile' },
  { src: sams, client: "Sam's Club", country: 'Brasil' },
];

interface LightboxState {
  src: string;
  client: string;
  country: string;
}

export function MotionContent() {
  const { isDark } = useTheme();
  const { t } = useLang();
  const [unMutedVideos, setUnMutedVideos] = useState<Set<number>>(new Set());
  const [activeImage, setActiveImage] = useState<LightboxState | null>(null);
  const [activeVideo, setActiveVideo] = useState<LightboxState | null>(null);
  const [activeVideoIdx, setActiveVideoIdx] = useState<number | null>(null);
  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});

  const text      = isDark ? '#ffffff' : '#0A0A0A';
  const textMuted = isDark ? 'rgba(255,255,255,0.45)' : 'rgba(10,10,10,0.45)';
  const border    = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';
  const bg        = isDark ? '#0A0A0A' : '#F5F5F0';
  const accent    = isDark ? '#AAFF00' : '#5C8A00';
  const accentFg  = isDark ? '#0A0A0A' : '#ffffff';

  const toggleMute = (videoIdx: number) => {
    const el = videoRefs.current[videoIdx];
    if (!el) return;
    setUnMutedVideos(prev => {
      const next = new Set(prev);
      if (next.has(videoIdx)) {
        next.delete(videoIdx);
        el.muted = true;
      } else {
        next.add(videoIdx);
        el.muted = false;
      }
      return next;
    });
  };

  const openVideoLightbox = (video: typeof videoData[0], i: number) => {
    videoRefs.current[i]?.pause();
    setActiveVideo({ src: video.src, client: video.client, country: video.country });
    setActiveVideoIdx(i);
  };

  const closeVideoLightbox = () => {
    if (activeVideoIdx !== null) {
      videoRefs.current[activeVideoIdx]?.play();
    }
    setActiveVideo(null);
    setActiveVideoIdx(null);
  };

  // Escape key closes whichever lightbox is open
  useEffect(() => {
    if (!activeImage && !activeVideo) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      if (activeImage) setActiveImage(null);
      if (activeVideo) {
        if (activeVideoIdx !== null) videoRefs.current[activeVideoIdx]?.play();
        setActiveVideo(null);
        setActiveVideoIdx(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImage, activeVideo, activeVideoIdx]);

  const rowLabelStyle: React.CSSProperties = {
    fontFamily: "'Inter', sans-serif",
    fontSize: '11px',
    fontWeight: 500,
    color: textMuted,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    display: 'block',
    marginBottom: '12px',
  };

  return (
    <>
      <section id="motion-content" style={{ backgroundColor: bg, padding: '80px 2rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

          {/* Section label row */}
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
              {t.motionContent.label}
            </span>
            <span
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.75rem', color: textMuted, letterSpacing: '0.05em' }}
            >
              04
            </span>
          </motion.div>

          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            style={{ borderTop: `1px solid ${border}`, paddingTop: '2rem', marginBottom: '3rem' }}
          >
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(2rem, 4vw, 4rem)',
                fontWeight: 700,
                color: text,
                lineHeight: 0.95,
                letterSpacing: '-0.03em',
                margin: 0,
              }}
            >
              {t.motionContent.heading}
            </h2>
          </motion.div>

          {/* Row 1 — Videos */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span style={rowLabelStyle}>{t.motionContent.videosLabel}</span>
            <div
              className="grid grid-cols-2 lg:grid-cols-6"
              style={{ gap: '12px' }}
            >
              {videoData.map((video, i) => (
                <div key={i}>
                  {/* 9:16 aspect ratio wrapper via padding trick */}
                  <div
                    style={{
                      position: 'relative',
                      paddingBottom: '177.78%',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      border: `1px solid ${border}`,
                      cursor: 'pointer',
                    }}
                    onClick={() => openVideoLightbox(video, i)}
                  >
                    <video
                      ref={(el) => { videoRefs.current[i] = el; }}
                      src={video.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="none"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />

                    {/* Badge — top-left */}
                    <div style={{ position: 'absolute', top: '8px', left: '8px', zIndex: 2 }}>
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '0.6rem',
                          fontWeight: 600,
                          backgroundColor: accent,
                          color: accentFg,
                          padding: '0.2rem 0.5rem',
                          borderRadius: '999px',
                          letterSpacing: '0.05em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {t.motionContent.videosLabel}
                      </span>
                    </div>

                    {/* Mute toggle — bottom-right */}
                    <button
                      aria-label={unMutedVideos.has(i) ? 'Mute video' : 'Unmute video'}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleMute(i);
                      }}
                      style={{
                        position: 'absolute',
                        bottom: '8px',
                        right: '8px',
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(0,0,0,0.6)',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffffff',
                        zIndex: 2,
                        padding: 0,
                      }}
                    >
                      {unMutedVideos.has(i) ? <Volume2 size={14} /> : <VolumeX size={14} />}
                    </button>
                  </div>

                  {/* Below-card label */}
                  <div style={{ paddingTop: '0.5rem', paddingBottom: '0.25rem' }}>
                    <p
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: text,
                        margin: '0 0 0.1rem',
                      }}
                    >
                      {video.client}
                    </p>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.7rem',
                        color: textMuted,
                      }}
                    >
                      {video.country}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Row 2 — Images */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            viewport={{ once: true }}
            style={{ marginTop: '48px' }}
          >
            <span style={rowLabelStyle}>{t.motionContent.imagesLabel}</span>
            <div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              style={{ gap: '12px' }}
            >
              {imageData.map((img, i) => (
                <div key={i}>
                  <div
                    style={{
                      position: 'relative',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      border: `1px solid ${border}`,
                    }}
                    onClick={() => setActiveImage({ src: img.src, client: img.client, country: img.country })}
                  >
                    <img
                      src={img.src}
                      alt={img.client}
                      style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px' }}
                    />

                    {/* Badge — top-left */}
                    <div style={{ position: 'absolute', top: '8px', left: '8px', zIndex: 2 }}>
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '0.6rem',
                          fontWeight: 600,
                          backgroundColor: 'rgba(0,0,0,0.55)',
                          color: 'rgba(255,255,255,0.9)',
                          padding: '0.2rem 0.5rem',
                          borderRadius: '999px',
                          letterSpacing: '0.05em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {t.motionContent.imagesLabel}
                      </span>
                    </div>
                  </div>

                  {/* Below-card label */}
                  <div style={{ paddingTop: '0.5rem', paddingBottom: '0.25rem' }}>
                    <p
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: text,
                        margin: '0 0 0.1rem',
                      }}
                    >
                      {img.client}
                    </p>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.7rem',
                        color: textMuted,
                      }}
                    >
                      {img.country}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* Video lightbox */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            key="video-lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 1000,
              backgroundColor: 'rgba(0,0,0,0.92)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={closeVideoLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ maxWidth: '400px', width: '90vw' }}
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={activeVideo.src}
                autoPlay
                loop
                playsInline
                controls
                style={{ width: '100%', borderRadius: '16px', display: 'block' }}
              />
              <div style={{ marginTop: '0.75rem', textAlign: 'center' }}>
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: '#ffffff',
                    margin: '0 0 0.2rem',
                  }}
                >
                  {activeVideo.client}
                </p>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.75rem',
                    color: 'rgba(255,255,255,0.55)',
                  }}
                >
                  {activeVideo.country}
                </span>
              </div>
            </motion.div>

            <button
              aria-label="Close video"
              onClick={closeVideoLightbox}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.15)',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                padding: 0,
              }}
            >
              <X size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image lightbox */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            key="image-lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 1000,
              backgroundColor: 'rgba(0,0,0,0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={() => setActiveImage(null)}
          >
            <motion.img
              src={activeImage.src}
              alt={activeImage.client}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                maxWidth: '90vw',
                maxHeight: '90vh',
                objectFit: 'contain',
                borderRadius: '8px',
              }}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              aria-label="Close lightbox"
              onClick={() => setActiveImage(null)}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.15)',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                padding: 0,
              }}
            >
              <X size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
