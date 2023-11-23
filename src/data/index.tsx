import { IProject, ISocial } from "@/types";
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
