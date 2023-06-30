import Hero from "@/components/Hero/Hero";
import Nav from "@/components/Nav/Nav";
import SkillsSection from "@/components/SkillsSection/SkillsSection";

export default function Home() {
  return (
    <main className="w-full lg:max-w-5xl flex flex-col gap-8">
      <Nav />
      <Hero />
      <SkillsSection />
    </main>
  );
}
