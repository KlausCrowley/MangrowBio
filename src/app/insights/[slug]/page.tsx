import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface Props {
  params: { slug: string };
}

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props) {
  const post = await prisma.blogPost.findUnique({ where: { slug: params.slug } });
  if (!post) return { title: "Not Found" };
  return { title: `${post.title} | Mangrow Bio` };
}

export default async function BlogPostDetail({ params }: Props) {
  const post = await prisma.blogPost.findUnique({ where: { slug: params.slug } });

  if (!post) {
    notFound();
  }

  return (
    <div className="page-section active" style={{ paddingTop: "120px" }}>
      <div className="container" style={{ maxWidth: "800px" }}>
        <Link href="/insights" style={{ color: "var(--teal)", fontSize: "0.85rem", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "2rem" }}>
          &larr; Back to Insights
        </Link>
        <div style={{ marginBottom: "1rem" }}><span className="feat-tag">{post.category}</span></div>
        <h1 style={{ color: "var(--navy)", marginBottom: "1rem" }}>{post.title}</h1>
        <div style={{ color: "var(--text-light)", fontSize: "0.9rem", marginBottom: "3rem", fontFamily: "'Space Mono', monospace" }}>
          {new Date(post.created_at).toLocaleDateString()} &middot; By {post.author}
        </div>
        
        {post.featured_image && (
          <div style={{ marginBottom: "3rem", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
            <Image
              src={post.featured_image}
              alt={post.title}
              width={1280}
              height={720}
              unoptimized
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        )}

        <div style={{ fontSize: "1.05rem", color: "var(--text)", lineHeight: 1.8, marginBottom: "4rem" }} dangerouslySetInnerHTML={{ __html: post.content }} />

        <div style={{ borderTop: "1px solid var(--border)", paddingTop: "3rem", paddingBottom: "4rem", textAlign: "center" }}>
          <h2 style={{ fontSize: "1.5rem", color: "var(--navy)", marginBottom: "1rem" }}>Need expert guidance?</h2>
          <Link href="/contact" className="btn btn-primary">Book a Consultation</Link>
        </div>
      </div>
    </div>
  );
}
