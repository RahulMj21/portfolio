import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import cn from "@/lib/cn";
import StarCanvas from "@/components/sub/StarBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "RahulMj21 - Software Engineer",
    description:
        "RahulMj21 - Software Engineer. Flexible, hard worker, ready to learn and contribute to team success. confidently with a wide range of technologies.",
    openGraph: {
        title: "RahulMj21 - Software Engineer",
        description:
            "RahulMj21 - Software Engineer. Flexible, hard worker, ready to learn and contribute to team success. confidently with a wide range of technologies.",
        type: "website",
        url: process.env.NEXT_PUBLIC_APP_URL,
        siteName: "RahulMj21 - Software Engineer",
        images: {
            url: "/image/project1.png",
        },
    },
    metadataBase: process.env.NEXT_PUBLIC_APP_URL as unknown as URL,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={cn(
                    inter.className,
                    "bg-[#030014] overflow-x-hidden overflow-y-auto text-white"
                )}
            >
                <StarCanvas />
                {children}
            </body>
        </html>
    );
}
