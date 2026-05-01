import { prisma } from "@/lib/prisma";

export async function getDashboardMetrics() {
  const [totalLeads, totalCaseStudies, totalBlogPosts] = await Promise.all([
    prisma.contact.count(),
    prisma.caseStudy.count(),
    prisma.blogPost.count(),
  ]);

  return {
    totalLeads,
    totalCaseStudies,
    totalBlogPosts,
  };
}
