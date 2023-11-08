import Container from "@/components/common/Container";
import Header from "@/components/main/Header";
import Hero from "@/components/main/Hero";

export default function Home() {
    return (
        <main className="h-full w-full">
            <Header />
            <div className="flex flex-col gap-20">
                <Hero />
                <Container>
                    <div id="about" className="h-screen">
                        About
                    </div>
                    <div id="skills" className="h-screen">
                        Skills
                    </div>
                    <div id="work" className="h-screen">
                        Work
                    </div>
                    <div id="contact" className="h-screen">
                        Contact
                    </div>
                </Container>
            </div>
        </main>
    );
}
