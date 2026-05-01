import { headers } from "next/headers";
import { ApiError } from "@/backend/utils/errors";

const requestBuckets = new Map<string, number[]>();

export async function enforceRateLimit(maxRequests: number, windowMs: number) {
  const h = await headers();
  const ip =
    h.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    h.get("x-real-ip") ||
    "local";

  const now = Date.now();
  const existing = requestBuckets.get(ip) || [];
  const fresh = existing.filter((time) => now - time < windowMs);

  if (fresh.length >= maxRequests) {
    throw new ApiError(429, "Too many requests. Please try again later.");
  }

  fresh.push(now);
  requestBuckets.set(ip, fresh);
}
