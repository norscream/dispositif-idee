
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/home/Hero";
import { Actions } from "@/components/home/Actions";
import { News } from "@/components/home/News";
import { Team } from "@/components/home/Team";
import { Contact } from "@/components/home/Contact";
import { Resources } from "@/components/home/Resources";
import { FAQ } from "@/components/home/FAQ";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <Hero />
      <Actions />
      <News />
      <Team />
      <Contact />
      <Resources />
      <FAQ />
    </div>
  );
}
