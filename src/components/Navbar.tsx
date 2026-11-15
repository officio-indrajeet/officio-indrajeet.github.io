import { useEffect, useState } from "react";
import { userData } from "../data/userData";

const links = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Expertise", "#skills"],
  ["Projects", "#projects"],
  ["Writing", "#blogs"],
  ["Education", "#education"],
  ["Contact", "#contact"],
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={scrolled ? "site-nav is-scrolled" : "site-nav"}>
      <div className="nav-shell">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-monogram">IK<span>.</span></span>
          <span className="brand-text"><strong>{userData.name}</strong><small>Senior Software Engineer</small></span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <a className="nav-cta" href="/resume/" target="_blank" rel="noopener noreferrer">Résumé <span>↗</span></a>
        <button className={open ? "mobile-toggle active" : "mobile-toggle"} onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          <span></span><span></span>
        </button>
      </div>
      {open && <nav className="mobile-links" aria-label="Mobile navigation">
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}<span>↗</span></a>)}
        <a href="/resume/" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Download résumé <span>↓</span></a>
      </nav>}
    </header>
  );
}
