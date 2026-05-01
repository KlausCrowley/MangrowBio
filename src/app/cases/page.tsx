import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const metadata = {
  title: "Case Studies | Mangrow Bio",
};

export const dynamic = "force-dynamic";
export const revalidate = 60; // Revalidate every 60 seconds

export default async function Cases() {
  const cases = await prisma.caseStudy.findMany({
    orderBy: { created_at: "desc" },
  });

  return (
    <div id="p-cases" className="page-section active">
      <div className="page-hero">
        <div className="container page-hero-inner">
          <div className="eyebrow" style={{ marginBottom: "1rem" }}>Case Studies</div>
          <h1 style={{ color: "var(--navy)", maxWidth: "680px", marginBottom: "1rem" }}>Documented Impact Across Pharma &amp; Biotech</h1>
          <p style={{ color: "var(--text-muted)", maxWidth: "560px", fontSize: "1.05rem" }}>Real outcomes from real engagements. Each case study reflects our commitment to measurable results.</p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
            <span style={{ padding: "6px 16px", background: "var(--navy)", color: "#fff", borderRadius: "100px", fontSize: "0.78rem", fontWeight: 600, cursor: "pointer" }}>All</span>
            <span style={{ padding: "6px 16px", background: "var(--bg-alt)", color: "var(--text-muted)", borderRadius: "100px", fontSize: "0.78rem", fontWeight: 500, cursor: "pointer", border: "1px solid var(--border)" }}>Biotech</span>
            <span style={{ padding: "6px 16px", background: "var(--bg-alt)", color: "var(--text-muted)", borderRadius: "100px", fontSize: "0.78rem", fontWeight: 500, cursor: "pointer", border: "1px solid var(--border)" }}>CDMO</span>
            <span style={{ padding: "6px 16px", background: "var(--bg-alt)", color: "var(--text-muted)", borderRadius: "100px", fontSize: "0.78rem", fontWeight: 500, cursor: "pointer", border: "1px solid var(--border)" }}>Manufacturing</span>
            <span style={{ padding: "6px 16px", background: "var(--bg-alt)", color: "var(--text-muted)", borderRadius: "100px", fontSize: "0.78rem", fontWeight: 500, cursor: "pointer", border: "1px solid var(--border)" }}>Regulatory</span>
          </div>
          
          {cases.length === 0 ? (
            <div style={{ textAlign: "center", padding: "4rem", color: "var(--text-muted)", background: "var(--bg-alt)", borderRadius: "var(--radius-lg)" }}>
              No case studies published yet. Check back soon.
            </div>
          ) : (
            <div className="case-grid">
              {cases.map((cs) => (
                <div key={cs.id} className="case-card">
                  <div className="case-header">
                    <span className="case-tag">{cs.industry}</span>
                    <h3>{cs.title}</h3>
                  </div>
                  <div className="case-body">
                    <div className="case-row">
                      <div className="case-row-label">Challenge</div>
                      <div className="case-row-text">{cs.challenge.substring(0, 100)}...</div>
                    </div>
                    <div className="case-row">
                      <div className="case-row-label">Solution</div>
                      <div className="case-row-text">{cs.solution.substring(0, 100)}...</div>
                    </div>
                    <div className="case-metric">{cs.metrics}</div>
                    <Link href={`/cases/${cs.id}`} className="case-link">Read Full Case Study &rarr;</Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
