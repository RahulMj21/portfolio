"use client";

import WorkCard from "@/components/sub/WorkCard";
import { Projects } from "@/data";
import { slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";

const Work = () => {
    return (
        <section id="work" className="py-20 flex flex-col gap-14">
            <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInFromTop(0.8)}
                className="text-[2.2rem] sm:text-[3rem] md:text-[3.8rem] font-semibold text-center"
            >
                <span className="mr-4 bg-gradient-to-br bg-clip-text text-transparent from-purple-600 to-cyan-700">
                    My
                </span>
                Work
            </motion.h1>
            <div className="flex flex-wrap justify-center gap-y-20 gap-x-10">
                {Projects.map((project) => (
                    <WorkCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Work;
