import Container from "@/components/common/Container";
import About from "@/components/main/About";
import Header from "@/components/main/Header";
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import Work from "@/components/main/Work";

export default function Home() {
    return (
        <main className="h-full w-full">
            <Header />
            <div className="flex flex-col gap-20">
                <Hero />
                <Container>
                    <About />
                    <Skills />
                    <Work />
                    <div id="contact" className="h-screen">
                        Contact
                    </div>
                </Container>
            </div>
        </main>
    );
}
