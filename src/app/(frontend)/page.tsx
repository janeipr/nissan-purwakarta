import { Services, FAQ, Navbar, Testimonials } from "../components";
import { Hero, Promos, Slider, Statistic, Workflow } from "./_components";

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
