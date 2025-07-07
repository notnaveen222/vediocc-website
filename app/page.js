import About from "@/Components/About/About";
import Consultation from "@/Components/Consultation/Consultation";
import Footer from "@/Components/Footer/Footer";
import Hero from "@/Components/Hero/Hero";
import Service from "@/Components/Service/Service";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <Consultation />
      <Footer />
    </>
  );
}
