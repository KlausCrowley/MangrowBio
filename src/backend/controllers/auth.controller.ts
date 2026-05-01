import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { ApiError } from "@/backend/utils/errors";
import { sanitizeText } from "@/backend/utils/sanitize";
import { encrypt } from "@/lib/auth";

export async function loginAdmin(rawBody: Record<string, unknown>) {
  const email = sanitizeText(rawBody.email).toLowerCase();
  const password = sanitizeText(rawBody.password);

  if (!email || !password) {
    throw new ApiError(400, "Email and password are required");
  }

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    throw new ApiError(401, "Invalid credentials");
  }

  const isMatch = await bcrypt.compare(password, user.password_hash);
  if (!isMatch) {
    throw new ApiError(401, "Invalid credentials");
  }

  const token = await encrypt({
    id: user.id,
    email: user.email,
    role: "admin",
  });

  return { token };
}
