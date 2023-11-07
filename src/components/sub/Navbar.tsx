"use client";

import { NavItems } from "@/utils/constants";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="flex items-center gap-2 py-1 px-2 rounded-full border border-purple-400/50 bg-purple-900/10">
            {NavItems.map(({ path, text }) => (
                <Link
                    href={path}
                    key={text}
                    className="py-[0.4rem] px-5 rounded-full font-semibold text-gray-300"
                >
                    {text}
                </Link>
            ))}
        </nav>
    );
};

export default Navbar;
