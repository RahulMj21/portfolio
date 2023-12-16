import GithubIcon from "@/components/icons/GithubIcon";
import LinkdinIcon from "@/components/icons/LinkdinIcon";
import TwitterIcon from "@/components/icons/TwitterIcon";
import { IContactInput, IProject, ISkillData, ISocial } from "@/types";

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
        liveUrl: "https://teunup.com/",
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

export const SkillsData: ISkillData[] = [
    {
        title: "Tech I Know",
        items: [
            { name: "HTML", img: "/image/html.svg" },
            { name: "CSS", img: "/image/css.svg" },
            { name: "Javascript", img: "/image/js.svg" },
            { name: "Typescript", img: "/image/ts.svg" },
            { name: "React.js", img: "/image/react.svg" },
            { name: "Next.js", img: "/image/nextjs.svg" },
            { name: "TailwindCSS", img: "/image/tailwind.svg" },
            { name: "Material UI", img: "/image/mui.svg" },
            { name: "Chakra UI", img: "/image/chakra-ui.svg" },
            { name: "Framer Motion", img: "/image/framer-motion.svg" },
            { name: "Redux", img: "/image/redux.svg" },
            { name: "React Query", img: "/image/reactquery.svg" },
            { name: "tRPC", img: "/image/trpc.svg" },
            { name: "GraphQL", img: "/image/graphql.svg" },
            { name: "Node.js", img: "/image/nodejs.svg" },
            { name: "Go", img: "/image/golang.svg" },
            { name: "MongoDB", img: "/image/mongodb.svg" },
            { name: "MySQL", img: "/image/mysql.svg" },
            { name: "Postgres", img: "/image/postgres.svg" },
            { name: "Prisma", img: "/image/prisma.svg" },
            { name: "Github", img: "/image/github.svg" },
            { name: "Actions CI/CD", img: "/image/githubactions.svg" },
            { name: "Docker", img: "/image/docker.svg" },
        ],
    },
    {
        title: "Currently Working With",
        items: [
            { name: "Next.js", img: "/image/nextjs.svg" },
            { name: "TailwindCSS", img: "/image/tailwind.svg" },
            { name: "Framer Motion", img: "/image/framer-motion.svg" },
            { name: "React Query", img: "/image/reactquery.svg" },
            { name: "tRPC", img: "/image/trpc.svg" },
            { name: "Go", img: "/image/golang.svg" },
            { name: "Postgres", img: "/image/postgres.svg" },
            { name: "Prisma", img: "/image/prisma.svg" },
            { name: "Docker", img: "/image/docker.svg" },
        ],
    },
    {
        title: "Learning Now",
        items: [
            { name: "Go", img: "/image/golang.svg" },
            { name: "AWS", img: "/image/aws.svg" },
        ],
    },
];

export const ContactInputs: IContactInput[] = [
    { key: "name", type: "text", placeholder: "Your Name" },
    { key: "email", type: "email", placeholder: "Your Email" },
    { key: "subject", type: "text", placeholder: "Subject" },
];
