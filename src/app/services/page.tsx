import Link from "next/link";

export const metadata = {
  title: "Services | Mangrow Bio",
};

export default function Services() {
  return (
    <div id="p-services" className="page-section active">
      <div className="page-hero">
        <div className="container page-hero-inner">
          <div className="eyebrow" style={{ marginBottom: "1rem" }}>Services</div>
          <h1 style={{ color: "var(--navy)", maxWidth: "680px", marginBottom: "1rem" }}>Deep Expertise. Defined Outcomes.</h1>
          <p style={{ color: "var(--text-muted)", maxWidth: "560px", fontSize: "1.05rem" }}>Each engagement is scoped with clear deliverables, defined timelines, and measurable outcomes.</p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="service-detail">
            <div className="sdg">
              <div>
                <div className="eyebrow" style={{ marginBottom: "0.75rem" }}>01</div>
                <h2>R&amp;D &amp; CMC Consulting</h2>
                <p>Comprehensive drug development support from candidate selection through regulatory submission. Our CMC specialists cover formulation, analytical development, stability, and full Module 3 documentation.</p>
                <Link href="/contact" className="btn btn-primary">Enquire About This Service</Link>
              </div>
              <ul className="sbullets">
                <li>Pre-formulation and formulation development strategy</li>
                <li>Analytical method development and validation (ICH Q2)</li>
                <li>Drug substance and drug product characterization</li>
                <li>Stability study design and data evaluation (ICH Q1)</li>
                <li>CTD Module 3 authoring and quality review</li>
                <li>CRO/CMO selection and technical oversight</li>
                <li>IND, NDA, MAA, and ANDA technical support</li>
              </ul>
            </div>
          </div>
          <div className="service-detail">
            <div className="sdg rev">
              <div>
                <div className="eyebrow" style={{ marginBottom: "0.75rem" }}>02</div>
                <h2>GMP &amp; Regulatory Compliance</h2>
                <p>From pre-inspection readiness to CAPA management and quality system overhaul. Our team includes former FDA and EMA inspectors who understand exactly what regulators look for.</p>
                <Link href="/contact" className="btn btn-primary">Enquire About This Service</Link>
              </div>
              <ul className="sbullets">
                <li>GMP gap analysis and remediation planning</li>
                <li>Mock FDA, EMA, and CDSCO inspection programs</li>
                <li>CAPA development, implementation, and verification</li>
                <li>Quality Management System design and implementation</li>
                <li>Change control and deviation management systems</li>
                <li>Regulatory strategy for complex product types</li>
                <li>Inspection response and commitments management</li>
              </ul>
            </div>
          </div>
          <div className="service-detail">
            <div className="sdg">
              <div>
                <div className="eyebrow" style={{ marginBottom: "0.75rem" }}>03</div>
                <h2>CDMO Selection &amp; Management</h2>
                <p>Objective, structured CDMO evaluation frameworks backed by deep operational knowledge. We manage the entire partner selection lifecycle and provide ongoing oversight governance.</p>
                <Link href="/contact" className="btn btn-primary">Enquire About This Service</Link>
              </div>
              <ul className="sbullets">
                <li>CDMO landscape mapping and shortlisting</li>
                <li>Technical due diligence and audit programs</li>
                <li>RFP development and proposal evaluation</li>
                <li>Quality and technical agreement development</li>
                <li>Ongoing CDMO performance governance frameworks</li>
                <li>Multi-source strategy and risk mitigation</li>
              </ul>
            </div>
          </div>
          <div className="service-detail">
            <div className="sdg rev">
              <div>
                <div className="eyebrow" style={{ marginBottom: "0.75rem" }}>04</div>
                <h2>Manufacturing Scale-Up</h2>
                <p>Hands-on process transfer and scale-up support from laboratory through commercial manufacturing, focusing on minimizing cycle time and maximizing first-pass success.</p>
                <Link href="/contact" className="btn btn-primary">Enquire About This Service</Link>
              </div>
              <ul className="sbullets">
                <li>Process characterization and design of experiments (DoE)</li>
                <li>Technology transfer protocol design and execution oversight</li>
                <li>Process validation (Stage 1–3) strategy and management</li>
                <li>Equipment qualification (IQ/OQ/PQ) programs</li>
                <li>Cleaning validation strategy and execution</li>
                <li>Batch record development and manufacturing support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
