import Header from "@/components/Header";
import About from "@/components/views/About";
import Introduce from "@/components/views/Introduce";
import RWA from "@/components/views/RWA";
// import MainView from "@/components/views/main";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Introduce />
      <About />
      <RWA />
    </main>
  );
}
