import GithubIcon from "@/components/icons/GithubIcon";
import TwitterIcon from "@/components/icons/TwitterIcon";
import LinkdinIcon from "@/components/icons/LinkdinIcon";
import Link from "next/link";
import { motion } from "framer-motion";
import { slideInFromBottom } from "@/utils/motion";

const ContactSocial = () => {
    return (
        <div className="flex items-center gap-4 mt-5">
            <motion.div variants={slideInFromBottom(1)}>
                <Link
                    className="social-link"
                    target="_blank"
                    href="https://github.com/RahulMj21"
                >
                    <GithubIcon />
                </Link>
            </motion.div>
            <motion.div variants={slideInFromBottom(1.1)}>
                <Link
                    className="social-link"
                    target="_blank"
                    href="https://twitter.com/RahulMJ21"
                >
                    <TwitterIcon />
                </Link>
            </motion.div>
            <motion.div variants={slideInFromBottom(1.2)}>
                <Link
                    className="social-link"
                    target="_blank"
                    href="https://www.linkedin.com/in/rahulmj21/"
                >
                    <LinkdinIcon />
                </Link>
            </motion.div>
        </div>
    );
};

export default ContactSocial;
