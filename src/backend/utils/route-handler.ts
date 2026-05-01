import { NextResponse } from "next/server";
import { getErrorResponse } from "@/backend/utils/errors";
import { logger } from "@/backend/utils/logger";

export async function withErrorHandling<T>(
  action: () => Promise<T>,
  successStatus = 200,
) {
  try {
    const result = await action();
    if (result instanceof NextResponse) {
      return result;
    }
    return NextResponse.json(result, { status: successStatus });
  } catch (error) {
    const payload = getErrorResponse(error);
    logger.error("API request failed", {
      error: error instanceof Error ? error.message : "Unknown",
      status: payload.status,
    });
    return NextResponse.json(payload.body, { status: payload.status });
  }
}
