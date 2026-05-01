import type { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mangrowbio.com";
export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [cases, posts] = await Promise.all([
    prisma.caseStudy.findMany({ select: { id: true, created_at: true } }),
    prisma.blogPost.findMany({ select: { slug: true, created_at: true } }),
  ]);

  const staticPages: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/services",
    "/cases",
    "/insights",
    "/contact",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));

  const casePages: MetadataRoute.Sitemap = cases.map((item) => ({
    url: `${siteUrl}/cases/${item.id}`,
    lastModified: item.created_at,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = posts.map((item) => ({
    url: `${siteUrl}/insights/${item.slug}`,
    lastModified: item.created_at,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...casePages, ...blogPages];
}
