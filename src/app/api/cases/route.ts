import { withErrorHandling } from "@/backend/utils/route-handler";
import { listCases, createCase } from "@/backend/controllers/case.controller";
import { requireAdminAuth } from "@/backend/middleware/auth";

export async function GET() {
  return withErrorHandling(async () => listCases());
}

export async function POST(request: Request) {
  return withErrorHandling(async () => {
    await requireAdminAuth();
    const body = await request.json();
    return createCase(body);
  }, 201);
}
