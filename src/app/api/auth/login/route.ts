import { NextResponse } from "next/server";
import { withErrorHandling } from "@/backend/utils/route-handler";
import { loginAdmin } from "@/backend/controllers/auth.controller";

export async function POST(request: Request) {
  return withErrorHandling(async () => {
    const body = await request.json();
    const { token } = await loginAdmin(body);
    const response = NextResponse.json({ success: true }, { status: 200 });

    response.cookies.set({
      name: "auth_token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, // 24 hours
      path: "/",
    });

    return response;
  });
}
