import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import bcrypt from "bcryptjs";

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL || "file:./dev.db",
});
const prisma = new PrismaClient({ adapter });

async function main() {
  const adminEmail = process.env.ADMIN_EMAIL || "admin@mangrowbio.com";
  const adminPassword = process.env.ADMIN_PASSWORD || "admin123";
  const password_hash = await bcrypt.hash(adminPassword, 10);
  
  const admin = await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      email: adminEmail,
      password_hash,
      name: "System Admin",
    },
  });

  console.log("Admin user seeded:", admin.email);

  // Seed some dummy case studies and blog posts for demonstration
  await prisma.caseStudy.upsert({
    where: { id: "seed-case-1" },
    update: {},
    create: {
      id: "seed-case-1",
      title: "Accelerating IND Submission for a Novel Oncology Asset",
      industry: "Biotech",
      challenge: "CMC package incomplete; FDA pre-IND feedback unaddressed after 14 months.",
      solution: "Full CMC remediation, analytical method validation, and IND module authoring.",
      results: "Successful IND acceptance in record time.",
      metrics: "6 months to successful IND acceptance"
    }
  });

  await prisma.blogPost.upsert({
    where: { slug: "fda-dscsa-enforcement" },
    update: {},
    create: {
      title: "FDA's DSCSA Enforcement: What Manufacturers Must Act On Now",
      slug: "fda-dscsa-enforcement",
      category: "Regulatory",
      author: "Dr. Rajiv Mehta",
      content: "<p>The November 2024 enforcement deadline marks a turning point for supply chain traceability requirements. Manufacturers must implement complete unit-level tracing...</p>"
    }
  });

  console.log("Dummy content seeded.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
