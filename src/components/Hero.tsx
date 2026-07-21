import type { SITE_META, STATS } from '../data/portfolio';
import styles from './Hero.module.css';

interface HeroProps {
  meta:  typeof SITE_META;
  stats: typeof STATS;
}

export default function Hero({ meta, stats }: HeroProps) {
  const [line1, line2] = meta.headline.split('\n');

  return (
    <section className={styles.hero} id="hero" aria-labelledby="hero-heading">
      <div className={`container ${styles.inner}`}>

        {/* Availability badge */}
        {meta.available && (
          <div className={styles.badge} role="status" aria-label="Currently available for work">
            <span className={styles.dot} aria-hidden="true" />
            Open for freelance &amp; internships
          </div>
        )}

        {/* ── Heading — single h1 on the page ── */}
        <h1 id="hero-heading" className={styles.heading}>
          {line1 && <span className={styles.line}>{line1}</span>}
          {line2 && <span className={styles.line}>{line2}</span>}
        </h1>

        {/* Sub-headline */}
        <p className={styles.subheading}>
          {meta.subheadline}
        </p>

        {/* Location */}
        <p className={styles.location}>
          <span aria-hidden="true">📍</span>{' '}
          {meta.location}
        </p>

        {/* CTA row */}
        <div className={styles.ctaRow}>
          <a
            href="#projects"
            className="btn btn-primary"
          >
            View my work
          </a>
        </div>

        {/* Social Links */}
        <div className={styles.socials} aria-label="Social profiles">
          <a href={meta.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>LinkedIn</a>
          <a href={meta.github} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>GitHub</a>
          <a href={meta.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Instagram</a>
        </div>

        {/* Stats strip */}
        {stats.length > 0 && (
          <dl className={styles.stats} aria-label="Quick stats">
            {stats.map((s, i) => (
              <div key={i} className={styles.stat}>
                <dt className={styles.statValue}>{s.value}</dt>
                <dd className={styles.statLabel}>{s.label}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
}
