"use client";
import Container from "@/components/common/Container";
import Logo from "@/components/common/Logo";
import Link from "next/link";
import Navbar from "@/components/sub/Navbar";
import { motion } from "framer-motion";
import { slideInFromBottom } from "@/utils/motion";

const Header = () => {
    return (
        <motion.header
            initial="hidden"
            animate="visible"
            className="fixed top-0 w-screen shadow-lg shadow-[#2A0E61]/50 bg-[#03001434] backdrop-blur-md z-50"
        >
            <motion.div variants={slideInFromBottom(0.3)}>
                <Container className="h-20 flex items-center justify-between w-full">
                    <Link href="/">
                        <Logo />
                    </Link>
                    <Navbar />
                    <Link
                        href="#contact"
                        className="button-primary rounded-md px-7 py-2 w-max cursor-pointer"
                    >
                        Contact
                    </Link>
                </Container>
            </motion.div>
        </motion.header>
    );
};

export default Header;
