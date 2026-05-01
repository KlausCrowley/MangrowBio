import { withErrorHandling } from "@/backend/utils/route-handler";
import { listBlogPosts, createBlogPost } from "@/backend/controllers/blog.controller";
import { requireAdminAuth } from "@/backend/middleware/auth";

export async function GET() {
  return withErrorHandling(async () => listBlogPosts());
}

export async function POST(request: Request) {
  return withErrorHandling(async () => {
    await requireAdminAuth();
    const body = await request.json();
    return createBlogPost(body);
  }, 201);
}
