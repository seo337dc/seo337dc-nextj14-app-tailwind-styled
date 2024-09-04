import Header from "@/components/Header";
import About from "@/components/views/About";
import Feature from "@/components/views/Feature";
import Introduce from "@/components/views/Introduce";
import ProjectsSection from "@/components/views/Projects";
import RWA from "@/components/views/RWA";
// import MainView from "@/components/views/main";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Introduce />
      <About />
      <RWA />
      <Feature />
      <ProjectsSection />
    </main>
  );
}
