import type { SITE_META, SKILLS, BIO_PARAGRAPHS, BUILDER_PRINCIPLES } from '../data/portfolio';
import styles from './About.module.css';

interface AboutProps {
  meta:       typeof SITE_META;
  skills:     typeof SKILLS;
  bio:        typeof BIO_PARAGRAPHS;
  principles: typeof BUILDER_PRINCIPLES;
}

export default function About({ meta, skills, bio, principles }: AboutProps) {
  return (
    <section className={`section ${styles.section}`} id="about" aria-labelledby="about-heading">
      <div className="container">

        <div className={styles.layout}>

          {/* ── Left: Bio & Builder Principles ── */}
          <div className={styles.bioCol}>
            <div className={styles.builderHeader}>
              <div className={styles.avatar} aria-hidden="true">
                <span>SB</span>
              </div>
              <div>
                <p className="eyebrow" aria-hidden="true">The Builder</p>
                <h2 id="about-heading" className={styles.title}>About the builder</h2>
              </div>
            </div>

            <div className={styles.bio}>
              {bio.map((para, i) => (
                <p
                  key={i}
                  className={styles.bioPara}
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
            </div>

            {/* How I Work: 3 Bullets */}
            {principles && principles.length > 0 && (
              <div className={styles.principlesBlock}>
                <p className={styles.principlesTitle}>How I Work</p>
                <ul className={styles.principlesList} role="list">
                  {principles.map((item, idx) => (
                    <li key={idx} className={styles.principleItem}>
                      <span className={styles.checkIcon} aria-hidden="true">✓</span>
                      <p className={styles.principleText}>
                        <strong>{item.title}:</strong> {item.detail}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* ── Right: Skills & Identity ── */}
          <aside className={styles.skillsCol} aria-label="Skills and technologies">
            <p className={styles.skillsLabel}>Skills</p>
            <dl className={styles.skillGroups}>
              {Object.entries(skills).map(([group, items]) => (
                <div key={group} className={styles.skillGroup}>
                  <dt className={styles.skillGroupTitle}>{group}</dt>
                  <dd>
                    <ul className={styles.skillList} role="list">
                      {items.map((item) => (
                        <li key={item}>
                          <span className="tag tag-neutral">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>

            {/* Quick identity card */}
            <div className={`card ${styles.identityCard}`}>
              <p className={styles.identityRow}>
                <span className={styles.identityKey}>Location</span>
                <span className={styles.identityVal}>{meta.location}</span>
              </p>
              <p className={styles.identityRow}>
                <span className={styles.identityKey}>Status</span>
                <span className={styles.identityVal} style={{ color: 'var(--green)' }}>
                  Open to work
                </span>
              </p>
              <p className={styles.identityRow}>
                <span className={styles.identityKey}>Looking for</span>
                <span className={styles.identityVal}>Internships &amp; freelance</span>
              </p>
            </div>
          </aside>

        </div>
      </div>
    </section>
  );
}
