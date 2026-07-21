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
          <p className="eyebrow" aria-hidden="true">Systems I Build</p>
          <h2 id="systems-heading">The background workflows running quietly.</h2>
        </header>

        <ul className={styles.grid}>
          {systems.map((sys) => (
            <li key={sys.id} className={`card ${styles.card}`}>
              <h3 className={styles.title}>{sys.title}</h3>
              <p className={styles.desc}>{sys.description}</p>
              <ul className={styles.tags} aria-label={`Tags for ${sys.title}`}>
                {sys.tags.map((tag) => (
                  <li key={tag} className="tag tag-neutral">
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
