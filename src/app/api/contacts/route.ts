import { withErrorHandling } from "@/backend/utils/route-handler";
import { listContacts } from "@/backend/controllers/contact.controller";
import { requireAdminAuth } from "@/backend/middleware/auth";

export async function GET() {
  return withErrorHandling(async () => {
    await requireAdminAuth();
    return listContacts();
  });
}
