import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import cn from "@/lib/cn";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Rahul | Portfolio",
    description: "Generated by create next app",
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
                    "bg-color-dark overflow-x-hidden text-white"
                )}
            >
                {children}
            </body>
        </html>
    );
}
