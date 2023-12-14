import Image from "next/image";
import { motion } from "framer-motion";
import { slideInFromBottom } from "@/utils/motion";
interface Props {
    img: string;
    name: string;
    delay: number;
}

const SkillCard = ({ img, name, delay }: Props) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInFromBottom(delay)}
            className="relative rounded-lg h-20 w-20 flex items-center justify-center bg-gradient-to-br from-slate-500/10 to-slate-500/25 p-2 group"
        >
            <Image src={img} alt="Skill" height={40} width={45} />
            <p className="absolute whitespace-nowrap -top-8 bg-gradient-to-br from-slate-500/30 to-slate-500/50 rounded-md text-sm px-2 py-1 opacity-0 group-hover:opacity-100 transition-all duration-500">
                {name}
            </p>
        </motion.div>
    );
};

export default SkillCard;
