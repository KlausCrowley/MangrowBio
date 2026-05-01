import { withErrorHandling } from "@/backend/utils/route-handler";
import { requireAdminAuth } from "@/backend/middleware/auth";
import { getDashboardMetrics } from "@/backend/controllers/admin.controller";

export async function GET() {
  return withErrorHandling(async () => {
    await requireAdminAuth();
    return getDashboardMetrics();
  });
}
