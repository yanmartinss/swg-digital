import { useEffect } from "react";
import { enableSmoothAnchorScroll } from "./lib/smoothScroll";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";
import { Hero } from "./components/sections/Hero";
import { Process } from "./components/sections/Process";
import { Services } from "./components/sections/Services";

function App() {
  useEffect(() => enableSmoothAnchorScroll(), []);

  return (
    <main className="min-h-screen overflow-hidden bg-paper text-navy">
      <Hero />
      <Services />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
