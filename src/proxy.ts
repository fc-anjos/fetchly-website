import { NextResponse } from "next/server";

export function proxy() {
  if (process.env.VERCEL) {
    return new NextResponse(null, { status: 404 });
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/keystatic", "/keystatic/:path*", "/api/keystatic/:path*"],
};
