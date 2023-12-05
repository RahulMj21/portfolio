import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
    console.log("referrer :", req.referrer);
    return NextResponse.next();
}

export const config = { matcher: "/api/:path*" };
