"use client";

import { SkillsData } from "@/data";
import { slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";
import SkillCard from "@/components/sub/SkillCard";

const Skills = () => {
    return (
        <section id="skills" className="py-20 flex flex-col gap-24 md:my-28">
            {SkillsData.map(({ title, items }, idx) => {
                const headingDelay = 0.5 + (idx / 10) * 2;
                return (
                    <div
                        key={title}
                        className="flex flex-col items-center gap-8"
                    >
                        <motion.h1
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={slideInFromTop(headingDelay)}
                            className="text-[2.2rem] font-semibold text-center"
                        >
                            {title}
                        </motion.h1>
                        <div className="flex items-center justify-center gap-x-4 gap-y-5 flex-wrap">
                            {items.map(({ img, name }, index) => (
                                <SkillCard
                                    key={name}
                                    name={name}
                                    img={img}
                                    delay={headingDelay + (index + 1) / 20}
                                />
                            ))}
                        </div>
                    </div>
                );
            })}
        </section>
    );
};

export default Skills;
