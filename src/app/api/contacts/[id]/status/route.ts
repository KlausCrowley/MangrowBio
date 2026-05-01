import { withErrorHandling } from "@/backend/utils/route-handler";
import { requireAdminAuth } from "@/backend/middleware/auth";
import { updateContactStatus } from "@/backend/controllers/contact.controller";

type Context = { params: Promise<{ id: string }> };

export async function PATCH(request: Request, context: Context) {
  return withErrorHandling(async () => {
    await requireAdminAuth();
    const { id } = await context.params;
    const body = await request.json();
    return updateContactStatus(id, body.status);
  });
}
