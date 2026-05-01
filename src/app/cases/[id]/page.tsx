import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";

interface Props {
  params: { id: string };
}

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props) {
  const cs = await prisma.caseStudy.findUnique({ where: { id: params.id } });
  if (!cs) return { title: "Not Found" };
  return { title: `${cs.title} | Mangrow Bio` };
}

export default async function CaseStudyDetail({ params }: Props) {
  const cs = await prisma.caseStudy.findUnique({ where: { id: params.id } });

  if (!cs) {
    notFound();
  }

  return (
    <div className="page-section active" style={{ paddingTop: "120px" }}>
      <div className="container" style={{ maxWidth: "800px" }}>
        <Link href="/cases" style={{ color: "var(--teal)", fontSize: "0.85rem", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "2rem" }}>
          &larr; Back to Case Studies
        </Link>
        <div style={{ marginBottom: "1rem" }}><span className="case-tag">{cs.industry}</span></div>
        <h1 style={{ color: "var(--navy)", marginBottom: "2rem" }}>{cs.title}</h1>
        
        <div style={{ background: "var(--bg-alt)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "2rem", marginBottom: "3rem" }}>
          <h3 style={{ color: "var(--navy)", marginBottom: "0.5rem" }}>Key Metrics</h3>
          <div className="case-metric" style={{ borderTop: "none", paddingTop: 0, marginTop: 0 }}>{cs.metrics}</div>
        </div>

        <div style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.5rem", color: "var(--navy)", marginBottom: "1rem" }}>The Challenge</h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.05rem" }}>{cs.challenge}</p>
        </div>

        <div style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.5rem", color: "var(--navy)", marginBottom: "1rem" }}>Our Solution</h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.05rem" }}>{cs.solution}</p>
        </div>

        <div style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.5rem", color: "var(--navy)", marginBottom: "1rem" }}>The Results</h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.05rem" }}>{cs.results}</p>
        </div>

        <div style={{ borderTop: "1px solid var(--border)", paddingTop: "3rem", paddingBottom: "4rem", textAlign: "center" }}>
          <h2 style={{ fontSize: "1.5rem", color: "var(--navy)", marginBottom: "1rem" }}>Ready to achieve similar results?</h2>
          <Link href="/contact" className="btn btn-primary">Book a Consultation</Link>
        </div>
      </div>
    </div>
  );
}
