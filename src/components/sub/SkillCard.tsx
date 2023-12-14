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
            className="relative rounded-lg h-28 w-28 flex flex-col gap-2 items-center justify-center bg-gradient-to-br from-slate-500/10 to-slate-500/25 p-3 overflow-hidden"
        >
            <Image src={img} alt="Skill" height={40} width={45} />
            <p className="whitespace-nowrap text-sm text-gray-300">{name}</p>
        </motion.div>
    );
};

export default SkillCard;
