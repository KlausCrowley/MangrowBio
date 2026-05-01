import { prisma } from "@/lib/prisma";
import { ApiError } from "@/backend/utils/errors";
import { sendLeadNotification } from "@/backend/utils/email";
import {
  validateContactInput,
  validateContactStatus,
} from "@/backend/utils/validation";
import { enforceRateLimit } from "@/backend/middleware/rateLimit";

export async function createContact(rawBody: Record<string, unknown>) {
  await enforceRateLimit(6, 60_000);
  const input = validateContactInput(rawBody);

  const contact = await prisma.contact.create({ data: input });
  await sendLeadNotification(input);

  return { success: true, contact };
}

export async function listContacts() {
  const contacts = await prisma.contact.findMany({
    orderBy: [{ created_at: "desc" }],
  });
  return { contacts };
}

export async function updateContactStatus(id: string, rawStatus: unknown) {
  const status = validateContactStatus(rawStatus);

  const existing = await prisma.contact.findUnique({ where: { id } });
  if (!existing) {
    throw new ApiError(404, "Contact not found");
  }

  const contact = await prisma.contact.update({
    where: { id },
    data: { status },
  });

  return { success: true, contact };
}
