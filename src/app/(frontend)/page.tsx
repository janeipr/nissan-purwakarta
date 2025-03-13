import { Services, Navbar } from "../components";
import { Hero, Promos, Slider, Statistic } from "./_components";

export default function Home() {
  return (
    <>
      <section id="Header" className=" bg-portto-black relative">
        <Navbar />

        <Hero />
        <Slider />
        <Statistic />
      </section>

      <Promos />
      <Services />
      {/* <Workflow /> */}
      {/* <Testimonials /> */}
      {/* <FAQ /> */}
    </>
  );
}
