import { Socials } from "@/data";
import { slideInFromBottom } from "@/utils/motion";
import { motion } from "framer-motion";
import Link from "next/link";

const ContactSocial = () => {
    return (
        <div className="flex items-center gap-4 mt-5">
            {Socials.map((social, idx) => (
                <motion.div
                    key={social.id}
                    variants={slideInFromBottom(1 + idx / 10)}
                >
                    <Link
                        className="social-link"
                        target="_blank"
                        href={social.link}
                    >
                        {social.icon}
                    </Link>
                </motion.div>
            ))}
        </div>
    );
};

export default ContactSocial;
