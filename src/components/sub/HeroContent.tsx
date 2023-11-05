"use client";

import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroContent = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex items-center justify-center px-20 mt-40 w-full z-[20]"
        >
            <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
                <motion.div
                    variants={slideInFromTop(0.5)}
                    className="welcome-box py-2 px-4 border border-[#7042f88b] opacity-90 rounded-full flex items-center gap-2"
                >
                    <SparklesIcon className="text-purple-400 h-5 w-5" />
                    <h1 className="welcome-text text-[13px]">
                        Full-Stack Developer
                    </h1>
                </motion.div>
                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="whitespace-nowrap flex-wrap flex gap-2 text-5xl leading-[3.5rem] text-bold text-white max-w-[37.5rem] w-auto mt-5"
                >
                    Carrying
                    <span className="whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                        your ideas
                    </span>
                    <span>to</span>
                    their
                    <span className="whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                        destination
                    </span>
                </motion.div>
                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="max-w-[37.5rem] text-gray-400"
                >
                    I&apos;m a Full-Stack Developer. Flexible, hard worker,
                    ready to learn and contribute to team success. Working
                    confidently with a wide range of technologies.
                </motion.p>
                <motion.a
                    variants={slideInFromLeft(1)}
                    className="button-primary rounded-full px-6 py-2 w-max cursor-pointer"
                >
                    Download CV
                </motion.a>
            </div>
            <motion.div variants={slideInFromRight(0.8)} className="">
                <Image
                    src="/image/mainIconsDark.svg"
                    alt="Hero Icons"
                    height={650}
                    width={650}
                />
            </motion.div>
        </motion.div>
    );
};

export default HeroContent;
