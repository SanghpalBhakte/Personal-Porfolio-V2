import type { SYSTEMS } from '../data/portfolio';
import styles from './Systems.module.css';

interface SystemsProps {
  systems: typeof SYSTEMS;
}

export default function Systems({ systems }: SystemsProps) {
  return (
    <section className={`section ${styles.systemsSection}`} id="systems" aria-labelledby="systems-heading">
      <div className="container">
        <header className="section-header">
          <p className="eyebrow" aria-hidden="true">Featured Systems</p>
          <h2 id="systems-heading">The background workflows &amp; core systems I build.</h2>
        </header>

        <ul className={styles.grid}>
          {systems.map((sys) => (
            <li key={sys.id} className={`card ${styles.card}`}>
              <h3 className={styles.title}>{sys.title}</h3>

              {'problem' in sys && sys.problem && (
                <div className={styles.field}>
                  <span className={styles.fieldLabel}>Problem</span>
                  <p className={styles.fieldValue}>{sys.problem}</p>
                </div>
              )}

              {'role' in sys && sys.role && (
                <div className={styles.field}>
                  <span className={styles.fieldLabel}>My Role</span>
                  <p className={styles.fieldValue}>{sys.role}</p>
                </div>
              )}

              <div className={styles.field}>
                <span className={styles.fieldLabel}>Outcome</span>
                <p className={styles.outcomeText}>{sys.description}</p>
              </div>

              <ul className={styles.tags} aria-label={`Stack tags for ${sys.title}`}>
                {sys.tags.map((tag) => (
                  <li key={tag} className="tag tag-accent">
                    {tag}
                  </li>
                ))}
              </ul>

              {sys.link && (
                <a href={sys.link} className={`btn btn-ghost ${styles.link}`}>
                  View details ↗
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
