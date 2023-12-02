import Image from "next/image";
import { motion } from "framer-motion";
import { slideInFromBottom } from "@/utils/motion";
interface Props {
    imgSrc: string;
    delay: number;
}

const SkillCard = ({ imgSrc, delay }: Props) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInFromBottom(delay)}
            className="rounded-lg h-20 w-20 flex items-center justify-center bg-gradient-to-br from-slate-500/10 to-slate-500/25 p-2"
        >
            <Image src={imgSrc} alt="Skill" height={40} width={45} />
        </motion.div>
    );
};

export default SkillCard;
