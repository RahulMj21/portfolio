import GithubIcon from "@/components/icons/GithubIcon";
import LinkdinIcon from "@/components/icons/LinkdinIcon";
import TwitterIcon from "@/components/icons/TwitterIcon";
import { IContactInput, IProject, ISocial } from "@/types";

export const Projects: IProject[] = [
    {
        id: 1,
        title: "Personal Portfolio",
        description:
            "Personal Portfolio - created with Next.js, Tailwind, Framer-Motion and Resend.",
        src: "/image/project1.png",
        githubUrl: "https://github.com/RahulMj21/portfolio",
        liveUrl: "https://rahulmj21.com",
    },
    {
        id: 2,
        title: "Project Management",
        description:
            "Project Management Application - created with Next.js, Tailwind, tRPC, Prisma, Postgres. [currently work in progress]",
        src: "/image/project2.png",
        githubUrl: "https://github.com/RahulMj21/tuneup",
        liveUrl: "https://teunup.vercel.app/",
    },
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
        items: ["/image/golang.svg", "/image/aws.svg"],
    },
];

export const ContactInputs: IContactInput[] = [
    { key: "name", type: "text", placeholder: "Your Name" },
    { key: "email", type: "email", placeholder: "Your Email" },
    { key: "subject", type: "text", placeholder: "Subject" },
];
