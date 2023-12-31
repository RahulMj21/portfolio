"use client";

import { slideInFromBottom } from "@/utils/motion";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <motion.footer
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="px-8 h-20 overflow-hidden flex items-center justify-center text-zinc-400 text-sm tracking-wide"
        >
            <motion.p variants={slideInFromBottom(0)} className="text-center">
                Copyright © {new Date().getFullYear()} RahulMj21. All rights
                reserved.
            </motion.p>
        </motion.footer>
    );
};

export default Footer;
