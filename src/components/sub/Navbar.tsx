"use client";

import cn from "@/lib/cn";
import { NavItems } from "@/utils/constants";
import Link from "next/link";

interface Props {
    isScrolled: boolean;
}

const Navbar = ({ isScrolled }: Props) => {
    return (
        <nav
            className={cn(
                "fixed top-4 left-1/2 -translate-x-1/2 hidden invisible md:visible md:flex items-center gap-2 py-1 px-2 rounded-full border border-purple-900/50 bg-[#0300145e] backdrop-blur-3xl w-max",
                isScrolled && "bg-[#030014dc]"
            )}
        >
            {NavItems.map(({ path, text }) => (
                <Link
                    href={path}
                    key={text}
                    className="nav-link py-[0.4rem] px-5 rounded-full font-medium"
                >
                    {text}
                </Link>
            ))}
            <Link
                href="#contact"
                className={cn(
                    "button-primary rounded-full cursor-pointer scale-0 invisible w-0",
                    isScrolled &&
                        "scale-100 visible w-max px-5 py-2 transition-all"
                )}
            >
                Contact
            </Link>
        </nav>
    );
};

export default Navbar;
