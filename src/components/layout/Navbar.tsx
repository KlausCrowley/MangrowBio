"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobMenuOpen, setMobMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMob = () => setMobMenuOpen(!mobMenuOpen);

  const isActive = (path: string) => pathname === path ? "active" : "";

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-inner">
          <Link href="/" className="navbar-logo">
            <div className="logo-mark">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="4" r="2.5" fill="#fff" />
                <circle cx="4" cy="14" r="2.5" fill="#fff" />
                <circle cx="16" cy="14" r="2.5" fill="#fff" />
                <line x1="10" y1="6.5" x2="4" y2="11.5" stroke="#00A6A6" strokeWidth="1.5" />
                <line x1="10" y1="6.5" x2="16" y2="11.5" stroke="#00A6A6" strokeWidth="1.5" />
                <line x1="4" y1="14" x2="16" y2="14" stroke="#00A6A6" strokeWidth="1.5" />
              </svg>
            </div>
            Mangrow Bio
          </Link>
          <ul className="navbar-links">
            <li><Link href="/" className={isActive("/")}>Home</Link></li>
            <li><Link href="/about" className={isActive("/about")}>About</Link></li>
            <li><Link href="/services" className={isActive("/services")}>Services</Link></li>
            <li><Link href="/cases" className={isActive("/cases")}>Case Studies</Link></li>
            <li><Link href="/insights" className={isActive("/insights")}>Insights</Link></li>
            <li><Link href="/contact" className={isActive("/contact")}>Contact</Link></li>
          </ul>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Link href="/contact" className="btn btn-primary nb-cta-btn">Book Consultation</Link>
            <div className="hamburger" onClick={toggleMob}>
              <span></span><span></span><span></span>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div id="mob-menu" style={{ display: mobMenuOpen ? "block" : "none", position: "fixed", top: "72px", left: 0, right: 0, background: "#fff", borderBottom: "1px solid var(--border)", zIndex: 999, padding: "1.5rem 2rem" }}>
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1.5rem" }}>
          <li><Link href="/" onClick={toggleMob} style={{ fontWeight: 500, color: "var(--navy)" }}>Home</Link></li>
          <li><Link href="/about" onClick={toggleMob} style={{ fontWeight: 500, color: "var(--navy)" }}>About</Link></li>
          <li><Link href="/services" onClick={toggleMob} style={{ fontWeight: 500, color: "var(--navy)" }}>Services</Link></li>
          <li><Link href="/cases" onClick={toggleMob} style={{ fontWeight: 500, color: "var(--navy)" }}>Case Studies</Link></li>
          <li><Link href="/insights" onClick={toggleMob} style={{ fontWeight: 500, color: "var(--navy)" }}>Insights</Link></li>
          <li><Link href="/contact" onClick={toggleMob} style={{ fontWeight: 500, color: "var(--navy)" }}>Contact</Link></li>
        </ul>
        <Link href="/contact" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }} onClick={toggleMob}>Book Consultation</Link>
      </div>
    </>
  );
}
