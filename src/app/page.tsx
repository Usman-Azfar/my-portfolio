import { Hero } from "@/components/hero/Hero";
import { Education } from "@/components/education/Education";
import { TechStack } from "@/components/stack/TechStack";
import { Experience } from "@/components/experience/Experience";
import { Research } from "@/components/research/Research";
import { Projects } from "@/components/projects/Projects";
import { Certifications } from "@/components/certifications/Certifications";
import { Leadership } from "@/components/impact/Leadership";
import { Achievements } from "@/components/achievements/Achievements";
import { About } from "@/components/about/About";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <TechStack />
      <Experience />
      <Research />
      <Projects />
      <Certifications />
      <Leadership />
      <Achievements />
    </>
  );
}
