import HeroContent from "@/components/sub/HeroContent";

const Hero = () => {
    return (
        <div className="relative flex flex-col h-full w-full">
            <div className="absolute h-screen w-full">
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute rotate-180 -top-[40%] left-0 w-full h-full object-cover"
                >
                    <source src="/video/blackhole.webm" type="video/webm" />
                </video>
            </div>
            <HeroContent />
        </div>
    );
};

export default Hero;
