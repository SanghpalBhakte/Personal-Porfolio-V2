import Nav, { SkipLink }  from './components/Nav';
import Hero               from './components/Hero';
import Systems            from './components/Systems';
import Services           from './components/Services';
import Projects           from './components/Projects';
import GfxWork            from './components/GfxWork';
import About              from './components/About';
import Footer             from './components/Footer';

import {
  SITE_META,
  STATS,
  SYSTEMS,
  SERVICES,
  SKILLS,
  BIO_PARAGRAPHS,
  BUILDER_PRINCIPLES,
} from './data/portfolio';

const NAV_LINKS = [
  { label: 'Build',    href: '#services' },
  { label: 'Work',     href: '#projects' },
  { label: 'GFX',      href: '#gfx'      },
  { label: 'About',    href: '#about'    },
  { label: 'Connect',  href: '#connect'  },
];

export default function App() {
  return (
    <>
      {/* Accessibility: skip over nav directly to content */}
      <SkipLink target="#main-content" />

      {/* Sticky navigation */}
      <Nav links={NAV_LINKS} />

      {/* Page main — sections in approved order */}
      <main id="main-content">

        {/* 1. Hero */}
        <Hero meta={SITE_META} stats={STATS} />

        {/* 2. Systems I Build (flows directly from hero) */}
        <Systems systems={SYSTEMS} />

        <hr className="section-rule" aria-hidden="true" />

        {/* 2. What I Build */}
        <Services services={SERVICES} />

        <hr className="section-rule" aria-hidden="true" />

        {/* 3. Selected Work */}
        <Projects />

        <hr className="section-rule" aria-hidden="true" />

        {/* 4. GFX Work */}
        <GfxWork />

        <hr className="section-rule" aria-hidden="true" />

        {/* 5. About */}
        <About meta={SITE_META} skills={SKILLS} bio={BIO_PARAGRAPHS} principles={BUILDER_PRINCIPLES} />

      </main>

      {/* 5. Connect / Footer */}
      <Footer meta={SITE_META} />
    </>
  );
}
