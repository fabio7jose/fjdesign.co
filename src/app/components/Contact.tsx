import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { Send, Linkedin, Github, Mail } from 'lucide-react';
import { useTheme, useLang } from '../App';

interface FormData {
  name: string;
  email: string;
  message: string;
  projectType: string;
}

const socialLinks = [
  { label: 'LinkedIn',  icon: Linkedin,      href: 'https://www.linkedin.com/in/fabiojose-designer',  color: '#0A66C2' },
  { label: 'GitHub',    icon: Github,         href: 'https://github.com/fabio7jose',       color: '#ffffff' },
  {
    label: 'Behance',
    icon: () => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.803 5.731c.589 0 1.119.051 1.605.155.483.103.895.273 1.243.508.343.235.611.547.804.939.187.393.28.863.28 1.41 0 .607-.136 1.112-.41 1.513-.271.401-.664.733-1.181.994.71.207 1.243.569 1.595 1.085.356.516.534 1.137.534 1.86 0 .596-.115 1.112-.35 1.546-.232.435-.556.796-.965 1.081-.41.285-.885.495-1.423.627-.539.135-1.104.2-1.695.2H1V5.731h6.803zm-.351 4.972c.48 0 .878-.114 1.19-.344.31-.229.465-.588.465-1.077 0-.27-.047-.494-.141-.674-.096-.18-.222-.321-.384-.421-.16-.1-.345-.168-.551-.207-.208-.038-.423-.057-.647-.057H3.56v2.78h3.892zm.172 5.239c.247 0 .484-.023.712-.07.226-.046.427-.123.598-.232.172-.109.311-.261.415-.454.102-.194.154-.441.154-.742 0-.594-.167-1.022-.503-1.285-.334-.262-.779-.393-1.334-.393H3.56v3.176h4.064zm9.241.858c.34.332.83.498 1.47.498.457 0 .853-.115 1.183-.345.332-.229.535-.47.612-.725h2.139c-.343 1.072-.869 1.838-1.575 2.299-.705.46-1.558.69-2.56.69-.694 0-1.318-.111-1.876-.335-.558-.224-1.03-.544-1.418-.96-.387-.415-.685-.911-.896-1.489-.21-.577-.314-1.21-.314-1.9 0-.67.107-1.294.322-1.872.216-.578.522-1.075.921-1.494.398-.418.876-.747 1.433-.986.556-.238 1.172-.357 1.851-.357.755 0 1.416.147 1.981.44.566.294 1.036.69 1.41 1.188.374.498.645 1.073.81 1.725.168.651.225 1.336.172 2.058h-6.381c0 .688.17 1.178.516 1.565zm2.597-4.174c-.272-.3-.687-.45-1.243-.45-.357 0-.655.06-.893.179-.237.12-.43.27-.578.451-.148.182-.252.374-.312.578-.062.204-.098.393-.108.568h3.714c-.086-.615-.307-1.026-.58-1.326zm-3.85-5.417h4.87v1.143h-4.87V7.21z" />
      </svg>
    ),
    href: 'https://www.behance.net/fabiofilho7',
    color: '#1769ff',
  },
  { label: 'Email',     icon: Mail,           href: 'mailto:fabiojpsf.7@gmail.com',            color: 'accent' },
];

