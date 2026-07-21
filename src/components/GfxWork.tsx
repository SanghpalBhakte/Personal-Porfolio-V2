import { GFX_PROJECTS } from '../data/portfolio';
import styles from './GfxWork.module.css';

export default function GfxWork() {
  return (
    <section className={`section ${styles.section}`} id="gfx" aria-labelledby="gfx-heading">
      <div className="container">
        <header className={styles.header}>
          <p className="eyebrow" aria-hidden="true">Visual & GFX Work</p>
          <h2 id="gfx-heading" className={styles.title}>
            Design Projects
          </h2>
          <p className={styles.subtitle}>
            Graphic design & thumbnails showcase — full portfolio on{' '}
            <a 
              href="https://www.behance.net/SonuGames" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.behanceLink}
            >
              Behance ↗
            </a>
          </p>
        </header>

        <div className={styles.grid}>
          {GFX_PROJECTS.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
              aria-label={`View ${project.title} on Behance (opens in new tab)`}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={project.image}
                  alt={`${project.title} cover`}
                  loading="lazy"
                  decoding="async"
                  className={styles.image}
                />
                <div className={styles.overlay}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardDesc}>{project.description}</p>
                  <span className={styles.cta}>View on Behance ↗</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
