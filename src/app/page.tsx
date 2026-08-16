import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Work } from "@/components/Work";
import { Journey } from "@/components/Journey";
import { Contact, Footer } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Work />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
