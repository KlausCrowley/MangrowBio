import Link from "next/link";

export const metadata = {
  title: "About Us | Mangrow Bio",
};

export default function About() {
  return (
    <div id="p-about" className="page-section active">
      <div className="page-hero">
        <div className="container page-hero-inner">
          <div className="eyebrow" style={{ marginBottom: "1rem" }}>About Us</div>
          <h1 style={{ color: "var(--navy)", maxWidth: "680px", marginBottom: "1rem" }}>Specialized Expertise. Measurable Outcomes.</h1>
          <p style={{ color: "var(--text-muted)", maxWidth: "560px", fontSize: "1.05rem" }}>Mangrow Bio is a specialist consultancy serving pharmaceutical, biotechnology, and life sciences organizations across the development and commercialization continuum.</p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div>
              <div className="eyebrow" style={{ marginBottom: "1rem" }}>Our Story</div>
              <h2 style={{ color: "var(--navy)", marginBottom: "1rem" }}>Founded on the Principle That Pharma Deserves Specialist Advisors</h2>
              <p style={{ color: "var(--text-muted)", marginBottom: "1rem" }}>Founded in 2006 by a team of former regulatory scientists and manufacturing executives, Mangrow Bio was built to address a gap: the largest consulting firms lacked deep pharma-specific expertise, while niche players lacked scale.</p>
              <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>Today, our 65+ consultants serve clients across North America, Europe, India, and Southeast Asia — from early-stage biotech startups to established multinational pharma organizations.</p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn btn-primary">Work With Us</Link>
                <Link href="/services" className="btn btn-outline">Our Services</Link>
              </div>
            </div>
            <div className="about-stats">
              <div className="about-stat"><div className="about-stat-num">65+</div><div className="about-stat-label">Expert Consultants</div></div>
              <div className="about-stat"><div className="about-stat-num">200+</div><div className="about-stat-label">Projects Delivered</div></div>
              <div className="about-stat"><div className="about-stat-num">40+</div><div className="about-stat-label">Countries Served</div></div>
              <div className="about-stat"><div className="about-stat-num">18yr</div><div className="about-stat-label">Industry Experience</div></div>
            </div>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: "var(--bg-alt)" }}>
        <div className="container">
          <div className="section-header center">
            <div className="eyebrow">Leadership</div>
            <h2>Our Team</h2>
            <p>Former agency scientists, manufacturing executives, and biotech operators.</p>
          </div>
          <div className="team-grid" style={{ marginTop: "2.5rem" }}>
            <div className="team-card">
              <div className="team-avatar" style={{ background: "var(--navy)" }}>DR</div>
              <h4>Dr. Rajiv Mehta</h4>
              <p style={{ color: "var(--teal)", fontWeight: 600, fontSize: "0.84rem", marginBottom: "4px" }}>Managing Director</p>
              <p>Former Senior Reviewer, CDSCO. 22 years in pharma regulatory science.</p>
            </div>
            <div className="team-card">
              <div className="team-avatar" style={{ background: "var(--teal)" }}>SC</div>
              <h4>Dr. Sarah Chen</h4>
              <p style={{ color: "var(--teal)", fontWeight: 600, fontSize: "0.84rem", marginBottom: "4px" }}>Head of CMC Practice</p>
              <p>PhD Pharmaceutical Sciences. Former VP CMC at Pfizer. 18 years experience.</p>
            </div>
            <div className="team-card">
              <div className="team-avatar" style={{ background: "#1B5C87" }}>AK</div>
              <h4>Arjun Krishnan</h4>
              <p style={{ color: "var(--teal)", fontWeight: 600, fontSize: "0.84rem", marginBottom: "4px" }}>Head of Manufacturing</p>
              <p>Former VP Operations, Biocon. Specialist in biologics scale-up and GMP compliance.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
