import React from 'react';
import { useTheme } from '../App';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { MarqueeBanner } from '../components/MarqueeBanner';
import { Work } from '../components/Work';
import { GithubActivity } from '../components/GithubActivity';
import { Skills } from '../components/Skills';
import { Certifications } from '../components/Certifications';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export function Home() {
  const { isDark } = useTheme();

  return (
    <div
      style={{
        '--home-accent': isDark ? '#FACC15' : '#856800',
        '--home-accent-rgb': isDark ? '250,204,21' : '133,104,0',
        backgroundColor: isDark ? '#0A0A0A' : '#F5F5F0',
        minHeight: '100vh',
        transition: 'background-color 0.3s ease',
      } as React.CSSProperties}
    >
      <Navbar />
      <Hero />
      <MarqueeBanner />
      <About />
      <div
        style={{
          height: '1px',
          backgroundColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
          margin: '0 2rem',
        }}
      />
      <Work />
      <div
        style={{
          height: '1px',
          backgroundColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
          margin: '0 2rem',
        }}
      />
      <GithubActivity />
      <div
        style={{
          height: '1px',
          backgroundColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
          margin: '0 2rem',
        }}
      />
      <Skills />
      <div
        style={{
          height: '1px',
          backgroundColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
          margin: '0 2rem',
        }}
      />
      <Certifications />
      <div
        style={{
          height: '1px',
          backgroundColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
          margin: '0 2rem',
        }}
      />
      <Contact />
      <Footer />
    </div>
  );
}
