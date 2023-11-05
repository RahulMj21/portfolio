import Header from "@/components/main/Header";
import Hero from "@/components/main/Hero";

export default function Home() {
    return (
        <main className="h-full w-full">
            <Header />
            <div className="flex flex-col gap-20 h-[53.125rem]">
                <Hero />
            </div>
        </main>
    );
}
