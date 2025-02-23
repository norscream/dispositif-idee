
import { Contact } from "@/components/Contact";
import { Nav } from "@/components/Nav";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <div className="pt-16">
        <Contact />
      </div>
    </div>
  );
}
