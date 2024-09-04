import Header from "@/components/Header";
import About from "@/components/views/About";
import Feature from "@/components/views/Feature";
import Introduce from "@/components/views/Introduce";
import PartnerSection from "@/components/views/Partner";
import ProjectsSection from "@/components/views/Projects";
import RWA from "@/components/views/RWA";
// import MainView from "@/components/views/main";

import Footer from "@/components/views/Footer";
import Layout from "@/components/common/Layout";

export default function Home() {
  return (
    <Layout>
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
    </Layout>
  );
}
