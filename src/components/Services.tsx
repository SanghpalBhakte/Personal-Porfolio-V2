import type { SERVICES } from '../data/portfolio';
import styles from './Services.module.css';

interface ServicesProps {
  services: typeof SERVICES;
}

export default function Services({ services }: ServicesProps) {
  return (
    <section className={`section ${styles.section}`} id="services" aria-labelledby="services-heading">
      <div className="container">

        {/* Section header */}
        <header className={styles.header}>
          <p className="eyebrow" aria-hidden="true">CAPABILITIES</p>
          <h2 id="services-heading" className={styles.title}>
            Capabilities
          </h2>
          <p className={styles.subtitle}>
            Practical tools and systems for teams that need to move fast.
          </p>
        </header>

        {/* Grid of service cards */}
        <ul className={styles.grid} role="list">
          {services.map((service) => (
            <li key={service.id} className={`card ${styles.card}`}>
              {/* Icon */}
              <span className={styles.icon} aria-hidden="true">
                {service.icon}
              </span>

              {/* Title */}
              <h3 className={styles.cardTitle}>{service.title}</h3>

              {/* Description */}
              <p className={styles.cardDesc}>{service.description}</p>

              {/* Stack tags */}
              <ul className={styles.stack} role="list" aria-label={`Technologies used for ${service.title}`}>
                {service.stack.map((tech) => (
                  <li key={tech}>
                    <span className="tag tag-neutral">{tech}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
