import Link from "next/link";

export default function Home() {
  return (
    <div id="p-home" className="page-section active">
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="container">
          <div className="hero-grid">
            <div className="fade-up vis">
              <div className="hero-badge"><div className="dot"></div>End-to-End Life Sciences Consulting</div>
              <h1 className="hero-h1">Driving <em>Precision,</em> Compliance, and Scale in Pharma &amp; Biotech</h1>
              <p className="hero-sub">From regulatory strategy to manufacturing scale-up — expert guidance across the full pharmaceutical lifecycle.</p>
              <div className="hero-actions">
                <Link href="/contact" className="btn btn-primary">Book Consultation &rarr;</Link>
                <Link href="/services" className="btn btn-outline">Explore Services</Link>
              </div>
              <div className="hero-stats">
                <div><div className="hero-stat-num">200+</div><div className="hero-stat-label">Projects Delivered</div></div>
                <div><div className="hero-stat-num">40+</div><div className="hero-stat-label">Countries Served</div></div>
                <div><div className="hero-stat-num">18yr</div><div className="hero-stat-label">Industry Experience</div></div>
              </div>
            </div>
            <div className="hero-visual fade-up vis" style={{ transitionDelay: "0.2s" }}>
              <div className="hero-glow"></div>
              <div className="molecule-wrap">
                <svg viewBox="0 0 420 420" width="420" height="420" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="210" cy="210" r="180" stroke="rgba(11,60,93,0.05)" strokeWidth="1" strokeDasharray="4 8"/>
                  <circle cx="210" cy="210" r="140" stroke="rgba(0,166,166,0.07)" strokeWidth="1" strokeDasharray="2 6"/>
                  <circle cx="210" cy="210" r="100" stroke="rgba(11,60,93,0.06)" strokeWidth="1"/>
                  <line x1="210" y1="210" x2="120" y2="130" stroke="#00A6A6" strokeWidth="2.5" strokeLinecap="round"/>
                  <line x1="210" y1="210" x2="310" y2="130" stroke="#00A6A6" strokeWidth="2.5" strokeLinecap="round"/>
                  <line x1="210" y1="210" x2="310" y2="300" stroke="rgba(11,60,93,0.4)" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="210" y1="210" x2="110" y2="300" stroke="rgba(11,60,93,0.4)" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="210" y1="210" x2="210" y2="90" stroke="rgba(0,166,166,0.5)" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="120" y1="130" x2="60" y2="70" stroke="rgba(11,60,93,0.2)" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="120" y1="130" x2="60" y2="165" stroke="rgba(11,60,93,0.2)" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="310" y1="130" x2="370" y2="70" stroke="rgba(0,166,166,0.25)" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="310" y1="130" x2="370" y2="165" stroke="rgba(0,166,166,0.2)" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="310" y1="300" x2="355" y2="348" stroke="rgba(11,60,93,0.15)" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="110" y1="300" x2="65" y2="348" stroke="rgba(11,60,93,0.15)" strokeWidth="1.5" strokeLinecap="round"/>
                  <circle cx="210" cy="210" r="28" fill="#0B3C5D"/>
                  <circle cx="210" cy="210" r="22" fill="#0D4A72"/>
                  <text x="210" y="217" textAnchor="middle" fill="white" fontSize="13" fontFamily="DM Serif Display, serif">Rx</text>
                  <circle cx="120" cy="130" r="18" fill="#00A6A6"/>
                  <text x="120" y="136" textAnchor="middle" fill="white" fontSize="10" fontFamily="Space Mono, monospace" fontWeight="700">GMP</text>
                  <circle cx="310" cy="130" r="18" fill="#0B3C5D"/>
                  <text x="310" y="136" textAnchor="middle" fill="white" fontSize="10" fontFamily="Space Mono, monospace" fontWeight="700">R&amp;D</text>
                  <circle cx="310" cy="300" r="16" fill="#00A6A6" fillOpacity="0.8"/>
                  <text x="310" y="305" textAnchor="middle" fill="white" fontSize="9" fontFamily="Space Mono, monospace">CMC</text>
                  <circle cx="110" cy="300" r="16" fill="#0B3C5D" fillOpacity="0.7"/>
                  <text x="110" y="305" textAnchor="middle" fill="white" fontSize="9" fontFamily="Space Mono, monospace">QA</text>
                  <circle cx="210" cy="90" r="14" fill="rgba(0,166,166,0.65)"/>
                  <text x="210" y="95" textAnchor="middle" fill="white" fontSize="9" fontFamily="Space Mono, monospace">RA</text>
                  <circle cx="60" cy="70" r="9" fill="rgba(0,166,166,0.28)"/>
                  <circle cx="60" cy="165" r="9" fill="rgba(11,60,93,0.28)"/>
                  <circle cx="370" cy="70" r="9" fill="rgba(0,166,166,0.35)"/>
                  <circle cx="370" cy="165" r="9" fill="rgba(11,60,93,0.2)"/>
                  <circle cx="355" cy="348" r="8" fill="rgba(0,166,166,0.22)"/>
                  <circle cx="65" cy="348" r="8" fill="rgba(11,60,93,0.18)"/>
                  <circle r="4" fill="#00A6A6" opacity="0.65">
                    <animateMotion dur="9s" repeatCount="indefinite">
                      <mpath href="#orb1"/>
                    </animateMotion>
                  </circle>
                  <circle r="3" fill="#0B3C5D" opacity="0.45">
                    <animateMotion dur="13s" repeatCount="indefinite" begin="3s">
                      <mpath href="#orb2"/>
                    </animateMotion>
                  </circle>
                  <path id="orb1" d="M 210 30 A 180 180 0 1 1 209 30" fill="none"/>
                  <path id="orb2" d="M 210 70 A 140 140 0 1 0 209 70" fill="none"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <div className="trust-strip">
        <div className="trust-inner">
          <span className="trust-label">Trusted by</span>
          <div className="trust-logos">
            <span className="trust-logo-item">NovaBiotech AG</span>
            <span className="trust-logo-item">Meridian CDMO</span>
            <span className="trust-logo-item">HelixPharma</span>
            <span className="trust-logo-item">BioScale Inc.</span>
            <span className="trust-logo-item">Apex Life Sciences</span>
            <span className="trust-logo-item">Celeron Therapeutics</span>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <div className="section-header center fade-up vis">
            <div className="eyebrow">What We Do</div>
            <h2>Comprehensive Consulting Across the Pharma Lifecycle</h2>
            <p>Specialized expertise at every stage — from early-stage R&amp;D through commercial manufacturing and market entry.</p>
          </div>
          <div className="services-grid fade-up vis" style={{ transitionDelay: "0.12s" }}>
            <div className="service-card">
              <div className="service-icon"><svg viewBox="0 0 24 24"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/></svg></div>
              <h3>R&amp;D &amp; CMC Consulting</h3>
              <p>Strategic guidance on drug development, formulation, analytical methods, and CMC documentation for regulatory submissions.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><svg viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg></div>
              <h3>GMP &amp; Regulatory Compliance</h3>
              <p>End-to-end GMP audit readiness, gap analysis, and regulatory strategy for FDA, EMA, and CDSCO submissions.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><svg viewBox="0 0 24 24"><path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg></div>
              <h3>CDMO Selection &amp; Management</h3>
              <p>Systematic CDMO evaluation, due diligence, and partnership governance to ensure quality and compliance alignment.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><svg viewBox="0 0 24 24"><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg></div>
              <h3>Manufacturing Scale-Up</h3>
              <p>Process transfer, tech transfer oversight, and scale-up validation from pilot to commercial manufacturing.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><svg viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2M5 21H3M10 9h4M10 13h4M10 17h4"/></svg></div>
              <h3>Infrastructure Planning</h3>
              <p>Greenfield and brownfield facility design advisory, cleanroom specifications, and cGMP-compliant facility layouts.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><svg viewBox="0 0 24 24"><path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div>
              <h3>Market Strategy &amp; Entry</h3>
              <p>Competitive intelligence, market access planning, licensing strategy, and commercialization roadmaps.</p>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/services" className="btn btn-outline">View All Services &rarr;</Link>
          </div>
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="section" style={{ background: "var(--bg-alt)" }}>
        <div className="container">
          <div className="diff-grid">
            <div className="fade-up vis">
              <div className="eyebrow" style={{ marginBottom: "0.75rem" }}>Why Mangrow Bio</div>
              <h2 style={{ color: "var(--navy)", marginBottom: "0.75rem" }}>Built for the Complexity of Modern Pharma</h2>
              <p style={{ color: "var(--text-muted)" }}>We combine deep regulatory knowledge with operational execution — something generalist consultancies cannot offer.</p>
              <ul className="diff-list">
                <li className="diff-item">
                  <div className="diff-icon-wrap"><svg viewBox="0 0 24 24"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg></div>
                  <div className="diff-item-text"><h4>Technical Depth</h4><p>Our consultants hold advanced degrees and 15+ years of hands-on industry experience across pharma and biotech.</p></div>
                </li>
                <li className="diff-item">
                  <div className="diff-icon-wrap"><svg viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg></div>
                  <div className="diff-item-text"><h4>Regulatory Expertise</h4><p>Former FDA, EMA, and CDSCO reviewers on staff. We don&apos;t advise on compliance - we&apos;ve enforced it.</p></div>
                </li>
                <li className="diff-item">
                  <div className="diff-icon-wrap"><svg viewBox="0 0 24 24"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg></div>
                  <div className="diff-item-text"><h4>End-to-End Lifecycle</h4><p>A single partner from pre-IND through post-market surveillance. No handoffs, no gaps, complete accountability.</p></div>
                </li>
              </ul>
            </div>
            <div className="fade-up vis" style={{ transitionDelay: "0.2s" }}>
              <div className="lifecycle-card">
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-light)", marginBottom: "1.5rem" }}>Pharmaceutical Lifecycle Coverage</div>
                <div style={{ position: "relative", paddingLeft: "0" }}>
                  <div style={{ position: "absolute", left: "20px", top: "28px", bottom: "28px", width: "2px", background: "linear-gradient(to bottom, var(--navy), var(--teal))", zIndex: 0 }}></div>
                  <div className="lifecycle-step">
                    <div className="lc-num" style={{ background: "var(--navy)" }}>01</div>
                    <div><div className="lc-title">Discovery &amp; Pre-IND</div><div className="lc-sub">Formulation strategy, target selection</div></div>
                  </div>
                  <div className="lifecycle-step">
                    <div className="lc-connector"></div>
                    <div className="lc-num" style={{ background: "#1B5C87" }}>02</div>
                    <div><div className="lc-title">Clinical Development</div><div className="lc-sub">Phase I–III CMC, regulatory submissions</div></div>
                  </div>
                  <div className="lifecycle-step">
                    <div className="lc-connector"></div>
                    <div className="lc-num" style={{ background: "#0D7A8A" }}>03</div>
                    <div><div className="lc-title">Manufacturing Scale-Up</div><div className="lc-sub">Process validation, CDMO oversight</div></div>
                  </div>
                  <div className="lifecycle-step">
                    <div className="lc-connector"></div>
                    <div className="lc-num" style={{ background: "#008888" }}>04</div>
                    <div><div className="lc-title">Regulatory Approval</div><div className="lc-sub">NDA/BLA, MA applications, GMP audits</div></div>
                  </div>
                  <div className="lifecycle-step">
                    <div className="lc-connector"></div>
                    <div className="lc-num" style={{ background: "var(--teal)" }}>05</div>
                    <div><div className="lc-title">Commercialization</div><div className="lc-sub">Market entry, supply chain, post-market</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="container">
          <div className="section-header center fade-up vis">
            <div className="eyebrow">Our Approach</div>
            <h2>A Structured Engagement Process</h2>
          </div>
          <div className="process-steps fade-up vis" style={{ transitionDelay: "0.12s" }}>
            <div className="process-step">
              <div className="step-num sn1">01</div>
              <h3>Assess</h3>
              <p>Current state review, gap analysis, risk identification, and regulatory landscape mapping.</p>
            </div>
            <div className="process-step">
              <div className="step-num sn2">02</div>
              <h3>Design</h3>
              <p>Strategy development, roadmap construction, and solution architecture tailored to your pipeline.</p>
            </div>
            <div className="process-step">
              <div className="step-num sn3">03</div>
              <h3>Implement</h3>
              <p>Hands-on execution, documentation, training, and regulatory submission management.</p>
            </div>
            <div className="process-step">
              <div className="step-num sn4">04</div>
              <h3>Optimize</h3>
              <p>Performance monitoring, continuous improvement, and ongoing compliance management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CASE PREVIEWS */}
      <section className="section" style={{ background: "var(--bg-alt)" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "0", flexWrap: "wrap", gap: "1rem" }} className="fade-up vis">
            <div className="section-header">
              <div className="eyebrow">Results</div>
              <h2>Client Success Stories</h2>
            </div>
            <Link href="/cases" className="btn btn-ghost">All Case Studies &rarr;</Link>
          </div>
          <div className="case-grid fade-up vis" style={{ transitionDelay: "0.12s" }}>
            {/* NOTE: Hardcoded for home page. In reality, these should be fetched from DB. We can keep them static here or fetch. */}
            <div className="case-card">
              <div className="case-header"><span className="case-tag">Biotech</span><h3>Accelerating IND Submission for a Novel Oncology Asset</h3></div>
              <div className="case-body">
                <div className="case-row"><div className="case-row-label">Challenge</div><div className="case-row-text">CMC package incomplete; FDA pre-IND feedback unaddressed after 14 months.</div></div>
                <div className="case-row"><div className="case-row-label">Solution</div><div className="case-row-text">Full CMC remediation, analytical method validation, and IND module authoring.</div></div>
                <div className="case-metric">6 months<span>to successful IND acceptance</span></div>
                <Link href="/cases" className="case-link">Read More &rarr;</Link>
              </div>
            </div>
            <div className="case-card">
              <div className="case-header"><span className="case-tag">CDMO</span><h3>GMP Remediation for Pre-FDA Inspection Readiness</h3></div>
              <div className="case-body">
                <div className="case-row"><div className="case-row-label">Challenge</div><div className="case-row-text">47 open CAPA items and inadequate documentation ahead of FDA inspection.</div></div>
                <div className="case-row"><div className="case-row-label">Solution</div><div className="case-row-text">CAPA closure, SOP redevelopment, training, and mock inspection program.</div></div>
                <div className="case-metric">Zero<span>FDA 483 observations at inspection</span></div>
                <Link href="/cases" className="case-link">Read More &rarr;</Link>
              </div>
            </div>
            <div className="case-card">
              <div className="case-header"><span className="case-tag">Manufacturing</span><h3>Clinical to Commercial Scale-Up for Injectable Biologic</h3></div>
              <div className="case-body">
                <div className="case-row"><div className="case-row-label">Challenge</div><div className="case-row-text">Process transfer to 2,000L commercial bioreactor with tight 18-month deadline.</div></div>
                <div className="case-row"><div className="case-row-label">Solution</div><div className="case-row-text">Tech transfer governance, process characterization, and PPQ oversight.</div></div>
                <div className="case-metric">94%<span>process yield at commercial scale</span></div>
                <Link href="/cases" className="case-link">Read More &rarr;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="cta-bg-dots"></div>
        <div className="container">
          <div className="cta-inner fade-up vis">
            <div className="eyebrow" style={{ justifyContent: "center", color: "rgba(255,255,255,0.4)", marginBottom: "1rem" }}><span style={{ display: "block", width: "24px", height: "2px", background: "rgba(255,255,255,0.25)" }}></span>Get Started</div>
            <h2>Let&apos;s Accelerate Your Next Milestone</h2>
            <p>Whether navigating regulatory hurdles, scaling manufacturing, or entering new markets — our team is ready to engage.</p>
            <div className="cta-actions">
              <Link href="/contact" className="btn btn-white">Book Consultation &rarr;</Link>
              <Link href="/services" className="btn" style={{ border: "1.5px solid rgba(255,255,255,0.3)", color: "#fff", background: "transparent" }}>View Services</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
