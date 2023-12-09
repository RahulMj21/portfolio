import { IContactInput, IProject, ISocial } from "@/types";
import GithubIcon from "@/components/icons/GithubIcon";
import TwitterIcon from "@/components/icons/TwitterIcon";
import LinkdinIcon from "@/components/icons/LinkdinIcon";

export const Projects: IProject[] = [
    { id: 1, title: "First Project" },
    { id: 2, title: "Second Project" },
    { id: 3, title: "Third Project" },
    { id: 4, title: "Fourth Project" },
    { id: 5, title: "Fifth Project" },
];

export const Socials: ISocial[] = [
    { id: 1, link: "https://github.com/RahulMj21", icon: <GithubIcon /> },
    { id: 2, link: "https://twitter.com/RahulMJ21", icon: <TwitterIcon /> },
    {
        id: 3,
        link: "https://www.linkedin.com/in/rahulmj21",
        icon: <LinkdinIcon />,
    },
];

export const SkillsData = [
    {
        title: "Tech I Know",
        items: [
            "/image/html.svg",
            "/image/css.svg",
            "/image/js.svg",
            "/image/ts.svg",
            "/image/react.svg",
            "/image/nextjs.svg",
            "/image/tailwind.svg",
            "/image/mui.svg",
            "/image/chakra-ui.svg",
            "/image/framer-motion.svg",
            "/image/redux.svg",
            "/image/reactquery.svg",
            "/image/trpc.svg",
            "/image/graphql.svg",
            "/image/nodejs.svg",
            "/image/golang.svg",
            "/image/mongodb.svg",
            "/image/mysql.svg",
            "/image/postgres.svg",
            "/image/prisma.svg",
            "/image/github.svg",
            "/image/githubactions.svg",
            "/image/docker.svg",
        ],
    },
    {
        title: "Currently Working With",
        items: [
            "/image/nextjs.svg",
            "/image/tailwind.svg",
            "/image/framer-motion.svg",
            "/image/reactquery.svg",
            "/image/trpc.svg",
            "/image/golang.svg",
            "/image/postgres.svg",
            "/image/prisma.svg",
            "/image/docker.svg",
        ],
    },
    {
        title: "Learning Now",
        items: ["/image/golang.svg", "/image/framer-motion.svg"],
    },
];

export const ContactInputs: IContactInput[] = [
    { key: "name", type: "text", placeholder: "Your Name" },
    { key: "email", type: "email", placeholder: "Your Email" },
    { key: "subject", type: "text", placeholder: "Subject" },
];
