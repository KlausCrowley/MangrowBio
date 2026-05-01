import Link from "next/link";
import { prisma } from "@/lib/prisma";
import Image from "next/image";

export const metadata = {
  title: "Insights | Mangrow Bio",
};

export const dynamic = "force-dynamic";
export const revalidate = 60;

export default async function Insights() {
  const posts = await prisma.blogPost.findMany({
    orderBy: { created_at: "desc" },
  });

  const featured = posts.length > 0 ? posts[0] : null;
  const standardPosts = posts.length > 0 ? posts.slice(1) : [];

  return (
    <div id="p-insights" className="page-section active">
      <div className="page-hero">
        <div className="container page-hero-inner">
          <div className="eyebrow" style={{ marginBottom: "1rem" }}>Insights</div>
          <h1 style={{ color: "var(--navy)", maxWidth: "680px", marginBottom: "1rem" }}>Industry Analysis &amp; Technical Perspectives</h1>
          <p style={{ color: "var(--text-muted)", maxWidth: "560px", fontSize: "1.05rem" }}>Original commentary from our specialists on regulatory developments, manufacturing trends, and strategic topics.</p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          
          {posts.length === 0 ? (
            <div style={{ textAlign: "center", padding: "4rem", color: "var(--text-muted)", background: "var(--bg-alt)", borderRadius: "var(--radius-lg)" }}>
              No insights published yet. Check back soon.
            </div>
          ) : (
            <>
              {featured && (
                <div className="feat-article">
                  <div>
                    <span className="feat-tag">Featured</span>
                    <h2>{featured.title}</h2>
                    <p>{featured.content.substring(0, 150)}...</p>
                    <div className="feat-meta">{featured.author} &middot; {new Date(featured.created_at).toLocaleDateString()}</div>
                    <Link href={`/insights/${featured.slug}`} className="btn btn-primary" style={{ marginTop: "1.25rem" }}>Read Article &rarr;</Link>
                  </div>
                  <div style={{ background: "linear-gradient(135deg, var(--navy), var(--teal))", borderRadius: "var(--radius-lg)", height: "280px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative" }}>
                    {featured.featured_image ? (
                      <Image src={featured.featured_image} alt={featured.title} fill unoptimized sizes="(max-width: 1024px) 100vw, 50vw" style={{ objectFit: "cover" }} />
                    ) : (
                      <svg width="110" height="110" viewBox="0 0 120 120" fill="none">
                        <circle cx="60" cy="60" r="50" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
                        <circle cx="60" cy="60" r="35" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                        <circle cx="60" cy="60" r="18" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
                        <text x="60" y="66" textAnchor="middle" fill="white" fontSize="13" fontFamily="DM Serif Display, serif">ICH</text>
                      </svg>
                    )}
                  </div>
                </div>
              )}

              <div className="blog-grid">
                {standardPosts.map((post) => (
                  <div key={post.id} className="blog-card">
                    <div className="blog-img" style={{ background: "linear-gradient(135deg, var(--navy), #1B5C87)", overflow: "hidden", position: "relative" }}>
                      {post.featured_image ? (
                        <Image src={post.featured_image} alt={post.title} fill unoptimized sizes="(max-width: 1024px) 100vw, 33vw" style={{ objectFit: "cover" }} />
                      ) : (
                        <svg width="56" height="56" viewBox="0 0 60 60" fill="none"><circle cx="30" cy="30" r="24" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/><circle cx="30" cy="30" r="12" fill="rgba(255,255,255,0.12)"/><line x1="30" y1="6" x2="30" y2="18" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/><line x1="54" y1="30" x2="42" y2="30" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/><line x1="30" y1="54" x2="30" y2="42" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/><line x1="6" y1="30" x2="18" y2="30" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/></svg>
                      )}
                    </div>
                    <div className="blog-body">
                      <div className="blog-tag">{post.category}</div>
                      <h3><Link href={`/insights/${post.slug}`}>{post.title}</Link></h3>
                      <p>{post.content.substring(0, 100)}...</p>
                      <div className="blog-meta">{new Date(post.created_at).toLocaleDateString()} &middot; {post.author}</div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Lead Magnet */}
          <div style={{ background: "var(--bg-alt)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "2.5rem", marginTop: "3rem", display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem", alignItems: "center", flexWrap: "wrap" }}>
            <div>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--teal)", marginBottom: "0.5rem" }}>Free Resource</div>
              <h3 style={{ color: "var(--navy)", marginBottom: "0.5rem" }}>GMP Audit Readiness Checklist</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>A 47-point checklist used by our consultants to prepare clients for FDA and EMA GMP inspections.</p>
            </div>
            <Link href="/contact" className="btn btn-primary" style={{ whiteSpace: "nowrap", flexShrink: 0 }}>Download Free &rarr;</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
