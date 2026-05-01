import { withErrorHandling } from "@/backend/utils/route-handler";
import {
  deleteBlogBySlug,
  getBlogBySlug,
  updateBlogBySlug,
} from "@/backend/controllers/blog.controller";
import { requireAdminAuth } from "@/backend/middleware/auth";

type Context = { params: Promise<{ slug: string }> };

export async function GET(_: Request, context: Context) {
  return withErrorHandling(async () => {
    const { slug } = await context.params;
    return getBlogBySlug(slug);
  });
}

export async function PUT(request: Request, context: Context) {
  return withErrorHandling(async () => {
    await requireAdminAuth();
    const { slug } = await context.params;
    const body = await request.json();
    return updateBlogBySlug(slug, body);
  });
}

export async function DELETE(_: Request, context: Context) {
  return withErrorHandling(async () => {
    await requireAdminAuth();
    const { slug } = await context.params;
    return deleteBlogBySlug(slug);
  });
}
