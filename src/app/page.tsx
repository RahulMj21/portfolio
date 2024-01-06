import Container from "@/components/common/Container";
import About from "@/components/main/About";
import Contact from "@/components/main/Contact";
import Footer from "@/components/main/Footer";
import Header from "@/components/main/Header";
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import Work from "@/components/main/Work";
import { Toaster } from "react-hot-toast";

export default function Home() {
    return (
        <main className="h-full w-full">
            <Toaster position="top-right" toastOptions={{ duration: 5000 }} />
            <Header />
            <div className="overflow-x-hidden flex flex-col gap-20 relative z-[20]">
                <Hero />
                <Container>
                    <About />
                    <Skills />
                    <Work />
                    <Contact />
                    <Footer />
                </Container>
            </div>
        </main>
    );
}
