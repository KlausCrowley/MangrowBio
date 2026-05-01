import { prisma } from "@/lib/prisma";
import { ApiError } from "@/backend/utils/errors";
import { validateCaseInput } from "@/backend/utils/validation";

export async function listCases() {
  const cases = await prisma.caseStudy.findMany({
    orderBy: [{ created_at: "desc" }],
  });
  return { cases };
}

export async function getCaseById(id: string) {
  const caseStudy = await prisma.caseStudy.findUnique({ where: { id } });
  if (!caseStudy) throw new ApiError(404, "Case study not found");
  return { caseStudy };
}

export async function createCase(rawBody: Record<string, unknown>) {
  const payload = validateCaseInput(rawBody);
  const caseStudy = await prisma.caseStudy.create({ data: payload });
  return { success: true, caseStudy };
}

export async function updateCase(id: string, rawBody: Record<string, unknown>) {
  const payload = validateCaseInput(rawBody);
  const existing = await prisma.caseStudy.findUnique({ where: { id } });
  if (!existing) throw new ApiError(404, "Case study not found");
  const caseStudy = await prisma.caseStudy.update({ where: { id }, data: payload });
  return { success: true, caseStudy };
}

export async function deleteCase(id: string) {
  const existing = await prisma.caseStudy.findUnique({ where: { id } });
  if (!existing) throw new ApiError(404, "Case study not found");
  await prisma.caseStudy.delete({ where: { id } });
  return { success: true };
}
