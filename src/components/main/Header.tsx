"use client";
import Container from "@/components/common/Container";
import Logo from "@/components/common/Logo";
import Navbar from "@/components/sub/Navbar";
import cn from "@/lib/cn";
import { slideInFromBottom } from "@/utils/motion";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setIsScrolled(window.scrollY > 100);
        });
    }, []);

    return (
        <motion.header
            initial="hidden"
            animate="visible"
            className={cn(
                "fixed top-0 w-screen shadow-lg shadow-[#2A0E61]/50 bg-[#03001434] backdrop-blur-md z-50",
                isScrolled &&
                    "md:bg-transparent md:shadow-none md:backdrop-blur-none"
            )}
        >
            <motion.div variants={slideInFromBottom(0.3)}>
                <Container className="h-20 flex items-center justify-between">
                    {/* {!isScrolled && ( */}
                    <Link
                        href="/"
                        className={cn(
                            "inline-block",
                            isScrolled && "md:hidden md:invisible"
                        )}
                    >
                        <Logo />
                    </Link>
                    {/* )} */}
                    <Navbar isScrolled={isScrolled} />
                    {/* {!isScrolled && ( */}
                    <Link
                        href="#contact"
                        className={cn(
                            "button-primary rounded-md px-5 py-2 w-max cursor-pointer",
                            isScrolled && "md:hidden md:invisible"
                        )}
                    >
                        Contact
                    </Link>
                    {/* )} */}
                </Container>
            </motion.div>
        </motion.header>
    );
};

export default Header;
