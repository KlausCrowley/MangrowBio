import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-logo">
              <div className="lm">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="4" r="2.5" fill="#fff" />
                  <circle cx="4" cy="14" r="2.5" fill="#fff" />
                  <circle cx="16" cy="14" r="2.5" fill="#fff" />
                  <line x1="10" y1="6.5" x2="4" y2="11.5" stroke="#0B3C5D" strokeWidth="1.5" />
                  <line x1="10" y1="6.5" x2="16" y2="11.5" stroke="#0B3C5D" strokeWidth="1.5" />
                  <line x1="4" y1="14" x2="16" y2="14" stroke="#0B3C5D" strokeWidth="1.5" />
                </svg>
              </div>
              <span>Mangrow Bio</span>
            </div>
            <p className="footer-tagline">
              Specialized life sciences consulting across the entire product lifecycle. Precision, compliance, and scale.
            </p>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul className="flinks">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/cases">Case Studies</Link></li>
              <li><Link href="/insights">Insights</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul className="flinks">
              <li><Link href="/services">R&D & CMC</Link></li>
              <li><Link href="/services">GMP & Regulatory</Link></li>
              <li><Link href="/services">CDMO Management</Link></li>
              <li><Link href="/services">Manufacturing</Link></li>
              <li><Link href="/services">Market Entry</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Global HQ</h4>
            <div className="fci">
              <svg viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              <span>100 PharmaTech Way<br/>Basel, CH-4002<br/>Switzerland</span>
            </div>
            <div className="fci">
              <svg viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              <span>contact@mangrowbio.com</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">&copy; {new Date().getFullYear()} Mangrow Bio. All rights reserved.</div>
          <div style={{ display: "flex", gap: "12px" }}>
            <a href="#" className="social-link" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <svg viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
