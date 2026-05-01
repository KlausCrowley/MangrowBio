import { cookies, headers } from "next/headers";
import { decrypt } from "@/lib/auth";
import { ApiError } from "@/backend/utils/errors";

type SessionPayload = {
  id: string;
  email: string;
};

export async function requireAdminAuth(): Promise<SessionPayload> {
  const cookieStore = await cookies();
  const tokenFromCookie = cookieStore.get("auth_token")?.value;
  const authHeader = (await headers()).get("authorization");
  const tokenFromHeader = authHeader?.startsWith("Bearer ")
    ? authHeader.substring("Bearer ".length)
    : null;

  const token = tokenFromCookie || tokenFromHeader;
  if (!token) {
    throw new ApiError(401, "Unauthorized");
  }

  try {
    const payload = await decrypt(token);
    return {
      id: String(payload.id),
      email: String(payload.email),
    };
  } catch {
    throw new ApiError(401, "Invalid or expired token");
  }
}
