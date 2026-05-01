import { withErrorHandling } from "@/backend/utils/route-handler";
import { createContact } from "@/backend/controllers/contact.controller";

export async function POST(request: Request) {
  return withErrorHandling(async () => {
    const body = await request.json();
    return createContact(body);
  }, 201);
}
