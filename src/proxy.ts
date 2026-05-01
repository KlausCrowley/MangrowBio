import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decrypt } from "@/lib/auth";

export async function proxy(request: NextRequest) {
  const token = request.cookies.get("auth_token")?.value;
  const isAuthPage = request.nextUrl.pathname.startsWith("/admin/login");

  if (request.nextUrl.pathname.startsWith("/admin")) {
    if (!token && !isAuthPage) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    if (token) {
      try {
        await decrypt(token);
        if (isAuthPage) {
          return NextResponse.redirect(new URL("/admin/dashboard", request.url));
        }
      } catch {
        if (!isAuthPage) {
          return NextResponse.redirect(new URL("/admin/login", request.url));
        }
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
