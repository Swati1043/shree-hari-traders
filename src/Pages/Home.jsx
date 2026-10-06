import Hero from "../components/Hero";
import Collections from "../components/Collections";
import TileFinder from "../components/TileFinder";
import Products from "../components/Products";
import WhyUs from "../components/WhyUs";
import About from "../components/About";
import CTA from "../components/CTA";

function Home() {
  return (
    <div className="min-h-screen bg-[#f7f4ef] text-[#252525]">
      <main>
        <Hero />
        <Collections />
        <TileFinder />
        <Products />
        <WhyUs />
        <About />
        <CTA />
      </main>
    </div>
  );
}

export default Home;