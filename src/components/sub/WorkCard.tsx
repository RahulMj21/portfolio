import Image from "next/image";
import Link from "next/link";
import GithubIcon from "@/components/icons/GithubIcon";
import { EyeIcon } from "@heroicons/react/20/solid";
import { IProject } from "@/types";
import { motion } from "framer-motion";
import { slideInFromBottom } from "@/utils/motion";

interface Props {
    project: IProject;
}

const WorkCard = ({
    project: { title, src, description, githubUrl, liveUrl },
}: Props) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInFromBottom(0.8)}
            className="relative w-[370px] p-3 bg-slate-900 rounded-md group/card"
        >
            <div className="relative">
                <div className="overflow-hidden rounded-md">
                    <Image
                        src={src}
                        alt={`image of ${title}`}
                        height={195}
                        width={360}
                        className="group-hover/card:scale-[1.08] duration-500 transition-all"
                        loading="lazy"
                    />
                </div>
                <div className="absolute px-4 py-2 text-sm rounded-md bg-slate-950 border border-slate-900 top-[90%] left-1/2 -translate-x-1/2 flex items-center gap-8">
                    <Link
                        href={githubUrl}
                        target="_blank"
                        className="flex items-center text-xs leading-5 gap-2 whitespace-nowrap hover:underline"
                    >
                        <GithubIcon className="fill-purple-600 w-4 h-4 " />
                        View Code
                    </Link>
                    <Link
                        href={liveUrl}
                        target="_blank"
                        className="flex items-center text-xs leading-5 gap-2 whitespace-nowrap hover:underline"
                    >
                        <EyeIcon className="fill-purple-600 w-5 h-5 " />
                        Live Site
                    </Link>
                </div>
            </div>
            <div className="flex flex-col gap-3 mt-8 mb-4 items-center">
                <h2 className="text-xl">{title}</h2>
                <p className="text-zinc-400 text-sm text-center">
                    {description}
                </p>
            </div>
        </motion.div>
    );
};

export default WorkCard;
