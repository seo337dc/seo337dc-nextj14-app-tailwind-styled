import Header from "@/components/Header";
import About from "@/components/views/About";
import Feature from "@/components/views/Feature";
import Introduce from "@/components/views/Introduce";
import PartnerSection from "@/components/views/Partner";
import ProjectsSection from "@/components/views/Projects";
import RWA from "@/components/views/RWA";
// import MainView from "@/components/views/main";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/views/Footer";

export default function Home() {
  return (
    <main className="relative max-[1024px]:overflow-hidden">
      <Header />
      <Introduce />
      <About />
      <RWA />
      <Feature />
      <ProjectsSection />
      <PartnerSection />
      <Footer />
    </main>
  );
}
