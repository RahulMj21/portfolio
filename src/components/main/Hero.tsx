import HeroContent from "@/components/sub/HeroContent";

const Hero = () => {
    return (
        <div className="relative flex flex-col h-full w-full">
            <video
                autoPlay
                loop
                muted
                className="rotate-180 absolute -top-[21.25rem] left-0 z-[1] w-full h-full object-cover"
            >
                <source src="/video/blackhole.webm" type="video/webm" />
            </video>
            <HeroContent />
        </div>
    );
};

export default Hero;
