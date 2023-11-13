"use client";

import { slideInFromLeft, slideInFromTop } from "@/utils/motion";
import { UserIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
    return (
        <motion.section
            id="about"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative mt-24 pb-24 flex flex-col-reverse lg:flex-row justify-between gap-5 z-[20]"
        >
            <motion.div
                variants={slideInFromLeft(0.8)}
                className="flex-1 flex items-center"
            >
                <div className="z-1 relative rounded-md border-2 border-[#7042f88b] before:absolute before:h-full before:w-full before:bg-gradient-to-br before:from-purple-500 before:to-cyan-500 before:blur-xl -z-1">
                    <Image
                        src="/image/rahul.jpg"
                        alt="Rahul Mondal Fullstack Developer"
                        height={0}
                        width={254}
                        className="relative rounded-sm"
                    />
                </div>
            </motion.div>
            <div className="flex flex-col gap-4 flex-1">
                <motion.div
                    variants={slideInFromTop(0)}
                    className="welcome-box py-2 px-3 border border-[#7042f88b] opacity-90 rounded-full flex items-center gap-2"
                >
                    <UserIcon className="text-purple-400 h-5 w-5" />
                    <p className="welcome-text text-[14px] leading-[14px]">
                        About Me
                    </p>
                </motion.div>
                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="whitespace-nowrap flex-wrap flex flex-col gap-3 font-semibold text-5xl leading-[3.5rem] text-bold text-white max-w-[37.5rem] w-auto mt-5"
                >
                    <span className="flex gap-3">
                        Hello! I&apos;m
                        <span className="whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                            Rahul
                        </span>
                    </span>
                    Mondal.
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
                    className="button-primary font-medium tracking-wide rounded-lg mt-6 px-7 py-3 w-max cursor-pointer"
                >
                    Download CV
                </motion.a>
            </div>
        </motion.section>
    );
};

export default About;
