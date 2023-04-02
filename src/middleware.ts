import { COOKIES, URL_PATHS } from "@/constants";
import { authRoutes, protectedRoutes } from "@/router/routes";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get(COOKIES.TOKEN)?.value;
  if (protectedRoutes.includes(request.nextUrl.pathname) && !token) {
    const response = NextResponse.redirect(
      new URL(URL_PATHS.LOGIN, request.url)
    );
    response.cookies.delete(COOKIES.TOKEN);

    return response;
  }

  if (authRoutes.includes(request.nextUrl.pathname) && token) {
    return NextResponse.redirect(new URL(URL_PATHS.PROFILE, request.url));
  }
}
