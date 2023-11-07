import HeroContent from "@/components/sub/HeroContent";

const Hero = () => {
    return (
        <div className="relative flex flex-col h-full w-full">
            <div className="absolute top-0 h-screen w-full overflow-hidden">
                <div className="absolute h-[calc(100vh+15rem)] w-full">
                    <video
                        autoPlay
                        loop
                        muted
                        className="absolute z-[-1] rotate-180 -top-[42%] left-0 w-full h-full object-content"
                    >
                        <source src="/video/blackhole.webm" type="video/webm" />
                    </video>
                </div>
            </div>
            <HeroContent />
        </div>
    );
};

export default Hero;
