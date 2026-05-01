import { withErrorHandling } from "@/backend/utils/route-handler";
import {
  deleteCase,
  getCaseById,
  updateCase,
} from "@/backend/controllers/case.controller";
import { requireAdminAuth } from "@/backend/middleware/auth";

type Context = { params: Promise<{ id: string }> };

export async function GET(_: Request, context: Context) {
  return withErrorHandling(async () => {
    const { id } = await context.params;
    return getCaseById(id);
  });
}

export async function PUT(request: Request, context: Context) {
  return withErrorHandling(async () => {
    await requireAdminAuth();
    const { id } = await context.params;
    const body = await request.json();
    return updateCase(id, body);
  });
}

export async function DELETE(_: Request, context: Context) {
  return withErrorHandling(async () => {
    await requireAdminAuth();
    const { id } = await context.params;
    return deleteCase(id);
  });
}
