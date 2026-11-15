"use client";

import { useEffect, useRef, useState } from "react";
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
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className={scrolled ? "site-nav is-scrolled" : "site-nav"}>
      <div className="nav-shell">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-monogram">IK<span>.</span></span>
          <span className="brand-text"><strong>{userData.name}</strong><small>Senior Software Engineer</small></span>
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>

        <a className="nav-cta" href="/resume/" target="_blank" rel="noopener noreferrer">Resume <span>↗</span></a>

        <button
          ref={toggleRef}
          type="button"
          className={open ? "mobile-toggle active" : "mobile-toggle"}
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          <span></span><span></span>
        </button>
      </div>

      <nav id="mobile-navigation" className="mobile-links" aria-label="Mobile navigation" hidden={!open}>
        {links.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}<span>↗</span></a>)}
        <a href="/resume/" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>View Resume <span>↗</span></a>
      </nav>
    </header>
  );
}
