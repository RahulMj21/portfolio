"use client";

import { motion } from "framer-motion";

const Contact = () => {
    return (
        <motion.section
            id="contact"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="py-20 flex items-center justify-between gap-20"
        >
            Contact
        </motion.section>
    );
};

export default Contact;
