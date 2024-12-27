import Navbar from "../components/Navbar";
import { Hero, Slider, Statistic } from "./_components";
import FAQ from "./_components/FAQ";
import Promos from "./_components/Promos";
import Services from "./_components/Services";
import Testimonials from "./_components/Testimonials";
import Workflow from "./_components/Workflow";

export default function Home() {
  return (
    <>
      <section
        id="Header"
        className="flex flex-col gap-[100px] bg-portto-black relative"
      >
        <Navbar />

        <Hero />
        <Slider />
        <Statistic />
      </section>

      <Promos />
      <Services />
      <Workflow />
      <Testimonials />
      <FAQ />
    </>
  );
}