export function Contact() {
  const { isDark } = useTheme();
  const { t } = useLang();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setSubmitError(false);
    try {
      const res = await fetch('https://formspree.io/f/mojyprab', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
        reset();
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        setSubmitError(true);
      }
    } catch {
      setSubmitError(true);
    } finally {
      setLoading(false);
    }
  };

  const text = isDark ? '#ffffff' : '#0A0A0A';
  const textMuted = isDark ? 'rgba(255,255,255,0.45)' : 'rgba(10,10,10,0.45)';
  const border = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.1)';
  const bg = isDark ? '#0A0A0A' : '#F5F5F0';
  const inputBg = isDark ? '#111111' : '#ffffff';
  const accent = isDark ? '#AAFF00' : '#5C8A00';
  const accentFg = isDark ? '#0A0A0A' : '#ffffff';
  const accentAlpha = isDark ? 'rgba(170,255,0,0.4)' : 'rgba(92,138,0,0.3)';
  const accentBg = isDark ? 'rgba(170,255,0,0.04)' : 'rgba(92,138,0,0.05)';

  const inputStyle: React.CSSProperties = {
    width: '100%',
    backgroundColor: inputBg,
    border: `1px solid ${border}`,
    borderRadius: '4px',
    padding: '1rem 1.2rem',
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.9rem',
    fontWeight: 300,
    color: text,
    outline: 'none',
    transition: 'border-color 0.2s ease',
    boxSizing: 'border-box',
  };

  const f = t.contact.form;

  return (
    <section id="contact" style={{ backgroundColor: bg, padding: '80px 2rem' }}>
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
            {t.contact.label}
          </span>
          <span
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.75rem', color: textMuted, letterSpacing: '0.05em' }}
          >
            06
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
              fontSize: 'clamp(2.5rem, 5.5vw, 5.5rem)',
              fontWeight: 700,
              color: text,
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              margin: 0,
            }}
          >
            {t.contact.title1}<br />
            <span style={{ color: accent }}>{t.contact.title2}</span>
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
          {/* Left: form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div
                style={{
                  padding: '3rem',
                  border: `1px solid ${accentAlpha}`,
                  borderRadius: '4px',
                  backgroundColor: accentBg,
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: accent,
                    marginBottom: '0.5rem',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {f.successTitle}
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: textMuted }}>
                  {f.successText}
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="sr-only">{f.namePlaceholder}</label>
                  <input
                    {...register('name', { required: true })}
                    id="contact-name"
                    placeholder={f.namePlaceholder}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = accent)}
                    onBlur={(e) => (e.target.style.borderColor = border)}
                  />
                  {errors.name && (
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', color: '#FF6B6B', marginTop: '0.4rem' }}>
                      {f.errors.nameRequired}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="sr-only">{f.emailPlaceholder}</label>
                  <input
                    {...register('email', {
                      required: true,
                      pattern: { value: /^\S+@\S+$/i, message: '' },
                    })}
                    id="contact-email"
                    placeholder={f.emailPlaceholder}
                    type="email"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = accent)}
                    onBlur={(e) => (e.target.style.borderColor = border)}
                  />
                  {errors.email && (
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', color: '#FF6B6B', marginTop: '0.4rem' }}>
                      {errors.email.type === 'pattern' ? f.errors.emailInvalid : f.errors.emailRequired}
                    </p>
                  )}
                </div>

                {/* Project type dropdown */}
                <div>
                  <label htmlFor="contact-project-type" className="sr-only">{f.projectTypePlaceholder}</label>
                  <select
                    {...register('projectType', { required: true })}
                    id="contact-project-type"
                    style={{
                      ...inputStyle,
                      cursor: 'pointer',
                      appearance: 'none',
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23888888' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1rem center',
                    }}
                  >
                    <option value="" style={{ backgroundColor: isDark ? '#111111' : '#ffffff', color: text }}>
                      {f.projectTypePlaceholder}
                    </option>
                    {f.projectTypes.map((opt) => (
                      <option key={opt} value={opt} style={{ backgroundColor: isDark ? '#111111' : '#ffffff', color: text }}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.projectType && (
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', color: '#FF6B6B', marginTop: '0.4rem' }}>
                      {f.errors.projectTypeRequired}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="sr-only">{f.messagePlaceholder}</label>
                  <textarea
                    {...register('message', { required: true })}
                    id="contact-message"
                    placeholder={f.messagePlaceholder}
                    rows={5}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '140px' }}
                    onFocus={(e) => (e.target.style.borderColor = accent)}
                    onBlur={(e) => (e.target.style.borderColor = border)}
                  />
                  {errors.message && (
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', color: '#FF6B6B', marginTop: '0.4rem' }}>
                      {f.errors.messageRequired}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.6rem',
                    backgroundColor: accent,
                    color: accentFg,
                    border: 'none',
                    borderRadius: '999px',
                    padding: '1rem 2.5rem',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: loading ? 'not-allowed' : 'pointer',
                    opacity: loading ? 0.7 : 1,
                    letterSpacing: '0.01em',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease',
                    alignSelf: 'flex-start',
                  }}
                  onMouseEnter={(e) => {
                    if (loading) return;
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = isDark ? '0 8px 32px rgba(170,255,0,0.3)' : '0 8px 32px rgba(92,138,0,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {loading ? f.sending : f.submit}
                  {!loading && <Send size={15} />}
                </button>
                {submitError && (
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: '#FF6B6B', marginTop: '0.5rem' }}>
                    {f.errorMessage}
                  </p>
                )}
              </form>
            )}
          </motion.div>

          {/* Right: contact info + social */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}
          >
            {/* Info block */}
            <div>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 'clamp(1rem, 1.2vw, 1.1rem)',
                  fontWeight: 300,
                  color: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(10,10,10,0.6)',
                  lineHeight: 1.75,
                  margin: '0 0 2rem',
                }}
              >
                {t.contact.description}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {t.contact.infoItems.map((item) => (
                  <div
                    key={item.label}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      paddingBottom: '1rem',
                      borderBottom: `1px solid ${border}`,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.8rem',
                        color: textMuted,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {item.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.85rem',
                        color: item.isAvailability ? accent : text,
                        fontWeight: 400,
                      }}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social icons */}
            <div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.7rem',
                  color: textMuted,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '1.2rem',
                }}
              >
                {t.contact.findMeOn}
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  const resolvedColor = social.color === 'accent' ? accent : social.color;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.label}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        border: `1px solid ${border}`,
                        color: text,
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                        backgroundColor: 'transparent',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = resolvedColor;
                        e.currentTarget.style.color = resolvedColor;
                        e.currentTarget.style.backgroundColor = `${resolvedColor}10`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = border;
                        e.currentTarget.style.color = text;
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
