import { useState, type ReactNode } from 'react';
import styles from './Nav.module.css';

interface NavProps {
  links: { label: string; href: string }[];
}

export default function Nav({ links }: NavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header} role="banner">
      <div className={`container ${styles.inner}`}>
        {/* Wordmark */}
        <a href="#hero" className={styles.wordmark} aria-label="Sanghpal Bhakte — back to top">
          SB
        </a>

        {/* Mobile menu toggle */}
        <button
          className={styles.menuToggle}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="primary-nav"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>

        {/* Section navigation */}
        <nav aria-label="Primary navigation">
          <ul id="primary-nav" className={`${styles.navList} ${isOpen ? styles.isOpen : ''}`} role="list">
            {links.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  className={styles.navLink}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

// ── Inline type helper for use in App.tsx ──
export type NavLink = { label: string; href: string };

// ── Sub-export for convenience ──
export function SkipLink({ target }: { target: string }): ReactNode {
  return (
    <a href={target} className="skip-link">
      Skip to main content
    </a>
  );
}
