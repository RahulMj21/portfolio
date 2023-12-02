import Image from "next/image";

interface Props {
    imgSrc: string;
}

const SkillCard = ({ imgSrc }: Props) => {
    return (
        <div className="rounded-lg h-20 w-20 flex items-center justify-center bg-gradient-to-br from-slate-500/10 to-slate-500/25 p-2">
            <Image src={imgSrc} alt="Skill" height={40} width={45} />
        </div>
    );
};

export default SkillCard;
