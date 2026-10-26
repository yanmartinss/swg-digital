import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "../ui/Button";
import { DashboardPreview } from "./DashboardPreview";
import { Navbar } from "./Navbar";

export function Hero() {
  return (
    <section className="hero-grid relative bg-lilac text-navy">
      <div className="hero-glow" aria-hidden="true" />
      <Navbar />
      <div
        id="inicio"
        className="relative z-10 mx-auto grid max-w-7xl items-center gap-20 px-6 pb-28 pt-12 lg:grid-cols-[1.2fr_.8fr] lg:px-10 lg:pb-40 lg:pt-20"
      >
        <div>
          <h1 className="text-6xl font-semibold leading-[0.92] tracking-[-0.04em] sm:text-7xl lg:text-[7rem]">
            A sua próxima grande presença digital.
          </h1>
          <p className="mt-10 max-w-xl text-xl leading-9 text-navy/75">
            Criamos sites e plataformas que unem estratégia, design e tecnologia
            para transformar empresas comuns em marcas impossíveis de ignorar.
          </p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="#contato">
              Quero tirar meu projeto do papel{" "}
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button href="#servicos" variant="ghost">
              Conheça nosso trabalho <ChevronDown className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <DashboardPreview />
      </div>
    </section>
  );
}
