"use client";

import { SkillsData } from "@/data";
import { slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";
import SkillCard from "@/components/sub/SkillCard";

const Skills = () => {
    return (
        <section id="skills" className="py-20 flex flex-col gap-20">
            {SkillsData.map(({ title, items }, idx) => {
                return (
                    <div
                        key={title}
                        className="flex flex-col items-center gap-8"
                    >
                        <motion.h1
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={slideInFromTop(0.5 + (idx / 10) * 2)}
                            className="text-[2.2rem] font-semibold text-center"
                        >
                            {title}
                        </motion.h1>
                        <motion.div className="flex items-center justify-center gap-x-4 gap-y-5 flex-wrap">
                            {items.map((item) => (
                                <SkillCard key={item} imgSrc={item} />
                            ))}
                        </motion.div>
                    </div>
                );
            })}
        </section>
    );
};

export default Skills;
