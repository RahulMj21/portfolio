import GithubIcon from "@/components/icons/GithubIcon";
import TwitterIcon from "@/components/icons/TwitterIcon";
import LinkdinIcon from "@/components/icons/LinkdinIcon";
import Link from "next/link";

const ContactSocial = () => {
    return (
        <div className="flex items-center gap-4 mt-5">
            <Link
                className="social-link"
                target="_blank"
                href="https://github.com/RahulMj21"
            >
                <GithubIcon />
            </Link>
            <Link
                className="social-link"
                target="_blank"
                href="https://twitter.com/RahulMJ21"
            >
                <TwitterIcon />
            </Link>
            <Link
                className="social-link"
                target="_blank"
                href="https://www.linkedin.com/in/rahulmj21/"
            >
                <LinkdinIcon />
            </Link>
        </div>
    );
};

export default ContactSocial;
