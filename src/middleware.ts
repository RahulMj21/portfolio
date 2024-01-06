import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
    if (req.headers.get("origin") !== process.env.NEXT_PUBLIC_APP_URL) {
        return NextResponse.json({ status: "fail" }, { status: 403 });
    }

    return NextResponse.next();
}

export const config = { matcher: "/api/:path*" };
