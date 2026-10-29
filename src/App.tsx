import { useEffect } from "react";
import { enableSmoothAnchorScroll } from "./lib/smoothScroll";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";
import { Hero } from "./components/sections/Hero";
import { Process } from "./components/sections/Process";
import { Projects } from "./components/sections/Projects";
import { Services } from "./components/sections/Services";

function App() {
  useEffect(() => enableSmoothAnchorScroll(), []);

  return (
    <main className="min-h-screen overflow-hidden bg-canvas text-body">
      <Hero />
      <Services />
      <Projects />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
