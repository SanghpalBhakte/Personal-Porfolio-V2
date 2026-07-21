import { BUILDER_PRINCIPLES } from '../data/portfolio';
import styles from './HowIWork.module.css';

export default function HowIWork() {
  return (
    <section className={`section ${styles.section}`} id="how-i-work" aria-labelledby="how-i-work-heading">
      <div className="container">
        <header className="section-header">
          <p className="eyebrow" aria-hidden="true">Engineering Philosophy</p>
          <h2 id="how-i-work-heading" className={styles.title}>
            How I Work
          </h2>
          <p className={styles.subtitle}>
            A professional, outcome-first approach to building reliable software.
          </p>
        </header>

        <div className={styles.grid}>
          {BUILDER_PRINCIPLES.map((item, idx) => (
            <div key={idx} className={`card ${styles.card}`}>
              <div className={styles.iconBadge} aria-hidden="true">
                {idx === 0 ? '🔍' : idx === 1 ? '⚡' : '💰'}
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDetail}>{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
