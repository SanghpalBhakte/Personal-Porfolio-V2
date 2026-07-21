import { useState } from 'react';
import { PROJECTS, PROJECT_FILTERS } from '../data/portfolio';
import type { ProjectCategory } from '../data/portfolio';
import styles from './Projects.module.css';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All');

  const filtered = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section className={`section ${styles.section}`} id="projects" aria-labelledby="projects-heading">
      <div className="container">

        {/* Section header */}
        <header className={styles.header}>
          <p className="eyebrow" aria-hidden="true">SELECTED WORK</p>
          <h2 id="projects-heading" className={styles.title}>
            Projects
          </h2>
          <p className={styles.subtitle}>
            Clean case-study breakdown of problem, role, stack, and outcomes.
          </p>
        </header>

        {/* Filter tabs */}
        <div className={styles.filters} role="group" aria-label="Filter projects by category">
          {PROJECT_FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`btn btn-ghost ${styles.filterBtn} ${activeFilter === filter ? styles.active : ''}`}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project cards */}
        <ul key={activeFilter} className={styles.grid} role="list">
          {filtered.map((project, idx) => (
            <li 
              key={project.id} 
              id={`project-${project.id}`}
              className={`card ${styles.card}`}
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              {/* Header bar / Icon + Category */}
              <div className={styles.cardTop}>
                <span className={styles.icon} aria-hidden="true">{project.icon}</span>
                <span className="tag tag-accent">{project.category}</span>
              </div>

              <p className={styles.client}>{project.client}</p>
              <h3 className={styles.cardTitle}>{project.title}</h3>

              {/* Case-study fields */}
              {'problem' in project && project.problem && (
                <div className={styles.caseField}>
                  <span className={styles.caseLabel}>Problem</span>
                  <p className={styles.caseText}>{project.problem}</p>
                </div>
              )}

              {'role' in project && project.role && (
                <div className={styles.caseField}>
                  <span className={styles.caseLabel}>My Role</span>
                  <p className={styles.caseText}>{project.role}</p>
                </div>
              )}

              <div className={styles.caseField}>
                <span className={styles.caseLabel}>Outcome</span>
                <p className={styles.outcomeHighlight}>{project.description}</p>
              </div>

              {/* Tags */}
              {project.tags && project.tags.length > 0 && (
                <ul className={styles.tags} role="list" aria-label={`Technologies: ${project.tags.join(', ')}`}>
                  {project.tags.map((tag) => (
                    <li key={tag}><span className="tag tag-neutral">{tag}</span></li>
                  ))}
                </ul>
              )}

              {/* Links */}
              {project.links.length > 0 && (
                <div className={styles.links}>
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost"
                      style={{ fontSize: 'var(--text-xs)', padding: 0 }}
                      aria-label={`${link.label} for ${project.title} (opens in new tab)`}
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
