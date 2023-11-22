"use client";

import WorkCard from "@/components/sub/WorkCard";
import { slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";

const Work = () => {
    return (
        <motion.section
            id="work"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="py-20 flex flex-col gap-14"
        >
            <motion.h1
                variants={slideInFromTop(0.5)}
                className="text-[2.2rem] sm:text-[3rem] md:text-[3.8rem] font-semibold text-center"
            >
                <span className="mr-4 bg-gradient-to-br bg-clip-text text-transparent from-purple-600 to-cyan-700">
                    My
                </span>
                Work
            </motion.h1>
            <div className="flex flex-wrap justify-center gap-y-20 gap-x-10">
                <WorkCard />
                <WorkCard />
                <WorkCard />
                <WorkCard />
                <WorkCard />
            </div>
        </motion.section>
    );
};

export default Work;
